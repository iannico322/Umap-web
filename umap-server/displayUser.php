<?php
include 'source2.php';

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
   
    case "POST":
        $user = json_decode( file_get_contents('php://input'));
        $sql = "INSERT INTO users(fullname,email,password,usertype) VALUES(:fullname,:email,:password,'user');";
        $stmt = $conn->prepare($sql);

        $stmt->bindParam(':fullname', $user->fullname);
        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':password', $user->password);


        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;

    
}