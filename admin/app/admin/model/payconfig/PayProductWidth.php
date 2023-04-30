<?php

namespace app\admin\model\payconfig;

use think\Model;

/**
 * PayProductWidth
 */
class PayProductWidth extends Model
{
    // 表名
    protected $name = 'pay_product_width';

    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;


    public function payProduct()
    {
        return $this->belongsTo(\app\admin\model\payconfig\PayProduct::class, 'pay_product_id', 'id');
    }

    public function payChannel()
    {
        return $this->belongsTo(\app\admin\model\payconfig\PayChannel::class, 'pay_channel_id', 'id');
    }
}