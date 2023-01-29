<?php
include 'source2.php';
$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
   
    case "GET":
        $sql = "SELECT count(searchText) as total ,searchText FROM `searchlogs` where month(date) = month(CURRENT_DATE) GROUP by searchText order by total DESC;";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($users);
        break;

    
}
?>