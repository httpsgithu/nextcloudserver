(()=>{"use strict";var e,n={39607:(e,n,i)=>{var r=i(85471),o=i(65043),a=i(79759);const l={name:"EyeOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var s=i(14486);const c=(0,s.A)(l,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon eye-outline-icon",attrs:{"aria-hidden":t.title?null:"true","aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports;var d=i(70995);const u={name:"OAuthItem",components:{Delete:a.A,NcButton:d.A,EyeOutline:c},props:{client:{type:Object,required:!0}},data(){return{id:this.client.id,name:this.client.name,redirectUri:this.client.redirectUri,clientId:this.client.clientId,clientSecret:this.client.clientSecret,renderSecret:!1}},computed:{renderedSecret(){return this.renderSecret?this.clientSecret:"****"},toggleAriaLabel(){return this.renderSecret?t("oauth2","Hide client secret"):t("oauth2","Show client secret")}},methods:{toggleSecret(){this.renderSecret=!this.renderSecret}}};var h=i(85072),p=i.n(h),A=i(97825),m=i.n(A),C=i(77659),v=i.n(C),f=i(55056),g=i.n(f),y=i(10540),b=i.n(y),x=i(41113),S=i.n(x),_=i(30677),N={};N.styleTagTransform=S(),N.setAttributes=g(),N.insert=v().bind(null,"head"),N.domAPI=m(),N.insertStyleElement=b(),p()(_.A,N),_.A&&_.A.locals&&_.A.locals;const w=(0,s.A)(u,(function(){var t=this,e=t._self._c;return e("tr",[e("td",[t._v(t._s(t.name))]),t._v(" "),e("td",[t._v(t._s(t.redirectUri))]),t._v(" "),e("td",[e("code",[t._v(t._s(t.clientId))])]),t._v(" "),e("td",[e("div",{staticClass:"action-secret"},[e("code",[t._v(t._s(t.renderedSecret))]),t._v(" "),""!==t.clientSecret?e("NcButton",{attrs:{type:"tertiary-no-background","aria-label":t.toggleAriaLabel},on:{click:t.toggleSecret},scopedSlots:t._u([{key:"icon",fn:function(){return[e("EyeOutline",{attrs:{size:20}})]},proxy:!0}],null,!1,2687940113)}):t._e()],1)]),t._v(" "),e("td",{staticClass:"action-column"},[e("NcButton",{attrs:{type:"tertiary-no-background","aria-label":t.t("oauth2","Delete")},on:{click:function(e){return t.$emit("delete",t.id)}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("Delete",{attrs:{size:20,title:t.t("oauth2","Delete")}})]},proxy:!0}])})],1)])}),[],!1,null,"39c6252a",null).exports;var O=i(63814),k=i(87485),U=i(88837),B=i(40083),I=i(32981),D=i(82182);const j={name:"App",components:{OAuthItem:w,NcSettingsSection:U.A,NcButton:d.A,NcTextField:D.A,NcNoteCard:B.A},props:{clients:{type:Array,required:!0}},data:()=>({newClient:{name:"",redirectUri:"",errorMsg:"",error:!1},oauthDocLink:(0,I.C)("oauth2","oauth2-doc-link"),showSecretWarning:!1}),computed:{instanceName:()=>(0,k.F)().theming.name},methods:{deleteClient(t){o.Ay.delete((0,O.Jv)("apps/oauth2/clients/{id}",{id:t})).then((()=>{this.clients=this.clients.filter((e=>e.id!==t))}))},addClient(){this.newClient.error=!1,o.Ay.post((0,O.Jv)("apps/oauth2/clients"),{name:this.newClient.name,redirectUri:this.newClient.redirectUri}).then((t=>{this.clients.push(t.data),this.showSecretWarning=!0,this.newClient.name="",this.newClient.redirectUri=""})).catch((t=>{this.newClient.error=!0,this.newClient.errorMsg=t.response.data.message}))}}};var T=i(75052),R={};R.styleTagTransform=S(),R.setAttributes=g(),R.insert=v().bind(null,"head"),R.domAPI=m(),R.insertStyleElement=b(),p()(T.A,R),T.A&&T.A.locals&&T.A.locals;const M=(0,s.A)(j,(function(){var t=this,e=t._self._c;return e("NcSettingsSection",{attrs:{name:t.t("oauth2","OAuth 2.0 clients"),description:t.t("oauth2","OAuth 2.0 allows external services to request access to {instanceName}.",{instanceName:t.instanceName}),"doc-url":t.oauthDocLink}},[t.clients.length>0?e("table",{staticClass:"grid"},[e("thead",[e("tr",[e("th",[t._v("\n\t\t\t\t\t"+t._s(t.t("oauth2","Name"))+"\n\t\t\t\t")]),t._v(" "),e("th",[t._v("\n\t\t\t\t\t"+t._s(t.t("oauth2","Redirection URI"))+"\n\t\t\t\t")]),t._v(" "),e("th",[t._v("\n\t\t\t\t\t"+t._s(t.t("oauth2","Client Identifier"))+"\n\t\t\t\t")]),t._v(" "),e("th",[t._v("\n\t\t\t\t\t"+t._s(t.t("oauth2","Secret key"))+"\n\t\t\t\t")]),t._v(" "),e("th",[t._v("\n\t\t\t\t\t"+t._s(t.t("oauth2","Delete client"))+"\n\t\t\t\t")])])]),t._v(" "),e("tbody",t._l(t.clients,(function(n){return e("OAuthItem",{key:n.id,attrs:{client:n},on:{delete:t.deleteClient}})})),1)]):t._e(),t._v(" "),t.showSecretWarning?e("NcNoteCard",{attrs:{type:"warning"}},[t._v("\n\t\t"+t._s(t.t("oauth2","Make sure you store the secret key, it cannot be recovered."))+"\n\t")]):t._e(),t._v(" "),e("br"),t._v(" "),e("h3",[t._v(t._s(t.t("oauth2","Add client")))]),t._v(" "),t.newClient.error?e("span",{staticClass:"msg error"},[t._v(t._s(t.newClient.errorMsg))]):t._e(),t._v(" "),e("form",{staticClass:"oauth2-form",on:{submit:function(e){return e.preventDefault(),t.addClient.apply(null,arguments)}}},[e("NcTextField",{staticClass:"oauth2-form--input",attrs:{id:"name",value:t.newClient.name,type:"text",name:"name",label:t.t("oauth2","Name"),placeholder:t.t("oauth2","Name")},on:{"update:value":function(e){return t.$set(t.newClient,"name",e)}}}),t._v(" "),e("NcTextField",{staticClass:"oauth2-form--input",attrs:{id:"redirectUri",value:t.newClient.redirectUri,type:"url",name:"redirectUri",label:t.t("oauth2","Redirection URI"),placeholder:t.t("oauth2","Redirection URI")},on:{"update:value":function(e){return t.$set(t.newClient,"redirectUri",e)}}}),t._v(" "),e("NcButton",{staticClass:"inline-button",attrs:{"native-type":"submit"}},[t._v("\n\t\t\t"+t._s(t.t("oauth2","Add"))+"\n\t\t")])],1)],1)}),[],!1,null,"597479ba",null).exports;r.Ay.prototype.t=t,r.Ay.prototype.OC=OC;const E=(0,I.C)("oauth2","clients");new(r.Ay.extend(M))({propsData:{clients:E}}).$mount("#oauth2")},75052:(t,e,n)=>{n.d(e,{A:()=>l});var i=n(71354),r=n.n(i),o=n(76314),a=n.n(o)()(r());a.push([t.id,"\ntable[data-v-597479ba] {\n\tmax-width: 800px;\n}\n\n/** Overwrite button height and position to be aligned with the text input */\n.inline-button[data-v-597479ba] {\n\tmin-height: 34px !important;\n\tdisplay: inline-flex !important;\n}\n.oauth2-form[data-v-597479ba] {\n\tdisplay: flex;\n\tflex-direction: row;\n}\n.oauth2-form--input[data-v-597479ba] {\n\tmax-width: 200px;\n\tmargin-inline-end: 10px;\n}\n","",{version:3,sources:["webpack://./apps/oauth2/src/App.vue"],names:[],mappings:";AAgKA;CACA,gBAAA;AACA;;AAEA,4EAAA;AACA;CACA,2BAAA;CACA,+BAAA;AACA;AACA;CACA,aAAA;CACA,mBAAA;AACA;AACA;CACA,gBAAA;CACA,uBAAA;AACA",sourcesContent:["\x3c!--\n  - SPDX-FileCopyrightText: 2018 Nextcloud GmbH and Nextcloud contributors\n  - SPDX-License-Identifier: AGPL-3.0-or-later\n--\x3e\n<template>\n\t<NcSettingsSection :name=\"t('oauth2', 'OAuth 2.0 clients')\"\n\t\t:description=\"t('oauth2', 'OAuth 2.0 allows external services to request access to {instanceName}.', { instanceName })\"\n\t\t:doc-url=\"oauthDocLink\">\n\t\t<table v-if=\"clients.length > 0\" class=\"grid\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th>\n\t\t\t\t\t\t{{ t('oauth2', 'Name') }}\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>\n\t\t\t\t\t\t{{ t('oauth2', 'Redirection URI') }}\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>\n\t\t\t\t\t\t{{ t('oauth2', 'Client Identifier') }}\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>\n\t\t\t\t\t\t{{ t('oauth2', 'Secret key') }}\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>\n\t\t\t\t\t\t{{ t('oauth2', 'Delete client') }}\n\t\t\t\t\t</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<OAuthItem v-for=\"client in clients\"\n\t\t\t\t\t:key=\"client.id\"\n\t\t\t\t\t:client=\"client\"\n\t\t\t\t\t@delete=\"deleteClient\" />\n\t\t\t</tbody>\n\t\t</table>\n\t\t<NcNoteCard v-if=\"showSecretWarning\"\n\t\t\ttype=\"warning\">\n\t\t\t{{ t('oauth2', 'Make sure you store the secret key, it cannot be recovered.') }}\n\t\t</NcNoteCard>\n\n\t\t<br>\n\t\t<h3>{{ t('oauth2', 'Add client') }}</h3>\n\t\t<span v-if=\"newClient.error\" class=\"msg error\">{{ newClient.errorMsg }}</span>\n\t\t<form class=\"oauth2-form\" @submit.prevent=\"addClient\">\n\t\t\t<NcTextField id=\"name\"\n\t\t\t\t:value.sync=\"newClient.name\"\n\t\t\t\ttype=\"text\"\n\t\t\t\tclass=\"oauth2-form--input\"\n\t\t\t\tname=\"name\"\n\t\t\t\t:label=\"t('oauth2', 'Name')\"\n\t\t\t\t:placeholder=\"t('oauth2', 'Name')\" />\n\t\t\t<NcTextField id=\"redirectUri\"\n\t\t\t\t:value.sync=\"newClient.redirectUri\"\n\t\t\t\ttype=\"url\"\n\t\t\t\tclass=\"oauth2-form--input\"\n\t\t\t\tname=\"redirectUri\"\n\t\t\t\t:label=\"t('oauth2', 'Redirection URI')\"\n\t\t\t\t:placeholder=\"t('oauth2', 'Redirection URI')\" />\n\t\t\t<NcButton native-type=\"submit\" class=\"inline-button\">\n\t\t\t\t{{ t('oauth2', 'Add') }}\n\t\t\t</NcButton>\n\t\t</form>\n\t</NcSettingsSection>\n</template>\n\n<script>\nimport axios from '@nextcloud/axios'\nimport OAuthItem from './components/OAuthItem.vue'\nimport { generateUrl } from '@nextcloud/router'\nimport { getCapabilities } from '@nextcloud/capabilities'\nimport NcSettingsSection from '@nextcloud/vue/dist/Components/NcSettingsSection.js'\nimport NcButton from '@nextcloud/vue/dist/Components/NcButton.js'\nimport NcNoteCard from '@nextcloud/vue/dist/Components/NcNoteCard.js'\nimport { loadState } from '@nextcloud/initial-state'\nimport NcTextField from '@nextcloud/vue/dist/Components/NcTextField.js'\n\nexport default {\n\tname: 'App',\n\tcomponents: {\n\t\tOAuthItem,\n\t\tNcSettingsSection,\n\t\tNcButton,\n\t\tNcTextField,\n\t\tNcNoteCard,\n\t},\n\tprops: {\n\t\tclients: {\n\t\t\ttype: Array,\n\t\t\trequired: true,\n\t\t},\n\t},\n\tdata() {\n\t\treturn {\n\t\t\tnewClient: {\n\t\t\t\tname: '',\n\t\t\t\tredirectUri: '',\n\t\t\t\terrorMsg: '',\n\t\t\t\terror: false,\n\t\t\t},\n\t\t\toauthDocLink: loadState('oauth2', 'oauth2-doc-link'),\n\t\t\tshowSecretWarning: false,\n\t\t}\n\t},\n\tcomputed: {\n\t\tinstanceName() {\n\t\t\treturn getCapabilities().theming.name\n\t\t},\n\t},\n\tmethods: {\n\t\tdeleteClient(id) {\n\t\t\taxios.delete(generateUrl('apps/oauth2/clients/{id}', { id }))\n\t\t\t\t.then(() => {\n\t\t\t\t\t// eslint-disable-next-line vue/no-mutating-props\n\t\t\t\t\tthis.clients = this.clients.filter(client => client.id !== id)\n\t\t\t\t})\n\t\t},\n\t\taddClient() {\n\t\t\tthis.newClient.error = false\n\n\t\t\taxios.post(\n\t\t\t\tgenerateUrl('apps/oauth2/clients'),\n\t\t\t\t{\n\t\t\t\t\tname: this.newClient.name,\n\t\t\t\t\tredirectUri: this.newClient.redirectUri,\n\t\t\t\t},\n\t\t\t).then(response => {\n\t\t\t\t// eslint-disable-next-line vue/no-mutating-props\n\t\t\t\tthis.clients.push(response.data)\n\t\t\t\tthis.showSecretWarning = true\n\n\t\t\t\tthis.newClient.name = ''\n\t\t\t\tthis.newClient.redirectUri = ''\n\t\t\t}).catch(reason => {\n\t\t\t\tthis.newClient.error = true\n\t\t\t\tthis.newClient.errorMsg = reason.response.data.message\n\t\t\t})\n\t\t},\n\t},\n}\n<\/script>\n<style scoped>\n\ttable {\n\t\tmax-width: 800px;\n\t}\n\n\t/** Overwrite button height and position to be aligned with the text input */\n\t.inline-button {\n\t\tmin-height: 34px !important;\n\t\tdisplay: inline-flex !important;\n\t}\n\t.oauth2-form {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t}\n\t.oauth2-form--input {\n\t\tmax-width: 200px;\n\t\tmargin-inline-end: 10px;\n\t}\n</style>\n"],sourceRoot:""}]);const l=a},30677:(t,e,n)=>{n.d(e,{A:()=>l});var i=n(71354),r=n.n(i),o=n(76314),a=n.n(o)()(r());a.push([t.id,"\n.action-secret[data-v-39c6252a] {\n\tdisplay: flex;\n\talign-items: center;\n}\n.action-secret code[data-v-39c6252a] {\n\tpadding-top: 5px;\n}\ntd code[data-v-39c6252a] {\n\tdisplay: inline-block;\n\tvertical-align: middle;\n}\ntable.inline td[data-v-39c6252a] {\n\tborder: none;\n\tpadding: 5px;\n}\n.action-column[data-v-39c6252a] {\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\tpadding-inline-end: 0;\n}\n","",{version:3,sources:["webpack://./apps/oauth2/src/components/OAuthItem.vue"],names:[],mappings:";AA+GA;CACA,aAAA;CACA,mBAAA;AACA;AACA;CACA,gBAAA;AACA;AACA;CACA,qBAAA;CACA,sBAAA;AACA;AACA;CACA,YAAA;CACA,YAAA;AACA;AAEA;CACA,aAAA;CACA,yBAAA;CACA,qBAAA;AACA",sourcesContent:["\x3c!--\n  - SPDX-FileCopyrightText: 2018 Nextcloud GmbH and Nextcloud contributors\n  - SPDX-License-Identifier: AGPL-3.0-or-later\n--\x3e\n<template>\n\t<tr>\n\t\t<td>{{ name }}</td>\n\t\t<td>{{ redirectUri }}</td>\n\t\t<td><code>{{ clientId }}</code></td>\n\t\t<td>\n\t\t\t<div class=\"action-secret\">\n\t\t\t\t<code>{{ renderedSecret }}</code>\n\t\t\t\t<NcButton v-if=\"clientSecret !== ''\"\n\t\t\t\t\ttype=\"tertiary-no-background\"\n\t\t\t\t\t:aria-label=\"toggleAriaLabel\"\n\t\t\t\t\t@click=\"toggleSecret\">\n\t\t\t\t\t<template #icon>\n\t\t\t\t\t\t<EyeOutline :size=\"20\" />\n\t\t\t\t\t</template>\n\t\t\t\t</NcButton>\n\t\t\t</div>\n\t\t</td>\n\t\t<td class=\"action-column\">\n\t\t\t<NcButton type=\"tertiary-no-background\"\n\t\t\t\t:aria-label=\"t('oauth2', 'Delete')\"\n\t\t\t\t@click=\"$emit('delete', id)\">\n\t\t\t\t<template #icon>\n\t\t\t\t\t<Delete :size=\"20\"\n\t\t\t\t\t\t:title=\"t('oauth2', 'Delete')\" />\n\t\t\t\t</template>\n\t\t\t</NcButton>\n\t\t</td>\n\t</tr>\n</template>\n\n<script>\n\nimport Delete from 'vue-material-design-icons/Delete.vue'\nimport EyeOutline from 'vue-material-design-icons/EyeOutline.vue'\nimport NcButton from '@nextcloud/vue/dist/Components/NcButton.js'\n\nexport default {\n\tname: 'OAuthItem',\n\tcomponents: {\n\t\tDelete,\n\t\tNcButton,\n\t\tEyeOutline,\n\t},\n\tprops: {\n\t\tclient: {\n\t\t\ttype: Object,\n\t\t\trequired: true,\n\t\t},\n\t},\n\tdata() {\n\t\treturn {\n\t\t\tid: this.client.id,\n\t\t\tname: this.client.name,\n\t\t\tredirectUri: this.client.redirectUri,\n\t\t\tclientId: this.client.clientId,\n\t\t\tclientSecret: this.client.clientSecret,\n\t\t\trenderSecret: false,\n\t\t}\n\t},\n\tcomputed: {\n\t\trenderedSecret() {\n\t\t\tif (this.renderSecret) {\n\t\t\t\treturn this.clientSecret\n\t\t\t} else {\n\t\t\t\treturn '****'\n\t\t\t}\n\t\t},\n\t\ttoggleAriaLabel() {\n\t\t\tif (!this.renderSecret) {\n\t\t\t\treturn t('oauth2', 'Show client secret')\n\t\t\t}\n\t\t\treturn t('oauth2', 'Hide client secret')\n\t\t},\n\t},\n\tmethods: {\n\t\ttoggleSecret() {\n\t\t\tthis.renderSecret = !this.renderSecret\n\t\t},\n\t},\n}\n<\/script>\n\n<style scoped>\n\t.action-secret {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\t.action-secret code {\n\t\tpadding-top: 5px;\n\t}\n\ttd code {\n\t\tdisplay: inline-block;\n\t\tvertical-align: middle;\n\t}\n\ttable.inline td {\n\t\tborder: none;\n\t\tpadding: 5px;\n\t}\n\n\t.action-column {\n\t\tdisplay: flex;\n\t\tjustify-content: flex-end;\n\t\tpadding-inline-end: 0;\n\t}\n</style>\n"],sourceRoot:""}]);const l=a}},i={};function r(t){var e=i[t];if(void 0!==e)return e.exports;var o=i[t]={id:t,loaded:!1,exports:{}};return n[t].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=n,e=[],r.O=(t,n,i,o)=>{if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],i=e[d][1],o=e[d][2];for(var l=!0,s=0;s<n.length;s++)(!1&o||a>=o)&&Object.keys(r.O).every((t=>r.O[t](n[s])))?n.splice(s--,1):(l=!1,o<a&&(a=o));if(l){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,i,o]},r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.e=()=>Promise.resolve(),r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),r.j=6174,(()=>{r.b=document.baseURI||self.location.href;var t={6174:0};r.O.j=e=>0===t[e];var e=(e,n)=>{var i,o,a=n[0],l=n[1],s=n[2],c=0;if(a.some((e=>0!==t[e]))){for(i in l)r.o(l,i)&&(r.m[i]=l[i]);if(s)var d=s(r)}for(e&&e(n);c<a.length;c++)o=a[c],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(d)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),r.nc=void 0;var o=r.O(void 0,[4208],(()=>r(39607)));o=r.O(o)})();
//# sourceMappingURL=oauth2-oauth2.js.map?v=05268583fd30be65f3cf