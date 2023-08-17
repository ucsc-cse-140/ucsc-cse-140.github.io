<?php
    require_once('../../php/tournament_utils.php');

    if (!isset($_GET['tournament'])) {
        die('No tournament id.');
    }

    $tournament = $_GET['tournament'];
?>

<html>
    <head>
        <link rel='stylesheet' type='text/css' href='/common/css/normalize.css'>
        <link rel='stylesheet' type='text/css' href='/common/css/cmps140.css'>

        <link rel='stylesheet' type='text/css' href='/p4/tournaments/css/tournament.css'>
        <script src='/p4/tournaments/js/tournament.js'></script>

        <script>
            document.addEventListener("DOMContentLoaded", function(event) {
                var results = `<?php echo get_tournament_results($tournament); ?>`;
                displayTournamentResults(<?php echo $tournament; ?>, results);
            });
        </script>

        <title>CTF Tournament <?php echo $tournament; ?></title>
    </head>
    <body>
        <div class='page'>
            <h1>Capture the Flag Tournament <?php echo $tournament; ?></h1>

            <div class='section'>
                <div class='records-area'>
                    <h2>Tournament Rankings!</h2>
                </div>
            </div>

            <div class='section'>
                <div class='matches-area'>
                    <h2>Match Stats</h2>
                </div>
            </div>
        </div>
    </body>
</html>
