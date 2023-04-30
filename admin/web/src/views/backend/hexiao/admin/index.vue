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
                <el-scrollbar height="96vh">
                    <el-form class="form-box" :model="items" label-width="120px" label-position="right">
                        <!-- 以下四种输入框使用了 el-input -->
                        <!-- input-attr 属性演示了如何添加 el-input 组件原有的属性 -->
                        <FormItem
                            label="昵称"
                            type="string"
                            v-model="items.nickname"
                            :input-attr="{
                                maxlength: 20,
                                disabled: true, // 不允许输入的输入框
                                clearable: true, // 事件以on开头，并使用大写驼峰的事件名称定义，不支持在此处单独传递$event（若需要请改用el-form-item）
                            }"
                            placeholder="昵称"
                        />
                        <FormItem
                            label="ID"
                            type="string"
                            v-model="items.id"
                            :input-attr="{
                                maxlength: 20,
                                disabled: true, // 不允许输入的输入框
                                clearable: true, // 事件以on开头，并使用大写驼峰的事件名称定义，不支持在此处单独传递$event（若需要请改用el-form-item）
                            }"
                            placeholder="ID"
                        />

                        <FormItem
                            label="当前积分"
                            type="string"
                            v-model.number="items.balance"
                            :input-attr="{ clearable: true, size: 'large', maxlength: 10, disabled: true }"
                        />
                        <FormItem
                            label="变更积分"
                            type="number"
                            v-model.number="items.number"
                            :input-attr="{ clearable: true, size: 'large', maxlength: 8 }"
                            placeholder="输入需要增加/扣除的积分"
                        />
                        <FormItem
                            label="谷歌验证"
                            type="string"
                            v-model.number="items.googleKey"
                            :input-attr="{ clearable: true, size: 'large', maxlength: 6 }"
                            placeholder="输入6位谷歌秘钥"
                        />
                        <!-- <FormItem label="textarea" type="textarea" v-model="items.textarea" :input-attr="{ 'show-word-limit': true, rows: 3 }" /> -->

                        <el-button v-blur @click="onSubmit(items)" type="primary" class="btn_"> + 添加积分 </el-button>
                        <el-button v-blur @click="onSubmit(items)" type="danger" class="btn_"> - 扣除积分 </el-button>
                    </el-form>
                </el-scrollbar>
            </div>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import FormItem from '/@/components/formItem/index.vue'
import createAxios from '/@/utils/axios'
import { userUser } from '/@/api/controllerUrls'
// import { ref, reactive, onMounted, watch, useSlots } from 'vue'
import { ref, reactive, provide, onMounted, nextTick } from 'vue'
import baTableClass from '/@/utils/baTable'
import { defaultOptButtons } from '/@/components/table'
import { baTableApi } from '/@/api/common'
import { useI18n } from 'vue-i18n'
import PopupForm from './popupForm.vue'
import Table from '/@/components/table/index.vue'
import TableHeader from '/@/components/table/header/index.vue'
// import MashangChannel from '../mashangChannel/index.vue'
import router from '/@/router/index'
const { t } = useI18n()
const tableRef = ref()
const optButtons = defaultOptButtons(['edit', 'delete'])

const items = reactive({
    nickname: '',
    id: '',
    balance: 1,
    googleKey: '',
    number: '',
})

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

// 积分变更-表单提交
const onSubmit = (data: anyObj) => {
    console.log(data)
    return createAxios(
        {
            url: '/index.php/admin/auth.menu/index',
            method: 'post',
            data: data,
        },
        {
            CancelDuplicateRequest: true, // 是否开启取消重复请求（连续的重复请求会被自动取消）
            loading: true, // 是否开启loading层效果
            showCodeMessage: true, // 是否开启code!=0时的信息直接提示（比如操作失败直接弹窗提示接口返回的消息，就不需要再写代码弹窗提示了）
            showErrorMessage: true, // 是否开启接口错误信息直接提示，如接口404
        },
        {
            text: '正在全力提交中...',
        }
    ).then((res) => {
        // 请求回调-大部分情况不需要手动处理
        console.log(res)
        state.preview.show = false
    })
}

// 然后就可以

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
    {
        // 渲染方式:tipButton=带tip的按钮,confirmButton=带确认框的按钮,moveButton=移动按钮
        render: 'tipButton',
        // 按钮名称
        name: 'info',
        // 鼠标放置时的 title 提示
        title: '积分变更',
        // 直接在按钮内显示的文字，title 有值时可为空
        text: '积分变更',
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
            items.nickname = row.nickname
            items.id = row.id
            items.balance = row.balance
            state.preview.show = true
            // router.push({ name: 'hexiao/mashangChannel', query: { adminId: row.id } })
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
import Disable from '/@/layouts/frontend/container/disable.vue'
export default defineComponent({
    name: 'hexiao/admin',
})
</script>

<style scoped lang="scss">
.form-box {
    width: 98%;
    height: 50vh;
    margin: 40px auto;
}
.btn_ {
    float: right;
    width: 120px;
    margin-left: 20px;
}
</style>
