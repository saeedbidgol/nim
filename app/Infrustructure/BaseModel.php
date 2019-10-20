<?php

namespace App\Infrustructure;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BaseModel extends Model
{
    protected $guarded = ['id'];

    use SoftDeletes;
}
