<?php
//if (!empty($_POST['name'])) {
    $to = 'maksak_il@mail.ru';
    $subject = 'the subject';
    $message = 'hello' . $_POST['name'] . 'ddd';
    $headers = 'From: no-reply@art-sauna.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
    echo 'success';
//} else {
//    echo 'no data';
//}