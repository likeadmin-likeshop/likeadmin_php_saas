<template>
    <div>
        <el-card class="!border-none" shadow="never">
            <el-form ref="formRef" class="mb-[-16px]" :model="queryParams" :inline="true">
                <el-form-item label="用户信息">
                    <el-input
                        class="w-[280px]"
                        v-model="queryParams.keyword"
                        placeholder="账号/租户名"
                        clearable
                        @keyup.enter="resetPage"
                    />
                </el-form-item>
                <el-form-item label="创建时间">
                    <daterange-picker
                        v-model:startTime="queryParams.create_time_start"
                        v-model:endTime="queryParams.create_time_end"
                    />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="resetPage">查询</el-button>
                    <el-button @click="resetParams">重置</el-button>
                    <export-data
                        class="ml-2.5"
                        :fetch-fun="getUserList"
                        :params="queryParams"
                        :page-size="pager.size"
                    />
                </el-form-item>
            </el-form>
        </el-card>
        <el-card class="!border-none mt-4" shadow="never">
            <div>
                <el-button
                    v-perms="['tenant.tenant/add']"
                    type="primary"
                    @click="addRef?.openHandle()"
                >
                    <template #icon>
                        <icon name="el-icon-Plus" />
                    </template>
                    新增
                </el-button>
            </div>
            <el-table class="mt-4" size="large" v-loading="pager.loading" :data="pager.lists">
                <el-table-column label="编号" prop="sn" width="120" />
                <el-table-column label="头像" width="90" align="center">
                    <template #default="{ row }">
                        <el-avatar :src="row.avatar" :size="50" />
                    </template>
                </el-table-column>
                <el-table-column label="租户名称" prop="name" min-width="100" />
                <el-table-column label="联系方式" prop="tel" min-width="130" />
                <el-table-column label="用户数量" prop="users_count" min-width="100">
                    <template #default="{ row }">
                        <el-button
                            type="primary"
                            link
                            @click="editRef?.openHandle(row.id, false, 'users')"
                        >
                            {{ row.users_count }}
                        </el-button>
                    </template>
                </el-table-column>
                <el-table-column label="状态" min-width="80">
                    <template #default="{ row }">
                        <el-tag :type="row.disable === 0 ? 'primary' : 'info'">
                            {{ row.disable === 0 ? '开启' : '关闭' }}
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="默认域名" prop="default_domain" min-width="200" />
                <el-table-column label="域名别名" prop="domain_alias" min-width="200" />
                <el-table-column label="启用别名" prop="domain_alias_enable" min-width="100">
                    <template #default="{ row }">
                        <el-tag :type="row.domain_alias_enable === 0 ? 'primary' : 'info'">
                            {{ row.domain_alias_enable === 0 ? '启用' : '禁用' }}
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="创建时间" prop="create_time" min-width="200" />
                <el-table-column label="备注" prop="notes" min-width="150" show-overflow-tooltip />

                <el-table-column label="操作" width="260" fixed="right">
                    <template #default="{ row }">
                        <el-button v-perms="['user.user/detail']" type="primary" link>
                            <a :href="row.domain" target="_blank">进入后台</a>
                        </el-button>
                        <el-button
                            v-perms="['user.user/detail']"
                            type="primary"
                            link
                            @click="editRef?.openHandle(row.id)"
                        >
                            详情
                        </el-button>
                        <el-button
                            v-perms="['user.user/edit']"
                            type="primary"
                            link
                            @click="editRef?.openHandle(row.id, true)"
                        >
                            编辑
                        </el-button>

                        <el-button
                            v-perms="['user.user/delete']"
                            type="danger"
                            link
                            @click="handleDelete(row.id)"
                        >
                            删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="flex justify-end mt-4">
                <pagination v-model="pager" @change="getLists" />
            </div>
        </el-card>
        <Edit ref="editRef" @refresh="getLists()" />
        <Add ref="addRef" @refresh="getLists()" />
    </div>
</template>
<script lang="ts" setup name="consumerLists">
import { getUserList, userDelete } from '@/api/consumer'
import { usePaging } from '@/hooks/usePaging'
import feedback from '@/utils/feedback'
import { useComponentRef } from '@/utils/getExposeType'

import Add from './../components/add.vue'
import Edit from './../components/edit.vue'

const editRef = useComponentRef(Edit)
const addRef = useComponentRef(Add)

const queryParams = reactive({
    keyword: '',
    channel: '',
    create_time_start: '',
    create_time_end: ''
})

const { pager, getLists, resetPage, resetParams } = usePaging({
    fetchFun: getUserList,
    params: queryParams
})
onActivated(() => {
    getLists()
})

const handleDelete = async (id: number) => {
    await feedback.confirm('确定要删除？')
    await userDelete({ id })
    getLists()
}

getLists()
</script>
