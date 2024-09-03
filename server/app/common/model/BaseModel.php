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

use app\common\service\FileService;
use think\Exception;
use think\Model;
use app\common\cache\TenantAdminTokenCache;
use think\facade\Request;

/**
 * 基础模型
 * Class BaseModel
 * @package app\common\model
 */
class BaseModel extends Model
{
    // 定义全局的查询范围
    protected $globalScope = ['tenantId'];

    /**
     * @notes 公共处理图片,补全路径
     * @param $value
     * @return string
     * @author 张无忌
     * @date 2021/9/10 11:02
     */
    public function getImageAttr($value)
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
    public function setImageAttr($value)
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
     public function scopeTenantId($query): void
     {
         // 获取当前查询模型表名
         $table = $query->getTable();
         // 获取对应表字段
         $fields = $query->getConnection()->getTableInfo($table, 'fields');
         // 获取对应查询对象实体表中是否有对应的tenant_id字段
         if (in_array('tenant_id', $fields)) {
             // 从请求头中获取 token 对应登录信息中租户标识
             $token = Request::instance()->header('token');
             $adminInfo = (new TenantAdminTokenCache())->getAdminInfo($token);
             if (!empty($adminInfo['tenant_id'])) {
                 $tenantId = $adminInfo['tenant_id'];
                 $query->where('tenant_id', $tenantId);
             }else{
                 //视为越权查看，禁止返回结果
                 $query->where('tenant_id', 'no_access');
             }
         }
     }
}