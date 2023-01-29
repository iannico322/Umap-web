<?php
include 'source2.php';

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
   
    case "GET":
        $sql = "select * from rooms";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($users);
        break;

    
}
?>