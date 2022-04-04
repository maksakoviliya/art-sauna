<?php
$to_email = 'maksak_il@mail.ru';
$subject = 'Testing PHP Mail';
$message = 'This mail is sent using the PHP mail function';
$headers = 'From: noreply@art-sauna.com';
mail($to_email,$subject,$message,$headers);
