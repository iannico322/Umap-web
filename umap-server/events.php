<?php 

	header('Access-Control-Allow-Origin: *');
	
	$conn = new mysqli("localhost","root","","umap_db");
	
	if(mysqli_connect_error()){
		echo mysqli_connect_error();
		exit();
	}
	else{
		$location = $_POST['location'];
		$title = $_POST['title'];
		$time = $_POST['time'];
        $date = $_POST['date'];


		
		$sql = "INSERT INTO events(locationid,title,time,date,description) VALUES('$location ','$title','$time','$date','blablabla');";
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
