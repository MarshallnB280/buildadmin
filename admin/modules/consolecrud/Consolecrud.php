<?php

namespace modules\consolecrud;

use think\facade\Console;

class Consolecrud
{
    public function AppInit()
    {
        if (request()->isCli()) {
            Console::starting(function (\think\Console $console) {
                $console->addCommand('app\admin\command\Crud');
            });
        }
    }
}