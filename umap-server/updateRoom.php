<?php 

	header('Access-Control-Allow-Origin: *');
	
	$conn = new mysqli("localhost","root","","umap_db");
	
	if(mysqli_connect_error()){
		echo mysqli_connect_error();
		exit();
	}
	else{
        $roomID = $_POST['roomID'];
		$roomName = $_POST['roomName'];
		$buildingNumber = $_POST['buildingNumber'];
		$floorNumber = $_POST['floorNumber'];
        $blockNumber = $_POST['blockNumber'];
        $roomType = $_POST['roomType'];
        


		$sql = "UPDATE rooms SET roomName='$roomName', buildingNumber = '$buildingNumber',floorNumber = '$floorNumber ',blockNumber = '$blockNumbe',roomType = '$roomType' WHERE roomID='$roomID';";
		$res = mysqli_query($conn, $sql);
		

		$conn->close();
	}

?>
