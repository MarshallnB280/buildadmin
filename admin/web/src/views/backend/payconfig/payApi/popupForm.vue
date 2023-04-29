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
                    <FormItem :label="t('payconfig.payApi.code')" type="string" v-model="baTable.form.items!.code" prop="code" :placeholder="t('Please input field', { field: t('payconfig.payApi.code') })" />
                    <FormItem :label="t('payconfig.payApi.name')" type="string" v-model="baTable.form.items!.name" prop="name" :placeholder="t('Please input field', { field: t('payconfig.payApi.name') })" />
                    <FormItem :label="t('payconfig.payApi.shanghu_code')" type="string" v-model="baTable.form.items!.shanghu_code" prop="shanghu_code" :placeholder="t('Please input field', { field: t('payconfig.payApi.shanghu_code') })" />
                    <FormItem :label="t('payconfig.payApi.sign_key')" type="string" v-model="baTable.form.items!.sign_key" prop="sign_key" :placeholder="t('Please input field', { field: t('payconfig.payApi.sign_key') })" />
                    <FormItem :label="t('payconfig.payApi.create_url')" type="string" v-model="baTable.form.items!.create_url" prop="create_url" :placeholder="t('Please input field', { field: t('payconfig.payApi.create_url') })" />
                    <FormItem :label="t('payconfig.payApi.query_url')" type="string" v-model="baTable.form.items!.query_url" prop="query_url" :placeholder="t('Please input field', { field: t('payconfig.payApi.query_url') })" />
                    <FormItem :label="t('payconfig.payApi.pay_url')" type="string" v-model="baTable.form.items!.pay_url" prop="pay_url" :placeholder="t('Please input field', { field: t('payconfig.payApi.pay_url') })" />
                    <FormItem :label="t('payconfig.payApi.robot_num')" type="number" prop="robot_num" :input-attr="{ step: 1 }" v-model.number="baTable.form.items!.robot_num" :placeholder="t('Please input field', { field: t('payconfig.payApi.robot_num') })" />
                    <FormItem :label="t('payconfig.payApi.auto_query')" type="switch" v-model="baTable.form.items!.auto_query" prop="auto_query" :data="{ content: { 0: t('payconfig.payApi.auto_query 0'), 1: t('payconfig.payApi.auto_query 1') } }" />
                    <FormItem :label="t('payconfig.payApi.switch')" type="switch" v-model="baTable.form.items!.switch" prop="switch" :data="{ content: { 0: t('payconfig.payApi.switch 0'), 1: t('payconfig.payApi.switch 1') } }" />
                    <FormItem :label="t('payconfig.payApi.extra_param1')" type="string" v-model="baTable.form.items!.extra_param1" prop="extra_param1" :placeholder="t('Please input field', { field: t('payconfig.payApi.extra_param1') })" />
                    <FormItem :label="t('payconfig.payApi.extra_param2')" type="string" v-model="baTable.form.items!.extra_param2" prop="extra_param2" :placeholder="t('Please input field', { field: t('payconfig.payApi.extra_param2') })" />
                    <FormItem :label="t('payconfig.payApi.extra_param3')" type="string" v-model="baTable.form.items!.extra_param3" prop="extra_param3" :placeholder="t('Please input field', { field: t('payconfig.payApi.extra_param3') })" />
                    <FormItem :label="t('payconfig.payApi.extra_param4')" type="string" v-model="baTable.form.items!.extra_param4" prop="extra_param4" :placeholder="t('Please input field', { field: t('payconfig.payApi.extra_param4') })" />
                    <FormItem :label="t('payconfig.payApi.extra_param5')" type="string" v-model="baTable.form.items!.extra_param5" prop="extra_param5" :placeholder="t('Please input field', { field: t('payconfig.payApi.extra_param5') })" />
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
    code: [buildValidatorData({ name: 'required', title: t('payconfig.payApi.code') })],
    name: [buildValidatorData({ name: 'required', title: t('payconfig.payApi.name') })],
    robot_num: [buildValidatorData({ name: 'number', title: t('payconfig.payApi.robot_num') })],
})
</script>

<style scoped lang="scss"></style>
