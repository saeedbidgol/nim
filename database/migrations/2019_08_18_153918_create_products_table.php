<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('code');
            $table->string('name');
            $table->string('back_color');
            $table->string('price')->nullable();
            $table->string('wrap')->nullable();
            $table->string('weft')->nullable();
            $table->string('pile')->nullable();
            $table->longtext('dimension');
            $table->integer('reed');
            $table->integer('color_count');
            $table->longtext('density');
            $table->longtext('about')->nullable();
            $table->integer('favorite')->default(0);
            $table->string('pic_url')->nullable();
            $table->string('decor_url')->nullable();
            $table->integer('category_id')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
