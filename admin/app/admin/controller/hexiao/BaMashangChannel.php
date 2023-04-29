<?php

namespace app\admin\controller\hexiao;

use app\common\controller\Backend;

/**
 * 核销授权
 *
 */
class BaMashangChannel extends Backend
{
    /**
     * BaMashangChannel模型对象
     * @var \app\admin\model\hexiao\BaMashangChannel
     */
    protected $model = null;
    
    protected $defaultSortField = 'weigh,desc';

    protected $preExcludeFields = ['id'];

    protected $withJoinTable = ['admin', 'mashangChannels'];

    protected $quickSearchField = ['id'];

    public function initialize()
    {
        parent::initialize();
        $this->model = new \app\admin\model\hexiao\BaMashangChannel;
    }

    /**
     * 查看
     */
    public function index()
    {
        $this->request->filter(['strip_tags', 'trim']);
        // 如果是select则转发到select方法,若select未重写,其实还是继续执行index
        if ($this->request->param('select')) {
            $this->select();
        }

        list($where, $alias, $limit, $order) = $this->queryBuilder();
        $res = $this->model
            ->withJoin($this->withJoinTable, $this->withJoinType)
            ->alias($alias)
            ->where($where)
            ->order($order)
            ->paginate($limit);
        $res->visible(['admin' => ['nickname'],'mashangChannels' => ['name']]);

        $this->success('', [
            'list'   => $res->items(),
            'total'  => $res->total(),
            'remark' => get_route_remark(),
        ]);
    }

    /**
     * 若需重写查看、编辑、删除等方法，请复制 @see \app\admin\library\traits\Backend 中对应的方法至此进行重写
     */
}