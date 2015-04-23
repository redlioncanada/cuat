//var countCompare = 0;
var  langcheck = $("html").attr("lang").toLowerCase();

//This function update which product will be compared
function readyCompare(e, id, viewMode, catgroupId){	
	var view2 = viewMode == "list"? "grid" : "list";
	var obj2 = $("#comp"+view2+"_" + id);
	var obj = $("#comp"+viewMode+"_" + id);
	var btn = $("#btn_comp"+viewMode+"_" + id);
	var btn2 = $("#btn_comp"+view2+"_" + id);
	var nCompareList= compareProductJS.getCompareCookie();
	var arrayTab=nCompareList.split("|");
	for(index=0;index<arrayTab.length;index++){
		if(arrayTab[index]!=""&&arrayTab[index].indexOf(catgroupId)>-1){
			var tabInfo=arrayTab[index].split(":");
			var tabCatgroupInfo=tabInfo[0];
			var tabCatentryInfo=tabInfo[1];
			if(tabCatentryInfo!=null){
				var tabCatentryArray=tabCatentryInfo.split("_");
				countCompare = tabCatentryArray.length;
				var counter=0;
				for(i=0;i<countCompare;i++){
					counter++;
					$(".valueCounter" + tabCatentryArray[i]).html(counter);
					$(".count" + tabCatentryArray[i]).show();
				}				
			}
		}
	}
	/*if (countCompare == 4 && $(obj).children()[0].checked == false) {		
		$("#compare_product_underlay").show();
		$("#compare_product_error").show();
	}
	else{*/
	    if ($("#btn_comp" + viewMode + "_" + id).hasClass("readyCompare") && e.id == "btn_comp" + viewMode + "_" + id) {
	        addCompareURL();
	    }
	    else {
	        if ($(obj).children()[0].checked) {
	            //updateCounter(id);
	            $(obj).addClass("c_off");
				$(obj2).addClass("c_off");
	            $(obj).removeClass("c_on");
				$(obj2).removeClass("c_on");
	            $(obj).children()[0].checked = false;
				$(obj2).children()[0].checked = false;
	            //countCompare--;
	            $(".count" + id).hide();
	            $(".valueCounter" + id).html("");
	            $(btn).removeClass("compare_active");
				$(btn2).removeClass("compare_active");
	            $(btn).removeClass("readyCompare");
				$(btn2).removeClass("readyCompare");
	        }
	        else {
	            $(obj).addClass("c_on");
				$(obj2).addClass("c_on");
	            $(obj).removeClass("c_off");
				$(obj2).removeClass("c_off");
	            $(obj).children()[0].checked = true;
				$(obj2).children()[0].checked = true;
	            /*countCompare++;
	            $(".valueCounter" + id).html(countCompare);
	            $(".count" + id).show();*/
	            $(btn).addClass("compare_active");
				$(btn2).addClass("compare_active");
	        }
	        if (countCompare > 1) {
	            $(".compare_active").addClass("readyCompare");
	            $(".compare-option").addClass("active");
	            if(langcheck=="fr"){
	            	$(".compare-option").html('<p>Comparer</p>');
	            }else{
					$(".compare-option").html('<p>Compare</p>');
	            }
	            $(".compare-option.active").click(function () {	                
	                addCompareURL();
	            });
	        }
	        else {
	            $(".compare_active").removeClass("readyCompare");
	            $(".compare-option").removeClass("active");
				if(langcheck=="fr"){
	            	$(".compare-option").html('<p>Comparer</p>');
	            }else{
					$(".compare-option").html('<p>Compare</p>');
	            }
	        }
	    }
	//}
}

//Update the counter of products to compare
function updateCounter(id) {
    var counterRemoved = $(".valueCounter"+id).html();
    $("span[class ^= 'valueCounter']:not(:empty)").each(function (i, value) {
        var val = $(value).html();
        if (counterRemoved != val) {
            if (counterRemoved < val) {
                val = val - 1;
                $(value).html(val);
            }
        }
    });
}

