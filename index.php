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
    <link rel="stylesheet" href="css/style.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meus Servições</title>
    <script src="js/main.js"></script>
</head>

<body>
    <header class="body-site">
        <div class="logo">
            <a href="index.php"><img src="img/logo.png" alt="logo svc"></a>
        </div>
        <nav class="menu">
            <a class="link-menu" target="frame_container" href="#">Buscas</a>
            <a class="link-menu" target="frame_container" href="#">LINK</a>
            <a class="link-menu" target="frame_container" href="#">LINK</a>
            <a class="link-menu" target="frame_container" href="#">Quem Somos</a>
            
            <a class="link-menu" href="connection/logout.php">
                <?php if (isset($_SESSION[""])) {
                print_r($_SESSION["ID"]);} ?>
            </a>

        </nav>
        <div class="login">
            <?php
            if (isset($_SESSION["ID"])) {
                ?>
                <a  href="pages/mypage.php" target="frame_container"><img src="img/user.png" alt="login"></a>
                <?php
            } else {
                ?>
                <a href="pages/login.php"><img src="img/login.png" alt="login"></a>
                <?php
            }
            ?>
        </div>
    </header>

    <main class="container">
        <iframe id="framC" name="frame_container" src="pages/home.php" frameborder="0"></iframe>

    </main>
    <footer>Desenvolvido por Wallace Vidoto - Copyright 2024 - Todos os Direitos reservados.</footer>
</body>

</html>