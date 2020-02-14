
function start() {
	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})
	
	tl.add("txt")
	tl.from('.t1_b', .8, {opacity:0, x:300, ease:Power3.easeOut}, "txt")
	tl.from('.t1_a', .8, {opacity:0, x:-300, ease:Power3.easeOut}, "txt")

	tl.add("cans", "-=.5")
	tl.from('.can_sf.whole', .4, {x:-300, ease:Power3.easeOut}, "cans")
	tl.from('.can_ed.whole', .5, {x:300, ease:Power3.easeOut}, "cans+=.3")

	TweenLite.from('.bg', 4, {opacity:0, ease:Power2.easeOut, delay:1})

	tl.from('.can_ed.half',.1, {opacity:0})

	tl.add("arcs")
	tl.add(arc_sf('.arc_sf'), "arcs")
	tl.add(arc('.arc_ed'), "arcs")
	

	tl.from('.cta', .4, {opacity:0, y:"+=20", ease:Back.easeOut}, "arcs+=.3")
}

function arc(dom){
	
	const tl = new TimelineMax()
	tl.from(dom, .1, {opacity:0})
	tl.to(dom, 1.4, {rotation:"+=460", repeat:0, ease:Power4.easeOut})

	return tl
}


function arc_sf(dom){
	
	const tl = new TimelineMax()
	tl.from(dom, .1, {opacity:0})
	tl.to(dom, 1, {rotation:"+=360", repeat:0, ease:Power4.easeOut})

	return tl
}

start()



module.exports = {};

