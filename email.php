<?php
$to      = 'maksak_il@mail.ru';
$subject = 'the subject';
$message = 'hello';
$headers = 'From: no-reply@art-sauna.com'       . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
print_r($_POST);
mail($to, $subject, $message, $headers);
echo 'success';
