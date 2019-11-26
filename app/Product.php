<?php

namespace App;

use App\Infrustructure\BaseModel;

class Product extends BaseModel
{
    public function colors()
    {
        return $this->hasMany(Color::class, 'product_id');
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    #Region scopes
    public function scopeOfSearch($query, $search)
    {
        if (empty($search))
            return $query;
        return $query->where('name', 'like', "%$search%")->orWhere('code', 'like', "%$search%");
    }

    public function scopeOfReed($query, $reed)
    {
        if (empty($reed))
            return $query;
        return $query->where('reed', $reed);
    }

    public function scopeOfColor($query, $color)
    {
        if (empty($color))
            return $query;
        return $query->whereHas('colors', function ($q) use ($color) {
            $q->where('color_id', $color);
        });
    }

    public function scopeOfColorCount($query, $count)
    {
        if (empty($count))
            return $query;
        return $query->where('color_count', $count);
    }
    #end
}
