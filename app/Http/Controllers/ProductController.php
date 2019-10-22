<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    protected $request;

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    //GET /products From ProductionGallery.vue
    public function getProducts()
    {
        $pageSize = $this->request->pageSize;
        return Product::paginate($pageSize);
    }

}
