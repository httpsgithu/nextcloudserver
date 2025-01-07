(()=>{var e,o,s,n={87400:(e,o,s)=>{"use strict";var n=s(21777),i=s(53334),r=s(65899),a=s(85471),c=s(85168),m=s(55042),l=s(28326),d=s(70995);const u={name:"RefreshIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var p=s(14486);const A=(0,p.A)(u,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon refresh-icon",attrs:{"aria-hidden":t.title?null:"true","aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports,h={name:"MessageReplyTextIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},C=(0,p.A)(h,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon message-reply-text-icon",attrs:{"aria-hidden":t.title?null:"true","aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M18,8H6V6H18V8M18,11H6V9H18V11M18,14H6V12H18V14M22,4A2,2 0 0,0 20,2H4A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H18L22,22V4Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports;var g=s(57578),f=s(57505),v=s(24764),y=s(15502),_=s(41944),b=s(4604),x=s(59892),w=s(80701),I=s(33691),k=s(66001),T=s(79759),D=s(2413),N=s(63814);const S=function(){return(0,N.dC)("dav/comments")};function E(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const o=new DOMParser;let s=t;for(let t=0;t<e;t++)s=o.parseFromString(s,"text/html").documentElement.textContent;return s}var M=s(65043),O=s(60669);const R=(0,O.UU)(S()),B=t=>{R.setHeaders({"X-Requested-With":"XMLHttpRequest",requesttoken:t??""})};(0,n.zo)(B),B((0,n.do)());const L=R,j=(0,r.nY)("deletedCommentLimbo",{state:()=>({idsInLimbo:[]}),actions:{addId(t){this.idsInLimbo.push(t)},removeId(t){const e=this.idsInLimbo.indexOf(t);e>-1&&this.idsInLimbo.splice(e,1)},checkForId(t){this.idsInLimbo.includes(t)}}}),$=(0,s(35947).YK)().setApp("comments").detectUser().build(),H={props:{id:{type:Number,default:null},message:{type:String,default:""},resourceId:{type:[String,Number],required:!0},resourceType:{type:String,default:"files"}},data:()=>({deleted:!1,editing:!1,loading:!1}),computed:{...(0,r.n2)(j)},methods:{onEdit(){this.editing=!0},onEditCancel(){this.editing=!1,this.updateLocalMessage(this.message)},async onEditComment(e){this.loading=!0;try{await async function(t,e,o,s){const n=["",t,e,o].join("/");return await L.customRequest(n,Object.assign({method:"PROPPATCH",data:`<?xml version="1.0"?>\n\t\t\t<d:propertyupdate\n\t\t\t\txmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns">\n\t\t\t<d:set>\n\t\t\t\t<d:prop>\n\t\t\t\t\t<oc:message>${s}</oc:message>\n\t\t\t\t</d:prop>\n\t\t\t</d:set>\n\t\t\t</d:propertyupdate>`}))}(this.resourceType,this.resourceId,this.id,e),$.debug("Comment edited",{resourceType:this.resourceType,resourceId:this.resourceId,id:this.id,message:e}),this.$emit("update:message",e),this.editing=!1}catch(e){(0,c.Qg)(t("comments","An error occurred while trying to edit the comment")),console.error(e)}finally{this.loading=!1}},onDeleteWithUndo(){this.$emit("delete"),this.deleted=!0,this.deletedCommentLimboStore.addId(this.id);const e=setTimeout(this.onDelete,c.Br);(0,c._h)(t("comments","Comment deleted"),(()=>{clearTimeout(e),this.deleted=!1,this.deletedCommentLimboStore.removeId(this.id)}))},async onDelete(){try{await async function(t,e,o){const s=["",t,e,o].join("/");await L.deleteFile(s)}(this.resourceType,this.resourceId,this.id),$.debug("Comment deleted",{resourceType:this.resourceType,resourceId:this.resourceId,id:this.id}),this.$emit("delete",this.id)}catch(e){(0,c.Qg)(t("comments","An error occurred while trying to delete the comment")),console.error(e),this.deleted=!1,this.deletedCommentLimboStore.removeId(this.id)}},async onNewComment(e){this.loading=!0;try{const t=await async function(t,e,o){const s=["",t,e].join("/"),i=await M.Ay.post(S()+s,{actorDisplayName:(0,n.HW)().displayName,actorId:(0,n.HW)().uid,actorType:"users",creationDateTime:(new Date).toUTCString(),message:o,objectType:t,verb:"comment"}),r=s+"/"+parseInt(i.headers["content-location"].split("/").pop()),a=await L.stat(r,{details:!0}),c=a.data.props;return c.actorDisplayName=E(c.actorDisplayName,2),c.message=E(c.message,2),a.data}(this.resourceType,this.resourceId,e);$.debug("New comment posted",{resourceType:this.resourceType,resourceId:this.resourceId,newComment:t}),this.$emit("new",t),this.$emit("update:message",""),this.localMessage=""}catch(e){(0,c.Qg)(t("comments","An error occurred while trying to create the comment")),console.error(e)}finally{this.loading=!1}}}},P={name:"Comment",components:{IconArrowRight:I.A,IconClose:k.A,IconDelete:T.A,IconEdit:D.A,NcActionButton:f.A,NcActions:v.A,NcActionSeparator:y.A,NcAvatar:_.A,NcButton:d.A,NcDateTime:b.A,NcLoadingIcon:x.A,NcRichContenteditable:()=>Promise.all([s.e(4208),s.e(5528)]).then(s.bind(s,95528))},mixins:[w.Ay,H],inheritAttrs:!1,props:{actorDisplayName:{type:String,required:!0},actorId:{type:String,required:!0},creationDateTime:{type:String,default:null},editor:{type:Boolean,default:!1},autoComplete:{type:Function,required:!0},tag:{type:String,default:"div"}},data:()=>({expanded:!1,localMessage:"",submitted:!1}),computed:{...(0,r.n2)(j),isOwnComment(){return(0,n.HW)().uid===this.actorId},renderedContent(){return this.isEmptyMessage?"":this.renderContent(this.localMessage)},isEmptyMessage(){return!this.localMessage||""===this.localMessage.trim()},timestamp(){return Date.parse(this.creationDateTime)},isLimbo(){return this.deletedCommentLimboStore.checkForId(this.id)}},watch:{message(t){this.updateLocalMessage(t)}},beforeMount(){this.updateLocalMessage(this.message)},methods:{t:i.Tl,updateLocalMessage(t){this.localMessage=t.toString(),this.submitted=!1},onSubmit(){if(""!==this.localMessage.trim())return this.editor?(this.onNewComment(this.localMessage.trim()),void this.$nextTick((()=>{this.$refs.editor.$el.focus()}))):void this.onEditComment(this.localMessage.trim())},onExpand(){this.expanded=!0}}};var q=s(85072),V=s.n(q),z=s(97825),W=s.n(z),F=s(77659),G=s.n(F),U=s(55056),Y=s.n(U),Q=s(10540),K=s.n(Q),Z=s(41113),X=s.n(Z),J=s(27517),tt={};tt.styleTagTransform=X(),tt.setAttributes=Y(),tt.insert=G().bind(null,"head"),tt.domAPI=W(),tt.insertStyleElement=K(),V()(J.A,tt),J.A&&J.A.locals&&J.A.locals;const et=(0,p.A)(P,(function(){var t=this,e=t._self._c;return e(t.tag,{directives:[{name:"show",rawName:"v-show",value:!t.deleted&&!t.isLimbo,expression:"!deleted && !isLimbo"}],tag:"component",staticClass:"comment",class:{"comment--loading":t.loading}},[e("div",{staticClass:"comment__side"},[e("NcAvatar",{staticClass:"comment__avatar",attrs:{"display-name":t.actorDisplayName,user:t.actorId,size:32}})],1),t._v(" "),e("div",{staticClass:"comment__body"},[e("div",{staticClass:"comment__header"},[e("span",{staticClass:"comment__author"},[t._v(t._s(t.actorDisplayName))]),t._v(" "),t.isOwnComment&&t.id&&!t.loading?e("NcActions",{staticClass:"comment__actions"},[t.editing?e("NcActionButton",{on:{click:t.onEditCancel},scopedSlots:t._u([{key:"icon",fn:function(){return[e("IconClose",{attrs:{size:20}})]},proxy:!0}],null,!1,2888946197)},[t._v("\n\t\t\t\t\t"+t._s(t.t("comments","Cancel edit"))+"\n\t\t\t\t")]):[e("NcActionButton",{attrs:{"close-after-click":""},on:{click:t.onEdit},scopedSlots:t._u([{key:"icon",fn:function(){return[e("IconEdit",{attrs:{size:20}})]},proxy:!0}],null,!1,649782975)},[t._v("\n\t\t\t\t\t\t"+t._s(t.t("comments","Edit comment"))+"\n\t\t\t\t\t")]),t._v(" "),e("NcActionSeparator"),t._v(" "),e("NcActionButton",{attrs:{"close-after-click":""},on:{click:t.onDeleteWithUndo},scopedSlots:t._u([{key:"icon",fn:function(){return[e("IconDelete",{attrs:{size:20}})]},proxy:!0}],null,!1,881161434)},[t._v("\n\t\t\t\t\t\t"+t._s(t.t("comments","Delete comment"))+"\n\t\t\t\t\t")])]],2):t._e(),t._v(" "),t.id&&t.loading?e("div",{staticClass:"comment_loading icon-loading-small"}):t.creationDateTime?e("NcDateTime",{staticClass:"comment__timestamp",attrs:{timestamp:t.timestamp,"ignore-seconds":!0}}):t._e()],1),t._v(" "),t.editor||t.editing?e("form",{staticClass:"comment__editor",on:{submit:function(t){t.preventDefault()}}},[e("div",{staticClass:"comment__editor-group"},[e("NcRichContenteditable",{ref:"editor",attrs:{"auto-complete":t.autoComplete,contenteditable:!t.loading,label:t.editor?t.t("comments","New comment"):t.t("comments","Edit comment"),placeholder:t.t("comments","Write a comment …"),value:t.localMessage,"user-data":t.userData,"aria-describedby":"tab-comments__editor-description"},on:{"update:value":t.updateLocalMessage,submit:t.onSubmit}}),t._v(" "),e("div",{staticClass:"comment__submit"},[e("NcButton",{attrs:{type:"tertiary-no-background","native-type":"submit","aria-label":t.t("comments","Post comment"),disabled:t.isEmptyMessage},on:{click:t.onSubmit},scopedSlots:t._u([{key:"icon",fn:function(){return[t.loading?e("NcLoadingIcon"):e("IconArrowRight",{attrs:{size:20}})]},proxy:!0}],null,!1,758946661)})],1)],1),t._v(" "),e("div",{staticClass:"comment__editor-description",attrs:{id:"tab-comments__editor-description"}},[t._v("\n\t\t\t\t"+t._s(t.t("comments","@ for mentions, : for emoji, / for smart picker"))+"\n\t\t\t")])]):e("div",{staticClass:"comment__message",class:{"comment__message--expanded":t.expanded},domProps:{innerHTML:t._s(t.renderedContent)},on:{click:t.onExpand}})])])}),[],!1,null,"1f6341c6",null).exports;var ot=s(32981);const st=(0,a.pM)({props:{resourceId:{type:Number,required:!0},resourceType:{type:String,default:"files"}},data:()=>({editorData:{actorDisplayName:(0,n.HW)().displayName,actorId:(0,n.HW)().uid,key:"editor"},userData:{}}),methods:{async autoComplete(t,e){const{data:o}=await M.Ay.get((0,N.KT)("core/autocomplete/get"),{params:{search:t,itemType:"files",itemId:this.resourceId,sorter:"commenters|share-recipients",limit:(0,ot.C)("comments","maxAutoCompleteResults")}});return o.ocs.data.forEach((t=>{this.userData[t.id]=t})),e(Object.values(this.userData))},genMentionsData(t){return Object.values(t).flat().forEach((t=>{this.userData[t.mentionId]={icon:"icon-user",id:t.mentionId,label:t.mentionDisplayName,source:"users",primary:(0,n.HW)()?.uid===t.mentionId}})),this.userData}}});var nt=s(54290),it=s(90176);const rt=async function(t,e){let{resourceType:o,resourceId:s}=t;const n=["",o,s].join("/"),i=e.datetime?`<oc:datetime>${e.datetime.toISOString()}</oc:datetime>`:"",r=await L.customRequest(n,Object.assign({method:"REPORT",data:`<?xml version="1.0"?>\n\t\t\t<oc:filter-comments\n\t\t\t\txmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t\t<oc:limit>${e.limit??20}</oc:limit>\n\t\t\t\t<oc:offset>${e.offset||0}</oc:offset>\n\t\t\t\t${i}\n\t\t\t</oc:filter-comments>`},e)),a=await r.text(),c=await(0,O.h4)(a),m=at(c,!0);return(0,nt.hq)(r,m,!0)},at=function(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{multistatus:{response:o}}=t;return o.map((t=>{const o=t.propstat.prop;return(0,it.ch)(o,o.id.toString(),e)}))},ct={name:"Comments",components:{Comment:et,NcEmptyContent:l.A,NcButton:d.A,RefreshIcon:A,MessageReplyTextIcon:C,AlertCircleOutlineIcon:g.A},directives:{elementVisibility:m.Zx},mixins:[st],data(){return{error:"",loading:!1,done:!1,currentResourceId:this.resourceId,offset:0,comments:[],cancelRequest:()=>{},Comment:et,userData:{}}},computed:{hasComments(){return this.comments.length>0},isFirstLoading(){return this.loading&&0===this.offset}},watch:{resourceId(){this.currentResourceId=this.resourceId}},methods:{t:i.Tl,async onVisibilityChange(t){if(t)try{await((t,e,o)=>{const s=["",t,e].join("/"),n=o.toUTCString();return L.customRequest(s,{method:"PROPPATCH",data:`<?xml version="1.0"?>\n\t\t\t<d:propertyupdate\n\t\t\t\txmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns">\n\t\t\t<d:set>\n\t\t\t\t<d:prop>\n\t\t\t\t\t<oc:readMarker>${n}</oc:readMarker>\n\t\t\t\t</d:prop>\n\t\t\t</d:set>\n\t\t\t</d:propertyupdate>`})})(this.resourceType,this.currentResourceId,new Date)}catch(t){(0,c.Qg)(t.message||(0,i.Tl)("comments","Failed to mark comments as read"))}},async update(t){this.currentResourceId=t,this.resetState(),this.getComments()},onScrollBottomReached(){this.error||this.done||this.loading||this.getComments()},async getComments(){this.cancelRequest("cancel");try{this.loading=!0,this.error="";const{request:t,abort:e}=function(t){const e=new AbortController,o=e.signal;return{request:async function(e,s){return await t(e,Object.assign({signal:o},s))},abort:()=>e.abort()}}(rt);this.cancelRequest=e;const{data:o}=await t({resourceType:this.resourceType,resourceId:this.currentResourceId},{offset:this.offset})||{data:[]};this.logger.debug(`Processed ${o.length} comments`,{comments:o}),o.length<20&&(this.done=!0),this.comments.push(...o),this.offset+=20}catch(t){if("cancel"===t.message)return;this.error=(0,i.Tl)("comments","Unable to load the comments list"),console.error("Error loading the comments list",t)}finally{this.loading=!1}},onNewComment(t){this.comments.unshift(t)},onDelete(t){const e=this.comments.findIndex((e=>e.props.id===t));e>-1?this.comments.splice(e,1):console.error("Could not find the deleted comment in the list",t)},resetState(){this.error="",this.loading=!1,this.done=!1,this.offset=0,this.comments=[]}}};var mt=s(43599),lt={};lt.styleTagTransform=X(),lt.setAttributes=Y(),lt.insert=G().bind(null,"head"),lt.domAPI=W(),lt.insertStyleElement=K(),V()(mt.A,lt),mt.A&&mt.A.locals&&mt.A.locals;const dt=(0,p.A)(ct,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"element-visibility",rawName:"v-element-visibility",value:t.onVisibilityChange,expression:"onVisibilityChange"}],staticClass:"comments",class:{"icon-loading":t.isFirstLoading}},[e("Comment",t._b({staticClass:"comments__writer",attrs:{"auto-complete":t.autoComplete,"resource-type":t.resourceType,editor:!0,"user-data":t.userData,"resource-id":t.currentResourceId},on:{new:t.onNewComment}},"Comment",t.editorData,!1)),t._v(" "),t.isFirstLoading?t._e():[!t.hasComments&&t.done?e("NcEmptyContent",{staticClass:"comments__empty",attrs:{name:t.t("comments","No comments yet, start the conversation!")},scopedSlots:t._u([{key:"icon",fn:function(){return[e("MessageReplyTextIcon")]},proxy:!0}],null,!1,1033639148)}):e("ul",t._l(t.comments,(function(o){return e("Comment",t._b({key:o.props.id,staticClass:"comments__list",attrs:{tag:"li","auto-complete":t.autoComplete,"resource-type":t.resourceType,message:o.props.message,"resource-id":t.currentResourceId,"user-data":t.genMentionsData(o.props.mentions)},on:{"update:message":function(e){return t.$set(o.props,"message",e)},delete:t.onDelete}},"Comment",o.props,!1))})),1),t._v(" "),t.loading&&!t.isFirstLoading?e("div",{staticClass:"comments__info icon-loading"}):t.hasComments&&t.done?e("div",{staticClass:"comments__info"},[t._v("\n\t\t\t"+t._s(t.t("comments","No more messages"))+"\n\t\t")]):t.error?[e("NcEmptyContent",{staticClass:"comments__error",attrs:{name:t.error},scopedSlots:t._u([{key:"icon",fn:function(){return[e("AlertCircleOutlineIcon")]},proxy:!0}],null,!1,66050004)}),t._v(" "),e("NcButton",{staticClass:"comments__retry",on:{click:t.getComments},scopedSlots:t._u([{key:"icon",fn:function(){return[e("RefreshIcon")]},proxy:!0}],null,!1,3924573781)},[t._v("\n\t\t\t\t"+t._s(t.t("comments","Retry"))+"\n\t\t\t")])]:t._e()]],2)}),[],!1,null,"df914872",null).exports;a.Ay.use(r.R2),s.nc=(0,n.aV)(),a.Ay.mixin({data:()=>({logger:$}),methods:{t:i.t,n:i.n}}),window.OCA&&!window.OCA.Comments&&Object.assign(window.OCA,{Comments:{}}),Object.assign(window.OCA.Comments,{View:class{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"files",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const o=(0,r.Ey)();return e={...e,propsData:{...e.propsData??{},resourceType:t},pinia:o},new(a.Ay.extend(dt))(e)}}}),console.debug("OCA.Comments.View initialized")},27517:(t,e,o)=>{"use strict";o.d(e,{A:()=>a});var s=o(71354),n=o.n(s),i=o(76314),r=o.n(i)()(n());r.push([t.id,".comment[data-v-1f6341c6]{display:flex;gap:8px;padding:5px 10px}.comment__side[data-v-1f6341c6]{display:flex;align-items:flex-start;padding-top:6px}.comment__body[data-v-1f6341c6]{display:flex;flex-grow:1;flex-direction:column}.comment__header[data-v-1f6341c6]{display:flex;align-items:center;min-height:44px}.comment__actions[data-v-1f6341c6]{margin-inline-start:10px !important}.comment__author[data-v-1f6341c6]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:var(--color-text-maxcontrast)}.comment_loading[data-v-1f6341c6],.comment__timestamp[data-v-1f6341c6]{margin-inline-start:auto;text-align:end;white-space:nowrap;color:var(--color-text-maxcontrast)}.comment__editor-group[data-v-1f6341c6]{position:relative}.comment__editor-description[data-v-1f6341c6]{color:var(--color-text-maxcontrast);padding-block:var(--default-grid-baseline)}.comment__submit[data-v-1f6341c6]{position:absolute !important;bottom:5px;inset-inline-end:0}.comment__message[data-v-1f6341c6]{white-space:pre-wrap;word-break:break-word;max-height:70px;overflow:hidden;margin-top:-6px}.comment__message--expanded[data-v-1f6341c6]{max-height:none;overflow:visible}.rich-contenteditable__input[data-v-1f6341c6]{min-height:44px;margin:0;padding:10px}","",{version:3,sources:["webpack://./apps/comments/src/components/Comment.vue"],names:[],mappings:"AAKA,0BACC,YAAA,CACA,OAAA,CACA,gBAAA,CAEA,gCACC,YAAA,CACA,sBAAA,CACA,eAAA,CAGD,gCACC,YAAA,CACA,WAAA,CACA,qBAAA,CAGD,kCACC,YAAA,CACA,kBAAA,CACA,eAAA,CAGD,mCACC,mCAAA,CAGD,kCACC,eAAA,CACA,kBAAA,CACA,sBAAA,CACA,mCAAA,CAGD,uEAEC,wBAAA,CACA,cAAA,CACA,kBAAA,CACA,mCAAA,CAGD,wCACC,iBAAA,CAGD,8CACC,mCAAA,CACA,0CAAA,CAGD,kCACC,4BAAA,CACA,UAAA,CACA,kBAAA,CAGD,mCACC,oBAAA,CACA,qBAAA,CACA,eAAA,CACA,eAAA,CACA,eAAA,CACA,6CACC,eAAA,CACA,gBAAA,CAKH,8CACC,eAAA,CACA,QAAA,CACA,YA3EiB",sourceRoot:""}]);const a=r},43599:(t,e,o)=>{"use strict";o.d(e,{A:()=>a});var s=o(71354),n=o.n(s),i=o(76314),r=o.n(i)()(n());r.push([t.id,".comments[data-v-df914872]{min-height:100%;display:flex;flex-direction:column}.comments__empty[data-v-df914872],.comments__error[data-v-df914872]{flex:1 0}.comments__retry[data-v-df914872]{margin:0 auto}.comments__info[data-v-df914872]{height:60px;color:var(--color-text-maxcontrast);text-align:center;line-height:60px}","",{version:3,sources:["webpack://./apps/comments/src/views/Comments.vue"],names:[],mappings:"AACA,2BACC,eAAA,CACA,YAAA,CACA,qBAAA,CAEA,oEAEC,QAAA,CAGD,kCACC,aAAA,CAGD,iCACC,WAAA,CACA,mCAAA,CACA,iBAAA,CACA,gBAAA",sourceRoot:""}]);const a=r},42634:()=>{},63779:()=>{},77199:()=>{},59169:()=>{},86833:()=>{}},i={};function r(t){var e=i[t];if(void 0!==e)return e.exports;var o=i[t]={id:t,loaded:!1,exports:{}};return n[t].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=n,e=[],r.O=(t,o,s,n)=>{if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],s=e[l][1],n=e[l][2];for(var a=!0,c=0;c<o.length;c++)(!1&n||i>=n)&&Object.keys(r.O).every((t=>r.O[t](o[c])))?o.splice(c--,1):(a=!1,n<i&&(i=n));if(a){e.splice(l--,1);var m=s();void 0!==m&&(t=m)}}return t}n=n||0;for(var l=e.length;l>0&&e[l-1][2]>n;l--)e[l]=e[l-1];e[l]=[o,s,n]},r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.f={},r.e=t=>Promise.all(Object.keys(r.f).reduce(((e,o)=>(r.f[o](t,e),e)),[])),r.u=t=>t+"-"+t+".js?v="+{5528:"f8c82ca706bbd1c68212",5706:"3153330af47fc26a725a",5862:"7b9b02dc0a1b898066ef",6127:"cc7e4275204e7c2d643a"}[t],r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o={},s="nextcloud:",r.l=(t,e,n,i)=>{if(o[t])o[t].push(e);else{var a,c;if(void 0!==n)for(var m=document.getElementsByTagName("script"),l=0;l<m.length;l++){var d=m[l];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==s+n){a=d;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",s+n),a.src=t),o[t]=[e];var u=(e,s)=>{a.onerror=a.onload=null,clearTimeout(p);var n=o[t];if(delete o[t],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((t=>t(s))),e)return e(s)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),c&&document.head.appendChild(a)}},r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),r.j=7062,(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");if(o.length)for(var s=o.length-1;s>-1&&(!t||!/^http(s?):/.test(t));)t=o[s--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),(()=>{r.b=document.baseURI||self.location.href;var t={7062:0};r.f.j=(e,o)=>{var s=r.o(t,e)?t[e]:void 0;if(0!==s)if(s)o.push(s[2]);else{var n=new Promise(((o,n)=>s=t[e]=[o,n]));o.push(s[2]=n);var i=r.p+r.u(e),a=new Error;r.l(i,(o=>{if(r.o(t,e)&&(0!==(s=t[e])&&(t[e]=void 0),s)){var n=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;a.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",a.name="ChunkLoadError",a.type=n,a.request=i,s[1](a)}}),"chunk-"+e,e)}},r.O.j=e=>0===t[e];var e=(e,o)=>{var s,n,i=o[0],a=o[1],c=o[2],m=0;if(i.some((e=>0!==t[e]))){for(s in a)r.o(a,s)&&(r.m[s]=a[s]);if(c)var l=c(r)}for(e&&e(o);m<i.length;m++)n=i[m],r.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return r.O(l)},o=self.webpackChunknextcloud=self.webpackChunknextcloud||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))})(),r.nc=void 0;var a=r.O(void 0,[4208],(()=>r(87400)));a=r.O(a)})();
//# sourceMappingURL=comments-comments-app.js.map?v=338f20c2b679ba45798a