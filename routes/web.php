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
Route::get('/drop', 'HomeController@drop');

Route::group(['prefix' => 'products'], function () {
    Route::get('', 'ProductController@getProducts');
    Route::get('portfolio', 'ProductController@getPortfolio');
    Route::get('favorites', 'ProductController@getFavorites');
    Route::patch('{product}/favorite', 'ProductController@addFavorite');
    Route::get('{product}/suggestions', 'ProductController@getProductSuggestions');
    Route::get('{product}', 'ProductController@getProduct');
});
Route::group(['prefix' => 'site-features'], function () {
    Route::get('about-us', 'SiteFeaturesController@getAboutUs');
    Route::get('categories', 'SiteFeaturesController@getCategories');
    Route::get('slides', 'SiteFeaturesController@getSlides');
    Route::get('news', 'SiteFeaturesController@getNews');
    Route::get('catalogues/last', 'SiteFeaturesController@getLastCatalogue');
    Route::get('contact-us', 'SiteFeaturesController@getContactUs');
});
Route::get('/gallery', 'HomeController@spa');
Route::get('/product/{any}', 'HomeController@spa');

Route::group(['middleware' => 'auth'], function () {

    Route::post('/site-toggle', 'HomeController@toggleSite');

    Route::group(['prefix' => 'users'], function () {
        Route::get('', 'UserController@getUsers');
        Route::post('', 'UserController@addUser');
        Route::patch('{user}/password', 'UserController@updatePassword');
        Route::patch('{user}', 'UserController@updateUser');
        Route::delete('{user}', 'UserController@deleteUser');
    });
    Route::group(['prefix' => 'products'], function () {
        Route::post('', 'ProductController@addProduct');
        Route::delete('{product}/colors/{color}', 'ProductController@deleteColorOfProduct');
        Route::delete('{product}', 'ProductController@deleteProduct');
    });

    Route::group(['prefix' => 'site-features'], function () {
        Route::patch('about-us', 'SiteFeaturesController@updateAboutUs');

        Route::group(['prefix' => 'slides'], function () {
            Route::delete('{slide}', 'SiteFeaturesController@deleteSlide');
            Route::post('', 'SiteFeaturesController@addSlide');
            Route::post('{slide}/update', 'SiteFeaturesController@updateSlide');
        });

        Route::group(['prefix' => 'news'], function () {
            Route::post('', 'SiteFeaturesController@addNews');
            Route::post('{news}/update', 'SiteFeaturesController@updateNews');
            Route::delete('{news}', 'SiteFeaturesController@deleteNews');
        });

        Route::group(['prefix' => 'catalogues'], function () {
            Route::get('', 'SiteFeaturesController@getCatalogues');
            Route::delete('{catalogue}', 'SiteFeaturesController@deleteCatalogue');
            Route::post('', 'SiteFeaturesController@addCatalogue');
            Route::post('{catalogue}/update', 'SiteFeaturesController@updateCatalogue');
        });

        Route::group(['prefix' => 'categories'], function () {
            Route::delete('{category}', 'SiteFeaturesController@deleteCategory');
            Route::post('', 'SiteFeaturesController@addCategory');
            Route::post('{Category}/update', 'SiteFeaturesController@updateCategory');
        });

        Route::group(['prefix' => 'contact-us'], function () {
            Route::patch('', 'SiteFeaturesController@updateContactUs');
        });
    });


    Route::get('/dashboard', 'HomeController@dashboard');
    Route::get('/dashboard/{any}', 'HomeController@dashboard');
    Route::get('/{any}', 'HomeController@spa')->where('any', '.*');
});
