<?php
	$db_server = "localhost";
	$db_user = "root";
	$db_pass = "";
	$db_name = "mywebsite";
	$conn = "";
	try {
		$conn = mysqli_connect($db_server,
				$db_user,
				$db_pass,
				$db_name);
	}
	catch (Exception $e){
		echo $e;
	}
	$sql = "";
	if (!empty($_GET['id'])) 
	{ 
		$sql = "SELECT * FROM `product` WHERE id=".$_GET['id'];
  	} 
  	else { 
     	$sql = "SELECT * FROM `product`";
  	}
	$result = $conn->query($sql);
	if ($result->num_rows > 0) {
 		// output data of each row
  	  	while($row = $result->fetch_assoc()) {
  	    	echo "id: ".$row["id"]." - Name: ".$row["name"]."<br>";
		}
	}
$conn->close();
?>