<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\trial;
use App\Http\Controllers\lcController;
use App\Http\Controllers\ProdController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CommandeController;

use App\Http\Middleware\CorsMiddleware;




Route::middleware([CorsMiddleware::class])->group(function () {
    

    
    Route::get('add_product', function () {
        return view('welcome');
    });
    
    Route::get('/add_category', function () {
        return view('welcome2');
    });
    
    Route::get('/produits/aff', [ProdController::class, 'aff'])->name('produits.aff');
    
    Route::get('/affjsn', [ProdController::class, 'aff1']);
    
    Route::get('/add_user', function () {
        return view('welcome3');
    });
    
    Route::get('', function () {
        return view('welcome4');
    });
    
    Route::get('/ret_jsn', [lcController::class, 'aff1']);
    
    Route::post('api/produits/ad', [ProdController::class, 'ad']);
    Route::post('api/category/add', [CategoryController::class, 'add']);
    Route::delete('/produits/del/{id}', [ProdController::class, 'del'])->name('produits.del');
    Route::get('/api/affjsn', [lcController ::class, 'aff1']);
    Route::post('/api/user/add', [UserController::class, 'add']);
    Route::post('api/commande/add', [lcController::class, 'add']);
    Route::delete('api/commandes/{id}', [CommandeController::class, 'destroy']);

    
    
    
});




