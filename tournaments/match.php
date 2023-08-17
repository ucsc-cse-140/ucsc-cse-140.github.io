<?php
    require_once('../../php/tournament_utils.php');

    if (!isset($_GET['tournament'])) {
        die('No tournament id.');
    }

    if (!isset($_GET['match'])) {
        die('No match id.');
    }

    $tournament = $_GET['tournament'];
    $match = $_GET['match'];
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
                displayMatchResults(<?php echo $tournament; ?>, <?php echo $match; ?>, results);
            });
        </script>

        <title>CTF Match <?php echo $tournament; ?>#<?php echo $match; ?></title>
    </head>
    <body>
        <div class='page'>
            <h1>Capture the Flag Match <?php echo $tournament; ?>#<?php echo $match; ?></h1>

            <div class='section'>
                <div class='match-area'>
                    <h2>
                        Match Stats
                        (<a href="/p4/tournaments/matchstats.php?tournament=<?php echo $tournament; ?>&match=<?php echo $match; ?>">Download Full Match Stats</a>)
                    </h2>

                    <div class='team-area red-team'>
                        <h3>Red Team</h3>
                    </div>

                    <div class='team-area blue-team'>
                        <h3>Blue Team</h3>
                    </div>
                </div>
            </div>

            <div class='section'>
                <div class='games-area'>
                    <h2>
                        Games
                        (<a href="/p4/tournaments/matcharchive.php?tournament=<?php echo $tournament; ?>&match=<?php echo $match; ?>">Download All Games</a>)
                    </h2>
                </div>
            </div>
        </div>
    </body>
</html>
