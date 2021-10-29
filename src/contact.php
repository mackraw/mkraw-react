<?php

var_dump($_POST);

function main()
{
  if (!empty($_POST)) {
    $name = $_POST['name'];
    $from = $_POST['email'];
    $message = $_POST['message'];

    $name = trim($name, "\n\r\t\v\0");
    $message = trim($message, "\n\r\t\v\0");

    $name = strip_tags($name);
    $message = strip_tags($message);

    $name = substr($name, 0, 64);
    $message = substr($message, 0, 1000);
    $from = filter_var($from, FILTER_VALIDATE_EMAIL);

    if (!empty($name) && !empty($from) && !empty($subject) && !empty($message)) {

      $headers = "From: $from\r\n";
      $headers .= "Reply-To: $from\r\n";
      $headers .= "MIME-Version: 1.0\r\n";
      $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
      $to = "hi@mkraw.com";
      $body = $name . " you a message from mkraw.com:\n\n" . $message;

      if (mail(
        $to,
        $subject,
        $body,
        $headers,
      )) {
        echo "okay";
      } else {
        echo "error";
      }
    } else {
      echo "error";
    }
  } else {
    echo "error";
  }
}

main();
