(()=>{var e,a={6651:(e,a,r)=>{"use strict";var i=r(70580),n=r.n(i),s=r(77905),o=r(87485);_.extend(OC.Files.Client,{PROPERTY_SHARE_TYPES:"{"+OC.Files.Client.NS_OWNCLOUD+"}share-types",PROPERTY_OWNER_ID:"{"+OC.Files.Client.NS_OWNCLOUD+"}owner-id",PROPERTY_OWNER_DISPLAY_NAME:"{"+OC.Files.Client.NS_OWNCLOUD+"}owner-display-name"}),OCA.Sharing||(OCA.Sharing={}),OCA.Sharing.Util={_REMOTE_OWNER_REGEXP:new RegExp("^(([^@]*)@(([^@^/\\s]*)@)?)((https://)?[^[\\s/]*)([/](.*))?$"),attach:function(e){if((0,o.F)().files_sharing?.api_enabled&&"trashbin"!==e.id&&"files.public"!==e.id){var a=e.fileActions,r=e._createRow;e._createRow=function(e){var t=r.apply(this,arguments),i=OCA.Sharing.Util.getSharePermissions(e);return 0===e.permissions&&(delete a.actions.all.Comment,delete a.actions.all.Details,delete a.actions.all.Goto),_.isFunction(e.canDownload)&&!e.canDownload()&&(delete a.actions.all.Download,e.permissions&OC.PERMISSION_UPDATE||delete a.actions.all.MoveCopy),t.attr("data-share-permissions",i),t.attr("data-share-attributes",JSON.stringify(e.shareAttributes)),e.shareOwner&&(t.attr("data-share-owner",e.shareOwner),t.attr("data-share-owner-id",e.shareOwnerId),"shared-root"===e.mountType&&t.attr("data-permissions",e.permissions|OC.PERMISSION_UPDATE)),e.recipientData&&!_.isEmpty(e.recipientData)&&t.attr("data-share-recipient-data",JSON.stringify(e.recipientData)),e.shareTypes&&t.attr("data-share-types",e.shareTypes.join(",")),t};var i=e.elementToFile;e.elementToFile=function(e){var a=i.apply(this,arguments);if(a.shareAttributes=JSON.parse(e.attr("data-share-attributes")||"[]"),a.sharePermissions=e.attr("data-share-permissions")||void 0,a.shareOwner=e.attr("data-share-owner")||void 0,a.shareOwnerId=e.attr("data-share-owner-id")||void 0,e.attr("data-share-types")&&(a.shareTypes=e.attr("data-share-types").split(",")),e.attr("data-expiration")){var t=parseInt(e.attr("data-expiration"));a.shares=[],a.shares.push({expiration:t})}return a};var n=e._getWebdavProperties;e._getWebdavProperties=function(){var e=n.apply(this,arguments);return e.push(OC.Files.Client.PROPERTY_OWNER_ID),e.push(OC.Files.Client.PROPERTY_OWNER_DISPLAY_NAME),e.push(OC.Files.Client.PROPERTY_SHARE_TYPES),e},e.filesClient.addFileInfoParser((function(e){var a={},t=e.propStat[0].properties,r=t[OC.Files.Client.PROPERTY_PERMISSIONS];r&&r.indexOf("S")>=0&&(a.shareOwner=t[OC.Files.Client.PROPERTY_OWNER_DISPLAY_NAME],a.shareOwnerId=t[OC.Files.Client.PROPERTY_OWNER_ID]);var i=t[OC.Files.Client.PROPERTY_SHARE_TYPES];return i&&(a.shareTypes=_.chain(i).filter((function(e){return e.namespaceURI===OC.Files.Client.NS_OWNCLOUD&&"share-type"===e.nodeName.split(":")[1]})).map((function(e){return parseInt(e.textContent||e.text,10)})).value()),a})),e.$el.on("fileActionsReady",(function(e){var a=e.$files;_.each(a,(function(e){var a=$(e),t=a.attr("data-share-types")||"",r=a.attr("data-share-owner");if(t||r){var i=!1,n=!1;_.each(t.split(",")||[],(function(e){let a=parseInt(e,10);a===s.Z.SHARE_TYPE_LINK||a===s.Z.SHARE_TYPE_EMAIL?i=!0:(a===s.Z.SHARE_TYPE_USER||a===s.Z.SHARE_TYPE_GROUP||a===s.Z.SHARE_TYPE_REMOTE||a===s.Z.SHARE_TYPE_REMOTE_GROUP||a===s.Z.SHARE_TYPE_CIRCLE||a===s.Z.SHARE_TYPE_ROOM||a===s.Z.SHARE_TYPE_DECK||a===s.Z.SHARE_TYPE_SCIENCEMESH)&&(n=!0)})),OCA.Sharing.Util._updateFileActionIcon(a,n,i)}}))})),e.$el.on("changeDirectory",(function(){OCA.Sharing.sharesLoaded=!1})),a.registerAction({name:"Share",displayName:function(e){if(e&&e.$file){var a=parseInt(e.$file.data("share-types"),10),r=e.$file.data("share-owner-id");if(a>=0||r)return t("files_sharing","Shared")}return t("files_sharing","Share")},altText:t("files_sharing","Share"),mime:"all",order:-150,permissions:OC.PERMISSION_ALL,iconClass:function(e,a){var t=parseInt(a.$file.data("share-types"),10);return t===s.Z.SHARE_TYPE_EMAIL||t===s.Z.SHARE_TYPE_LINK?"icon-public":"icon-shared"},icon:function(e,a){var t=a.$file.data("share-owner-id");if(t)return OC.generateUrl(`/avatar/${t}/32`)},type:OCA.Files.FileActions.TYPE_INLINE,actionHandler:function(a,t){if(e._detailsView){var r=parseInt(t.$file.data("share-permissions"),10);(isNaN(r)||r>0)&&e.showDetailsView(a,"sharing")}},render:function(e,t,r){return parseInt(r.$file.data("permissions"),10)&OC.PERMISSION_SHARE||r.$file.attr("data-share-owner")?a._defaultRenderAction.call(a,e,t,r):null}});var l=new OCA.Sharing.ShareBreadCrumbView;e.registerBreadCrumbDetailView(l)}},_updateFileListDataAttributes:function(e,a,t){if("files"!==e.id)if(_.pluck(t.get("shares"),"share_with_displayname").length){var r=_.mapObject(t.get("shares"),(function(e){return{shareWith:e.share_with,shareWithDisplayName:e.share_with_displayname}}));a.attr("data-share-recipient-data",JSON.stringify(r))}else a.removeAttr("data-share-recipient-data")},_updateFileActionIcon:function(e,a,t){return!!(a||t||e.attr("data-share-recipient-data")||e.attr("data-share-owner"))&&(OCA.Sharing.Util._markFileAsShared(e,!0,t),!0)},_markFileAsShared:function(e,a,r){var i,n,s,o,l=e.find('.fileactions .action[data-action="Share"]'),d=e.data("type"),h=l.find(".icon"),c=e.attr("data-share-owner-id"),p=e.attr("data-share-owner"),u=e.attr("data-mounttype"),f="icon-shared";l.removeClass("shared-style");var O=e.attr("data-e2eencrypted");"dir"===d&&"true"===O?(o=OC.MimeType.getIconUrl("dir-encrypted"),e.attr("data-icon",o)):"dir"===d&&(a||r||c)?(o=void 0!==u&&"shared-root"!==u&&"shared"!==u?OC.MimeType.getIconUrl("dir-"+u):r?OC.MimeType.getIconUrl("dir-public"):OC.MimeType.getIconUrl("dir-shared"),e.find(".filename .thumbnail").css("background-image","url("+o+")"),e.attr("data-icon",o)):"dir"===d&&(u&&0===u.indexOf("external")?(o=OC.MimeType.getIconUrl("dir-external"),e.attr("data-icon",o)):(o=OC.MimeType.getIconUrl("dir"),e.removeAttr("data-icon")),e.find(".filename .thumbnail").css("background-image","url("+o+")")),a||c?(n=e.data("share-recipient-data"),l.addClass("shared-style"),s="<span>"+t("files_sharing","Shared")+"</span>",c?(i=t("files_sharing","Shared by"),s=OCA.Sharing.Util._formatRemoteShare(c,p,i)):n&&(s=OCA.Sharing.Util._formatShareList(n)),l.html(s).prepend(h),(c||n)&&l.find(".avatar").each((function(){$(this).avatar($(this).data("username"),32)}))):l.html('<span class="hidden-visually">'+t("files_sharing","Shared")+"</span>").prepend(h),r&&(f="icon-public"),h.removeClass("icon-shared icon-public").addClass(f)},_formatRemoteShare:function(e,a,t){var r=OCA.Sharing.Util._REMOTE_OWNER_REGEXP.exec(e);if(!r||!r[7])return'<span class="avatar" data-username="'+n()(e)+'" title="'+t+" "+n()(a)+'"></span><span class="hidden-visually">'+t+" "+n()(a)+"</span> ";var i=r[2],s=r[4],o=r[5],l=r[6],d=r[8]?r[7]:"",h=t+" "+i;s&&(h+="@"+s),o&&(h+="@"+o.replace(l,"")+d);var c='<span class="remoteAddress" title="'+n()(h)+'">';return c+='<span class="username">'+n()(i)+"</span>",s&&(c+='<span class="userDomain">@'+n()(s)+"</span>"),c+"</span> "},_formatShareList:function(e){var a=this;return(e=_.toArray(e)).sort((function(e,a){return e.shareWithDisplayName.localeCompare(a.shareWithDisplayName)})),$.map(e,(function(e){return a._formatRemoteShare(e.shareWith,e.shareWithDisplayName,t("files_sharing","Shared with"))}))},markFileAsShared:function(e,a,r){var i,n,s,o,l=e.find('.fileactions .action[data-action="Share"]'),d=e.data("type"),h=l.find(".icon"),c=e.attr("data-share-owner-id"),p=e.attr("data-share-owner"),u=e.attr("data-mounttype"),f="icon-shared";l.removeClass("shared-style"),"dir"===d&&(a||r||c)?(o=void 0!==u&&"shared-root"!==u&&"shared"!==u?OC.MimeType.getIconUrl("dir-"+u):r?OC.MimeType.getIconUrl("dir-public"):OC.MimeType.getIconUrl("dir-shared"),e.find(".filename .thumbnail").css("background-image","url("+o+")"),e.attr("data-icon",o)):"dir"===d&&("true"===e.attr("data-e2eencrypted")?(o=OC.MimeType.getIconUrl("dir-encrypted"),e.attr("data-icon",o)):u&&0===u.indexOf("external")?(o=OC.MimeType.getIconUrl("dir-external"),e.attr("data-icon",o)):(o=OC.MimeType.getIconUrl("dir"),e.removeAttr("data-icon")),e.find(".filename .thumbnail").css("background-image","url("+o+")")),a||c?(n=e.data("share-recipient-data"),l.addClass("shared-style"),s="<span>"+t("files_sharing","Shared")+"</span>",c?(i=t("files_sharing","Shared by"),s=this._formatRemoteShare(c,p,i)):n&&(s=this._formatShareList(n)),l.html(s).prepend(h),(c||n)&&l.find(".avatar").each((function(){$(this).avatar($(this).data("username"),32)}))):l.html('<span class="hidden-visually">'+t("files_sharing","Shared")+"</span>").prepend(h),r&&(f="icon-public"),h.removeClass("icon-shared icon-public").addClass(f)},getSharePermissions:function(e){return e.sharePermissions}},OC.Plugins.register("OCA.Files.FileList",OCA.Sharing.Util),function(){const e=OC.Backbone.View.extend({tagName:"span",events:{click:"_onClick"},_dirInfo:void 0,render(e){if(this._dirInfo=e.dirInfo||null,null===this._dirInfo||"/"===this._dirInfo.path&&""===this._dirInfo.name)this.$el.removeClass("shared icon-public icon-shared"),this.$el.hide();else{const a=e.dirInfo&&e.dirInfo.shareTypes&&e.dirInfo.shareTypes.length>0;this.$el.removeClass("shared icon-public icon-shared"),a?(this.$el.addClass("shared"),-1!==e.dirInfo.shareTypes.indexOf(s.Z.SHARE_TYPE_LINK)?this.$el.addClass("icon-public"):this.$el.addClass("icon-shared")):this.$el.addClass("icon-shared"),this.$el.show(),this.delegateEvents()}return this},_onClick(e){e.preventDefault(),e.stopPropagation();const a=new OCA.Files.FileInfoModel(this._dirInfo),t=this;a.on("change",(function(){t.render({dirInfo:t._dirInfo})}));const r=a.attributes.path+"/"+a.attributes.name;OCA.Files.Sidebar.open(r),OCA.Files.Sidebar.setActiveTab("sharing")}});OCA.Sharing.ShareBreadCrumbView=e}();var l=r(85072),d=r.n(l),h=r(97825),c=r.n(h),p=r(77659),u=r.n(p),f=r(55056),O=r.n(f),m=r(10540),C=r.n(m),A=r(41113),S=r.n(A),E=r(69844),g={};g.styleTagTransform=S(),g.setAttributes=O(),g.insert=u().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=C(),d()(E.A,g),E.A&&E.A.locals&&E.A.locals,r(84033),r.nc=btoa(OC.requestToken),window.OCA.Sharing=OCA.Sharing},84033:(e,a,r)=>{r.nc=btoa(OC.requestToken),window.OCP.Collaboration.registerType("file",{action:()=>new Promise(((e,a)=>{OC.dialogs.filepicker(t("files_sharing","Link to a file"),(function(t){OC.Files.getClient().getFileInfo(t).then(((a,t)=>{e(t.id)})).fail((()=>{a(new Error("Cannot get fileinfo"))}))}),!1,null,!1,OC.dialogs.FILEPICKER_TYPE_CHOOSE,"",{allowDirectoryChooser:!0})})),typeString:t("files_sharing","Link to a file"),typeIconClass:"icon-files-dark"})},69844:(e,a,t)=>{"use strict";t.d(a,{A:()=>o});var r=t(71354),i=t.n(r),n=t(76314),s=t.n(n)()(i());s.push([e.id,"/*!\n * SPDX-FileCopyrightText: 2016 Nextcloud GmbH and Nextcloud contributors\n * SPDX-License-Identifier: AGPL-3.0-or-later\n */li.crumb span.icon-shared,li.crumb span.icon-public{display:inline-block;cursor:pointer;opacity:.2;margin-inline-end:6px}li.crumb span.icon-shared.shared,li.crumb span.icon-public.shared{opacity:.7}","",{version:3,sources:["webpack://./apps/files_sharing/src/style/sharebreadcrumb.scss"],names:[],mappings:"AAAA;;;EAAA,CAKA,oDAEC,oBAAA,CACA,cAAA,CACA,UAAA,CACA,qBAAA,CAGD,kEAEC,UAAA",sourceRoot:""}]);const o=s}},r={};function i(e){var t=r[e];if(void 0!==t)return t.exports;var n=r[e]={id:e,loaded:!1,exports:{}};return a[e].call(n.exports,n,n.exports,i),n.loaded=!0,n.exports}i.m=a,e=[],i.O=(a,t,r,n)=>{if(!t){var s=1/0;for(h=0;h<e.length;h++){t=e[h][0],r=e[h][1],n=e[h][2];for(var o=!0,l=0;l<t.length;l++)(!1&n||s>=n)&&Object.keys(i.O).every((e=>i.O[e](t[l])))?t.splice(l--,1):(o=!1,n<s&&(s=n));if(o){e.splice(h--,1);var d=r();void 0!==d&&(a=d)}}return a}n=n||0;for(var h=e.length;h>0&&e[h-1][2]>n;h--)e[h]=e[h-1];e[h]=[t,r,n]},i.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return i.d(a,{a}),a},i.d=(e,a)=>{for(var t in a)i.o(a,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},i.e=()=>Promise.resolve(),i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),i.j=9643,(()=>{i.b=document.baseURI||self.location.href;var e={9643:0,7541:0};i.O.j=a=>0===e[a];var a=(a,t)=>{var r,n,s=t[0],o=t[1],l=t[2],d=0;if(s.some((a=>0!==e[a]))){for(r in o)i.o(o,r)&&(i.m[r]=o[r]);if(l)var h=l(i)}for(a&&a(t);d<s.length;d++)n=s[d],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(h)},t=self.webpackChunknextcloud=self.webpackChunknextcloud||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})(),i.nc=void 0;var n=i.O(void 0,[4208],(()=>i(6651)));n=i.O(n)})();
//# sourceMappingURL=files_sharing-additionalScripts.js.map?v=6669f6e029f482be8c79