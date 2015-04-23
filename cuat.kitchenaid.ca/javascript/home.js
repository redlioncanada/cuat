// JavaScript Document
$(document).ready(function(){
	$("ul.homeSlider a.bselector").click(bgSelect);		
	$("a.expandButton").toggle(function(e){e.preventDefault();$(this).closest("li").addClass("expanded")},function(e){e.preventDefault();$(this).closest("li").removeClass("expanded")});
});

function bgSelect(e){
	e.preventDefault();
	$("a.bselector.selected").removeClass("selected");
	$("div.contentText.selected").removeClass("selected");
	$(this).addClass("selected");
	$($(this).attr("href")).addClass("selected");		
	$('body').css("background-image","url("+site+"images/background-"+$(this).html()+".jpg)");
}