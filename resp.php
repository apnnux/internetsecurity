<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "itsec";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT nome, mail, web FROM utenti";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "Nome: " . $row["nome"]. " - Mail: " . $row["mail"]. " Web: " . $row["web"]. "<br>";
  }
} else {
  echo "0 results";
}
$conn->close();
?>