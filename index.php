<!DOCTYPE html>
<html>
<head>
	<title>My Home Page</title>
	<link rel="stylesheet" type="text/css" href="index.css">
  <link rel="stylesheet" type="text/css" href="index.css">
	 <link rel="stylesheet" type="text/css" href="fontawesome/fontawesome-free-5.11.2-web/css/all.css">
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
	<nav>
		<!-- <a href="item.php">Missing Persons</a> -->
		 <a href="about.html">About Us</a>
        <a href="contact.php">Contact Us</a>
        
	</nav>

    <!-- <div class="h1">
      <h2>Reporting a missing person??</h2>
	<a href="signup.php" style="text-decoration: none;"><h1>Join Us</h1></a>
</div> -->
<!-- <h1 class="h2">Burden shared,burden solved!!</h1> -->
  
         <!--  <p class="p">
          The world is really becoming a small village with advancement in technology each passing minute.<br>
          The globalization will not be that fantastic and complete without a great way to purchase and sell <br>
          your products all over the world.<br>
          Let's enjoy a cup of  <span>happiness in marketing</span> as it's made super sweet.

        </p>
<div class="one">
  <img src="photos/images3/web4.jpg" width="300" height="300">
</div>
  <div class="two">
     <img src="photos/images3/web6.jpg" width="300" height="300">
  </div>
 <div  class="three">
   <img src="photos/images3/web8.jpg" width="300" height="300">
 </div> -->
   <!-- <div class="footer">
    <b> <p><center>Follow Us</center></p></b>
      <a href="https://web.facebook.com/EasyShop-110781463846185/?modal=admin_todo_tour"><span class="fa fa-facebook fa-lg fa-fw" style="color:mediumblue;" title="Facebook"></span></a>
      <a href="mailto:patrixmwenza@gmail.com"><span class="fa fa-envelope fa-lg fa-fw" style="color:cyan;" title="Email"></span></a>
      <span class="fa fa-youtube fa-lg fa-fw" style="color:red;" title="YouTube"></span>
      <span class="fa fa-twitter fa-lg fa-fw" style="color:dodgerblue;" title="Twitter"></span>
      <span class="fa fa-instagram fa-lg fa-fw" style="color:orange;" title="Instagram"></span>
      <span class="fa fa-linkedin fa-lg fa-fw" style="color:dodgerblue;" title="LinkedIn"></span>
      <span class="fa fa-pagelines fa-lg fa-fw" style="color:snow;" title="website"></span>
      <span class="fa fa-whatsapp fa-lg fa-fw" style="color:lightgreen;" title="WhatsApp"></span>

    <h3 style="color:black;text-align:center;">&copy2020 Ndackia Solutions</h3>

  </div> -->
   <h1 align="right">would you like to post a missing person <a href="signup.php" class="posting">Register</a> or <a href="login.php" class="posting">Login</a></h1>
     <!-- <div class="selector">
            <h2>Search for particular items</h2>
            <select name="category">
                        <option value="0"selected disabled>Category</option>
                        <option value="phones">Phones</option>
                        <option value="electronics">Electronics $ Appliances</option>
                        <option value="fashion">Fashion</option>
                        <option value="pets">Pets</option>
                        <option value="sports">Books,Sports $ Hobbies</option>
                        <option value="beddings">Beddings</option>
                        <option value="furniture">Furniture</option>
                        <option value="jobs">Jobs</option>
                        <option value="services">Services</option>
                        <option value="others">Others</option>
                    </select>
        </div>
 -->
  <div class="images1">
    <?php
    include 'DBController.php';
        $db_handle = new DBController();
        ?>
        <?php
        $query = $db_handle->runQuery("SELECT * FROM missing ORDER BY id ASC");
        if (! empty($query)) {
            foreach ($query as $key => $value) {
                ?> 
                <div class="all"> 
                <div class="name">
                      <?php
                      echo("<b class='name1'>".$query[$key]['name']."</b>");
                      ?>
                    </div>
                    <div class="image">
                    <?php 
                        if(file_exists($query[$key]["location"]))
                        { 
                    ?>
                    <a href="respond.php?name=<?php echo($query[$key]['name']);?>& location=<?php echo($query[$key]["location"]);?>"><img src="<?php echo $query[$key]["location"] ; ?>" /></a>
                    
                    <?php 
                } 
                    ?>
            
                    </div>
                   <!--  <div class="name">
                      <?php
                      echo("<b class='price2'>"."Ksh".$query[$key]['price']."</b>");
                      ?>
                    </div> -->
                    <div class="name">
                      <?php
                      echo("<b class='details'>".$query[$key]['details']."</b>");
                      ?>
                    
                    </div>
                </div>

        <?php
            }
        }
        ?>

  </div>



</body>
</html>