<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
}
