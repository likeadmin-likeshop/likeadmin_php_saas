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

use app\platformapi\controller\BaseAdminController;
use app\platformapi\lists\tenant\TenantLists;
use app\platformapi\logic\tenant\TenantLogic;
use app\platformapi\validate\tenant\AdjustUserMoney;
use app\platformapi\validate\tenant\TenantValidate;

/**
 * 用户控制器
 * Class TenantController
 * @package app\platformapi\controller\user
 */
class TenantController extends BaseAdminController
{

    /**
     * @notes 用户列表
     * @return \think\response\Json
     * @author 段誉
     * @date 2022/9/22 16:16
     */
    public function lists()
    {
        return $this->dataLists(new TenantLists());
    }


    /**
     * @notes 获取用户详情
     * @return \think\response\Json
     * @author 段誉
     * @date 2022/9/22 16:34
     */
    public function detail()
    {
        $params = (new TenantValidate())->goCheck('detail');
        $detail = TenantLogic::detail($params['id']);
        return $this->success('', $detail);
    }

    /**
     * @notes 编辑用户信息
     * @return \think\response\Json
     * @author 段誉
     * @date 2022/9/22 16:34
     */
    public function add()
    {
        $params = (new TenantValidate())->post()->goCheck('add');
        TenantLogic::add($params);
        return $this->success('新增成功', [], 1, 1);
    }

    /**
     * @notes 编辑用户信息
     * @return \think\response\Json
     * @author 段誉
     * @date 2022/9/22 16:34
     */
    public function edit()
    {
        $params = (new TenantValidate())->post()->goCheck();
        TenantLogic::edit($params);
        return $this->success('操作成功', [], 1, 1);
    }

    /**
     * @notes 删除租户
     * @return \think\response\Json
     * @author JXDN
     * @date 2024/09/03 17:02
     */
    public function delete()
    {
        $params = (new TenantValidate())->post()->goCheck('delete');
        TenantLogic::delete($params);
        return $this->success('删除成功', [], 1, 1);
    }
}