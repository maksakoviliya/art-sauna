<?php

if (isset($_POST)) {
    $to = "maksak_il@mail.ru";
    $subject = 'Subj';
    $data = json_decode(file_get_contents('php://input'), true);
    $message = 'Name: ' . $data['name'] . ' Phone: ' . $data['phone'];
    $success = mail($to, $subject, $message);
    if ($success) {
        echo "Success!";
    } else {
        echo "Fail";
    }
}
