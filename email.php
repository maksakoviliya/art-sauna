<?php
$to      = 'maksak_il@mail.ru';
$subject = 'the subject';
$headers = 'From: no-reply@art-sauna.com'       . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

$json = file_get_contents('php://input');
$data = json_decode($json);

$roistatVisitId = array_key_exists('roistat_visit', $_COOKIE) ? $_COOKIE['roistat_visit'] : 'nocookie';

//$message = "Телефон: $data->phone; Название формы: Форма; Roistat: {$roistatVisitId};";
$message = 'asda';

mail($to, $subject, $message, $headers);

echo 'success';
