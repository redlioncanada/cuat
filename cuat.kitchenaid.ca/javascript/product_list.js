var sortBarActivated = false;
var toolTipsActivated = false;
var quickHoverActivated = false;
$(document).ready(function () {
    initiateQuickViewHover();
    initiateToolTips();
    inspectPageForState();
});

function runProdListScripts() {
    activateSortBarButtons();
}

function doubleCheckInit() {
    if (!sortBarActivated) {
        activateSortBarButtons();
    }
    if (!toolTipsActivated) {
        initiateToolTips();
    }
    if (!quickHoverActivated) {
        initiateQuickViewHover();
    }
}

function initiateProductListPage() {
    $.get("product_list_detail_tmpl.html", function (template) {
        try {
            $.tmpl(template).appendTo(".product_detail_set");
        } catch (err) {
            alert("import error: " + err);
        }
        try {
            if (!sortBarActivated) {}
            if (!toolTipsActivated) {
                initiateToolTips();
            }
            if (!quickHoverActivated) {
                initiateQuickViewHover();
            }
        } catch (err) {
            alert(err);
        }
    });
}

function initiateCompareNow() {
    $(".compare_product_button").click(function () {
        addToProductListCompareNow($(this));
        return false;
    });
}

function addToProductListCompareNow(compareLink) {
    if (compareLink.hasClass("compare_product_button_chkd")) {
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

//QC 57 customization
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
                    }
                }
            }
        }
    }
    if (itemsLength > 1) {
        $(".compare_active").addClass("readyCompare");
        $("div.compare-option").unbind("click");
        $("div.compare-option").click(function (e) {
            addCompareURL();
        });
        $("div.compare-option").addClass("active");
        $("div.compare-option").html("<p>Compare</p>");
    } else {
        $("div.compare-option").html("<p>Compare</p>");
        $("div.compare-option").removeClass("active");
        $("div.compare-option").unbind("click");
    }
}
function toggleCompareNowClass(toggleButton) {
	toggleButton.toggleClass("compare_product_button_chkd");
	toggleButton.toggleClass("compare_product_button");
	return false;
}
function initiateQuickViewHover() {
	$("div.product_image_link").hover( function() {
		$(this).parent().find("div.quick_view_hover_button").show();
		$(this).parent().find("a.quick_view_hover").show();
	}, function() {
		$(this).parent().find("div.quick_view_hover_button").hide();
		$(this).parent().find("a.quick_view_hover").hide();
	});
	quickHoverActivated = true;
}
function styleCellsAndBorders() {
    if ($("#page").hasClass("product_list_page") || $("#page").hasClass("product_list_accessories_page")) {
        var listContainers = $("#page").find(".product_list_table_container");
        listContainers.each(function () {
            var myProdSets = $(this).find("div.product_detail_set");
            var totalProdSets = myProdSets.length;
            myProdSets.each(function () {
                var myIdx = $(this).index();
                if ((myIdx + 1) % 4 == 0) {
                    $(this).find(".tbl_cell").css("border-right", "none");
                }
                var distFromEnd = totalProdSets - (myIdx + 1);
                if (distFromEnd < 4) {
                    $(this).css("border-bottom", "none");
                }
            });
        });
    }
    if ($("#page").hasClass("product_list_pair_page")) {
        var listContainers = $("#page").find(".product_list_table_container");
        listContainers.each(function () {
            var myProdSets = $(this).find("div.product_detail_set");
            var totalProdSets = myProdSets.length;
            justBorderedRight = false;
            myProdSets.each(function () {
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
                } if ((myIdx + 1) % 4 == 0) {
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
    if ($("#page").hasClass("product_list_list_page")) {
        var listContainers = $("#page").find(".product_list_table_container");
        listContainers.each(function () {
            var myProdSets = $(this).find("div.product_detail_set");
            myProdSets.first().find("div.row_cell").css("border-top", "none");
            myProdSets.last().find("div.row_cell").css("border-bottom", "none");
        });
    }
    if ($("#page").hasClass("product_list_list_pair_page")) {
        var listContainers = $("#page").find(".product_list_table_container");
        listContainers.each(function () {
            var myProdSets = $(this).find("div.product_detail_set");
            myProdSets.each(function () {
                var myIdx = $(this).index();
                if ((myIdx + 1) % 2 == 0) {
                    $(this).find(".row_cell").css("border-bottom", "1px dotted #A9A9A9");
                    $(this).find(".row_cell").css("margin-bottom", "3px");
                    $(this).next().find(".row_cell").css("border-top", "1px dotted #A9A9A9");
                    $(this).next().find(".row_cell").css("padding-top", "10px");
                }
            });
            myProdSets.last().find(".row_cell").css("border-bottom", "none");
        });
    }
    if ($("#page").hasClass("product_list_list_accessories_page")) {
        var listContainers = $("#page").find(".product_list_table_container");
        listContainers.each(function () {
            var myProdSets = $(this).find("div.product_detail_set");
            myProdSets.first().find(".row_cell").css("border-top", "none");
            myProdSets.last().find(".row_cell").css("border-bottom", "none");
        });
    }
}
function initiateSortBar() {
    $.get("sort_bar_tmpl.html", function (template) {
        try {
            $.tmpl(template).appendTo(".sort_view_display_bar");
        } catch (err) {}
    });
}
function activateSortBarButtons() {
	$("#page").find("a.high_to_low").click( function() {
		$("#page").find("a.low_to_high").removeClass("dark_bg_link");
		$("#page").find("a.high_to_low").removeClass("light_bg_link");
		$("#page").find("a.high_to_low").addClass("dark_bg_link");
		$("#page").find("a.low_to_high").addClass("light_bg_link");
		return false;
	});
	$("#page").find("a.low_to_high").click( function() {
		$("#page").find("a.high_to_low").removeClass("dark_bg_link");
		$("#page").find("a.low_to_high").removeClass("light_bg_link");
		$("#page").find("a.low_to_high").addClass("dark_bg_link");
		$("#page").find("a.high_to_low").addClass("light_bg_link");
		return false;
	});
	$("#page").find("a.by_thumbnail").click( function() {
		thumbnailClicked();
		return false;
	});
	$("#page").find("a.by_list").click( function() {
		listClicked();
		return false;
	});
	$("#page").find("a.by_twelve").click( function() {
		$("#page").find("a.by_all").removeClass("dark_bg_link");
		$("#page").find("a.by_twelve").removeClass("light_bg_link");
		$("#page").find("a.by_twelve").addClass("dark_bg_link");
		$("#page").find("a.by_all").addClass("light_bg_link");
		return false;
	});
	$("#page").find("a.by_all").click( function() {
		$("#page").find("a.by_twelve").removeClass("dark_bg_link");
		$("#page").find("a.by_all").removeClass("light_bg_link");
		$("#page").find("a.by_all").addClass("dark_bg_link");
		$("#page").find("a.by_twelve").addClass("light_bg_link");
		return false;
	});
	sortBarActivated = true;
}
var productListClassPairs = new Array( [ "product_list_page",
		"product_list_list_page" ], [ "product_list_pair_page",
		"product_list_list_pair_page" ], [ "product_list_accessories_page",
		"product_list_list_accessories_page" ], [ "search_result_page",
		"search_result_page" ]);
function inspectPageForState() {
	pageClassPair = getPageClassPair();
	//not in use after QC 57 
	/*if ($("#page").hasClass(pageClassPair[0])) {
		thumbnailClicked();
	} else {
		if ($("#page").hasClass(pageClassPair[1])) {
			listClicked();
		}
	}*/
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
		if ($("#page").hasClass(currPair[0])
				|| $("#page").hasClass(currPair[1])) {
			return currPair;
		}
	}
}
function switchPageClass(aClass, bClass) {
	if ($("#page").hasClass(aClass)) {
		$("#page").removeClass(aClass);
		$("#page").addClass(bClass);
	} else {
		if ($("#page").hasClass(bClass)) {
			$("#page").removeClass(bClass);
			$("#page").addClass(aClass);
		}
	}
	styleCellsAndBorders();
}
var product_list_timeout = 500;
var closetimer = null;
function initiateToolTips() {
	$(".ftr_tooltip_source").bind("mouseover", tooltipOpen);
	$(".ftr_tooltip_source").bind("mouseleave", tooltipClose);
	$(".product_tooltip").bind("mouseover", tooltipOpen);
	$(".product_tooltip").bind("mouseleave", tooltipClose);
}
function tooltipOpen(eventObject) {
	tooltipClose();
	var offset_adjust = 10;
	tool_tips = $(document).find(".product_tooltip");
	for (i = 0; i < tool_tips.length; i++) {
		var curr_pop = tool_tips[i];
		if ($(this).hasClass($(curr_pop).attr("id"))) {
			unique_ftr_tooltip = "#" + $(curr_pop).attr("id");
		}
	}
	$(unique_ftr_tooltip).show();
	var posX = $(this).offset().left - 10;
	var posY = $(this).offset().top - offset_adjust
			- $(unique_ftr_tooltip).height();
	$(unique_ftr_tooltip).offset( {
		top : posY,
		left : posX
	});
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