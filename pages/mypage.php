<?php
include("../connection/config.php");
include("../connection/protect_session.php");
if (!isset($_SESSION)) {
    session_start();}
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="../js/mypage.js"></script>
</head>
<body>
    <h1><?php echo $_SESSION['ID']; ?></h1>
    <a href="../connection/logout.php">SAIR</a>
</body>
</html>