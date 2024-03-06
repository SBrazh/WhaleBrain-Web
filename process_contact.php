<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["contact-name"];
    $email = $_POST["contact-email"];
    $message = $_POST["contact-message"];

    // Your email address
    $to = "your@email.com";

    $subject = "New Contact Form Submission";
    $headers = "From: $name <$email>";

    // Compose the email message
    $body = "Name: $name\n\nEmail: $email\n\nMessage:\n$message";

    // Send the email
    mail($to, $subject, $body, $headers);

    // Redirect after submission (optional)
    header("Location: thank-you-contact.html");
    exit;
}
?>
