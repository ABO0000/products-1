(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95405],{461786:function(e){e.exports=function(e){if(navigator.clipboard)return navigator.clipboard.writeText(e).catch((function(e){throw void 0!==e?e:new DOMException("The request is not allowed","NotAllowedError")}));var t=document.createElement("span");t.textContent=e,t.style.whiteSpace="pre",t.style.webkitUserSelect="auto",t.style.userSelect="all",document.body.appendChild(t);var n=window.getSelection(),r=window.document.createRange();n.removeAllRanges(),r.selectNode(t),n.addRange(r);var o=!1;try{o=window.document.execCommand("copy")}catch(s){console.log("error",s)}return n.removeAllRanges(),window.document.body.removeChild(t),o?Promise.resolve():Promise.reject(new DOMException("The request is not allowed","NotAllowedError"))}},166373:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return vt}});var r,o,s,i,a,l,c,d,u,m,p,h,x,f,g,b=n(877396),j=n(825865),v=n(610870),y=n(733215),Z=n(295649),w=n(827378),k=n(165218),S=n.n(k),_=n(146010),M=n(375205),P=n(376811),I=n(568075),T=n(561546),z=n(867078),C=n(825079),D=n(471437),G=n(824246);function R(e){return function(){return(0,G.jsx)(M.Z,{sx:(0,Z.Z)({borderRadius:1,bgcolor:function(e){return"dark"===e.palette.mode?"primaryDark.800":"grey.100"}},e)})}}var W=S()((function(){return n.e(82062).then(n.bind(n,682062))}),{ssr:!1,loading:R({width:360,height:280}),loadableGenerated:{webpack:function(){return[682062]},modules:["../src/components/home/Hero.tsx -> ../showcase/TaskCard"]}}),H=S()((function(){return n.e(19535).then(n.bind(n,119535))}),{ssr:!1,loading:R({width:360,height:146}),loadableGenerated:{webpack:function(){return[119535]},modules:["../src/components/home/Hero.tsx -> ../showcase/PlayerCard"]}}),O=S()((function(){return n.e(18594).then(n.bind(n,18594))}),{ssr:!1,loading:R({width:360,height:48}),loadableGenerated:{webpack:function(){return[18594]},modules:["../src/components/home/Hero.tsx -> ../showcase/ThemeToggleButton"]}}),A=S()((function(){return n.e(87097).then(n.bind(n,787097))}),{ssr:!1,loading:R({width:108,height:20}),loadableGenerated:{webpack:function(){return[787097]},modules:["../src/components/home/Hero.tsx -> ../showcase/ThemeSwitch"]}}),U=S()((function(){return n.e(77237).then(n.bind(n,277237))}),{ssr:!1,loading:R({width:212,height:32}),loadableGenerated:{webpack:function(){return[277237]},modules:["../src/components/home/Hero.tsx -> ../showcase/ThemeChip"]}}),E=S()((function(){return n.e(56764).then(n.bind(n,756764))}),{ssr:!1,loading:R({width:360,height:180}),loadableGenerated:{webpack:function(){return[756764]},modules:["../src/components/home/Hero.tsx -> ../showcase/ThemeTimeline"]}}),B=S()((function(){return Promise.all([n.e(50392),n.e(45526)]).then(n.bind(n,645526))}),{ssr:!1,loading:R({width:360,height:212}),loadableGenerated:{webpack:function(){return[645526]},modules:["../src/components/home/Hero.tsx -> ../showcase/FolderTable"]}}),L=S()((function(){return Promise.all([n.e(36279),n.e(67414),n.e(90656),n.e(93759)]).then(n.bind(n,372576))}),{ssr:!1,loading:R({width:{md:360,xl:400},height:260}),loadableGenerated:{webpack:function(){return[372576]},modules:["../src/components/home/Hero.tsx -> ../showcase/ThemeDatePicker"]}}),V=S()((function(){return Promise.all([n.e(89082),n.e(39284)]).then(n.bind(n,539284))}),{ssr:!1,loading:R({width:{md:360,xl:400},height:48}),loadableGenerated:{webpack:function(){return[539284]},modules:["../src/components/home/Hero.tsx -> ../showcase/ThemeTabs"]}}),F=S()((function(){return Promise.all([n.e(76719),n.e(29493)]).then(n.bind(n,729493))}),{ssr:!1,loading:R({width:{md:124,xl:164},height:214}),loadableGenerated:{webpack:function(){return[729493]},modules:["../src/components/home/Hero.tsx -> ../showcase/ThemeSlider"]}}),N=S()((function(){return n.e(22061).then(n.bind(n,22061))}),{ssr:!1,loading:R({width:196,height:40}),loadableGenerated:{webpack:function(){return[22061]},modules:["../src/components/home/Hero.tsx -> ../showcase/ViewToggleButton"]}}),q=S()((function(){return n.e(27634).then(n.bind(n,527634))}),{ssr:!1,loading:R({width:196,height:154}),loadableGenerated:{webpack:function(){return[527634]},modules:["../src/components/home/Hero.tsx -> ../showcase/ThemeButton"]}}),Y=S()((function(){return n.e(13808).then(n.bind(n,513808))}),{ssr:!1,loading:R({width:{md:360,xl:400},height:171}),loadableGenerated:{webpack:function(){return[513808]},modules:["../src/components/home/Hero.tsx -> ../showcase/ThemeAccordion"]}}),X=S()((function(){return n.e(83782).then(n.bind(n,883782))}),{ssr:!1,loading:R({width:{md:360,xl:400},height:146}),loadableGenerated:{webpack:function(){return[883782]},modules:["../src/components/home/Hero.tsx -> ../showcase/NotificationCard"]}});function K(){var e=w.useRef(null),t=(0,_.Z)(),n=(0,T.Z)(t.breakpoints.up("md"));return w.useEffect((function(){var t;return"undefined"!==typeof MutationObserver&&e.current&&(t=new MutationObserver((function(){e.current&&n&&e.current.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])').forEach((function(e){e.setAttribute("tabindex","-1")}))}))).observe(e.current,{childList:!0,subtree:!0}),function(){t&&t.disconnect()}}),[n]),(0,G.jsx)(D.Z,{left:(0,G.jsxs)(M.Z,{sx:{textAlign:{xs:"center",md:"left"}},children:[(0,G.jsxs)(P.Z,{variant:"h1",sx:{my:2,maxWidth:500},children:["The React ",r||(r=(0,G.jsx)(z.Z,{children:"UI\xa0library"}))," you always wanted"]}),(0,G.jsx)(P.Z,{color:"text.secondary",sx:{mb:3,maxWidth:500},children:"MUI provides a robust, customizable, and accessible library of foundational and advanced components, enabling you to build your design system and develop React applications faster."}),(0,G.jsx)(C.Z,{sx:{justifyContent:{xs:"center",md:"flex-start"}}})]}),rightSx:{p:3,ml:2,minWidth:2e3,overflow:"scroll","& > div":{width:360,display:"inline-flex",verticalAlign:"top","&:nth-of-type(2)":{width:{xl:400}}},"&& *":{fontFamily:['"IBM Plex Sans"',"-apple-system","BlinkMacSystemFont","sans-serif"].join(",")}},rightRef:e,right:(0,G.jsxs)(w.Fragment,{children:[n&&(0,G.jsxs)(I.Z,{spacing:4,sx:{"& > .MuiPaper-root":{maxWidth:"none"}},children:[o||(o=(0,G.jsx)(W,{})),s||(s=(0,G.jsx)(H,{})),i||(i=(0,G.jsx)(O,{})),(0,G.jsxs)(M.Z,{sx:{display:"flex",justifyContent:"space-around",alignItems:"center"},children:[a||(a=(0,G.jsx)(A,{})),(0,G.jsx)(M.Z,{sx:{width:40}}),l||(l=(0,G.jsx)(U,{}))]}),c||(c=(0,G.jsx)(E,{})),d||(d=(0,G.jsx)(B,{}))]}),n&&(0,G.jsxs)(I.Z,{spacing:4,sx:{ml:4,"& > .MuiPaper-root":{maxWidth:"none"}},children:[u||(u=(0,G.jsx)(L,{})),m||(m=(0,G.jsx)(V,{})),(0,G.jsxs)(M.Z,{sx:{display:"flex"},children:[(0,G.jsx)(M.Z,{sx:{flexGrow:1},children:p||(p=(0,G.jsx)(F,{}))}),(0,G.jsxs)(I.Z,{spacing:2,sx:{ml:4},children:[h||(h=(0,G.jsx)(N,{})),x||(x=(0,G.jsx)(q,{}))]})]}),f||(f=(0,G.jsx)(Y,{})),g||(g=(0,G.jsx)(X,{}))]})]})})}var J,Q,$,ee,te,ne,re=n(562158),oe=n(25778),se=n(509957),ie=n(197704),ae=n(437260),le=n(843675),ce=n(47189),de=n(937835),ue=n(796839),me=n(494969),pe=S()((function(){return n.e(7815).then(n.bind(n,207815))}),{ssr:!1,loadableGenerated:{webpack:function(){return[207815]},modules:["../src/components/home/ProductsSwitcher.tsx -> react-swipeable-views"]}});function he(e){var t=e["aria-label"],n=e.icon,r=e.name,o=e.description,s=e.href;return(0,G.jsxs)(M.Z,{component:"span",sx:{display:"flex",p:2,flexDirection:{xs:"column",md:"row"},alignItems:{md:"center"}},children:[(0,G.jsx)(M.Z,{component:"span",sx:{mr:2,mb:{xs:1,md:0}},children:n}),(0,G.jsxs)("span",{children:[(0,G.jsx)(P.Z,{component:"span",color:"text.primary",variant:"body2",fontWeight:"bold",display:"block",children:r}),(0,G.jsx)(P.Z,{component:"span",color:"text.secondary",variant:"body2",fontWeight:"regular",display:"block",sx:{my:.5},children:o}),(0,G.jsxs)(de.Z,{href:s,color:"primary",variant:"body2",fontWeight:"bold","aria-label":t,sx:{display:"inline-flex",alignItems:"center",minHeight:24,"& > svg":{transition:"0.2s"},"&:hover > svg":{transform:"translateX(2px)"}},onClick:function(e){e.stopPropagation()},children:[J||(J=(0,G.jsx)("span",{children:"Learn more"}))," ",(0,G.jsx)(ue.default,{fontSize:"small",sx:{mt:"1px",ml:"2px"}})]})]})]})}var xe,fe,ge,be,je,ve,ye,Ze=function(e){var t=e.inView,n=void 0!==t&&t,r=e.productIndex,o=e.setProductIndex,s=(0,T.Z)((function(e){return e.breakpoints.down("md")})),i=[(0,G.jsx)(he,{"aria-label":"Go to core components page",icon:Q||(Q=(0,G.jsx)(le.Z,{name:"product-core"})),name:"MUI Core",description:"Ready-to-use foundational components, free forever.",href:me.Z.productCore}),(0,G.jsx)(he,{"aria-label":"Go to advanced components page",icon:$||($=(0,G.jsx)(le.Z,{name:"product-advanced"})),name:ee||(ee=(0,G.jsx)(M.Z,{component:"span",display:"inline-flex",alignItems:"center",children:"MUI X"})),description:"Advanced and powerful components for complex use-cases.",href:me.Z.productAdvanced}),(0,G.jsx)(he,{"aria-label":"Go to templates page",icon:te||(te=(0,G.jsx)(le.Z,{name:"product-templates"})),name:"Templates",description:"Fully built, out-of-the-box, templates for your application.",href:me.Z.productTemplates}),(0,G.jsx)(he,{"aria-label":"Go to design-kits page",icon:ne||(ne=(0,G.jsx)(le.Z,{name:"product-designkits"})),name:"Design kits",description:"Our components available in your favorite design tool.",href:me.Z.productDesignKits})];return(0,G.jsxs)(w.Fragment,{children:[(0,G.jsx)(M.Z,{sx:{display:{md:"none"},maxWidth:"calc(100vw - 40px)",minHeight:{xs:200,sm:166},"& > div":{pr:"32%"}},children:s&&n&&(0,G.jsx)(pe,{index:r,resistance:!0,enableMouseEvents:!0,onChangeIndex:function(e){return o(e)},children:i.map((function(e,t){return(0,G.jsx)(ce.Z,{disableBorder:!0,onClick:function(){return o(t)},selected:r===t,sx:{width:"100%",transition:"0.3s",transform:r!==t?"scale(0.9)":"scale(1)"},children:e},t)}))})}),(0,G.jsx)(I.Z,{spacing:1,sx:{display:{xs:"none",md:"flex"},maxWidth:500},children:i.map((function(e,t){return(0,G.jsx)(ce.Z,{disableBorder:!0,onClick:function(){return o(t)},selected:r===t,children:e},t)}))})]})},we=n(88848),ke=n(201340),Se=n(17496);function _e(e){return function(){return(0,G.jsx)(M.Z,{sx:(0,Z.Z)({borderRadius:1,bgcolor:function(e){return"dark"===e.palette.mode?"primaryDark.800":"grey.100"}},e)})}}var Me,Pe,Ie,Te,ze,Ce=S()((function(){return Promise.all([n.e(16950),n.e(63418),n.e(2916)]).then(n.bind(n,102916))}),{loading:_e({height:723,mt:{md:2}}),loadableGenerated:{webpack:function(){return[102916]},modules:["../src/components/home/ProductSuite.tsx -> ./CoreShowcase"]}}),De=S()((function(){return Promise.all([n.e(98430),n.e(16950),n.e(67414),n.e(76719),n.e(60489),n.e(7558),n.e(63418),n.e(54599)]).then(n.bind(n,639030))}),{loading:_e({height:750,mt:{md:2}}),loadableGenerated:{webpack:function(){return[639030]},modules:["../src/components/home/ProductSuite.tsx -> ./AdvancedShowcase"]}}),Ge=S()((function(){return Promise.resolve().then(n.bind(n,88848))}),{loadableGenerated:{webpack:function(){return[88848]},modules:["../src/components/home/ProductSuite.tsx -> ./StoreTemplatesBanner"]}}),Re=S()((function(){return Promise.resolve().then(n.bind(n,201340))}),{loadableGenerated:{webpack:function(){return[201340]},modules:["../src/components/home/ProductSuite.tsx -> ./DesignKits"]}}),We=function(){var e=w.useState(0),t=(0,oe.Z)(e,2),n=t[0],r=t[1],o=(0,se.YD)({triggerOnce:!0,threshold:0,rootMargin:"200px"}),s=o.ref,i=o.inView;return(0,G.jsx)(M.Z,{ref:s,sx:{bgcolor:function(e){return"dark"===e.palette.mode?"primaryDark.900":"grey.50"},py:{xs:4,sm:6,md:8},overflow:"hidden"},children:(0,G.jsx)(ae.Z,{children:(0,G.jsxs)(ie.ZP,{container:!0,spacing:2,children:[(0,G.jsxs)(ie.ZP,{item:!0,md:6,children:[(0,G.jsx)(M.Z,{maxWidth:500,children:(0,G.jsx)(Se.Z,{overline:"Products",title:(0,G.jsxs)(P.Z,{variant:"h2",sx:{my:1},children:["Extensive library of components, ready for"," ",xe||(xe=(0,G.jsx)(z.Z,{children:"production"}))]}),description:"A suite of products integrated to make your life easier when it comes to setting up design systems."})}),(0,G.jsx)(M.Z,{sx:{mt:4}}),(0,G.jsx)(Ze,{inView:i,productIndex:n,setProductIndex:r})]}),(0,G.jsx)(ie.ZP,{item:!0,xs:12,md:6,sx:0===n?{minHeight:{xs:777,sm:757,md:"unset"}}:{},children:i&&(0,G.jsxs)(w.Fragment,{children:[fe||(fe=(0,G.jsx)(we.PrefetchStoreTemplateImages,{})),ge||(ge=(0,G.jsx)(ke.PrefetchDesignKitImages,{})),0===n&&(be||(be=(0,G.jsx)(Ce,{}))),1===n&&(je||(je=(0,G.jsx)(De,{}))),2===n&&(ve||(ve=(0,G.jsx)(Ge,{}))),3===n&&(ye||(ye=(0,G.jsx)(Re,{})))]})})]})})})},He=n(160445),Oe=function(){return(0,G.jsx)(M.Z,{sx:{height:{xs:1484,sm:825,md:605},bgcolor:function(e){return"dark"===e.palette.mode?"primaryDark.900":"grey.100"},borderRadius:1}})},Ae=S()((function(){return Promise.all([n.e(67414),n.e(89082),n.e(50392),n.e(36488)]).then(n.bind(n,36488))}),{loading:Oe,loadableGenerated:{webpack:function(){return[36488]},modules:["../src/components/home/DesignSystemComponents.tsx -> ./MaterialDesignComponents"]}}),Ue=function(){var e=(0,se.YD)({triggerOnce:!0,threshold:0,rootMargin:"500px"}),t=e.ref,n=e.inView;return(0,G.jsxs)(ae.Z,{ref:t,sx:{py:{xs:4,sm:6,md:8}},children:[(0,G.jsx)(Se.Z,{overline:"Ready to use",title:(0,G.jsxs)(P.Z,{variant:"h2",sx:{mt:1,mb:{xs:2,sm:4},maxWidth:500},children:["Self-supporting, simple, declarative ",Me||(Me=(0,G.jsx)(z.Z,{children:"components"}))]})}),n?Pe||(Pe=(0,G.jsx)(Ae,{})):Ie||(Ie=(0,G.jsx)(Oe,{}))]})},Ee=n(443718),Be=n(709497),Le=n(62072),Ve=n(864380),Fe=n(348253),Ne=n(488216);function qe(e){var t=e.item,n=e.inView,r=void 0!==n&&n,o=e.logoSize,s=void 0===o?40:o;return(0,G.jsxs)(Be.Z,{component:de.Z,noLinkStyle:!0,href:t.href,target:"_blank",rel:"sponsored noopener",variant:"outlined",sx:{p:2,display:"flex",height:"100%","& svg":{transition:"0.2s"},"&:hover":{"& svg":{transform:"translateY(-2px)"}}},children:[(0,G.jsx)(Fe.Z,(0,Z.Z)((0,Z.Z)({},r&&{src:t.src,srcSet:t.srcSet,alt:"".concat(t.name," logo")}),{},{sx:{borderRadius:"4px",width:s,height:s}})),(0,G.jsxs)(M.Z,{sx:{ml:2},children:[(0,G.jsxs)(P.Z,{variant:"body2",fontWeight:"bold",children:[t.name," ",(0,G.jsx)(Ne.default,{color:"primary",sx:{fontSize:14,verticalAlign:"middle",ml:.5}})]}),(0,G.jsx)(P.Z,{variant:"body2",color:"text.secondary",children:t.description})]})]})}var Ye,Xe,Ke=[{src:"/static/sponsors/octopus.svg",srcSet:"/static/sponsors/octopus.svg",name:"Octopus Deploy",description:"Repeatable reliable deployments.",href:"https://octopus.com/?utm_source=MUI&utm_medium=referral&utm_content=homepage"},{src:"/static/sponsors/doit-square.svg",srcSet:"/static/sponsors/doit-square.svg",name:"Doit International",description:"Management platform for Google Cloud and AWS.",href:"https://www.doit-intl.com/flexsave/?utm_source=MUI&utm_medium=referral&utm_content=homepage"},{src:"/static/sponsors/aptugo.svg",srcSet:"/static/sponsors/aptugo.svg",name:"Aptugo",description:"Build scalable Web and Mobile Apps fast and easy with Aptugo's visual interface.",href:"https://www.aptugo.com/?utm_source=MUI&utm_medium=referral&utm_content=homepage"}];function Je(){var e=(0,se.YD)({triggerOnce:!0,threshold:0,rootMargin:"500px"}),t=e.ref,n=e.inView,r=3>Ke.length;return(0,G.jsxs)(M.Z,{ref:t,children:[(0,G.jsx)(M.Z,{sx:{mb:1},children:(0,G.jsx)(P.Z,{component:"h3",variant:"h5",fontWeight:"extraBold",sx:{color:function(e){return"dark"===e.palette.mode?e.palette.primary[400]:e.palette.primary[500]}},children:"Diamond"})}),(0,G.jsxs)(ie.ZP,{container:!0,spacing:{xs:2,md:4},children:[Ke.map((function(e){return(0,G.jsx)(ie.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,G.jsx)(qe,{logoSize:64,inView:n,item:e})},e.name)})),r&&(0,G.jsx)(ie.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,G.jsxs)(Be.Z,{variant:"outlined",sx:{p:2,display:"flex",alignItems:"center",height:"100%",borderStyle:"dashed",borderColor:function(e){return"dark"===e.palette.mode?"primaryDark.400":"grey.300"}},children:[(0,G.jsx)(Le.Z,{"aria-label":"Become MUI sponsor",component:"a",href:"mailto:diamond@mui.com",target:"_blank",rel:"noopener noreferrer",color:"primary",sx:{mr:2,border:"1px solid",borderColor:function(e){return"dark"===e.palette.mode?"primaryDark.400":"grey.300"}},children:Te||(Te=(0,G.jsx)(Ve.default,{}))}),ze||(ze=(0,G.jsxs)("div",{children:[(0,G.jsx)(P.Z,{variant:"body2",color:"text.primary",fontWeight:"bold",children:"Become our sponsor!"}),(0,G.jsxs)(P.Z,{variant:"body2",color:"text.secondary",children:["To join us, contact us at"," ",(0,G.jsx)(de.Z,{href:"mailto:diamond@mui.com",target:"_blank",rel:"noopener noreferrer",children:"diamond@mui.com"})," ","for pre-approval."]})]}))]})})]})]})}var Qe,$e,et=[{src:"/static/sponsors/tidelift.svg",srcSet:"/static/sponsors/tidelift.svg",name:"Tidelift",description:"Enterprise-ready open-source software.",href:"https://tidelift.com/?utm_source=npm-material-ui&utm_medium=referral&utm_campaign=homepage"},{src:"https://avatars.githubusercontent.com/u/24789812?size=40",srcSet:"https://avatars.githubusercontent.com/u/24789812?size=80 2x",name:"Bit",description:"The fastest way to share code.",href:"https://bit.dev/?utm_source=MUI&utm_medium=referral&utm_content=homepage"},{src:"https://images.opencollective.com/callemall/a6946da/logo/40.png",srcSet:"https://images.opencollective.com/callemall/a6946da/logo/80.png 2x",name:"Text-em-all",description:"The easy way to message your group.",href:"https://www.text-em-all.com/?utm_source=MUI&utm_medium=referral&utm_content=homepage"},{src:"https://images.opencollective.com/laststance/daffd6c/logo/40.png",srcSet:"https://images.opencollective.com/laststance/daffd6c/logo/80.png 2x",name:"Laststance",description:"Organization for OSS activity based on Tokyo.",href:"https://www.laststance.io/?utm_source=MUI&utm_medium=referral&utm_content=homepage"},{src:"https://images.opencollective.com/movavi-software/a1d0167/logo/40.png",srcSet:"https://images.opencollective.com/movavi-software/a1d0167/logo/80.png 2x",name:"Movavi",description:"Screen recorder for Mac.",href:"https://www.movavi.com/?utm_source=MUI&utm_medium=referral&utm_content=homepage"},{src:"https://images.opencollective.com/aussiecasinohex/923df37/logo/40.png",srcSet:"https://images.opencollective.com/aussiecasinohex/923df37/logo/80.png 2x",name:"online-aussie-casino",description:"Aussie Gambling Guide.",href:"https://online-aussie-casino.com/?utm_source=MUI&utm_medium=referral&utm_content=homepage"},{src:"https://images.opencollective.com/sumatosoft_company/0b78570/avatar/40.png",srcSet:"https://images.opencollective.com/sumatosoft_company/0b78570/avatar/80.png 2x",name:"SunmatoSoft",description:"We help companies to digitalize their businesses.",href:"https://sumatosoft.com/?utm_source=MUI&utm_medium=referral&utm_content=homepage"}];function tt(){var e=(0,se.YD)({triggerOnce:!0,threshold:0,rootMargin:"500px"}),t=e.ref,n=e.inView;return(0,G.jsxs)(M.Z,{ref:t,children:[(0,G.jsx)(M.Z,{sx:{mb:1},children:(0,G.jsx)(P.Z,{component:"h3",variant:"h5",fontWeight:"extraBold",sx:{color:function(e){return"dark"===e.palette.mode?e.palette.warning[500]:e.palette.warning[700]}},children:"Gold"})}),(0,G.jsxs)(ie.ZP,{container:!0,spacing:{xs:2,md:3},children:[et.map((function(e){return(0,G.jsx)(ie.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,G.jsx)(qe,{inView:n,item:e})},e.name)})),(0,G.jsx)(ie.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,G.jsxs)(Be.Z,{variant:"outlined",sx:{p:2,display:"flex",alignItems:"center",height:"100%",borderStyle:"dashed",borderColor:function(e){return"dark"===e.palette.mode?"primaryDark.400":"grey.300"}},children:[(0,G.jsx)(Le.Z,{"aria-label":"Become MUI sponsor",component:"a",href:me.Z.goldSponsor,target:"_blank",rel:"noopener noreferrer",color:"primary",sx:{mr:2,border:"1px solid",borderColor:function(e){return"dark"===e.palette.mode?"primaryDark.400":"grey.300"}},children:Ye||(Ye=(0,G.jsx)(Ve.default,{}))}),(0,G.jsxs)("div",{children:[Xe||(Xe=(0,G.jsx)(P.Z,{variant:"body2",color:"text.primary",fontWeight:"bold",children:"Become our sponsor!"})),(0,G.jsxs)(P.Z,{variant:"body2",color:"text.secondary",children:["To join us,"," ",(0,G.jsx)(de.Z,{href:me.Z.goldSponsor,target:"_blank",rel:"noopener noreferrer",children:"choose how"})," ","you want to contribute."]})]})]})})]})]})}var nt,rt=function(){return(0,G.jsxs)(ae.Z,{sx:{py:{xs:4,md:8}},children:[(0,G.jsx)(P.Z,{variant:"h2",sx:{my:1},children:"Our sponsors"}),(0,G.jsx)(P.Z,{color:"text.secondary",sx:{mb:{xs:2,md:4},maxWidth:450},children:"The continued development and maintenance of MUI is greatly helped by our generous sponsors."}),Qe||(Qe=(0,G.jsx)(Je,{})),(0,G.jsx)(M.Z,{sx:{mb:4}}),$e||($e=(0,G.jsx)(tt,{}))]})},ot=n(851978),st=n(916360),it=n(302954),at=n(686677),lt=n(136683),ct=n(252423),dt=n(701886),ut=n(846189);function mt(){var e=(0,at.useRouter)(),t=w.useState("subscribed"!==e.query.newsletter),n=(0,oe.Z)(t,2),r=n[0],o=n[1];return w.useEffect((function(){"subscribed"===e.query.newsletter&&(o(!1),e.replace(e.pathname))}),[e.query.newsletter,e]),w.useEffect((function(){var e=setTimeout((function(){r||o(!0)}),4e3);return function(){clearTimeout(e)}}),[r]),(0,G.jsx)(lt.Z,{in:!r,timeout:400,direction:"down",children:(0,G.jsx)(M.Z,{sx:{position:"fixed",zIndex:1300,top:80,left:0,width:"100%"},children:(0,G.jsxs)(ct.Z,{variant:"outlined",role:"alert",sx:{p:1,position:"absolute",left:"50%",transform:"translate(-50%)",opacity:r?0:1,transition:"0.5s",display:"flex",alignItems:"center",boxShadow:function(e){return"dark"===e.palette.mode?"0px 4px 20px rgba(0, 0, 0, 0.6)":"0px 4px 20px rgba(61, 71, 82, 0.25)"}},children:[(0,G.jsx)(ut.default,{color:"success",sx:{mx:.5}}),(0,G.jsx)("div",{children:(0,G.jsx)(P.Z,{variant:"body2",color:"text.secondary",fontWeight:500,sx:{ml:1,mr:2},children:"You have subscribed to MUI newsletter."})}),(0,G.jsx)(Le.Z,{"aria-hidden":!0,size:"small",onClick:function(){return o(!0)},"aria-label":"close",children:nt||(nt=(0,G.jsx)(dt.default,{fontSize:"small"}))})]})})})}var pt,ht,xt,ft,gt,bt,jt=n(331699);function vt(){return(0,G.jsxs)(it.Z,{children:[pt||(pt=(0,G.jsx)(b.Z,{title:"MUI: The React component library you always wanted",description:"MUI provides a simple, customizable, and accessible library of React components. Follow your own design system, or start with Material Design. You will develop React applications faster."})),ht||(ht=(0,G.jsx)(j.Z,{children:(0,G.jsx)(mt,{})})),xt||(xt=(0,G.jsx)(jt.Z,{})),ft||(ft=(0,G.jsx)(y.Z,{})),gt||(gt=(0,G.jsxs)("main",{children:[(0,G.jsx)(K,{}),(0,G.jsx)(re.ZP,{companies:re.Wx}),(0,G.jsx)(We,{}),(0,G.jsx)(He.Z,{}),(0,G.jsx)(Ue,{}),(0,G.jsx)(Ee.Z,{}),(0,G.jsx)(rt,{}),(0,G.jsx)(ot.Z,{}),(0,G.jsx)(v.Z,{})]})),bt||(bt=(0,G.jsx)(st.Z,{})),(0,G.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:'\n{\n  "@context": "https://schema.org",\n  "@type": "Organization",\n  "name": "MUI",\n  "url": "https://mui.com/",\n  "logo": "https://mui.com/static/logo.png",\n  "sameAs": [\n    "https://twitter.com/MUI_hq",\n    "https://github.com/mui/",\n    "https://opencollective.com/mui"\n  ]\n}\n          '}})]})}},825079:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r,o,s,i=n(295649),a=n(25778),l=n(481936),c=n(827378),d=n(461786),u=n.n(d),m=n(375205),p=n(871649),h=n(796839),x=n(224058),f=n(601794),g=n(494969),b=n(937835),j=n(824246),v=["installation","to"];function y(e){var t=e.installation,n=void 0===t?"npm install @mui/material @emotion/react @emotion/styled":t,d=e.to,y=void 0===d?g.Z.documentation:d,Z=(0,l.Z)(e,v),w=c.useState(!1),k=(0,a.Z)(w,2),S=k[0],_=k[1];return(0,j.jsxs)(m.Z,(0,i.Z)((0,i.Z)({},Z),{},{sx:(0,i.Z)({display:"flex",flexWrap:"wrap","&& > *":{minWidth:"clamp(0px, (492px - 100%) * 999 ,100%)"}},Z.sx),children:[(0,j.jsx)(p.Z,{href:y,component:b.Z,noLinkStyle:!0,size:"large",variant:"contained",endIcon:r||(r=(0,j.jsx)(h.default,{})),sx:{mr:{xs:0,sm:2}},children:"Get started"}),(0,j.jsx)(m.Z,{sx:{py:1,display:{xs:"block",sm:"hidden"}}}),(0,j.jsx)(p.Z,{size:"large",variant:"code",endIcon:S?o||(o=(0,j.jsx)(f.default,{color:"primary"})):s||(s=(0,j.jsx)(x.default,{})),onClick:function(){_(!0),u()(n).then((function(){setTimeout((function(){return _(!1)}),2e3)}))},sx:{maxWidth:"324px",display:"inline-block",justifyContent:"start",overflowX:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",position:"relative",pr:5},children:n})]}))}},88848:function(e,t,n){"use strict";n.r(t),n.d(t,{PrefetchStoreTemplateImages:function(){return D},StoreTemplatesSet1:function(){return R},StoreTemplatesSet2:function(){return H},default:function(){return O}});var r,o,s=n(823315),i=n(295649),a=n(481936),l=n(957379),c=n(183452),d=n.n(c),u=n(827378),m=n(290763),p=n(240120),h=n(146010),x=n(375205),f=n(376811),g=n(494969),b=n(488216),j=n(158065),v=n(491189),y=n(824246),Z=["brand"],w=["brand"],k=["keyframes","disableLink"],S=["keyframes","disableLink"],_=900/494,M=(0,m.ZP)("img")((function(e){var t,n=e.theme;return t={display:"block",width:200,height:200/_},(0,l.Z)(t,n.breakpoints.up("sm"),{width:300,height:300/_}),(0,l.Z)(t,n.breakpoints.up("md"),{width:450,height:247}),(0,l.Z)(t,"border","6px solid"),(0,l.Z)(t,"borderColor","dark"===n.palette.mode?n.palette.grey[800]:n.palette.grey[400]),(0,l.Z)(t,"borderRadius",n.shape.borderRadius),(0,l.Z)(t,"objectFit","cover"),(0,l.Z)(t,"boxShadow","dark"===n.palette.mode?"0px 4px 20px rgba(0, 0, 0, 0.6)":"0px 4px 20px rgba(61, 71, 82, 0.25)"),t})),P=(0,m.ZP)("a")({display:"inline-block",position:"relative",transition:"0.3s","&:hover, &:focus":{"& > div":{opacity:1}}}),I={"minimal-dashboard":g.Z.storeTemplateMinimalDashboard,theFront:g.Z.storeTheFront,"material-app":g.Z.storeTemplateMaterialApp,flexy:g.Z.storeFlexy,berry:g.Z.storeTemplateBerry,webbee:g.Z.storeTemplateWebbee},T=d()(I),z=u.forwardRef((function(e,t){var n=e.brand,o=(0,a.Z)(e,Z);return(0,y.jsxs)(P,(0,i.Z)((0,i.Z)({ref:t,"aria-label":"Go to MUI Store",href:I[n],target:"_blank"},o),{},{children:[o.children,(0,y.jsxs)(x.Z,{sx:{transition:"0.3s",borderRadius:1,position:"absolute",width:"100%",height:"100%",opacity:0,top:0,left:0,bgcolor:function(e){return(0,p.Fq)(e.palette.primaryDark[500],.8)},color:"#fff",display:"flex",alignItems:"center",justifyContent:"center"},children:[r||(r=(0,y.jsx)(f.Z,{fontWeight:"bold",children:"Go to store"})),(0,y.jsx)(b.default,{fontSize:"small",sx:{ml:1}})]})]}))})),C=u.forwardRef((function(e,t){var n=e.brand,r=(0,a.Z)(e,w),o=(0,h.Z)().palette.mode;return(0,y.jsx)(M,(0,i.Z)({ref:t,src:"/static/branding/store-templates/template-".concat(o).concat(d()(I).indexOf(n)+1,".jpeg"),alt:""},r))})),D=function(){function e(e,t){return{loading:"lazy",width:"900",height:"494",src:"/static/branding/store-templates/template-".concat(e).concat(t,".jpeg")}}return(0,y.jsx)(x.Z,{sx:{width:0,height:0,position:"fixed",zIndex:-1,top:-1e3,"& > img":{position:"absolute"}},children:(0,s.Z)(Array(6)).map((function(t,n){return(0,y.jsxs)(u.Fragment,{children:[(0,y.jsx)("img",(0,i.Z)({alt:""},e("light",n+1))),(0,y.jsx)("img",(0,i.Z)({alt:""},e("dark",n+1)))]},n)}))})},G={"0%":{transform:"translateY(-300px)"},"100%":{transform:"translateY(-60px)"}};function R(e){var t=e.keyframes,n=void 0===t?G:t,r=e.disableLink,o=(0,a.Z)(e,k);function s(e){return r?(0,y.jsx)(C,{brand:e}):(0,y.jsx)(z,{brand:e,children:(0,y.jsx)(C,{brand:e})})}return(0,y.jsxs)(j.Z,(0,i.Z)((0,i.Z)({animationName:"template-slidedown"},o),{},{keyframes:n,children:[(0,y.jsx)(v.Z,{delay:400,children:s(T[4])}),(0,y.jsx)(v.Z,{delay:200,children:s(T[2])}),(0,y.jsx)(v.Z,{delay:0,children:s(T[0])})]}))}var W={"0%":{transform:"translateY(150px)"},"100%":{transform:"translateY(-20px)"}};function H(e){var t=e.keyframes,n=void 0===t?W:t,r=e.disableLink,o=(0,a.Z)(e,S);function s(e){return r?(0,y.jsx)(C,{brand:e}):(0,y.jsx)(z,{brand:e,children:(0,y.jsx)(C,{brand:e})})}return(0,y.jsxs)(j.Z,(0,i.Z)((0,i.Z)({animationName:"template-slidedup"},o),{},{keyframes:n,children:[(0,y.jsx)(v.Z,{delay:100,children:s(T[1])}),(0,y.jsx)(v.Z,{delay:300,children:s(T[3])}),(0,y.jsx)(v.Z,{delay:500,children:s(T[5])})]}))}function O(){return(0,y.jsxs)(x.Z,{sx:{mx:{xs:-2,sm:-3,md:0},my:{md:-8},height:{xs:300,sm:360,md:"calc(100% + 160px)"},overflow:"hidden",position:"relative",width:{xs:"100vw",md:"50vw"}},children:[(0,y.jsx)(x.Z,{sx:{display:{xs:"block",md:"none"},position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",background:function(e){return"linear-gradient(to bottom, ".concat("dark"===e.palette.mode?e.palette.primaryDark[900]:e.palette.grey[50]," 0%, ").concat("dark"===e.palette.mode?(0,p.Fq)(e.palette.primaryDark[900],0):"rgba(255,255,255,0)"," 30%, ").concat("dark"===e.palette.mode?(0,p.Fq)(e.palette.primaryDark[900],0):"rgba(255,255,255,0)"," 70%, ").concat("dark"===e.palette.mode?e.palette.primaryDark[900]:e.palette.grey[50]," 100%)")},zIndex:2}}),(0,y.jsx)(x.Z,{sx:{height:"100%",position:"relative",perspective:"1000px"},children:(0,y.jsxs)(x.Z,{sx:{left:{xs:"45%",md:"40%"},position:"absolute",zIndex:-1,display:"flex",transform:"translateX(-40%) rotateZ(-30deg) rotateX(8deg) rotateY(8deg)",transformOrigin:"center center"},children:[o||(o=(0,y.jsx)(R,{})),(0,y.jsx)(H,{sx:{ml:{xs:2,sm:4,md:8}}})]})}),(0,y.jsx)(x.Z,{sx:{display:{xs:"none",md:"block"},position:"absolute",top:0,left:0,width:400,height:"150%",pointerEvents:"none",background:function(e){return"linear-gradient(to right, ".concat("dark"===e.palette.mode?e.palette.primaryDark[900]:e.palette.grey[50],", ").concat("dark"===e.palette.mode?(0,p.Fq)(e.palette.primaryDark[900],0):"rgba(255,255,255,0)",")")},zIndex:10}})]})}},160445:function(e,t,n){"use strict";var r,o=n(375205),s=n(437260),i=n(709497),a=n(376811),l=n(197704),c=n(867078),d=n(985493),u=n(263286),m=n(47930),p=n(462504),h=n(17496),x=n(824246),f=[{icon:(0,x.jsx)(d.default,{fontSize:"small",color:"primary"}),title:"Beautifully designed",description:"You can start your projects with Google's Material Design or build your designs using sophisticated theming features."},{icon:(0,x.jsx)(u.default,{fontSize:"small",color:"primary"}),title:"Easily customized",description:"Enjoy the power of our components without sacrificing the styles you want. Tweak how your components render down to the very last class."},{icon:(0,x.jsx)(m.default,{fontSize:"small",color:"primary"}),title:"Superb documentation",description:"Our docs were shaped throughout the years with the help and experience of our trusted 2,000+ open-source contributors. It's all there!"},{icon:(0,x.jsx)(p.default,{fontSize:"small",color:"primary"}),title:"Accessibility in mind",description:"We care about making it great for everyone. We improve accessibility for all of our components constantly, helping you to reach the largest audience possible!"}];t.Z=function(){return(0,x.jsxs)(s.Z,{sx:{py:{xs:4,sm:6,md:8}},children:[(0,x.jsx)(h.Z,{overline:"Developer experience",title:(0,x.jsxs)(a.Z,{variant:"h2",sx:{mt:1,mb:{xs:2,sm:4},maxWidth:500},children:["Powerful tools to help you build ",r||(r=(0,x.jsx)(c.Z,{children:"all types"}))," of user interfaces"]})}),(0,x.jsx)(l.ZP,{container:!0,spacing:2,children:f.map((function(e){var t=e.icon,n=e.title,r=e.description;return(0,x.jsx)(l.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,x.jsxs)(i.Z,{variant:"outlined",sx:{p:2,height:"100%"},children:[(0,x.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center",mb:1},children:[t,(0,x.jsx)(a.Z,{fontWeight:"bold",component:"h3",color:"text.primary",variant:"body2",sx:{ml:1},children:n})]}),(0,x.jsx)(a.Z,{variant:"body2",color:"text.secondary",children:r})]})},n)}))})]})}},252423:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(295649),o=n(481936),s=n(827378),i=n(138944),a=n(47918),l=n(290763),c=n(906205),d=n(709497),u=n(892992);function m(e){return(0,u.Z)("MuiCard",e)}(0,n(84408).Z)("MuiCard",["root"]);var p=n(824246),h=["className","raised"],x=(0,l.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),f=s.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiCard"}),s=n.className,l=n.raised,d=void 0!==l&&l,u=(0,o.Z)(n,h),f=(0,r.Z)((0,r.Z)({},n),{},{raised:d}),g=function(e){var t=e.classes;return(0,a.Z)({root:["root"]},m,t)}(f);return(0,p.jsx)(x,(0,r.Z)({className:(0,i.default)(g.root,s),elevation:d?8:void 0,ref:t,ownerState:f},u))}))},114423:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(166373)}])},462504:function(e,t,n){"use strict";var r=n(307914);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(122268)),s=n(824246),i=(0,o.default)((0,s.jsx)("path",{d:"M20.75 6.99c-.14-.55-.69-.87-1.24-.75-2.38.53-5.03.76-7.51.76s-5.13-.23-7.51-.76c-.55-.12-1.1.2-1.24.75-.14.56.2 1.13.75 1.26 1.61.36 3.35.61 5 .75v12c0 .55.45 1 1 1s1-.45 1-1v-5h2v5c0 .55.45 1 1 1s1-.45 1-1V9c1.65-.14 3.39-.39 4.99-.75.56-.13.9-.7.76-1.26zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"AccessibilityNewRounded");t.default=i},864380:function(e,t,n){"use strict";var r=n(307914);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(122268)),s=n(824246),i=(0,o.default)((0,s.jsx)("path",{d:"M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"}),"AddRounded");t.default=i},601794:function(e,t,n){"use strict";var r=n(307914);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(122268)),s=n(824246),i=(0,o.default)((0,s.jsx)("path",{d:"M9 16.17 5.53 12.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0L9 16.17z"}),"CheckRounded");t.default=i},701886:function(e,t,n){"use strict";var r=n(307914);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(122268)),s=n(824246),i=(0,o.default)((0,s.jsx)("path",{d:"M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"}),"CloseRounded");t.default=i},224058:function(e,t,n){"use strict";var r=n(307914);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(122268)),s=n(824246),i=(0,o.default)((0,s.jsx)("path",{d:"M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z"}),"ContentCopyRounded");t.default=i},846189:function(e,t,n){"use strict";var r=n(307914);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(122268)),s=n(824246),i=(0,o.default)([(0,s.jsx)("path",{d:"M20 8v4.08c-.33-.05-.66-.08-1-.08-3.53 0-6.43 2.61-6.92 6H4V8l8 5 8-5zm0-2H4l8 5 8-5z",opacity:".3"},"0"),(0,s.jsx)("path",{d:"M12.08 18H4V8l8 5 8-5v4.08c.71.1 1.38.31 2 .6V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h8.08c-.05-.33-.08-.66-.08-1s.03-.67.08-1zM20 6l-8 5-8-5h16zm-2.66 16-3.54-3.54 1.41-1.41 2.12 2.12 4.24-4.24L23 16.34 17.34 22z"},"1")],"MarkEmailReadTwoTone");t.default=i}},function(e){e.O(0,[49774,64631,31194,31659,72773,81587,58100,61980,54376,892,2798,28751,21709,60630,25747,20541,37218,6289,29837,2967,92888,40179],(function(){return t=114423,e(e.s=t);var t}));var t=e.O();_N_E=t}]);