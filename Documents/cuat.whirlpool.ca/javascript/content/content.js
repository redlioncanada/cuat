function IncludeJavaScript(jsFile) {
	document.write('<script type="text/javascript" src="' + jsFile + '"><\/script>');
}
IncludeJavaScript("/javascript/content/jquery.hoverIntent.js");
IncludeJavaScript("/javascript/content/callout_box.js");
IncludeJavaScript("/javascript/content/jquery.cluetip.js");
var timeout = 500;
var closetimer = 0;
var ddmenuitem = 0;
var productFlyout;
var laundry = {
	btn: "#laundry_btn",
	menu: "#laundry_menu"
};
var kitchen = {
	btn: "#kitchen_btn",
	menu: "#kitchen_menu"
};
var wholehome = {
	btn: "#wholehome_btn",
	menu: "#wholehome_menu"
};
var accessories = {
	btn: "#accessories_btn",
	menu: "#accessories_menu"
};
var ownercenter = {
	btn: "#ownercenter_btn",
	menu: "#ownercenter_menu"
};
var assets = new Array(laundry, kitchen, wholehome, accessories, ownercenter);
$(document).ready(function() {
	if ($("body").hasClass("product_detail_page") || $("body").hasClass("product_detail")) {
		initPDP();
	}
	document.onclick = menuClose;
	menuClose();
	$("#laundry_btn").bind("mouseover", {
		menu: "#laundry_menu"
	}, menuOpen);
	$("#kitchen_btn").bind("mouseover", {
		menu: "#kitchen_menu"
	}, menuOpen);
	$("#wholehome_btn").bind("mouseover", {
		menu: "#wholehome_menu"
	}, menuOpen);
	$("#accessories_btn").bind("mouseover", {
		menu: "#accessories_menu"
	}, menuOpen);
	$("#ownercenter_btn").bind("mouseover", {
		menu: "#ownercenter_menu"
	}, menuOpen);
	$("#masthead_callouts .secondary").hide();
	$(".initial").hover(function() {
		var secondaryDiv = $(this).next();
		secondaryDiv.toggle();
	});
	$(".secondary").hover(function() {
		$(this).toggle();
	});
	$(".pageIndicator_pageNumber").live("click", function() {
		$("html, body").animate({
			scrollTop: $(".endeca_displayingViewAllIndicators").offset().top
		}, 0);
	});
});

function menuOpen(eventObject) {
	menuClose();
	$(eventObject.data.menu).show();
}

function menuClose() {
	$("#laundry_menu").hide();
	$("#kitchen_menu").hide();
	$("#wholehome_menu").hide();
	$("#accessories_menu").hide();
	$("#ownercenter_menu").hide();
}

function menuTimer() {
	closetimer = window.setTimeout(menuClose, timeout);
}

