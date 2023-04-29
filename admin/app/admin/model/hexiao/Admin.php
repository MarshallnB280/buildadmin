<?php

namespace app\admin\model\hexiao;

use think\Model;

/**
 * Admin
 */
class Admin extends Model
{
    // 表名
    protected $name = 'admin';

    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;

    // 字段类型转换
    protected $type = [
        'lastlogintime' => 'timestamp:Y-m-d H:i:s',
    ];

}