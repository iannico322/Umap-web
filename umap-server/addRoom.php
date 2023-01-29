<?php 

include 'source.php';
	
	if(mysqli_connect_error()){
		echo mysqli_connect_error();
		exit();
	}
	else{
		$roomName = $_POST['roomName'];
		$buildingNumber = $_POST['buildingNumber'];
		$floorNumber = $_POST['floorNumber'];
        $blockNumber = $_POST['blockNumber'];
        $roomType = $_POST['roomType'];

		$sql = "INSERT INTO rooms(roomName,buildingNumber,floorNumber,blockNumber,roomType) VALUES('$roomName','$buildingNumber','$floorNumber','$blockNumber','$roomType');";
		$res = mysqli_query($conn, $sql);
		

		$conn->close();
	}

?>
