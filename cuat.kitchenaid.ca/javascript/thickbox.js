/*
 * Thickbox 3.1 - One Box To Rule Them All.
 * By Cody Lindley (http://www.codylindley.com)
 * Copyright (c) 2007 cody lindley
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
*/

/* This file has been modified for the Whirlpool implementation - Jan 26 2011 #pk
 * specifically we have added two sets of divs "<div id='TB_shadow'>&nbsp;</div>" and "<div id='TB_frame'></div>" to allow us to set drop shadows for IE 7&8.
*/
if(typeof(tb_branch) == 'undefined')
{
	var tb_branch = '/'; // this need to be set from branch head.
}
var tb_pathToImage = tb_branch + "images/loadingAnimation.gif";
var tb_runOnce="true"; 
var tb_closeButtonTxt;
var tb_closeButtonWidth;
var iFrameHack="true";
var tb_isinline = false;
var closeBtnTxt = $("html").attr("lang")=="en"?"CLOSE":"FERMER";

/*!!!!!!!!!!!!!!!!! edit below this line at your own risk !!!!!!!!!!!!!!!!!!!!!!!*/

//on page load call tb_init
$(document).ready(function(){   
	initTB();
});


function initTB()
{
	tb_init('a.thickbox, area.thickbox, input.thickbox');//pass where to apply thickbox
	imgLoader = new Image();// preload image
	imgLoader.src = tb_pathToImage;

	//show "Your email was sent"
	$("div.sent_btn").click(function(){
		if(!checkValidate("#TB_window")){ return false; }

		$("#TB_frame").fadeOut("fast",function(){
			$("#mail_be_sent").css({"display":"block","margin-top":"10px"});
		});
		tb_remove();
	});
	
	//Resize popup Funtcion
	$(".showDiv").click(function(){
		//show hide content
		$($(this).attr("showID")).show();
		$($(this).attr("hideID")).hide();

		//set height
		$("#TB_window").height($(this).attr("setHeight"));
		$("#TB_ajaxContent").height($("#TB_window").height()-35);0

		//reposition window		
		var newHeight= "-"+(parseInt($(this).attr("setHeight"))/2)+"px";
				var documentTop = $(document).scrollTop();
			$("#TB_window").css("margin-top", documentTop + "px");
			console.log("The C document scroll top is" + documentTop);
	});
}


//add thickbox to href & area elements that have a class of .thickbox
function tb_init(domChunk){
	$(domChunk).click(function(){
	var t = this.title || this.name || null;
	var a = this.href || this.alt;
	var g = this.rel || false;
	tb_show(t,a,g);
	this.blur();
	return false;
	});
}

