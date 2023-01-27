<?php 

	header('Access-Control-Allow-Origin: *');
	
	$conn = new mysqli("localhost","root","","umap_db");
	
	if(mysqli_connect_error()){
		echo mysqli_connect_error();
		exit();
	}
	else{
		$searchtext = $_POST['searchtext'];
		$timestamp = $_POST['timestamp'];
		$userid = $_POST['userid'];
		
		$sql = "INSERT INTO searchlogs(searchtext,timestamp,date,userid) VALUES('$searchtext','$timestamp',CURRENT_DATE,'$userid');";
		$res = mysqli_query($conn, $sql);
		
		if($res){
			echo "Success!";
		}
		else{
			echo "Error!";
		}
		$conn->close();
	}

?>
