'use strict';

function displayMatchResults(tournamentID, matchID, results) {
    results = JSON.parse(results);
    let match = results.matches[matchID];

    ['red', 'blue'].forEach(function(team) {
        fillTeamStats(match[team], `.${team}-team`);
    });

    fillGamesArea(match, tournamentID, matchID);
}

function fillGamesArea(match, tournamentID, matchID) {
    let gamesArea = document.querySelector('.games-area');

    for (let i = 0; i < match.layouts.length; i++) {
    }

    let gamesTable = document.createElement('table');
    gamesTable.innerHTML = `
        <tr>
            <th>Video</th>
            <th>Output</th>
            <th>Replay</th>
            <th>ID</th>
            <th>Layout</th>
            <th>Score</th>
            <th>Total Time</th>
            <th>Red Time</th>
            <th>Blue Time</th>
        </tr>
    `;

    for (let i = 0; i < match.layouts.length; i++) {
        gamesTable.appendChild(createGameRow(match, tournamentID, matchID, i));
    }

    gamesArea.appendChild(gamesTable);
}

function createGameRow(match, tournamentID, matchID, gameID) {
    let gameElement = document.createElement('tr');
    gameElement.classList.add('tournament-game');

    let gifURL = `/p4/tournaments/gif.php?tournament=${tournamentID}&match=${matchID}&game=${gameID}`;

    let values = [
        `<a target='_blank' href='${gifURL}'><img class='game-gif' alt='Game Video' src='${gifURL}'></a>`,
        `<a href='/p4/tournaments/output.php?tournament=${tournamentID}&match=${matchID}&game=${gameID}'>Output</a>`,
        `<a href='/p4/tournaments/replay.php?tournament=${tournamentID}&match=${matchID}&game=${gameID}'>Replay</a>`,
        gameID,
        match.layouts[gameID],
        match.scores[gameID],
        match.times[gameID].toFixed(4),
        match.red.times[gameID].toFixed(4),
        match.blue.times[gameID].toFixed(4),
    ];

    values.forEach(function(value) {
        let element = document.createElement('td');
        element.innerHTML = value;
        gameElement.appendChild(element);
    });

    return gameElement;
}

function fillTeamStats(team, selector) {
    let teamArea = document.querySelector(selector);
    teamArea.innerHTML = teamArea.innerHTML + `
        <p><label>Name:</label><span>${team.name}</span></p>
        <p><label>Wins:</label><span>${team.wins}</span></p>
        <p><label>Ties:</label><span>${team.ties}</span></p>
        <p><label>Losses:</label><span>${team.losses}</span></p>
        <p><label>Crashes:</label><span>${team.crashes}</span></p>
        <p><label>Timeouts:</label><span>${team.timeouts}</span></p>
    `;
}

function displayTournamentResults(tournamentID, results) {
    results = JSON.parse(results);

    fillRecordsArea(results.records);
    fillMatchesArea(results.matches, tournamentID);
}

function fillMatchesArea(matches, tournamentID) {
    let matchesArea = document.querySelector('.matches-area');

    let matchesTable = document.createElement('table');
    matchesTable.innerHTML = `
        <tr>
            <th></th>
            <th>Match ID</th>
            <th>Red</th>
            <th>Blue</th>
            <th>Red Wins</th>
            <th>Blue Wins</th>
            <th>Ties</th>
            <th>Stats DL</th>
            <th>Games DL</th>
        </tr>
    `;

    for (let i = 0; i < matches.length; i++) {
        matchesTable.appendChild(createMatchRow(matches[i], tournamentID, i));
    }

    matchesArea.appendChild(matchesTable);
}

function createMatchRow(match, tournamentID, matchID) {
    let matchElement = document.createElement('tr');
    matchElement.classList.add('tournament-match');

    let values = [
        `<a href='/p4/tournaments/match.php?tournament=${tournamentID}&match=${matchID}'>View Details</a>`,
        matchID,
        match.red.name,
        match.blue.name,
        match.red.wins,
        match.blue.wins,
        match.red.ties,
        `<a href='/p4/tournaments/matchstats.php?tournament=${tournamentID}&match=${matchID}'>Link</a>`,
        `<a href='/p4/tournaments/matcharchive.php?tournament=${tournamentID}&match=${matchID}'>Link</a>`,
    ];

    if (match.red.wins > match.blue.wins) {
        values[2] = `<strong>${values[2]}</strong>`
    } else if (match.red.wins < match.blue.wins) {
        values[3] = `<strong>${values[3]}</strong>`
    }

    values.forEach(function(value) {
        let element = document.createElement('td');
        element.innerHTML = value;
        matchElement.appendChild(element);
    });

    return matchElement;
}

function fillRecordsArea(records) {
    let recordsArea = document.querySelector('.records-area');

    let recordsTable = document.createElement('table');
    recordsTable.innerHTML = `
        <tr>
            <th>Rank</th>
            <th>Team Name</th>
            <th>Wins</th>
            <th>Ties</th>
            <th>Losses</th>
        </tr>
    `;

    for (let i = 0; i < records.length; i++) {
        recordsTable.appendChild(createRecordRow(records[i], i + 1));
    }

    recordsArea.appendChild(recordsTable);
}

function createRecordRow(record, position) {
    let recordElement = document.createElement('tr');
    recordElement.classList.add('tournament-record');

    let rank = document.createElement('td');
    rank.classList.add('rank');
    rank.innerHTML = position;
    recordElement.appendChild(rank);

    let name = document.createElement('td');
    name.classList.add('teamname');
    name.innerHTML = record.name;
    recordElement.appendChild(name);

    ['wins', 'ties', 'losses'].forEach(function(stat) {
        let element = document.createElement('td');
        element.innerHTML = record[stat];
        recordElement.appendChild(element);
    });

    return recordElement;
}
