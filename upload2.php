<?php  
session_start();
$n=$_SESSION['name'];
$l=$_SESSION['location'];


if(isset($_POST['submit'])){

	// if(empty($email) ||empty($telephone)|| empty($details)){
	// header("Location:respond.php?error=emptyfields");
	// exit();
 //     }
	$email=$_POST['email'];
	$telephone=$_POST['telephone'];
	$details=$_POST['details'];

	require_once 'db_connection.php';

    $query="INSERT INTO `found`(`email`, `tel`, `location`, `description`) VALUES ('$email','$telephone','$l','$details')";

    if(!mysqli_query($connection,$query)){
		die("error".mysqli_error($connection));
		exit();
	
	}

	else{
		header("Location:item.php");
			
		
	}


}










?>