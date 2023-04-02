import{_ as Q,o as ee,c as ae,x as E,r as te,a2 as ne,a3 as re,t as ie}from"./framework.60eba898.js";var V=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N={},se={get exports(){return N},set exports(x){N=x}};(function(x){var D=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var i=function(o){var g=/\blang(?:uage)?-([\w-]+)\b/i,f=0,w={},s={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function a(e){return e instanceof b?new b(e.type,a(e.content),e.alias):Array.isArray(e)?e.map(a):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(a){return Object.prototype.toString.call(a).slice(8,-1)},objId:function(a){return a.__id||Object.defineProperty(a,"__id",{value:++f}),a.__id},clone:function a(e,n){n=n||{};var r,t;switch(s.util.type(e)){case"Object":if(t=s.util.objId(e),n[t])return n[t];r={},n[t]=r;for(var l in e)e.hasOwnProperty(l)&&(r[l]=a(e[l],n));return r;case"Array":return t=s.util.objId(e),n[t]?n[t]:(r=[],n[t]=r,e.forEach(function(c,u){r[u]=a(c,n)}),r);default:return e}},getLanguage:function(a){for(;a&&!g.test(a.className);)a=a.parentElement;return a?(a.className.match(g)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(r){var a=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(a){var e=document.getElementsByTagName("script");for(var n in e)if(e[n].src==a)return e[n]}return null}},isActive:function(a,e,n){for(var r="no-"+e;a;){var t=a.classList;if(t.contains(e))return!0;if(t.contains(r))return!1;a=a.parentElement}return!!n}},languages:{plain:w,plaintext:w,text:w,txt:w,extend:function(a,e){var n=s.util.clone(s.languages[a]);for(var r in e)n[r]=e[r];return n},insertBefore:function(a,e,n,r){r=r||s.languages;var t=r[a],l={};for(var c in t)if(t.hasOwnProperty(c)){if(c==e)for(var u in n)n.hasOwnProperty(u)&&(l[u]=n[u]);n.hasOwnProperty(c)||(l[c]=t[c])}var h=r[a];return r[a]=l,s.languages.DFS(s.languages,function(v,k){k===h&&v!=a&&(this[v]=l)}),l},DFS:function a(e,n,r,t){t=t||{};var l=s.util.objId;for(var c in e)if(e.hasOwnProperty(c)){n.call(e,c,e[c],r||c);var u=e[c],h=s.util.type(u);h==="Object"&&!t[l(u)]?(t[l(u)]=!0,a(u,n,null,t)):h==="Array"&&!t[l(u)]&&(t[l(u)]=!0,a(u,n,c,t))}}},plugins:{},highlightAll:function(a,e){s.highlightAllUnder(document,a,e)},highlightAllUnder:function(a,e,n){var r={callback:n,container:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),s.hooks.run("before-all-elements-highlight",r);for(var t=0,l;l=r.elements[t++];)s.highlightElement(l,e===!0,r.callback)},highlightElement:function(a,e,n){var r=s.util.getLanguage(a),t=s.languages[r];a.className=a.className.replace(g,"").replace(/\s+/g," ")+" language-"+r;var l=a.parentElement;l&&l.nodeName.toLowerCase()==="pre"&&(l.className=l.className.replace(g,"").replace(/\s+/g," ")+" language-"+r);var c=a.textContent,u={element:a,language:r,grammar:t,code:c};function h(k){u.highlightedCode=k,s.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,s.hooks.run("after-highlight",u),s.hooks.run("complete",u),n&&n.call(u.element)}if(s.hooks.run("before-sanity-check",u),l=u.element.parentElement,l&&l.nodeName.toLowerCase()==="pre"&&!l.hasAttribute("tabindex")&&l.setAttribute("tabindex","0"),!u.code){s.hooks.run("complete",u),n&&n.call(u.element);return}if(s.hooks.run("before-highlight",u),!u.grammar){h(s.util.encode(u.code));return}if(e&&o.Worker){var v=new Worker(s.filename);v.onmessage=function(k){h(k.data)},v.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else h(s.highlight(u.code,u.grammar,u.language))},highlight:function(a,e,n){var r={code:a,grammar:e,language:n};return s.hooks.run("before-tokenize",r),r.tokens=s.tokenize(r.code,r.grammar),s.hooks.run("after-tokenize",r),b.stringify(s.util.encode(r.tokens),r.language)},tokenize:function(a,e){var n=e.rest;if(n){for(var r in n)e[r]=n[r];delete e.rest}var t=new T;return _(t,t.head,a),I(a,t,e,t.head,0),L(t)},hooks:{all:{},add:function(a,e){var n=s.hooks.all;n[a]=n[a]||[],n[a].push(e)},run:function(a,e){var n=s.hooks.all[a];if(!(!n||!n.length))for(var r=0,t;t=n[r++];)t(e)}},Token:b};o.Prism=s;function b(a,e,n,r){this.type=a,this.content=e,this.alias=n,this.length=(r||"").length|0}b.stringify=function a(e,n){if(typeof e=="string")return e;if(Array.isArray(e)){var r="";return e.forEach(function(h){r+=a(h,n)}),r}var t={type:e.type,content:a(e.content,n),tag:"span",classes:["token",e.type],attributes:{},language:n},l=e.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(t.classes,l):t.classes.push(l)),s.hooks.run("wrap",t);var c="";for(var u in t.attributes)c+=" "+u+'="'+(t.attributes[u]||"").replace(/"/g,"&quot;")+'"';return"<"+t.tag+' class="'+t.classes.join(" ")+'"'+c+">"+t.content+"</"+t.tag+">"};function C(a,e,n,r){a.lastIndex=e;var t=a.exec(n);if(t&&r&&t[1]){var l=t[1].length;t.index+=l,t[0]=t[0].slice(l)}return t}function I(a,e,n,r,t,l){for(var c in n)if(!(!n.hasOwnProperty(c)||!n[c])){var u=n[c];u=Array.isArray(u)?u:[u];for(var h=0;h<u.length;++h){if(l&&l.cause==c+","+h)return;var v=u[h],k=v.inside,R=!!v.lookbehind,U=!!v.greedy,X=v.alias;if(U&&!v.pattern.global){var Y=v.pattern.toString().match(/[imsuy]*$/)[0];v.pattern=RegExp(v.pattern.source,Y+"g")}for(var Z=v.pattern||v,m=r.next,F=t;m!==e.tail&&!(l&&F>=l.reach);F+=m.value.length,m=m.next){var $=m.value;if(e.length>a.length)return;if(!($ instanceof b)){var O=1,A;if(U){if(A=C(Z,F,a,R),!A)break;var M=A.index,J=A.index+A[0].length,S=F;for(S+=m.value.length;M>=S;)m=m.next,S+=m.value.length;if(S-=m.value.length,F=S,m.value instanceof b)continue;for(var P=m;P!==e.tail&&(S<J||typeof P.value=="string");P=P.next)O++,S+=P.value.length;O--,$=a.slice(F,S),A.index-=F}else if(A=C(Z,0,$,R),!A)continue;var M=A.index,j=A[0],B=$.slice(0,M),W=$.slice(M+j.length),G=F+$.length;l&&G>l.reach&&(l.reach=G);var q=m.prev;B&&(q=_(e,q,B),F+=B.length),z(e,q,O);var K=new b(c,k?s.tokenize(j,k):j,X,j);if(m=_(e,q,K),W&&_(e,m,W),O>1){var H={cause:c+","+h,reach:G};I(a,e,n,m.prev,F,H),l&&H.reach>l.reach&&(l.reach=H.reach)}}}}}}function T(){var a={value:null,prev:null,next:null},e={value:null,prev:a,next:null};a.next=e,this.head=a,this.tail=e,this.length=0}function _(a,e,n){var r=e.next,t={value:n,prev:e,next:r};return e.next=t,r.prev=t,a.length++,t}function z(a,e,n){for(var r=e.next,t=0;t<n&&r!==a.tail;t++)r=r.next;e.next=r,r.prev=e,a.length-=t}function L(a){for(var e=[],n=a.head.next;n!==a.tail;)e.push(n.value),n=n.next;return e}if(!o.document)return o.addEventListener&&(s.disableWorkerMessageHandler||o.addEventListener("message",function(a){var e=JSON.parse(a.data),n=e.language,r=e.code,t=e.immediateClose;o.postMessage(s.highlight(r,s.languages[n],n)),t&&o.close()},!1)),s;var d=s.util.currentScript();d&&(s.filename=d.src,d.hasAttribute("data-manual")&&(s.manual=!0));function p(){s.manual||s.highlightAll()}if(!s.manual){var y=document.readyState;y==="loading"||y==="interactive"&&d&&d.defer?document.addEventListener("DOMContentLoaded",p):window.requestAnimationFrame?window.requestAnimationFrame(p):window.setTimeout(p,16)}return s}(D);x.exports&&(x.exports=i),typeof V<"u"&&(V.Prism=i),i.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},i.languages.markup.tag.inside["attr-value"].inside.entity=i.languages.markup.entity,i.languages.markup.doctype.inside["internal-subset"].inside=i.languages.markup,i.hooks.add("wrap",function(o){o.type==="entity"&&(o.attributes.title=o.content.replace(/&amp;/,"&"))}),Object.defineProperty(i.languages.markup.tag,"addInlined",{value:function(g,f){var w={};w["language-"+f]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:i.languages[f]},w.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:w}};s["language-"+f]={pattern:/[\s\S]+/,inside:i.languages[f]};var b={};b[g]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return g}),"i"),lookbehind:!0,greedy:!0,inside:s},i.languages.insertBefore("markup","cdata",b)}}),Object.defineProperty(i.languages.markup.tag,"addAttribute",{value:function(o,g){i.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+o+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[g,"language-"+g],inside:i.languages[g]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),i.languages.html=i.languages.markup,i.languages.mathml=i.languages.markup,i.languages.svg=i.languages.markup,i.languages.xml=i.languages.extend("markup",{}),i.languages.ssml=i.languages.xml,i.languages.atom=i.languages.xml,i.languages.rss=i.languages.xml,function(o){var g=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;o.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+g.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+g.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+g.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:g,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},o.languages.css.atrule.inside.rest=o.languages.css;var f=o.languages.markup;f&&(f.tag.addInlined("style","css"),f.tag.addAttribute("style","css"))}(i),i.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},i.languages.javascript=i.languages.extend("clike",{"class-name":[i.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),i.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,i.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:i.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:i.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:i.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:i.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:i.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),i.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:i.languages.javascript}},string:/[\s\S]+/}}}),i.languages.markup&&(i.languages.markup.tag.addInlined("script","javascript"),i.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),i.languages.js=i.languages.javascript,function(){if(typeof i>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var o="Loading…",g=function(d,p){return"✖ Error "+d+" while fetching file: "+p},f="✖ Error: File does not exist or is empty",w={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",b="loading",C="loaded",I="failed",T="pre[data-src]:not(["+s+'="'+C+'"]):not(['+s+'="'+b+'"])',_=/\blang(?:uage)?-([\w-]+)\b/i;function z(d,p){var y=d.className;y=y.replace(_," ")+" language-"+p,d.className=y.replace(/\s+/g," ").trim()}i.hooks.add("before-highlightall",function(d){d.selector+=", "+T}),i.hooks.add("before-sanity-check",function(d){var p=d.element;if(p.matches(T)){d.code="",p.setAttribute(s,b);var y=p.appendChild(document.createElement("CODE"));y.textContent=o;var a=p.getAttribute("data-src"),e=d.language;if(e==="none"){var n=(/\.(\w+)$/.exec(a)||[,"none"])[1];e=w[n]||n}z(y,e),z(p,e);var r=i.plugins.autoloader;r&&r.loadLanguages(e);var t=new XMLHttpRequest;t.open("GET",a,!0),t.onreadystatechange=function(){t.readyState==4&&(t.status<400&&t.responseText?(p.setAttribute(s,C),y.textContent=t.responseText,i.highlightElement(y)):(p.setAttribute(s,I),t.status>=400?y.textContent=g(t.status,t.statusText):y.textContent=f))},t.send(null)}}),i.plugins.fileHighlight={highlight:function(p){for(var y=(p||document).querySelectorAll(T),a=0,e;e=y[a++];)i.highlightElement(e)}};var L=!1;i.fileHighlight=function(){L||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),L=!0),i.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(se);const le=N;const ue={props:{compName:{type:String,default:"",require:!0},demoName:{type:String,default:"",require:!0}},data(){return{sourceCode:"",codeVisible:!1}},computed:{previewSourceCode(){return this.sourceCode.replace(/'\.\.\/\.\.\/index'/g,"'@tencent/my-kit'")}},async mounted(){this.compName&&this.demoName&&(this.sourceCode=await fetch(`/istar/packages/${this.compName}/docs/${this.demoName}.vue`).then(x=>x.text())),await this.$nextTick(),le.highlightAll()},methods:{async copyCode(){},showSourceCode(){this.codeVisible=!this.codeVisible}}},oe={class:"mykit-preview"},ce={class:"source-code"},ge={class:"language-html"},de={class:"language-html"},pe={class:"preview-bottom"};function fe(x,D,i,o,g,f){return ee(),ae("div",oe,[E("section",null,[te(x.$slots,"default")]),ne(E("div",ce,[E("pre",ge,[E("code",de,ie(f.previewSourceCode),1)])],512),[[re,g.codeVisible]]),E("div",pe,[E("span",{name:"Code",onClick:D[0]||(D[0]=(...w)=>f.showSourceCode&&f.showSourceCode(...w))},"查看代码")])])}const ve=Q(ue,[["render",fe]]);export{ve as P};
