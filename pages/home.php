<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
</head>
<body style="background-color: black; color: aliceblue; width: 100%; height: 500px;">
    <?php
    $url = "https://lh3.googleusercontent.com/a/ACg8ocKSNr2qHubz0-KG6rz7KnzM98zkiE_g5Rj1Cjqg2GMKavs=s96-c";
    
    $imagem_dados = bin2hex( file_get_contents($url));
    $binary = pack("H*", $$imagem_dados);

    
    echo $imagem_dados ;
    ?>

    
    <img src="<?php echo $binary ?>" alt="miphoto">
</body>
</html>