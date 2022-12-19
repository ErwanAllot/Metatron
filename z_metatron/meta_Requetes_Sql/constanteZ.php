<?php
$abc = $_REQUEST["ABC"];
$sql_view = '';

include 'dataBase.php';
$request = $data_base->query("SELECT * FROM nature WHERE rate = '$abc' ");

while ($data = $request->fetch()) {
    $abcisse = $data['abcisse'];
    $ordinate = $data['ordinate'];
    $sql_view .= $abcisse . ',' . $ordinate . ',';
}

$request->closeCursor();
echo $sql_view;
?>