(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-equipMaintenance-equipMaintenanceTask-emTask"],{"0ce7":function(a,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return n})),e.d(t,"a",(function(){}));var i=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("v-uni-view",[i("v-uni-scroll-view",{staticClass:"page",class:null!=a.modalName?"show":"",attrs:{"scroll-y":null==a.modalName}},[i("cu-custom",{attrs:{bgColor:"bg-gradual-white",isBack:!0,isHome:!1}},[i("template",{attrs:{slot:"backText"},slot:"backText"},[a._v("设备维保")]),i("template",{attrs:{slot:"right"},slot:"right"},[i("v-uni-view",{staticClass:"title sty"},[a._v("维保类型：")]),i("v-uni-picker",{attrs:{value:a.index,range:a.picker},on:{change:function(t){arguments[0]=t=a.$handleEvent(t),a.PickerChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"picker"},[a._v(a._s(a.index>-1?a.picker[a.index]:"全部")),i("v-uni-image",{staticStyle:{width:"24upx",height:"24upx"},attrs:{src:e("6bb1")}})],1)],1)],1)],2),i("v-uni-scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":!0}},[i("v-uni-view",{staticClass:"flex text-center"},a._l(a.queueStatus,(function(t,e){return i("v-uni-view",{key:e,staticClass:"cu-item flex-sub",class:e==a.TabCur?"text-green cur":"",attrs:{"data-id":e},on:{click:function(i){arguments[0]=i=a.$handleEvent(i),a.tabSelect(t,e)}}},[a._v(a._s(t.name))])})),1)],1),i("v-uni-view",{staticClass:"main-view"},[a.loading?i("v-uni-view",{staticClass:"cu-load load-modal"},[i("v-uni-view",{staticClass:"gray-text"},[a._v("加载中...")])],1):a._e(),a._l(a.dataList,(function(t,n){return i("v-uni-view",{key:n,staticClass:"list-view  animation-slide-bottom",class:1===a.TabCur?"list-view-forbidden":"",style:[{animationDelay:.05*(n+1)+"s"}],on:{click:function(e){arguments[0]=e=a.$handleEvent(e),a.handleClickTask(t)}}},[i("v-uni-view",{staticClass:"cu-card"},[i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"img"},[i("v-uni-image",{attrs:{src:a.serviceUrl+t.equipment_images}})],1),i("v-uni-view",{staticClass:"data-view"},[i("v-uni-view",{staticClass:"main-title"},[i("v-uni-image",{attrs:{src:e("a1bc")}}),i("v-uni-view",{staticClass:"detail-title"},[a._v(a._s(t.maintenance_plan_id))]),i("v-uni-view",{staticClass:"check-type"},[a._v(a._s(t.type_id))])],1),i("v-uni-view",{staticClass:"group_46 flex-row justify-between"},[i("v-uni-view",{staticClass:"text-wrapper_2 flex-col"},[i("span",{staticClass:"text_7"},[a._v(a._s(t.area))])])],1),a._t("top",[i("v-uni-view",{staticClass:"data-info"},[i("v-uni-view",{staticClass:"data-content"},[i("v-uni-text",{staticClass:"data-title"},[a._v("设备编码")]),i("v-uni-text",{staticClass:"data-content"},[a._v(a._s(t.equipment_id))])],1)],1),i("v-uni-view",{staticClass:"data-info"},[i("v-uni-view",{staticClass:"data-content"},[i("v-uni-text",{staticClass:"data-title"},[a._v("设备名称")]),i("v-uni-text",{staticClass:"data-content"},[a._v(a._s(t.equipment_name))])],1)],1),i("v-uni-view",{staticClass:"data-info"},[i("v-uni-view",{staticClass:"data-content"},[i("v-uni-text",{staticClass:"data-title"},[a._v("点检完成时间")]),i("v-uni-text",{staticClass:"data-content"},[a._v(a._s(t.task_close_time))])],1)],1)]),i("v-uni-view",{class:["data-status","待完成"===t.F_status?"wait-finish":"已完成"===t.F_status?"finish":"待审批"===t.F_status?"wait-check":""]},[a._v(a._s(t.F_status))])],2)],1)],1)],1)})),i("v-uni-view",{staticClass:"footer"},[a._v("没有更多的数据了")])],2)],1)],1)},n=[]},"463c":function(a,t,e){var i=e("c86c");t=i(!1),t.push([a.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* uni.scss */.page[data-v-f8ea6aa0]{height:100Vh;width:100vw}.page.show[data-v-f8ea6aa0]{overflow:hidden}.main-view[data-v-f8ea6aa0]{height:calc(100% - %?200?%);overflow-x:hidden;overflow-y:auto}.main-type[data-v-f8ea6aa0]{display:flex;background-color:#fff}.cu-form-group[data-v-f8ea6aa0]{width:90%}.cu-form-group .title[data-v-f8ea6aa0]{padding-right:0}.cu-form-group .sty[data-v-f8ea6aa0]{font-size:%?32?%;font-family:PingFangSC-Medium;font-weight:500}.cu-form-group .picker[data-v-f8ea6aa0]{font-size:%?32?%!important;text-align:center}.list-view-forbidden .border-view[data-v-f8ea6aa0]{background-color:#ccc}.nav .cu-item[data-v-f8ea6aa0]{margin-top:0}.cu-bar[data-v-f8ea6aa0]{padding:%?20?% %?36?%!important;width:100%}.cu-item[data-v-f8ea6aa0]{margin:0;position:relative;margin-top:%?24?%}.cu-item .img[data-v-f8ea6aa0]{position:absolute;right:4%;top:30%}.cu-item .img uni-image[data-v-f8ea6aa0]{width:%?160?%;height:%?160?%;border-radius:%?10?%}.data-view[data-v-f8ea6aa0]{position:relative;padding:%?30?%;width:inherit;flex-wrap:wrap;line-height:%?40?%}.data-view .data-content[data-v-f8ea6aa0]{display:flex;width:100%}.data-view .data-title[data-v-f8ea6aa0]{width:%?160?%;margin-right:%?20?%;overflow-wrap:break-word;color:#999;font-size:%?28?%;font-family:PingFangSC-Regular;font-weight:400;text-align:left;white-space:nowrap;text-align-last:justify}.data-view .data-content[data-v-f8ea6aa0]{font-size:%?28?%;color:#333}.data-view .data-status[data-v-f8ea6aa0]{position:absolute;top:0;right:%?45?%;padding:5px;border-radius:0 0 %?12?% %?12?%;width:%?112?%;height:%?48?%;font-size:%?24?%;display:flex;align-items:center;justify-content:center}.data-view .finish[data-v-f8ea6aa0]{color:#228940;background-color:rgba(133,210,164,.2)}.data-view .wait-finish[data-v-f8ea6aa0]{color:#ba1111;background-color:rgba(210,133,133,.2)}.data-view .wait-check[data-v-f8ea6aa0]{color:#2979ff;background-color:rgba(133,153,210,.2)}.data-info[data-v-f8ea6aa0]{line-height:%?60?%;width:100%;display:flex;justify-content:flex-start}.main-title[data-v-f8ea6aa0]{display:flex;align-items:center}.main-title uni-image[data-v-f8ea6aa0]{width:%?35?%;height:%?35?%;margin-right:%?16?%}.main-title .detail-title[data-v-f8ea6aa0]{margin:%?10?% 0;font-size:%?28?%;font-weight:500}.main-title .check-type[data-v-f8ea6aa0]{border-radius:%?8?%;width:%?190?%;height:%?40?%;border:%?2?% solid #369754;overflow-wrap:break-word;color:#369754;font-size:%?24?%;font-weight:400;text-align:center;white-space:nowrap;margin-left:%?10?%}.group_46[data-v-f8ea6aa0]{width:%?206?%;margin:0 %?0?% 0 %?50?%;display:flex;margin-bottom:%?15?%}.group_46 .text-wrapper_2[data-v-f8ea6aa0]{background-color:rgba(34,137,64,.1);border-radius:%?4?%;padding:%?2?% %?12?% 0 %?12?%;margin-right:%?10?%}.group_46 .text_7[data-v-f8ea6aa0]{overflow-wrap:break-word;color:#228940;font-size:%?28?%;font-weight:400;text-align:left;white-space:nowrap;line-height:%?40?%}.group_46 .text-wrapper_3[data-v-f8ea6aa0]{background-color:rgba(34,137,64,.1);border-radius:%?4?%;padding:%?2?% %?12?% 0 %?12?%}.group_46 .text_8[data-v-f8ea6aa0]{overflow-wrap:break-word;color:#228940;font-size:%?28?%;font-weight:400;text-align:left;white-space:nowrap;line-height:%?40?%}.footer[data-v-f8ea6aa0]{padding:15px;text-align:center}',""]),a.exports=t},"4caa":function(a,t,e){"use strict";var i=e("8de5"),n=e.n(i);n.a},"54a0":function(a,t,e){"use strict";e.r(t);var i=e("0ce7"),n=e("b7f6");for(var s in n)["default"].indexOf(s)<0&&function(a){e.d(t,a,(function(){return n[a]}))}(s);e("4caa");var r=e("828b"),o=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"f8ea6aa0",null,!1,i["a"],void 0);t["default"]=o.exports},"555b":function(a,t,e){"use strict";e("6a54");var i=e("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(e("9b1b"));e("d4b5"),e("bf0f"),e("fd3c"),e("2797"),e("aa9c");e("779c");var s=i(e("4c25")),r=i(e("da09")),o=(e("3387"),i(e("6af4"))),c={components:{ItemCard:r.default},data:function(){return{loading:!1,show:!0,modeClass:["fade","slide-right"],serviceUrl:"",queueStatus:[{name:"全部",value:"",type:""},{name:"待审批",value:"633645175670833285",type:""},{name:"待完成",value:"633645040710713477",type:""},{name:"已完成",value:"633645076408434821",type:""}],modalName:null,TabCur:0,dataList:[],pattern:{color:"#7A7E83",backgroundColor:"#fff",selectedColor:"#007AFF",buttonColor:"rgba(34, 137, 64, 1)",iconColor:"#fff"},index:-1,picker:["全部","计划内自主维保","计划内委外维保","临时自主维保","临时委外维保"],deviceCache:{}}},created:function(){var a=this;this.serviceUrl=o.default.serviceUrl,this.getDevices(),setTimeout((function(){a.initData()}),100)},methods:{initData:function(a){var t=this;this.show=!0,this.loading=!0;var e={currentPage:1,pageSize:20,menuId:"633645881953878149",modelId:"633637609502933125",queryJson:"",superQueryJson:"",sidx:""};a&&("全部"!=a.name&&(e.queryJson=JSON.stringify({F_status:a.value})),"计划内自主维保"==a&&(e.queryJson=JSON.stringify({type_id:"629649358148599941"})),"计划内委外维保"==a&&(e.queryJson=JSON.stringify({type_id:"629648864080560261"})),"临时自主维保"==a&&(e.queryJson=JSON.stringify({type_id:"629648789157707909"})),"临时委外维保"==a&&(e.queryJson=JSON.stringify({type_id:"635759957244903557"}))),s.default.getList("633637609502933125",e).then((function(a){200===a.code?(t.dataList=a.data.list,t.dataList=a.data.list.map((function(a){var e=t.deviceCache[a.equipment_id]||"未知设备";return(0,n.default)((0,n.default)({},a),{},{equipment_name:e.name,equipment_images:e.images.length>0?e.images[0].url:"",area:e.area})}))):t.$tip.alert(a.data.message)})).catch((function(a){var e=a.data.message||"请求出现错误，请稍后再试";t.$tip.alert(e)})).finally((function(){setTimeout((function(){t.loading=!1}),500)}))},getDevices:function(){var a=this;s.default.getList("623438114831990853",{currentPage:1,pageSize:20,menuId:"623439071439487045",modelId:"623438114831990853",queryJson:"",superQueryJson:"",sidx:""}).then((function(t){200===t.code?t.data.list.forEach((function(t){a.deviceCache[t.F_code]={name:t.F_name,images:t.picture_uri||[],area:t.model_id}})):a.$tip.alert(t.data.message)})).catch((function(a){}))},tabSelect:function(a,t){this.initData(a),this.TabCur=t},handleClickTask:function(a){this.$Router.push({name:"emDetails",params:{row:(0,n.default)({},a)}})},PickerChange:function(a){this.index=a.detail.value,this.initData(this.picker[this.index])}}};t.default=c},"8de5":function(a,t,e){var i=e("463c");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);var n=e("967d").default;n("7f728b88",i,!0,{sourceMap:!1,shadowMode:!1})},a1bc:function(a,t){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAOCAYAAAAbvf3sAAAAAXNSR0IArs4c6QAAAN5JREFUKFOl0j1Kg0EURuEnINjYRYQI2mQDgkW0SyHp0mphqtSWugAb7VIp2IlLMI0rCEjAxg3Y+FNJqqSMfhcmMOhICqcbZs6c+869NctXDfdYRT8219grcHMcYh8DjLASwBgtfBWgnfTgER5xkgM9bCRohpv0WFjCcIthDhxgPQFTvFR1X+IDrziPsxzYxFpWVjOVc5UMQ3Rz4AJbhRxhOKsuP2F3Weic/wVEvdsFwztOS4bGjwwLNj7grQR0UC8YJlWfHkrAcdaHnPvE3b9CRxfbf4zGwhRj8xzD9w0QkTcr8p91LAAAAABJRU5ErkJggg=="},b7f6:function(a,t,e){"use strict";e.r(t);var i=e("555b"),n=e.n(i);for(var s in i)["default"].indexOf(s)<0&&function(a){e.d(t,a,(function(){return i[a]}))}(s);t["default"]=n.a}}]);