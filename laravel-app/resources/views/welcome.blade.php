<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Produits</title>
</head>
<body>
    <form method="post" action="api/produits/add">
        <h1>
            @csrf
            <h2 style="color: rgb(153, 110, 54)">Titre:</h2>
            <input type="text" class="form-control" name="titre"  style="padding-right: 4%">
            <h2 style="color: rgb(153, 110, 54) ">Prix:</h2>
            <input type="integer" class="form-control" name="prix" style="padding-right: 4%">

            <h2  style="color: rgb(153, 110, 54) ">Description:</h2>
            <input type="text" class="form-control" name="description" style="padding-right: 4%"> 

            <h2  style="color: rgb(153, 110, 54) ">Category_ID:</h2>
            <input type="integer" class="form-control" name="category_id" style="padding-right: 4%"> 

            <h2></h2>
            <button type="submit" style="padding-left: 4%;padding-right: 4% ;margin-left: 2%">submit</button>
 
        </h1>
    </form>
</body>
</html>