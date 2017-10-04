
window.onload = function() {

	$(".nav.navbar-nav li").on("click", "a", function() {
		$(".active").removeClass("active");
		$(this).parent().addClass("active");
	});

	$(".container.content div").hover(function() {
		console.log("hover");
		var $divId = $(this).attr("id");
		$(".nav.navbar-nav li a").each(function() {
			if($(this).attr("href").indexOf($divId) > -1 && !$(this).hasClass("active")) {
				$(".active").removeClass("active");
				$(this).parent().addClass("active");
				return false;
			}
		});
	});

	$(window).resize(function() {
		var $width = $(this).width();
		var $height = $(this).height();

		var $conHeight = 
	})

	// $(window).scroll(function() {
	// 	console.log("scroll");
	// 	$(".container.content div").each(function() {
	// 		var $visible = $(this).visible(true);
	// 		// if($(this).is("hover")) {

	// 		// }
	// 		if($(this).is("hover") || $visible) {
	// 			var divId = $(this).attr("id");
	// 			console.log(divId);
	// 			$(".navbar-nav li a").each(function() {
	// 				if($(this).attr("href").indexOf(divId) > -1 && !$(this).hasClass("active")) {
	// 					console.log($(this).attr("href"));
	// 					$(".active").removeClass("active");
	// 					$(this).parent().addClass("active");
	// 					return false;
	// 				}
	// 			});
	// 			return false;	
	// 		}
	// 	});
	// });
}