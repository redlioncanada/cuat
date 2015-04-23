function changeColor(productId, color, obj) {
    
    var infoHtml = $("#jsonColors").html();
    var objectArray = JSON.parse(infoHtml);
    var entries=objectArray;    
    for(var i=0;i<entries.length;i++){
        if (productId == entries[i].productId) {
            for (var j = 0; j < entries[i].Colors.length; j++) {
                if (entries[i].Colors[j].Color == color) {
                    $(".item_" + productId + " .color-swatches .selected").removeClass("selected");
                    $(obj).addClass("selected");                    
                    $(".item_" + productId + " .endeca_applianceImg a:first-child").attr("href", entries[i].Colors[j].Attributes.Url);
					var hrefQuick = $(".item_" + productId + " .endeca_applianceImg a.endeca_quickView").attr("href");
					var lastSku = $.trim($(".item_" + productId + " .endeca_applinceInfo .applinceInfo_title a:last-child").text());
					var newhref = hrefQuick.replace(lastSku, entries[i].Colors[j].Attributes.SKU);
					$(".item_" + productId + " .endeca_applianceImg a.endeca_quickView").attr("href", newhref);
                    $(".item_" + productId + " .endeca_applianceImg a img.img_appliance").attr("src", entries[i].Colors[j].Attributes.Image);
                    $(".item_" + productId + " .endeca_applinceInfo .applinceInfo_title a:last-child").text(entries[i].Colors[j].Attributes.SKU);
                    $(".item_" + productId + " .endeca_applinceInfo .applinceInfo_title a").attr("href", entries[i].Colors[j].Attributes.Url);
                    $(".item_" + productId + " .endeca_viewBuy_btns .endecaProdCompare .prodprice span").text(entries[i].Colors[j].Attributes.Price);
                    $(".item_" + productId + " .endeca_viewBuy_btns .endecaAddToCart .prodprice").text(entries[i].Colors[j].Attributes.Price);
                    $(".item_" + productId + " .color-swatches .color_name").text(color);

                    if ($.trim($(".item_" + productId + " .endeca_applinceInfo .insideList li:last-child").text()) == "- More...") {
                        $(".item_" + productId + " .endeca_applinceInfo .insideList li:last-child a").attr("href", entries[i].Colors[j].Attributes.Url);
                    }
					
					if(document.getElementById("colorSwatchAddToCart_"+productId) != null ) {
					
					var addToCartSelectedColor = $("#colorSwatchAddToCart_"+productId).attr("href");
					var fireFloodLight = addToCartSelectedColor.split(';')[0];
					var addToCartNewColorUrl = ""+fireFloodLight+";setCurrentId('comAddtocartgrid_"+entries[i].Colors[j].Attributes.itemId+"'); categoryDisplayJS.AddItem2ShopCartAjax('"+entries[i].Colors[j].Attributes.itemId+"',1, false);";
					$("#colorSwatchAddToCart_"+productId).attr("href",addToCartNewColorUrl);
					}
					
					if(document.getElementById("colorSwatchWhereToBuy_"+productId) != null){
					
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