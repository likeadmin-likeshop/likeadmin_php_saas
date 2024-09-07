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

namespace app\common\model;

use app\common\cache\TenantAdminTokenCache;
use app\common\enum\AdminTerminalEnum;
use app\common\service\FileService;
use think\facade\Request;
use think\Model;

/**
 * 基础模型
 * Class BaseModel
 * @package app\common\model
 */
class BaseModel extends Model
{
    // 定义全局的查询范围
    protected           $globalScope = ['tenantId'];
    private static bool $hasTenantId = false;

    /**
     * @notes 公共处理图片，补全路径
     * @param $value
     * @return string
     * @author 张无忌
     * @date 2021/9/10 11:02
     */
    public function getImageAttr($value): string
    {
        return trim($value) ? FileService::getFileUrl($value) : '';
    }

    /**
     * @notes 公共图片处理,去除图片域名
     * @param $value
     * @return mixed|string
     * @author 张无忌
     * @date 2021/9/10 11:04
     */
    public function setImageAttr($value): mixed
    {
        return trim($value) ? FileService::setFileUrl($value) : '';
    }

    /**
     * @notes 增加全局
     * @param $query
     * @return void
     * @author yfdong
     * @date 2024/09/03 22:45
     */
    public static function scopeTenantId($query): void
    {
        $tenantId = self::checkTenant();
        if ($tenantId) {
            // 获取当前查询模型表名
            $table = $query->getTable();
            // 获取对应表字段
            $fields = $query->getConnection()->getTableInfo($table, 'fields');
            // 获取对应查询对象实体表中是否有对应的tenant_id字段
            if (in_array('tenant_id', $fields)) {
                self::$hasTenantId = true;
                $query->where($table . '.tenant_id', $tenantId);
            }
        }
    }

    /**
     * @notes 插入语句前置处理
     * @param $model
     * @return void
     * @author JXDN
     * @date 2024/09/04 15:48
     */
    public static function onBeforeInsert($model): void
    {
        $tenantId = self::checkTenant();
        if ($tenantId) {
            if (self::$hasTenantId) {
                $model->tenant_id = $tenantId;
            }
        }
    }

    /**
     * @notes 判断是否为租户端
     * @return false|mixed|void
     * @author JXDN
     * @date 2024/09/04 16:01
     */
    private static function checkTenant()
    {
        $token = Request::header('token');
        if (AdminTerminalEnum::isTenant() && $token !== "null") {
            $tenant_id = \request()->tenantId;
            if ($tenant_id) {
                return $tenant_id;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}