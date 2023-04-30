<template>
    <div class="default-main ba-table-box">
        <el-alert class="ba-table-alert" v-if="baTable.table.remark" :title="baTable.table.remark" type="info" show-icon />

        <!-- 表格顶部菜单 -->
        <TableHeader
            :buttons="['refresh', 'add', 'edit', 'delete', 'comSearch', 'quickSearch', 'columnDisplay']"
            :quick-search-placeholder="t('quick Search Placeholder', { fields: t('hexiao.admin.quick Search Fields') })"
        />

        <!-- 表格 -->
        <!-- 要使用`el-table`组件原有的属性，直接加在Table标签上即可 -->
        <Table ref="tableRef" />

        <!-- 表单 -->
        <PopupForm />

        <!-- <MashangChannel v-bind:adminId="state.preview.adminId" /> -->
        <el-dialog v-model="state.preview.show" title="标题" :append-to-body="true" :center="true" class="ba-upload-preview">
            <div class="ba-upload-preview-scroll ba-scroll-style" style="height: 50vh">
                <MashangChannel :adminId="state.preview.adminId" />
            </div>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
// import { ref, reactive, onMounted, watch, useSlots } from 'vue'
import { ref, reactive, provide, onMounted, nextTick } from 'vue'
import baTableClass from '/@/utils/baTable'
import { defaultOptButtons } from '/@/components/table'
import { baTableApi } from '/@/api/common'
import { useI18n } from 'vue-i18n'
import PopupForm from './popupForm.vue'
import Table from '/@/components/table/index.vue'
import TableHeader from '/@/components/table/header/index.vue'
import MashangChannel from '../mashangChannel/index.vue'
import router from '/@/router/index'
const { t } = useI18n()
const tableRef = ref()
const optButtons = defaultOptButtons(['edit', 'delete'])

const state: {
    key: string
    // 返回值类型，通过v-model类型动态计算
    defaultReturnType: 'string' | 'array'
    // 预览弹窗
    preview: {
        show: boolean
        url: string
        adminId: string
        show_: boolean
    }
} = reactive({
    key: '0',
    defaultReturnType: 'string',
    preview: {
        show: false,
        url: '/admin/hexiao/mashangChannel',
        adminId: '100',
        show_: true,
    },
})

// 自定义一个新的按钮
let newButton: OptButton[] = [
    {
        // 渲染方式:tipButton=带tip的按钮,confirmButton=带确认框的按钮,moveButton=移动按钮
        render: 'tipButton',
        // 按钮名称
        name: 'info',
        // 鼠标放置时的 title 提示
        title: '产品授权',
        // 直接在按钮内显示的文字，title 有值时可为空
        text: '产品授权',
        // 按钮类型，请参考 element plus 的按钮类型
        type: 'primary',
        // 按钮 icon
        icon: '',
        class: 'table-row-info',
        // tipButton 禁用 tip
        disabledTip: false,
        // 自定义点击事件
        click: (row: TableRow, field: TableColumn) => {
            // alert(1)
            console.log(row.id)
            router.push({ name: 'hexiao/mashangChannel', query: { adminId: row.id } })
            // nextTick(() => {
            //     state.preview.show = true
            // })
        },
        // 按钮是否显示，请返回布尔值
        display: (row: TableRow, field: TableColumn) => {
            return true
        },
        // 按钮是否禁用，请返回布尔值
        disabled: (row: TableRow, field: TableColumn) => {
            return false
        },
        // 自定义el-button属性
        attr: {},
    },
]

// 新按钮合入到默认的按钮数组
var optBtn = newButton.concat(optButtons)

const baTable = new baTableClass(
    new baTableApi('/admin/hexiao.Admin/'),
    {
        pk: 'id',
        column: [
            {
                label: t('hexiao.admin.nickname'),
                prop: 'nickname',
                align: 'center',
                operatorPlaceholder: t('Fuzzy query'),
                operator: 'LIKE',
                sortable: false,
            },
            { label: t('hexiao.admin.id'), prop: 'id', align: 'center', width: 70, operator: 'RANGE', sortable: 'custom' },
            { label: t('hexiao.admin.pid'), prop: 'pid', align: 'center', operator: 'RANGE', sortable: false },
            {
                label: t('hexiao.admin.id_line'),
                prop: 'id_line',
                align: 'center',
                operatorPlaceholder: t('Fuzzy query'),
                operator: 'LIKE',
                sortable: false,
            },
            { label: t('hexiao.admin.robot_num'), prop: 'robot_num', align: 'center', operator: 'RANGE', sortable: false },
            {
                label: t('hexiao.admin.username'),
                prop: 'username',
                align: 'center',
                operatorPlaceholder: t('Fuzzy query'),
                operator: 'LIKE',
                sortable: false,
            },
            { label: t('hexiao.admin.avatar'), prop: 'avatar', align: 'center', render: 'image', operator: false },
            { label: t('hexiao.admin.loginfailure'), prop: 'loginfailure', align: 'center', operator: 'RANGE', sortable: false },
            {
                label: t('hexiao.admin.lastlogintime'),
                prop: 'lastlogintime',
                align: 'center',
                render: 'datetime',
                operator: 'RANGE',
                sortable: 'custom',
                width: 160,
                timeFormat: 'yyyy-mm-dd hh:MM:ss',
            },
            {
                label: t('hexiao.admin.lastloginip'),
                prop: 'lastloginip',
                align: 'center',
                operatorPlaceholder: t('Fuzzy query'),
                operator: 'LIKE',
                sortable: false,
            },
            { label: t('hexiao.admin.add_from_num'), prop: 'add_from_num', align: 'center', operator: 'RANGE', sortable: false },
            { label: t('hexiao.admin.balance'), prop: 'balance', align: 'center', operator: 'RANGE', sortable: false },
            { label: t('hexiao.admin.lock_amount'), prop: 'lock_amount', align: 'center', operator: 'RANGE', sortable: false },
            { label: t('hexiao.admin.total_inc'), prop: 'total_inc', align: 'center', operator: 'RANGE', sortable: false },
            { label: t('hexiao.admin.total_dec'), prop: 'total_dec', align: 'center', operator: 'RANGE', sortable: false },
            {
                label: t('hexiao.admin.createtime'),
                prop: 'createtime',
                align: 'center',
                render: 'datetime',
                operator: 'RANGE',
                sortable: 'custom',
                width: 160,
                timeFormat: 'yyyy-mm-dd hh:MM:ss',
            },
            {
                label: t('hexiao.admin.status'),
                prop: 'status',
                align: 'center',
                render: 'tag',
                operator: '=',
                sortable: false,
                replaceValue: { 1: t('hexiao.admin.status 1'), 0: t('hexiao.admin.status 0') },
            },
            { label: t('operate'), align: 'center', width: 300, render: 'buttons', buttons: optBtn, operator: false },
        ],
        dblClickNotEditColumn: [undefined],
    },
    {
        defaultItems: { status: '1' },
    }
)

provide('baTable', baTable)

onMounted(() => {
    baTable.table.ref = tableRef.value
    baTable.mount()
    baTable.getIndex()?.then(() => {
        baTable.initSort()
        baTable.dragSort()
    })
})
</script>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'hexiao/admin',
})
</script>

<style scoped lang="scss"></style>
