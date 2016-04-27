<?php
require_once('settings.php'); 

if($_SERVER['REQUEST_METHOD'] == "GET") {
	if(!empty($_GET['id']))
		echo json_encode(getProject($_GET['id']));
	else
		echo json_encode(getProjects());
}
if($_SERVER['REQUEST_METHOD'] == "POST") {
	// $json = file_get_contents('php://input');
	// if($_SERVER['HTTP_X_HTTP_METHOD_OVERRIDE'] == 'PUT') {
	// 	//This is an UPDATE call
	// 	if(!empty($json))
	// 		return json_encode(updatePrice());
	// }
	// elseif($_SERVER['HTTP_X_HTTP_METHOD_OVERRIDE'] == 'DELETE') {
	// 	//This is a DELETE call
	// 	// die($json);
	// 	if(!empty($_GET['id'] && !empty($_GET['quantity'])))
	// 		return json_encode(deletePriceFromQuantity($_GET['id'], $_GET['quantity']));
	// }
	// else {
	// 	//This is an ADD call
	// 	if(!empty($json))
	// 		return json_encode(addPrice());
	// }
}

function getProject($id) {
	global $db;

    $stmt = $db->prepare("SELECT
							id,
							project_name,
							technologies,
							date_realized,
							text_date,
							description,
							image_url,
							video_url,
							no_images,
							image_extension
						FROM
							projects
						WHERE
							id=?");

    $stmt->bindValue(1, $id, PDO::PARAM_INT);
    
    $stmt->execute();
    
    if(!empty($stmt))
      return $stmt->fetchAll(PDO::FETCH_ASSOC);
    else
      return array();
}

function getProjects() {
	global $db;

    $stmt = $db->query("SELECT
							id,
							project_name,
							date_realized,
							technologies,
							text_date,
							description,
							image_url,
							video_url,
							no_images,
							image_extension
						FROM
							projects
						ORDER BY
							date_realized DESC");

    if(!empty($stmt))
      return $stmt->fetchAll(PDO::FETCH_ASSOC);
    else
      return array();
}


?>