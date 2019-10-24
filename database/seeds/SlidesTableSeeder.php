<?php

use Illuminate\Database\Seeder;

class SlidesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('slides')->insert([
            [
                'file_url' => "slides/slide-1.jpg"
            ],
            [
                'file_url' => "slides/slide-2.jpg"
            ],
        ]);
    }
}
