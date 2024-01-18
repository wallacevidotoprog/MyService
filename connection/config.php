<?php
$host ="localhost";
$user="root";
$pass= "";
$database = "database";

$mysqli = new mysqli($host, $user, $pass, $database);
if ($mysqli->connect_error) {echo "Err";};
?>