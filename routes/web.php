<?php


use App\Http\Middleware\RoleMiddleware;
use App\Http\Middleware\TokenMiddleware;

use App\Http\Controllers\UserController;

Route::get('/api/users', [UserController::class, 'getUsers'])
->middleware(TokenMiddleware::class )
->middleware(RoleMiddleware::class . ':admin');
Route::post('/api/users/add-amount', [UserController::class, 'addAmountUsers'])
->middleware(TokenMiddleware::class )
->middleware(RoleMiddleware::class . ':admin,true');



use App\Http\Controllers\TransactionController;

Route::get('/api/transaction', [TransactionController::class, 'getTransactions'])
->middleware(TokenMiddleware::class )
->middleware(RoleMiddleware::class . ':admin');
Route::post('/api/transaction', [TransactionController::class, 'postTransactions'])
->middleware(TokenMiddleware::class )
->middleware(RoleMiddleware::class . ':admin');
Route::put('/api/transaction', [TransactionController::class, 'putTransaction'])
->middleware(TokenMiddleware::class )
->middleware(RoleMiddleware::class . ':admin');
Route::delete('/api/transaction', [TransactionController::class, 'deleteTransaction'])
->middleware(TokenMiddleware::class )
->middleware(RoleMiddleware::class . ':admin');


use App\Http\Controllers\AuthController;

Route::post('/api/auth/login', [AuthController::class, 'onLogin']);
Route::post('/api/auth/register', [AuthController::class, 'onRegister']);

use Illuminate\Support\Facades\Route;

Route::get('/{any}', function () {
    return view('app'); 
})->where('any', '.*'); 
