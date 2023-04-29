<?php

namespace app\admin\controller;

use app\common\controller\Backend;

/**
 * 管理员管理
 *
 */
class BaAdmin extends Backend
{
    /**
     * BaAdmin模型对象
     * @var \app\admin\model\BaAdmin
     */
    protected $model = null;
    
    protected $preExcludeFields = ['id', 'id_line', 'type', 'avatar', 'email', 'mobile', 'loginfailure', 'lastlogintime', 'lastloginip', 'balance', 'lock_amount', 'total_inc', 'total_dec', 'salt', 'motto', 'createtime', 'updatetime'];

    protected $quickSearchField = ['id'];

    public function initialize()
    {
        parent::initialize();
        $this->model = new \app\admin\model\BaAdmin;
    }


    /**
     * 若需重写查看、编辑、删除等方法，请复制 @see \app\admin\library\traits\Backend 中对应的方法至此进行重写
     */
}