function menuCancelTimer() {
	if (closetimer) {
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}
$(document).ready(function() {
	$(".tab_ByFeatures").addClass("current_tab");
	var full_width = "940px";
	$("#accordion_1").hoverIntent(accordion_1_grow, accordion_shrink);
	$("#accordion_2").hoverIntent(accordion_2_grow, accordion_shrink);
	if ($("#page").hasClass("caspers")) {
		if ($("#product-carousel").length > 0) {
			removeOnethumblight();
		}
	}

	function accordion_1_grow() {
		$("#homepage_accordion").css("background-image", "none");
		$("#accordion_1").css("z-index", "1002");
		$("#accordion_1").animate({
			width: full_width
		}, {
			duration: "fast"
		});
		$("#accordion_2").animate({
			width: "0px"
		}, {
			duration: "fast"
		});
		$("#laundry_accordion_subhead").css("display", "block");
		$("#homepage_wrap #laundry_comp_button ul li h1 a").addClass("selected");
	}

	function accordion_2_grow() {
		$("#homepage_accordion").css("background-image", "none");
		$("#accordion_1").css("z-index", "1000");
		$("#accordion_2").animate({
			width: full_width
		}, {
			duration: "fast"
		});
		$("#accordion_1").animate({
			width: "0px"
		}, {
			duration: "fast"
		});
		$("#kitchen_accordion_subhead").css("display", "block");
		$("#homepage_wrap #kitchen_comp_button ul li h1 a").addClass("selected");
	}

	function accordion_shrink() {
		$("#homepage_accordion").css("background-image", "url('/images/content/homepage_amp.png')");
		$("#accordion_2").animate({
			width: "400px"
		}, {
			duration: "fast"
		});
		$("#accordion_1").animate({
			width: "400px"
		}, {
			duration: "fast"
		});
		$("#laundry_accordion_subhead").css("display", "none");
		$("#kitchen_accordion_subhead").css("display", "none");
		$("#homepage_wrap #laundry_comp_button ul li h1 a").removeClass("selected");
		$("#homepage_wrap #kitchen_comp_button ul li h1 a").removeClass("selected");
	}
	$("#nav-fragment-1").click(function() {
		$("#fragment-1").addClass("current");
		$("#fragment-1").nextAll(".ui-tabs-panel").removeClass("current");
		$("#fragment-1").prevAll(".ui-tabs-panel").removeClass("current");
		$("#pauseButton").removeClass("active");
		$("#playButton").addClass("active");
		$("#duet").addClass("current");
		$("#duet").prevAll("span").removeClass("current");
		$("#duet").nextAll("span").removeClass("current");
		$(this).addClass("current");
		$(this).prevAll(".ui-tabs-nav-item").removeClass("current");
		$(this).nextAll(".ui-tabs-nav-item").removeClass("current");
		clearInterval(myInterval);
	});
	$("#nav-fragment-1").mouseenter(function() {
		$("#productTitle #duet").addClass("active");
	});
	$("#nav-fragment-1").mouseleave(function() {
		$("#productTitle #duet").removeClass("active");
	});
	$("#nav-fragment-2").mouseenter(function() {
		$("#productTitle #side").addClass("active");
	});
	$("#nav-fragment-2").mouseleave(function() {
		$("#productTitle #side").removeClass("active");
	});
	$("#nav-fragment-3").mouseenter(function() {
		$("#productTitle #cabrio").addClass("active");
	});
	$("#nav-fragment-3").mouseleave(function() {
		$("#productTitle #cabrio").removeClass("active");
	});
	$("#nav-fragment-4").mouseenter(function() {
		$("#productTitle #double").addClass("active");
	});
	$("#nav-fragment-4").mouseleave(function() {
		$("#productTitle #double").removeClass("active");
	});
	$("#nav-fragment-2").click(function() {
		$("#fragment-2").addClass("current");
		$("#fragment-2").nextAll(".ui-tabs-panel").removeClass("current");
		$("#fragment-2").prevAll(".ui-tabs-panel").removeClass("current");
		$("#side").addClass("current");
		$("#side").prevAll("span").removeClass("current");
		$("#side").nextAll("span").removeClass("current");
		$("#pauseButton").removeClass("active");
		$("#playButton").addClass("active");
		$(this).addClass("current");
		$(this).prevAll(".ui-tabs-nav-item").removeClass("current");
		$(this).nextAll(".ui-tabs-nav-item").removeClass("current");
		clearInterval(myInterval);
	});
	$("#nav-fragment-3").click(function() {
		$("#fragment-3").addClass("current");
		$("#fragment-3").nextAll(".ui-tabs-panel").removeClass("current");
		$("#fragment-3").prevAll(".ui-tabs-panel").removeClass("current");
		$("#cabrio").addClass("current");
		$("#cabrio").prevAll("span").removeClass("current");
		$("#cabrio").nextAll("span").removeClass("current");
		$("#pauseButton").removeClass("active");
		$("#playButton").addClass("active");
		$(this).addClass("current");
		$(this).prevAll(".ui-tabs-nav-item").removeClass("current");
		$(this).nextAll(".ui-tabs-nav-item").removeClass("current");
		clearInterval(myInterval);
	});
	$("#nav-fragment-4").click(function() {
		$("#fragment-4").addClass("current");
		$("#fragment-4").nextAll(".ui-tabs-panel").removeClass("current");
		$("#fragment-4").prevAll(".ui-tabs-panel").removeClass("current");
		$("#double").addClass("current");
		$("#double").prevAll("span").removeClass("current");
		$("#double").nextAll("span").removeClass("current");
		$("#pauseButton").removeClass("active");
		$("#playButton").addClass("active");
		$(this).addClass("current");
		$(this).prevAll(".ui-tabs-nav-item").removeClass("current");
		$(this).nextAll(".ui-tabs-nav-item").removeClass("current");
		clearInterval(myInterval);
	});
	$("#playButton").click(function() {
		$(".active").removeClass("active");
		myInterval = setInterval("rotateImages()", 5000);
		$(".ui-tabs-panel").css("display", "block");
		$(this).removeClass("active");
		$("#pauseButton").addClass("active");
	});
	$("#pauseButton").click(function() {
		myInterval = window.clearInterval(myInterval);
		$(this).removeClass("active");
		$("#playButton").addClass("active");
	});
	$(".ctaMain .ctaWork").mouseover(function() {
		$(".ctaMain").animate({
			left: "+=15"
		}, 500, function() {});
	});
	$(".ctaMain .ctaWork").mouseout(function() {
		$(".ctaMain").animate({
			left: "-=15"
		}, 100, function() {});
	});

	function foreSee() {
		FSR.CPPS.set("Demo", "true");
	}
	$("#fragment-1 .seeItWork .ctaMain").click(function() {
		foreSee();
		window.open("http://webapps.easy2.com/cm2/flash/generic_index.asp?page_id=36178044", "mywindow", "menubar=1,resizable=1,width=720,height=680");
	});
	$("#fragment-2 .seeItWork .ctaMain").click(function() {
		foreSee();
		window.open("http://webapps.easy2.com/cm2/flash/generic_index.asp?page_id=36178002", "mywindow", "menubar=1,resizable=1,width=720,height=680");
	});
	$("#fragment-3 .seeItWork .ctaMain").click(function() {
		foreSee();
		window.open("http://webapps.easy2.com/cm2/flash/generic_index.asp?page_id=36178037", "mywindow", "menubar=1,resizable=1,width=720,height=680");
	});
	$("#fragment-4 .seeItWork .ctaMain").click(function() {
		foreSee();
		window.open("http://webapps.easy2.com/cm2/flash/generic_index.asp?page_id=36126545", "mywindow", "menubar=1,resizable=1,width=720,height=680");
	});
	$("#video #close").click(function() {
		$("#work-video").attr("src", " ");
		$("#video").css("display", "none");
	});
});
var myInterval = setInterval("rotateImages()", 5000);

function rotateImages() {
	var oCurPhoto = $("#rotator div.current");
	var oNxtPhoto = oCurPhoto.next();
	if (oNxtPhoto.length == 0) {
		oNxtPhoto = $("#rotator #fragment-1");
	}
	oCurPhoto.addClass("previous").removeClass("current");
	oNxtPhoto.css({
		opacity: 0
	}).addClass("current").animate({
		opacity: 1
	}, 1000, function() {
		oCurPhoto.removeClass("previous");
	});
	var oCurNumber = $(".ui-tabs-nav li.current");
	var oNxtNumber = oCurNumber.next();
	if (oNxtNumber.length == 0) {
		oNxtNumber = $("#nav-fragment-1.ui-tabs-nav-item");
	}
	oCurNumber.addClass("previous").removeClass("current");
	oNxtNumber.addClass("current"), function() {
		oCurNumber.removeClass("previous");
	};
	var oCurCaption = $("#productTitle span.current");
	var oNxtCaption = oCurCaption.next();
	if (oNxtCaption.length == 0) {
		oNxtCaption = $("#productTitle span:first");
	}
	oCurCaption.addClass("previous").removeClass("current");
	oNxtCaption.css({
		opacity: 0
	}).addClass("current").animate({
		opacity: 1
	}, 1000, function() {
		oCurCaption.removeClass("previous");
	});
}

function gup(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regexS = "[\\?&]" + name + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.href);
	if (results == null) {
		return "";
	} else {
		return results[1];
	}
}
$(document).ready(function() {
	$("#category_landing_refrigeratorlearning_bg").addClass("explore");
	$("#category_landing_cooklearning_bg").addClass("explore");
	$("#category_landing_dishlearning_bg").addClass("explore");
	$("#category_landing_laundrylearning_bg").addClass("explore");
	$("#category_landing_filterlearning_bg").addClass("fresh");
	$("#category_landing_aircond_bg").addClass("explore");
	$(".ui-accordion-explore").click(function() {
		$("#category_landing_refrigeratorlearning_bg").addClass("explore");
		$("#category_landing_refrigeratorlearning_bg").removeClass("consider");
		$("#category_landing_cooklearning_bg").addClass("explore");
		$("#category_landing_cooklearning_bg").removeClass("consider");
		$("#category_landing_cooklearning_bg").removeClass("consider2");
		$("#category_landing_dishlearning_bg").addClass("explore");
		$("#category_landing_dishlearning_bg").removeClass("consider");
		$("#category_landing_laundrylearning_bg").addClass("explore");
		$("#category_landing_laundrylearning_bg").removeClass("consider");
		$("#category_landing_filterlearning_bg").addClass("fresh");
		$("#category_landing_filterlearning_bg").removeClass("saveMoney");
		$("#category_landing_filterlearning_bg").removeClass("easyInstall");
		$("#category_landing_aircond_bg").addClass("explore");
		$("#category_landing_aircond_bg").removeClass("consider");
		$("#category_landing_aircond_bg").removeClass("consider2");
	});
	$(".ui-accordion-consider").click(function() {
		$("#category_landing_refrigeratorlearning_bg").addClass("consider");
		$("#category_landing_refrigeratorlearning_bg").removeClass("explore");
		$("#category_landing_cooklearning_bg").addClass("consider");
		$("#category_landing_cooklearning_bg").removeClass("explore");
		$("#category_landing_cooklearning_bg").removeClass("consider2");
		$("#category_landing_dishlearning_bg").addClass("consider");
		$("#category_landing_dishlearning_bg").removeClass("explore");
		$("#category_landing_laundrylearning_bg").addClass("consider");
		$("#category_landing_laundrylearning_bg").removeClass("explore");
		$("#category_landing_filterlearning_bg").addClass("saveMoney");
		$("#category_landing_filterlearning_bg").removeClass("fresh");
		$("#category_landing_filterlearning_bg").removeClass("easyInstall");
		$("#category_landing_aircond_bg").removeClass("explore");
		$("#category_landing_aircond_bg").addClass("consider");
		$("#category_landing_aircond_bg").removeClass("consider2");
	});
	$(".ui-accordion-consider2").click(function() {
		$("#category_landing_cooklearning_bg").addClass("consider2");
		$("#category_landing_cooklearning_bg").removeClass("explore");
		$("#category_landing_cooklearning_bg").removeClass("consider");
		$("#category_landing_filterlearning_bg").addClass("easyInstall");
		$("#category_landing_filterlearning_bg").removeClass("fresh");
		$("#category_landing_filterlearning_bg").removeClass("saveMoney");
		$("#category_landing_aircond_bg").removeClass("explore");
		$("#category_landing_aircond_bg").removeClass("consider");
		$("#category_landing_aircond_bg").addClass("consider2");
	});
});

