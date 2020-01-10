<?php

// Please put your PHP code here
//
// You can use entered variables as $_POST['trialname'] and $_POST['trialemail']

// Please insert here your email address:
$to      = 'PUT_YOUR_EMAIL_ADDRESS_HERE';

$subject = 'New subscription from '.$_POST['trialname'];
$message = 'Name: '.$_POST['trialname'].', e-mail:'.$_POST['trialemail'];
$headers = 'From: '.$_POST['trialemail']. "\r\n" .
    'Reply-To: '.$_POST['trialemail']. "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);

?>