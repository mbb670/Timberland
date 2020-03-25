// LINES

var randDuration = gsap.utils.random([7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],true);
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

gsap.to(".g1", {drawSVG:randDest, duration:randDuration, ease:linesEase, repeat:-1, repeatRefresh:true});
gsap.to(".g2", {drawSVG:randDest, duration:randDuration, ease:linesEase, repeat:-1, repeatRefresh:true});
gsap.to(".g3", {drawSVG:randDest, duration:randDuration, ease:linesEase, repeat:-1, repeatRefresh:true});
gsap.to(".g4", {drawSVG:randDest, duration:randDuration, ease:linesEase, repeat:-1, repeatRefresh:true});
gsap.to(".g5", {drawSVG:randDest, duration:randDuration, ease:linesEase, repeat:-1, repeatRefresh:true});
gsap.to(".g6", {drawSVG:randDest, duration:randDuration, ease:linesEase, repeat:-1, repeatRefresh:true});
gsap.to(".g7", {drawSVG:randDest, duration:randDuration, ease:linesEase, repeat:-1, repeatRefresh:true});
gsap.to(".g8", {drawSVG:randDest, duration:randDuration, ease:linesEase, repeat:-1, repeatRefresh:true});
gsap.to(".g9", {drawSVG:randDest, duration:randDuration, ease:linesEase, repeat:-1, repeatRefresh:true});
gsap.to(".g10", {drawSVG:randDest, duration:randDuration, ease:linesEase, repeat:-1, repeatRefresh:true});
gsap.to(".g11", {drawSVG:randDest, duration:randDuration, ease:linesEase, repeat:-1, repeatRefresh:true});
gsap.to(".g12", {drawSVG:randDest, duration:randDuration, ease:linesEase, repeat:-1, repeatRefresh:true});
gsap.to(".g13", {drawSVG:randDest, duration:randDuration, ease:linesEase, repeat:-1, repeatRefresh:true});
gsap.to(".g14", {drawSVG:randDest, duration:randDuration, ease:linesEase, repeat:-1, repeatRefresh:true});
