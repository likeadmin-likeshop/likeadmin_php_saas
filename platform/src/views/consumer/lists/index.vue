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
                <el-button v-perms="['tenant.tenant/add']" type="primary">
                    <template #icon>
                        <icon name="el-icon-Plus" />
                    </template>
                    新增
                </el-button>
            </div>
            <el-table class="mt-4" size="large" v-loading="pager.loading" :data="pager.lists">
                <el-table-column label="编号" prop="sn" width="80" />
                <el-table-column label="头像" width="90" align="center">
                    <template #default="{ row }">
                        <el-avatar :src="row.avatar" :size="50" />
                    </template>
                </el-table-column>
                <el-table-column label="租户名称" prop="name" min-width="100" />
                <el-table-column label="用户数量" prop="name" min-width="100" />
                <el-table-column label="状态" min-width="50">
                    <template #default="{ row }">
                        <el-tag :type="row.disable === 0 ? '' : 'danger'">
                            {{ row.disable === 0 ? '开启' : '关闭' }}
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="创建时间" prop="create_time" min-width="120" />
                <el-table-column label="操作" width="260" fixed="right">
                    <template #default="{ row }">
                        <el-button v-perms="['user.user/detail']" type="primary" link>
                            <a href="http://localhost:5174/admin/login" target="_blank">进入后台</a>
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
                            v-perms="['user.user/detail']"
                            type="primary"
                            link
                            @click="editRef?.openHandle(row.id, true)"
                        >
                            编辑
                        </el-button>

                        <el-button v-perms="['user.user/detail']" type="primary" link>
                            <el-dropdown>
                                <el-button v-perms="['user.user/detail']" type="primary" link>
                                    <span class="flex items-center gap-1">
                                        <span>更多</span>
                                        <el-icon>
                                            <arrow-down />
                                        </el-icon>
                                    </span>
                                </el-button>

                                <template #dropdown>
                                    <el-dropdown-menu>
                                        <el-dropdown-item>套餐</el-dropdown-item>
                                        <el-dropdown-item divided>
                                            <span class="text-danger">删除</span>
                                        </el-dropdown-item>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="flex justify-end mt-4">
                <pagination v-model="pager" @change="getLists" />
            </div>
        </el-card>
        <Edit ref="editRef" />
    </div>
</template>
<script lang="ts" setup name="consumerLists">
import { getUserList } from '@/api/consumer'
import { usePaging } from '@/hooks/usePaging'
import { getRoutePath } from '@/router'
import { useComponentRef } from '@/utils/getExposeType'

import Edit from './../components/edit.vue'

const editRef = useComponentRef(Edit)

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

getLists()
</script>
