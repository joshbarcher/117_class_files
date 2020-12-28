/*
    This script calculates the time elapsed since
    the UNIX epoch.
    Author: Josh Archer
    Date: 3/24/2020
    File: time.js
 */

"use strict"

const MILLIS_TO_SECONDS = 1000;
const SECONDS_TO_MINUTES = 60;
const MINUTES_TO_HOURS = 60;
const HOURS_TO_DAYS = 24;
const DAYS_TO_YEARS = 365;

let millis = new Date().getTime();
let seconds = millis / MILLIS_TO_SECONDS;
let minutes = seconds / SECONDS_TO_MINUTES;
let hours = minutes / MINUTES_TO_HOURS;
let days = hours / HOURS_TO_DAYS;
let years = days / DAYS_TO_YEARS; //fudge a bit here...

//round our numbers
millis = Math.round(millis);
seconds = Math.round(seconds);
minutes = Math.round(minutes);
hours = Math.round(hours);
days = Math.round(days);
years = Math.round(years);

//display them
var element = document.querySelector("div#millis span");
element.innerHTML = millis;
element = document.querySelector("div#seconds span");
element.innerHTML = seconds;
element = document.querySelector("div#minutes span");
element.innerHTML = minutes;
element = document.querySelector("div#hours span");
element.innerHTML = hours;
element = document.querySelector("div#days span");
element.innerHTML = days;
element = document.querySelector("div#years span");
element.innerHTML = years;

