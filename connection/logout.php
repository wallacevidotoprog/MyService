<?php
var_dump($_SESSION);
if(!isset($_SESSION)){
    session_start();
}
session_destroy();
header("Location: index.php");
die('Não ignore meu cabeçalho...');
?>