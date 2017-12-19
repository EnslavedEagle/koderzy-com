<?php
$errors = array();

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
    $csv = array_map('str_getcsv', file('saved-users.csv'));

    // Search for email
    foreach ($csv as $line) {
      if (strtolower($line[1]) === strtolower($_POST['email'])) {
        $errors[] = 'Ten adres e-mail został już zapisany.';
        break;
      }
    }

    if (!$errors) {
      $file = fopen('saved-users.csv', 'a');
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