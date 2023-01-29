<?php
include 'source2.php';
$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
   
    case "GET":
        $sql = "SELECT WEEK(date) AS week, searchText, COUNT(searchText) AS count FROM searchlogs GROUP BY WEEK(date), searchText;";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($users);
        break;
}
?>