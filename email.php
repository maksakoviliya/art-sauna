<?php
$to      = 'maksak_il@mail.ru';
$subject = 'the subject';
$message = 'hello';
$headers = 'From: no-reply@art-sauna.com'       . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
$json = file_get_contents('php://input');
$data = json_decode($json);

echo $data['name'];
//mail($to, $subject, $message, $headers);
echo 'success';
