(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function start() {

	TweenLite.to('.bg_arc', 2, { opacity: 1, ease: Power2.easeOut, delay: 1.5 });

	var tl = new TimelineMax();
	tl.set('.frame1', { opacity: 1 });

	tl.add("cans", "+=.5");
	tl.from('.can_sf.whole', .4, { x: -300, ease: Power3.easeOut }, "cans");
	tl.from('.can_ed.whole', .5, { x: 650, ease: Power3.easeOut }, "cans+=.3");

	tl.add("txt");
	tl.from('.t1_a', .8, { opacity: 0, x: -200, ease: Power3.easeOut }, "txt");
	tl.from('.t1_b', .8, { opacity: 0, x: 300, ease: Power3.easeOut }, "txt");
	tl.from('.t1_c', .8, { opacity: 0, x: -200, ease: Power3.easeOut }, "txt");
	tl.from('.cta', .4, { opacity: 0, y: "+=20", ease: Back.easeOut }, "+=.1");

	// tl.from('.can_ed.half',.1, {opacity:0})

	tl.add("arcs", 2);
	tl.add(arc_sf('.arc_sf'), "arcs");
	tl.add(arc('.arc_ed'), "arcs");
}

function arc(dom) {

	var tl = new TimelineMax();
	tl.from(dom, .1, { opacity: 0 });
	tl.to(dom, 1.4, { rotation: "+=460", scale: .5, ease: Power4.easeOut });

	return tl;
}

function arc_sf(dom) {

	var tl = new TimelineMax();
	tl.from(dom, .1, { opacity: 0 });
	tl.to(dom, 1, { rotation: "+=360", repeat: 0, ease: Power4.easeOut });

	return tl;
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
