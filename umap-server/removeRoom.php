<?php
include 'source2.php';

$method = $_SERVER['REQUEST_METHOD'];


$roomID= $_POST['roomID'];

echo $userid;
switch($method) {
   
    case "POST":
		$sql = "DELETE FROM rooms WHERE roomID = '$roomID';";
        $stmt = $conn->prepare($sql);
	

        $stmt->execute();
        
		if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
		
        
        break;

    
}
?>



