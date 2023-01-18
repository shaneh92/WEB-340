/*
==============================================================================
; Title: team.js
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
//created a class
class Team {
    constructor(name, mascot, playerCount) {
        this.name = name;
        this.mascot = mascot;
        this.playerCount = playerCount;
    }
};

module.exports = Team;//exporting class