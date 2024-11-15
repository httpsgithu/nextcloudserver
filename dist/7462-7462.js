"use strict";(self.webpackChunknextcloud=self.webpackChunknextcloud||[]).push([[7462],{10396:(e,o,s)=>{s.d(o,{A:()=>A});var i=s(85168),n=s(70395),a=s(80486),r=s(10767),c=s(65899),d=s(36564),m=s(96689);const A={props:{id:{type:Number,default:null},message:{type:String,default:""},resourceId:{type:[String,Number],required:!0},resourceType:{type:String,default:"files"}},data:()=>({deleted:!1,editing:!1,loading:!1}),computed:{...(0,c.n2)(d.h)},methods:{onEdit(){this.editing=!0},onEditCancel(){this.editing=!1,this.updateLocalMessage(this.message)},async onEditComment(e){this.loading=!0;try{await(0,r.A)(this.resourceType,this.resourceId,this.id,e),m.A.debug("Comment edited",{resourceType:this.resourceType,resourceId:this.resourceId,id:this.id,message:e}),this.$emit("update:message",e),this.editing=!1}catch(e){(0,i.Qg)(t("comments","An error occurred while trying to edit the comment")),console.error(e)}finally{this.loading=!1}},onDeleteWithUndo(){this.$emit("delete"),this.deleted=!0,this.deletedCommentLimboStore.addId(this.id);const e=setTimeout(this.onDelete,i.Br);(0,i._h)(t("comments","Comment deleted"),(()=>{clearTimeout(e),this.deleted=!1,this.deletedCommentLimboStore.removeId(this.id)}))},async onDelete(){try{await(0,a.A)(this.resourceType,this.resourceId,this.id),m.A.debug("Comment deleted",{resourceType:this.resourceType,resourceId:this.resourceId,id:this.id}),this.$emit("delete",this.id)}catch(e){(0,i.Qg)(t("comments","An error occurred while trying to delete the comment")),console.error(e),this.deleted=!1,this.deletedCommentLimboStore.removeId(this.id)}},async onNewComment(e){this.loading=!0;try{const t=await(0,n.A)(this.resourceType,this.resourceId,e);m.A.debug("New comment posted",{resourceType:this.resourceType,resourceId:this.resourceId,newComment:t}),this.$emit("new",t),this.$emit("update:message",""),this.localMessage=""}catch(e){(0,i.Qg)(t("comments","An error occurred while trying to create the comment")),console.error(e)}finally{this.loading=!1}}}}},80486:(t,e,o)=>{o.d(e,{A:()=>i});var s=o(35550);async function i(t,e,o){const i=["",t,e,o].join("/");await s.A.deleteFile(i)}},10767:(t,e,o)=>{o.d(e,{A:()=>i});var s=o(35550);async function i(t,e,o,i){const n=["",t,e,o].join("/");return await s.A.customRequest(n,Object.assign({method:"PROPPATCH",data:`<?xml version="1.0"?>\n\t\t\t<d:propertyupdate\n\t\t\t\txmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns">\n\t\t\t<d:set>\n\t\t\t\t<d:prop>\n\t\t\t\t\t<oc:message>${i}</oc:message>\n\t\t\t\t</d:prop>\n\t\t\t</d:set>\n\t\t\t</d:propertyupdate>`}))}},70395:(t,e,o)=>{o.d(e,{A:()=>c});var s=o(21777),i=o(17003),n=o(51195),a=o(65043),r=o(35550);async function c(t,e,o){const c=["",t,e].join("/"),d=await a.Ay.post((0,i.e)()+c,{actorDisplayName:(0,s.HW)().displayName,actorId:(0,s.HW)().uid,actorType:"users",creationDateTime:(new Date).toUTCString(),message:o,objectType:t,verb:"comment"}),m=c+"/"+parseInt(d.headers["content-location"].split("/").pop()),A=await r.A.stat(m,{details:!0}),l=A.data.props;return l.actorDisplayName=(0,n.j)(l.actorDisplayName,2),l.message=(0,n.j)(l.message,2),A.data}},36564:(t,e,o)=>{o.d(e,{h:()=>s});const s=(0,o(65899).nY)("deletedCommentLimbo",{state:()=>({idsInLimbo:[]}),actions:{addId(t){this.idsInLimbo.push(t)},removeId(t){const e=this.idsInLimbo.indexOf(t);e>-1&&this.idsInLimbo.splice(e,1)},checkForId(t){this.idsInLimbo.includes(t)}}})},51195:(t,e,o)=>{function s(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const o=new DOMParser;let s=t;for(let t=0;t<e;t++)s=o.parseFromString(s,"text/html").documentElement.textContent;return s}o.d(e,{j:()=>s})},70452:(t,e,o)=>{o.d(e,{A:()=>r});var s=o(65043),i=o(21777),n=o(32981),a=o(63814);const r=(0,o(85471).pM)({props:{resourceId:{type:Number,required:!0},resourceType:{type:String,default:"files"}},data:()=>({editorData:{actorDisplayName:(0,i.HW)().displayName,actorId:(0,i.HW)().uid,key:"editor"},userData:{}}),methods:{async autoComplete(t,e){const{data:o}=await s.Ay.get((0,a.KT)("core/autocomplete/get"),{params:{search:t,itemType:"files",itemId:this.resourceId,sorter:"commenters|share-recipients",limit:(0,n.C)("comments","maxAutoCompleteResults")}});return o.ocs.data.forEach((t=>{this.userData[t.id]=t})),e(Object.values(this.userData))},genMentionsData(t){return Object.values(t).flat().forEach((t=>{this.userData[t.mentionId]={icon:"icon-user",id:t.mentionId,label:t.mentionDisplayName,source:"users",primary:(0,i.HW)()?.uid===t.mentionId}})),this.userData}}})},29369:(t,e,o)=>{o.d(e,{A:()=>v});var s=o(21777),i=o(53334),n=o(18503),a=o(24764),r=o(15502),c=o(41944),d=o(70995),m=o(4604),A=o(59892),l=o(80701),p=o(9191),u=o(24325),C=o(11037),h=o(93919),g=o(10396),_=o(65899),y=o(36564);const v={name:"Comment",components:{IconArrowRight:p.A,IconClose:u.A,IconDelete:C.A,IconEdit:h.A,NcActionButton:n.A,NcActions:a.A,NcActionSeparator:r.A,NcAvatar:c.A,NcButton:d.A,NcDateTime:m.A,NcLoadingIcon:A.A,NcRichContenteditable:()=>Promise.all([o.e(4208),o.e(5528)]).then(o.bind(o,95528))},mixins:[l.Ay,g.A],inheritAttrs:!1,props:{actorDisplayName:{type:String,required:!0},actorId:{type:String,required:!0},creationDateTime:{type:String,default:null},editor:{type:Boolean,default:!1},autoComplete:{type:Function,required:!0},tag:{type:String,default:"div"}},data:()=>({expanded:!1,localMessage:"",submitted:!1}),computed:{...(0,_.n2)(y.h),isOwnComment(){return(0,s.HW)().uid===this.actorId},renderedContent(){return this.isEmptyMessage?"":this.renderContent(this.localMessage)},isEmptyMessage(){return!this.localMessage||""===this.localMessage.trim()},timestamp(){return Date.parse(this.creationDateTime)},isLimbo(){return this.deletedCommentLimboStore.checkForId(this.id)}},watch:{message(t){this.updateLocalMessage(t)}},beforeMount(){this.updateLocalMessage(this.message)},methods:{t:i.Tl,updateLocalMessage(t){this.localMessage=t.toString(),this.submitted=!1},onSubmit(){if(""!==this.localMessage.trim())return this.editor?(this.onNewComment(this.localMessage.trim()),void this.$nextTick((()=>{this.$refs.editor.$el.focus()}))):void this.onEditComment(this.localMessage.trim())},onExpand(){this.expanded=!0}}}},18917:(t,e,o)=>{o.d(e,{X:()=>s,Y:()=>i});var s=function(){var t=this,e=t._self._c;return e(t.tag,{directives:[{name:"show",rawName:"v-show",value:!t.deleted&&!t.isLimbo,expression:"!deleted && !isLimbo"}],tag:"component",staticClass:"comment",class:{"comment--loading":t.loading}},[e("div",{staticClass:"comment__side"},[e("NcAvatar",{staticClass:"comment__avatar",attrs:{"display-name":t.actorDisplayName,user:t.actorId,size:32}})],1),t._v(" "),e("div",{staticClass:"comment__body"},[e("div",{staticClass:"comment__header"},[e("span",{staticClass:"comment__author"},[t._v(t._s(t.actorDisplayName))]),t._v(" "),t.isOwnComment&&t.id&&!t.loading?e("NcActions",{staticClass:"comment__actions"},[t.editing?e("NcActionButton",{on:{click:t.onEditCancel},scopedSlots:t._u([{key:"icon",fn:function(){return[e("IconClose",{attrs:{size:20}})]},proxy:!0}],null,!1,2888946197)},[t._v("\n\t\t\t\t\t"+t._s(t.t("comments","Cancel edit"))+"\n\t\t\t\t")]):[e("NcActionButton",{attrs:{"close-after-click":""},on:{click:t.onEdit},scopedSlots:t._u([{key:"icon",fn:function(){return[e("IconEdit",{attrs:{size:20}})]},proxy:!0}],null,!1,649782975)},[t._v("\n\t\t\t\t\t\t"+t._s(t.t("comments","Edit comment"))+"\n\t\t\t\t\t")]),t._v(" "),e("NcActionSeparator"),t._v(" "),e("NcActionButton",{attrs:{"close-after-click":""},on:{click:t.onDeleteWithUndo},scopedSlots:t._u([{key:"icon",fn:function(){return[e("IconDelete",{attrs:{size:20}})]},proxy:!0}],null,!1,881161434)},[t._v("\n\t\t\t\t\t\t"+t._s(t.t("comments","Delete comment"))+"\n\t\t\t\t\t")])]],2):t._e(),t._v(" "),t.id&&t.loading?e("div",{staticClass:"comment_loading icon-loading-small"}):t.creationDateTime?e("NcDateTime",{staticClass:"comment__timestamp",attrs:{timestamp:t.timestamp,"ignore-seconds":!0}}):t._e()],1),t._v(" "),t.editor||t.editing?e("form",{staticClass:"comment__editor",on:{submit:function(t){t.preventDefault()}}},[e("div",{staticClass:"comment__editor-group"},[e("NcRichContenteditable",{ref:"editor",attrs:{"auto-complete":t.autoComplete,contenteditable:!t.loading,label:t.editor?t.t("comments","New comment"):t.t("comments","Edit comment"),placeholder:t.t("comments","Write a comment …"),value:t.localMessage,"user-data":t.userData,"aria-describedby":"tab-comments__editor-description"},on:{"update:value":t.updateLocalMessage,submit:t.onSubmit}}),t._v(" "),e("div",{staticClass:"comment__submit"},[e("NcButton",{attrs:{type:"tertiary-no-background","native-type":"submit","aria-label":t.t("comments","Post comment"),disabled:t.isEmptyMessage},on:{click:t.onSubmit},scopedSlots:t._u([{key:"icon",fn:function(){return[t.loading?e("NcLoadingIcon"):e("IconArrowRight",{attrs:{size:20}})]},proxy:!0}],null,!1,758946661)})],1)],1),t._v(" "),e("div",{staticClass:"comment__editor-description",attrs:{id:"tab-comments__editor-description"}},[t._v("\n\t\t\t\t"+t._s(t.t("comments","@ for mentions, : for emoji, / for smart picker"))+"\n\t\t\t")])]):e("div",{staticClass:"comment__message",class:{"comment__message--expanded":t.expanded},domProps:{innerHTML:t._s(t.renderedContent)},on:{click:t.onExpand}})])])},i=[]},27517:(t,e,o)=>{o.d(e,{A:()=>r});var s=o(71354),i=o.n(s),n=o(76314),a=o.n(n)()(i());a.push([t.id,".comment[data-v-1f6341c6]{display:flex;gap:8px;padding:5px 10px}.comment__side[data-v-1f6341c6]{display:flex;align-items:flex-start;padding-top:6px}.comment__body[data-v-1f6341c6]{display:flex;flex-grow:1;flex-direction:column}.comment__header[data-v-1f6341c6]{display:flex;align-items:center;min-height:44px}.comment__actions[data-v-1f6341c6]{margin-inline-start:10px !important}.comment__author[data-v-1f6341c6]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:var(--color-text-maxcontrast)}.comment_loading[data-v-1f6341c6],.comment__timestamp[data-v-1f6341c6]{margin-inline-start:auto;text-align:end;white-space:nowrap;color:var(--color-text-maxcontrast)}.comment__editor-group[data-v-1f6341c6]{position:relative}.comment__editor-description[data-v-1f6341c6]{color:var(--color-text-maxcontrast);padding-block:var(--default-grid-baseline)}.comment__submit[data-v-1f6341c6]{position:absolute !important;bottom:5px;inset-inline-end:0}.comment__message[data-v-1f6341c6]{white-space:pre-wrap;word-break:break-word;max-height:70px;overflow:hidden;margin-top:-6px}.comment__message--expanded[data-v-1f6341c6]{max-height:none;overflow:visible}.rich-contenteditable__input[data-v-1f6341c6]{min-height:44px;margin:0;padding:10px}","",{version:3,sources:["webpack://./apps/comments/src/components/Comment.vue"],names:[],mappings:"AAKA,0BACC,YAAA,CACA,OAAA,CACA,gBAAA,CAEA,gCACC,YAAA,CACA,sBAAA,CACA,eAAA,CAGD,gCACC,YAAA,CACA,WAAA,CACA,qBAAA,CAGD,kCACC,YAAA,CACA,kBAAA,CACA,eAAA,CAGD,mCACC,mCAAA,CAGD,kCACC,eAAA,CACA,kBAAA,CACA,sBAAA,CACA,mCAAA,CAGD,uEAEC,wBAAA,CACA,cAAA,CACA,kBAAA,CACA,mCAAA,CAGD,wCACC,iBAAA,CAGD,8CACC,mCAAA,CACA,0CAAA,CAGD,kCACC,4BAAA,CACA,UAAA,CACA,kBAAA,CAGD,mCACC,oBAAA,CACA,qBAAA,CACA,eAAA,CACA,eAAA,CACA,eAAA,CACA,6CACC,eAAA,CACA,gBAAA,CAKH,8CACC,eAAA,CACA,QAAA,CACA,YA3EiB",sourceRoot:""}]);const r=a},72162:(t,e,o)=>{var s=o(85072),i=o.n(s),n=o(97825),a=o.n(n),r=o(77659),c=o.n(r),d=o(55056),m=o.n(d),A=o(10540),l=o.n(A),p=o(41113),u=o.n(p),C=o(27517),h={};h.styleTagTransform=u(),h.setAttributes=m(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),i()(C.A,h),C.A&&C.A.locals&&C.A.locals},65463:(t,e,o)=>{o.d(e,{A:()=>n});var s=o(18917),i=o(54416);o(6071);const n=(0,o(14486).A)(i.A,s.X,s.Y,!1,null,"1f6341c6",null).exports},54416:(t,e,o)=>{o.d(e,{A:()=>s});const s=o(29369).A},6071:(t,e,o)=>{o(72162)}}]);
//# sourceMappingURL=7462-7462.js.map?v=90def4dd760835d48c51