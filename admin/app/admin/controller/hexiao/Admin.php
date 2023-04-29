<?php

namespace app\admin\controller\hexiao;

use ba\Random;
use ba\Tree;
use Exception;
use app\common\controller\Backend;
use think\db\exception\PDOException;
use think\exception\ValidateException;
use think\facade\Db;


/**
 * 账户管理
 *
 */
class Admin extends Backend
{
    /**
     * Admin模型对象
     * @var \app\admin\model\hexiao\Admin
     */
    protected $model = null;
    
    protected $preExcludeFields = ['id', 'pid', 'id_line', 'type', 'avatar', 'email', 'mobile', 'loginfailure', 'lastlogintime', 'lastloginip', 'balance', 'lock_amount', 'total_inc', 'total_dec', 'salt', 'motto', 'api_key', 'goole_key', 'createtime', 'updatetime'];

    protected $quickSearchField = ['id'];

    protected $tree = null;

    protected $user_type = 1;

    public function initialize()
    {
        parent::initialize();
        $this->model = new \app\admin\model\hexiao\Admin;
        $this->tree  = Tree::instance();
    }


    /**
     * 若需重写查看、编辑、删除等方法，请复制 @see \app\admin\library\traits\Backend 中对应的方法至此进行重写
     */

    public function index()
    {
        if ($this->request->param('select')) {
            $this->select();
        }

        $this->success('', [
            'list'   => $this->getList(),
            'remark' => get_route_remark(),
        ]);
    }


    public function add()
    {
        if ($this->request->isPost()) {
            $data = $this->request->post();
            if (!$data) {
                $this->error(__('Parameter %s can not be empty', ['']));
            }

            /**
             * 由于有密码字段-对方法进行重写
             * 数据验证
             */
            if ($this->modelValidate) {
                try {
                    $validate = str_replace("\\model\\", "\\validate\\", get_class($this->model));
                    $validate = new $validate;
                    $validate->scene('add')->check($data);
                } catch (ValidateException $e) {
                    $this->error($e->getMessage());
                }
            }

            $salt   = Random::build('alnum', 16);
            $passwd = encrypt_password($data['password'], $salt);

            $data   = $this->excludeFields($data);
            $data['group_arr'] = [5];
            $result = false;
            if ($data['group_arr']) $this->checkGroupAuth($data['group_arr']);
            Db::startTrans();
            try {
                $admin_info = $this->auth->getAdmin();
                if ($admin_info['type'] == $this->user_type){
                    $data['pid'] = $admin_info['id'];
                    $data['id_line'] = empty($admin_info['id_line']) ? ','.$admin_info['id'].',' : $admin_info['id_line'] . $admin_info['id'] . ',';
                }
                $data['type'] = $this->user_type;
                $data['avatar'] = '';
                $data['salt']     = $salt;
                $data['password'] = $passwd;
                $result           = $this->model->save($data);
                if ($data['group_arr']) {
                    $groupAccess = [];
                    foreach ($data['group_arr'] as $datum) {
                        $groupAccess[] = [
                            'uid'      => $this->model->id,
                            'group_id' => $datum,
                        ];
                    }
                    Db::name('admin_group_access')->insertAll($groupAccess);
                }
                Db::commit();
            } catch (ValidateException|PDOException|Exception $e) {
                Db::rollback();
                $this->error($e->getMessage());
            }
            if ($result !== false) {
                $this->success(__('Added successfully'));
            } else {
                $this->error(__('No rows were added'));
            }
        }

        $this->error(__('Parameter error'));
    }

