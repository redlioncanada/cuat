//pane 3&4 overlay image positions
var vblImages = {
	'vbl-sfridge':{
		left: 0.07974847560976,
		width: 0.15276981707317,
		top: 0.19844512195122
	},
	'vbl-srange':{
		left: 0.3221875,
		width: 0.13296981707317,
		top: 0.33022103658537
	},
	'vbl-sdish':{
		left: 0.64034298780488,
		width: 0.08558018292683,
		top: 0.36102896341463
	},
	'vbl-brange':{
		left: 0.0515243902439,
		width: 0.11037347560976,
		top: 0.20502286585366
	},
	'vbl-bcounter':{
		left: 0.31567073170732,
		width: 0.14852896341463,
		top: 0.31006097560976
	},
	'vbl-bfridge': {
		left: 0.86137957317073,
		width: 0.09633384146341,
		top: 0.02900152439024
	},
	'vbl-bdish': {
		left: 0.68692835365854,
		width: 0.10133384146341,
		top: 0.33706554878049
	},
	'vbl-context-image':{
		width: 0.45712213740458
	}
};

//pane 1 scroller, trigger a scroll every 10 seconds
var vblGalleryInterval;
function resetVblGalleryInterval() {clearInterval(vblGalleryInterval); vblGalleryInterval = setInterval(vblLeftArrowClick,10000);}
resetVblGalleryInterval();

//init resize
setInterval(function(){if (parseInt($('#vbl-container-3').height()) > 0) {resize(); clearInterval(this);}},10);
$(window).resize(resize);
document.addEventListener('fullscreenchange',resize);
document.addEventListener('mozfullscreenchange',resize);
document.addEventListener('webkitfullscreenchange',resize);
function resize(cb) {
	$('#vbl-container-1,#vbl-container-2').css({'height':$('#vbl-container-3').height()});
	$('#vbl-container-1 .vbl-scroller .vbl-panel').each(function(i,v) {
		if (parseInt($(this).css('left') == 0)) $(this).css('left',$(this).width()*i);
		$(this).css('width',$('#vbl-container-1').width());
	});
	$('.vbl-gallery-info-panel').each(function(i,v) {
		var t = parseInt($(this).closest('.vbl-container').height());
		$(this).css('top',t/2-parseInt($(this).height())/2-20);
	});
	$('.vbl-scroll').css('left',parseInt($('#vbl-container-2').width())/2-parseInt($('.vbl-scroll').width())/2);
	var w = $('#vbl-container-2 .vbl-context-image').outerWidth();
	if (Math.abs($('#vbl-container-2 > div').eq(0).outerWidth()-w) > 1) {
		$('#vbl-container-2 > div').eq(0).css({'height':$('#vbl-container-2 .vbl-context-image').height(),'width':w});
	}
	$('#vbl-container-2 .vbl-panel > div').css('left',parseInt($('#vbl-container-2 > div').css('left')) + parseInt($('#vbl-container-2 > div').width()) + 40);
	$('#main_content_wrapper').css('height',$('#vbl-wrapper').height());
	$('#page .main-content-wrapper-top').css('height',parseInt($('#header-wrap').height())+5);
	setVBLImages(cb);
}
function setVBLImages(cb) {
	var w = $('#vbl-container-2').width();
	$('.vbl-context-image').css('width',vblImages['vbl-context-image'].width*w);
	for (var a in vblImages) {
		$('#'+a+'-overlay').css({
			left: vblImages[a].left*w,
			width: vblImages[a].width*w,
			top: vblImages[a].top*w
		})
	}
	if (typeof cb === 'function') cb();
}

//init
$('#vbl-container-1 .vbl-scroller').css('height',$(this).find('.vbl-panel>img').height());
$('#vbl-container-1 .vbl-scroller .vbl-panel').each(function(i,v) {
	var l = $('#vbl-container-1 .vbl-scroller .vbl-panel').length;
	if (i == 0) $(this).addClass('vbl-panel-left');
	if (i == l-1) $(this).addClass('vbl-panel-right');
	$(this).css('left',$(this).width()*i);
});

