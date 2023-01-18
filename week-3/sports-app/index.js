/*
==============================================================================
; Title: index.js
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
const TeamManager = require('./team-manager')//importing all the functions

let teams = TeamManager.getTeams();//getting all the teams

//allows for all teams to be displayed
console.log(`   -- DISPLAYING TEAMS --`);
for (let team of teams) {
    console.log(TeamManager.displayTeam(team));
}

//Two single teams selected to be logged
const iowa = TeamManager.getTeam('University of Iowa');
const miss = TeamManager.getTeam('Mississippi State University');


//Both teams logged
console.log(`   -- DISPLAYING A SINGLE TEAM --`);
console.log(TeamManager.displayTeam(iowa));


console.log(`   -- DISPLAYING A SINGLE TEAM --`);
console.log(TeamManager.displayTeam(miss));