function limitText(limitField, limitNum, numCount) {
	if (limitField.value.length > limitNum) {
		limitField.value = limitField.value.substring(0, limitNum);
		numCount.style.color = "#F00";
	}
	numCount.value = (limitField.value.length) + "/" + limitNum + " characters";
}

function foreSee() {
	if ($("body").hasClass("product_detail_page")) {
		FSR.CPPS.set("Details", "true");
	}
}
$(document).ready(function() {
	foreSee();
	$(".product_detail_set:nth-child(4)").addClass("rowEnd");
	$(".product_detail_set:nth-child(8)").addClass("rowEnd");
	$(".product_detail_set:nth-child(12)").addClass("rowEnd");
	$("#header_sub_nav_1 a").addClass("ssl");
	$("#shopping_tip_1_div").css("visibility", "visible");
	$("#shopping_tip_2_div").css("visibility", "hidden");
	$("#shopping_tip_3_div").css("visibility", "hidden");
	$("#shopping_tip_4_div").css("visibility", "hidden");
	$("#shopping_tip_5_div").css("visibility", "hidden");
	$("#shopping_tip_1").click(function() {
		$("#shopping_tip_1_div").css("visibility", "visible");
		$("#shopping_tip_2_div").css("visibility", "hidden");
		$("#shopping_tip_3_div").css("visibility", "hidden");
		$("#shopping_tip_4_div").css("visibility", "hidden");
		$("#shopping_tip_5_div").css("visibility", "hidden");
		$("#shopping_tip_1").addClass("selected");
		$("#shopping_tip_2").removeClass("selected");
		$("#shopping_tip_3").removeClass("selected");
		$("#shopping_tip_4").removeClass("selected");
		$("#shopping_tip_5").removeClass("selected");
	});
	$("#shopping_tip_2").click(function() {
		$("#shopping_tip_1_div").css("visibility", "hidden");
		$("#shopping_tip_2_div").css("visibility", "visible");
		$("#shopping_tip_3_div").css("visibility", "hidden");
		$("#shopping_tip_4_div").css("visibility", "hidden");
		$("#shopping_tip_5_div").css("visibility", "hidden");
		$("#shopping_tip_1").removeClass("selected");
		$("#shopping_tip_2").addClass("selected");
		$("#shopping_tip_3").removeClass("selected");
		$("#shopping_tip_4").removeClass("selected");
		$("#shopping_tip_5").removeClass("selected");
	});
	$("#shopping_tip_3").click(function() {
		$("#shopping_tip_1_div").css("visibility", "hidden");
		$("#shopping_tip_2_div").css("visibility", "hidden");
		$("#shopping_tip_3_div").css("visibility", "visible");
		$("#shopping_tip_4_div").css("visibility", "hidden");
		$("#shopping_tip_5_div").css("visibility", "hidden");
		$("#shopping_tip_1").removeClass("selected");
		$("#shopping_tip_2").removeClass("selected");
		$("#shopping_tip_3").addClass("selected");
		$("#shopping_tip_4").removeClass("selected");
		$("#shopping_tip_5").removeClass("selected");
	});
	$("#shopping_tip_4").click(function() {
		$("#shopping_tip_1_div").css("visibility", "hidden");
		$("#shopping_tip_2_div").css("visibility", "hidden");
		$("#shopping_tip_3_div").css("visibility", "hidden");
		$("#shopping_tip_4_div").css("visibility", "visible");
		$("#shopping_tip_5_div").css("visibility", "hidden");
		$("#shopping_tip_1").removeClass("selected");
		$("#shopping_tip_2").removeClass("selected");
		$("#shopping_tip_3").removeClass("selected");
		$("#shopping_tip_4").addClass("selected");
		$("#shopping_tip_5").removeClass("selected");
	});
	$("#shopping_tip_5").click(function() {
		$("#shopping_tip_1_div").css("visibility", "hidden");
		$("#shopping_tip_2_div").css("visibility", "hidden");
		$("#shopping_tip_3_div").css("visibility", "hidden");
		$("#shopping_tip_4_div").css("visibility", "hidden");
		$("#shopping_tip_5_div").css("visibility", "visible");
		$("#shopping_tip_1").removeClass("selected");
		$("#shopping_tip_2").removeClass("selected");
		$("#shopping_tip_3").removeClass("selected");
		$("#shopping_tip_4").removeClass("selected");
		$("#shopping_tip_5").addClass("selected");
	});
});

