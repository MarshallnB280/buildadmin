<template>
    <div class="default-main ba-table-box">
        <el-alert class="ba-table-alert" v-if="baTable.table.remark" :title="baTable.table.remark" type="info" show-icon />

        <!-- 表格顶部菜单 -->
        <TableHeader
            :buttons="['refresh', 'add', 'edit', 'delete', 'comSearch', 'quickSearch', 'columnDisplay']"
            :quick-search-placeholder="t('quick Search Placeholder', { fields: t('hexiao.mashangChannel.quick Search Fields') })"
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
const optButtons = defaultOptButtons(['weigh-sort', 'edit', 'delete'])
const baTable = new baTableClass(
    new baTableApi('/admin/hexiao.MashangChannel/'),
    {
        pk: 'id',
        column: [
            { type: 'selection', align: 'center', operator: false },
            { label: t('hexiao.mashangChannel.id'), prop: 'id', align: 'center', width: 70, operator: 'RANGE', sortable: 'custom' },
            { label: t('hexiao.mashangChannel.admin_id'), prop: 'admin_id', align: 'center', operatorPlaceholder: t('Fuzzy query'), operator: 'LIKE' },
            { label: t('hexiao.mashangChannel.admin__nickname'), prop: 'admin.nickname', align: 'center', operatorPlaceholder: t('Fuzzy query'), render: 'tags', operator: 'LIKE', replaceValue: { } },
            { label: t('hexiao.mashangChannel.mashang_channels_id'), prop: 'mashang_channels_id', align: 'center', operatorPlaceholder: t('Fuzzy query'), operator: 'LIKE' },
            { label: t('hexiao.mashangChannel.weigh'), prop: 'weigh', align: 'center', operator: false, sortable: 'custom' },
            { label: t('hexiao.mashangChannel.switch'), prop: 'switch', align: 'center', render: 'switch', operator: '=', sortable: false, replaceValue: { 0: t('hexiao.mashangChannel.switch 0'), 1: t('hexiao.mashangChannel.switch 1') } },
            { label: t('operate'), align: 'center', width: 140, render: 'buttons', buttons: optButtons, operator: false },
        ],
        dblClickNotEditColumn: [undefined, 'switch'],
        defaultOrder: { prop: 'weigh', order: 'desc' },
    },
    {
        defaultItems: { switch: '1' },
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
    name: 'hexiao/mashangChannel',
})
</script>

<style scoped lang="scss"></style>
