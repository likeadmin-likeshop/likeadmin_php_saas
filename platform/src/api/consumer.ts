import request from '@/utils/request'

// 用户列表
export function getUserList(params: any) {
    return request.get({ url: '/tenant.tenant/lists', params }, { ignoreCancelToken: true })
}

// 用户详情
export function getUserDetail(params: any) {
    return request.get({ url: '/tenant.tenant/detail', params })
}

// 用户编辑
export function userEdit(params: any) {
    return request.post({ url: '/tenant.tenant/edit', params })
}

// 用户新增
export function userAdd(params: any) {
    return request.post({ url: '/tenant.tenant/add', params })
}

// 用户新增
export function userDelete(params: any) {
    return request.post({ url: '/tenant.tenant/delete', params })
}
