<?php
$abc = $_REQUEST["ABC"];
$sql_view = '';

include 'dataBase.php';
$request = $data_base->query("SELECT * FROM nature WHERE ordinate = '$abc' ");

while ($data = $request->fetch()) {
    $abcisse = $data['abcisse'];
    $rate = $data['rate'];
    $sql_view .= $abcisse . ',' . $rate . ',';
}

$request->closeCursor();
echo $sql_view;
?>