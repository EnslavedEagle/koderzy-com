<?php
$filename = '9f97259bfe2ec1126eb01f3b73ef1152.csv';

if (!isset($_POST['password']) || empty($_POST['password'])) {
  echo '<form id="password" action="saved-users.php" method="post">
      <input type="password" name="password" placeholder="Password...">
      <input type="submit" value="OK">
    </form>';
} else { 
  if ($_POST['password'] === 'XsEtfW') {
    header('Content-Type: text/csv');
    header('Content-Disposition: attachment; filename="saved-users.csv"');
    readfile($filename);
  }
}
?>