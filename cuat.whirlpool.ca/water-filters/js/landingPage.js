(function($){
	
	//swap image / video
	var	autoPlayElement = $('<iframe src="http://www.youtube.com/embed/pSq7f_3G7zQ?autoplay=1&wmode=transparent" width="534" height="302" frameborder="0"></iframe>');
	
	swapVideo();
	function swapVideo(){
	
		$("div#thumbnail").click(function(){
			$(this).append(autoPlayElement);
			setInterval(function(){
				$('.sliderContainer').mouseenter();
			}, 5000);
		});
	}
	
	$("ul.selector li div.first, ul.selector li div.second, ul.selector li div.third").click(function(){
		autoPlayElement.remove();
	});
	
	timer();
	
	$('.at300bs').css('background','none');
	
	$('.first').click(function(){
		if (!$('.sliderSubcontainer').is(':animated')) {
			setElement('.first');
			animation(0);
		}
	});
	
	$('.second').click(function(){
		if (!$('.sliderSubcontainer').is(':animated')) {
			setElement('.second');
			animation(-942);
		}
	});	

	$('.third').click(function(){
		if (!$('.sliderSubcontainer').is(':animated')) {
			setElement('.third');			
			animation(-1884);
		}
	});	
	
	function animation(newLeft) {
		$('.sliderSubcontainer').animate({left : newLeft}, {duration : 1000,"easing" : "easeInOutExpo"});
	}
	
	function setElement(eClass){
		resetSlider();
		$(".sliderSubcontainer").find(eClass).addClass("sliderOn");
		resetList();	
		$('.selector li').find(eClass).addClass('sliderOn');
	}
	function resetList(){
		$('.selector li').find('div').removeClass('sliderOn');
		$('.selector li').find('div').addClass('sliderOff');		
	}
	
	function resetSlider(){
		$(".sliderSubcontainer").find('.first').removeClass("sliderOn");
		$(".sliderSubcontainer").find('.first').addClass("sliderOff");
		
		$(".sliderSubcontainer").find('.second').removeClass("sliderOn");
		$(".sliderSubcontainer").find('.second').addClass("sliderOff");
		
		$(".sliderSubcontainer").find('.third').removeClass("sliderOn");
		$(".sliderSubcontainer").find('.third').addClass("sliderOff");		
	}
	
	$('.sliderContainer').mouseenter(function (){
		clearInterval(intervalID);	
	});

	$('.sliderContainer').mouseleave(function (){
		timer();
	});
	
	
	function timer(){
		intervalID = setInterval(function(){
			startRotation();
		}, 7000);	
	}

	function startRotation(){
		$('.selector li').click();
		autoPlayElement.remove();
		if($(".sliderSubcontainer").find('.third').hasClass("sliderOn")){
			setElement('.first');
			animation(0);
		}
		else if($(".sliderSubcontainer").find('.first').hasClass("sliderOn")){
			setElement('.second');
			animation(-942);
		}
		else if($(".sliderSubcontainer").find('.second').hasClass("sliderOn")){
			setElement('.third');
			animation(-1884);
		}
	}

	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
})(jQuery);
