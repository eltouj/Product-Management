<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class produits extends Model
{
    use HasFactory;
    protected $fillable = ['titre','img_url', 'prix', 'description','category_id','discount','color'];
    protected $hidden = ['category_id'];
    public function categories()
    {
        return $this->belongsTo(Categories::class, 'category_id');
    }

    public function lcommande()
    {
        return $this->hasMany(Lcommande::class, 'produit_id');
    }
}