    public function edit($id = null)
    {
        $row = $this->model->find($id);
        if (!$row) {
            $this->error(__('Record not found'));
        }

        $dataLimitAdminIds = $this->getDataLimitAdminIds();
        if ($dataLimitAdminIds && !in_array($row[$this->dataLimitField], $dataLimitAdminIds)) {
            $this->error(__('You have no permission'));
        }

        if ($this->request->isPost()) {
            $data = $this->request->post();
            if (!$data) {
                $this->error(__('Parameter %s can not be empty', ['']));
            }

            /**
             * 由于有密码字段-对方法进行重写
             * 数据验证
             */
            if ($this->modelValidate) {
                try {
                    $validate = str_replace("\\model\\", "\\validate\\", get_class($this->model));
                    $validate = new $validate;
                    $validate->scene('edit')->check($data);
                } catch (ValidateException $e) {
                    $this->error($e->getMessage());
                }
            }

            if ($this->auth->id == $data['id'] && $data['status'] == '0') {
                $this->error(__('Please use another administrator account to disable the current account!'));
            }

            if (isset($data['password']) && $data['password']) {
                $this->model->resetPassword($data['id'], $data['password']);
            }

            $groupAccess = [];
            if ($data['group_arr']) {
                $checkGroups = [];
                foreach ($data['group_arr'] as $datum) {
                    if (!in_array($datum, $row->group_arr)) {
                        $checkGroups[] = $datum;
                    }
                    $groupAccess[] = [
                        'uid'      => $id,
                        'group_id' => $datum,
                    ];
                }
                $this->checkGroupAuth($checkGroups);
            }

            Db::name('admin_group_access')
                ->where('uid', $id)
                ->delete();

            $data   = $this->excludeFields($data);
            $result = false;
            Db::startTrans();
            try {
                $result = $row->save($data);
                if ($groupAccess) Db::name('admin_group_access')->insertAll($groupAccess);
                Db::commit();
            } catch (PDOException|Exception $e) {
                Db::rollback();
                $this->error($e->getMessage());
            }
            if ($result !== false) {
                $this->success(__('Update successful'));
            } else {
                $this->error(__('No rows updated'));
            }
        }

        unset($row['salt'], $row['loginfailure']);
        $row['password'] = '';
        $this->success('', [
            'row' => $row
        ]);
    }

    /**
     * 删除
     * @param null $ids
     */
    public function del($ids = null)
    {
        if (!$this->request->isDelete() || !$ids) {
            $this->error(__('Parameter error'));
        }

        $dataLimitAdminIds = $this->getDataLimitAdminIds();
        if ($dataLimitAdminIds) {
            $this->model->where($this->dataLimitField, 'in', $dataLimitAdminIds);
        }

        $pk    = $this->model->getPk();
        $data  = $this->model->where($pk, 'in', $ids)->select();
        $count = 0;
        Db::startTrans();
        try {
            foreach ($data as $v) {
                if ($v->id != $this->auth->id) {
                    $count += $v->delete();
                    Db::name('admin_group_access')
                        ->where('uid', $v['id'])
                        ->delete();
                }
            }
            Db::commit();
        } catch (PDOException|Exception $e) {
            Db::rollback();
            $this->error($e->getMessage());
        }
        if ($count) {
            $this->success(__('Deleted successfully'));
        } else {
            $this->error(__('No rows were deleted'));
        }
    }

    public function checkGroupAuth(array $groups)
    {
        if ($this->auth->isSuperAdmin()) {
            return;
        }
        $authGroups = $this->auth->getAllAuthGroups('allAuth');
        foreach ($groups as $group) {
            if (!in_array($group, $authGroups)) {
                $this->error(__('You have no permission to add an administrator to this group!'));
            }
        }
    }

    protected function getList($where = []): array
    {
//        $pk      = $this->model->getPk();
//        $initKey = $this->request->get("initKey/s", $pk);
//
//        $ids = $this->auth->getRuleIds();
//
//        // 如果没有 * 则只获取用户拥有的规则
//        if (!in_array('*', $ids)) {
//            $where[] = ['id', 'in', $ids];
//        }

        $admin_info = $this->auth->getAdmin();

        // 读取用户组所有权限规则
        $rules = $this->model
            ->where($where)
            ->where(function ($query) use($admin_info){
                if ($admin_info['type'] == $this->user_type){
                    $query->where('id_line', 'like', '%,'.$admin_info['id'].',%');
                }
            })
            ->where('type', $this->user_type)
            ->order('id asc')
            ->select()->toArray();

        // 如果要求树状，此处先组装好 children
        return  $this->tree->assembleChild($rules);
    }
}