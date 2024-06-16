<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "contactus";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: ". $conn->connect_error);
    }

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO contact (name, email, message) VALUES (?,?,?)");
    $stmt->bind_param("sss", $name, $email, $message);

    // Execute
    if ($stmt->execute()) {
        echo "New record created successfully";
    } else {
        echo "Error: ". $stmt->error;
    }

    // Close statement
    $stmt->close();

    // Close connection
    $conn->close();
}
?>