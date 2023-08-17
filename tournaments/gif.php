<?php
    require_once('../../php/tournament_utils.php');

    if (!isset($_GET['tournament'])) {
        die('No tournament id.');
    }

    if (!isset($_GET['match'])) {
        die('No match id.');
    }

    if (!isset($_GET['game'])) {
        die('No game id.');
    }

    $tournament = $_GET['tournament'];
    $match = $_GET['match'];
    $game = $_GET['game'];

    serve_game_gif($tournament, $match, $game);
?>
