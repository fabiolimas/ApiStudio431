
<?php

            include 'conexao.php';
            $promo=$_GET['promocao'];
            $cup=$_GET['cup'];
            try {
                $stmt=$pdo ->prepare("delete from cupom where PROMOCAO={$promo} and CUPOM={$cup};");
                $stmt2=$pdo ->prepare("delete from cupomhist where PROMOCAO={$promo} and CUPOM={$cup};");
                $stmt2->execute();
                $stmt->execute();
           
            header('Location: ../index.php');
            
            } catch (PDOException $e) {
                echo "Erro: ".$e->getMessage();
            }


            

$pdo=null;


?>