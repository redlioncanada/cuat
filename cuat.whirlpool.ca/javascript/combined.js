$(document).ready(function() {
	if ($("body").hasClass("product_detail") || $("body").hasClass("product_detail_page")) {
		initPDP();
	}
	bindAfterRefresh();
	$(".list_tabs_overview a").click(tabSelect);
	$("a.toggleText").click(showText);
	$("ul.results-view li div a").click(linkSelect);
	globalNav_set_activeTab();
	prodLastCol();
});
function initPDP() {
	window.onscroll = function() {
		scrollBox();
	};
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
	function scrollBox() {
		var addToCartBoxTop = ($(document).scrollTop() - 175);
		var moduleContentTop = ($(document).scrollTop() + 40);
		var addToCartBoxHeight = ($("#cta-content").height() - 100);
		var bottomScrollBoundary = $(".main-column").height() - addToCartBoxHeight;
		if ($(document).scrollTop() >= 195 && $(document).scrollTop() <= $(".main-column").height()) {
			$("#cta-content").css({
				"margin-top": addToCartBoxTop
			});
		} else {
			if ($(document).scrollTop() <= 194) {
				$("#cta-content").css({
					"margin-top": "0px"
				});
			}
		}
		if ($(document).scrollTop() >= bottomScrollBoundary) {
			$("#cta-content").css({
				"margin-top": ($(".main-column").height() - (addToCartBoxHeight * 1.5))
			});
		}
	}
	function updateModuleContent(selector) {
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
				var videoContent = '<video controls="controls" preload="auto" autoplay="autoplay" width="650" height="435" poster="/images/video/' + moduleContentMedia + '_poster.jpg"><source src="http://81916b243be118d063e2-42c80eda4617fb6bc414dcba3952a512.r38.cf1.rackcdn.com/' + moduleContentMedia + '.ogg" type="video/ogg"></source><source src="http://81916b243be118d063e2-42c80eda4617fb6bc414dcba3952a512.r38.cf1.rackcdn.com/' + moduleContentMedia + '.mp4" type="video/mp4"></source><source src="http://81916b243be118d063e2-42c80eda4617fb6bc414dcba3952a512.r38.cf1.rackcdn.com/' + moduleContentMedia + '.webm" type="video/webm"></source><object id="flowplayer" width="650" height="435" data="/javascript/flowplayer-3.2.15.swf" type="application/x-shockwave-flash"><param name="movie" value="/javascript/flowplayer-3.2.15.swf"><param name="allowfullscreen" value="true"><param name="flashvars" value="config={\'playlist\':[\'../../images/global/video-posters/' + moduleContentMedia + "_poster.jpg',{'url':'http://81916b243be118d063e2-42c80eda4617fb6bc414dcba3952a512.r38.cf1.rackcdn.com/" + moduleContentMedia + ".mp4', 'autoPlay':false, 'autoBuffering':true}],'play':{'opacity':0}}\"></object></video>";
				$(".module-main-content").html(videoContent);
			}
		}
	}
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
}
function bindAfterRefresh() {
	$("div.close_tab a.close").click(closeMasthead);
	$("div.close_tab a.open").click(openMasthead);
	$(".tabs_ul a").click(tabSelect);
}
function closeMasthead(e) {
	e.preventDefault();
	$("#tabdivContainer").toggle();
	$(".close_tab").toggleClass("closed");
	$(this).hide();
	$(this).next().show();
}
function openMasthead(e) {
	e.preventDefault();
	$("#tabdivContainer").toggle();
	$(".close_tab").toggleClass("closed");
	$(this).hide();
	$(this).prev().show();
}
function tabSelect(e) {
	e.preventDefault();
	var div = $(this).attr("href").match(/#(.*)$/)[1];
	$(".current_tab", $(this).closest("ul")).removeClass("current_tab");
	$(this).closest("li").addClass("current_tab");
	$("div.tabdiv.selected", $(this).closest("div.tabContainer")).removeClass("selected");
	$("#" + div).addClass("selected");
}
function prodLastCol() {}
var activeTab_class = "nav_currentTab";
function gobalNav_remove_ActiveTabs() {
	var oldTabs = $("li.current_tab");
	oldTabs.each(function() {
		$(this).removeClass("current_tab");
	});
	var tabs = $("li." + activeTab_class);
	tabs.each(function() {
		$(this).removeClass(activeTab_class);
	});
}
function globalNav_set_activeTab() {
	var current_url = $(location).attr("href");
	var current_page = 0;
	var oPages = new Array();
	oPages.laundry = "whirlpool.com/Laundry-1";
	oPages.kitchen = "whirlpool.com/Kitchen-1";
	oPages.wholehome = "whirlpool.com/Home_Solutions-1";
	oPages.wholehome_2 = "whirlpool.com/Whole_Home-1";
	oPages.filters_accesories = "whirlpool.com/Accessories-1";
	oPages.ownercenter = "whirlpool.com/service_support";
	oPages.waterfilters = "whirlpool.com/water-filters";
	oPages.filterfinder = "whirlpool.com/filter-finder";
	oPages.filters_accesories_2 = "whirlpool.com/accessories-1";
	oPages.waterheaters = "whirlpool.com/jump-pages_water-heaters";
	oPages.watersofteners = "whirlpool.com/jump-pages_water-softeners";
	oPages.waterfiltration = "whirlpool.com/jump-pages_water-filtration-systems";
	oPages.hvac = "whirlpool.com/jump-pages_hvac";
	oPages.airtreatment = "whirlpool.com/jump-pages_air-treatment";
	oPages.support = "whirlpool.com/jump-pages_replacement-parts.content.html";
	oPages.support_2 = "whirlpool.com/jump-pages_service-plan.content.html";
	current_url.search(oPages[0]);
	var page;
	var val;
	for (page in oPages) {
		val = current_url.search(oPages[page]);
		console.log("val: " + val + "- Page:" + page + " -  current_page: " + current_page);
		if (val > 0) {
			current_page = page;
			console.log("val: " + val + "- Page:" + page + " -  current_page: " + current_page);
			break;
		}
	}
	switch (current_page) {
	case "support":
		gobalNav_remove_ActiveTabs();
		$("#ownercenter_btn").closest("li").addClass(activeTab_class);
		break;
	case "support_2":
		gobalNav_remove_ActiveTabs();
		$("#ownercenter_btn").closest("li").addClass(activeTab_class);
		break;
	case "laundry":
		gobalNav_remove_ActiveTabs();
		$("#laundry_btn").closest("li").addClass(activeTab_class);
		break;
	case "kitchen":
		gobalNav_remove_ActiveTabs();
		$("#kitchen_btn").closest("li").addClass(activeTab_class);
		break;
	case "wholehome":
		gobalNav_remove_ActiveTabs();
		$("#wholehome_btn").closest("li").addClass(activeTab_class);
		break;
	case "wholehome_2":
		gobalNav_remove_ActiveTabs();
		$("#wholehome_btn").closest("li").addClass(activeTab_class);
		break;
	case "filters_accesories":
		gobalNav_remove_ActiveTabs();
		$("#accessories_btn").closest("li").addClass(activeTab_class);
		break;
	case "ownercenter":
		gobalNav_remove_ActiveTabs();
		$("#ownercenter_btn").closest("li").addClass(activeTab_class);
		break;
	case "waterfilters":
		gobalNav_remove_ActiveTabs();
		$("#accessories_btn").closest("li").addClass(activeTab_class);
		break;
	case "filterfinder":
		gobalNav_remove_ActiveTabs();
		$("#accessories_btn").closest("li").addClass(activeTab_class);
		break;
	case "filters_accesories_2":
		gobalNav_remove_ActiveTabs();
		$("#accessories_btn").closest("li").addClass(activeTab_class);
		break;
	case "waterheaters":
		gobalNav_remove_ActiveTabs();
		$("#wholehome_btn").closest("li").addClass(activeTab_class);
		break;
	case "watersofteners":
		gobalNav_remove_ActiveTabs();
		$("#wholehome_btn").closest("li").addClass(activeTab_class);
		break;
	case "waterfiltration":
		gobalNav_remove_ActiveTabs();
		$("#wholehome_btn").closest("li").addClass(activeTab_class);
		break;
	case "hvac":
		gobalNav_remove_ActiveTabs();
		$("#wholehome_btn").closest("li").addClass(activeTab_class);
		break;
	case "airtreatment":
		gobalNav_remove_ActiveTabs();
		$("#wholehome_btn").closest("li").addClass(activeTab_class);
		break;
	default:
		gobalNav_remove_ActiveTabs();
	}
}
function linkSelect(e) {
	e.preventDefault();
	if ($("li.non-border1").hasClass("linkSelected")) {
		$("li.non-border1").removeClass("linkSelected");
		$("li.non-border2").addClass("linkSelected");
	} else {
		$("li.non-border2").removeClass("linkSelected");
		$("li.non-border1").addClass("linkSelected");
	}
}
function showText(e) {
	e.preventDefault();
	var div = $(this).attr("href");
	$("div.textDiv.selected", $(this).closest("div.textContainer")).removeClass("selected");
	$(div).addClass("selected");
}
var timeout = 500;
var closetimer = 0;
var miniCartclosetimer = 0;
var favoritesclosetimer = 0;
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
	document.onclick = menuClose;
	document.onclick = miniCartClose;
	document.onclick = favoritesClose;
	menuClose();
	miniCartClose();
	favoritesClose();
	$("#laundry_btn").bind("mouseover", {
		btn: "#laundry_btn",
		menu: "#laundry_menu"
	}, menuOpen);
	$("#kitchen_btn").bind("mouseover", {
		btn: "#kitchen_btn",
		menu: "#kitchen_menu"
	}, menuOpen);
	$("#wholehome_btn").bind("mouseover", {
		btn: "#wholehome_btn",
		menu: "#wholehome_menu"
	}, menuOpen);
	$("#accessories_btn").bind("mouseover", {
		btn: "#accessories_btn",
		menu: "#accessories_menu"
	}, menuOpen);
	$("#ownercenter_btn").bind("mouseover", {
		btn: "#ownercenter_btn",
		menu: "#ownercenter_menu"
	}, menuOpen);
	$("#miniCart_btn").bind("mouseover", miniCartOpen);
	$("#favorites_btn").bind("mouseover", favoritesOpen);
	$("#laundry_menu").bind("mouseleave", {
		btn: "#laundry_btn",
		menu: "#laundry_menu"
	}, menuTimer);
	$("#kitchen_menu").bind("mouseleave", {
		btn: "#kitchen_btn",
		menu: "#kitchen_menu"
	}, menuTimer);
	$("#wholehome_menu").bind("mouseleave", {
		btn: "#wholehome_btn",
		menu: "#wholehome_menu"
	}, menuTimer);
	$("#accessories_menu").bind("mouseleave", {
		btn: "#accessories_btn",
		menu: "#accessories_menu"
	}, menuTimer);
	$("#ownercenter_menu").bind("mouseleave", {
		btn: "#ownercenter_btn",
		menu: "#ownercenter_menu"
	}, menuTimer);
	$("#minShoppingCartPopup").bind("mouseleave", miniCartTimer);
	$("#favoritesPopup").bind("mouseleave", favoritesTimer);
	$("#search-text").searchClear();
});
function menuOpen(eventObject) {
	menuClose();
	miniCartClose();
	favoritesClose();
	$(eventObject.data.menu).show();
	$(eventObject.data.btn).addClass("on");
	menuCancelTimer();
}
function menuClose() {
	$("#laundry_menu").hide();
	$("#kitchen_menu").hide();
	$("#wholehome_menu").hide();
	$("#accessories_menu").hide();
	$("#ownercenter_menu").hide();
	$("#laundry_btn").removeClass("on");
	$("#kitchen_btn").removeClass("on");
	$("#wholehome_btn").removeClass("on");
	$("#accessories_btn").removeClass("on");
	$("#ownercenter_btn").removeClass("on");
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
function miniCartOpen(eventObject) {
	miniCartClose();
	menuClose();
	favoritesClose();
	$("#minShoppingCartPopup").show();
	miniCartCancelTimer();
}
function miniCartClose() {
	$("#minShoppingCartPopup").hide();
}
function miniCartTimer() {
	miniCartclosetimer = window.setTimeout(miniCartClose, timeout);
}
function miniCartCancelTimer() {
	if (miniCartclosetimer) {
		window.clearTimeout(miniCartclosetimer);
		miniCartclosetimer = null;
	}
}
function favoritesOpen(eventObject) {
	miniCartClose();
	menuClose();
	favoritesClose();
	$("#favoritesPopup").show();
	favoritesCancelTimer();
}
function favoritesClose() {
	$("#favoritesPopup").hide();
}
function favoritesTimer() {
	favoritesclosetimer = window.setTimeout(favoritesClose, timeout);
}
function favoritesCancelTimer() {
	if (favoritesclosetimer) {
		window.clearTimeout(favoritesclosetimer);
		favoritesclosetimer = null;
	}
}
$.fn.searchClear = function() {
	return this.focus(function() {
		if (this.value == this.defaultValue) {
			this.value = "";
		}
	}).blur(function() {
		if (!this.value.length) {
			this.value = this.defaultValue;
		}
	});
};
var timeout = 500;
var closetimer = 0;
var colorClosetimer = 0;
var ddmenuitem = 0;
var productFlyout;
var unique_tooltip = null;
var productCarouselVisible = 0;
var recommendCarouselVisible = 0;
var filteredCarouselVisible = 0;
var productTooltipVisible = 0;
var productButton = "unset";
var productTooltip = "unset";
var sharePopupVisible = 0;
var myl = null;
var anchorName = document.location.hash.substring(1);
function myAccountMenu() {
	var htmlText = $(this).html();
	if (htmlText == "Recent Orders") {
		if ($(this).hasClass("expanded")) {
			$(this).parent().removeClass("expanded");
			$(this).removeClass("expanded");
		} else {
			$(this).addClass("expanded");
			$(this).parent().addClass("expanded");
		}
		$(".order_status_table").toggle();
	} else {
		if (htmlText == "Products Recently Added to Wishlist") {
			if ($(this).hasClass("expanded")) {
				$(this).parent().removeClass("expanded");
				$(this).removeClass("expanded");
			} else {
				$(this).addClass("expanded");
				$(this).parent().addClass("expanded");
			}
			$("#four-grid").toggle();
		} else {
			exit;
		}
	}
}
function toggleClass(e, add, remove) {
	e.preventDefault();
	$(".body588").removeClass(remove);
	$(".body588").addClass(add);
}
function showInfo(e, classy, state) {
	e.preventDefault();
	$(".personal-information").removeClass(classy);
	$(".form-div").addClass(classy);
	$(".form-div").addClass(state);
}
var productListEspot = $(".productlist-page #main_content_wrapper .main-espot").detach();
productListEspot.insertBefore(".productlist-page #main_content_wrapper .cl-side");
BindCompareCheckBoxes();
if (!$("#page").is(".product_list_accessories_page")) {
	$("a.quick_view_hover").hover(function() {
		$(this).find("div.quick_view_hover").show();
	}, function() {
		$(this).find("div.quick_view_hover").hide();
	});
}
function priceSlider(minVal, maxVal, origMinVal, origMaxVal) {
	if (!origMinVal) {
		origMinVal = minVal;
	}
	if (!origMaxVal) {
		origMaxVal = maxVal;
	}
	var intOrigMinVal = parseInt(origMinVal);
	var intOrigMaxVal = parseInt(origMaxVal);
	$slider = $("#slider");
	$amountMin = $("#amountMin");
	$amountMax = $("#amountMax");
	$milestone1 = $("#milestone1");
	$slider.slider({
		range: true,
		min: parseInt(origMinVal),
		max: parseInt(origMaxVal),
		values: [parseInt(minVal), parseInt(maxVal)],
		slide: function(event, ui) {
			$amountMin.val(ui.values[0]);
			$amountMax.val(ui.values[1]);
			$(".ui-slider-range").css("background-image", imageUrl);
		},
		stop: function(event, ui) {
			imageUrl = $(".ui-slider-range").css("background-image").replace("_over", "");
			$(".ui-slider-range").css("background-image", imageUrl);
			imageUrl = $(".ui-slider-range").css("background-image").replace(".png", "_over.png");
			EndecaHelperJS.refreshProductsByPriceRange(ui.values[0], ui.values[1]);
		}
	});
	imageUrl = $(".ui-slider-range").css("background-image").replace(".png", "_over.png");
	$amountMin.val($slider.slider("values", 0));
	$milestone1.html(intOrigMinVal);
	$amountMax.val($slider.slider("values", 1));
	if (isNaN($slider.slider("values", 0)) || isNaN($slider.slider("values", 1))) {
		showHide("", ".min-max");
	}
	if (isNaN(intOrigMinVal)) {
		showHide("", "#slider");
		showHide("", "#price-milestone-wrapper");
	}
	var children = $("#price-milestone-wrapper").children().size();
	var mileStoneValue = new Number(0);
	var newPos = 0;
	var range = intOrigMaxVal - intOrigMinVal;
	var newValue = 0;
	for (i = 1; i <= children; i++) {
		if (i != 1) {
			mileStoneValue += (1 / (children - 1));
			newValue = Number(intOrigMinVal + (range * mileStoneValue)).toFixed();
			$("#milestone" + i).html(newValue);
		}
	}
	$("#amountMin").blur(function() {
		$slider.slider("values", 0, Math.min($slider.slider("values", 1), parseInt($(this).val())));
		$(this).val(Math.min($slider.slider("values", 1), parseInt($(this).val())));
		EndecaHelperJS.refreshProductsByPriceRange($slider.slider("values", 0), $slider.slider("values", 1));
	});
	$("#amountMax").blur(function() {
		$slider.slider("values", 1, Math.max($slider.slider("values", 0), parseInt($(this).val())));
		$(this).val(Math.max($slider.slider("values", 0), parseInt($(this).val())));
		EndecaHelperJS.refreshProductsByPriceRange($slider.slider("values", 0), $slider.slider("values", 1));
	});
}
$(".PersonalInformationPage a.edit-button").click(function(e) {
	showInfo(e, "showdiv", "");
});
$(".PersonalInformationPage a.update_link").click(function(e) {
	showInfo(e, "showdiv", "error");
});
$("#header .language-select").click(function() {
	if ($("#header .language-list").is(":visible")) {
		$("#header .language-list").fadeOut("fast");
	} else {
		$("#header .language-list").fadeIn("fast");
	}
	return false;
});
$("#header .language-list ul li a").click(function() {
	var lang = $(this).html();
	$("#header .language-select .current-language").html(lang);
	$("#header .language-list").fadeOut("fast");
	return false;
});
$("#header .nav .tag-line").bind("mouseenter", function() {
	closeAll();
});
$("#dropdown_1_a.adress-select").toggle(function() {
	$("#dropdown_1.adress-list").show();
	return false;
}, function() {
	$("#dropdown_1.adress-list").hide();
	return false;
});
$("#dropdown_1_a.adress-select ul li a").toggle(function() {
	$("#dropdown_1.adress-list").show();
	return false;
}, function() {
	$("#dropdown_1.adress-list").hide();
	return false;
});
$("#popup-added-to-cart a").click(function() {
	$("#popup-added-to-cart").fadeOut("fast");
	return false;
});
$("#box .choose-a-coupon").click(function() {
	$("#popup-choose-coupon").fadeIn("fast");
	$("#popup-choose-coupon").center();
	return false;
});
$("#popup-choose-coupon a").click(function() {
	$("#popup-choose-coupon").fadeOut("fast");
	return false;
});
$("#box .shipping-costs-container .shipping-costs-link").click(function() {
	$("#popup-shipping-costs").fadeIn("fast");
	$("#popup-shipping-costs").center();
	return false;
});
$("#popup-shipping-costs .close").click(function() {
	$("#popup-shipping-costs").fadeOut("fast");
	return false;
});
$("#box .promo-codes .ok").click(function() {
	$("#box .promo-codes .error-message").html("This code is not valid");
	return false;
});
$("#returning-customer-container .sign-in").click(function() {
	$("#returning-customer-container .email-error").slideDown("fast");
	$("#returning-customer-container .password-error").slideDown("fast");
	return false;
});
$("#order_details .increment, #order_details .decrement").click(function() {
	$("#popup-quantity-error").fadeIn("fast");
	$("#popup-quantity-error").center();
});
$("#popup-quantity-error .close").click(function() {
	$("#popup-quantity-error").fadeOut("fast");
	return false;
});
$(".table-compare-products .section-toggle").toggle(function() {
	var section = $(this).attr("section");
	$(".table-compare-products ." + section).fadeOut("fast");
	$(this).addClass("collapsed");
	var $dif = $(this).find("span.differences").fadeIn("fast");
	return false;
}, function() {
	var section = $(this).attr("section");
	$(".table-compare-products ." + section).fadeIn("fast");
	$(this).removeClass("collapsed");
	var $dif = $(this).find("span.differences").fadeOut("fast");
	return false;
});
$(".table-compare-products .remove").click(function() {
	var col = $(this).attr("column");
	$(".table-compare-products ." + col).fadeOut("fast");
});
$(".search-results-page .button-compare").click(function() {
	var compares = "";
	$(".search-results-page .compare-checkbox:checked").each(function(index) {
		if (compares.length > 0) {
			compares += "&";
		}
		compares += "compare[]=" + $(this).attr("sku");
	});
	window.location = "CompareProductsDisplay.html?" + compares;
	return false;
});
function closeAll() {
	$(".selected").removeClass("selected");
	$(".open").fadeOut("fast");
}
function positionMiniCart() {
	var pos = $("#header .header_line2 a.popUpLinkHover").offset();
	if (pos) {}
}
$(window).resize(function() {
	positionMiniCart();
});
function copyAddress(e) {
	if ($(this).attr("checked")) {
		var source = $("#my_account_billing input");
		var dest = $("#my_account_shipping input");
		for (var i = 0; i < source.length - 1; i++) {
			$(dest[i + 1]).val($(source[i]).val());
		}
		var source = $("#my_account_billing select");
		var dest = $("#my_account_shipping select");
		for (var i = 0; i < source.length; i++) {
			$(dest[i]).val($(source[i]).val());
		}
	}
}
function colorPicker(e) {
	selectPic(e, this, false);
	var text = $(this).children("img").attr("alt");
	$(this).closest("ul").siblings("p.selected_color").html(text);
}
function selectPic(e, obj, flag) {
	e.preventDefault();
	var c = $(obj).attr("className");
	c = c.split(" ");
	var i = 0;
	while (c[i].indexOf("src|") == -1) {
		i++;
	}
	c = c[i].split("|");
	$(c[3]).attr("src", c[1]);
	if (!flag) {
		$("#large img").attr("src", c[1].replace(".jpg", "_zoom.jpg"));
	}
}
function showHide(show, hide) {
	$(show).css("display", "block");
	$(hide).css("display", "none");
}
var glossaryPos;
function glossaryPopup(storeId, catalogId, langId, term, obj) {
	var link = "/webapp/wcs/stores/servlet/WHRGlossaryPopupDisplayView?storeId={0}&catalogId={1}&langId={2}&term={3}";
	link = link.replace("{0}", storeId).replace("{1}", catalogId).replace("{2}", langId).replace("{3}", term);
	glossaryPos = $(obj).offset();
	if ($("#question-tooltip").length > 0) {
		$("#question-tooltip").remove();
	}
	$.ajax({
		url: link,
		success: glossaryPopupSuccess
	});
	return false;
}
function glossaryPopupSuccess(data, textStatus, xhr) {
	$("#page").append(data + " - " + glossaryPos.top);
	$("#question-tooltip").css({
		top: glossaryPos.top - $("#page").position().top + "px",
		left: glossaryPos.left - $("#page").position().left + "px"
	});
	$("#question-tooltip .closeLink").click(function() {
		$("#question-tooltip").fadeOut("fast");
		return false;
	});
	$("#question-tooltip").fadeIn("fast");
}
function tooltipOpen(eventObject) {
	tooltipClose();
	var offest_adjust = 80;
	if (($(this).hasClass("product_tooltip")) || ($(this).hasClass("product_tooltip2"))) {
		unique_tooltip = "#" + this.id;
		var offest_adjust = 0;
	} else {
		unique_tooltip = "#tooltip_" + this.id.substr(4);
	}
	$(unique_tooltip).show();
	var posX = $(this).offset().left;
	var posY = $(this).offset().top - offest_adjust;
	$(unique_tooltip).css("top", posY);
	$(unique_tooltip).css("left", posX);
	tooltipCancelTimer();
}
function tooltipClose() {
	$(".product_tooltip").hide();
	$(".product_tooltip2").hide();
	unique_tooltip = null;
}
function tooltipTimer() {
	closetimer = window.setTimeout(tooltipClose, timeout);
}
function tooltipCancelTimer() {
	if (closetimer) {
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}
function colorTooltipOpen(eventObject) {
	colorTooltipClose();
	var offest_adjust_y = 60;
	var offest_adjust_x = 41;
	if ($(this).hasClass("color_tooltip")) {
		unique_tooltip = "#" + this.id;
		offest_adjust_y = 0;
		offest_adjust_x = 0;
	} else {
		unique_tooltip = "#tooltip_color_" + this.id.substr(13);
	}
	$(unique_tooltip).show();
	var posX = $(this).offset().left - offest_adjust_x;
	var posY = $(this).offset().top - offest_adjust_y;
	$(unique_tooltip).css("top", posY);
	$(unique_tooltip).css("left", posX);
	colorTooltipCancelTimer();
}
function colorTooltipClose() {
	$(".color_tooltip").hide();
	unique_tooltip = null;
}
function colorTooltipTimer() {
	colorClosetimer = window.setTimeout(colorTooltipClose, timeout);
}
function colorTooltipCancelTimer() {
	if (colorClosetimer) {
		window.clearTimeout(colorClosetimer);
		closetimer = null;
	}
}
function BindCompareCheckBoxes() {
	$("#page.productlist-page .results-lists .product-container .product-pricegroup .compare-product .compare-product-chk").click(function() {
		$(".product-list-header-controls .product-list-header .compare-controls ul li div.compare-prod").removeClass("checked").addClass("unchecked");
		var count = 0;
		$("#page.productlist-page .results-lists .product-container .product-pricegroup .compare-product .compare-product-chk").each(function(index) {
			if ($(this).attr("checked") == true) {
				count++;
				var checkbox = $(".product-list-header-controls .product-list-header .compare-controls ul li .unchecked:first");
				if (checkbox) {
					checkbox.removeClass("unchecked").addClass("checked");
					checkbox.attr("sku", $(this).attr("sku"));
				}
				checkbox = $(".product-list-header-controls .product-list-header.list-bottom .compare-controls ul li .unchecked:first");
				if (checkbox) {
					checkbox.removeClass("unchecked").addClass("checked");
					checkbox.attr("sku", $(this).attr("sku"));
				}
				$(".product-list-header-controls .product-list-header .compare-controls .compare-link .count").html(count);
			}
		});
		if (count == 0) {
			$(".product-list-header-controls .product-list-header .compare-controls .compare-link .count").html("");
		}
	});
}
var recommend_bg = "assets/images/bg_popup_green.png";
var recommend_border = "1px solid #62ac39";
function toggleFavorite(e) {
	e.preventDefault();
	$(this).css("background-image", "url(assets/images/btn_saved_favorites.png)");
}
function ToggleSharePopup() {
	$("#sharePopup").toggle();
	return false;
}
function showHide(showDiv, hideDiv) {
	$(showDiv).show();
	$(hideDiv).hide();
}
function tabToggle(eventObject) {
	$(eventObject.data.btn).siblings().removeClass("selected");
	$(eventObject.data.btn).removeClass("selected");
	$(eventObject.data.menu).siblings().removeClass("selected");
	$(eventObject.data.btn).removeClass("selected");
	$(eventObject.data.btn).addClass("selected");
	$(eventObject.data.menu).addClass("selected");
	return false;
}
function specOpen(eventObject) {
	$(eventObject.data.menu).slideToggle("fast");
	$(eventObject.data.btn).toggleClass("selected");
	return false;
}
function compare_specOpen(eventObject) {
	$(eventObject.data.menu).slideToggle("fast");
	$(eventObject.data.btn).parent().toggleClass("specs_header_open").toggleClass("specs_header_close");
	return false;
}
function moveProductPrice() {
	$(".accessories_item").each(function(index1, item1) {
		$(this).children(".product_price").appendTo($(this).children(".product_code"));
	});
}
function carouselToggle(eventObject) {
	$(eventObject.data.btn).hasClass("selected") ? carouselClose() : carouselOpen(eventObject);
	return false;
}
function carouselOpen(eventObject) {
	carouselClose();
	$(eventObject.data.btn).addClass("selected");
	if (eventObject.data.btn == "#recommend_carousel_tab") {
		$("#product_carousels_1").show();
		$("#product_carousels_1").addClass("recommend");
		$("#recommend_carousels").show();
	} else {
		if (eventObject.data.btn == "#search_carousel_tab") {
			$("#product_carousels_1").show();
			$("#search_carousels").show();
		} else {
			$("#product_carousels_2").show();
			$("#photo_carousels").show();
		}
	}
	return false;
}
function carouselClose() {
	$("#photos_carousel_tab").removeClass("selected");
	$("#recommend_carousel_tab").removeClass("selected");
	$("#search_carousel_tab").removeClass("selected");
	$("#product_carousels_1").removeClass("recommend");
	$("#recommend_carousels").hide();
	$("#search_carousels").hide();
	$("#photo_carousels").hide();
	$("#product_carousels_1").hide();
	$("#product_carousels_2").hide();
	return false;
}
function changeWhatYouLove() {
	$(".top_features").each(function() {});
}
function eliminatePairBorders() {
	$("#page.product_list_pair_page .product_list_table tr").each(function() {
		$(this).find("div.product_list_detail div.tbl_cell").filter(":even").css("border-right", "none");
	});
}
function createProductListByListPairBorders() {
	$("table#product_list_table").each(function() {
		$(this).find("div.product_list_detail").filter(":even").parent().css("border", "none");
		$(this).find("div.product_list_detail").filter(":even").css("border-top", "1px dotted #DDDDDD");
		$(this).find("div.product_list_detail").filter(":first").css("border-top", "none");
		$(this).find("div.product_list_detail").filter(":even").css("width", "100%");
	});
}
function compareTabClose() {
	$(".compare_product_list").addClass("closed");
	$("ul.tabs li").removeClass("selected");
}
function compareTabOpen(eventObject) {
	compareTabClose();
	$(eventObject.data.btn).parent().addClass("selected");
	$(eventObject.data.menu).removeClass("closed");
	return false;
}
function toggle_visibility(showDiv, hideDiv) {
	$(showDiv).show();
	$(hideDiv).hide();
}
function ff_openClose(theState) {
	if (theState == "close") {
		$("#Product_List_Masthead_closed").show();
		$("#Product_List_Masthead").hide();
		$("#page").addClass("bg_close").removeClass("bg_open");
	} else {
		$("#Product_List_Masthead_closed").hide();
		$("#Product_List_Masthead").show();
		$("#page").addClass("bg_open").removeClass("bg_close");
	}
}
function compare_openClose(specID) {
	var manip = $("#" + specID + " .filter_content");
	var opened = tb_branch + "images/icon_arrow_white_green_up.png";
	var closed = tb_branch + "images/icon_arrow_white_green_down.png";
	var btn = $(".list-close a.close");
	$(manip).toggle();
	if ( !! btn.css("background-image").match(opened)) {
		btn.css("background-image", "url('" + closed + "')");
	} else {
		if ( !! btn.css("background-image").match(closed)) {
			btn.css("background-image", "url('" + opened + "')");
		} else {
			btn.css("background-image", "url('" + closed + "')");
		}
	}
	scrollDiv();
}
function scrollDiv() {
	if ($(".product_list").length > 0) {
		$(".product_list").height($(window).height() - $(".product_list").position().top - parseInt($(".product_list").css("margin-top").replace("px", "")) - 5 + "px");
	}
}
function toggle_visibility(showDiv, hideDiv) {
	$(showDiv).show();
	$(hideDiv).hide();
}
function setButton_filterPromo(selectVal) {
	if (selectVal == "0") {
		$(".out_of_stock_filter_one_time").removeClass("selected");
		$(".out_of_stock_filter_frequency").addClass("selected");
		$(".add_to_cart_filter_one_time").addClass("selected");
		$(".add_to_cart_filter_frequency").removeClass("selected");
	} else {
		$(".out_of_stock_filter_one_time").addClass("selected");
		$(".out_of_stock_filter_frequency").removeClass("selected");
		$(".add_to_cart_filter_one_time").removeClass("selected");
		$(".add_to_cart_filter_frequency").addClass("selected");
	}
}
function setButton_plan(selectVal) {
	var elem = document.getElementById("submit_button");
	if (selectVal == "frequency") {
		elem.className = "disabled_button";
		elem.setAttribute("disabled", "TRUE");
	} else {
		elem.className = "enabled_button";
		elem.removeAttribute("disabled");
	}
}
function toggleReplacementCheck(elem) {
	var select = document.getElementById(elem.id + "_select");
	if (elem.checked) {
		select.removeAttribute("disabled");
	} else {
		select.setAttribute("disabled", "TRUE");
	}
}
function switchColor() {
	var current_color = "";
	var new_color = "";
	var color = "";
	var model_number = "";
	var img_src = "";
	var prod_title = "";
	for (i = 1; i <= 10; i++) {
		if ($("#color_selector").hasClass("color_" + i)) {
			current_color = "color_" + i;
		}
	}
	for (i = 1; i <= 10; i++) {
		if ($(this).hasClass("color_" + i)) {
			new_color = "color_" + i;
		}
	}
	if (current_color != new_color) {
		var color_details = $(this).attr("rel").split("|");
		color = color_details[0];
		model_number = color_details[1];
		img_src = color_details[2];
		prod_title = color_details[3];
		$("#color_selector").removeClass(current_color);
		$("#color_selector").addClass(new_color);
		$(".product_header .product_rating span.product_model_number").html(model_number);
		$("#main_product_image").attr("src", img_src);
		document.title = prod_title;
	}
	return false;
}
function switchProductPhoto() {
	$("#main_product_image").attr("src", $(this).attr("rel"));
	$("#photo_carousel_items a.product_photo").closest("li").removeClass("selected");
	$(this).closest("li").addClass("selected");
	return false;
}
function hideBillingAddressSection() {
	$("div#page.quick-checkout-address-page #WC_AjaxMyAccountQuickCheckoutProfileForm_div_36 input#SameShippingAndBillingAddress").click(function() {
		if ($("div#page.quick-checkout-address-page #WC_AjaxMyAccountQuickCheckoutProfileForm_div_36 input#SameShippingAndBillingAddress").attr("checked") == true) {
			$("div#page.quick-checkout-address-page #WC_AjaxMyAccountQuickCheckoutProfileForm_div_21").css("display", "none");
		} else {
			$("div#page.quick-checkout-address-page #WC_AjaxMyAccountQuickCheckoutProfileForm_div_21").css("display", "block");
		}
	});
}
function changeToCompareNow() {
	$("a.compare-add").hide();
	$("a.compare-now").show();
}
function changeToCompareNowMain() {
	$("#quickviewMainId a.compare-add").hide();
	$("#quickviewMainId a.compare-now").show();
}
function changeToCompareNowPaired() {
	$("#quickviewPairId a.compare-add").hide();
	$("#quickviewPairId a.compare-now").show();
}
function redoPhotoCarousel() {
	$("#photo_carousel").jCarouselLite({
		btnPrev: "#photo_carousel_prev",
		btnNext: "#photo_carousel_next",
		visible: 6,
		circular: false
	});
	$("#photos_carousel_btn").bind("click", {
		btn: "#photos_carousel_tab",
		menu: "#product_carousels_2"
	}, carouselToggle);
	$("a.product_photo").bind("click", switchProductPhoto);
	carouselClose();
	return false;
}
$(document).ready(function() {
	$("span.header").bind("click", myAccountMenu);
	$(".product_detail_page .product-carousel .carousel-item a").click(function(e) {
		selectPic(e, this);
	});
	$(".color-available li").click(colorPicker);
	$(".ContactUs .ok_button").click(function(e) {
		e.preventDefault();
		showHide(".contactus_form", "");
	});
	$(".ContactUs .send_request a").click(function(e) {
		e.preventDefault();
		showHide(".thank_submission", "#by_e-mail_box,#by_mail_box,#by_phone_box,.tittle_text,.contactus_form");
	});
	$("#SameShippingAndBillingAddress").click(copyAddress);
	$(".btn_edit").click(function() {
		$(".edit-form").show();
		$("#view-form").hide();
		$(".btn_remove").hide();
		$(".btn_edit").hide();
		$(".btn_update").show();
	});
	$(".btn_update").click(function() {
		$(".edit-form").hide();
		$("#view-form").show();
		$(".btn_remove").show();
		$(".btn_edit").show();
		$(".btn_update").hide();
	});
	$(".send_share_link").click(function() {
		$("#popup-send-to-friend").show();
		return false;
	});
	$("#page.glossary .category ul.category_item li a").click(function() {
		if ($(this).parent().hasClass("expanded")) {
			$(this).parent().removeClass("expanded");
			$(this).siblings(".glossary_content").slideUp("fast");
		} else {
			$(this).parent().addClass("expanded");
			$(this).siblings(".glossary_content").slideDown("fast");
		}
		return false;
	});
	$("#page.glossary #glossary a.open-all").click(function() {
		$("#page.glossary .category ul.category_item li").each(function() {
			if (!$(this).hasClass("expanded")) {
				$(this).addClass("expanded");
			}
			$("#page.glossary .category ul.category_item li .glossary_content").slideDown("fast");
		});
		return false;
	});
	$("#page.glossary #glossary a.close-all").click(function() {
		$("#page.glossary .category ul.category_item li").each(function() {
			if ($(this).hasClass("expanded")) {
				$(this).removeClass("expanded");
			}
			$("#page.glossary .category ul.category_item li .glossary_content").slideUp("fast");
		});
		return false;
	});
	if ($("body.product_detail_page").length != 0) {
		$("#recommend_carousel_1").jCarouselLite({
			btnPrev: "#recommend_carousel_prev_1",
			btnNext: "#recommend_carousel_next_1",
			visible: 3,
			circular: false
		});
		$("#recommend_carousel_2").jCarouselLite({
			btnPrev: "#recommend_carousel_prev_2",
			btnNext: "#recommend_carousel_next_2",
			visible: 2,
			circular: false
		});
		$("#search_carousel").jCarouselLite({
			btnPrev: "#search_carousel_prev",
			btnNext: "#search_carousel_next",
			visible: 6,
			circular: false
		});
		$("#photo_carousel").jCarouselLite({
			btnPrev: "#photo_carousel_prev",
			btnNext: "#photo_carousel_next",
			visible: 6,
			circular: false
		});
		carouselClose();
		$(".product_carousels").removeClass("loading");
	}
	$("#page.faqPage .open-link .open-a").click(function() {
		$("#page.faqPage .content-faq .faqList .faqItem .faqQuestion .faqAnswer").each(function() {
			if (!$(this).hasClass("expanded")) {
				$(this).addClass("expanded");
			}
			$("#page.faqPage .content-faq .faqList .faqItem .faqQuestion .faqAnswer").slideDown("fast");
		});
		return false;
	});
	$("#page.faqPage .close-link .close-a").click(function() {
		$("#page.faqPage .content-faq .faqList .faqItem .faqQuestion .faqAnswer").each(function() {
			if ($(this).hasClass("expanded")) {
				$(this).removeClass("expanded");
			}
			$("#page.faqPage .content-faq .faqList .faqItem .faqQuestion .faqAnswer").slideUp("fast");
		});
		return false;
	});
	$(".tooltip_source").bind("mouseover", tooltipOpen);
	$(".tooltip_source").bind("mouseleave", tooltipTimer);
	$(".product_tooltip").bind("mouseover", tooltipOpen);
	$(".product_tooltip").bind("mouseleave", tooltipTimer);
	$(".product_tooltip2").bind("mouseover", tooltipOpen);
	$(".product_tooltip2").bind("mouseleave", tooltipTimer);
	$(".swatch").bind("mouseover", colorTooltipOpen);
	$(".swatch").bind("mouseleave", colorTooltipTimer);
	$(".color_tooltip").bind("mouseover", colorTooltipOpen);
	$(".color_tooltip").bind("mouseleave", colorTooltipTimer);
	$("#color_selector a").bind("click", switchColor);
	$("a.product_photo").bind("click", switchProductPhoto);
	if (anchorName == "overview" || anchorName == "features" || anchorName == "specifications" || anchorName == "ratingsandreviews" || anchorName == "producthelp" || anchorName == "manualsandliterature" || anchorName == "partsandaccessories") {
		$("#product_tabs_menu li").removeClass("selected");
		$(".product_tab_section").removeClass("selected");
		$("#" + anchorName).addClass("selected");
		$("#" + anchorName + "_tab").addClass("selected");
	}
	$("a.share").bind("click", ToggleSharePopup);
	$("#overview_btn").bind("click", {
		btn: "#overview_tab",
		menu: "#overview"
	}, tabToggle);
	$("#features_sub_link").bind("click", {
		btn: "#features_tab",
		menu: "#features"
	}, tabToggle);
	$("#features_btn").bind("click", {
		btn: "#features_tab",
		menu: "#features"
	}, tabToggle);
	$("#specifications_btn").bind("click", {
		btn: "#specifications_tab",
		menu: "#specifications"
	}, tabToggle);
	$("#ratingsandreviews_btn").bind("click", {
		btn: "#ratingsandreviews_tab",
		menu: "#ratingsandreviews"
	}, tabToggle);
	$("#producthelp_btn").bind("click", {
		btn: "#producthelp_tab",
		menu: "#producthelp"
	}, tabToggle);
	$("#manualsandliterature_btn").bind("click", {
		btn: "#manualsandliterature_tab",
		menu: "#manualsandliterature"
	}, tabToggle);
	$("#partsandaccessories_btn").bind("click", {
		btn: "#partsandaccessories_tab",
		menu: "#partsandaccessories"
	}, tabToggle);
	$("#spec_header_1").bind("click", {
		btn: "#spec_header_1",
		menu: "#spec_1"
	}, specOpen);
	$("#spec_header_2").bind("click", {
		btn: "#spec_header_2",
		menu: "#spec_2"
	}, specOpen);
	$("#spec_header_3").bind("click", {
		btn: "#spec_header_3",
		menu: "#spec_3"
	}, specOpen);
	$("#spec_header_4").bind("click", {
		btn: "#spec_header_4",
		menu: "#spec_4"
	}, specOpen);
	$("#spec_header_5").bind("click", {
		btn: "#spec_header_5",
		menu: "#spec_5"
	}, specOpen);
	$("#spec_header_6").bind("click", {
		btn: "#spec_header_6",
		menu: "#spec_6"
	}, specOpen);
	$("#spec_header_7").bind("click", {
		btn: "#spec_header_7",
		menu: "#spec_7"
	}, specOpen);
	$("#spec_header_8").bind("click", {
		btn: "#spec_header_8",
		menu: "#spec_8"
	}, specOpen);
	$("#spec_header_9").bind("click", {
		btn: "#spec_header_9",
		menu: "#spec_9"
	}, specOpen);
	$("#spec_header_10").bind("click", {
		btn: "#spec_header_10",
		menu: "#spec_10"
	}, specOpen);
	$("#spec_header_11").bind("click", {
		btn: "#spec_header_11",
		menu: "#spec_11"
	}, specOpen);
	$("#spec_header_12").bind("click", {
		btn: "#spec_header_12",
		menu: "#spec_12"
	}, specOpen);
	$("#section_btn_1").bind("click", {
		btn: "#section_btn_1",
		menu: "#section_content_1"
	}, compare_specOpen);
	$("#section_btn_2").bind("click", {
		btn: "#section_btn_2",
		menu: "#section_content_2"
	}, compare_specOpen);
	$("#section_btn_3").bind("click", {
		btn: "#section_btn_3",
		menu: "#section_content_3"
	}, compare_specOpen);
	$("#section_btn_4").bind("click", {
		btn: "#section_btn_4",
		menu: "#section_content_4"
	}, compare_specOpen);
	$("#section_btn_5").bind("click", {
		btn: "#section_btn_5",
		menu: "#section_content_5"
	}, compare_specOpen);
	$("#section_btn_6").bind("click", {
		btn: "#section_btn_6",
		menu: "#section_content_6"
	}, compare_specOpen);
	$("#section_btn_7").bind("click", {
		btn: "#section_btn_7",
		menu: "#section_content_7"
	}, compare_specOpen);
	$("#section_btn_8").bind("click", {
		btn: "#section_btn_8",
		menu: "#section_content_8"
	}, compare_specOpen);
	$("#section_btn_9").bind("click", {
		btn: "#section_btn_9",
		menu: "#section_content_9"
	}, compare_specOpen);
	$("#section_btn_10").bind("click", {
		btn: "#section_btn_10",
		menu: "#section_content_10"
	}, compare_specOpen);
	$("#section_btn_11").bind("click", {
		btn: "#section_btn_11",
		menu: "#section_content_11"
	}, compare_specOpen);
	$("#section_btn_12").bind("click", {
		btn: "#section_btn_12",
		menu: "#section_content_12"
	}, compare_specOpen);
	moveProductPrice();
	$("#photos_carousel_btn").bind("click", {
		btn: "#photos_carousel_tab",
		menu: "#product_carousels_2"
	}, carouselToggle);
	$("#recommend_carousel_btn").bind("click", {
		btn: "#recommend_carousel_tab",
		menu: "#product_carousels_1"
	}, carouselToggle);
	$("#search_carousel_btn").bind("click", {
		btn: "#search_carousel_tab",
		menu: "#product_carousels_1"
	}, carouselToggle);
	if ($("div.compare_appliances_body").length != 0) {
		$("#tabs_shower").jCarouselLite({
			btnNext: "#next",
			btnPrev: "#prev",
			visible: 5,
			circular: false
		});
	}
	if ($("#page").hasClass("product_list_list_page")) {
		changeWhatYouLove();
		var prodListDetsCells = $(document).find("table#product_list_view_table > tbody > tr > td");
		prodListDetsCells.filter(":last").css("border-bottom", "none");
	}
	if ($("#page").hasClass("product_list_pair_page")) {
		eliminatePairBorders();
	}
	if ($("#page").hasClass("product_list_list_pair_page")) {
		createProductListByListPairBorders();
	}
	$(".product_detail_list_group_heading").each(function() {
		$(this).parent().css("border-bottom", "none");
	});
	if ($("#page").hasClass("product_list_page")) {
		myl = $(document).find("#page.product_list_page .product_list_table > tbody > tr");
		myl.filter(":last").find("td").css("border-bottom", "none");
	}
	if ($("#page").hasClass("product_list_accessories_page")) {
		myl = $(document).find("#page.product_list_accessories_page .product_list_table > tbody > tr");
		myl.filter(":last").find("td").css("border-bottom", "none");
	}
	if ($("#page").hasClass("product_list_pair_page")) {
		myl = $(document).find("#page.product_list_pair_page .product_list_table > tbody > tr");
		myl.filter(":last").find("td").css("border-bottom", "none");
	}
	hideBillingAddressSection();
	if ($("#search_carousels").length == 0) {
		$("#search_carousel_tab").hide();
		$("#recommend_carousel_tab").css("right", "195px");
	}
	swapCartMessage();
	if ($("#page.OrderShippingBillingView iframe#payment_frame").length > 0) {
		$("#page.OrderShippingBillingView iframe#payment_frame").attr("width", "");
		$("#page.OrderShippingBillingView iframe#payment_frame").attr("height", "");
	}
});
function swapCartMessage() {
	if ($("img.shopping-cart-img").length > 0) {
		$("img.shopping-cart-img").replaceWith("CART");
	}
}
function setMessage(selectVal) {
	if (selectVal == "CU_S0_T3") {
		$("#im_subject_CU_S0_T3").css("visibility", "visible");
	} else {
		$("#im_subject_CU_S0_T3").css("visibility", "hidden");
	}
}
$(document).ready(function() {
	if ($.browser.msie) {
		document.documentElement.onkeydown = function(e) {
			e = e || window.event;
			tg = e.srcElement || e.target;
			if (e.keyCode == 8) {
				if ($(document.activeElement).attr("readOnly") && (/^input$/i).test(tg.nodeName)) {
					e.cancelBubble = true;
					e.keyCode = 0;
					e.returnValue = false;
				}
			}
		};
	}
	if ($("body").hasClass("product_detail_page") || $("body").hasClass("product_detail")) {
		$("#specifications.product_tab_section").find(".spec_section").each(function() {
			if (!($(this).children("h3")).hasClass("selected") && !$(this).hasClass("callout")) {
				($(this).children("h3")).addClass("selected");
				($(this).children(".spec_contents")).addClass("selected");
			}
		});
	}
});
$(document).ready(function() {
	setMessage();
});
$(document).ready(function() {
	$("#page.sign-in-page #WC_AccountDisplay_links_2").click(function() {
		if ($("#page.sign-in-page input#WC_AccountDisplay_FormInput_logonId_In_Logon_1").val() == "") {
			$("#page.sign-in-page #WC_AccountDisplay_div_7.align p.red_alert ").css("display", "block");
			$("#page.sign-in-page #WC_AccountDisplay_div_10.input_label").css("top", "170px");
		}
	});
});
$(function() {
	var $seeItWork = $(".product-tooltip-seeitwork");
	$(".product_detail_page  #photo_carousel_items li img").click(function() {
		var index = $("#photo_carousel_items li").index($(this).parent().parent());
		if (index != 0) {
			$seeItWork.css("visibility", "hidden");
		} else {
			$seeItWork.css("visibility", "visible");
		}
	});
});
sfHover = function() {
	var sfHeader = document.getElementById("header_main_nav");
	if (sfHeader != null && sfHeader != "undefined") {
		var sfEls = sfHeader.getElementsByTagName("LI");
		for (var i = 0; i < sfEls.length; i++) {
			sfEls[i].onmouseover = function() {
				this.className += " sfhover";
			};
			sfEls[i].onmouseout = function() {
				this.className = this.className.replace(new RegExp(" sfhover\\b"), "");
			};
		}
	}
};
if (window.attachEvent) {
	window.attachEvent("onload", sfHover);
}
sfHover2 = function() {
	var sfHeaderSub = document.getElementById("header_sub_nav_1");
	if (sfHeaderSub != null && sfHeaderSub != "undefined") {
		var sfEls = sfHeaderSub.getElementsByTagName("LI");
		for (var i = 0; i < sfEls.length; i++) {
			sfEls[i].onmouseover = function() {
				this.className += " sfhover";
			};
			sfEls[i].onmouseout = function() {
				this.className = this.className.replace(new RegExp(" sfhover\\b"), "");
			};
		}
	}
};
if (window.attachEvent) {
	window.attachEvent("onload", sfHover2);
}
$(document).ready(function() {
	checkBoxForm();
	$("#search-text").searchClear();
	$("#cancel-feedback").bind("keydown", limtChars).bind("keyup", limtChars);
	$("#cancel-feedback1").bind("keydown", limtChars1).bind("keyup", limtChars1);
});
function limtChars() {
	var _len = $(this).val().length;
	if (_len > 2000) {
		$(this).val($(this).val().substring(0, 2000));
	}
}
function limtChars1() {
	var _len = $(this).val().length;
	var count_text = $(this).parent().find("span").eq(0);
	var max_text = 400;
	left_text = parseInt($(count_text).text().match(/\d*/));
	if (_len > max_text - 1) {
		$(this).val($(this).val().substring(0, max_text));
		$(count_text).text($(count_text).text().replace(left_text, 0));
	} else {
		$(count_text).text($(count_text).text().replace(left_text, max_text - _len));
	}
}
$.fn.searchClear = function() {
	return this.focus(function() {
		if (this.value == this.defaultValue) {
			this.value = "";
		}
	}).blur(function() {
		if (!this.value.length) {
			this.value = this.defaultValue;
		}
	});
};
function checkBoxForm() {
	$("#SameShippingAndBillingAddress").click(function() {
		if ($("#SameShippingAndBillingAddress").attr("checked") == true) {
			$("#WC__ShoppingCartAddressEntryForm_shippingAddressCreateEditFormDiv_1_nickName").attr("value", $("#WC__ShoppingCartAddressEntryForm_billingAddressCreateEditFormDiv_1_nickName").attr("value"));
			$("#WC__AddressEntryForm_shippingAddressCreateEditFormDiv_1_personTitle_1").attr("value", $("#WC__AddressEntryForm_billingAddressCreateEditFormDiv_1_personTitle_1").attr("value"));
			$("#WC__ShoppingCartAddressEntryForm_shippingAddressCreateEditFormDiv_1_firstName_1").attr("value", $("#WC__ShoppingCartAddressEntryForm_billingAddressCreateEditFormDiv_1_firstName_1").attr("value"));
			$("#middleName_1").attr("value", $("#middleName").attr("value"));
			$("#WC__ShoppingCartAddressEntryForm_shippingAddressCreateEditFormDiv_1_lastName_1").attr("value", $("#WC__ShoppingCartAddressEntryForm_billingAddressCreateEditFormDiv_1_lastName_1").attr("value"));
			$("#WC__ShoppingCartAddressEntryForm_shippingAddressCreateEditFormDiv_1_address1_1").attr("value", $("#WC__ShoppingCartAddressEntryForm_billingAddressCreateEditFormDiv_1_address1_1").attr("value"));
			$("#WC__AddressEntryForm_shippingAddressCreateEditFormDiv_1_address2_1").attr("value", $("#WC__AddressEntryForm_billingAddressCreateEditFormDiv_1_address2_1").attr("value"));
			$("#WC__shoppingAddressCreateEditFormDiv_1_address3").attr("value", $("#WC__billingAddressCreateEditFormDiv_1_address3").attr("value"));
			$("#WC__ShoppingCartAddressEntryForm_shippingAddressCreateEditFormDiv_1_city_1").attr("value", $("#WC__ShoppingCartAddressEntryForm_billingAddressCreateEditFormDiv_1_city_1").attr("value"));
			$("#WC__AddressEntryForm_shippingAddressCreateEditFormDiv_1_state_1").attr("value", $("#WC__AddressEntryForm_billingAddressCreateEditFormDiv_1_state_1").attr("value"));
			$("#WC__ShoppingCartAddressEntryForm_shippingAddressCreateEditFormDiv_1_zipCode_1").attr("value", $("#WC__ShoppingCartAddressEntryForm_billingAddressCreateEditFormDiv_1_zipCode_1").attr("value"));
			$("#WC__ShoppingCartAddressEntryForm_shippingAddressCreateEditFormDiv_1_phone1_1").attr("value", $("#WC__ShoppingCartAddressEntryForm_billingAddressCreateEditFormDiv_1_phone1_1").attr("value"));
			$("#WC__shippingAddressCreateEditFormDiv_1_mobilePhone1").attr("value", $("#WC__billingAddressCreateEditFormDiv_1_mobilePhone1").attr("value"));
			$("#WC__ShoppingCartAddressEntryForm_shippingAddressCreateEditFormDiv_1_email1_1").attr("value", $("#WC__ShoppingCartAddressEntryForm_billingAddressCreateEditFormDiv_1_email1_1").attr("value"));
			$("#shippingAddressCreateEditFormDiv_1").css("display", "none");
		} else {
			$("#WC__ShoppingCartAddressEntryForm_shippingAddressCreateEditFormDiv_1_nickName").attr("value", "");
			$("#WC__AddressEntryForm_shippingAddressCreateEditFormDiv_1_personTitle_1").attr("value", "");
			$("#WC__ShoppingCartAddressEntryForm_shippingAddressCreateEditFormDiv_1_firstName_1").attr("value", "");
			$("#middleName_1").attr("value", "");
			$("#WC__ShoppingCartAddressEntryForm_shippingAddressCreateEditFormDiv_1_lastName_1").attr("value", "");
			$("#WC__ShoppingCartAddressEntryForm_shippingAddressCreateEditFormDiv_1_address1_1").attr("value", "");
			$("#WC__AddressEntryForm_shippingAddressCreateEditFormDiv_1_address2_1").attr("value", "");
			$("#WC__shoppingAddressCreateEditFormDiv_1_address3").attr("value", "");
			$("#WC__ShoppingCartAddressEntryForm_shippingAddressCreateEditFormDiv_1_city_1").attr("value", "");
			$("#WC__AddressEntryForm_shippingAddressCreateEditFormDiv_1_state_1").attr("value", "");
			$("#WC__ShoppingCartAddressEntryForm_shippingAddressCreateEditFormDiv_1_zipCode_1").attr("value", "");
			$("#WC__ShoppingCartAddressEntryForm_shippingAddressCreateEditFormDiv_1_phone1_1").attr("value", "");
			$("#WC__shippingAddressCreateEditFormDiv_1_mobilePhone1").attr("value", "");
			$("#WC__ShoppingCartAddressEntryForm_shippingAddressCreateEditFormDiv_1_email1_1").attr("value", "");
			$("#shippingAddressCreateEditFormDiv_1").css("display", "block");
		}
	});
}
function checkValidate(obj) {
	var _obj = obj || "form";
	var status = true;
	$(_obj).each(function() {
		$(this).find("input,textarea").each(function() {
			if ($(this).val() == "") {
				$(this).parents("tr:first").next(".alert_text").css("visibility", "visible");
				status = false;
			} else {
				$(this).parents("tr:first").next(".alert_text").css("visibility", "hidden");
			}
		});
	});
	return status;
}
function toggleGlossary() {
	if ($("#glossaryCheckBox:checked").val() !== undefined) {
		$("#serach_results_glossary").slideDown("slow", function() {});
	} else {
		$("#serach_results_glossary").slideUp("slow", function() {});
	}
}
function toggleCategory() {
	if ($("#categoryCheckBox:checked").val() !== undefined) {
		$("#serach_results_category").slideDown("slow", function() {});
	} else {
		$("#serach_results_category").slideUp("slow", function() {});
	}
}
function toggleCompareLink(inputID, buttonIDcheck, buttonIDuncheck) {
	if ($("#" + inputID).attr("checked")) {
		$("#" + buttonIDuncheck).hide();
		$("#" + buttonIDcheck).show();
	} else {
		$("#" + buttonIDcheck).hide();
		$("#" + buttonIDuncheck).show();
	}
}
function toggleCompareLinkLabel(inputID, buttonIDcheck, buttonIDuncheck) {
	if ($("#" + inputID).attr("checked")) {
		$("#" + inputID).removeAttr("checked");
		$("#" + buttonIDcheck).hide();
		$("#" + buttonIDuncheck).show();
	} else {
		$("#" + inputID).attr("checked", true);
		$("#" + buttonIDuncheck).hide();
		$("#" + buttonIDcheck).show();
	}
}
var jzoom = function(obj, args) {
		this.args = args;
		this.zoomsrc = obj;
		this.little = $("#small");
		this.mover = $("#mover");
		this.large = $("#large");
	};
jzoom.prototype = {
	init: function() {
		var me = this;
		$(this.little).width($("img", $(this.little)).width());
		$(this.little).height($("img", $(this.little)).height());
		$(this.little).mouseenter(function(e) {
			me.showIt(e, me);
		});
		$(this.little).mouseleave(function(e) {
			me.hideIt(e, me);
		});
		$(this.mover).mouseenter(function(e) {
			me.little.trigger("mouseenter");
		});
		$(this.mover).mousemove(function(e) {
			me.moveIt(e, me);
		});
	},
	checkLimits: function(e, src) {
		var scrpos = $(src).offset();
		var topLimit = scrpos.top;
		var bottomLimit = scrpos.top + $(src).height();
		var leftLimit = scrpos.left;
		var rightLimit = scrpos.left + $(src).width();
		var valid = true;
		if (e.pageY < topLimit || e.pageY > bottomLimit) {
			valid = false;
		}
		if (e.pageX < leftLimit || e.pageX > rightLimit) {
			valid = false;
		}
		return valid;
	},
	showIt: function(e, parent) {
		$(parent.mover).css("display", "block");
		this.scale = $("img", $(this.mover)).width() / $(this.little).width();
		var pos = $(parent.zoomsrc).offset();
		pos.top = e.pageY - pos.top - $(parent.mover).height() / 2;
		pos.left = e.pageX - pos.left - $(parent.mover).width() / 2;
		$(parent.mover).css({
			top: pos.top + "px",
			left: pos.left + "px"
		});
	},
	hideIt: function(e, parent) {
		$(parent.mover).css("display", "none");
	},
	moveIt: function(e, parent) {
		if (parent.checkLimits(e, parent.little)) {
			var pos = $(parent.zoomsrc).offset();
			pos.top = e.pageY - pos.top - $(parent.mover).height() / 2;
			pos.left = e.pageX - pos.left - $(parent.mover).width() / 2;
			$(parent.mover).css({
				top: pos.top + "px",
				left: pos.left + "px"
			});
			$(parent.large).css({
				top: -(pos.top) * parent.scale - $(parent.mover).height() / 2 + "px",
				left: -(pos.left) * parent.scale - $(parent.mover).width() / 2 + "px"
			});
		} else {
			parent.hideIt(e, parent);
		}
	},
	closeIt: function(e) {}
};
var zoom;
$(document).ready(function() {
	$(document).attr("openedPopUp", 0);
	$("a.popUpLink").click(function(e) {
		openPopUp(e, "block", this);
	});
	$("a.popUpLinkHover").hover(function(e) {
		openPopUp(e, "block", this, true);
	});
	$("a.closeLink").click(function(e) {
		openPopUp(e, "none", this);
	});
	$("a.zoom-image-link, .product-carousel .carousel-item a.zoom-img").click(function(e) {
		videoToggle(e, ".expose-image", this);
	});
	$("a.video-image-link,a.open_video_container").click(function(e) {
		videoToggle(e, ".expose-video", this);
	});
	$("a.expan_link").click(expandCollapse);
	var d = document;
	$("div.darklayer").css({
		height: $(document).height(),
		width: $(document).width(),
		"z-index": 1
	});
	try {
		zoom = new jzoom($("#wrapThumb"));
	} catch (error) {}
	$("a.close_features").click(function(e) {
		expandCollapse(e, this, true);
	});
	$("a.balloonLink").click(openBallon);
});
var accordion_up = "/images/icon_arrow_orange_up.png";
var accordion_down = "/images/icon_arrow_orange_down.png";
var expandCollapse = function(e, obj, closeAll) {
		e.preventDefault();
		if ($(this).parent().hasClass("specs_header") && !! !$("div.expandContent", $(this).parent()).css("display")) {
			if ($(this).css("background-image").match(accordion_up)) {
				$(this).css("background-image", "url(" + accordion_down + ")");
				return;
			} else {
				$(this).css("background-image", "url(" + accordion_up + ")");
				return;
			}
		}
		if ($("div.expandContent", $(this).parent()).css("display") == "none") {
			$("div.expandContent", $(this).parent()).css("display", "block");
			$(this).css("background-image", "url(" + accordion_up + ")");
			$(this).addClass("expanded");
		} else {
			$("div.expandContent", $(this).parent()).css("display", "none");
			$(this).css("background-image", "url(" + accordion_down + ")");
			$(this).removeClass("expanded");
		}
		switch (closeAll) {
		case 1:
			$(".expanded", $(obj).attr("closeGroup")).removeClass("expanded");
			$("div.expandContent", $(obj).attr("closeGroup")).css("display", "none");
			break;
		case 2:
			$(".expan_link", $(obj).attr("closeGroup")).addClass("expanded");
			$("div.expandContent", $(obj).attr("closeGroup")).css("display", "block");
			break;
		}
	};
var videoToggle = function(e, flag, obj) {
		e.preventDefault();
		$(".displayedDiv").css("display", "none");
		$(".displayedDiv").removeClass("displayedDiv");
		$(flag).css("display", "block");
		$(flag).addClass("displayedDiv");
		try {
			if ($($(obj).attr("href")).css("display") == "none") {
				openPopUp(e, "block", obj, true);
			}
		} catch (e) {}
		zoom.init();
	};
var checkObj = function(e) {
		var popup = document.openedPopUp;
		$(popup).css("display", "none");
		$("div.darklayer").css("display", "none");
		document.openedPopUp = 0;
		$(document).unbind("click", checkObj);
		$(popup).unbind("click", stopClick);
	};
var calcPos = function(obj1, obj2) {
		var pos = $(obj1).offset();
		var pos2 = $(obj2).offset();
		var position = {
			top: 0,
			left: 0
		};
		position.top = pos.top + $(obj1).height() / 2 - pos2.top;
		position.left = pos.left + $(obj1).width() - pos2.left;
		return position;
	};
var stopClick = function(e) {
		e.stopPropagation();
	};
var openPopUp = function(e, flag, obj, nodarklayer) {
		e.preventDefault();
		e.stopPropagation();
		if (document.openedPopUp != 0) {
			$(document.openedPopUp).css("display", "none");
		}
		var popup = $(obj).attr("href");
		$(popup).css("display", flag);
		if (flag == "block") {
			if (!nodarklayer) {
				$("div.darklayer").css("display", "block");
			}
			document.openedPopUp = popup;
			$(document).bind("click", checkObj);
			$(popup).bind("click", stopClick);
		} else {
			document.openedPopUp = 0;
			$(document).unbind("click", checkObj);
			$(popup).unbind("click", stopClick);
			$("div.darklayer").css("display", "none");
		}
	};
var openBallon = function(e) {
		var balloon = $($(this).attr("href"));
		$(balloon).css({
			top: 0,
			left: 0
		});
		openPopUp(e, "block", this, true);
		var pos = calcPos(this, balloon);
		$(balloon).css({
			top: pos.top - $(balloon).height() + "px",
			left: pos.left + "px"
		});
		return balloon;
	};
$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect: "none",
		closeEffect: "none"
	});
	$(".view_demo_kitchen").fancybox({
		autoSize: false,
		width: 792,
		height: 604,
		closeClick: true,
		openEffect: "fade",
		closeEffect: "fade",
		helpers: {
			title: {
				type: "inside"
			}
		},
		beforeShow: function() {
			if (window.PIE) {
				$(".fancybox-outer").each(function() {
					PIE.detach(this);
					setTimeout(function() {
						PIE.attach(this);
					}, 100);
				});
			}
		}
	});
	$(".view_demo_air_conditioner").fancybox({
		autoSize: false,
		width: 750,
		height: 650,
		closeClick: true,
		openEffect: "fade",
		closeEffect: "fade",
		helpers: {
			title: {
				type: "inside"
			}
		},
		beforeShow: function() {
			if (window.PIE) {
				$(".fancybox-outer").each(function() {
					PIE.detach(this);
					setTimeout(function() {
						PIE.attach(this);
					}, 100);
				});
			}
		}
	});
	$(".youtubeVideoTeen").fancybox({
		autoSize: false,
		width: 580,
		height: 330,
		closeClick: true,
		openEffect: "fade",
		closeEffect: "fade",
		helpers: {
			title: {
				type: "inside"
			}
		},
		beforeShow: function() {
			if (window.PIE) {
				$(".fancybox-outer").each(function() {
					PIE.detach(this);
					setTimeout(function() {
						PIE.attach(this);
					}, 100);
				});
			}
		}
	});
});
$(document).ready(function() {
	$("#chatLink").click(function() {
		var axel = Math.random() + "";
		var a = axel * 10000000000000;
		document.getElementById("fDiv").innerHTML = '<iframe src="//2625291.fls.doubleclick.net/activityi;src=2625291;type=whirl781;cat=;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>';
	});
});
function addChatTag() {
	var axel = Math.random() + "";
	var a = axel * 10000000000000;
	document.getElementById("fDiv").innerHTML = '<iframe src="//2625291.fls.doubleclick.net/activityi;src=2625291;type=whirl781;cat=;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>';
}
$(document).ready(function() {
	var saludoCont = $("li.first");
	var saludo = saludoCont.html();
	var legal = $("#legal_footer_content");
	if (saludoCont.has('<a id="headerLogout">')) {
		legal.css("float", "none");
		$("#returning-user-content-wrap").css("display", "none");
	}
});
$(document).ready(function() {
	$("#stylistDivLink").mouseover(function() {
		$("#stylistTitle").css("color", "#999");
		$("#stylistDescription").css("color", "#999");
		$("#stylistTitle").css("background", "url('/images/content/homepage_comp/heading-arrow-hover.png') no-repeat scroll right center transparent");
	});
	$("#stylistDivLink").mouseout(function() {
		$("#stylistTitle").css("color", "#333");
		$("#stylistDescription").css("color", "#666");
		$("#stylistTitle").css("background", "url('/images/content/laundry/arrrow-to-the-right.png') no-repeat scroll right center transparent");
	});
});
$(document).ready(function() {
	$("#oneratedDivLink").mouseover(function() {
		$("#oneratedheadline").css("color", "#999");
		$("#onerateddescription").css("color", "#999");
		$("#oneratedmodel").css("color", "#999");
		$("#oneratedcta").css("color", "#999");
		$("#oneratedcta").css("background", "url('/images/content/homepage_comp/heading-arrow-hover.png') no-repeat scroll 68% 45% transparent");
	});
	$("#oneratedDivLink").mouseout(function() {
		$("#oneratedheadline").css("color", "#333");
		$("#onerateddescription").css("color", "#666");
		$("#oneratedmodel").css("color", "#666");
		$("#oneratedcta").css("color", "#333");
		$("#oneratedcta").css("background", "url('/images/content/laundry/arrrow-to-the-right.png') no-repeat scroll 68% 45% transparent");
	});
});