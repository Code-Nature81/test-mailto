<?php
$to = 'gubin.quentin@laposte.net, code.nature81@gmail.com'; // Remplacez par les adresses e-mail souhaitées, séparées par des virgules
$subject = $_POST['subject'];

$name = $_POST['name'];
$message = $_POST['message'];

$body = "Nom de l'expéditeur: $name\n\nMessage:\n$message";

$headers = "From: $name\r\n";
$headers .= "Reply-To: $name\r\n";

if (mail($to, $subject, $body, $headers)) {
  http_response_code(200);
} else {
  http_response_code(500);
}
?>
