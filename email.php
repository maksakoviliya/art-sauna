<?php
$to = '20785813.293103@parser.amocrm.ru';
$subject = 'the subject';
$headers = 'From: no-reply@art-sauna.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

$json = file_get_contents('php://input');
$data = json_decode($json);

$roistatVisitId = array_key_exists('roistat_visit', $_COOKIE) ? $_COOKIE['roistat_visit'] : 'nocookie';

$message = "Телефон: $data->phone; Название формы: Форма; Roistat: {$roistatVisitId};";
if (isset($data->name)) {
    $message = $message . "Имя: $data->name";
}

if (isset($data->text)) {
    $message = $message . "Текст: $data->text";
}

mail($to, $subject, $message, $headers);
echo $message;
