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

use app\common\model\auth\TenantSystemMenu;

/**
 * 租户菜单逻辑
 *  Class TenantSystemMenuLogic
 * @package app\platformapi\logic\tenant
 */
class TenantSystemMenuLogic
{

    /**
     * @notes 初始化租户菜单信息
     * @param $tenant_id
     * @author yfdong
     * @date 2024/09/05 22:15
     */
    public static function initialization($tenant_id)
    {
        //初始化租户菜单字段
        $field = "id,pid,type,name,icon,sort,perms,paths,component,selected,params,is_cache,is_show,is_disable,tenant_id";
        //查询模板菜单配置文件 此处默认为租户号为1的
        $tenantSystemMenuList = TenantSystemMenu::where(['tenant_id' => '1'])->field($field)->order('pid')->select();
        //记录对应的关系
        foreach ($tenantSystemMenuList as $item) {
            $tenantSystemMenu[$item['id']] = $item;
        }
        //创建菜单数据
        foreach ($tenantSystemMenuList as $item) {
            $item['tenant_id'] = $tenant_id;
            //创建新的菜单并保存原本id对应现在的哪个信息
            $oldId = $item['id'];
            unset($item['id']);
            $newMenu = TenantSystemMenu::create(self::toArray($item));
            $tenantSystemMenu[$oldId] = $newMenu;
        }
        //获取当前租户的初始化菜单关系
        $tenantSystemMenuNewList = TenantSystemMenu::where(['tenant_id' => $tenant_id])->field($field)->order('pid')->select();
        //更新对应的主菜单关系
        foreach ($tenantSystemMenuNewList as $item) {
            if ($item['pid'] != 0)
                $item['pid'] = $tenantSystemMenu[$item['pid']]['id'];
            $where = array('id' => intval($item['id']));
            TenantSystemMenu::update(self::toArray($item), $where);
        }
    }

    /**
     * @notes 对象转数组
     * @param mixed $menu
     * @return array
     * @author yfdong
     * @date 2024/09/07 12:44
     */
    private static function toArray(mixed $menu): array
    {
        return [
            'component' => $menu['component'],
            'icon' => $menu['icon'],
            'is_cache' => $menu['is_cache'],
            'is_disable' => $menu['is_disable'],
            'is_show' => $menu['is_show'],
            'name' => $menu['name'],
            'params' => $menu['params'],
            'paths' => $menu['paths'],
            'perms' => $menu['perms'],
            'pid' => $menu['pid'],
            'selected' => $menu['selected'],
            'sort' => $menu['sort'],
            'tenant_id' => (int) $menu['tenant_id'],
            'type' => $menu['type']
        ];
    }
}