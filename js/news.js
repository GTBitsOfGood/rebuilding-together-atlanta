$(document).ready(function() {
	$(".nav>li.dropdown").hover(
		function() {
			$(this).toggleClass("open");
		}
	);
});