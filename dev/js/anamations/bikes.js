// BIKES
gsap.to(".wheel", {
    duration: 2,
    rotate: 360,
    transformOrigin: "center",
    repeat: -1,
    ease: "linear"
});

var bikesDuration = gsap.utils.random([6, 7, 8, 9, 10, 11, 12, 13, 14, 15], true);
var bikesEase = "sine.inOut";


gsap.to(".back-bikeSM", {
    motionPath: {
        path: "#Follow-2",
        align: "#Follow-2",
        alignOrigin: [.93, .93],
        autoRotate: 10,
        start: 0,
        end: 1
    },

    duration: bikesDuration,
    repeat: -1,
    ease: bikesEase
});

gsap.to(".front-bikeSM", {
    motionPath: {
        path: "#Follow-2",
        align: "#Follow-2",
        alignOrigin: [.93, .93],
        autoRotate: 10,
        start: 0,
        end: .9
    },

    duration: bikesDuration,
    repeat: -1,
    ease: bikesEase
});


gsap.to(".back-bikeMD", {
    motionPath: {
        path: "#Follow-1",
        align: "#Follow-1",
        alignOrigin: [.8, .8],
        autoRotate: 20,
        start: 1,
        end: 0
    },

    duration: bikesDuration,
    repeat: -1,
    ease: bikesEase
});

gsap.to(".front-bikeMD", {
    motionPath: {
        path: "#Follow-1",
        align: "#Follow-1",
        alignOrigin: [.8, .8],
        autoRotate: 20,
        start: .75,
        end: .15
    },

    duration: bikesDuration,
    repeat: -1,
    ease: bikesEase
});

gsap.to(".back-bikeLG", {
    motionPath: {
        path: "#Follow-1",
        align: "#Follow-1",
        alignOrigin: [.75, .75],
        autoRotate: 30,
        start: 1,
        end: 0
    },

    duration: bikesDuration,
    repeat: -1,
    ease: bikesEase
});

gsap.to(".front-bikeLG", {
    motionPath: {
        path: "#Follow-1",
        align: "#Follow-1",
        alignOrigin: [.75, .75],
        autoRotate: 30,
        start: .75,
        end: .15
    },

    duration: bikesDuration,
    repeat: -1,
    ease: bikesEase
});
