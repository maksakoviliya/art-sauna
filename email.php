<?php
//$to      = 'maksak_il@mail.ru';
//$subject = 'the subject';
//$message = 'hello';
//$headers = 'From: no-reply@art-sauna.com'       . "\r\n" .
//    'X-Mailer: PHP/' . phpversion();
$json = file_get_contents('php://input');

// decode the json data
echo $_POST['name'];
$data = json_decode($json);
echo 'data \n /n /r \r';
print_r($data);
echo 'here';
//mail($to, $subject, $message, $headers);
echo 'success';
