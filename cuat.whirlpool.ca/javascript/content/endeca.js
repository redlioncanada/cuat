var d = document;
var safari = (navigator.userAgent.toLowerCase().indexOf('safari') != -1) ? true : false;
var gebtn = function(parEl,child) { return parEl.getElementsByTagName(child); };

function radioCheck_btns(){
    $('.colorBox').click(function(){
        if(!$(this).hasClass('c_inactive')){
        var className = 'active';
            var element$ = $(this);
            element$.toggleClass(className);
    }
    });
    $('.c_inactive').next().addClass('labelInactive');
  
}

//makes a groud of check boxes like radio buttons
function likeRadioBtn(){
$('.likeRadioBtn .endeca_textOpt').click(function(){
    if(!$(this).hasClass('inactive_listItem')){
        if(!$(this).children().hasClass('c_on')){
            $('.likeRadioBtn .endeca_textOpt').not(this).removeClass('inactive_listItem').children().removeClass('c_on c_inactive').addClass('c_off');
        }
        else{
            $('.likeRadioBtn .endeca_textOpt').not(this).addClass('inactive_listItem').children().removeClass('c_on c_off').addClass('c_inactive');
        }
    }
});
}

function paginationView_Options(){

$('.endeca_viewAll_btn a').unbind();
$('.pageIndicator_conteiner .endeca_viewAll_btn a').click(
    function(){
        $('.pageIndicator_conteiner').addClass('hide');
        $('.pageIndicator_conteiner_2').removeClass('hide');
    }
);
$('.pageIndicator_conteiner_2 .endeca_viewAll_btn a').click(
    function(){
        $('.pageIndicator_conteiner_2').addClass('hide');
        $('.pageIndicator_conteiner').removeClass('hide');
    }
);

}

//StartProduct compare functionality
//This function used to check if more than 1 products checked then enable the compare button
function checkCompareButton(){
    var activeClass = 'active', compareClass = 'readyCompare';
    var btnCompare = $('.bar_compare_btn');
     $('div.bar_compare_btn').click(function(e){
        //allow the click only if the button is active
        if($(".bar_compare_btn").hasClass("active")){
            var url = document.getElementById('Comparelnk').value;
            window.open(url, "_self");
            e.stopPropagation()
        }
     });
}
var check_it = function() {
    var inp = gebtn(this,'input')[0];
    if(!$(this).parent().hasClass('inactive_listItem')){
        if (this.className == 'label_check c_off' || (!safari && inp.checked)) {
            this.className = 'label_check c_on';
            if (safari) inp.click();
        } else {
            this.className = 'label_check c_off';
            if (safari) inp.click();
        }
    }
};
var turn_radio = function() {
    var inp = gebtn(this,'input')[0];
    if (this.className == 'label_radio r_off' || inp.checked) {
        var ls = gebtn(this.parentNode,'label');
        for (var i = 0; i < ls.length; i++) {
            var l = ls[i];
            if (l.className.indexOf('label_radio') == -1)  continue;
            l.className = 'label_radio r_off';
        };
        this.className = 'label_radio r_on';
        if (safari) inp.click();
    } else {
        this.className = 'label_radio r_off';
        if (safari) inp.click();
    };
};


//this is required to support initialize all components event bindings after ajax call.
function init_endeca_dynamic_js(){
    //Enable like radio button behavior on "Cooktop Fuel Type"
    likeRadioBtn();
    
    //called this to enable "sort by" buttons checked
    radioCheck_btns();
    
    //called this to enable compare button if more than 1 product checked
    checkCompareButton();

    //called this to enable "view all / view # per page " options
    paginationView_Options();

    //Set readonly to #amount input
    //$('#amount', '#endeca_leftNavContainer').attr('readonly', 'readonly');
    
    //Remove default tooltip title attribute
    $('.whpTooltip').each(function(index){
        $(this).attr('datafld', $(this).attr('title'));
        $(this).removeAttr('title');
    });
    
    var body = gebtn(d,'body')[0];
    body.className = body.className && body.className != '' ? body.className + ' has-js' : 'has-js';
    
    //for inputs on left panel
    if (!d.getElementById || !d.createTextNode) return;
    var ls = gebtn(d,'label');
    for (var i = 0; i < ls.length; i++) {
        var l = ls[i];
        if (l.className.indexOf('label_') == -1) continue;
        var inp = gebtn(l,'input')[0];
        if (l.className == 'label_check') {
            l.className = (safari && inp.checked == true || inp.checked) ? 'label_check c_on' : 'label_check c_off';
            if($(l).parent().hasClass('inactive_listItem')){
                l.className = 'label_check c_inactive';
            }
            l.onclick = check_it;
        };
        if (l.className == 'label_check_compare') {
            l.className = (safari && inp.checked == true || inp.checked ) ? 'label_check_compare c_on_compare' : 'label_check_compare c_off_compare';
            l.onclick = checkIt_compare;
        };
        if (l.className == 'label_radio') {
            l.className = (safari && inp.checked == true || inp.checked) ? 'label_radio r_on' : 'label_radio r_off';
            l.onclick = turn_radio;
        };
    };
    
    $(".question_mark").fancybox({
        autoSize : false,
        width : 600, //804
        height : 604,
        closeClick : false,
        openEffect : 'fade',
        closeEffect : 'fade',
        beforeShow : function (){
            if (window.PIE){
            $('.fancybox-outer').each(function(){
                PIE.detach(this);
                setTimeout(function(){
                    PIE.attach(this);
                }, 100);
            });
            }
        }
    }); 
    
    $('.whpTooltip').whpTooltip({
        datafld : "datafld",
        width   : 300,
        height  : 'auto',
    autoHide: false
    });
    
}

$(document).ready(function(){
    if($.browser.msie){
        if($.browser.version == "7.0"){
            $("head").append("<link href='/css/ie7.css' type='text/css' rel='stylesheet'>");
            $("div.endeca_container").addClass("dj_ie dj_ie7");
        }
        else if($.browser.version == "8.0"){
            $("head").append("<link href='/css/ie8.css' type='text/css' rel='stylesheet'>");
            $("div.endeca_container").addClass("dj_ie");
        }
    }
    init_endeca_dynamic_js();
    
    if ($('#pcSortOptiontop_1').find('a.hightoLowPrice').length){
        $('#pcSortOptiontop_1').find('a.hightoLowPrice').addClass('active');
    }
});

//Filter Items Clickable

$(window).load(function() {

    $('.endeca_textOpt').live("click",function(e){
        if(!$(e.target).is('label')){
            $(this).find('label').trigger('mousedown'); 
        }
    });

    $('.endeca_textOpt').live("click",function(e){
        if(!$(e.target).is('div')){
            $(this).find('div').trigger('mousedown'); 
        }
    });
});