// PLANT
var leavesArray = [".path_25", ".path_26", ".path_27", ".path_28", ".path_29", ".path_30", ".path_31", ".path_32", ".path_33", ".path_34", ".path_35", ".path_36", ".path_37", ".path_38", ".path_39", ".path_40", ".path_41", ".path_42", ".path_43", ".path_44", ".path_45", ".path_46", ".path_47", ".path_48", ".path_49", ".path_50", ".path_51", ".path_52"];
var leaves1 = [".path_38", ".path_39", ".path_40", ".path_41", ".path_42"];
var leaves2 = [".path_27", ".path_28", ".path_29", ".path_30", ".path_31", ".path_32"];
var leaves3 = [".path_47", ".path_48", ".path_49", ".path_50", ".path_51", ".path_52"];
var leaves4 = [".path_25", ".path_26", ".path_33", ".path_34", ".path_35", ".path_36", ".path_37"];
var leaves5 = [".path_43", ".path_44", ".path_45", ".path_46"];

gsap.set(leavesArray, {alpha:0});

plantTl = gsap.timeline({repeat:-1, repeatDelay:3});

plantTl
.fromTo(".path_19", {drawSVG:"0%"}, {drawSVG:"100%", duration:5, onStart:leavesReset, onComplete:leavesGroup5})
.fromTo(".path_24", {drawSVG:"100% 100%"}, {drawSVG:"100% 0%", duration:2}, "-=5")
.fromTo(".path_20", {drawSVG:"100% 100%"}, {drawSVG:"100% 0%", duration:2, onStart:leavesGroup2}, "-=3.3")
.fromTo(".path_21", {drawSVG:"100% 100%"}, {drawSVG:"100% 0%", duration:1, onComplete:leavesGroup1}, "-=3")
.fromTo(".path_22", {drawSVG:"100% 100%"}, {drawSVG:"100% 0%", duration:2, onComplete:leavesGroup3}, "-=2.8")
.fromTo(".path_23", {drawSVG:"100% 100%"}, {drawSVG:"100% 0%", duration:2, onComplete:leavesGroup4}, "-=2")
.to(leaves1, {alpha:1, duration:5})
.to(leaves1, {y:150, x:50, alpha:0, duration:8, delay:4, stagger:.2}, "a")
.to(leaves2, {y:180, x:30, alpha:0, duration:7, delay:3, stagger:.3}, "a")
.to(leaves3, {y:100, x:70, alpha:0, duration:4, delay:1, stagger:.1}, "a")
.to(leaves4, {y:190, x:-10, alpha:0, duration:5, delay:.8, stagger:.3}, "a")
.to(leaves5, {y:200, x:90, alpha:0, duration:9, delay:.2, stagger:.4}, "a")
.to(".path_23", {drawSVG:"100% 100%", duration:1})
.to(".path_22", {drawSVG:"100% 100%", duration:1}, "-=.7")
.to(".path_21", {drawSVG:"100% 100%", duration:1}, "-=.7")
.to(".path_20", {drawSVG:"100% 100%", duration:1}, "-=.7")
.to(".path_24", {drawSVG:"100% 100%", duration:1}, "-=.7")
.to(".path_19", {drawSVG:"0%", duration:1}, "-=.7")

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
  gsap.set(leavesArray, {alpha:0, x:0, y:0})
}
