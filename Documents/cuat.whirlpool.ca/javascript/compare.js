var centerModal = function($modal) {
    var top, left;
    top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2;
    left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;
    $modal.css({top: top,left: left});
};
$(function() {
    var modal = $(".product_compare_remove_main_box.generic_popup");
    centerModal(modal);
    $(window).resize(function() {
        centerModal(modal);
    });
});
function readyCompare(e, id, viewMode, catgroupId) {
    var obj = $("#comp" + viewMode + "_" + id);
    var btn = $("#btn_comp" + viewMode + "_" + id);
    var nCompareList = compareProductJS.getCompareCookie();
    var countCompare = 0;
    if (nCompareList != undefined) {
        var arrayTab = nCompareList.split("|");
        for (index = 0; index < arrayTab.length; index++) {
            if (arrayTab[index] != "" && arrayTab[index].indexOf(catgroupId) > -1) {
                var tabInfo = arrayTab[index].split(":");
                var tabCatgroupInfo = tabInfo[0];
                var tabCatentryInfo = tabInfo[1];
                if (tabCatentryInfo != null) {
                    var tabCatentryArray = tabCatentryInfo.split("_");
                    countCompare = tabCatentryArray.length;
                    var counter = 0;
                    for (i = 0; i < countCompare; i++) {
                        counter++;
                        $(".valueCounter" + tabCatentryArray[i]).html(counter);
                        $(".count" + tabCatentryArray[i]).show();
                    }
                }
            }
        }
    }
    if ($("#btn_comp" + viewMode + "_" + id).hasClass("readyCompare") && e.id == "btn_comp" + viewMode + "_" + id) {
        if ($("#compare-tray-container.pdp").length < 1) {
            var url = document.getElementById("Comparelnk").value;
            window.open(url, "_self");
        }
    } else {
        if ($(obj).children()[0].checked) {
            $(obj).addClass("c_off");
            $(obj).removeClass("c_on");
            $(obj).children()[0].checked = false;
            $(".count" + id).hide();
            $(".valueCounter" + id).html("");
            $(btn).removeClass("compare_active");
            $(btn).removeClass("readyCompare");
        } else {
            $(obj).addClass("c_on");
            $(obj).removeClass("c_off");
            $(obj).children()[0].checked = true;
            $(btn).addClass("compare_active");
        }
        if (countCompare > 1) {
            $(".compare_active").addClass("readyCompare");
            $(".bar_compare_btn").addClass("active");
        } else {
            $(".compare_active").removeClass("readyCompare");
            $(".bar_compare_btn").removeClass("active");
        }
    }
}
function updateCounter(id) {
    var counterRemoved = $(".valueCounter" + id).html();
    $("span[class ^= 'valueCounter']:not(:empty)").each(function(i, value) {
        var val = $(value).html();
        if (counterRemoved != val) {
            if (counterRemoved < val) {
                val = val - 1;
                $(value).html(val);
            }
        }
    });
}
function getTotalValidCells(row) {
    var total_valid = 0;
    for (var i = 1; i <= 5; i++) {
        if ($($(row).children()[i]).html() != "&nbsp;") {
            total_valid++;
        }
    }
    return total_valid;
}
function addToCompareTray(catentryId, catgroupId) {
    $("#compare-tray-container").css("display", "block");
    var target = $("#compare-tray-list .empty").eq(0);
    if ($("#compare-tray-container.pdp").length > 0) {
        var compareTrayImageSrc = $(".product-image img").attr("src");
    } else {
        if ($("#compare-tray-container.plp").length > 0) {
            var compareTrayImageSrc = $("#complist_" + catentryId).parents(".applince").find("img.img_appliance").attr("src");
        }
    }
    var onclick = "javascript:compareProductJS.addProductToCompare(this,'" + catgroupId + "','" + catentryId + "', 'list', 'PDP');";
    $(target).attr("id", "ctl-" + catentryId);
    $(target).append('<img class="delete" src="/images/icons/red-delete.png">');
    $(target).append('<img id="compareTrayImage_' + catentryId + '" src="' + compareTrayImageSrc + '" onclick="' + onclick + '"/>');
    $(target).removeClass("empty");
    if ($("#compare-tray-list .empty").length < 3) {
        $("#compare-tray-button").addClass("active");
        $("#compare-tray-button").wrap('<a href="' + $("#compareTrayCompareLink").val() + '"></a>');
    }
    if ($("#compare-tray-container.pdp").length > 0) {
        $("addToCompare_" + catentryId).attr("checked", "checked");
    }
}
function removeFromCompareTray(catentryId) {
    $("#ctl-" + catentryId).html("");
    $("#ctl-" + catentryId).addClass("empty");
    if ($("#compare-tray-container.pdp").length > -1) {
        $("#complist_" + catentryId).addClass("c_off");
        $("#complist_" + catentryId).removeClass("c_on");
    }
    if ($("#compare-tray-list .empty").length == 4) {
        $("#compare-tray-container.pdp").css("display", "none");
    }
    if ($("#compare-tray-list .empty").length > 2) {
        $("#compare-tray-button").removeClass("active");
    }
    if ($("#compare-tray-container.pdp").length > 0) {
        $("addToCompare_" + catentryId).removeAttr("checked");
    }
}
function updateCompareTray() {
    if ($("#compare-tray-list .empty").length < 3) {
        $("#compare-tray-button").addClass("active");
        if (!$("#compare-tray-button").parent().is("a")) {
            $("#compare-tray-button").wrap('<a href="' + $("#compareTrayCompareLink").val() + '"></a>');
        }
    } else {
        $("#compare-tray-button").removeClass("active");
        if ($("#compare-tray-button").parent().is("a")) {
            $("#compare-tray-button").unwrap();
        }
    }
    $(".delete").each(function() {
        $(this).attr("onclick", $(this).siblings().attr("onclick"));
    });
    if ($("#compare-tray-container.pdp").length > 0) {
        var catEntryId = $("#compareCatEntId").val();
        if (catEntryId != "") {
            if ($("#ctl-" + catEntryId).hasClass("empty") || $("#ctl-" + catEntryId).length == 0) {
                $("#complist_" + catEntryId).removeClass("c_on");
                $("#complist_" + catEntryId).addClass("c_off");
            } else {
                $("#complist_" + catEntryId).removeClass("c_off");
                $("#complist_" + catEntryId).addClass("c_on");
            }
        }
    }
}
$(document).ready(function() {
    if ($("#compare-tray-container.pdp").length > 0) {
        compareProductJS.initPDPCompare();
        if ($("#compare-tray-list .empty").length < 3) {
            $("#compare-tray-button").addClass("active");
            if (!$("#compare-tray-button").parent().is("a")) {
                $("#compare-tray-button").wrap('<a href="' + $("#compareTrayCompareLink").val() + '"></a>');
            }
        }
    }
    updateCompareTray();
    if (window.location.pathname.split("/")[2] == "Laundry_Laundry_Laundry_123_Organizers-3") {
        $(".bar_compare_btn").hide();
    }
    $("#btn_highlight").click(function() {
        if ($("#btn_highlight").hasClass("highlight")) {
            $("#btn_highlight").removeClass("highlight");
            $("#btn_highlight").addClass("highlight_active");
            $(".carousels_panels tr").each(function(i, row) {
                if (getTotalValidCells(row) > 4) {
                    if ($($(row).children()[1]).html() != $($(row).children()[2]).html() || $($(row).children()[1]).html() != $($(row).children()[3]).html() || $($(row).children()[2]).html() != $($(row).children()[3]).html() || $($(row).children()[1]).html() != $($(row).children()[4]).html() || $($(row).children()[2]).html() != $($(row).children()[4]).html() || $($(row).children()[3]).html() != $($(row).children()[4]).html()) {
                        $(row).addClass("row_highlight");
                    }
                } else {
                    if (getTotalValidCells(row) > 3) {
                        if ($($(row).children()[1]).html() != $($(row).children()[2]).html() || $($(row).children()[1]).html() != $($(row).children()[3]).html() || $($(row).children()[2]).html() != $($(row).children()[3]).html()) {
                            $(row).addClass("row_highlight");
                        }
                    } else {
                        if (getTotalValidCells(row) > 2) {
                            if ($($(row).children()[1]).html() != $($(row).children()[2]).html()) {
                                $(row).addClass("row_highlight");
                            }
                        }
                    }
                }
            });
        } else {
            $("#btn_highlight").addClass("highlight");
            $("#btn_highlight").removeClass("highlight_active");
            $(".carousels_panels tr").each(function(i, row) {
                $(row).removeClass("row_highlight");
            });
        }
    });
    $("#compare_top_carousels div.specs_header a").click(function() {
        if ($(this).parent().hasClass("specs_header_close")) {
            $(this).css("background-image", "url(/images/content/compare/icon_arrow_orange_right.png)");
        } else {
            $(this).css("background-image", "url(/images/content/compare/icon_arrow_orange_down.png)");
        }
        if ($("#compare_top_carousels div.specs_header").length == $("#compare_top_carousels div.specs_header_close").length) {
            $("#expand_collapse").addClass("expanded_all");
            $("#expand_collapse").removeClass("collapsed_all");
            $("#expand_collapse").html("EXPAND ALL");
        } else {
            $("#expand_collapse").removeClass("expanded_all");
            $("#expand_collapse").addClass("collapsed_all");
            $("#expand_collapse").html("COLLAPSE ALL");
        }
        return false;
    });
    $("#expand_collapse").click(function() {
        if ($("#expand_collapse").hasClass("expanded_all")) {
            $("#expand_collapse").removeClass("expanded_all");
            $("#expand_collapse").addClass("collapsed_all");
            $("#expand_collapse").html("COLLAPSE ALL");
            if ($("#compare_top_carousels div.specs_header").hasClass("specs_header_close")) {
                $("#compare_top_carousels div.specs_header").removeClass("specs_header_close");
                $("#compare_top_carousels div.specs_header").addClass("specs_header_open");
            }
            $("#compare_top_carousels div.specs_content").each(function() {
                if ($(this).css("display") == "none") {
                    $(this).slideToggle("fast");
                }
            });
            $("#compare_top_carousels div.specs_header a").css("background-image", "url(/images/content/compare/icon_arrow_orange_down.png)");
        } else {
            $("#expand_collapse").addClass("expanded_all");
            $("#expand_collapse").removeClass("collapsed_all");
            $("#expand_collapse").html("EXPAND ALL");
            if ($("#compare_top_carousels div.specs_header").hasClass("specs_header_open")) {
                $("#compare_top_carousels div.specs_header").removeClass("specs_header_open");
                $("#compare_top_carousels div.specs_header").addClass("specs_header_close");
            }
            $("#compare_top_carousels div.specs_content").each(function() {
                if ($(this).css("display") == "block") {
                    $(this).slideToggle("fast");
                }
            });
            $("#compare_top_carousels div.specs_header a").css("background-image", "url(/images/content/compare/icon_arrow_orange_right.png)");
        }
    });
    var td_total = $("#compare_top_carousels #section_content_1 table tr:first td").length;
    for (td_total; td_total <= 4; td_total++) {
        $("#compare_top_carousels .specs_content table tr").append("<td>&nbsp;</td>");
    }
});
