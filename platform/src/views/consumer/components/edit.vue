<template>
    <el-drawer
        v-model="drawer"
        destroy-on-close
        title="租户信息"
        direction="rtl"
        size="50%"
        :before-close="beforeClose"
    >
        <div
            class="h-full flex flex-col"
            v-loading="loading"
            element-loading-text="加载中..."
            element-loading-background="var(--el-bg-color)"
        >
            <div class="flex flex-col pb-1">
                <div class="bg-page p-4 rounded flex justify-between items-center">
                    <div class="flex items-center gap-4">
                        <el-avatar :src="formData.avatar" :size="58" />
                        <div class="flex flex-col justify-center gap-1">
                            <span class="font-bold text-lg">{{ formData.name }}</span>
                            <span class="text-info text-xs">ID：{{ formData.id }}</span>
                        </div>
                    </div>
                    <div>
                        <el-button type="info" size="small">
                            <a :href="formData.domain" target="_blank">登录</a>
                        </el-button>
                        <el-button
                            v-if="editStatus"
                            type="default"
                            size="small"
                            @click="handleEdit()"
                        >
                            取消
                        </el-button>
                        <el-button type="primary" size="small" @click="handleEdit(true)">
                            {{ editStatus ? '保存' : '编辑' }}
                        </el-button>
                    </div>
                </div>
            </div>

            <el-tabs class="flex-1" v-model="activeName" :before-leave="beforeLeave">
                <el-tab-pane label="基础信息" name="profile">
                    <el-form
                        ref="formRef"
                        class="grid grid-cols-2 gap-x-4 pt-2"
                        :class="{
                            '!grid-cols-1': editStatus
                        }"
                        label-position="right"
                        :model="formData"
                        label-width="100px"
                        :rules="rules"
                    >
                        <el-form-item v-if="!editStatus" label="默认域名：" class="col-span-2">
                            <a
                                :href="formData.default_domain"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {{ formData.default_domain || '--' }}
                            </a>
                            <span
                                class="flex items-center ml-2 cursor-pointer"
                                v-copy="formData.domain"
                            >
                                <icon name="el-icon-DocumentCopy" />
                                复制
                            </span>
                        </el-form-item>
                        <el-form-item v-if="!editStatus" label="租户编码：">
                            {{ formData.sn }}
                        </el-form-item>
                        <el-form-item v-if="editStatus" label="头像：" prop="avatar">
                            <material-picker v-model="formData.avatar" :limit="1" />
                        </el-form-item>
                        <el-form-item label="租户名称：" prop="name" :required="editStatus">
                            <el-input
                                v-if="editStatus"
                                v-model="formData.name"
                                placeholder="请输入租户名称"
                                style="max-width: 250px"
                            />
                            <span v-else>
                                {{ formData.name || '--' }}
                            </span>
                        </el-form-item>
                        <el-form-item label="联系方式：">
                            <el-input
                                v-if="editStatus"
                                v-model="formData.tel"
                                placeholder="请输入联系方式"
                                style="max-width: 250px"
                            />
                            <span v-else>
                                {{ formData.tel || '--' }}
                            </span>
                        </el-form-item>
                        <el-form-item label="域名别名：" prop="domain_alias">
                            <el-input
                                v-if="editStatus"
                                v-model="formData.domain_alias"
                                placeholder="请输入域名别名"
                                style="max-width: 250px"
                            />
                            <span v-else>
                                {{ formData.domain_alias || '--' }}
                            </span>
                        </el-form-item>
                        <el-form-item label="启用别名：" prop="disable">
                            <div v-if="editStatus">
                                <el-radio-group v-model="formData.domain_alias_enable">
                                    <el-radio :label="0">启用</el-radio>
                                    <el-radio :label="1">禁用</el-radio>
                                </el-radio-group>
                                <p class="text-info text-sm">
                                    Tips：项目线上部署后，配置好域名别名并解析到默认域名后启用即可生效
                                </p>
                            </div>

                            <el-tag v-else :type="formData.disable === 0 ? 'primary' : 'danger'">
                                {{ formData.domain_alias_enable === 0 ? '启用' : '禁用' }}
                            </el-tag>
                        </el-form-item>
                        <el-form-item label="租户状态：" prop="disable">
                            <el-radio-group v-if="editStatus" v-model="formData.disable">
                                <el-radio :label="0">开启</el-radio>
                                <el-radio :label="1">关闭</el-radio>
                            </el-radio-group>
                            <el-tag v-else :type="formData.disable === 0 ? 'primary' : 'danger'">
                                {{ formData.disable === 0 ? '开启' : '关闭' }}
                            </el-tag>
                        </el-form-item>
                        <el-form-item v-if="!editStatus" label="创建时间：">
                            {{ formData.create_time }}
                        </el-form-item>
                        <el-form-item label="租户备注：" prop="notes">
                            <el-input
                                v-if="editStatus"
                                v-model="formData.notes"
                                placeholder="请输入租户备注"
                                style="max-width: 250px"
                                type="textarea"
                                :maxlength="100"
                            />
                            <span v-else>
                                {{ formData.notes || '--' }}
                            </span>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane lazy label="账号列表" name="accounts">
                    <Accounts :tenant_id="formData.id" />
                </el-tab-pane>
                <el-tab-pane lazy label="用户列表" name="users">
                    <Users :tenant_id="formData.id" />
                </el-tab-pane>
            </el-tabs>
        </div>
    </el-drawer>
