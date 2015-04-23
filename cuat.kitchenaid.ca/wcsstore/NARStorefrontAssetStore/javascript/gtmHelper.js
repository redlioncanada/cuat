if(typeof gtmHelper==="undefined"){var gtmHelper={logPrefix:"[GTM Helper v1.4] ",enabled:true,debugMode:true,currencyCode:"USD",zipCode:"",impressions:[],products:[],orderItems:[],data:[],itemDataMap:{},checkoutStepIndex:-1,checkoutOption:"",orderId:"",affiliation:"",revenue:"",tax:"",shipping:"",coupon:"",addImpression:function(partNumber,name,category,brand,variant,price,list,position){if(!gtmHelper.enabled){return;}if(price&&price.indexOf("$")>-1){price=price.replace("$","");}gtmHelper.impressions.push({id:partNumber,name:name,category:category,brand:brand,variant:variant,price:price,list:list,position:position,dimension1:gtmHelper.zipCode});if(gtmHelper.debugMode){console.info(gtmHelper.logPrefix+"Added impression; partNumber="+partNumber+"; name="+name+"; category="+category+"; brand="+brand+"; variant="+variant+"; price="+price+"; list="+list+"; position="+position);}},addProduct:function(partNumber,name,category,brand,variant,price){if(!gtmHelper.enabled){return;}if(price&&price.indexOf("$")>-1){price=price.replace("$","");}gtmHelper.products.push({id:partNumber,name:name,category:category,brand:brand,variant:variant,price:price,dimension1:gtmHelper.zipCode});if(gtmHelper.debugMode){console.info(gtmHelper.logPrefix+"Added product; partNumber="+partNumber+"; name="+name+"; category="+category+"; brand="+brand+"; variant="+variant+"; price="+price);}},addSwatches:function(){var jsonData=$("#jsonColors");if(jsonData.length>0&&jsonData.data("parsed")!=true){jsonData.data("parsed",true);var infoHtml=jsonData.html();var products=JSON.parse(infoHtml);if(products){for(var i=0;i<products.length;i++){var product=products[i];var parentData=null;for(var j=0;j<product.Colors.length;j++){var item=product.Colors[j],itemId=item.Attributes.itemId;if(gtmHelper.itemDataMap[itemId]!=null){parentData=gtmHelper.itemDataMap[itemId];break;}}if(parentData!=null){for(var j=0;j<product.Colors.length;j++){var item=product.Colors[j];if(item.Attributes.itemId!=parentData.catEntryId&&gtmHelper.itemDataMap[item.Attributes.itemId]==null){gtmHelper.addData(item.Attributes.itemId,item.Attributes.SKU,parentData.product.name,parentData.product.category,parentData.product.brand||"",item.Color||"",item.Attributes.Price||"");}}}}}var ajaxSubscription=$("body").data("ajaxSubscription");if(ajaxSubscription==null){dojo.subscribe("ajaxRequestCompleted",function(data){gtmHelper.addSwatches();});$("body").data("ajaxSubscription",true);}}},addData:function(catEntryId,partNumber,name,category,brand,variant,price){if(!gtmHelper.enabled){return;}if(price&&price.indexOf("$")>-1){price=price.replace("$","");}var json={catEntryId:catEntryId,product:{id:partNumber,name:name,category:category,brand:brand,variant:variant,price:price,dimension1:gtmHelper.zipCode}};for(var i=0;i<gtmHelper.data.length;i++){if(gtmHelper.data[i].catEntryId==catEntryId){gtmHelper.data[i]=json;if(gtmHelper.debugMode){console.info(gtmHelper.logPrefix+"Data updated; catEntryId="+catEntryId+"; partNumber="+partNumber+"; name="+name+"; category="+category+"; brand="+brand+"; variant="+variant+"; price="+price);}return;}}gtmHelper.data.push(json);gtmHelper.itemDataMap[json.catEntryId]=json;if(gtmHelper.debugMode){console.info(gtmHelper.logPrefix+"Added data; catEntryId="+catEntryId+"; partNumber="+partNumber+"; name="+name+"; category="+category+"; brand="+brand+"; variant="+variant+"; price="+price);}},addOrderItem:function(partNumber,name,category,brand,variant,price,quantity){if(!gtmHelper.enabled){return;}if(price&&price.indexOf("$")>-1){price=price.replace("$","");}var intQuantity=0;try{intQuantity=parseInt(quantity);}catch(err){}var orderItemIndex=-1;for(var i=0;i<gtmHelper.orderItems.length;i++){if(gtmHelper.orderItems[i].id==partNumber){orderItemIndex=i;gtmHelper.orderItems[i].quantity+=intQuantity;console.info(gtmHelper.logPrefix+"Updated order item quantity; newQuantity="+gtmHelper.orderItems[i].quantity+"; partNumber="+partNumber+"; name="+name+"; category="+category+"; brand="+brand+"; variant="+variant+"; price="+price+"; quantity="+quantity);break;}}if(orderItemIndex==-1){gtmHelper.orderItems.push({id:partNumber,name:name,category:category,brand:brand,variant:variant,price:price,quantity:intQuantity,dimension1:gtmHelper.zipCode});if(gtmHelper.debugMode){console.info(gtmHelper.logPrefix+"Added order item; partNumber="+partNumber+"; name="+name+"; category="+category+"; brand="+brand+"; variant="+variant+"; price="+price+"; quantity="+quantity);}}},setZipCode:function(zipCode){if(!gtmHelper.enabled){return;}gtmHelper.zipCode=zipCode;for(var i=0;i<gtmHelper.impressions.length;i++){gtmHelper.impressions[i].dimension1=zipCode;}for(var i=0;i<gtmHelper.products.length;i++){gtmHelper.products[i].dimension1=zipCode;}for(var i=0;i<gtmHelper.data.length;i++){gtmHelper.data[i].product.dimension1=zipCode;}if(gtmHelper.debugMode){console.info(gtmHelper.logPrefix+"Zip code added; zipCode="+zipCode);}},getZipCodeFromCookie:function(){if(!gtmHelper.enabled){return;}var zipRegCookie="";if(typeof dojo!="undefined"){zipRegCookie=dojo.cookie("WHR_zipreg");}else{var cookie_name="WHR_zipreg=";var ca=document.cookie.split(";");for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==" "){c=c.substring(1);}if(c.indexOf(cookie_name)==0){zipRegCookie=c.substring(cookie_name.length,c.length);}}zipRegCookie=zipRegCookie.replace("%7C","|");}if(zipRegCookie!=null&&zipRegCookie!=""){var zipCdRegionArr=zipRegCookie.split("|");if(gtmHelper.debugMode){console.info(gtmHelper.logPrefix+"Successfully retrieved zip code from cookie");}gtmHelper.setZipCode(zipCdRegionArr[0]);return;}if(gtmHelper.debugMode){console.info(gtmHelper.logPrefix+"Zip code not found within cookie");}},sendImpressions:function(){if(!gtmHelper.enabled){return;}if(typeof dataLayer==="undefined"||gtmHelper.impressions.length==0){return;}dataLayer.push({event:"impressionsAJAX",ecommerce:{currencyCode:gtmHelper.currencyCode,impressions:gtmHelper.impressions}});if(gtmHelper.debugMode){console.info(gtmHelper.logPrefix+gtmHelper.impressions.length+" impression"+(gtmHelper.impressions.length==1?"":"s")+" sent");}gtmHelper.impressions=[];},sendProductClickByPartNumber:function(partNumber,list){if(!gtmHelper.enabled){return;}if(typeof dataLayer==="undefined"){return;}var catEntryId="";for(var i=0;i<gtmHelper.data.length;i++){if(gtmHelper.data[i].product.id==partNumber){catEntryId=gtmHelper.data[i].catEntryId;break;}}if(catEntryId!=""){gtmHelper.sendProductClick(catEntryId,list);}else{if(gtmHelper.debugMode){console.info(gtmHelper.logPrefix+"Product clicked but couldn't find data for this partNumber; partNumber="+partNumber+"; list="+list);}}},sendProductClick:function(catEntryId,list){if(!gtmHelper.enabled){return;}if(typeof dataLayer==="undefined"){return;}var product=[];for(var i=0;i<gtmHelper.data.length;i++){if(gtmHelper.data[i].catEntryId==catEntryId){product.push(gtmHelper.data[i].product);break;}}if(product.length==0){return;}dataLayer.push({event:"productClick",ecommerce:{click:{actionField:{list:list},products:product}}});if(gtmHelper.debugMode){console.info(gtmHelper.logPrefix+"Product clicked; partNumber="+product[0].id+"; catEntryId="+catEntryId+"; list="+list);}},sendAddToCart:function(catEntryId,quantity){if(!gtmHelper.enabled){return;}if(typeof dataLayer==="undefined"){return;}var product=[];for(var i=0;i<gtmHelper.data.length;i++){if(gtmHelper.data[i].catEntryId==catEntryId){product.push(gtmHelper.data[i].product);break;}}if(product.length==0){return;}product[0].quantity=quantity;dataLayer.push({event:"addToCart",ecommerce:{currencyCode:gtmHelper.currencyCode,add:{products:product}}});if(gtmHelper.debugMode){console.info(gtmHelper.logPrefix+"Product added to cart; partNumber="+product[0].id+"; catEntryId="+catEntryId+"; quantity="+quantity);}},sendCartQuantityUpdated:function(orderItemId){if(!gtmHelper.enabled){return;}if(typeof dataLayer==="undefined"){return;}var product=[];if($('input.orderItem_orderItemId[value="'+orderItemId+'"]').length>0){var orderItemIndex=$('input.orderItem_orderItemId[value="'+orderItemId+'"]').attr("id").split("_")[1];if($("#catalogId_"+orderItemIndex).length>0){var catEntryId=$("#catalogId_"+orderItemIndex).val();}}else{if(gtmHelper.debugMode){console.info(gtmHelper.logPrefix+"Could not find catEntryId in sendCartQuantityUpdated(); orderItemId="+orderItemId);}return;}var newQuantity=0;$("input.orderItem_catEntryId").each(function(){if($(this).val()==catEntryId){var itemIndex=$(this).attr("id").split("_")[1];try{newQuantity+=parseInt($("#qty_"+itemIndex).val());}catch(err){}}});for(var i=0;i<gtmHelper.data.length;i++){if(gtmHelper.data[i].catEntryId==catEntryId){product.push(gtmHelper.data[i].product);break;}}if(product.length==0){return;}var oldQuantity=0;var gtmOrderItemIndex=-1;for(var i=0;i<gtmHelper.orderItems.length;i++){if(gtmHelper.orderItems[i].id==product[0].id){oldQuantity=gtmHelper.orderItems[i].quantity;gtmOrderItemIndex=i;}}var event="";if(newQuantity-oldQuantity>0){event="addToCart";product[0].quantity=newQuantity-oldQuantity;}else{event="removeFromCart";product[0].quantity=oldQuantity-newQuantity;}gtmHelper.orderItems[gtmOrderItemIndex].quantity=newQuantity;dataLayer.push({event:event,ecommerce:{currencyCode:gtmHelper.currencyCode,remove:{products:product}}});if(gtmHelper.debugMode){console.info(gtmHelper.logPrefix+"Event="+event+"; partNumber="+product[0].id+"; catEntryId="+catEntryId+"; quantity="+product[0].quantity);}},sendDeleteFromCart:function(orderItemId){if(!gtmHelper.enabled){return;}if(typeof dataLayer==="undefined"){return;}var product=[];var orderItemIndex=$('input.orderItem_orderItemId[value="'+orderItemId+'"]').attr("id").split("_")[1];var catEntryId=$("#catalogId_"+orderItemIndex).val();var quantity=0;try{quantity=$("#qty_"+orderItemIndex).val();}catch(err){}for(var i=0;i<gtmHelper.data.length;i++){if(gtmHelper.data[i].catEntryId==catEntryId){product.push(gtmHelper.data[i].product);break;}}if(product.length==0){return;}product[0].quantity=quantity;dataLayer.push({event:"removeFromCart",ecommerce:{currencyCode:gtmHelper.currencyCode,remove:{products:product}}});if(gtmHelper.debugMode){console.info(gtmHelper.logPrefix+"Removed line item from cart; partNumber="+product[0].id+"; catEntryId="+catEntryId+"; quantity="+quantity);}},setCheckoutStep:function(stepIndex,option){if(!gtmHelper.enabled){return;}gtmHelper.checkoutStepIndex=stepIndex;gtmHelper.checkoutOption=option;},setPurchaseData:function(orderId,affiliation,revenue,tax,shipping,coupon){if(!gtmHelper.enabled){return;}gtmHelper.orderId=orderId;gtmHelper.affiliation=affiliation;gtmHelper.revenue=revenue;gtmHelper.tax=tax;gtmHelper.shipping=shipping;gtmHelper.coupon=coupon;gtmHelper.checkoutStepIndex=5;},sendCheckoutStep:function(stepIndex,option){if(!gtmHelper.enabled||stepIndex==5){return;}if(typeof dataLayer==="undefined"){return;}dataLayer.push({event:"checkout",ecommerce:{currencyCode:gtmHelper.currencyCode,checkout:{actionField:{step:stepIndex,option:option},products:gtmHelper.orderItems}}});if(gtmHelper.debugMode){console.info(gtmHelper.logPrefix+"Checkout; step="+stepIndex+"; option="+option);}},sendInitial:function(){if(!gtmHelper.enabled){return;}if(typeof dataLayer==="undefined"){return;}var hasSomethingToSend=false;var tempDataLayer={ecommerce:{}};if(gtmHelper.currencyCode!=""){tempDataLayer.ecommerce.currencyCode=gtmHelper.currencyCode;}if(gtmHelper.impressions.length>0){tempDataLayer.ecommerce.impressions=gtmHelper.impressions;gtmHelper.impressions=[];hasSomethingToSend=true;}if(gtmHelper.products.length>0){tempDataLayer.ecommerce.detail={actionField:{list:"PDP"},products:gtmHelper.products};gtmHelper.products=[];hasSomethingToSend=true;}if(gtmHelper.checkoutStepIndex==5&&gtmHelper.orderId!=""){tempDataLayer.ecommerce.purchase={actionField:{id:gtmHelper.orderId,affiliation:gtmHelper.affiliation,revenue:gtmHelper.revenue,tax:gtmHelper.tax,shipping:gtmHelper.shipping,coupon:gtmHelper.coupon},products:gtmHelper.orderItems};hasSomethingToSend=true;}if(hasSomethingToSend){dataLayer.push(tempDataLayer);if(gtmHelper.debugMode){console.info(gtmHelper.logPrefix+"Initial data added to dataLayer");}}else{if(gtmHelper.debugMode){console.info(gtmHelper.logPrefix+"No initial data to send");}}},markAllScriptsAsProcessed:function(){var allScriptNodes=document.getElementsByTagName("script");for(var i=0;i<allScriptNodes.length;i++){if(allScriptNodes[i].className=="gtmhScript"){allScriptNodes[i].className="";}}},processScripts:function(){var allScriptNodes=document.getElementsByTagName("script");for(var i=0;i<allScriptNodes.length;i++){if(allScriptNodes[i].className=="gtmhScript"){eval(allScriptNodes[i].innerHTML);allScriptNodes[i].className="";}}gtmHelper.sendImpressions();},postInit:function(){gtmHelper.markAllScriptsAsProcessed();if(gtmHelper.checkoutStepIndex!=-1){gtmHelper.sendCheckoutStep(gtmHelper.checkoutStepIndex,gtmHelper.checkoutOption);}},init:function(){if(!gtmHelper.enabled){return;}if(window.location.search.indexOf("debugMode=1")>-1){gtmHelper.debugMode=true;}if(gtmHelper.debugMode){console.info(gtmHelper.logPrefix+"Enhanced Ecommerce Debug Mode is Enabled");}else{console.info(gtmHelper.logPrefix+"Enhanced Ecommerce Debug Mode is Disabled");return;}gtmHelper.getZipCodeFromCookie();if(typeof dojo!=="undefined"){dojo.addOnLoad(function(){gtmHelper.postInit();gtmHelper.addSwatches();});}else{if(window.jQuery){$(function(){gtmHelper.postInit();});}}}};gtmHelper.init();}