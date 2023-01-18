'use-strict'
const Team = require('./team.js');
let team = [

    new team(`University of Iowa`, 'Herky', 116),
    new team(`University of Mississippi State`, 'Bully the Bulldog', 98),
    new team(`University of Michigan`, 'Biff the Wolverine', 125),
    new team(`Texas Christian School`, 'Super Frog', 109),
    new team(`University of Alabama`, 'Big al', 115),
]

function getTeams() {
    return team;
};

module.export = getTeams;

function getTeam(name) {
    return team.find(name);

};

module.export = getTeam;

function displayTeam(team) {
    return (`Name: ${team.name} \n
    Mascot: ${team.mascot} \n
    Player Count: ${team.playerCount}`)
};

module.export = displayTeam;