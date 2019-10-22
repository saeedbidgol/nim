<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();
Route::get('/', "HomeController@index");
Route::get('/home', 'HomeController@index')->name('home');

Route::group(['prefix' => 'products'], function () {
    Route::get('', 'ProductController@getProducts');
});

Route::group(['prefix' => 'site-features'], function () {
    Route::get('about-us', 'SiteFeaturesController@getAboutUs');
    Route::patch('about-us', 'SiteFeaturesController@updateAboutUs');

    Route::group(['prefix' => 'slides'], function () {
        Route::get('', 'SiteFeaturesController@getSlides');
        Route::delete('{slide}', 'SiteFeaturesController@deleteSlide');
        Route::post('', 'SiteFeaturesController@addSlide');
        Route::post('{slide}/update', 'SiteFeaturesController@updateSlide');
    });
});


Route::get('/dashboard', 'HomeController@dashboard');
Route::get('/dashboard/{any}', 'HomeController@dashboard');
Route::get('/{any}', 'HomeController@spa')->where('any', '.*');
