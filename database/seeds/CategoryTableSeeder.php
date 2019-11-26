<?php

use Illuminate\Database\Seeder;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            ['name' => 'دسته اول', 'file_url' => 'categories/product1.jpg', 'created_at' => now()],
            ['name' => 'دسته دوم', 'file_url' => 'categories/product1.jpg', 'created_at' => now()],
            ['name' => 'دسته سوم', 'file_url' => 'categories/product1.jpg', 'created_at' => now()],
        ]);
    }
}
