<?php
    include("conexion.php");
    $correo = $_POST['correo'];
    $contraseña = $_POST['contraseña'];
        //Crea una sesión para el usuario
        $sql = "SELECT * FROM pacientes WHERE correo = '$correo' AND contraseña = '$contraseña'";
        $resultado2 = mysqli_query($conexion,$sql);

        if (mysqli_num_rows($resultado2)) {
            $result = mysqli_fetch_assoc($resultado2);
            $_SESSION['usuario'] = $result['id'];
            header ("Location: ../HTML/welcomeCopia.html");
        } else {
            header ("Location: ../HTML/logInCopia.html");
        }
?>