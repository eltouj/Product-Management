<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class commande extends Model
{
    use HasFactory;
    protected $fillable =['user_id'];

    public function user()
    {
        return $this->belongsTo(Users::class);
    }

    public function produits()
    {
        return $this->hasMany(lcommande::class);
    }
    public function lcommandes()
    {
        return $this->hasMany(Lcommande::class);
    }
}
