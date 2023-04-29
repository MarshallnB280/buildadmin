<?php

namespace app\admin\model\hexiao;

use think\Model;

/**
 * BaMashangChannel
 */
class BaMashangChannel extends Model
{
    // 表名
    protected $name = 'mashang_channel';

    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;

    protected static function onAfterInsert($model)
    {
        if ($model->weigh == 0) {
            $pk = $model->getPk();
            $model->where($pk, $model[$pk])->update(['weigh' => $model[$pk]]);
        }
    }

    public function admin()
    {
        return $this->belongsTo(\app\admin\model\hexiao\Admin::class, 'admin_id', 'id');
    }

    public function mashangChannels()
    {
        return $this->belongsTo(\app\admin\model\payconfig\BaMashangChannels::class, 'mashang_channels_id', 'id');
    }
}