//Get real quantity of table cells with valid info
function getTotalValidCells(row) {
    var total_valid = 0;
    for (var i = 1; i <= 5; i++) {
        if ($($(row).children()[i]).html() != '&nbsp;') {
            total_valid++;
        }
    }
    return total_valid;
}

function resizeTabs() {
    $("#compare_top_many_tabs .tabs li:visible").each(function (i, row) {
        var widthTabs = $("#compare_top_many_tabs .tabs").width();
        var countTabs = $("#compare_top_many_tabs .tabs li:visible").length;
        var sizeTab = Math.floor(widthTabs / countTabs) - 3;
        if (sizeTab <= 190) {
            var newValue = (sizeTab - 20) + "px " + "7px";
            $(row).css("background-position", newValue);
            $(row).css("width", sizeTab - 3);
            $("#compare_body #compare_top_many_tabs .tabs div.title_tab").css("width", sizeTab - 25);
            $("#compare_body #compare_top_many_tabs .tabs li.selected .tab_footer").css("width", sizeTab - 3);
        }

    });
}

$(document).ready(function () {
    if(langcheck=="fr"){
        $("#expand_collapse").html("TOUT R&Eacute;DUIRE");
    }

    //    // get the width of the textarea minus scrollbar
    //    var textareaWidth = document.getElementById("expand_collapse_carrousel").scrollWidth;
    //    // width of our wrapper equals width of the inner part of the textarea
    //    document.getElementById("scroll_carrousel").style.width = textareaWidth + "px";
    //Event for functionality hightlight
    $("#btn_highlight").click(function () {
        if ($("#btn_highlight").hasClass("highlight")) {
            $("#btn_highlight").removeClass("highlight");
            $("#btn_highlight").addClass("highlight_active");
            $(".carousels_panels tr").each(function (i, row) {

                if (getTotalValidCells(row) > 4) {
                    if ($($(row).children()[1]).html() != $($(row).children()[2]).html() || $($(row).children()[1]).html() != $($(row).children()[3]).html() || $($(row).children()[2]).html() != $($(row).children()[3]).html() || $($(row).children()[1]).html() != $($(row).children()[4]).html() || $($(row).children()[2]).html() != $($(row).children()[4]).html() || $($(row).children()[3]).html() != $($(row).children()[4]).html()) {
                        $(row).addClass("row_highlight");
                    }
                }
                else {
                    if (getTotalValidCells(row) > 3) {
                        if ($($(row).children()[1]).html() != $($(row).children()[2]).html() || $($(row).children()[1]).html() != $($(row).children()[3]).html() || $($(row).children()[2]).html() != $($(row).children()[3]).html()) {
                            $(row).addClass("row_highlight");
                        }
                    }
                    else {
                        if (getTotalValidCells(row) > 2) {
                            if ($($(row).children()[1]).html() != $($(row).children()[2]).html()) {
                                $(row).addClass("row_highlight");
                            }
                        }
                    }
                }
            });
        }
        else {
            $("#btn_highlight").addClass("highlight");
            $("#btn_highlight").removeClass("highlight_active");
            $(".carousels_panels tr").each(function (i, row) {
                $(row).removeClass("row_highlight");
            });
        }
    });


    //Event for functionality expand and collapse
    /* $("#expand_collapse").click(function () {
    if ($("#expand_collapse").hasClass("expanded_all")) {
    $("#expand_collapse").removeClass("expanded_all");
    $("#expand_collapse").addClass("collapsed_all");
    $("#expand_collapse").html("COLLAPSE ALL");            
    }
    else {
    $("#expand_collapse").addClass("expanded_all");
    $("#expand_collapse").removeClass("collapsed_all");
    $("#expand_collapse").html("EXPAND ALL");
    }
    });*/



    //event change the arrow rotation
    $("#compare_top_carousels div.specs_header a").click(function () {
        if ($(this).parent().hasClass("specs_header_close")) {
            $(this).css("background-image", "url(/images/compare/icon_arrow_down.png)");
            $(this).css("background-position", "0 7px");
            $(this).parent().addClass("specs_header_open");
            $(this).parent().removeClass("specs_header_close");
            $(this).parent().parent().children(".specs_content").slideToggle('fast');
        } else {
            $(this).css("background-image", "url(/images/compare/icon_arrow_up.png)");
            $(this).css("background-position", "0 4px");
            $(this).parent().parent().children(".specs_content").slideToggle('fast');
            $(this).parent().addClass("specs_header_close");
            $(this).parent().removeClass("specs_header_open");
        }
        if ($("#compare_top_carousels div.specs_header").length == $("#compare_top_carousels div.specs_header_close").length) {
            $("#expand_collapse").addClass("expanded_all");
            $("#expand_collapse").removeClass("collapsed_all");
            if(langcheck=="fr"){
                $("#expand_collapse").html("TOUT AFFICHER");
            }else{
                $("#expand_collapse").html("EXPAND ALL");
            }
        }
        else {
            $("#expand_collapse").removeClass("expanded_all");
            $("#expand_collapse").addClass("collapsed_all");
            if(langcheck=="fr"){
                $("#expand_collapse").html("TOUT R&Eacute;DUIRE");
            }else{
                $("#expand_collapse").html("COLLAPSE ALL");
            }
            
        }
        return false;
    });


    //event to expand and collapse
    $("#expand_collapse").click(function () {
        if ($("#expand_collapse").hasClass("expanded_all")) {
            $("#expand_collapse").removeClass("expanded_all");
            $("#expand_collapse").addClass("collapsed_all");
            if(langcheck=="fr"){
                $("#expand_collapse").html("TOUT R&Eacute;DUIRE");
            }else{
                $("#expand_collapse").html("COLLAPSE ALL");
            }
            if ($("#compare_top_carousels div.specs_header").hasClass("specs_header_close")) {
                $("#compare_top_carousels div.specs_header").removeClass("specs_header_close");
                $("#compare_top_carousels div.specs_header").addClass("specs_header_open");
            }
            $("#compare_top_carousels div.specs_content").each(function () {
                if ($(this).css('display') == 'none') {
                    $(this).slideToggle('fast');
                }
            });
            $("#compare_top_carousels div.specs_header a").css("background-image", "url(/images/compare/icon_arrow_down.png)");
            $("#compare_top_carousels div.specs_header a").css("background-position", "0 7px");
            // $("#compare_top_carousels div.specs_header a").css("color", "#005ABB");
        }
        else {
            $("#expand_collapse").addClass("expanded_all");
            $("#expand_collapse").removeClass("collapsed_all");
            if(langcheck=="fr"){
                $("#expand_collapse").html("TOUT AFFICHER");
            }else{
                $("#expand_collapse").html("EXPAND ALL");
            }
            if ($("#compare_top_carousels div.specs_header").hasClass("specs_header_open")) {
                $("#compare_top_carousels div.specs_header").removeClass("specs_header_open");
                $("#compare_top_carousels div.specs_header").addClass("specs_header_close");
            }
            $("#compare_top_carousels div.specs_content").each(function () {
                if ($(this).css('display') == 'block') {
                    $(this).slideToggle('fast');
                }
            });
            $("#compare_top_carousels div.specs_header a").css("background-image", "url(/images/compare/icon_arrow_up.png)");
            $("#compare_top_carousels div.specs_header a").css("background-position", "0 4px");
            // $("#compare_top_carousels div.specs_header a").css("color", "#505050");
        }
    });

    //add missing td in order to complete the four of them
    var td_total = $("#compare_top_carousels #section_content_1 table tr:first td").length;
    for (td_total; td_total <= 4; td_total++) {
        $("#compare_top_carousels .specs_content table tr").append("<td class='even'>&nbsp;</td>");
    }

    $("#compare_top_many_tabs .tabs li.selected").append("<div class='tab_footer'></div>");

    resizeTabs();

    $("#compare_top_many_tabs .tabs li a.tab_close").click(function () {
        $(this).parent().hide();
        resizeTabs();
    });



});
