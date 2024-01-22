<?php
include("connection/config.php");
if (!isset($_SESSION)) {
    session_start();
}

?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <!-- <meta http-equiv="refresh" content="3"> -->
    <link rel="shortcut icon" href="img/icon.ico" type="image/x-icon">
    <link rel="stylesheet" href="css/main.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meus Servições</title>
    <script src="js/main.js"></script>
</head>

<body>
    <?php include("pages/base/header.php") ?>

    <main class="container" >
        <div class="body-main" id="pages">
            <?php
             echo (array_key_first($_GET));
             switch (array_key_first($_GET)) {
                 case 'mypage':
                     include('pages/mypage.php');
                     break;
                 default:                    
                     include('pages/home.php');
                     break;
             }
            ?>
        </div>
        
    </main>
    <footer>Desenvolvido por Wallace Vidoto - Copyright 2024 - Todos os Direitos reservados.</footer>
</body>

</html>