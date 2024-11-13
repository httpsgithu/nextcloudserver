(()=>{"use strict";var e,r,s,n={93096:(e,r,s)=>{var n=s(85471),i=s(21777),a=s(65043),o=s(17334),l=s.n(o),c=s(63814),d=s(85168),u=s(67607),p=s(18740);const f=(0,s(35947).YK)().setApp("files").detectUser().build(),h=(0,d.a1)(t("files","Choose a file or folder to transfer")).setMultiSelect(!1).setType(1).allowDirectories().build(),g={name:"TransferOwnershipDialogue",components:{NcSelect:u.A,NcButton:p.A},data:()=>({directory:void 0,directoryPickerError:void 0,submitError:void 0,loadingUsers:!1,selectedUser:null,userSuggestions:{},config:{minSearchStringLength:parseInt(OC.config["sharing.minSearchStringLength"],10)||0}}),computed:{canSubmit(){return!!this.directory&&!!this.selectedUser},formatedUserSuggestions(){return Object.keys(this.userSuggestions).map((e=>{const t=this.userSuggestions[e];return{user:t.uid,displayName:t.displayName,icon:"icon-user"}}))},submitButtonText(){if(!this.canSubmit)return t("files","Transfer");const e=this.readableDirectory.split("/");return t("files","Transfer {path} to {userid}",{path:e[e.length-1],userid:this.selectedUser.displayName})},readableDirectory(){return this.directory?this.directory.substring(1):""}},created(){this.findUserDebounced=l()(this.findUser,300),this.findUser("")},methods:{start(){this.directoryPickerError=void 0,h.pick().then((e=>""===e?"/":e)).then((e=>{if(f.debug(`path ${e} selected for transferring ownership`),!e.startsWith("/"))throw new Error(t("files","Invalid path selected"));this.directory=e})).catch((e=>{f.error(`Selecting object for transfer aborted: ${e.message||"Unknown error"}`,{error:e}),this.directoryPickerError=e.message||t("files","Unknown error"),(0,d.Qg)(this.directoryPickerError)}))},async findUser(e){if(this.query=e.trim(),!(e.length<this.config.minSearchStringLength)){this.loadingUsers=!0;try{const t=await a.Ay.get((0,c.KT)("apps/files_sharing/api/v1/sharees"),{params:{format:"json",itemType:"file",search:e,perPage:20,lookup:!1}});this.userSuggestions={},t.data.ocs.data.exact.users.concat(t.data.ocs.data.users).forEach((e=>{n.Ay.set(this.userSuggestions,e.value.shareWith,{uid:e.value.shareWith,displayName:e.label})}))}catch(e){f.error("could not fetch users",{error:e})}finally{this.loadingUsers=!1}}},submit(){this.canSubmit||f.warn("ignoring form submit"),this.submitError=void 0;const e={path:this.directory,recipient:this.selectedUser.user};f.debug("submit transfer ownership form",e);const r=(0,c.KT)("apps/files/api/v1/transferownership");a.Ay.post(r,e).then((e=>e.data)).then((e=>{f.info("Transfer ownership request sent",{data:e}),this.directory=void 0,this.selectedUser=null,(0,d.Te)(t("files","Ownership transfer request sent"))})).catch((e=>{f.error("Could not send ownership transfer request",{error:e}),this.submitError=403===e?.response?.status?t("files","Cannot transfer ownership of a file or folder you do not own"):e.message||t("files","Unknown error"),(0,d.Qg)(this.submitError)}))}}};var m=s(85072),A=s.n(m),v=s(97825),b=s.n(v),y=s(77659),w=s.n(y),C=s(55056),_=s.n(C),S=s(10540),k=s.n(S),U=s(41113),x=s.n(U),T=s(284),E={};E.styleTagTransform=x(),E.setAttributes=_(),E.insert=w().bind(null,"head"),E.domAPI=b(),E.insertStyleElement=k(),A()(T.A,E),T.A&&T.A.locals&&T.A.locals;var O=s(14486);const D={name:"PersonalSettings",components:{TransferOwnershipDialogue:(0,O.A)(g,(function(){var e=this,t=e._self._c;return t("div",[t("h3",[e._v(e._s(e.t("files","Transfer ownership of a file or folder"))+" ")]),e._v(" "),t("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("p",{staticClass:"transfer-select-row"},[t("span",[e._v(e._s(e.readableDirectory))]),e._v(" "),void 0===e.directory?t("NcButton",{staticClass:"transfer-select-row__choose_button",on:{click:function(t){return t.preventDefault(),e.start.apply(null,arguments)}}},[e._v("\n\t\t\t\t"+e._s(e.t("files","Choose file or folder to transfer"))+"\n\t\t\t")]):t("NcButton",{on:{click:function(t){return t.preventDefault(),e.start.apply(null,arguments)}}},[e._v("\n\t\t\t\t"+e._s(e.t("files","Change"))+"\n\t\t\t")])],1),e._v(" "),t("p",{staticClass:"new-owner-row"},[t("label",{attrs:{for:"targetUser"}},[t("span",[e._v(e._s(e.t("files","New owner")))])]),e._v(" "),t("NcSelect",{staticClass:"middle-align",attrs:{"input-id":"targetUser",options:e.formatedUserSuggestions,multiple:!1,loading:e.loadingUsers,label:"displayName","user-select":!0},on:{search:e.findUserDebounced},model:{value:e.selectedUser,callback:function(t){e.selectedUser=t},expression:"selectedUser"}})],1),e._v(" "),t("p",[t("NcButton",{attrs:{"native-type":"submit",type:"primary",disabled:!e.canSubmit}},[e._v("\n\t\t\t\t"+e._s(e.submitButtonText)+"\n\t\t\t")])],1)])])}),[],!1,null,"6861d69a",null).exports}},N=(0,O.A)(D,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"section",attrs:{id:"files-personal-settings"}},[t("h2",[e._v(e._s(e.t("files","Files")))]),e._v(" "),t("TransferOwnershipDialogue")],1)}),[],!1,null,null,null).exports;s.nc=(0,i.aV)(),n.Ay.prototype.t=t,(new(n.Ay.extend(N))).$mount("#files-personal-settings")},284:(e,t,r)=>{r.d(t,{A:()=>o});var s=r(71354),n=r.n(s),i=r(76314),a=r.n(i)()(n());a.push([e.id,".middle-align[data-v-6861d69a]{vertical-align:middle}p[data-v-6861d69a]{margin-top:12px;margin-bottom:12px}.new-owner-row[data-v-6861d69a]{display:flex;flex-wrap:wrap}.new-owner-row label[data-v-6861d69a]{display:flex;align-items:center;margin-bottom:calc(var(--default-grid-baseline)*2)}.new-owner-row label span[data-v-6861d69a]{margin-inline-end:8px}.new-owner-row .multiselect[data-v-6861d69a]{flex-grow:1;max-width:280px}.transfer-select-row span[data-v-6861d69a]{margin-inline-end:8px}.transfer-select-row__choose_button[data-v-6861d69a]{width:min(100%,400px) !important}","",{version:3,sources:["webpack://./apps/files/src/components/TransferOwnershipDialogue.vue"],names:[],mappings:"AACA,+BACC,qBAAA,CAED,mBACC,eAAA,CACA,kBAAA,CAED,gCACC,YAAA,CACA,cAAA,CAEA,sCACC,YAAA,CACA,kBAAA,CACA,kDAAA,CAEA,2CACC,qBAAA,CAIF,6CACC,WAAA,CACA,eAAA,CAID,2CACC,qBAAA,CAGD,qDACC,gCAAA",sourceRoot:""}]);const o=a}},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=n,e=[],a.O=(t,r,s,n)=>{if(!r){var i=1/0;for(d=0;d<e.length;d++){r=e[d][0],s=e[d][1],n=e[d][2];for(var o=!0,l=0;l<r.length;l++)(!1&n||i>=n)&&Object.keys(a.O).every((e=>a.O[e](r[l])))?r.splice(l--,1):(o=!1,n<i&&(i=n));if(o){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[r,s,n]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>e+"-"+e+".js?v="+{5706:"3153330af47fc26a725a",6127:"99ec308b98ff27921578"}[e],a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},s="nextcloud:",a.l=(e,t,n,i)=>{if(r[e])r[e].push(t);else{var o,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==s+n){o=u;break}}o||(l=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",s+n),o.src=e),r[e]=[t];var p=(t,s)=>{o.onerror=o.onload=null,clearTimeout(f);var n=r[e];if(delete r[e],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((e=>e(s))),t)return t(s)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=p.bind(null,o.onerror),o.onload=p.bind(null,o.onload),l&&document.head.appendChild(o)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),a.j=5671,(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var s=r.length-1;s>-1&&(!e||!/^http(s?):/.test(e));)e=r[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{a.b=document.baseURI||self.location.href;var e={5671:0};a.f.j=(t,r)=>{var s=a.o(e,t)?e[t]:void 0;if(0!==s)if(s)r.push(s[2]);else{var n=new Promise(((r,n)=>s=e[t]=[r,n]));r.push(s[2]=n);var i=a.p+a.u(t),o=new Error;a.l(i,(r=>{if(a.o(e,t)&&(0!==(s=e[t])&&(e[t]=void 0),s)){var n=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;o.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",o.name="ChunkLoadError",o.type=n,o.request=i,s[1](o)}}),"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,r)=>{var s,n,i=r[0],o=r[1],l=r[2],c=0;if(i.some((t=>0!==e[t]))){for(s in o)a.o(o,s)&&(a.m[s]=o[s]);if(l)var d=l(a)}for(t&&t(r);c<i.length;c++)n=i[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(d)},r=self.webpackChunknextcloud=self.webpackChunknextcloud||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),a.nc=void 0;var o=a.O(void 0,[4208],(()=>a(93096)));o=a.O(o)})();
//# sourceMappingURL=files-settings-personal.js.map?v=315f691ed2e8a0faf274