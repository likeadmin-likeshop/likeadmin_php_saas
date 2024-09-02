<template>
    <el-drawer
        v-model="drawer"
        title="租户详情"
        direction="rtl"
        size="50%"
        @open="console.log('open')"
        @close="console.log('close')"
        :before-close="beforeClose"
    >
        <el-form
            ref="formRef"
            class="ls-form"
            label-position="left"
            :model="formData"
            label-width="100px"
        >
            <div class="flex flex-col">
                <div class="bg-page p-4 rounded flex justify-between items-center">
                    <div class="flex items-center gap-4">
                        <el-avatar :src="formData.avatar" :size="58" />
                        <div class="flex items-center">
                            <span class="font-bold">{{ formData.name }}</span>
                        </div>
                    </div>
                    <div>
                        <el-button
                            v-if="editStatus"
                            type="default"
                            size="small"
                            @click="handleEdit()"
                        >
                            取消
                        </el-button>
                        <el-button type="primary" size="small" @click="handleEdit()">
                            {{ editStatus ? '保存' : '编辑' }}
                        </el-button>
                    </div>
                </div>
            </div>

            <el-tabs v-model="activeName">
                <el-tab-pane label="详情" name="profile">
                    <div class="grid grid-cols-2">
                        <el-form-item label="租户ID：">
                            {{ formData.id }}
                        </el-form-item>
                        <el-form-item label="租户编号：">
                            {{ formData.sn }}
                        </el-form-item>
                        <el-form-item label="租户名称：">
                            <el-input
                                v-if="editStatus"
                                v-model="formData.name"
                                style="width: 240px"
                                placeholder="Please input"
                            />
                            <span v-else>
                                {{ formData.name }}
                            </span>
                        </el-form-item>
                        <el-form-item label="租户状态：">
                            <el-switch
                                v-if="editStatus"
                                v-model="formData.disable"
                                inline-prompt
                                active-text="开启"
                                :active-value="0"
                                inactive-text="关闭"
                                :inactive-value="1"
                            />
                            <el-tag v-else :type="formData.disable === 0 ? '' : 'danger'">
                                {{ formData.disable === 0 ? '开启' : '关闭' }}
                            </el-tag>
                        </el-form-item>
                        <el-form-item label="创建时间："> {{ formData.create_time }} </el-form-item>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </el-form>
    </el-drawer>
</template>

<script lang="ts" setup>
import type { FormInstance } from 'element-plus'
import { cloneDeep } from 'lodash-es'

import { getUserDetail, userEdit } from '@/api/consumer'
import { isEmpty } from '@/utils/util'

const drawer = ref(false)
const formRef = shallowRef<FormInstance>()
const tenantId = ref<number>()
const activeName = ref<string>('profile')
const editStatus = ref<boolean>(false)
const tempFormData = ref()
const formData = reactive({
    avatar: '',
    create_time: '',
    name: '',
    sn: '',
    id: '',
    disable: 0
})

const openHandle = (id: number, status?: boolean) => {
    editStatus.value = status || false
    getDetails(id)
    tenantId.value = id
    drawer.value = true
}

const getDetails = async (id: number) => {
    const data = await getUserDetail({
        id: id
    })
    Object.keys(formData).forEach((key) => {
        //@ts-ignore
        formData[key] = data[key]
    })
    tempFormData.value = cloneDeep(formData)
}

const beforeClose = (done: () => void) => {
    if (editStatus.value) {
        ElMessageBox.confirm('修改还未保存，你确认退出编辑吗？').then(() => {
            done()
        })
    } else {
        done()
    }
}

const handleEdit = () => {
    if (editStatus.value) {
        Object.keys(formData).forEach((key) => {
            //@ts-ignore
            formData[key] = tempFormData.value[key]
        })
    } else {
        tempFormData.value = cloneDeep(formData)
    }
    editStatus.value = !editStatus.value
}

const submitEdit = async (value: string, field: string) => {
    if (isEmpty(value)) return
    await userEdit({
        id: tenantId.value,
        field,
        value
    })
}

defineExpose({
    openHandle
})
</script>
