dojo.require("wc.service.common");dojo.require("dojox.collections.ArrayList");EndecaHelperJS={langId:"-1",storeId:"",catalogId:"",drillDownCount:"0",drillDownHash:new Object(),drillDownHashKeys:[],drillDownSeparatorImgPath:"",searchConstraint:"",ajaxRefreshURL:"",ajaxRefreshURL_DivId:"",sortValue:"",refinementValue:"",navType:"",breadcrumbCount:"0",breadcrumbHash:new Object(),breadcrumbHashKeys:[],pageSize:"",minPrice:"",maxPrice:"",origMinPrice:"",origMaxPrice:"",allResultsLabel:"",refineResultsLabel:"",pageTitle:"",storeCountry:"",absStoresWebPath:"",beginIndex:"0",selectedTab:"",pageView:"",isRefreshRequired:false,isZipcodeChangedOnPage:false,m2aModel:"",setCommonParameters:function(langId,storeId,catalogId){this.langId=langId;this.storeId=storeId;this.catalogId=catalogId;},setIsRefreshRequired:function(isRefreshRequired){this.isRefreshRequired=isRefreshRequired;},setNavType:function(navType){this.navType=navType;},setPageSize:function(newPageSize){this.pageSize=newPageSize;},setAjaxRefreshURLDivID:function(urlRefreshDivID){this.ajaxRefreshURL_DivId=urlRefreshDivID;},getAjaxRefreshURL:function(){if(this.ajaxRefreshURL_DivId!=null&&document.getElementById(this.ajaxRefreshURL_DivId)!=null){this.ajaxRefreshURL=document.getElementById(this.ajaxRefreshURL_DivId).firstChild.data;}var currentURL=document.URL;var currentProtocol="";if(currentURL.indexOf("://")!=-1){currentProtocol=currentURL.substring(0,currentURL.indexOf("://"));}var savedProtocol="";if(this.ajaxRefreshURL.indexOf("://")!=-1){savedProtocol=this.ajaxRefreshURL.substring(0,absoluteURL.indexOf("://"));}if(currentProtocol!=savedProtocol){this.ajaxRefreshURL=currentProtocol+this.ajaxRefreshURL.substring(this.ajaxRefreshURL.indexOf("://"));}return this.ajaxRefreshURL;},setSearchConstraint:function(constraint){this.searchConstraint=constraint;},setSortById:function(sortById){this.sortValue=sortById;},getSortById:function(){if(this.sortValue==null||this.sortValue.length==0){this.sortValue=document.getElementById("sortById").firstChild.data;}return this.sortValue;},setRefinementValue:function(refinementValue){this.refinementValue=refinementValue;},setIsZipcodeChangedOnPage:function(zipcodeChangedOnPage){this.isZipcodeChangedOnPage=zipcodeChangedOnPage;},refreshProductsBySort:function(newSort){this.sortValue=newSort.options[newSort.selectedIndex].value;if(this.m2aModel=="ALL"||this.m2aModel==""){var newURL=this.getAjaxRefreshURL()+"&SRC_sortById="+this.sortValue+"&SRC_searchConstraint="+this.refinementValue+"&pageSize="+this.pageSize+"&beginIndex=0&SRC_minPrice="+this.minPrice+"&SRC_maxPrice="+this.maxPrice;}else{var newURL=this.getAjaxRefreshURL()+"&SRC_sortById="+this.sortValue+"&SRC_searchConstraint="+this.refinementValue+"&pageSize="+this.pageSize+"&beginIndex=0&SRC_minPrice="+this.minPrice+"&SRC_maxPrice="+this.maxPrice+"&m2aModel="+this.m2aModel;}console.debug("New URL being rendered for sorting= "+newURL);setCurrentId(newSort.id);this.refreshProductsByFilterURL("searchUpdate",newURL);},refreshProductsByPageSize:function(newPageSize){this.pageSize=newPageSize.options[newPageSize.selectedIndex].value;if(this.m2aModel=="ALL"||this.m2aModel==""){var newURL=this.getAjaxRefreshURL()+"&SRC_sortById="+this.sortValue+"&SRC_searchConstraint="+this.refinementValue+"&pageSize="+this.pageSize+"&beginIndex=0&SRC_minPrice="+this.minPrice+"&SRC_maxPrice="+this.maxPrice;}else{var newURL=this.getAjaxRefreshURL()+"&SRC_sortById="+this.sortValue+"&SRC_searchConstraint="+this.refinementValue+"&pageSize="+this.pageSize+"&beginIndex=0&SRC_minPrice="+this.minPrice+"&SRC_maxPrice="+this.maxPrice+"&m2aModel="+this.m2aModel;}console.debug("New URL being rendered for page size= "+newURL);setCurrentId(newPageSize.id);this.refreshProductsByFilterURL("searchUpdate",newURL);},refreshProductsByM2A:function(m2aModel){this.m2aModel=m2aModel.options[m2aModel.selectedIndex].value;if(this.m2aModel=="ALL"||this.m2aModel==""){var newURL=this.getAjaxRefreshURL()+"&SRC_sortById="+this.sortValue+"&SRC_searchConstraint="+this.refinementValue+"&pageSize="+this.pageSize+"&beginIndex=0&SRC_minPrice="+this.minPrice+"&SRC_maxPrice="+this.maxPrice;}else{var newURL=this.getAjaxRefreshURL()+"&SRC_sortById="+this.sortValue+"&SRC_searchConstraint="+this.refinementValue+"&pageSize="+this.pageSize+"&beginIndex=0&SRC_minPrice="+this.minPrice+"&SRC_maxPrice="+this.maxPrice+"&m2aModel="+this.m2aModel;}console.debug("New URL being rendered for model-to-accessory list= "+newURL);setCurrentId(m2aModel.id);this.refreshProductsByFilterURL("searchUpdate",newURL);},refreshProductsByFilterURL:function(workAreaModeValue,changeUrl){if(this.storeId=="10212"||this.storeId=="10201"){window.location="#back";$.cookie("BackButton_url",changeUrl,{expires:2});$.cookie("BackButton_beginIndex",this.beginIndex,{expires:2});$.cookie("BackButton_sortValue",this.sortValue,{expires:2});$.cookie("BackButton_pageSize",this.pageSize,{expires:2});$.cookie("BackButton_refinementValue",this.refinementValue,{expires:2});$.cookie("BackButton_minPrice",this.minPrice,{expires:2});$.cookie("BackButton_maxPrice",this.maxPrice,{expires:2});}if(!submitRequest()){return false;}cursor_wait();if(this.navType=="browse"){CommonControllersDeclarationJS.setControllerURL("CategoryDisplay_Controller",changeUrl);wc.render.updateContext("CategoryDisplay_Context");}else{if(this.navType=="filterFinder"){CommonControllersDeclarationJS.setControllerURL("WaterFilterResultDisplay_Controller",changeUrl);wc.render.updateContext("WaterFilterResultDisplay_Context");}else{if(this.navType==""){cursor_clear();}else{CommonControllersDeclarationJS.setControllerURL("catalogSearchResultDisplay_Controller",changeUrl);wc.render.updateContext("catalogSearchResultDisplay_Context");}}}return true;},setDrillDownSeparatorImgPath:function(imagePath){this.drillDownSeparatorImgPath=imagePath;},appendDrillDownOption:function(drillDownFeature,drillDownOptionLabel,drillDownOptionCount,drillDownOptionState,drillDownMultiselect){var drillDown=this.drillDownHash[drillDownFeature];var drillDownOption=new Object();drillDownOption.aLabel=drillDownOptionLabel;drillDownOption.aCount=drillDownOptionCount;drillDownOption.aState=drillDownOptionState;drillDownOption.isMultiselect=drillDownMultiselect;if(drillDown==null){var newArray=new Array();newArray[0]=drillDownOption;this.drillDownHash[drillDownFeature]=newArray;this.drillDownHashKeys[this.drillDownCount++]=drillDownFeature;}else{drillDown[drillDown.length]=drillDownOption;}},appendBreadcrumb:function(facetName,breadcrumbLabel,removeValue,removeAllValue){var breadcrumb=this.breadcrumbHash[facetName];var breadcrumbOption=new Object();breadcrumbOption.label=breadcrumbLabel;breadcrumbOption.removeValue=removeValue;breadcrumbOption.removeAllValue=removeAllValue;if(breadcrumb==null){var newArray=new Array();newArray[0]=breadcrumbOption;this.breadcrumbHash[facetName]=newArray;this.breadcrumbHashKeys[this.breadcrumbCount++]=facetName;}else{breadcrumb[breadcrumb.length]=breadcrumbOption;}},appendBreadcrumbAncestor:function(facetName,breadcrumbLabel,selectValue){var breadcrumb=this.breadcrumbHash[facetName];var breadcrumbOption=breadcrumb[0];var ancestorArray=breadcrumbOption.ancestors;if(!ancestorArray){ancestorArray=new Array();breadcrumbOption.ancestors=ancestorArray;}var ancestor=new Object();ancestor.label=breadcrumbLabel;ancestor.select=selectValue;ancestorArray[ancestorArray.length]=ancestor;},createRefinementHeading:function(refinementName){var newLabelText=document.createTextNode(this.escapeXML(refinementName));var newElem=document.createElement("dt");newElem.setAttribute("class","filter-title");newElem.setAttribute("className","filter-title");newElem.appendChild(newLabelText);return newElem;},createLeftBreadcrumb:function(breadcrumb){var newDd=document.createElement("dd");newDd.setAttribute("class","filter-item");newDd.setAttribute("className","filter-item");var breadcrumbText="";var removeValue="";if(breadcrumb.ancestors&&breadcrumb.ancestors.length){var ancestorsSize=breadcrumb.ancestors.length;for(var i=0;i<ancestorsSize;i++){breadcrumbText+=breadcrumb.ancestors[i].label+" > ";removeValue=breadcrumb.ancestors[i].select;}}breadcrumbText+=breadcrumb.label;if(removeValue.length==0){removeValue=breadcrumb.removeValue;}newDd.setAttribute("id","filter-item-"+removeValue);var newAnchor=document.createElement("a");newAnchor.setAttribute("class","filter-selected");newAnchor.setAttribute("className","filter-selected");newAnchor.setAttribute("href","javascript:setCurrentId('filter-item-"+removeValue+"');EndecaHelperJS.refreshProductsByFilter('"+removeValue+"');");newAnchor.innerHTML=breadcrumbText;newDd.appendChild(newAnchor);return newDd;},createAllResultsBreadcrumb:function(breadcrumbLabel){var newDd=document.createElement("dd");newDd.setAttribute("class","filter-item");newDd.setAttribute("className","filter-item");newDd.setAttribute("id","filter-item-allresults");var newAnchor=document.createElement("a");newAnchor.setAttribute("class","filter-selected");newAnchor.setAttribute("className","filter-selected");newAnchor.setAttribute("href","javascript:setCurrentId('filter-item-allresults');EndecaHelperJS.refreshProductsByFilter('0');");newAnchor.innerHTML=breadcrumbLabel;newDd.appendChild(newAnchor);return newDd;},createRefinementOption:function(optionName,cnt,elementId){var newDd=document.createElement("dd");newDd.setAttribute("class","filter-item");newDd.setAttribute("className","filter-item");newDd.setAttribute("id","filter-item-"+elementId);var newAnchor=document.createElement("a");newAnchor.setAttribute("class","filter-link");newAnchor.setAttribute("className","filter-link");newAnchor.setAttribute("href","javascript:setCurrentId('filter-item-"+elementId+"');EndecaHelperJS.refreshProductsByFilter('"+elementId+"');");newAnchor.innerHTML=optionName+" ("+cnt+")";newDd.appendChild(newAnchor);return newDd;},createAllResultsOption:function(label){var newDd=document.createElement("dd");newDd.setAttribute("class","filter-item");newDd.setAttribute("className","filter-item");newDd.setAttribute("id","filter-item-allresults");var newAnchor=document.createElement("a");newAnchor.setAttribute("class","filter-link");newAnchor.setAttribute("className","filter-link");newAnchor.setAttribute("href","javascript:setCurrentId('filter-item-allresults');EndecaHelperJS.refreshProductsByFilter('0');");newAnchor.innerHTML=label;newDd.appendChild(newAnchor);return newDd;},refreshProductsByFilter:function(refineValue){var newURL;this.refinementValue=refineValue;if(this.getAjaxRefreshURL()!=null){newURL=this.getAjaxRefreshURL();var start=newURL.indexOf("SRC_searchConstraint=");if(start>-1){var end=newURL.indexOf("&",start);if(end==-1){oldFilter=newURL.substring(start);}else{oldFilter=newURL.substring(start,end);}newURL=newURL.replace(oldFilter,"SRC_searchConstraint="+refineValue);}else{newURL=newURL+"&SRC_searchConstraint="+refineValue;}newURL=newURL+"&beginIndex=0&SRC_sortById="+this.sortValue+"&pageSize="+this.pageSize+"&selectedTab="+this.selectedTab+"&pageView="+this.pageView;if(this.minPrice!=this.origMinPrice||this.maxPrice!=this.origMaxPrice){newURL=newURL+"&SRC_minPrice="+this.minPrice+"&SRC_maxPrice="+this.maxPrice;}console.debug("New URL being rendered for filtering= "+newURL);this.refreshProductsByFilterURL("searchUpdate",newURL);}},removeAllRecipeFilters:function(){this.refinementValue="105000613";var attr="105000613+105000613";this.refreshRecipeByFilter(attr);$(".product-filter-item.active").removeClass("active");$(".product-filter-item :input").attr("checked",false);},refreshRecipeByFilter:function(refineValue){var newURL;if(this.getAjaxRefreshURL()!=null){newURL=this.getAjaxRefreshURL();}var currentRef=this.refinementValue;var newrefAry=refineValue.split("+");if(currentRef.indexOf("+")<0){if(currentRef.indexOf(newrefAry[1])<0){if(currentRef=="105000613"){currentRef=newrefAry[1];}else{currentRef=currentRef+"+"+newrefAry[1];}}else{currentRef="105000613";}}else{if(currentRef.indexOf(newrefAry[1])==0){var tempRef=newrefAry[1]+"+";currentRef=currentRef.replace(tempRef,"");}else{if(currentRef.indexOf(newrefAry[1])>0){var tempRef="+"+newrefAry[1];currentRef=currentRef.replace(tempRef,"");}else{currentRef=currentRef+"+"+newrefAry[1];}}}this.refinementValue=currentRef;newURL=newURL+"&refinments="+currentRef;if(navigator.userAgent.indexOf("Mobile")>-1){}else{$.ajax({type:"GET",url:newURL,dataType:"html",success:function(response){var $response=$(response);$(".resultNumber.desktop").html($response.find(".resultNumber.desktop").html());$(".resultNumber:not(.desktop)").html($response.find(".resultNumber:not(.desktop)").html());$(".recipe-results-column").html($response.find(".recipe-results-column").html());$("#popularRecipeEspot").html($response.find("#popularRecipeEspot").html());}});}},refreshMobileRecipe:function(){var newURL;if(this.getAjaxRefreshURL()!=null){newURL=this.getAjaxRefreshURL();}newURL=newURL+"&refinments="+this.refinementValue;$.ajax({type:"GET",url:newURL,dataType:"html",success:function(response){var $response=$(response);$(".resultNumber.desktop").html($response.find(".resultNumber.desktop").html());$(".resultNumber:not(.desktop)").html($response.find(".resultNumber:not(.desktop)").html());$(".recipe-results-column").html($response.find(".recipe-results-column").html());$("#popularRecipeEspot").html($response.find("#popularRecipeEspot").html());}});},removeAllFilters:function(categoryRefineValue){this.minPrice="";this.maxPrice="";this.refreshProductsByFilter(categoryRefineValue);},updateDrilldownOptionsWithBreadcrumbs:function(){this.drillDownHash=new Object();this.drillDownCount="0";this.drillDownHashKeys=[];if(document.getElementById("drillOptionsArray")!=null){var newOptionsJSON=eval("("+document.getElementById("drillOptionsArray").innerHTML+")");var index=0;for(x in newOptionsJSON){var refinementLabel=newOptionsJSON[x].refinementLabel;var refinementOptionLabel=newOptionsJSON[x].refinementOptionLabel;var option_id=newOptionsJSON[x].internalStateId;var count=newOptionsJSON[x].count;var isMultiselect=newOptionsJSON[x].isMultiselect;if(refinementLabel=="Color"){var colorArr=refinementOptionLabel.split("|");if(colorArr.length==2){var color=colorArr[0];var colorImage="<img src='/digitalassets"+colorArr[1]+"'/>";refinementOptionLabel=colorImage+" "+color;}}this.appendDrillDownOption(refinementLabel,refinementOptionLabel,count,option_id,isMultiselect);}}this.breadcrumbHash=new Object();this.breadcrumbCount="0";this.breadcrumbHashKeys=[];if(document.getElementById("breadcrumbArray")!=null){var newOptionsJSON=eval("("+document.getElementById("breadcrumbArray").innerHTML+")");var index=0;for(x in newOptionsJSON){var refinementLabel=newOptionsJSON[x].facetName;var refinementOptionLabel=newOptionsJSON[x].breadcrumbLabel;var removeValue=newOptionsJSON[x].remove;var removeAllValue=newOptionsJSON[x].removeAll;if(refinementLabel=="Color"){var colorArr=refinementOptionLabel.split("|");if(colorArr.length==2){var color=colorArr[0];var colorImage="<img src='/digitalassets"+colorArr[1]+"'/>";refinementOptionLabel=colorImage+" "+color;}}this.appendBreadcrumb(refinementLabel,refinementOptionLabel,removeValue,removeAllValue);for(y in newOptionsJSON[x].ancestors){this.appendBreadcrumbAncestor(refinementLabel,newOptionsJSON[x].ancestors[y].label,newOptionsJSON[x].ancestors[y].select);}}}this.drawDrillDownOptionsWithBreadcrumbs("drilldownArea");configEndecaFilter();},drawDrillDownOptionsWithBreadcrumbs:function(locationDivID){if(!document.getElementById(locationDivID)){return;}var newDiv=document.createElement("div");newDiv.setAttribute("id","endeca-filters");newDiv.setAttribute("class","endeca-filters");newDiv.setAttribute("className","endeca-filters");var oldDiv=document.getElementById("endeca-filters");if(!oldDiv){document.getElementById(locationDivID).appendChild(newDiv);}else{document.getElementById(locationDivID).replaceChild(newDiv,oldDiv);}var newList=document.createElement("dl");newList.setAttribute("class","endeca-filter");newList.setAttribute("className","endeca-filter");var keySize=this.breadcrumbHashKeys.length;var numListItems=0;for(var i=0;i<keySize;i++){var values=this.drillDownHash[this.breadcrumbHashKeys[i]];if(values==null){var newHeading=this.createRefinementHeading(this.breadcrumbHashKeys[i]);newList.appendChild(newHeading);var bcValues=this.breadcrumbHash[this.breadcrumbHashKeys[i]];if(bcValues!=null){for(var x=0;x<bcValues.length;x++){var newBreadcrumb=this.createLeftBreadcrumb(bcValues[x]);newList.appendChild(newBreadcrumb);numListItems++;}}if(this.allResultsLabel!=null&&this.allResultsLabel.length>0&&this.breadcrumbHashKeys[i]==this.refineResultsLabel&&this.pageTitle.length==0){var newRefinementOption=this.createAllResultsOption(this.allResultsLabel);newList.appendChild(newRefinementOption);}}}keySize=this.drillDownHashKeys.length;for(var i=0;i<keySize;i++){var newHeading=this.createRefinementHeading(this.drillDownHashKeys[i]);newList.appendChild(newHeading);var values=this.breadcrumbHash[this.drillDownHashKeys[i]];if(values!=null){for(var x=0;x<values.length;x++){var newBreadcrumb=this.createLeftBreadcrumb(values[x]);newList.appendChild(newBreadcrumb);numListItems++;}if(this.allResultsLabel!=null&&this.allResultsLabel.length>0&&this.drillDownHashKeys[i]==this.refineResultsLabel){var newRefinementOption=this.createAllResultsOption(this.allResultsLabel);newList.appendChild(newRefinementOption);}}else{if(this.allResultsLabel!=null&&this.allResultsLabel.length>0&&this.drillDownHashKeys[i]==this.refineResultsLabel){var newBreadcrumb=this.createAllResultsBreadcrumb(this.allResultsLabel);newList.appendChild(newBreadcrumb);}}values=this.drillDownHash[this.drillDownHashKeys[i]];for(var x=0;x<values.length;x++){if(values[x].aCount>0){var newRefinementOption=this.createRefinementOption(values[x].aLabel,values[x].aCount,values[x].aState);newList.appendChild(newRefinementOption);numListItems++;}}}if(numListItems>0){newDiv.appendChild(newList);}var eraseAllDiv=document.getElementById("erase_link");if(eraseAllDiv!=null){if(this.breadcrumbCount!="0"||this.minPrice!=""){eraseAllDiv.style.cssText="display:block;";}else{eraseAllDiv.style.cssText="display:none;";}}},setAllResultsLabel:function(label){this.allResultsLabel=label;},setRefineResultsLabel:function(label){this.refineResultsLabel=label;},setPageTitle:function(title){this.pageTitle=title;},submitCompare:function(compareUrl){if(getCookie(cookieItemProducts)){var compareItems=getCookie(cookieItemProducts).split("|");for(i=0;i<compareItems.length;i++){if(compareItems[i].length>0){var itemAttrs=compareItems[i].split(",");compareUrl+="&catentryId="+itemAttrs[0];}}}window.location=compareUrl;},setActiveFilterCookie:function(cookieName){var currentFilter=this.refinementValue;var index=currentFilter.indexOf("+");while(index!=-1){currentFilter=currentFilter.replace("+","~");index=currentFilter.indexOf("+");}if(currentFilter.indexOf("~")>-1){dojo.cookie(cookieName,currentFilter,{path:"/"});}},refreshProductsByPriceRange:function(newMinPrice,newMaxPrice){newMinPrice=newMinPrice*100;newMaxPrice=newMaxPrice*100;this.minPrice=newMinPrice;this.maxPrice=newMaxPrice;var newURL=this.getAjaxRefreshURL()+"&SRC_sortById="+this.sortValue+"&SRC_searchConstraint="+this.refinementValue+"&pageSize="+this.pageSize+"&beginIndex=0&SRC_minPrice="+this.minPrice+"&SRC_maxPrice="+this.maxPrice+"&selectedTab="+this.selectedTab+"&pageView="+this.pageView;console.debug("New URL being rendered for price range= "+newURL);setCurrentId("priceRangeDiv");this.refreshProductsByFilterURL("searchUpdate",newURL);},initPriceSlider:function(){if(document.getElementById("priceSliderVars")&&document.getElementById("slider")){var priceRangeJSON=eval("("+document.getElementById("priceSliderVars").innerHTML+")");this.origMinPrice=priceRangeJSON.rangeMin;this.origMaxPrice=priceRangeJSON.rangeMax;showHide("#priceRangeDiv","");priceSlider(this.origMinPrice,this.origMaxPrice);$(".ui-slider").css("background-image").replace(/([^.]*)\.(.*)/,"$1_over.$2");}},updatePriceSlider:function(){if(document.getElementById("priceSliderVars")&&document.getElementById("slider")){var priceRangeJSON=eval("("+document.getElementById("priceSliderVars").innerHTML+")");showHide("#priceRangeDiv","");var min=priceRangeJSON.rangeMin;var max=priceRangeJSON.rangeMax;if(this.minPrice!=""){min=this.minPrice/100;}if(this.maxPrice!=""){max=this.maxPrice/100;}priceSlider(min,max,this.origMinPrice,this.origMaxPrice);$(".ui-slider").css("background-image").replace(/([^.]*)\.(.*)/,"$1_over.$2");}},refreshPriceSlider:function(){if(EndecaHelperJS.isZipcodeChangedOnPage){this.setIsZipcodeChangedOnPage(false);if(document.getElementById("priceSliderVars")&&document.getElementById("slider")){if(document.getElementById("amountAct")){showHide("#priceRangeDiv","");}else{this.updatePriceSlider();}}else{showHide("","#priceRangeDiv");}}},setStoreCountry:function(storeCountry){this.storeCountry=storeCountry;},setAbsStoresWebPath:function(absStoresWebPath){this.absStoresWebPath=absStoresWebPath;},refreshProductsForLocation:function(){var newURL=this.getAjaxRefreshURL();if(newURL!=""){setCurrentId("zipcodeTxt");this.refreshProductsByFilterURL("searchUpdate",newURL);}},popup_refreshProductsForLocation:function(){var newURL=this.getAjaxRefreshURL();if(newURL!=""){setCurrentId("popup_zipcodeTxt");this.refreshProductsByFilterURL("searchUpdate",newURL);}},getPlantCodeByZip:function(isPopup){var fieldPrefix=isPopup?"popup_":"";var zipCode=$("#"+fieldPrefix+"zipcodeTxt").val();document.getElementById(fieldPrefix+"zipcodeTxt").style.background="#ffffff";var hasLeftSidebarZipField=$("#main_content_wrapper #left_nav_container .cl-zip-code-search").length>0;wc.service.declare({id:"getPlantCodeByZip",actionId:"getPlantCodeByZip",url:this.absStoresWebPath+"/AjaxGetPlantCodeByZip",formId:"",successHandler:function(serviceResponse){var plantCode=serviceResponse.plantCode;setValueToCookie("WHR_zipreg",zipCode+"|"+plantCode);cursor_clear();if(isPopup){dijit.byId("zip_code_popup").onZipCodeSelected(zipCode);dijit.byId("zip_code_popup").hide();if(hasLeftSidebarZipField){$("#main_content_wrapper #left_nav_container .cl-zip-code-search #zipcodeTxt").val(zipCode);}if(EndecaHelperJS.isRefreshRequired){EndecaHelperJS.popup_refreshProductsForLocation();EndecaHelperJS.setIsZipcodeChangedOnPage(true);}}else{EndecaHelperJS.refreshProductsForLocation();EndecaHelperJS.setIsZipcodeChangedOnPage(true);}},failureHandler:function(serviceResponse){clearValueFromCookie("WHR_zipreg");cursor_clear();document.getElementById(fieldPrefix+"zipcodeTxt").focus();if(serviceResponse.errorCode=="5140"){MessageHelper.formErrorHandleClient(fieldPrefix+"zipcodeBtn",MessageHelper.messages.ERROR_InvalidJurisdisctionCode);document.getElementById(fieldPrefix+"zipcodeTxt").style.background="#ff0000";}else{if(serviceResponse.errorCode==""||serviceResponse.errorCode==null){MessageHelper.formErrorHandleClient(fieldPrefix+"zipcodeBtn",MessageHelper.messages.ERROR_WebserviceUnavailable_TryLater);}}if(isPopup&&hasLeftSidebarZipField){$("#main_content_wrapper #left_nav_container .cl-zip-code-search #zipcodeTxt").val("");}return false;}});if(!submitRequest()){return;}var params=[];params.langId=langId;params.storeId=storeId;params.catalogId=catalogId;params.country=this.storeCountry;params.zipCode=zipCode.toUpperCase();cursor_wait();wc.service.invoke("getPlantCodeByZip",params);},escapeXML:function(str){str=str.replace(/\&amp;/g,"&");return str;},refreshProductListByFilterURL:function(workAreaModeValue,changeUrl){CommonControllersDeclarationJS.setControllerURL("catalogSearchResultDisplay_Controller",changeUrl);wc.render.updateContext("catalogSearchResultDisplay_Context");return true;},refreshProductsBySortLink:function(newSort){this.sortValue=newSort;var newURL=this.getAjaxRefreshURL()+"&beginIndex=0&SRC_sortById="+this.sortValue+"&SRC_searchConstraint="+this.refinementValue+"&pageSize="+this.pageSize+"&selectedTab="+this.selectedTab+"&pageView="+this.pageView;if(this.minPrice!=this.origMinPrice||this.maxPrice!=this.origMaxPrice){newURL=newURL+"&SRC_minPrice="+this.minPrice+"&SRC_maxPrice="+this.maxPrice;}console.debug("New URL being rendered for sorting= "+newURL);this.refreshProductsByFilterURL(this.navType,newURL);},refreshProductsByPageSizeLink:function(newPageSize){this.pageSize=newPageSize;var newURL=this.getAjaxRefreshURL()+"&beginIndex=0&SRC_sortById="+this.sortValue+"&SRC_searchConstraint="+this.refinementValue+"&pageSize="+this.pageSize+"&selectedTab="+this.selectedTab+"&pageView="+this.pageView;if(this.minPrice!=this.origMinPrice||this.maxPrice!=this.origMaxPrice){newURL=newURL+"&SRC_minPrice="+this.minPrice+"&SRC_maxPrice="+this.maxPrice;}console.debug("New URL being rendered for page size= "+newURL);this.refreshProductsByFilterURL(this.navType,newURL);},refreshResultByPage:function(newBeginIndex){this.beginIndex=newBeginIndex;var newURL=this.getAjaxRefreshURL()+"&SRC_sortById="+this.sortValue+"&SRC_searchConstraint="+this.refinementValue+"&pageSize="+this.pageSize+"&beginIndex="+this.beginIndex+"&selectedTab="+this.selectedTab+"&pageView="+this.pageView;if(this.minPrice!=this.origMinPrice||this.maxPrice!=this.origMaxPrice){newURL=newURL+"&SRC_minPrice="+this.minPrice+"&SRC_maxPrice="+this.maxPrice;}console.debug("New URL being rendered for pagination= "+newURL);this.refreshProductsByFilterURL(this.navType,newURL);},refreshGlobalSearchResult:function(cbInfo,refineValue){var changeURL;var refinementList=document.getElementById("ajaxGlobalRefinements").firstChild.data;if(refinementList=="0+"){refinementList="";}var ajaxSearchResultURL=document.getElementById("ajaxGlobalSearchRefreshURL").firstChild.data;if(cbInfo.checked==true){refinementList+=refineValue+"+";}else{if(refinementList.indexOf(refineValue)>-1){var tempText=refinementList.replace(refineValue+"+","");refinementList=tempText;}}document.getElementById("ajaxGlobalRefinements").firstChild.data=refinementList;var ajaxRefinementList=refinementList.substring(0,refinementList.lastIndexOf("+"));changeURL=ajaxSearchResultURL+"&SRC_searchConstraint="+ajaxRefinementList;this.refinementValue=ajaxRefinementList;if(ajaxRefinementList!=""){this.refreshProductsByFilterURL("searchUpdate",changeURL);if($("div#product_listings:visible").length==0){$("#product_listings").slideDown("slow",function(){});}}else{$("#product_listings").slideUp("slow",function(){});}},setSelectedTab:function(selectedTab){this.selectedTab=selectedTab;},setPageView:function(pageView){this.pageView=pageView;},removePriceRange:function(){this.minPrice="";this.maxPrice="";this.refreshProductsByFilter(this.refinementValue);},printPreview:function(){var ajaxPrintPreviewURL=document.getElementById("ajaxRefreshPrintPreviewURL").firstChild.data;ajaxPrintPreviewURL=ajaxPrintPreviewURL+"&printPreview=true";window.open(ajaxPrintPreviewURL,"printPreview","width=1100,height=700,left=100,top=100,screenX=0,screenY=100,toolbar=0,menubar=0,scrollbars=1,resizable=1");}};function refreshSearchPR(prArray){if(prArray!=undefined){var arr=prArray.split(",");for(var i=0;i<arr.length;i++){if(arr[i].length>1){POWERREVIEWS.display.snippet({write:function(content){$(".pr-snippet-"+arr[i]).append(content);}},{pr_page_id:arr[i],pr_snippet_min_reviews:"0"});}}if(storeId=="10202"||storeId=="10231"){refreshKitchenAidPR(prArray);}}}function refreshKitchenAidPR(prArray){var arr=prArray.split(",");for(var i=0;i<arr.length;i++){if(arr[i].length>1){POWERREVIEWS.display.snippet({write:function(content){$("#pr-snippet-list-"+arr[i]).append(content);}},{pr_page_id:arr[i],pr_snippet_min_reviews:"0"});}}}$(window).ready(function(){if(window.location.hash=="#back"&&(storeId=="10212"||storeId=="10201")){EndecaHelperJS.beginIndex=$.cookie("BackButton_beginIndex");EndecaHelperJS.sortValue=$.cookie("BackButton_sortValue");EndecaHelperJS.pageSize=$.cookie("BackButton_pageSize");EndecaHelperJS.refinementValue=$.cookie("BackButton_refinementValue");EndecaHelperJS.minPrice=$.cookie("BackButton_minPrice");EndecaHelperJS.maxPrice=$.cookie("BackButton_maxPrice");if($("#pcSortOptiontop_1").length>0){setCurrentId("pcSortOptiontop_1");displayProgressBar();}EndecaHelperJS.refreshProductsByFilterURL("",$.cookie("BackButton_url"));}refreshSearchPR($("#prPLPArray").val());});