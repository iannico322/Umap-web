<?php 

	header('Access-Control-Allow-Origin: *');
	
	$conn = new mysqli("localhost","root","","umap_db");
	
	if(mysqli_connect_error()){
		echo mysqli_connect_error();
		exit();
	}
	else{
		$username = $_POST['username'];
		$password = $_POST['password'];
		

		
		$sql = "select email, password from users where email = '$username' and password = '$password';";
		$res = mysqli_query($conn, $sql);

		if (mysqli_num_rows($res ) > 0){
			echo "Login";
			
		}
		else{
			echo "Error!";
		}
		$conn->close();
	}