function growCallout(calloutNumber, calloutHeight) {
	var callout = "#callout_holder_" + calloutNumber;
	var calloutMouseOver = "#callout_mouseover_" + calloutNumber;
	$(callout).mouseenter(function() {
		$(callout).stop().animate({
			height: calloutHeight + "px"
		}, {
			queue: false,
			duration: 300
		});
		$(callout + " p span").css("display", "inline");
		$(callout + " .noHover").css("display", "none");
		$(callout + " .hover").css("display", "block");
		$(callout + " .hideHeader").css("display", "none");
		$(callout).addClass("callout_holder_selected");
		$(callout + " #callout_box").addClass("callout_box_selected");
		$(calloutMouseOver).css("display", "none");
	});
}

function shrinkCallout(calloutNumber, calloutHeight) {
	var callout = "#callout_holder_" + calloutNumber;
	var calloutMouseOver = "#callout_mouseover_" + calloutNumber;
	$(callout).mouseleave(function() {
		$(callout).stop().animate({
			height: calloutHeight + "px"
		}, {
			queue: false,
			duration: 300
		});
		$(callout + " p span").css("display", "none");
		$(callout + " .hover").css("display", "none");
		$(callout + " .noHover").css("display", "block");
		$(callout + " .hideHeader").css("display", "inline");
		$(callout).removeClass("callout_holder_selected");
		$(callout + " #callout_box").removeClass("callout_box_selected");
		$(callout).css("overflow", "visible");
		$(calloutMouseOver).css("display", "block");
	});
}

