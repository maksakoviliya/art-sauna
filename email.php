<?php
$file = 'log.log';
$current = file_get_contents($file);
$current .= "New form:\n";
file_put_contents($file, $current);

$to = 'artsaunabiz@yandex.ru';
$subject = 'the subject';
$headers = 'From: no-reply@art-sauna.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

$json = file_get_contents('php://input');
$data = json_decode($json);

$roistatVisitId = array_key_exists('roistat_visit', $_COOKIE) ? $_COOKIE['roistat_visit'] : 'nocookie';

$message = "Телефон: +7$data->phone; Roistat: {$roistatVisitId};";
if (isset($data->id)) {
    $message = $message . "form_id: $data->id";
}
if (isset($data->name)) {
    $message = $message . "Имя: $data->name;";
}

if (isset($data->text)) {
    $message = $message . "Текст: $data->text;";
}

$current .= "$message\n";
file_put_contents($file, $current);

mail($to, $subject, $message, $headers);
echo $message;
return $message;
