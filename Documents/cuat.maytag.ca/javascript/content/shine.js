$(function() {
	if ($(".machine") != undefined) {
		setTimeout(function() {
			$("#masthead .light").css("bottom", "-109px");
			$(".machine").animate({
				opacity: 1
			}, {
				duration: 350,
				queue: false
			});
			$("#masthead .light").animate({
				bottom: "365px"
			}, {
				duration: 300,
				queue: false
			});
		}, 5000);
	}
});