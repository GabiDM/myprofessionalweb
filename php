<?php
     $destinatario = "gabrielademarco@hotmail.com";
     $Name = $_POST['Name'];
     $Email = $_POST['Email']; 
     $Message = $_POST['Message'];

     $header = "Enviado desde el proyecto fullstack python codo a codo";

     mail($destinatario,$Name,$Message);
?>
