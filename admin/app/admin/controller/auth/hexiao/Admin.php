<?php

namespace app\admin\controller\auth\hexiao;

use app\common\controller\Backend;

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

    public function initialize()
    {
        parent::initialize();
        $this->model = new \app\admin\model\hexiao\Admin;
    }


    /**
     * 若需重写查看、编辑、删除等方法，请复制 @see \app\admin\library\traits\Backend 中对应的方法至此进行重写
     */
}