<?php
    include("config.php");

    if(filter_input(INPUT_POST,"input", FILTER_SANITIZE_STRING) ==="google"){
         
        echo google();
    }
    else{
        
        echo host();
    }


    function google(){
        if(ExistUser(strval($_POST['email']),strval($_POST['id_google']))){
            if (!isset($_SESSION)) {
                session_start();
            $_SESSION["ID"] = GetForGoogle(strval($_POST['id_google']));
            return "../index.php";  
            }    
        }
        elseif(ExistUser($_POST['email'],0)){
            
            return "Email já cadastrado.";
        }
        else{
            RegisterUserGoogle($_POST);
            if (!isset($_SESSION)) {
                session_start();
            $_SESSION["ID"] = GetForGoogle(strval($_POST['id_google']));
            return "../index.php";  
            }   
        }
    }
    function host(){
        global $mysqli;
        if(isset($_POST["email"]) || isset($_POST["password"])){

            $email = $mysqli->real_escape_string($_POST["email"]);
            $pass = $mysqli->real_escape_string($_POST["password"]); 
            
            $result = $mysqli->query("SELECT * FROM user WHERE email ='$email'LIMIT 1;") or die($mysqli->error);
            $resut_userP = $result->fetch_assoc();

            if(password_verify($pass,$resut_userP['pass'])){
                if (!isset($_SESSION)) {
                    session_start();
                $_SESSION["ID"] = $resut_userP["ID"];
                header("Location: ../index.php");   
                }  

            }
            else{
                return "Senha você errou algo";
            }
        }
    }    function ExistUser(string $value,string  $id_gg){
        global $mysqli;

        $query = "";
        if(strlen($id_gg) > 2){
            $query = "SELECT * FROM `user` WHERE `email`='$value' AND `ID_Google`='$id_gg';";
        }
        else{
            $query ="SELECT * FROM `user` WHERE `email`='$value';";
        }
        $result = $mysqli->query($query) or die($mysqli->error);        
        return $result->fetch_row() > 1 ? true:false;
    }
    function GetForGoogle(string $id_gg){
        global $mysqli;
        return ($mysqli->query("SELECT * FROM `user` WHERE `ID_Google`='$id_gg';"))->fetch_assoc()['ID'];
    }

    function RegisterUserGoogle($date){
        global $mysqli;
        $name = $date['name'];
        $email = $date['email'];
        $id_google = $date['id_google'];
        $image = bindec(file_get_contents($date['image']));
        $pass = password_hash($id_google, PASSWORD_DEFAULT);        
        $INTO = "INSERT INTO `user`(`name`, `email`,`pass`, `img`, `ID_Google`, `accont_google`) VALUES ('$name','$email','$pass','$image','$id_google','1');";
        $reset = $mysqli->query($INTO);
    }

?>
