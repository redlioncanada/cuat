
window.Modernizr=function(a,b,c){function C(a){j.cssText=a;}
function D(a,b){return C(n.join(a+";")+(b||""));}
function E(a,b){return typeof a===b;}
function F(a,b){return!!~(""+a).indexOf(b);}
function G(a,b){for(var d in a){var e=a[d];if(!F(e,"-")&&j[e]!==c){return b=="pfx"?e:!0;}}
return!1;}
function H(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c){return d===!1?a[e]:E(f,"function")?f.bind(d||b):f;}}
return!1;}
function I(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return E(b,"string")||E(b,"undefined")?G(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),H(e,b,c));}
function J(){e.input=function(c){for(var d=0,e=c.length;d<e;d++){t[c[d]]=c[d]in k;}
return t.list&&(t.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),t;}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++){k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),s[a[d]]=!!e;}
return s;}("search tel url email datetime date month week time datetime-local number range color".split(" "));}
var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={},s={},t={},u=[],v=u.slice,w,x=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10)){while(d--){j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);}}
return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i;},y=function(b){var c=a.matchMedia||a.msMatchMedia;if(c){return c(b)&&c(b).matches||!1;}
var d;return x("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute";}),d;},z=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=E(e[d],"function"),E(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f;}
var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d;}(),A={}.hasOwnProperty,B;!E(A,"undefined")&&!E(A.call,"undefined")?B=function(a,b){return A.call(a,b);}:B=function(a,b){return b in a&&E(a.constructor.prototype[b],"undefined");},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function"){throw new TypeError;}
var d=v.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(v.call(arguments)));return Object(g)===g?g:f;}
return c.apply(b,d.concat(v.call(arguments)));};return e;}),r.flexbox=function(){return I("flexWrap");},r.flexboxlegacy=function(){return I("boxDirection");},r.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d");},r.canvastext=function(){return!!e.canvas&&!!E(b.createElement("canvas").getContext("2d").fillText,"function");},r.postmessage=function(){return!!a.postMessage;},r.websqldatabase=function(){return!!a.openDatabase;},r.indexedDB=function(){return!!I("indexedDB",a);},r.hashchange=function(){return z("hashchange",a)&&(b.documentMode===c||b.documentMode>7);},r.history=function(){return!!a.history&&!!history.pushState;},r.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a;},r.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a;},r.rgba=function(){return C("background-color:rgba(150,255,150,.5)"),F(j.backgroundColor,"rgba");},r.hsla=function(){return C("background-color:hsla(120,40%,100%,.5)"),F(j.backgroundColor,"rgba")||F(j.backgroundColor,"hsla");},r.multiplebgs=function(){return C("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background);},r.backgroundsize=function(){return I("backgroundSize");},r.borderimage=function(){return I("borderImage");},r.borderradius=function(){return I("borderRadius");},r.boxshadow=function(){return I("boxShadow");},r.textshadow=function(){return b.createElement("div").style.textShadow==="";},r.opacity=function(){return D("opacity:.55"),/^0.55$/.test(j.opacity);},r.cssanimations=function(){return I("animationName");},r.csscolumns=function(){return I("columnCount");},r.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return C((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),F(j.backgroundImage,"gradient");},r.cssreflections=function(){return I("boxReflect");},r.csstransforms=function(){return!!I("transform");},r.csstransforms3d=function(){var a=!!I("perspective");return a&&"webkitPerspective"in g.style&&x("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3;}),a;},r.csstransitions=function(){return I("transition");},r.fontface=function(){var a;return x('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0;}),a;},r.generatedcontent=function(){var a;return x(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3;}),a;},r.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType){c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"");}}catch(d){}
return c;},r.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType){c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"");}}catch(d){}
return c;},r.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0;}catch(a){return!1;}},r.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0;}catch(a){return!1;}},r.webworkers=function(){return!!a.Worker;},r.applicationcache=function(){return!!a.applicationCache;};for(var K in r){B(r,K)&&(w=K.toLowerCase(),e[w]=r[K](),u.push((e[w]?"":"no-")+w));}
return e.input||J(),e.addTest=function(a,b){if(typeof a=="object"){for(var d in a){B(a,d)&&e.addTest(d,a[d]);}}else{a=a.toLowerCase();if(e[a]!==c){return e;}
b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b;}
return e;},C(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild);}
function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a;}
function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b;}
function o(a,c,d){c||(c=b);if(k){return c.createElement(a);}
d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g;}
function p(a,c){a||(a=b);if(k){return a.createDocumentFragment();}
c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++){d.createElement(f[e]);}
return d;}
function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c);},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")';})+");return n}")(s,b.frag);}
function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a;}
var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined";}();}catch(c){g=!0,k=!0;}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b);}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=y,e.hasEvent=z,e.testProp=function(a){return G([a]);},e.testAllProps=I,e.testStyles=x,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+u.join(" "):""),e;}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a);}
function e(a){return"string"==typeof a;}
function f(){}
function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a;}
function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1);},0):(a(),h()):q=0;}
function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l);},50);for(var d in y[c]){y[c].hasOwnProperty(d)&&y[c][d].onload();}}}
var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r);},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l));}
function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this;}
function k(){var a=B;return a.loader={load:j,i:0},a;}
var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a);},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a;}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++){g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));}
for(f=0;f<b;f++){c=x[f](c);}
return c;}
function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2;})));}
function h(a,b){function c(a,c){if(a){if(e(a)){c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l();}),g(a,j,b,0,h);}else{if(Object(a)===a){for(n in m=function(){var b=0,c;for(c in a){a.hasOwnProperty(c)&&b++;}
return b;}(),a){a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l();}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l();};}(k[n])),g(a[n],j,b,n,h));}}}}else{!c&&l();}}
var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i);}
var i,j,l=this.yepnope.loader;if(e(a)){g(a,0,l,0);}else{if(w(a)){for(i=0;i<a.length;i++){j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);}}else{Object(a)===a&&h(a,l);}}},B.addPrefix=function(a,b){z[a]=b;},B.addFilter=function(a){x.push(a);},B.errorTimeout=10000,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete";},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d){k.setAttribute(o,d[o]);}
c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null);},m(function(){l||(l=1,c(1));},e),i?k.onload():n.parentNode.insertBefore(k,n);},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d){e.setAttribute(j,d[j]);}
g||(n.parentNode.insertBefore(e,n),m(c,0));};}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0));};window.matchMedia=window.matchMedia||(function(e,f){var c,a=e.documentElement,b=a.firstElementChild||a.firstChild,d=e.createElement("body"),g=e.createElement("div");g.id="mq-test-1";g.style.cssText="position:absolute;top:-100em";d.style.background="none";d.appendChild(g);return function(h){g.innerHTML='&shy;<style media="'+h+'"> #mq-test-1 { width: 42px; }</style>';a.insertBefore(d,b);c=g.offsetWidth==42;a.removeChild(d);return{matches:c,media:h};};})(document);(function(e){e.respond={};respond.update=function(){};respond.mediaQueriesSupported=e.matchMedia&&e.matchMedia("only all").matches;if(respond.mediaQueriesSupported){return;}
var w=e.document,s=w.documentElement,i=[],k=[],q=[],o={},h=30,f=w.getElementsByTagName("head")[0]||s,g=w.getElementsByTagName("base")[0],b=f.getElementsByTagName("link"),d=[],a=function(){var D=b,y=D.length,B=0,A,z,C,x;for(;B<y;B++){A=D[B],z=A.href,C=A.media,x=A.rel&&A.rel.toLowerCase()==="stylesheet";if(!!z&&x&&!o[z]){if(A.styleSheet&&A.styleSheet.rawCssText){m(A.styleSheet.rawCssText,z,C);o[z]=true;}else{if((!/^([a-zA-Z:]*\/\/)/.test(z)&&!g)||z.replace(RegExp.$1,"").split("/")[0]===e.location.host){d.push({href:z,media:C});}}}}
u();},u=function(){if(d.length){var x=d.shift();n(x.href,function(y){m(y,x.href,x.media);o[x.href]=true;u();});}},m=function(I,x,z){var G=I.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),J=G&&G.length||0,x=x.substring(0,x.lastIndexOf("/")),y=function(K){return K.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+x+"$2$3");},A=!J&&z,D=0,C,E,F,B,H;if(x.length){x+="/";}
if(A){J=1;}
for(;D<J;D++){C=0;if(A){E=z;k.push(y(I));}else{E=G[D].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1;k.push(RegExp.$2&&y(RegExp.$2));}
B=E.split(",");H=B.length;for(;C<H;C++){F=B[C];i.push({media:F.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:k.length-1,hasquery:F.indexOf("(")>-1,minw:F.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:F.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")});}}
j();},l,r,v=function(){var z,A=w.createElement("div"),x=w.body,y=false;A.style.cssText="position:absolute;font-size:1em;width:1em";if(!x){x=y=w.createElement("body");x.style.background="none";}
x.appendChild(A);s.insertBefore(x,s.firstChild);z=A.offsetWidth;if(y){s.removeChild(x);}else{x.removeChild(A);}
z=p=parseFloat(z);return z;},p,j=function(I){var x="clientWidth",B=s[x],H=w.compatMode==="CSS1Compat"&&B||w.body[x]||B,D={},G=b[b.length-1],z=(new Date()).getTime();if(I&&l&&z-l<h){clearTimeout(r);r=setTimeout(j,h);return;}else{l=z;}
for(var E in i){var K=i[E],C=K.minw,J=K.maxw,A=C===null,L=J===null,y="em";if(!!C){C=parseFloat(C)*(C.indexOf(y)>-1?(p||v()):1);}
if(!!J){J=parseFloat(J)*(J.indexOf(y)>-1?(p||v()):1);}
if(!K.hasquery||(!A||!L)&&(A||H>=C)&&(L||H<=J)){if(!D[K.media]){D[K.media]=[];}
D[K.media].push(k[K.rules]);}}
for(var E in q){if(q[E]&&q[E].parentNode===f){f.removeChild(q[E]);}}
for(var E in D){var M=w.createElement("style"),F=D[E].join("\n");M.type="text/css";M.media=E;f.insertBefore(M,G.nextSibling);if(M.styleSheet){M.styleSheet.cssText=F;}else{M.appendChild(w.createTextNode(F));}
q.push(M);}},n=function(x,z){var y=c();if(!y){return;}
y.open("GET",x,true);y.onreadystatechange=function(){if(y.readyState!=4||y.status!=200&&y.status!=304){return;}
z(y.responseText);};if(y.readyState==4){return;}
y.send(null);},c=(function(){var x=false;try{x=new XMLHttpRequest();}catch(y){x=new ActiveXObject("Microsoft.XMLHTTP");}
return function(){return x;};})();a();respond.update=a;function t(){j(true);}
if(e.addEventListener){e.addEventListener("resize",t,false);}else{if(e.attachEvent){e.attachEvent("onresize",t);}}})(this);if("undefined"==typeof jQuery){throw new Error("Bootstrap's JavaScript requires jQuery");}+
function(t){function e(e){return this.each(function(){var i=t(this),n=i.data("bs.button"),s="object"==typeof e&&e;n||i.data("bs.button",n=new o(this,s)),"toggle"==e?n.toggle():e&&n.setState(e);});}
var o=function(e,i){this.$element=t(e),this.options=t.extend({},o.DEFAULTS,i),this.isLoading=!1;};o.VERSION="3.2.0",o.DEFAULTS={loadingText:"loading..."},o.prototype.setState=function(e){var o="disabled",i=this.$element,n=i.is("input")?"val":"html",s=i.data();e+="Text",null==s.resetText&&i.data("resetText",i[n]()),i[n](null==s[e]?this.options[e]:s[e]),setTimeout(t.proxy(function(){"loadingText"==e?(this.isLoading=!0,i.addClass(o).attr(o,o)):this.isLoading&&(this.isLoading=!1,i.removeClass(o).removeAttr(o));},this),0);},o.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var o=this.$element.find("input");"radio"==o.prop("type")&&(o.prop("checked")&&this.$element.hasClass("active")?t=!1:e.find(".active").removeClass("active")),t&&o.prop("checked",!this.$element.hasClass("active")).trigger("change");}
t&&this.$element.toggleClass("active");};var i=t.fn.button;t.fn.button=e,t.fn.button.Constructor=o,t.fn.button.noConflict=function(){return t.fn.button=i,this;},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(o){var i=t(o.target);i.hasClass("btn")||(i=i.closest(".btn")),e.call(i,"toggle"),o.preventDefault();});}(jQuery),+
function(t){function e(e){e&&3===e.which||(t(n).remove(),t(s).each(function(){var i=o(t(this)),n={relatedTarget:this};i.hasClass("open")&&(i.trigger(e=t.Event("hide.bs.dropdown",n)),e.isDefaultPrevented()||i.removeClass("open").trigger("hidden.bs.dropdown",n));}));}
function o(e){var o=e.attr("data-target");o||(o=e.attr("href"),o=o&&/#[A-Za-z]/.test(o)&&o.replace(/.*(?=#[^\s]*$)/,""));var i=o&&t(o);return i&&i.length?i:e.parent();}
function i(e){return this.each(function(){var o=t(this),i=o.data("bs.dropdown");i||o.data("bs.dropdown",i=new r(this)),"string"==typeof e&&i[e].call(o);});}
var n=".dropdown-backdrop",s='[data-toggle="dropdown"]',r=function(e){t(e).on("click.bs.dropdown",this.toggle);};r.VERSION="3.2.0",r.prototype.toggle=function(i){var n=t(this);if(!n.is(".disabled, :disabled")){var s=o(n),r=s.hasClass("open");if(e(),!r){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click",e);var a={relatedTarget:this};if(s.trigger(i=t.Event("show.bs.dropdown",a)),i.isDefaultPrevented()){return;}
n.trigger("focus"),s.toggleClass("open").trigger("shown.bs.dropdown",a);}
return!1;}},r.prototype.keydown=function(e){if(/(38|40|27)/.test(e.keyCode)){var i=t(this);if(e.preventDefault(),e.stopPropagation(),!i.is(".disabled, :disabled")){var n=o(i),r=n.hasClass("open");if(!r||r&&27==e.keyCode){return 27==e.which&&n.find(s).trigger("focus"),i.trigger("click");}
var a=" li:not(.divider):visible a",l=n.find('[role="menu"]'+a+', [role="listbox"]'+a);if(l.length){var h=l.index(l.filter(":focus"));38==e.keyCode&&h>0&&h--,40==e.keyCode&&h<l.length-1&&h++,~h||(h=0),l.eq(h).trigger("focus");}}}};var a=t.fn.dropdown;t.fn.dropdown=i,t.fn.dropdown.Constructor=r,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=a,this;},t(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation();}).on("click.bs.dropdown.data-api",s,r.prototype.toggle).on("keydown.bs.dropdown.data-api",s+', [role="menu"], [role="listbox"]',r.prototype.keydown);}(jQuery),+
function(t){function e(e,i){return this.each(function(){var n=t(this),s=n.data("bs.modal"),r=t.extend({},o.DEFAULTS,n.data(),"object"==typeof e&&e);s||n.data("bs.modal",s=new o(this,r)),"string"==typeof e?s[e](i):r.show&&s.show(i);});}
var o=function(e,o){this.options=o,this.$body=t(document.body),this.$element=t(e),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal");},this));};o.VERSION="3.2.0",o.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},o.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t);},o.prototype.show=function(e){var o=this,i=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(i),this.isShown||i.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.backdrop(function(){var i=t.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),i&&o.$element[0].offsetWidth,o.$element.addClass("in").attr("aria-hidden",!1),o.enforceFocus();var n=t.Event("shown.bs.modal",{relatedTarget:e});i?o.$element.find(".modal-dialog").one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(n);}).emulateTransitionEnd(300):o.$element.trigger("focus").trigger(n);}));},o.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal());},o.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus");},this));},o.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide();},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal");},o.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$element.trigger("hidden.bs.modal");});},o.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null;},o.prototype.backdrop=function(e){var o=this,i=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var n=t.support.transition&&i;if(this.$backdrop=t('<div class="modal-backdrop '+i+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this));},this)),n&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e){return;}
n?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(150):e();}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var s=function(){o.removeBackdrop(),e&&e();};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",s).emulateTransitionEnd(150):s();}else{e&&e();}}},o.prototype.checkScrollbar=function(){document.body.clientWidth>=window.innerWidth||(this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar());},o.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.scrollbarWidth&&this.$body.css("padding-right",t+this.scrollbarWidth);},o.prototype.resetScrollbar=function(){this.$body.css("padding-right","");},o.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e;};var i=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=o,t.fn.modal.noConflict=function(){return t.fn.modal=i,this;},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(o){var i=t(this),n=i.attr("href"),s=t(i.attr("data-target")||n&&n.replace(/.*(?=#[^\s]+$)/,"")),r=s.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(n)&&n},s.data(),i.data());i.is("a")&&o.preventDefault(),s.one("show.bs.modal",function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",function(){i.is(":visible")&&i.trigger("focus");});}),e.call(s,r,this);});}(jQuery),+
function(t){function e(e){return this.each(function(){var i=t(this),n=i.data("bs.tooltip"),s="object"==typeof e&&e;(n||"destroy"!=e)&&(n||i.data("bs.tooltip",n=new o(this,s)),"string"==typeof e&&n[e]());});}
var o=function(t,e){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",t,e);};o.VERSION="3.2.0",o.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},o.prototype.init=function(e,o,i){this.enabled=!0,this.type=e,this.$element=t(o),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&t(this.options.viewport.selector||this.options.viewport);for(var n=this.options.trigger.split(" "),s=n.length;s--;){var r=n[s];if("click"==r){this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));}else{if("manual"!=r){var a="hover"==r?"mouseenter":"focusin",l="hover"==r?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this));}}}
this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle();},o.prototype.getDefaults=function(){return o.DEFAULTS;},o.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e;},o.prototype.getDelegateOptions=function(){var e={},o=this.getDefaults();return this._options&&t.each(this._options,function(t,i){o[t]!=i&&(e[t]=i);}),e;},o.prototype.enter=function(e){var o=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return o||(o=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,o)),clearTimeout(o.timeout),o.hoverState="in",o.options.delay&&o.options.delay.show?void(o.timeout=setTimeout(function(){"in"==o.hoverState&&o.show();},o.options.delay.show)):o.show();},o.prototype.leave=function(e){var o=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return o||(o=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,o)),clearTimeout(o.timeout),o.hoverState="out",o.options.delay&&o.options.delay.hide?void(o.timeout=setTimeout(function(){"out"==o.hoverState&&o.hide();},o.options.delay.hide)):o.hide();},o.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var o=t.contains(document.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!o){return;}
var i=this,n=this.tip(),s=this.getUID(this.type);this.setContent(),n.attr("id",s),this.$element.attr("aria-describedby",s),this.options.animation&&n.addClass("fade");var r="function"==typeof this.options.placement?this.options.placement.call(this,n[0],this.$element[0]):this.options.placement,a=/\s?auto?\s?/i,l=a.test(r);l&&(r=r.replace(a,"")||"top"),n.detach().css({top:0,left:0,display:"block"}).addClass(r).data("bs."+this.type,this),this.options.container?n.appendTo(this.options.container):n.insertAfter(this.$element);var h=this.getPosition(),p=n[0].offsetWidth,d=n[0].offsetHeight;if(l){var c=r,f=this.$element.parent(),u=this.getPosition(f);r="bottom"==r&&h.top+h.height+d-u.scroll>u.height?"top":"top"==r&&h.top-u.scroll-d<0?"bottom":"right"==r&&h.right+p>u.width?"left":"left"==r&&h.left-p<u.left?"right":r,n.removeClass(c).addClass(r);}
var g=this.getCalculatedOffset(r,h,p,d);this.applyPlacement(g,r);var m=function(){i.$element.trigger("shown.bs."+i.type),i.hoverState=null;};t.support.transition&&this.$tip.hasClass("fade")?n.one("bsTransitionEnd",m).emulateTransitionEnd(150):m();}},o.prototype.applyPlacement=function(e,o){var i=this.tip(),n=i[0].offsetWidth,s=i[0].offsetHeight,r=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10);isNaN(r)&&(r=0),isNaN(a)&&(a=0),e.top=e.top+r,e.left=e.left+a,t.offset.setOffset(i[0],t.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)});}},e),0),i.addClass("in");var l=i[0].offsetWidth,h=i[0].offsetHeight;"top"==o&&h!=s&&(e.top=e.top+s-h);var p=this.getViewportAdjustedDelta(o,e,l,h);p.left?e.left+=p.left:e.top+=p.top;var d=p.left?2*p.left-n+l:2*p.top-s+h,c=p.left?"left":"top",f=p.left?"offsetWidth":"offsetHeight";i.offset(e),this.replaceArrow(d,i[0][f],c);},o.prototype.replaceArrow=function(t,e,o){this.arrow().css(o,t?50*(1-t/e)+"%":"");},o.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right");},o.prototype.hide=function(){function e(){"in"!=o.hoverState&&i.detach(),o.$element.trigger("hidden.bs."+o.type);}
var o=this,i=this.tip(),n=t.Event("hide.bs."+this.type);return this.$element.removeAttr("aria-describedby"),this.$element.trigger(n),n.isDefaultPrevented()?void 0:(i.removeClass("in"),t.support.transition&&this.$tip.hasClass("fade")?i.one("bsTransitionEnd",e).emulateTransitionEnd(150):e(),this.hoverState=null,this);},o.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","");},o.prototype.hasContent=function(){return this.getTitle();},o.prototype.getPosition=function(e){e=e||this.$element;var o=e[0],i="BODY"==o.tagName;return t.extend({},"function"==typeof o.getBoundingClientRect?o.getBoundingClientRect():null,{scroll:i?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop(),width:i?t(window).width():e.outerWidth(),height:i?t(window).height():e.outerHeight()},i?{top:0,left:0}:e.offset());},o.prototype.getCalculatedOffset=function(t,e,o,i){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-o/2}:"top"==t?{top:e.top-i,left:e.left+e.width/2-o/2}:"left"==t?{top:e.top+e.height/2-i/2,left:e.left-o}:{top:e.top+e.height/2-i/2,left:e.left+e.width};},o.prototype.getViewportAdjustedDelta=function(t,e,o,i){var n={top:0,left:0};if(!this.$viewport){return n;}
var s=this.options.viewport&&this.options.viewport.padding||0,r=this.getPosition(this.$viewport);if(/right|left/.test(t)){var a=e.top-s-r.scroll,l=e.top+s-r.scroll+i;a<r.top?n.top=r.top-a:l>r.top+r.height&&(n.top=r.top+r.height-l);}else{var h=e.left-s,p=e.left+s+o;h<r.left?n.left=r.left-h:p>r.width&&(n.left=r.left+r.width-p);}
return n;},o.prototype.getTitle=function(){var t,e=this.$element,o=this.options;return t=e.attr("data-original-title")||("function"==typeof o.title?o.title.call(e[0]):o.title);},o.prototype.getUID=function(t){do{t+=~~(1000000*Math.random());}while(document.getElementById(t));return t;},o.prototype.tip=function(){return this.$tip=this.$tip||t(this.options.template);},o.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow");},o.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null);},o.prototype.enable=function(){this.enabled=!0;},o.prototype.disable=function(){this.enabled=!1;},o.prototype.toggleEnabled=function(){this.enabled=!this.enabled;},o.prototype.toggle=function(e){var o=this;e&&(o=t(e.currentTarget).data("bs."+this.type),o||(o=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,o))),o.tip().hasClass("in")?o.leave(o):o.enter(o);},o.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type);};var i=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=o,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=i,this;};}(jQuery),+
function(t){function e(e){return this.each(function(){var i=t(this),n=i.data("bs.popover"),s="object"==typeof e&&e;(n||"destroy"!=e)&&(n||i.data("bs.popover",n=new o(this,s)),"string"==typeof e&&n[e]());});}
var o=function(t,e){this.init("popover",t,e);};if(!t.fn.tooltip){throw new Error("Popover requires tooltip.js");}
o.VERSION="3.2.0",o.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),o.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),o.prototype.constructor=o,o.prototype.getDefaults=function(){return o.DEFAULTS;},o.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),o=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").empty()[this.options.html?"string"==typeof o?"html":"append":"text"](o),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide();},o.prototype.hasContent=function(){return this.getTitle()||this.getContent();},o.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content);},o.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow");},o.prototype.tip=function(){return this.$tip||(this.$tip=t(this.options.template)),this.$tip;};var i=t.fn.popover;t.fn.popover=e,t.fn.popover.Constructor=o,t.fn.popover.noConflict=function(){return t.fn.popover=i,this;};}(jQuery),+
function(t){function e(e){return this.each(function(){var i=t(this),n=i.data("bs.tab");n||i.data("bs.tab",n=new o(this)),"string"==typeof e&&n[e]();});}
var o=function(e){this.element=t(e);};o.VERSION="3.2.0",o.prototype.show=function(){var e=this.element,o=e.closest("ul:not(.dropdown-menu)"),i=e.data("target");if(i||(i=e.attr("href"),i=i&&i.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var n=o.find(".active:last a")[0],s=t.Event("show.bs.tab",{relatedTarget:n});if(e.trigger(s),!s.isDefaultPrevented()){var r=t(i);this.activate(e.closest("li"),o),this.activate(r,r.parent(),function(){e.trigger({type:"shown.bs.tab",relatedTarget:n});});}}},o.prototype.activate=function(e,o,i){function n(){s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),e.addClass("active"),r?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu")&&e.closest("li.dropdown").addClass("active"),i&&i();}
var s=o.find("> .active"),r=i&&t.support.transition&&s.hasClass("fade");r?s.one("bsTransitionEnd",n).emulateTransitionEnd(150):n(),s.removeClass("in");};var i=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=o,t.fn.tab.noConflict=function(){return t.fn.tab=i,this;},t(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(o){o.preventDefault(),e.call(t(this),"show");});}(jQuery),+
function(t){function e(e){return this.each(function(){var i=t(this),n=i.data("bs.affix"),s="object"==typeof e&&e;n||i.data("bs.affix",n=new o(this,s)),"string"==typeof e&&n[e]();});}
var o=function(e,i){this.options=t.extend({},o.DEFAULTS,i),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition();};o.VERSION="3.2.0",o.RESET="affix affix-top affix-bottom",o.DEFAULTS={offset:0,target:window},o.prototype.getPinnedOffset=function(){if(this.pinnedOffset){return this.pinnedOffset;}
this.$element.removeClass(o.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t;},o.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1);},o.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=t(document).height(),i=this.$target.scrollTop(),n=this.$element.offset(),s=this.options.offset,r=s.top,a=s.bottom;"object"!=typeof s&&(a=r=s),"function"==typeof r&&(r=s.top(this.$element)),"function"==typeof a&&(a=s.bottom(this.$element));var l=null!=this.unpin&&i+this.unpin<=n.top?!1:null!=a&&n.top+this.$element.height()>=e-a?"bottom":null!=r&&r>=i?"top":!1;if(this.affixed!==l){null!=this.unpin&&this.$element.css("top","");var h="affix"+(l?"-"+l:""),p=t.Event(h+".bs.affix");this.$element.trigger(p),p.isDefaultPrevented()||(this.affixed=l,this.unpin="bottom"==l?this.getPinnedOffset():null,this.$element.removeClass(o.RESET).addClass(h).trigger(t.Event(h.replace("affix","affixed"))),"bottom"==l&&this.$element.offset({top:e-this.$element.height()-a}));}}};var i=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=o,t.fn.affix.noConflict=function(){return t.fn.affix=i,this;},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var o=t(this),i=o.data();i.offset=i.offset||{},i.offsetBottom&&(i.offset.bottom=i.offsetBottom),i.offsetTop&&(i.offset.top=i.offsetTop),e.call(o,i);});});}(jQuery),+
function(t){function e(e){return this.each(function(){var i=t(this),n=i.data("bs.collapse"),s=t.extend({},o.DEFAULTS,i.data(),"object"==typeof e&&e);!n&&s.toggle&&"show"==e&&(e=!e),n||i.data("bs.collapse",n=new o(this,s)),"string"==typeof e&&n[e]();});}
var o=function(e,i){this.$element=t(e),this.options=t.extend({},o.DEFAULTS,i),this.transitioning=null,this.options.parent&&(this.$parent=t(this.options.parent)),this.options.toggle&&this.toggle();};o.VERSION="3.2.0",o.DEFAULTS={toggle:!0},o.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height";},o.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var o=t.Event("show.bs.collapse");if(this.$element.trigger(o),!o.isDefaultPrevented()){var i=this.$parent&&this.$parent.find("> .panel > .in");if(i&&i.length){var n=i.data("bs.collapse");if(n&&n.transitioning){return;}
e.call(i,"hide"),n||i.data("bs.collapse",null);}
var s=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[s](0),this.transitioning=1;var r=function(){this.$element.removeClass("collapsing").addClass("collapse in")[s](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse");};if(!t.support.transition){return r.call(this);}
var a=t.camelCase(["scroll",s].join("-"));this.$element.one("bsTransitionEnd",t.proxy(r,this)).emulateTransitionEnd(350)[s](this.$element[0][a]);}}},o.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var o=this.dimension();this.$element[o](this.$element[o]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var i=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse");};return t.support.transition?void this.$element[o](0).one("bsTransitionEnd",t.proxy(i,this)).emulateTransitionEnd(350):i.call(this);}}},o.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]();};var i=t.fn.collapse;t.fn.collapse=e,t.fn.collapse.Constructor=o,t.fn.collapse.noConflict=function(){return t.fn.collapse=i,this;},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(o){var i,n=t(this),s=n.attr("data-target")||o.preventDefault()||(i=n.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""),r=t(s),a=r.data("bs.collapse"),l=a?"toggle":n.data(),h=n.attr("data-parent"),p=h&&t(h);a&&a.transitioning||(p&&p.find('[data-toggle="collapse"][data-parent="'+h+'"]').not(n).addClass("collapsed"),n[r.hasClass("in")?"addClass":"removeClass"]("collapsed")),e.call(r,l);});}(jQuery),+
function(t){function e(o,i){var n=t.proxy(this.process,this);this.$body=t("body"),this.$scrollElement=t(t(o).is("body")?window:o),this.options=t.extend({},e.DEFAULTS,i),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",n),this.refresh(),this.process();}
function o(o){return this.each(function(){var i=t(this),n=i.data("bs.scrollspy"),s="object"==typeof o&&o;n||i.data("bs.scrollspy",n=new e(this,s)),"string"==typeof o&&n[o]();});}
e.VERSION="3.2.0",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight);},e.prototype.refresh=function(){var e="offset",o=0;t.isWindow(this.$scrollElement[0])||(e="position",o=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var i=this;this.$body.find(this.selector).map(function(){var i=t(this),n=i.data("target")||i.attr("href"),s=/^#./.test(n)&&t(n);return s&&s.length&&s.is(":visible")&&[[s[e]().top+o,n]]||null;}).sort(function(t,e){return t[0]-e[0];}).each(function(){i.offsets.push(this[0]),i.targets.push(this[1]);});},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,o=this.getScrollHeight(),i=this.options.offset+o-this.$scrollElement.height(),n=this.offsets,s=this.targets,r=this.activeTarget;if(this.scrollHeight!=o&&this.refresh(),e>=i){return r!=(t=s[s.length-1])&&this.activate(t);}
if(r&&e<=n[0]){return r!=(t=s[0])&&this.activate(t);}
for(t=n.length;t--;){r!=s[t]&&e>=n[t]&&(!n[t+1]||e<=n[t+1])&&this.activate(s[t]);}},e.prototype.activate=function(e){this.activeTarget=e,t(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var o=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',i=t(o).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy");};var i=t.fn.scrollspy;t.fn.scrollspy=o,t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=i,this;},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);o.call(e,e.data());});});}(jQuery),+
function(t){function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var o in e){if(void 0!==t.style[o]){return{end:e[o]};}}
return!1;}
t.fn.emulateTransitionEnd=function(e){var o=!1,i=this;t(this).one("bsTransitionEnd",function(){o=!0;});var n=function(){o||t(i).trigger(t.support.transition.end);};return setTimeout(n,e),this;},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0;}});});}(jQuery);!function(a){a.flexslider=function(b,c){var d=a(b);d.vars=a.extend({},a.flexslider.defaults,c);var j,e=d.vars.namespace,f=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,g=("ontouchstart"in window||f||window.DocumentTouch&&document instanceof DocumentTouch)&&d.vars.touch,h="click touchend MSPointerUp",i="",k="vertical"===d.vars.direction,l=d.vars.reverse,m=d.vars.itemWidth>0,n="fade"===d.vars.animation,o=""!==d.vars.asNavFor,p={},q=!0;a.data(b,"flexslider",d),p={init:function(){d.animating=!1,d.currentSlide=parseInt(d.vars.startAt?d.vars.startAt:0,10),isNaN(d.currentSlide)&&(d.currentSlide=0),d.animatingTo=d.currentSlide,d.atEnd=0===d.currentSlide||d.currentSlide===d.last,d.containerSelector=d.vars.selector.substr(0,d.vars.selector.search(" ")),d.slides=a(d.vars.selector,d),d.container=a(d.containerSelector,d),d.count=d.slides.length,d.syncExists=a(d.vars.sync).length>0,"slide"===d.vars.animation&&(d.vars.animation="swing"),d.prop=k?"top":"marginLeft",d.args={},d.manualPause=!1,d.stopped=!1,d.started=!1,d.startTimeout=null,d.transitions=!d.vars.video&&!n&&d.vars.useCSS&&function(){var a=document.createElement("div"),b=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var c in b){if(void 0!==a.style[b[c]]){return d.pfx=b[c].replace("Perspective","").toLowerCase(),d.prop="-"+d.pfx+"-transform",!0;}}
return!1;}(),d.ensureAnimationEnd="",""!==d.vars.controlsContainer&&(d.controlsContainer=a(d.vars.controlsContainer).length>0&&a(d.vars.controlsContainer)),""!==d.vars.manualControls&&(d.manualControls=a(d.vars.manualControls).length>0&&a(d.vars.manualControls)),d.vars.randomize&&(d.slides.sort(function(){return Math.round(Math.random())-0.5;}),d.container.empty().append(d.slides)),d.doMath(),d.setup("init"),d.vars.controlNav&&p.controlNav.setup(),d.vars.directionNav&&p.directionNav.setup(),d.vars.keyboard&&(1===a(d.containerSelector).length||d.vars.multipleKeyboard)&&a(document).bind("keyup",function(a){var b=a.keyCode;if(!d.animating&&(39===b||37===b)){var c=39===b?d.getTarget("next"):37===b?d.getTarget("prev"):!1;d.flexAnimate(c,d.vars.pauseOnAction);}}),d.vars.mousewheel&&d.bind("mousewheel",function(a,b){a.preventDefault();var f=0>b?d.getTarget("next"):d.getTarget("prev");d.flexAnimate(f,d.vars.pauseOnAction);}),d.vars.pausePlay&&p.pausePlay.setup(),d.vars.slideshow&&d.vars.pauseInvisible&&p.pauseInvisible.init(),d.vars.slideshow&&(d.vars.pauseOnHover&&d.hover(function(){d.manualPlay||d.manualPause||d.pause();},function(){d.manualPause||d.manualPlay||d.stopped||d.play();}),d.vars.pauseInvisible&&p.pauseInvisible.isHidden()||(d.vars.initDelay>0?d.startTimeout=setTimeout(d.play,d.vars.initDelay):d.play())),o&&p.asNav.setup(),g&&d.vars.touch&&p.touch(),(!n||n&&d.vars.smoothHeight)&&a(window).bind("resize orientationchange focus",p.resize),d.find("img").attr("draggable","false"),setTimeout(function(){d.vars.start(d);},200);},asNav:{setup:function(){d.asNav=!0,d.animatingTo=Math.floor(d.currentSlide/d.move),d.currentItem=d.currentSlide,d.slides.removeClass(e+"active-slide").eq(d.currentItem).addClass(e+"active-slide"),f?(b._slider=d,d.slides.each(function(){var b=this;b._gesture=new MSGesture,b._gesture.target=b,b.addEventListener("MSPointerDown",function(a){a.preventDefault(),a.currentTarget._gesture&&a.currentTarget._gesture.addPointer(a.pointerId);},!1),b.addEventListener("MSGestureTap",function(b){b.preventDefault();var c=a(this),e=c.index();a(d.vars.asNavFor).data("flexslider").animating||c.hasClass("active")||(d.direction=d.currentItem<e?"next":"prev",d.flexAnimate(e,d.vars.pauseOnAction,!1,!0,!0));});})):d.slides.on(h,function(b){b.preventDefault();var c=a(this),f=c.index(),g=c.offset().left-a(d).scrollLeft();0>=g&&c.hasClass(e+"active-slide")?d.flexAnimate(d.getTarget("prev"),!0):a(d.vars.asNavFor).data("flexslider").animating||c.hasClass(e+"active-slide")||(d.direction=d.currentItem<f?"next":"prev",d.flexAnimate(f,d.vars.pauseOnAction,!1,!0,!0));});}},controlNav:{setup:function(){d.manualControls?p.controlNav.setupManual():p.controlNav.setupPaging();},setupPaging:function(){var f,g,b="thumbnails"===d.vars.controlNav?"control-thumbs":"control-paging",c=1;if(d.controlNavScaffold=a('<ol class="'+e+"control-nav "+e+b+'"></ol>'),d.pagingCount>1){for(var j=0;j<d.pagingCount;j++){if(g=d.slides.eq(j),f="thumbnails"===d.vars.controlNav?'<img src="'+g.attr("data-thumb")+'"/>':"<a>"+c+"</a>","thumbnails"===d.vars.controlNav&&!0===d.vars.thumbCaptions){var k=g.attr("data-thumbcaption");""!=k&&void 0!=k&&(f+='<span class="'+e+'caption">'+k+"</span>");}
d.controlNavScaffold.append("<li>"+f+"</li>"),c++;}}
d.controlsContainer?a(d.controlsContainer).append(d.controlNavScaffold):d.append(d.controlNavScaffold),p.controlNav.set(),p.controlNav.active(),d.controlNavScaffold.delegate("a, img",h,function(b){if(b.preventDefault(),""===i||i===b.type){var c=a(this),f=d.controlNav.index(c);c.hasClass(e+"active")||(d.direction=f>d.currentSlide?"next":"prev",d.flexAnimate(f,d.vars.pauseOnAction));}""===i&&(i=b.type),p.setToClearWatchedEvent();});},setupManual:function(){d.controlNav=d.manualControls,p.controlNav.active(),d.controlNav.bind(h,function(b){if(b.preventDefault(),""===i||i===b.type){var c=a(this),f=d.controlNav.index(c);c.hasClass(e+"active")||(d.direction=f>d.currentSlide?"next":"prev",d.flexAnimate(f,d.vars.pauseOnAction));}""===i&&(i=b.type),p.setToClearWatchedEvent();});},set:function(){var b="thumbnails"===d.vars.controlNav?"img":"a";d.controlNav=a("."+e+"control-nav li "+b,d.controlsContainer?d.controlsContainer:d);},active:function(){d.controlNav.removeClass(e+"active").eq(d.animatingTo).addClass(e+"active");},update:function(b,c){d.pagingCount>1&&"add"===b?d.controlNavScaffold.append(a("<li><a>"+d.count+"</a></li>")):1===d.pagingCount?d.controlNavScaffold.find("li").remove():d.controlNav.eq(c).closest("li").remove(),p.controlNav.set(),d.pagingCount>1&&d.pagingCount!==d.controlNav.length?d.update(c,b):p.controlNav.active();}},directionNav:{setup:function(){var b=a('<ul class="'+e+'direction-nav"><li><a class="'+e+'prev" href="#">'+d.vars.prevText+'</a></li><li><a class="'+e+'next" href="#">'+d.vars.nextText+"</a></li></ul>");d.controlsContainer?(a(d.controlsContainer).append(b),d.directionNav=a("."+e+"direction-nav li a",d.controlsContainer)):(d.append(b),d.directionNav=a("."+e+"direction-nav li a",d)),p.directionNav.update(),d.directionNav.bind(h,function(b){b.preventDefault();var c;(""===i||i===b.type)&&(c=a(this).hasClass(e+"next")?d.getTarget("next"):d.getTarget("prev"),d.flexAnimate(c,d.vars.pauseOnAction)),""===i&&(i=b.type),p.setToClearWatchedEvent();});},update:function(){var a=e+"disabled";1===d.pagingCount?d.directionNav.addClass(a).attr("tabindex","-1"):d.vars.animationLoop?d.directionNav.removeClass(a).removeAttr("tabindex"):0===d.animatingTo?d.directionNav.removeClass(a).filter("."+e+"prev").addClass(a).attr("tabindex","-1"):d.animatingTo===d.last?d.directionNav.removeClass(a).filter("."+e+"next").addClass(a).attr("tabindex","-1"):d.directionNav.removeClass(a).removeAttr("tabindex");}},pausePlay:{setup:function(){var b=a('<div class="'+e+'pauseplay"><a></a></div>');d.controlsContainer?(d.controlsContainer.append(b),d.pausePlay=a("."+e+"pauseplay a",d.controlsContainer)):(d.append(b),d.pausePlay=a("."+e+"pauseplay a",d)),p.pausePlay.update(d.vars.slideshow?e+"pause":e+"play"),d.pausePlay.bind(h,function(b){b.preventDefault(),(""===i||i===b.type)&&(a(this).hasClass(e+"pause")?(d.manualPause=!0,d.manualPlay=!1,d.pause()):(d.manualPause=!1,d.manualPlay=!0,d.play())),""===i&&(i=b.type),p.setToClearWatchedEvent();});},update:function(a){"play"===a?d.pausePlay.removeClass(e+"pause").addClass(e+"play").html(d.vars.playText):d.pausePlay.removeClass(e+"play").addClass(e+"pause").html(d.vars.pauseText);}},touch:function(){function r(f){d.animating?f.preventDefault():(window.navigator.msPointerEnabled||1===f.touches.length)&&(d.pause(),g=k?d.h:d.w,i=Number(new Date),o=f.touches[0].pageX,p=f.touches[0].pageY,e=m&&l&&d.animatingTo===d.last?0:m&&l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:m&&d.currentSlide===d.last?d.limit:m?(d.itemW+d.vars.itemMargin)*d.move*d.currentSlide:l?(d.last-d.currentSlide+d.cloneOffset)*g:(d.currentSlide+d.cloneOffset)*g,a=k?p:o,c=k?o:p,b.addEventListener("touchmove",s,!1),b.addEventListener("touchend",t,!1));}
function s(b){o=b.touches[0].pageX,p=b.touches[0].pageY,h=k?a-p:a-o,j=k?Math.abs(h)<Math.abs(o-c):Math.abs(h)<Math.abs(p-c);var f=500;(!j||Number(new Date)-i>f)&&(b.preventDefault(),!n&&d.transitions&&(d.vars.animationLoop||(h/=0===d.currentSlide&&0>h||d.currentSlide===d.last&&h>0?Math.abs(h)/g+2:1),d.setProps(e+h,"setTouch")));}
function t(){if(b.removeEventListener("touchmove",s,!1),d.animatingTo===d.currentSlide&&!j&&null!==h){var k=l?-h:h,m=k>0?d.getTarget("next"):d.getTarget("prev");d.canAdvance(m)&&(Number(new Date)-i<550&&Math.abs(k)>50||Math.abs(k)>g/2)?d.flexAnimate(m,d.vars.pauseOnAction):n||d.flexAnimate(d.currentSlide,d.vars.pauseOnAction,!0);}
b.removeEventListener("touchend",t,!1),a=null,c=null,h=null,e=null;}
function u(a){a.stopPropagation(),d.animating?a.preventDefault():(d.pause(),b._gesture.addPointer(a.pointerId),q=0,g=k?d.h:d.w,i=Number(new Date),e=m&&l&&d.animatingTo===d.last?0:m&&l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:m&&d.currentSlide===d.last?d.limit:m?(d.itemW+d.vars.itemMargin)*d.move*d.currentSlide:l?(d.last-d.currentSlide+d.cloneOffset)*g:(d.currentSlide+d.cloneOffset)*g);}
function v(a){a.stopPropagation();var c=a.target._slider;if(c){var d=-a.translationX,f=-a.translationY;return q+=k?f:d,h=q,j=k?Math.abs(q)<Math.abs(-d):Math.abs(q)<Math.abs(-f),a.detail===a.MSGESTURE_FLAG_INERTIA?(setImmediate(function(){b._gesture.stop();}),void 0):((!j||Number(new Date)-i>500)&&(a.preventDefault(),!n&&c.transitions&&(c.vars.animationLoop||(h=q/(0===c.currentSlide&&0>q||c.currentSlide===c.last&&q>0?Math.abs(q)/g+2:1)),c.setProps(e+h,"setTouch"))),void 0);}}
function w(b){b.stopPropagation();var d=b.target._slider;if(d){if(d.animatingTo===d.currentSlide&&!j&&null!==h){var f=l?-h:h,k=f>0?d.getTarget("next"):d.getTarget("prev");d.canAdvance(k)&&(Number(new Date)-i<550&&Math.abs(f)>50||Math.abs(f)>g/2)?d.flexAnimate(k,d.vars.pauseOnAction):n||d.flexAnimate(d.currentSlide,d.vars.pauseOnAction,!0);}
a=null,c=null,h=null,e=null,q=0;}}
var a,c,e,g,h,i,j=!1,o=0,p=0,q=0;f?(b.style.msTouchAction="none",b._gesture=new MSGesture,b._gesture.target=b,b.addEventListener("MSPointerDown",u,!1),b._slider=d,b.addEventListener("MSGestureChange",v,!1),b.addEventListener("MSGestureEnd",w,!1)):b.addEventListener("touchstart",r,!1);},resize:function(){!d.animating&&d.is(":visible")&&(m||d.doMath(),n?p.smoothHeight():m?(d.slides.width(d.computedW),d.update(d.pagingCount),d.setProps()):k?(d.viewport.height(d.h),d.setProps(d.h,"setTotal")):(d.vars.smoothHeight&&p.smoothHeight(),d.newSlides.width(d.computedW),d.setProps(d.computedW,"setTotal")));},smoothHeight:function(a){if(!k||n){var b=n?d:d.viewport;a?b.animate({height:d.slides.eq(d.animatingTo).height()},a):b.height(d.slides.eq(d.animatingTo).height());}},sync:function(b){var c=a(d.vars.sync).data("flexslider"),e=d.animatingTo;switch(b){case"animate":c.flexAnimate(e,d.vars.pauseOnAction,!1,!0);break;case"play":c.playing||c.asNav||c.play();break;case"pause":c.pause();}},uniqueID:function(b){return b.find("[id]").each(function(){var b=a(this);b.attr("id",b.attr("id")+"_clone");}),b;},pauseInvisible:{visProp:null,init:function(){var a=["webkit","moz","ms","o"];if("hidden"in document){return"hidden";}
for(var b=0;b<a.length;b++){a[b]+"Hidden"in document&&(p.pauseInvisible.visProp=a[b]+"Hidden");}
if(p.pauseInvisible.visProp){var c=p.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(c,function(){p.pauseInvisible.isHidden()?d.startTimeout?clearTimeout(d.startTimeout):d.pause():d.started?d.play():d.vars.initDelay>0?setTimeout(d.play,d.vars.initDelay):d.play();});}},isHidden:function(){return document[p.pauseInvisible.visProp]||!1;}},setToClearWatchedEvent:function(){clearTimeout(j),j=setTimeout(function(){i="";},3000);}},d.flexAnimate=function(b,c,f,h,i){if(d.vars.animationLoop||b===d.currentSlide||(d.direction=b>d.currentSlide?"next":"prev"),o&&1===d.pagingCount&&(d.direction=d.currentItem<b?"next":"prev"),!d.animating&&(d.canAdvance(b,i)||f)&&d.is(":visible")){if(o&&h){var j=a(d.vars.asNavFor).data("flexslider");if(d.atEnd=0===b||b===d.count-1,j.flexAnimate(b,!0,!1,!0,i),d.direction=d.currentItem<b?"next":"prev",j.direction=d.direction,Math.ceil((b+1)/d.visible)-1===d.currentSlide||0===b){return d.currentItem=b,d.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),!1;}
d.currentItem=b,d.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),b=Math.floor(b/d.visible);}
if(d.animating=!0,d.animatingTo=b,c&&d.pause(),d.vars.before(d),d.syncExists&&!i&&p.sync("animate"),d.vars.controlNav&&p.controlNav.active(),m||d.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),d.atEnd=0===b||b===d.last,d.vars.directionNav&&p.directionNav.update(),b===d.last&&(d.vars.end(d),d.vars.animationLoop||d.pause()),n){g?(d.slides.eq(d.currentSlide).css({opacity:0,zIndex:1}),d.slides.eq(b).css({opacity:1,zIndex:2}),d.wrapup(q)):(d.slides.eq(d.currentSlide).css({zIndex:1}).animate({opacity:0},d.vars.animationSpeed,d.vars.easing),d.slides.eq(b).css({zIndex:2}).animate({opacity:1},d.vars.animationSpeed,d.vars.easing,d.wrapup));}else{var r,s,t,q=k?d.slides.filter(":first").height():d.computedW;m?(r=d.vars.itemMargin,t=(d.itemW+r)*d.move*d.animatingTo,s=t>d.limit&&1!==d.visible?d.limit:t):s=0===d.currentSlide&&b===d.count-1&&d.vars.animationLoop&&"next"!==d.direction?l?(d.count+d.cloneOffset)*q:0:d.currentSlide===d.last&&0===b&&d.vars.animationLoop&&"prev"!==d.direction?l?0:(d.count+1)*q:l?(d.count-1-b+d.cloneOffset)*q:(b+d.cloneOffset)*q,d.setProps(s,"",d.vars.animationSpeed),d.transitions?(d.vars.animationLoop&&d.atEnd||(d.animating=!1,d.currentSlide=d.animatingTo),d.container.unbind("webkitTransitionEnd transitionend"),d.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(d.ensureAnimationEnd),d.wrapup(q);}),clearTimeout(d.ensureAnimationEnd),d.ensureAnimationEnd=setTimeout(function(){d.wrapup(q);},d.vars.animationSpeed+100)):d.container.animate(d.args,d.vars.animationSpeed,d.vars.easing,function(){d.wrapup(q);});}
d.vars.smoothHeight&&p.smoothHeight(d.vars.animationSpeed);}},d.wrapup=function(a){n||m||(0===d.currentSlide&&d.animatingTo===d.last&&d.vars.animationLoop?d.setProps(a,"jumpEnd"):d.currentSlide===d.last&&0===d.animatingTo&&d.vars.animationLoop&&d.setProps(a,"jumpStart")),d.animating=!1,d.currentSlide=d.animatingTo,d.vars.after(d);},d.animateSlides=function(){!d.animating&&q&&d.flexAnimate(d.getTarget("next"));},d.pause=function(){clearInterval(d.animatedSlides),d.animatedSlides=null,d.playing=!1,d.vars.pausePlay&&p.pausePlay.update("play"),d.syncExists&&p.sync("pause");},d.play=function(){d.playing&&clearInterval(d.animatedSlides),d.animatedSlides=d.animatedSlides||setInterval(d.animateSlides,d.vars.slideshowSpeed),d.started=d.playing=!0,d.vars.pausePlay&&p.pausePlay.update("pause"),d.syncExists&&p.sync("play");},d.stop=function(){d.pause(),d.stopped=!0;},d.canAdvance=function(a,b){var c=o?d.pagingCount-1:d.last;return b?!0:o&&d.currentItem===d.count-1&&0===a&&"prev"===d.direction?!0:o&&0===d.currentItem&&a===d.pagingCount-1&&"next"!==d.direction?!1:a!==d.currentSlide||o?d.vars.animationLoop?!0:d.atEnd&&0===d.currentSlide&&a===c&&"next"!==d.direction?!1:d.atEnd&&d.currentSlide===c&&0===a&&"next"===d.direction?!1:!0:!1;},d.getTarget=function(a){return d.direction=a,"next"===a?d.currentSlide===d.last?0:d.currentSlide+1:0===d.currentSlide?d.last:d.currentSlide-1;},d.setProps=function(a,b,c){var e=function(){var c=a?a:(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo,e=function(){if(m){return"setTouch"===b?a:l&&d.animatingTo===d.last?0:l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:d.animatingTo===d.last?d.limit:c;}
switch(b){case"setTotal":return l?(d.count-1-d.currentSlide+d.cloneOffset)*a:(d.currentSlide+d.cloneOffset)*a;case"setTouch":return l?a:a;case"jumpEnd":return l?a:d.count*a;case"jumpStart":return l?d.count*a:a;default:return a;}}();return-1*e+"px";}();d.transitions&&(e=k?"translate3d(0,"+e+",0)":"translate3d("+e+",0,0)",c=void 0!==c?c/1000+"s":"0s",d.container.css("-"+d.pfx+"-transition-duration",c),d.container.css("transition-duration",c)),d.args[d.prop]=e,(d.transitions||void 0===c)&&d.container.css(d.args),d.container.css("transform",e);},d.setup=function(b){if(n){d.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&(g?d.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+d.vars.animationSpeed/1000+"s ease",zIndex:1}).eq(d.currentSlide).css({opacity:1,zIndex:2}):d.slides.css({opacity:0,display:"block",zIndex:1}).eq(d.currentSlide).css({zIndex:2}).animate({opacity:1},d.vars.animationSpeed,d.vars.easing)),d.vars.smoothHeight&&p.smoothHeight();}else{var c,f;"init"===b&&(d.viewport=a('<div class="'+e+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(d).append(d.container),d.cloneCount=0,d.cloneOffset=0,l&&(f=a.makeArray(d.slides).reverse(),d.slides=a(f),d.container.empty().append(d.slides))),d.vars.animationLoop&&!m&&(d.cloneCount=2,d.cloneOffset=1,"init"!==b&&d.container.find(".clone").remove(),p.uniqueID(d.slides.first().clone().addClass("clone").attr("aria-hidden","true")).appendTo(d.container),p.uniqueID(d.slides.last().clone().addClass("clone").attr("aria-hidden","true")).prependTo(d.container)),d.newSlides=a(d.vars.selector,d),c=l?d.count-1-d.currentSlide+d.cloneOffset:d.currentSlide+d.cloneOffset,k&&!m?(d.container.height(200*(d.count+d.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){d.newSlides.css({display:"block"}),d.doMath(),d.viewport.height(d.h),d.setProps(c*d.h,"init");},"init"===b?100:0)):(d.container.width(200*(d.count+d.cloneCount)+"%"),d.setProps(c*d.computedW,"init"),setTimeout(function(){d.doMath(),d.newSlides.css({width:d.computedW,"float":"left",display:"block"}),d.vars.smoothHeight&&p.smoothHeight();},"init"===b?100:0));}
m||d.slides.removeClass(e+"active-slide").eq(d.currentSlide).addClass(e+"active-slide"),d.vars.init(d);},d.doMath=function(){var a=d.slides.first(),b=d.vars.itemMargin,c=d.vars.minItems,e=d.vars.maxItems;d.w=void 0===d.viewport?d.width():d.viewport.width(),d.h=a.height(),d.boxPadding=a.outerWidth()-a.width(),m?(d.itemT=d.vars.itemWidth+b,d.minW=c?c*d.itemT:d.w,d.maxW=e?e*d.itemT-b:d.w,d.itemW=d.minW>d.w?(d.w-b*(c-1))/c:d.maxW<d.w?(d.w-b*(e-1))/e:d.vars.itemWidth>d.w?d.w:d.vars.itemWidth,d.visible=Math.floor(d.w/d.itemW),d.move=d.vars.move>0&&d.vars.move<d.visible?d.vars.move:d.visible,d.pagingCount=Math.ceil((d.count-d.visible)/d.move+1),d.last=d.pagingCount-1,d.limit=1===d.pagingCount?0:d.vars.itemWidth>d.w?d.itemW*(d.count-1)+b*(d.count-1):(d.itemW+b)*d.count-d.w-b):(d.itemW=d.w,d.pagingCount=d.count,d.last=d.count-1),d.computedW=d.itemW-d.boxPadding;},d.update=function(a,b){d.doMath(),m||(a<d.currentSlide?d.currentSlide+=1:a<=d.currentSlide&&0!==a&&(d.currentSlide-=1),d.animatingTo=d.currentSlide),d.vars.controlNav&&!d.manualControls&&("add"===b&&!m||d.pagingCount>d.controlNav.length?p.controlNav.update("add"):("remove"===b&&!m||d.pagingCount<d.controlNav.length)&&(m&&d.currentSlide>d.last&&(d.currentSlide-=1,d.animatingTo-=1),p.controlNav.update("remove",d.last))),d.vars.directionNav&&p.directionNav.update();},d.addSlide=function(b,c){var e=a(b);d.count+=1,d.last=d.count-1,k&&l?void 0!==c?d.slides.eq(d.count-c).after(e):d.container.prepend(e):void 0!==c?d.slides.eq(c).before(e):d.container.append(e),d.update(c,"add"),d.slides=a(d.vars.selector+":not(.clone)",d),d.setup(),d.vars.added(d);},d.removeSlide=function(b){var c=isNaN(b)?d.slides.index(a(b)):b;d.count-=1,d.last=d.count-1,isNaN(b)?a(b,d.slides).remove():k&&l?d.slides.eq(d.last).remove():d.slides.eq(b).remove(),d.doMath(),d.update(c,"remove"),d.slides=a(d.vars.selector+":not(.clone)",d),d.setup(),d.vars.removed(d);},p.init();},a(window).blur(function(){focused=!1;}).focus(function(){focused=!0;}),a.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7000,animationSpeed:600,initDelay:0,randomize:!1,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},a.fn.flexslider=function(b){if(void 0===b&&(b={}),"object"==typeof b){return this.each(function(){var c=a(this),d=b.selector?b.selector:".slides > li",e=c.find(d);1===e.length&&b.allowOneSlide===!0||0===e.length?(e.fadeIn(400),b.start&&b.start(c)):void 0===c.data("flexslider")&&new a.flexslider(this,b);});}
var c=a(this).data("flexslider");switch(b){case"play":c.play();break;case"pause":c.pause();break;case"stop":c.stop();break;case"next":c.flexAnimate(c.getTarget("next"),!0);break;case"prev":case"previous":c.flexAnimate(c.getTarget("prev"),!0);break;default:"number"==typeof b&&c.flexAnimate(b,!0);}};}(jQuery);(function($,sr){var debounce=function(func,threshold,execAsap){var timeout;return function debounced(){var obj=this,args=arguments;function delayed(){if(!execAsap){func.apply(obj,args);}
timeout=null;}
if(timeout){clearTimeout(timeout);}else{if(execAsap){func.apply(obj,args);}}
timeout=setTimeout(delayed,threshold||100);};};jQuery.fn[sr]=function(fn){return fn?this.bind("resize",debounce(fn)):this.trigger(sr);};})(jQuery,"smartresize");

