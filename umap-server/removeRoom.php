<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

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


$roomID= $_POST['roomID'];

echo $userid;
switch($method) {
   
    case "POST":
		$sql = "DELETE FROM rooms WHERE roomID = '$roomID';";
        $stmt = $conn->prepare($sql);
	

        $stmt->execute();
        
		if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
		
        
        break;

    
}
?>



