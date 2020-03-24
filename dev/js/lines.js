// LINES

var randDuration = gsap.utils.random([3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],true);
var randDest = gsap.utils.random([
    "0% 0%",
    "0% 10%",
    "10% 20%",
    "20% 30%",
    "30% 40%",
    "40% 50%",
    "50% 60%",
    "60% 70%",
    "70% 80%",
    "80% 90%",
    "90% 100%",
    "100% 100%",
    "10% 30%",
    "30% 50%",
    "50% 80%",
    "80% 100%",
    "25% 45%",
    "35% 55%",
    "85% 100%",
    "40% 90%",
    "30% 60%"
],true);
var allLines = [".g1", ".g2", ".g3", ".g4", ".g5", ".g6", ".g7", ".g8", ".g9", ".g10", ".g11", ".g12", ".g13", ".g14"];
var linesEase = "back.inOut(1.5)";



gsap.set(allLines, {drawSVG:"0% 0%"})

var group1 = [".g1", ".g8"];
var group2 = [".g2", ".g9"];
var group3 = [".g3", ".g10"];
var group4 = [".g4", ".g11"];
var group5 = [".g5", ".g12"];
var group6 = [".g6", ".g13"];
var group7 = [".g7", ".g14"];


var g1 = gsap.timeline({repeat:-1});
var g2 = gsap.timeline({repeat:-1});
var g3 = gsap.timeline({repeat:-1});
var g4 = gsap.timeline({repeat:-1});
var g5 = gsap.timeline({repeat:-1});
var g6 = gsap.timeline({repeat:-1});
var g7 = gsap.timeline({repeat:-1});

g1
.to(group1, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group1, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group1, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group1, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group1, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group1, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group1, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group1, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group1, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group1, {drawSVG:randDest, duration:randDuration, ease:linesEase})
;

g2
.to(group2, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group2, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group2, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group2, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group2, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group2, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group2, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group2, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group2, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group2, {drawSVG:randDest, duration:randDuration, ease:linesEase})
;

g3
.to(group3, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group3, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group3, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group3, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group3, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group3, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group3, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group3, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group3, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group3, {drawSVG:randDest, duration:randDuration, ease:linesEase})
;

g4
.to(group4, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group4, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group4, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group4, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group4, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group4, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group4, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group4, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group4, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group4, {drawSVG:randDest, duration:randDuration, ease:linesEase})
;

g5
.to(group5, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group5, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group5, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group5, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group5, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group5, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group5, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group5, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group5, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group5, {drawSVG:randDest, duration:randDuration, ease:linesEase})
;

g6
.to(group6, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group6, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group6, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group6, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group6, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group6, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group6, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group6, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group6, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group6, {drawSVG:randDest, duration:randDuration, ease:linesEase})
;

g7
.to(group7, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group7, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group7, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group7, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group7, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group7, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group7, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group7, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group7, {drawSVG:randDest, duration:randDuration, ease:linesEase})
.to(group7, {drawSVG:randDest, duration:randDuration, ease:linesEase})
;
