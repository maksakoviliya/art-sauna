<?php
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: POST');

header("Access-Control-Allow-Headers: X-Requested-With");


error_reporting(E_ALL);
ini_set("display_errors", 1);

//require 'phpmailer/PHPMailer.php';
require './vendor/phpmailer/PHPMailerAutoload.php';

if (!empty($_POST['name'])) {

    $mail = new PHPMailer;
    $mail->isSMTP();

    $mail->SMTPDebug = 1;

    $mail->Host = 'ssl://smtp.mail.ru';

    $mail->SMTPAuth = true;
    $mail->Username = 'artsaunaleads@mail.ru'; // логин от вашей почты
    $mail->Password = 'wsf#%gts44'; // пароль от почтового ящика
    $mail->SMTPSecure = 'SSL';
    $mail->Port = '465';

    $mail->CharSet = 'UTF-8';
    $mail->From = 'noreply@art-sauna.ru';  // адрес почты, с которой идет отправка
    $mail->FromName = 'New Lead'; // имя отправителя

    $mail->addAddress('maksak_il@mail.ru', 'Maksak_il');

    $mail->isHTML(true);

    $mail->Subject = $_POST['subject'];
    $mail->Body = "Имя: {$_POST['name']}<br> Email: {$_POST['email']}<br> Сообщение: " . nl2br($_POST['body']);
    $mail->AltBody = "Имя: {$_POST['name']}\r\n Email: {$_POST['email']}\r\n Сообщение: {$_POST['body']}";

    //$mail->SMTPDebug = 1;

    if ($mail->send()) {
        $answer = '1';
    } else {
        $answer = '0';
        echo 'Письмо не может быть отправлено. ';
        echo 'Ошибка: ' . $mail->ErrorInfo;
    }
    die($answer);
}

?>