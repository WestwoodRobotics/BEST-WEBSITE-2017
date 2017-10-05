
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

}