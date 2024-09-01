<template>
    <div>
        <el-card class="!border-none" shadow="never">
            <el-page-header content="用户详情" @back="$router.back()" />
        </el-card>
        <el-card class="mt-4 !border-none" header="基本资料" shadow="never">
            <el-form ref="formRef" class="ls-form" :model="formData" label-width="120px">
                <div class="bg-page flex py-5 mb-10 items-center">
                    <div class="basis-40 flex flex-col justify-center items-center">
                        <div class="mb-2 text-tx-regular">租户头像</div>
                        <el-avatar :src="formData.avatar" :size="58" />
                    </div>
                </div>
                <el-form-item label="租户ID：">
                    {{ formData.id }}
                </el-form-item>
                <el-form-item label="租户编号：">
                    {{ formData.sn }}
                </el-form-item>
                <el-form-item label="租户名称：">
                    {{ formData.name }}
                    <popover-input
                        class="ml-[10px]"
                        @confirm="handleEdit($event, 'account')"
                        :limit="32"
                        v-perms="['user.user/edit']"
                    >
                        <el-button type="primary" link>
                            <icon name="el-icon-EditPen" />
                        </el-button>
                    </popover-input>
                </el-form-item>
                <el-form-item label="租户状态：">
                    <el-switch
                        v-model="formData.disable"
                        inline-prompt
                        :active-value="0"
                        :inactive-value="1"
                        active-text="正常"
                        inactive-text="禁用"
                    />
                </el-form-item>
                <el-form-item label="创建时间："> {{ formData.create_time }} </el-form-item>
            </el-form>
        </el-card>

        <account-adjust
            v-model:show="adjustState.show"
            :value="adjustState.value"
            @confirm="handleConfirmAdjust"
        />
    </div>
</template>

<script lang="ts" setup name="consumerDetail">
import type { FormInstance } from 'element-plus'

import { adjustMoney, getUserDetail, userEdit } from '@/api/consumer'
import { isEmpty } from '@/utils/util'

import AccountAdjust from '../components/account-adjust.vue'

const route = useRoute()
const formData = reactive({
    avatar: '',
    create_time: '',
    name: '',
    sn: '',
    id: '',
    disable: 0
})

const adjustState = reactive({
    show: false,
    value: ''
})
const formRef = shallowRef<FormInstance>()

const getDetails = async () => {
    const data = await getUserDetail({
        id: route.query.id
    })
    Object.keys(formData).forEach((key) => {
        //@ts-ignore
        formData[key] = data[key]
    })
}

const handleEdit = async (value: string, field: string) => {
    if (isEmpty(value)) return
    await userEdit({
        id: route.query.id,
        field,
        value
    })
    getDetails()
}

const handleConfirmAdjust = async (value: any) => {
    await adjustMoney({ user_id: route.query.id, ...value })
    adjustState.show = false
    getDetails()
}
getDetails()
</script>
