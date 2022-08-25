<?php
    $user="root";
    $pass="";
    $server="localhost";
    $db="dbnutrionlife";
    $con=mysqli_connect($server,$user,$pass, $db);
    // header("Location:../HTML/welcomeCopia.html");
    mysqli_select_db($con,$db);
    return $con;
?>