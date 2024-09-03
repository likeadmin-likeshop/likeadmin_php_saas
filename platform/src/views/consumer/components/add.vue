<template>
    <el-drawer
        v-model="drawer"
        title="新增租户"
        direction="rtl"
        size="50%"
        @open="console.log('open')"
        @close="console.log('close')"
        :before-close="beforeClose"
    >
        <el-form
            ref="formRef"
            class="ls-form"
            label-position="right"
            :model="formData"
            label-width="100px"
        >
            <el-form-item label="头像：" prop="avatar">
                <material-picker v-model="formData.avatar" :limit="1" />
            </el-form-item>
            <el-form-item label="租户名称：">
                <el-input
                    v-model="formData.name"
                    placeholder="请输入租户名称"
                    style="width: 280px"
                />
            </el-form-item>
            <el-form-item label="租户状态：">
                <el-radio-group v-model="formData.disable">
                    <el-radio :label="0">开启</el-radio>
                    <el-radio :label="1">关闭</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitEdit">提交</el-button>
            </el-form-item>
        </el-form>
    </el-drawer>
</template>

<script lang="ts" setup>
import type { FormInstance } from 'element-plus'

import { userAdd } from '@/api/consumer'

interface DetailType {
    avatar: string
    create_time: string
    name: string
    sn: string
    id: string
    disable: number
}

const drawer = ref(false)
const formRef = shallowRef<FormInstance>()
const submited = ref<boolean>(false)
const formData = ref<DetailType>({
    avatar: '',
    create_time: '',
    name: '',
    sn: '',
    id: '',
    disable: 0
})

const emits = defineEmits(['refresh'])

const openHandle = () => {
    drawer.value = true
}

const beforeClose = (done: () => void) => {
    if (submited.value) done()
    ElMessageBox.confirm('表单未提交，确认退出编辑吗？')
        .then(() => {
            done()
        })
        .catch(() => {
            console.log('取消')
        })
}

const submitEdit = async () => {
    await userAdd(formData.value)
    submited.value = true
    drawer.value = false
    emits('refresh')
}

defineExpose({
    openHandle
})
</script>
