function getParameter ( parameterName ) {
	var queryString = window.top.location.search.substring(1);
   // Add "=" to the parameter name (i.e. parameterName=value)
   var parameterName = parameterName + "=";
   if ( queryString.length > 0 ) {
      // Find the beginning of the string
      begin = queryString.indexOf ( parameterName );
      // If the parameter name is not found, skip it, otherwise return the value
      if ( begin != -1 ) {
         // Add the length (integer) to the beginning
         begin += parameterName.length;
         // Multiple parameters are separated by the "&" sign
         end = queryString.indexOf ( "&" , begin );
      if ( end == -1 ) {
         end = queryString.length
      }
      // Return the string
      return unescape ( queryString.substring ( begin, end ) );
   }
   // Return "null" if no parameter has been found
   return "null";
   }
}

function adjustHeight() {

//Check the height of hostage page
    var height = document.documentElement.clientHeight;

    height -= document.getElementById('frame').offsetTop;
    
    // not sure how to get this dynamically
    height -= 20; /* whatever you set your body bottom margin/padding to be */
    document.getElementById('frame').style.height = height +"px";
}

function updateSource(e) {
	//Changing source dynamically
	//Old url
	//var whereToBuySrc = "http://whirlpool.links.channelintelligence.com/oemsites/1039222/cii_mt_us_page_ii.asp";
	// new url
	var whereToBuySrc = "http://whirlpool.links.channelintelligence.com/oemsites/11111/Map/gmap.asp";
	// Default dealer locator link
	var iFrameSrc = "http://whirlpool.links.channelintelligence.com/oemsites/11111/Map/gmap.asp?cii_nClientID=1039222&cii_nRuleGroupID=5214&cii_sZip=B3A%204R9&cii_nRadius=20&cii_sCountry=CA&cii_sLangCode=en&cii_sSKU=&cii_nIID=-1&cii_nVID=-1&cii_nLocID=0&cii_nStoreID=0&cii_nRows=0&cii_sCT=";

	if(e!=null && e!=""){
		if(e=="en"){
			whereToBuySrc = "http://whirlpool.links.channelintelligence.com/oemsites/1039222/Map/gmap.asp?cii_nClientID=1039222&cii_nRuleGroupID=5212&cii_sZip=&cii_nRadius=20&cii_sCountry=CA&cii_sLangCode=en&cii_sSKU=&cii_nIID=-1&cii_nVID=-1&cii_nLocID=0&cii_nStoreID=0&cii_nRows=0&cii_sCT=";
			iFrameSrc = "http://whirlpool.links.channelintelligence.com/oemsites/1039222/Map/gmap.asp?cii_nClientID=1039222&cii_nRuleGroupID=5212&cii_sZip=&cii_nRadius=20&cii_sCountry=CA&cii_sLangCode=en&cii_sSKU=&cii_nIID=-1&cii_nVID=-1&cii_nLocID=0&cii_nStoreID=0&cii_nRows=0&cii_sCT=";
		}else{
			whereToBuySrc = "http://whirlpool.links.channelintelligence.com/oemsites/1039222/Map/gmap.asp?cii_nClientID=1039222&cii_nRuleGroupID=5213&cii_sZip=&cii_nRadius=20&cii_sCountry=CA&cii_sLangCode=fr&cii_sSKU=&cii_nIID=-1&cii_nVID=-1&cii_nLocID=0&cii_nStoreID=0&cii_nRows=0&cii_sCT="
			iFrameSrc = "http://whirlpool.links.channelintelligence.com/oemsites/1039222/Map/gmap.asp?cii_nClientID=1039222&cii_nRuleGroupID=5213&cii_sZip=&cii_nRadius=20&cii_sCountry=CA&cii_sLangCode=fr&cii_sSKU=&cii_nIID=-1&cii_nVID=-1&cii_nLocID=0&cii_nStoreID=0&cii_nRows=0&cii_sCT=";
		}
	}

	//Height of the iFrame
	var iFrameHeight = "795";
	//Get the product id from the request parameter
	var cii_nProductId=getParameter("cii_nProductId");

	//Get the sku id from the request parameter
	var cii_sSKU=getParameter("cii_sSKU");
	// if Product id is not null, call "Where to buy"
	if(cii_nProductId != null && cii_nProductId != 'null')
	{ 	
		//Need to remove -NAR from the product part number
		var re = /-NAR$/; 
		cii_nProductId = cii_nProductId.replace(re,"");
		
		iFrameSrc=whereToBuySrc+"?cii_nProductId="+cii_nProductId;
		
		if(cii_sSKU != null && cii_sSKU != 'null')
		{
			iFrameSrc=iFrameSrc+"&cii_sSKU="+cii_sSKU;
		}
		
		iFrameHeight="900";
	} 

	//Get the dealer type from the request parameter
	var dealerType=getParameter("sDealerType");
	
	// if dealerType is not null, call "Part Disctributor "	
	if(dealerType != null && dealerType != 'null')
	{ 
		iFrameSrc=iFrameSrc+"?sDealerType="+dealerType;
		iFrameHeight="900";	
	} 
	
	// if Product id is null, iFrameSrc will point to dealer locator link
	document.getElementById('frame').src = iFrameSrc;
	document.getElementById('frame').height = iFrameHeight;
}


function redefineIframe(e) {
	updateSource(e);
};

function checkFunctionality(e) {
	redefineIframe(e);
}

function displayBreadCrumb(e) {
	var cii_nProductId=getParameter("cii_nProductId");
	var dealerType=getParameter("sDealerType");
	var switcher=e!=null || e.length>0? true:false;

	if(switcher){
		if(e=="fr"){
			if(cii_nProductId != null && cii_nProductId != 'null')
			{ 
				document.write('<a href="/fr_CA/">Accueil</a> >  <span class="breadcrumb_current">Points de vente</span>');
			} 
			else if(dealerType != null && dealerType != 'null')
			{ 
				document.write('<a href="/fr_CA/">Accueil</a> >  <span class="breadcrumb_current">Parts Distributor</span>');	
			} 
			else {
		   		document.write('<a href="/fr_CA/">Accueil</a> >  <span class="breadcrumb_current">Localisateur de points de vente</span>'); 
			}
		}else{
	
			if(cii_nProductId != null && cii_nProductId != 'null')
			{ 
				document.write('<a href="/en_CA/">Home</a> >  <span class="breadcrumb_current">Where to buy</span>');
			} 
			else if(dealerType != null && dealerType != 'null')
			{ 
				document.write('<a href="/en_CA/">Home</a> >  <span class="breadcrumb_current">Parts Distributor</span>');	
			} 
			else {
		   		document.write('<a href="/en_CA/">Home</a> >  <span class="breadcrumb_current">Store Locator</span>'); 
			}
		}
	}
}

function writeIframe(){
	document.write('<br/>');
	document.write('<iframe id="frame" src ="" marginwidth="0" marginheight="0" height="795" width="100%" scrolling="auto" frameborder="0">');
  	document.write('<p>Your browser does not support iframes.</p>');
	document.write('</iframe>');
	document.write('<br/>');	
}


// window.onresize = redefineIframe;