//pane 1: scroller, left arrow click
$('.vbl-left-arrow').click(vblLeftArrowClick);
function vblLeftArrowClick() {
	clearInterval(vblGalleryInterval);
	var a = $('.vbl-panel-active'), b = $('.vbl-panel-left'), c = $('.vbl-panel-right'), w = $(a).width(), p = $('.vbl-left-arrow').parent();
	//if the scroller's active panel is animating, return
	if (parseInt($(a).css('left')) / w != 0) return;
	//get the left-most panel
	var d = $(b).next('li').length ? $(b).next('li') : $(this).parent().find('.vbl-panel').eq(0);
	//and set it's class, to track an instance where we run out of panels on either side
	$(d).addClass('vbl-panel-left'), $(c).removeClass('vbl-panel-right');
	//get the panel next to the current active panel
	d = $(a).next('li').length ? $(a).next('li') : $(p).find('.vbl-panel').eq(0);
	//and make it the active one
	$(a).removeClass('vbl-panel-active'), $(d).addClass('vbl-panel-active');
	//animate all panels left
	$(p).find('.vbl-panel').velocity({'left':'-='+w},{duration:500,complete:function(){
		//put the left-most panel onto the right side, maintain the illusion of infinite scrolling
		$(b).css('left',$(c).position().left+$(c).width()).removeClass('vbl-panel-left').addClass('vbl-panel-right');
		resetVblGalleryInterval();
	}});
}
//pane 1 scroller, right arrow click
$('.vbl-right-arrow').click(vblRightArrowClick);
function vblRightArrowClick() {
	clearInterval(vblGalleryInterval);
	var a = $('.vbl-panel-active'), b = $('.vbl-panel-right'), c = $('.vbl-panel-left'), w = $(a).width(), p = $('.vbl-right-arrow').parent();
	if (parseInt($(a).css('left')) / w != 0) return;
	var d = $(b).prev('li').length ? $(b).prev('li') : $(this).parent().find('.vbl-panel').last();
	$(b).css('left',-$(c).width()).removeClass('vbl-panel-right').addClass('vbl-panel-left');
	$(d).addClass('vbl-panel-right'), $(c).removeClass('vbl-panel-left');
	d = $(a).prev('li').length ? $(a).prev('li') : $(p).find('.vbl-panel').last();
	$(a).removeClass('vbl-panel-active'), $(d).addClass('vbl-panel-active');
	$(p).find('.vbl-panel').velocity({'left':'+='+w},{duration:500});
	resetVblGalleryInterval();
}

//pane 2: image fading and text animations
var lastVblHover = '', force = false;
$('.vbl-h-menu img').on('mousemove',function(e) {
	var a = $('.vbl-h-menu .vbl-active'), b = $(a).attr('src').replace('-fr.','.').replace('on','off'), r = b.replace('-off.jpg','-hero.jpg').replace('-btn','');
	//track the last hovered image
	lastVblHover = r;
	//return if hovering the same image or if already animating
	if (($(e.target).attr('src') == $(a).attr('src') || $('#vbl-container-2 .vbl-active').hasClass('velocity-animating')) && !force) return;
	force = false;
	//desaturate previously active image
	$(a).removeClass('vbl-active').addClass('desaturate');
	//saturate newly active image
	$(this).addClass('vbl-active').removeClass('desaturate');

	//get current id
	b = $(e.target).attr('src').replace('off','on').replace('-fr.','.');
	a = $('.vbl-context-image'), d = $('.vbl-context-image-pre'), b = b.replace('-on.jpg','-hero.jpg').replace('-btn','').replace('-fr.','.');
	//animate hero image in using id
	$(d).attr('src',b).velocity({'opacity':1},{'duration':500,'complete':function(){
		$('.vbl-context-image').attr('src',$(this).attr('src'));
		$(d).css('opacity',0);
	}});

	a = $(e.target).closest('.vbl-container').find('.vbl-panel');
	b = b.replace('-hero.jpg','').replace(/^.*[\\\/]/, '').replace('frame2-','');
	var w = $(this).closest('.vbl-container').find('.vbl-panel > div').width();
	
	//animate old copy text out
	$(a).find('.vbl-active').removeClass('vbl-active').css('left',0).velocity({'left':w},{duration:500});
	a = $(a).find("[data-id='" + b + "']");
	//animate new copy text in
	$(a).addClass('vbl-active').css('left',-$(a).width()).velocity({'left':0},{duration:500});
});

