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
                    <FormItem :label="t('payconfig.mashangChannels.code')" type="string" v-model="baTable.form.items!.code" prop="code" :placeholder="t('Please input field', { field: t('payconfig.mashangChannels.code') })" />
                    <FormItem :label="t('payconfig.mashangChannels.name')" type="string" v-model="baTable.form.items!.name" prop="name" :placeholder="t('Please input field', { field: t('payconfig.mashangChannels.name') })" />
                    <FormItem :label="t('payconfig.mashangChannels.logo')" type="image" v-model="baTable.form.items!.logo" prop="logo" />
                    <FormItem :label="t('payconfig.mashangChannels.channels_dec')" type="editor" v-model="baTable.form.items!.channels_dec" prop="channels_dec" @keyup.enter.stop="" @keyup.ctrl.enter="baTable.onSubmit(formRef)" :placeholder="t('Please input field', { field: t('payconfig.mashangChannels.channels_dec') })" />
                    <FormItem :label="t('payconfig.mashangChannels.add_dec')" type="editor" v-model="baTable.form.items!.add_dec" prop="add_dec" @keyup.enter.stop="" @keyup.ctrl.enter="baTable.onSubmit(formRef)" :placeholder="t('Please input field', { field: t('payconfig.mashangChannels.add_dec') })" />
                    <FormItem :label="t('payconfig.mashangChannels.is_budan')" type="radio" v-model="baTable.form.items!.is_budan" prop="is_budan" :data="{ content: { 0: t('payconfig.mashangChannels.is_budan 0'), 1: t('payconfig.mashangChannels.is_budan 1') } }" :placeholder="t('Please select field', { field: t('payconfig.mashangChannels.is_budan') })" />
                    <FormItem :label="t('payconfig.mashangChannels.fail_auto_close_num')" type="number" prop="fail_auto_close_num" :input-attr="{ step: 1 }" v-model.number="baTable.form.items!.fail_auto_close_num" :placeholder="t('Please input field', { field: t('payconfig.mashangChannels.fail_auto_close_num') })" />
                    <FormItem :label="t('payconfig.mashangChannels.is_single')" type="radio" v-model="baTable.form.items!.is_single" prop="is_single" :data="{ content: { 0: t('payconfig.mashangChannels.is_single 0'), 1: t('payconfig.mashangChannels.is_single 1') } }" :placeholder="t('Please select field', { field: t('payconfig.mashangChannels.is_single') })" />
                    <FormItem :label="t('payconfig.mashangChannels.limit_type')" v-show="baTable.form.items!.is_single != 1" type="radio" v-model="baTable.form.items!.limit_type" prop="limit_type" :data="{ content: { 0: t('payconfig.mashangChannels.limit_type 0'), 1: t('payconfig.mashangChannels.limit_type 1'), 2: t('payconfig.mashangChannels.limit_type 2'), 3: t('payconfig.mashangChannels.limit_type 3'), 4: t('payconfig.mashangChannels.limit_type 4') } }" :placeholder="t('Please select field', { field: t('payconfig.mashangChannels.limit_type') })" />
                    <FormItem :label="t('payconfig.mashangChannels.limit_type_info')" v-show="baTable.form.items!.is_single != 1 && baTable.form.items!.limit_type != 0" type="radio" v-model="baTable.form.items!.limit_type_info" prop="limit_type_info" :data="{ content: { 0: t('payconfig.mashangChannels.limit_type_info 0'), 1: t('payconfig.mashangChannels.limit_type_info 1') } }" :placeholder="t('Please select field', { field: t('payconfig.mashangChannels.limit_type_info') })" />
                    <FormItem :label="t('payconfig.mashangChannels.limit_val')" v-show="baTable.form.items!.is_single != 1 && baTable.form.items!.limit_type != 0" type="string" v-model="baTable.form.items!.limit_val" prop="limit_val" :placeholder="t('Please input field', { field: t('payconfig.mashangChannels.limit_val') })" />
                    <FormItem :label="t('payconfig.mashangChannels.switch')" type="switch" v-model="baTable.form.items!.switch" prop="switch" :data="{ content: { 0: t('payconfig.mashangChannels.switch 0'), 1: t('payconfig.mashangChannels.switch 1') } }" />
                    <FormItem :label="t('payconfig.mashangChannels.extra_param1')" type="string" v-model="baTable.form.items!.extra_param1" prop="extra_param1" :placeholder="t('Please input field', { field: t('payconfig.mashangChannels.extra_param1') })" />
                    <FormItem :label="t('payconfig.mashangChannels.extra_param2')" type="string" v-model="baTable.form.items!.extra_param2" prop="extra_param2" :placeholder="t('Please input field', { field: t('payconfig.mashangChannels.extra_param2') })" />
                    <FormItem :label="t('payconfig.mashangChannels.extra_param3')" type="string" v-model="baTable.form.items!.extra_param3" prop="extra_param3" :placeholder="t('Please input field', { field: t('payconfig.mashangChannels.extra_param3') })" />
                    <FormItem :label="t('payconfig.mashangChannels.extra_param4')" type="string" v-model="baTable.form.items!.extra_param4" prop="extra_param4" :placeholder="t('Please input field', { field: t('payconfig.mashangChannels.extra_param4') })" />
                    <FormItem :label="t('payconfig.mashangChannels.extra_param5')" type="string" v-model="baTable.form.items!.extra_param5" prop="extra_param5" :placeholder="t('Please input field', { field: t('payconfig.mashangChannels.extra_param5') })" />
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
    code: [buildValidatorData({ name: 'required', title: t('payconfig.mashangChannels.code') })],
    name: [buildValidatorData({ name: 'required', title: t('payconfig.mashangChannels.name') })],
    logo: [buildValidatorData({ name: 'required', title: t('payconfig.mashangChannels.logo') })],
    channels_dec: [buildValidatorData({ name: 'required', title: t('payconfig.mashangChannels.channels_dec') })],
    add_dec: [buildValidatorData({ name: 'editorRequired', title: t('payconfig.mashangChannels.add_dec') })],
    fail_auto_close_num: [buildValidatorData({ name: 'number', title: t('payconfig.mashangChannels.fail_auto_close_num') })],
})
</script>

<style scoped lang="scss"></style>
