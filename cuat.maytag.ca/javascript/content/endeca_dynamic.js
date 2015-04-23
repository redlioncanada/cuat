function includeJS(p_file) {
    var v_js = document.createElement("script");
    v_js.type = "text/javascript";
    v_js.src = p_file;
    document.getElementsByTagName("head")[0].appendChild(v_js);
}
includeJS("/javascript/content/jquery.whptooltip.js");
/*if ($.browser.msie) {
    includeJS("/javascript/content/PIE.js");
}*/
var mode = "debug";
var d = document;
var safari = (navigator.userAgent.toLowerCase().indexOf("safari") != -1) ? true : false;
var gebtn = function (parEl, child) {
    return parEl.getElementsByTagName(child);
};
var docLang = $("html").attr("lang");
 
function checkCompareButton(catgroupId) {
    var nCompareList = compareProductJS.getCompareCookie();
    var itemsLength;
    if (catgroupId != null && nCompareList != null && nCompareList != "") {
        var categorySplit = new Array();
        var catentrySplit = new Array();
        categorySplit = nCompareList.split("|");
        for (var categoryCount = 0; categoryCount < categorySplit.length; categoryCount++) {
            catentrySplit = categorySplit[categoryCount].split(":");
            if (catentrySplit[0] == catgroupId) {
                var itemsSplit = new Array();
                itemsSplit = catentrySplit[1].split("_");
                itemsLength = itemsSplit.length;
            }
        }
    }
    if (itemsLength > 1) {
        /*$("div.bar_compare_btn").unbind("click");
        $("div.bar_compare_btn").click(function (e) {
            window.open($("div.endeca_compare_btn:first").attr("compareUrl"));
            e.stopPropagation();
        });*/
        $("div.endeca_compare_btn").has("input[type=checkbox]:checked").css({
            backgroundPosition: "0 -23px"
        });
        /*$("div.bar_compare_btn").css({
            backgroundPosition: "0 -23px",
            fontWeight: "bold",
            color: "#4773F2",
            cursor: "pointer"
        });*/
    } else {
        $("div.endeca_compare_btn").has("input[type=checkbox]:checked").css({
            backgroundPosition: "0 -23px",
            fontWeight: "bold",
            color: "#4773F2"
        });
        /*$("div.bar_compare_btn").css({
            backgroundPosition: "0 0",
            fontWeight: "normal",
            color: "#696868",
            cursor: "default"
        });
        $("div.bar_compare_btn").unbind("click");*/
    }
}
var checkIt_compare = function () {
    var inp = gebtn(this, "input")[0];
    if (this.className == "label_check_compare c_off_compare" || $(inp).attr("checked") == false) {
        this.className = "label_check_compare c_on_compare";
        $(inp).attr("checked", "checked");
    } else {
        this.className = "label_check_compare c_off_compare";
        $(inp).removeAttr("checked");
    }
    var bg_pos, font = "normal",
        col = "#696868";
    var change_bg = false;
    var catgrpAndcatentryIdArr = inp.id.split("_");
    if (inp.checked) {
        bg_pos = "0 -46px", font = "bold", col = "#4773F2";
        change_bg = true;
        if (compareProductJS.addtoCompare(catgrpAndcatentryIdArr[0], catgrpAndcatentryIdArr[1], "list")) {
            this.className = "label_check_compare c_off_compare";
            inp.checked = false;
            change_bg = false;
        }
    } else {
        bg_pos = "0px 0px";
        change_bg = true;
        compareProductJS.removefromCompare(catgrpAndcatentryIdArr[0], catgrpAndcatentryIdArr[1]);
    } if (change_bg) {
        $("div.endeca_compare_btn").has(this).css({
            backgroundPosition: bg_pos,
            fontWeight: font,
            color: col
        });
    }
    checkCompareButton(catgrpAndcatentryIdArr[0]);
};
var check_it = function () {
    var inp = gebtn(this, "input")[0];
    if (!$(this).parent().hasClass("inactive_listItem")) {
        if (this.className == "label_check c_off" || (!safari && inp.checked)) {
            this.className = "label_check c_on";
            if (safari) {
                inp.click();
            }
        } else {
            this.className = "label_check c_off";
            if (safari) {
                inp.click();
            }
        }
    }
};
var turn_radio = function () {
    var inp = gebtn(this, "input")[0];
    if (this.className == "label_radio r_off" || inp.checked) {
        var ls = gebtn(this.parentNode, "label");
        for (var i = 0; i < ls.length; i++) {
            var l = ls[i];
            if (l.className.indexOf("label_radio") == -1) {
                continue;
            }
            l.className = "label_radio r_off";
        }
        this.className = "label_radio r_on";
        if (safari) {
            inp.click();
        }
    } else {
        this.className = "label_radio r_off";
        if (safari) {
            inp.click();
        }
    }
};
window.onerror = function (msg, url, linenumber) {
    console.log("Error message: " + msg + "\nURL: " + url + "\nLine Number: " + linenumber);
};
 
