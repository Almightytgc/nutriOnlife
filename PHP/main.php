<?php
$conexion = mysqli_connect('localhost', 'root', '', 'dbnutrionlife');

insertar($conexion);
function insertar($conexion){
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $correo = $_POST['correo'];
    $contraseña = $_POST['contraseña'];
    $telefono = $_POST['telefono'];

    $consulta = "INSERT INTO pacientes (Nombre, Apellido, Correo, Contraseña, Telefono)
    VALUES ('$nombre', '$apellido', '$correo', '$contraseña', '$telefono')";
    mysqli_query($conexion, $consulta);
    header("Location: ../HTML/welcomeCopia.html");
    mysqli_close($conexion);
}


?>