<?php

namespace App;

use App\Infrustructure\BaseModel;

class Product extends BaseModel
{
    public function colors()
    {
        return $this->hasMany(Color::class,'product_id');    
    }
}
