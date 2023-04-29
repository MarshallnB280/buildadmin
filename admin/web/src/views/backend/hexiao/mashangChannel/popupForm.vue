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
                    <FormItem :label="t('hexiao.mashangChannel.admin_id')" type="remoteSelect" v-model="baTable.form.items!.admin_id" prop="admin_id" :input-attr="{ pk: 'admin.id', field: 'nickname', 'remote-url': '/admin/hexiao.Admin/index' }" :placeholder="t('Please select field', { field: t('hexiao.mashangChannel.admin_id') })" />
                    <FormItem :label="t('hexiao.mashangChannel.mashang_channels_id')" type="remoteSelect" v-model="baTable.form.items!.mashang_channels_id" prop="mashang_channels_id" :input-attr="{ pk: '.id', field: 'name', 'remote-url': '' }" :placeholder="t('Please select field', { field: t('hexiao.mashangChannel.mashang_channels_id') })" />
                    <FormItem :label="t('hexiao.mashangChannel.weigh')" type="number" prop="weigh" :input-attr="{ step: 1 }" v-model.number="baTable.form.items!.weigh" :placeholder="t('Please input field', { field: t('hexiao.mashangChannel.weigh') })" />
                    <FormItem :label="t('hexiao.mashangChannel.switch')" type="switch" v-model="baTable.form.items!.switch" prop="switch" :data="{ content: { 0: t('hexiao.mashangChannel.switch 0'), 1: t('hexiao.mashangChannel.switch 1') } }" />
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
    admin_id: [buildValidatorData({ name: 'required', title: t('hexiao.mashangChannel.admin_id') })],
    mashang_channels_id: [buildValidatorData({ name: 'required', title: t('hexiao.mashangChannel.mashang_channels_id') })],
    weigh: [buildValidatorData({ name: 'required', title: t('hexiao.mashangChannel.weigh') })],
})
</script>

<style scoped lang="scss"></style>
