

if ($(window).width() > 1000) {
	$('#container').scroll(function(){
		st = $("#container").scrollTop()/($(".interior").height()-$('#container').height())
		a = -200+(-2000*st)+"px";
		
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


$(".thumb").click(function(){
	ourURL = $(this).find("img").attr("src").replace("/small","/big");
	ourText = $(this).find(".small").html();
	$("#cover img").attr("src",ourURL);
	$("#cover p").html(ourText);
	$("#cover").addClass("active");


})

$("#cover").click(function(){
	$(this).removeClass("active");
	$("#cover img").attr("src","");
});

$(document).on('keyup', function(e) {
	
	if (e.key == "Escape") $("#cover").removeClass("active");
  });

$(".name-space").hover(function(e){
	
	picSRC = $($(this).attr("data-id")+" img").attr("src");
	

	$("#name-space-pic").attr("src",picSRC)
	$("#name-space-pic").css({
		"top":e.clientY+"px",
		"left":e.clientX+"px"

	})
}, function(){
	
	$("#name-space-pic").attr("style","")
	$("#name-space-pic").attr("src","")
}).click(function(){
	namespace = $(this).data("id");
	
	$(namespace).click()
})

// $('h2#bottom').marquee({
// 	speed: 250,
// 	gap: 100,
// 	delayBeforeStart: 0,
// 	direction: 'right',
// 	pauseOnHover: true
// });
