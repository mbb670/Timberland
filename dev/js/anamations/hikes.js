// HIKERS
var hikeEase = "power1.inOut";
hikeDelay = 2;
hikeDuration = 2;

// HIKER 1
var hike1SM = gsap.timeline({repeat:-1, repeatDelay:hikeDelay});
gsap.set([".H1SM-hiker-U", ".H1SM-lamp-U", ".H1SM-light-U"], {visibility:"hidden"});
hike1SM
.to(".H1SM-hiker-D", {morphSVG:".H1SM-hiker-U", duration:hikeDuration, ease:hikeEase}, "a")
.to(".H1SM-lamp-D", {morphSVG:".H1SM-lamp-U", duration:hikeDuration, ease:hikeEase}, "a")
.to(".H1SM-light-D", {morphSVG:".H1SM-light-U", duration:hikeDuration, ease:hikeEase}, "a")
.to(".H1SM-hiker-D", {morphSVG:".H1SM-hiker-D", duration:hikeDuration, delay:hikeDelay, ease:hikeEase}, "b")
.to(".H1SM-lamp-D", {morphSVG:".H1SM-lamp-D", duration:hikeDuration, delay:hikeDelay, ease:hikeEase}, "b")
.to(".H1SM-light-D", {morphSVG:".H1SM-light-D", duration:hikeDuration, delay:hikeDelay, ease:hikeEase}, "b")
;

var hike1MD = gsap.timeline({repeat:-1, repeatDelay:hikeDelay});
gsap.set([".H1MD-hiker-U", ".H1MD-lamp-U", ".H1MD-light-U"], {visibility:"hidden"});
hike1MD
.to(".H1MD-hiker-D", {morphSVG:".H1MD-hiker-U", duration:hikeDuration, ease:hikeEase}, "a")
.to(".H1MD-lamp-D", {morphSVG:".H1MD-lamp-U", duration:hikeDuration, ease:hikeEase}, "a")
.to(".H1MD-light-D", {morphSVG:".H1MD-light-U", duration:hikeDuration, ease:hikeEase}, "a")
.to(".H1MD-hiker-D", {morphSVG:".H1MD-hiker-D", duration:hikeDuration, delay:hikeDelay, ease:hikeEase}, "b")
.to(".H1MD-lamp-D", {morphSVG:".H1MD-lamp-D", duration:hikeDuration, delay:hikeDelay, ease:hikeEase}, "b")
.to(".H1MD-light-D", {morphSVG:".H1MD-light-D", duration:hikeDuration, delay:hikeDelay, ease:hikeEase}, "b")
;

var hike1LG = gsap.timeline({repeat:-1, repeatDelay:hikeDelay});
gsap.set([".H1LG-hiker-U", ".H1LG-lamp-U", ".H1LG-light-U"], {visibility:"hidden"});
hike1LG
.to(".H1LG-hiker-D", {morphSVG:".H1LG-hiker-U", duration:hikeDuration, ease:hikeEase}, "a")
.to(".H1LG-lamp-D", {morphSVG:".H1LG-lamp-U", duration:hikeDuration, ease:hikeEase}, "a")
.to(".H1LG-light-D", {morphSVG:".H1LG-light-U", duration:hikeDuration, ease:hikeEase}, "a")
.to(".H1LG-hiker-D", {morphSVG:".H1LG-hiker-D", duration:hikeDuration, delay:hikeDelay, ease:hikeEase}, "b")
.to(".H1LG-lamp-D", {morphSVG:".H1LG-lamp-D", duration:hikeDuration, delay:hikeDelay, ease:hikeEase}, "b")
.to(".H1LG-light-D", {morphSVG:".H1LG-light-D", duration:hikeDuration, delay:hikeDelay, ease:hikeEase}, "b")
;


