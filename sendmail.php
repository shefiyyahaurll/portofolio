<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    $to = "shefiyyah@gmail.com";
    $headers = "Form $email";
    if (mail($to,$subject,$message,$headers)){
        echo "Email send";
    }else{
        echo "Email sending failed";
    }
}
?>