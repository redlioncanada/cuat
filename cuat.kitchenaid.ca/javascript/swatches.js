function changeColor(productId, color, obj) {
    
    var infoHtml = $("#jsonColors").html();
    var objectArray = JSON.parse(infoHtml);
    var entries = objectArray;    
    for (var i=0; i < entries.length; i++) {
        if (productId == entries[i].productId) {
            for (var j = 0; j < entries[i].Colors.length; j++) {
                if (entries[i].Colors[j].Color == color) {
                    $(".product_list_detail_" + productId + " .color-swatches .selected").removeClass("selected");         
                    var src = $(obj).attr("src");				
					$(".product_list_detail_" + productId + " img[src='" + src + "']").addClass("selected"); 
                    var url = "http://www.kitchenaid.com";  //window.location.origin;
                    $(".product_list_detail_" + productId + " .product_code_link .product-link").text(entries[i].Colors[j].Attributes.SKU);
                    $(".product_list_detail_" + productId + " .product-link").attr("href", entries[i].Colors[j].Attributes.Url);
                    $(".product_list_detail_" + productId + " .product_image_link img").attr("src", url + entries[i].Colors[j].Attributes.Image);
                    $(".product_list_detail_" + productId + " .product_detail_msrp .product_detail_msrp_number").text(entries[i].Colors[j].Attributes.Price);
                    $(".product_list_detail_" + productId + " .view_details_container a").attr("href", entries[i].Colors[j].Attributes.Url);
                    $(".product_list_detail_" + productId + " .product_list_table_action_cell a.learn_more").attr("href", entries[i].Colors[j].Attributes.Url);
                    $(".product_list_detail_" + productId + " .color-swatches a").attr("href", entries[i].Colors[j].Attributes.Url);
					
					if(document.getElementById("colorSwatchAddToCart_"+productId) != null ) {					
						var addToCartSelectedColor = $("#colorSwatchAddToCart_"+productId).attr("href");
						var fireFloodLight = addToCartSelectedColor.split(';')[0];
						var addToCartNewColorUrl = ""+fireFloodLight+";setCurrentId('comAddtocartgrid_"+entries[i].Colors[j].Attributes.itemId+"'); categoryDisplayJS.AddItem2ShopCartAjax('"+entries[i].Colors[j].Attributes.itemId+"',1, false);";
						$("#colorSwatchAddToCart_"+productId).attr("href",addToCartNewColorUrl);
					}
					
					if(document.getElementById("colorSwatchWhereToBuy_"+productId) != null) {					
						var whereToBuySelectedColor = $("#colorSwatchWhereToBuy_"+productId).attr("href");
						var whereToBuyUrl = whereToBuySelectedColor.split('=')[0];
						var whereToBuyNewColorUrl = ""+whereToBuyUrl+"="+entries[i].Colors[j].Attributes.SKU+"";					
						$("#colorSwatchWhereToBuy_"+productId).attr("href",whereToBuyNewColorUrl);
					}
					
                }
            }
            
        }
    }
    
}

$( document ).ready(function() {
	$(".color-swatches").each(function(i, e) {
		if ($(e).children().length == 1) {
			$($(e).children()[0]).css("margin-bottom", "4px");
		}
	});
});