<div class="home-container">
    
    <?php
    $url = "https://lh3.googleusercontent.com/a/ACg8ocKSNr2qHubz0-KG6rz7KnzM98zkiE_g5Rj1Cjqg2GMKavs=s96-c";
    
    //$imagem_dados = bin2hex( file_get_contents($url));
    //$binary = pack("H*", $$imagem_dados);    
   // echo $imagem_dados ;
   //echo $_GET['bts'] ??'wallace';
    ?>
    
    <form action="index.php?home=''" method="get" >
        //<?php var_dump($_GET);?>
    <input type="text" name="query" value="<?php if(isset($_GET['query'])){echo $_GET['query'];}?>">
    <button type="submit">Buscar</button>
    </form>

    <table width="600px" border="1">
    <tr>
        <th>ID</th>
        <th>MODELO</th>
        <th>MAR 21</th>
        <th>%TOTAL</th>
        <th>FEV 21</th>
        <th>%TOTAL</th>
        <th>% VAR MAR/FEV</th>
    </tr>
        <?php if(!isset($_GET['query'])){ ?>
            <tr><td colspan="7">Digite algo para busca</td></tr>
        <?php       
        }
        else{
            $pesquisa = $mysqli->real_escape_string($_GET['query']);
            $sql_code ="SELECT * FROM `car` WHERE `MODELO` LIKE '%$pesquisa%';" ;
            $sql_query = $mysqli->query($sql_code) or die(mysqli_error($mysqli));
            if($sql_query->num_rows == 0){
                ?>
                <tr><td colspan="7">Não exite resultado.</td></tr>
                <?php

            }
            else{
                while($row = $sql_query->fetch_assoc()){
                    ?>
                    <tr>
                        <td><?php echo $row['ID']; ?></td>
                        <td><?php echo $row['MODELO']; ?></td>
                        <td><?php echo $row['MAR. 21']; ?></td>
                        <td><?php echo $row['% TOTAL']; ?></td>
                        <td><?php echo $row['FEV. 21']; ?></td>
                        <td><?php echo $row['% TOTAL2']; ?></td>
                        <td><?php echo $row['% VAR. MAR/FEV']; ?></td>
                    </tr>
                    <?php
                }

            }
        }
        ?>

    </table>
    
    <a href="&lok2"><img class="home-img" src="<?php echo $url ?>" alt="miphoto"></a>
</div>