function getUrlParameter(sParam) {
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split("&");
	for (var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split("=");
		if (sParameterName[0] == sParam) {
			return sParameterName[1];
		}
	}
}
window.fbAsyncInit = function () {
	FB.init({
		appId: "1410109452622113",
		cookie: true,
		xfbml: true,
		oauth: true,
		version: "v2.1"
	});
};
(function (d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {
		return;
	}
	js = d.createElement(s);
	js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, "script", "facebook-jssdk"));


var tag = document.createElement("script");
tag.src = "http://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var projectPlayer;
var perceptionsPlayer;
var anthemPlayer;
var takeoverPlayer;
var grammysPlayer;
var apiReady = false;
var projectTimeout;
var perceptionsTimeout;
var takeoverTimeout;
var anthemTimeout;
var grammysTimeout;
var listTimeout;

function onYouTubeIframeAPIReady() {
	apiReady = true;
}
var isiPad = navigator.userAgent.indexOf("iPad") != -1;

function onTakeoverPlayerStateChange(event) {
	if (event.data == 0) {
		$("#takeoverModal").modal("hide");
		$("#edcNavigationList").show();
	}
}
function projectVideoStart() {
	clearTimeout(projectTimeout);
	if (apiReady) {
		var h = $("#projectModal .modal-dialog").height() - 80;
		var w = $("#projectModal .modal-dialog").width();
		projectPlayer = new YT.Player("projectVideo", {
			width: w,
			height: h,
			videoId: "sDz6fhesiIw",
			events: {
				onReady: onProjectPlayerReady
			},
			playerVars: {
				controls: 1,
				modestbranding: 1,
				rel: 0,
				showinfo: 0
			}
		});
		$("#projectModal").modal();
		$("#edcNavigationList").hide();
	} else {
		projectTimeout = setTimeout("projectVideoStart()", 1000);
	}
}
function perceptionsVideoStart() {
	clearTimeout(perceptionsTimeout);
	if (apiReady) {
		var h = $("#perceptionsModal .modal-dialog").height() - 80;
		var w = $("#perceptionsModal .modal-dialog").width();
		perceptionsPlayer = new YT.Player("perceptionsVideo", {
			width: w,
			height: h,
			videoId: "lx-I2o_LSTY",
			events: {
				onReady: onPerceptionsPlayerReady
			},
			playerVars: {
				controls: 1,
				modestbranding: 1,
				rel: 0,
				showinfo: 0,
				list: 'PLDOA0ezLvk0DDmyxQvE0p7pTAYaYZseIl'
			}
		});
		$("#perceptionsModal").modal();
		$("#edcNavigationList").hide();
	} else {
		perceptionsTimeout = setTimeout("perceptionsVideoStart()", 1000);
	}
}

