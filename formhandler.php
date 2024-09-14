<?php

$name=$_POST['name'];
$visitors_email=$_POST['email'];
$subject=$_POST['subject'];
$message=$_POST['message'];

$email_from='hemantmahatara.com.np';

$email_subject='New Form Submission';

$email_body="User Name: $name.\n".
             "User Email: $visitor_email.\n".
             "Subject: $subject.\n".
             "User Message: $message.\n";

$to="hemanta.intern@geoneer.com";
$headers="From:$email_from \r\n";

$headers="Rply-To:$visitors_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location:contact.html");



?>
    