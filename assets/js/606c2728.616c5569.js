/*! For license information please see 606c2728.616c5569.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[481,5767,2601,7016,2368,5685,4307,4992,2701,4951,4273,7617,5876,7408,5977,7803,5232,7612,3732,4061,6085,4494,5974,2366],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=c(n),d=i,m=g["".concat(o,".").concat(d)]||g[d]||p[d]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5162:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),i=n(6010),a="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(a,l),hidden:n},t)}},5488:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7462),i=n(7294),a=n(6010),l=n(2389),s=n(7392),o=n(7094),c=n(2466),u="tabList__CuJ",p="tabItem_LNqP";function g(e){var t,n,l=e.lazy,g=e.block,d=e.defaultValue,m=e.values,h=e.groupId,b=e.className,f=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,s.l)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:f[0].props.value;if(null!==x&&!v.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,o.U)(),k=w.tabGroupChoices,E=w.setTabGroupChoices,q=(0,i.useState)(x),O=q[0],N=q[1],P=[],C=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var T=k[h];null!=T&&T!==O&&v.some((function(e){return e.value===T}))&&N(T)}var j=function(e){var t=e.currentTarget,n=P.indexOf(t),r=v[n].value;r!==O&&(C(t),N(r),null!=h&&E(h,String(r)))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,i=P.indexOf(e.currentTarget)+1;n=null!=(r=P[i])?r:P[0];break;case"ArrowLeft":var a,l=P.indexOf(e.currentTarget)-1;n=null!=(a=P[l])?a:P[P.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,a.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":g},b)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return P.push(e)},onKeyDown:S,onFocus:j,onClick:j},l,{className:(0,a.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),l?(0,i.cloneElement)(f.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function d(e){var t=(0,l.Z)();return i.createElement(g,(0,r.Z)({key:String(t)},e))}},6679:function(e){e.exports={mainSidebar:["about",{"Beginner's Guide":["beginner","beginner/card-layout",{"The Chop":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/card-notes","beginner/two-types-of-clues",{"1 - Play Clues":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - Save Clues":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"Clue Interpretation":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - Good Touch Principle":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - Save Principle":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - Minimum Clue Value Principle":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"The Early Game":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3"]},{"General Strategy":["beginner/other-general-strategy","beginner/other-general-strategy-question-1","beginner/other-general-strategy-question-2","beginner/other-general-strategy-question-3","beginner/other-general-strategy-question-4","beginner/other-general-strategy-question-5"]},{"Special Moves":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"Basic Strategies":["reference","first-principles","level-1","level-2","level-3","level-4","level-5","level-6","level-7","level-8","level-9","level-10","level-11","level-12","level-13","level-14","level-15","level-16","level-17","level-18","level-19","level-20","level-21","level-22","level-23"]},{"Advanced Strategies":["extras","extras/play-clues","extras/save-clues","extras/fix-clues","extras/discards-misplays","extras/chop-moves","extras/special-finesses","extras/special-bluffs","extras/suboptimal-moves","extras/pushes-pulls","extras/signal-shifting","extras/ejections","extras/discharges","extras/charms","extras/ejection-extensions","extras/miscellaneous"]},{"Variant Specific":["variant-specific","variant-specific/3-suits","variant-specific/black","variant-specific/black-rainbow","variant-specific/brown","variant-specific/clue-starved","variant-specific/color-blind","variant-specific/cow-pig","variant-specific/dark-null","variant-specific/dark-omni-gray-pink","variant-specific/dark-pink","variant-specific/dark-prism","variant-specific/dark-rainbow","variant-specific/deceptive-fives","variant-specific/dual-color","variant-specific/dual-color-3-suits","variant-specific/dual-color-6-suits","variant-specific/duck","variant-specific/extremely-ambiguous","variant-specific/gray","variant-specific/light-pink","variant-specific/muddy-rainbow-cocoa-rainbow","variant-specific/no-positive-clues","variant-specific/null","variant-specific/number-blind","variant-specific/number-mute","variant-specific/odds-and-evens","variant-specific/omni","variant-specific/pink","variant-specific/pink-omni","variant-specific/pink-ones","variant-specific/prism","variant-specific/rainbow","variant-specific/rainbow-muddy-rainbow","variant-specific/rainbow-ones-rainbow-fives","variant-specific/reversed","variant-specific/special-fives","variant-specific/throw-it-in-a-hole","variant-specific/totally-blind","variant-specific/up-or-down","variant-specific/white"]},"convention-attribution"]}},1961:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7855),i=n(7294),a=n(5774),l=n(6679),s=l.mainSidebar.find((function(e){return e["Beginner's Guide"]}))["Beginner's Guide"],o=[];!function e(t,n){for(var i,a=(0,r.Z)(n);!(i=a()).done;){var l=i.value;"string"==typeof l?t.push(l):e(t,Object.values(l)[0])}}(o,s),"beginner"===o[0]&&o.shift();var c=o.length;function u(e){var t=e.id,n=o.findIndex((function(e){return"beginner/"+t===e}));if(-1===n)throw new Error("page id not found in sidebar");var r=Math.round((n+1)/c*100);return(0,i.useEffect)((function(){var e=document.querySelector("ul.table-of-contents");e&&(e.style.paddingTop="6em")})),i.createElement("div",{id:"percent"},i.createElement(a.Ip,{value:r,text:r+"%"}))}},7466:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return H},contentTitle:function(){return A},default:function(){return Q},frontMatter:function(){return D},metadata:function(){return M},toc:function(){return V}});var r,i,a,l,s,o,c,u,p,g,d,m,h,b,f,v,y,x,w,k,E,q,O,N=n(7462),P=n(3366),C=n(7294),T=n(3905),j=n(1961),S=n(5488),_=n(5162),R=["title","titleId"];function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}function I(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var Z=function(e){var t=e.title,n=e.titleId,N=I(e,R);return C.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:375,viewBox:"0 0 944 375",width:944,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,r||(r=C.createElement("defs",null,C.createElement("filter",{x:0,y:0,width:1,height:1,id:"other-general-strategy-question-5_yml__a"},C.createElement("feFlood",{floodColor:"#0ff"})))),i||(i=C.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red5.svg"})),a||(a=C.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow0.svg"})),l||(l=C.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green2.svg"})),s||(s=C.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue4.svg"})),o||(o=C.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple1.svg"})),C.createElement("svg",B({height:100,width:90,x:464,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,C.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Alice"),c||(c=C.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#other-general-strategy-question-5_yml__a)",x:"0%",y:"50%"},"Clue Giver")),u||(u=C.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),C.createElement("svg",B({height:100,width:70,x:554,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,p||(p=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),C.createElement("svg",B({height:100,width:70,x:632,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,g||(g=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),C.createElement("svg",B({height:100,width:70,x:710,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,d||(d=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),C.createElement("svg",B({height:100,width:70,x:788,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,m||(m=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),C.createElement("svg",B({height:100,width:70,x:866,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,h||(h=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),C.createElement("svg",B({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,C.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Bob")),b||(b=C.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/yellow5.svg",y:125})),f||(f=C.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/blue4.svg",y:125})),v||(v=C.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/green3.svg",y:125})),y||(y=C.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/yellow3.svg",y:125})),x||(x=C.createElement("image",{height:100,width:70,x:866,xlinkHref:"/img/pieces/cards/red1.svg",y:125})),C.createElement("svg",B({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,C.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Cathy")),C.createElement("svg",B({height:100,width:70,x:554,y:250,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,w||(w=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),C.createElement("svg",B({height:100,width:70,x:632,y:250,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,k||(k=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),C.createElement("svg",B({height:100,width:70,x:710,y:250,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,E||(E=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),C.createElement("svg",B({height:100,width:70,x:788,y:250,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,q||(q=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),C.createElement("svg",B({height:100,width:70,x:866,y:250,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,O||(O=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))))},G=["components"],D={id:"other-general-strategy-question-5",title:"Other General Strategy (Question 5)"},A=void 0,M={unversionedId:"beginner/other-general-strategy-question-5",id:"beginner/other-general-strategy-question-5",title:"Other General Strategy (Question 5)",description:"<Tabs",source:"@site/docs/beginner/other-general-strategy-question-5.mdx",sourceDirName:"beginner",slug:"/beginner/other-general-strategy-question-5",permalink:"/docs/beginner/other-general-strategy-question-5",draft:!1,editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/other-general-strategy-question-5.mdx",tags:[],version:"current",frontMatter:{id:"other-general-strategy-question-5",title:"Other General Strategy (Question 5)"},sidebar:"mainSidebar",previous:{title:"Other General Strategy (Question 4)",permalink:"/docs/beginner/other-general-strategy-question-4"},next:{title:"Special Moves",permalink:"/docs/beginner/special-moves"}},H={},V=[],W={toc:V};function Q(e){var t=e.components,n=(0,P.Z)(e,G);return(0,T.kt)("wrapper",(0,N.Z)({},W,n,{components:t,mdxType:"MDXLayout"}),(0,T.kt)(j.Z,{id:"other-general-strategy-question-4",mdxType:"BeginnersGuideProgress"}),(0,T.kt)(S.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,T.kt)(_.Z,{value:"question",mdxType:"TabItem"},(0,T.kt)("ul",null,(0,T.kt)("li",{parentName:"ul"},"Enumerate all of the legal clues that Alice can give."),(0,T.kt)("li",{parentName:"ul"},"Of these possibilities, what clue should Alice give?"))),(0,T.kt)(_.Z,{value:"solution",mdxType:"TabItem"},(0,T.kt)("ul",null,(0,T.kt)("li",{parentName:"ul"},"Alice can clue green to Bob as a ",(0,T.kt)("em",{parentName:"li"},"Play Clue")," on the green 3.",(0,T.kt)("ul",{parentName:"li"},(0,T.kt)("li",{parentName:"ul"},'This would "get" one card.'))),(0,T.kt)("li",{parentName:"ul"},"Alice can clue number 3 to Bob as a ",(0,T.kt)("em",{parentName:"li"},"Play Clue")," on the green 3.",(0,T.kt)("ul",{parentName:"li"},(0,T.kt)("li",{parentName:"ul"},'This would "get" two cards. (Bob would play the green 3 and hold on to the yellow 3 for later.)'))),(0,T.kt)("li",{parentName:"ul"},'Alice knows that normally, color clues are preferred to number clues. But that\'s only when the color clue and the number clue are more or less "the same". Here, it is much better to get two cards than to get one card, so Alice should clue number 3.')))),(0,T.kt)(Z,{mdxType:"OtherGeneralStrategyQuestion5"}))}Q.isMDXComponent=!0},5774:function(e,t,n){"use strict";n.d(t,{Ip:function(){return o}});var r=n(7294),i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},i(e,t)};function a(e){var t=e.className,n=e.counterClockwise,i=e.dashRatio,a=e.pathRadius,o=e.strokeWidth,c=e.style;return(0,r.createElement)("path",{className:t,style:Object.assign({},c,s({pathRadius:a,dashRatio:i,counterClockwise:n})),d:l({pathRadius:a,counterClockwise:n}),strokeWidth:o,fillOpacity:0})}function l(e){var t=e.pathRadius,n=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+n+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+n+" 1 1 0,-"+2*t+"\n    "}function s(e){var t=e.counterClockwise,n=e.dashRatio,r=e.pathRadius,i=2*Math.PI*r,a=(1-n)*i;return{strokeDasharray:i+"px "+i+"px",strokeDashoffset:(t?-a:a)+"px"}}var o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,n=e.minValue,r=e.maxValue;return(Math.min(Math.max(t,n),r)-n)/(r-n)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,n=e.className,i=e.classes,l=e.counterClockwise,s=e.styles,o=e.strokeWidth,c=e.text,u=this.getPathRadius(),p=this.getPathRatio();return(0,r.createElement)("svg",{className:i.root+" "+n,style:s.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,r.createElement)("circle",{className:i.background,style:s.background,cx:50,cy:50,r:50}):null,(0,r.createElement)(a,{className:i.trail,counterClockwise:l,dashRatio:t,pathRadius:u,strokeWidth:o,style:s.trail}),(0,r.createElement)(a,{className:i.path,counterClockwise:l,dashRatio:p*t,pathRadius:u,strokeWidth:o,style:s.path}),c?(0,r.createElement)("text",{className:i.text,style:s.text,x:50,y:50},c):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(r.Component)}}]);