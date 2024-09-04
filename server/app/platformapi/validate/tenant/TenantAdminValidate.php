<?php
// +----------------------------------------------------------------------
// | likeadmin快速开发前后端分离管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/likeshop_gitee/likeadmin
// | github下载：https://github.com/likeshop-github/likeadmin
// | 访问官网：https://www.likeadmin.cn
// | likeadmin团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: likeadminTeam
// +----------------------------------------------------------------------
namespace app\platformapi\validate\tenant;


use app\common\model\auth\TenantAdmin;
use app\common\model\tenant\Tenant;
use app\common\validate\BaseValidate;

/**
 * 用户验证
 * Class TenantValidate
 * @package app\platformapi\validate\user
 */
class TenantAdminValidate extends BaseValidate
{

    protected $rule = [
        'id' => 'require|checkUser',
        'tenant_id' => 'require|checkTenant',
        'account' => 'require',
        'name' => 'require',
        'password' => 'require',
    ];

    protected $message = [
        'id.require' => '请选择用户',
        'name.require' => '请输入用户名',
        'account.require' => '请输入账户',
        'tenant_id.require' => '请选择对应的租户',
        'password.require' => '请输入账号密码',
    ];


    /**
     * @notes 详情场景
     * @return TenantAdminValidate
     * @author yfdong
     * @date 2024/09/04 22:58
     */
    public function sceneDetail()
    {
        return $this->only(['id', 'tenant_id']);
    }


    /**
     * @notes 租户信息校验
     * @param $value
     * @param $rule
     * @param $data
     * @return string|true
     * @author yfdong
     * @date 2024/09/04 22:57
     */
    public function checkUser($value, $rule, $data)
    {
        $userIds = TenantAdmin::findOrEmpty($value);
        if ($userIds->isEmpty()) {
            return '租户管理员不存在';
        }
        return true;
    }

    /**
     * @notes 检查对应租户号是否存在
     * @param $value
     * @return string|true
     * @author yfdong
     * @date 2024/09/04 22:16
     */
    public function checkTenant($value)
    {
        $adminTenant = Tenant::where(['id' => $value])->findOrEmpty();
        if ($adminTenant->isEmpty()) {
            return '对应租户账号不存在';
        }
        return true;
    }

    /**
     * @notes 添加场景
     * @return TenantAdminValidate
     * @author yfdong
     * @date 2024/09/04 22:57
     */
    public function sceneAdd()
    {
        return $this->remove('id', true);
    }

    /**
     * @notes 修改场景
     * @return TenantAdminValidate
     * @author yfdong
     * @date 2024/09/04 22:57
     */
    public function sceneEdit()
    {
        return $this->remove('password', true);
    }

    /**
     * @notes 删除场景
     * @return TenantAdminValidate
     * @author yfdong
     * @date 2024/09/04 22:57
     */
    public function sceneDelete()
    {
        return $this->only(['id']);
    }


    /**
     * @notes 重置密码情形
     * @return TenantAdminValidate
     * @author yfdong
     * @date 2024/09/04 23:29
     */
    public function sceneResetPassword()
    {
        return $this->only(['id']);
    }
}