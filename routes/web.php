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

Route::group(['middleware' => 'auth'], function () {
    Route::group(['prefix' => 'products'], function () {
        Route::get('', 'ProductController@getProducts');
        Route::post('', 'ProductController@addProduct');
        Route::delete('{product}/colors/{color}', 'ProductController@deleteColorOfProduct');
        Route::delete('{product}', 'ProductController@deleteProduct');
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

        Route::group(['prefix' => 'catalogues'], function () {
            Route::get('', 'SiteFeaturesController@getCatalogues');
            Route::get('last', 'SiteFeaturesController@getLastCatalogue');
            Route::delete('{catalogue}', 'SiteFeaturesController@deleteCatalogue');
            Route::post('', 'SiteFeaturesController@addCatalogue');
            Route::post('{catalogue}/update', 'SiteFeaturesController@updateCatalogue');
        });

        Route::group(['prefix' => 'contact-us'], function () {
            Route::get('', 'SiteFeaturesController@getContactUs');
            Route::patch('', 'SiteFeaturesController@updateContactUs');
        });
    });


    Route::get('/dashboard', 'HomeController@dashboard');
    Route::get('/dashboard/{any}', 'HomeController@dashboard');
    Route::get('/{any}', 'HomeController@spa')->where('any', '.*');
});
