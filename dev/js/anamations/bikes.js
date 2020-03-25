// BIKES
gsap.to(".wheel", {duration:2, rotate:360, transformOrigin:"center", repeat:-1, ease:"linear"});

gsap.to(".back-bike", {motionPath:{
path: "#Follow-1",
  align: "#Follow-1",
  alignOrigin: [.8, .8],
  autoRotate: 20,
  start: 1,
  end: 0},

 duration:10,
repeat:-1});

gsap.to(".front-bike", {motionPath:{
path: "#Follow-1",
  align: "#Follow-1",
  alignOrigin: [.8, .8],
  autoRotate: 20,
  start: .75,
  end: .25},

 duration:10,
repeat:-1});
