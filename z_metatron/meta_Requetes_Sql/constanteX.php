<?php
$abc = $_REQUEST["ABC"];
$sql_view = '';

include 'dataBase.php';
$request = $data_base->query("SELECT * FROM nature WHERE abcisse = '$abc' ");

while ($data = $request->fetch()) {
    $ordinate = $data['ordinate'];
    $rate = $data['rate'];
    $sql_view .= $ordinate . ',' . $rate . ',';
}

$request->closeCursor();
echo $sql_view;
?>