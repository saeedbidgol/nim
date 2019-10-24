<?php

use Illuminate\Database\Seeder;

class CataloguesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('catalogues')->insert([
            'file_url' => "catalogues/catalogue.jpeg"
        ]);
    }
}
