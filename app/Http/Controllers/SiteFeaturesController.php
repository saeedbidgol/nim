<?php

namespace App\Http\Controllers;

use App\Catalogue;
use App\SiteFeature;
use App\Slide;
use Illuminate\Http\Request;

class SiteFeaturesController extends Controller
{
    protected $request;

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function updateContactUs()
    {
        return SiteFeatures::where('id', 1)->update($this->request->all());
    }

    //GET site-features/contact-us From ContactUs.vue
    public function getContactUs()
    {
        return SiteFeatures::first();
    }

    //POST site-features/slides From Slides.vue
    public function addCatalogue()
    {
        $this->validate($this->request, [
            'name' => 'required|max:191',
            'file' => ['required', 'mimes:jpeg,jpg,bmp,png']
        ]);

        $slide = Catalogue::create(['name' => $this->request->name]);
        if ($this->request->hasFile('file')) {
            $file = $this->request->file('file');
            $fileStored = $file->store("catalogues", 'uploads');
            $slide->update(['file_url' => $fileStored]);
        }
        return $slide;
    }

    //DELETE site-features/slides/{slide} From slides.vue
    public function deleteCatalogue($catalogue)
    {
        Catalogue::where('id', $catalogue)->delete();
    }

    //POST site-features/slides/{slide}/update From slides.vue
    public function updateCatalogue($catalogue)
    {
        $this->validate($this->request, [
            'name' => 'required|max:191'
        ]);

        Catalogue::where('id', $catalogue)->update(['name' => $this->request->name]);
        if ($this->request->hasFile('file')) {
            $file = $this->request->file('file');
            $fileStored = $file->store("catalogues", 'uploads');
            Catalogue::where('id', $catalogue)->update(['file_url' => $fileStored]);
        }
    }

    //GET site-features/slides From Slides.vue
    public function getCatalogues()
    {
        return Catalogue::all();
    }

    //POST site-features/slides From Slides.vue
    public function addSlide()
    {
        $this->validate($this->request, [
            'file' => ['required', 'mimes:jpeg,jpg,bmp,png']
        ]);

        $file = $this->request->file('file');
        $fileStored = $file->store("slides", 'uploads');
        Slide::create(['file_url' => $fileStored]);
    }

    //DELETE site-features/slides/{slide} From slides.vue
    public function deleteSlide($slide)
    {
        Slide::where('id', $slide)->delete();
    }

    //GET site-features/slides From Slides.vue
    public function getSlides()
    {
        return Slide::all();
    }

    public function getAboutUs()
    {
        return Optional(SiteFeature::find(1))->about_us;
    }

    public function updateAboutUs()
    {
        SiteFeature::where('id',1)->update(['about_us' => $this->request->about]);
    }
}
