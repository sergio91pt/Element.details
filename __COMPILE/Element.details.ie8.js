(function(h,g){if(g=!(!g||!+g[1])){var f=function(){Object.defineProperty(m,"open",k);for(var a=document.getElementsByTagName("details"),b,c=-1;b=a[++c];)b.open=null!==b.getAttribute("open")},p=function(a,b){function c(){n.call(d,event)}if(a.a&&a.a.__isShimmed)return b;a.a||(a.a={});for(var d,e,f=-1;e=a.childNodes[++f];)3===e.nodeType&&/[^\t\n\r ]/.test(e.data)?(a.insertBefore(document.createElement("x-i"),e).innerHTML=e.data,a.removeChild(e)):"SUMMARY"==e.nodeName.toUpperCase()&&(d=e);d||((d=document.createElement("x-s")).innerHTML=
"Details",d.className="\u25bc\u25bc");a.insertBefore(d,a.childNodes[0]);d.insertBefore(document.createElement("x-i"),d.childNodes[0]).className="details-marker";d.tabIndex=0;d.attachEvent("onclick",c);d.attachEvent("onkeyup",c);a.a.__isShimmed=1;b="open"in a.attributes;Object.defineProperty(a,"open",k);b&&(a.removeAttribute("open"),a.setAttribute("OPEN","",1));return b},n=function(a){if(13===a.keyCode||"click"===a.type)this.parentNode.open=!this.parentNode.open};document.head.insertAdjacentHTML("beforeend",
"<br><style>details{display:block}details.\u25b6>*{display:none}details summary,details.\u25b6>summary,details>.\u25bc\u25bc{display:block}details.\u25b6 .details-marker:before{content:'\u25b6 '}details .details-marker:before{content:'\u25bc '}</style>");var l=h.Element||(h.Element={}),m=l.prototype||(l.prototype={}),k={get:function(){return"nodeName"in this&&"DETAILS"==this.nodeName.toUpperCase()?null!==this.getAttribute("OPEN"):void 0},set:function(a){if("nodeName"in this&&"DETAILS"==this.nodeName.toUpperCase()){a=
p(this,a);a:{var b=RegExp("(^|\\s)\u25b6(\\s|$)","g"),c=this.className;if(a)c=c.replace(b,"$1");else{if(b.test(c))break a;c+=" \u25b6"}this.className=c.replace(/\s+/g," ").replace(/(^ | $)/g,"")}a?this.setAttribute("OPEN","",1):this.removeAttribute("OPEN",1);return a}}};"complete"!=document.readyState?(void 0===document.readyState&&f(),document.addEventListener?document.addEventListener("DOMContentLoaded",f):window.attachEvent("onload",f)):f()}})(window,/msie (\d+)/i.exec(navigator.userAgent));