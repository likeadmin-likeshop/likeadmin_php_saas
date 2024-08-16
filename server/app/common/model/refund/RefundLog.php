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

namespace app\common\model\refund;


use app\common\enum\RefundEnum;
use app\common\model\auth\Admin;
use app\common\model\BaseModel;


/**
 * 退款日志模型
 * Class RefundLog
 * @package app\common\model\refund
 */
class RefundLog extends BaseModel
{

    /**
     * @notes 操作人描述
     * @param $value
     * @param $data
     * @return mixed
     * @author 段誉
     * @date 2022/12/1 10:55
     */
    public function getHandlerAttr($value, $data)
    {
        return Admin::where('id', $data['handle_id'])->value('name');
    }


    /**
     * @notes 退款状态描述
     * @param $value
     * @param $data
     * @return string|string[]
     * @author 段誉
     * @date 2022/12/1 10:55
     */
    public function getRefundStatusTextAttr($value, $data)
    {
        return RefundEnum::getStatusDesc($data['refund_status']);
    }

}
