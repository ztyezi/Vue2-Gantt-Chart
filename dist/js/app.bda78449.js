(function(t){function e(e){for(var r,l,s=e[0],o=e[1],c=e[2],u=0,h=[];u<s.length;u++)l=s[u],a[l]&&h.push(a[l][0]),a[l]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);d&&d(e);while(h.length)h.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],r=!0,s=1;s<i.length;s++){var o=i[s];0!==a[o]&&(r=!1)}r&&(n.splice(e--,1),t=l(l.s=i[0]))}return t}var r={},a={app:0},n=[];function l(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=t,l.c=r,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(i,r,function(e){return t[e]}.bind(null,r));return i},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=o;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"292f":function(t,e,i){},"2b5e":function(t,e,i){var r={"./zh-cn":"71bd","./zh-cn.js":"71bd","./zh-hk":"aa26","./zh-hk.js":"aa26","./zh-tw":"6dcd","./zh-tw.js":"6dcd"};function a(t){var e=n(t);return i(e)}function n(t){var e=r[t];if(!(e+1)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return e}a.keys=function(){return Object.keys(r)},a.resolve=n,t.exports=a,a.id="2b5e"},"33f3":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("06f1"),i("450d");var r=i("6ac9"),a=i.n(r),n=i("2b0e"),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("header",{staticClass:"top-bar"},[t._v("Vue-Gantt-Chart\n    "),i("label",{attrs:{for:"cellWidth"}},[t._v("cellWidth")]),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.cellWidth,expression:"cellWidth",modifiers:{number:!0}}],attrs:{type:"range",min:"20",max:"100"},domProps:{value:t.cellWidth},on:{__r:function(e){t.cellWidth=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}}),i("label",{attrs:{for:"cellHeight"}},[t._v("cellHeight")]),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.cellHeight,expression:"cellHeight",modifiers:{number:!0}}],attrs:{type:"range",min:"20",max:"100"},domProps:{value:t.cellHeight},on:{__r:function(e){t.cellHeight=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}}),i("label",{attrs:{for:"titleWith"}},[t._v("titleWidth")]),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.titleWidth,expression:"titleWidth",modifiers:{number:!0}}],attrs:{type:"range",min:"0",max:"250"},domProps:{value:t.titleWidth},on:{__r:function(e){t.titleWidth=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}}),i("label",{attrs:{for:"hideHeader"}},[t._v("hideHeader")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.hideHeader,expression:"hideHeader"}],attrs:{id:"hideHeader",type:"checkbox"},domProps:{checked:Array.isArray(t.hideHeader)?t._i(t.hideHeader,null)>-1:t.hideHeader},on:{change:function(e){var i=t.hideHeader,r=e.target,a=!!r.checked;if(Array.isArray(i)){var n=null,l=t._i(i,n);r.checked?l<0&&(t.hideHeader=i.concat([n])):l>-1&&(t.hideHeader=i.slice(0,l).concat(i.slice(l+1)))}else t.hideHeader=a}}}),i("label",{attrs:{for:"datasNum"}},[t._v("datasNum")]),i("input",{directives:[{name:"model",rawName:"v-model.number.lazy",value:t.datasNum,expression:"datasNum",modifiers:{number:!0,lazy:!0}}],attrs:{id:"datasNum"},domProps:{value:t.datasNum},on:{change:function(e){t.datasNum=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}}),i("label",{attrs:{for:"scrollToY"}},[t._v("scrollToY")]),i("input",{directives:[{name:"model",rawName:"v-model.number.lazy",value:t.scrollToY,expression:"scrollToY",modifiers:{number:!0,lazy:!0}}],attrs:{id:"scrollToY"},domProps:{value:t.scrollToY},on:{change:function(e){t.scrollToY=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}}),i("label",{attrs:{for:"scale"}},[t._v("scale")]),i("select",{directives:[{name:"model",rawName:"v-model.number",value:t.scale,expression:"scale",modifiers:{number:!0}}],attrs:{id:"scale"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(e){var i="_value"in e?e._value:e.value;return t._n(i)});t.scale=e.target.multiple?i:i[0]}}},t._l(t.scaleList,function(e){return i("option",{key:e},[t._v(t._s(e))])}),0),i("span",[t._v("minute")])]),i("div",{staticClass:"container"},[i("v-gantt-chart",{attrs:{startTime:t.startTime,endTime:t.endTime,cellWidth:t.cellWidth,cellHeight:t.cellHeight,timeLines:t.timeLines,titleHeight:t.titleHeight,scale:t.scale,titleWidth:t.titleWidth,showCurrentTime:"",hideHeader:t.hideHeader,dataKey:t.dataKey,arrayKeys:t.arrayKeys,scrollToPostion:t.positionA,datas:t.datasA},on:{scrollLeft:t.scrollLeftA},scopedSlots:t._u([{key:"block",fn:function(e){var r=e.data,a=e.item;return[i("Test",{attrs:{data:r,updateTimeLines:t.updateTimeLines,cellHeight:t.cellHeight,currentTime:t.currentTime,item:a}})]}},{key:"left",fn:function(t){var e=t.data;return[i("TestLeft",{attrs:{data:e}})]}},{key:"title",fn:function(){return[t._v("\n        铁胆火车侠日程表\n      ")]},proxy:!0}])}),i("v-gantt-chart",{attrs:{startTime:t.startTime,endTime:t.endTime,cellWidth:t.cellWidth,cellHeight:t.cellHeight,timeLines:t.timeLines,titleHeight:t.titleHeight,scale:t.scale,titleWidth:t.titleWidth,showCurrentTime:"",hideHeader:"",dataKey:t.dataKey,arrayKeys:t.arrayKeys,scrollToPostion:t.positionB,datas:t.datasB},on:{scrollLeft:t.scrollLeftB},scopedSlots:t._u([{key:"block",fn:function(e){var r=e.data,a=e.item;return[i("Test",{attrs:{data:r,updateTimeLines:t.updateTimeLines,cellHeight:t.cellHeight,currentTime:t.currentTime,item:a}})]}},{key:"left",fn:function(t){var e=t.data;return[i("TestLeft",{attrs:{data:e}})]}},{key:"title",fn:function(){return[t._v("\n        铁胆火车侠日程表\n      ")]},proxy:!0}])})],1),t._m(0)])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{staticClass:"main-footer"},[t._v("MIT ©wuchouchou"),i("span",{staticStyle:{float:"right"}},[t._v("注:该demo由两个甘特组件组合而成")])])}],o=(i("6b54"),i("e814")),c=i.n(o),d=(i("28a5"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-popover",{attrs:{placement:"bottom",trigger:"hover"}},[i("div",{staticClass:"plan",style:{"background-color":t.statusColor,"margin-top":.1*t.cellHeight+"px"},attrs:{slot:"reference"},on:{click:t.onClick},slot:"reference"},[i("div",{staticClass:"runTime"},[i("span",[t._v("S:"+t._s(t.startToString))]),i("span",[t._v("E:"+t._s(t.endToString))])]),i("div",{staticClass:"middle"},[t._v("编号"+t._s(t.item.id))])]),i("div",{staticClass:"detail"},[i("span",{staticClass:"header"},[t._v(t._s(t.data.type)+t._s(t.data.name)+t._s(t.data.id))]),i("ul",[i("li",[i("span",[t._v("发车时间：")]),i("span",[t._v(t._s(t.startToString))])]),i("li",[i("span",[t._v("到站时间：")]),i("span",[t._v(t._s(t.endToString))])]),i("li",[i("span",[t._v("载员：")]),i("span",[t._v(t._s(t.item.passenger))])]),i("li",[i("span",[t._v("编号：")]),i("span",[t._v(t._s(t.item.id))])])])])])}),u=[],h=(i("c5f6"),i("c1df")),f=i.n(h),m="#D5F8EA",p="#BFF2FE",g="#F2F2F2",v={name:"Test",props:{data:Object,item:Object,currentTime:f.a,updateTimeLines:Function,cellHeight:Number},data:function(){return{moment:f.a}},computed:{statusColor:function(){var t=this.item,e=this.currentTime,i=f()(t.start),r=f()(t.end);return i.isBefore(e)&&r.isAfter(e)?m:r.isBefore(e)?g:p},startToString:function(){return f()(this.item.start).format("HH:mm")},endToString:function(){return f()(this.item.end).format("HH:mm")}},methods:{onClick:function(){this.updateTimeLines(this.item.start,this.item.end)}}},y=v,T=(i("c346"),i("2877")),b=Object(T["a"])(y,d,u,!1,null,"dfa6d88e",null),_=b.exports,w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"name",style:{background:t.data.colorPair.light}},[i("div",{staticClass:"colorBar",style:{background:t.data.colorPair.dark}}),i("div",{staticClass:"type"},[t._v(t._s(t.data.type))]),i("div",{staticClass:"carId"},[t._v(t._s(t.data.name)+t._s(t.data.id))]),i("div",{staticClass:"speed"},[t._v(t._s(t.data.speed)+"km/s")])])},x=[],k={name:"TestLeft",props:{data:Object}},H=k,L=(i("ce2f"),Object(T["a"])(H,w,x,!1,null,"46d7a7a4",null)),S=L.exports,W=(i("a481"),i("96eb")),O=i.n(W),A=["(252, 105, 100)","(247, 167, 71)","(116, 202, 90)","(83, 186, 241)","(208, 142, 2231)"],C="希望号,飞翼号,光明号,窥探号,力神号,警官号,闪电流星号,博士号,霹雳火神号,狙击手号,希望之光号,南海忍者号,火速E3号,山神号,安全卫士号,铁锤号,寿星号,星星号,罗曼斯卡,欲望号,霹雳雷电号,消防号,欧洲之星号".split(","),B="🚅,🚈,🚄".split(","),N=O.a.Random,P={id:function(){return"JHR"+N.natural(100,999)+N.character("upper")+N.character("upper")},name:function(){return N.pick(C)},type:function(){return N.pick(B)},colorPair:function(){var t="rgb"+N.pick(A);return{dark:t.replace(")",",0.8)"),light:t.replace(")",",0.1)")}},speed:function(){return N.natural(0,200)},gtArray:function(){var t=[],e=0,i=N.natural(1,9),r=f()().subtract(12,"h"),a=f()().subtract(12,"h");while(e<i)r=a.clone().add(N.natural(1,5),"h"),a=r.clone().add(N.natural(1,5),"h"),t.push({id:"D"+N.natural(1e3,9999),passenger:N.natural(10,200),start:r.toString(),end:a.toString()}),e++;return t}};function K(t){for(var e=[],i=0,r=N.natural(t,t);i<r;i++)e.push(O.a.mock(P));return e}var R="1,2,3,4,5,6,10,12,15,20,30,60,120,180,240,360,720,1440".split(",").map(function(t){return c()(t)}),j={name:"App",components:{Test:_,TestLeft:S},data:function(){return{timeLines:[{time:f()().add(2,"h").toString()},{time:f()().add(5,"h").toString(),color:"#747e80"}],currentTime:f()(),startTime:f()().subtract(5,"h").toString(),endTime:f()().add(2,"d").add(2,"h").add(5,"s").toString(),cellWidth:50,cellHeight:30,titleHeight:40,titleWidth:250,scale:60,datasNum:100,datasA:K(5),datasB:K(50),dataKey:"id",scaleList:R,scrollToTime:f()().add(1,"d").toString(),scrollToPostion:{x:1e4,y:1e4},hideHeader:!1,arrayKeys:["gtArray","error"],scrollToY:0,positionB:{},positionA:{}}},watch:{datasNum:function(t){this.datasA=K(t),this.datasB=K(t)},scrollToY:function(t){this.positionA={x:t}}},methods:{updateTimeLines:function(t,e){this.timeLines=[{time:t},{time:e,color:"#747e80"}]},scrollLeftA:function(t){this.positionB={x:t}},scrollLeftB:function(t){this.positionA={x:t}}}},$=j,D=(i("ce05"),Object(T["a"])($,l,s,!1,null,"c95a5e86",null)),E=D.exports,Y=i("9fa0"),M=i.n(Y);n["default"].config.productionTip=!1,n["default"].use(M.a),n["default"].use(a.a),new n["default"]({render:function(t){return t(E)}}).$mount("#app")},"5cf8":function(t,e,i){},"66f9":function(t,e,i){var r={"./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=n(t);return i(e)}function n(t){var e=r[t];if(!(e+1)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return e}a.keys=function(){return Object.keys(r)},a.resolve=n,t.exports=a,a.id="66f9"},7305:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"gantt-chart",on:{wheel:t.wheelHandle}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.hideHeader,expression:"!hideHeader"}],staticClass:"gantt-header"},[i("div",{staticClass:"gantt-header-title",style:{"line-height":t.titleHeight+"px",height:t.titleHeight+"px","max-width":t.titleWidth+"px","min-width":t.titleWidth+"px"}},[t._t("title",[t._v("welcome v-gantt-chart")])],2),i("div",{ref:"headerTimeline",staticClass:"gantt-header-timeline"},[i("timeline",{style:{width:t.totalWidth+"px"},attrs:{start:t.start,end:t.end,cellWidth:t.cellWidth,titleHeight:t.titleHeight,scale:t.scale}})],1)]),i("div",{staticClass:"gantt-body",style:{height:"calc(100% - "+(t.hideHeader?0:t.titleHeight)+"px)"}},[i("div",{staticClass:"gantt-table",style:{height:"calc(100% - "+(t.hideXScrollBar?0:t.scrollBarWitdh)+"px)",width:"calc(100% - "+(t.hideYScrollBar?0:t.scrollBarWitdh)+"px)"}},[i("div",{ref:"marklineArea",staticClass:"gantt-markline-area"},[t.showCurrentTime?i("CurrentTime",{attrs:{getTimeLinePosition:t.getTimeLinePosition}}):t._e(),t._l(t.timeLines,function(e,r){return i("mark-line",{key:r,attrs:{markLineTime:e.time,getTimeLinePosition:t.getTimeLinePosition,color:e.color}})})],2),i("div",{ref:"leftbarWrapper",staticClass:"gantt-leftbar-wrapper",style:{"max-width":t.titleWidth+"px","min-width":t.titleWidth+"px"}},[i("LeftBar",{style:{height:t.totalHeight+"px"},attrs:{datas:t.datas,dataKey:t.dataKey,scrollTop:t.scrollTop,heightOfRenderAera:t.heightOfRenderAera,widthOfRenderAera:t.widthOfRenderAera,cellHeight:t.cellHeight},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.data;return[t._t("left",[i("div",{staticClass:"gantt-leftbar-defalutItem"})],{data:r})]}}],null,!0)})],1),i("div",{ref:"blocksWrapper",staticClass:"gantt-blocks-wrapper"},[i("blocks",{style:{width:t.totalWidth+"px"},attrs:{scrollTop:t.scrollTop,scrollLeft:t.scrollLeft,heightOfRenderAera:t.heightOfRenderAera,widthOfRenderAera:t.widthOfRenderAera,arrayKeys:t.arrayKeys,itemKey:t.itemKey,dataKey:t.dataKey,datas:t.datas,cellWidth:t.cellWidth,cellHeight:t.cellHeight,scale:t.scale,beginTimeOfTimeLine:t.beginTimeOfTimeLine},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.data,a=e.item;return[t._t("block",[i("div",{staticClass:"gantt-block-defaultBlock"})],{data:r,item:a})]}}],null,!0)})],1)]),i("div",{ref:"scrollXBar",staticClass:"gantt-scroll-y",style:{width:(t.hideYScrollBar?0:t.scrollBarWitdh)+"px"},on:{scroll:t.syncScrollY}},[i("div",{style:{height:t.totalHeight+"px"}})]),i("div",{ref:"scrollYBar",staticClass:"gantt-scroll-x",style:{height:(t.hideXScrollBar?0:t.scrollBarWitdh)+"px"},on:{scroll:t.syncScrollX}},[i("div",{style:{width:t.totalWidth+"px"}})])])])},a=[],n=(i("5e4a"),i("7921"),i("bfb3")),l=i.n(n),s=(i("40ba"),i("ea51"),i("d833"),i("19da")),o=i.n(s),c=i("88e1"),d=[1,2,3,4,5,6,10,12,15,20,30,60,120,180,240,360,720,1440];function u(t){if(!d.includes(t))throw new RangeError("错误的scale值，输入值为".concat(t,",可用的scale值为").concat(d.join(",")));return!0}function h(t){var e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60;u(i);var r=t.clone(),a=i/60;return i>60?(e=Math.floor(t.hour()/a),r.hour(e*a).minute(0).seconds(0)):(e=Math.floor(t.minutes()/i),r.minutes(e*i).seconds(0)),r}function f(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:60;if(!o.a.isMoment(t)||!o.a.isMoment(e))throw new TypeError("参数必须为moment 对象");if(t.isAfter(e))throw new TypeError("错误的参数顺序，函数calcScalesAbout2Times的第一个时间参数必须大于第二个时间参数");u(i);var r=h(t,i),a=0;while(!r.isAfter(e))a++,r.add(i,"m");return a}function m(t){return void 0===t||null===t}function p(t){return void 0!==t&&null!==t}function g(t){console.warn(t)}var v=function(){var t={},e={};return function(i,r){return t[i]!==r&&(t[i]=r,e[i]=b(r)),e[i]}}();function y(t,e,i){var r=i.scale,a=i.cellWidth,n=v("pStart",t),l=b(e);return _(n,l)/r*a}function T(t,e,i){var r=i.scale,a=i.cellWidth,n=v("pStart",t),l=v("pBeginTimeOfTimeLine",e);return _(l,n)/r*a}function b(t){return new Date(t)}function _(t,e){var i=e.getTime()-t.getTime();return i/1e3/60}function w(t){var e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=t,a=!0;return function(){var t=arguments,n=this;return a?(r.apply(n,t),a=!1):!e&&void(e=setTimeout(function(){clearTimeout(e),e=null,r.apply(n,t)},i))}}var x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"gantt-timeline",style:{"margin-left":-t.cellWidth/2+"px"}},t._l(t.getDays,function(e,r){return i("div",{key:r,staticClass:"gantt-timeline-block"},[i("div",{staticClass:"gantt-timeline-day ",style:{height:t.titleHeight/2+"px","line-height":t.titleHeight/2+"px"}},[t._v(t._s(e.format("MM/DD")))]),i("div",{staticClass:"gantt-timeline-scale ",style:{height:t.titleHeight/2+"px","line-height":t.titleHeight/2+"px"}},t._l(t.getTimeScales(e),function(e,r){return i("div",{key:r,staticClass:"gantt-cell-width"},[t._v("\n        "+t._s(e)+"\n      ")])}),0)])}),0)},k=[],H=i("67bb"),L=i.n(H),S=L()(),W=L()(),O=L()();function A(t,e){return t.isSame(e,"day")}var C={name:"Timeline",props:{start:{type:o.a,required:!0},end:{type:o.a,required:!0},cellWidth:{type:Number,default:50},titleHeight:{type:Number,default:40},scale:{type:Number,default:60}},computed:{getDays:function(){for(var t=[],e=this.start.clone(),i=this.end;!A(e,i);e.add(1,"d"))t.push(e.clone());return t.push(e.clone()),t}},methods:{getTimeScales:function(t){var e=[],i=this.start,r=this.end;return e=A(t,i)?this.generateTimeScale(S):A(t,r)?this.generateTimeScale(O):this.generateTimeScale(W),e},generateTimeScale:function(t){var e,i,r=[],a=this.start,n=this.end,l=this.scale;switch(t){case S:e=h(a,l),i=A(a,n)?n:a.clone().endOf("day");break;case O:e=n.clone().startOf("day"),i=n.clone();break;case W:e=a.clone().startOf("day"),i=a.clone().endOf("day");break;default:throw new TypeError("错误的计算类型")}while(!e.isAfter(i))l>=60?r.push(e.format("HH")):r.push(e.format("HH:mm")),e.add(l,"m");return r}}},B=C,N=i("2877"),P=Object(N["a"])(B,x,k,!1,null,null,null),K=P.exports,R=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("mark-line",{attrs:{markLineTime:t.currentTime,getTimeLinePosition:t.getTimeLinePosition,color:"rgba(255,0,0,.4)"}})},j=[],$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"gantt-markline",style:{"background-color":t.color,left:t.getPosition()+"px"}},[i("div",{staticClass:"gantt-markline-label",style:{"background-color":t.color}},[t._v(t._s(t.moment(t.markLineTime).format("HH:mm:ss")))])])},D=[],E={name:"MarkLine",props:{markLineTime:{validator:function(t){return o()(t).isValid()}},color:{type:String,default:"#0ca30a"},getTimeLinePosition:{type:Function,required:!0}},data:function(){return{visible:!1,moment:o.a}},methods:{getPosition:function(){return null==this.markLineTime?(this.visible=!1,0):(this.visible=!0,this.getTimeLinePosition(this.markLineTime))}}},Y=E,M=Object(N["a"])(Y,$,D,!1,null,null,null),z=M.exports,q={name:"CurrentTime",components:{MarkLine:z},props:{getTimeLinePosition:{type:Function,required:!0}},data:function(){return{currentTime:o()().toString()}},created:function(){var t=this,e=setInterval(function(){t.currentTime=o()().toString()},1e3);this.$once("hook:beforeDestroy",function(){clearInterval(e)})}},I=q,F=Object(N["a"])(I,R,j,!1,null,null,null),X=F.exports,U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"gantt-leftbar"},[i("div",{staticClass:"gantt-leftbar-item gantt-block-top-space",style:{height:t.calTopSpace()+"px"}}),t._l(t.showDatas,function(e,r){return i("div",{key:t.dataKey?e[t.dataKey]:r,staticClass:"gantt-leftbar-item gantt-cell-height"},[t._t("default",null,{data:e})],2)})],2)},V=[],J={props:{scrollTop:{type:Number,required:!0},heightOfRenderAera:{type:Number,required:!0},cellHeight:{type:Number,required:!0},datas:{type:Array,required:!0}},data:function(){return{showDatas:[],oldCurrentIndex:0,preload:1}},computed:{blockHeight:function(){var t=this.datas,e=this.cellHeight;return t.length*e},currentIndex:function(){return Math.ceil(this.scrollTop/this.cellHeight)}},watch:{currentIndex:function(t){var e=this.oldCurrentIndex,i=this.preload;if(0!==i){if(e!==t){var r=1;(t<e-(i-r)||t>e+(i-r))&&(this.oldCurrentIndex=t,this.spliceData())}}else this.spliceData()},heightOfRenderAera:function(){this.spliceData()}},created:function(){this.spliceData()},methods:{spliceData:function(){var t=this.heightOfRenderAera,e=this.currentIndex,i=this.cellHeight,r=this.preload;if(0!==r){if(0===t||0===i)return[];var a=e+Math.ceil(t/i)+r,n=e-r>0?e-r:0;this.showDatas=this.datas.slice(n,a)}else this.showDatas=this.datas},calTopSpace:function(){var t=this.oldCurrentIndex,e=this.cellHeight,i=this.preload,r=t-i>0?t-i:0;return r*e}}},G=J,Q={name:"LeftBar",mixins:[G],props:{dataKey:String,datas:{type:Array,required:!0}}},Z=Q,tt=Object(N["a"])(Z,U,V,!1,null,null,null),et=tt.exports,it=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"gantt-blocks",style:{height:t.blockHeight+"px"}},[i("div",{staticClass:"gantt-block gantt-block-top-space",style:{height:t.calTopSpace()+"px"}}),t._l(t.showDatas,function(e,r){return i("div",{key:t.dataKey?e[t.dataKey]:r,staticClass:"gantt-block gantt-cell-height"},t._l(t.concatArray(e),function(r,a){return t.isInTimeRange(r)?i("div",{key:t.itemKey?r[t.itemKey]:a,staticClass:"gantt-block-item",style:{left:t.getPosition(r)+"px",width:t.getWidth(r)+"px"}},[t._t("default",null,{data:e,item:r})],2):t._e()}),0)})],2)},rt=[],at=i("f499"),nt=i.n(at),lt=i("a745"),st=i.n(lt),ot={name:"Blocks",mixins:[G],props:{dataKey:String,itemKey:String,arrayKeys:{type:Array},scrollLeft:Number,beginTimeOfTimeLine:{type:o.a,required:!0},cellWidth:{type:Number,required:!0},scale:{type:Number,required:!0},widthOfRenderAera:{type:Number,required:!0}},data:function(){return{startTime:null,endTime:null}},created:function(){this.getTimeRange()},mounted:function(){},computed:{beginTimeOfTimeLineFormat:function(){return this.beginTimeOfTimeLine.toString()},renderAarrys:function(){var t=this.arrayKeys;return t.length>0?t:["gtArray"]}},watch:{scrollLeft:function(){0!==this.heightOfRenderAera&&this.getTimeRange()},widthOfRenderAera:function(){0!==this.heightOfRenderAera&&this.getTimeRange()}},methods:{concatArray:function(t){return this.renderAarrys.reduce(function(e,i){return st()(t[i])?e.concat(t[i]):e},[])},getTimeRange:function(){var t=this.beginTimeOfTimeLine,e=this.scrollLeft,i=this.cellWidth,r=this.scale,a=this.widthOfRenderAera;this.startTime=t.clone().add(e/i*r,"m").toDate().getTime(),this.endTime=t.clone().add((e+a)/i*r,"m").toDate().getTime()},isInTimeRange:function(t){var e=this.startTime,i=this.endTime,r=new Date(t.start).getTime(),a=new Date(t.end).getTime();return e<=r&&r<=i||e<=a&&a<=i},getWidth:function(t){var e={scale:this.scale,cellWidth:this.cellWidth};return m(t.start)||m(t.end)?0:y(t.start,t.end,e)},getPosition:function(t){var e={scale:this.scale,cellWidth:this.cellWidth};return m(t.start)?(g("错误，该数据项不含start 值 ".concat(nt()(t),"，无法计算偏移值。")),0):T(t.start,this.beginTimeOfTimeLineFormat,e)}}},ct=ot,dt=Object(N["a"])(ct,it,rt,!1,null,null,null),ut=dt.exports,ht={name:"Gantt",components:{Timeline:K,LeftBar:et,Blocks:ut,MarkLine:z,CurrentTime:X},props:{startTime:{required:!0,validator:function(t){var e=o()(t).isValid();return e||g("非法的开始时间 ".concat(t)),e}},endTime:{required:!0,validator:function(t){var e=o()(t).isValid();return e||g("非法的结束时间 ".concat(t)),e}},cellWidth:{type:Number,default:50},cellHeight:{type:Number,default:20},titleHeight:{type:Number,default:40},titleWidth:{type:Number,default:200},scale:{type:Number,default:60,validator:function(t){return d.includes(t)}},datas:{type:Array,required:!0},dataKey:{type:String,default:void 0},itemKey:{type:String,default:void 0},arrayKeys:{type:Array,default:function(){return[]}},showCurrentTime:{type:Boolean,default:!1},timeLines:{type:Array},scrollToTime:{validator:function(t){return o()(t).isValid()}},scrollToPostion:{validator:function(t){var e=!p(t.x)||!l()(t.x),i=!p(t.y)||!l()(t.y);return!(!e&&!i)||(g("scrollToPostion x或y 有值为非Number类型"),!1)}},hideHeader:{type:Boolean,default:!1},hideXScrollBar:{type:Boolean,default:!1},hideYScrollBar:{type:Boolean,default:!1}},data:function(){return{selector:{gantt_leftbar:{},gantt_table:{},gantt_scroll_y:{},gantt_timeline:{},gantt_scroll_x:{},gantt_markArea:{}},scrollTop:0,scrollLeft:0,heightOfRenderAera:window.screen.availHeight,widthOfRenderAera:window.screen.availWidth,scrollBarWitdh:17}},computed:{start:function(){return o()(this.startTime)},end:function(){return o()(this.endTime)},totalWidth:function(){var t=this.cellWidth,e=this.totalScales;return t*e},totalScales:function(){var t=this.start,e=this.end,i=this.scale;return f(t,e,i)},totalHeight:function(){var t=this.datas,e=this.cellHeight;return t.length*e},beginTimeOfTimeLine:function(){var t=h(this.start,this.scale);return t},avialableScrollLeft:function(){var t=this.totalWidth,e=this.widthOfRenderAera,i=this.titleWidth;return t-e-i-1}},watch:{cellWidth:function(){this.resetCss()},cellHeight:function(){this.resetCss()},scrollToTime:{handler:function(t){var e=this;if(t){var i=this.start,r=this.end,a=this.beginTimeOfTimeLine,n=this.scale,l=this.cellWidth,s=o()(t);if(s.isAfter(i)&&s.isBefore(r)){var c={cellWidth:l,scale:n},d=T(t,a.toString(),c);this.$nextTick(function(){return e.syncScrollX({target:{scrollLeft:d}},!0)})}else g("当前滚动至".concat(t,"不在").concat(i,"和").concat(r,"的范围之内"))}},immediate:!0},scrollToPostion:{handler:function(t){var e=this;if(t){var i=l()(t.x)?void 0:t.x,r=l()(t.y)?void 0:t.y;this.$nextTick(function(){p(i)&&i!==e.scrollLeft&&e.syncScrollX({target:{scrollLeft:i}},!0),p(r)&&r!==e.scrollTop&&e.syncScrollY({target:{scrollTop:r}},!0)})}},immediate:!0},scrollTop:function(t){this.$emit("scrollTop",t)},scrollLeft:function(t){this.$emit("scrollLeft",t)}},created:function(){},mounted:function(){var t=this;this.resetCss(),this.getSelector();var e=w(function(e){e.forEach(function(e){var i=e.contentRect;t.heightOfRenderAera=i.height,t.widthOfRenderAera=i.width})}),i=new c["a"](e);i.observe(this.$refs.blocksWrapper)},methods:{getTimeLinePosition:function(t){var e=this.cellWidth,i=this.scale,r=this.beginTimeOfTimeLine,a=this.titleWidth,n={cellWidth:e,scale:i};return T(t,r.toString(),n)+a},getSelector:function(){this.selector.gantt_leftbar=this.$refs.leftbarWrapper,this.selector.gantt_table=this.$refs.blocksWrapper,this.selector.gantt_scroll_y=this.$refs.scrollXBar,this.selector.gantt_timeline=this.$refs.headerTimeline,this.selector.gantt_scroll_x=this.$refs.scrollYBar,this.selector.gantt_markArea=this.$refs.marklineArea},wheelHandle:function(t){var e=this,i=t.deltaX,r=t.deltaY;this.$nextTick(function(){if(0!=r&&e.syncScrollY({target:{scrollTop:e.scrollTop+r}},!0),0!=i){if(e.scrollLeft+i>=e.avialableScrollLeft)return;e.scrollLeft+i<0?e.syncScrollX({target:{scrollLeft:0}},!0):e.syncScrollX({target:{scrollLeft:e.scrollLeft+i}},!0)}})},syncScrollY:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.selector,r=i.gantt_leftbar,a=i.gantt_table,n=i.gantt_scroll_y,l=t.target.scrollTop;e?n.scrollTop=l:(r.scrollTop=l,a.scrollTop=l,this.scrollTop=l)},syncScrollX:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.selector,r=i.gantt_table,a=i.gantt_timeline,n=i.gantt_markArea,l=i.gantt_scroll_x,s=t.target.scrollLeft;e?l.scrollLeft=s:(r.scrollLeft=s,a.scrollLeft=s,n.style.left="-"+s+"px",this.scrollLeft=s)},resetCss:function(){var t=document.getElementById("gantt-cell-style"),e=this.cellWidth,i=this.cellHeight,r=".gantt-cell-width{width:".concat(e,"px;}\n        .gantt-cell-height{height:").concat(i,"px;}\n        .gantt-block{background-size: ").concat(e,"px ").concat(i,"px;");if(null==t){var a=document.createElement("style");a.setAttribute("id","gantt-cell-style"),a.setAttribute("type","text/css"),a.innerText=r,document.head.appendChild(a)}else t.innerText=r}}},ft=ht,mt=(i("affe"),Object(N["a"])(ft,r,a,!1,null,null,null)),pt=mt.exports,gt={install:function(t,e){t.component("v-gantt-chart",pt)}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(pt);e["default"]=gt},"7ee1":function(t,e,i){},"9fa0":function(t,e,i){t.exports=i("7305")},affe:function(t,e,i){"use strict";var r=i("7ee1"),a=i.n(r);a.a},c346:function(t,e,i){"use strict";var r=i("292f"),a=i.n(r);a.a},ce05:function(t,e,i){"use strict";var r=i("33f3"),a=i.n(r);a.a},ce2f:function(t,e,i){"use strict";var r=i("5cf8"),a=i.n(r);a.a}});
//# sourceMappingURL=app.bda78449.js.map