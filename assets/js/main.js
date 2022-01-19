let headline = document.getElementById("headline");

let goals = document.getElementById("goals");


headline.classList.add("headline");

goals.classList.add("goals");


function changeHeadline() {
    headline.classList.add("headlineNew");
}

function resetHeadline() {
    headline.classList.remove("headlineNew");
}


let num = document.getElementById("num");
let showResult = document.getElementById("showResult");

// js CodeFlow lev1_1: forms+js_function_double

function double() {
    let result = num.value * 2;
    showResult.innerHTML = result;
}

// js CodeFlow lev1_2 forms+js_function_your_are

let yearOfBirth = document.getElementById("year");
let showAge = document.getElementById("showAge")
let today = 2022;

function yearBirth() {
    let actualAge = today - yearOfBirth.value;
    showAge.innerHTML = actualAge;
}


// js CodeFlow lev1_3 forms+js_compare-age

let age01 = document.getElementById("agePers_01");
let age02 = document.getElementById("agePers_02");
let diff = document.getElementById("diff");

function calc() {
    let diffAge = age01.value - age02.value;
    console.log(age01.value, age02.value);
    diff.innerHTML = diffAge;
}


