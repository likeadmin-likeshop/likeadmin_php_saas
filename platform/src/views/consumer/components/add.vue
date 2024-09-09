<template>
    <el-drawer
        v-model="drawer"
        title="新增租户"
        direction="rtl"
        size="50%"
        destroy-on-close
        :before-close="beforeClose"
    >
        <el-form
            ref="formRef"
            class="ls-form"
            label-position="right"
            :model="formData"
            :rules="rules"
            label-width="100px"
        >
            <div class="form_header">基础信息</div>
            <el-form-item label="头像：" prop="avatar">
                <material-picker v-model="formData.avatar" :limit="1" />
            </el-form-item>
            <el-form-item label="租户名称：" prop="name">
                <el-input
                    v-model="formData.name"
                    placeholder="请输入租户名称"
                    style="width: 280px"
                />
            </el-form-item>
            <el-form-item label="租户状态：" prop="disable">
                <el-radio-group v-model="formData.disable">
                    <el-radio :label="0">开启</el-radio>
                    <el-radio :label="1">关闭</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="联系方式：" prop="tel">
                <el-input
                    v-model="formData.tel"
                    :maxlength="30"
                    placeholder="请输入联系方式"
                    style="max-width: 250px"
                />
            </el-form-item>
            <el-form-item label="域名别名：" prop="domain_alias">
                <el-input
                    v-model="formData.domain_alias"
                    placeholder="请输入域名别名"
                    style="max-width: 250px"
                />
            </el-form-item>
            <el-form-item label="启用别名：" prop="domain_alias_enable">
                <div>
                    <el-radio-group v-model="formData.domain_alias_enable">
                        <el-radio :label="0">启用</el-radio>
                        <el-radio :label="1">禁用</el-radio>
                    </el-radio-group>
                    <p class="text-info text-sm">
                        Tips：项目线上部署后，配置好域名别名并解析到默认域名后启用即可生效
                    </p>
                </div>
            </el-form-item>
            <el-form-item label="租户备注：" prop="notes">
                <el-input
                    v-model="formData.notes"
                    placeholder="请输入租户备注"
                    style="max-width: 250px"
                    type="textarea"
                    :maxlength="100"
                />
            </el-form-item>
            <div class="form_header">
                账号信息
                <span class="text-xs font-normal text-info opacity-70">
                    （不填则生成默认账号，账号默认为sn编码，密码默认123456）
                </span>
            </div>
            <el-form-item label="管理员账号：" prop="account">
                <el-input
                    v-model="formData.account"
                    placeholder="请输入管理员账号"
                    style="max-width: 250px"
                />
            </el-form-item>
            <el-form-item label="密码：" prop="password">
                <el-input
                    v-model="formData.password"
                    type="password"
                    placeholder="请输入密码"
                    style="max-width: 250px"
                />
            </el-form-item>
            <el-form-item label="确认密码：" prop="repassword">
                <el-input
                    v-model="formData.repassword"
                    type="password"
                    placeholder="请再次输入密码"
                    style="max-width: 250px"
                />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitEdit">提交</el-button>
            </el-form-item>
        </el-form>
    </el-drawer>
</template>

<script lang="ts" setup>
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'

import { userAdd } from '@/api/consumer'

interface DetailType {
    avatar: string
    create_time: string
    name: string
    sn: string
    id: string
    disable: number
    tel: string
    domain_alias: string
    domain_alias_enable: number
    notes: string
    account: string
    password: string
    repassword: string
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
    disable: 0,
    tel: '',
    domain_alias: '',
    domain_alias_enable: 1,
    notes: '',
    account: '',
    password: '',
    repassword: ''
})

const rules: FormRules = {
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
    ],
    disable: [
        {
            required: true,
            message: '请选择租户状态',
            trigger: ['blur']
        }
    ]
}

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
    await formRef.value?.validate()
    if (formData.value.password !== formData.value.repassword) {
        return ElMessage.error('两次密码输入不一致')
    }
    await userAdd(formData.value)
    submited.value = true
    drawer.value = false
    emits('refresh')
}

defineExpose({
    openHandle
})
</script>

<style lang="scss" scoped>
.form_header {
    @apply text-lg font-bold mb-4 bg-page p-2 rounded;
}
</style>
