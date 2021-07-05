
<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $servername = "localhost";
    $username = "root";
    $password = "root";
    $dbname = "itsec";

    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }


    $sql = "INSERT INTO utenti (id, nome, mail, comment)
    VALUES ('', '".$_POST["nome"]."', '".$_POST["mail"]."', '".$_POST["comment"]."')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }
  
  mysqli_close($conn);

}


?>