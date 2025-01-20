(()=>{"use strict";var e,r,t,i={97986:(e,r,t)=>{var i=t(61338),o=t(85168),n=t(63814),a=t(53334);const l=(0,t(35947).YK)().setApp("files").detectUser().build();document.addEventListener("DOMContentLoaded",(function(){const e=window.OCA;e.UnifiedSearch&&(l.info("Initializing unified search plugin: folder search from files app"),e.UnifiedSearch.registerFilterAction({id:"files",appId:"files",label:(0,a.Tl)("files","In folder"),icon:(0,n.d0)("files","app.svg"),callback:()=>{(0,o.a1)("Pick plain text files").addMimeTypeFilter("httpd/unix-directory").allowDirectories(!0).addButton({label:"Pick",callback:e=>{l.info("Folder picked",{folder:e[0]});const r=e[0];(0,i.Ic)("nextcloud:unified-search:add-filter",{id:"files",payload:r,filterUpdateText:(0,a.Tl)("files","Search in folder: {folder}",{folder:r.basename}),filterParams:{path:r.path}})}}).build().pick()}}))}))}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var t=o[e]={id:e,loaded:!1,exports:{}};return i[e].call(t.exports,t,t.exports,n),t.loaded=!0,t.exports}n.m=i,e=[],n.O=(r,t,i,o)=>{if(!t){var a=1/0;for(s=0;s<e.length;s++){t=e[s][0],i=e[s][1],o=e[s][2];for(var l=!0,d=0;d<t.length;d++)(!1&o||a>=o)&&Object.keys(n.O).every((e=>n.O[e](t[d])))?t.splice(d--,1):(l=!1,o<a&&(a=o));if(l){e.splice(s--,1);var c=i();void 0!==c&&(r=c)}}return r}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[t,i,o]},n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((r,t)=>(n.f[t](e,r),r)),[])),n.u=e=>e+"-"+e+".js?v="+{5706:"3153330af47fc26a725a",5862:"7b9b02dc0a1b898066ef",6127:"cc7e4275204e7c2d643a"}[e],n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},t="nextcloud:",n.l=(e,i,o,a)=>{if(r[e])r[e].push(i);else{var l,d;if(void 0!==o)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var f=c[s];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==t+o){l=f;break}}l||(d=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+o),l.src=e),r[e]=[i];var u=(t,i)=>{l.onerror=l.onload=null,clearTimeout(p);var o=r[e];if(delete r[e],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(i))),t)return t(i)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=u.bind(null,l.onerror),l.onload=u.bind(null,l.onload),d&&document.head.appendChild(l)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.j=2277,(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var r=n.g.document;if(!e&&r&&(r.currentScript&&"SCRIPT"===r.currentScript.tagName.toUpperCase()&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var i=t.length-1;i>-1&&(!e||!/^http(s?):/.test(e));)e=t[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{n.b=document.baseURI||self.location.href;var e={2277:0};n.f.j=(r,t)=>{var i=n.o(e,r)?e[r]:void 0;if(0!==i)if(i)t.push(i[2]);else{var o=new Promise(((t,o)=>i=e[r]=[t,o]));t.push(i[2]=o);var a=n.p+n.u(r),l=new Error;n.l(a,(t=>{if(n.o(e,r)&&(0!==(i=e[r])&&(e[r]=void 0),i)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,i[1](l)}}),"chunk-"+r,r)}},n.O.j=r=>0===e[r];var r=(r,t)=>{var i,o,a=t[0],l=t[1],d=t[2],c=0;if(a.some((r=>0!==e[r]))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(d)var s=d(n)}for(r&&r(t);c<a.length;c++)o=a[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(s)},t=self.webpackChunknextcloud=self.webpackChunknextcloud||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),n.nc=void 0;var a=n.O(void 0,[4208],(()=>n(97986)));a=n.O(a)})();
//# sourceMappingURL=files-search.js.map?v=7d3b43c2ed593a1f0484