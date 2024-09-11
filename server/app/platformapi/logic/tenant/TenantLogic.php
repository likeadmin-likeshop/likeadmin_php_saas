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
use app\common\model\user\User;

/**
 * 用户逻辑层
 * Class TenantLogic
 * @package app\platformapi\logic\user
 */
class TenantLogic extends BaseLogic
{
    /**
     * @notes 新增租户
     * @param array $params
     * @return Tenant|\think\Model
     * @author JXDN
     * @date 2024/09/03 14:42
     */
    public static function add(array $params)
    {
        $domain_alias = preg_replace('/^https?:\/\/|\/$/', '', $params['domain_alias']);
        if (Tenant::where(['domain_alias' => $domain_alias])->find()) {
            self::setError('域名已存在');
        }
        return Tenant::create([
            'sn'                  => Tenant::createUserSn(),
            'name'                => $params['name'],
            'avatar'              => $params['avatar'],
            'tel'                 => $params['tel'],
            'domain_alias'        => $domain_alias,
            'domain_alias_enable' => $params['domain_alias_enable'],
            'disable'             => $params['disable'] ?? 0,
            'notes'               => $params['notes'] ?? '',
        ]);
    }

    /**
     * @notes 用户详情
     * @param int $userId
     * @return array
     * @author JXDN
     * @date 2024/09/03 17:04
     */
    public static function detail(int $userId): array
    {
        $field = "id,sn,name,avatar,tel,domain_alias,domain_alias_enable,disable,create_time,notes";

        $user = Tenant::where(['id' => $userId])->field($field)->find();
        $user['user_total'] = User::where(['tenant_id' => $userId])->count();

        $domain = self::getRootDmain(request()->domain());
        $user['default_domain'] = (self::checkHttp() ? 'https://' : 'http://') . $user['sn'] . '.' . $domain . '/tenant/';
        if ($user['domain_alias_enable'] === 0) {
            $user['domain'] = $user['domain_alias'] . '/tenant/';
        } else {
            $user['domain'] = $user['default_domain'];
        }

        return $user->toArray();
    }

    /**
     * @notes 更新租户信息
     * @param array $params
     * @return bool
     * @author JXDN
     * @date 2024/09/03 14:28
     */
    public static function edit(array $params)
    {
        try {
            Tenant::update([
                'id'                  => $params['id'],
                'name'                => $params['name'],
                'avatar'              => $params['avatar'],
                'disable'             => $params['disable'] ?? 0,
                'tel'                 => $params['tel'],
                'domain_alias'        => $params['domain_alias'],
                'domain_alias_enable' => $params['domain_alias_enable'],
                'notes'               => $params['notes'] ?? '',
            ]);
            return true;
        } catch (\Exception $e) {
            self::setError($e->getMessage());
            return false;
        }
    }

    /**
     * @notes 删除租户
     * @param array $params
     * @return void
     * @author JXDN
     * @date 2024/09/03 17:04
     */
    public static function delete(array $params)
    {
        Tenant::destroy($params['id']);
    }

    /**
     * @notes 检查是否为https
     * @return bool
     * @author JXDN
     * @date 2024/09/11 14:39
     */
    public static function checkHttp()
    {
        if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on') {
            return true;
        } else {
            return false;
        }
    }

    /**
     * @notes 获取根域名
     * @param $url
     * @return array|int|string|null
     * @author JXDN
     * @date 2024/09/11 14:49
     */
    public static function getRootDmain($url)
    {
        // 解析 URL 获取主机名
        $host = parse_url($url, PHP_URL_HOST);

        // 如果主机名为空，返回 null
        if (!$host) {
            return null;
        }

        // 拆分域名
        $parts = explode('.', $host);

        // 检查域名的级数
        $numParts = count($parts);

        // 针对常见的两级或三级域名进行处理
        if ($numParts >= 2) {
            // 获取最后两部分，例如 qq.com 或 co.uk
            $rootDomain = $parts[$numParts - 2] . '.' . $parts[$numParts - 1];
            return $rootDomain;
        }

        return $host; // 当域名本身就是根域名时，直接返回
    }
}