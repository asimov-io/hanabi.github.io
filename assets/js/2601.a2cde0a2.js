/*! For license information please see 2601.a2cde0a2.js.LICENSE.txt */
"use strict";(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[2601,5767,7016,2368,5685,4307,4992,2701,4951,4273,7617,5876,7408,5977,7803,5232,7612,3732,4061,6085,4494,5974,2366],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(r),d=a,h=f["".concat(i,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(h,u(u({ref:t},s),{},{components:r})):n.createElement(h,u({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var c=2;c<o;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5162:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(7294),a=r(6010),o="tabItem_Ymn6";function u(e){var t=e.children,r=e.hidden,u=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,u),hidden:r},t)}},5488:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(7462),a=r(7294),o=r(6010),u=r(2389),l=r(7392),i=r(7094),c=r(2466),s="tabList__CuJ",p="tabItem_LNqP";function f(e){var t,r,u=e.lazy,f=e.block,d=e.defaultValue,h=e.values,m=e.groupId,b=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.l)(y,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(t=null!=d?d:null==(r=v.find((function(e){return e.props.default})))?void 0:r.props.value)?t:v[0].props.value;if(null!==k&&!y.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,i.U)(),O=w.tabGroupChoices,P=w.setTabGroupChoices,x=(0,a.useState)(k),E=x[0],C=x[1],N=[],j=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var R=O[m];null!=R&&R!==E&&y.some((function(e){return e.value===R}))&&C(R)}var _=function(e){var t=e.currentTarget,r=N.indexOf(t),n=y[r].value;n!==E&&(j(t),C(n),null!=m&&P(m,String(n)))},T=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,a=N.indexOf(e.currentTarget)+1;r=null!=(n=N[a])?n:N[0];break;case"ArrowLeft":var o,u=N.indexOf(e.currentTarget)-1;r=null!=(o=N[u])?o:N[N.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":f},b)},y.map((function(e){var t=e.value,r=e.label,u=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return N.push(e)},onKeyDown:T,onFocus:_,onClick:_},u,{className:(0,o.Z)("tabs__item",p,null==u?void 0:u.className,{"tabs__item--active":E===t})}),null!=r?r:t)}))),u?(0,a.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function d(e){var t=(0,u.Z)();return a.createElement(f,(0,n.Z)({key:String(t)},e))}},5774:function(e,t,r){r.d(t,{Ip:function(){return i}});var n=r(7294),a=function(e,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},a(e,t)};function o(e){var t=e.className,r=e.counterClockwise,a=e.dashRatio,o=e.pathRadius,i=e.strokeWidth,c=e.style;return(0,n.createElement)("path",{className:t,style:Object.assign({},c,l({pathRadius:o,dashRatio:a,counterClockwise:r})),d:u({pathRadius:o,counterClockwise:r}),strokeWidth:i,fillOpacity:0})}function u(e){var t=e.pathRadius,r=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+r+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+r+" 1 1 0,-"+2*t+"\n    "}function l(e){var t=e.counterClockwise,r=e.dashRatio,n=e.pathRadius,a=2*Math.PI*n,o=(1-r)*a;return{strokeDasharray:a+"px "+a+"px",strokeDashoffset:(t?-o:o)+"px"}}var i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,r=e.minValue,n=e.maxValue;return(Math.min(Math.max(t,r),n)-r)/(n-r)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,r=e.className,a=e.classes,u=e.counterClockwise,l=e.styles,i=e.strokeWidth,c=e.text,s=this.getPathRadius(),p=this.getPathRatio();return(0,n.createElement)("svg",{className:a.root+" "+r,style:l.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,n.createElement)("circle",{className:a.background,style:l.background,cx:50,cy:50,r:50}):null,(0,n.createElement)(o,{className:a.trail,counterClockwise:u,dashRatio:t,pathRadius:s,strokeWidth:i,style:l.trail}),(0,n.createElement)(o,{className:a.path,counterClockwise:u,dashRatio:p*t,pathRadius:s,strokeWidth:i,style:l.path}),c?(0,n.createElement)("text",{className:a.text,style:l.text,x:50,y:50},c):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(n.Component)}}]);