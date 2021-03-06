
function start() {
	
	TweenLite.to('.bg_arc', 2, {opacity:1, ease:Power2.easeOut, delay:1.5})


	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})
	


	tl.add("cans", "+=.5")
	tl.from('.can_sf.whole', .4, {x:-300, ease:Power3.easeOut}, "cans")
	tl.from('.can_ed.whole', .5, {x:300, ease:Power3.easeOut}, "cans+=.3")
	

	tl.add("txt")
	tl.from('.t1_a', .8, {opacity:0, x:-120, ease:Power3.easeOut}, "txt")
	tl.from('.t1_b', .8, {opacity:0, x:300, ease:Power3.easeOut}, "txt")	
	tl.from('.t1_c', .8, {opacity:0, x:-200, ease:Power3.easeOut}, "txt")
	tl.from('.cta', .4, {opacity:0, y:"+=20", ease:Back.easeOut}, "+=.1")
	

	tl.from('.can_ed.half',.1, {opacity:0})

	tl.add("arcs", 2)
	tl.add(arc_sf('.arc_sf'), "arcs")
	tl.add(arc('.arc_ed'), "arcs")
	

	
}

function arc(dom){
	
	const tl = new TimelineMax()
	tl.from(dom, .1, {opacity:0})
	tl.to(dom, 2, {rotation:"+=400", scale:.5, ease:Power4.easeOut})

	return tl
}


function arc_sf(dom){
	
	const tl = new TimelineMax()
	tl.from(dom, .1, {opacity:0})
	tl.to(dom, 1.7, {rotation:"+=360", repeat:0, ease:Power4.easeOut})

	return tl
}

start()



module.exports = {};

