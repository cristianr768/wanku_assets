!function(){"use strict";function b(e,t,o,r){null==t&&(t="&"),null==o&&(o="="),null==r&&(r=window.decodeURIComponent);for(var n={},a=e.split(t),i=0,l=a.length;i<l;++i){var c,d=a[i];""!==d&&(n[r((c=d.split(o))[0])]=null!=c[1]?r(c.slice(1).join(o)):void 0)}return n}function m(e,t,o){e.addEventListener?e.addEventListener(t,o,!1):e.attachEvent("on"+t,o)}function c(e,t,o){e.removeEventListener?e.removeEventListener(t,o,!1):e.detachEvent("on"+t,o)}function d(t,o,r){var n=function(e){return c(t,o,n),r(e)};m(t,o,n)}function v(t,o,r){var n=function(e){if(o.test(t.readyState))return c(t,"readystatechange",n),r(e)};m(t,"readystatechange",n)}function w(d){return function(e,t,o){var r=d.createElement(e);if(t)for(var n in t){var a=t[n];null!=a&&(null!=r[n]?r[n]=a:r.setAttribute(n,a))}if(o)for(var i=0,l=o.length;i<l;i++){var c=o[i];r.appendChild("string"==typeof c?d.createTextNode(c):c)}return r}}function x(e){var t;return function(){t||(t=1,e.apply(this,arguments))}}function y(e,t){return{}.hasOwnProperty.call(e,t)}function k(e,t){return"@media(prefers-color-scheme:"+e+"){"+M[y(M,t)?t:e]+"}"}function r(e,t,r){var n=w(e.ownerDocument),o=e.appendChild(n("style",{type:"text/css"})),a="body{margin:0}a{text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:0;white-space:nowrap}.btn,.social-count{position:relative;display:inline-block;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;border:1px solid}.btn{border-radius:.25em}.btn:not(:last-child){border-radius:.25em 0 0 .25em}.social-count{border-left:0;border-radius:0 .25em .25em 0}.widget-lg .btn,.widget-lg .social-count{height:20px;padding:3px 10px;font-size:12px;line-height:20px}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor}"+function(e){if(null==e)return M.light;var t=b(e,";",":",function(e){return e.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g,"")});return M[y(M,t["no-preference"])?t["no-preference"]:"light"]+k("light",t.light)+k("dark",t.dark)}(t["data-color-scheme"]);o.styleSheet?o.styleSheet.cssText=a:o.appendChild(e.ownerDocument.createTextNode(a));var i,l,c=n("a",{className:"btn",href:t.href,target:"_blank",rel:"noopener",innerHTML:(i=t["data-icon"],l=/^large$/i.test(t["data-size"])?16:14,i=(""+i).toLowerCase().replace(/^octicon-/,""),y(H,i)||(i="mark-github"),'<svg viewBox="0 0 '+H[i].width+" "+H[i].height+'" class="octicon octicon-'+i+'" style="width: '+l*H[i].width/H[i].height+"px; height: "+l+'px;" aria-hidden="true">'+H[i].path+"</svg>"),"aria-label":t["aria-label"]||void 0},[" ",n("span",{},[t["data-text"]||""])]),d=e.appendChild(n("div",{className:"widget"+(/^large$/i.test(t["data-size"])?" widget-lg":"")},[c])),s=c.hostname.split(".").reverse();if(""===s[0]&&s.shift(),"com"!==s[0]||"github"!==s[1])return c.href="#",c.target="_self",void r(d);var h,u,f=s.length,g=(" /"+c.pathname).split(/\/+/);if(((2===f||3===f&&"gist"===s[2])&&"archive"===g[3]||2===f&&"releases"===g[3]&&"download"===g[4]||3===f&&"codeload"===s[2])&&(c.target="_top"),/^true$/i.test(t["data-show-count"])&&2===f){if(!g[2]&&g[1])h=u="followers";else if(!g[3]&&g[2])u="stargazers_count",h="stargazers";else if(g[4]||"subscription"!==g[3])if(g[4]||"fork"!==g[3]){if("issues"!==g[3])return void r(d);u="open_issues_count",h="issues"}else u="forks_count",h="network/members";else u="subscribers_count",h="watchers";var p=g[2]?"/repos/"+g[1]+"/"+g[2]:"/users/"+g[1];(function(e,t){var o,r,n,a,i,l=E[e]||(E[e]=[]);1<l.push(t)||(o=x(function(){for(delete E[e];t=l.shift();)t.apply(null,arguments)}),z?(r=new C,m(r,"abort",o),m(r,"error",o),m(r,"load",function(){var e;try{e=JSON.parse(r.responseText)}catch(e){return void o(e)}o(200!==r.status,e)}),r.open("GET",e),r.send()):((n=this||window)._=function(e){n._=null,o(200!==e.meta.status,e.data)},a=w(n.document)("script",{async:!0,src:e+(/\?/.test(e)?"&":"?")+"callback=_"}),m(a,"load",i=function(){n._&&n._({meta:{}})}),m(a,"error",i),a.readyState&&v(a,/de|m/,i),n.document.getElementsByTagName("head")[0].appendChild(a)))}).call(this,"https://api.github.com"+p,function(e,t){var o;e||(o=t[u],d.appendChild(n("a",{className:"social-count",href:t.html_url+"/"+h,target:"_blank",rel:"noopener","aria-label":o+" "+u.replace(/_count$/,"").replace("_"," ").slice(0,o<2?-1:void 0)+" on GitHub"},[(""+o).replace(/\B(?=(\d{3})+(?!\d))/g,",")]))),r(d)})}else r(d)}function s(e){return(1<i?f.ceil(f.round(e*i)/i*2)/2:f.ceil(e))||0}function h(e,t){e.style.width=t[0]+"px",e.style.height=t[1]+"px"}function n(a,i){var e,l,o;null!=a&&null!=i&&(a.getAttribute&&(a=function(e){for(var t={href:e.href,title:e.title,"aria-label":e.getAttribute("aria-label")},o=["icon","color-scheme","text","size","show-count"],r=0,n=o.length;r<n;r++){var a="data-"+o[r];t[a]=e.getAttribute(a)}return null==t["data-text"]&&(t["data-text"]=e.textContent||e.innerText),t}(a)),p?(e=F("span",{title:a.title||void 0}),r(e.attachShadow({mode:"closed"}),a,function(){i(e)})):(l=F("iframe",{src:"javascript:0",title:a.title||void 0,allowtransparency:!0,scrolling:"no",frameBorder:0}),h(l,[0,0]),l.style.border="none",o=function(){var e,t=l.contentWindow;try{e=t.document.body}catch(e){return void u.body.appendChild(l.parentNode.removeChild(l))}c(l,"load",o),r.call(t,e,a,function(e){var t,o,r,n=(o=e.offsetWidth,r=e.offsetHeight,e.getBoundingClientRect&&(t=e.getBoundingClientRect(),o=f.max(o,s(t.width)),r=f.max(r,s(t.height))),[o,r]);l.parentNode.removeChild(l),d(l,"load",function(){h(l,n)}),l.src=g+"#"+(l.name=function(e,t,o,r){null==t&&(t="&"),null==o&&(o="="),null==r&&(r=window.encodeURIComponent);var n=[];for(var a in e){var i=e[a];null!=i&&n.push(r(a)+o+r(i))}return n.join(t)}(a)),i(l)})},m(l,"load",o),u.body.appendChild(l)))}var e,t,u=window.document,o=u.location,f=window.Math,a=window.HTMLElement,C=window.XMLHttpRequest,g="https://buttons.github.io/buttons.html",z=C&&C.prototype&&"withCredentials"in C.prototype,p=z&&a&&a.prototype.attachShadow&&!a.prototype.attachShadow.prototype,F=w(u),M={light:".btn{color:#24292e;background-color:#eff3f6;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23fafbfc'/%3e%3cstop offset='90%25' stop-color='%23eff3f6'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #fafbfc, #eff3f6 90%);background-image:linear-gradient(180deg, #fafbfc, #eff3f6 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFFAFBFC', endColorstr='#FFEEF2F5');border-color:#cdcfd1;border-color:rgba(27,31,35,.2)}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#e6ebf1;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f0f3f6'/%3e%3cstop offset='90%25' stop-color='%23e6ebf1'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f0f3f6, #e6ebf1 90%);background-image:linear-gradient(180deg, #f0f3f6, #e6ebf1 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF0F3F6', endColorstr='#FFE5EAF0');background-position:-0.5em;border-color:#acaeb0;border-color:rgba(27,31,35,.35)}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#e9ecef;background-image:none;border-color:#acaeb0;border-color:rgba(27,31,35,.35);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);filter:none}.social-count{color:#24292e;background-color:#fff;border-color:#d1d2d3;border-color:rgba(27,31,35,.2)}.social-count:focus,.social-count:hover{color:#0366d6}.octicon-heart{color:#ea4aaa}",dark:".btn{color:#fafbfc;background-color:#202428;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%232f363d'/%3e%3cstop offset='90%25' stop-color='%23202428'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #2f363d, #202428 90%);background-image:linear-gradient(180deg, #2f363d, #202428 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF2F363D', endColorstr='#FF1E2226');border-color:#2b3138;border-color:rgba(27,31,35,.2)}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#1b1f23;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%232b3137'/%3e%3cstop offset='90%25' stop-color='%231b1f23'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #2b3137, #1b1f23 90%);background-image:linear-gradient(180deg, #2b3137, #1b1f23 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF2B3137', endColorstr='#FF191D21');background-position:-0.5em;border-color:#252b30;border-color:rgba(27,31,35,.5)}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#181b1f;background-image:none;border-color:#252b30;border-color:rgba(27,31,35,.5);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);filter:none}.social-count{color:#fafbfc;background-color:#1b1f23;border-color:#1b1f23;border-color:rgba(27,31,35,.2)}.social-count:focus,.social-count:hover{color:#2188ff}.octicon-heart{color:#ec6cb9}"},H={"mark-github":{width:16,height:16,path:'<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>'},heart:{width:12,height:16,path:'<path fill-rule="evenodd" d="M8.727 3C7.091 3 6.001 4.65 6.001 4.65S4.909 3 3.273 3C1.636 3 0 4.1 0 6.3 0 9.6 6 14 6 14s6-4.4 6-7.7C12 4.1 10.364 3 8.727 3z"/>'},eye:{width:16,height:16,path:'<path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/>'},star:{width:14,height:16,path:'<path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/>'},"repo-forked":{width:10,height:16,path:'<path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/>'},"repo-template":{width:14,height:16,path:'<path fill-rule="evenodd" d="M12 8V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v12c0 .55.45 1 1 1h2v2l1.5-1.5L6 16v-4H3v1H1v-2h7v-1H2V1h9v7h1zM4 2H3v1h1V2zM3 4h1v1H3V4zm1 2H3v1h1V6zm0 3H3V8h1v1zm6 3H8v2h2v2h2v-2h2v-2h-2v-2h-2v2z"/>'},"issue-opened":{width:14,height:16,path:'<path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/>'},"cloud-download":{width:16,height:16,path:'<path fill-rule="evenodd" d="M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z"/>'}},E={},i=window.devicePixelRatio||1;o.protocol+"//"+o.host+o.pathname==g?r(u.body,b(window.name||o.hash.replace(/^#/,"")),function(){}):(e=function(){for(var e=u.querySelectorAll?u.querySelectorAll("a.github-button"):function(){for(var e=[],t=u.getElementsByTagName("a"),o=0,r=t.length;o<r;o++)~(" "+t[o].className+" ").replace(/[ \t\n\f\r]+/g," ").indexOf(" github-button ")&&e.push(t[o]);return e}(),t=0,o=e.length;t<o;t++)!function(t){n(t,function(e){t.parentNode.replaceChild(e,t)})}(e[t])},/m/.test(u.readyState)||!/g/.test(u.readyState)&&!u.documentElement.doScroll?setTimeout(e):u.addEventListener?(t=x(e),d(u,"DOMContentLoaded",t),d(window,"load",t)):v(u,/m/,e))}();