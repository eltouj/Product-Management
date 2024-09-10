<?php

namespace App\Http\Controllers;

use App\Models\Commande;
use Illuminate\Http\Response;

class CommandeController extends Controller
{
    public function destroy($id)
    {
        $commande = Commande::find($id);

        if (!$commande) {
            return response()->json(['message' => 'Command not found'], Response::HTTP_NOT_FOUND);
        }

        $commande->lcommandes()->delete();

        $commande->delete();

        return response()->json(['message' => 'Command and related items deleted successfully'], Response::HTTP_OK);
    }
}
