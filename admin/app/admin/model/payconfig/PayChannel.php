<?php

namespace app\admin\model\payconfig;

use think\Model;

/**
 * PayChannel
 */
class PayChannel extends Model
{
    // 表名
    protected $name = 'pay_channel';

    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;

    // 追加属性
    protected $append = [
        'mashangChannels',
    ];


    public function getMashangChannelsAttr($value, $row): array
    {
        return [
            'name' => \app\admin\model\payconfig\MashangChannels::whereIn('id', $row['mashang_channels_id'])->column('name'),
        ];
    }

    public function getMashangChannelsIdAttr($value): array
    {
        if ($value === '' || $value === null) return [];
        if (!is_array($value)) {
            return explode(',', $value);
        }
        return $value;
    }

    public function setMashangChannelsIdAttr($value): string
    {
        return is_array($value) ? implode(',', $value) : $value;
    }

    public function getSysRateAttr($value): float
    {
        return (float)$value;
    }

    public function getChannelRateAttr($value): float
    {
        return (float)$value;
    }

    public function getDeviceAttr($value): array
    {
        if ($value === '' || $value === null) return [];
        if (!is_array($value)) {
            return explode(',', $value);
        }
        return $value;
    }

    public function setDeviceAttr($value): string
    {
        return is_array($value) ? implode(',', $value) : $value;
    }

    public function payApi()
    {
        return $this->belongsTo(\app\admin\model\payconfig\PayApi::class, 'pay_api_id', 'id');
    }
}