<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get form data
    $name = trim($_POST["name"] ?? "");
    $email = trim($_POST["email"] ?? "");
    $subject = trim($_POST["subject"] ?? "");
    $message = trim($_POST["message"] ?? "");

    // Basic validation
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        die("Please fill in all fields.");
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Please enter a valid email address.");
    }

    // Your email
    $to = "samsuseelan.research@gmail.com";

    // Email subject
    $email_subject = "New Contact Form Message: " . $subject;

    // Email body
    $email_body = "You have received a new message from your website.\n\n";

    $email_body .= "Name: " . $name . "\n";
    $email_body .= "Email: " . $email . "\n";
    $email_body .= "Subject: " . $subject . "\n\n";

    $email_body .= "Message:\n";
    $email_body .= $message . "\n";

    // Email headers
    $headers = "From: Website Contact Form <noreply@" . $_SERVER['HTTP_HOST'] . ">\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send email
    if (mail($to, $email_subject, $email_body, $headers)) {

        echo "
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset='UTF-8'>
            <title>Message Sent</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background: #111;
                    color: #fff;
                    text-align: center;
                    padding-top: 100px;
                }

                .success {
                    max-width: 500px;
                    margin: auto;
                    padding: 40px;
                    background: #1c1c1c;
                    border-radius: 10px;
                }

                h1 {
                    color: #D4AF37;
                }

                a {
                    color: #D4AF37;
                    text-decoration: none;
                }
            </style>
        </head>

        <body>

            <div class='success'>
                <h1>Message Sent Successfully!</h1>
                <p>Thank you for contacting me.</p>
                <p>I will get back to you soon.</p>

                <br>

                <a href='index.html'>Back to Website</a>
            </div>

        </body>
        </html>
        ";

    } else {

        echo "
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset='UTF-8'>
            <title>Error</title>
        </head>

        <body>

            <h2>Sorry, your message could not be sent.</h2>
            <a href='index.html'>Go Back</a>

        </body>
        </html>
        ";
    }

} else {

    header("Location: index.html");
    exit();

}
?>