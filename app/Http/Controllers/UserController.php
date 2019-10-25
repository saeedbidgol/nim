<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    protected $request;

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function updatePassword(User $user)
    {
        $this->request->validate([
            'current_password' => 'required',
            'password' => 'required|min:8|confirmed',
            'password_confirmation' => 'required|min:8'
        ]);
        if (!Hash::check($this->request->current_password, $user->password))
            return response()->json(['message' => 'رمزعبور فعلی صحیح نیست'], 422);
        $password = Hash::make($this->request->password);
        $user->password = $password;
        $user->save();
    }

    public function getUsers()
    {
        return User::all();
    }

    public function addUser()
    {
        $this->request->validate([
            'username' => Rule::unique('users')
        ]);
        $data = $this->request->all();
        $data['password'] = Hash::make($this->request->password);
        return User::create($data);
    }

    public function deleteUser(User $user)
    {
        if ($user->type == 1)
            return response()->json(['message' => 'شما این دسترسی را ندارید'], 422);
        $user->delete();
    }

    public function updateUser($user)
    {
        $this->request->validate([
            'username' => Rule::unique('users')->ignore($user)
        ]);
        $data = $this->request->except('id');
        User::where('id', $user)->update($data);
    }
}
