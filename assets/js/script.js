$(function(){
	$('#cnpj').mask('00.000.000/0000-00');
	
	$("#cnpj").on('change', function(){
		var json = 'json.php';
		var cnpj = $('#cnpj').val();
		$.ajax({
            type: 'POST',
            url: json,
            dataType:'json',
            data:{ cnpj:cnpj },
            success:function(data){
            	var a = JSON.parse(data);

            	var html = 'Nome Fantasia: '+a.fantasia+'<br>';
            	html += 'Razão Sozial: '+a.nome+'<br>';
            	html += 'Abertura: '+a.abertura+'<br>';
            	html += 'Telefone: '+a.telefone+'<br>';
            	html += 'E-mail: '+a.email+'<br>';
            	html += 'Situação: '+a.situacao+'<br>';
            	html += 'Bairro: '+a.bairro+'<br>';
            	html += 'Logradouro: '+a.logradouro+'<br>';
            	html += 'Número: '+a.numero+'<br>';
            	html += 'CEP: '+a.cep+'<br>';
            	html += 'Múnicipio: '+a.municipio+'<br>';
            	html += 'UF: '+a.uf+'<br>';
            	html += 'CNPJ: '+a.cnpj+'<br><br>';

            	for(line in a.qsa){
                    user = a.qsa[line];

                    html += user['qual']+': '+user['nome']+'<br>';
                }
                html += '<hr>';
            	for(line in a.atividade_principal){
                    user = a.atividade_principal[line];

                    html += 'Atividade Principal: '+user['text']+'<br>';
                    html += 'Codigo da Atividade: '+user['code']+'<br>';
                }
                html += '<hr>';
                for(line in a.atividades_secundarias){
                    user = a.atividades_secundarias[line];

                    html += 'Atividade Principal: '+user['text']+'<br>';
                    html += 'Codigo da Atividade: '+user['code']+'<br>';
                }
            	

            	$('#resultado').html(html);
            }
        });
	});
});