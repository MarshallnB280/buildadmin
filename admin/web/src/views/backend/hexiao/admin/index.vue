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
    </div>
</template>

<script setup lang="ts">
import { ref, provide, onMounted } from 'vue'
import baTableClass from '/@/utils/baTable'
import { defaultOptButtons } from '/@/components/table'
import { baTableApi } from '/@/api/common'
import { useI18n } from 'vue-i18n'
import PopupForm from './popupForm.vue'
import Table from '/@/components/table/index.vue'
import TableHeader from '/@/components/table/header/index.vue'

const { t } = useI18n()
const tableRef = ref()
const optButtons = defaultOptButtons(['edit', 'delete'])
const baTable = new baTableClass(
    new baTableApi('/admin/hexiao.Admin/'),
    {
        pk: 'id',
        column: [
            { label: t('hexiao.admin.nickname'), prop: 'nickname', align: 'center', operatorPlaceholder: t('Fuzzy query'), operator: 'LIKE', sortable: false },
            { label: t('hexiao.admin.id'), prop: 'id', align: 'center', width: 70, operator: 'RANGE', sortable: 'custom' },
            { label: t('hexiao.admin.pid'), prop: 'pid', align: 'center', operator: 'RANGE', sortable: false },
            { label: t('hexiao.admin.id_line'), prop: 'id_line', align: 'center', operatorPlaceholder: t('Fuzzy query'), operator: 'LIKE', sortable: false },
            { label: t('hexiao.admin.robot_num'), prop: 'robot_num', align: 'center', operator: 'RANGE', sortable: false },
            { label: t('hexiao.admin.type'), prop: 'type', align: 'center', render: 'tag', operator: '=', sortable: false, replaceValue: { 0: 'type 0', 1: 'type 1', 2: 'type 2' } },
            { label: t('hexiao.admin.username'), prop: 'username', align: 'center', operatorPlaceholder: t('Fuzzy query'), operator: 'LIKE', sortable: false },
            { label: t('hexiao.admin.avatar'), prop: 'avatar', align: 'center', render: 'image', operator: false },
            { label: t('hexiao.admin.loginfailure'), prop: 'loginfailure', align: 'center', operator: 'RANGE', sortable: false },
            { label: t('hexiao.admin.lastlogintime'), prop: 'lastlogintime', align: 'center', render: 'datetime', operator: 'RANGE', sortable: 'custom', width: 160, timeFormat: 'yyyy-mm-dd hh:MM:ss' },
            { label: t('hexiao.admin.lastloginip'), prop: 'lastloginip', align: 'center', operatorPlaceholder: t('Fuzzy query'), operator: 'LIKE', sortable: false },
            { label: t('hexiao.admin.add_from_num'), prop: 'add_from_num', align: 'center', operator: 'RANGE', sortable: false },
            { label: t('hexiao.admin.balance'), prop: 'balance', align: 'center', operator: 'RANGE', sortable: false },
            { label: t('hexiao.admin.lock_amount'), prop: 'lock_amount', align: 'center', operator: 'RANGE', sortable: false },
            { label: t('hexiao.admin.total_inc'), prop: 'total_inc', align: 'center', operator: 'RANGE', sortable: false },
            { label: t('hexiao.admin.total_dec'), prop: 'total_dec', align: 'center', operator: 'RANGE', sortable: false },
            { label: t('hexiao.admin.createtime'), prop: 'createtime', align: 'center', render: 'datetime', operator: 'RANGE', sortable: 'custom', width: 160, timeFormat: 'yyyy-mm-dd hh:MM:ss' },
            { label: t('hexiao.admin.status'), prop: 'status', align: 'center', render: 'tag', operator: '=', sortable: false, replaceValue: { 1: t('hexiao.admin.status 1'), 0: t('hexiao.admin.status 0') } },
            { label: t('operate'), align: 'center', width: 100, render: 'buttons', buttons: optButtons, operator: false },
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
