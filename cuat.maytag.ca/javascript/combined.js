$(document).ready(function() {
	bindAfterRefresh();
});
$(document).ready(function() {
	$(".tab1").bind("click", {
		btn: ".tab1",
		menu: "#tab1"
	}, suiteTabOpen);
	$(".tab2").bind("click", {
		btn: ".tab2",
		menu: "#tab2"
	}, suiteTabOpen);
	$(".tab3").bind("click", {
		btn: ".tab3",
		menu: "#tab3"
	}, suiteTabOpen);
	$(".tab4").bind("click", {
		btn: ".tab4",
		menu: "#tab4"
	}, suiteTabOpen);
	$(".tab5").bind("click", {
		btn: ".tab5",
		menu: "#tab5"
	}, suiteTabOpen);
	$(".tab6").bind("click", {
		btn: ".tab6",
		menu: "#tab6"
	}, suiteTabOpen);
	if ($("body").hasClass("product_detail")) {
		initPDP();
	}
	if($("#compare_body").length>0){
		$(".cols").each(function(){
			var x = this;
			$(x).find('.pr-snippet').wrap('<a href="'+$(x).find('.quick_view_hover').attr('href')+'#ratingsandreviews">');
		});
	}
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
	kitchenAidCarousel("product-carousel", 5, 1);
	kitchenAidCarousel("module-carousel", 9, 2);
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
			$("#" + carouselName + " .carousel-next").click(function() {
				var carouselPosition = $("#" + carouselName + " .carousel-items").position().left;
				var carouselFullWidth = $("#" + carouselName + " .carousel-items").width();
				var carouselItemWidth = $("#" + carouselName + " .carousel-items li").width();
				var scrollDistance = carouselItemWidth * (scrollItemCount);
				var carouselPosition = $("#" + carouselName + " .carousel-items").position().left;
				var startingVisibleAmount = parseInt($(".pagination .visible-amount").html(), 10);
				var changeVisibleAmountBy = parseInt(scrollAmount, 10);
				var nextVisibleAmount = (startingVisibleAmount + changeVisibleAmountBy);
				if (carouselPosition >= (carouselFullWidth * (0 - 1) + $("#" + carouselName + " .carousel-visible-items").width() + 1)) {
					$("#" + carouselName + " .carousel-items").animate({
						left: "-=" + (carouselItemWidth * scrollItemCount)
					});
					$(".pagination .visible-amount").html(nextVisibleAmount);
					$("#" + carouselName + " .carousel-previous").addClass("active");
					$("#" + carouselName + " .carousel-next").addClass("active");
				} else {
					$("#" + carouselName + " .carousel-next").removeClass("active");
					$("#" + carouselName + " .carousel-previous").addClass("active");
				}
			});
			$("#" + carouselName + " #carousel-next").click(function() {
				var carouselPosition = $("#" + carouselName + " .carousel-items").position().left;
				var carouselFullWidth = $("#" + carouselName + " .carousel-items").width();
				var carouselItemWidth = $("#" + carouselName + " .carousel-items li").width();
				var scrollDistance = carouselItemWidth * (scrollItemCount);
				var carouselPosition = $("#" + carouselName + " .carousel-items").position().left;
				var startingVisibleAmount = parseInt($(".pagination .visible-amount").html(), 10);
				var changeVisibleAmountBy = parseInt(scrollAmount, 10);
				var nextVisibleAmount = (startingVisibleAmount + changeVisibleAmountBy);
				if (carouselPosition >= (carouselFullWidth * (0 - 1) + $("#" + carouselName + " .carousel-visible-items").width() + 1)) {
					$("#" + carouselName + " .carousel-items").animate({
						left: "-=" + (carouselItemWidth * scrollItemCount)
					});
					$(".pagination .visible-amount").html(nextVisibleAmount);
					$("#" + carouselName + " #carousel-previous").addClass("active");
					$("#" + carouselName + " #carousel-next").addClass("active");
				} else {
					$("#" + carouselName + " #carousel-next").removeClass("active");
					$("#" + carouselName + " #carousel-previous").addClass("active");
				}
			});
			$("#" + carouselName + " .carousel-previous").click(function() {
				var carouselPosition = $("#" + carouselName + " .carousel-items").position().left;
				var startingVisibleAmount = parseInt($(".pagination .visible-amount").html(), 10);
				var changeVisibleAmountBy = parseInt(scrollAmount, 10);
				var nextVisibleAmount = (startingVisibleAmount - changeVisibleAmountBy);
				var carouselFullWidth = $("#" + carouselName + " .carousel-items").width();
				var carouselItemWidth = $("#" + carouselName + " .carousel-items li").width();
				var scrollDistance = carouselItemWidth * (scrollItemCount);
				if (carouselPosition <= (0 - 1)) {
					$("#" + carouselName + " .carousel-items").animate({
						left: "+=" + (carouselItemWidth * scrollItemCount)
					});
					$(".pagination .visible-amount").html(nextVisibleAmount);
					$("#" + carouselName + " .carousel-next").addClass("active");
					$("#" + carouselName + " .carousel-previous").addClass("active");
				} else {
					$("#" + carouselName + " .carousel-next").addClass("active");
					$("#" + carouselName + " .carousel-previous").removeClass("active");
				}
			});
			$("#" + carouselName + " #carousel-previous").click(function() {
				var carouselPosition = $("#" + carouselName + " .carousel-items").position().left;
				var startingVisibleAmount = parseInt($(".pagination .visible-amount").html(), 10);
				var changeVisibleAmountBy = parseInt(scrollAmount, 10);
				var nextVisibleAmount = (startingVisibleAmount - changeVisibleAmountBy);
				var carouselFullWidth = $("#" + carouselName + " .carousel-items").width();
				var carouselItemWidth = $("#" + carouselName + " .carousel-items li").width();
				var scrollDistance = carouselItemWidth * (scrollItemCount);
				if (carouselPosition <= (0 - 1)) {
					$("#" + carouselName + " .carousel-items").animate({
						left: "+=" + (carouselItemWidth * scrollItemCount)
					});
					$(".pagination .visible-amount").html(nextVisibleAmount);
					$("#" + carouselName + " #carousel-next").addClass("active");
					$("#" + carouselName + " #carousel-previous").addClass("active");
				} else {
					$("#" + carouselName + " #carousel-next").addClass("active");
					$("#" + carouselName + " #carousel-previous").removeClass("active");
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
function suiteTabOpen(eventObject) {
	suiteTabClose();
	$(eventObject.data.btn).parent().addClass("selected");
	$(eventObject.data.menu).removeClass("closed");
	return false;
}
function compareTabClose() {
	$("#content1").addClass("closed");
	$("#content2").addClass("closed");
	$(".select-tab1").parent().parent().parent().removeClass("selected");
}
function tabSelect(e) {
	e.preventDefault();
	if ($("#page").hasClass("suite-overview")) {
		$(this).parents("ul").children("li").each(function() {
			$(this).removeClass("current_tab");
		});
		$(this).parents("li").addClass("current_tab");
		return;
	}
	var div = $(this).attr("href").match(/#(.*)$/)[1];
	$(".current_tab", $(this).closest("ul")).removeClass("current_tab");
	$(this).closest("li").addClass("current_tab");
	$("div.tabdiv.selected", $(this).closest("div.tabContainer")).removeClass("selected");
	$("#" + div).addClass("selected");
	$("div.swappable-content-wrapper").removeClass("hidden");
	$("div.gallerydiv.gallery-selected").removeClass("gallery-selected");
	$("div.swappable-galleries li.current_gallery").removeClass("current_gallery");
}
function bindAfterRefresh() {
	$(".gallery_ul a").click(gallerySelect);
	$("div.close_tab a.close").click(closeMasthead);
	$("div.close_tab a.open").click(openMasthead);
	$(".tabs_ul a").click(tabSelect);
	$("a.close-btn").click(closeGallery);
	$(".list_tabs_overview a").click(tabSelect);
	$("a.toggleText").click(showText);
	$("ul.results-view li div a").click(linkSelect);
}
function dojoRefresh() {
	$(".gallery_ul a").click(gallerySelect);
	$("a.close-btn").click(closeGallery);
}
function gallerySelect(e) {
	e.preventDefault();
	var div = $(this).attr("href");
	$(".current_gallery", $(this).closest("ul")).removeClass("current_gallery");
	$(this).closest("li").addClass("current_gallery");
	$("div.gallerydiv.gallery-selected", $(this).closest("div.swappable-galleries")).removeClass("gallery-selected");
	if ($.browser.msie && $.browser.version == 7) {
		div = "#" + div.match(/#(.*)$/)[1];
	}
	$(div).addClass("gallery-selected");
	$("div.swappable-content-wrapper").addClass("hidden");
}
function closeGallery(e) {
	e.preventDefault();
	$("div.swappable-content-wrapper").removeClass("hidden");
	$("li", $(this).closest("div.swappable-galleries")).removeClass("current_gallery");
	$("div.gallerydiv.gallery-selected").removeClass("gallery-selected");
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
var photos = {
	btn: "#photos_carousel_tab",
	menu: "#photo_carousel"
};
var recommended = {
	btn: "#recommend_carousel_tab",
	menu: "#recommend_carousels"
};
var search_results = {
	btn: "#search_carousel_tab",
	menu: "#search_carousels"
};
var sharePopupVisible = 0;
var unique_tooltip = null;
var timeout = 500;
var closetimer = 0;
var anchorName = document.location.hash.substring(1);
var realAnchor = "";
var colorClosetimer = 0;
function toggle_filter(filter) {
	if ($(filter).attr("checked")) {
		if (filter_map[$(filter).attr("id")]) {
			$.each(filter_map[$(filter).attr("id")], function(i, f) {
				disable_filter(f);
			});
		}
	} else {
		if (filter_map[$(filter).attr("id")]) {
			$.each(filter_map[$(filter).attr("id")], function(i, f) {
				enable_filter(f);
			});
		}
	}
}
function disable_filter(filter_id) {
	$("#" + filter_id).attr("disabled", "true");
	if (click_map[filter_id] == undefined) {
		click_map[filter_id] = 0;
	}
	click_map[filter_id]++;
}
function enable_filter(filter_id) {
	if (click_map[filter_id] == undefined) {
		click_map[filter_id] = 0;
	}
	click_map[filter_id]--;
	if (click_map[filter_id] <= 0) {
		click_map[filter_id] = 0;
		$("#" + filter_id).removeAttr("disabled");
	}
}
function colorTooltipOpen(eventObject) {
	colorTooltipClose();
	var offest_adjust_y = 65;
	var offest_adjust_x = 55;
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
function switchColor() {
	var current_color = "";
	var new_color = "";
	var color = "";
	var model_number = "";
	var img_src = "";
	for (i = 1; i <= 10; i++) {
		if ($("#product_colors").hasClass("color_" + i)) {
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
		$("#product_colors").removeClass(current_color);
		$("#product_colors").addClass(new_color);
		$("#product_header .product_number").html(model_number);
		$("#main_product_image").attr("src", img_src);
	}
	return false;
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
function switchProductPhoto() {
	$("#main_product_image").attr("src", $(this).attr("rel"));
	$("#photo_carousel_items a.product_photo").closest("li").removeClass("selected");
	$(this).closest("li").addClass("selected");
	return false;
}
function carouselOpen(eventObject) {
	carouselClose();
	$(eventObject.data.btn).addClass("selected");
	$(eventObject.data.menu).show();
	return false;
}
function carouselClose() {
	$("#photos_carousel_tab").removeClass("selected");
	$("#photo_carousel").hide();
	$("#recommend_carousel_tab").removeClass("selected");
	$("#recommend_carousels").hide();
	$("#search_carousel_tab").removeClass("selected");
	$("#search_carousels").hide();
	return false;
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
function compareTabOpen(eventObject) {
	compareTabClose();
	$(eventObject.data.btn).parent().addClass("selected");
	$(eventObject.data.menu).removeClass("closed");
	return false;
}
function compareTabClose() {
	$(".compare_product_list").addClass("closed");
	$("ul.tabs li").removeClass("selected");
}
function specOpen(eventObject) {
	$(eventObject.data.menu).slideToggle("fast");
	$(eventObject.data.btn).toggleClass("selected");
	return false;
}
function compareSpecOpen(eventObject) {
	var my_obj = $(this).parent();
	my_obj.toggleClass("specs_header_open").toggleClass("specs_header_close");
	my_obj.parent().find(eventObject.data.menu).eq(0).slideToggle("fast");
	return false;
}
function compareSpecOpenCheckVisiable() {
	$(".compare_tabs_content_carousels,.compare_tabs_content_carousels_last").each(function() {
		my_obj = $(this);
		_obj = my_obj.find("div").eq(0);
		if (my_obj.find("div").eq(1).is(":visible")) {
			if (_obj.hasClass("specs_header_open")) {
				_obj.removeClass("specs_header_close");
			} else {
				_obj.removeClass("specs_header_close").addClass("specs_header_open");
			}
		} else {
			_obj.removeClass("specs_header_open").addClass("specs_header_close");
		}
	});
}
function tooltipOpen(eventObject) {
	tooltipClose();
	var offset_adjust = 50;
	if ($(this).hasClass("product_tooltip")) {
		unique_tooltip = "#" + this.id;
		var offset_adjust = 0;
	} else {
		unique_tooltip = "#tooltip_" + this.id.substr(4);
	}
	$(unique_tooltip).show();
	var posX = $(this).offset().left;
	var posY = $(this).offset().top - offset_adjust;
	$(unique_tooltip).css("top", posY);
	$(unique_tooltip).css("left", posX);
	tooltipCancelTimer();
}
function tooltipClose() {
	$(".product_tooltip").hide();
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
function ToggleSharePopup() {
	$("#sharePopup").toggle();
	if (sharePopupVisible == 1) {
		sharePopupVisible = 0;
	} else {
		sharePopupVisible = 1;
	}
	return false;
}
function changeToCompareNow() {
	$("a.compare-add").hide();
	$("a.compare-now").show();
}
function jumpToSection() {
	if (anchorName) {
		$("anchorName").addClass("selected");
	}
}
function hasclosetab(eventObject) {
	var my_obj = $(this).parent();
	my_obj.parent().find(eventObject.data.menu).eq(0).slideToggle("fast");
	$(eventObject.data.btn).parent().toggleClass("specs_header_open").toggleClass("specs_header_close");
	$(eventObject.data.closetab).slideToggle("fast");
	return false;
}
function toggle_visibility(showDiv, hideDiv) {
	$(showDiv).show();
	$(hideDiv).hide();
}
function showHide(show, hide) {
	$(show).css("display", "block");
	$(hide).css("display", "none");
}
function ff_openClose(theState) {
	if (theState == "close") {
		$("#Product_List_Masthead_closed").show();
		$("#Product_List_Masthead").hide();
		$("#page").addClass("bg_closebtn").removeClass("bg_openbtn");
	} else {
		$("#Product_List_Masthead_closed").hide();
		$("#Product_List_Masthead").show();
		$("#page").addClass("bg_openbtn").removeClass("bg_closebtn");
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
}(function($) {
	$.fn.extend({
		changeTopImage: function(replaceItem) {
			replaceItem = $.extend({
				obj: "#product_view img",
				viepath: "assets/images/",
				viehead: "img_product",
				vietype: ".png",
				extitem: {
					itemPath: "assets/images/",
					itemPos: -1,
					itemType: ".jpg"
				}
			}, replaceItem);
			$(this).each(function(key) {
				var _item = key;
				$(this).click(function() {
					$(this).parents("a").click(function() {
						return false;
					});
					thub_item = $(this).attr("src").match(/_item_\d+/);
					if (_item == replaceItem.extitem.itemPos - 1) {
						image_path = replaceItem.extitem.itemPath || replaceItem.viepath;
						view_itme = replaceItem.viehead + thub_item + replaceItem.extitem.itemType;
					} else {
						image_path = replaceItem.viepath;
						view_itme = replaceItem.viehead + thub_item + replaceItem.vietype;
					}
					$(replaceItem.obj).attr("src", image_path + view_itme);
					$(this).removeSelect();
					$(this).parents("a:first").addClass("selected");
				});
			});
			return false;
		},
		removeSelect: function(replaceItem) {
			var _item = replaceItem || ".selected";
			$($(this).parents("ul:first").find(_item)).each(function() {
				$(this).removeClass(_item.replace(/[^\.]|[^\#]/, ""));
			});
		}
	});
})(jQuery);
$(document).ready(function() {
	if ($("#product_carousel").length != 0) {
		$("#product_carousel").jCarouselLite({
			btnNext: "#next_pic",
			btnPrev: "#prev_pic",
			visible: 3
		});
	}
	var clearMePrevious = "";
	$("input.need_filter").each(function(idx, filter) {
		$(filter).click(function() {
			toggle_filter($(this));
		});
	});
	if (anchorName == "overview" || anchorName == "features" || anchorName == "specifications" || anchorName == "ratingsandreviews" || anchorName == "manualsandliterature" || anchorName == "producthelp" || anchorName == "partsandaccessories") {
		$("#product_tabs_menu li").removeClass("selected");
		$(".product_tab_section").removeClass("selected");
		$("#" + anchorName).addClass("selected");
		$("#" + anchorName + "_tab").addClass("selected");
	}
	$("#photos_carousel_btn").bind("click", {
		btn: "#photos_carousel_tab",
		menu: "#photo_carousel"
	}, carouselOpen);
	$("#recommend_carousel_btn").bind("click", {
		btn: "#recommend_carousel_tab",
		menu: "#recommend_carousels"
	}, carouselOpen);
	$("#search_carousel_btn").bind("click", {
		btn: "#search_carousel_tab",
		menu: "#search_carousels"
	}, carouselOpen);
	$("#overview_btn").bind("click", {
		btn: "#overview_tab",
		menu: "#overview"
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
	$("#manualsandliterature_btn").bind("click", {
		btn: "#manualsandliterature_tab",
		menu: "#manualsandliterature"
	}, tabToggle);
	$("#producthelp_btn").bind("click", {
		btn: "#producthelp_tab",
		menu: "#producthelp"
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
		btn: "#spec_header_10",
		menu: "#spec_11"
	}, specOpen);
	$("#spec_header_12").bind("click", {
		btn: "#spec_header_10",
		menu: "#spec_12"
	}, specOpen);
	$("#section_btn_1").bind("click", {
		btn: "#section_btn_1",
		menu: "#section_content_1"
	}, compareSpecOpen);
	$("#popuppage #specs_header_configuration_and_overview").unbind("click").bind("click", {
		btn: "#specs_header_configuration_and_overview",
		menu: "#specs_content_configuration_and_overview",
		closetab: "#close_tab_filter"
	}, hasclosetab);
	$("#popuppage #close_tab_filter a.close").unbind("click").bind("click", {
		btn: "#specs_header_configuration_and_overview",
		menu: "#specs_content_configuration_and_overview",
		closetab: "#close_tab_filter"
	}, hasclosetab);
	$("#section_btn_2").bind("click", {
		btn: "#section_btn_2",
		menu: "#section_content_2"
	}, compareSpecOpen);
	$("#section_btn_3").bind("click", {
		btn: "#section_btn_3",
		menu: "#section_content_3"
	}, compareSpecOpen);
	$("#section_btn_4").bind("click", {
		btn: "#section_btn_4",
		menu: "#section_content_4"
	}, compareSpecOpen);
	$("#section_btn_5").bind("click", {
		btn: "#section_btn_5",
		menu: "#section_content_5"
	}, compareSpecOpen);
	$("#section_btn_6").bind("click", {
		btn: "#section_btn_6",
		menu: "#section_content_6"
	}, compareSpecOpen);
	$("#section_btn_7").bind("click", {
		btn: "#section_btn_6",
		menu: "#section_content_7"
	}, compareSpecOpen);
	$("#section_btn_8").bind("click", {
		btn: "#section_btn_6",
		menu: "#section_content_8"
	}, compareSpecOpen);
	$("#section_btn_9").bind("click", {
		btn: "#section_btn_6",
		menu: "#section_content_9"
	}, compareSpecOpen);
	$("#section_btn_10").bind("click", {
		btn: "#section_btn_6",
		menu: "#section_content_10"
	}, compareSpecOpen);
	$("#section_btn_11").bind("click", {
		btn: "#section_btn_6",
		menu: "#section_content_11"
	}, compareSpecOpen);
	$("#section_btn_12").bind("click", {
		btn: "#section_btn_6",
		menu: "#section_content_12"
	}, compareSpecOpen);
	$(".specs_header_link").unbind("click").bind("click", {
		btn: this,
		menu: ".specs_content"
	}, compareSpecOpen);
	compareSpecOpenCheckVisiable();
	$(".tooltip_source").bind("mouseover", tooltipOpen);
	$(".tooltip_source").bind("mouseleave", tooltipTimer);
	$(".product_tooltip").bind("mouseover", tooltipOpen);
	$(".product_tooltip").bind("mouseleave", tooltipTimer);
	$("#product_colors a img.swatch").bind("mouseover", colorTooltipOpen);
	$("#product_colors a img.swatch").bind("mouseleave", colorTooltipTimer);
	$(".color_tooltip").bind("mouseover", colorTooltipOpen);
	$(".color_tooltip").bind("mouseleave", colorTooltipTimer);
	$("#product_colors a").bind("click", switchColor);
	$("a.product_photo").bind("click", switchProductPhoto);
	$("a.share").bind("click", ToggleSharePopup);
	if ($("body.product_detail_page").length != 0 || $("body.product_detail").length != 0) {
		$("#photo_carousel").jCarouselLite({
			btnNext: "#photo_carousel_next",
			btnPrev: "#photo_carousel_prev",
			visible: 6,
			circular: false
		});
		$("#recommend_carousel_1").jCarouselLite({
			btnNext: "#recommend_carousel_next_1",
			btnPrev: "#recommend_carousel_prev_1",
			visible: 3,
			circular: false
		});
		$("#recommend_carousel_2").jCarouselLite({
			btnNext: "#recommend_carousel_next_2",
			btnPrev: "#recommend_carousel_prev_2",
			visible: 3,
			circular: false
		});
		$("#search_carousel").jCarouselLite({
			btnNext: "#search_carousel_next",
			btnPrev: "#search_carousel_prev",
			visible: 6,
			circular: false
		});
	}
	if ($("div.compare_appliances_body").length != 0) {
		$("#tabs_shower").jCarouselLite({
			btnNext: "#next",
			btnPrev: "#prev",
			visible: 4,
			circular: false
		});
	}
	$("#recommend_carousels").hide();
	$("#search_carousels").hide();
	$("a img.tooltip_source").changeTopImage({
		extitem: {
			itemPos: 2,
			itemType: ".jpg"
		}
	});
	$("#photo_carousel_items img").changeTopImage();
	if ($("#search_carousels").length == 0) {
		$("#search_carousel_tab").hide();
	}
	swapCartMessage();
});
function swapCartMessage() {
	if ($("img.shopping-cart-img").length > 0) {
		$("img.shopping-cart-img").replaceWith("CART");
	}
}
function setMessage(selectVal) {
	if (selectVal == "CU_S0_T3") {
		$("#im_subject_CU_S0_T3").show();
	} else {
		$("#im_subject_CU_S0_T3").hide();
	}
}
$(document).ready(function() {
	setMessage();
	if ($("body").has("#specifications")) {
		$("#specifications .product_tab_section_middle").find(".spec_section").each(function() {
			console.log("Spec Item:");
			console.log($(this));
				$(this).children("h3").addClass("selected");
				$(this).children(".spec_contents").addClass("selected");
		});
	}
});
sfHover = function() {
	var sfEls = document.getElementById("header_main_nav").getElementsByTagName("LI");
	for (var i = 0; i < sfEls.length; i++) {
		sfEls[i].onmouseover = function() {
			this.className += " sfhover";
		};
		sfEls[i].onmouseout = function() {
			this.className = this.className.replace(new RegExp(" sfhover\\b"), "");
		};
	}
};
if (window.attachEvent) {
	window.attachEvent("onload", sfHover);
}
sfHover2 = function() {
	var sfEls = document.getElementById("header_sub_nav_1").getElementsByTagName("LI");
	for (var i = 0; i < sfEls.length; i++) {
		sfEls[i].onmouseover = function() {
			this.className += " sfhover";
		};
		sfEls[i].onmouseout = function() {
			this.className = this.className.replace(new RegExp(" sfhover\\b"), "");
		};
	}
};
if (window.attachEvent) {
	window.attachEvent("onload", sfHover2);
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
$(document).ready(function() {
	checkBoxForm();
	$("#search-text").searchClear();
	$("#cancel-feedback").bind("keydown", limtChars).bind("keyup", limtChars);
	$("#cancel-feedback1").bind("keydown", limtChars1).bind("keyup", limtChars1);
	$("input#ReplacementProgram").bind("change", checkBoxSelect);
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
function checkBoxSelect() {
	if ($(this).attr("checked")) {
		var _obj = $(this).parent().parent();
		var _div = $(_obj).find(".checkox_bottom").eq(0);
		$(_div).find("label").eq(0).css("color", "#666666");
		$(_div).find("select").eq(0).removeAttr("disabled");
	} else {
		var _obj = $(this).parent().parent();
		var _div = $(_obj).find(".checkox_bottom").eq(0);
		$(_div).find("label").eq(0).css("color", "#E4E4E4");
		$(_div).find("select").eq(0).attr("disabled", "disabled");
	}
}
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
			$("#WC__ShoppingCartAddressEntryForm_shippingAddressCreateEditFormDiv_1_city_1").attr("value", $("#WC__ShoppingCartAddressEntryForm_billingAddressCreateEditFormDiv_1_city_1").attr("value"));
			$("#WC__AddressEntryForm_shippingAddressCreateEditFormDiv_1_state_1").attr("value", $("#WC__AddressEntryForm_billingAddressCreateEditFormDiv_1_state_1").attr("value"));
			$("#WC__ShoppingCartAddressEntryForm_shippingAddressCreateEditFormDiv_1_zipCode_1").attr("value", $("#WC__ShoppingCartAddressEntryForm_billingAddressCreateEditFormDiv_1_zipCode_1").attr("value"));
			$("#WC__ShoppingCartAddressEntryForm_shippingAddressCreateEditFormDiv_1_phone1_1").attr("value", $("#WC__ShoppingCartAddressEntryForm_billingAddressCreateEditFormDiv_1_phone1_1").attr("value"));
			$("#WC__shippingAddressCreateEditFormDiv_1_mobilePhone1").attr("value", $("#WC__billingAddressCreateEditFormDiv_1_mobilePhone1").attr("value"));
			$("#WC__ShoppingCartAddressEntryForm_shippingAddressCreateEditFormDiv_1_email1_1").attr("value", $("#WC__ShoppingCartAddressEntryForm_billingAddressCreateEditFormDiv_1_email1_1").attr("value"));
			$("#shippingAddressCreateEditFormDiv_1_a").css("display", "none");
		} else {
			$("#WC__ShoppingCartAddressEntryForm_shippingAddressCreateEditFormDiv_1_nickName").attr("value", "");
			$("#WC__AddressEntryForm_shippingAddressCreateEditFormDiv_1_personTitle_1").attr("value", "");
			$("#WC__ShoppingCartAddressEntryForm_shippingAddressCreateEditFormDiv_1_firstName_1").attr("value", "");
			$("#middleName_1").attr("value", "");
			$("#WC__ShoppingCartAddressEntryForm_shippingAddressCreateEditFormDiv_1_lastName_1").attr("value", "");
			$("#WC__ShoppingCartAddressEntryForm_shippingAddressCreateEditFormDiv_1_address1_1").attr("value", "");
			$("#WC__AddressEntryForm_shippingAddressCreateEditFormDiv_1_address2_1").attr("value", "");
			$("#WC__ShoppingCartAddressEntryForm_shippingAddressCreateEditFormDiv_1_city_1").attr("value", "");
			$("#WC__AddressEntryForm_shippingAddressCreateEditFormDiv_1_state_1").attr("value", "");
			$("#WC__ShoppingCartAddressEntryForm_shippingAddressCreateEditFormDiv_1_zipCode_1").attr("value", "");
			$("#WC__ShoppingCartAddressEntryForm_shippingAddressCreateEditFormDiv_1_phone1_1").attr("value", "");
			$("#WC__shippingAddressCreateEditFormDiv_1_mobilePhone1").attr("value", "");
			$("#WC__ShoppingCartAddressEntryForm_shippingAddressCreateEditFormDiv_1_email1_1").attr("value", "");
			$("#shippingAddressCreateEditFormDiv_1_a").css("display", "block");
		}
	});
}
function checkValidate(obj) {
	var _obj = obj || "form";
	var status = true;
	$(_obj).each(function() {
		$(this).find("input").each(function() {
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
function toggleProductList() {
	var v = $(document).find("#product_listings");
	v.each(function() {
		$(this).slideToggle();
	});
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
var accordion_up = "images/icon_arrow_green_up.png";
var accordion_down = "images/icon_arrow_green_down.png";
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
	$("#chatLink").click(function() {
		var axel = Math.random() + "";
		var a = axel * 10000000000000;
		document.getElementById("fDiv").innerHTML = '<iframe src="//2625291.fls.doubleclick.net/activityi;src=2625291;type=mayta650;cat=all-r944;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>';
	});
	
	if($("#page").hasClass("casper")){
	$(".pr-pdp").html('');
	var pr_page = $("#breadcrumb-list-1.last").text();
	var pr_war_url = "/webapp/wcs/stores/servlet/PowerReviewsWARView?catalogId=10561&langId=-1&storeId=10229&partNumber="+pr_page;

	POWERREVIEWS.display.snippet({ 
		write : function(content) {
			$('.pr-pdp').append(content); 
			}
		}, 
		{ 
			pr_page_id: pr_page, 
			pr_write_review:pr_war_url,
			pr_read_review:"javascript:$('#ratingsandreviews_tab').click();$('html, body').animate({scrollTop: $('#ratingsandreviews_tab').offset().top + 'px'}, 'fast');"
	});
	$(".pr-pdp").prepend('<script type="text/javascript" src="//static.powerreviews.com/widgets/v1/widget.js"></script><link rel="stylesheet" href="https://cdn.powerreviews.com/repos/17612/pr/pwr/engine/pr_styles_review.css" type="text/css" id="prBaseStylesheet"><link rel="stylesheet" href="/css/powerreviews/pr_style_sheet.css" type="text/css" id="prMerchantOverrideStylesheet">');

	$(".pr-pdp-tab").html('');
	POWERREVIEWS.display.engine({ 
		write : function(content) {
			$('.pr-pdp-tab').append(content); 
			}
		},{
			pr_page_id:pr_page,
			pr_write_review:pr_war_url});
}
});
function addChatTag() {
	var axel = Math.random() + "";
	var a = axel * 10000000000000;
	document.getElementById("fDiv").innerHTML = '<iframe src="//2625291.fls.doubleclick.net/activityi;src=2625291;type=mayta650;cat=all-r944;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>';
}