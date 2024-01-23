<?php

$mensagem = urlencode("Vou TE PEGAR Kkkkk");
// concatena a url da api com a variável carregando o conteúdo da mensagem
$url_api = "https://api.iagentesms.com.br/webservices/http.php?metodo=envio&usuario=email@gmail.com&senha=pass&celular=cell&mensagem={$mensagem}";
// realiza a requisição http passando os parâmetros informados
$api_http = file_get_contents($url_api);
// imprime o resultado da requisição
echo $api_http;
?>
