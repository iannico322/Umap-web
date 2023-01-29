<?php
include 'source2.php';
$method = $_SERVER['REQUEST_METHOD'];


$userid= $_POST['userid'];

echo $userid;
switch($method) {
   
    case "POST":
		$sql = "UPDATE users SET UserType='user'WHERE ID='$userid';";
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