function expandBoxes() {
	$("#callout_holder_one").mouseenter(function() {
		$(this).stop().animate({
			height: "200px"
		}, {
			queue: false,
			duration: 300
		});
		$(".noHover").css("display", "none");
		$(".hover").css("display", "block");
	});
	$("#callout_holder_one").mouseleave(function() {
		$(this).stop().animate({
			height: "121px"
		}, {
			queue: false,
			duration: 300
		});
		$(".noHover").css("display", "block");
		$(".hover").css("display", "none");
	});
}
$(document).ready(function() {
	if ($("#glossary").length > 0) {
		$("#content_wrapper").append('<div id="alpha_nav" class="alpha_nav_bottom"></div>');
		$(".alpha_nav_bottom").html($("#alpha_nav").html());
		$(".category").each(function() {
			$(this).append('<div class="back_to_top"><a href="#">Back to Top</a></div>');
		});
		$(".glossary_content").each(function() {
			$(this).html($(this).text());
		});
	}
	if ($(".product_list_page").length > 0) {
		var classBackgroundPlbi = "";
		if ($(".product_list_page.SC_Laundry").length > 0) {
			classBackgroundPlbi = "washerBg1";
		} else {
			if ($(".product_list_page.SC_Kitchen").length > 0) {
				classBackgroundPlbi = "washerDishes";
			} else {
				if ($(".product_list_page.SC_Accessories").length > 0) {
					classBackgroundPlbi = "accessoryBg";
				}
			}
		}
		$("#espot_image").addClass(classBackgroundPlbi);
	}
	if ($("#body_wrap.winecooler").length > 0) {
		expandBoxes();
	}
	if ($("#body_wrap.waterheaters").length > 0) {
		expandBoxes();
	}
	if (($.browser.msie && $.browser.version == "8.0") && ($("#body_wrap.waterheaters").length > 0)) {
		$(".waterheaters .callout_holder").css("background", "url(/images/content/hash_bg_purple.png) #FFF");
	}
	if ($("#body_content.service").length > 0) {
		$("#page.ContentPage").css("background", "url(/images/bk.jpg) no-repeat scroll 0 0 transparent");
	}
	$(".product_registration_page ul.breadcrumb li:eq(0)").remove();
	if ($("#body_wrap.replacement").length > 0) {
		$("#callout_holder_one").css("height", "150px");
		$(".noHover").css("display", "none");
		$(".hover").css("display", "block");
	}
	if ($("#body_wrap.commlaundry").length > 0) {
		$("#callout_holder_one").css("height", "150px");
		$(".noHover").css("display", "none");
		$(".hover").css("display", "block");
	}
});

