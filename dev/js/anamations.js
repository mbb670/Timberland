// PLANT
var leavesArray = [".path_25", ".path_26", ".path_27", ".path_28", ".path_29", ".path_30", ".path_31", ".path_32", ".path_33", ".path_34", ".path_35", ".path_36", ".path_37", ".path_38", ".path_39", ".path_40", ".path_41", ".path_42", ".path_43", ".path_44", ".path_45", ".path_46", ".path_47", ".path_48", ".path_49", ".path_50", ".path_51", ".path_52"];
var leaves1 = [".path_38", ".path_39", ".path_40", ".path_41", ".path_42"];
var leaves2 = [".path_27", ".path_28", ".path_29", ".path_30", ".path_31", ".path_32"];
var leaves3 = [".path_47", ".path_48", ".path_49", ".path_50", ".path_51", ".path_52"];
var leaves4 = [".path_25", ".path_26", ".path_33", ".path_34", ".path_35", ".path_36", ".path_37"];
var leaves5 = [".path_43", ".path_44", ".path_45", ".path_46"];

gsap.set(leavesArray, {alpha:0});

plantTl = gsap.timeline({repeat:-1, repeatDelay:4});

plantTl
.fromTo(".path_19", {drawSVG:"0%"}, {drawSVG:"100%", duration:5, onStart:leavesReset, onComplete:leavesGroup5})
.fromTo(".path_24", {drawSVG:"100% 100%"}, {drawSVG:"100% 0%", duration:2}, "-=5")
.fromTo(".path_20", {drawSVG:"100% 100%"}, {drawSVG:"100% 0%", duration:2, onStart:leavesGroup2}, "-=3.3")
.fromTo(".path_21", {drawSVG:"100% 100%"}, {drawSVG:"100% 0%", duration:1, onComplete:leavesGroup1}, "-=3")
.fromTo(".path_22", {drawSVG:"100% 100%"}, {drawSVG:"100% 0%", duration:2, onComplete:leavesGroup3}, "-=2.8")
.fromTo(".path_23", {drawSVG:"100% 100%"}, {drawSVG:"100% 0%", duration:2, onComplete:leavesGroup4}, "-=2")
;

function leavesGroup1(){
  gsap.to(leaves1, {alpha:1, stagger:.08})
}

function leavesGroup2(){
  gsap.to(leaves2, {alpha:1, stagger:.08})
}

function leavesGroup3(){
  gsap.to(leaves3, {alpha:1, stagger:.08})
}

function leavesGroup4(){
  gsap.to(leaves4, {alpha:1, stagger:.08})
}

function leavesGroup5(){
  gsap.to(leaves5, {alpha:1, stagger:.08})
}

function leavesReset(){
  gsap.set(leavesArray, {alpha:0})
}


// BIKES
gsap.to(".wheel", {duration:2, rotate:360, transformOrigin:"center", repeat:-1, ease:"linear"});


// KITES

kiteSM1 = gsap.timeline({repeat:-1});
stringSM1 = gsap.timeline({repeat:-1});
kiteSM2 = gsap.timeline({repeat:-1});
stringSM2 = gsap.timeline({repeat:-1});

kiteMD1 = gsap.timeline({repeat:-1});
stringMD1 = gsap.timeline({repeat:-1});
kiteMD2 = gsap.timeline({repeat:-1});
stringMD2 = gsap.timeline({repeat:-1});

kiteXL1 = gsap.timeline({repeat:-1});
stringXL1 = gsap.timeline({repeat:-1});
kiteXL2 = gsap.timeline({repeat:-1});
stringXL2 = gsap.timeline({repeat:-1});

var kiteDuration = .8;
var kiteEase = "none";

