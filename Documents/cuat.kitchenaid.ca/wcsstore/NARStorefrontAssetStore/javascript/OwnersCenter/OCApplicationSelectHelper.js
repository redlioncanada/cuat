dojo.require("wc.service.common");var ifAplSelSbmt=false;OCApplicationSelectHelper={prepareSubmit:function(form){var r2=document.getElementsByName("r2");var selectedr2="O";var fnd=-1;var myApplianceSize=r2.length;if(myApplianceSize>0){selectedr2=null;}for(i=0;i<myApplianceSize;i++){if(r2[i].checked==true){selectedr2=r2[i].value;fnd=1;}}reWhiteSpace=new RegExp(/^\s+$/);for(var i=0;i<form.elements.length;i++){formElement=form.elements[i];if(formElement.getAttribute("type")=="text"||formElement.nodeName.toLowerCase()=="select"){document.getElementById(formElement.id).style.background="#ffffff";}}var applianceOK=true;var modelNumberOK=true;var serialNumberOK=true;var formObj=document.getElementById("ApplianceForm");var errDivObj=document.getElementById("TopValidationErrorMsg");if(selectedr2=="O"){if(form.appliance!=null&&reWhiteSpace.test(form.appliance.value)||form.appliance.value==""||form.appliance.value=="--Please Select--"){document.getElementById("applianceValidationErrorMsg").innerHTML=MessageHelper.messages.ERROR_productTypeEmpty;applianceOK=false;}else{document.getElementById("applianceValidationErrorMsg").innerHTML="";applianceOK=true;}form.modelNumber.value=trim(form.modelNumber.value);if(form.modelNumber.value!=null&&form.modelNumber.value!=""&&!reWhiteSpace.test(form.modelNumber.value)){if(!OCApplicationSelectHelper.isAlphaNumeric(form.modelNumber.value)){document.getElementById("modelNumberValidationErrorMsg").innerHTML=MessageHelper.messages.ERROR_modelNumberInvalid;modelNumberOK=false;}else{if(form.modelNumber.value.length<4){document.getElementById("modelNumberValidationErrorMsg").innerHTML=MessageHelper.messages.ERROR_modelNumberTooLongTooShort;modelNumberOK=false;}else{document.getElementById("modelNumberValidationErrorMsg").innerHTML="";modelNumberOK=true;}}}else{document.getElementById("modelNumberValidationErrorMsg").innerHTML=MessageHelper.messages.ERROR_modelNumberEmpty;modelNumberOK=false;}form.serialNumber.value=trim(form.serialNumber.value);if(form.serialNumber.value!=null&&form.serialNumber.value!=""&&!reWhiteSpace.test(form.serialNumber.value)){if(!OCApplicationSelectHelper.isAlphaNumeric(form.serialNumber.value)){document.getElementById("serialNumberValidationErrorMsg").innerHTML=MessageHelper.messages.ERROR_serialNumberInvalid;serialNumberOK=false;}else{if(form.serialNumber.value.length<4){document.getElementById("serialNumberValidationErrorMsg").innerHTML=MessageHelper.messages.ERROR_serialNumberTooLong;serialNumberOK=false;}else{document.getElementById("serialNumberValidationErrorMsg").innerHTML="";serialNumberOK=true;}}}else{document.getElementById("serialNumberValidationErrorMsg").innerHTML=MessageHelper.messages.ERROR_serialNumberEmpty;serialNumberOK=false;}}if(r2.length>0){var eaten=parseInt(fnd);if(eaten==-1){ifAplSelSbmt=true;if(formObj.r2.length>1){document.getElementById("JsValidationErrorMsg").innerHTML='<span style="color:#D12727;font-weight:bold;font-size:11px">'+MessageHelper.messages.OC_ERROR_RADIO_BUTTON_SEL_1+"</span>";}else{document.getElementById("JsValidationErrorMsg").innerHTML='<span style="color:#D12727;font-weight:bold;font-size:11px">'+MessageHelper.messages.OC_ERROR_RADIO_BUTTON_SEL_0+"</span>";}}else{ifAplSelSbmt=false;document.getElementById("JsValidationErrorMsg").innerHTML="";}}var typeOfProblemOK=true;var checkProblemDesc=false;if(document.getElementById("typeOfProblemDDDiv")!=null){if((form.typeOfProbDropDown!=null&&document.getElementById("typeOfProblemDDDiv").style.display=="block")&&(reWhiteSpace.test(form.typeOfProbDropDown.value)||form.typeOfProbDropDown.value=="")){document.getElementById("typeOfProblemDDValidationErrorMsg").innerHTML=MessageHelper.messages.ERROR_typeOfProblemDDEmpty;typeOfProblemOK=false;}else{if((form.typeOfProbDropDown!=null&&document.getElementById("typeOfProblemDDDiv").style.display=="block"&&form.typeOfProbDropDown.value=="Others")||(form.typeOfProblem!=null&&document.getElementById("typeOfProblemDiv").style.display=="block")){checkProblemDesc=true;}}}if(document.getElementById("typeOfProblemDDDiv")==null||checkProblemDesc){if(form.typeOfProblem!=null&&reWhiteSpace.test(form.typeOfProblem.value)||form.typeOfProblem.value==""){document.getElementById("typeOfProblemValidationErrorMsg").innerHTML=MessageHelper.messages.ERROR_typeOfProblemEmpty;typeOfProblemOK=false;}else{document.getElementById("typeOfProblemValidationErrorMsg").innerHTML="";typeOfProblemOK=true;}}if(ifAplSelSbmt){return;}if((applianceOK==true)&&(modelNumberOK==true)&&(serialNumberOK==true)&&(typeOfProblemOK==true)){document.getElementById("TopValidationErrorMsg").innerHTML="";var appIndex=form.appliance.selectedIndex;form.appTypeDisplay.value=form.appliance.options[appIndex].text;var modelNumber=document.getElementById("modelNumber").value;var serialNumber=document.getElementById("serialNumber").value;if(modelNumber.length>0){document.getElementById("modelNumberSelected").value=modelNumber;}if(serialNumber.length>0){document.getElementById("serialNumberSelected").value=serialNumber;}ifAplSelSbmt=true;form.submit();}else{}},isAlphaNumeric:function(str){if(str.search(/[^a-zA-Z0-9-]/g)!=-1){return false;}else{return true;}},checklength:function(Object,MaxLen){var objVal=Object.value;var objSubstr;if(objVal.length>=MaxLen){objSubstr=objVal.substring(0,MaxLen);Object.value=objSubstr;}}};