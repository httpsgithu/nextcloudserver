(()=>{"use strict";var e,r,s,n={78628:(e,r,s)=>{var n=s(85471),o=s(67607),a=s(63814),i=s(65043),l=s(85168);const c=(0,s(35947).YK)().setApp("settings").detectUser().build(),u={name:"GroupSelect",components:{NcSelect:o.A},props:{availableGroups:{type:Array,default:()=>[]},setting:{type:Object,required:!0},authorizedGroups:{type:Array,required:!0}},data(){return{selected:this.authorizedGroups.filter((e=>e.class===this.setting.class)).map((e=>this.availableGroups.find((t=>t.gid===e.group_id)))).filter((e=>void 0!==e))}},watch:{selected(){this.saveGroups()}},methods:{async saveGroups(){const e={newGroups:this.selected,class:this.setting.class};try{await i.Ay.post((0,a.Jv)("/apps/settings/")+"/settings/authorizedgroups/saveSettings",e)}catch(e){(0,l.Qg)(t("settings","Unable to modify setting")),c.error("Unable to modify setting",e)}}}};var d=s(85072),p=s.n(d),g=s(97825),v=s.n(g),f=s(77659),h=s.n(f),b=s(55056),m=s.n(b),A=s(10540),y=s.n(A),C=s(41113),S=s.n(C),w=s(22530),k={};k.styleTagTransform=S(),k.setAttributes=m(),k.insert=h().bind(null,"head"),k.domAPI=v(),k.insertStyleElement=y(),p()(w.A,k),w.A&&w.A.locals&&w.A.locals;var O=s(14486);const G=(0,O.A)(u,(function(){var e=this;return(0,e._self._c)("NcSelect",{staticClass:"group-select",attrs:{"input-id":e.setting.id,placeholder:e.t("settings","None"),label:"displayName",options:e.availableGroups,multiple:!0,"close-on-select":!1},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})}),[],!1,null,null,null).exports;var x=s(88837),j=s(32981);const T={name:"AdminDelegating",components:{GroupSelect:G,NcSettingsSection:x.A},data:()=>({availableSettings:(0,j.C)("settings","available-settings"),availableGroups:(0,j.C)("settings","available-groups"),authorizedGroups:(0,j.C)("settings","authorized-groups"),authorizedSettingsDocLink:(0,j.C)("settings","authorized-settings-doc-link")})};var _=s(41165),N={};N.styleTagTransform=S(),N.setAttributes=m(),N.insert=h().bind(null,"head"),N.domAPI=v(),N.insertStyleElement=y(),p()(_.A,N),_.A&&_.A.locals&&_.A.locals;const z=(0,O.A)(T,(function(){var e=this,t=e._self._c;return t("NcSettingsSection",{attrs:{name:e.t("settings","Administration privileges"),description:e.t("settings","Here you can decide which group can access certain sections of the administration settings."),"doc-url":e.authorizedSettingsDocLink}},[t("div",{staticClass:"setting-list"},e._l(e.availableSettings,(function(r){return t("div",{key:r.class},[t("label",{attrs:{for:r.id}},[e._v(e._s(r.sectionName))]),e._v(" "),t("GroupSelect",{attrs:{"available-groups":e.availableGroups,"authorized-groups":e.authorizedGroups,setting:r}})],1)})),0)])}),[],!1,null,"9254bf50",null).exports;n.Ay.prototype.OC=OC,n.Ay.prototype.t=t,(new(n.Ay.extend(z))).$mount("#admin-right-sub-granting")},41165:(e,t,r)=>{r.d(t,{A:()=>i});var s=r(71354),n=r.n(s),o=r(76314),a=r.n(o)()(n());a.push([e.id,"label[data-v-9254bf50]{display:block;font-size:16px;margin:12px 0;color:var(--color-text-light)}","",{version:3,sources:["webpack://./apps/settings/src/components/AdminDelegating.vue"],names:[],mappings:"AACA,uBACC,aAAA,CACA,cAAA,CACA,aAAA,CACA,6BAAA",sourceRoot:""}]);const i=a},22530:(e,t,r)=>{r.d(t,{A:()=>i});var s=r(71354),n=r.n(s),o=r(76314),a=r.n(o)()(n());a.push([e.id,".group-select{width:100%}","",{version:3,sources:["webpack://./apps/settings/src/components/AdminDelegation/GroupSelect.vue"],names:[],mappings:"AACA,cACC,UAAA",sourceRoot:""}]);const i=a}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=n,e=[],a.O=(t,r,s,n)=>{if(!r){var o=1/0;for(u=0;u<e.length;u++){r=e[u][0],s=e[u][1],n=e[u][2];for(var i=!0,l=0;l<r.length;l++)(!1&n||o>=n)&&Object.keys(a.O).every((e=>a.O[e](r[l])))?r.splice(l--,1):(i=!1,n<o&&(o=n));if(i){e.splice(u--,1);var c=s();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[r,s,n]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>e+"-"+e+".js?v="+{802:"4fc65efe0f2d990c9ac5",9291:"077955af818a227340aa"}[e],a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},s="nextcloud:",a.l=(e,t,n,o)=>{if(r[e])r[e].push(t);else{var i,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==s+n){i=d;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",s+n),i.src=e),r[e]=[t];var p=(t,s)=>{i.onerror=i.onload=null,clearTimeout(g);var n=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(s))),t)return t(s)},g=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),a.j=9464,(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var s=r.length-1;s>-1&&(!e||!/^http(s?):/.test(e));)e=r[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{a.b=document.baseURI||self.location.href;var e={9464:0};a.f.j=(t,r)=>{var s=a.o(e,t)?e[t]:void 0;if(0!==s)if(s)r.push(s[2]);else{var n=new Promise(((r,n)=>s=e[t]=[r,n]));r.push(s[2]=n);var o=a.p+a.u(t),i=new Error;a.l(o,(r=>{if(a.o(e,t)&&(0!==(s=e[t])&&(e[t]=void 0),s)){var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,s[1](i)}}),"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,r)=>{var s,n,o=r[0],i=r[1],l=r[2],c=0;if(o.some((t=>0!==e[t]))){for(s in i)a.o(i,s)&&(a.m[s]=i[s]);if(l)var u=l(a)}for(t&&t(r);c<o.length;c++)n=o[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},r=self.webpackChunknextcloud=self.webpackChunknextcloud||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),a.nc=void 0;var i=a.O(void 0,[4208],(()=>a(78628)));i=a.O(i)})();
//# sourceMappingURL=settings-vue-settings-admin-delegation.js.map?v=63b45372a30b05b4c83b