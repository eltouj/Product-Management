<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Produits</title>
</head>
<body>
    <form method="post" action="/commande/add">
        <h1>
            @csrf
            <h1>Ajouter Une commande : </h1>
            
            <h3>click on the link to create an account : </h3>
            <a href="{{url('/add_user')}}" >create</a>
            <h3>Ajouter une commande : </h3>
            <h2 style="color: rgb(3, 182, 50) ">User ID:</h2>
            <input type="text" class="form-control" name="user_id" style="padding-right: 4%">
            <h2 style="color: rgb(3, 182, 50) ">product_id:</h2>
            <input type="integer" class="form-control" name="product_id" style="padding-right: 4%">
            <h2  style="color: rgb(3, 182, 50) ">quantite:</h2>
            <input type="integer" class="form-control" name="quantite" style="padding-right: 4%"> 

            <h2></h2>
            <button type="submit" style="padding-left: 4%;padding-right: 4% ;margin-left: 2%">submit</button>
 
        </h1>
    </form>
</body>
</html>