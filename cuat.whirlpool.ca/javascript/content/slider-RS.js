(function($){
    var thumb1 = $("a.photoThumbOneStlss"),
		thumb2 = $("a.photoThumbTwoStlss"),
		thumb3 = $("a.photoThumbThreeStlss"),
		thumbs = $("a.photoThumbOneStlss, a.photoThumbTwoStlss, a.photoThumbThreeStlss"),
        slide1 = $("div.slideOneStlss"),
        slide2 = $("div.slideTwoStlss"),
		slide3 = $("div.slideThreeStlss"),
		slides = $("div.slideOneStlss, div.slideTwoStlss, div.slideThreeStlss"),
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
    slide2.hide();slide3.hide();
	
	//thumb 1/slide 1
    thumb1.click(function (e) {
        e.preventDefault();
        thumbs.removeClass("active");
        $(this).addClass("active");
        slides.fadeOut(speed.fadeOut);
        slide1.css("background","url(/images/content/kitchen/stainless_collection/hero-01.jpg)").hide().fadeIn(speed.fadeIn);
		overlayStatus = "closed";
    });
	//thumb 2/slide 2
    thumb2.click(function (e) {
        e.preventDefault();
        thumbs.removeClass("active");
        $(this).addClass("active");
        slides.fadeOut(speed.fadeOut);
        slide2.css("background","url(/images/content/kitchen/stainless_collection/hero-02.jpg)").hide().fadeIn(speed.fadeIn);
    	overlayStatus = "closed";
    });
	//thumb 3/slide 3
	thumb3.click(function (e) {
        e.preventDefault();
        thumbs.removeClass("active");
        $(this).addClass("active");
        slides.fadeOut(speed.fadeOut);
        slide3.css("background","url(/images/content/kitchen/stainless_collection/hero-03.jpg)").hide().fadeIn(speed.fadeIn);
		overlayStatus = "closed";
    });
	
		/*******************************
		show dots on load N' on rollOver
		*******************************/
	dots()
	function dots(){
		var tooltip     = $("div.ttStlss"),
			dots        = $("#sliderWrapperStlss li"),
			dotOne      = $("#dotOneStlss, .tt-1Stlss"),
			dotTwo      = $("#dotTwoStlss, .tt-2Stlss"),
			dotThree    = $("#dotThreeStlss, .tt-3Stlss"),
			dotFour     = $("#dotFourStlss, .tt-4Stlss"),
			dotFive     = $("#dotFiveStlss, .tt-5Stlss"),
			dotSix      = $("#dotSixStlss, .tt-6Stlss"),
			dotSeven    = $("#dotSevenStlss, .tt-7Stlss"),
			dotEight    = $("#dotEightStlss, .tt-8Stlss"),
			dotNine     = $("#dotNineStlss, .tt-9Stlss"),
			dotTen      = $("#dotTenStlss, .tt-10Stlss"),
			dotEleven   = $("#dotElevenStlss, .tt-11Stlss"),
			dotTwelve   = $("#dotTwelveStlss, .tt-12Stlss"),
			dotThirteen = $("#dotThirteenStlss, .tt-13Stlss"),
			dotFourteen = $("#dotFourteenStlss, .tt-14Stlss");
			
		function closeBlind(){
			slide1.click(function(event){if(overlayStatus=="open"){event.stopPropagation();thumb1.trigger("click");overlayStatus="closed";}});
			slide2.click(function(event){if(overlayStatus=="open"){event.stopPropagation();thumb2.trigger("click");overlayStatus="closed";}});
			slide3.click(function(event){if(overlayStatus=="open"){event.stopPropagation();thumb3.trigger("click");overlayStatus="closed";}});
		}//ends closeBind()
		
		//hide dots and show when the page loads
		dots.hide().delay(500).fadeIn();		
		
		//show the tooltip on mouseover in the dots
		dots.hover(function(){$(this).find(".ttStlss").show();},function(){$(this).find(".ttStlss").hide();});	 

	  //change background on click the dots
	  /****slide 1******/
	  dotOne.click(function(e){
		e.preventDefault();e.stopPropagation();overlayStatus="open";
		slide1.css("background","url(/images/content/kitchen/stainless_collection/feature-1-1.jpg)").hide().fadeIn(speed.fadeIn);
		dots.hide(100, function(){
			dots.hide();
		});
		$("div.featureOneStlss").fadeIn(speed.fadeIn,function(){closeBlind();});
	  });
		
	  dotTwo.click(function(e){
		e.preventDefault();e.stopPropagation();overlayStatus="open";
		slide1.css("background","url(/images/content/kitchen/stainless_collection/feature-1-2.jpg)").hide().fadeIn(speed.fadeIn);
		dots.hide(100, function(){
			dots.hide();
		});
		$("div.featureTwoStlss").fadeIn(speed.fadeIn,function(){closeBlind();});
	  });
		
	  dotThree.click(function(e){
		e.preventDefault();e.stopPropagation();overlayStatus="open";
		slide1.css("background","url(/images/content/kitchen/stainless_collection/feature-1-3.jpg)").hide().fadeIn(speed.fadeIn);
		dots.hide(100, function(){
			dots.hide();
		});
		$("div.featureThreeStlss").fadeIn(speed.fadeIn,function(){closeBlind();});
	  });
		
	  dotFour.click(function(e){
		e.preventDefault();e.stopPropagation();overlayStatus="open";
		slide1.css("background","url(/images/content/kitchen/stainless_collection/feature-1-4.jpg)").hide().fadeIn(speed.fadeIn);
		dots.hide(100, function(){
			dots.hide();
		});
		$("div.featureFourStlss").fadeIn(speed.fadeIn,function(){closeBlind();});
	  });
		
	  dotFive.click(function(e){
		e.preventDefault();e.stopPropagation();overlayStatus="open";
		slide1.css("background","url(/images/content/kitchen/stainless_collection/feature-1-5.jpg)").hide().fadeIn(speed.fadeIn);
		dots.hide(100, function(){
			dots.hide();
		});
		$("div.featureFiveStlss").fadeIn(speed.fadeIn,function(){closeBlind();});
	  });
	  /********slide 2******/
	  dotSix.click(function(e){
		e.preventDefault();e.stopPropagation();overlayStatus="open";
		slide2.css("background","url(/images/content/kitchen/stainless_collection/feature-1-1.jpg)").hide().fadeIn(speed.fadeIn);
		dots.hide(100, function(){
			dots.hide();
		});
		$("div.featureSixStlss").fadeIn(speed.fadeIn,function(){closeBlind();});
	  });
	  
	  dotSeven.click(function(e){
		e.preventDefault();e.stopPropagation();overlayStatus="open";
		slide2.css("background","url(/images/content/kitchen/stainless_collection/feature-1-2.jpg)").hide().fadeIn(speed.fadeIn);
		dots.hide(100, function(){
			dots.hide();
		});
		$("div.featureSevenStlss").fadeIn(speed.fadeIn,function(){closeBlind();});
	  });
	  dotEight.click(function(e){
		e.preventDefault();e.stopPropagation();overlayStatus="open";
		slide2.css("background","url(/images/content/kitchen/stainless_collection/feature-1-3.jpg)").hide().fadeIn(speed.fadeIn);
		dots.hide(100, function(){
			dots.hide();
		});
		$("div.featureEightStlss").fadeIn(speed.fadeIn,function(){closeBlind();});
	  });
	  
	  dotNine.click(function(e){
		e.preventDefault();e.stopPropagation();overlayStatus="open";
		slide2.css("background","url(/images/content/kitchen/stainless_collection/feature-1-4.jpg)").hide().fadeIn(speed.fadeIn);
		dots.hide(100, function(){
			dots.hide();
		});
		$("div.featureNineStlss").fadeIn(speed.fadeIn,function(){closeBlind();});
	  });
	  
	  dotTen.click(function(e){
		e.preventDefault();e.stopPropagation();overlayStatus="open";
		slide2.css("background","url(/images/content/kitchen/stainless_collection/feature-1-5.jpg)").hide().fadeIn(speed.fadeIn);
		dots.hide(100, function(){
			dots.hide();
		});
		$("div.featureTenStlss").fadeIn(speed.fadeIn,function(){closeBlind();});
	  });
	  /********slide 3******/
	  dotEleven.click(function(e){
		e.preventDefault();e.stopPropagation();overlayStatus="open";
		slide3.css("background","url(/images/content/kitchen/stainless_collection/feature-2-1.jpg)").hide().fadeIn(speed.fadeIn);
		dots.hide(100, function(){
			dots.hide();
		});
		$("div.featureElevenStlss").fadeIn(speed.fadeIn,function(){closeBlind();});
	  });
	  
	  dotTwelve.click(function(e){
		e.preventDefault();e.stopPropagation();overlayStatus="open";
		slide3.css("background","url(/images/content/kitchen/stainless_collection/feature-2-2.jpg)").hide().fadeIn(speed.fadeIn);
		dots.hide(100, function(){
			dots.hide();
		});
		$("div.featureTwelveStlss").fadeIn(speed.fadeIn, function(){closeBlind();});
	  });
	  
	  dotThirteen.click(function(e){
		e.preventDefault();e.stopPropagation();overlayStatus="open";
		slide3.css("background","url(/images/content/kitchen/stainless_collection/feature-2-3.jpg)").hide().fadeIn(speed.fadeIn);
		dots.hide(100, function(){
			dots.hide();
		});
		$("div.featureThirteenStlss").fadeIn(speed.fadeIn,function(){closeBlind();});
	  });
	  
	  dotFourteen.click(function(e){
		e.preventDefault();e.stopPropagation();overlayStatus="open";
		slide3.css("background","url(/images/content/kitchen/stainless_collection/feature-2-4.jpg)").hide().fadeIn(speed.fadeIn);
		dots.hide(100, function(){
			dots.hide();
		});
		$("div.featureFourteenStlss").fadeIn(speed.fadeIn,function(){closeBlind();});
	  });
		
		//show the dots if thumbs are clicked
		thumbs.click(function(e){e.preventDefault();dots.hide().delay(speed.fast).fadeIn();tooltip.delay(speed.delayShow).fadeOut();});
		
		//Don't close feature window on click on it, just the X or outside of the box
		$("div.featureBoxStlss").click(function(e){
			if ($(e.target).is("a") && !$(e.target).hasClass("videoModal2")) {
				e.stopImmediatePropagation();
			} else if (!$(e.target).hasClass("videoModal2")){
				e.preventDefault();
				e.stopImmediatePropagation();
			}
		});
		
		closeFeatureWindow();
		function closeFeatureWindow(){
			var cw1        = $(".slideOneStlss a.closeFeatureBoxStlss"),
				cw2        = $(".slideTwoStlss a.closeFeatureBoxStlss"),
				cw3        = $(".slideThreeStlss a.closeFeatureBoxStlss"),
				featureBox = $(".featureBoxStlss");
				
			slides.click(function(e){
				if(!$(e.target).hasClass("videoModal2")){
					featureBox.hide();
				}
			});
			
			cw1.click(function(e){
				e.stopPropagation();e.preventDefault();dots.show();featureBox.hide();
				slide1.css("background","url(/images/content/kitchen/stainless_collection/hero-01.jpg)").hide().fadeIn();
				tooltip.delay(speed.delayShow).fadeOut();
			});
			cw2.click(function(e){e.stopPropagation();e.preventDefault();dots.show();featureBox.hide();
				slide2.css("background","url(/images/content/kitchen/stainless_collection/hero-02.jpg)").hide().fadeIn();
				tooltip.delay(speed.delayShow).fadeOut();
			});
			cw3.click(function(e){
				e.stopPropagation();e.preventDefault();dots.show();featureBox.hide();
				slide3.css("background","url(/images/content/kitchen/stainless_collection/hero-03.jpg)").hide().fadeIn();
				tooltip.delay(speed.delayShow).fadeOut();
			});
			thumbs.click(function(e){e.preventDefault();featureBox.hide();});
		}
	}//ends dots()
		
	
	//feature window -> carrousel events
	featureDots();
	function featureDots(){
		var carr1       = $(".carrouselOneStlss a"),
			carr2       = $(".carrouselTwoStlss a"),
			carr3       = $(".carrouselThreeStlss a"),
			carr4       = $(".carrouselFourStlss a"),
			carr5       = $(".carrouselFiveStlss a"),
			carrAll      = $(".featureDotsStlss a"),
			dotThree    = $("#dotThreeStlss, .tt-3Stlss"),
			dotFour     = $("#dotFourStlss, .tt-4Stlss"),
			dotEight    = $("#dotEightStlss, .tt-8Stlss"),
			dotNine     = $("#dotNineStlss, .tt-9Stlss"),
			dotFourteen = $("#dotFourteenStlss, .tt-14Stlss");
			
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
			if(!$(this).hasClass("activeFeatureDotStlss")){
				var carrParent = $(this).closest(".featureBoxStlss");
				var carr = carrParent.find(".featureDotsStlss").find("a");
				carr.removeClass("activeFeatureDotStlss");
				var a = 0;
				if(carrParent.hasClass("featureThreeStlss")){ a = 1; }
				if(carrParent.hasClass("featureFourStlss")){ a = 2; }
				if(carrParent.hasClass("featureEightStlss")){ a = 3; }
				if(carrParent.hasClass("featureNineStlss")){ a = 4; }
				if(carrParent.hasClass("featureFourteenStlss")){ a = 5; }
				$(".contCarr-" + a + "Stlss").stop(true).hide();
				var dotsNum = carr.length;
				for(var i=0; i < dotsNum; i++){
					if($(this).get(0) == carr.eq(i).get(0)){
						currentDot = (i+1);
						$("div.contCarr-" + a + "-" + currentDot + "Stlss").stop(true).fadeIn();
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
				$(this).addClass("activeFeatureDotStlss");
			}
		};
			
		//active/disactive carrousel dots
		carr1.click(onClickOfCarouselDot);
		carr2.click(onClickOfCarouselDot);
		carr3.click(onClickOfCarouselDot);
		carr4.click(onClickOfCarouselDot);
		carr5.click(onClickOfCarouselDot);

		//autorotation carrousel 1
		dotThree.click(function(){
			stopCarousel = false;
			carr1.removeClass("activeFeatureDotStlss");
			carr1.eq(0).click();
		}); //ends autorotation event dotFour
		
		//autorotation carrousel 2
		dotFour.click(function(){
			stopCarousel = false;
			carr2.removeClass("activeFeatureDotStlss");
			carr2.eq(0).click();
		}); //ends autorotation event dotSeven
		
		//autorotation carrousel 3
		dotEight.click(function(){
			stopCarousel = false;
			carr3.removeClass("activeFeatureDotStlss");
			carr3.eq(0).click();
		}); //ends autorotation event dotEight
		
		//autorotation carrousel 4
		dotNine.click(function(){
			stopCarousel = false;
			carr4.removeClass("activeFeatureDotStlss");
			carr4.eq(0).click();
		}); //ends autorotation event dotTwelve
		
		//autorotation carrousel 5
		dotFourteen .click(function(){
			stopCarousel = false;
			carr5.removeClass("activeFeatureDotStlss");
			carr5.eq(0).click();
		}); //ends autorotation event dotEight
		
		$(".slideOneStlss a.closeFeatureBoxStlss, .slideOneStlss").click(function(e){
			stopCarousel = true;
			carr1.eq(0).click();
			carr2.eq(0).click();
			if(typeof(timer)!="undefined"&&timer!=null){ clearTimeout(timer); timer = null; currentdot = null; }
		});
		
		$(".slideTwoStlss a.closeFeatureBoxStlss, .slideTwoStlss").click(function(e){
			stopCarousel = true;
			carr3.eq(0).click();
			carr4.eq(0).click();
			if(typeof(timer)!="undefined"&&timer!=null){ clearTimeout(timer); timer = null; currentdot = null; }
		});
		
		$(".slideThreeStlss a.closeFeatureBoxStlss, .slideThreeStlss").click(function(e){
			stopCarousel = true;
			carr5.eq(0).click();
			if(typeof(timer)!="undefined"&&timer!=null){ clearTimeout(timer); timer = null; currentdot = null; }
		});
		
		$("a.photoThumbOneStlss, a.photoThumbTwoStlss, a.photoThumbThreeStlss").click(function(e){
			stopCarousel = true;
			carr1.eq(0).click();
			carr2.eq(0).click();
			carr3.eq(0).click();
			carr4.eq(0).click();
			carr5.eq(0).click();
			if(typeof(timer)!="undefined"&&timer!=null){ clearTimeout(timer); timer = null; currentdot = null; }
		});
		
	}//ends feature dots	

	//active the modal and set default after close it
	$("a.playImageStlss, a.videoModal2").click(function(){
		overlayStatus="closed";
		setTimeout(function(){
			overlayStatus="open";
		},100);
	});
	
	//set properties for the modal
	$(".playImageStlss").fancybox({
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
			width		: 792, //804
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
	
})(jQuery); //ends document.ready