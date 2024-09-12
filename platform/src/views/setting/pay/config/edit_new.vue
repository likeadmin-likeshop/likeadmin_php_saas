<template>
    <el-drawer
        v-model="drawer"
        destroy-on-close
        title="支付配置修改"
        direction="rtl"
        size="50%"
        @close="afterClose"
        :before-close="beforeClose"
    >
        <div
            class="h-full flex flex-col"
            v-loading="loading"
            element-loading-text="加载中..."
            element-loading-background="var(--el-bg-color)"
        >
            <el-form ref="formRef" :model="formData" label-width="9rem" :rules="formRules">
                <el-form-item label="支付方式">
                    <el-radio :value="popupTitle" :model-value="popupTitle">
                        {{ popupTitle }}
                    </el-radio>
                </el-form-item>
                <el-form-item label="显示名称" prop="name">
                    <el-input
                        v-model="formData.name"
                        placeholder="请输入显示名称"
                        style="max-width: 250px"
                    />
                </el-form-item>
                <el-form-item label="图标" prop="image">
                    <div>
                        <material-picker :limit="1" :disabled="false" v-model="formData.icon" />
                        <div class="form-tips">建议尺寸：200*200px</div>
                    </div>
                </el-form-item>
                <template v-if="formData.pay_way == PayWayEnum.WECHAT">
                    <el-form-item prop="config.interface_version" label="微信支付接口版本">
                        <div>
                            <el-radio-group v-model="formData.config.interface_version">
                                <el-radio value="v3">V3</el-radio>
                            </el-radio-group>
                            <div class="form-tips">暂时只支持V3版本</div>
                        </div>
                    </el-form-item>

                    <el-form-item label="商户类型" prop="config.merchant_type">
                        <div>
                            <el-radio-group v-model="formData.config.merchant_type">
                                <el-radio value="ordinary_merchant">普通商户</el-radio>
                            </el-radio-group>
                            <div class="form-tips">
                                暂时只支持普通商户类型，服务商户类型模式暂不支持
                            </div>
                        </div>
                    </el-form-item>

                    <el-form-item label="微信支付商户号" prop="config.mch_id">
                        <div>
                            <el-input
                                v-model="formData.config.mch_id"
                                placeholder="请输入微信支付商户号"
                                style="max-width: 250px"
                            />
                            <div class="form-tips">微信支付商户号（MCHID）</div>
                        </div>
                    </el-form-item>

                    <el-form-item label="商户API密钥" prop="config.pay_sign_key">
                        <div>
                            <el-input
                                v-model="formData.config.pay_sign_key"
                                placeholder="请输入微信支付商户API密钥"
                                style="max-width: 250px"
                            />
                            <div class="form-tips">微信支付商户API密钥（paySignKey）</div>
                        </div>
                    </el-form-item>

                    <el-form-item label="微信支付证书" prop="config.apiclient_cert">
                        <div>
                            <el-input
                                type="textarea"
                                :rows="3"
                                v-model="formData.config.apiclient_cert"
                                placeholder="请输入微信支付证书"
                                style="max-width: 400px"
                            />

                            <div class="form-tips">
                                微信支付证书（apiclient_cert.pem），前往微信商家平台生成并黏贴至此处
                            </div>
                        </div>
                    </el-form-item>

                    <el-form-item label="微信支付证书密钥" prop="config.apiclient_key">
                        <div>
                            <el-input
                                type="textarea"
                                :rows="3"
                                v-model="formData.config.apiclient_key"
                                placeholder="请输入微信支付证书密钥"
                                style="max-width: 400px"
                            />
                            <div class="form-tips">
                                微信支付证书密钥（apiclient_key.pem），前往微信商家平台生成并黏贴至此处
                            </div>
                        </div>
                    </el-form-item>

                    <el-form-item label="支付授权目录">
                        <div>
                            <div>
                                <span class="mr-[20px]">https://前台手机域名地址/</span>
                            </div>
                        </div>
                    </el-form-item>
                </template>
                <template v-if="formData.pay_way == PayWayEnum.ALIPAY">
                    <el-form-item label="模式" prop="config.mode">
                        <div>
                            <el-radio-group v-model="formData.config.mode">
                                <el-radio value="normal_mode">普通模式</el-radio>
                            </el-radio-group>
                            <div class="form-tips">暂时仅支持支付宝普通模式</div>
                        </div>
                    </el-form-item>

                    <el-form-item label="商户类型" prop="config.merchant_type">
                        <div>
                            <el-radio-group v-model="formData.config.merchant_type">
                                <el-radio value="ordinary_merchant">普通商户</el-radio>
                            </el-radio-group>
                            <div class="form-tips">
                                暂时只支持普通商户类型，服务商户类型模式暂不支持
                            </div>
                        </div>
                    </el-form-item>

                    <el-form-item label="应用ID" prop="config.app_id">
                        <div class="flex-1">
                            <el-input
                                v-model="formData.config.app_id"
                                placeholder="请输入支付宝应用ID"
                                style="max-width: 250px"
                            />
                            <div class="form-tips">支付宝应用APP_ID</div>
                        </div>
                    </el-form-item>

                    <el-form-item label="应用私钥" prop="config.private_key">
                        <div class="flex-1">
                            <el-input
                                type="textarea"
                                :rows="3"
                                v-model="formData.config.private_key"
                                placeholder="请输入支付宝应用私钥"
                                style="max-width: 400px"
                            />
                            <div class="form-tips">支付宝应用私钥（private_key）</div>
                        </div>
                    </el-form-item>

                    <el-form-item label="支付宝公钥" prop="config.ali_public_key">
                        <div class="flex-1">
                            <el-input
                                type="textarea"
                                :rows="3"
                                v-model="formData.config.ali_public_key"
                                placeholder="请输入支付宝公钥"
                                style="max-width: 400px"
                            />
                            <div class="form-tips">支付宝公钥（alipayCertPublicKey）</div>
                        </div>
                    </el-form-item>
                </template>
                <el-form-item label="排序" prop="sort">
                    <div>
                        <el-input-number v-model="formData.sort" :min="0" :max="9999" />
                        <div class="form-tips">默认为0， 数值越大越排前</div>
                    </div>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" :loading="isLock" @click="lockSubmit">保存</el-button>
                </el-form-item>
            </el-form>
            <!-- <el-form
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
                            <span v-else class="break-all">
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
                            <span v-else class="break-all">
                                {{ formData.domain_alias || '--' }}
                            </span>
                        </el-form-item>
                        <el-form-item label="启用别名：" prop="disable">
                            <div v-if="editStatus">
                                <el-radio-group v-model="formData.domain_alias_enable">
                                    <el-radio :value="0">启用</el-radio>
                                    <el-radio :value="1">禁用</el-radio>
                                </el-radio-group>
                                <p class="text-info text-sm">
                                    Tips：项目线上部署后，配置好域名别名并解析到默认域名后启用即可生效
                                </p>
                            </div>

                            <el-tag
                                v-else
                                disable-transitions
                                :type="formData.disable === 0 ? 'primary' : 'danger'"
                            >
                                {{ formData.domain_alias_enable === 0 ? '启用' : '禁用' }}
                            </el-tag>
                        </el-form-item>
                        <el-form-item label="租户状态：" prop="disable">
                            <el-radio-group v-if="editStatus" v-model="formData.disable">
                                <el-radio :value="0">开启</el-radio>
                                <el-radio :value="1">关闭</el-radio>
                            </el-radio-group>
                            <el-tag
                                v-else
                                disable-transitions
                                :type="formData.disable === 0 ? 'primary' : 'danger'"
                            >
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
                    </el-form> -->
        </div>
    </el-drawer>
