<?php

header("Access-Control-Allow-Origin: *");

$dbSettings = array(
					"dbname"=>"oos_portfolio",
					"dbUser"=>"root",
					"dbPass"=>"",
					"host"=>"localhost");

$db = new PDO('mysql:host=' . $dbSettings['host'] . ';dbname=' . $dbSettings['dbname'] . ';charset=utf8', $dbSettings['dbUser'], $dbSettings['dbPass']);

?>