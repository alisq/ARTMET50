

if ($(window).width() > 1000) {
	$('#container').scroll(function(){
		st = $("#container").scrollTop()/($(".interior").height()-$('#container').height())
		a = -200+(-2000*st)+"px";
		console.log(a)
		$("h1#top").css("text-indent",a)
		// $("h1#bottom").css("text-indent",-600+(500*st)+"px")
		})
} else {
	$('h1#top').marquee({
		speed: 100,
		gap: 100,
		delayBeforeStart: 0,
		direction: 'left',
		pauseOnHover: true,
		startVisible:true
	});

	
}

$('h1#bottom').marquee({
	speed: 100,
	gap: 100,
	duplicated:true,
	delayBeforeStart: 0,
	direction: 'left',
	pauseOnHover: false,
	startVisible:true
});




// $('h2#bottom').marquee({
// 	speed: 250,
// 	gap: 100,
// 	delayBeforeStart: 0,
// 	direction: 'right',
// 	pauseOnHover: true
// });
