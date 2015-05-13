$("document").ready(function() {

var slideSelect, images, lastElem, target, overstate, $callOver, $overlay, timingRun, $title, $copy, $link, $count, $string;

    init();
    
    function init(){
    	$callOver = $('.js_callOverlay'),
    	$overlay = $('#slide_overlay');
    	
        $('ul.img li').each(function(index) {
            $('#slideSelect ul').append('<li><img/></li>');
            $('#slideSelect ul li img').attr({
                "src": "/images/content/bulletsOff.gif",
                "alt": "Select Slide"
            });
            $('#slideSelect ul li').css('margin', '0 8px');
        });

        slideSelect = $('div#slideSelect li');
        images =$ ('ul.img li');
        lastElem = slideSelect.length-1;

        slideSelect.first().addClass('selected');
        images.hide().first().show();

        $('#slideSelect ul li.selected img').attr('src', '/images/content/bulletsOn.gif');

        $('div#slideSelect li img').hover(function() {
            $(this).attr('src', '/images/content/bulletsOn.gif');
        }, function(){
            if ($(this).hasClass('selected')===false) {
                $('#slideSelect ul li img').attr('src', '/images/content/bulletsOff.gif');
                $('#slideSelect ul li.selected img').attr('src', '/images/content/bulletsOn.gif');
            }
        });

        slideSelect.click(function() {
            if (!$(this).hasClass('selected')) {
                target=$(this).index();
                sliderResponse(target);
                resetTiming();
                setDetails(target);
            }
        });

        $('#slideRight').click(function(){
            target=$('#slideSelect ul li.selected').index();
            target===lastElem? target=0: target=target+1;
            sliderResponse(target);
            resetTiming();
            setDetails(target);
        });

        $('#slideLeft').click(function(){
            target=$('#slideSelect ul li.selected').index();
            lastElem=slideSelect.length-1;
            target===0? target=lastElem: target=target-1;
            sliderResponse(target);
            resetTiming();
            setDetails(target);
        });
        
        timingRun=setInterval(function(){
            sliderTiming();
            }, 10000);
            
        target=$('#slideSelect ul li.selected').index();
        setDetails(target);
        //setFade();    
        
        $callOver.click(function() {
        	console.log('hit');
			var wW = $(window).width(),
				wH = $(window).height(),
				yW=$('.yt_vid').width(),
				yH=$('.yt_vid').height();
			
				$overlay.css({'height':wH+'px', 'width':wW+'px'});
				//$overlay.show();
			
			var rL = (wW/2)-yW/2,
				rT = (wH/2)-yH/2;
				
				/*,rH = wH-150*/
				/*if(rH>765){rH=765;}*/
				
			$('.yt_vid').css({'left':rL+'px','top':rT+'px'});
			
			
			$overlay.show();
			$('.yt_vid').show();
			overstate=true;
			$("body").addClass('overlay_open');
			$('.overlay_open').css('height', wH+'px');
		});
		
		
		$( window ).resize(function() {
  			var wW = $(window).width(),
				wH = $(window).height(),
				yW=$('.yt_vid').width(),
				yH=$('.yt_vid').height();
			
				$overlay.css({'height':wH+'px', 'width':wW+'px'});
				//$overlay.show();
			
			var rL = (wW/2)-yW/2,
				rT = (wH/2)-yH/2;
				
				/*,rH = wH-150*/
				/*if(rH>765){rH=765;}*/
				
			$('.yt_vid').css({'left':rL+'px','top':rT+'px'});
			$('.overlay_open').css('height', wH+'px');
				
			if(overstate==true){
				 $overlay.show();
			 }else{
			 	$overlay.hide();
			 }	
			
		});
		$overlay.click(function() {
			$('.yt_vid').hide();
			$overlay.hide();
			overstate=false;
			$("body").removeClass('overlay_open');
			$("body").css('height', 'auto');
			
		});
    }
    
    function setDetails(target){
        $title=$("#slideHero ul.img li div p.title").eq(target).text();
        $copy=$("#slideHero ul.img li div p.copy").eq(target).html();

        $link=$("#slideHero ul.img li div a.link").eq(target).html();
        $linkHref=$("#slideHero ul.img li div a.link").eq(target).attr('href');
        $linkMce_href=$("#slideHero ul.img li div a.link").eq(target).attr('mce_href');
        //$linkOnClick=$("#slideHero ul.img li div a.link").eq(target).attr('onclick');

        $("#captionTitle").text(""+$title);
        $("#captionCopy").html(""+$copy);

        $('#captionLink').attr({"href": $linkHref,"mce_href": $linkMce_href/*,"onclick": $linkOnClick*/});

        $("#captionLink").html($link);
        
        $noLink = $link=$("#slideHero ul.img li div a.link").eq(target).hasClass('no_link');
        //console.log($noLink);
        
        if ($noLink==true){
        	$("#captionTitle").css('width','100%');
        	$("#captionCopy").css('width','100%');
        } else{
        	$("#captionTitle").css('width','100%');
        	$("#captionCopy").css('width','465px');
        }
        
        var $subslides = $("#slideHero ul.img li div.subslides");
        
        
        if($subslides.eq(target).length > 0){
            $leftPos = $("#slideHero ul.img li div.subslides p.leftPos").eq(target).text();
            //console.log($leftPos);
            
            $subslides.eq(target).css({'display':'block', 'left':''+ $leftPos +'px'});
            
            $("div.subslides").eq(target).each(function(){
                
                 $count = $('> div.subslide', this).length;
                 //console.log($count);
            });
            
            switch($count){
                     case 2:
                        console.log($count);
                        $("div.subslide").css({'height':'140px'});
                        $("div.subslide img").css({'height':'120px', 'width':'100px', 'padding-top':'20px'});
                     break;
                     case 3:
                        console.log($count);
                        $("div.subslide").css({'height':'95px'});
                        $("div.subslide img").css({'height':'85px', 'width':'85px', 'padding-top':'10px'});

                     break;
                 }
        }
    }

    function sliderResponse(target){
        images.fadeOut(300).eq(target).fadeIn(300);
        slideSelect.removeClass('selected').eq(target).addClass('selected');
        $('#slideSelect ul li img').attr('src', '/images/content/bulletsOff.gif');
        $('#slideSelect ul li.selected img').attr('src', '/images/content/bulletsOn.gif');
        setDetails(target);
        }
        
    function resetTiming() {
        clearInterval(timingRun);
        timingRun=setInterval(function(){
            sliderTiming();
        }, 10000);
    }

    function sliderTiming(){
        target=$('#slideSelect ul li.selected').index();
        target===lastElem? target=0: target=target+1;
        sliderResponse(target);
    }

    function setFade(){
        var $caption=$("#slideCaption, #slideLeft, #slideRight");

        $caption.delay(10000).fadeOut(1000);

        $("#slideHero").mouseleave(function() {
            $caption.delay(10000).fadeOut(1000);
        });

        $("#slideHero").mouseover(function() {
            $caption.fadeIn(500);
        });
    }
});

