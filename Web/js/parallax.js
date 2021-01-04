$(document).ready(function() {
	$(window).scroll(function() {
		var lateral = $(window).scrollTop();
		var position = lateral * 0.03;

		$("body").css( {
			"background-position": "0 -" + position + "px"
		})
	})
});