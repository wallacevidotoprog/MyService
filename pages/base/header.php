<header class="body-site">
        <div class="logo">
            <a href="?home"><img src="img/logo.png" alt="logo svc"></a>
        </div>
        <nav class="menu">
            <a class="link-menu" href="?home">Home</a>
            <a class="link-menu" href="">Buscar</a>
            <a class="link-menu" href="#">LINK</a>
            <a class="link-menu" href="?quemsomos">Quem Somos</a>
            
            <a class="link-menu" href="connection/logout.php">
                <?php if (isset($_SESSION["ID"])) {
                 echo "ID ";echo($_SESSION["ID"]);} 
                 else{echo "null";}?>
            </a>

        </nav>
        <div class="login">
            <?php
            if (isset($_SESSION["ID"])) {
                ?>
                <a  href="?mypage"><img src="img/user.png" alt="login"></a>
                <?php
            } else {
                ?>
                <a href="pages/login.php"><img src="img/login.png" alt="login"></a>
                <?php
            }
            ?>
        </div>
    </header>