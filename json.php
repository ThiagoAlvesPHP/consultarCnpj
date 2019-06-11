<?php
header("Access-Control-Allow-Origin: *");
$ch = curl_init();
$vowels = array(".", "/", "-");

if (!empty($_POST['cnpj'])) {
	$cnpj = str_replace($vowels, "", addslashes($_POST['cnpj']));
	$url = "https://www.receitaws.com.br/v1/cnpj/".$cnpj;
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$resposta = curl_exec($ch);
	curl_close($ch);

	echo json_encode($resposta);
}