function initPriceMinMaxVal() {
    if (document.getElementById("priceSliderCatMinMax") != null) {
        var priceRangeJSON = eval("(" + document.getElementById("priceSliderCatMinMax").innerHTML + ")");
        EndecaHelperJS.origMinPrice = parseInt(priceRangeJSON.origMin);
        EndecaHelperJS.origMaxPrice = parseInt(priceRangeJSON.origMax);
    }
}
function adjustHeight(){
	if ($.browser.msie  && parseInt($.browser.version, 10) === 8){
		if(window.location.href.indexOf("Kitchen_Cooking_Cooktops-3") !== -1){
			return 420;
		}else if(window.location.href.indexOf("Kitchen_Dishwashers_and_Kitchen_Cleaning_Dishwashers-3") !== -1
				|| window.location.href.indexOf("Kitchen_Cooking_Microwaves-3") !== -1
				|| window.location.href.indexOf("Laundry_Laundry_Appliances_Dryers-3/102120054") !== -1){
			return 520;
		}else if(window.location.href.indexOf("Kitchen_Cooking_Ranges-3") !== -1){
			return 620;
		}else if(window.location.href.indexOf("Kitchen_Cooking_Wall_Ovens-3") !== -1
				|| window.location.href.indexOf("Kitchen_Refrigeration_Refrigerators") !== -1
				|| window.location.href.indexOf("Laundry_Laundry_Appliances_Washers-3") !== -1
				|| window.location.href.indexOf("Laundry_Laundry_Appliances_Dryers-3/102120050") !== -1){
			return 870;
		}else{
			return 870;
		}
	}else{
		return "auto";
	}
}
function init_endeca_dynamic_js() {
    $("#amount", "#endeca_leftNavContainer").attr("readonly", "readonly");
    $(".productPopup").each(function (index) {
        $(this).attr("datos", $(this).attr("title"));
        $(this).removeAttr("title");
    });
    if (document.getElementById("priceSliderVars") != null) {
        var priceRangeJSON = eval("(" + document.getElementById("priceSliderVars").innerHTML + ")");
        var newMaxPrice = parseInt(priceRangeJSON.rangeMax);
        var rangeStep = 50;
        if (isNaN(newMaxPrice)) {
            var samePriceProdAmt = $("div.msrp_price:first").find("h3.price").text();
            samePriceProdAmt = samePriceProdAmt.replace($("#currencySymbol").val(), "");
            samePriceProdAmt = samePriceProdAmt * 100 / 100;
            newMaxPrice = samePriceProdAmt + (rangeStep - (samePriceProdAmt % rangeStep)) % rangeStep;
            console.log(newMaxPrice);
        }
        $(".endeca_slider").slider({
            range: "min",
            step: rangeStep,
            value: newMaxPrice,
            min: (EndecaHelperJS.origMinPrice - EndecaHelperJS.origMinPrice % rangeStep),
            max: EndecaHelperJS.origMaxPrice,
            slide: function (e, ui) {
                switch(docLang){
                case "fr":
                    $("#amount").val(ui.value + " " + $("#currencySymbol").val());
                break;
                case "en":
                    $("#amount").val($("#currencySymbol").val() + ui.value);
                break;
                }
            },
            stop: function (event, ui) {
                if (ui.value < EndecaHelperJS.origMinPrice) {
                    EndecaHelperJS.refreshProductsByPriceRange(ui.value, EndecaHelperJS.origMinPrice + (rangeStep - (EndecaHelperJS.origMinPrice % rangeStep)) % rangeStep);
                } else {
                    EndecaHelperJS.refreshProductsByPriceRange(EndecaHelperJS.origMinPrice, ui.value);
                }
            },
            animate: true
        });
        switch(docLang){
            case "fr":
            //console.log("fr test");
                if(!$("#amount").val()){
                    $("#amount").val($( ".endeca_slider" ).slider("value") +  " " + $("#currencySymbol").val());
                }else{
                    var amount = $("#amount").val();
                    amount = amount.replace($("#currencySymbol").val(),"");
                    amount = amount/100;
                    
                    $("#amount").val(amount +  " " + $("#currencySymbol").val());
                    $( ".endeca_slider" ).slider("value",amount);
                    }
                break;

            default:
            //console.log("en test");
               if(!$("#amount").val()){
                    $("#amount").val($("#currencySymbol").val()+$( ".endeca_slider" ).slider("value"));
                }else{
                    var amount = $("#amount").val();
                    amount = amount.replace($("#currencySymbol").val(),"");
                    amount = amount/100;
                     
                    $("#amount").val($("#currencySymbol").val() + amount);
                    $( ".endeca_slider" ).slider("value",amount);
                }
                break;

                }
        //}
        
        switch(docLang){
            case "fr":
              //console.log("Language is: " + docLang);
                document.getElementById("min_price").innerHTML= (EndecaHelperJS.origMinPrice-EndecaHelperJS.origMinPrice%rangeStep) +  " " + $("#currencySymbol").val();
                document.getElementById("max_price").innerHTML= EndecaHelperJS.origMaxPrice +  " " + $("#currencySymbol").val();
              break;
            case "en":
              //console.log("Language is: " + docLang);
                document.getElementById("min_price").innerHTML= $("#currencySymbol").val()+(EndecaHelperJS.origMinPrice-EndecaHelperJS.origMinPrice%rangeStep);
                document.getElementById("max_price").innerHTML= $("#currencySymbol").val()+EndecaHelperJS.origMaxPrice;
              break;

        }
    }
    var body = gebtn(d, "body")[0];
    body.className = body.className && body.className != "" ? body.className + " has-js" : "has-js";
    if (!d.getElementById || !d.createTextNode) {
        return;
    }
    var ls = gebtn(d, "label");
    for (var i = 0; i < ls.length; i++) {
        var l = ls[i];
        if (l.className.indexOf("label_") == -1) {
            continue;
        }
        var inp = gebtn(l, "input")[0];
        if (l.className == "label_check") {
            l.className = (safari && inp.checked == true || inp.checked) ? "label_check c_on" : "label_check c_off";
            if ($(l).parent().hasClass("inactive_listItem")) {
                l.className = "label_check c_inactive";
            }
            l.onclick = check_it;
        }
        if (l.className == "label_check_compare") {
            l.className = (safari && inp.checked == true || inp.checked) ? "label_check_compare c_on_compare" : "label_check_compare c_off_compare";
            l.onclick = checkIt_compare;
        }
        if (l.className == "label_radio") {
            l.className = (safari && inp.checked == true || inp.checked) ? "label_radio r_on" : "label_radio r_off";
            l.onclick = turn_radio;
        }
    }
    var overTooltip = false;
    $(".fancybox-outer").live("mouseenter", function () {
        overTooltip = true;
    });
    $(".fancybox-outer").live("mouseleave", function () {
        removeFancybox(500);
        overTooltip = false;
    });
    var catgrpAndcatentryIdArr = inp.id.split("_");
    checkCompareButton(catgrpAndcatentryIdArr[0]);
    $("div.fancybox-close").live("click", function () {
        overTooltip = false;
    });
    $(".endeca_applianceImg").mouseenter(function () {
        var quickview = $("a.endeca_quickView", this);
        if ($.browser.msie) {
            quickview.show();
        } else {
            quickview.fadeIn();
        }
    }).mouseleave(function () {
        var quickview = $("a.endeca_quickView", this);
        if ($.browser.msie) {
            quickview.hide();
        } else {
            quickview.fadeOut();
        }
    });
    $(".bigTooltip_endeca").mouseenter(function () {
        var _top = $(this).offset().top;
        var _left = $(this).offset().left + $(this).width();
        var width = 400;
        var height = adjustHeight();
        $(this).fancybox({
            left: (_left + 25),
            top: (_top - (width / 2)),
            minHeight: height,
            fitToView: false,
            scrolling: "visible",
            //maxHeight: "800px",
			height: height,
            width: width,
            autoSize: false,
            closeClick: false,
            openEffect: "none",
            closeEffect: "none",
            tooltipArrow: true,
            arrowDirection: "left",
            type: "ajax",
            /*beforeShow: function () {
                if (window.PIE) {
                    $(".fancybox-outer").each(function () {
                        PIE.detach(this);
                        setTimeout(function () {
                            PIE.attach(this);
                        }, 500);
                        });
                    }   
            },*/
            onComplete : function() {
                $("#fancybox-frame").load(function() { 
                  $("#fancybox-content").height($(this).contents().find("body").height());
                });
            }
        });
        $(this).click();
        console.log("bigTooltip_endeca enter");
    }).mouseleave(function () {
        setTimeout(function () {
			if(!overTooltip){
				removeFancybox(500);
			}
		}, 1000);
    }).click(function (e) {
        if (e.preventDefault) {
            console.log("- bigTooltip_endeca > preventDefault() -");
            e.preventDefault();
        }else{
            console.log("- bigTooltip_endeca > retuneValue = false -");
            e.returnValue = false;
        }
        console.log("bigTooltip_endeca actived");
    });

/*
    $(".productPopup").mouseenter(function() {
        //$(this).attr("datos", $(this).attr("title")).removeAttr("title");
        var _top = $(this).offset().top; //- $(this).height();
        var _left = $(this).offset().left + $(this).width();
        var _height = 0 - $(this).height();
        var content = $(this).attr("datos").split("::");
        var strArray = $(this).attr("datos").split(" ");
        var wordsPerLine = 5;
        var pixelsPerLine = 27;
        var titleReserved = 35;
        var height = (parseInt(strArray.length / wordsPerLine ) * pixelsPerLine);
        if(height <= 79){
            height = 80;
        }

        //console.log(height);
        //console.log("linkPopup enter 1");
        var width = 280;
        if($.browser.msie){
            width = 280;
            _top = _top - 20;
        }
        $(this).fancybox({

            //maxWidth : 280,
            //maxHeight : 280,
            fitToView : false,
            width : width,
            height : height,
            autoSize : false,
            closeClick : false,
            openEffect : "none",
            closeEffect : "none",
            tooltipArrow: true,
            left : _left - (width + 30),
            top : _top - (height + 40),
            type: "html",
            content: "<h2 class='tooltip_subtitle'>" + content[0] + "</h2><p class='tooltip_content'>" + content[1] + "</p>",
            beforeShow : function (){
                if (window.PIE) {
                    $(".fancybox-outer").each(function() {
                        PIE.detach(this);
                        setTimeout(function(){
                            PIE.attach(this);
                            //$(this).css("top", $(this).height());
                        }, 50);
                        });
                    }   
            }
        });
        $(this).click();
        console.log("bigTooltip_endeca enter");

    }).click(function(e){
        if(e.preventDefault){
            console.log("- preventDefault() -");
            e.preventDefault();
        }else{
            console.log("- retuneValue = false -");
            e.returnValue = false;
        }
        console.log("linkPopup actived");
    });*/
    
    $(".productPopup").whpTooltip({
        datafld: "datos",
        width: 300,
        height: "auto",
        autoHide: true
    });

    function removeFancybox(time){
        setTimeout(function(){
            $(".fancybox-wrap").stop().trigger("onReset").remove();
        }, time);
    }
}

$(document).ready(function () {
    initPriceMinMaxVal();
    init_endeca_dynamic_js();
});
