(function(e){function t(t){for(var o,r,c=t[0],l=t[1],s=t[2],u=0,d=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={id_photo_editor:0,404:0,img_splitter:0,index:0,stopwatch:0,time_clac:0},a={id_photo_editor:0,404:0,img_splitter:0,index:0,stopwatch:0,time_clac:0},i=[];function c(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-32168aae":"0da6835b","chunk-487b0651":"dd7f3c04","chunk-54edd2e7":"048de117","chunk-594d6d48":"f36c3e03","chunk-03b20767":"a77bc783","chunk-3f530dc6":"b57e9383","chunk-5f515ffc":"987010d6"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-32168aae":1,"chunk-487b0651":1,"chunk-54edd2e7":1,"chunk-03b20767":1,"chunk-3f530dc6":1,"chunk-5f515ffc":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-32168aae":"674d7185","chunk-487b0651":"e04f7e14","chunk-54edd2e7":"a8db90d7","chunk-594d6d48":"31d6cfe0","chunk-03b20767":"bff48b7c","chunk-3f530dc6":"77fa0b10","chunk-5f515ffc":"c63e172f"}[e]+".css",a=l.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===o||u===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],u=s.getAttribute("data-href");if(u===o||u===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],p.parentNode.removeChild(p),n(i)},p.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(e);var d=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"12cb":function(e,t,n){"use strict";var o=n("2b0e"),r=n("a925"),a=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),i=n("f0d9"),c=n.n(i);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=s({navbar:{home:"首页",blog:"博客",language:"选择语言"},pageTitle:{index:"G-Lab在线小工具",timeClac:"时间计算器",idPhotoEditor:"证件照编辑器",imgSplitter:"图片切分",lifeRestart:"人生重开模拟器",stopwatch:"秒表"},tools:{timeClac:{introductionSimple:"计算两个时间点之间的时间差，可按不同时间层级汇总显示计算结果。",introduction:"计算两个时间点之间的时间差，可按不同时间层级汇总显示计算结果，并且还可在不同时间层级进行调整再计算。可用于工时、纪念日和特定日期间隔的计算。",startZone:"起始",finshZone:"结束",otpZone:"调整",startDate:"起始日期",finshDate:"结束日期",datePlaceholder:"选择日期",startTime:"起始时间",finshTime:"结束时间",timePlaceholder:"选择时间",more:"更多",resultZone:"间隔",totalZone:"分类总计",optResultZone:"调整结果",result:"间隔时间",totalDays:"天数总计",totalHours:"小时总计",totalMinutes:"分钟总计",totalSeconds:"秒总计",dateRuleRequired:"请选择日期",timeRuleRequired:"请选择时间",year:"年",month:"个月",day:"天",hour:"小时",minute:"分",second:"秒"},idPhotoEditor:{introductionSimple:"。",introduction:"。",customize:"自定义",standard:"标准",width:"宽度",height:"高度",importImg:"导入图片",reset:"重置",cropImg:"裁剪图片",scaleTip:"当前裁剪框设置超过原图实际尺寸，将对裁剪结果进行等比例放大，可能会导致图片清晰度降低！",standards:{1:"1寸"}},imgSplitter:{introductionSimple:"可以将图片切分成 n*m 份，可用于制作社交平台的九宫格效果，也可用于动森贴图制作！",introduction:"可以将图片切分成 n*m 份，可用于制作社交平台的九宫格效果，也可用于动森贴图制作！",row:"行",column:"列",importImg:"导入图片",splitImg:"切分图片",saveAs:"保存类型",toAcnlTool:"动森贴图编辑器"},lifeRestart:{introductionSimple:"开启全新人生！"},stopwatch:{introductionSimple:"实现区间计时，图表呈现计时情况。",introduction:"实现区间计时，图表呈现计时情况。快捷键：“空格”为开始/停止；“S”为“记录”；“R”为复位。",start:"开始",record:"记录",stop:"停止",reset:"复位",gap:"区间",gapTime:"区间耗时",totalTime:"总耗时",pause:"暂停",setInit:"初始",editTime:"起始时间",hour:"小时",minute:"分",second:"秒",millisecond:"毫秒",confirm:"确 定",cancel:"取 消"}},components:{imgLoader:{tip1:"请将图片拖拽到此处 或 ",tip2:"选择图片",unsupportedErr:"您的浏览器不支持",imgTypeErr:"请选择图片文件"}}},c.a),d=u,p=n("b2d6"),m=n.n(p);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=h({navbar:{home:"Home",blog:"Blog",language:"Language"},pageTitle:{index:"G-Lab online tools",timeClac:"Time Calculator",idPhotoEditor:"ID Photo Editor",imgSplitter:"Image Spiltter",lifeRestart:"Life Restart",stopwatch:"Stopwatch"},tools:{timeClac:{introductionSimple:"Calculate the time difference between two time points.",introduction:"Calculate the time difference between two time points, and display the calculation results in different time levels, and can be adjusted and recalculated at different time levels. Can be used for calculations of work time, anniversaries and specific date intervals.",startZone:"Start",finshZone:"Finsh",otpZone:"Options",startDate:"Start Date",finshDate:"Finsh Date",datePlaceholder:"Pick a day",startTime:"Start Time",finshTime:"Finsh Time",timePlaceholder:"Select Time",more:"more",resultZone:"Result",totalZone:"Total",optResultZone:"Options Results",result:"Time Interval",totalDays:"Total Days",totalHours:"Total Hours",totalMinutes:"Total Minutes",totalSeconds:"Total Seconds",dateRuleRequired:"Please pick a date",timeRuleRequired:"Please pick a time",year:"year(s)",month:"month(s)",day:"day(s)",hour:"hour(s)",minute:"minute(s)",second:"second(s)"},idPhotoEditor:{introductionSimple:"。",introduction:"。",customize:"Customize",standard:"Standard",width:"W",height:"H",importImg:"Import Image",reset:"Reset",cropImg:"Crop Image",scaleTip:"The setting exceeds the actual size of the original image, and the cropping result will be enlarged proportionally, which may cause a reduction in the picture clarity!",standards:{1:"1 inch"}},imgSplitter:{introductionSimple:"You can split the picture into n * m blocks for weibo, ins etc., also for ACNL!",introduction:"You can split the picture into n * m blocks for weibo, ins etc., also for ACNL!",row:"Rows",column:"Columns",importImg:"Import Image",splitImg:"Split Image",saveAs:"Save As",toAcnlTool:"ACNL Pattern Tool"},lifeRestart:{introductionSimple:"Life restart remake！"},stopwatch:{introductionSimple:"Online Stopwatch with lap times.",introduction:'Online Stopwatch with lap times.Shortcuts: "Spacebar" to "Start/Pause";Key "S" to Split";Key "R" to "Reset"',start:"start",record:"split",stop:"stop",reset:"reset",gap:"Split",gapTime:"Interval",totalTime:"Total",pause:"PAUSE",setInit:"SET",editTime:"start time",hour:"Hour",minute:"Minute",second:"Second",millisecond:"Millisecond",confirm:"confirm",cancel:"cancel"}},components:{imgLoader:{tip1:"Drop image here or",tip2:"select",unsupportedErr:"Your browser is not supported.",imgTypeErr:"Please choose an image file."}}},m.a),b=g;o["default"].use(r["a"]);t["a"]=new r["a"]({locale:localStorage.lang||"cn",messages:{cn:d,en:b}})},"33c0":function(e,t,n){"use strict";var o=n("a9de"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=n("5c96"),a=n.n(r),i=(n("0fae"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("el-container",[n("el-header",[n("Header")],1),n("el-main",[n("router-view")],1),n("el-footer",[n("Footer")],1)],1)],1)}),c=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("el-row",{attrs:{type:"flex",align:"middle"}},[n("el-col",{attrs:{id:"header-logo",md:4,xs:4}},[n("img",{attrs:{src:"https://g-lab.xyz/images/og_image.png",alt:"车库Lab-分享最新最特别的小技能",height:"28",id:"normal-logo"}}),n("img",{attrs:{src:"https://g-lab.xyz/images/favicon.ico",alt:"车库Lab-分享最新最特别的小技能",height:"28",id:"small-logo"}})]),n("el-col",{staticClass:"navbar navbar-start",attrs:{md:4}},[n("el-menu",{attrs:{"default-active":this.$route.path.substr(1),mode:"horizontal","active-text-color":"#909399"},on:{select:e.handleSelect}},[n("el-menu-item",{attrs:{index:"home"}},[e._v(e._s(e.$t("navbar.home")))]),n("el-menu-item",{attrs:{index:"blog"}},[e._v(e._s(e.$t("navbar.blog")))])],1)],1),n("el-col",{staticClass:"navbar navbar-end",attrs:{md:{span:16},xs:{span:16}}},[n("el-dropdown",{on:{command:e.handleSelectLanguage}},[n("span",{staticClass:"el-dropdown-link"},[e._v(" "+e._s(e.$t("navbar.language"))),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"cn"}},[e._v("中文")]),n("el-dropdown-item",{attrs:{command:"en"}},[e._v("English")])],1)],1)],1)],1)],1)},s=[],u={name:"Header",methods:{handleSelect:function(e){"blog"===e?window.location.href="https://g-lab.xyz":this.$router.push({name:"index"})},handleSelectLanguage:function(e){this.$i18n.locale=e,localStorage.lang=e}}},d=u,p=(n("65a0"),n("2877")),m=Object(p["a"])(d,l,s,!1,null,"0e247876",null),f=m.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("p",{staticClass:"copyright"},[e._v("© 2019-"+e._s(e.year)+" 车库Lab")])])},g=[],b=(n("0d03"),{name:"Footer",computed:{year:function(){return(new Date).getFullYear()}}}),v=b,y=(n("33c0"),Object(p["a"])(v,h,g,!1,null,"45135468",null)),w=y.exports,S={name:"app",components:{Header:f,Footer:w}},O=S,k=(n("034f"),Object(p["a"])(O,i,c,!1,null,null,null)),P=k.exports,T=n("12cb"),_=n("8c4f"),j=(n("d3b7"),[{name:"index",path:"/",meta:{title:"pageTitle.index"},component:function(){return n.e("chunk-5f515ffc").then(n.bind(null,"1e4b"))}},{name:"time_clac",path:"/time_clac",meta:{title:"pageTitle.timeClac"},component:function(){return n.e("chunk-32168aae").then(n.bind(null,"1034"))}},{name:"id_photo_editor",path:"/id_photo_editor",meta:{title:"pageTitle.idPhotoEditor"},component:function(){return Promise.all([n.e("chunk-487b0651"),n.e("chunk-54edd2e7")]).then(n.bind(null,"fb34"))}},{name:"img_splitter",path:"/img_splitter",meta:{title:"pageTitle.imgSplitter"},component:function(){return Promise.all([n.e("chunk-487b0651"),n.e("chunk-594d6d48"),n.e("chunk-03b20767")]).then(n.bind(null,"3d6b"))}},{name:"stopwatch",path:"/stopwatch",meta:{title:"pageTitle.stopwatch"},component:function(){return Promise.all([n.e("chunk-594d6d48"),n.e("chunk-3f530dc6")]).then(n.bind(null,"0cea"))}},{name:"404",path:"*",meta:{title:"pageTitle.index"},component:function(){return n.e("chunk-5f515ffc").then(n.bind(null,"1e4b"))}}]);o["default"].use(_["a"]);var E=new _["a"]({mode:"history",routes:j});E.beforeEach((function(e,t,n){e.meta.title&&(document.title=T["a"].t(e.meta.title)),n()}));var C=E;o["default"].config.productionTip=!1,o["default"].use(a.a,{i18n:function(e,t){return T["a"].t(e,t)}}),new o["default"]({i18n:T["a"],router:C,render:function(e){return e(P)}}).$mount("#app")},"65a0":function(e,t,n){"use strict";var o=n("f4f3"),r=n.n(o);r.a},"85ec":function(e,t,n){},a9de:function(e,t,n){},f4f3:function(e,t,n){}});
//# sourceMappingURL=id_photo_editor.3ef27eec.js.map