<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h2>
        <ul>
        @foreach($produits as $produit)
                
                    <ul>
                    <li>Product id : {{ $produit->id }}</li>
                    <li>Titre du film :{{ $produit->titre }}</li>
                    <li>Prix du film :{{ $produit->prix }}</li>
                    <li>Description :{{ $produit->description }}</li>
                    <li>Category ID :{{ $produit->category_id }}</li>
                    <li> <form action="{{ route('produits.del', $produit->id) }}" method="POST" style="display: inline;">
                        @csrf
                        @method('DELETE')
                        <button type="submit">Supprimer</button>
                    </form></li>
                    </ul>
                
                <h1></h1>
        @endforeach
        </ul>
    </h2>
    <script>
     function deleteProduct(id:number){
        
     }

    </script>
</body>
</html>