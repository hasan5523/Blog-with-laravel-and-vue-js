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


    Route::get('/', function () {
        return view('public/index');
    });


    Auth::routes();

    Route::get('/home', 'HomeController@index')->name('home');


Route::group(['middleware' => ['auth']], function () {

    //category
    Route::post('/addCategory', 'CategoryController@addCategory')->name('home');
    Route::get('/category', 'CategoryController@allCategory');
    Route::get('/category/{id}', 'CategoryController@deleteCategory');
    Route::get('/editcategory/{id}', 'CategoryController@editCategory');
    Route::post('/updatecategory/{id}', 'CategoryController@updateCategory');

//post

    Route::get('/post', 'PostController@allPost');
    Route::post('/savePost', 'postController@addPost');
    Route::get('/deletPost/{id}', 'postController@deletPost');
    Route::get('/editPost/{id}', 'postController@editPost');
    Route::post('/updatePost/{id}', 'postController@updatePost');
});

// frontend

    Route::get('/blogpost', 'BlogController@get_all_blog_post');
    Route::get('/singlePost/{id}', 'BlogController@getPostById');
    Route::get('/categories', 'BlogController@allCategories');
    Route::get('/categorypost/{id}', 'BlogController@allPostByCatId');
    Route::get('/search', 'BlogController@searchPost');
    Route::get('/latestPost', 'BlogController@latestPost');


    Route::get('{any}', function () {
        return view('public/index');
    })->where('any','.*');