function initPDP() {
	$("#module-carousel #carousel-next").addClass("active");
	$("#module-carousel #carousel-previous").removeClass("active");
	$(".where_to_buy").css({
		height: "20px"
	}).parent().siblings(".product-detail-option-select").children(".product-form-option").children(".number-select").css({
		display: "none"
	}).prev().css({
		display: "none"
	});
	var waterFilterPdpVideoAmount = $(".carousel-item.video").length;
	if ($(".filter-form").length >= 1) {
		for (i = 0; i < waterFilterPdpVideoAmount; i++) {
			$(".carousel-item.video").eq(i).css({
				display: "none"
			});
		}
	}

	function onresizeFunc(e, t) {
		t.css({
			"margin-top": 0,
			top: "0",
			left: "0"
		});
		jQuery("#colors_ctrls").css({
			top: e.offset().top + e.height - 50,
			left: e.offset().left
		});
	}

	function preload(e) {
		if (typeof document.body == "undefined") {
			return;
		}
		try {
			var t = document.createElement("div");
			var n = t.style;
			n.position = "absolute";
			n.top = n.left = 0;
			n.visibility = "hidden";
			document.body.appendChild(t);
			t.innerHTML = '<img class="preload_img" src="' + e + '" />';
		} catch (r) {}
	}(function(e) {
		e.fn.j360 = function(e) {
			var t = {
				clicked: false,
				currImg: 1
			};
			var e = jQuery.extend(t, e);
			return this.each(function() {
				var t = jQuery(this);
				var n = {};
				t.css({
					"margin-left": "auto",
					"margin-right": "auto",
					"text-align": "center",
					overflow: "hidden"
				});
				$overlay = t.clone(true);
				$overlay.html('<img src="/images/loader.gif" class="loader" style="margin-top:' + (t.height() * 0.5 - 15) + 'px" />');
				$overlay.attr("id", "view_overlay");
				$overlay.css({
					position: "absolute",
					"z-index": "5",
					top: "0",
					left: "0",
					background: "#fff"
				});
				t.after($overlay);
				t.after('<div id="colors_ctrls"></div>');
				jQuery("#colors_ctrls").css({
					width: t.width(),
					position: "absolute",
					"z-index": "5",
					top: "0",
					left: "0"
				});
				var r = 0;
				jQuery("img", t).each(function() {
					n[++r] = jQuery(this).attr("src");
					preload(jQuery(this).attr("src"));
				});
				var i = 0;
				jQuery(".preload_img").load(function() {
					if (++i == r) {
						$overlay.animate({
							filter: "alpha(Opacity=0)",
							opacity: 0
						}, 500);
						t.html('<img src="' + n[1] + '" />');
						$overlay.bind("mousedown touchstart", function(t) {
							if (t.type == "touchstart") {
								e.currPos = window.event.touches[0].pageX;
							} else {
								e.currPos = t.pageX;
							}
							e.clicked = true;
							return false;
						});
						jQuery(document).bind("mouseup touchend", function() {
							e.clicked = false;
						});
						jQuery(document).bind("mousemove touchmove", function(i) {
							if (e.clicked) {
								var s;
								if (i.type == "touchmove") {
									s = window.event.targetTouches[0].pageX;
								} else {
									s = i.pageX;
								}
								var o = 4;
								if (Math.abs(e.currPos - s) >= o) {
									if (e.currPos - s >= o) {
										e.currImg++;
										if (e.currImg > r) {
											e.currImg = 1;
										}
									} else {
										e.currImg--;
										if (e.currImg < 1) {
											e.currImg = r;
										}
									}
									e.currPos = s;
									t.html('<img src="' + n[e.currImg] + '" />');
								}
							}
						});
					}
				});
				if (jQuery.browser.msie || jQuery.browser.mozilla || jQuery.browser.opera || jQuery.browser.safari) {
					jQuery(window).resize(function() {
						onresizeFunc(t, $overlay);
					});
				} else {
					var s = "onorientationchange" in window,
						o = s ? "orientationchange" : "resize";
					window.addEventListener(o, function() {
						onresizeFunc(t, $overlay);
					}, false);
				}
				onresizeFunc(t, $overlay);
			});
		};
	})(jQuery);
	window.onscroll = function() {
		kitchenAidBoxScroll();
	};
	if (window.location.href.indexOf("partsandaccessories") != -1) {
		$(".product-tab-option.selected").removeClass("selected");
		$("#partsandaccessories_tab.product-tab-option").addClass("selected");
		$(".product-tab-selection .product-content.active").removeClass("active");
		$(".product-tab-selection #partsandaccessories.product-content").addClass("active");
	}
	if (window.location.href.indexOf("ratingsandreviews") != -1) {
		$(".product-tab-option.selected").removeClass("selected");
		$("#ratingsandreviews_tab.product-tab-option").addClass("selected");
		$(".product-tab-selection .product-content.active").removeClass("active");
		$(".product-tab-selection #ratingsandreviews.product-content").addClass("active");
	}

    function kitchenAidBoxScroll() {
        var addToCartBoxTop = ($(document).scrollTop() - 75);
        var moduleContentTop = ($(document).scrollTop() + 40);
        var addToCartBoxHeight = ($(".side-column").height() - 100);
        var bottomScrollBoundary = $(".main-column").height() - addToCartBoxHeight;
        if ($(document).scrollTop() >= 195 && $(document).scrollTop() <= $(".main-column").height()) {
            $(".side-column").css({
                "margin-top": addToCartBoxTop
            });
        } else {
            if ($(document).scrollTop() <= 194) {
                $(".side-column").css({
                    "margin-top": "0px"
                });
            }
        } if ($(document).scrollTop() >= bottomScrollBoundary) {
            $(".side-column").css({
                "margin-top": ($(".main-column").height() - (addToCartBoxHeight * 1.5))
            });
        }
    }
	$(".product-tab-option").click(function() {
		var optionName = $(this).attr("id").replace("_tab", "");
		console.log(optionName);
		$(".product-tab-option.selected").removeClass("selected");
		$(".product-content").removeClass("active");
		$(this).addClass("selected");
		$("#" + optionName + ".product-content").addClass("active");
	});
	$("a span.BVRRCount.BVRRNonZeroCount").live("click", function() {
		$(".product-tab-option.selected").removeClass("selected");
		$(".product-content").removeClass("active");
		$("#ratingsandreviews_tab").addClass("selected");
		$("#ratingsandreviews").addClass("active");
		$(window).scrollTop(($("#product-tabs").offset().top) - 60);
	});

	function changeProductDetails(colorName, productID, imagePath, productPrice, productMSRP) {
		$(".product-image img").attr({
			src: imagePath
		});
		$(".product-color").html((colorName).replace("-", " "));
		$(".product-part-number").html(productID);
		$(".offer-price-amount").html(productPrice);
		$(".listing-price-amount").html(productMSRP);
		$(".choose-color").val(colorName);
	}
	$("#color-swatches img").click(function() {
		$("#color-swatches img.selected").removeClass("selected");
		$(this).addClass("selected");
		var productValues = $(this).attr("name");
		var productValuesSeperated = productValues.split("|");
		var productId = productValuesSeperated[0];
		var productColor = productValuesSeperated[1];
		var imagePath = productValuesSeperated[2];
		var productPrice = productValuesSeperated[3];
		var productMSRP = productValuesSeperated[4];
		changeProductDetails(productColor, productId, imagePath, productPrice, productMSRP);
	});
	$(".choose-color").change(function() {
		var colorName = $(this).val();
		var controlSwatch = $('#color-swatches img[title="' + colorName + '"]');
		$("#color-swatches img.selected").removeClass("selected");
		$(controlSwatch).addClass("selected");
		var productValues = $(controlSwatch).attr("name");
		var productValuesSeperated = productValues.split("|");
		var productId = productValuesSeperated[0];
		var productColor = productValuesSeperated[1];
		var imagePath = productValuesSeperated[2];
		var productPrice = productValuesSeperated[3];
		var productMSRP = productValuesSeperated[4];
		changeProductDetails(productColor, productId, imagePath, productPrice, productMSRP);
	});

	function updateModuleContent(selector) {
		$(".carousel-item img").each(function() {
			if ($(this).attr("name") == $(selector).attr("name")) {
				$(this).addClass("item-module-selected");
			} else {
				$(this).removeClass("item-module-selected");
			}
		});
		var thumbnailValues = $(selector).attr("name");
		var thumbnailValuesSeperated = thumbnailValues.split("|");
		var moduleContentMedia = thumbnailValuesSeperated[0];
		var moduleContentHeader = thumbnailValuesSeperated[1];
		$(".module-header").html(moduleContentHeader);
		if (moduleContentMedia.indexOf("jpg") !== -1 || moduleContentMedia.indexOf("png") !== -1) {
			if (moduleContentMedia.indexOf("No Image Available") !== -1) {
				$(".module-main-content").html("");
			} else {
				$(".module-main-content").html('<img src="' + moduleContentMedia + '" alt="' + moduleContentHeader + '" title="' + moduleContentHeader + '" />');
				$(function() {
					$(".module-main-content img").draggable();
				});
				$(".module-main-content img").dblclick(function() {
					zoomIn(".module-main-content img");
				});
			}
		} else {
			if (moduleContentMedia.indexOf("360") !== -1) {
				$(".module-main-content").html(" ");
				$(".module-main-content").html(' <div id="product" style="width: 640px; height: 480px; overflow: hidden;"></div>');
				for (i = 1; i < 23; i++) {
					$("#product").append('<img style="width:100%;" class="three-sixty-image" src="' + moduleContentMedia + i + '.jpg" />');
				}
				$("#product").j360();
			} else {
				var embedLink = thumbnailValues.replace("watch?v=", "embed/");
	            embedLink = embedLink.substring(5);
	            var videoContent = '<iframe width="650" height="435" src="' + embedLink + '" frameborder="0" allowfullscreen></iframe>';
				/* var videoContent = '<video controls="controls" preload="auto" autoplay="autoplay" width="650" height="435" poster="/images/video/' + moduleContentMedia + '_poster.jpg"><source src="http://81916b243be118d063e2-42c80eda4617fb6bc414dcba3952a512.r38.cf1.rackcdn.com/' + moduleContentMedia + '.ogg" type="video/ogg"></source><source src="http://81916b243be118d063e2-42c80eda4617fb6bc414dcba3952a512.r38.cf1.rackcdn.com/' + moduleContentMedia + '.mp4" type="video/mp4"></source><source src="http://81916b243be118d063e2-42c80eda4617fb6bc414dcba3952a512.r38.cf1.rackcdn.com/' + moduleContentMedia + '.webm" type="video/webm"></source><object id="flowplayer" width="650" height="435" data="/javascript/flowplayer-3.2.15.swf" type="application/x-shockwave-flash"><param name="movie" value="/javascript/flowplayer-3.2.15.swf"><param name="allowfullscreen" value="true"><param name="flashvars" value="config={\'playlist\':[\'../../images/global/video-posters/' + moduleContentMedia + "_poster.jpg',{'url':'http://81916b243be118d063e2-42c80eda4617fb6bc414dcba3952a512.r38.cf1.rackcdn.com/" + moduleContentMedia + ".mp4', 'autoPlay':false, 'autoBuffering':true}],'play':{'opacity':0}}\"></object></video>"; */
				$(".module-main-content").html(videoContent);
			}
		}
	}
	$(".open-module").click(function() {
		kitchenAidModule();
	});
	$(".carousel-item img").click(function() {
		updateModuleContent(this);
	});
	$(".product-image img").click(function() {
		updateModuleContent(this);
	});
	$(".module-background").click(function() {
		$(".module-main-content").html(" ");
		$(".module-container").css({
			display: "none"
		});
	});
	$(".module-close").click(function() {
		$(".module-main-content").html(" ");
		$(".module-container").css({
			display: "none"
		});
	});
	$(".product_detail_page .module-main-content img").mouseover(function() {
		zoomIn(".product_detail_page .module-main-content img");
	});
	$("#product_help_tabs_menu a").click(function() {
		return false;
	});
	$("#product_help_tabs_menu li").click(function() {
		var optionName = $(this).attr("id");
		var contentDivName = optionName.replace("_tab", "");
		$(".product_help_tab_section.selected").removeClass("selected");
		$("#" + contentDivName + ".product_help_tab_section").addClass("selected");
	});
	var defaultImageHeight = $(".product_detail_page .module-main-content img").height();
	var defaultImageWidth = $(".product_detail_page .module-main-content img").width();
	$(".product_detail_page .module-main-content img").dblclick(function() {
		zoomIn(".product_detail_page .module-main-content img");
	});
	kitchenAidCarousel("product-carousel", 5, 1);
	kitchenAidCarousel("module-carousel", 9, 1);
	$("#product_tabs_menu li a").click(function(e) {
		e.preventDefault();
		var selectedSection = $(this).attr("id").replace("_btn", "");
		$(".product_tabs_menu li").removeClass("selected");
		$(".product_tab_section").removeClass("selected");
		$("#" + selectedSection + "_tab").addClass("selected");
		$("#" + selectedSection + ".product_tab_section").addClass("selected");
	});
}

