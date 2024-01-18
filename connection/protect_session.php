<?php
if(!isset($_SESSION)){
    session_start();
 }

 if(!isset($_SESSION['ID'])){
    header("Location : ../index.php");
    //die("Loge para fazer algo");
    
 }
?>