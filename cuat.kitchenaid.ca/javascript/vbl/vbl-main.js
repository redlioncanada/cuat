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
var vblGalleryInterval;
function resetVblGalleryInterval() {clearInterval(vblGalleryInterval); vblGalleryInterval = setInterval(function() {$('.vbl-right-arrow').click();},10000);}
resetVblGalleryInterval();

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
$('#vbl-container-1 .vbl-scroller').css('height',$(this).find('.vbl-panel>img').height());
$('#vbl-container-1 .vbl-scroller .vbl-panel').each(function(i,v) {
	var l = $('#vbl-container-1 .vbl-scroller .vbl-panel').length;
	if (i == 0) $(this).addClass('vbl-panel-left');
	if (i == l-1) $(this).addClass('vbl-panel-right');
	$(this).css('left',$(this).width()*i);
});
$('.vbl-left-arrow').click(function() {
	clearInterval(vblGalleryInterval);
	var a = $('.vbl-panel-active'), b = $('.vbl-panel-left'), c = $('.vbl-panel-right'), w = $(a).width(), p = $(this).parent();
	if (parseInt($(a).css('left')) / w != 0) return;
	var d = $(b).next('li').length ? $(b).next('li') : $(this).parent().find('.vbl-panel').eq(0);
	$(d).addClass('vbl-panel-left'), $(c).removeClass('vbl-panel-right');
	d = $(a).next('li').length ? $(a).next('li') : $(p).find('.vbl-panel').eq(0);
	$(a).removeClass('vbl-panel-active'), $(d).addClass('vbl-panel-active');
	$(p).find('.vbl-panel').velocity({'left':'-='+w},{duration:500,complete:function(){
		$(b).css('left',$(c).position().left+$(c).width()).removeClass('vbl-panel-left').addClass('vbl-panel-right');
		resetVblGalleryInterval();
	}});
});
$('.vbl-right-arrow').click(function() {
	clearInterval(vblGalleryInterval);
	var a = $('.vbl-panel-active'), b = $('.vbl-panel-right'), c = $('.vbl-panel-left'), w = $(a).width(), p = $(this).parent();
	if (parseInt($(a).css('left')) / w != 0) return;
	var d = $(b).prev('li').length ? $(b).prev('li') : $(this).parent().find('.vbl-panel').last();
	$(b).css('left',-$(c).width()).removeClass('vbl-panel-right').addClass('vbl-panel-left');
	$(d).addClass('vbl-panel-right'), $(c).removeClass('vbl-panel-left');
	d = $(a).prev('li').length ? $(a).prev('li') : $(p).find('.vbl-panel').last();
	$(a).removeClass('vbl-panel-active'), $(d).addClass('vbl-panel-active');
	$(p).find('.vbl-panel').velocity({'left':'+='+w},{duration:500});
	resetVblGalleryInterval();
});
var lastVblHover = '', force = false;
$('.vbl-h-menu img').on('mousemove',function(e) {
	var a = $('.vbl-h-menu .vbl-active'), b = $(a).attr('src').replace('-fr.','.').replace('on','off'), r = b.replace('-off.jpg','-hero.jpg').replace('-btn','');
	lastVblHover = r;
	if (($(e.target).attr('src') == $(a).attr('src') || $('#vbl-container-2 .vbl-active').hasClass('velocity-animating')) && !force) return;
	force = false;
	$(a).removeClass('vbl-active').addClass('desaturate');
	$(this).addClass('vbl-active').removeClass('desaturate');
	b = $(e.target).attr('src').replace('off','on').replace('-fr.','.');

	a = $('.vbl-context-image'), d = $('.vbl-context-image-pre'), b = b.replace('-on.jpg','-hero.jpg').replace('-btn','').replace('-fr.','.');
	$(d).attr('src',b).velocity({'opacity':1},{'duration':500,'complete':function(){
		$('.vbl-context-image').attr('src',$(this).attr('src'));
		$(d).css('opacity',0);
	}});

	a = $(e.target).closest('.vbl-container').find('.vbl-panel');
	b = b.replace('-hero.jpg','').replace(/^.*[\\\/]/, '').replace('frame2-','');
	var w = $(this).closest('.vbl-container').find('.vbl-panel > div').width();
	
	$(a).find('.vbl-active').removeClass('vbl-active').css('left',0).velocity({'left':w},{duration:500});
	a = $(a).find("[data-id='" + b + "']");
	$(a).addClass('vbl-active').css('left',-$(a).width()).velocity({'left':0},{duration:500});
});
$('.vbl-gallery-info-icon').click(function(e) {
	var self = this;
	resize(function() {
		if ($(e.target).css('opacity') == 1) {
			var p = $(e.target).parent(), a = $(e.target).attr('id');
			$(p).find('.vbl-panel-background').addClass('darken');
			$(p).find('#'+a+'-overlay,#'+a+'-panel-1').css('display','block').velocity({opacity:1},{duration:500});
			$(p).find('.vbl-gallery-info-icon').not(self).velocity({opacity:0},{duration:500,complete:function(){
				$(this).css('display','none');
			}});
		}
	});
});
$('.vbl-gallery-info-exit,.vbl-panel-background').click(function(e) {
	var p = $(e.target).closest('.vbl-container');
	$(p).find('.vbl-panel-background').removeClass('darken');
	$(p).find('.vbl-gallery-info-icon').css('display','block').velocity({opacity:1},{duration:500});
	$(p).find('.vbl-gallery-overlay,.vbl-gallery-info-panel').velocity({opacity:0},{duration:500,complete:function(){
		$(this).css('display','none');
	}});
});
$('.vbl-gallery-info-next,.vbl-gallery-info-nexta').click(function(e) {
	var p = $(e.target).closest('.vbl-container'), z = $(e.target).closest('.vbl-gallery-info-panel');
	var a = $(z).next('.vbl-gallery-info-panel').length ? $(z).next('.vbl-gallery-info-panel') : $(p).find('.vbl-gallery-info-panel').eq(0);
	var b = $(a).attr('id').replace('-panel',''), n = b.substring(b.length-1, b.length), b = b.slice(0,-2);
	$(p).find('.vbl-gallery-info-panel,.vbl-gallery-info-icon').not('#'+b+'-panel-'+n+',#'+b).velocity({opacity:0},{duration:500,complete:function(){
		$(this).css('display','none');
	}});
	$(p).find('.vbl-gallery-overlay').not('#'+b+'-overlay').velocity({opacity:0},{duration:500,complete:function(){
		$(this).css('display','none');
	}});
	$('#'+b+'-overlay,#'+b+'-panel-'+n+',#'+b).css('display','block').velocity({opacity:1},{duration:500});
});
$('#header a').click(function(){
	if ($(this).attr('href') == '#') return;
	$('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});
$('#scrolltotop').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 500);
});
$(window).scroll(function(){
	if (!$('.vbl-scroll').hasClass('velocity-animating')) {
		var v = $('#vbl-container-1'), e = $(v).scrollTop(), s = $(window).scrollTop()-parseInt($('#vbl-wrapper').css('top'));
		if (s < e && $('.vbl-scroll').css('opacity') < 1) {
			$('.vbl-scroll').velocity({opacity:1},{duration:700,queue:false});
			$('#scrolltotop').velocity({opacity:0},{duration:700,queue:false});
		} else if (s >= e && $('.vbl-scroll').css('opacity') == 1) {
			$('.vbl-scroll').velocity({opacity:0},{duration:700,queue:false});
			$('#scrolltotop').velocity({opacity:1},{duration:700,queue:false});
		}
	}
});