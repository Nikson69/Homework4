$(document).ready( function() {
	TweenMax.to($('#bg1'), 9, {css:{backgroundPosition: "-314 0px"}, repeat:-1, ease:Linear.easeNone});
	TweenMax.to($('#bg2'), 18, {css:{backgroundPosition: "-269 30px"}, repeat:-1, ease:Linear.easeNone});
	TweenMax.to($('#ufo'), 0.2, {css:{backgroundPosition :"340 0px"}, ease:SteppedEase.config(4), repeat:-1});
});
