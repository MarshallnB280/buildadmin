<?php

namespace app\admin\model\payconfig;

use think\Model;

/**
 * BaMashangChannels
 */
class BaMashangChannels extends Model
{
    // 表名
    protected $name = 'mashang_channels';

    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;


    public function getChannelsDecAttr($value): string
    {
        return !$value ? '' : htmlspecialchars_decode($value);
    }
}