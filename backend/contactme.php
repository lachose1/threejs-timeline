<?php
header("Access-Control-Allow-Origin: *");

if(empty($_REQUEST['email']) || empty($_REQUEST['subject']) || empty($_REQUEST['message']))
	die("{}");

if(mail("hugolaliberte@outofsight.io", "HUGOLALIBERTE.COM MESSAGE: " . $_REQUEST['subject'], "SENT BY: " . $_REQUEST['email'] . "<br /><br />" . $_REQUEST['message']))
	die('{"status":"success"}');
else
	die('{"status":"failed"}');
?>