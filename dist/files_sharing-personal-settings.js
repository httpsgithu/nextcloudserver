(()=>{"use strict";var e,r,a,s={30698:(e,r,a)=>{var s=a(21777),o=a(85471),n=a(63814),i=a(32981),l=a(85168),c=a(65043),d=a(43627),p=a.n(d),u=a(82182);const f=(0,i.C)("files_sharing","default_share_folder","/"),h=(0,i.C)("files_sharing","share_folder",f),g={name:"SelectShareFolderDialogue",components:{NcTextField:u.A},data:()=>({directory:h,defaultDirectory:f}),computed:{readableDirectory(){return this.directory?this.directory:"/"}},methods:{async pickFolder(){const e=(0,l.a1)(t("files_sharing","Choose a default folder for accepted shares")).startAt(this.readableDirectory).setMultiSelect(!1).setType(1).setMimeTypeFilter(["httpd/unix-directory"]).allowDirectories().build();try{const r=await e.pick()||"/";if(!r.startsWith("/"))throw new Error(t("files_sharing","Invalid path selected"));this.directory=p().normalize(r),await c.Ay.put((0,n.Jv)("/apps/files_sharing/settings/shareFolder"),{shareFolder:this.directory})}catch(e){(0,l.Qg)(e.message||t("files_sharing","Unknown error"))}},resetFolder(){this.directory=this.defaultDirectory,c.Ay.delete((0,n.Jv)("/apps/files_sharing/settings/shareFolder"))}}};var A=a(85072),v=a.n(A),m=a(97825),y=a.n(m),b=a(77659),_=a.n(b),C=a(55056),w=a.n(C),k=a(10540),S=a.n(k),x=a(41113),D=a.n(x),T=a(74276),E={};E.styleTagTransform=D(),E.setAttributes=w(),E.insert=_().bind(null,"head"),E.domAPI=y(),E.insertStyleElement=S(),v()(T.A,E),T.A&&T.A.locals&&T.A.locals;var F=a(14486);const P={name:"PersonalSettings",components:{SelectShareFolderDialogue:(0,F.A)(g,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"share-folder"},[t("form",{staticClass:"share-folder__form",on:{reset:function(t){return t.preventDefault(),t.stopPropagation(),e.resetFolder.apply(null,arguments)}}},[t("NcTextField",{staticClass:"share-folder__picker",attrs:{type:"text",label:e.t("files_sharing","Set default folder for accepted shares"),value:e.readableDirectory},on:{click:function(t){return t.preventDefault(),e.pickFolder.apply(null,arguments)}}}),e._v(" "),e.readableDirectory!==e.defaultDirectory?t("input",{staticClass:"share-folder__reset",attrs:{type:"reset","aria-label":e.t("files_sharing","Reset folder to system default")},domProps:{value:e.t("files_sharing","Reset")}}):e._e()],1)])}),[],!1,null,"e9880b0c",null).exports},data:()=>({accepting:(0,i.C)("files_sharing","accept_default"),enforceAcceptShares:(0,i.C)("files_sharing","enforce_accept"),allowCustomDirectory:(0,i.C)("files_sharing","allow_custom_share_folder")}),methods:{async toggleEnabled(){try{await c.Ay.put((0,n.Jv)("/apps/files_sharing/settings/defaultAccept"),{accept:this.accepting})}catch(e){(0,l.Qg)(t("files_sharing","Error while toggling options")),console.error(e)}}}};var O=a(21281),j={};j.styleTagTransform=D(),j.setAttributes=w(),j.insert=_().bind(null,"head"),j.domAPI=y(),j.insertStyleElement=S(),v()(O.A,j),O.A&&O.A.locals&&O.A.locals;const B=(0,F.A)(P,(function(){var e=this,t=e._self._c;return!e.enforceAcceptShares||e.allowCustomDirectory?t("div",{staticClass:"section",attrs:{id:"files-sharing-personal-settings"}},[t("h2",[e._v(e._s(e.t("files_sharing","Sharing")))]),e._v(" "),e.enforceAcceptShares?e._e():t("p",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.accepting,expression:"accepting"}],staticClass:"checkbox",attrs:{id:"files-sharing-personal-settings-accept",type:"checkbox"},domProps:{checked:Array.isArray(e.accepting)?e._i(e.accepting,null)>-1:e.accepting},on:{change:[function(t){var r=e.accepting,a=t.target,s=!!a.checked;if(Array.isArray(r)){var o=e._i(r,null);a.checked?o<0&&(e.accepting=r.concat([null])):o>-1&&(e.accepting=r.slice(0,o).concat(r.slice(o+1)))}else e.accepting=s},e.toggleEnabled]}}),e._v(" "),t("label",{attrs:{for:"files-sharing-personal-settings-accept"}},[e._v(e._s(e.t("files_sharing","Accept shares from other accounts and groups by default")))])]),e._v(" "),e.allowCustomDirectory?t("p",[t("SelectShareFolderDialogue")],1):e._e()]):e._e()}),[],!1,null,"c1026fac",null).exports;a.nc=(0,s.aV)(),o.Ay.prototype.t=t,(new(o.Ay.extend(B))).$mount("#files-sharing-personal-settings")},21281:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(71354),s=r.n(a),o=r(76314),n=r.n(o)()(s());n.push([e.id,"p[data-v-c1026fac]{margin-top:12px;margin-bottom:12px}","",{version:3,sources:["webpack://./apps/files_sharing/src/components/PersonalSettings.vue"],names:[],mappings:"AACA,mBACC,eAAA,CACA,kBAAA",sourceRoot:""}]);const i=n},74276:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(71354),s=r.n(a),o=r(76314),n=r.n(o)()(s());n.push([e.id,".share-folder__form[data-v-e9880b0c]{display:flex}.share-folder__picker[data-v-e9880b0c]{cursor:pointer;max-width:300px}.share-folder__reset[data-v-e9880b0c]{background-color:rgba(0,0,0,0);border:none;font-weight:normal;text-decoration:underline;font-size:inherit}","",{version:3,sources:["webpack://./apps/files_sharing/src/components/SelectShareFolderDialogue.vue"],names:[],mappings:"AAEC,qCACC,YAAA,CAGD,uCACC,cAAA,CACA,eAAA,CAID,sCACC,8BAAA,CACA,WAAA,CACA,kBAAA,CACA,yBAAA,CACA,iBAAA",sourceRoot:""}]);const i=n}},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={id:e,loaded:!1,exports:{}};return s[e].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=s,e=[],n.O=(t,r,a,s)=>{if(!r){var o=1/0;for(d=0;d<e.length;d++){r=e[d][0],a=e[d][1],s=e[d][2];for(var i=!0,l=0;l<r.length;l++)(!1&s||o>=s)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(i=!1,s<o&&(o=s));if(i){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[r,a,s]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>e+"-"+e+".js?v="+{5706:"3153330af47fc26a725a",6127:"b055457abcc483481183"}[e],n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},a="nextcloud:",n.l=(e,t,s,o)=>{if(r[e])r[e].push(t);else{var i,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var p=c[d];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==a+s){i=p;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",a+s),i.src=e),r[e]=[t];var u=(t,a)=>{i.onerror=i.onload=null,clearTimeout(f);var s=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),s&&s.forEach((e=>e(a))),t)return t(a)},f=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),l&&document.head.appendChild(i)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.j=1376,(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{n.b=document.baseURI||self.location.href;var e={1376:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var s=new Promise(((r,s)=>a=e[t]=[r,s]));r.push(a[2]=s);var o=n.p+n.u(t),i=new Error;n.l(o,(r=>{if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var s=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",i.name="ChunkLoadError",i.type=s,i.request=o,a[1](i)}}),"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,r)=>{var a,s,o=r[0],i=r[1],l=r[2],c=0;if(o.some((t=>0!==e[t]))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(l)var d=l(n)}for(t&&t(r);c<o.length;c++)s=o[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(d)},r=self.webpackChunknextcloud=self.webpackChunknextcloud||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0;var i=n.O(void 0,[4208],(()=>n(30698)));i=n.O(i)})();
//# sourceMappingURL=files_sharing-personal-settings.js.map?v=c164b1f75cb98e2fe36e