/*
==============================================================================
; Title: index.js
; Author: Professor Krasso
; Modified by: Shane Hingtgen
; Bellevue University
; Date: 01/17/23
; Description: This is the index.js file our sports teams, team.js and team-manager.js
; Work Cited: 
    Web 330 HTML, CSS, and JavaScript Requirements
    Web340_Assign3
    Web340_Week2 PowerPoint
=================================================================================================================
*/
'use-strict'
const TeamManager = require('./team-manager.js')

let teams = TeamManager.getTeams();

console.log(`-- DISPLAYING TEAMS --`);
for (let team of teams) {
    console.log(TeamManager.displayTeams(team));
}

const iowa = TeamManager.getTeam('University of Iowa');

const miss = TeamManager.getTeam('University of Mississippi');



