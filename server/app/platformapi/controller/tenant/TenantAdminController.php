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
namespace app\platformapi\controller\tenant;

use app\api\validate\PasswordValidate;
use app\platformapi\controller\BaseAdminController;
use app\platformapi\lists\tenant\TenantAdminLists;
use app\platformapi\logic\tenant\TenantAdminLogic;
use app\platformapi\validate\tenant\TenantAdminValidate;

/**
 * 租户账号用户控制器
 * Class TenantController
 * @package app\platformapi\controller\user
 */
class TenantAdminController extends BaseAdminController
{

    /**
     * @notes 获取租户管理员账号 租户查询参数必传防止越权查看
     * @return \think\response\Json
     * @author yfdong
     * @date 2024/09/04 22:11
     */
    public function lists()
    {
        return $this->dataLists(new TenantAdminLists());
    }


    /**
     * @notes 获取租户管理员账号 租户id以及主键id查询参数必传 防止越权查看
     * @return \think\response\Json
     * @author yfdong
     * @date 2024/09/04 22:14
     */
    public function detail()
    {
        $params = (new TenantAdminValidate())->goCheck('detail');
        $detail = TenantAdminLogic::detail($params['id']);
        return $this->success('获取租户详情成功', $detail);
    }

    /**
     * @notes 创建租户管理员账号
     * @return \think\response\Json
     * @author yfdong
     * @date 2024/09/04 22:58
     */
    public function add()
    {
        $params = (new TenantAdminValidate())->post()->goCheck('add');
        TenantAdminLogic::add($params);
        return $this->success('新增租户管理员账号成功', [], 1, 1);
    }

    /**
     * @notes 编辑租户管理员账号
     * @return \think\response\Json
     * @author yfdong
     * @date 2024/09/04 22:58
     */
    public function edit()
    {
        $params = (new TenantAdminValidate())->post()->goCheck('edit');
        TenantAdminLogic::edit($params);
        return $this->success('操作成功', [], 1, 1);
    }

    /**
     * @notes 修改密码
     * @return \think\response\Json
     * @author yfdong
     * @date 2024/09/04 23:00
     */
    public function changePassword()
    {
        $params = (new PasswordValidate())->post()->goCheck('changePassword');
        if (!isset($params['id'])) {
            return $this->fail('修改的用户标识不能为空', [], 1, 1);
        }
        $result = TenantAdminLogic::changePassword($params, (int)$params['id']);
        if (true === $result) {
            return $this->success('操作成功', [], 1, 1);
        }
        return $this->fail(TenantAdminLogic::getError());
    }

    /**
     * @notes 重置密码
     * @return \think\response\Json
     * @author yfdong
     * @date 2024/09/04 23:22
     */
    public function resetPassword()
    {
        $params = (new TenantAdminValidate())->post()->goCheck('resetPassword');
        $result = TenantAdminLogic::resetPassword((int)$params['id']);
        if (true === $result) {
            return $this->success('操作成功', [], 1, 1);
        }
        return $this->fail(TenantAdminLogic::getError());
    }

    /**
     * @notes 删除租户管理员账号
     * @return \think\response\Json
     * @author yfdong
     * @date 2024/09/04 22:59
     */
    public function delete()
    {
        $params = (new TenantAdminValidate())->post()->goCheck('delete');
        TenantAdminLogic::delete($params);
        return $this->success('删除成功', [], 1, 1);
    }
}