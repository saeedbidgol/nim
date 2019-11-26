<?php

use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 4; $i++) {
            DB::table('products')->insert([
                ['code' => '001', 'category_id' => $i, 'favorite' => $i + 1, 'name' => 'آیسا', 'back_color' => 'آبی', 'dimension' => '[{"dimension":"10*60","price":"20"}]', 'reed' => 1200, 'color_count' => 12, 'density' => 2550, 'about' => 'فرشی زیبا', 'pic_url' => 'products/product1.jpg', 'decor_url' => 'decoration/decoration.jpg', 'created_at' => now()],
            ]);
        }

        DB::table('colors')->insert([
            ['color_id' => 1, 'product_id' => 1, 'created_at' => now()],
            ['color_id' => 2, 'product_id' => 1, 'created_at' => now()],
            ['color_id' => 3, 'product_id' => 1, 'created_at' => now()],
            ['color_id' => 1, 'product_id' => 2, 'created_at' => now()],
            ['color_id' => 4, 'product_id' => 2, 'created_at' => now()],
            ['color_id' => 5, 'product_id' => 2, 'created_at' => now()],
            ['color_id' => 6, 'product_id' => 2, 'created_at' => now()],
            ['color_id' => 7, 'product_id' => 3, 'created_at' => now()],
        ]);
    }
}
