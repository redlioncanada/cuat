/*
 * 
 * The js file will bring up the ML toggle in the HEADER.
 *
 */
$(document).ready(function(){
    
    var divData = document.getElementById("languageDD").innerHTML;
    divData = divData.replace(/(\r\n|\n|\r|\s+)/gm, "");
    var selTxtLang = $("#langHiddenCmdCtxt").val();
    var otherTxtLang;
    var valueForCookie = $("#valueForCookie").val();
    var cookieValueString;
    /*var displayAlert = document.getElementById("displayAlert").innerHTML;*/
    var displayAlert = true;
    var displayDropDown = document.getElementById("displayDropDown").innerHTML;
    displayDropDown = displayDropDown.replace(/(\r\n|\n|\r|\s+)/gm, "");
    var langHiddenURL = document.getElementById("langReloadURL").innerHTML;
    var displayAlertMessage = $("#displayAlertMessage").val();
    var langValues = divData.split("@@");
    var optVal;
    var langVal;
    var HTML;
    var HTML_pending;
    var linkTxt;
    var toggleClass;
    var logoClass;
    var hideLinkClass;
    var langContentHTML;
    var langPopOK;
    var langPopCancel;


    for (var i = 0; i < langValues.length - 1; i++) {
        optVal = langValues[i].split(":");
        langVal = optVal[0];
        langVal = langVal.split("@");
        if (langVal[0] == selTxtLang) {
            HTML_pending = "<input type=\"text\" name= 'langId' id= 'selLangId' class='ddowm_1' value=\"" + optVal[0] + "\" />";
        }else{
            if(optVal[0].indexOf('en_') != -1){
                linkTxt = "English";
                toggleClass = "en";
                logoClass ="fr";
                langPopOK = "OK";       
                langPopCancel = "Annuler";
            }else{
                linkTxt = "Fran&#231;ais";
                toggleClass = "fr";
                logoClass = "en";
                langPopOK = "OK";       
                langPopCancel = "Cancel";
            }
            otherTxtLang = optVal[0];
        }
    }

    if(displayDropDown == "false"){
        hideLinkClass = "hidden";
    }else{
        hideLinkClass = "";
    }

    cookieValueString = valueForCookie.toString() + "|" + otherTxtLang.split("@").shift().toString();
    
    $("#logo").attr("class", logoClass);

    HTML = "<div class=\"languageContent\"><a href=\"javascript:void(0);\" onclick=\"javascript:updateViewAndBeginIndexForLanguageChange();prepareSubmit('" + otherTxtLang + "', document.SelectLanguageForm," + displayAlert + ",'" + cookieValueString + "','" + displayAlertMessage + "');\" id='languageTxtLink' class='" + hideLinkClass + "'>" + linkTxt + "</a></div><div id='language' style='display:none;position:absolute;top:0;right:0;z-index:-1;'><div id='langdd'><ul id='ddown'><ol><form name=\"SelectLanguageForm\" action='" + langHiddenURL + "' method=\"post\" id=\"SelectLanguageForm\">";

    HTML = HTML + HTML_pending;

    HTML += "<input type=\"hidden\" name='pageView' id='pageView' value=''/>";
    HTML += "<input type=\"hidden\" name='beginIndex' id='beginIndex' value=''/>";
    HTML += "</form></ol></ul></div></div>";

        $("#header > #header_sub_nav_1 ul li:last").after('<li>'+HTML+'</li>');

    if (displayDropDown == "false") {
        $("#language").hide();
        $("div.header_line1").removeClass().addClass("header_old_line1");
    }

    //populate confirmation popup       
     langContentHTML = "";       
     langContentHTML += "<div id=\"OverlayLangBlackOut\" style=\"display:none;\" onClick=\"javscript:closeLangConfirm(false, '" + cookieValueString + "', document.SelectLanguageForm);\"></div>";     
     langContentHTML += "<div id=\"OverlayLangConfirm\" style=\"display:none;\">";     
     langContentHTML += "<div class=\"MessageBlock\">";        
     langContentHTML += "<p class=\"Header\">" + displayAlertMessage + "</p>";     
     langContentHTML += "</div>";        
     langContentHTML += "<a href=\"#\" class=\"ButtonOk\" onClick=\"javscript:closeLangConfirm(true, '"+ cookieValueString + "', document.SelectLanguageForm);\"><span class=\"ok-left\"></span><span class=\"ok-center\">" + langPopOK + "</span><span class=\"ok-right\"></span></a>";        
     langContentHTML += "<a href=\"#\" class=\"ButtonCancel\" onClick=\"javascript:closeLangConfirm(false, '"+ cookieValueString + "', document.SelectLanguageForm);\" ><span class=\"can-left\"></span><span class=\"can-center\">" + langPopCancel + "</span><span class=\"can-right\"></span></a>";       
     langContentHTML += "</div>";        
          
     $("body").append(langContentHTML);  
});

