<?php 

include 'source.php';
	
	if(mysqli_connect_error()){
		echo mysqli_connect_error();
		exit();
	}
	else{
		$userid = $_POST['userid'];
		$roomid = $_POST['roomid'];
		$title = $_POST['title'];
		$time = $_POST['time'];
		$date = $_POST['date'];
		
		
		$sql = "INSERT INTO schedules(userID,roomID,title,time,date,description) VALUES('$userid','$roomid','$title','$time','$date','blabla');";
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
