<?php

namespace app\admin\controller\payconfig;

use app\common\controller\Backend;

/**
 * 支付接口
 *
 */
class BaPayApu extends Backend
{
    /**
     * BaPayApu模型对象
     * @var \app\admin\model\payconfig\BaPayApu
     */
    protected $model = null;
    
    protected $preExcludeFields = ['id'];

    protected $quickSearchField = ['id'];

    public function initialize()
    {
        parent::initialize();
        $this->model = new \app\admin\model\payconfig\BaPayApu;
    }


    /**
     * 若需重写查看、编辑、删除等方法，请复制 @see \app\admin\library\traits\Backend 中对应的方法至此进行重写
     */
}