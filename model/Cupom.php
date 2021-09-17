<?php

    class Cupom{
        private $promocao;
        private $cupom;
        private $cliente;
        private $cpf;



        function getPromocao(){
            return $this-> promocao;
        }
        function setPromocao($promocao){
            $this->promocao=$promocao;
        }

        function getCupom(){
            return $this->cupom;
        }
        function setCupom($cupom){
            $this->cupom=$cupom;
        }
        function getCliente(){
            return $this->cliente;

        }
        function getCpf(){
            return $this->cpf;
        }

        function listaCupons($promo,$cup){
            
        
           
            
            include 'conexao.php';
                $stmt=$pdo->query("select * from cupom where PROMOCAO={$promo} and CUPOM = {$cup}")->fetchAll();
        

                $contador=count($stmt);
              if($contador >=1){
                foreach ($stmt as $dados) {
            
            
                    $promocao=$dados['PROMOCAO'];
                    $nome=$dados['NOME'];
                    $codigoCliente=$dados['CLIENTE'];
                    $cupo=$dados['CUPOM'];
                    $cpf=$dados['CPF'];
                   
                    echo"<tr id='lista'>";
                    echo"<td id='promo'>".$promocao."</td>";
                    echo"<td id='cupom'>".$cupo."</td>";
                    echo"<td>".$codigoCliente."</td>";
                    echo"<td>".$nome."</td>";
                    echo"<td>".$cpf."</td>";
                    echo"<td><a href='../studio4321/model/excluir.php?promocao=$promo&cup=$cup' class='btnExcluir'><span class='far fa-trash-alt acoes' title='Excluir'></span></a></td>";
                    echo"</tr>";
                    
                }
              }else{
                  echo "<p id='semcupom'>Cupom não encontrado!</p>";
              }
              $pdo=null;
                
                    
            
            
            
        
                
        
        }

        
               


    }

    



?>