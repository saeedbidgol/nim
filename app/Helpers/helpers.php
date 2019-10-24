<?php
use App\User;
use Illuminate\Support\Facades\Auth;


if (!function_exists('usr')) {
    function usr()
    {
        $currentUserID = Auth::user()->id;
        return User::find($currentUserID);
    }
}

if(!function_exists('user')) {
    function user()
    {
        return Auth::user();
    }
}
