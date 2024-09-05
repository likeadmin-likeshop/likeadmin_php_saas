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
namespace app\platformapi\lists\tenant;

use app\tenantapi\lists\BaseAdminDataLists;
use app\common\enum\user\UserTerminalEnum;
use app\common\lists\ListsExcelInterface;
use app\common\model\tenant\Tenant;


/**
 * 用户列表
 * Class TenantLists
 * @package app\tenantapi\lists\user
 */
class TenantLists extends BaseAdminDataLists implements ListsExcelInterface
{

    /**
     * @notes 搜索条件
     * @return array
     * @author 段誉
     * @date 2022/9/22 15:50
     */
    public function setSearch(): array
    {
        $allowSearch = ['keyword', 'create_time_start', 'create_time_end'];
        return array_intersect(array_keys($this->params), $allowSearch);
    }


    /**
     * @notes 获取用户列表
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author 段誉
     * @date 2022/9/22 15:50
     */
    public function lists(): array
    {
        $field = "id,sn,name,avatar,disable,create_time";

        $lists = Tenant::withCount(['users'])
            ->withSearch($this->setSearch(), $this->params)
            ->limit($this->limitOffset, $this->limitLength)
            ->field($field)
            ->order('id desc')
            ->select()->toArray();

        // 获取当前的完整域名
        $domain = request()->domain();

        // 解析域名，移除协议部分并去除 'www.' 前缀
        $parsedDomain = parse_url($domain, PHP_URL_HOST); // 获取域名部分

        // 去除 'www.' 前缀，如果存在
        $cleanDomain = preg_replace('/^www\./', '', $parsedDomain);

        // 遍历结果，添加 link 字段
        $lists = array_map(function ($item) use ($cleanDomain) {
            // 拼接租户的链接 http://[sn].likeadmin-saas.localhost/tenant/
            $item['domain'] = 'http://' . $item['sn'] . '.' . $cleanDomain . '/tenant/';
            return $item;
        }, $lists);

        return $lists;
    }


    /**
     * @notes 获取数量
     * @return int
     * @author 段誉
     * @date 2022/9/22 15:51
     */
    public function count(): int
    {
        return Tenant::withSearch($this->setSearch(), $this->params)->count();
    }


    /**
     * @notes 导出文件名
     * @return string
     * @author 段誉
     * @date 2022/11/24 16:17
     */
    public function setFileName(): string
    {
        return '租户列表';
    }


    /**
     * @notes 导出字段
     * @return string[]
     * @author 段誉
     * @date 2022/11/24 16:17
     */
    public function setExcelFields(): array
    {
        return [
            'sn' => '租户编号',
            'name' => '租户昵称',
            'disable' => '租户状态',
            'create_time' => '注册时间',
        ];
    }

}