<?php

include 'dataBase.php';

$request = $data_base->query("CREATE TABLE nature (
    id int NOT NULL AUTO_INCREMENT,
    prime int,
    abcisse int,
    ordinate int,
    rate int,
    phase int,
    numerateur int,
    denumerateur int,
    distique int,
    quatrain int,
    sixain int,
    sixainDouze int,
    sens varchar(20),
    PRIMARY KEY (id))"
);
$request->closeCursor();

echo 'la table Nature a été crée';
?>