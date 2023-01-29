<?php
include 'source2.php';

$method = $_SERVER['REQUEST_METHOD'];


$userid= $_POST['userid'];


switch($method) {
   
    case "POST":
		$sql = "select * from schedules where userid = '$userid'";
        $stmt = $conn->prepare($sql);
	

        $stmt->execute();
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
	
		
		
		if (json_encode($users) == "[]"){
			echo json_encode("NoSchedules");
			
		}
		else{
			echo json_encode($users);
		}
        
        break;

    
}
?>



