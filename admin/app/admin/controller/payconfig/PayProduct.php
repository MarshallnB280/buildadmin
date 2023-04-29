<?php

namespace app\admin\controller\payconfig;

use app\common\controller\Backend;

/**
 * 支付产品
 *
 */
class PayProduct extends Backend
{
    /**
     * PayProduct模型对象
     * @var \app\admin\model\payconfig\PayProduct
     */
    protected $model = null;
    
    protected $preExcludeFields = ['id'];

    protected $quickSearchField = ['id'];

    public function initialize()
    {
        parent::initialize();
        $this->model = new \app\admin\model\payconfig\PayProduct;
    }


    /**
     * 若需重写查看、编辑、删除等方法，请复制 @see \app\admin\library\traits\Backend 中对应的方法至此进行重写
     */
}