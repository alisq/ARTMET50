

if ($(window).width() > 1000) {
	$('#container').scroll(function(){
		st = $("#container").scrollTop()/($(".interior").height()-$('#container').height())
		$("h1#top").css("left",-200+(-2000*st)+"px")
		$("h1#bottom").css("text-indent",-600+(500*st)+"px")
		})
} else {
	$('h1#top').marquee({
		speed: 100,
		gap: 100,
		delayBeforeStart: 0,
		direction: 'left',
		pauseOnHover: false
	});

	$('h1#bottom').marquee({
		speed: 100,
		gap: 100,
		delayBeforeStart: 0,
		direction: 'left',
		pauseOnHover: false
	});
}




// $('h2#bottom').marquee({
// 	speed: 250,
// 	gap: 100,
// 	delayBeforeStart: 0,
// 	direction: 'right',
// 	pauseOnHover: true
// });