gsap.set([
    // ".top-1",
    ".top-2",
    ".top-3",
    ".top-4",
    ".top-5",
    // ".top-6",
    ".top-7",
    ".top-8",
    ".top-9",
    ".top-10",
    ".top-11",
    // ".top-12",
    ".top-13",
    ".top-14",
    ".top-15",
    ".top-16",
    // ".top-17",
    ".top-18",
    ".top-19",
    ".top-20",
    ".top-21",
    ".top-22",
    // ".top-23",
    ".top-24",
    ".top-25",
    ".top-26",
    ".top-27",
    // ".top-28",
    ".top-29",
    ".top-30",
    ".top-31",
    ".top-32",
    ".top-33",


    // ".string-1",
    ".string-2",
    ".string-3",
    ".string-4",
    ".string-5",
    // ".string-6",
    ".string-7",
    ".string-8",
    ".string-9",
    ".string-10",
    ".string-11",
    // ".string-12",
    ".string-13",
    ".string-14",
    ".string-15",
    ".string-16",
    // ".string-17",
    ".string-18",
    ".string-19",
    ".string-20",
    ".string-21",
    ".string-22",
    // ".string-23",
    ".string-24",
    ".string-25",
    ".string-26",
    ".string-27",
    // ".string-28",
    ".string-29",
    ".string-30",
    ".string-31",
    ".string-32",
    ".string-33"
], {visibility:"hidden"});



kiteSM1
.to(".top-1", {duration: kiteDuration, morphSVG:".top-2", ease:kiteEase})
.to(".top-1", {duration: kiteDuration, morphSVG:".top-3", ease:kiteEase})
.to(".top-1", {duration: kiteDuration, morphSVG:".top-4", ease:kiteEase})
.to(".top-1", {duration: kiteDuration, morphSVG:".top-5", ease:kiteEase})
.to(".top-1", {duration: kiteDuration, morphSVG:".top-1", ease:kiteEase})
;

stringSM1
.to(".string-1", {duration: kiteDuration, morphSVG:".string-2", ease:kiteEase})
.to(".string-1", {duration: kiteDuration, morphSVG:".string-3", ease:kiteEase})
.to(".string-1", {duration: kiteDuration, morphSVG:".string-4", ease:kiteEase})
.to(".string-1", {duration: kiteDuration, morphSVG:".string-5", ease:kiteEase})
.to(".string-1", {duration: kiteDuration, morphSVG:".string-1", ease:kiteEase})
;

kiteSM2
.to(".top-6", {duration: kiteDuration, morphSVG:".top-7", ease:kiteEase})
.to(".top-6", {duration: kiteDuration, morphSVG:".top-8", ease:kiteEase})
.to(".top-6", {duration: kiteDuration, morphSVG:".top-9", ease:kiteEase})
.to(".top-6", {duration: kiteDuration, morphSVG:".top-10", ease:kiteEase})
.to(".top-6", {duration: kiteDuration, morphSVG:".top-11", ease:kiteEase})
.to(".top-6", {duration: kiteDuration, morphSVG:".top-6", ease:kiteEase})
;

stringSM2
.to(".string-6", {duration: kiteDuration, morphSVG:".string-7", ease:kiteEase})
.to(".string-6", {duration: kiteDuration, morphSVG:".string-8", ease:kiteEase})
.to(".string-6", {duration: kiteDuration, morphSVG:".string-9", ease:kiteEase})
.to(".string-6", {duration: kiteDuration, morphSVG:".string-10", ease:kiteEase})
.to(".string-6", {duration: kiteDuration, morphSVG:".string-11", ease:kiteEase})
.to(".string-6", {duration: kiteDuration, morphSVG:".string-6", ease:kiteEase})
;








kiteMD1
.to(".top-12", {duration: kiteDuration, morphSVG:".top-13", ease:kiteEase})
.to(".top-12", {duration: kiteDuration, morphSVG:".top-14", ease:kiteEase})
.to(".top-12", {duration: kiteDuration, morphSVG:".top-15", ease:kiteEase})
.to(".top-12", {duration: kiteDuration, morphSVG:".top-16", ease:kiteEase})
.to(".top-12", {duration: kiteDuration, morphSVG:".top-12", ease:kiteEase})
;

