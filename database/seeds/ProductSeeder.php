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
        //code,name,back_color, dimension, reed, color_count, density, about, pic_url, decor_url
        DB::table('products')->insert([
            ['code' => '001', 'favorite' => 1, 'name' => 'آیسا', 'back_color' => 'آبی', 'dimension' => '۲*۳', 'reed' => 1200, 'color_count' => 12, 'density' => 2550, 'about' => 'فرشی زیبا', 'pic_url' => 'products/product1.jpg', 'decor_url' => 'decoration/decoration.jpg', 'created_at' => now()],
            ['code' => '002', 'favorite' => 2, 'name' => 'آیسا', 'back_color' => 'آبی', 'dimension' => '۲*۳', 'reed' => 1200, 'color_count' => 12, 'density' => 2550, 'about' => 'فرشی زیبا', 'pic_url' => 'products/product1.jpg', 'decor_url' => 'decoration/decoration.jpg', 'created_at' => now()],
            ['code' => '003', 'favorite' => 3, 'name' => 'آیسا', 'back_color' => 'آبی', 'dimension' => '۲*۳', 'reed' => 1200, 'color_count' => 12, 'density' => 2550, 'about' => 'فرشی زیبا', 'pic_url' => 'products/product1.jpg', 'decor_url' => 'decoration/decoration.jpg', 'created_at' => now()],
            ['code' => '004', 'favorite' => 4, 'name' => 'آیسا', 'back_color' => 'آبی', 'dimension' => '۲*۳', 'reed' => 1200, 'color_count' => 12, 'density' => 2550, 'about' => 'فرشی زیبا', 'pic_url' => 'products/product1.jpg', 'decor_url' => 'decoration/decoration.jpg', 'created_at' => now()],
            ['code' => '004', 'favorite' => 5, 'name' => 'آیسا', 'back_color' => 'آبی', 'dimension' => '۲*۳', 'reed' => 1200, 'color_count' => 12, 'density' => 2550, 'about' => 'فرشی زیبا', 'pic_url' => 'products/product1.jpg', 'decor_url' => 'decoration/decoration.jpg', 'created_at' => now()],
            ['code' => '004', 'favorite' => 6, 'name' => 'آیسا', 'back_color' => 'آبی', 'dimension' => '۲*۳', 'reed' => 1200, 'color_count' => 12, 'density' => 2550, 'about' => 'فرشی زیبا', 'pic_url' => 'products/product1.jpg', 'decor_url' => 'decoration/decoration.jpg', 'created_at' => now()],
            ['code' => '004', 'favorite' => 7, 'name' => 'آیسا', 'back_color' => 'آبی', 'dimension' => '۲*۳', 'reed' => 1200, 'color_count' => 12, 'density' => 2550, 'about' => 'فرشی زیبا', 'pic_url' => 'products/product1.jpg', 'decor_url' => 'decoration/decoration.jpg', 'created_at' => now()],
            ['code' => '004', 'favorite' => 8, 'name' => 'آیسا', 'back_color' => 'آبی', 'dimension' => '۲*۳', 'reed' => 1200, 'color_count' => 12, 'density' => 2550, 'about' => 'فرشی زیبا', 'pic_url' => 'products/product1.jpg', 'decor_url' => 'decoration/decoration.jpg', 'created_at' => now()],
        ]);
    }
}