function kitchenAidCarousel(carouselName, showItems, scrollAmount) {
	$(".carousel-previous").removeClass("active");
	$("#carousel-previous").removeClass("active");
	$(".carousel-next").addClass("active");
	$("#carousel-next").addClass("active");
	if ($("#" + carouselName).length >= 0) {
		var visibleItemsInCarousel = showItems;
		var scrollItemCount = scrollAmount;
		var carouselItemAmount = $("#" + carouselName + " .carousel-item").length;
		if ($("#main-container").hasClass("kitchen-galleries")) {
			var carouselItemWidth = $("#" + carouselName + "  .carousel-item").css("width").replace("px", " ");
		} else {
			var carouselItemWidth = 72;
		}
		var totalCarouselWidth = carouselItemAmount * carouselItemWidth;
		var carouselVisibleWidth = $("#" + carouselName + " .carousel-visible-items").width();
		$("#" + carouselName + " .carousel-visible-items").width(carouselItemWidth * visibleItemsInCarousel);
		$("#" + carouselName + " .carousel-items").width(carouselItemWidth * carouselItemAmount);
		$("#" + carouselName).width((carouselItemWidth * visibleItemsInCarousel) + 40);
		if ($("#" + carouselName + " .carousel-item").length <= visibleItemsInCarousel || $("#" + carouselName + " .carousel-item").length <= 0) {
			$("#" + carouselName + " .carousel-controls").css({
				visibility: "hidden"
			});
		}
		$("#" + carouselName + " #carousel-next").click(function() {
			var carouselPosition = $("#" + carouselName + " .carousel-items").position().left;
			var carouselFullWidth = $("#" + carouselName + " .carousel-items").width();
			var carouselItemWidth = $("#" + carouselName + " .carousel-items li").width();
			var scrollDistance = carouselItemWidth * (scrollItemCount);
			var carouselPosition = $("#" + carouselName + " .carousel-items").position().left;
			var startingVisibleAmount = parseInt($(".pagination .visible-amount").html(), 1);
			var changeVisibleAmountBy = parseInt(scrollAmount, 1);
			var nextVisibleAmount = (startingVisibleAmount + changeVisibleAmountBy);
			var total = (carouselFullWidth * (0 - 1) + $("#" + carouselName + " .carousel-visible-items").width() + 1);
			if (carouselPosition >= total) {
				if ($("#" + carouselName + " .carousel-items").is(":animated")) {
					return false;
				} else {
					$("#" + carouselName + " .carousel-items").animate({
						left: "-=" + (carouselItemWidth * scrollItemCount)
					});
					$(".pagination .visible-amount").html(nextVisibleAmount);
					$("#" + carouselName + " #carousel-previous").addClass("active");
					$("#" + carouselName + " #carousel-next").addClass("active");
				}
				if (-(carouselPosition) == (-(total) + 1) - carouselItemWidth) {
					$("#" + carouselName + " #carousel-next").removeClass("active");
					$("#" + carouselName + " #carousel-previous").addClass("active");
				}
			}
		});
		$("#" + carouselName + " #carousel-previous").click(function() {
			var carouselPosition = $("#" + carouselName + " .carousel-items").position().left;
			var startingVisibleAmount = parseInt($(".pagination .visible-amount").html(), 1);
			var changeVisibleAmountBy = parseInt(scrollAmount, 1);
			var nextVisibleAmount = (startingVisibleAmount - changeVisibleAmountBy);
			var carouselFullWidth = $("#" + carouselName + " .carousel-items").width();
			var carouselItemWidth = $("#" + carouselName + " .carousel-items li").width();
			carouselItemWidthX = $("#" + carouselName + " .carousel-items li").width();
			if ($(".module-container").css("display") == "block") {
				carouselItemWidthX = 72;
			}
			var scrollDistance = carouselItemWidth * (scrollItemCount);
			console.log("carousel itemWidth: " + carouselItemWidth);
			console.log("carousel position: " + (-(carouselPosition)));
			if (carouselPosition <= (0 - 1)) {
				if ($("#" + carouselName + " .carousel-items").is(":animated")) {
					return false;
				} else {
					$("#" + carouselName + " .carousel-items").animate({
						left: "+=" + (carouselItemWidth * scrollItemCount)
					});
					$(".pagination .visible-amount").html(nextVisibleAmount);
					$("#" + carouselName + " #carousel-next").addClass("active");
					$("#" + carouselName + " #carousel-previous").addClass("active");
				}
				if (-(carouselPosition) == carouselItemWidthX) {
					$("#" + carouselName + " #carousel-next").addClass("active");
					$("#" + carouselName + " #carousel-previous").removeClass("active");
				}
			}
		});
		$(".pagination .visible-amount").html(visibleItemsInCarousel);
		$(".pagination .total-amount").html(carouselItemAmount);
	}
}
var items = $(".module-item").click(function() {
	var index = items.index(this);
	$(".category-overview-content").css("visibility", "hidden");
	$(".category-overview-content").eq(index).css("visibility", "visible");
});

function kitchenAidModule() {
	var backgroundDisplay = $(".module-background");
	var documentHeight = $(document).height();
	$(".module-content").css({
		top: ($(document).scrollTop() + 50) + "px"
	});
	$(backgroundDisplay).height(documentHeight);
	$(".module-container").css({
		display: "block"
	});
	$(".module-background").click(function() {
		$(".module-container").css({
			display: "none"
		});
	});
	$(".module-close").click(function() {
		$(".module-container").css({
			display: "none"
		});
	});
}
$(document).ready(function() {
	$(".carousel-item").click(function() {
		$("#module-carousel .carousel-controls").css({
			visibility: "visible"
		});
		$("#module-carousel .carousel-item").css("width").replace("px", " ");
		kitchenAidCarousel("module-carousel", 8, 1);
	});
});

function removeOnethumblight() {
	if ($(".caspers #product-carousel .carousel-items").length <= 1) {
		$(".caspers #product-carousel").css("display", "none");
	}
}