stringMD1
.to(".string-12", {duration: kiteDuration, morphSVG:".string-13", ease:kiteEase})
.to(".string-12", {duration: kiteDuration, morphSVG:".string-14", ease:kiteEase})
.to(".string-12", {duration: kiteDuration, morphSVG:".string-15", ease:kiteEase})
.to(".string-12", {duration: kiteDuration, morphSVG:".string-16", ease:kiteEase})
.to(".string-12", {duration: kiteDuration, morphSVG:".string-12", ease:kiteEase})
;

kiteMD2
.to(".top-17", {duration: kiteDuration, morphSVG:".top-18", ease:kiteEase})
.to(".top-17", {duration: kiteDuration, morphSVG:".top-19", ease:kiteEase})
.to(".top-17", {duration: kiteDuration, morphSVG:".top-20", ease:kiteEase})
.to(".top-17", {duration: kiteDuration, morphSVG:".top-21", ease:kiteEase})
.to(".top-17", {duration: kiteDuration, morphSVG:".top-22", ease:kiteEase})
.to(".top-17", {duration: kiteDuration, morphSVG:".top-17", ease:kiteEase})
;

stringMD2
.to(".string-17", {duration: kiteDuration, morphSVG:".string-18", ease:kiteEase})
.to(".string-17", {duration: kiteDuration, morphSVG:".string-19", ease:kiteEase})
.to(".string-17", {duration: kiteDuration, morphSVG:".string-20", ease:kiteEase})
.to(".string-17", {duration: kiteDuration, morphSVG:".string-21", ease:kiteEase})
.to(".string-17", {duration: kiteDuration, morphSVG:".string-22", ease:kiteEase})
.to(".string-17", {duration: kiteDuration, morphSVG:".string-17", ease:kiteEase})
;










kiteXL1
.to(".top-23", {duration: kiteDuration, morphSVG:".top-24", ease:kiteEase})
.to(".top-23", {duration: kiteDuration, morphSVG:".top-25", ease:kiteEase})
.to(".top-23", {duration: kiteDuration, morphSVG:".top-26", ease:kiteEase})
.to(".top-23", {duration: kiteDuration, morphSVG:".top-27", ease:kiteEase})
.to(".top-23", {duration: kiteDuration, morphSVG:".top-23", ease:kiteEase})
;

stringXL1
.to(".string-23", {duration: kiteDuration, morphSVG:".string-24", ease:kiteEase})
.to(".string-23", {duration: kiteDuration, morphSVG:".string-25", ease:kiteEase})
.to(".string-23", {duration: kiteDuration, morphSVG:".string-26", ease:kiteEase})
.to(".string-23", {duration: kiteDuration, morphSVG:".string-27", ease:kiteEase})
.to(".string-23", {duration: kiteDuration, morphSVG:".string-23", ease:kiteEase})
;

kiteXL2
.to(".top-28", {duration: kiteDuration, morphSVG:".top-29", ease:kiteEase})
.to(".top-28", {duration: kiteDuration, morphSVG:".top-30", ease:kiteEase})
.to(".top-28", {duration: kiteDuration, morphSVG:".top-31", ease:kiteEase})
.to(".top-28", {duration: kiteDuration, morphSVG:".top-32", ease:kiteEase})
.to(".top-28", {duration: kiteDuration, morphSVG:".top-33", ease:kiteEase})
.to(".top-28", {duration: kiteDuration, morphSVG:".top-28", ease:kiteEase})
;

stringXL2
.to(".string-28", {duration: kiteDuration, morphSVG:".string-29", ease:kiteEase})
.to(".string-28", {duration: kiteDuration, morphSVG:".string-30", ease:kiteEase})
.to(".string-28", {duration: kiteDuration, morphSVG:".string-31", ease:kiteEase})
.to(".string-28", {duration: kiteDuration, morphSVG:".string-32", ease:kiteEase})
.to(".string-28", {duration: kiteDuration, morphSVG:".string-33", ease:kiteEase})
.to(".string-28", {duration: kiteDuration, morphSVG:".string-28", ease:kiteEase})
;
