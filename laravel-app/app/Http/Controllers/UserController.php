<?php

namespace App\Http\Controllers;

use App\Models\Users;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function add (Request $request){
        $user =new Users;
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = $request->input('password');
        $user->save();
        return response()->json(['message' => 'User added successfully'], 201);
        ;


    }
}
