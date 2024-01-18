<?php
include("../connection/config.php");
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
  <!-- <meta http-equiv="refresh" content="3"> -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>login</title>
  <link rel="stylesheet" href="../css/login.css">
  <link rel="shortcut icon" href="../img/icon.ico" type="image/x-icon">
  <script src="https://accounts.google.com/gsi/client" async defer></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <script src="../js/loginPage.js"></script>
</head>

<body>
  
  <main>
    <section>
      <form action="../connection/validate.php" method="POST" class="container">
        <p style="font-size: 15px;" id="info"></p>
        <img class="login" src="../img/login.png" alt="">
        <div class="label-lg"><label for="">Usuário</label></div>
        <input type="email" name="email" id="email" placeholder="Email" required>
        <div class="label-lg"><label for="">Senha</label></div>
        <input type="password" name="password" id="password" placeholder="Password" required>
        <div class="label-lg">
          <button class="btn-login" type="submit">Login</button>
          <div><a href="#">Recuperar senha</a></div>
        </div>
        <div class="lg-google">
              <label for="">LOGAR OU CADASTRAR</label>
              <div id="buttonDiv"></div>
            </div>
      </form>
    </section>
  </main>
  <img class="imgB" src="../img/works.jpg"  alt="">

</body>

</html>