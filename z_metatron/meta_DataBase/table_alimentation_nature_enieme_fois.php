<?php

include 'dataBase.php';

ini_set('max_execution_time', 7200);

include 'parametresNouveaux.php';
// OR
// include 'metatron_params_depart.php';

include 'metatron_algo.php';
include 'prime.php';
include 'coordonnees.php';

echo 'la base de données est rempli une énième fois';