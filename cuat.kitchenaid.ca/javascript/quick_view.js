// JavaScript Document for QuickView Windows

/* ----- Product Quick View -------- */
if(typeof(tb_branch) == 'undefined')
{
	var tb_branch = '/'; // this need to be set from branch head.
}

$(document).ready(function () {
   
  if($('.quick_view_carousel_holder').length != 0){
    $(".quick_view_carousel_holder").jCarouselLite({
     btnNext: ".next",
     btnPrev: ".prev",
     visible: 3
    });
  }
	showColorDetail();
	 // clears the search field on focus
	var clearMePrevious = "";
	changeViewImage();
	changeViewImage1();
	changeViewImage2();
	$('#quick_view_product_carousel li a').bind('click', dynamicCarouselMTG);
	$("#replacement_program").click(function(){
	if($("#replacement_program").attr("checked") == true){$("div.action_item select").removeAttr("disabled")}
	})
	$("#one_time_purchase").click(function(){
	if($("#one_time_purchase").attr("checked") == true){$("div.action_item select").attr("disabled","disabled")}
	})
	
})
var Images1=new Array("img_product_detail_washing_machine2.png","img_product_detail_washing_machine1.png","img_product_detail_washing_machine3.png","img_product_detail_washing_machine4.png","img_product_detail_washing_machine5.png");
var path=tb_branch+"images/";
function changeViewImage1()
{
	$("#quick_view_wrapper_maytag #quick_view_product_carousel li:eq(3) img").css("border","2px solid #005ABB")

	function changeMainColor(){
		var color_details = $(this).attr("rel").split("|");

		color = color_details[0]; 
		model_number = color_details[1]; 
		img_src = color_details[2]; 

		$("#main_product_image").attr("src", img_src);
			}
			
		$('.color_line a').bind('click', changeMainColor);
		$("#quick_view_wrapper_maytag ul#quick_view_product_carousel li img").click(function(){
				$("#quick_view_wrapper_maytag #quick_view_product_carousel li img").css("border","2px solid #fff")
				$(this).css("border","2px solid #005ABB")
/*				$("#quick_view_wrapper_maytag .quick_view_image_viewer > img").attr("src",path+Images1[$(this).attr("src").match(/[\d]+/)||0]);
*/			}
		)

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

function dynamicCarouselMTG() {
$("#main_product_image").attr("src", $(this).attr("rel"));
return false;
} 

function showColorDetail(){
	function colorDetailContent(){
		var hover_details = $(this).attr("rel").split("|");
		hover_color = hover_details[0]; 
		hover_model_number = hover_details[1]; 
		hover_img_src = hover_details[2]; 
		topPosition = hover_details[3]; 
		hover_price = hover_details[4]; 
		
		$(".product_information_wrapper").append("<div class=\"color_detail\">");
		if($("h3.product_info_header").length>1){
		$(".color_detail").css("top",topPosition+"px");
		}
		else{$(".color_detail").css("top",(topPosition)+"px");}
		$(".color_detail").css("left","65px");
		$(".color_detail").append("<div class=\"color_detail_top\"></div>")
		$(".color_detail").append("<div class=\"color_detail_middle\"></div>");
		$(".general_color_detail_text div.product_color").text(hover_color);
		$(".general_color_detail_text div.product_price").text(hover_price);
		$(".color_detail_middle").html($(".general_color_detail_text").html())
		$(".color_detail").append("<div class=\"color_detail_bottom\"></div>");
	}

/*	ccurry- example of old method of tooltips	
$(".color_line:eq(0)").mouseover(function(){colorDetailContent("red",172)});
*/	
	
	$(".color_line a").bind('mouseover', colorDetailContent);
	$(".color_line a").mouseout(
	function(){
		$(".color_detail").remove();
		}
	)
	}

var Images=new Array("img_product_detail_water_filter2.png","img_product_detail_water_filter1.png","img_product_detail_water_filter3.png");
var path=tb_branch+"images/";
function changeViewImage()
{
	$("#quick_view_replacements_wrapper_maytag #quick_view_product_carousel li:eq(3) img").css("border","2px solid #005ABB")
	$("#quick_view_replacements_wrapper_maytag ul#quick_view_product_carousel li img").click(function(){
				var nums=Images.length;
				$("#quick_view_replacements_wrapper_maytag #quick_view_product_carousel li img").css("border","2px solid #fff")
				$(this).css("border","2px solid #005ABB")
				$("#quick_view_replacements_wrapper_maytag .quick_view_image_viewer > img").attr("src",path+Images[$(this).attr("src").match(/[\d]+/)||0]);
															  });
}

var Images2=new Array("img_product_detail_washing_machine2.png","img_product_detail_washing_machine1.png","img_product_detail_washing_machine3.png","img_product_detail_washing_machine4.png","img_product_detail_washing_machine5.png");
var path=tb_branch+"images/";
function changeViewImage2()
{
	$("#quick_view_derivative_wrapper_maytag #quick_view_product_carousel li:eq(3) img").css("border","2px solid #005ABB")
	$("#quick_view_derivative_wrapper_maytag ul#quick_view_product_carousel li img").click(function(){
				var nums=Images2.length;
				$("#quick_view_derivative_wrapper_maytag #quick_view_product_carousel li img").css("border","2px solid #fff")
				$(this).css("border","2px solid #005ABB")
				$("#quick_view_derivative_wrapper_maytag .quick_view_image_viewer > img").attr("src",path+Images2[$(this).attr("src").match(/[\d]+/)||0]);
															  });
}