function tb_show(caption, url, imageGroup) {//function called when the user clicks on a thickbox link	
	try {
		if (typeof document.body.style.maxHeight === "undefined") {//if IE 6
			$("body","html").css({height: "100%", width: "100%"});
			$("html").css("overflow","hidden");
			if (document.getElementById("TB_HideSelect") === null) {//iframe to hide select elements in ie6
				$("body").append("<iframe id='TB_HideSelect'></iframe><div id='TB_overlay'></div><div id='TB_window'><div id='TB_shadow'>&nbsp;</div><div id='TB_frame'></div></div>");
				$("#TB_overlay").click(tb_remove);
			}
		}else{//all others
			if(document.getElementById("TB_overlay") === null){
				$("body").append("<div id='TB_overlay'></div><div id='TB_window'><div id='TB_shadow'>&nbsp;</div><div id='TB_frame'></div></div>");
				$("#TB_overlay").click(tb_remove);
			}
		}
		
		if(tb_detectMacXFF()){
			$("#TB_overlay").addClass("TB_overlayMacFFBGHack");//use png overlay so hide flash
		}else{
			$("#TB_overlay").addClass("TB_overlayBG");//use background and opacity
		}
		
		if(caption===null){caption="";}
		$("body").append("<div id='TB_load'><img src='"+imgLoader.src+"' /></div>");//add loader to the page
		$('#TB_load').show();//show loader
		
		var baseURL;
	   if(url.indexOf("?")!==-1){ //ff there is a query string involved
			baseURL = url.substr(0, url.indexOf("?"));
	   }else{ 
	   		baseURL = url;
	   }
	   
	   var urlString = /\.jpg$|\.jpeg$|\.png$|\.gif$|\.bmp$/;
	   var urlType = baseURL.toLowerCase().match(urlString);

		if(urlType == '.jpg' || urlType == '.jpeg' || urlType == '.png' || urlType == '.gif' || urlType == '.bmp'){//code to show images
				
			TB_PrevCaption = "";
			TB_PrevURL = "";
			TB_PrevHTML = "";
			TB_NextCaption = "";
			TB_NextURL = "";
			TB_NextHTML = "";
			TB_imageCount = "";
			TB_FoundURL = false;
			if(imageGroup){
				TB_TempArray = $("a[@rel="+imageGroup+"]").get();
				for (TB_Counter = 0; ((TB_Counter < TB_TempArray.length) && (TB_NextHTML === "")); TB_Counter++) {
					var urlTypeTemp = TB_TempArray[TB_Counter].href.toLowerCase().match(urlString);
						if (!(TB_TempArray[TB_Counter].href == url)) {						
							if (TB_FoundURL) {
								TB_NextCaption = TB_TempArray[TB_Counter].title;
								TB_NextURL = TB_TempArray[TB_Counter].href;
								TB_NextHTML = "<span id='TB_next'>&nbsp;&nbsp;<a href='#'>Next &gt;</a></span>";
							} else {
								TB_PrevCaption = TB_TempArray[TB_Counter].title;
								TB_PrevURL = TB_TempArray[TB_Counter].href;
								TB_PrevHTML = "<span id='TB_prev'>&nbsp;&nbsp;<a href='#'>&lt; Prev</a></span>";
							}
						} else {
							TB_FoundURL = true;
							TB_imageCount = "Image " + (TB_Counter + 1) +" of "+ (TB_TempArray.length);											
						}
				}
			}

			imgPreloader = new Image();
			imgPreloader.onload = function(){		
			imgPreloader.onload = null;
				
			// Resizing large images - orginal by Christian Montoya edited by me.
			var pagesize = tb_getPageSize();
			var x = pagesize[0] - 150;
			var y = pagesize[1] - 150;
			var imageWidth = imgPreloader.width;
			var imageHeight = imgPreloader.height;
			if (imageWidth > x) {
				imageHeight = imageHeight * (x / imageWidth); 
				imageWidth = x; 
				if (imageHeight > y) { 
					imageWidth = imageWidth * (y / imageHeight); 
					imageHeight = y; 
				}
			} else if (imageHeight > y) { 
				imageWidth = imageWidth * (y / imageHeight); 
				imageHeight = y; 
				if (imageWidth > x) { 
					imageHeight = imageHeight * (x / imageWidth); 
					imageWidth = x;
				}
			}
			// End Resizing
			
			TB_WIDTH = imageWidth + 30;
			TB_HEIGHT = imageHeight + 60;
			$("#TB_frame").append("<a href='' id='TB_ImageOff' title='Close'><img id='TB_Image' src='"+url+"' width='"+imageWidth+"' height='"+imageHeight+"' alt='"+caption+"'/></a>" + "<div id='TB_caption'>"+caption+"<div id='TB_secondLine'>" + TB_imageCount + TB_PrevHTML + TB_NextHTML + "</div></div><div id='TB_frame'><a href='#' id='TB_closeWindowButton' title='Close'>"+closeBtnTxt+"</a> or Esc Key</div>"); 		
			
			$("#TB_closeWindowButton").click(tb_remove);
			
			if (!(TB_PrevHTML === "")) {
				function goPrev(){
					if($(document).unbind("click",goPrev)){$(document).unbind("click",goPrev);}
					$("#TB_window").remove();
					$("body").append("<div id='TB_window'><div id='TB_shadow'>&nbsp;</div><div id='TB_frame'></div></div>");
					tb_show(TB_PrevCaption, TB_PrevURL, imageGroup);
					return false;	
				}
				$("#TB_prev").click(goPrev);
			}
			
			if (!(TB_NextHTML === "")) {		
				function goNext(){
					$("#TB_window").remove();
					$("body").append("<div id='TB_window'><div id='TB_shadow'>&nbsp;</div><div id='TB_frame'></div></div>");
					tb_show(TB_NextCaption, TB_NextURL, imageGroup);				
					return false;	
				}
				$("#TB_next").click(goNext);
				
			}

			document.onkeydown = function(e){ 	
				if (e == null) { // ie
					keycode = event.keyCode;
				} else { // mozilla
					keycode = e.which;
				}
				if(keycode == 27){ // close
					tb_remove();
				} else if(keycode == 190){ // display previous image
					if(!(TB_NextHTML == "")){
						document.onkeydown = "";
						goNext();
					}
				} else if(keycode == 188){ // display next image
					if(!(TB_PrevHTML == "")){
						document.onkeydown = "";
						goPrev();
					}
				}	
			};
			
			tb_position();
			$("#TB_load").remove();
			$("#TB_ImageOff").click(tb_remove);
			$("#TB_window").css({display:"block"}); //for safari using css instead of show
			};
			
			imgPreloader.src = url;
		}else{//code to show html
			
			var queryString = url.replace(/^[^\?]+\??/,'');
			var params = tb_parseQuery( queryString );

			TB_WIDTH = (params['width']*1) + 0 || 750; //defaults to 630 if no paramaters were added to URL
			TB_HEIGHT = (params['height']*1) + 40 || 440; //defaults to 440 if no paramaters were added to URL
      ajaxContentW = TB_WIDTH - 57;
      ajaxContentH = TB_HEIGHT - 45;
			
			if(url.indexOf('TB_iframe') != -1){// either iframe or ajax window		
					urlNoQuery = url.split('TB_');
					iFrameURL=urlNoQuery[0];
					$("#TB_iframeContent").remove();
					if(params['modal'] != "true"){//iframe no modal
						$("#TB_frame").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton' title='Close'>"+closeBtnTxt+"</a> or Esc Key</div></div><iframe frameborder='0' hspace='0' src='' id='TB_iframeContent' name='TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='tb_showIframe()' style='width:"+(ajaxContentW + 29)+"px;height:"+(ajaxContentH + 17)+"px;' > </iframe>");
					}else{//iframe modal
					$("#TB_overlay").unbind();
						$("#TB_frame").append("<iframe frameborder='0' hspace='0' src='' id='TB_iframeContent' name='TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='tb_showIframe()' style='width:"+(ajaxContentW)+"px;height:"+(ajaxContentH)+"px;'> </iframe>");
					}
			}else{// not an iframe, ajax
					ajaxContentW = TB_WIDTH - 92;
					if($("#TB_window").css("display") != "block"){
						if(params['modal'] != "true"){//ajax no modal
						$("#TB_frame").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton'>"+closeBtnTxt+"</a> or Esc Key</div></div><div id='TB_ajaxContent' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px'></div>");
						}else{//ajax modal
						$("#TB_overlay").unbind();
						$("#TB_frame").append("<div id='TB_ajaxContent' class='TB_modal' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px;'></div>");	
						}
					}else{//this means the window is already up, we are just loading new content via ajax
						$("#TB_ajaxContent")[0].style.width = ajaxContentW +"px";
						$("#TB_ajaxContent")[0].style.height = ajaxContentH +"px";
						$("#TB_ajaxContent")[0].scrollTop = 0;
						$("#TB_ajaxWindowTitle").html(caption);
					}
			}
					
			$("#TB_closeWindowButton").click(tb_remove);
			
				if(url.indexOf('TB_inline') != -1){	
					tb_isinline = true;
					$("#TB_ajaxContent").append($('#' + params['inlineId']).children());
					$("#TB_window").unload(function (ev) {
						$('#' + params['inlineId']).html( $("#TB_ajaxContent").html() ); // move elements back when you're finished
						//$("#TB_ajaxContent").html('') // kill the popup content
						ev.stopPropagation();
					});
					tb_position();
					$("#TB_load").remove();
					$("#TB_window").css({display:"block"}); 
				}else if(url.indexOf('TB_iframe') != -1){
					tb_position();
					if($.browser.safari){//safari needs help because it will not fire iframe onload
						$("#TB_load").remove();
						$("#TB_window").css({display:"block"});
					}
				}else{
					$("#TB_ajaxContent").load(url += "&random=" + (new Date().getTime()),function(){//to do a post change this load method
						tb_position();
						$("#TB_load").remove();
						tb_init("#TB_ajaxContent a.thickbox");
						$("#TB_window").css({display:"block"});
					});
				}
			
		}

		if(!params['modal']){
			document.onkeyup = function(e){ 	
				if (e == null) { // ie
					keycode = event.keyCode;
				} else { // mozilla
					keycode = e.which;
				}
				if(keycode == 27){ // close
					tb_remove();
				}	
			};
		}
		
	} catch(e) {
		//nothing here
	}



// Code to set rounded corners and dropshadows using divs

if (tb_runOnce=="true"){
	tb_runOnce="false";
	$("#TB_frame").append('<div class="modal_closeTab">&nbsp;</div><div id="firstCorner" class="corner-topRight">&nbsp;</div><div class="corner-topLeft">&nbsp;</div><div class="corner-bottomRight">&nbsp;</div><div class="corner-bottomLeft">&nbsp;</div><div class="sideRight">&nbsp;</div><div class="sideLeft">&nbsp;</div><div class="sideBottom">&nbsp;</div><div class="sideTop">&nbsp;</div>');
	 
//	if($.browser.msie && $.browser.version.substring(0,1)==7){
//		alert("this is the one");
//				$('.modal_closeTab').css("top","-54px");
//	}
	
	//console.log("#TBFRAME height:"+$('#TB_frame').height()+" -  Width: "+$('#TB_frame').width());
	//console.log("ajaxContentH: "+ajaxContentH);
	//console.log("ajaxContentW: "+ajaxContentW);
	//console.log("TB_iframeContent height:"+$('TB_iframeContent').height()+" -  Width: "+$('TB_iframeContent').width());

if(url.indexOf('TB_iframe') != -1){
	if(params['modal'] == "false"){
		$('.sideRight').height(ajaxContentH+23);
		$('.sideLeft').height(ajaxContentH+7);
		$('.sideTop').width(ajaxContentW);
		$('.sideBottom').width(ajaxContentW+17);
	}else{
		$('.sideRight').height(ajaxContentH-10);
		$('.sideLeft').height(ajaxContentH-10);
		$('.sideTop').width(ajaxContentW+17);
		$('.sideBottom').width(ajaxContentW+17);
		$('#TB_iframeContent').width(ajaxContentW+30);
		
		
	}

}else{
	$('.sideRight').height($('#TB_frame').height()-30);
	$('.sideLeft').height($('#TB_frame').height()-30);
	$('.sideTop').width($('#TB_frame').width()-30);
	$('.sideBottom').width($('#TB_frame').width()-30);	
}

// Code to identify popup heights

/*alert($(window).height());
if ($("#TB_frame").height()>$(window).height()){
	$("#TB_window").css("position","absolute");
	$("#TB_window").css("margin-top","0px;");
	
}*/

//code to create and display close tab

	if(params['modal'] == "false"){
		//console.log("modal - false");
		
		if($('.modal_closeButton').html()==null){
			tb_closeButtonTxt=closeBtnTxt;
			tb_closeButtonWidth=48;
		//	console.log("noButton");
		}else{
			//console.log("existingButton");
			tb_closeButtonTxt=$('.modal_closeButton').html();
			tb_closeButtonWidth=$('.modal_closeButton').width()+14;
		}
		
		$('.modal_closeTab').css("display","block");
		$('.corner-topRight').css("display","none");
		//console.log("apend closetab");	
		$(".modal_closeTab").append('<a href="javascript:void(0)" onclick="tb_remove()"><div class="border-right"></div><div class="modal_closeTxt">'+tb_closeButtonTxt+'<img src="'+ tb_branch +'images/icon_modal_close.png" /></div><div class="border-left"></div></a>');
		$('.modal_closeTxt').width(tb_closeButtonWidth);
			
		if(url.indexOf('TB_iframe') != -1){
			$('.sideTop').width(ajaxContentW-71);
		}else{
			$('.sideTop').width($('#TB_frame').width()-$('.modal_closeTxt').width()-70);
		}

		$('.sideRight').height($('#TB_frame').height()-14);
		$('.sideRight').css("top","-2px");
	}

// code to fix popup - if window is too short





}
	
}

