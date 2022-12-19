<?php  
    try
    {
      $data_base = new PDO('mysql:host=localhost;dbname=metatron8;charset=utf8', 'root', 'root');
      
    }
    catch(Exception $e)
    {
        die('Erreur : '.$e->getMessage());
    }
?>