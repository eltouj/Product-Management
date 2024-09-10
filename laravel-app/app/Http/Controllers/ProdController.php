<?php

namespace App\Http\Controllers;

use App\Models\categories;
use App\Models\Produits;
use Illuminate\Http\Request;

class ProdController extends Controller
{
    public function ad(Request $request){
        $produit = new produits;
        $produit->titre = $request->input('titre');


        $request->validate([
            'img_url' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);


        if ($request->hasFile('img_url')) {
            $file = $request->file('img_url');
            $file_extension = $file->getClientOriginalExtension();
            $file_name = time() . '.' . $file_extension;
            $path = 'images/products';
            $file->move(public_path($path), $file_name);
            $produit->img_url = $path . '/' . $file_name;
        }

        $produit->prix = $request->input('prix');
        $produit->description = $request->input('description');
        $produit->category_id = $request->input('category_id');
        $produit->discount = $request->input('discount');
        $produit->color = $request->input('color');
        $produit->save();

        return response()->json(['message' => 'Product added successfully'], 201);
    }


    public function aff (){
        
        $produits = Produits::all();
        return view('afficher', compact('produits'));

    }

    public function del($id)
    {
        $produit = Produits::find($id);

        if ($produit) {
            $produit->delete();
            return redirect()->route('produits.aff')->with('success', 'Produit supprimé avec succès.');
        } 
    }
  
    public function lcommande()
    {
        
        return $this->hasMany(Lcommande::class, 'produit_id');
    }

    public function aff1() {
        $produits = Produits::with('categories')->get();
    
        return response()->json([
            'produits' => $produits,
            ]);
    }
}
