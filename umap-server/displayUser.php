<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

echo "ruunn";

class DbConnect {
    private $server = 'localhost';
    private $dbname = 'umap_db';
    private $user = 'root';
    private $pass = '';

    public function connect() {
        try {
            $conn = new PDO('mysql:host=' .$this->server .';dbname=' . $this->dbname, $this->user, $this->pass);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        } catch (\Exception $e) {
            echo "Database Error: " . $e->getMessage();
        }
    }
    
}




$objDb = new DbConnect;
$conn = $objDb->connect();

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