var langConfirmPopup = 0;       
          
  function openLangConfirm(){     
    if(langConfirmPopup==0){      
      $("#OverlayLangBlackOut").css({     
        "opacity": "0.7"      
      });     
      $("#OverlayLangBlackOut").fadeIn("slow");       
      $("#OverlayLangConfirm").fadeIn("slow");        
      langConfirmPopup = 1;       
    }     
  }       
          
  function closeLangConfirm(status, cookieValue, form){       
     var langHiddenLocale = $("#langHiddenLocale").val();        
     var prevSelLang = $("#langHiddenCmdCtxt").val();        
         
     if (status == true) {       
         setLangCookie("WHR_USER_LANGUAGE", cookieValue, null);      
         form.submit();      
     } else {        
         $("#selLangId").val(prevSelLang + "@" + langHiddenLocale);      
     }       
         
   if(langConfirmPopup==1){      
     $("#OverlayLangBlackOut").fadeOut("slow");      
     $("#OverlayLangConfirm").fadeOut("slow");       
     langConfirmPopup = 0;       
   }     
 }

function setLangCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = value + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value + "; path = /";
}
function prepareSubmit(toLang, form, displayAlert, cookieValue, displayAlertMessage) {
    form.langId.value = toLang;
    //parameters in urls for EN and FR
    var paraLangStore = [
        ['4294966878','102280316'],
        ['4294966825','102280317'],
        ['4294966847','102280318'],
        ['4294966986','102280319'],
        ['4294966885','102280320'],
        ['4294966987','102280321'],

        ['102110368','102110368'],
        ['102110370','102110370'],
        ['102110371','102110371'],
        ['102110372','102110372']
    ] 

    var langHiddenLocale = $("#langHiddenLocale").val();
    var selValue = form.langId.value;
    var prevSelLang = $("#langHiddenCmdCtxt").val();
    var temp = selValue.split("@");
    var lang = temp[0];
    var locale = temp[1];
    cookieValue = cookieValue + "|" + lang;
    var actionValue = form.action + "&langId=" + lang;
    var currentURL = document.URL;
    
    if (currentURL.indexOf("?") == -1) {
        var para = currentURL.split('+').pop();
        var newURL;
        newURL = currentURL.replace(langHiddenLocale, locale);

        if(para.indexOf('/')!=-1){
            para = para.split('/').shift();
        }
        if(toLang.indexOf('fr')!=-1){
            $.each(paraLangStore, function(index){
                if(paraLangStore[index][0]==para){
                    newURL = newURL.replace(para, paraLangStore[index][1]);
                }
            });
        }else{
            $.each(paraLangStore, function(index){
                if(paraLangStore[index][1]==para){
                    newURL = newURL.replace(para, paraLangStore[index][0]);
                }
            });
        }

        actionValue = newURL;
    }

    form.action = actionValue;
    if (displayAlert == true) {
        openLangConfirm();
       setLangCookie("WHR_USER_LANGUAGE", cookieValue, null);
    } else {
        setLangCookie("WHR_USER_LANGUAGE", cookieValue, null);
        form.submit();
    }

}