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

    public function getFavorites()
    {
        return Product::orderByDesc('favorite')->take(10)->get();
    }

    public function getPortfolio()
    {
        return Product::take(8)->get();
    }

    public function deleteColorOfProduct(Product $product, $color)
    {
        $product->colors()->where('id', $color)->delete();
    }

    public function deleteProduct(Product $product)
    {
        $product->colors()->delete();
        $product->delete();
    }

    public function updateProduct()
    {
        $productID = $this->request->id;
        $data = $this->request->except(['decor', 'pic', 'file']);
        unset($data['id']);
        Product::where('id', $productID)->update($data);
        $product = Product::find($productID);

        $this->uploadProductFiles($product);
    }

    public function addProduct()
    {
        if ($this->request->has('id'))
            return $this->updateProduct();

        $product = Product::create([
            'name' => $this->request->name,
            'code' => $this->request->code,
            'back_color' => $this->request->back_color,
            'dimension' => $this->request->dimension,
            'reed' => $this->request->reed,
            'color_count' => $this->request->color_count,
            'density' => $this->request->density,
            'about' => $this->request->about ?? null
        ]);

        $this->uploadProductFiles($product);
    }

    public function uploadProductFiles($product)
    {
        $picFile = "";
        $decorFile = "";

        if ($this->request->hasFile('decor')) {
            $file = $this->request->file('decor');
            $decorFile = $file->store("products", 'uploads');
        }
        if ($this->request->hasFile('pic')) {
            $file = $this->request->file('pic');
            $picFile = $file->store("products", 'uploads');
        }

        if ($picFile || $decorFile)
            $product->update(['pic_url' => $picFile, 'decor_url' => $decorFile]);

        if ($this->request->hasFile('file')) {
            $files = $this->request->file('file');
            $filesStored = collect($files)->map(function ($file) {
                return [
                    'file_url' => $file->store("colors", 'uploads')
                ];
            })->all();

            $product->colors()->createMany($filesStored);
        }
    }

    //GET /products From ProductionGallery.vue
    public function getProducts()
    {
        return Product::with('colors')->paginate(10);
    }
}
