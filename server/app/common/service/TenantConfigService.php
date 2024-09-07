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

declare(strict_types=1);

namespace app\common\service;

use app\common\enum\AdminTerminalEnum;
use app\common\model\Config;
use app\common\model\TenantConfig;

class TenantConfigService
{
    /**
     * @notes 设置配置值
     * @param $type
     * @param $name
     * @param $value
     * @return mixed
     * @author 段誉
     * @date 2021/12/27 15:00
     */
    public static function set(string $type, string $name, $value, $tenant_id)
    {
        $original = $value;
        if (is_array($value)) {
            $value = json_encode($value, JSON_UNESCAPED_UNICODE);
        }
        $options = [
            'type'      => $type,
            'name'      => $name,
            'value'     => $value,
            'tenant_id' => $tenant_id
        ];
        $query = ['type' => $type, 'name' => $name, 'tenant_id' => $tenant_id];

        $data = (new TenantConfig())->where($query)->findOrEmpty();

        if ($data->isEmpty()) {
            (new TenantConfig())->create($options);
        } else {
            $data->value = $value;
            $data->save();
        }

        // 返回原始值
        return $original;
    }

    /**
     * @notes 获取配置值
     * @param string $type
     * @param string $name
     * @param null $default_value
     * @return array|int|mixed|string
     * @author Tab
     * @date 2021/7/15 15:16
     */
    public static function get(string $type, $tenant_id, string $name = '', $default_value = null)
    {
        $query = ['type' => $type, 'name' => $name, 'tenant_id' => $tenant_id];

        if (!empty($name)) {
            $value = (new TenantConfig())->where($query)->value('value');
            if (!is_null($value)) {
                $json = json_decode($value, true);
                $value = json_last_error() === JSON_ERROR_NONE ? $json : $value;
            }
            if ($value) {
                return $value;
            }
            // 返回特殊值 0 '0'
            if ($value === 0 || $value === '0') {
                return $value;
            }
            // 返回默认值
            if ($default_value !== null) {
                return $default_value;
            }
            // 返回本地配置文件中的值
            return config('project.' . $type . '.' . $name);
        }

        // 取某个类型下的所有name的值
        $data = (new TenantConfig())->where(['type' => $type])->column('value', 'name');
        foreach ($data as $k => $v) {
            $json = json_decode($v, true);
            if (json_last_error() === JSON_ERROR_NONE) {
                $data[$k] = $json;
            }
        }
        if ($data) {
            return $data;
        }
        return null;
    }
}