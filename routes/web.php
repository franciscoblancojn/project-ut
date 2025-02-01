<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any}', function () {
    return view('app'); 
})->where('any', '.*'); 

use App\Http\Controllers\UserController;

Route::get('/api/users', [UserController::class, 'getUsers']);
