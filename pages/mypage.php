
    <h1><?php echo $_SESSION['ID']; ?></h1>
    <a href="connection/logout.php">SAIR</a>

    <h1>Exemplo de botão que chama o PHP através do JavaScript</h1><hr>
        
        <div id="formulario">
            
        </div>
        
        <script type="text/javascript">
            function criar(){
                //Setando o elemento que vai receber o codigo gerado pela execução do PHP
                var divFormulario = document.getElementById("formulario");
                divFormulario.innerHTML = "<?php criaMenu(); ?>";  //Execução do codigo PHP
            }
            
        </script>
        
        <!-- Botão simples que faz a chamada a função em JavaScript que executa o PHP  -->
        <input type="button" value="Criar menu" onclick="criar()"><br>
                
        <?php
        
        //Função em PHP que criar a lista
        function criaMenu(){
                $lis = "";
                $lis.="<ul>";
                for ($index = 1; $index <= 5; $index++) {
                    $lis.="<li>ITEM $index</li>";
                }
                $lis.="</ul><br>";
                echo $lis;
        }         
        
        ?>
