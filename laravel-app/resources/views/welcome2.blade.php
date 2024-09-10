<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Category</title>
</head>
<body>
    <h1 style="   color: rgb(0, 131, 87);text-align: center;">Category title</h1>
    <form method="post" action="/category/add">
        <h1>
            @csrf
            <input type="text" class="form-control" name="titre" style="margin-left: 42.5%">
            <button type="submit" >submit</button>
 
        </h1>
    </form>
</body>
</html>