</template>

<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus'
import { cloneDeep } from 'lodash-es'

import { getPayConfig, setPayConfig } from '@/api/setting/pay'
import { useLockFn } from '@/hooks/useLockFn'

interface Config {
    interface_version?: string
    merchant_type?: string
    mch_id?: string
    pay_sign_key?: string
    apiclient_cert?: string
    apiclient_key?: string
    mode?: string
    app_id?: string
    private_key?: string
    ali_public_key?: string
}

interface FormData {
    id: string
    pay_way: number
    name: string
    icon: string
    sort: number
    remark: string
    domain: string
    config: Partial<Config>
}

enum PayWayEnum {
    BALANCE = 1,
    WECHAT = 2,
    ALIPAY = 3
}

const drawer = ref(false)
const formRef = shallowRef<FormInstance>()
const tenantId = ref<number>()
const activeName = ref<'profile' | 'accounts' | 'users'>('profile')
const editStatus = ref<boolean>(false)
const tempFormData = ref<FormData>()
const loading = ref<boolean>(true)

const popupTitle = computed(() => {
    switch (formData.value.pay_way) {
        case PayWayEnum.BALANCE:
            return '余额支付'
        case PayWayEnum.WECHAT:
            return '微信支付'
        case PayWayEnum.ALIPAY:
            return '支付宝支付'
        default:
            return ''
    }
})
const formData = ref<FormData>({
    id: '',
    pay_way: 0,
    name: '',
    icon: '',
    sort: 0,
    remark: '',
    domain: '',
    config: {
        interface_version: '',
        merchant_type: '',
        mch_id: '',
        pay_sign_key: '',
        apiclient_cert: '',
        apiclient_key: '',
        mode: '',
        app_id: '',
        private_key: '',
        ali_public_key: ''
    }
})

const formRules: FormRules = {
    name: [
        {
            required: true,
            message: '请输入显示名称'
        }
    ],
    'config.mch_id': [
        {
            required: true,
            message: '请输入微信支付商户号'
        }
    ],
    'config.pay_sign_key': [
        {
            required: true,
            message: '请输入微信支付商户API密钥'
        }
    ],
    'config.apiclient_cert': [
        {
            required: true,
            message: '请输入微信支付证书'
        }
    ],
    'config.apiclient_key': [
        {
            required: true,
            message: '请输入微信支付证书密钥'
        }
    ],
    'config.app_id': [
        {
            required: true,
            message: '请输入支付宝应用ID'
        }
    ],
    'config.private_key': [
        {
            required: true,
            message: '请输入支付宝应用私钥'
        }
    ],
    'config.ali_public_key': [
        {
            required: true,
            message: '请输入支付宝公钥'
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
const getDetails = async (id: number) => {
    const data: FormData = await getPayConfig({
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
const afterClose = () => {
    formRef.value?.resetFields()
}

const submitEdit = async () => {
    await setPayConfig(formData.value)
    emits('refresh')
}

const { isLock, lockFn: lockSubmit } = useLockFn(submitEdit)

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
:deep(.el-form-item__content) {
    align-items: start;
}
</style>
