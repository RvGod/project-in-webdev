<?php

$hostName = "localhost";
$dbUser = "root";
$dbPassword = "879546213";
$dbName = "login_register";
$conn = mysqli_connect($hostName, $dbUser, $dbPassword, $dbName);
if (!$conn) {
    die("Something went wrong;");
}

?>