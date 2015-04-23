/*
 * The Compare button is not needed in the following endeca pages. Since we don't have access to JSP files the only way to remove the button is using JavaScript.
 * 
 * 
 * http://uat.maytag.com/Laundry-1/Laundry_Laundry_Appliances_Laundry_Pedestals-3/102120063/
 * http://uat.maytag.com/Accessories-1/Accessories_Laundry_Washer-3/102120123/
 * http://uat.maytag.com/Accessories-1/Accessories_Laundry_Dryer-3/102120119/
 * http://uat.maytag.com/Accessories-1/Accessories_Kitchen_Refrigerator-3/102120104/
 * http://uat.maytag.com/Accessories-1/Accessories_Kitchen_Oven__Range-3/102120093/
 * http://uat.maytag.com/Accessories-1/Accessories_Kitchen_Dishwasher-3/102120068/
 * http://uat.maytag.com/Accessories-1/Accessories_Kitchen_Microwave-3/102120087/
 * http://uat.maytag.com/Accessories-1/Accessories_Kitchen_Freezer-3/102120074/
 * http://uat.maytag.com/Accessories-1/Accessories_Kitchen_Ice_Maker-3/102120082/
 * 
 */

// Remove button plugin
;(function ($,window,undefined){
    var pathNames = ['/Laundry-1/Laundry_Laundry_Appliances_Laundry_Pedestals-3/102120063/',
                     '/Accessories-1/Accessories_Laundry_Washer-3/102120123/',
                     '/Accessories-1/Accessories_Laundry_Dryer-3/102120119/',
                     '/Accessories-1/Accessories_Kitchen_Refrigerator-3/102120104/',
                     '/Accessories-1/Accessories_Kitchen_Oven__Range-3/102120093/',
                     '/Accessories-1/Accessories_Kitchen_Dishwasher-3/102120068/',
                     '/Accessories-1/Accessories_Kitchen_Microwave-3/102120087/',
                     '/Accessories-1/Accessories_Kitchen_Freezer-3/102120074/',
                     '/Accessories-1/Accessories_Kitchen_Ice_Maker-3/102120082/'],
        currentPath = window.location.pathname;
        
        for (var i = pathNames.length - 1; i >= 0; i--){
          if(currentPath === pathNames[i]){
            $(function(){
                var compareBtn = $('.bar_compare_btn');
                compareBtn.hide();
            });
          }
        };      
})(jQuery,window);

