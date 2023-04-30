<?php

namespace app\admin\model\payconfig;

use think\Model;

/**
 * PayProduct
 */
class PayProduct extends Model
{
    // 表名
    protected $name = 'pay_product';

    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;

    // 追加属性
    protected $append = [
        'payChannel',
    ];


    public function getPayChannelAttr($value, $row): array
    {
        return [
            'name' => \app\admin\model\payconfig\PayChannel::whereIn('id', $row['pay_channel_id'])->column('name'),
        ];
    }

    public function getPayChannelIdAttr($value): array
    {
        if ($value === '' || $value === null) return [];
        if (!is_array($value)) {
            return explode(',', $value);
        }
        return $value;
    }

    public function setPayChannelIdAttr($value): string
    {
        return is_array($value) ? implode(',', $value) : $value;
    }
}