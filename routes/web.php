<?php

use App\Http\Controllers\UserController;

Route::get('/api/users', [UserController::class, 'getUsers']);


use App\Http\Controllers\AuthController;

Route::post('/api/auth/login', [AuthController::class, 'onLogin']);
Route::post('/api/auth/register', [AuthController::class, 'onRegister']);

use Illuminate\Support\Facades\Route;

Route::get('/{any}', function () {
    return view('app'); 
})->where('any', '.*'); 
