<?php

use Illuminate\Database\Seeder;

class SiteFeaturesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'admin', 'family' => 'admin', 'mobile' => '09360325821', 'code' => '325821', 'email' => 'test1@gmail.com', 'password' => Hash::make('12345678')
        ]);
    }
}
