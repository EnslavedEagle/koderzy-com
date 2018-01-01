<?php
$errors = array();
$filename = '9f97259bfe2ec1126eb01f3b73ef1152.csv';

$requiredFields = array('name', 'email');

foreach ($requiredFields as $key) {
  if (!isset($_POST[$key]) || empty($_POST[$key])) {
    $errors[] = 'Pola muszą zostać wypełnione.';
    break;
  }
}

if ($_POST && !$errors) {
  if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Podany adres e-mail jest nieprawidłowy.';
  } else {
    $file = fopen($filename, 'a');
    $csv = array_map('str_getcsv', file($filename));

    // Search for email
    foreach ($csv as $line) {
      if (strtolower($line[1]) === strtolower($_POST['email'])) {
        $errors[] = 'Ten adres e-mail został już zapisany.';
        break;
      }
    }

    if (!$errors) {
      fputcsv($file, array($_POST['name'], $_POST['email']));
      fclose($file);
    }
  }
}


if (!$errors) {
  echo json_encode(array('success' => true));
} else {
  echo json_encode(array('errors' => $errors, 'success' => false));
}

?>