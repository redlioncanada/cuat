$(function (){
	
	function starSlider(){
		$('.flexslider').flexslider({
	    	animation: "slide",
	    	slideshowSpeed: 11000,
	    	directionNav: false,
			after: function(slider) {
	    		startAnimations();
	    	}
	  	});
  	}

  	function sliderControler(){
  		var controls = $('.flex-control-nav');
  	  	controls.addClass('sliderControler');
  	}

	function resetAnimations () {

		//$("#animationZero").animate({opacity:0},{duration:0, queue: false});
		$("#animationOne").animate({opacity:0},{duration:0, queue: false});
		$("#animationTwo").animate({opacity:0},{duration: 0, queue: false});
		$("#animationThree").animate({opacity:0},{duration: 0, queue: false});
		$("#animationFour").animate({opacity:0},{duration: 0, queue: false});
		//$("#aContainerZero .light").animate({bottom: "-195px"},{duration: 0, queue: false});
		$("#aContainerOne .light").animate({bottom: "-195px"},{duration: 0, queue: false});
		$("#aContainerTwo .light").animate({bottom: "-208px"},{duration: 0, queue: false});
		$("#aContainerThree .light").animate({bottom: "-200px"},{duration: 0, queue: false});
		$("#aContainerFour .light").animate({bottom: "-190px"},{duration: 0, queue: false});

	}
  	
	function startAnimations () {


		var firstSlide = $('.sliderControler li:nth-child(2) a');
		var secondSlide = $('.sliderControler li:nth-child(3) a');
		var thirdSlide = $('.sliderControler li:nth-child(4) a');
		var fourthSlide = $('.sliderControler li:nth-child(5) a');
		//var fifthSlide = $('.sliderControler li:nth-child(6) a');

/*
		if (firstSlide.hasClass('active')) {
			resetAnimations();
			setTimeout(function(){
				$("#animationZero").animate({opacity:1},{duration: 350, queue: false});
				$("#aContainerZero .light").animate({bottom: "365px"},{duration: 300, queue: false});
			},4000);
		}
*/
		
		if(firstSlide.hasClass('active')){
			console.log("First Slide")
			resetAnimations();
			setTimeout(function(){
				$("#animationTwo").animate({opacity:1},{duration: 350, queue: false});
				$("#aContainerTwo .light").animate({bottom: "365px"},{duration: 300, queue: false});
			},4000);
		}
		if(secondSlide.hasClass('active')){
			resetAnimations();
			setTimeout(function(){
				$("#animationOne").animate({opacity:1},{duration: 350, queue: false});
				$("#aContainerOne .light").animate({bottom: "320px"},{duration: 300, queue: false});
			},4000);
		}
		if(thirdSlide.hasClass('active')){
			resetAnimations();
			setTimeout(function(){
				$("#animationThree").animate({opacity:1},{duration: 350, queue: false});
				$("#aContainerThree .light").animate({bottom: "340px"},{duration: 300, queue: false});
			},4000);
		}

		if(fourthSlide.hasClass('active')){
			resetAnimations();
			setTimeout(function(){
				$("#aContainerFour div:nth-child(1)").animate({opacity:1},{duration: 350, queue: false});
				$("#aContainerFour .light").animate({bottom: "350px"},{duration: 300, queue: false});
			},4000);
		}
	}

	$(".videos").fancybox({
        maxWidth    : 801,
        maxHeight   : 480,
        fitToView   : false,
        width       : '801',
        height      : '480',
        autoSize    : false,
        closeClick  : false,
        openEffect  : 'none',
        closeEffect : 'none',
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

	starSlider();
	sliderControler();
	startAnimations();
});