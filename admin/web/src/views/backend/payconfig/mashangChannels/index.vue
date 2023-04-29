<template>
    <div class="default-main ba-table-box">
        <el-alert class="ba-table-alert" v-if="baTable.table.remark" :title="baTable.table.remark" type="info" show-icon />

        <!-- 表格顶部菜单 -->
        <TableHeader
            :buttons="['refresh', 'add', 'edit', 'delete', 'comSearch', 'quickSearch', 'columnDisplay']"
            :quick-search-placeholder="t('quick Search Placeholder', { fields: t('payconfig.mashangChannels.quick Search Fields') })"
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
    new baTableApi('/admin/payconfig.MashangChannels/'),
    {
        pk: 'id',
        column: [
            { type: 'selection', align: 'center', operator: false },
            { label: t('payconfig.mashangChannels.id'), prop: 'id', align: 'center', width: 70, operator: 'RANGE', sortable: 'custom' },
            { label: t('payconfig.mashangChannels.code'), prop: 'code', align: 'center', operatorPlaceholder: t('Fuzzy query'), operator: 'LIKE', sortable: false },
            { label: t('payconfig.mashangChannels.name'), prop: 'name', align: 'center', operatorPlaceholder: t('Fuzzy query'), operator: 'LIKE', sortable: false },
            { label: t('payconfig.mashangChannels.logo'), prop: 'logo', align: 'center', render: 'image', operator: false },
            { label: t('payconfig.mashangChannels.channels_dec'), prop: 'channels_dec', align: 'center', operator: false },
            { label: t('payconfig.mashangChannels.is_budan'), prop: 'is_budan', align: 'center', render: 'tag', operator: '=', sortable: false, replaceValue: { 0: t('payconfig.mashangChannels.is_budan 0'), 1: t('payconfig.mashangChannels.is_budan 1') } },
            { label: t('payconfig.mashangChannels.fail_auto_close_num'), prop: 'fail_auto_close_num', align: 'center', operator: false, sortable: false },
            { label: t('payconfig.mashangChannels.is_single'), prop: 'is_single', align: 'center', render: 'tag', operator: '=', sortable: false, replaceValue: { 0: t('payconfig.mashangChannels.is_single 0'), 1: t('payconfig.mashangChannels.is_single 1') } },
            { label: t('payconfig.mashangChannels.limit_type'), prop: 'limit_type', align: 'center', render: 'tag', operator: false, sortable: false, replaceValue: { 0: t('payconfig.mashangChannels.limit_type 0'), 1: t('payconfig.mashangChannels.limit_type 1'), 2: t('payconfig.mashangChannels.limit_type 2'), 3: t('payconfig.mashangChannels.limit_type 3'), 4: t('payconfig.mashangChannels.limit_type 4') } },
            { label: t('payconfig.mashangChannels.limit_type_info'), prop: 'limit_type_info', align: 'center', render: 'tag', operator: false, sortable: false, replaceValue: { 0: t('payconfig.mashangChannels.limit_type_info 0'), 1: t('payconfig.mashangChannels.limit_type_info 1') } },
            { label: t('payconfig.mashangChannels.limit_val'), prop: 'limit_val', align: 'center', operator: false, sortable: false },
            { label: t('payconfig.mashangChannels.switch'), prop: 'switch', align: 'center', render: 'switch', operator: '=', sortable: false, replaceValue: { 0: t('payconfig.mashangChannels.switch 0'), 1: t('payconfig.mashangChannels.switch 1') } },
            { label: t('operate'), align: 'center', width: 100, render: 'buttons', buttons: optButtons, operator: false },
        ],
        dblClickNotEditColumn: [undefined, 'switch'],
    },
    {
        defaultItems: { is_budan: '0', is_single: '0', limit_type: '0', limit_type_info: '0', switch: '1' },
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
    name: 'payconfig/mashangChannels',
})
</script>

<style scoped lang="scss"></style>