$(window).load(function (){
 if (window.location.pathname === '/Laundry-1/Laundry_Laundry_Appliances_Laundry_Pedestals-3/102120063/'){
    $('.bar_compare_btn').hide();
 }
});
//var countCompare = 0;
var langcheck= $("html").attr("lang").toLowerCase();
//Function to save compared products
function readyCompare(e, id, viewMode, catgroupId){	
	var obj = $("#comp"+viewMode+"_" + id);
	var btn = $("#btn_comp"+viewMode+"_" + id);
	var nCompareList= compareProductJS.getCompareCookie();
	 var countCompare = 0;
	if(nCompareList != undefined){
	var arrayTab=nCompareList.split("|");
	for(index=0;index<arrayTab.length;index++){
		if(arrayTab[index]!=""&&arrayTab[index].indexOf(catgroupId)>-1){
			var tabInfo=arrayTab[index].split(":");
			var tabCatgroupInfo=tabInfo[0];
			var tabCatentryInfo=tabInfo[1];
			if(tabCatentryInfo!=null){
				var tabCatentryArray=tabCatentryInfo.split("_");
				countCompare = tabCatentryArray.length;
				var counter = 0;
				for(i=0;i<countCompare;i++){
					counter++;
					$(".valueCounter" + tabCatentryArray[i]).html(counter);
					$(".count" + tabCatentryArray[i]).show();
				}
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
			if($("#compare-tray-container.pdp").length < 1){
	        var url = document.getElementById("Comparelnk").value;
	        window.open(url, "_self");
			}
	    }
	    else {
			if($(obj).children()[0] != undefined){
	        if ($(obj).children()[0].checked) {
	            //updateCounter(id);
	            $(obj).addClass("c_off");
	            $(obj).removeClass("c_on");
	            $(obj).children()[0].checked = false;
	            //countCompare--;
	            $(".count" + id).hide();
	            $(".valueCounter" + id).html("");
	            $(btn).removeClass("compare_active");
	            $(btn).removeClass("readyCompare");
	        }
	        else {
	            $(obj).addClass("c_on");
	            $(obj).removeClass("c_off");
	            $(obj).children()[0].checked = true;
	            /*countCompare++;
	            $(".valueCounter" + id).html(countCompare);
	            $(".count" + id).show();*/
	            $(btn).addClass("compare_active");
	        }
			}
	        if (countCompare > 1) {
	            $(".compare_active").addClass("readyCompare");
	            $(".bar_compare_btn").addClass("active");
$(".bar_compare_btn.active").click(function () {	                
	                var url = document.getElementById("Comparelnk").value;
	        window.open(url, "_self");
	            });
	        }
	        else {
	            $(".compare_active").removeClass("readyCompare");
	            $(".bar_compare_btn").removeClass("active");
	        }
	   //Added styles so that it would allow 'compare' text to be clickable and remove if only one product selected
       if($(obj).hasClass("c_on") && !$(".compare_active").hasClass("readyCompare")) {

        		$('.label_check.c_on').css({'margin-right':'-60px','padding-right':'60px'});
        		
	   } else {

	   		$('.label_check.c_on').css({'margin-right':'0','padding-right':'0'});
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


$(document).ready(function () {

//  update the expand_collapse copy
    if(langcheck=="fr"){
    $("#expand_collapse").html("TOUT R&Eacute;DUIRE");
    }else{
    $("#expand_collapse").html("COLLAPSE ALL");
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
            if(langcheck=="fr"){
        $("#expand_collapse").html("TOUT R&Eacute;DUIRE");
        }else{
        $("#expand_collapse").html("COLLAPSE ALL");
        }            
        }
        else {
            $("#expand_collapse").addClass("expanded_all");
            $("#expand_collapse").removeClass("collapsed_all");
        if(langcheck=="fr"){
        $("#expand_collapse").html("TOUT AFFICHER");
        }else{
        $("#expand_collapse").html("EXPAND ALL");
        } 
        }
    });*/



    //event change the arrow rotation
    $("#compare_top_carousels div.specs_header a").click(function () {
        if ($(this).parent().hasClass("specs_header_close")) {
                 $(this).css("background-image", "url(/images/content/compare/icon_arrow_green_up.png)");            
            $(this).css("color", "#505050");               
            /*$(this).parent().addClass("specs_header_open");
            $(this).parent().removeClass("specs_header_close");
            $(this).parent().parent().children(".specs_content").slideToggle('fast');*/
        } else {
         $(this).css("background-image", "url(/images/content/compare/icon_arrow_green_down.png)");
            $(this).css("color", "#005ABB");   
            
            /*$(this).parent().parent().children(".specs_content").slideToggle('fast');
            $(this).parent().addClass("specs_header_close");
            $(this).parent().removeClass("specs_header_open");*/
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
            $("#compare_top_carousels div.specs_header a").css("background-image", "url(/images/content/compare/icon_arrow_green_down.png)");
            $("#compare_top_carousels div.specs_header a").css("color", "#005ABB");                       
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
            $("#compare_top_carousels div.specs_header a").css("background-image", "url(/images/content/compare/icon_arrow_green_up.png)");
            $("#compare_top_carousels div.specs_header a").css("color", "#505050"); 
        }
    });

    //add missing td in order to complete the four of them
    var td_total = $("#compare_top_carousels #section_content_1 table tr:first td").length;
    for (td_total; td_total <= 4; td_total++) {
        $("#compare_top_carousels .specs_content table tr").append("<td>&nbsp;</td>");
    }

});

//UI functions for compare tray functionality

function addToCompareTray(catentryId, catgroupId){

	 var target = $("#compare-tray-list .empty").eq(0);
	 if($("#compare-tray-container.pdp").length > 0){
		 var compareTrayImageSrc = $(".product-image img").attr("src");
	 }else if($("#compare-tray-container.plp").length > 0){
		 var compareTrayImageSrc = $("#complist_"+catentryId).parents(".applince").find("img.img_appliance").attr("src");
	}
	  var onclick="javascript:compareProductJS.addProductToCompare(this,'"+catgroupId+"','"+catentryId+"', 'list', 'PDP');";
	 var modelNum = $(".applinceInfo_title."+catentryId+" a").eq(1).text().trim();;
	 var productName = $(".applinceInfo_title."+catentryId+" a").eq(0).text().trim();;
	 $(target).attr("id", "ctl-"+catentryId);
	 $(target).append('<img class="delete" src="/images/icons/blue-delete.png">');
	 $(target).append('<img id="compareTrayImage_'+catentryId+'" src="'+compareTrayImageSrc+'" onclick="' + onclick + '" title="' + productName+","+modelNum + '"/>');
	 $(target).removeClass("empty");
	 

	 if($("#compare-tray-container.pdp").length > 0){
		$("#complist_"+catentryId).removeClass("c_off");
		$("#complist_"+catentryId).addClass("c_on");
	}
}

function removeFromCompareTray(catentryId){
	$("#ctl-"+catentryId).remove();
	$("#compare-tray-list").append('<li class="compare-tray-list-item empty"></li>');
	if($("#compare-tray-container.pdp").length > 0){
		$("#complist_"+catentryId).addClass("c_off");
		$("#complist_"+catentryId).removeClass("c_on");
	}

}

function updateCompareTray(){
	 if($("#compare-tray-list .empty").length < 3){
		 $("#compare-tray-button").addClass("active");
		 if(!$("#compare-tray-button").parent().is("a")){
			 $("#compare-tray-button").wrap('<a href="'+ $("#compareTrayCompareLink").val()+'"></a>');
		 }
	 }else{
		 $("#compare-tray-button").removeClass("active");
		 if($("#compare-tray-button").parent().is("a")){
			 $("#compare-tray-button").unwrap();
		 }
	 }
	 
	 $(".delete").each(function(){$(this).attr("onclick", $(this).siblings().attr("onclick"));});
	 if($("#compare-tray-container.pdp").length > 0){
		var catEntryId = $("#compareCatEntId").val();
		if(catEntryId != ""){
			if($("#ctl-"+catEntryId).length > 0){
				$("#complist_"+catEntryId).removeClass("c_off");
				$("#complist_"+catEntryId).addClass("c_on");
				
			}else{
				$("#complist_"+catEntryId).removeClass("c_on");
				$("#complist_"+catEntryId).addClass("c_off");
			}
		}
	 }
}

/* Refactor compare buttons */
$(document).ready(function () {
	if($("#compare-tray-container.pdp").length > 0){
		compareProductJS.initPDPCompare();
	}
	updateCompareTray();
    $('.back_button img').remove();

});