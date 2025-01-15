(()=>{"use strict";var e,i,r,n={75673:(e,i,r)=>{var n=r(85471),s=r(53334),o=(r(40935),r(73933)),a=(r(34301),r(63814)),l=r(21777),c=r(85168),d=(r(35810),r(60557)),p=r(25866),u=r(43627),A=r.n(u);const E=(0,n.pM)({name:"ReferenceFileWidget",components:{FolderIcon:p.A,FileIcon:d.A},props:{richObject:{type:Object,required:!0},accessible:{type:Boolean,default:!0},interactive:{type:Boolean,default:!0}},data:()=>({previewUrl:null,failedViewer:!1}),computed:{availableViewerHandlers:()=>window?.OCA?.Viewer?.availableHandlers||[],viewerHandler(){return this.availableViewerHandlers.find((e=>e.mimes.includes(this.richObject.mimetype)))},viewerFile(){const e=(0,a.dC)(`dav/files/${(0,l.HW)()?.uid}/${this.richObject.path}`).replace(/\/\/$/,"/");return{filename:this.richObject.path,basename:this.richObject.name,lastmod:new Date(1e3*this.richObject.mtime),size:this.richObject.size,type:"file",mime:this.richObject.mimetype,fileid:this.richObject.id,failed:!1,loaded:!0,davPath:e,source:e}},fileSize(){return window.OC.Util.humanFileSize(this.richObject.size)},fileMtime(){return window.OC.Util.relativeModifiedDate(1e3*this.richObject.mtime)},filePath(){return A().dirname(this.richObject.path)},filePreviewStyle(){return this.previewUrl?{backgroundImage:"url("+this.previewUrl+")"}:{}},filePreviewClass(){return this.previewUrl?"widget-file__image--preview":"widget-file__image--icon"},isFolder(){return"httpd/unix-directory"===this.richObject.mimetype}},mounted(){if(this.richObject["preview-available"]){const e=(0,a.Jv)("/core/preview?fileId={fileId}&x=250&y=250",{fileId:this.richObject.id}),t=new Image;t.onload=()=>{this.previewUrl=e},t.onerror=e=>{console.error("could not load recommendation preview",e)},t.src=e}},methods:{navigate(e){this.isFolder?(e.stopPropagation(),e.preventDefault(),this.openFilePicker()):-1===window?.OCA?.Viewer?.mimetypes.indexOf(this.richObject.mimetype)||window?.OCA?.Viewer?.file||(e.stopPropagation(),e.preventDefault(),window?.OCA?.Viewer?.open({path:this.richObject.path}))},openFilePicker(){(0,c.a1)(t("settings","Your files")).allowDirectories(!0).setMultiSelect(!1).addButton({id:"open",label:this.t("settings","Open in files"),callback(e){e[0]&&window.open((0,a.Jv)("/f/{fileid}",{fileid:e[0].fileid}))},type:"primary"}).disableNavigation().startAt(this.richObject.path).build().pick()}}});var f=r(85072),h=r.n(f),N=r(97825),m=r.n(N),g=r(77659),I=r.n(g),O=r(55056),b=r.n(O),C=r(10540),v=r.n(C),R=r(41113),w=r.n(R),L=r(47390),$={};$.styleTagTransform=w(),$.setAttributes=b(),$.insert=I().bind(null,"head"),$.domAPI=m(),$.insertStyleElement=v(),h()(L.A,$),L.A&&L.A.locals&&L.A.locals;var x=r(14486);const T=(0,x.A)(E,(function(){var e=this,t=e._self._c;return e._self._setupProxy,e.accessible?e.interactive&&e.viewerHandler&&!e.failedViewer?t(e.viewerHandler.component,e._b({tag:"component",staticClass:"widget-file widget-file--interactive",attrs:{active:!1,"can-swipe":!1,"can-zoom":!1,"is-embedded":!0,"file-list":[e.viewerFile],"is-full-screen":!1,"is-sidebar-shown":!1},on:{error:function(t){e.failedViewer=!0}}},"component",e.viewerFile,!1)):t("a",{staticClass:"widget-file widget-file--link",attrs:{href:e.richObject.link,target:"_blank"},on:{click:e.navigate}},[t("span",{staticClass:"widget-file__image",class:e.filePreviewClass,style:e.filePreviewStyle},[e.previewUrl?e._e():[e.isFolder?t("FolderIcon",{attrs:{size:88,"fill-color":"var(--color-primary-element)"}}):t("FileIcon",{attrs:{size:88}})]],2),e._v(" "),t("span",{staticClass:"widget-file__details"},[t("p",{staticClass:"widget-file__title"},[e._v(e._s(e.richObject.name))]),e._v(" "),t("p",{staticClass:"widget-file__description"},[e._v(e._s(e.fileSize)),t("br"),e._v(e._s(e.fileMtime))]),e._v(" "),t("p",{staticClass:"widget-file__link"},[e._v(e._s(e.filePath))])])]):t("div",{staticClass:"widget-file widget-file--no-access"},[t("span",{staticClass:"widget-file__image widget-file__image--icon"},[e.isFolder?t("FolderIcon",{attrs:{size:88}}):t("FileIcon",{attrs:{size:88}})],1),e._v(" "),t("span",{staticClass:"widget-file__details"},[t("p",{staticClass:"widget-file__title"},[e._v("\n\t\t\t"+e._s(e.t("files","File cannot be accessed"))+"\n\t\t")]),e._v(" "),t("p",{staticClass:"widget-file__description"},[e._v("\n\t\t\t"+e._s(e.t("files","The file could not be found or you do not have permissions to view it. Ask the sender to share it."))+"\n\t\t")])])])}),[],!1,null,"f5ca5316",null).exports;var y=r(75706);const F=(0,n.pM)({name:"FileReferencePickerElement",components:{FilePicker:y.FilePickerVue},props:{providerId:{type:String,required:!0},accessible:{type:Boolean,default:!1}},computed:{containerId:()=>`filepicker-${Math.random().toString(36).slice(7)}`,filepickerOptions(){return{allowPickDirectory:!0,buttons:this.buttonFactory,container:`#${this.containerId}`,multiselect:!1,name:(0,s.Tl)("files","Select file or folder to link to")}}},methods:{t:s.Tl,buttonFactory(e){const t=[];if(0===e.length)return[];const i=e.at(0);return"/"===i.path?[]:(t.push({label:(0,s.Tl)("files","Choose {file}",{file:i.displayname}),type:"primary",callback:this.onClose}),t)},onClose(e){void 0===e||0===e.length?this.$emit("cancel"):this.onSubmit(e[0])},onSubmit(e){const t=new URL(window.location.href);t.pathname=(0,a.Jv)("/f/{fileId}",{fileId:e.fileid}),t.search="",this.$emit("submit",t.href)}}}),P=(0,x.A)(F,(function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{attrs:{id:e.containerId}},[t("FilePicker",e._b({on:{close:e.onClose}},"FilePicker",e.filepickerOptions,!1))],1)}),[],!1,null,null,null).exports;n.Ay.mixin({methods:{t:s.Tl}}),(0,o.r)("file",((e,t)=>{let{richObjectType:i,richObject:r,accessible:s,interactive:o}=t;new(n.Ay.extend(T))({propsData:{richObjectType:i,richObject:r,accessible:s,interactive:o}}).$mount(e)}),(()=>{}),{hasInteractiveView:!0}),(0,o.b)("files",((e,t)=>{let{providerId:i,accessible:r}=t;const s=new(n.Ay.extend(P))({propsData:{providerId:i,accessible:r}}).$mount(e);return new o.N(s.$el,s)}),((e,t)=>{t.object.$destroy()}))},47390:(e,t,i)=>{i.d(t,{A:()=>a});var r=i(71354),n=i.n(r),s=i(76314),o=i.n(s)()(n());o.push([e.id,".widget-file[data-v-f5ca5316]{display:flex;flex-grow:1;color:var(--color-main-text) !important;text-decoration:none !important;padding:0 !important}.widget-file__image[data-v-f5ca5316]{width:30%;min-width:160px;max-width:320px;background-position:center;background-size:cover;background-repeat:no-repeat}.widget-file__image--icon[data-v-f5ca5316]{min-width:88px;max-width:88px;padding:12px;padding-inline-end:0;display:flex;align-items:center;justify-content:center}.widget-file__title[data-v-f5ca5316]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:bold}.widget-file__details[data-v-f5ca5316]{padding:12px;flex-grow:1;display:flex;flex-direction:column}.widget-file__details p[data-v-f5ca5316]{margin:0;padding:0}.widget-file__description[data-v-f5ca5316]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;line-clamp:3;-webkit-box-orient:vertical}.widget-file--link[data-v-f5ca5316]{color:var(--color-text-maxcontrast)}.widget-file--interactive[data-v-f5ca5316]{position:relative;height:400px;max-height:50vh;margin:0}","",{version:3,sources:["webpack://./apps/files/src/views/ReferenceFileWidget.vue"],names:[],mappings:"AACA,8BACC,YAAA,CACA,WAAA,CACA,uCAAA,CACA,+BAAA,CACA,oBAAA,CAEA,qCACC,SAAA,CACA,eAAA,CACA,eAAA,CACA,0BAAA,CACA,qBAAA,CACA,2BAAA,CAEA,2CACC,cAAA,CACA,cAAA,CACA,YAAA,CACA,oBAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CAIF,qCACC,eAAA,CACA,sBAAA,CACA,kBAAA,CACA,gBAAA,CAGD,uCACC,YAAA,CACA,WAAA,CACA,YAAA,CACA,qBAAA,CAEA,yCACC,QAAA,CACA,SAAA,CAIF,2CACC,eAAA,CACA,sBAAA,CACA,mBAAA,CACA,oBAAA,CACA,YAAA,CACA,2BAAA,CAID,oCACC,mCAAA,CAGD,2CACC,iBAAA,CACA,YAAA,CACA,eAAA,CACA,QAAA",sourceRoot:""}]);const a=o},75706:(e,t,i)=>{i.d(t,{FilePickerVue:()=>r});const r=(0,i(85471).$V)((()=>Promise.all([i.e(4208),i.e(6127)]).then(i.bind(i,31709))))},35810:(e,t,i)=>{i.d(t,{Al:()=>r.r,H4:()=>r.c,Q$:()=>r.e,R3:()=>r.n,VL:()=>r.l,lJ:()=>r.d,pt:()=>r.F,ur:()=>p,v7:()=>c});var r=i(68251),n=(i(43627),i(53334)),s=i(380),o=i(65606);Error;const a=["B","KB","MB","GB","TB","PB"],l=["B","KiB","MiB","GiB","TiB","PiB"];function c(e,t=!1,i=!1,r=!1){i=i&&!r,"string"==typeof e&&(e=Number(e));let s=e>0?Math.floor(Math.log(e)/Math.log(r?1e3:1024)):0;s=Math.min((i?l.length:a.length)-1,s);const o=i?l[s]:a[s];let c=(e/Math.pow(r?1e3:1024,s)).toFixed(1);return!0===t&&0===s?("0.0"!==c?"< 1 ":"0 ")+(i?l[1]:a[1]):(c=s<2?parseFloat(c).toFixed(0):parseFloat(c).toLocaleString((0,n.lO)()),c+" "+o)}function d(e){return e instanceof Date?e.toISOString():String(e)}function p(e,t={}){const i={sortingMode:"basename",sortingOrder:"asc",...t};return function(e,t,i){i=i??[];const r=(t=t??[e=>e]).map(((e,t)=>"asc"===(i[t]??"asc")?1:-1)),s=Intl.Collator([(0,n.Z0)(),(0,n.lO)()],{numeric:!0,usage:"sort"});return[...e].sort(((e,i)=>{for(const[n,o]of t.entries()){const t=s.compare(d(o(e)),d(o(i)));if(0!==t)return t*r[n]}return 0}))}(e,[...i.sortFavoritesFirst?[e=>1!==e.attributes?.favorite]:[],...i.sortFoldersFirst?[e=>"folder"!==e.type]:[],..."basename"!==i.sortingMode?[e=>e[i.sortingMode]]:[],e=>{return(t=e.displayname||e.attributes?.displayname||e.basename).lastIndexOf(".")>0?t.slice(0,t.lastIndexOf(".")):t;var t},e=>e.basename],[...i.sortFavoritesFirst?["asc"]:[],...i.sortFoldersFirst?["asc"]:[],..."mtime"===i.sortingMode?["asc"===i.sortingOrder?"desc":"asc"]:[],..."mtime"!==i.sortingMode&&"basename"!==i.sortingMode?[i.sortingOrder]:[],i.sortingOrder,i.sortingOrder])}var u={};!function(e){const t=":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",i="["+t+"]["+t+"\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*",r=new RegExp("^"+i+"$");e.isExist=function(e){return void 0!==e},e.isEmptyObject=function(e){return 0===Object.keys(e).length},e.merge=function(e,t,i){if(t){const r=Object.keys(t),n=r.length;for(let s=0;s<n;s++)e[r[s]]="strict"===i?[t[r[s]]]:t[r[s]]}},e.getValue=function(t){return e.isExist(t)?t:""},e.isName=function(e){return!(null==r.exec(e))},e.getAllMatches=function(e,t){const i=[];let r=t.exec(e);for(;r;){const n=[];n.startIndex=t.lastIndex-r[0].length;const s=r.length;for(let e=0;e<s;e++)n.push(r[e]);i.push(n),r=t.exec(e)}return i},e.nameRegexp=i}(u);new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?","g");var A={};const E={preserveOrder:!1,attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,removeNSPrefix:!1,allowBooleanAttributes:!1,parseTagValue:!0,parseAttributeValue:!1,trimValues:!0,cdataPropName:!1,numberParseOptions:{hex:!0,leadingZeros:!0,eNotation:!0},tagValueProcessor:function(e,t){return t},attributeValueProcessor:function(e,t){return t},stopNodes:[],alwaysCreateTextNode:!1,isArray:()=>!1,commentPropName:!1,unpairedTags:[],processEntities:!0,htmlEntities:!1,ignoreDeclaration:!1,ignorePiTags:!1,transformTagName:!1,transformAttributeName:!1,updateTag:function(e,t,i){return e}};A.buildOptions=function(e){return Object.assign({},E,e)},A.defaultOptions=E,!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt),!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat);new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?","gm");var f={};function h(e,t,i){let r;const n={};for(let s=0;s<e.length;s++){const o=e[s],a=N(o);let l="";if(l=void 0===i?a:i+"."+a,a===t.textNodeName)void 0===r?r=o[a]:r+=""+o[a];else{if(void 0===a)continue;if(o[a]){let e=h(o[a],t,l);const i=g(e,t);o[":@"]?m(e,o[":@"],l,t):1!==Object.keys(e).length||void 0===e[t.textNodeName]||t.alwaysCreateTextNode?0===Object.keys(e).length&&(t.alwaysCreateTextNode?e[t.textNodeName]="":e=""):e=e[t.textNodeName],void 0!==n[a]&&n.hasOwnProperty(a)?(Array.isArray(n[a])||(n[a]=[n[a]]),n[a].push(e)):t.isArray(a,l,i)?n[a]=[e]:n[a]=e}}}return"string"==typeof r?r.length>0&&(n[t.textNodeName]=r):void 0!==r&&(n[t.textNodeName]=r),n}function N(e){const t=Object.keys(e);for(let e=0;e<t.length;e++){const i=t[e];if(":@"!==i)return i}}function m(e,t,i,r){if(t){const n=Object.keys(t),s=n.length;for(let o=0;o<s;o++){const s=n[o];r.isArray(s,i+"."+s,!0,!0)?e[s]=[t[s]]:e[s]=t[s]}}}function g(e,t){const{textNodeName:i}=t,r=Object.keys(e).length;return 0===r||!(1!==r||!e[i]&&"boolean"!=typeof e[i]&&0!==e[i])}f.prettify=function(e,t){return h(e,t)};const{buildOptions:I}=A,{prettify:O}=f;function b(e,t,i,r){let n="",s=!1;for(let o=0;o<e.length;o++){const a=e[o],l=C(a);if(void 0===l)continue;let c="";if(c=0===i.length?l:`${i}.${l}`,l===t.textNodeName){let e=a[l];R(c,t)||(e=t.tagValueProcessor(l,e),e=w(e,t)),s&&(n+=r),n+=e,s=!1;continue}if(l===t.cdataPropName){s&&(n+=r),n+=`<![CDATA[${a[l][0][t.textNodeName]}]]>`,s=!1;continue}if(l===t.commentPropName){n+=r+`\x3c!--${a[l][0][t.textNodeName]}--\x3e`,s=!0;continue}if("?"===l[0]){const e=v(a[":@"],t),i="?xml"===l?"":r;let o=a[l][0][t.textNodeName];o=0!==o.length?" "+o:"",n+=i+`<${l}${o}${e}?>`,s=!0;continue}let d=r;""!==d&&(d+=t.indentBy);const p=r+`<${l}${v(a[":@"],t)}`,u=b(a[l],t,c,d);-1!==t.unpairedTags.indexOf(l)?t.suppressUnpairedNode?n+=p+">":n+=p+"/>":u&&0!==u.length||!t.suppressEmptyNode?u&&u.endsWith(">")?n+=p+`>${u}${r}</${l}>`:(n+=p+">",u&&""!==r&&(u.includes("/>")||u.includes("</"))?n+=r+t.indentBy+u+r:n+=u,n+=`</${l}>`):n+=p+"/>",s=!0}return n}function C(e){const t=Object.keys(e);for(let i=0;i<t.length;i++){const r=t[i];if(e.hasOwnProperty(r)&&":@"!==r)return r}}function v(e,t){let i="";if(e&&!t.ignoreAttributes)for(let r in e){if(!e.hasOwnProperty(r))continue;let n=t.attributeValueProcessor(r,e[r]);n=w(n,t),!0===n&&t.suppressBooleanAttributes?i+=` ${r.substr(t.attributeNamePrefix.length)}`:i+=` ${r.substr(t.attributeNamePrefix.length)}="${n}"`}return i}function R(e,t){let i=(e=e.substr(0,e.length-t.textNodeName.length-1)).substr(e.lastIndexOf(".")+1);for(let r in t.stopNodes)if(t.stopNodes[r]===e||t.stopNodes[r]==="*."+i)return!0;return!1}function w(e,t){if(e&&e.length>0&&t.processEntities)for(let i=0;i<t.entities.length;i++){const r=t.entities[i];e=e.replace(r.regex,r.val)}return e}const L=function(e,t){let i="";return t.format&&t.indentBy.length>0&&(i="\n"),b(e,t,"",i)},$=function(e){return"function"==typeof e?e:Array.isArray(e)?t=>{for(const i of e){if("string"==typeof i&&t===i)return!0;if(i instanceof RegExp&&i.test(t))return!0}}:()=>!1},x={attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataPropName:!1,format:!1,indentBy:"  ",suppressEmptyNode:!1,suppressUnpairedNode:!0,suppressBooleanAttributes:!0,tagValueProcessor:function(e,t){return t},attributeValueProcessor:function(e,t){return t},preserveOrder:!1,commentPropName:!1,unpairedTags:[],entities:[{regex:new RegExp("&","g"),val:"&amp;"},{regex:new RegExp(">","g"),val:"&gt;"},{regex:new RegExp("<","g"),val:"&lt;"},{regex:new RegExp("'","g"),val:"&apos;"},{regex:new RegExp('"',"g"),val:"&quot;"}],processEntities:!0,stopNodes:[],oneListGroup:!1};function T(e){this.options=Object.assign({},x,e),!0===this.options.ignoreAttributes||this.options.attributesGroupName?this.isAttribute=function(){return!1}:(this.ignoreAttributesFn=$(this.options.ignoreAttributes),this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=P),this.processTextOrObjNode=y,this.options.format?(this.indentate=F,this.tagEndChar=">\n",this.newLine="\n"):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine="")}function y(e,t,i,r){const n=this.j2x(e,i+1,r.concat(t));return void 0!==e[this.options.textNodeName]&&1===Object.keys(e).length?this.buildTextValNode(e[this.options.textNodeName],t,n.attrStr,i):this.buildObjectNode(n.val,t,n.attrStr,i)}function F(e){return this.options.indentBy.repeat(e)}function P(e){return!(!e.startsWith(this.options.attributeNamePrefix)||e===this.options.textNodeName)&&e.substr(this.attrPrefixLen)}T.prototype.build=function(e){return this.options.preserveOrder?L(e,this.options):(Array.isArray(e)&&this.options.arrayNodeName&&this.options.arrayNodeName.length>1&&(e={[this.options.arrayNodeName]:e}),this.j2x(e,0,[]).val)},T.prototype.j2x=function(e,t,i){let r="",n="";const s=i.join(".");for(let o in e)if(Object.prototype.hasOwnProperty.call(e,o))if(void 0===e[o])this.isAttribute(o)&&(n+="");else if(null===e[o])this.isAttribute(o)?n+="":"?"===o[0]?n+=this.indentate(t)+"<"+o+"?"+this.tagEndChar:n+=this.indentate(t)+"<"+o+"/"+this.tagEndChar;else if(e[o]instanceof Date)n+=this.buildTextValNode(e[o],o,"",t);else if("object"!=typeof e[o]){const i=this.isAttribute(o);if(i&&!this.ignoreAttributesFn(i,s))r+=this.buildAttrPairStr(i,""+e[o]);else if(!i)if(o===this.options.textNodeName){let t=this.options.tagValueProcessor(o,""+e[o]);n+=this.replaceEntitiesValue(t)}else n+=this.buildTextValNode(e[o],o,"",t)}else if(Array.isArray(e[o])){const r=e[o].length;let s="",a="";for(let l=0;l<r;l++){const r=e[o][l];if(void 0===r);else if(null===r)"?"===o[0]?n+=this.indentate(t)+"<"+o+"?"+this.tagEndChar:n+=this.indentate(t)+"<"+o+"/"+this.tagEndChar;else if("object"==typeof r)if(this.options.oneListGroup){const e=this.j2x(r,t+1,i.concat(o));s+=e.val,this.options.attributesGroupName&&r.hasOwnProperty(this.options.attributesGroupName)&&(a+=e.attrStr)}else s+=this.processTextOrObjNode(r,o,t,i);else if(this.options.oneListGroup){let e=this.options.tagValueProcessor(o,r);e=this.replaceEntitiesValue(e),s+=e}else s+=this.buildTextValNode(r,o,"",t)}this.options.oneListGroup&&(s=this.buildObjectNode(s,o,a,t)),n+=s}else if(this.options.attributesGroupName&&o===this.options.attributesGroupName){const t=Object.keys(e[o]),i=t.length;for(let n=0;n<i;n++)r+=this.buildAttrPairStr(t[n],""+e[o][t[n]])}else n+=this.processTextOrObjNode(e[o],o,t,i);return{attrStr:r,val:n}},T.prototype.buildAttrPairStr=function(e,t){return t=this.options.attributeValueProcessor(e,""+t),t=this.replaceEntitiesValue(t),this.options.suppressBooleanAttributes&&"true"===t?" "+e:" "+e+'="'+t+'"'},T.prototype.buildObjectNode=function(e,t,i,r){if(""===e)return"?"===t[0]?this.indentate(r)+"<"+t+i+"?"+this.tagEndChar:this.indentate(r)+"<"+t+i+this.closeTag(t)+this.tagEndChar;{let n="</"+t+this.tagEndChar,s="";return"?"===t[0]&&(s="?",n=""),!i&&""!==i||-1!==e.indexOf("<")?!1!==this.options.commentPropName&&t===this.options.commentPropName&&0===s.length?this.indentate(r)+`\x3c!--${e}--\x3e`+this.newLine:this.indentate(r)+"<"+t+i+s+this.tagEndChar+e+this.indentate(r)+n:this.indentate(r)+"<"+t+i+s+">"+e+n}},T.prototype.closeTag=function(e){let t="";return-1!==this.options.unpairedTags.indexOf(e)?this.options.suppressUnpairedNode||(t="/"):t=this.options.suppressEmptyNode?"/":`></${e}`,t},T.prototype.buildTextValNode=function(e,t,i,r){if(!1!==this.options.cdataPropName&&t===this.options.cdataPropName)return this.indentate(r)+`<![CDATA[${e}]]>`+this.newLine;if(!1!==this.options.commentPropName&&t===this.options.commentPropName)return this.indentate(r)+`\x3c!--${e}--\x3e`+this.newLine;if("?"===t[0])return this.indentate(r)+"<"+t+i+"?"+this.tagEndChar;{let n=this.options.tagValueProcessor(t,e);return n=this.replaceEntitiesValue(n),""===n?this.indentate(r)+"<"+t+i+this.closeTag(t)+this.tagEndChar:this.indentate(r)+"<"+t+i+">"+n+"</"+t+this.tagEndChar}},T.prototype.replaceEntitiesValue=function(e){if(e&&e.length>0&&this.options.processEntities)for(let t=0;t<this.options.entities.length;t++){const i=this.options.entities[t];e=e.replace(i.regex,i.val)}return e};var S="object"==typeof o&&o.env&&o.env.NODE_DEBUG&&/\bsemver\b/i.test(o.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{},_={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:16,MAX_SAFE_BUILD_LENGTH:250,MAX_SAFE_INTEGER:Number.MAX_SAFE_INTEGER||9007199254740991,RELEASE_TYPES:["major","premajor","minor","preminor","patch","prepatch","prerelease"],SEMVER_SPEC_VERSION:"2.0.0",FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2},D={exports:{}};!function(e,t){const{MAX_SAFE_COMPONENT_LENGTH:i,MAX_SAFE_BUILD_LENGTH:r,MAX_LENGTH:n}=_,s=S,o=(t=e.exports={}).re=[],a=t.safeRe=[],l=t.src=[],c=t.t={};let d=0;const p="[a-zA-Z0-9-]",u=[["\\s",1],["\\d",n],[p,r]],A=(e,t,i)=>{const r=(e=>{for(const[t,i]of u)e=e.split(`${t}*`).join(`${t}{0,${i}}`).split(`${t}+`).join(`${t}{1,${i}}`);return e})(t),n=d++;s(e,n,t),c[e]=n,l[n]=t,o[n]=new RegExp(t,i?"g":void 0),a[n]=new RegExp(r,i?"g":void 0)};A("NUMERICIDENTIFIER","0|[1-9]\\d*"),A("NUMERICIDENTIFIERLOOSE","\\d+"),A("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${p}*`),A("MAINVERSION",`(${l[c.NUMERICIDENTIFIER]})\\.(${l[c.NUMERICIDENTIFIER]})\\.(${l[c.NUMERICIDENTIFIER]})`),A("MAINVERSIONLOOSE",`(${l[c.NUMERICIDENTIFIERLOOSE]})\\.(${l[c.NUMERICIDENTIFIERLOOSE]})\\.(${l[c.NUMERICIDENTIFIERLOOSE]})`),A("PRERELEASEIDENTIFIER",`(?:${l[c.NUMERICIDENTIFIER]}|${l[c.NONNUMERICIDENTIFIER]})`),A("PRERELEASEIDENTIFIERLOOSE",`(?:${l[c.NUMERICIDENTIFIERLOOSE]}|${l[c.NONNUMERICIDENTIFIER]})`),A("PRERELEASE",`(?:-(${l[c.PRERELEASEIDENTIFIER]}(?:\\.${l[c.PRERELEASEIDENTIFIER]})*))`),A("PRERELEASELOOSE",`(?:-?(${l[c.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[c.PRERELEASEIDENTIFIERLOOSE]})*))`),A("BUILDIDENTIFIER",`${p}+`),A("BUILD",`(?:\\+(${l[c.BUILDIDENTIFIER]}(?:\\.${l[c.BUILDIDENTIFIER]})*))`),A("FULLPLAIN",`v?${l[c.MAINVERSION]}${l[c.PRERELEASE]}?${l[c.BUILD]}?`),A("FULL",`^${l[c.FULLPLAIN]}$`),A("LOOSEPLAIN",`[v=\\s]*${l[c.MAINVERSIONLOOSE]}${l[c.PRERELEASELOOSE]}?${l[c.BUILD]}?`),A("LOOSE",`^${l[c.LOOSEPLAIN]}$`),A("GTLT","((?:<|>)?=?)"),A("XRANGEIDENTIFIERLOOSE",`${l[c.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),A("XRANGEIDENTIFIER",`${l[c.NUMERICIDENTIFIER]}|x|X|\\*`),A("XRANGEPLAIN",`[v=\\s]*(${l[c.XRANGEIDENTIFIER]})(?:\\.(${l[c.XRANGEIDENTIFIER]})(?:\\.(${l[c.XRANGEIDENTIFIER]})(?:${l[c.PRERELEASE]})?${l[c.BUILD]}?)?)?`),A("XRANGEPLAINLOOSE",`[v=\\s]*(${l[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[c.XRANGEIDENTIFIERLOOSE]})(?:${l[c.PRERELEASELOOSE]})?${l[c.BUILD]}?)?)?`),A("XRANGE",`^${l[c.GTLT]}\\s*${l[c.XRANGEPLAIN]}$`),A("XRANGELOOSE",`^${l[c.GTLT]}\\s*${l[c.XRANGEPLAINLOOSE]}$`),A("COERCEPLAIN",`(^|[^\\d])(\\d{1,${i}})(?:\\.(\\d{1,${i}}))?(?:\\.(\\d{1,${i}}))?`),A("COERCE",`${l[c.COERCEPLAIN]}(?:$|[^\\d])`),A("COERCEFULL",l[c.COERCEPLAIN]+`(?:${l[c.PRERELEASE]})?(?:${l[c.BUILD]})?(?:$|[^\\d])`),A("COERCERTL",l[c.COERCE],!0),A("COERCERTLFULL",l[c.COERCEFULL],!0),A("LONETILDE","(?:~>?)"),A("TILDETRIM",`(\\s*)${l[c.LONETILDE]}\\s+`,!0),t.tildeTrimReplace="$1~",A("TILDE",`^${l[c.LONETILDE]}${l[c.XRANGEPLAIN]}$`),A("TILDELOOSE",`^${l[c.LONETILDE]}${l[c.XRANGEPLAINLOOSE]}$`),A("LONECARET","(?:\\^)"),A("CARETTRIM",`(\\s*)${l[c.LONECARET]}\\s+`,!0),t.caretTrimReplace="$1^",A("CARET",`^${l[c.LONECARET]}${l[c.XRANGEPLAIN]}$`),A("CARETLOOSE",`^${l[c.LONECARET]}${l[c.XRANGEPLAINLOOSE]}$`),A("COMPARATORLOOSE",`^${l[c.GTLT]}\\s*(${l[c.LOOSEPLAIN]})$|^$`),A("COMPARATOR",`^${l[c.GTLT]}\\s*(${l[c.FULLPLAIN]})$|^$`),A("COMPARATORTRIM",`(\\s*)${l[c.GTLT]}\\s*(${l[c.LOOSEPLAIN]}|${l[c.XRANGEPLAIN]})`,!0),t.comparatorTrimReplace="$1$2$3",A("HYPHENRANGE",`^\\s*(${l[c.XRANGEPLAIN]})\\s+-\\s+(${l[c.XRANGEPLAIN]})\\s*$`),A("HYPHENRANGELOOSE",`^\\s*(${l[c.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[c.XRANGEPLAINLOOSE]})\\s*$`),A("STAR","(<|>)?=?\\s*\\*"),A("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),A("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")}(D,D.exports);var j=D.exports;Object.freeze({loose:!0}),Object.freeze({});const M=/^[0-9]+$/,G=(e,t)=>{const i=M.test(e),r=M.test(t);return i&&r&&(e=+e,t=+t),e===t?0:i&&!r?-1:r&&!i?1:e<t?-1:1};var B={compareIdentifiers:G,rcompareIdentifiers:(e,t)=>G(t,e)};const{MAX_LENGTH:k,MAX_SAFE_INTEGER:U}=_,{safeRe:V,t:X}=j,{compareIdentifiers:H}=B;s.m}},s={};function o(e){var t=s[e];if(void 0!==t)return t.exports;var i=s[e]={id:e,loaded:!1,exports:{}};return n[e].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}o.m=n,e=[],o.O=(t,i,r,n)=>{if(!i){var s=1/0;for(d=0;d<e.length;d++){i=e[d][0],r=e[d][1],n=e[d][2];for(var a=!0,l=0;l<i.length;l++)(!1&n||s>=n)&&Object.keys(o.O).every((e=>o.O[e](i[l])))?i.splice(l--,1):(a=!1,n<s&&(s=n));if(a){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[i,r,n]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,i)=>(o.f[i](e,t),t)),[])),o.u=e=>e+"-"+e+".js?v="+{5706:"3153330af47fc26a725a",5862:"7b9b02dc0a1b898066ef",6127:"cc7e4275204e7c2d643a"}[e],o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i={},r="nextcloud:",o.l=(e,t,n,s)=>{if(i[e])i[e].push(t);else{var a,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var p=c[d];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==r+n){a=p;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",r+n),a.src=e),i[e]=[t];var u=(t,r)=>{a.onerror=a.onload=null,clearTimeout(A);var n=i[e];if(delete i[e],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((e=>e(r))),t)return t(r)},A=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),l&&document.head.appendChild(a)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.j=54,(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var r=i.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=i[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{o.b=document.baseURI||self.location.href;var e={54:0,5706:0};o.f.j=(t,i)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)i.push(r[2]);else{var n=new Promise(((i,n)=>r=e[t]=[i,n]));i.push(r[2]=n);var s=o.p+o.u(t),a=new Error;o.l(s,(i=>{if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var n=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;a.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",a.name="ChunkLoadError",a.type=n,a.request=s,r[1](a)}}),"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,i)=>{var r,n,s=i[0],a=i[1],l=i[2],c=0;if(s.some((t=>0!==e[t]))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(l)var d=l(o)}for(t&&t(i);c<s.length;c++)n=s[c],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(d)},i=self.webpackChunknextcloud=self.webpackChunknextcloud||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),o.nc=void 0;var a=o.O(void 0,[4208],(()=>o(75673)));a=o.O(a)})();
//# sourceMappingURL=files-reference-files.js.map?v=71bf38e08a37dd96a40f