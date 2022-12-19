<?php 
while($nombre < 200000000){
    spirale3D($nombre); principal($nombre);
    if($isItPrime == 1){
        $request = $data_base->prepare('INSERT INTO nature(prime, abcisse, ordinate, rate, phase, numerateur, denumerateur, distique, quatrain, sixain, sixainDouze, sens) VALUES(:prime, :abcisse, :ordinate, :rate, :phase, :numerateur, :denumerateur, :distique, :quatrain, :sixain, :sixainDouze, :sens)');
        $request->execute(array(
            'prime' => $nombre,
            'abcisse' => $cubeX,
            'ordinate' => $cubeY,
            'rate' => $cubeZ,
            'phase' => $phase,
            'numerateur' => $numerateur,
            'denumerateur' => $denumerateur,
            'distique' => $distique,
            'quatrain' => $quatrain,
            'sixain' => $sixain,
            'sixainDouze' => $sixainDouze,
            'sens' => $sens,
        ));
        $request->closeCursor();
    }
}
?>