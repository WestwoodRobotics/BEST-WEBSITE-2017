
window.onload = function() {

	$(".nav.navbar-nav li").on("click", "a", function() {
		$(".active").removeClass("active");
		$(this).parent().addClass("active");
	});

	$(".container.content").hover(function() {
		var $divId = $(this).attr("id");
		$(".nav.navbar-nav li a").each(function() {
			if($(this).attr("href").indexOf($divId) > -1 && !$(this).hasClass("active")) {
				$(".active").removeClass("active");
				$(this).parent().addClass("active");
				return false;
			}
		});
	});

	$(document).on('click', 'a[href^="#"]', function(e) {

		// target elemen	t id
		var id = $(this).attr('href');

		// target element
		var $id = $(id);
		if ($id.length === 0) {
			return;
		}

		// prevent standard hash navigation (avoid blinking in IE)
		e.preventDefault();

		// top position relative to the document
		var pos = $id.offset().top - 75;

		// animated top scrolling
		$('body, html').animate({scrollTop: pos});
	});

}