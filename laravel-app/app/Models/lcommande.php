<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class lcommande extends Model
{
    use HasFactory;
    protected $fillable=['product_id','quantite'];
    public function commande()
    {
        return $this->belongsTo(Commande::class);
    }

    public function produit()
    {
        return $this->belongsTo(produits::class, 'produit_id');
    }
    
}
