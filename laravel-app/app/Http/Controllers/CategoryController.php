<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\categories;

class CategoryController extends Controller
{
    public function add (Request $request){
        
        $category=new categories() ;
        $category->titre=$request->titre;
        $category->save();
    }
}
