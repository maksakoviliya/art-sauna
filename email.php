<?php
$to      = 'maksak_il@mail.ru';
$subject = 'the subject';
$message = 'hello';
$headers = 'From: no-reply@art-sauna.com'       . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
$json = file_get_contents('php://input');

// decode the json data
$data = json_decode($json);
echo 'data';
print_r($data);
echo 'here';
//mail($to, $subject, $message, $headers);
echo 'success';
