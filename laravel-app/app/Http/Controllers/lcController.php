<?php

namespace App\Http\Controllers;

use App\Models\categories;

use App\Models\produits;
use App\Models\lcommande;
use Illuminate\Http\Request;
use App\Models\Commande;
use App\Models\users;


class lcController extends Controller
{
    public function add(Request $request)
    {
        $commande = new Commande;
        $commande->user_id = $request->input('user_id');
        $commande->save();

        $lcommande = new Lcommande;
        $lcommande->commande_id = $commande->id; 
        $lcommande->product_id = $request->input('product_id');
        $lcommande->quantite = $request->input('quantite');
        $lcommande->save();

    }
    

    

    public function aff1()
    {
        
        $commandes = Commande::with('lcommandes.produit')->get();
        $produits = produits::all();
        $users = users::all();
        $categories = categories::all();
        return response()->json([
            'commandes' => $commandes,
            'produits'=>$produits,
            'users'=>$users,
            'categories'=>$categories,
            
        ]);
    }
}