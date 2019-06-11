<!DOCTYPE html>
<html>
<head>
	<title>Consultar Empresa por CNPJ</title>
	<link rel="stylesheet" href="assets/css/bootstrap.css">
	<script src="assets/js/jquery.min.js"></script>
	<script src="assets/js/bootstrap.js"></script>
	<script type="text/javascript" src="assets/js/jquery.mask.js"></script>
</head>
<body background="assets/img/div.png">
<div class="container">
	<br>
	<div class="well">
		<h3 style="text-align: center;">Consulte os dados de uma empresa</h3>
		<form method="POST">
			<label>CNPJ:</label>
			<input type="text" placeholder="Digite apenas números" class="form-control" name="cnpj" id="cnpj" autofocus="">
		</form>
		
		<div id="resultado" class="well"></div>
	</div>
</div>
<script type="text/javascript" src="assets/js/script.js"></script>
</body>
</html>