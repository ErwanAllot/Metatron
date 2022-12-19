<?php

include 'dataBase.php';

$request = $data_base->query("DROP TABLE nature");
$request->closeCursor();

echo 'la table Nature a été détruite';
?>