//helper functions below
function tb_showIframe(){
	$("#TB_load").remove();
	$("#TB_window").css({display:"block"});
	if (iFrameHack=="true"){
		$("#TB_iframeContent").attr('src',iFrameURL);
		iFrameHack="false";
	}
}

function tb_remove() {
 	$("#TB_imageOff").unbind("click");
	$("#TB_closeWindowButton").unbind("click");
	
  if(tb_isinline == true){$('#TB_window').trigger('unload');} 
	tb_isinline = false;

	$("#TB_window").fadeOut("fast",function(){$('#TB_window,#TB_overlay').remove();});  // removes window and overlay, works
	
	$("#TB_load").remove();
	if (typeof document.body.style.maxHeight == "undefined") {//if IE 6
		$("body","html").css({height: "auto", width: "auto"});
		$("html").css("overflow","");
	}
	iFrameHack="true";
	document.onkeydown = "";
	document.onkeyup = "";
	tb_runOnce="true";
	return false;
}

function tb_position() {
$("#TB_window").css({marginLeft: '-' + parseInt((TB_WIDTH / 2),10) + 'px', width: TB_WIDTH + 'px'});
	if ( !(jQuery.browser.msie && jQuery.browser.version < 7)) { // take away IE6

//hack to make pages viewable if viewport is smaller than popup height

		if ($("#TB_window").height()>$(window).height()){
						var documentTop = $(document).scrollTop();
			$("#TB_window").css("top", documentTop + "px");
//			console.log("The A document scroll top is" + documentTop);	
		}else{
			var documentTop = $(document).scrollTop();
			$("#TB_window").css("top", documentTop + "px");
//			console.log("The B document scroll top is" + documentTop);
		}

}
}

function tb_parseQuery ( query ) {
   var Params = {};
   if ( ! query ) {return Params;}// return empty object
   var Pairs = query.split(/[;&]/);
   for ( var i = 0; i < Pairs.length; i++ ) {
      var KeyVal = Pairs[i].split('=');
      if ( ! KeyVal || KeyVal.length != 2 ) {continue;}
      var key = unescape( KeyVal[0] );
      var val = unescape( KeyVal[1] );
      val = val.replace(/\+/g, ' ');
      Params[key] = val;
   }
   return Params;
}

function tb_getPageSize(){
	var de = document.documentElement;
	var w = window.innerWidth || self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
	var h = window.innerHeight || self.innerHeight || (de&&de.clientHeight) || document.body.clientHeight;
	arrayPageSize = [w,h];
	return arrayPageSize;
}

function tb_detectMacXFF() {
  var userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('mac') != -1 && userAgent.indexOf('firefox')!=-1) {
    return true;
  }
}