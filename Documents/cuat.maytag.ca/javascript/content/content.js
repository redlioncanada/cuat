$(document).ready(function () {
    var url = document.URL;
    if (url.match(/MFT2976AEM/g)) {
        $("#product_rating").css("display", "none");
    } else {
        if (url.match(/MHW9000YW/)) {
            $("#useCareGuidePdf").replaceWith('<a href="/digitalassets/MHW9000YW/Use%20and%20Care_EN.pdf" id="useCareGuidePdf"><img alt="" src="/images/content/pdfIcon.jpg">Download Use &amp; Care Guide</a>');
        }
    }

    function introduceStyle() {
        $(".print").live("click", function () {
            $("head").append("<link href='/css/content/filter_finder_print.css' type='text/css' rel='stylesheet'>");
            $("#breadcrumb-list").replaceWith('<ul id="breadcrumb-list"><li class="first" style="height:/***/7px;line-height:/***/0px;margin: 0 0 0 7px;*margin: 18px 0 0 0;margin: /***/18px 0 0 0;float: left;background: none;padding-right: 3px;padding-left:/***/7px;"><a href="/">home</a></li><li id="SecondArrow" style="background:none;height:/***/7px;line-height:/***/0px;margin: /***/0px 7px;"><img src="/images/img_breadcrumb_arrow.png">&nbsp;</li><li class="last" style=" height:/***/7px;line-height:/***/0px;margin: 0px;margin-top: /***/18px;float: left;padding-left:10px;padding-left:/***/3px;*margin-top: 18px;"><a href="#">filter finder</a></li></ul>');
        });
    }
    if (url.match(/undercounter-1/)) {
        introduceStyle();
    }
});

function IncludeJavaScript(jsFile) {
    document.write('<script type="text/javascript" src="' + jsFile + '"><\/script>');
}

function prepareJumpPageSubmit(url) {
    var height = 850;
    var width = 980;
    var params = "height=" + height + ",innerHeight=" + height;
    params += ",width=" + width + ",innerWidth=" + width;
    if (window.screen) {
        var ah = screen.availHeight - 30;
        var aw = screen.availWidth - 10;
        var xc = (aw - width) / 2;
        var yc = (ah - height) / 2;
        params += ",left=" + xc + ",screenX=" + xc;
        params += ",top=" + yc + ",screenY=" + yc;
        params += ", location=no";
        params += ", resizable=no";
        params += ", scrollbars=yes";
        params += ", toolbar=no";
        window.open(url, "xx", params);
    }
}
IncludeJavaScript("/javascript/content/jquery.hoverIntent.minified.js");
IncludeJavaScript("/javascript/content/tabbed_box.js");
IncludeJavaScript("/javascript/content/maytag.js");
$(document).ready(function () {
    $(".product-list li, .small-appliances-prod-list li").bind("click", function () {
        $(this).children(".share-learn").children("li").addClass("hover_effect");
    });
    initGlobal();
    if ($("body").hasClass("sign-in-page")) {
        ieHack_forcePosition();
    }
    if ($("body").hasClass("homepage")) {
        initHome();
    }
    if ($("body").hasClass("product-details-page") || $("body").hasClass("product_detail")) {
        initPDP();
    }
    if ($("body").hasClass("owner_center")) {
        initServiceSupport();
    }
    if ($("#content-wrap").hasClass("product-listing")) {
        initListing();
    }
    if ($("#main-container").hasClass("kitchen-galleries")) {
        initKitchenGalleries();
    }
    if ($("#main-container").hasClass("category-page")) {
        initCategory();
    }
    if ($("#main-content").hasClass("pga-america")) {
        initPGA();
    }
    if ($("#main-content").hasClass("find-store")) {
        initFindStore();
    }
    if ($("body").hasClass("my_account")) {
        forceText();
        validateLogin();
    }
    if ($("body").hasClass("contact_us")) {
        $("#topic_select_dropdown").live("click", function () {
            $("#topic_select_dropdown option:disabled").css("font-weight", "bold");
        });
    }
    if ($("body").hasClass("order_checkout")) {
        billinMethod();
    }
    $(".order_checkout #checkout_crumb .button_bottom a").text("HOME").css("background-image", "none");
    $("#page.oc_schedule_repair div.oc_entry_field_input #state.registration_select_input").change(function () {
        $(this).blur();
    });
    findStoreRedirect();
    if ($("#page").hasClass("casper")) {
        if ($("#product-carousel").length > 0) {
            removeOnethumblight();
        }
    }
});

function addCompareURL() {
    if ($.cookie("cmpcatgrpitems_10202") != null) {
        var compareCookie = $.cookie("cmpcatgrpitems_10202");
        var compareCategoryURL = $("#compare-url").attr("compareurl");
        var compareCategoryId = compareCategoryURL.replace("/webapp/wcs/stores/servlet/WHRORNCompareProductsDisplay?catalogId=10552&langId=-1&storeId=10202&categoryId=", "");
        if ($.cookie("cmpcatgrpitems_10202").indexOf(compareCategoryId) > -1) {
            window.open(compareCategoryURL, "_blank", "");
        } else {
            window.open("/webapp/wcs/stores/servlet/WHRORNCompareProductsDisplay?catalogId=10552&langId=-1&storeId=10202", "_blank", "");
        }
    }
}

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
    $(".module-background").click(function () {
        $(".module-container").css({
            display: "none"
        });
    });
    $(".module-close").click(function () {
        $(".module-container").css({
            display: "none"
        });
    });
}

function zoomIn(id) {
    var imageHeight = $(id).height();
    var imageWidth = $(id).width();
    if ($(id).width() <= 1800) {
        $(id).animate({
            height: (imageHeight * 1.25),
            width: (imageWidth * 1.25)
        }, 800);
    } else {
        null;
    }
}

