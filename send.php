<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];


$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$message = htmlspecialchars($message);

$name = urldecode($name);
$email = urldecode($email);
$message = urldecode($message);

$name = trim($name);
$email = trim($email);
$message = trim($message);



if (mail('admin@mail.ru',
		'Новое письмо с сайта',
		"Имя: ".$name."\n".
		"Email: ".$email."\n".
		"Сообщение: ".$message."\n".
		"From: no-reply@mydomain.ru \r\n")

){
	echo('Письмо успешно отправлено');
}
	else{
		echo('Есть ошибки! Проверьте данные...');
	}
?>
