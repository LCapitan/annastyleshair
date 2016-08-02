<?php

	// Mail settings
	$to      = "";
	$subject = "Appointment Inquiry";

	// You can put here your email
	$header = "From: noreply@aerialimageryhd.com\r\n";
	$header.= "MIME-Version: 1.0\r\n";
	$header.= "Content-Type: text/plain; charset=utf-8\r\n";
	$header.= "X-Priority: 1\r\n";

	if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["message"])) {

		$content  = "Name: "     . $_POST["name"]    . "\r\n";
		$content .= "Email: "    . $_POST["email"]   . "\r\n";
		$content .= "Date:"			 . $_POST["date"]		 . "\r\n";
		$content .= "Time:"			 . $_POST["time"]		 . "\r\n";
		$content .= "Message: "  . "\r\n" . $_POST["message"];

		if (mail($to, $subject, $content, $header)) {

			$result = array(
				"message"    => "Thanks for booking with Anna Styles Hair.",
				"sendstatus" => 1
			);

			echo json_encode($result);

		} else {

			$result = array(
				"message"    => "Sorry, something went wrong.",
				"sendstatus" => 0
			);

			echo json_encode($result);

		}

	}

?>
