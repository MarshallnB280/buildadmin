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
                    <FormItem :label="t('payconfig.payProductWidth.pay_product_id')" type="remoteSelect" v-model="baTable.form.items!.pay_product_id" prop="pay_product_id" :input-attr="{ pk: 'pay_product.id', field: 'name', 'remote-url': '/admin/payconfig.PayProduct/index' }" :placeholder="t('Please select field', { field: t('payconfig.payProductWidth.pay_product_id') })" />
                    <FormItem :label="t('payconfig.payProductWidth.pay_channel_id')" type="remoteSelect" v-model="baTable.form.items!.pay_channel_id" prop="pay_channel_id" :input-attr="{ pk: 'pay_channel.id', field: 'name', 'remote-url': '/admin/payconfig.PayChannel/index' }" :placeholder="t('Please select field', { field: t('payconfig.payProductWidth.pay_channel_id') })" />
                    <FormItem :label="t('payconfig.payProductWidth.width')" type="number" prop="width" :input-attr="{ step: 1 }" v-model.number="baTable.form.items!.width" :placeholder="t('Please input field', { field: t('payconfig.payProductWidth.width') })" />
                    <FormItem :label="t('payconfig.payProductWidth.switch')" type="switch" v-model="baTable.form.items!.switch" prop="switch" :data="{ content: { 0: t('payconfig.payProductWidth.switch 0'), 1: t('payconfig.payProductWidth.switch 1') } }" />
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
    pay_product_id: [buildValidatorData({ name: 'required', title: t('payconfig.payProductWidth.pay_product_id') })],
    pay_channel_id: [buildValidatorData({ name: 'required', title: t('payconfig.payProductWidth.pay_channel_id') })],
    width: [buildValidatorData({ name: 'number', title: t('payconfig.payProductWidth.width') })],
    switch: [buildValidatorData({ name: 'required', title: t('payconfig.payProductWidth.switch') })],
})
</script>

<style scoped lang="scss"></style>
