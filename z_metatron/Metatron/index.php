<?php include 'autresDossiers.php'; ?>

<html lang="fr">

<head>
    <title>🧊 Métatron</title>
    <?php 
        include 'DOCTYPE/metaTag.html'; 
        include 'DOCTYPE/fonts.html'; 
        include 'linksAndScripts.html'; 
    ?>
</head>

<body> 
    <?php include 'DOCTYPE/header.html'; ?>
    <main>
        <?php 
            include 'DOCTYPE/motsClefs.html'; 
                include 'DOCTYPE/separateur.html'; 
            include 'DOCTYPE/introduction.html';
                include 'DOCTYPE/separateur.html';
            include 'DOCTYPE/outilsEtMethodes.html'; 
                include 'DOCTYPE/separateur.html';
            include 'DOCTYPE/recherchesEtResusltats.html'; 
                include 'DOCTYPE/separateur.html';
            include 'DOCTYPE/conclusion.html'; 
                
            
        ?>

    </main>
    <?php include 'DOCTYPE/footer.html' ?>
</body>

</html>