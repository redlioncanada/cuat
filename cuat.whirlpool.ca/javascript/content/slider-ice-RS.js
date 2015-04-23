(function($){	
    var thumb1 = $("a.photoThumbOneIce"),
		thumb2 = $("a.photoThumbTwoIce"),
		thumb3 = $("a.photoThumbThreeIce"),
		thumb4 = $("a.photoThumbFourIce"),
		thumbs = $("a.photoThumbOneIce, a.photoThumbTwoIce, a.photoThumbThreeIce, a.photoThumbFourIce"),
        slide1 = $("div.slideOneIce"),
        slide2 = $("div.slideTwoIce"),
		slide3 = $("div.slideThreeIce"),
		slide4 = $("div.slideFourIce"),
		slides = $("div.slideOneIce, div.slideTwoIce, div.slideThreeIce, div.slideFourIce"),
		timer = null,
		stopCarousel = false,
		currentDot = null;

	//speed object -> fade effect
    var speed = {
        fadeOut   : 150,
        fadeIn    : 300,
		fast      : 200,
		delayShow : 210
    };

	//page loads, hide slides: 2 n' 3, to show the first one for default
    slide2.hide();slide3.hide();slide4.hide();
	
	//thumb 1/slide 1
    thumb1.click(function (e) {
        e.preventDefault();
        thumbs.removeClass("active");
        $(this).addClass("active");
        slides.fadeOut(speed.fadeOut);
        slide1.css("background","url(/images/content/kitchen/ice_collection/hero-01.jpg)").hide().fadeIn(speed.fadeIn);
		overlayStatus = "closed";
    });
	//thumb 2/slide 2
    thumb2.click(function (e) {
        e.preventDefault();
        thumbs.removeClass("active");
        $(this).addClass("active");
        slides.fadeOut(speed.fadeOut);
        slide2.css("background","url(/images/content/kitchen/ice_collection/hero-02.jpg)").hide().fadeIn(speed.fadeIn);
    	ovelayStatus = "closed";
    });
	//thumb 3/slide 3
	thumb3.click(function (e) {
        e.preventDefault();
        thumbs.removeClass("active");
        $(this).addClass("active");
        slides.fadeOut(speed.fadeOut);
        slide3.css("background","url(/images/content/kitchen/ice_collection/hero-03.jpg)").hide().fadeIn(speed.fadeIn);
		overlayStatus = "closed";
    });
	thumb4.click(function (e) {
        e.preventDefault();
        thumbs.removeClass("active");
        $(this).addClass("active");
        slides.fadeOut(speed.fadeOut);
        slide4.css("background","url(/images/content/kitchen/ice_collection/hero-04.jpg)").hide().fadeIn(speed.fadeIn);
		overlayStatus = "closed";
    });
	
	/*******************************
	show dots on load N' on rollOver
	*******************************/
	dots()
	function dots(){
		var tooltip      = $("div.ttIce"),
			dots         = $("#sliderWrapperIce li"),
			dotOne       = $("#dotOneIce, .tt-1Ice"),
			dotTwo       = $("#dotTwoIce, .tt-2Ice"),
			dotThree     = $("#dotThreeIce, .tt-3Ice"),
			dotFour      = $("#dotFourIce, .tt-4Ice"),
			dotFive      = $("#dotFiveIce, .tt-5Ice"),
			dotSix       = $("#dotSixIce, .tt-6Ice"),
			dotSeven     = $("#dotSevenIce, .tt-7Ice"),
			dotEight     = $("#dotEightIce, .tt-8Ice"),
			dotNine      = $("#dotNineIce, .tt-9Ice"),
			dotTen       = $("#dotTenIce, .tt-10Ice"),
			dotEleven    = $("#dotElevenIce, .tt-11Ice"),
			dotTwelve    = $("#dotTwelveIce, .tt-12Ice"),
			dotThirteen  = $("#dotThirteenIce, .tt-13Ice"),
			dotFourteen  = $("#dotFourteenIce, .tt-14Ice");
			dotFifteen   = $("#dotFifteenIce, .tt-15Ice");
			dotSixteen   = $("#dotSixteenIce, .tt-16Ice");
			dotSeventeen = $("#dotSeventeenIce, .tt-17Ice");
			dotEighteen  = $("#dotEighteenIce, .tt-18Ice");
			
		function closeBlind(){
			slide1.click(function(event){if(overlayStatus=="open"){event.stopPropagation();thumb1.trigger("click");overlayStatus="closed";}});
			slide2.click(function(event){if(overlayStatus=="open"){event.stopPropagation();thumb2.trigger("click");overlayStatus="closed";}});
			slide3.click(function(event){if(overlayStatus=="open"){event.stopPropagation();thumb3.trigger("click");overlayStatus="closed";}});
			slide4.click(function(event){if(overlayStatus=="open"){event.stopPropagation();thumb4.trigger("click");overlayStatus="closed";}});
		}//ends closeBind()
		
		//hide dots and show when the page loads
		dots.hide().delay(500).fadeIn();		
		
		//show the tooltip on mouseover in the dots
		dots.hover(function(){$(this).find(".ttIce").show();},function(){$(this).find(".ttIce").hide();});

		//change background on click the dots
		/****slide 1******/
		dotOne.click(function(e){
			e.preventDefault();e.stopPropagation();overlayStatus="open";
			slide1.css("background","url(/images/content/kitchen/ice_collection/feature-1-1.jpg)").hide().fadeIn(speed.fadeIn);
			dots.hide(100, function(){
				dots.hide();
			});
			$("div.featureOneIce").fadeIn(speed.fadeIn,function(){closeBlind();});
		});
		
		dotTwo.click(function(e){
			e.preventDefault();e.stopPropagation();overlayStatus="open";
			slide1.css("background","url(/images/content/kitchen/ice_collection/feature-1-2.jpg)").hide().fadeIn(speed.fadeIn);
			dots.hide(100, function(){
				dots.hide();
			});
			$("div.featureTwoIce").fadeIn(speed.fadeIn,function(){closeBlind();});
		});
		
		dotThree.click(function(e){
			e.preventDefault();e.stopPropagation();overlayStatus="open";
			slide1.css("background","url(/images/content/kitchen/ice_collection/feature-1-3.jpg)").hide().fadeIn(speed.fadeIn);
			dots.hide(100, function(){
				dots.hide();
			});
			$("div.featureThreeIce").fadeIn(speed.fadeIn,function(){closeBlind();});
		});
		
		dotFour.click(function(e){
			e.preventDefault();
			e.stopPropagation();
			overlayStatus="open";
			slide1.css("background","url(/images/content/kitchen/ice_collection/feature-1-4.jpg)").hide().fadeIn(speed.fadeIn);
			dots.hide(100, function(){
				dots.hide();
			});
			$("div.featureFourIce").fadeIn(speed.fadeIn,function(){ closeBlind(); });
		});
		/********slide 2******/
		dotFive.click(function(e){
			e.preventDefault();e.stopPropagation();overlayStatus="open";
			slide2.css("background","url(/images/content/kitchen/ice_collection/feature-2-1.jpg)").hide().fadeIn(speed.fadeIn);
			dots.hide(100, function(){
				dots.hide();
			});
			$("div.featureFiveIce").fadeIn(speed.fadeIn,function(){closeBlind();});
		});
		
		dotSix.click(function(e){
			e.preventDefault();e.stopPropagation();overlayStatus="open";
			slide2.css("background","url(/images/content/kitchen/ice_collection/feature-2-2.jpg)").hide().fadeIn(speed.fadeIn);
			dots.hide(100, function(){
				dots.hide();
			});
			$("div.featureSixIce").fadeIn(speed.fadeIn,function(){closeBlind();});
		});
		
		dotSeven.click(function(e){
			e.preventDefault();e.stopPropagation();overlayStatus="open";
			slide2.css("background","url(/images/content/kitchen/ice_collection/feature-2-3.jpg)").hide().fadeIn(speed.fadeIn);
			dots.hide(100, function(){
				dots.hide();
			});
			$("div.featureSevenIce").fadeIn(speed.fadeIn,function(){closeBlind();});
		});
		
		dotEight.click(function(e){
			e.preventDefault();e.stopPropagation();overlayStatus="open";
			slide2.css("background","url(/images/content/kitchen/ice_collection/feature-2-4.jpg)").hide().fadeIn(speed.fadeIn);
			dots.hide(100, function(){
				dots.hide();
			});
			$("div.featureEightIce").fadeIn(speed.fadeIn,function(){closeBlind();});
		});
		/********slide 3******/
		dotNine.click(function(e){
			e.preventDefault();e.stopPropagation();overlayStatus="open";
			slide3.css("background","url(/images/content/kitchen/ice_collection/feature-3-1.jpg)").hide().fadeIn(speed.fadeIn);
			dots.hide(100, function(){
				dots.hide();
			});
			$("div.featureNineIce").fadeIn(speed.fadeIn,function(){closeBlind();});
		});
		
		dotTen.click(function(e){
			e.preventDefault();e.stopPropagation();overlayStatus="open";
			slide3.css("background","url(/images/content/kitchen/ice_collection/feature-3-2.jpg)").hide().fadeIn(speed.fadeIn);
			dots.hide(100, function(){
				dots.hide();
			});
			$("div.featureTenIce").fadeIn(speed.fadeIn,function(){closeBlind();});
		});
		
		dotEleven.click(function(e){
			e.preventDefault();e.stopPropagation();overlayStatus="open";
			slide3.css("background","url(/images/content/kitchen/ice_collection/feature-3-3.jpg)").hide().fadeIn(speed.fadeIn);
			dots.hide(100, function(){
				dots.hide();
			});
			$("div.featureElevenIce").fadeIn(speed.fadeIn,function(){closeBlind();});
		});
		
		dotTwelve.click(function(e){
			e.preventDefault();e.stopPropagation();overlayStatus="open";
			slide3.css("background","url(/images/content/kitchen/ice_collection/feature-3-4.jpg)").hide().fadeIn(speed.fadeIn);
			dots.hide(100, function(){
				dots.hide();
			});
			$("div.featureTwelveIce").fadeIn(speed.fadeIn, function(){closeBlind();});
		});
		
		dotThirteen.click(function(e){
			e.preventDefault();e.stopPropagation();overlayStatus="open";
			slide3.css("background","url(/images/content/kitchen/ice_collection/feature-3-5.jpg)").hide().fadeIn(speed.fadeIn);
			dots.hide(100, function(){
				dots.hide();
			});
			$("div.featureThirteenIce").fadeIn(speed.fadeIn,function(){closeBlind();});
		});
		/********slide 4******/
		dotFourteen.click(function(e){
			e.preventDefault();e.stopPropagation();overlayStatus="open";
			slide4.css("background","url(/images/content/kitchen/ice_collection/feature-4-1.jpg)").hide().fadeIn(speed.fadeIn);
			dots.hide(100, function(){
				dots.hide();
			});
			$("div.featureFourteenIce").fadeIn(speed.fadeIn,function(){closeBlind();});
		});
		
		dotFifteen.click(function(e){
			e.preventDefault();e.stopPropagation();overlayStatus="open";
			slide4.css("background","url(/images/content/kitchen/ice_collection/feature-4-2.jpg)").hide().fadeIn(speed.fadeIn);
			dots.hide(100, function(){
				dots.hide();
			});
			$("div.featureFifteenIce").fadeIn(speed.fadeIn,function(){closeBlind();});
		});
		
		dotSixteen.click(function(e){
			e.preventDefault();e.stopPropagation();overlayStatus="open";
			slide4.css("background","url(/images/content/kitchen/ice_collection/feature-4-3.jpg)").hide().fadeIn(speed.fadeIn);
			dots.hide(100, function(){
				dots.hide();
			});
			$("div.featureSixteenIce").fadeIn(speed.fadeIn, function(){closeBlind();});
		});
		
		dotSeventeen.click(function(e){
			e.preventDefault();
			e.stopPropagation();
			overlayStatus="open";
			slide4.css("background","url(/images/content/kitchen/ice_collection/feature-4-4.jpg)").hide().fadeIn(speed.fadeIn);
			dots.hide(100, function(){
				dots.hide();
			});
			$("div.featureSeventeenIce").fadeIn(speed.fadeIn,function(){ closeBlind(); });
		});
		
		dotEighteen.click(function(e){
			e.preventDefault();e.stopPropagation();overlayStatus="open";
			slide4.css("background","url(/images/content/kitchen/ice_collection/feature-4-5.jpg)").hide().fadeIn(speed.fadeIn);
			dots.hide(100, function(){
				dots.hide();
			});
			$("div.featureEighteenIce").fadeIn(speed.fadeIn,function(){closeBlind();});
		});
				
		//show the dots if thumbs are clicked
		thumbs.click(function(e){e.preventDefault();dots.hide().delay(speed.fast).fadeIn();tooltip.delay(speed.delayShow).fadeOut();});
		
		//Don't close feature window on click on it, just the X or outside of the box
		$("div.featureBoxIce").click(function(e){
			if ($(e.target).is("a") && !$(e.target).hasClass("videoModal2")) {
				e.stopImmediatePropagation();
			} else if (!$(e.target).hasClass("videoModal2")){
				e.preventDefault();
				e.stopImmediatePropagation();
			}
		});
		//Don't close feature window on click on it, just the X or outside of the box - FF Fix
		/*$("div.featureBoxIce").click(function(e){
			if ($(e.target).is("a") && !$(e.target).hasClass("videoModal2")) {
			e.stopImmediatePropagation();
			} else if (!$(e.target).hasClass("videoModal2")){
				e.preventDefault();
				e.stopImmediatePropagation();
			}
		});*/
		
		closeFeatureWindow();
		function closeFeatureWindow(){
			var cw1        = $(".slideOneIce a.closeFeatureBoxIce"),
				cw2        = $(".slideTwoIce a.closeFeatureBoxIce"),
				cw3        = $(".slideThreeIce a.closeFeatureBoxIce"),
				cw4        = $(".slideFourIce a.closeFeatureBoxIce"),
				featureBox = $(".featureBoxIce");
				
			slides.click(function(e){
				if(!$(e.target).hasClass("videoModal2")){
					featureBox.hide();
				}
			});
			
			cw1.click(function(e){
				e.stopPropagation();e.preventDefault();dots.show();featureBox.hide();
				slide1.css("background","url(/images/content/kitchen/ice_collection/hero-01.jpg)").hide().fadeIn();
				tooltip.delay(speed.delayShow).fadeOut();
			});
			cw2.click(function(e){e.stopPropagation();e.preventDefault();dots.show();featureBox.hide();
				slide2.css("background","url(/images/content/kitchen/ice_collection/hero-02.jpg)").hide().fadeIn();
				tooltip.delay(speed.delayShow).fadeOut();
			});
			cw3.click(function(e){
				e.stopPropagation();e.preventDefault();dots.show();featureBox.hide();
				slide3.css("background","url(/images/content/kitchen/ice_collection/hero-03.jpg)").hide().fadeIn();
				tooltip.delay(speed.delayShow).fadeOut();
			});
			cw4.click(function(e){
				e.stopPropagation();e.preventDefault();dots.show();featureBox.hide();
				slide4.css("background","url(/images/content/kitchen/ice_collection/hero-04.jpg)").hide().fadeIn();
				tooltip.delay(speed.delayShow).fadeOut();
			});
			thumbs.click(function(e){e.preventDefault();featureBox.hide();});
		}
	}//ends dots()
	
	//feature window -> carrousel events
	featureDots();
	function featureDots(){
		var carr1        = $(".carrouselOneIce a"),
			carr2        = $(".carrouselTwoIce a"),
			carr3        = $(".carrouselThreeIce a"),
			carr4        = $(".carrouselFourIce a"),
			carr5        = $(".carrouselFiveIce a"),
			carr6        = $(".carrouselSixIce a"),
			carrAll      = $(".featureDotsIce a"),
			dotFour      = $("#dotFourIce, .tt-4Ice"),
			dotEight     = $("#dotEightIce, .tt-8Ice"),
			dotEleven    = $("#dotElevenIce, .tt-11Ice"),
			dotTwelve    = $("#dotTwelveIce, .tt-12Ice");
			dotSixteen   = $("#dotSixteenIce, .tt-16Ice"),
			dotSeventeen = $("#dotSeventeenIce, .tt-17Ice");
		
		//show/hide content of feature windows
		function onClickOfCarouselDot(e){
			e.preventDefault();
			e.stopPropagation();
			if(e.hasOwnProperty('originalEvent')){
				if((typeof(timer)!="undefined" && timer != null)){
					clearTimeout(timer);
					timer = null;
				}
				stopCarousel = true;
			}
			if(!$(this).hasClass("activeFeatureDotIce")){
				var carrParent = $(this).closest(".featureBoxIce");
				var carr = carrParent.find(".featureDotsIce").find("a");
				carr.removeClass("activeFeatureDotIce");
				var a = 0;
				if(carrParent.hasClass("featureFourIce")){ a = 1; }
				if(carrParent.hasClass("featureEightIce")){ a = 2; }
				if(carrParent.hasClass("featureElevenIce")){ a = 3; }
				if(carrParent.hasClass("featureTwelveIce")){ a = 4; }
				if(carrParent.hasClass("featureSixteenIce")){ a = 5; }
				if(carrParent.hasClass("featureSeventeenIce")){ a = 6; }
				$(".contCarr-" + a + "Ice").stop(true).hide();
				var dotsNum = carr.length;
				for(var i=0; i < dotsNum; i++){
					if($(this).get(0) == carr.eq(i).get(0)){
						currentDot = (i+1);
						$("div.contCarr-" + a + "-" + currentDot + "Ice").stop(true).fadeIn();
						if(typeof(timer) != "undefined" && timer != null){
							clearTimeout(timer);
						}
						if(!stopCarousel){
							timer = setTimeout(function(){
								// hack! fix clearTimeout problem in IE
								if(typeof(timer) == "undefined" || timer == null || !timer || stopCarousel){ return; }
								if(currentDot >= carr.length){ currentDot = 0; }
								carr.eq(currentDot).click();
							},5000);
							// hack! fix multiple timeout assignments in IE
							if($.browser.msie){
								timer = setTimeout(function(){}, 1000);
							}
						}
						break;
					}
				}
				$(this).addClass("activeFeatureDotIce");
			}
		};
		
		//active/disactive carrousel dots
		carr1.click(onClickOfCarouselDot);
		carr2.click(onClickOfCarouselDot);
		carr3.click(onClickOfCarouselDot);
		carr4.click(onClickOfCarouselDot);
		carr5.click(onClickOfCarouselDot);
		carr6.click(onClickOfCarouselDot);

		//autorotation carrousel 1
		dotFour.click(function(){
			stopCarousel = false;
			carr1.removeClass("activeFeatureDotIce");
			carr1.eq(0).click();
		}); //ends autorotation event dotFour
		
		//autorotation carrousel 2
		dotEight.click(function(){
			stopCarousel = false;
			carr2.removeClass("activeFeatureDotIce");
			carr2.eq(0).click();
		}); //ends autorotation event dotSeven
		
		//autorotation carrousel 3
		dotEleven.click(function(){
			stopCarousel = false;
			carr3.removeClass("activeFeatureDotIce");
			carr3.eq(0).click();
		}); //ends autorotation event dotEight
		
		//autorotation carrousel 4
		dotTwelve.click(function(){
			stopCarousel = false;
			carr4.removeClass("activeFeatureDotIce");
			carr4.eq(0).click();
		}); //ends autorotation event dotTwelve
		
		//autorotation carrousel 5
		dotSixteen .click(function(){
			stopCarousel = false;
			carr5.removeClass("activeFeatureDotIce");
			carr5.eq(0).click();
		}); //ends autorotation event dotEight
		
		//autorotation carrousel 6
		dotSeventeen .click(function(){
			stopCarousel = false;
			carr6.removeClass("activeFeatureDotIce");
			carr6.eq(0).click();
		}); //ends autorotation event dotEight
		
		$(".slideOneIce a.closeFeatureBoxIce, .slideOneIce").click(function(e){
			stopCarousel = true;
			carr1.eq(0).click();
			if(typeof(timer)!="undefined"&&timer!=null){ clearTimeout(timer); timer = null; currentdot = null; }
		});
		
		$(".slideTwoIce a.closeFeatureBoxIce, .slideTwoIce").click(function(e){
			stopCarousel = true;
			carr2.eq(0).click();
			if(typeof(timer)!="undefined"&&timer!=null){ clearTimeout(timer); timer = null; currentdot = null; }
		});
		
		$(".slideThreeIce a.closeFeatureBoxIce, .slideThreeIce").click(function(e){
			stopCarousel = true;
			carr3.eq(0).click();
			carr4.eq(0).click();
			if(typeof(timer)!="undefined"&&timer!=null){ clearTimeout(timer); timer = null; currentdot = null; }
		});
		
		$(".slideFourIce a.closeFeatureBoxIce, .slideFourIce").click(function(e){
			stopCarousel = true;
			carr5.eq(0).click();
			carr6.eq(0).click();
			if(typeof(timer)!="undefined"&&timer!=null){ clearTimeout(timer); timer = null; currentdot = null; }
		});
		
		$("a.photoThumbOneIce, a.photoThumbTwoIce, a.photoThumbThreeIce, a.photoThumbFourIce,  a.photoThumbFourIce").click(function(e){
			stopCarousel = true;
			carr1.eq(0).click();
			carr2.eq(0).click();
			carr3.eq(0).click();
			carr4.eq(0).click();
			carr5.eq(0).click();
			carr6.eq(0).click();
			if(typeof(timer)!="undefined"&&timer!=null){ clearTimeout(timer); timer = null; currentdot = null; }
		});
		
	}//ends feature dots	

	//active the modal and set default after close it
	$("a.playImageIce, a.videoModal2").click(function(){
		overlayStatus="closed";
		setTimeout(function(){
			overlayStatus="open";
		},100);
	});
	
	//set properties for the modal
	$("a.playImageIce").fancybox({
			autoSize : false,
			width		: 756,//686
			height		: 432,//412
			closeClick	: true,
			openEffect	: 'fade',
			closeEffect	: 'fade',
			helpers     : { title : { type : 'inside' } },
			beforeShow : function (){
			if (window.PIE){
				$('.fancybox-outer').each(function(){
					PIE.detach(this);
					setTimeout(function(){
						PIE.attach(this);
					}, 100);
				});
			}	
		}
	});	
	
	$(".videoModal2").fancybox({
			autoSize : false,
			width		: 792,
			height		: 604,
			closeClick	: true,
			openEffect	: 'fade',
			closeEffect	: 'fade',
			helpers     : { title : { type : 'inside' } },
			beforeShow : function (){
			if (window.PIE){
				$('.fancybox-outer').each(function(){
					PIE.detach(this);
					setTimeout(function(){
						PIE.attach(this);
					}, 100);
				});
			}	
		}
	});
	$(".demoView").fancybox({
			autoSize : false,
			width		: 804,
			height		: 604,
			closeClick	: true,
			openEffect	: 'fade',
			closeEffect	: 'fade',
			helpers     : { title : { type : 'inside' } },
			beforeShow : function (){
			if (window.PIE){
				$('.fancybox-outer').each(function(){
					PIE.detach(this);
					setTimeout(function(){
						PIE.attach(this);
					}, 100);
				});
			}	
		}
	});
	$(".viewMoreLaundry").fancybox({
		autoSize : false,
			width : 804,
			height : 604,
			closeClick : true,
			openEffect : 'fade',
			closeEffect : 'fade',
			helpers : { title : { type : 'inside' } },
			beforeShow : function (){
			if (window.PIE){
				$('.fancybox-outer').each(function(){
					PIE.detach(this);
					setTimeout(function(){
						PIE.attach(this);
					}, 100);
				});
			}
		}
	}); 
})(jQuery); //ends document.ready