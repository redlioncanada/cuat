// JavaScript Document for QuickView Windows
if(typeof(tb_branch) == 'undefined')
{
	var tb_branch = '/'; // this need to be set from branch head.
}
/* ----- Product Quick View -------- */
$(document).ready(function () {
	changeViewImage1();

  if($('#quick_view_carousel_images').length != 0){
    $("#quick_view_carousel_images").jCarouselLite({
     btnNext: ".next",
     btnPrev: ".prev",
     visible: 1
    });
  }

	 //Hide navigation arrow if only one image appear
		
	 var quick_list=($("#quick_view_product_carousel li").length) -2;    
		 
	 if (quick_list <= 1) {
			
	        	$('#quick_view_carousel_holder').hide();
		}
	
	

	 // clears the search field on focus
	var clearMePrevious = "";
	
	// change the "add to cart" button
	var $cookieQuickView = $("#quick_view_replacements_wrapper_whirlpool");
	var $quickViewSel = $cookieQuickView.find("select[name='replacement_duration']"); //finds the quick view select
	var hrefArray = [];
	var i = 0;
	$cookieQuickView.find(".quick_view_action_items a").each(function(){
		var len = $(this).find("img").length;
		if(len != 0){
			$(this).attr("src",tb_branch+"images/btn_add_to_cart_quick_view.png"); 
			hrefArray[i] = $(this).attr("href");
			i++;
		}
	});
	
	$quickViewSel.change(function(){
		var optionValue = $quickViewSel.find("option:selected").val();
		if(optionValue != "0"){
			$cookieQuickView.find(".quick_view_action_items a").each(function(){
				var len = $(this).find("img").length;
				if(len != 0){
					$(".quick_view_action_items a.one_time").attr("href","#");
					$(".quick_view_action_items a.freq").css("cursor","pointer").find("img").attr("src",tb_branch+"images/btn_add_to_cart_quick_view.png");
					$(".quick_view_action_items a.one_time").css("cursor","default").find("img").attr("src",tb_branch+"images/btn_add_to_cart_quick_view_gray.png");
					$(".quick_view_action_items a.freq").attr("href",hrefArray[1]);
				}
			});
		}else{
			$cookieQuickView.find(".quick_view_action_items a").each(function(){
				var len = $(this).find("img").length;
				if(len != 0){
					$(".quick_view_action_items a.freq").attr("href","#");
					$(".quick_view_action_items a.freq").css("cursor","default").find("img").attr("src",tb_branch+"images/btn_add_to_cart_quick_view_gray.png");
					$(".quick_view_action_items a.one_time").css("cursor","pointer").find("img").attr("src",tb_branch+"images/btn_add_to_cart_quick_view.png");
					$(".quick_view_action_items a.one_time").attr("href",hrefArray[0]);
				}
			});
		}
	}).trigger("change");
})


function firstCarousel()
{

  if($('#quick_view_carousel_images').length != 0){
    $("#quick_view_carousel_images").jCarouselLite({
     btnNext: ".next",
     btnPrev: ".prev",
     visible: 1
    });
  }
}


function secondCarousel()
{

  if($('#quick_view_carousel_images2').length != 0){
    $("#quick_view_carousel_images2").jCarouselLite({
     btnNext: ".next",
     btnPrev: ".prev",
     visible: 1
    });
  }
}

function changeViewImage1()
{
	function changeMainColor(){
		var color_details = $(this).attr("rel").split("|");

		color = color_details[0]; 
		model = color_details[1]; 
		img_src = color_details[2]; 
		$("#color_image").attr("src", img_src);
		$(".color_and_msrp p.color").text(color);
		$(".title_and_rating h4.product_title").text(model);
			}
			
		$('.product_colors a').bind('click', changeMainColor);

	/*  ccurry- old static version of this function
		function changeMainColor(x){
		$("ul#quick_view_product_carousel li.carousel_selected img").attr("src",path+"img_washer_thumb_"+x+".png");
		$("div.quick_view_image_viewer img:eq(0)").attr("src",path+"img_product_detail_washing_machine2_"+x+".png");
		Images1[0]="img_product_detail_washing_machine2_"+x+".png"
			}
		$(".color_line:eq(0)").click(function(){changeMainColor("red")});
		$(".color_line:eq(1)").click(function(){changeMainColor("white")});
		$(".color_line:eq(2)").click(function(){changeMainColor("silver")});
		$(".color_line:eq(3)").click(function(){changeMainColor("black")});
		$(".color_line:eq(4)").click(function(){changeMainColor("steel")});
		$("#quick_view_wrapper_maytag ul#quick_view_product_carousel li img").click(function(){
				$("#quick_view_wrapper_maytag #quick_view_product_carousel li img").css("border","2px solid #fff")
				$(this).css("border","2px solid #005ABB")
				$("#quick_view_wrapper_maytag .quick_view_image_viewer > img").attr("src",path+Images1[$(this).attr("src").match(/[\d]+/)||0]);
			}
		)
*/

}