// HIKER 2
var hike2SM = gsap.timeline({repeat:-1, repeatDelay:hikeDelay});
gsap.set([".H2SM-hiker-M", ".H2SM-lamp-M", ".H2SM-light-M", ".H2SM-hiker-B", ".H2SM-lamp-B", ".H2SM-light-B"], {visibility:"hidden"});
hike2SM
.to(".H2SM-hiker-F", {morphSVG:".H2SM-hiker-M", duration:hikeDuration, ease:hikeEase}, "a")
.to(".H2SM-lamp-F", {morphSVG:".H2SM-lamp-M", duration:hikeDuration, ease:hikeEase}, "a")
.to(".H2SM-light-F", {morphSVG:".H2SM-light-M", duration:hikeDuration, ease:hikeEase}, "a")
.to(".H2SM-hiker-F", {morphSVG:".H2SM-hiker-B", duration:hikeDuration, ease:hikeEase}, "b")
.to(".H2SM-lamp-F", {morphSVG:".H2SM-lamp-B", duration:hikeDuration, ease:hikeEase}, "b")
.to(".H2SM-light-F", {morphSVG:".H2SM-light-B", duration:hikeDuration, ease:hikeEase}, "b")
.to(".H2SM-hiker-F", {morphSVG:".H2SM-hiker-M", duration:hikeDuration, delay:hikeDelay, ease:hikeEase}, "c")
.to(".H2SM-lamp-F", {morphSVG:".H2SM-lamp-M", duration:hikeDuration, delay:hikeDelay, ease:hikeEase}, "c")
.to(".H2SM-light-F", {morphSVG:".H2SM-light-M", duration:hikeDuration, delay:hikeDelay, ease:hikeEase}, "c")
.to(".H2SM-hiker-F", {morphSVG:".H2SM-hiker-F", duration:hikeDuration, ease:hikeEase}, "d")
.to(".H2SM-lamp-F", {morphSVG:".H2SM-lamp-F", duration:hikeDuration, ease:hikeEase}, "d")
.to(".H2SM-light-F", {morphSVG:".H2SM-light-F", duration:hikeDuration, ease:hikeEase}, "d")
;

var hike2MD = gsap.timeline({repeat:-1, repeatDelay:hikeDelay});
gsap.set([".H2MD-hiker-M", ".H2MD-lamp-M", ".H2MD-light-M", ".H2MD-hiker-B", ".H2MD-lamp-B", ".H2MD-light-B"], {visibility:"hidden"});
hike2MD
.to(".H2MD-hiker-F", {morphSVG:".H2MD-hiker-M", duration:hikeDuration, ease:hikeEase}, "a")
.to(".H2MD-lamp-F", {morphSVG:".H2MD-lamp-M", duration:hikeDuration, ease:hikeEase}, "a")
.to(".H2MD-light-F", {morphSVG:".H2MD-light-M", duration:hikeDuration, ease:hikeEase}, "a")
.to(".H2MD-hiker-F", {morphSVG:".H2MD-hiker-B", duration:hikeDuration, ease:hikeEase}, "b")
.to(".H2MD-lamp-F", {morphSVG:".H2MD-lamp-B", duration:hikeDuration, ease:hikeEase}, "b")
.to(".H2MD-light-F", {morphSVG:".H2MD-light-B", duration:hikeDuration, ease:hikeEase}, "b")
.to(".H2MD-hiker-F", {morphSVG:".H2MD-hiker-M", duration:hikeDuration, delay:hikeDelay, ease:hikeEase}, "c")
.to(".H2MD-lamp-F", {morphSVG:".H2MD-lamp-M", duration:hikeDuration, delay:hikeDelay, ease:hikeEase}, "c")
.to(".H2MD-light-F", {morphSVG:".H2MD-light-M", duration:hikeDuration, delay:hikeDelay, ease:hikeEase}, "c")
.to(".H2MD-hiker-F", {morphSVG:".H2MD-hiker-F", duration:hikeDuration, ease:hikeEase}, "d")
.to(".H2MD-lamp-F", {morphSVG:".H2MD-lamp-F", duration:hikeDuration, ease:hikeEase}, "d")
.to(".H2MD-light-F", {morphSVG:".H2MD-light-F", duration:hikeDuration, ease:hikeEase}, "d")
;

