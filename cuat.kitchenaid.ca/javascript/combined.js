$(document).ready(function () {
	if($("#compare_body").length>0){
		$(".cols").each(function(){
			var x = this;
			$(x).find('.pr-snippet').wrap('<a href="'+$(x).find('.quick_view_hover').attr('href')+'#ratingsandreviews">');
		});
	}
});