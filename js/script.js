$(function(){
	//Pesquisar os cursos sem refresh na página
	$("#pesquisafoto").keyup(function(){
		
		var pesquisa = $(this).val();
		var lab=document.querySelector('#lab').value;
		
		//Verificar se há algo digitado
		if(pesquisa != null){
			
			var dados = {
				lab,
				palavra : pesquisa
				
			}		
			$.post('busca.php', dados, function(retorna){
				//Mostra dentro da ul os resultado obtidos 
				$(".resultado").html(retorna);
			});
		}else{
			$(".resultado").html(palavra);
		}		
	});
});

$(function(){
	//Pesquisar os cursos sem refresh na página
	$("#pesquisalab").keyup(function(){
		
		var pesquisa = $(this).val();
		
		//Verificar se há algo digitado
		if(pesquisa != null){
			var dados = {
				palavra : pesquisa
			}		
			$.post('buscalab.php', dados, function(retorna){
				//Mostra dentro da ul os resultado obtidos 
				$(".resultado").html(retorna);
			});
		}else{
			$(".resultado").html(palavra);
		}		
	});
});
$(function(){
	//Pesquisar os cursos sem refresh na página
	$("#pesquisaencad").keyup(function(){
		
		var pesquisa = $(this).val();
		
		//Verificar se há algo digitado
		if(pesquisa != null){
			var dados = {
				palavra : pesquisa
			}		
			$.post('buscaEncad.php', dados, function(retorna){
				//Mostra dentro da ul os resultado obtidos 
				$(".resultado").html(retorna);
			});
		}else{
			$(".resultado").html(palavra);
		}		
	});
});

$(function(){
	//Pesquisar os cursos sem refresh na página
	$("#pesquisaos").keyup(function(){
		
		var pesquisa = $(this).val();
	
		
		//Verificar se há algo digitado
		if(pesquisa != null){
			
			var dados = {
				
				palavra : pesquisa
				
			}		
			$.post('busca.php', dados, function(retorna){
				//Mostra dentro da ul os resultado obtidos 
				$(".resultado").html(retorna);
			});
		}else{
			$(".resultado").html(palavra);
		}		
	});
});


	function precoMoldura(){

		
		var altura=document.querySelector("#altura").value;
		var alturainput=document.querySelector("#altura");
		var largura=document.querySelector("#largura").value;
		var vara=document.querySelector("#vareta").value;
		var fundo=document.querySelector("#fundo").value;
		var vidro=document.querySelector("#vidro").value;
		var result=document.querySelector("#valorMoldura");
		
		

if(altura == "" || largura == "" || altura == 0 || largura== 0){
	
	alert("Preencha os campos Tamanho da Moldura com valores validos.");
	alturainput.focus();
	return;
}

		var precoVara=(parseFloat(altura*2)+0.10)*(parseFloat(largura*2)+0.10)*vara; 
		var precoFundo=altura*largura*fundo;
		var precoVidro=altura*largura*vidro;
		var total1=precoVara+precoFundo+precoVidro;
		var total=total1.toFixed(2);

		result.innerHTML="R$ "+ total.replace('.',',');
		
	}

function limpar(){
window.location.reload();
}

function valAlt(){
		var altura=document.querySelector("#altura").value;
		var valorAltura=document.querySelector(".alt");

		if(altura == ""){
			valorAltura="";
		}else{
			valorAltura.innerHTML=altura+" Cm";
		}
	

}
function valLarg(){
		var largura=document.querySelector("#largura").value;
		var valorLargura=document.querySelector(".larg");

		if(largura == ""){
			valorLargura="";
		}else{
			valorLargura.innerHTML=altura+" Cm";
		}

		valorLargura.innerHTML=largura+" Cm";

}

$(document).on('change', '#vareta', function () {
		var codigos=$('.codigos');
		
		var value  = $(this).val();
		
		var option = $(this).find("option:selected");

		var id    = option.data('id');
		var url=option.data('image');

		
		if(id == "" || id== null|| id== undefined){
			id=" ";
			codigos.style.display="none";

		}
		
		var amostra=document.querySelector("#modelo");
		amostra.innerHTML="<p>Amostra</p><img src='"+url+"' id='modeloimg'/>";
	var imagemModelo=document.querySelector("#modeloimg");
			$(imagemModelo).on('mouseover', imagemModelo, function(){
					imagemModelo.style.width="500px";
					imagemModelo.style.transition="0.3s";
					imagemModelo.style.boxShadow="#1f1f1f 3px 4px 7px 0px";
					imagemModelo.style.cursor="pointer";
			})
			var imagemModelo=document.querySelector("#modeloimg");
			$(imagemModelo).on('mouseout', imagemModelo, function(){
					imagemModelo.style.width="300px";
					imagemModelo.style.transition="0.3s";
					imagemModelo.style.boxShadow="#ff000000 3px 4px 7px 0px";
					imagemModelo.style.cursor="pointer";

			})
		
		if(url == "" || url== undefined){
			amostra.innerHTML="";
		}
		var textocodigo=document.querySelector('.codvacs');
		textocodigo.innerHTML=id;

	
	
 });

 $(document).on('change', '#vidro', function () {
		
		var value  = $(this).val();
		
		var option = $(this).find("option:selected");

		var id    = option.data('id');
	if(id == "" || id== null|| id== undefined){
		id=" ";
	}
		
		
		var textocodigo=document.querySelector('.codvics');
		textocodigo.innerHTML=id;

		
		
 });

 $(document).on('change', '#fundo', function () {
	
		var value  = $(this).val();
		
		var option = $(this).find("option:selected");

		var id    = option.data('id');
		
		if(id == "" || id== null|| id== undefined){
			id=" ";
		}
		
		var textocodigo=document.querySelector('.codfcs');
		textocodigo.innerHTML=id;

	
	
 });

function excluir(){

	var excluir=document.querySelector("#excluir");
	excluir.innerHTML="<?php echo $cupom->apagaCupom($promocao,$cup)?>";
}

window.onload=function msgCupom(){

	var msg=document.querySelector("#semcupom");
	var promocao=document.querySelector("#promocao").value;
	var cupom= document.querySelector("#cup").value;

	
	if(cupom == '0' || promocao=='0' || cupom == ''|| promocao == ''){
		
		setTimeout(() => {
			msg.style.visibility= 'hidden';
			msg.style.left='919px';
			msg.style.opacity=1;
			msg.style.opacity=0;
		}, 2000);
		
	}else{
		msg.style.visibility= 'visible';
	}
	
}


