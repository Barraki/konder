<?php

/* https://api.telegram.org/bot753483142:AAGpBM4EhOgqwIx6U32gzFrWqxDQl8yGtI4/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];
$token = "753483142:AAGpBM4EhOgqwIx6U32gzFrWqxDQl8yGtI4";
$chat_id = "-375764460";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

$succes = "false";

if ($sendToTelegram) {
  $succes = "true";
} else {
  $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={Error request}","r");
}
?>