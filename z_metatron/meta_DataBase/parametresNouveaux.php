<?php

$request = $data_base->query("SELECT MAX(id) AS max_id FROM nature");
while ($data = $request->fetch()) {
    $max_id = $data['max_id'];
}
$request->closeCursor();

$request2 = $data_base->query("SELECT 
phase, prime, 
abcisse, ordinate, rate, 
numerateur, denumerateur, 
distique, quatrain, sixain, sixainDouze, 
sens 
FROM nature WHERE id = $max_id");

while ($data2 = $request2->fetch()) {
    $phase = $data2['phase'];
    $nombre = $data2['prime'];
    $cubeX = $data2['abcisse'];
    $cubeY = $data2['ordinate'];
    $cubeZ = $data2['rate'];
    $numerateur = $data2['numerateur'];
    $denumerateur = $data2['denumerateur'];
    $distique = $data2['distique'];
    $quatrain = $data2['quatrain'];
    $sixain = $data2['sixain'];
    $sixain12 = $data2['sixainDouze'];
    $sens = $data2['sens'];  
}
$request2->closeCursor();

?>