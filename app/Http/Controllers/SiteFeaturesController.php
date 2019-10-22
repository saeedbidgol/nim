<?php

namespace App\Http\Controllers;

use App\SiteFeature;
use Illuminate\Http\Request;

class SiteFeaturesController extends Controller
{
    protected $request;

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function getAboutUs()
    {
        return SiteFeature::find(1)->about_us;
    }

    public function updateAboutUs()
    {
        SiteFeature::update(['about_us'=>$this->request->about]);
    }
}
