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
namespace app\platformapi\logic\tenant;

use app\common\enum\user\UserTerminalEnum;
use app\common\logic\BaseLogic;
use app\common\model\tenant\Tenant;

/**
 * 用户逻辑层
 * Class TenantLogic
 * @package app\platformapi\logic\user
 */
class TenantLogic extends BaseLogic
{

    /**
     * @notes 用户详情
     * @param int $userId
     * @return array
     * @author 段誉
     * @date 2022/9/22 16:32
     */
    public static function detail(int $userId): array
    {
        $field = "id,sn,name,avatar,disable,create_time";

        $user = Tenant::where(['id' => $userId])->field($field)
            ->findOrEmpty();

        return $user->toArray();
    }


    /**
     * @notes 更新用户信息
     * @param array $params
     * @author 段誉
     * @date 2022/9/22 16:38
     */
    public static function setUserInfo(array $params)
    {
        return Tenant::update([
            'id' => $params['id'],
            $params['field'] => $params['value']
        ]);
    }
}