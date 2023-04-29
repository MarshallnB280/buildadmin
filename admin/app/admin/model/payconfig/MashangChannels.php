<?php

namespace app\admin\model\payconfig;

use think\Model;

/**
 * MashangChannels
 */
class MashangChannels extends Model
{
    // 表名
    protected $name = 'mashang_channels';

    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;


    public function getChannelsDecAttr($value): string
    {
        return !$value ? '' : htmlspecialchars_decode($value);
    }

    public function getAddDecAttr($value): string
    {
        return !$value ? '' : htmlspecialchars_decode($value);
    }
}