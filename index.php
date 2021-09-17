
    <?php
    include ("../cabecalho2.php");
    include("model/Cupom.php");
        
        
        
       
    ?>
    

    <div class="container interface">
    <h3>Manutenção de Cupons</h3><br>
    <form action="#" method="post">
        <fieldset class="fieldcupons"><legend>Buscar Cupom</legend>
    Promoção: <input type="number" name="promocao" min="0" id="promocao" required> Cupom: <input id="cup" type="number" name="cup" min="0" required> 
    <input type="submit" value="OK" class="btn btn-primary" ><br><br>

        </fieldset>
    </form>
  <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Promoção</th>
      <th scope="col">Cupom</th>
      <th scope="col">Cod. Cliente</th>
      <th scope="col">Cliente</th>
      <th scope="col">CPF</th>
      <th scope="col">Excluir</th>
      <?php
      $promo=isset($_POST['promocao'])?$_POST['promocao']:0;
       
      $cup=isset($_POST['cup'])?$_POST['cup']:0;
        
      $cupom=new Cupom();

       
       

        $cupom->listaCupons($promo, $cup);
        
      ?>
      
    </tr>
  </thead>
  <tbody>
    <tr>
        <div id="excluir"></div>
</body>
</html>