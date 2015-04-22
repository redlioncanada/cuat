var sortBarActivated = false;
var toolTipsActivated = false;
var quickHoverActivated = false;
$(document).ready(function() {
    styleInnerHTMLs();
    initiateQuickViewHover();
    initiateToolTips();
    $("div.compare_btn_container label").each(function() {
        var txt = $(this).text().toLowerCase();
        $(this).text(txt);
    });
    if ($("#page").hasClass("laundry")) {
        $(".compare_now_button").click(function() {
            $(this).next("label").text(this.checked ? "compare now" : "compare");
            $(this).next("label").css("color", this.checked ? "#f2a012" : "#0099ff");
        });
    }
    changeQuickViewColor("#quick_view_wrapper_whirlpool");
    changeQuickViewColor("#quick_view_derivatives_wrapper_whirlpool");
    removeRightBorder();
    scrollSortBar();
});
function scrollSortBar() {
    var sortOffset = $(".endeca_rightContainer .endeca_sortViewDisplayBar_top").offset();
    if (sortOffset && $("#compare-tray").length > 0) {
        $(window).scroll(function() {
            if ($(window).scrollTop() >= sortOffset.top) {
                $(".endeca_sortViewDisplayBar_top, #compare-tray-container").addClass("sticky");
            } else {
                $(".endeca_sortViewDisplayBar_top, #compare-tray-container").removeClass("sticky");
            }
        });
    }
}
function removeRightBorder() {
    $(".product_detail_set").removeClass("rowEnd");
    if ($("#page").hasClass("product_list_page") || $("#page").hasClass("product_list_accessories_page")) {
        var i = 0;
        $(".product_list_table_container").children().each(function() {
            if (($(this).get(0).tagName).toLocaleLowerCase() == "div") {
                i++;
                if (i % 4 == 0) {
                    $(this).addClass("rowEnd");
                }
            } else {
                if (($(this).get(0).tagName).toLocaleLowerCase() == "h1") {
                    $(this).prev("div").hasClass("rowEnd") ? "" : $(this).prev("div").addClass("rowEnd");
                    i = 0;
                }
            }
        });
        $(".product_detail_set:last").hasClass("rowEnd") ? "" : $(".product_detail_set:last").addClass("rowEnd");
    }
}
function initiateProductListPage() {
    $.get("product_list_detail_tmpl.html", function(template) {
        try {
            $.tmpl(template).appendTo(".product_detail_set");
        } catch (err) {
        }
        try {
            if (!toolTipsActivated) {
                initiateToolTips();
            }
            if (!sortBarActivated) {
            }
            if (!quickHoverActivated) {
            }
        } catch (err) {
        }
    });
}
function initiateCompareNow() {
    $(".compare_product_button").click(function() {
        addToProductListCompareNow($(this));
        return false;
    });
}
function addToProductListCompareNow(compareLink) {
    if (compareLink.hasClass("compare_product_button_chkd")) {
        alert("FIX ME: opening compare");
        return false;
    }
    checkCompareNow(compareLink);
    return false;
}
function checkCompareNowById(toggleLinkId) {
    myLink = $("#" + toggleLinkId);
    if (myLink.length) {
        checkCompareNow(myLink);
    }
}
function checkCompareNow(toggleButton) {
    var compareCheckBox = toggleButton.find("input[type=checkbox]");
    var compareCheckBoxVisible = toggleButton.find("input[type=checkbox]:visible");
    if (!$($(compareCheckBox)[0]).is(":checked")) {
        compareCheckBox.attr("checked", true);
        toggleButton.addClass("c_on");
        toggleButton.removeClass("c_off");
        $("#btn_" + toggleButton.attr("id")).addClass("compare_active");
        if (navigator.appVersion.indexOf("MSIE") != -1) {
            toggleButton.find("label").attr("class", "label_check_compare c_on_compare");
        }
    } else {
        toggleButton.addClass("c_on");
        toggleButton.removeClass("c_off");
        $("#btn_" + toggleButton.attr("id")).addClass("compare_active");
        if (navigator.appVersion.indexOf("MSIE") != -1) {
            toggleButton.find("label").attr("class", "label_check_compare c_on_compare");
        }
    }
    var compareCheckBoxId = toggleButton.find("input[type=checkbox]").attr("id");
    var catgrpAndcatentryId = compareCheckBoxId.split("_");
    var catgroupId = catgrpAndcatentryId[0];
    var catId = catgrpAndcatentryId[1];
    var nCompareList = compareProductJS.getCompareCookie();
    var itemsLength;
    if (catgroupId != null && nCompareList != null && nCompareList != "") {
        var categorySplit = new Array();
        var catentrySplit = new Array();
        categorySplit = nCompareList.split("|");
        var counter = 0;
        for (var categoryCount = 0; categoryCount < categorySplit.length; categoryCount++) {
            catentrySplit = categorySplit[categoryCount].split(":");
            if (catentrySplit[0] == catgroupId) {
                var itemsSplit = new Array();
                itemsSplit = catentrySplit[1].split("_");
                itemsLength = itemsSplit.length;
                for (var i = 0; i < itemsLength; i++) {
                    counter++;
                    if (catId == itemsSplit[i]) {
                        $(".valueCounter" + catId).html(counter);
                        $(".count" + catId).show();
			//addToCompareTray(itemsSplit[i], catentrySplit[0]);
                    }
                }
            }
        }
    }
    if (itemsLength > 1) {
        $(".compare_active").addClass("readyCompare");
        $("div.bar_compare_btn").unbind("click");
        $("div.bar_compare_btn").click(function(e) {
            var url = document.getElementById("Comparelnk").value;
            window.open(url, "_self");
        });
        $("div.bar_compare_btn").addClass("active");
    } else {
        $("div.bar_compare_btn").removeClass("active");
        $("div.bar_compare_btn").unbind("click");
    }
}
function toggleCompareNowClass(toggleButton) {
    toggleButton.toggleClass("compare_product_button_chkd");
    toggleButton.toggleClass("compare_product_button");
    return false;
}
function styleCellsAndBorders() {
    if ($("#page").hasClass("product_list_page") || $("#page").hasClass("product_list_accessories_page")) {
        var listContainers = $("#page").find(".product_list_table_container");
        listContainers.each(function() {
            var myProdSets = $(this).find("div.product_detail_set");
            var totalProdSets = myProdSets.length;
            var myIdx = 0;
            myProdSets.each(function() {
                if ((myIdx + 1) % 4 == 0) {
                    $(this).find(".tbl_cell").css("border-right", "none");
                }
                var distFromEnd = totalProdSets - (myIdx + 1);
                myIdx++;
            });
        });
    }
    if ($("#page").hasClass("product_list_pair_page")) {
        var listContainers = $("#page").find(".product_list_table_container");
        listContainers.each(function() {
            var myProdSets = $(this).find("div.product_detail_set");
            var totalProdSets = myProdSets.length;
            justBorderedRight = false;
            myProdSets.each(function() {
                var myIdx = $(this).index();
                $(this).find(".tbl_cell").css("border-right", "none");
                if ((myIdx + 1) % 2 == 0) {
                    $(this).find(".tbl_cell").css("border-right", "1px dotted #A9A9A9");
                    $(this).find(".tbl_cell").css("padding-right", "2px");
                    $(this).find(".tbl_cell").css("margin-right", "2px");
                    justBorderedRight = true;
                } else {
                    if (justBorderedRight) {
                        $(this).find(".tbl_cell").css("border-left", "1px dotted #A9A9A9");
                    }
                }
                if ((myIdx + 1) % 4 == 0) {
                    $(this).find(".tbl_cell").css("border-right", "none");
                    justBorderedRight = false;
                }
                var distFromEnd = totalProdSets - (myIdx + 1);
                if (distFromEnd < 4) {
                    $(this).css("border-bottom", "none");
                }
            });
        });
    }
    if ($("#page").hasClass("product_list_list_pair_page")) {
        var listContainers = $("#page").find(".product_list_table_container");
        listContainers.each(function() {
            var myProdSets = $(this).find("div.product_detail_set");
            myProdSets.each(function() {
                var myIdx = $(this).index();
                if ((myIdx + 1) % 2 == 0) {
                    $(this).find(".row_cell").css("border-bottom", "1px dotted #A9A9A9");
                    $(this).find(".row_cell").css("margin-bottom", "3px");
                    $(this).find(".row_cell").next().css("border-top", "1px dotted #A9A9A9");
                    $(this).find(".row_cell").next().css("padding-top", "10px");
                }
            });
            myProdSets.last().css("border-bottom", "none");
        });
    }
}
function styleInnerHTMLs() {
}
function initiateToolTips() {
    $(".ftr_tooltip_source").bind("mouseover", tooltipOpen);
    $(".ftr_tooltip_source").bind("mouseleave", tooltipTimer);
    $(".product_tooltip").bind("mouseover", tooltipOpen);
    $(".product_tooltip").bind("mouseleave", tooltipTimer);
    toolTipsActivated = true;
}
function initiateQuickViewHover() {
    $("div.product_image_link").hover(function() {
        $(this).parent().find("div.quick_view_hover_button").show();
        $(this).parent().find("a.quick_view_hover").show();
    }, function() {
        $(this).parent().find("div.quick_view_hover_button").hide();
        $(this).parent().find("a.quick_view_hover").hide();
    });
    quickHoverActivated = true;
}
function initiateSortBar() {
    $.get("sort_bar_tmpl.html", function(template) {
        try {
            $.tmpl(template).appendTo(".sort_view_display_bar");
        } catch (err) {
            alert("error : " + err);
        }
    });
}
function activateSortBarButtons() {
    $("#page").find("a.high_to_low").click(function() {
        $("#page").find("a.low_to_high").removeClass("dark_bg_link");
        $("#page").find("a.high_to_low").removeClass("light_bg_link");
        $("#page").find("a.high_to_low").addClass("dark_bg_link");
        $("#page").find("a.low_to_high").addClass("light_bg_link");
        return false;
    });
    $("#page").find("a.low_to_high").click(function() {
        $("#page").find("a.high_to_low").removeClass("dark_bg_link");
        $("#page").find("a.low_to_high").removeClass("light_bg_link");
        $("#page").find("a.low_to_high").addClass("dark_bg_link");
        $("#page").find("a.high_to_low").addClass("light_bg_link");
        return false;
    });
    $("#page").find("a.by_thumbnail").click(function() {
        thumbnailClicked();
        return false;
    });
    $("#page").find("a.by_list").click(function() {
        listClicked();
        return false;
    });
    $("#page").find("a.by_twelve").click(function() {
        $("#page").find("a.by_all").removeClass("dark_bg_link");
        $("#page").find("a.by_twelve").removeClass("light_bg_link");
        $("#page").find("a.by_twelve").addClass("dark_bg_link");
        $("#page").find("a.by_all").addClass("light_bg_link");
        return false;
    });
    $("#page").find("a.by_all").click(function() {
        $("#page").find("a.by_twelve").removeClass("dark_bg_link");
        $("#page").find("a.by_all").removeClass("light_bg_link");
        $("#page").find("a.by_all").addClass("dark_bg_link");
        $("#page").find("a.by_twelve").addClass("light_bg_link");
        return false;
    });
    sortBarActivated = true;
}
var productListClassPairs = new Array(["product_list_page", "product_list_list_page"], ["product_list_pair_page", "product_list_list_pair_page"], ["product_list_accessories_page", "product_list_list_accessories_page"], ["search_result_page", "search_result_page"]);
function inspectPageForState() {
    pageClassPair = getPageClassPair();
    if ($("page").hasClass(pageClassPair[0])) {
        thumbnailClicked();
    } else {
        listClicked();
    }
}
function thumbnailClicked() {
    pageClassPair = getPageClassPair();
    if (!$("#page").hasClass(pageClassPair[0])) {
        switchPageClass(pageClassPair[0], pageClassPair[1]);
    } else {
        return false;
    }
    $("#page").find("a.by_list").removeClass("dark_bg_list");
    $("#page").find("a.by_thumbnail").removeClass("light_bg_thumbnail");
    $("#page").find("a.by_thumbnail").addClass("dark_bg_thumbnail");
    $("#page").find("a.by_list").addClass("light_bg_list");
    return false;
}
function listClicked() {
    pageClassPair = getPageClassPair();
    if (!$("#page").hasClass(pageClassPair[1])) {
        switchPageClass(pageClassPair[0], pageClassPair[1]);
    } else {
        return false;
    }
    $("#page").find("a.by_thumbnail").removeClass("light_bg_list");
    $("#page").find("a.by_list").removeClass("light_bg_list");
    $("#page").find("a.by_list").addClass("dark_bg_list");
    $("#page").find("a.by_thumbnail").addClass("light_bg_thumbnail");
    return false;
}
function getPageClassPair() {
    for (i = 0; i < productListClassPairs.length; i++) {
        currPair = productListClassPairs[i];
        if ($("#page").hasClass(currPair[0]) || $("#page").hasClass(currPair[1])) {
            return currPair;
        }
    }
}
function switchPageClass(aClass, bClass) {
    if ($("#page").hasClass(aClass)) {
        $("#page").removeClass(aClass);
        $("#page").addClass(bClass);
    } else {
        $("#page").removeClass(bClass);
        $("#page").addClass(aClass);
    }
    styleCellsAndBorders();
    return false;
}
var product_list_timeout = 800;
function tooltipOpen(eventObject) {
    tooltipClose();
    var offset_adjust = 60;
    tool_tips = $(document).find(".product_tooltip");
    for (i = 0; i < tool_tips.length; i++) {
        var curr_pop = tool_tips[i];
        if ($(this).hasClass($(curr_pop).attr("id"))) {
            unique_ftr_tooltip = "#" + $(curr_pop).attr("id");
        }
    }
    $(unique_ftr_tooltip).show();
    var posX = $(this).offset().left;
    var posY = $(this).offset().top - offset_adjust - $(unique_ftr_tooltip).height();
    $(unique_ftr_tooltip).css("top", posY);
    $(unique_ftr_tooltip).css("left", posX);
    tooltipCancelTimer();
}
function tooltipClose() {
    $(".product_tooltip").hide();
    unique_ftr_tooltip = null;
}
function tooltipTimer() {
    closetimer = window.setTimeout(tooltipClose, product_list_timeout);
}
function tooltipCancelTimer() {
    if (closetimer) {
        window.clearTimeout(closetimer);
        closetimer = null;
    }
}
function changeQuickViewColor(idName) {
    $(idName + " .color_and_msrp:gt(0)").hide();
    $(idName + " .product_colors img:eq(0)").css("border", "solid 1px #15A0FB");
    $(idName + " .product_colors img").click(function() {
        var index = $(idName + " .product_colors img").index($(this));
        $(idName + " .product_colors .color_and_msrp:eq(" + index + ")").show().siblings(idName + " .product_colors .color_and_msrp").hide();
        $(idName + " .product_colors img:eq(" + index + ")").css("border", "solid 1px #15A0FB").siblings(idName + " .product_colors img").css("border", "solid 1px #DDDDDD");
    });
    $(idName + " .product_colors img").hover(function() {
        var index2 = $(idName + " .product_colors img").index($(this));
        switch (index2) {
            case 0:
                $(idName + " .product_colors .color_tooltip_popup:eq(" + index2 + ")").css({display: "block",background: "url(" + tb_branch + "images/img_color_tooltip_left.png) no-repeat scroll 0 0 transparent"});
                break;
            case 1:
                $(idName + " .product_colors .color_tooltip_popup:eq(" + index2 + ")").css({display: "block",left: "5px"}).siblings(idName + " .product_colors .color_tooltip_popup").css("display", "none");
                break;
            case 2:
                $(idName + " .product_colors .color_tooltip_popup:eq(" + index2 + ")").css({display: "block",left: "32px"}).siblings(idName + " .product_colors .color_tooltip_popup").css("display", "none");
                break;
        }
    }, function() {
        $(idName + " .product_colors .color_tooltip_popup").hide();
    });
}
