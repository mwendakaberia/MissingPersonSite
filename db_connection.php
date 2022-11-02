<?php
$Hostname = "localhost";
$User = "root";
$dbPass = "";
$dbName = "m16";

$connection = new mysqli($Hostname,$User,$dbPass,$dbName);
if(!$connection) echo die("Failed to create connection to the server! <br>");
// else echo "Connection to the server created successfully! <br>";
// $querry="SELECT * from register where username='patoh'";
//         $querry2=mysqli_query($connection,$querry);
//         $name=mysqli_num_rows($querry2);
// echo($name);

// // //Alternative - using mysqli procedurally
// $connection = mysqli_connect($Hostname,$User,$dbPass,$dbName);
// if(mysqli_connect_errno()) die (mysqli_connect_error());
 ?>
