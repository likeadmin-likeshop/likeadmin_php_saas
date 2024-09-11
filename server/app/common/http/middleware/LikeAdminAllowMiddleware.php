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

declare (strict_types=1);

namespace app\common\http\middleware;

use app\common\model\tenant\Tenant;
use app\common\service\JsonService;
use Closure;

/**
 * 自定义跨域中间件
 * Class LikeAdminAllowMiddleware
 * @package app\common\http\middleware
 */
class LikeAdminAllowMiddleware
{
    /**
     * @notes 跨域处理
     * @param $request
     * @param \Closure $next
     * @param array|null $header
     * @return mixed|\think\Response
     * @author 令狐冲
     * @date 2021/7/26 11:51
     */
    public function handle($request, Closure $next, ?array $header = [])
    {
        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Headers: Authorization, Sec-Fetch-Mode, DNT, X-Mx-ReqToken, Keep-Alive, User-Agent, If-Match, If-None-Match, If-Unmodified-Since, X-Requested-With, If-Modified-Since, Cache-Control, Content-Type, Accept-Language, Origin, Accept-Encoding,Access-Token,token,version");
        header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, post');
        header('Access-Control-Max-Age: 1728000');
        header('Access-Control-Allow-Credentials:true');
        if (strtoupper($request->method()) == "OPTIONS") {
            return response();
        }

        // 判断租户是否有配置并启用别名
        $tenantModel = Tenant::withoutGlobalScope();
        $domain = preg_replace('/^https?:\/\/|\/$/', '', $request->domain());
        $tenant = $tenantModel->where(['domain_alias' => $domain])->findOrEmpty();
        if(!empty($tenant)) {
            if($tenant->disable === 0) {
                // 通过别名访问
                $request->tenantId = $tenant->tenant_id;
            } else {
                return JsonService::fail('该租户已停用', [], 3, 0);
            }
        } else {
            return JsonService::fail('域名错误或租户不存在', [], 4, 0);
        }

        // 默认域名访问
        $host_arr = explode('/', $request->pathinfo());

        // 区分是访问页面还是访问接口
        if (str_contains($host_arr[0], 'api') !== false) {
            if ($host_arr[0] !== 'platformapi') {
                $request->tenantSn = $request->subDomain();
                $tenant = $tenantModel->where(['sn' => $request->tenantSn])->findOrEmpty();
                if (!$tenant->isEmpty() && $tenant['status'] !== 2) {
                    if ($tenant['disable'] === 0) {
                        $request->tenantId = $tenant->id;
                    } else {
                        return JsonService::fail('该租户已停用', [], 3, 0);
                    }
                } else {
                    return JsonService::fail('接口域名错误或租户不存在', [], 4, 0);
                }
            }
        } else {
            if ($host_arr[0] !== 'platform') {
                $request->tenantSn = $request->subDomain();
                $tenant = $tenantModel->where(['sn' => $request->tenantSn])->findOrEmpty();
                if (!$tenant->isEmpty() && $tenant['status'] !== 2) {
                    if ($tenant['disable'] === 1) {
                        return view(app()->getRootPath() . 'public/403.html');
                    } else {
                        $request->tenantId = $tenant->id;
                    }
                } else {
                    return view(app()->getRootPath() . 'public/404.html');
                }
            }
        }

        return $next($request);
    }
}