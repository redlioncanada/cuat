$("document").ready(function() {
	var $callOver = $('.ka_callOverlay'),
		$overlay = $('.ka_overlay'),
		overstate=false;
		
		$callOver.click(function() {
			var wW = $(window).width(),
				wH = $(window).height();
				
				console.log(wW + ", " + wH);
				$overlay.css({'height':wH+'px', 'width':wW+'px'});
			
			var rL = (wW/2)-360,
				rT = (wH/2)-205,
				rH = 360;

				if(rH>765){
					rH=765;
				}
				
			$('.ka_con').css({'left':rL+'px','top':rT+'px','height':rH+'px'});
			$('overlay_open').css('height', wH+'px');
			
			$overlay.show();
// 			
			$(".ka_con").show();
			$(".ka_con iframe").css('display', 'block');
			overstate=true;
			$("body").addClass('overlay_open');
			
		});
		
		$( window ).resize(function() {
  			var wW = $(window).width(),
				wH = $(window).height();
			
				$overlay.css({'height':wH+'px', 'width':wW+'px'});
			
			var rL = (wW/2)-360,
				rT = (wH/2)-205,
				rH = 360;

				if(rH>=765){
					rH=765;
				}
				
			$('.ka_con').css({'left':rL+'px','top':rT+'px','height':rH+'px'});
			$('overlay_open').css('height', wH+'px');
				
			if(overstate==true){
				 $overlay.show();
			 }else{
			 	$overlay.hide();
			 }	
		});
		
		$(".ka_close").click(function() {
			$('.ka_con').hide();
			$(".ka_con iframe").css('display', 'none');
			$overlay.hide();
			overstate=false;
			$("body").removeClass('overlay_open');
			$("body").css('height', 'auto');
		});
		
		$overlay.click(function() {
			$('.ka_con').hide();
			$(".ka_con iframe").css('display', 'none');
			$overlay.hide();
			overstate=false;
			$("body").removeClass('overlay_open');
			$("body").css('height', 'auto');
			
		});
});