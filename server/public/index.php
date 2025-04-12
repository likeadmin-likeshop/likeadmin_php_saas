<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2019 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

// [ 应用入口文件 ]
namespace think;

require __DIR__ . '/../vendor/autoload.php';

$app = new App();
$host = $_SERVER['HTTP_HOST'];
$env = loadEnv();
$url = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
if ($url == '/' && $env['HTTP_HOST'] == $host) {
    header("location:/platform/");
    exit;
}

$whe = !str_starts_with($url, '/platformapi/config/getConfig') && !str_starts_with($url, '/tenantapi/config/getConfig') && !str_starts_with($url, '/api/pc/config') && !str_starts_with($url, '/api/index/config');
if ($whe && !file_exists(__DIR__ . '/../config/install.lock')) {
    header("location:/install/install.php");
    exit;
}

define('ROOT_PATH', __DIR__);

// 执行HTTP应用并响应
$http = $app->http;

$response = $http->run();

$response->send();

$http->end($response);


function loadEnv(): array
{

    $lines = file(__DIR__ . '/../.env', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    $env = [];

    foreach ($lines as $line) {
        // 跳过注释行
        if (str_starts_with(trim($line), '#')) {
            continue;
        }

        // 跳过不包含=行
        if (!str_contains($line, '=')) {
            continue;
        }

        // 分割键值
        list($key, $value) = explode('=', $line, 2);
        $key = trim($key);
        $value = trim($value);

        // 移除值两端的引号
        if (preg_match('/^"(.*)"$/', $value, $m) || preg_match('/^\'(.*)\'$/', $value, $m)) {
            $value = $m[1];
        }

        // 处理转义字符（如\n）
        $value = str_replace('\\n', "\n", $value);

        // 存储到环境和全局变量
        $env[$key] = $value;
    }

    return $env;
}