<?php

   #$dsn="firebird:dbname=127.0.0.1:c:/wamp644/www/fotoimagem/studio4321/bd/Studio4321.FDB";
   $dsn="firebird:dbname=10.1.1.24:c:/studio4321/Studio4321.FDB";
    $user="sysdba";
    $pass="masterkey";

        try {
            $pdo = new \PDO($dsn, $user, $pass, [\PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION]);
            
            
        } catch (PDOException $e) {
            echo "<p>Não foi possivel conectar-se ao servidor, Erro: </p>";
        }

       
   

       

?>