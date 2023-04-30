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
                    <FormItem :label="t('payconfig.payChannel.name')" type="string" v-model="baTable.form.items!.name" prop="name" :placeholder="t('Please input field', { field: t('payconfig.payChannel.name') })" />
                    <FormItem :label="t('payconfig.payChannel.pay_api_id')" type="remoteSelect" v-model="baTable.form.items!.pay_api_id" prop="pay_api_id" :input-attr="{ pk: 'pay_api.id', field: 'name', 'remote-url': '/admin/payconfig.PayApi/index' }" :placeholder="t('Please select field', { field: t('payconfig.payChannel.pay_api_id') })" />
                    <FormItem :label="t('payconfig.payChannel.mashang_channels_id')" type="remoteSelect" v-model="baTable.form.items!.mashang_channels_id" prop="mashang_channels_id" :input-attr="{ pk: 'mashang_channels.id', field: 'name', 'remote-url': '/admin/payconfig.MashangChannels/index', multiple: true }" :placeholder="t('Please select field', { field: t('payconfig.payChannel.mashang_channels_id') })" />
                    <FormItem :label="t('payconfig.payChannel.pay_type')" type="radio" v-model="baTable.form.items!.pay_type" prop="pay_type" :data="{ content: { qq: t('payconfig.payChannel.pay_type qq'), wechat: t('payconfig.payChannel.pay_type wechat'), alipay: t('payconfig.payChannel.pay_type alipay'), jd: t('payconfig.payChannel.pay_type jd'), other: t('payconfig.payChannel.pay_type other') } }" :placeholder="t('Please select field', { field: t('payconfig.payChannel.pay_type') })" />
                    <FormItem :label="t('payconfig.payChannel.min_amount')" type="number" prop="min_amount" :input-attr="{ step: 1 }" v-model.number="baTable.form.items!.min_amount" :placeholder="t('Please input field', { field: t('payconfig.payChannel.min_amount') })" />
                    <FormItem :label="t('payconfig.payChannel.max_amount')" type="number" prop="max_amount" :input-attr="{ step: 1 }" v-model.number="baTable.form.items!.max_amount" :placeholder="t('Please input field', { field: t('payconfig.payChannel.max_amount') })" />
                    <FormItem :label="t('payconfig.payChannel.amount_type')" type="radio" v-model="baTable.form.items!.amount_type" prop="amount_type" :data="{ content: { 0: t('payconfig.payChannel.amount_type 0'), 1: t('payconfig.payChannel.amount_type 1'), 2: t('payconfig.payChannel.amount_type 2'), 3: t('payconfig.payChannel.amount_type 3'), 4: t('payconfig.payChannel.amount_type 4'), 5: t('payconfig.payChannel.amount_type 5') } }" :placeholder="t('Please select field', { field: t('payconfig.payChannel.amount_type') })" />
                    <FormItem :label="t('payconfig.payChannel.fix_amount')" v-show="baTable.form.items!.amount_type == 1" type="string" v-model="baTable.form.items!.fix_amount" prop="fix_amount" :placeholder="t('Please input field', { field: t('payconfig.payChannel.fix_amount') })" />
                    <FormItem :label="t('payconfig.payChannel.device')" type="checkbox" v-model="baTable.form.items!.device" prop="device" :data="{ content: { ios: t('payconfig.payChannel.device ios'), android: t('payconfig.payChannel.device android'), pc: t('payconfig.payChannel.device pc') } }" :placeholder="t('Please select field', { field: t('payconfig.payChannel.device') })" />
                    <FormItem :label="t('payconfig.payChannel.switch')" type="switch" v-model="baTable.form.items!.switch" prop="switch" :data="{ content: { 0: t('payconfig.payChannel.switch 0'), 1: t('payconfig.payChannel.switch 1') } }" />
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
    name: [buildValidatorData({ name: 'required', title: t('payconfig.payChannel.name') })],
    pay_api_id: [buildValidatorData({ name: 'required', title: t('payconfig.payChannel.pay_api_id') })],
    pay_type: [buildValidatorData({ name: 'required', title: t('payconfig.payChannel.pay_type') })],
    min_amount: [buildValidatorData({ name: 'number', title: t('payconfig.payChannel.min_amount') }), buildValidatorData({ name: 'required', title: t('payconfig.payChannel.min_amount') })],
    max_amount: [buildValidatorData({ name: 'number', title: t('payconfig.payChannel.max_amount') }), buildValidatorData({ name: 'required', title: t('payconfig.payChannel.max_amount') })],
    amount_type: [buildValidatorData({ name: 'required', title: t('payconfig.payChannel.amount_type') })],
})
</script>

<style scoped lang="scss"></style>
