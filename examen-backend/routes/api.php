<?php

use App\Http\Controllers\DesarrolladoresController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::prefix('v1')->group(function(){
    Route::get('all_rows',[DesarrolladoresController::class,'show']);
    Route::post('create',[DesarrolladoresController::class,'store']);
    Route::get('edit/{id}',[DesarrolladoresController::class,'edit']);
    Route::put('update/{id}',[DesarrolladoresController::class,'update']);
    Route::delete('delete/{id}',[DesarrolladoresController::class,'destroy']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
