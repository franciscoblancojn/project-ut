<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function getUsers()
    {
        $users = User::orderBy('created_at', 'desc')->get();
        return response()->json($users);
    }
}