</template>

<script lang="ts" setup>
import type { FormInstance } from 'element-plus'
import { cloneDeep } from 'lodash-es'

import { getUserDetail, userEdit } from '@/api/consumer'

import Accounts from './account/index.vue'
import Users from './user/index.vue'

interface DetailType {
    avatar: string
    create_time: string
    name: string
    sn: string
    domain: string
    default_domain: string
    id: number
    disable: number
    tel: string
    domain_alias: string
    domain_alias_enable: number
    notes: string
}

const drawer = ref(false)
const formRef = shallowRef<FormInstance>()
const tenantId = ref<number>()
const activeName = ref<'profile' | 'accounts' | 'users'>('profile')
const editStatus = ref<boolean>(false)
const tempFormData = ref<DetailType>()
const loading = ref<boolean>(true)
const formData = ref<DetailType>({
    avatar: '',
    create_time: '',
    name: '',
    sn: '',
    domain: '',
    default_domain: '',
    id: 0,
    disable: 0,
    tel: '',
    domain_alias: '',
    domain_alias_enable: 1,
    notes: ''
})

const rules = {
    avatar: [
        {
            required: true,
            message: '请选择头像',
            trigger: ['change']
        }
    ],
    name: [
        {
            required: true,
            message: '请输入租户名称',
            trigger: ['blur']
        }
    ]
}

const emits = defineEmits(['refresh'])

const openHandle = (id: number, status?: boolean, tabIndex?: 'profile' | 'accounts' | 'users') => {
    loading.value = true
    activeName.value = tabIndex || 'profile'
    editStatus.value = status || false
    getDetails(id)
    tenantId.value = id
    drawer.value = true
}

const beforeLeave = async () => {
    if (editStatus.value) {
        try {
            await ElMessageBox.confirm('修改还未保存，确认退出编辑吗？')
            handleEdit()
        } catch (error) {
            return false
        }
    }
}
const getDetails = async (id: number) => {
    const data: DetailType = await getUserDetail({
        id: id
    })
    loading.value = false
    formData.value = data
    tempFormData.value = cloneDeep(formData.value)
}

const beforeClose = (done: () => void) => {
    if (editStatus.value) {
        ElMessageBox.confirm('修改还未保存，确认退出编辑吗？')
            .then(() => {
                done()
            })
            .catch(() => {
                console.log('取消')
            })
    } else {
        done()
    }
}

const handleEdit = async (save?: boolean) => {
    if (editStatus.value) {
        if (save) {
            await formRef.value?.validate()
            await submitEdit()
        } else {
            formData.value = tempFormData.value as DetailType
            formRef.value?.clearValidate()
        }
    } else {
        activeName.value = 'profile'
        await nextTick()
    }
    editStatus.value = !editStatus.value
}

const submitEdit = async () => {
    await userEdit(formData.value)
    emits('refresh')
}

defineExpose({
    openHandle
})
</script>

<style lang="scss" scoped>
:deep(.el-tabs__content) {
    flex: 1;

    .el-tab-pane {
        height: 100%;
    }
}
</style>