function zoomOut(id) {
    var imageHeight = $(id).height();
    var imageWidth = $(id).width();
    var containerWidth = $("#container").width();
    if (imageWidth >= (containerWidth * 1.1)) {
        $(id).animate({
            height: (imageHeight * 0.75),
            width: (imageWidth * 0.75)
        }, 200);
    } else {
        null;
    }
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
        $("#" + carouselName + " .carousel-next").click(function () {
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
        $("#" + carouselName + " #carousel-next").click(function () {
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
        $("#" + carouselName + " .carousel-previous").click(function () {
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
        $("#" + carouselName + " #carousel-previous").click(function () {
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
var items = $(".module-item").click(function () {
    var index = items.index(this);
    $(".category-overview-content").css("visibility", "hidden");
    $(".category-overview-content").eq(index).css("visibility", "visible");
});

function initGlobal() {
    topNavigation();
    changeStylesOnTheFly();
    $("#global-utilities a.print").click(function () {
        window.print();
    });

    function topNavigation() {
        var focus = false;
        $(".primary").hover(function () {
            var secondaryNavSection = $(this).attr("id").replace("-primary", "-secondary"),
                secondaryNavWidth = ($("#" + secondaryNavSection).width() + 20),
                secondaryNavShift = (($(this).width() + 46) - secondaryNavWidth) / 2;
            $(".secondary").css({
                display: "none"
            });
            $("#" + secondaryNavSection + ".secondary").css({
                display: "block",
                left: $(this).position().left
            });
            $("#" + secondaryNavSection + " li.active-bar-container .active-bar").css({
                width: $(this).width()
            });
            $("#" + secondaryNavSection + ".secondary").css({
                display: "block",
                left: ($(this).position().left - 14.6),
                "margin-left": secondaryNavShift
            });
            focus = true;
        }, function () {
            focus = false;
            var timer = setTimeout(function () {
                if (!focus) {
                    $(".secondary").css({
                        display: "none"
                    });
                }
            }, 300);
        });
        $("#logo").mouseover(function () {
            $(".secondary").css({
                display: "none"
            });
        });
        $(".secondary").hover(function () {
            $(this).css({
                display: "block"
            });
            focus = true;
        }, function () {
            var element = this;
            focus = false;
            var timer = setTimeout(function () {
                if (!focus) {
                    $(element).css({
                        display: "none"
                    });
                }
            }, 300);
        });
    }

    function changeStylesOnTheFly() {
        $("#breadcrumbs #breadcrumb-options a:last").addClass("inactive");
        var tableAmount = $("table").length;
        for (i = 0; i < tableAmount; i++) {
            $("table:eq(" + i + ") tr:even").addClass("odd");
            $("table:eq(" + i + ") td:first").addClass("first");
            $("table:eq(" + i + ") td").eq(1).addClass("second");
            $("table:eq(" + i + ") td").eq(3).addClass("fourth");
            $("table:eq(" + i + ") td:even").addClass("even");
            $("table:eq(" + i + ") tr:last").addClass("last");
        }
        for (i = 0; i < 3; i++) {
            $(".manual-item-container:eq(" + i + ")").addClass("top-row");
        }
        $(".manual-item-container:nth-child(3n)").addClass("last");
        for (i = 0; i < 3; i++) {
            $(".manual-item-container:eq(" + i + ")").addClass("top-row");
        }
        $(".manual-item-container:nth-child(3n)").addClass("last");
        for (i = 0; i < 4; i++) {
            $(".accessories-item:eq(" + i + ")").addClass("top-row");
        }
        for (i = 0; i < 4; i++) {
            $(".attachments-item:eq(" + i + ")").addClass("top-row");
        }
    }
}

function initServiceSupport() {
    var pathname = window.location;
    var pathPartsAccessories = "partsandaccessories";
    var pathReviewsRatings = "ratingsandreviews";
    if (window.location.href.indexOf("partsandaccessories") != -1) {
        $("#product_help_tabs_menu .selected").removeClass("selected");
        $("#product_help_tabs_menu #partsandaccessories_tab").addClass("selected");
        $(".product_help_tab_section.selected").removeClass("selected");
        $("#partsandaccessories.product_help_tab_section").addClass("selected");
    }
    if (window.location.href.indexOf("ratingsandreviews") != -1) {
        $("#product_help_tabs_menu li.selected").removeClass("selected");
        $("#product_help_tabs_menu li#ratings_tab").addClass("selected");
        $(".product_help_tab_section.selected").removeClass("selected");
        $("#ratings.product_help_tab_section ").addClass("selected");
    }
}

function initHome() {
    kitchenAidAutoHomeSlider();
    $(".slider-control").click(function () {
        $(".promotions-slider").animate({
            left: "-" + ($(".slider-control").index(this) * 1020)
        }, 800);
        $(".slider-control").removeClass("active");
        $(this).addClass("active");
    });
    $(".slider-control").hover(function () {
        $(this).addClass("selected");
    }, function () {
        $(this).removeClass("selected");
    });
    $(".promotions-slider").width($(".promotions-slider .promotion").length * $(".promotions-slider .promotion").width());
    $(".promotion-copy-container").hover(function () {
        $(".promotion-copy-background").css({
            background: "#CC0000"
        });
        $(".promotion-copy").css({
            color: "#FFFFFF"
        });
    }, function () {
        $(".promotion-copy-background").css({
            background: "#FFFFFF"
        });
        $(".promotion-copy").css({
            color: "#333333"
        });
    });

    function kitchenAidAutoHomeSlider() {
        var startPromotionAnimation, slider$ = $(".promotions-slider"),
            sliderControls$ = $(".slider-control");
        slider$.hover(function () {
            clearInterval(startPromotionAnimation);
        }, function () {
            startPromotionAnimation = setInterval(function () {
                var promotionSlider$ = $(".promotions-slider"),
                    promotionsPostion = promotionSlider$.position(),
                    promotionAmount = $(".promotion").length,
                    activeOption = $(".slider-control.active"),
                    nxtActiveOption = $(activeOption).next("li"),
                    transitionTime = 800;
                if (promotionsPostion.left > (-(1020 * (promotionAmount - 1)))) {
                    promotionSlider$.animate({
                        left: "-=1020"
                    }, transitionTime);
                    activeOption.removeClass("active");
                    nxtActiveOption.addClass("active");
                } else {
                    promotionSlider$.animate({
                        left: 0
                    }, transitionTime);
                    activeOption.removeClass("active");
                    sliderControls$.eq(0).addClass("active");
                }
            }, 15000);
        });
        sliderControls$.click(function () {
            clearInterval(startPromotionAnimation);
        });
        slider$.trigger("mouseout");
    }
}

function initCategory() {
    $(".module-item img").click(function () {
        updateModuleContent(".module-item img", this);
    });
    $(".module-background").click(function () {
        hideModalContent();
    });
    $(".module-close").click(function () {
        hideModalContent();
    });

    function hideModalContent() {
        videoContent = $(".category-overview-content.active .category-overview-content-video").html();
        $(".category-overview-content.active .category-overview-content-video").html("");
        $(".module-container").css({
            display: "none"
        });
        if ($("#main-container.water-filters").length >= 1) {
            $(".category-overview-content.active .category-overview-content-video").html(videoContent);
        }
    }
    $(".open-module").add(".view-all-additional-content a").click(function (e) {
        e.preventDefault();
        kitchenAidModule();
        if ($(this).parent().hasClass("view-all-additional-content")) {
            updateModuleContent(".open-module", 0);
        } else {
            updateModuleContent(".open-module", this);
        }
    });

    function updateModuleContent(selectorClass, selector) {
        var index = $("" + selectorClass + "").index(selector);
        var videoName = $(".module-item img").eq(index).attr("alt");
        if ($.browser.msie && $.browser.version < 9 && $("#main-container.water-filters").length <= 0) {
            var videoContent = '<video autoplay="autoplay" controls="controls" width="650" height="435" poster="/images/video/' + videoName + '_poster.jpg" ><object id="flowplayer-video" width="640" height="435" data="/javascript/flowplayer-3.2.15.swf" type="application/x-shockwave-flash"><param name="movie" value="/javascript/flowplayer-3.2.15.swf" /><param name="allowfullscreen" value="false" /><param name="flashvars" value="config={\'playlist\':[\'../../images/global/video-posters/' + videoName + "_poster.jpg',{'url':'http://81916b243be118d063e2-42c80eda4617fb6bc414dcba3952a512.r38.cf1.rackcdn.com/" + videoName + ".mp4', 'autoPlay':false, 'autoBuffering':true}],'play':{'opacity':0}}\" /></object><video>";
            $(".category-overview-content.active .category-overview-content-video").html(" ");
            $(".category-overview-content").css("display", "none").removeClass("active");
            $(".category-overview-content").eq(index).css("display", "block").addClass("active");
            $(".category-overview-content.active .category-overview-content-video").html(videoContent);
        } else {
            if ($("#main-container.water-filters").length >= 1) {
                var videoContent = $(".category-overview-content.active .category-overview-content-video").html();
                $(".category-overview-content.active .category-overview-content-video").html(videoContent);
                $(".category-overview-content").css("display", "none").removeClass("active");
                $(".category-overview-content").eq(index).css("display", "block").addClass("active");
            } else {
                var videoContent = '<video controls="controls" preload="auto" autoplay="autoplay" width="650" height="435" poster="/images/video/' + videoName + '_poster.jpg"><source src="http://81916b243be118d063e2-42c80eda4617fb6bc414dcba3952a512.r38.cf1.rackcdn.com/' + videoName + '.ogg" type="video/ogg"></source><source src="http://81916b243be118d063e2-42c80eda4617fb6bc414dcba3952a512.r38.cf1.rackcdn.com/' + videoName + '.mp4" type="video/mp4"></source><source src="http://81916b243be118d063e2-42c80eda4617fb6bc414dcba3952a512.r38.cf1.rackcdn.com/' + videoName + '.webm" type="video/webm"></source><object id="flowplayer" width="650" height="435" data="/javascript/flowplayer-3.2.15.swf" type="application/x-shockwave-flash"><param name="movie" value="/javascript/flowplayer-3.2.15.swf"><param name="allowfullscreen" value="true"><param name="flashvars" value="config={\'playlist\':[\'../../images/global/video-posters/' + videoName + "_poster.jpg',{'url':'http://81916b243be118d063e2-42c80eda4617fb6bc414dcba3952a512.r38.cf1.rackcdn.com/" + videoName + ".mp4', 'autoPlay':false, 'autoBuffering':true}],'play':{'opacity':0}}\"></object></video>";
                $(".category-overview-content.active .category-overview-content-video").html(" ");
                $(".category-overview-content").css("display", "none").removeClass("active");
                $(".category-overview-content").eq(index).css("display", "block").addClass("active");
                $(".category-overview-content.active .category-overview-content-video").html(videoContent);
            }
        }
    }
    kitchenAidCarousel("proline-carousel", 7, 0);
    kitchenAidCarousel("waffle-bakers-carousel", 5, 0);
    kitchenAidCarousel("toaster-carousel", 5, 0);
    kitchenAidCarousel("commercial-carousel", 5, 0);
    kitchenAidCarousel("slow-cookers-carousel", 4, 0);
    kitchenAidCarousel("cooking-carousel", 9, 1);
    kitchenAidCarousel("coffee-carousel", 8, 0);
    kitchenAidCarousel("refrigeration-carousel", 9, 1);
    kitchenAidCarousel("dishwashers-carousel", 9, 1);
    kitchenAidCarousel("ventilation-carousel", 6, 0);
    kitchenAidCarousel("disposers-carousel", 2, 0);
    kitchenAidCarousel("blenders-carousel", 5, 0);
    kitchenAidCarousel("stand-mixers-carousel", 8, 0);
    kitchenAidCarousel("attachments-carousel", 9, 2);
    kitchenAidCarousel("food-processors-carousel", 8, 0);
    kitchenAidCarousel("hand-blenders-carousel", 6, 0);
    kitchenAidCarousel("hand-mixers-carousel", 6, 0);
    kitchenAidCarousel("countertop-ovens-carousel", 6, 0);
}

function initPGA() {
    function updateModuleContent(selectorClass, selector) {
        var index = $("" + selectorClass + "").index(selector);
        var videoName = $(".module-item img").eq(index).attr("alt");
        $(".category-overview-content").css("display", "none").removeClass("active");
        $(".category-overview-content").eq(index).css("display", "block").addClass("active");
    }
    $(".module-item img").click(function () {
        updateModuleContent(".module-item img", this);
    });
    $(".open-module").add(".view-all-additional-content a").click(function (e) {
        e.preventDefault();
        kitchenAidModule();
        if ($(this).parent().hasClass("view-all-additional-content")) {
            updateModuleContent(".open-module", 0);
        } else {
            updateModuleContent(".open-module", this);
        }
    });
    $(".module-background").click(function () {
        videoContent = $(".category-overview-content.active .category-overview-content-video").html();
        $(".category-overview-content.active .category-overview-content-video").html(videoContent);
        $(".module-container").css({
            display: "none"
        });
    });
    $(".module-close").click(function () {
        videoContent = $(".category-overview-content.active .category-overview-content-video").html();
        $(".category-overview-content.active .category-overview-content-video").html(videoContent);
        $(".module-container").css({
            display: "none"
        });
    });
    kitchenAidCarousel("pga-carousel", 9, 1);
}

function initKitchenGalleries() {
    zoomInKitchenGallery();
    zoomOutKitchenGallery();
    var items = $("#kitchen-galleries-carousel .module-item.carousel-item").click(function () {
        var index = items.index(this);
        var id = $(this).attr("id");
        $(".main-kitchen-image").removeClass("active");
        $(".main-kitchen-image").eq(index).addClass("active");
        $(".kitchen-gallery-appliances .module-carousel.active").removeClass("active");
        $(".kitchen-gallery-appliances #" + id + "-appliances-carousel.module-carousel").addClass("active");
    });
    $("#kitchen-gallery-masthead-container").mouseover(function () {
        $(this).css({
            opacity: "1",
            "	filter": "alpha(opacity=100)"
        });
    });

    function zoomInKitchenGallery(id) {
        var imageHeight = $(id).height();
        var imageWidth = $(id).width();
        if ($(id).width() <= 1800) {
            $(id).animate({
                height: (imageHeight * 2.5),
                width: (imageWidth * 2.5)
            }, 800);
        } else {
            null;
        }
    }

    function swapKitchenGallery(id) {
        var kitchenStyle = id;
    }

    function zoomOutKitchenGallery(id) {
        var imageHeight = $(id).height();
        var imageWidth = $(id).width();
        var containerWidth = $("#container").width();
        if (imageWidth >= (containerWidth * 1.1)) {
            $(id).animate({
                height: (imageHeight * 0.8),
                width: (imageWidth * 0.8)
            }, 200);
        } else {
            null;
        }
    }
    $(".kitchen-gallery-masthead-container").mouseover(function () {
        $(".zoom-kitchen-image").animate({
            opacity: 1,
            top: "-500"
        }, 1000);
    });
    $(".kitchen-gallery-masthead-container").mouseout(function () {
        $(".zoom-kitchen-image").animate({
            opacity: 0,
            top: "0"
        }, 500);
    });
    (function ($) {
        var isIE6 = $.browser.msie && $.browser.version < 7;
        var body = $(document.body);
        var window = $(window);
        var jqzoompluging_disabled = false;
        $.fn.jqzoom = function (e) {
            return this.each(function () {
                var t = this.nodeName.toLowerCase();
                if (t == "a") {
                    new jqzoom(this, e);
                }
            });
        };
        jqzoom = function (el, options) {
            function Smallimage(image) {
                var $obj = this;
                this.node = image[0];
                this.findborder = function () {
                    var bordertop = 0;
                    bordertop = image.css("border-top-width");
                    btop = "";
                    var borderleft = 0;
                    borderleft = image.css("border-left-width");
                    bleft = "";
                    if (bordertop) {
                        for (i = 0; i < 3; i++) {
                            var x = [];
                            x = bordertop.substr(i, 1);
                            if (isNaN(x) == false) {
                                btop = btop + "" + bordertop.substr(i, 1);
                            } else {
                                break;
                            }
                        }
                    }
                    if (borderleft) {
                        for (i = 0; i < 3; i++) {
                            if (!isNaN(borderleft.substr(i, 1))) {
                                bleft = bleft + borderleft.substr(i, 1);
                            } else {
                                break;
                            }
                        }
                    }
                    $obj.btop = btop.length > 0 ? eval(btop) : 0;
                    $obj.bleft = bleft.length > 0 ? eval(bleft) : 0;
                };
                this.fetchdata = function () {
                    $obj.findborder();
                    $obj.w = image.width();
                    $obj.h = image.height();
                    $obj.ow = image.outerWidth();
                    $obj.oh = image.outerHeight();
                    $obj.pos = image.offset();
                    $obj.pos.l = image.offset().left + $obj.bleft;
                    $obj.pos.t = image.offset().top + $obj.btop;
                    $obj.pos.r = $obj.w + $obj.pos.l;
                    $obj.pos.b = $obj.h + $obj.pos.t;
                    $obj.rightlimit = image.offset().left + $obj.ow;
                    $obj.bottomlimit = image.offset().top + $obj.oh;
                };
                this.node.onerror = function () {
                    throw "Problems while loading image.";
                };
                this.node.onload = function () {
                    $obj.fetchdata();
                    if ($(".zoomPad", el).length == 0) {
                        obj.create();
                    }
                };
                return $obj;
            }

            function Loader() {
                var e = this;
                this.append = function () {
                    this.node = $("<div/>").addClass("zoomPreload").css("visibility", "hidden").html(settings.preloadText);
                    $(".zoomPad", el).append(this.node);
                };
                this.show = function () {
                    this.node.top = (smallimage.oh - this.node.height()) / 2;
                    this.node.left = (smallimage.ow - this.node.width()) / 2;
                    this.node.css({
                        top: this.node.top,
                        left: this.node.left,
                        position: "absolute",
                        visibility: "visible"
                    });
                };
                this.hide = function () {
                    this.node.css("visibility", "hidden");
                };
                return this;
            }

            function Lens() {
                var e = this;
                this.node = $("<div/>").addClass("zoomPup");
                this.append = function () {
                    $(".zoomPad", el).append($(this.node).hide());
                    if (settings.zoomType == "reverse") {
                        this.image = new Image;
                        this.image.src = smallimage.node.src;
                        $(this.node).empty().append(this.image);
                    }
                };
                this.setdimensions = function () {
                    this.node.w = parseInt(settings.zoomWidth / el.scale.x) > smallimage.w ? smallimage.w : parseInt(settings.zoomWidth / el.scale.x);
                    this.node.h = parseInt(settings.zoomHeight / el.scale.y) > smallimage.h ? smallimage.h : parseInt(settings.zoomHeight / el.scale.y);
                    this.node.top = (smallimage.oh - this.node.h - 2) / 2;
                    this.node.left = (smallimage.ow - this.node.w - 2) / 2;
                    this.node.css({
                        top: 0,
                        left: 0,
                        width: this.node.w + "px",
                        height: this.node.h + "px",
                        position: "absolute",
                        display: "none",
                        borderWidth: 1 + "px"
                    });
                    if (settings.zoomType == "reverse") {
                        this.image.src = smallimage.node.src;
                        $(this.node).css({
                            opacity: 1
                        });
                        $(this.image).css({
                            position: "absolute",
                            display: "block",
                            left: -(this.node.left + 1 - smallimage.bleft) + "px",
                            top: -(this.node.top + 1 - smallimage.btop) + "px"
                        });
                    }
                };
                this.setcenter = function () {
                    this.node.top = (smallimage.oh - this.node.h - 2) / 2;
                    this.node.left = (smallimage.ow - this.node.w - 2) / 2;
                    this.node.css({
                        top: this.node.top,
                        left: this.node.left
                    });
                    if (settings.zoomType == "reverse") {
                        $(this.image).css({
                            position: "absolute",
                            display: "block",
                            left: -(this.node.left + 1 - smallimage.bleft) + "px",
                            top: -(this.node.top + 1 - smallimage.btop) + "px"
                        });
                    }
                    largeimage.setposition();
                };
                this.setposition = function (e) {
                    function r(e) {
                        return el.mousepos.x - e.w / 2 < smallimage.pos.l;
                    }

                    function i(e) {
                        return el.mousepos.x + e.w / 2 > smallimage.pos.r;
                    }

                    function s(e) {
                        return el.mousepos.y - e.h / 2 < smallimage.pos.t;
                    }

                    function o(e) {
                        return el.mousepos.y + e.h / 2 > smallimage.pos.b;
                    }
                    el.mousepos.x = e.pageX;
                    el.mousepos.y = e.pageY;
                    var t = 0;
                    var n = 0;
                    t = el.mousepos.x + smallimage.bleft - smallimage.pos.l - (this.node.w + 2) / 2;
                    n = el.mousepos.y + smallimage.btop - smallimage.pos.t - (this.node.h + 2) / 2;
                    if (r(this.node)) {
                        t = smallimage.bleft - 1;
                    } else {
                        if (i(this.node)) {
                            t = smallimage.w + smallimage.bleft - this.node.w - 1;
                        }
                    } if (s(this.node)) {
                        n = smallimage.btop - 1;
                    } else {
                        if (o(this.node)) {
                            n = smallimage.h + smallimage.btop - this.node.h - 1;
                        }
                    }
                    this.node.left = t;
                    this.node.top = n;
                    this.node.css({
                        left: t + "px",
                        top: n + "px"
                    });
                    if (settings.zoomType == "reverse") {
                        if ($.browser.msie && $.browser.version > 7) {
                            $(this.node).empty().append(this.image);
                        }
                        $(this.image).css({
                            position: "absolute",
                            display: "block",
                            left: -(this.node.left + 1 - smallimage.bleft) + "px",
                            top: -(this.node.top + 1 - smallimage.btop) + "px"
                        });
                    }
                    largeimage.setposition();
                };
                this.hide = function () {
                    img.css({
                        opacity: 1
                    });
                    this.node.hide();
                };
                this.show = function () {
                    if (settings.zoomType != "innerzoom" && (settings.lens || settings.zoomType == "drag")) {
                        this.node.show();
                    }
                    if (settings.zoomType == "reverse") {
                        img.css({
                            opacity: settings.imageOpacity
                        });
                    }
                };
                this.getoffset = function () {
                    var t = {};
                    t.left = e.node.left;
                    t.top = e.node.top;
                    return t;
                };
                return this;
            }

            function Stage() {
                var e = this;
                this.node = $("<div class='zoomWindow'><div class='zoomWrapper'><div class='zoomWrapperTitle'></div><div class='zoomWrapperImage'></div></div></div>");
                this.ieframe = $('<iframe class="zoomIframe" src="javascript:\'\';" marginwidth="0" marginheight="0" align="bottom" scrolling="no" frameborder="0" ></iframe>');
                this.setposition = function () {
                    this.node.leftpos = 0;
                    this.node.toppos = 0;
                    if (settings.zoomType != "innerzoom") {
                        switch (settings.position) {
                        case "left":
                            this.node.leftpos = smallimage.pos.l - smallimage.bleft - Math.abs(settings.xOffset) - settings.zoomWidth > 0 ? 0 - settings.zoomWidth - Math.abs(settings.xOffset) : smallimage.ow + Math.abs(settings.xOffset);
                            this.node.toppos = Math.abs(settings.yOffset);
                            break;
                        case "top":
                            this.node.leftpos = Math.abs(settings.xOffset);
                            this.node.toppos = smallimage.pos.t - smallimage.btop - Math.abs(settings.yOffset) - settings.zoomHeight > 0 ? 0 - settings.zoomHeight - Math.abs(settings.yOffset) : smallimage.oh + Math.abs(settings.yOffset);
                            break;
                        case "bottom":
                            this.node.leftpos = Math.abs(settings.xOffset);
                            this.node.toppos = smallimage.pos.t - smallimage.btop + smallimage.oh + Math.abs(settings.yOffset) + settings.zoomHeight < screen.height ? smallimage.oh + Math.abs(settings.yOffset) : 0 - settings.zoomHeight - Math.abs(settings.yOffset);
                            break;
                        default:
                            this.node.leftpos = smallimage.rightlimit + Math.abs(settings.xOffset) + settings.zoomWidth < screen.width ? smallimage.ow + Math.abs(settings.xOffset) : 0 - settings.zoomWidth - Math.abs(settings.xOffset);
                            this.node.toppos = Math.abs(settings.yOffset);
                            break;
                        }
                    }
                    this.node.css({
                        left: this.node.leftpos + "px",
                        top: this.node.toppos + "px"
                    });
                    return this;
                };
                this.append = function () {
                    $(".zoomPad", el).append(this.node);
                    this.node.css({
                        position: "absolute",
                        display: "none",
                        zIndex: 5001
                    });
                    $(".zoomWindow").animate({
                        opacity: 1
                    }, 2500);
                    if (settings.zoomType == "innerzoom") {
                        this.node.css({
                            cursor: "default"
                        });
                        var t = smallimage.bleft == 0 ? 1 : smallimage.bleft;
                        $(".zoomWrapper", this.node).css({
                            borderWidth: t + "px"
                        });
                    }
                    $(".zoomWrapper", this.node).css({
                        width: Math.round(settings.zoomWidth) + "px",
                        borderWidth: t + "px"
                    });
                    $(".zoomWrapperImage", this.node).css({
                        width: "100%",
                        height: Math.round(settings.zoomHeight) + "px"
                    });
                    $(".zoomWrapperTitle", this.node).css({
                        width: "100%",
                        position: "absolute"
                    });
                    $(".zoomWrapperTitle", this.node).hide();
                    if (settings.title && zoomtitle.length > 0) {
                        $(".zoomWrapperTitle", this.node).html(zoomtitle).show();
                    }
                    e.setposition();
                };
                this.hide = function () {
                    switch (settings.hideEffect) {
                    case "fadeout":
                        this.node.fadeOut(settings.fadeoutSpeed, function () {});
                        break;
                    default:
                        this.node.hide();
                        break;
                    }
                    this.ieframe.hide();
                };
                this.show = function () {
                    switch (settings.showEffect) {
                    case "fadein":
                        this.node.fadeIn();
                        this.node.fadeIn(settings.fadeinSpeed, function () {});
                        break;
                    default:
                        this.node.show();
                        break;
                    }
                    if (isIE6 && settings.zoomType != "innerzoom") {
                        this.ieframe.width = this.node.width();
                        this.ieframe.height = this.node.height();
                        this.ieframe.left = this.node.leftpos;
                        this.ieframe.top = this.node.toppos;
                        this.ieframe.css({
                            display: "block",
                            position: "absolute",
                            left: this.ieframe.left,
                            top: this.ieframe.top,
                            zIndex: 99,
                            width: this.ieframe.width + "px",
                            height: this.ieframe.height + "px"
                        });
                        $(".zoomPad", el).append(this.ieframe);
                        this.ieframe.show();
                    }
                };
            }

            function Largeimage() {
                var e = this;
                this.node = new Image;
                this.loadimage = function (e) {
                    loader.show();
                    this.url = e;
                    this.node.style.position = "absolute";
                    this.node.style.border = "0px";
                    this.node.style.display = "none";
                    this.node.style.left = "-5000px";
                    this.node.style.top = "0px";
                    document.body.appendChild(this.node);
                    this.node.src = e;
                };
                this.fetchdata = function () {
                    var t = $(this.node);
                    var n = {};
                    this.node.style.display = "block";
                    e.w = t.width();
                    e.h = t.height();
                    e.pos = t.offset();
                    e.pos.l = t.offset().left;
                    e.pos.t = t.offset().top;
                    e.pos.r = e.w + e.pos.l;
                    e.pos.b = e.h + e.pos.t;
                    n.x = e.w / smallimage.w;
                    n.y = e.h / smallimage.h;
                    el.scale = n;
                    document.body.removeChild(this.node);
                    $(".zoomWrapperImage", el).empty().append(this.node);
                    lens.setdimensions();
                };
                this.node.onerror = function () {
                    alert("Problems while loading the big image.");
                    throw "Problems while loading the big image.";
                };
                this.node.onload = function () {
                    e.fetchdata();
                    loader.hide();
                    el.largeimageloading = false;
                    el.largeimageloaded = true;
                    if (settings.zoomType == "drag" || settings.alwaysOn) {
                        lens.show();
                        stage.show();
                        lens.setcenter();
                    }
                };
                this.setposition = function () {
                    var e = -el.scale.x * (lens.getoffset().left - smallimage.bleft + 1);
                    var t = -el.scale.y * (lens.getoffset().top - smallimage.btop + 1);
                    $(this.node).css({
                        left: e + "px",
                        top: t + "px"
                    });
                };
                return this;
            }
            var api = null;
            api = $(el).data("jqzoom");
            if (api) {
                return api;
            }
            var obj = this;
            var settings = $.extend({}, $.jqzoom.defaults, options || {});
            obj.el = el;
            el.rel = $(el).attr("rel");
            el.zoom_active = false;
            el.zoom_disabled = false;
            el.largeimageloading = false;
            el.largeimageloaded = false;
            el.scale = {};
            el.timer = null;
            el.mousepos = {};
            el.mouseDown = false;
            $(el).css({
                "outline-style": "none",
                "text-decoration": "none"
            });
            var img = $("img:eq(0)", el);
            el.title = $(el).attr("title");
            el.imagetitle = img.attr("title");
            var zoomtitle = $.trim(el.title).length > 0 ? el.title : el.imagetitle;
            var smallimage = new Smallimage(img);
            var lens = new Lens;
            var stage = new Stage;
            var largeimage = new Largeimage;
            var loader = new Loader;
            $(el).bind("click", function (e) {
                e.preventDefault();
                return false;
            });
            var zoomtypes = ["standard", "drag", "innerzoom", "reverse"];
            if ($.inArray($.trim(settings.zoomType), zoomtypes) < 0) {
                settings.zoomType = "standard";
            }
            $.extend(obj, {
                create: function () {
                    if ($(".zoomPad", el).length == 0) {
                        el.zoomPad = $("<div/>").addClass("zoomPad");
                        img.wrap(el.zoomPad);
                    }
                    if (settings.zoomType == "innerzoom") {
                        settings.zoomWidth = smallimage.w;
                        settings.zoomHeight = smallimage.h;
                    }
                    if ($(".zoomPup", el).length == 0) {
                        lens.append();
                    }
                    if ($(".zoomWindow", el).length == 0) {
                        stage.append();
                    }
                    if ($(".zoomPreload", el).length == 0) {
                        loader.append();
                    }
                    if (settings.preloadImages || settings.zoomType == "drag" || settings.alwaysOn) {
                        obj.load();
                    }
                    obj.init();
                },
                init: function () {
                    if (settings.zoomType == "drag") {
                        $(".zoomPad", el).mousedown(function () {
                            el.mouseDown = true;
                        });
                        $(".zoomPad", el).mouseup(function () {
                            el.mouseDown = false;
                        });
                        document.body.ondragstart = function () {
                            return false;
                        };
                        $(".zoomPad", el).css({
                            cursor: "default"
                        });
                        $(".zoomPup", el).css({
                            cursor: "move"
                        });
                    }
                    if (settings.zoomType == "innerzoom") {
                        $(".zoomWrapper", el).css({
                            cursor: "pointer"
                        });
                    }
                    $(".zoomPad", el).bind("mouseenter mouseover", function (e) {
                        img.attr("title", "");
                        $(el).attr("title", "");
                        el.zoom_active = true;
                        smallimage.fetchdata();
                        if (el.largeimageloaded) {
                            obj.activate(e);
                        } else {
                            obj.load();
                        }
                    });
                    $(".zoomPad", el).bind("mouseleave", function (e) {
                        obj.deactivate();
                    });
                    $(".zoomPad", el).bind("mousemove", function (e) {
                        if (e.pageX > smallimage.pos.r || e.pageX < smallimage.pos.l || e.pageY < smallimage.pos.t || e.pageY > smallimage.pos.b) {
                            lens.setcenter();
                            return false;
                        }
                        el.zoom_active = true;
                        if (el.largeimageloaded && !$(".zoomWindow", el).is(":visible")) {
                            obj.activate(e);
                        }
                        if (el.largeimageloaded && (settings.zoomType != "drag" || settings.zoomType == "drag" && el.mouseDown)) {
                            lens.setposition(e);
                        }
                    });
                    var thumb_preload = new Array;
                    var i = 0;
                    var thumblist = new Array;
                    thumblist = $("a").filter(function () {
                        var e = new RegExp("gallery[\\s]*:[\\s]*'" + $.trim(el.rel) + "'", "i");
                        var t = $(this).attr("rel");
                        if (e.test(t)) {
                            return this;
                        }
                    });
                    if (thumblist.length > 0) {
                        var first = thumblist.splice(0, 1);
                        thumblist.push(first);
                    }
                    thumblist.each(function () {
                        if (settings.preloadImages) {
                            var thumb_options = $.extend({}, eval("(" + $.trim($(this).attr("rel")) + ")"));
                            thumb_preload[i] = new Image;
                            thumb_preload[i].src = thumb_options.largeimage;
                            i++;
                        }
                        $(this).click(function (e) {
                            if ($(this).hasClass("zoomThumbActive")) {
                                return false;
                            }
                            thumblist.each(function () {
                                $(this).removeClass("zoomThumbActive");
                            });
                            e.preventDefault();
                            obj.swapimage(this);
                            return false;
                        });
                    });
                },
                load: function () {
                    if (el.largeimageloaded == false && el.largeimageloading == false) {
                        var e = $(el).attr("href");
                        el.largeimageloading = true;
                        largeimage.loadimage(e);
                    }
                },
                activate: function (e) {
                    clearTimeout(el.timer);
                    lens.show();
                    stage.show();
                },
                deactivate: function (e) {
                    switch (settings.zoomType) {
                    case "drag":
                        break;
                    default:
                        img.attr("title", el.imagetitle);
                        $(el).attr("title", el.title);
                        if (settings.alwaysOn) {
                            lens.setcenter();
                        } else {
                            stage.hide();
                            lens.hide();
                        }
                        break;
                    }
                    el.zoom_active = false;
                },
                swapimage: function (link) {
                    el.largeimageloading = false;
                    el.largeimageloaded = false;
                    var options = new Object;
                    options = $.extend({}, eval("(" + $.trim($(link).attr("rel")) + ")"));
                    if (options.smallimage && options.largeimage) {
                        var smallimage = options.smallimage;
                        var largeimage = options.largeimage;
                        $(link).addClass("zoomThumbActive");
                        $(el).attr("href", largeimage);
                        img.attr("src", smallimage);
                        lens.hide();
                        stage.hide();
                        obj.load();
                    } else {
                        throw "ERROR :: Missing parameter for largeimage or smallimage.";
                    }
                    return false;
                }
            });
            if (img[0].complete) {
                smallimage.fetchdata();
                if ($(".zoomPad", el).length == 0) {
                    obj.create();
                }
            }
            $(el).data("jqzoom", obj);
        };
        $.jqzoom = {
            defaults: {
                zoomType: "standard",
                zoomWidth: 300,
                zoomHeight: 300,
                xOffset: 10,
                yOffset: 0,
                position: "right",
                preloadImages: true,
                preloadText: "Loading zoom",
                title: true,
                lens: true,
                imageOpacity: 0.4,
                alwaysOn: false,
                showEffect: "show",
                hideEffect: "hide",
                fadeinSpeed: "slow",
                fadeoutSpeed: "2000"
            },
            disable: function (e) {
                var t = $(e).data("jqzoom");
                t.disable();
                return false;
            },
            enable: function (e) {
                var t = $(e).data("jqzoom");
                t.enable();
                return false;
            },
            disableAll: function (e) {
                jqzoompluging_disabled = true;
            },
            enableAll: function (e) {
                jqzoompluging_disabled = false;
            }
        };
    })(jQuery);
    $(".jqzoom1").jqzoom({
        zoomType: "innerzoom",
        preloadImages: false,
        alwaysOn: false
    });
    $(".jqzoom2").jqzoom({
        zoomType: "innerzoom",
        preloadImages: false,
        alwaysOn: false
    });
    $(".jqzoom3").jqzoom({
        zoomType: "innerzoom",
        preloadImages: false,
        alwaysOn: false
    });
    $(".jqzoom4").jqzoom({
        zoomType: "innerzoom",
        preloadImages: false,
        alwaysOn: false
    });
    $(".jqzoom5").jqzoom({
        zoomType: "innerzoom",
        preloadImages: false,
        alwaysOn: false
    });
    $(".jqzoom6").jqzoom({
        zoomType: "innerzoom",
        preloadImages: false,
        alwaysOn: false
    });
    kitchenAidCarousel("kitchen-galleries-carousel", 6, 1);
    kitchenAidCarousel("contemporary-appliances-carousel", 6, 1);
    kitchenAidCarousel("south_beach-appliances-carousel", 6, 1);
    kitchenAidCarousel("napa_valley-appliances-carousel", 6, 1);
    kitchenAidCarousel("french_country-appliances-carousel", 6, 1);
    kitchenAidCarousel("craftsman-appliances-carousel", 6, 1);

    function updateModuleContent(selectorClass, selector) {
        var index = $("" + selectorClass + "").index(selector);
        $(".category-overview-content").css("display", "none").removeClass("active");
        $(".category-overview-content").eq(index).css("display", "block").addClass("active");
    }
    $("#kitchen-galleries-carousel ul.carousel-items li.open-modal").click(function () {
        kitchenAidModule();
        updateModuleContent("#kitchen-galleries-carousel ul.carousel-items li.open-modal", this);
    });
    $("#new_mesa").click(function () {
        var iframePath = location.protocol + "//" + location.host + "/videos/brand/kitchen-gallery/360-new_mesa/index.html";
        $("#frame_new_mesa").attr("src", iframePath);
    });
    $("#reclaim_philly").click(function () {
        var iframePath = location.protocol + "//" + location.host + "/videos/brand/kitchen-gallery/360-reclaim_philly/index.html";
        $("#frame_reclaim_philly").attr("src", iframePath);
    });
    $(".module-background").click(function () {
        $(".module-container").css({
            display: "none"
        });
        $(".frame_flash").attr("src", "");
    });
    $(".module-close").click(function () {
        $(".module-container").css({
            display: "none"
        });
        $(".frame_flash").attr("src", "");
    });
}

function initGlossary() {
    $(".glossary-navigation li").click(function () {
        var landingPoint = $(this).attr("class");
        var scrollTime = $(this).index();
        $("html, body").animate({
            scrollTop: $("#" + $(this).attr("class")).offset().top
        }, ($(this).index() * 300));
    });
}

function initPDP() {
    $(".where_to_buy").css({
        height: "35px"
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
    }(function (e) {
        e.fn.j360 = function (e) {
            var t = {
                clicked: false,
                currImg: 1
            };
            var e = jQuery.extend(t, e);
            return this.each(function () {
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
                jQuery("img", t).each(function () {
                    n[++r] = jQuery(this).attr("src");
                    preload(jQuery(this).attr("src"));
                });
                var i = 0;
                jQuery(".preload_img").load(function () {
                    if (++i == r) {
                        $overlay.animate({
                            filter: "alpha(Opacity=0)",
                            opacity: 0
                        }, 500);
                        t.html('<img src="' + n[1] + '" />');
                        $overlay.bind("mousedown touchstart", function (t) {
                            if (t.type == "touchstart") {
                                e.currPos = window.event.touches[0].pageX;
                            } else {
                                e.currPos = t.pageX;
                            }
                            e.clicked = true;
                            return false;
                        });
                        jQuery(document).bind("mouseup touchend", function () {
                            e.clicked = false;
                        });
                        jQuery(document).bind("mousemove touchmove", function (i) {
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
                    jQuery(window).resize(function () {
                        onresizeFunc(t, $overlay);
                    });
                } else {
                    var s = "onorientationchange" in window,
                        o = s ? "orientationchange" : "resize";
                    window.addEventListener(o, function () {
                        onresizeFunc(t, $overlay);
                    }, false);
                }
                onresizeFunc(t, $overlay);
            });
        };
    })(jQuery);
    window.onscroll = function () {
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
        var bottomScrollBoundary = $(".main-column").height() - (addToCartBoxHeight * 1.5);
        if ($(document).scrollTop() >= 195 && $(document).scrollTop() <= $(".main-column").height()) {
            $(".side-column").css({
                "margin-top": addToCartBoxTop
            });
        } else {
            if ($(document).scrollTop() <= 194) {
                $(".side-column").css({
                    "margin-top": "20px"
                });
            }
        } if (($(document).scrollTop() >= bottomScrollBoundary) && (($(".main-column").height() - (addToCartBoxHeight * 1.5) - 200) > 20)) {
            $(".side-column").css({
                "margin-top": ($(".main-column").height() - (addToCartBoxHeight * 1.5) - 200) 
            });
        }
    }
    $(".product-tab-option").click(function () {
        var optionName = $(this).attr("id").replace("_tab", "");
        console.log(optionName);
        $(".product-tab-option.selected").removeClass("selected");
        $(".product-content").removeClass("active");
        $(this).addClass("selected");
        $("#" + optionName + ".product-content").addClass("active");
    });
    $("a span.BVRRCount.BVRRNonZeroCount").live("click", function () {
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
    $("#color-swatches img").click(function () {
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
    $(".choose-color").change(function () {
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
        $(".carousel-item img").each(function () {
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
                $(function () {
                    $(".module-main-content img").draggable();
                });
                $(".module-main-content img").dblclick(function () {
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
    $(".open-module").click(function () {
        kitchenAidModule();
    });
    $(".carousel-item img").click(function () {
        updateModuleContent(this);
    });
    $(".product-image img").click(function () {
        updateModuleContent(this);
    });
    $(".module-background").click(function () {
        $(".module-main-content").html(" ");
        $(".module-container").css({
            display: "none"
        });
    });
    $(".module-close").click(function () {
        $(".module-main-content").html(" ");
        $(".module-container").css({
            display: "none"
        });
    });
    $(".product-details-page .module-main-content img").mouseover(function () {
        zoomIn(".product-details-page .module-main-content img");
    });
    $("#product_help_tabs_menu a").click(function () {
        return false;
    });
    $("#product_help_tabs_menu li").click(function () {
        var optionName = $(this).attr("id");
        var contentDivName = optionName.replace("_tab", "");
        $(".product_help_tab_section.selected").removeClass("selected");
        $("#" + contentDivName + ".product_help_tab_section").addClass("selected");
    });
    var defaultImageHeight = $(".product-details-page .module-main-content img").height();
    var defaultImageWidth = $(".product-details-page .module-main-content img").width();
    $(".product-details-page .module-main-content img").dblclick(function () {
        zoomIn(".product-details-page .module-main-content img");
    });
    kitchenAidCarousel("product-carousel", 5, 1);
    kitchenAidCarousel("module-carousel", 9, 2);
    $("#product_tabs_menu li a").click(function (e) {
        e.preventDefault();
        var selectedSection = $(this).attr("id").replace("_btn", "");
        $(".product_tabs_menu li").removeClass("selected");
        $(".product_tab_section").removeClass("selected");
        $("#" + selectedSection + "_tab").addClass("selected");
        $("#" + selectedSection + ".product_tab_section").addClass("selected");
    });
}

function initListing() {
    addCompareURL();
    $(".addCompare").click(function () {
        var activeCompares = $(".addCompare.active").length;
        var compareCategoryURL = $("#compare-url").attr("compareurl");
        if (activeCompares >= 1) {
            $(".compare-option a").attr("href", compareCategoryURL);
        } else {
            $(".compare-option a").attr("href", "/webapp/wcs/stores/servlet/WHRORNCompareProductsDisplay?catalogId=10552&langId=-1&storeId=10202");
        }
    });

    function addCompareURL() {
        if ($.cookie("cmpcatgrpitems_10202") != null) {
            var compareCookie = $.cookie("cmpcatgrpitems_10202");
            var compareCategoryURL = $("#compare-url").attr("compareurl");
            var compareCategoryId = compareCategoryURL.replace("/webapp/wcs/stores/servlet/WHRORNCompareProductsDisplay?catalogId=10552&langId=-1&storeId=10202&categoryId=", "");
            if ($.cookie("cmpcatgrpitems_10202").indexOf(compareCategoryId) > -1) {
                $(".compare-option a").attr("href", compareCategoryURL);
            } else {
                $(".compare-option a").attr("href", "/webapp/wcs/stores/servlet/WHRORNCompareProductsDisplay?catalogId=10552&langId=-1&storeId=10202&categoryId=");
            }
        }
    }
    var total_checks = $(".prodCompare a.addCompare.active").length;
    if (EndecaHelperJS.pageView == "" || EndecaHelperJS.pageView == "grid") {
        for (i = 0; i < 2; i++) {
            $(".grid-view").eq(i).addClass("active");
            $(".list-view").eq(i).removeClass("active");
        }
        $(".row_cell").css("display", "none");
        $(".tbl_cell").css("display", "block");
    } else {
        for (i = 0; i < 2; i++) {
            $(".grid-view").eq(i).removeClass("active");
            $(".list-view").eq(i).addClass("active");
        }
        $(".tbl_cell").css("display", "none");
        $(".row_cell").css("display", "block");
    }
    $(".grid-view").click(function () {
        for (i = 0; i < 2; i++) {
            $(".grid-view").eq(i).addClass("active");
            $(".list-view").eq(i).removeClass("active");
        }
        $(".tbl_cell").css("display", "block");
        $("#test-entry").css("display", "none");
        $(".row_cell").css("display", "none");
    });
    $(".list-view").click(function () {
        for (i = 0; i < 2; i++) {
            $(".grid-view").eq(i).removeClass("active");
            $(".list-view").eq(i).addClass("active");
        }
        $(".row_cell").css("display", "block");
        $("#test-entry").css("display", "block");
        $(".tbl_cell").css("display", "none");
    });

    function setWaterFiltersCategoryFilterFromUrlParam(filterNumber) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        var pair = vars[0].split("=");
        var filter = decodeURIComponent(pair[1]);
        if ($("#refine_" + filter).is(":checked")) {
            null;
        } else {
            $("#refine_" + filter).trigger("click");
        }
    }
    setWaterFiltersCategoryFilterFromUrlParam("filter");
}

function initFindStore() {
    console.log("initFindStore");

    function setProductId(skuNumber) {
        var query = window.location.search.substring(1);
        var vars = query.split("?");
        var pair = vars[0].split("&");
        var skuNumber = decodeURIComponent(pair[1]);
        if (query != "") {
            var skuNumber = decodeURIComponent(pair[1]);
            $("#iframe-find-a-store").attr({
                src: "http://kithchenaid.links.origin.channelintelligence.com/oemsites/1039222/KA/cii_ka_us_page.asp?" + skuNumber + "&ncii_Zip="
            });
            console.log("The sku number is " + skuNumber);
        }
    }
    setProductId("cii_sSKU");
}

function forceText() {
    function subDetails() {
        var t = setTimeout(function () {
            $("a.subs-edit").text("edit subscription");
            $("a.subs-cancel").text("cancel subscription").click(function () {
                var t2 = setTimeout(function () {
                    $("a.popup_btn_yes").text("submit");
                    $("a.popup_btn_no").text("cancel");
                    console.log("forced text");
                    clearTimeout(t2);
                }, 3000);
            });
            console.log("forced text");
            clearTimeout(t);
        }, 3000);
    }
    $("#viewSubscriptionDetails").live("click", function () {
        subDetails();
    });
    $("#WC_QuickUserRegistrationAddForm_FormInput_challengeQuestion_In_Register_1").attr({
        tabindex: "100"
    });
}

function checkCompareNowById(toggleLinkId) {
    var activeClass = "active";
    var toggleLinkId = "#" + toggleLinkId;
    $(toggleLinkId).toggleClass(activeClass);
}

function ieHack_forcePosition() {
    if ($.browser.msie) {
        var dropdownBox$ = $("#WC_QuickUserRegistrationAddForm_FormInput_challengeQuestion_In_Register_1"),
            t;
        dropdownBox$.bind("DOMSubtreeModified", function () {
            t = setTimeout(function () {
                dropdownBox$.prev().css({
                    padding: "0 0 0 20px"
                });
            }, 300);
        });
    }
}
var findStoreRedirect = function () {
    var pathname = window.location.pathname,
        searchParams = window.location.search,
        protocol = window.location.protocol,
        host = window.location.hostname;
    if ((pathname.indexOf("/find-a-store") != -1 || searchParams.indexOf("global_find-a-store") != -1) && protocol === "https:") {
        window.location.href = "http://" + host + pathname + searchParams;
    }
};

function billinMethod() {
    $('input[type="radio"]').unbind().click(function () {
        var billmeLatterOver250$ = $("#bmlPromoCheckBox"),
            billmeLatter$ = $("#bill_me_laterID"),
            paypal$ = $("#paypalID"),
            otherPayMethod$ = $("#other_payMethod .divIfrmRight");
        billmeLatterOver250$.css({
            display: "none"
        });
        if (billmeLatter$.attr("checked") || paypal$.attr("checked")) {
            if (billmeLatter$.attr("checked")) {
                $("#bmlPromotion").attr("checked", true);
                billmeLatterOver250$.css({
                    display: (parseFloat($(".total_price .total_figures").text().replace(/\$/g, "")) > 250) ? "block" : "none"
                });
            }
            otherPayMethod$.css({
                visibility: "hidden"
            }).slideUp();
        } else {
            otherPayMethod$.css({
                visibility: "visible"
            }).slideDown();
        }
    });
}

function validateLogin() {
    $("#WC_AccountDisplay_links_2").unbind().click(function () {
        var email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            mailBox$ = $("#WC_AccountDisplay_FormInput_logonId_In_Logon_1");
        $("#WC_AccountDisplay_div_7 p input").each(function () {
            var input$ = $(this);
            input$.removeClass("invalidData");
            if (input$.val() === "") {
                input$.addClass("invalidData");
            }
        });
        if (!email.test(mailBox$.val())) {
            mailBox$.addClass("invalidData");
        }
    });
}

function removeOnethumblight() {
    if ($(".casper #product-carousel .carousel-items").length <= 1) {
        $(".casper #product-carousel").css("display", "none");
    }
}