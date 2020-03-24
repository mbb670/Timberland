// @codekit-append "rellax.js";
// @codekit-append "lines.js";
// @codekit-append "anamations/plants.js";
// @codekit-append "anamations/bikes.js";
// @codekit-append "anamations/kites.js";
// @codekit-append "anamations/hikes.js";

$( document ).ready(function() {
    // console.log( "ready!" );
    gsap.registerPlugin(MorphSVGPlugin, CSSRulePlugin, DrawSVGPlugin, CustomEase);
});
