(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-annotation-annotationList"],{"1ab8":function(t,e,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("3471"));n("c223"),n("aa9c"),n("5ef2"),n("d4b5");var s=i(n("9365")),o=[{title:"通知公告",value:0},{title:"系统消息",value:1}],l={mixins:[s.default],data:function(){return{tabs:o,TabCur:0,scrollLeft:0,NavBarColor:this.NavBarColor,upOption:{page:{num:0,size:10},noMoreSize:4,empty:{tip:"~ 暂无数据 ~"},loading:"",text:"全部",isShowNoMore:!1,textNoMore:"我是有底线的 >_<"},msgList:[],read:"all",announcement1:[],msg1Count:"",msg1Title:"",announcement2:[],msg2Count:"",msg2Title:"",url:"/sys/sysAnnouncementSend/getMyAnnouncementSend",delUrl:"/sys/sysAnnouncementSend/delete",listTouchStart:0,modalName:null,listTouchDirection:null}},onShow:function(){this.mescroll&&this.mescroll.resetUpScroll()},computed:{top:function(){return 2*this.CustomBar+95},style:function(){var t=this.StatusBar,e=this.CustomBar,n="height:".concat(e,"px;padding-top:").concat(t,"px;");return n}},methods:{upCallback:function(t){var e=this;console.log("tabindex",this.TabCur);var n=this.TabCur;0==n&&this.$http.get(this.url,{params:{pageNo:t.num,pageSize:t.size,msgCategory:"1"}}).then((function(n){if(e.announcement1=n.data.result.records,e.mescroll.endSuccess(e.announcement1.length),n.data.success){console.log("res",n.data),e.msg1Count=n.data.result.total,e.msg1Title="通知("+n.data.result.total+")";var i,s=(0,a.default)(e.announcement1);try{for(s.s();!(i=s.n()).done;){var o=i.value;e.msgList.push(o)}}catch(l){s.e(l)}finally{s.f()}}1==t.num&&(e.msgList=[],e.msgList=e.msgList.concat(e.announcement1))})).catch((function(){e.mescroll.endErr()})),1==n&&this.$http.get(this.url,{params:{pageNo:t.num,pageSize:t.size,msgCategory:"2"}}).then((function(n){if(e.announcement2=n.data.result.records,e.mescroll.endSuccess(e.announcement2.length,e.msgCount),n.data.success){console.log("res sys",n.data),e.msg2Count=n.data.result.total,e.msg2Title="通知("+n.data.result.total+")";var i,s=(0,a.default)(e.announcement2);try{for(s.s();!(i=s.n()).done;){var o=i.value;e.msgList.push(o)}}catch(l){s.e(l)}finally{s.f()}}1==t.num&&(e.msgList=[],e.msgList=e.msgList.concat(e.announcement2))})).catch((function(){e.mescroll.endErr()}))},tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1),this.msgList=[],this.mescroll.resetUpScroll()},goAnnotationDetail:function(t){this.mescroll.resetUpScroll(),"component"==t.openType&&t.openPage.indexOf("email")>=0?this.goEmailDetailPage(t):uni.navigateTo({url:"/pages/annotation/annotationDetail?item="+encodeURIComponent(JSON.stringify(t))})},isEmail:function(t){return"component"==t.openType&&t.openPage.indexOf("email")>=0},goEmailDetailPage:function(t){if(console.log("go",t.anntId),console.log("item",t),"0"==t.readFlag){this.mescroll.resetUpScroll();this.$http.put("/sys/sysAnnouncementSend/editByAnntIdAndUserId",{anntId:t.anntId})}uni.navigateTo({url:"/pages/mail/mailDetail?id="+t.busId})},ListTouchStart:function(t){this.listTouchStart=t.touches[0].pageX},ListTouchMove:function(t){this.listTouchDirection=t.touches[0].pageX-this.listTouchStart>0?"right":"left"},ListTouchEnd:function(t){"left"==this.listTouchDirection?this.modalName=t.currentTarget.dataset.target:this.modalName=null,this.listTouchDirection=null},deleteAnnotation:function(t){var e=this;this.$http.delete(this.delUrl+"?id="+t.id).then((function(t){console.log("结果数据9",t),t.data.success&&e.mescroll.resetUpScroll()})).catch((function(t){console.log("al delUrl请求错误2",t),e.mescroll.endErr()}))},formatDate:function(t,e){return t&&0!=t.length?t.length<e?t:t.substr(0,e):""},titleFilter:function(t,e){return t&&0!=t.length?t.length<e?t:t.substr(0,e)+"...":""}}};e.default=l},"24c7":function(t,e,n){var i=n("4049");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("967d").default;a("6223cfcc",i,!0,{sourceMap:!1,shadowMode:!1})},"3b63":function(t,e,n){"use strict";n.r(e);var i=n("1ab8"),a=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},4049:function(t,e,n){var i=n("c86c");e=i(!1),e.push([t.i,".e-btn[data-v-befc095c]{margin-bottom:1rem}.titlePad[data-v-befc095c]{margin-top:.6rem}.cu-list>.move-cur[data-v-befc095c]{-webkit-transform:translateX(%?-150?%);transform:translateX(%?-150?%)}.nav .cu-item.cur[data-v-befc095c]{position:flex;z-index:9;border-bottom:%?4?% solid}",""]),t.exports=e},"71eb":function(t,e,n){"use strict";n.r(e);var i=n("cd75"),a=n("3b63");for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("c7c9");var o=n("828b"),l=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"befc095c",null,!1,i["a"],void 0);e["default"]=l.exports},9365:function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var t=this.$refs.mescrollRef;t&&(this.mescroll=t.mescroll)}},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(){var t=this;setTimeout((function(){t.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},a=i;e.default=a},c7c9:function(t,e,n){"use strict";var i=n("24c7"),a=n.n(i);a.a},cd75:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var i={mescrollUni:n("5aae").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"bg-white"},[n("cu-custom",{attrs:{bgColor:t.NavBarColor,isBack:!0,backRouterName:"index"}},[n("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),n("template",{attrs:{slot:"content"},slot:"content"},[t._v("公告消息")])],2),n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"solid-bottom"},[n("v-uni-scroll-view",{staticClass:"bg-white nav text-center ",attrs:{"scroll-x":!0}},[n("v-uni-view",{staticClass:"flex text-center justify-around"},t._l(t.tabs,(function(e,i){return n("v-uni-view",{key:i,staticClass:"cu-item",class:e.value==t.TabCur?"text-blue cur":"",attrs:{"data-id":e.value},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSelect.apply(void 0,arguments)}}},[t._v(t._s(e.title))])})),1)],1)],1),n("mescroll-uni",{ref:"mescrollRef",attrs:{top:t.top},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"al-list cu-list"},t._l(t.msgList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"message_text bg-white cu-item flex justify-around align-center solid-bottom margin-bottom-sm margin-top-sm",class:t.modalName=="move-box-"+i?"move-cur":"",staticStyle:{width:"100vw"},attrs:{"data-target":"move-box-"+i},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.ListTouchStart.apply(void 0,arguments)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.ListTouchMove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.ListTouchEnd.apply(void 0,arguments)},click:function(n){arguments[0]=n=t.$handleEvent(n),t.goAnnotationDetail(e)}}},[t.isEmail(e)?n("v-uni-view",{staticClass:"padding-left"},[n("v-uni-view",{staticClass:"cu-avatar radius cuIcon-mail bg-orange"})],1):t._e(),"1"!=e.msgCategory||t.isEmail(e)?t._e():n("v-uni-view",{staticClass:"padding-left"},[n("v-uni-view",{staticClass:"cu-avatar radius cuIcon-notification bg-orange"})],1),"2"!=e.msgCategory||t.isEmail(e)?t._e():n("v-uni-view",{staticClass:"padding-left"},[n("v-uni-view",{staticClass:"cu-avatar radius cuIcon-notice bg-orange"})],1),n("v-uni-view",{staticClass:"titlePad content",staticStyle:{height:"4em"}},[n("v-uni-view",{staticClass:"flex justify-start text-cut text-lg",staticStyle:{width:"26em",color:"#333","font-family":"'黑体'"}},["0"==e.readFlag?n("v-uni-view",[n("v-uni-text",{staticClass:"cuIcon-title text-red padding-left-sm",staticStyle:{"margin-right":"-0.8em"}})],1):t._e(),n("v-uni-view",{staticClass:"padding-left"},[t.isEmail(e)&&e.emailTitle?n("v-uni-text",{staticClass:"text-black"},[t._v(t._s(t.titleFilter(e.emailTitle,12)))]):n("v-uni-text",{staticClass:"text-black"},[t._v(t._s(t.titleFilter(e.titile,12)))])],1)],1),n("v-uni-view",{staticClass:"flex justify-between margin-top-xs",staticStyle:{"font-family":"'黑体'",color:"#999"}},[t.isEmail(e)?n("v-uni-view",{staticClass:"text-content text-cut",staticStyle:{"padding-left":".8rem",width:"18em"},domProps:{innerHTML:t._s(e.msgContent)},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goEmailDetailPage(e)}}}):t.isEmail(e)?t._e():n("v-uni-view",{staticStyle:{"padding-left":".8rem"}},[e.msgAbstract&&e.msgAbstract.length>0?n("v-uni-view",{staticClass:"text-content text-cut",staticStyle:{width:"18em"},domProps:{innerHTML:t._s(e.msgAbstract)}}):n("v-uni-view",[t._v("无摘要")])],1)],1)],1),n("v-uni-view",{staticClass:"action text-sm",staticStyle:{color:"#aaa","margin-top":"-2em","margin-left":"-13em",width:"10em"}},[n("v-uni-text",[t._v(t._s(t.formatDate(e.sendTime,10)))])],1),n("v-uni-view",{staticClass:"move"},[n("v-uni-view",{staticClass:"bg-red",staticStyle:{"margin-right":"3em","margin-left":"2px"},on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.deleteAnnotation(e)}}},[t._v("删除")])],1)],1)})),1)],1)],1)],1)},s=[]}}]);