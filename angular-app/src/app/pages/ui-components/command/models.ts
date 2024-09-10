// models.ts

export interface Commande {
    id: number;
    user_id: number;
    lcommandes: LCommande[];
  }
  
  export interface LCommande {
    commande_id: number;
    product_id: number;
    quantite: number;
  }
  
  export interface Produit {
    id: number;
    titre: string;
    prix: number;
  }
  
  export interface User {
    id: number;
    name: string;
  }
  