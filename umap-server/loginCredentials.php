<?php
include 'source2.php';

$method = $_SERVER['REQUEST_METHOD'];


$username = $_POST['username'];
$password = $_POST['password'];

switch($method) {
   
    case "POST":
   
		$sql = "select * from users where email = '$username' and password = '$password';";
        $stmt = $conn->prepare($sql);
	

        $stmt->execute();
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
		
		
		
		if (json_encode($users) == "[]"){
			echo json_encode("Invalid Credentials!");
			
		}
		else{
			echo json_encode($users);
			
		}
        
        break;

    
}
?>



