
window.onload = function() {

	// add active class to part of page clicked
	// $(".navbar-nav li").click(function() {
	// 	if (!$(this).hasClass("active")) {
	// 		$(".active").removeClass("active");
	// 		$(this).addClass("active");
	// 	}
	// });

		
	$(window).scroll(function() {
		$(".container.content div").each(function() {
			var $visible = $(this).visible(true);
			if($visible) {
				var divId = $(this).attr("id");
				console.log(divId);
				$(".navbar-nav li a").each(function() {
					if($(this).attr("href").indexOf(divId) > -1 && !$(this).hasClass("active")) {
						console.log($(this).attr("href"));
						$(".active").removeClass("active");
						$(this).parent().addClass("active");
						return false;
					}
				})
				return false;	
			}

		});
	});

	$(window).resize(function() {
		var $width = $(window).width();
		var $height = $(window).height();

		var 

	})
}