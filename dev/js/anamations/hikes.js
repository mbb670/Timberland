// HIKERS
var hikeEase = "none";

hiketest = gsap.timeline({repeat:-1, yoyo:true});
gsap.set([".hiker2-u", ".hiker2-d", ".light-u", ".light-d", ".lamp-u", ".lamp-d"], {display:"none"});

hiketest
.to(".hiker2-m", {duration:1, morphSVG:".hiker2-u", ease:hikeEase}, "a")
.to(".light-m", {duration:1, morphSVG:".light-u", ease:hikeEase}, "a")
.to(".lamp-m", {duration:1, morphSVG:".lamp-u", ease:hikeEase}, "a")
.to(".hiker2-m", {duration:2, morphSVG:".hiker2-d", ease:hikeEase}, "b")
.to(".light-m", {duration:2, morphSVG:".light-d", ease:hikeEase}, "b")
.to(".lamp-m", {duration:2, morphSVG:".lamp-d", ease:hikeEase}, "b")
;

hiketest2 = gsap.timeline({repeat:-1});
gsap.set([".hiker1-u", ".hiker1-d", ".light-u-2", ".light-d-2", ".lamp-u-2", ".lamp-d-2"], {display:"none"});

hiketest2
.to(".hiker1-m", {duration:1, morphSVG:".hiker1-u", ease:hikeEase}, "a")
.to(".light-m-2", {duration:1, morphSVG:".light-u-2", ease:hikeEase}, "a")
.to(".lamp-m-2", {duration:1, morphSVG:".lamp-u-2", ease:hikeEase}, "a")
.to(".hiker1-m", {duration:1, morphSVG:".hiker1-m", ease:hikeEase}, "b")
.to(".light-m-2", {duration:1, morphSVG:".light-m-2", ease:hikeEase}, "b")
.to(".lamp-m-2", {duration:1, morphSVG:".lamp-m-2", ease:hikeEase}, "b")
.to(".hiker1-m", {duration:1, morphSVG:".hiker1-d", ease:hikeEase}, "c")
.to(".light-m-2", {duration:1, morphSVG:".light-d-2", ease:hikeEase}, "c")
.to(".lamp-m-2", {duration:1, morphSVG:".lamp-d-2", ease:hikeEase}, "c")
.to(".hiker1-m", {duration:1, morphSVG:".hiker1-m", ease:hikeEase}, "d")
.to(".light-m-2", {duration:1, morphSVG:".light-m-2", ease:hikeEase}, "d")
.to(".lamp-m-2", {duration:1, morphSVG:".lamp-m-2", ease:hikeEase}, "d")
;
