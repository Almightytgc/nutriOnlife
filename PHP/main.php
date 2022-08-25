<?php
$conexion = mysqli_connect('localhost', 'root', '', 'dbnutrionlife');


    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $correo = $_POST['correo'];
    $contraseña = $_POST['contraseña'];
    $telefono = $_POST['telefono'];
    $edad = $_POST['edad'];
    $sexo = $_POST['genero'];
    $peso = $_POST['peso'];
    $altura = $_POST['altura'];

    $consulta = "INSERT INTO pacientes (Nombre, Apellido, Correo, Contraseña, Telefono, edad, sexo, peso, altura)
    VALUES ('$nombre', '$apellido', '$correo', '$contraseña', '$telefono', '$edad', '$sexo', '$peso', '$altura')";
    mysqli_query($conexion, $consulta);
    header ("Location: ../HTML/welcome.html");


?>