<template>
    <!-- 对话框表单 -->
    <el-dialog
        class="ba-operate-dialog"
        :close-on-click-modal="false"
        :model-value="['add', 'edit'].includes(baTable.form.operate!)"
        @close="baTable.toggleForm"
        width="50%"
    >
        <template #header>
            <div class="title" v-drag="['.ba-operate-dialog', '.el-dialog__header']" v-zoom="'.ba-operate-dialog'">
                {{ baTable.form.operate ? t(baTable.form.operate) : '' }}
            </div>
        </template>
        <el-scrollbar v-loading="baTable.form.loading" class="ba-table-form-scrollbar">
            <div
                class="ba-operate-form"
                :class="'ba-' + baTable.form.operate + '-form'"
                :style="'width: calc(100% - ' + baTable.form.labelWidth! / 2 + 'px)'"
            >
                <el-form
                    v-if="!baTable.form.loading"
                    ref="formRef"
                    @submit.prevent=""
                    @keyup.enter="baTable.onSubmit(formRef)"
                    :model="baTable.form.items"
                    label-position="right"
                    :label-width="baTable.form.labelWidth + 'px'"
                    :rules="rules"
                >
                    <FormItem :label="t('hexiao.admin.robot_num')" type="number" prop="robot_num" :input-attr="{ step: 1 }" v-model.number="baTable.form.items!.robot_num" :placeholder="t('Please input field', { field: t('hexiao.admin.robot_num') })" />
                    <FormItem :label="t('hexiao.admin.username')" type="string" v-model="baTable.form.items!.username" prop="username" :placeholder="t('Please input field', { field: t('hexiao.admin.username') })" />
                    <FormItem :label="t('hexiao.admin.nickname')" type="string" v-model="baTable.form.items!.nickname" prop="nickname" :placeholder="t('Please input field', { field: t('hexiao.admin.nickname') })" />
                    <FormItem :label="t('hexiao.admin.password')" type="password" v-model="baTable.form.items!.password" prop="password" :placeholder="t('Please input field', { field: t('hexiao.admin.password') })" />
                    <FormItem :label="t('hexiao.admin.add_from_num')" type="number" prop="add_from_num" :input-attr="{ step: 1 }" v-model.number="baTable.form.items!.add_from_num" :placeholder="t('Please input field', { field: t('hexiao.admin.add_from_num') })" />
                    <FormItem :label="t('hexiao.admin.status')" type="radio" v-model="baTable.form.items!.status" prop="status" :data="{ content: { 1: t('hexiao.admin.status 1'), 0: t('hexiao.admin.status 0') } }" :placeholder="t('Please select field', { field: t('hexiao.admin.status') })" />
                </el-form>
            </div>
        </el-scrollbar>
        <template #footer>
            <div :style="'width: calc(100% - ' + baTable.form.labelWidth! / 1.8 + 'px)'">
                <el-button @click="baTable.toggleForm('')">{{ t('Cancel') }}</el-button>
                <el-button v-blur :loading="baTable.form.submitLoading" @click="baTable.onSubmit(formRef)" type="primary">
                    {{ baTable.form.operateIds && baTable.form.operateIds.length > 1 ? t('Save and edit next item') : t('Save') }}
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { reactive, ref, inject } from 'vue'
import { useI18n } from 'vue-i18n'
import type baTableClass from '/@/utils/baTable'
import FormItem from '/@/components/formItem/index.vue'
import type { ElForm, FormItemRule } from 'element-plus'
import { buildValidatorData } from '/@/utils/validate'

const formRef = ref<InstanceType<typeof ElForm>>()
const baTable = inject('baTable') as baTableClass

const { t } = useI18n()

const rules: Partial<Record<string, FormItemRule[]>> = reactive({
    pid: [buildValidatorData({ name: 'number', title: t('hexiao.admin.pid') })],
    robot_num: [buildValidatorData({ name: 'number', title: t('hexiao.admin.robot_num') })],
    username: [buildValidatorData({ name: 'account', title: t('hexiao.admin.username') }), buildValidatorData({ name: 'required', title: t('hexiao.admin.username') })],
    nickname: [buildValidatorData({ name: 'required', title: t('hexiao.admin.nickname') })],
    loginfailure: [buildValidatorData({ name: 'number', title: t('hexiao.admin.loginfailure') })],
    lastlogintime: [buildValidatorData({ name: 'date', title: t('hexiao.admin.lastlogintime') })],
    password: [buildValidatorData({ name: 'password', title: t('hexiao.admin.password') }), buildValidatorData({ name: 'required', title: t('hexiao.admin.password') })],
    balance: [buildValidatorData({ name: 'number', title: t('hexiao.admin.balance') })],
    lock_amount: [buildValidatorData({ name: 'number', title: t('hexiao.admin.lock_amount') })],
    total_inc: [buildValidatorData({ name: 'number', title: t('hexiao.admin.total_inc') })],
    total_dec: [buildValidatorData({ name: 'number', title: t('hexiao.admin.total_dec') })],
    createtime: [buildValidatorData({ name: 'date', title: t('hexiao.admin.createtime') })],
    updatetime: [buildValidatorData({ name: 'date', title: t('hexiao.admin.updatetime') })],
})
</script>

<style scoped lang="scss"></style>
