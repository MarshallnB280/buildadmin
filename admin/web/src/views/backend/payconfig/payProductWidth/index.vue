<template>
    <div class="default-main ba-table-box">
        <el-alert class="ba-table-alert" v-if="baTable.table.remark" :title="baTable.table.remark" type="info" show-icon />

        <!-- 表格顶部菜单 -->
        <TableHeader
            :buttons="['refresh', 'add', 'edit', 'delete', 'comSearch', 'quickSearch', 'columnDisplay']"
            :quick-search-placeholder="t('quick Search Placeholder', { fields: t('payconfig.payProductWidth.quick Search Fields') })"
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
    new baTableApi('/admin/payconfig.PayProductWidth/'),
    {
        pk: 'id',
        column: [
            { type: 'selection', align: 'center', operator: false },
            { label: t('payconfig.payProductWidth.id'), prop: 'id', align: 'center', width: 70, operator: 'RANGE', sortable: 'custom' },
            { label: t('payconfig.payProductWidth.pay_product_id'), prop: 'pay_product_id', align: 'center', operator: false },
            { label: t('payconfig.payProductWidth.pay_product__name'), prop: 'payProduct.name', align: 'center', operatorPlaceholder: t('Fuzzy query'), render: 'tags', operator: 'LIKE', replaceValue: { } },
            { label: t('payconfig.payProductWidth.pay_channel_id'), prop: 'pay_channel_id', align: 'center', operator: false },
            { label: t('payconfig.payProductWidth.pay_channel__name'), prop: 'payChannel.name', align: 'center', operatorPlaceholder: t('Fuzzy query'), render: 'tags', operator: 'LIKE', replaceValue: { } },
            { label: t('payconfig.payProductWidth.width'), prop: 'width', align: 'center', operator: false, sortable: false },
            { label: t('payconfig.payProductWidth.switch'), prop: 'switch', align: 'center', render: 'switch', operator: '=', sortable: false, replaceValue: { 0: t('payconfig.payProductWidth.switch 0'), 1: t('payconfig.payProductWidth.switch 1') } },
            { label: t('operate'), align: 'center', width: 100, render: 'buttons', buttons: optButtons, operator: false },
        ],
        dblClickNotEditColumn: [undefined, 'switch'],
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
    name: 'payconfig/payProductWidth',
})
</script>

<style scoped lang="scss"></style>