//pane 3&4: info icon click
$('.vbl-gallery-info-icon').click(function(e) {
	var self = this;
	//call resize, and do this after resize completes
	//ensures the overlay images are aligned properly
	resize(function() {
		//if this is in view
		if ($(e.target).css('opacity') == 1) {
			//get the info icon's parent
			var p = $(e.target).parent(), a = $(e.target).attr('id');
			//darken the parent pane, hide all other info icons, and fade the overlay and it's panel into view
			$(p).find('.vbl-panel-background').addClass('darken');
			$(p).find('#'+a+'-overlay,#'+a+'-panel-1').css('display','block').velocity({opacity:1},{duration:500});
			$(p).find('.vbl-gallery-info-icon').not(self).velocity({opacity:0},{duration:500,complete:function(){
				$(this).css('display','none');
			}});
		}
	});
});

//pane 3&4: on X click, or pane background click
$('.vbl-gallery-info-exit,.vbl-panel-background').click(function(e) {
	//get parent 
	var p = $(e.target).closest('.vbl-container');
	//undarken background
	$(p).find('.vbl-panel-background').removeClass('darken');
	//unhide info icons
	$(p).find('.vbl-gallery-info-icon').css('display','block').velocity({opacity:1},{duration:500});
	//hide panels
	$(p).find('.vbl-gallery-overlay,.vbl-gallery-info-panel').velocity({opacity:0},{duration:500,complete:function(){
		$(this).css('display','none');
	}});
});

//pane 3&4: on panel next click
$('.vbl-gallery-info-next,.vbl-gallery-info-nexta').click(function(e) {
	var p = $(e.target).closest('.vbl-container'), z = $(e.target).closest('.vbl-gallery-info-panel');
	var a = $(z).next('.vbl-gallery-info-panel').length ? $(z).next('.vbl-gallery-info-panel') : $(p).find('.vbl-gallery-info-panel').eq(0);
	var b = $(a).attr('id').replace('-panel',''), n = b.substring(b.length-1, b.length), b = b.slice(0,-2);
	//hide all other panels
	$(p).find('.vbl-gallery-info-panel,.vbl-gallery-info-icon').not('#'+b+'-panel-'+n+',#'+b).velocity({opacity:0},{duration:500,complete:function(){
		$(this).css('display','none');
	}});
	//hide all other overlays
	$(p).find('.vbl-gallery-overlay').not('#'+b+'-overlay').velocity({opacity:0},{duration:500,complete:function(){
		$(this).css('display','none');
	}});
	//show the current panel & overlay
	$('#'+b+'-overlay,#'+b+'-panel-'+n+',#'+b).css('display','block').velocity({opacity:1},{duration:500});
});

//menu click
$('#header a').click(function(){
	if ($(this).attr('href') == '#') return;
	//scroll to the appropriate pane
	$('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

//on scroll to top button click, animate to top
$('#scrolltotop').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 500);
});

//on scroll, show/hide "scroll to explore" image
$(window).scroll(function(){
	//if it's already animating, return
	if (!$('.vbl-scroll').hasClass('velocity-animating')) {
		var v = $('#vbl-container-1'), e = $(v).scrollTop(), s = $(window).scrollTop()-parseInt($('#vbl-wrapper').css('top'));
		if (s < e && $('.vbl-scroll').css('opacity') < 1) {
			//if it's not in view, show it
			$('.vbl-scroll').velocity({opacity:1},{duration:700,queue:false});
			$('#scrolltotop').velocity({opacity:0},{duration:700,queue:false});
		} else if (s >= e && $('.vbl-scroll').css('opacity') == 1) {
			//if it is in view, hide it
			$('.vbl-scroll').velocity({opacity:0},{duration:700,queue:false});
			$('#scrolltotop').velocity({opacity:1},{duration:700,queue:false});
		}
	}
});