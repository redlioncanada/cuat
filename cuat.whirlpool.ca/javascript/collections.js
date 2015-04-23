

$(document).ready(function(){
	var urlsearch = window.location.search,
		callsubtab = false;

	if(urlsearch.indexOf('coltab=')>-1){
		callsubtab = urlsearch.split('coltab=').pop();
		if(callsubtab.indexOf('&')>-1){
			callsubtab = callsubtab.split('&').shift();
		}
		if(callsubtab!='blackIce' && callsubtab!='whiteIce' && callsubtab!='stainless'){
			callsubtab = false;
		}
		//console.log(callsubtab);
	}
	if(callsubtab){
		//console.log('in callsubtab');
		var callsubtarget = $('#'+callsubtab+'Cta').attr('href');

		$('.subcontainer').removeClass('show');
		$('.infocontainer').removeClass('show');
		$(callsubtarget + 'Info .infotabcontainer').removeClass('show');
		$(callsubtarget + 'Sub .subtabContent img').removeClass('show');
		$(callsubtarget + 'Sub .subtabControl li').removeClass('active');
		$(callsubtarget + 'Info .tabControl a').removeClass('active');
		$('.colGallery .tabControl li').removeClass('active');
		

		$($('#'+callsubtab+'Cta').closest('li')).addClass('active');
		$(callsubtarget).addClass('show');
		$(callsubtarget + 'Sub').addClass('show');
		$(callsubtarget + 'Info').addClass('show');
		$($(callsubtarget + 'Sub .subtabContent img')[0]).addClass('show');
		$($(callsubtarget + 'Sub .subtabControl li')[0]).addClass('active');
		$($(callsubtarget + 'Info .tabControl a')[0]).addClass('active');
		$($(callsubtarget + 'Info .infotabcontainer')[0]).addClass('show');
	}

	$('.colGallery .tabControl a').click(function(e){
		e.preventDefault();
		//console.log('hi');
		var allsub = $('.subcontainer'),
			allinfo = $('.infocontainer'),
			target = $(this).attr('href'),
			sub = $(target + 'Sub'),
			info = $(target + 'Info');
			allsiblings = $(this).parent().siblings(),
			allsubcontrol = $(target + 'Sub .subtabControl li'),
			allsubimg = $(target + 'Sub .subtabContent img'),
			allinfocontrol = $(target + 'Info .tabControl a'),
			allinfotab = $(target + 'Info .infotabcontainer');

		 //console.log(allsiblings + ' ' + allsubcontrol);

		allsub.removeClass('show');
		allinfo.removeClass('show');
		allinfotab.removeClass('show');
		allsubimg.removeClass('show');
		allsubcontrol.removeClass('active');
		allsiblings.removeClass('active');
		allinfocontrol.removeClass('active');

		$($(this).closest('li')).addClass('active');
		$(target).addClass('show');
		$(sub).addClass('show');
		$(info).addClass('show');
		$(allsubimg[0]).addClass('show');
		$(allsubcontrol[0]).addClass('active');
		$(allinfocontrol[0]).addClass('active');
		$(allinfotab[0]).addClass('show');
	});

	$('.subcontainer .subtabControl a').click(function(e){
		e.preventDefault();

		var allsiblings = $(this).parent().siblings('li'),
			allsubimg = $(this).closest('.subcontainer').find('.subtabContent img'),
			index = $(this).attr('data-index');

		allsiblings.removeClass('active');
		allsubimg.removeClass('show');

		$(this).parent().addClass('active');
		$(allsubimg[index]).addClass('show');
	});

	$('.infocontainer .tabControl a').click(function(e){
		e.preventDefault();

		var allsiblings = $(this).siblings('a'),
			allinfotab = $(this).closest('.infocontainer').find('.infotabcontainer'),
			target = $(this).attr('href');

		allsiblings.removeClass('active');
		allinfotab.removeClass('show');

		$(this).addClass('active');
		$(target).addClass('show');

	});
});