https://www.youtube.com/watch?v=lx-I2o_LSTY&index=6&list=PLDOA0ezLvk0DDmyxQvE0p7pTAYaYZseIl
function anthemVideoStart() {
	clearTimeout(anthemTimeout);
	if (apiReady) {
		var h = $("#anthemModal .modal-dialog").height() - 80;
		var w = $("#anthemModal .modal-dialog").width();
		anthemPlayer = new YT.Player("anthemVideo", {
			width: w,
			height: h,
			videoId: "6Pqdds885pw",
			events: {
				onReady: onAnthemPlayerReady
			},
			playerVars: {
				controls: 1,
				modestbranding: 1,
				rel: 0,
				showinfo: 0
			}
		});
		$("#anthemModal").modal();
		$("#edcNavigationList").hide();
	} else {
		anthemTimeout = setTimeout("anthemVideoStart()", 1000);
	}
}
function grammysVideoStart() {
	clearTimeout(grammysTimeout);
	if ($("#grammysVidEmbed").length) {
		grammysPlayer = new YT.Player("grammysVidEmbed", {});
	} else {
		grammysTimeout = setTimeout("grammysVideoStart()", 1000);
	}
}
function onTakeoverPlayerReady() {
	takeoverPlayer.playVideo();
}
function onProjectPlayerReady() {
	projectPlayer.playVideo();
}
function onPerceptionsPlayerReady() {
	perceptionsPlayer.playVideo();
}
function onAnthemPlayerReady() {
	anthemPlayer.playVideo();
}
function takeoverVideoStart() {
	clearTimeout(takeoverTimeout);
	if (apiReady) {
		var h = $("#takeoverModal .modal-dialog").height() - 80;
		var w = $("#takeoverModal .modal-dialog").width();
		if (getUrlParameter("email") == "true") {
			takeoverPlayer = new YT.Player("takeoverVideo", {
				height: h,
				width: w,
				videoId: "ZiV6L7d8CY4",
				events: {
					onReady: onTakeoverPlayerReady,
					onStateChange: onTakeoverPlayerStateChange
				},
				playerVars: {
					controls: 1,
					modestbranding: 1,
					rel: 0,
					showinfo: 0
				}
			});
		} else {
			if (getUrlParameter("email2") == "true") {
				takeoverPlayer = new YT.Player("takeoverVideo", {
					height: h,
					width: w,
					videoId: "IR0iee8voiM",
					events: {
						onReady: onTakeoverPlayerReady,
						onStateChange: onTakeoverPlayerStateChange
					},
					playerVars: {
						controls: 1,
						modestbranding: 1,
						rel: 0,
						showinfo: 0
					}
				});
			}
		}
	} else {
		takeoverTimeout = setTimeout("takeoverVideoStart()", 1000);
	}
}
function grammysListResize() {
	clearTimeout(listTimeout);
	if ($("#mainVidPlayer").length) {
		var mainHeight = $("#mainVidPlayer").height();
		$("#listVids").css({
			height: (mainHeight + "px")
		});
	} else {
		listTimeout = setTimeout("grammysListResize()", 1000);
	}
}
var mouseOver;
var mouseOutTimer;
var powerOfCareSlide;
$(window).resize(function () {
	grammysListResize();
});
$(window).load(function () {
	grammysListResize();
});
$("document").ready(function () {
	var modal = $("#projectModal").detach();
	$("body").append(modal);
	modal = $("#perceptionsModal").detach();
	$("body").append(modal);
	modal = $("#anthemModal").detach();
	$("body").append(modal);
	modal = $("#takeoverModal").detach();
	$("body").append(modal);
	modal = $("#grammysModal").detach();
	$("body").append(modal);
	var fbLink = "http://whirlpool.com/everydaycare/";
	var fbName = "Care is Musical";
	var fbDesc = "Watch the #CareIsMusical contest winner and see other amazing performances of care. http://whr.pl/IuyfQ #EveryDayCare";
	var fbPic = "http://www.whirlpool.com/images/everydaycare/desktop/care-is-musical-social-thumb.jpg";
	$(".grammysShareContainer .facebook-share").on("click", function () {
		FB.ui({
			method: "feed",
			link: fbLink,
			name: fbName,
			description: fbDesc,
			picture: fbPic
		});
	});
	$(".grammysShareContainer .twitter-share a").click(function () {
		var url = "http://whr.pl/IuyfQ";
		var shareText = "Watch the #CareIsMusical contest winner and see other amazing performances of care. #EveryDayCare";
		var params = "url=" + encodeURIComponent(url) + "&text=" + encodeURIComponent(shareText);
		var tweetUrl = "http://twitter.com/share?" + params;
		openTweetBox(tweetUrl);
	});
	var playListURL = "http://gdata.youtube.com/feeds/api/playlists/PLcfvQc2hSFGGeHOBRCVcTi6Hrk2I8cEFR?v=2&alt=json&callback=?";
	var videoURL = "http://www.youtube.com/watch?v=";
	var firstVideoId;
	$.getJSON(playListURL, function (data) {
		var list_data = "";
		$.each(data.feed.entry, function (i, item) {
			var feedTitle = item.title.$t;
			var feedURL = item.link[1].href;
			var fragments = feedURL.split("/");
			var videoID = fragments[fragments.length - 2];
			var url = videoURL + videoID;
			var thumb = "http://img.youtube.com/vi/" + videoID + "/0.jpg";
			list_data += '<div class="listVid"><a href="#" rel="' + videoID + '" title="' + feedTitle + '" class="listVidBtn clearfix"><img alt="' + feedTitle + '" src="' + thumb + '" class="listVidThumb" /><p class="listVidTitle">' + feedTitle + "</p></a></div>";
			if (i == 0) {
				firstVideoId = videoID;
			}
		});
		$(list_data).appendTo("#listVids");
		createVideoEmbed(firstVideoId);
		$(".listVidBtn").bind("click", function () {
			createVideoEmbed($(this).attr("rel"));
			$(this).parent().siblings().children().removeClass("activeThumb");
			$(this).addClass("activeThumb");
			return false;
		});
		grammysListResize();
		$("#listVids .listVid:first .listVidBtn").addClass("activeThumb");
	});

	function createVideoEmbed(_id) {
		$("#mainVidPlayer").html('<iframe width="620" height="349" src="http://www.youtube.com/embed/' + _id + '?enablejsapi=1&autoplay=1&rel=0" enablejsapi="1" frameborder="0" allowfullscreen id="grammysVidEmbed"></iframe>');
		clearTimeout(grammysTimeout);
		if (apiReady) {
			grammysVideoStart();
		} else {
			grammysTimeout = setTimeout("grammysVideoStart()", 1000);
		}
	}
	if (navigator.appVersion.indexOf("MSIE 8") >= 0) {
		$("#listVidsContainer").hide();
		$("#listVids").hide();
	}
	if (isiPad) {
		$(".vidIntro .vidBtn").html("Get started");
		$(".offerFrame").html("<a class='startBtn' href='https://offerpop.com//campaign/709829' target='_blank'>Upload yours now</a>");
		$(".offerFrame iframe").hide();
	}
	$("#grammysModal .close").on("touchstart", function () {
		$("#grammysModal").modal("hide");
	});
	$("#grammysModal").on("shown.bs.modal", function (e) {
		grammysListResize();
	});
	$("#grammysModal").on("show.bs.modal", function (e) {
		$("html").css("cssText", "overflow-y: hidden !important");
		$("#edcNavigationList").hide();
	});
	$("#grammysModal").on("hide.bs.modal", function (e) {
		$("html").css("cssText", "overflow-y: auto !important");
		$("#edcNavigationList").show();
		grammysPlayer.pauseVideo();
	});
	$("#grammysBanner").click(function () {
		$("#grammysModal").modal();
		$("#edcNavigationList").hide();
	});
	$("#grammysModal").modal();
	$("#takeoverModal").on("show.bs.modal", function (e) {
		$("html").css("cssText", "overflow-y: hidden !important");
		$("#edcNavigationList").hide();
	});
	$("#takeoverModal").on("shown.bs.modal", function (e) {
		clearTimeout(takeoverTimeout);
		if (apiReady) {
			if (takeoverPlayer == null) {
				takeoverVideoStart();
			} else {
				var h = $("#takeoverModal .modal-dialog").height() - 80;
				var w = $("#takeoverModal .modal-dialog").width();
				takeoverPlayer.setSize(w, h);
			}
		} else {
			takeoverTimeout = setTimeout("takeoverVideoStart()", 1000);
		}
	});
	$("#takeoverModal").on("hide.bs.modal", function (e) {
		$("html").css("cssText", "overflow-y: auto !important");
		$("#edcNavigationList").show();
		takeoverPlayer.pauseVideo();
	});
	$("body").scrollspy({
		target: "#edcNavigation",
		offset: 100
	});
	if (getUrlParameter("email") == "true") {
		$("#takeoverModal").modal();
		$("html").css("cssText", "overflow-y: hidden !important");
		$("#edcNavigationList").hide();
	} else {
		if (getUrlParameter("email2") == "true") {
			$("#takeoverModal").modal();
			$("html").css("cssText", "overflow-y: hidden !important");
			$("#edcNavigationList").hide();
		}
	}
	$("#edcNavigationList li a").click(function (event) {
		event.preventDefault();
		if ($("#edcNavigation").hasClass("open")) {
			$("#edcNavigation").addClass("closing");
			var ele = $(this).attr("href");
			$("html, body").animate({
				scrollTop: $(ele).offset().top
			}, 1000);
			$("#edcNavigation").animate({
				right: "-187"
			}, "slow", function () {
				$("#edcNavigation").removeClass("closing");
				$("#edcNavigation").removeClass("open");
			});
		} else {
			mouseOver = true;
			$("#edcNavigation").addClass("open");
			if (!$("#edcNavigation").hasClass("closing")) {
				$("#edcNavigation").animate({
					right: "0"
				}, "slow");
			}
		}
	});
	$("#edcNavigation").mouseenter(function () {
		mouseOver = true;
		if (!$("#edcNavigation").hasClass("closing")) {
			$("#edcNavigation").animate({
				right: "0"
			}, "slow", function () {
				$("#edcNavigation").addClass("open");
			});
		}
	});
	$("#edcNavigation").mouseleave(function () {
		mouseOver = false;
		mouseOutTimer = setTimeout("closeNav()", 800);
		$("#edcNavigation").addClass("closing");
	});
	$("#projectOpen").click(function () {
		$("#projectModal").modal();
		$("#edcNavigationList").hide();
	});
	$("#perceptionsOpen").click(function () {
		$("#perceptionsModal").modal();
		$("#edcNavigationList").hide();
	});
	$("#anthemOpen").click(function () {
		$("#anthemModal").modal();
		$("#edcNavigationList").hide();
	});
	$("#projectModal").on("hide.bs.modal", function (e) {
		$("html").css("cssText", "overflow-y: auto !important");
		$("#edcNavigationList").show();
		projectPlayer.pauseVideo();
	});
	$("#perceptionsModal").on("hide.bs.modal", function (e) {
		$("html").css("cssText", "overflow-y: auto !important");
		$("#edcNavigationList").show();
		perceptionsPlayer.pauseVideo();
	});
	$("#projectModal").on("show.bs.modal", function (e) {
		$("html").css("cssText", "overflow-y: hidden !important");
	});
	$("#projectModal").on("shown.bs.modal", function (e) {
		clearTimeout(projectTimeout);
		if (apiReady) {
			if (projectPlayer == null) {
				projectVideoStart();
			} else {
				var h = $("#projectModal .modal-dialog").height() - 80;
				var w = $("#projectModal .modal-dialog").width();
				projectPlayer.setSize(w, h);
			}
		} else {
			projectTimeout = setTimeout("projectVideoStart()", 1000);
		}
	});
	$("#perceptionsModal").on("show.bs.modal", function (e) {
		$("html").css("cssText", "overflow-y: hidden !important");
	});
	$("#perceptionsModal").on("shown.bs.modal", function (e) {
		clearTimeout(projectTimeout);
		if (apiReady) {
			if (perceptionsPlayer == null) {
				perceptionsVideoStart();
			} else {
				var h = $("#perceptionsModal .modal-dialog").height() - 80;
				var w = $("#perceptionsModal .modal-dialog").width();
				perceptionsPlayer.setSize(w, h);
			}
		} else {
			perceptionsTimeout = setTimeout("perceptionsVideoStart()", 1000);
		}
	});
	$("#anthemModal").on("show.bs.modal", function (e) {
		$("html").css("cssText", "overflow-y: hidden !important");
	});
	$("#anthemModal").on("shown.bs.modal", function (e) {
		clearTimeout(anthemTimeout);
		if (apiReady) {
			if (anthemPlayer == null) {
				anthemVideoStart();
			} else {
				var h = $("#anthemModal .modal-dialog").height() - 80;
				var w = $("#anthemModal .modal-dialog").width();
				anthemPlayer.setSize(w, h);
			}
		} else {
			anthemTimeout = setTimeout("anthemVideoStart()", 1000);
		}
	});
	$("#anthemModal").on("hide.bs.modal", function (e) {
		$("html").css("cssText", "overflow-y: auto !important");
		$("#edcNavigationList").show();
		anthemPlayer.pauseVideo();
	});
	$(".power-of-care").flexslider({
		animation: "slide",
		controlNav: true,
		directionNav: true,
		itemMargin: 0,
		minItems: 1,
		maxItems: 1,
		itemWidth: 1280,
		selector: ".edc-slides > li",
		controlsContainer: ".power-of-care-controls",
		start: function (slider) {
			var sliderWidth = $(".flex-viewport").width();
			$(".edc-slides li").width(sliderWidth);
			powerOfCareSlide = slider.currentSlide;
		},
		animationSpeed: 1100,
		animationLoop: true,
		slideshow: false,
		prevText: "",
		nextText: "",
		after: function (slider) {
			powerOfCareSlide = slider.currentSlide;
		}
	});
	$(window).smartresize(function () {
		var sliderWidth = $(".flex-viewport").width();
		$(".edc-slides li").width(sliderWidth);
	});
	$("#theeverydaycareproject .twitter-share a").click(function () {
		var url = "http://ow.ly/BZnwh";
		var shareText = "The simple acts of care we give can make the world a better place. @WhirlpoolUSA shows us how. #EveryDayCare";
		var params = "url=" + encodeURIComponent(url) + "&text=" + encodeURIComponent(shareText);
		var tweetUrl = "http://twitter.com/share?" + params;
		openTweetBox(tweetUrl);
	});
	$("#theeverydaycareproject .facebook-share a").click(function () {
		var shareUrl = "http://" + document.domain + "/everydaycare/";
		var fbUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(shareUrl);
		openFBBox(fbUrl);
	});
	$("#theeverydaycareproject .pintrest-share a").click(function () {
		var shareUrl = "&media=" + encodeURIComponent("http://" + document.domain + "/images/everydaycare/desktop/social-every-day-care-project.jpg") + "&description=" + encodeURIComponent("The simple acts of care we give can make the world a better place. @WhirlpoolUSA shows us how. #EveryDayCare http://ow.ly/BZnwh");
		var pinUrl = "http://www.pinterest.com/pin/create/button/?" + shareUrl;
		openPintrestBox(pinUrl);
	});
	$("#thepowerofcare .twitter-share a").click(function () {
		var url = "http://ow.ly/BZnMO";
		var shareText = $("#thepowerofcare .edc-slides li").eq(powerOfCareSlide).data("share");
		var params = "url=" + encodeURIComponent(url) + "&text=" + encodeURIComponent(shareText);
		var tweetUrl = "http://twitter.com/share?" + params;
		openTweetBox(tweetUrl);
	});
	$("#thepowerofcare .facebook-share a").click(function () {
		var shareUrl = "http://" + document.domain + "/everydaycare/";
		var fbUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(shareUrl);
		openFBBox(fbUrl);
	});
	$("#thepowerofcare .pintrest-share a").click(function () {
		var url = " http://ow.ly/BZnMO";
		var shareImage = "http://" + document.domain + "/images/everydaycare/desktop/" + $("#thepowerofcare .edc-slides li").eq(powerOfCareSlide).data("pintrest");
		var shareText = $("#thepowerofcare .edc-slides li").eq(powerOfCareSlide).data("share");
		var shareUrl = "&media=" + encodeURIComponent(shareImage) + "&description=" + encodeURIComponent(shareText) + encodeURIComponent(url);
		var pinUrl = "http://www.pinterest.com/pin/create/button/?" + shareUrl;
		openPintrestBox(pinUrl);
	});
	$(".tweet-care a").click(function () {
		var url = "http://ow.ly/BZnSn";
		var params = "url=" + encodeURIComponent(url) + "&text=" + encodeURIComponent("#EveryDayCare @WhirlpoolUSA");
		var tweetUrl = "http://twitter.com/share?" + params;
		openTweetBox(tweetUrl);
	});
	$("#helpingfamiliesthrive .twitter-share a").click(function () {
		var url = "http://ow.ly/BZnZ4";
		var shareText = "#EveryDayCare takes more than just love. @WhirlpoolUSA & @Habitat_Org give families tools to thrive, and care.";
		var params = "url=" + encodeURIComponent(url) + "&text=" + encodeURIComponent(shareText);
		var tweetUrl = "http://twitter.com/share?" + params;
		openTweetBox(tweetUrl);
	});
	$("#helpingfamiliesthrive .facebook-share a").click(function () {
		var shareUrl = "http://" + document.domain + "/everydaycare/";
		var fbUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(shareUrl);
		openFBBox(fbUrl);
	});
	$("#helpingfamiliesthrive .pintrest-share a").click(function () {
		var shareImage = "http://" + document.domain + "/images/everydaycare/desktop/social-habitat-for-humanity.jpg";
		var shareText = "#EveryDayCare takes more than just love. @WhirlpoolUSA & @Habitat_Org give families tools to thrive, and care. http://ow.ly/BZnZ4";
		var shareUrl = "&media=" + encodeURIComponent(shareImage) + "&description=" + encodeURIComponent(shareText);
		var pinUrl = "http://www.pinterest.com/pin/create/button/?" + shareUrl;
		openPintrestBox(pinUrl);
	});
	$("#projectModal .pintrest-share a").click(function () {
		var shareUrl = "&media=" + encodeURIComponent("http://img.youtube.com/vi/sDz6fhesiIw/1.jpg") + "&description=" + encodeURIComponent("The simple acts of care we give can make the world a better place. @WhirlpoolUSA shows us how. #EveryDayCare http://ow.ly/BZnGc");
		var pinUrl = "http://www.pinterest.com/pin/create/button/?" + shareUrl;
		openPintrestBox(pinUrl);
	});
	$("#projectModal .facebook-share a").click(function () {
		var shareUrl = "https://www.youtube.com/watch?v=sDz6fhesiIw";
		var fbUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(shareUrl);
		openFBBox(fbUrl);
	});
	$("#projectModal .twitter-share a").click(function () {
		var url = "http://ow.ly/BZnGc";
		var shareText = "The simple acts of care we give can make the world a better place. @WhirlpoolUSA shows us how. #EveryDayCare";
		var params = "url=" + encodeURIComponent(url) + "&text=" + encodeURIComponent(shareText);
		var tweetUrl = "http://twitter.com/share?" + params;
		openTweetBox(tweetUrl);
	});
	$("#perceptionsModal .pintrest-share a").click(function () {
		var shareUrl = "&media=" + encodeURIComponent("http://img.youtube.com/vi/IR0iee8voiM/1.jpg") + "&description=" + encodeURIComponent("Caring for a family isn’t easy, but it’s worth it. Let your caregivers know how much they matter. #EveryDayCare @WhirlpoolUSA http://ow.ly/BZnGc");
		var pinUrl = "http://www.pinterest.com/pin/create/button/?" + shareUrl;
		openPintrestBox(pinUrl);
	});
	$("#perceptionsModal .facebook-share a").click(function () {
		var shareUrl = "https://www.youtube.com/watch?v=IR0iee8voiM";
		var fbUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(shareUrl);
		openFBBox(fbUrl);
	});
	$("#perceptionsModal .twitter-share a").click(function () {
		var url = "http://ow.ly/BZnGc";
		var shareText = "Caring for a family isn’t easy, but it’s worth it. Let your caregivers know how much they matter. #EveryDayCare";
		var params = "url=" + encodeURIComponent(url) + "&text=" + encodeURIComponent(shareText);
		var tweetUrl = "http://twitter.com/share?" + params;
		openTweetBox(tweetUrl);
	});
	$("#anthemModal .pintrest-share a").click(function () {
		var shareUrl = "&media=" + encodeURIComponent("http://img.youtube.com/vi/ZiV6L7d8CY4/1.jpg") + "&description=" + encodeURIComponent("@WhirlpoolUSA knows that #EveryDayCare isn’t always easy or fun, but it’s always worth it. Watch now. http://ow.ly/BZo6F");
		var pinUrl = "http://www.pinterest.com/pin/create/button/?" + shareUrl;
		openPintrestBox(pinUrl);
	});
	$("#anthemModal .facebook-share a").click(function () {
		var shareUrl = "https://www.youtube.com/watch?v=6Pqdds885pw";
		var fbUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(shareUrl);
		openFBBox(fbUrl);
	});
	$("#anthemModal .twitter-share a").click(function () {
		var url = "http://ow.ly/BZo6F";
		var shareText = "@WhirlpoolUSA knows that #EveryDayCare isn’t always easy or fun, but it’s always worth it. Watch now.";
		var params = "url=" + encodeURIComponent(url) + "&text=" + encodeURIComponent(shareText);
		var tweetUrl = "http://twitter.com/share?" + params;
		openTweetBox(tweetUrl);
	});
	if (GetIEVersion() > 0) {
		$("#socialWaterfall").empty();
		$(".view-social-feed a").prop("href", "http://everydaycaresocial.whirlpool.com/");
	}
});

function GetIEVersion() {
	var sAgent = window.navigator.userAgent;
	var Idx = sAgent.indexOf("MSIE");
	if (Idx > 0) {
		return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));
	} else {
		if ( !! navigator.userAgent.match(/Trident\/7\./)) {
			return 11;
		} else {
			return 0;
		}
	}
}
function openTweetBox(tweetUrl) {
	var newwindow = window.open(tweetUrl, "", "height=400,width=575");
	if (window.focus) {
		newwindow.focus();
	}
}
function openFBBox(fbUrl) {
	var newwindow = window.open(fbUrl, "", "height=400,width=575");
	if (window.focus) {
		newwindow.focus();
	}
}
function openPintrestBox(pinUrl) {
	var newwindow = window.open(pinUrl, "", "height=400,width=575");
	if (window.focus) {
		newwindow.focus();
	}
}
function closeNav() {
	if (!mouseOver) {
		$("#edcNavigation").animate({
			right: "-187"
		}, "slow", function () {
			$("#edcNavigation").removeClass("closing");
			$("#edcNavigation").removeClass("open");
		});
	}
}