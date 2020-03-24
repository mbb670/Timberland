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

var kiteDuration = 1;
var kiteEase = "none";

gsap.set([
    ".top-2",
    ".top-3",
    ".top-4",
    ".top-5",
    ".top-7",
    ".top-8",
    ".top-9",
    ".top-10",
    ".top-11",
    ".top-13",
    ".top-14",
    ".top-15",
    ".top-16",
    ".top-18",
    ".top-19",
    ".top-20",
    ".top-21",
    ".top-22",
    ".top-24",
    ".top-25",
    ".top-26",
    ".top-27",
    ".top-29",
    ".top-30",
    ".top-31",
    ".top-32",
    ".top-33",

    ".string-2",
    ".string-3",
    ".string-4",
    ".string-5",
    ".string-7",
    ".string-8",
    ".string-9",
    ".string-10",
    ".string-11",
    ".string-13",
    ".string-14",
    ".string-15",
    ".string-16",
    ".string-18",
    ".string-19",
    ".string-20",
    ".string-21",
    ".string-22",
    ".string-24",
    ".string-25",
    ".string-26",
    ".string-27",
    ".string-29",
    ".string-30",
    ".string-31",
    ".string-32",
    ".string-33"
], {display:"none"});



kiteSM1
.to(".top-1", {duration: kiteDuration, morphSVG:".top-2", ease:kiteEase})
.to(".top-1", {duration: kiteDuration, morphSVG:".top-3", ease:kiteEase})
.to(".top-1", {duration: kiteDuration, morphSVG:".top-4", ease:kiteEase})
.to(".top-1", {duration: kiteDuration, morphSVG:".top-5", ease:kiteEase})
.to(".top-1", {duration: kiteDuration, morphSVG:".top-1", ease:kiteEase})
;
//
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
