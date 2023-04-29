<?php

namespace app\admin\controller\hexiao;

use ba\Random;
use ba\Tree;
use Exception;
use app\common\controller\Backend;
use app\admin\model\Admin as AdminModel;
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
     * @var AdminModel
     */
    protected $model = null;

    protected $preExcludeFields = ['createtime', 'updatetime', 'password', 'salt', 'loginfailure', 'lastlogintime', 'lastloginip'];

    protected $quickSearchField = ['username', 'nickname'];

    protected $user_type = '2';

    /**
     * @var Tree
     */
    protected $tree = null;

    /**
     * 开启数据限制
     */
    protected $dataLimit = 'allAuthAndOthers';

    protected $dataLimitField = 'id';

    /**
     * 是否组装Tree
     * @var bool
     */
    protected $assembleTree;

    protected $modelValidate = false;

    public function initialize()
    {
        parent::initialize();
        $this->model = new AdminModel();
        $this->tree  = Tree::instance();
    }


    /**
     * 若需重写查看、编辑、删除等方法，请复制 @see \app\admin\library\traits\Backend 中对应的方法至此进行重写
     */

    /**
     * 查看
     */
    public function index()
    {
        if ($this->request->param('select')) {
            $this->select();
        }

        $this->success('', [
            'list'   => $this->getFroms(),
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
            $data['group_arr'] = [5];
            $data['avatar'] = '/storage/default/20230424/e8c439a8a578a51290de558c69c1298ffa1d9050.jpg';
            $data['type'] = '2';
            $data['motto'] = '';
            $data['add_from_num'] = $data['add_from_num'] ?? 0;

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

            $salt = Random::build('alnum', 16);
            $passwd = encrypt_password($data['password'], $salt);

            $data = $this->excludeFields($data);
            $result = false;
            if ($data['group_arr']) $this->checkGroupAuth($data['group_arr']);
            Db::startTrans();
            try {
                $admin_info = $this->auth->getAdmin();

                $data['pid'] = 0;

                //核销添加账号
                if ($admin_info['type'] == $this->user_type){
                    $data['pid'] = $admin_info['id'];
                    $data['id_line'] = empty($admin_info['id_line']) ? ','.$admin_info['id'].',' : $admin_info['id_line'] . $admin_info['id'] . ',';

                    //获取添加限制
                    $top_ids = array_filter(explode(',',$data['id_line']));
                    $top_id = empty($top_ids) ? $admin_info['id'] :current($top_ids);
                    $add_from_num = $top_id == $admin_info['id'] ? $admin_info['add_from_num'] : db()->name('admin')->where('id', $top_id)->value('add_from_num');
                    if (!empty($add_from_num) && count($top_ids) >= $add_from_num)
                        throw new \think\Exception('可发展下级已达上限');
                }

                $data['salt'] = $salt;
                $data['password'] = $passwd;
                $result = $this->model->save($data);
                if ($data['group_arr']) {
                    $groupAccess = [];
                    foreach ($data['group_arr'] as $datum) {
                        $groupAccess[] = [
                            'uid' => $this->model->id,
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

    protected function getFroms(): array
    {
        list($where, $alias, $limit, $order) = $this->queryBuilder();
        $admin_info = $this->auth->getAdmin();

        // 读取用户组所有权限规则
        $list = $this->model
            ->where('type', $this->user_type)
            ->where($where)
            ->alias($alias)
            ->where(function ($query) use($admin_info){
                if ($admin_info['type'] == $this->user_type){
                    $query->where('id_line', 'like', '%,'.$admin_info['id'].',%');
                }
            })
            ->order('id asc')
            ->select()->toArray();
        if ($list){
            foreach ($list as $key => $val) {
                $list[$key]['id_line'] = trim($val['id_line'], ',');
            }
        }
        // 如果要求树状，此处先组装好 children
        return $this->tree->assembleChild($list);
    }
}