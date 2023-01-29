<?php
include 'source2.php';
$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
   
    case "GET":
        $sql = "SELECT COUNT(searchText) as total,  searchText ,CURRENT_DATE as today FROM `searchlogs`  where date = CURRENT_DATE GROUP by searchText ORDER by COUNT(searchText) DESC ;";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($users);
        break;

    
}
?>