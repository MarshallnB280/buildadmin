<template>
    <div class="default-main ba-table-box">
        <el-alert class="ba-table-alert" v-if="baTable.table.remark" :title="baTable.table.remark" type="info" show-icon />

        <!-- 表格顶部菜单 -->
        <TableHeader
            :buttons="['refresh', 'add', 'edit', 'delete', 'comSearch', 'quickSearch', 'columnDisplay']"
            :quick-search-placeholder="t('quick Search Placeholder', { fields: t('payconfig.payProduct.quick Search Fields') })"
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
import router from '/@/router/index'
const { t } = useI18n()
const tableRef = ref()
const optButtons = defaultOptButtons(['edit', 'delete'])

// 自定义一个新的按钮
let newButton: OptButton[] = [
    {
        // 渲染方式:tipButton=带tip的按钮,confirmButton=带确认框的按钮,moveButton=移动按钮
        render: 'tipButton',
        // 按钮名称
        name: 'info',
        // 鼠标放置时的 title 提示
        title: '产品权重',
        // 直接在按钮内显示的文字，title 有值时可为空
        text: '产品权重',
        // 按钮类型，请参考 element plus 的按钮类型
        type: 'primary',
        // 按钮 icon
        icon: '',
        class: 'table-row-info',
        // tipButton 禁用 tip
        disabledTip: false,
        // 自定义点击事件
        click: (row: TableRow, field: TableColumn) => {
            console.log(row)
            console.log(row.id)
            // items.nickname = row.nickname
            // items.id = row.id
            // items.balance = row.balance
            // state.preview.show = true
            router.push({ name: 'payconfig/payProductWidth', query: { name: row.name, id: row.id } })
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
    new baTableApi('/admin/payconfig.PayProduct/'),
    {
        pk: 'id',
        column: [
            { type: 'selection', align: 'center', operator: false },
            { label: t('payconfig.payProduct.id'), prop: 'id', align: 'center', width: 70, operator: 'RANGE', sortable: 'custom' },
            {
                label: t('payconfig.payProduct.name'),
                prop: 'name',
                align: 'center',
                operatorPlaceholder: t('Fuzzy query'),
                operator: 'LIKE',
                sortable: false,
            },
            {
                label: t('payconfig.payProduct.pay_channel__name'),
                prop: 'payChannel.name',
                align: 'center',
                operatorPlaceholder: t('Fuzzy query'),
                render: 'tags',
                operator: 'LIKE',
                replaceValue: {},
            },
            {
                label: t('payconfig.payProduct.switch'),
                prop: 'switch',
                align: 'center',
                render: 'switch',
                operator: '=',
                sortable: false,
                replaceValue: { 0: t('payconfig.payProduct.switch 0'), 1: t('payconfig.payProduct.switch 1') },
            },
            // { label: t('operate'), align: 'center', width: 100, render: 'buttons', buttons: optButtons, operator: false },
            { label: t('operate'), align: 'center', width: 200, render: 'buttons', buttons: optBtn, operator: false },
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
    name: 'payconfig/payProduct',
})
</script>

<style scoped lang="scss"></style>
