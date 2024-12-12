(()=>{"use strict";var e,t,r,n={99563:(e,t,r)=>{var n=r(35810),i=r(53334);const s='<svg xmlns="http://www.w3.org/2000/svg" id="mdi-alarm" viewBox="0 0 24 24"><path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22A9,9 0 0,0 21,13A9,9 0 0,0 12,4M12.5,8H11V14L15.75,16.85L16.5,15.62L12.5,13.25V8M7.88,3.39L6.6,1.86L2,5.71L3.29,7.24L7.88,3.39M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72Z" /></svg>';var o,a=r(85471),l=r(61338),d=r(85168),u=r(70995),c=r(4604),m=r(15828),f=r(94219),p=r(40083);!function(e){e.LaterToday="later-today",e.Tomorrow="tomorrow",e.ThisWeekend="this-weekend",e.NextWeek="next-week"}(o||(o={}));const E=()=>{const e=new Date;return e.setHours(0,0,0,0),e.setDate(e.getDate()-e.getDay()+1),new Date(e)},h=e=>{new Date(e).setHours(0,0,0,0);const t=new Date(e.getFullYear(),0,1,0,0,0,0),r=(e.getTime()-t.getTime())/864e5;return Math.ceil((r+t.getDay()+1)/7)},N=e=>({[o.LaterToday]:()=>{const e=new Date,t=new Date;t.setHours(18,0,0,0);const r=new Date;return r.setHours(17,0,0,0),e>=r?null:t},[o.Tomorrow]:()=>{const e=new Date,t=new Date;return t.setDate(e.getDate()+1),t.setHours(8,0,0,0),t},[o.ThisWeekend]:()=>{const e=new Date;if([5,6,0].includes(e.getDay()))return null;const t=new Date,r=E();return t.setDate(r.getDate()+5),t.setHours(8,0,0,0),t},[o.NextWeek]:()=>{if(0===(new Date).getDay())return null;const e=new Date,t=E();return e.setDate(t.getDate()+7),e.setHours(8,0,0,0),e}}[e]()),g=e=>{let t={hour:"numeric",minute:"2-digit"};const r=new Date;var n,s;return s=r,((n=e).getDate()!==s.getDate()||n.getMonth()!==s.getMonth()||n.getFullYear()!==s.getFullYear())&&(t={...t,weekday:"short"}),((e,t)=>h(e)===h(t)&&e.getFullYear()===t.getFullYear())(e,r)||(t={...t,month:"short",day:"numeric"}),e.getFullYear()!==r.getFullYear()&&(t={...t,year:"numeric"}),e.toLocaleString((0,i.lO)(),t)},A=e=>{let t={month:"long",day:"numeric",weekday:"long",hour:"numeric",minute:"2-digit"};const r=new Date;return e.getFullYear()!==r.getFullYear()&&(t={...t,year:"numeric"}),e.toLocaleString((0,i.lO)(),t)},I=(0,r(35947).YK)().setApp("files_reminders").detectUser().build();var b=r(65043),L=r(63814);const T=async(e,t)=>{const r=(0,L.KT)("/apps/files_reminders/api/v1/{fileId}",{fileId:e});return(await b.Ay.put(r,{dueDate:t.toISOString()})).data.ocs.data},O=async e=>{const t=(0,L.KT)("/apps/files_reminders/api/v1/{fileId}",{fileId:e});return(await b.Ay.delete(t)).data.ocs.data},v=a.Ay.extend({name:"SetCustomReminderModal",components:{NcButton:u.A,NcDateTime:c.A,NcDateTimePickerNative:m.A,NcDialog:f.A,NcNoteCard:p.A},data:()=>({node:void 0,hasDueDate:!1,opened:!1,isValid:!0,customDueDate:null,nowDate:new Date}),computed:{fileId(){return this.node?.fileid},fileName(){return this.node?.basename},name(){return this.fileName?(0,i.Tl)("files_reminders",'Set reminder for "{fileName}"',{fileName:this.fileName}):""},label:()=>(0,i.Tl)("files_reminders","Set reminder at custom date & time"),clearAriaLabel:()=>(0,i.Tl)("files_reminders","Clear reminder")},methods:{t:i.Tl,getDateString:g,open(e){const t=e.attributes["reminder-due-date"]?new Date(e.attributes["reminder-due-date"]):null;this.node=e,this.hasDueDate=Boolean(t),this.isValid=!0,this.opened=!0,this.customDueDate=t??(()=>{const e=new Date,t=new Date;return t.setHours(e.getHours()+2,0,0,0),t})(),this.nowDate=new Date,setTimeout((()=>{const e=document.getElementById("set-custom-reminder");e.focus(),this.hasDueDate||e.showPicker()}),300)},async setCustom(){if(this.customDueDate instanceof Date&&!isNaN(this.customDueDate))try{await T(this.fileId,this.customDueDate),a.Ay.set(this.node.attributes,"reminder-due-date",this.customDueDate.toISOString()),(0,l.Ic)("files:node:updated",this.node),(0,d.Te)((0,i.Tl)("files_reminders",'Reminder set for "{fileName}"',{fileName:this.fileName})),this.onClose()}catch(e){I.error("Failed to set reminder",{error:e}),(0,d.Qg)((0,i.Tl)("files_reminders","Failed to set reminder"))}else(0,d.Qg)((0,i.Tl)("files_reminders","Please choose a valid date & time"))},async clear(){try{await O(this.fileId),a.Ay.set(this.node.attributes,"reminder-due-date",""),(0,l.Ic)("files:node:updated",this.node),(0,d.Te)((0,i.Tl)("files_reminders",'Reminder cleared for "{fileName}"',{fileName:this.fileName})),this.onClose()}catch(e){I.error("Failed to clear reminder",{error:e}),(0,d.Qg)((0,i.Tl)("files_reminders","Failed to clear reminder"))}},onClose(){this.opened=!1,this.$emit("close")},onInput(){const e=document.getElementById("set-custom-reminder");this.isValid=e.checkValidity()}}});var R=r(85072),y=r.n(R),D=r(97825),w=r.n(D),C=r(77659),x=r.n(C),S=r(55056),$=r.n(S),_=r(10540),P=r.n(_),F=r(41113),M=r.n(F),G=r(21807),B={};B.styleTagTransform=M(),B.setAttributes=$(),B.insert=x().bind(null,"head"),B.domAPI=w(),B.insertStyleElement=P(),y()(G.A,B),G.A&&G.A.locals&&G.A.locals;const k=(0,r(14486).A)(v,(function(){var e=this,t=e._self._c;return e._self._setupProxy,e.opened?t("NcDialog",{attrs:{name:e.name,"out-transition":!0,size:"small","close-on-click-outside":""},on:{closing:e.onClose},scopedSlots:e._u([{key:"actions",fn:function(){return[t("NcButton",{attrs:{type:"tertiary"},on:{click:e.onClose}},[e._v("\n\t\t\t"+e._s(e.t("files_reminders","Cancel"))+"\n\t\t")]),e._v(" "),e.hasDueDate?t("NcButton",{on:{click:e.clear}},[e._v("\n\t\t\t"+e._s(e.t("files_reminders","Clear reminder"))+"\n\t\t")]):e._e(),e._v(" "),t("NcButton",{attrs:{disabled:!e.isValid,type:"primary",form:"set-custom-reminder-form","native-type":"submit"}},[e._v("\n\t\t\t"+e._s(e.t("files_reminders","Set reminder"))+"\n\t\t")])]},proxy:!0}],null,!1,2766788902)},[t("form",{staticClass:"custom-reminder-modal",attrs:{id:"set-custom-reminder-form"},on:{submit:function(t){return t.preventDefault(),e.setCustom.apply(null,arguments)}}},[t("NcDateTimePickerNative",{attrs:{id:"set-custom-reminder",label:e.label,min:e.nowDate,required:!0,type:"datetime-local"},on:{input:e.onInput},model:{value:e.customDueDate,callback:function(t){e.customDueDate=t},expression:"customDueDate"}}),e._v(" "),e.isValid?t("NcNoteCard",{attrs:{type:"info"}},[e._v("\n\t\t\t"+e._s(e.t("files_reminders","We will remind you of this file"))+"\n\t\t\t"),t("NcDateTime",{attrs:{timestamp:e.customDueDate}})],1):t("NcNoteCard",{attrs:{type:"error"}},[e._v("\n\t\t\t"+e._s(e.t("files_reminders","Please choose a valid date & time"))+"\n\t\t")])],1)]):e._e()}),[],!1,null,"82674da4",null).exports,V=a.Ay.extend(k),j=document.createElement("div");j.id="set-custom-reminder-modal",document.body.appendChild(j);const U=new V({name:"SetCustomReminderModal",el:j}),X=e=>(U.open(e),new Promise((e=>{U.$once("close",e)}))),H=new n.hY({id:"reminder-status",inline:()=>!0,displayName:()=>"",title:e=>{const t=e.at(0),r=new Date(t.attributes["reminder-due-date"]);return`${(0,i.Tl)("files_reminders","Reminder set")} – ${A(r)}`},iconSvgInline:()=>s,enabled:e=>{if(1!==e.length)return!1;const t=e.at(0).attributes["reminder-due-date"];return Boolean(t)},exec:async e=>(X(e),null),order:-15}),Y=new n.hY({id:"clear-reminder",displayName:()=>(0,i.Tl)("files_reminders","Clear reminder"),title:e=>{const t=e.at(0),r=new Date(t.attributes["reminder-due-date"]);return`${(0,i.Tl)("files_reminders","Clear reminder")} – ${A(r)}`},iconSvgInline:()=>'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-alarm-off" viewBox="0 0 24 24"><path d="M8,3.28L6.6,1.86L5.74,2.57L7.16,4M16.47,18.39C15.26,19.39 13.7,20 12,20A7,7 0 0,1 5,13C5,11.3 5.61,9.74 6.61,8.53M2.92,2.29L1.65,3.57L3,4.9L1.87,5.83L3.29,7.25L4.4,6.31L5.2,7.11C3.83,8.69 3,10.75 3,13A9,9 0 0,0 12,22C14.25,22 16.31,21.17 17.89,19.8L20.09,22L21.36,20.73L3.89,3.27L2.92,2.29M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72M12,6A7,7 0 0,1 19,13C19,13.84 18.84,14.65 18.57,15.4L20.09,16.92C20.67,15.73 21,14.41 21,13A9,9 0 0,0 12,4C10.59,4 9.27,4.33 8.08,4.91L9.6,6.43C10.35,6.16 11.16,6 12,6Z" /></svg>',enabled:e=>{if(1!==e.length)return!1;const t=e.at(0).attributes["reminder-due-date"];return Boolean(t)},async exec(e){if(e.fileid)try{return await O(e.fileid),a.Ay.set(e.attributes,"reminder-due-date",""),(0,l.Ic)("files:node:updated",e),!0}catch(e){return!1}return null},order:19}),W="set-reminder-menu",Z=new n.hY({id:W,displayName:()=>(0,i.Tl)("files_reminders","Set reminder"),iconSvgInline:()=>s,enabled:(e,t)=>"trashbin"!==t.id,exec:async()=>null,order:20});var z=r(19672),Q={};Q.styleTagTransform=M(),Q.setAttributes=$(),Q.insert=x().bind(null,"head"),Q.domAPI=w(),Q.insertStyleElement=P(),y()(z.A,Q),z.A&&z.A.locals&&z.A.locals;const K={dateTimePreset:o.LaterToday,label:(0,i.Tl)("files_reminders","Later today"),ariaLabel:(0,i.Tl)("files_reminders","Set reminder for later today"),dateString:"",verboseDateString:""},q={dateTimePreset:o.Tomorrow,label:(0,i.Tl)("files_reminders","Tomorrow"),ariaLabel:(0,i.Tl)("files_reminders","Set reminder for tomorrow"),dateString:"",verboseDateString:""},J={dateTimePreset:o.ThisWeekend,label:(0,i.Tl)("files_reminders","This weekend"),ariaLabel:(0,i.Tl)("files_reminders","Set reminder for this weekend"),dateString:"",verboseDateString:""},ee={dateTimePreset:o.NextWeek,label:(0,i.Tl)("files_reminders","Next week"),ariaLabel:(0,i.Tl)("files_reminders","Set reminder for next week"),dateString:"",verboseDateString:""};[K,q,J,ee].forEach((e=>{const t=N(e.dateTimePreset);t&&(e.dateString=g(t),e.verboseDateString=A(t),setInterval((()=>{const t=N(e.dateTimePreset);t&&(e.dateString=g(t),e.verboseDateString=A(t))}),18e5))}));const te=[K,q,J,ee].map((e=>new n.hY({id:`set-reminder-${e.dateTimePreset}`,displayName:()=>`${e.label} – ${e.dateString}`,title:()=>`${e.ariaLabel} – ${e.verboseDateString}`,iconSvgInline:()=>"<svg></svg>",enabled:(t,r)=>"trashbin"!==r.id&&Boolean(N(e.dateTimePreset)),parent:W,async exec(t){if(!t.fileid)return I.error("Failed to set reminder, missing file id"),(0,d.Qg)((0,i.Tl)("files_reminders","Failed to set reminder")),null;try{const r=N(e.dateTimePreset);await T(t.fileid,r),a.Ay.set(t.attributes,"reminder-due-date",r.toISOString()),(0,l.Ic)("files:node:updated",t),(0,d.Te)((0,i.Tl)("files_reminders",'Reminder set for "{fileName}"',{fileName:t.basename}))}catch(e){I.error("Failed to set reminder",{error:e}),(0,d.Qg)((0,i.Tl)("files_reminders","Failed to set reminder"))}return null},order:21}))),re=new n.hY({id:"set-reminder-custom",displayName:()=>(0,i.Tl)("files_reminders","Set custom reminder"),title:()=>(0,i.Tl)("files_reminders","Set reminder at custom date & time"),iconSvgInline:()=>'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-calendar-clock" viewBox="0 0 24 24"><path d="M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z" /></svg>',enabled:(e,t)=>"trashbin"!==t.id,parent:W,exec:async e=>(X(e),null),order:22});(0,n.Yc)("nc:reminder-due-date",{nc:"http://nextcloud.org/ns"}),(0,n.Gg)(H),(0,n.Gg)(Y),(0,n.Gg)(Z),(0,n.Gg)(re),te.forEach((e=>(0,n.Gg)(e)))},19672:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(71354),i=r.n(n),s=r(76314),o=r.n(s)()(i());o.push([e.id,'.files-list__row-action-set-reminder-custom{margin-top:13px;position:relative}.files-list__row-action-set-reminder-custom::before{content:"";margin-block:3px;margin-inline:15px 10px;border-bottom:1px solid var(--color-border-dark);cursor:default;display:flex;height:0;position:absolute;inset-inline:0;top:-10px}',"",{version:3,sources:["webpack://./apps/files_reminders/src/actions/setReminderSuggestionActions.scss"],names:[],mappings:"AAMA,4CACC,eAAA,CACA,iBAAA,CAEA,oDACC,UAAA,CACA,gBAAA,CACA,uBAAA,CACA,gDAAA,CACA,cAAA,CACA,YAAA,CACA,QAAA,CACA,iBAAA,CACA,cAAA,CACA,SAAA",sourceRoot:""}]);const a=o},21807:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(71354),i=r.n(n),s=r(76314),o=r.n(s)()(i());o.push([e.id,".custom-reminder-modal[data-v-82674da4]{margin:0 12px}","",{version:3,sources:["webpack://./apps/files_reminders/src/components/SetCustomReminderModal.vue"],names:[],mappings:"AACA,wCACC,aAAA",sourceRoot:""}]);const a=o},35810:(e,t,r)=>{r.d(t,{Al:()=>n.r,Gg:()=>d,H4:()=>n.c,Q$:()=>n.e,R3:()=>n.n,VL:()=>n.l,Yc:()=>n.i,hY:()=>l,lJ:()=>n.d,pt:()=>n.F,ur:()=>p,v7:()=>m});var n=r(68251),i=(r(43627),r(53334)),s=r(380),o=r(65606),a=(e=>(e.DEFAULT="default",e.HIDDEN="hidden",e))(a||{});class l{_action;constructor(e){this.validateAction(e),this._action=e}get id(){return this._action.id}get displayName(){return this._action.displayName}get title(){return this._action.title}get iconSvgInline(){return this._action.iconSvgInline}get enabled(){return this._action.enabled}get exec(){return this._action.exec}get execBatch(){return this._action.execBatch}get order(){return this._action.order}get parent(){return this._action.parent}get default(){return this._action.default}get destructive(){return this._action.destructive}get inline(){return this._action.inline}get renderInline(){return this._action.renderInline}validateAction(e){if(!e.id||"string"!=typeof e.id)throw new Error("Invalid id");if(!e.displayName||"function"!=typeof e.displayName)throw new Error("Invalid displayName function");if("title"in e&&"function"!=typeof e.title)throw new Error("Invalid title function");if(!e.iconSvgInline||"function"!=typeof e.iconSvgInline)throw new Error("Invalid iconSvgInline function");if(!e.exec||"function"!=typeof e.exec)throw new Error("Invalid exec function");if("enabled"in e&&"function"!=typeof e.enabled)throw new Error("Invalid enabled function");if("execBatch"in e&&"function"!=typeof e.execBatch)throw new Error("Invalid execBatch function");if("order"in e&&"number"!=typeof e.order)throw new Error("Invalid order");if(void 0!==e.destructive&&"boolean"!=typeof e.destructive)throw new Error("Invalid destructive flag");if("parent"in e&&"string"!=typeof e.parent)throw new Error("Invalid parent");if(e.default&&!Object.values(a).includes(e.default))throw new Error("Invalid default");if("inline"in e&&"function"!=typeof e.inline)throw new Error("Invalid inline function");if("renderInline"in e&&"function"!=typeof e.renderInline)throw new Error("Invalid renderInline function")}}const d=function(e){void 0===window._nc_fileactions&&(window._nc_fileactions=[],n.o.debug("FileActions initialized")),window._nc_fileactions.find((t=>t.id===e.id))?n.o.error(`FileAction ${e.id} already registered`,{action:e}):window._nc_fileactions.push(e)};Error;const u=["B","KB","MB","GB","TB","PB"],c=["B","KiB","MiB","GiB","TiB","PiB"];function m(e,t=!1,r=!1,n=!1){r=r&&!n,"string"==typeof e&&(e=Number(e));let s=e>0?Math.floor(Math.log(e)/Math.log(n?1e3:1024)):0;s=Math.min((r?c.length:u.length)-1,s);const o=r?c[s]:u[s];let a=(e/Math.pow(n?1e3:1024,s)).toFixed(1);return!0===t&&0===s?("0.0"!==a?"< 1 ":"0 ")+(r?c[1]:u[1]):(a=s<2?parseFloat(a).toFixed(0):parseFloat(a).toLocaleString((0,i.lO)()),a+" "+o)}function f(e){return e instanceof Date?e.toISOString():String(e)}function p(e,t={}){const r={sortingMode:"basename",sortingOrder:"asc",...t};return function(e,t,r){r=r??[];const n=(t=t??[e=>e]).map(((e,t)=>"asc"===(r[t]??"asc")?1:-1)),s=Intl.Collator([(0,i.Z0)(),(0,i.lO)()],{numeric:!0,usage:"sort"});return[...e].sort(((e,r)=>{for(const[i,o]of t.entries()){const t=s.compare(f(o(e)),f(o(r)));if(0!==t)return t*n[i]}return 0}))}(e,[...r.sortFavoritesFirst?[e=>1!==e.attributes?.favorite]:[],...r.sortFoldersFirst?[e=>"folder"!==e.type]:[],..."basename"!==r.sortingMode?[e=>e[r.sortingMode]]:[],e=>{return(t=e.displayname||e.attributes?.displayname||e.basename).lastIndexOf(".")>0?t.slice(0,t.lastIndexOf(".")):t;var t},e=>e.basename],[...r.sortFavoritesFirst?["asc"]:[],...r.sortFoldersFirst?["asc"]:[],..."mtime"===r.sortingMode?["asc"===r.sortingOrder?"desc":"asc"]:[],..."mtime"!==r.sortingMode&&"basename"!==r.sortingMode?[r.sortingOrder]:[],r.sortingOrder,r.sortingOrder])}var E={};!function(e){const t=":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",r="["+t+"]["+t+"\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*",n=new RegExp("^"+r+"$");e.isExist=function(e){return void 0!==e},e.isEmptyObject=function(e){return 0===Object.keys(e).length},e.merge=function(e,t,r){if(t){const n=Object.keys(t),i=n.length;for(let s=0;s<i;s++)e[n[s]]="strict"===r?[t[n[s]]]:t[n[s]]}},e.getValue=function(t){return e.isExist(t)?t:""},e.isName=function(e){return!(null==n.exec(e))},e.getAllMatches=function(e,t){const r=[];let n=t.exec(e);for(;n;){const i=[];i.startIndex=t.lastIndex-n[0].length;const s=n.length;for(let e=0;e<s;e++)i.push(n[e]);r.push(i),n=t.exec(e)}return r},e.nameRegexp=r}(E);new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?","g");var h={};const N={preserveOrder:!1,attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,removeNSPrefix:!1,allowBooleanAttributes:!1,parseTagValue:!0,parseAttributeValue:!1,trimValues:!0,cdataPropName:!1,numberParseOptions:{hex:!0,leadingZeros:!0,eNotation:!0},tagValueProcessor:function(e,t){return t},attributeValueProcessor:function(e,t){return t},stopNodes:[],alwaysCreateTextNode:!1,isArray:()=>!1,commentPropName:!1,unpairedTags:[],processEntities:!0,htmlEntities:!1,ignoreDeclaration:!1,ignorePiTags:!1,transformTagName:!1,transformAttributeName:!1,updateTag:function(e,t,r){return e}};h.buildOptions=function(e){return Object.assign({},N,e)},h.defaultOptions=N,!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt),!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat);new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?","gm");var g={};function A(e,t,r){let n;const i={};for(let s=0;s<e.length;s++){const o=e[s],a=I(o);let l="";if(l=void 0===r?a:r+"."+a,a===t.textNodeName)void 0===n?n=o[a]:n+=""+o[a];else{if(void 0===a)continue;if(o[a]){let e=A(o[a],t,l);const r=L(e,t);o[":@"]?b(e,o[":@"],l,t):1!==Object.keys(e).length||void 0===e[t.textNodeName]||t.alwaysCreateTextNode?0===Object.keys(e).length&&(t.alwaysCreateTextNode?e[t.textNodeName]="":e=""):e=e[t.textNodeName],void 0!==i[a]&&i.hasOwnProperty(a)?(Array.isArray(i[a])||(i[a]=[i[a]]),i[a].push(e)):t.isArray(a,l,r)?i[a]=[e]:i[a]=e}}}return"string"==typeof n?n.length>0&&(i[t.textNodeName]=n):void 0!==n&&(i[t.textNodeName]=n),i}function I(e){const t=Object.keys(e);for(let e=0;e<t.length;e++){const r=t[e];if(":@"!==r)return r}}function b(e,t,r,n){if(t){const i=Object.keys(t),s=i.length;for(let o=0;o<s;o++){const s=i[o];n.isArray(s,r+"."+s,!0,!0)?e[s]=[t[s]]:e[s]=t[s]}}}function L(e,t){const{textNodeName:r}=t,n=Object.keys(e).length;return 0===n||!(1!==n||!e[r]&&"boolean"!=typeof e[r]&&0!==e[r])}g.prettify=function(e,t){return A(e,t)};const{buildOptions:T}=h,{prettify:O}=g;function v(e,t,r,n){let i="",s=!1;for(let o=0;o<e.length;o++){const a=e[o],l=R(a);if(void 0===l)continue;let d="";if(d=0===r.length?l:`${r}.${l}`,l===t.textNodeName){let e=a[l];D(d,t)||(e=t.tagValueProcessor(l,e),e=w(e,t)),s&&(i+=n),i+=e,s=!1;continue}if(l===t.cdataPropName){s&&(i+=n),i+=`<![CDATA[${a[l][0][t.textNodeName]}]]>`,s=!1;continue}if(l===t.commentPropName){i+=n+`\x3c!--${a[l][0][t.textNodeName]}--\x3e`,s=!0;continue}if("?"===l[0]){const e=y(a[":@"],t),r="?xml"===l?"":n;let o=a[l][0][t.textNodeName];o=0!==o.length?" "+o:"",i+=r+`<${l}${o}${e}?>`,s=!0;continue}let u=n;""!==u&&(u+=t.indentBy);const c=n+`<${l}${y(a[":@"],t)}`,m=v(a[l],t,d,u);-1!==t.unpairedTags.indexOf(l)?t.suppressUnpairedNode?i+=c+">":i+=c+"/>":m&&0!==m.length||!t.suppressEmptyNode?m&&m.endsWith(">")?i+=c+`>${m}${n}</${l}>`:(i+=c+">",m&&""!==n&&(m.includes("/>")||m.includes("</"))?i+=n+t.indentBy+m+n:i+=m,i+=`</${l}>`):i+=c+"/>",s=!0}return i}function R(e){const t=Object.keys(e);for(let r=0;r<t.length;r++){const n=t[r];if(e.hasOwnProperty(n)&&":@"!==n)return n}}function y(e,t){let r="";if(e&&!t.ignoreAttributes)for(let n in e){if(!e.hasOwnProperty(n))continue;let i=t.attributeValueProcessor(n,e[n]);i=w(i,t),!0===i&&t.suppressBooleanAttributes?r+=` ${n.substr(t.attributeNamePrefix.length)}`:r+=` ${n.substr(t.attributeNamePrefix.length)}="${i}"`}return r}function D(e,t){let r=(e=e.substr(0,e.length-t.textNodeName.length-1)).substr(e.lastIndexOf(".")+1);for(let n in t.stopNodes)if(t.stopNodes[n]===e||t.stopNodes[n]==="*."+r)return!0;return!1}function w(e,t){if(e&&e.length>0&&t.processEntities)for(let r=0;r<t.entities.length;r++){const n=t.entities[r];e=e.replace(n.regex,n.val)}return e}const C=function(e,t){let r="";return t.format&&t.indentBy.length>0&&(r="\n"),v(e,t,"",r)},x=function(e){return"function"==typeof e?e:Array.isArray(e)?t=>{for(const r of e){if("string"==typeof r&&t===r)return!0;if(r instanceof RegExp&&r.test(t))return!0}}:()=>!1},S={attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataPropName:!1,format:!1,indentBy:"  ",suppressEmptyNode:!1,suppressUnpairedNode:!0,suppressBooleanAttributes:!0,tagValueProcessor:function(e,t){return t},attributeValueProcessor:function(e,t){return t},preserveOrder:!1,commentPropName:!1,unpairedTags:[],entities:[{regex:new RegExp("&","g"),val:"&amp;"},{regex:new RegExp(">","g"),val:"&gt;"},{regex:new RegExp("<","g"),val:"&lt;"},{regex:new RegExp("'","g"),val:"&apos;"},{regex:new RegExp('"',"g"),val:"&quot;"}],processEntities:!0,stopNodes:[],oneListGroup:!1};function $(e){this.options=Object.assign({},S,e),!0===this.options.ignoreAttributes||this.options.attributesGroupName?this.isAttribute=function(){return!1}:(this.ignoreAttributesFn=x(this.options.ignoreAttributes),this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=F),this.processTextOrObjNode=_,this.options.format?(this.indentate=P,this.tagEndChar=">\n",this.newLine="\n"):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine="")}function _(e,t,r,n){const i=this.j2x(e,r+1,n.concat(t));return void 0!==e[this.options.textNodeName]&&1===Object.keys(e).length?this.buildTextValNode(e[this.options.textNodeName],t,i.attrStr,r):this.buildObjectNode(i.val,t,i.attrStr,r)}function P(e){return this.options.indentBy.repeat(e)}function F(e){return!(!e.startsWith(this.options.attributeNamePrefix)||e===this.options.textNodeName)&&e.substr(this.attrPrefixLen)}$.prototype.build=function(e){return this.options.preserveOrder?C(e,this.options):(Array.isArray(e)&&this.options.arrayNodeName&&this.options.arrayNodeName.length>1&&(e={[this.options.arrayNodeName]:e}),this.j2x(e,0,[]).val)},$.prototype.j2x=function(e,t,r){let n="",i="";const s=r.join(".");for(let o in e)if(Object.prototype.hasOwnProperty.call(e,o))if(void 0===e[o])this.isAttribute(o)&&(i+="");else if(null===e[o])this.isAttribute(o)?i+="":"?"===o[0]?i+=this.indentate(t)+"<"+o+"?"+this.tagEndChar:i+=this.indentate(t)+"<"+o+"/"+this.tagEndChar;else if(e[o]instanceof Date)i+=this.buildTextValNode(e[o],o,"",t);else if("object"!=typeof e[o]){const r=this.isAttribute(o);if(r&&!this.ignoreAttributesFn(r,s))n+=this.buildAttrPairStr(r,""+e[o]);else if(!r)if(o===this.options.textNodeName){let t=this.options.tagValueProcessor(o,""+e[o]);i+=this.replaceEntitiesValue(t)}else i+=this.buildTextValNode(e[o],o,"",t)}else if(Array.isArray(e[o])){const n=e[o].length;let s="",a="";for(let l=0;l<n;l++){const n=e[o][l];if(void 0===n);else if(null===n)"?"===o[0]?i+=this.indentate(t)+"<"+o+"?"+this.tagEndChar:i+=this.indentate(t)+"<"+o+"/"+this.tagEndChar;else if("object"==typeof n)if(this.options.oneListGroup){const e=this.j2x(n,t+1,r.concat(o));s+=e.val,this.options.attributesGroupName&&n.hasOwnProperty(this.options.attributesGroupName)&&(a+=e.attrStr)}else s+=this.processTextOrObjNode(n,o,t,r);else if(this.options.oneListGroup){let e=this.options.tagValueProcessor(o,n);e=this.replaceEntitiesValue(e),s+=e}else s+=this.buildTextValNode(n,o,"",t)}this.options.oneListGroup&&(s=this.buildObjectNode(s,o,a,t)),i+=s}else if(this.options.attributesGroupName&&o===this.options.attributesGroupName){const t=Object.keys(e[o]),r=t.length;for(let i=0;i<r;i++)n+=this.buildAttrPairStr(t[i],""+e[o][t[i]])}else i+=this.processTextOrObjNode(e[o],o,t,r);return{attrStr:n,val:i}},$.prototype.buildAttrPairStr=function(e,t){return t=this.options.attributeValueProcessor(e,""+t),t=this.replaceEntitiesValue(t),this.options.suppressBooleanAttributes&&"true"===t?" "+e:" "+e+'="'+t+'"'},$.prototype.buildObjectNode=function(e,t,r,n){if(""===e)return"?"===t[0]?this.indentate(n)+"<"+t+r+"?"+this.tagEndChar:this.indentate(n)+"<"+t+r+this.closeTag(t)+this.tagEndChar;{let i="</"+t+this.tagEndChar,s="";return"?"===t[0]&&(s="?",i=""),!r&&""!==r||-1!==e.indexOf("<")?!1!==this.options.commentPropName&&t===this.options.commentPropName&&0===s.length?this.indentate(n)+`\x3c!--${e}--\x3e`+this.newLine:this.indentate(n)+"<"+t+r+s+this.tagEndChar+e+this.indentate(n)+i:this.indentate(n)+"<"+t+r+s+">"+e+i}},$.prototype.closeTag=function(e){let t="";return-1!==this.options.unpairedTags.indexOf(e)?this.options.suppressUnpairedNode||(t="/"):t=this.options.suppressEmptyNode?"/":`></${e}`,t},$.prototype.buildTextValNode=function(e,t,r,n){if(!1!==this.options.cdataPropName&&t===this.options.cdataPropName)return this.indentate(n)+`<![CDATA[${e}]]>`+this.newLine;if(!1!==this.options.commentPropName&&t===this.options.commentPropName)return this.indentate(n)+`\x3c!--${e}--\x3e`+this.newLine;if("?"===t[0])return this.indentate(n)+"<"+t+r+"?"+this.tagEndChar;{let i=this.options.tagValueProcessor(t,e);return i=this.replaceEntitiesValue(i),""===i?this.indentate(n)+"<"+t+r+this.closeTag(t)+this.tagEndChar:this.indentate(n)+"<"+t+r+">"+i+"</"+t+this.tagEndChar}},$.prototype.replaceEntitiesValue=function(e){if(e&&e.length>0&&this.options.processEntities)for(let t=0;t<this.options.entities.length;t++){const r=this.options.entities[t];e=e.replace(r.regex,r.val)}return e};var M="object"==typeof o&&o.env&&o.env.NODE_DEBUG&&/\bsemver\b/i.test(o.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{},G={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:16,MAX_SAFE_BUILD_LENGTH:250,MAX_SAFE_INTEGER:Number.MAX_SAFE_INTEGER||9007199254740991,RELEASE_TYPES:["major","premajor","minor","preminor","patch","prepatch","prerelease"],SEMVER_SPEC_VERSION:"2.0.0",FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2},B={exports:{}};!function(e,t){const{MAX_SAFE_COMPONENT_LENGTH:r,MAX_SAFE_BUILD_LENGTH:n,MAX_LENGTH:i}=G,s=M,o=(t=e.exports={}).re=[],a=t.safeRe=[],l=t.src=[],d=t.t={};let u=0;const c="[a-zA-Z0-9-]",m=[["\\s",1],["\\d",i],[c,n]],f=(e,t,r)=>{const n=(e=>{for(const[t,r]of m)e=e.split(`${t}*`).join(`${t}{0,${r}}`).split(`${t}+`).join(`${t}{1,${r}}`);return e})(t),i=u++;s(e,i,t),d[e]=i,l[i]=t,o[i]=new RegExp(t,r?"g":void 0),a[i]=new RegExp(n,r?"g":void 0)};f("NUMERICIDENTIFIER","0|[1-9]\\d*"),f("NUMERICIDENTIFIERLOOSE","\\d+"),f("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${c}*`),f("MAINVERSION",`(${l[d.NUMERICIDENTIFIER]})\\.(${l[d.NUMERICIDENTIFIER]})\\.(${l[d.NUMERICIDENTIFIER]})`),f("MAINVERSIONLOOSE",`(${l[d.NUMERICIDENTIFIERLOOSE]})\\.(${l[d.NUMERICIDENTIFIERLOOSE]})\\.(${l[d.NUMERICIDENTIFIERLOOSE]})`),f("PRERELEASEIDENTIFIER",`(?:${l[d.NUMERICIDENTIFIER]}|${l[d.NONNUMERICIDENTIFIER]})`),f("PRERELEASEIDENTIFIERLOOSE",`(?:${l[d.NUMERICIDENTIFIERLOOSE]}|${l[d.NONNUMERICIDENTIFIER]})`),f("PRERELEASE",`(?:-(${l[d.PRERELEASEIDENTIFIER]}(?:\\.${l[d.PRERELEASEIDENTIFIER]})*))`),f("PRERELEASELOOSE",`(?:-?(${l[d.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[d.PRERELEASEIDENTIFIERLOOSE]})*))`),f("BUILDIDENTIFIER",`${c}+`),f("BUILD",`(?:\\+(${l[d.BUILDIDENTIFIER]}(?:\\.${l[d.BUILDIDENTIFIER]})*))`),f("FULLPLAIN",`v?${l[d.MAINVERSION]}${l[d.PRERELEASE]}?${l[d.BUILD]}?`),f("FULL",`^${l[d.FULLPLAIN]}$`),f("LOOSEPLAIN",`[v=\\s]*${l[d.MAINVERSIONLOOSE]}${l[d.PRERELEASELOOSE]}?${l[d.BUILD]}?`),f("LOOSE",`^${l[d.LOOSEPLAIN]}$`),f("GTLT","((?:<|>)?=?)"),f("XRANGEIDENTIFIERLOOSE",`${l[d.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),f("XRANGEIDENTIFIER",`${l[d.NUMERICIDENTIFIER]}|x|X|\\*`),f("XRANGEPLAIN",`[v=\\s]*(${l[d.XRANGEIDENTIFIER]})(?:\\.(${l[d.XRANGEIDENTIFIER]})(?:\\.(${l[d.XRANGEIDENTIFIER]})(?:${l[d.PRERELEASE]})?${l[d.BUILD]}?)?)?`),f("XRANGEPLAINLOOSE",`[v=\\s]*(${l[d.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[d.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[d.XRANGEIDENTIFIERLOOSE]})(?:${l[d.PRERELEASELOOSE]})?${l[d.BUILD]}?)?)?`),f("XRANGE",`^${l[d.GTLT]}\\s*${l[d.XRANGEPLAIN]}$`),f("XRANGELOOSE",`^${l[d.GTLT]}\\s*${l[d.XRANGEPLAINLOOSE]}$`),f("COERCEPLAIN",`(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`),f("COERCE",`${l[d.COERCEPLAIN]}(?:$|[^\\d])`),f("COERCEFULL",l[d.COERCEPLAIN]+`(?:${l[d.PRERELEASE]})?(?:${l[d.BUILD]})?(?:$|[^\\d])`),f("COERCERTL",l[d.COERCE],!0),f("COERCERTLFULL",l[d.COERCEFULL],!0),f("LONETILDE","(?:~>?)"),f("TILDETRIM",`(\\s*)${l[d.LONETILDE]}\\s+`,!0),t.tildeTrimReplace="$1~",f("TILDE",`^${l[d.LONETILDE]}${l[d.XRANGEPLAIN]}$`),f("TILDELOOSE",`^${l[d.LONETILDE]}${l[d.XRANGEPLAINLOOSE]}$`),f("LONECARET","(?:\\^)"),f("CARETTRIM",`(\\s*)${l[d.LONECARET]}\\s+`,!0),t.caretTrimReplace="$1^",f("CARET",`^${l[d.LONECARET]}${l[d.XRANGEPLAIN]}$`),f("CARETLOOSE",`^${l[d.LONECARET]}${l[d.XRANGEPLAINLOOSE]}$`),f("COMPARATORLOOSE",`^${l[d.GTLT]}\\s*(${l[d.LOOSEPLAIN]})$|^$`),f("COMPARATOR",`^${l[d.GTLT]}\\s*(${l[d.FULLPLAIN]})$|^$`),f("COMPARATORTRIM",`(\\s*)${l[d.GTLT]}\\s*(${l[d.LOOSEPLAIN]}|${l[d.XRANGEPLAIN]})`,!0),t.comparatorTrimReplace="$1$2$3",f("HYPHENRANGE",`^\\s*(${l[d.XRANGEPLAIN]})\\s+-\\s+(${l[d.XRANGEPLAIN]})\\s*$`),f("HYPHENRANGELOOSE",`^\\s*(${l[d.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[d.XRANGEPLAINLOOSE]})\\s*$`),f("STAR","(<|>)?=?\\s*\\*"),f("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),f("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")}(B,B.exports);var k=B.exports;Object.freeze({loose:!0}),Object.freeze({});const V=/^[0-9]+$/,j=(e,t)=>{const r=V.test(e),n=V.test(t);return r&&n&&(e=+e,t=+t),e===t?0:r&&!n?-1:n&&!r?1:e<t?-1:1};var U={compareIdentifiers:j,rcompareIdentifiers:(e,t)=>j(t,e)};const{MAX_LENGTH:X,MAX_SAFE_INTEGER:H}=G,{safeRe:Y,t:W}=k,{compareIdentifiers:Z}=U;s.m}},i={};function s(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,s),r.loaded=!0,r.exports}s.m=n,e=[],s.O=(t,r,n,i)=>{if(!r){var o=1/0;for(u=0;u<e.length;u++){r=e[u][0],n=e[u][1],i=e[u][2];for(var a=!0,l=0;l<r.length;l++)(!1&i||o>=i)&&Object.keys(s.O).every((e=>s.O[e](r[l])))?r.splice(l--,1):(a=!1,i<o&&(o=i));if(a){e.splice(u--,1);var d=n();void 0!==d&&(t=d)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,n,i]},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,r)=>(s.f[r](e,t),t)),[])),s.u=e=>e+"-"+e+".js?v="+{5706:"3153330af47fc26a725a",6127:"40fbb3532bb7846b7035"}[e],s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="nextcloud:",s.l=(e,n,i,o)=>{if(t[e])t[e].push(n);else{var a,l;if(void 0!==i)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var c=d[u];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==r+i){a=c;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.setAttribute("data-webpack",r+i),a.src=e),t[e]=[n];var m=(r,n)=>{a.onerror=a.onload=null,clearTimeout(f);var i=t[e];if(delete t[e],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((e=>e(n))),r)return r(n)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=m.bind(null,a.onerror),a.onload=m.bind(null,a.onload),l&&document.head.appendChild(a)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),s.j=9735,(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),(()=>{s.b=document.baseURI||self.location.href;var e={9735:0};s.f.j=(t,r)=>{var n=s.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var i=new Promise(((r,i)=>n=e[t]=[r,i]));r.push(n[2]=i);var o=s.p+s.u(t),a=new Error;s.l(o,(r=>{if(s.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var i=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",a.name="ChunkLoadError",a.type=i,a.request=o,n[1](a)}}),"chunk-"+t,t)}},s.O.j=t=>0===e[t];var t=(t,r)=>{var n,i,o=r[0],a=r[1],l=r[2],d=0;if(o.some((t=>0!==e[t]))){for(n in a)s.o(a,n)&&(s.m[n]=a[n]);if(l)var u=l(s)}for(t&&t(r);d<o.length;d++)i=o[d],s.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return s.O(u)},r=self.webpackChunknextcloud=self.webpackChunknextcloud||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),s.nc=void 0;var o=s.O(void 0,[4208],(()=>s(99563)));o=s.O(o)})();
//# sourceMappingURL=files_reminders-init.js.map?v=fb612a6226469d29b663