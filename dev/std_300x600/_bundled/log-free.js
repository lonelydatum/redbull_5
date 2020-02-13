(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function start() {
	var tl = new TimelineMax();

	tl.add("cans");

	tl.from('.can_ed.whole', .5, { x: 300, ease: Power2.easeOut }, "cans");
	tl.from('.can_sf.whole', .5, { x: -300, ease: Power2.easeOut }, "cans");

	tl.from('.t1_b', .8, { opacity: 0, x: 300, ease: Power2.easeOut }, "cans");
	tl.from('.t1_a', .8, { opacity: 0, x: -300, ease: Power2.easeOut }, "cans");

	TweenLite.from('.bg', 1, { opacity: 0, ease: Power2.easeOut, delay: 1 });

	tl.from('.can_ed.half', .1, { opacity: 0 });

	tl.add("arcs");
	tl.add(arc('.arc_ed'), "arcs");
	tl.add(arc_sf('.arc_sf'), "arcs+=.3");
}

function arc(dom) {

	var tl = new TimelineMax();
	tl.from(dom, .3, { opacity: 0 });
	tl.to(dom, 1, { rotation: "+=480", repeat: 0, ease: Linear.easeNone });

	return tl;
}

function arc_sf(dom) {

	var tl = new TimelineMax();
	tl.from(dom, .3, { opacity: 0 });
	tl.to(dom, 1, { rotation: "+=360", repeat: 0, ease: Linear.easeNone });

	return tl;
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
