/*
==============================================================================
; Title: team-manager.js
; Author: Professor Krasso
; Modified by: Shane Hingtgen
; Bellevue University
; Date: 01/17/23
; Description: Practice using CLI to display a message of teams
; Work Cited: 
    Web 330 HTML, CSS, and JavaScript Requirements
    Web340_Assign3
    Web340_Week3 PowerPoint
    Course GitHub https://github.com/buwebdev/web-340/tree/master/week-3
=================================================================================================================
*/
'use-strict'
const Team = require('./team.js'); //importing the class
let teams = [
    //objects of the array 
    new Team('University of Iowa', 'Herky', 116),
    new Team('Mississippi State University', 'Bully the Bulldog', 98),
    new Team('University of Michigan', 'Biff the Wolverine', 125),
    new Team('Texas Christian University', 'Super Frog', 109),
    new Team('University of Alabama', 'Big Al', 115),
]

//function for returning the entire team array of objects
function getTeams() {
    return teams;
};

//.find() builtin, allows to get a single team based on the name
function getTeam(name) {
    for (let team of teams) {
        if(team.name === name) {
            return team;
        }
    }
};

//displays the single team
function displayTeam(Team) {
    return ('   Name: ' + Team.name + '\n   Mascot: ' + Team.mascot + '\n   Player Count: ' + Team.playerCount + '\n');
};

module.exports = { getTeams, getTeam, displayTeam};//exporting functions