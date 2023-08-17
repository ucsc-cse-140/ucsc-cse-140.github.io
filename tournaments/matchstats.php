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

    serve_match_stats($tournament, $match);
?>
