<?php
header('Content-type: text/html; charset=utf-8'); // задаем кодировку

$to = "testertestmail2000@gmail.com" ; // куда отправляем письмо
$name = 'Имя: '.$_POST['name']. PHP_EOL; // получаем данные из формы
$mail = 'Почта: '.$_POST['email']. PHP_EOL; // получаем данные из формы
$phone = 'Телефон: '.$_POST['phone']. PHP_EOL;
$text='Сообщение:' .$_POST['ask']; // получаем данные из формы
$message=$name. $mail. $phone. htmlentities($text); // формируем сообщение
$subject = "Заявка с сайта edisson group"; // тема письма

if(mail($to, $subject, $message)) { // отправка письма
echo "Письмо отправлено!"; // сообщение при отправке
} else {
echo "Заполните все поля"; // сообщение при ошибке
}
?>