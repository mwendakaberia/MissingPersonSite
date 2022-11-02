<!DOCTYPE html>
<html>
<head>
	<title>Responding to Missing Inquiries</title>
	<link rel="stylesheet" type="text/css" href="index.css">
</head>
<body>

	<?php 
	session_start();
     if (isset($_GET['name'])&&isset($_GET['location'])) {

     	$name=$_GET['name'];
     	$location=$_GET['location'];

     	$_SESSION['name']=$name;
     	$_SESSION['location']=$location;


     }


	 ?>

	 <form action="upload2.php" method="POST" enctype="multipart/form-data">
        <center>
        	<p>Please provide details about the whereabouts of the above person<br>Your help is highly appreciated<br>Thanks in advance!!</p>
        
        <input type="text" name="email" placeholder="Provide youtr Email"><br><br>
        <input type="text" name="telephone" placeholder="Provide your mobile number"><br><br>
		<textarea cols="20" rows="3" name="details" maxlength="40" placeholder="provide a short explanation concerning the occurence"></textarea><br><br>
		<button type="submit" name="submit">Upload</button>

    </center>


	
	</form>

</body>
</html>