var hike2LG = gsap.timeline({repeat:-1, repeatDelay:hikeDelay});
gsap.set([".H2LG-hiker-M", ".H2LG-lamp-M", ".H2LG-light-M", ".H2LG-hiker-B", ".H2LG-lamp-B", ".H2LG-light-B"], {visibility:"hidden"});
hike2LG
.to(".H2LG-hiker-F", {morphSVG:".H2LG-hiker-M", duration:hikeDuration, ease:hikeEase}, "a")
.to(".H2LG-lamp-F", {morphSVG:".H2LG-lamp-M", duration:hikeDuration, ease:hikeEase}, "a")
.to(".H2LG-light-F", {morphSVG:".H2LG-light-M", duration:hikeDuration, ease:hikeEase}, "a")
.to(".H2LG-hiker-F", {morphSVG:".H2LG-hiker-B", duration:hikeDuration, ease:hikeEase}, "b")
.to(".H2LG-lamp-F", {morphSVG:".H2LG-lamp-B", duration:hikeDuration, ease:hikeEase}, "b")
.to(".H2LG-light-F", {morphSVG:".H2LG-light-B", duration:hikeDuration, ease:hikeEase}, "b")
.to(".H2LG-hiker-F", {morphSVG:".H2LG-hiker-M", duration:hikeDuration, delay:hikeDelay, ease:hikeEase}, "c")
.to(".H2LG-lamp-F", {morphSVG:".H2LG-lamp-M", duration:hikeDuration, delay:hikeDelay, ease:hikeEase}, "c")
.to(".H2LG-light-F", {morphSVG:".H2LG-light-M", duration:hikeDuration, delay:hikeDelay, ease:hikeEase}, "c")
.to(".H2LG-hiker-F", {morphSVG:".H2LG-hiker-F", duration:hikeDuration, ease:hikeEase}, "d")
.to(".H2LG-lamp-F", {morphSVG:".H2LG-lamp-F", duration:hikeDuration, ease:hikeEase}, "d")
.to(".H2LG-light-F", {morphSVG:".H2LG-light-F", duration:hikeDuration, ease:hikeEase}, "d")
;


// HIKER 3
var hike3MD = gsap.timeline({repeat:-1, repeatDelay:hikeDelay});
gsap.set([".H3MD-hiker-U", ".H3MD-lamp-U", ".H3MD-light-U"], {visibility:"hidden"});
hike3MD
.to(".H3MD-hiker-D", {morphSVG:".H3MD-hiker-U", duration:hikeDuration, ease:hikeEase}, "a")
.to(".H3MD-lamp-D", {morphSVG:".H3MD-lamp-U", duration:hikeDuration, ease:hikeEase}, "a")
.to(".H3MD-light-D", {morphSVG:".H3MD-light-U", duration:hikeDuration, ease:hikeEase}, "a")
.to(".H3MD-hiker-D", {morphSVG:".H3MD-hiker-D", duration:hikeDuration, delay:hikeDelay, ease:hikeEase}, "b")
.to(".H3MD-lamp-D", {morphSVG:".H3MD-lamp-D", duration:hikeDuration, delay:hikeDelay, ease:hikeEase}, "b")
.to(".H3MD-light-D", {morphSVG:".H3MD-light-D", duration:hikeDuration, delay:hikeDelay, ease:hikeEase}, "b")
;

var hike3LG = gsap.timeline({repeat:-1, repeatDelay:hikeDelay});
gsap.set([".H3LG-hiker-U", ".H3LG-lamp-U", ".H3LG-light-U"], {visibility:"hidden"});
hike3LG
.to(".H3LG-hiker-D", {morphSVG:".H3LG-hiker-U", duration:hikeDuration, ease:hikeEase}, "a")
.to(".H3LG-lamp-D", {morphSVG:".H3LG-lamp-U", duration:hikeDuration, ease:hikeEase}, "a")
.to(".H3LG-light-D", {morphSVG:".H3LG-light-U", duration:hikeDuration, ease:hikeEase}, "a")
.to(".H3LG-hiker-D", {morphSVG:".H3LG-hiker-D", duration:hikeDuration, delay:hikeDelay, ease:hikeEase}, "b")
.to(".H3LG-lamp-D", {morphSVG:".H3LG-lamp-D", duration:hikeDuration, delay:hikeDelay, ease:hikeEase}, "b")
.to(".H3LG-light-D", {morphSVG:".H3LG-light-D", duration:hikeDuration, delay:hikeDelay, ease:hikeEase}, "b")
;
