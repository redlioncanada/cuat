$(document).ready(function(){
		var currentTab = 0; // Set to a different number to start on a different tab.
		$(".tabs li:eq(0) a").css("border-left", "none");
	   
		$(".tabbed_box_3_boxes .tabs li a").click(function() { 
			openTab($(this)); return false; 
		});
		
		$(".tabbed_box_3_boxes .tabs li a:eq("+currentTab+")").click()

		function openTab(clickedTab) {
		   var thisTab = $(".tabbed_box_3_boxes .tabs a").index(clickedTab);
		   	$(".tabbed_box_3_boxes .tabs li a").removeClass("active");
		   	$(".tabbed_box_3_boxes .tabs li a:eq("+thisTab+")").addClass("active");
		   	$(".tabbed_box_3_boxes .tabbed_content").hide();
		   	$(".tabbed_box_3_boxes .tabbed_content:eq("+thisTab+")").show();

		   currentTab = thisTab;
	}
});