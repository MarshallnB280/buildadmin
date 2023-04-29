<template>
    <div class="default-main ba-table-box">
        <el-alert class="ba-table-alert" v-if="baTable.table.remark" :title="baTable.table.remark" type="info" show-icon />

        <!-- 表格顶部菜单 -->
        <TableHeader
            :buttons="['refresh', 'add', 'edit', 'delete', 'comSearch', 'quickSearch', 'columnDisplay']"
            :quick-search-placeholder="t('quick Search Placeholder', { fields: t('payconfig.payChannel.quick Search Fields') })"
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
    new baTableApi('/admin/payconfig.PayChannel/'),
    {
        pk: 'id',
        column: [
            { type: 'selection', align: 'center', operator: false },
            { label: t('payconfig.payChannel.id'), prop: 'id', align: 'center', width: 70, operator: 'RANGE', sortable: 'custom' },
            { label: t('payconfig.payChannel.name'), prop: 'name', align: 'center', operatorPlaceholder: t('Fuzzy query'), operator: 'LIKE', sortable: false },
            { label: t('payconfig.payChannel.pay_api__name'), prop: 'payApi.name', align: 'center', operatorPlaceholder: t('Fuzzy query'), render: 'tags', operator: 'LIKE', replaceValue: { } },
            { label: t('payconfig.payChannel.mashang_channels__name'), prop: 'mashangChannels.name', align: 'center', operatorPlaceholder: t('Fuzzy query'), render: 'tags', operator: 'LIKE', replaceValue: { } },
            { label: t('payconfig.payChannel.pay_type'), prop: 'pay_type', align: 'center', render: 'tag', operator: '=', sortable: false, replaceValue: { qq: t('payconfig.payChannel.pay_type qq'), wechat: t('payconfig.payChannel.pay_type wechat'), alipay: t('payconfig.payChannel.pay_type alipay'), jd: t('payconfig.payChannel.pay_type jd'), other: t('payconfig.payChannel.pay_type other') } },
            { label: t('payconfig.payChannel.min_amount'), prop: 'min_amount', align: 'center', operator: 'RANGE', sortable: false },
            { label: t('payconfig.payChannel.max_amount'), prop: 'max_amount', align: 'center', operator: 'RANGE', sortable: false },
            { label: t('payconfig.payChannel.amount_type'), prop: 'amount_type', align: 'center', render: 'tag', operator: false, sortable: false, replaceValue: { 0: t('payconfig.payChannel.amount_type 0'), 1: t('payconfig.payChannel.amount_type 1'), 2: t('payconfig.payChannel.amount_type 2'), 3: t('payconfig.payChannel.amount_type 3'), 4: t('payconfig.payChannel.amount_type 4'), 5: t('payconfig.payChannel.amount_type 5') } },
            { label: t('payconfig.payChannel.fix_amount'), prop: 'fix_amount', align: 'center', operator: false, sortable: false },
            { label: t('payconfig.payChannel.device'), prop: 'device', align: 'center', render: 'tags', operator: false, sortable: false, replaceValue: { ios: t('payconfig.payChannel.device ios'), android: t('payconfig.payChannel.device android'), pc: t('payconfig.payChannel.device pc') } },
            { label: t('payconfig.payChannel.switch'), prop: 'switch', align: 'center', render: 'switch', operator: '=', sortable: false, replaceValue: { 0: t('payconfig.payChannel.switch 0'), 1: t('payconfig.payChannel.switch 1') } },
            { label: t('operate'), align: 'center', width: 100, render: 'buttons', buttons: optButtons, operator: false },
        ],
        dblClickNotEditColumn: [undefined, 'switch'],
    },
    {
        defaultItems: { pay_type: 'wechat', amount_type: '0', device: ['ios', 'android'], switch: '1' },
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
    name: 'payconfig/payChannel',
})
</script>

<style scoped lang="scss"></style>
