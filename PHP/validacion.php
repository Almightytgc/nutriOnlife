<?php
    include("conexion.php");
    session_start();
    $correo = $_POST['correo'];
    $contraseña = $_POST['contraseña'];
    $bucleLogin = false;
    
        //Crea una sesión para el usuario
        $sql = "SELECT * FROM pacientes WHERE Correo = '$correo' AND contraseña = '$contraseña'";
        $resultado2 = mysqli_query($con,$sql);
        
                if (mysqli_num_rows($resultado2)) {
                    $prueba=mysqli_fetch_assoc($resultado2);
                    var_dump ($prueba);
                    $resultado = mysqli_fetch_assoc($resultado2);
                    var_dump($prueba);
                    $_SESSION['usuario'] = $prueba  ['id_paciente'];
                    header ("Location: ../HTML/welcome.html");
                }
                else {
                        header ("Location: ../HTML/logInBucle.html");
                        
                        if (mysqli_num_rows($resultado2)) {
                            $prueba=mysqli_fetch_assoc($resultado2);
                            var_dump ($prueba);
                            $resultado = mysqli_fetch_assoc($resultado2);
                            var_dump($prueba);
                            $_SESSION['usuario'] = $prueba  ['id_paciente'];
                            header ("Location: ../HTML/welcome.html");
                        }
                }
?>