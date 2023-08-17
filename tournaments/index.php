<?php
    require_once('../../php/tournament_utils.php');
?>

<html>
    <head>
        <link rel='stylesheet' type='text/css' href='/common/css/normalize.css'>
        <link rel='stylesheet' type='text/css' href='/common/css/cmps140.css'>

        <title>CMPS140 Tournaments</title>
    </head>
    <body>
        <div class='page'>
            <h1>Capture the Flag Tournament Index</h1>

            <div class='section'>
                <?php
                    foreach (get_tournaments() as $tournament) {
                        $link = sprintf("/p4/tournaments/tournament.php?tournament=%s", urlencode($tournament));
                        echo sprintf("<p><a href='%s'>%s</a></p>", $link, $tournament);
                    }
                ?>
            </div>
        </div>
    </body>
</html>
