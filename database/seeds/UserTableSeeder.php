<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'admin', 'family' => 'admin', 'username' => 'admin', 'mobile' => '09360325821', 'type' => '1', 'password' => Hash::make('12345678')
        ]);
    }
}
