	function fireFloodlight(src,type,cat) {
		var axel = Math.random() + "";
		var a = Math.floor(axel * 1000000000);
		document.getElementById("fDiv").innerHTML = '<iframe id="fFrame" name="fFrame" src="" width="1" height="1" frameborder="0" style="display:none"></iframe>';
		document.getElementById('fFrame').src = "http://fls.doubleclick.net/activityi;src=" + src + ";type=" + type + ";cat=" + cat + ";ord=" + a + "?";
	}
	

(function($) {
	
	//Fix for "share link"
	var share_link = $('<a>share&nbsp;</a>');
	
	share_link.attr('href', 'http://www.addthis.com/bookmark.php?v=250&amp;pubid=ra-5009b7c36c29ca4d');
	share_link.attr('id', 'shareFix');
	share_link.addClass('addthis_button share');
	
	$('.addthis_button_compact').replaceWith(share_link);
	
	$('#shareFix').live('mouseover', function(){
	     addthis_open(this, '', '[URL]', '[TITLE]');
	});
	
	$('#shareFix').live('mouseout', function(){
	     addthis_close();
	});

	$(".modal").fancybox({
		autoSize : false,
		width		: 600,
		height		: 400,
		closeClick	: true,
		openEffect	: 'fade',
		closeEffect	: 'fade',
		helpers : {
    		title : {
    			type : 'inside'
    		}
    	},
		beforeShow : function (){
			if (window.PIE) {
				
		 		$('.fancybox-outer').each(function() {
					PIE.detach(this);
					setTimeout(function(){
						PIE.attach(this);
					}, 100);
        			});
				}	
			}
	});
	
	$(".seeHowWaterF").fancybox({
		autoSize : false,
		width		: 500,
		height		: 350,
		closeClick	: true,
		openEffect	: 'fade',
		closeEffect	: 'fade',
		helpers : {
    		title : {
    			type : 'inside'
    		}
    	},
		beforeShow : function (){
			if (window.PIE) {
				
		 		$('.fancybox-outer').each(function() {
					PIE.detach(this);
					setTimeout(function(){
						PIE.attach(this);
					}, 100);
        			});
				}	
			}
	});
	
	$(".seeHowMod").fancybox({
		autoSize : false,
		width		: 480,
		height		: 520,
		closeClick	: true,
		openEffect	: 'fade',
		closeEffect	: 'fade',
		helpers : {
    		title : {
    			type : 'inside'
    		}
    	},
		beforeShow : function (){
			if (window.PIE) {
				
		 		$('.fancybox-outer').each(function() {
					PIE.detach(this);
					setTimeout(function(){
						PIE.attach(this);
					}, 100);
        			});
				}	
			}
	});

	$(".prodFormSecTwo2 p span a.modal").fancybox({
		maxWidth	: 525,
		maxHeight	: 325,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
		beforeShow : function (){
			if (window.PIE) {
				
		 		$('.fancybox-outer').each(function() {
					PIE.detach(this);
					setTimeout(function(){
						PIE.attach(this);
					}, 100);
        			});
				}	
			}
	});
	
	
	$(".modal_applieanceModelNumber").fancybox({
		fitToView	: false,
		width		: 450,
		height		: 470,
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
		beforeShow : function (){
			if (window.PIE) {
				
		 		$('.fancybox-outer').each(function() {
					PIE.detach(this);
					setTimeout(function(){
						PIE.attach(this);
					}, 100);
        			});
				
				}	
			}
	});
	
	//load fresh filter month
$("#freshFilterMonth").load("filter-promotion.html");

$("a.numberLocator").fancybox({
		maxWidth	: 500,
		maxHeight	: 510,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
		beforeShow : function (){
			if (window.PIE) {
				
		 		$('.fancybox-outer').each(function() {
					PIE.detach(this);
					setTimeout(function(){
						PIE.attach(this);
					}, 100);
        			});
				}	
			}
	});
	
	//modal gallery
	$(".productImage, .moreImages").fancybox({
		fitToView	: false,
		width		: 350,
		height		: 375,
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
		beforeShow : function (){
			if (window.PIE) {
				
		 		$('.fancybox-outer').each(function() {
					PIE.detach(this);
					setTimeout(function(){
						PIE.attach(this);
					}, 100);
        			});
				}	
			}
	});
	
	$(".productPopup").fancybox({
		maxWidth	: 565,
		maxHeight	: 435,
		fitToView	: false,
		width		: '100%',
		height		: '100%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
		beforeShow : function (){
			if (window.PIE) {
				
		 		$('.fancybox-outer').each(function() {
					PIE.detach(this);
					setTimeout(function(){
						PIE.attach(this);
					}, 100);
        			});
				}	
			}
	});	
	
	//product page Form rollover
	
	$(".prodFormSecTwo, .prodFormSecTwo2").removeClass("grayBG, grayBG2");
	
	$(".rColCheck").click(function(){
		$(".prodFormSecTwo").addClass("grayBG");
		$(".prodFormSecTwo2").removeClass("grayBG");
	});
	$(".rColCheck2").click(function(){
		$(".prodFormSecTwo2").addClass("grayBG");
		$(".prodFormSecTwo").removeClass("grayBG");
	});

	if($(".rColCheck").is(":checked")){
		$(".prodFormSecTwo").addClass("grayBG");
		$(".prodFormSecTwo2").removeClass("grayBG");
	}else{
		$(".prodFormSecTwo2").addClass("grayBG");
		$(".prodFormSecTwo1").removeClass("grayBG");
	}
	
	//modal gallery
	$("#twoI, #threeI").addClass("hideI");
	$("#oneL").click(function(e){
		e.preventDefault();
		$("#oneI, #twoI, #threeI").slideUp("fast");
		$("#oneI").slideDown("fast");
	});
	$("#twoL").click(function(e){
		e.preventDefault();
		$("#oneI, #twoI, #threeI").slideUp("fast");
		$("#twoI").slideDown("fast");
	});
	$("#threeL").click(function(e){
		e.preventDefault();
		$("#oneI, #twoI, #threeI").slideUp("fast");
		$("#threeI").slideDown("fast");
	});

	//video thumb rollOver
	var videoThumbLink = $("a.videoThumb"),
		videoThumbImg = $("a.videoThumb img"),
		speed = 50;
	
	videoThumbLink.hover(function(){
		$(videoThumbImg).fadeOut(speed);
	}, function(){
		$(videoThumbImg).fadeIn(speed);
	});
	
	//colapse div
	$(".colapseIt").click(function(e){
		e.preventDefault();
		$(".colapsableBox").css("height", "auto");
		$(this).hide();
	});	
	
	$(".colapseIt2").click(function(e){
		e.preventDefault();
		$(".colapsableBox2").css("height", "auto");
		$(this).hide();
	});	
	
})(jQuery);