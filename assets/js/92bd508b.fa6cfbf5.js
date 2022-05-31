/*! For license information please see 92bd508b.fa6cfbf5.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[7710,5767,2601,7016,2368,5685,4307,4992,2701,4951,4273,7617,5876,7408,5977,7803,5232,7612,3732,4061,6085,4494,5974,2366],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return g}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),c=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,m=d["".concat(o,".").concat(g)]||d[g]||p[g]||a;return n?i.createElement(m,l(l({ref:t},u),{},{components:n})):i.createElement(m,l({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var i=n(7294),r=n(6010),a="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return i.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,l),hidden:n},t)}},5488:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var i=n(7462),r=n(7294),a=n(6010),l=n(2389),s=n(7392),o=n(7094),c=n(2466),u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,l=e.lazy,d=e.block,g=e.defaultValue,m=e.values,h=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,s.l)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===g?g:null!=(t=null!=g?g:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:f[0].props.value;if(null!==x&&!b.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,o.U)(),k=w.tabGroupChoices,E=w.setTabGroupChoices,q=(0,r.useState)(x),O=q[0],N=q[1],P=[],C=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var T=k[h];null!=T&&T!==O&&b.some((function(e){return e.value===T}))&&N(T)}var S=function(e){var t=e.currentTarget,n=P.indexOf(t),i=b[n].value;i!==O&&(C(t),N(i),null!=h&&E(h,String(i)))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var i,r=P.indexOf(e.currentTarget)+1;n=null!=(i=P[r])?i:P[0];break;case"ArrowLeft":var a,l=P.indexOf(e.currentTarget)-1;n=null!=(a=P[l])?a:P[P.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":d},v)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,i.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return P.push(e)},onKeyDown:j,onFocus:S,onClick:S},l,{className:(0,a.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(f.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function g(e){var t=(0,l.Z)();return r.createElement(d,(0,i.Z)({key:String(t)},e))}},6679:function(e){e.exports={mainSidebar:["about",{"Beginner's Guide":["beginner","beginner/card-layout",{"The Chop":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/card-notes","beginner/two-types-of-clues",{"1 - Play Clues":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - Save Clues":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"Clue Interpretation":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - Good Touch Principle":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - Save Principle":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - Minimum Clue Value Principle":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"The Early Game":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3"]},{"General Strategy":["beginner/other-general-strategy","beginner/other-general-strategy-question-1","beginner/other-general-strategy-question-2","beginner/other-general-strategy-question-3","beginner/other-general-strategy-question-4","beginner/other-general-strategy-question-5"]},{"Special Moves":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"Basic Strategies":["reference","first-principles","level-1","level-2","level-3","level-4","level-5","level-6","level-7","level-8","level-9","level-10","level-11","level-12","level-13","level-14","level-15","level-16","level-17","level-18","level-19","level-20","level-21","level-22","level-23"]},{"Advanced Strategies":["extras","extras/play-clues","extras/save-clues","extras/fix-clues","extras/discards-misplays","extras/chop-moves","extras/special-finesses","extras/special-bluffs","extras/suboptimal-moves","extras/pushes-pulls","extras/signal-shifting","extras/ejections","extras/discharges","extras/charms","extras/ejection-extensions","extras/miscellaneous"]},{"Variant Specific":["variant-specific","variant-specific/3-suits","variant-specific/black","variant-specific/black-rainbow","variant-specific/brown","variant-specific/clue-starved","variant-specific/color-blind","variant-specific/cow-pig","variant-specific/dark-null","variant-specific/dark-omni-gray-pink","variant-specific/dark-pink","variant-specific/dark-prism","variant-specific/dark-rainbow","variant-specific/deceptive-fives","variant-specific/dual-color","variant-specific/dual-color-3-suits","variant-specific/dual-color-6-suits","variant-specific/duck","variant-specific/extremely-ambiguous","variant-specific/gray","variant-specific/light-pink","variant-specific/muddy-rainbow-cocoa-rainbow","variant-specific/no-positive-clues","variant-specific/null","variant-specific/number-blind","variant-specific/number-mute","variant-specific/odds-and-evens","variant-specific/omni","variant-specific/pink","variant-specific/pink-omni","variant-specific/pink-ones","variant-specific/prism","variant-specific/rainbow","variant-specific/rainbow-muddy-rainbow","variant-specific/rainbow-ones-rainbow-fives","variant-specific/reversed","variant-specific/special-fives","variant-specific/throw-it-in-a-hole","variant-specific/totally-blind","variant-specific/up-or-down","variant-specific/white"]},"convention-attribution"]}},1961:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var i=n(7855),r=n(7294),a=n(5774),l=n(6679),s=l.mainSidebar.find((function(e){return e["Beginner's Guide"]}))["Beginner's Guide"],o=[];!function e(t,n){for(var r,a=(0,i.Z)(n);!(r=a()).done;){var l=r.value;"string"==typeof l?t.push(l):e(t,Object.values(l)[0])}}(o,s),"beginner"===o[0]&&o.shift();var c=o.length;function u(e){var t=e.id,n=o.findIndex((function(e){return"beginner/"+t===e}));if(-1===n)throw new Error("page id not found in sidebar");var i=Math.round((n+1)/c*100);return(0,r.useEffect)((function(){var e=document.querySelector("ul.table-of-contents");e&&(e.style.paddingTop="6em")})),r.createElement("div",{id:"percent"},r.createElement(a.Ip,{value:i,text:i+"%"}))}},2275:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return z},contentTitle:function(){return A},default:function(){return L},frontMatter:function(){return V},metadata:function(){return W},toc:function(){return Q}});var i,r,a,l,s,o,c,u,p,d,g,m,h,v,f,b,y,x,w,k,E,q,O,N,P,C,T=n(7462),S=n(3366),j=n(7294),_=n(3905),R=n(1961),I=n(5488),B=n(5162),H=["title","titleId"];function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Z.apply(this,arguments)}function D(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var M=function(e){var t=e.title,n=e.titleId,T=D(e,H);return j.createElement("svg",Z({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:500,viewBox:"0 0 866 500",width:866,className:"example","aria-labelledby":n},T),t?j.createElement("title",{id:n},t):null,i||(i=j.createElement("defs",null,j.createElement("filter",{x:0,y:0,width:1,height:1,id:"5-save-question-2_yml__a"},j.createElement("feFlood",{floodColor:"#0ff"})))),r||(r=j.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red1.svg"})),a||(a=j.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow0.svg"})),l||(l=j.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green0.svg"})),s||(s=j.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue3.svg"})),o||(o=j.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple2.svg"})),j.createElement("svg",Z({height:100,width:90,x:464,className:"example","aria-labelledby":n},T),t?j.createElement("title",{id:n},t):null,j.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Alice"),c||(c=j.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#5-save-question-2_yml__a)",x:"0%",y:"50%"},"Clue Giver")),u||(u=j.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),j.createElement("svg",Z({height:100,width:70,x:554,className:"example","aria-labelledby":n},T),t?j.createElement("title",{id:n},t):null,p||(p=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),j.createElement("svg",Z({height:100,width:70,x:632,className:"example","aria-labelledby":n},T),t?j.createElement("title",{id:n},t):null,d||(d=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),j.createElement("svg",Z({height:100,width:70,x:710,className:"example","aria-labelledby":n},T),t?j.createElement("title",{id:n},t):null,g||(g=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),j.createElement("svg",Z({height:100,width:70,x:788,className:"example","aria-labelledby":n},T),t?j.createElement("title",{id:n},t):null,m||(m=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),j.createElement("svg",Z({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":n},T),t?j.createElement("title",{id:n},t):null,j.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Bob")),h||(h=j.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/red1.svg",y:125})),v||(v=j.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/purple5.svg",y:125})),f||(f=j.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/green5.svg",y:125})),b||(b=j.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/yellow2.svg",y:125})),j.createElement("svg",Z({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":n},T),t?j.createElement("title",{id:n},t):null,j.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Cathy")),y||(y=j.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/red4.svg",y:250})),x||(x=j.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/yellow5.svg",y:250})),w||(w=j.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:707,y:247})),k||(k=j.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/blue5.svg",y:250})),E||(E=j.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:785,y:247})),q||(q=j.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/yellow2.svg",y:250})),j.createElement("svg",Z({height:100,width:90,x:464,y:375,className:"example","aria-labelledby":n},T),t?j.createElement("title",{id:n},t):null,j.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Donald")),O||(O=j.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/purple4.svg",y:375})),N||(N=j.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/blue1.svg",y:375})),P||(P=j.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/red5.svg",y:375})),C||(C=j.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/purple3.svg",y:375})))},G=["components"],V={id:"5-save-question-2",title:"The 5 Save (Question 2)"},A=void 0,W={unversionedId:"beginner/5-save-question-2",id:"beginner/5-save-question-2",title:"The 5 Save (Question 2)",description:"<Tabs",source:"@site/docs/beginner/5-save-question-2.mdx",sourceDirName:"beginner",slug:"/beginner/5-save-question-2",permalink:"/docs/beginner/5-save-question-2",draft:!1,editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/5-save-question-2.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"5-save-question-2",title:"The 5 Save (Question 2)"},sidebar:"mainSidebar",previous:{title:"The 5 Save (Question 1)",permalink:"/docs/beginner/5-save-question-1"},next:{title:"The 2 Save",permalink:"/docs/beginner/2-save"}},z={},Q=[],F={toc:Q};function L(e){var t=e.components,n=(0,S.Z)(e,G);return(0,_.kt)("wrapper",(0,T.Z)({},F,n,{components:t,mdxType:"MDXLayout"}),(0,_.kt)(R.Z,{id:"5-save-question-2",mdxType:"BeginnersGuideProgress"}),(0,_.kt)(I.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,_.kt)(B.Z,{value:"question",mdxType:"TabItem"},(0,_.kt)("ul",null,(0,_.kt)("li",{parentName:"ul"},"What action should Alice perform?"))),(0,_.kt)(B.Z,{value:"solution",mdxType:"TabItem"},(0,_.kt)("ul",null,(0,_.kt)("li",{parentName:"ul"},"Bob has two 5's, but neither of them are on chop, so they cannot be saved yet."),(0,_.kt)("li",{parentName:"ul"},"Cathy has a 5 and it is on chop.",(0,_.kt)("ul",{parentName:"li"},(0,_.kt)("li",{parentName:"ul"},"(Her chop is slot 2 because the cards on slot 3 and slot 4 have a clue on them.)"))),(0,_.kt)("li",{parentName:"ul"},"Donald has one 5, but it is not on chop, so it cannot be saved yet."),(0,_.kt)("li",{parentName:"ul"},"Thus, Alice should clue number 5 to Cathy as a ",(0,_.kt)("em",{parentName:"li"},"5 Save"),".")))),(0,_.kt)(M,{mdxType:"FiveSaveQuestion2"}))}L.isMDXComponent=!0},5774:function(e,t,n){"use strict";n.d(t,{Ip:function(){return o}});var i=n(7294),r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},r(e,t)};function a(e){var t=e.className,n=e.counterClockwise,r=e.dashRatio,a=e.pathRadius,o=e.strokeWidth,c=e.style;return(0,i.createElement)("path",{className:t,style:Object.assign({},c,s({pathRadius:a,dashRatio:r,counterClockwise:n})),d:l({pathRadius:a,counterClockwise:n}),strokeWidth:o,fillOpacity:0})}function l(e){var t=e.pathRadius,n=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+n+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+n+" 1 1 0,-"+2*t+"\n    "}function s(e){var t=e.counterClockwise,n=e.dashRatio,i=e.pathRadius,r=2*Math.PI*i,a=(1-n)*r;return{strokeDasharray:r+"px "+r+"px",strokeDashoffset:(t?-a:a)+"px"}}var o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,n=e.minValue,i=e.maxValue;return(Math.min(Math.max(t,n),i)-n)/(i-n)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,n=e.className,r=e.classes,l=e.counterClockwise,s=e.styles,o=e.strokeWidth,c=e.text,u=this.getPathRadius(),p=this.getPathRatio();return(0,i.createElement)("svg",{className:r.root+" "+n,style:s.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,i.createElement)("circle",{className:r.background,style:s.background,cx:50,cy:50,r:50}):null,(0,i.createElement)(a,{className:r.trail,counterClockwise:l,dashRatio:t,pathRadius:u,strokeWidth:o,style:s.trail}),(0,i.createElement)(a,{className:r.path,counterClockwise:l,dashRatio:p*t,pathRadius:u,strokeWidth:o,style:s.path}),c?(0,i.createElement)("text",{className:r.text,style:s.text,x:50,y:50},c):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(i.Component)}}]);