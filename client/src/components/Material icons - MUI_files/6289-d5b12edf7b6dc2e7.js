"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6289],{302954:function(e,r,t){t.d(r,{Z:function(){return h}});var n,o,i=t(827378),a=t(823965),l=t(146010),s=t(960308),c=t(720325),d=t(314307),u=t(774517),p=t(837218),f=t(824246);function h(e){var r=e.children,t=(0,l.Z)().palette.mode,h=i.useMemo((function(){var e=(0,u.bk)(t),r=(0,s.Z)(e);return r=(0,a.Z)(r,(0,u.AP)(r))}),[t]);return(0,f.jsxs)(c.Z,{theme:h,children:[n||(n=(0,f.jsx)(p.F1,{})),o||(o=(0,f.jsx)(d.ZP,{})),r]})}},346384:function(e,r,t){t.d(r,{Z:function(){return M}});var n,o=t(295649),i=t(977809),a=t(25778),l=t(834455),s=t.n(l),c=t(183452),d=t.n(c),u=t(827378),p=t(290763),f=t(672738),h=t(301362),m=t(375205),x=t(871649),g=t(165262),Z=t(336146),v=t(380602),y=t(705895),j=function(){var e="production";return{DEPLOY_CONTEXT:e,NEWSLETTER_SUBSCRIBE_URL:"https://f0433e60.sibforms.com/serve/MUIEAHEhgYhMvLAw0tycwk1BQaIB-q0akob3JdtDBmHLhSR-jLheJ2T44LFCz27alz9wq_Nkdz9EK7Y8hzM1vQND9kTFyKkkhTIbEzXaH5d-_S9Fw4PXS1zAK8efPY6nhCdoAop1SKTeZ_GAPW5S0xBFQRLUGYbvvRgE4Q2Ki_f1KjbiCqaRuzmj_I3SD1r0CoR4INmK3CLtF4kF"}}(),b=t(824246),k=(0,p.ZP)("form")({});function w(e){return d()(e).filter((function(r){return null!=e[r]})).map((function(r){return"".concat(encodeURIComponent(r),"=").concat(encodeURIComponent(e[r]))})).join("&")}function M(e){var r=e.sx,t=u.useState({email:"",status:"initial"}),l=(0,a.Z)(t,2),c=l[0],d=l[1],p=function(){var e=(0,i.Z)(s().mark((function e(r){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),d((function(e){return(0,o.Z)((0,o.Z)({},e),{},{status:"loading"})})),e.prev=2,e.next=5,fetch(j.NEWSLETTER_SUBSCRIBE_URL,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},mode:"no-cors",body:w({EMAIL:c.email,email_address_check:"",locale:"en"})});case 5:d((function(e){return(0,o.Z)((0,o.Z)({},e),{},{status:"sent"})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),d((function(e){return(0,o.Z)((0,o.Z)({},e),{},{status:"failure"})}));case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(r){return e.apply(this,arguments)}}();return"sent"===c.status?(0,b.jsxs)(f.Z,{severity:"success",sx:(0,o.Z)({maxWidth:{sm:400},bgcolor:function(e){return"dark"===e.palette.mode?e.palette.primaryDark[700]:e.palette.success[50]}},r),iconMapping:{success:(0,b.jsx)(y.default,{fontSize:"small",sx:{color:function(e){return"dark"===e.palette.mode?e.palette.success[600]:e.palette.success[700]}}})},children:[(0,b.jsx)(h.Z,{sx:{typography:"body2",fontWeight:700},children:"Thanks! Check your email."}),"You should get a ",n||(n=(0,b.jsx)("strong",{children:"confirmation email"}))," soon. Open it up and confirm your email address so that we can keep you up to date."]}):(0,b.jsxs)(k,{onSubmit:p,sx:r,children:[(0,b.jsx)(g.Z,{htmlFor:"email-subscribe",sx:{typography:"caption",mb:.5,color:"text.secondary",fontWeight:500},children:"Enter your email:"}),(0,b.jsxs)(m.Z,{sx:{display:"flex",borderRadius:1,overflow:"hidden",width:{xs:"100%",sm:"auto"},maxWidth:360},children:[(0,b.jsx)(v.ZP,{id:"email-subscribe",name:"email",type:"email",placeholder:"example@email.com",value:c.email,onChange:function(e){return d({email:e.target.value,status:"initial"})},inputProps:{required:!0},sx:{bgcolor:function(e){return"dark"===e.palette.mode?e.palette.primaryDark[900]:e.palette.grey[100]},px:1,py:.5,typography:"body2",flexGrow:1,minWidth:200,"&:focus":{outline:function(e){return"2px solid ".concat("dark"===e.palette.mode?e.palette.primary[400]:e.palette.primary[200])},outlineOffset:"2px"}}}),(0,b.jsx)(x.Z,{disabled:"loading"===c.status,type:"submit",sx:{bgcolor:function(e){return"dark"===e.palette.mode?e.palette.primaryDark[600]:e.palette.grey[300]},py:1,px:2,color:"text.primary",borderRadius:"0px","&:hover":{bgcolor:function(e){return"dark"===e.palette.mode?e.palette.primaryDark[700]:e.palette.grey[400]}}},children:"Subscribe"})]}),"failure"===c.status&&(0,b.jsx)(Z.Z,{sx:{color:function(e){return"dark"===e.palette.mode?"warning.500":"warning.800"}},children:"Oops! something went wrong, please try again later."})]})}},916360:function(e,r,t){t.d(r,{Z:function(){return R}});var n,o=t(375205),i=t(437260),a=t(610870),l=t(376811),s=t(62072),c=t(568075),d=t(814081),u=t(814933),p=t(188684),f=t(746943),h=t(346384),m=t(494969),x=t(812080),g=t.n(x),Z=t(937835),v=t(295649),y=t(686817),j=t(824246);var b,k,w,M,C,S,z,D,A=function(e){return(0,j.jsx)(y.Z,(0,v.Z)((0,v.Z)({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",width:"20",height:"20"},e),{},{children:n||(n=(0,j.jsx)("path",{d:"M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.936v.014zm2.715-4.785l8.217 6.855 1.359-1.62-8.216-6.853-1.35 1.617-.01.001zM15.751 0l-1.746 1.294 6.405 8.604 1.746-1.294L15.749 0h.002z"}))}))};function R(){return(0,j.jsxs)(i.Z,{component:"footer",children:[(0,j.jsxs)(o.Z,{sx:{pt:4,pb:8,display:"grid",gridAutoColumns:"1fr",alignItems:"center",justifyContent:"space-between",gap:4,gridTemplateColumns:{xs:"1fr",sm:"1fr",md:"1fr 1.75fr",lg:"1fr 1fr"},gridTemplateRows:"auto","& a:not(.MuiIconButton-root)":{mt:1,color:"text.secondary",typography:"body2","&:hover":{color:"primary.main",textDecoration:"underline"}}},children:[(0,j.jsxs)("div",{children:[b||(b=(0,j.jsx)(f.Z,{width:32})),(0,j.jsx)(l.Z,{variant:"body2",fontWeight:"bold",sx:{pt:2},children:"Join our newsletter!"}),(0,j.jsx)(l.Z,{variant:"body2",color:"text.secondary",sx:{mb:2},children:"No spam, guaranteed."}),(0,j.jsx)(h.Z,{sx:{mb:1}})]}),(0,j.jsxs)(o.Z,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr 1fr",md:"1fr 1fr 1fr 1fr"},gridAutoColumns:"1fr",gap:2},children:[g().nav_products?(0,j.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column"},children:[k||(k=(0,j.jsx)(l.Z,{fontWeight:"bold",variant:"body2",children:"Products"})),(0,j.jsx)(Z.Z,{href:m.Z.productCore,children:"MUI Core"}),(0,j.jsx)(Z.Z,{href:m.Z.productAdvanced,children:"MUI X"}),(0,j.jsx)(Z.Z,{href:m.Z.productTemplates,children:"Templates"}),(0,j.jsx)(Z.Z,{href:m.Z.productDesignKits,children:"Design kits"})]}):(0,j.jsx)(o.Z,{sx:{display:{xs:"none",md:"block"}}}),(0,j.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column"},children:[w||(w=(0,j.jsx)(l.Z,{fontWeight:"bold",variant:"body2",children:"Resources"})),(0,j.jsx)(Z.Z,{href:m.Z.materialIcons,children:"Material Icons"}),(0,j.jsx)(Z.Z,{href:m.Z.freeTemplates,children:"Free templates"}),(0,j.jsx)(Z.Z,{href:m.Z.components,children:"Components"}),(0,j.jsx)(Z.Z,{href:m.Z.customization,children:"Customization"}),(0,j.jsx)(Z.Z,{href:m.Z.theming,children:"Theming"})]}),(0,j.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column"},children:[M||(M=(0,j.jsx)(l.Z,{fontWeight:"bold",variant:"body2",children:"Explore"})),(0,j.jsx)(Z.Z,{href:m.Z.documentation,children:"Documentation"}),(0,j.jsx)(Z.Z,{href:m.Z.blog,children:"Blog"}),(0,j.jsx)(Z.Z,{href:m.Z.showcase,children:"Showcase"}),(0,j.jsx)(Z.Z,{href:m.Z.roadmap,children:"Roadmap"}),(0,j.jsx)(Z.Z,{href:m.Z.languages,children:"Languages"})]}),(0,j.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column"},children:[C||(C=(0,j.jsx)(l.Z,{fontWeight:"bold",variant:"body2",children:"Company"})),(0,j.jsx)(Z.Z,{href:m.Z.about,children:"About"}),(0,j.jsx)(Z.Z,{href:m.Z.vision,children:"Vision"}),(0,j.jsxs)(o.Z,{sx:{display:"flex",alignItems:"end"},children:[(0,j.jsx)(Z.Z,{href:m.Z.careers,children:"Careers "}),(0,j.jsx)(o.Z,{sx:{px:.5,py:"3px",ml:1,mb:"1px",borderRadius:.5,fontSize:function(e){return e.typography.pxToRem(9)},fontWeight:700,textTransform:"uppercase",color:"#fff",backgroundColor:function(e){return"dark"===e.palette.mode?e.palette.error[800]:e.palette.error.main}},children:"Hiring"})]}),(0,j.jsx)(Z.Z,{href:m.Z.support,children:"Support"}),S||(S=(0,j.jsx)(Z.Z,{target:"_blank",rel:"noopener noreferrer",href:"mailto:contact@mui.com",children:"Contact us"}))]})]})]}),z||(z=(0,j.jsx)(a.Z,{})),(0,j.jsxs)(o.Z,{sx:{py:4,display:{xs:"block",sm:"flex"},alignItems:{sm:"center"},justifyContent:{sm:"space-between"}},children:[(0,j.jsxs)(l.Z,{color:"text.secondary",variant:"body2",children:["Copyright \xa9 ",(new Date).getFullYear()," Material-UI SAS."]}),(0,j.jsx)(o.Z,{sx:{py:{xs:2,sm:0}},children:D||(D=(0,j.jsxs)(c.Z,{spacing:2,direction:"row",children:[(0,j.jsx)(s.Z,{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/mui","aria-label":"github",title:"GitHub",size:"small",children:(0,j.jsx)(u.default,{fontSize:"small"})}),(0,j.jsx)(s.Z,{target:"_blank",rel:"noopener noreferrer",href:"https://stackoverflow.com/questions/tagged/mui","aria-label":"Stack Overflow",title:"Stack Overflow",size:"small",children:(0,j.jsx)(A,{fontSize:"small"})}),(0,j.jsx)(s.Z,{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/MUI_hq","aria-label":"twitter",title:"Twitter",size:"small",children:(0,j.jsx)(d.default,{fontSize:"small"})}),(0,j.jsx)(s.Z,{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/company/mui/","aria-label":"linkedin",title:"LinkedIn",size:"small",children:(0,j.jsx)(p.default,{fontSize:"small"})})]}))})]})]})}},733215:function(e,r,t){t.d(r,{Z:function(){return se}});var n,o,i,a,l,s=t(25778),c=t(827378),d=t(290763),u=t(240120),p=t(561546),f=t(375205),h=t(568075),m=t(437260),x=t(746943),g=t(481936),Z=t(295649),v=t(887140),y=t(709497),j=t(844244),b=t(376811),k=t(843675),w=t(494969),M=t(812080),C=t.n(M),S=t(937835),z=t(824246),D=["icon","name","description","href"],A=(0,d.ZP)("nav")((function(e){var r=e.theme;return{"& ul":{padding:0,margin:0,listStyle:"none",display:"flex"},"& li":(0,Z.Z)((0,Z.Z)({color:r.palette.text.primary},r.typography.body2),{},{fontWeight:700,"& > a, & > div":{display:"inline-block",color:"inherit",textDecoration:"none",padding:r.spacing(1),borderRadius:r.shape.borderRadius,"&:hover, &:focus":{backgroundColor:"dark"===r.palette.mode?r.palette.primaryDark[700]:r.palette.grey[50],color:"dark"===r.palette.mode?r.palette.primaryDark[200]:r.palette.grey[700],"@media (hover: none)":{backgroundColor:"initial"}}},"& > div":{cursor:"default"}})}})),R=["product-core","product-advanced","product-templates","product-design"],I=c.forwardRef((function(e,r){var t=e.icon,n=e.name,o=e.description,i=e.href,a=(0,g.Z)(e,D);return(0,z.jsxs)(f.Z,(0,Z.Z)((0,Z.Z)({component:S.Z,href:i,ref:r,sx:{display:"flex",alignItems:"center",py:2,"&:hover, &:focus":{backgroundColor:function(e){return"dark"===e.palette.mode?"primaryDark.700":"grey.50"},outline:"none","@media (hover: none)":{backgroundColor:"initial",outline:"initial"}}}},a),{},{children:[(0,z.jsx)(f.Z,{sx:{px:2,"& circle":{fill:function(e){return"dark"===e.palette.mode?e.palette.primaryDark[700]:e.palette.grey[100]}}},children:t}),(0,z.jsxs)("div",{children:[(0,z.jsx)(b.Z,{color:"text.primary",variant:"body2",fontWeight:700,children:n}),(0,z.jsx)(b.Z,{color:"text.secondary",variant:"body2",children:o})]})]}))}));function L(e,r,t){return"ArrowLeft"===e?0===r?t-1:r-1:"ArrowRight"===e?r===t-1?0:r+1:r}function P(){var e=c.useState(!1),r=(0,s.Z)(e,2),t=r[0],d=r[1],p=c.useState(null),h=(0,s.Z)(p,2),m=h[0],x=h[1],g=c.useRef(null),b=c.useRef(null);function M(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.target;if(g.current&&("ArrowLeft"===e.key||"ArrowRight"===e.key))for(var t=0;t<g.current.children.length;){var n=g.current.children.item(t);if(n&&(r===n||n.contains(r))){var o=g.current.children.item(L(e.key,t,g.current.children.length)),i=o?o.firstChild:null;i&&i.focus()}t+=1}}function D(e){var r,t;"Tab"!==e.key||e.shiftKey||(e.preventDefault(),M(new KeyboardEvent("keydown",{key:"ArrowRight"}),null===(r=b.current)||void 0===r?void 0:r.parentElement));"ArrowLeft"!==e.key&&"ArrowRight"!==e.key||(e.preventDefault(),M(e,null===(t=b.current)||void 0===t?void 0:t.parentElement));"ArrowDown"===e.key&&(e.preventDefault(),e.target===b.current&&d(!0),x((function(e){return null===e||e===R.length-1?0:e+1}))),"ArrowUp"===e.key&&(e.preventDefault(),x((function(e){return null===e?0:0===e?R.length-1:e-1}))),"Escape"===e.key&&(d(!1),x(null))}return c.useEffect((function(){var e;"number"===typeof m&&(null===(e=document.getElementById(R[m]))||void 0===e||e.focus())}),[m]),(0,z.jsx)(A,{children:(0,z.jsxs)("ul",{ref:g,role:"menubar",onKeyDown:M,children:[C().nav_products&&(0,z.jsxs)("li",{role:"none",onMouseOver:function(){return d(!0)},onFocus:function(){return d(!0)},onMouseOut:function(){return d(!1)},onBlur:function(){return d(!1)},children:[(0,z.jsx)("div",{role:"menuitem",tabIndex:0,id:"products-menu",ref:b,"aria-haspopup":!0,"aria-expanded":t?"true":"false",onKeyDown:D,children:"Products"}),(0,z.jsx)(v.Z,{open:t,anchorEl:b.current,transition:!0,placement:"bottom-start",style:{zIndex:1200},children:function(e){var r=e.TransitionProps;return(0,z.jsx)(j.Z,(0,Z.Z)((0,Z.Z)({},r),{},{timeout:350,children:(0,z.jsx)(y.Z,{variant:"outlined",sx:{minWidth:498,overflow:"hidden",borderColor:function(e){return"dark"===e.palette.mode?"primaryDark.700":"grey.200"},bgcolor:function(e){return"dark"===e.palette.mode?"primaryDark.900":"background.paper"},boxShadow:function(e){return"0px 4px 20px ".concat("dark"===e.palette.mode?(0,u.Fq)(e.palette.background.paper,.72):"rgba(170, 180, 190, 0.3)")},"& ul":{margin:0,padding:0,listStyle:"none"},"& li:not(:last-of-type)":{borderBottom:"1px solid",borderColor:function(e){return"dark"===e.palette.mode?"primaryDark.700":"grey.100"}},"& a":{textDecoration:"none"}},children:(0,z.jsxs)("ul",{role:"menu",children:[(0,z.jsx)("li",{role:"none",children:(0,z.jsx)(I,{id:R[0],role:"menuitem",href:w.Z.productCore,icon:n||(n=(0,z.jsx)(k.Z,{name:"product-core"})),name:"MUI Core",description:"Ready-to-use foundational components, free forever.",onKeyDown:D})}),(0,z.jsx)("li",{role:"none",children:(0,z.jsx)(I,{id:R[1],role:"menuitem",href:w.Z.productAdvanced,icon:o||(o=(0,z.jsx)(k.Z,{name:"product-advanced"})),name:i||(i=(0,z.jsx)(f.Z,{component:"span",display:"inline-flex",alignItems:"center",children:"MUI\xa0X"})),description:"Advanced and powerful components for complex use-cases.",onKeyDown:D})}),(0,z.jsx)("li",{role:"none",children:(0,z.jsx)(I,{id:R[2],role:"menuitem",href:w.Z.productTemplates,icon:a||(a=(0,z.jsx)(k.Z,{name:"product-templates"})),name:"Templates",description:"Fully built, out-of-the-box, templates for your application.",onKeyDown:D})}),(0,z.jsx)("li",{role:"none",children:(0,z.jsx)(I,{id:R[3],role:"menuitem",href:w.Z.productDesignKits,icon:l||(l=(0,z.jsx)(k.Z,{name:"product-designkits"})),name:"Design kits",description:"Our components available in your favorite design tool.",onKeyDown:D})})]})})}))}})]}),(0,z.jsx)("li",{role:"none",children:(0,z.jsx)(S.Z,{role:"menuitem",href:w.Z.documentation,children:"Docs"})}),(0,z.jsx)("li",{role:"none",children:(0,z.jsx)(S.Z,{role:"menuitem",href:w.Z.pricing,children:"Pricing"})}),(0,z.jsx)("li",{role:"none",children:(0,z.jsx)(S.Z,{role:"menuitem",href:w.Z.about,children:"About us"})}),(0,z.jsx)("li",{role:"none",children:(0,z.jsx)(S.Z,{role:"menuitem",href:w.Z.blog,children:"Blog"})})]})})}var T,_=t(155964),O=t(496704),E=t(62072),W=t(55499),K=t(47527),H=(0,d.ZP)("a")((function(e){var r=e.theme;return(0,Z.Z)((0,Z.Z)({},r.typography.body2),{},{fontWeight:700,textDecoration:"none",border:"none",width:"100%",backgroundColor:"transparent",color:"dark"===r.palette.mode?"#fff":r.palette.text.secondary,cursor:"pointer",display:"flex",alignItems:"center",padding:r.spacing(1),borderRadius:r.spacing(1),transition:r.transitions.create("background"),"&:hover, &:focus":{backgroundColor:"dark"===r.palette.mode?r.palette.primaryDark[700]:r.palette.grey[100],"@media (hover: none)":{backgroundColor:"transparent"}}})})),N=(0,d.ZP)("ul")({listStyleType:"none",padding:0,margin:0}),B=[{name:"MUI Core",description:"Ready-to-use foundational components, free forever.",href:w.Z.productCore},{name:"MUI X",description:"Advanced and powerful components for complex use-cases.",href:w.Z.productAdvanced},{name:"Templates",description:"Fully built, out-of-the-box, templates for your application.",href:w.Z.productTemplates},{name:"Design kits",description:"Our components available in your favorite design tool.",href:w.Z.productDesignKits}];function F(){var e=c.useState(!1),r=(0,s.Z)(e,2),t=r[0],n=r[1],o=c.useState(!0),i=(0,s.Z)(o,2),a=i[0],l=i[1],d=c.useRef(null);return(0,z.jsxs)(c.Fragment,{children:[(0,z.jsx)(E.Z,{color:"primary","aria-label":"Menu",ref:d,disableRipple:!0,onClick:function(){return n((function(e){return!e}))},sx:(0,Z.Z)({position:"relative","& rect":{transformOrigin:"center",transition:"0.2s"}},t&&{"& rect:first-of-type":{transform:"translate(1.5px, 1.6px) rotateZ(-45deg)"},"& rect:last-of-type":{transform:"translate(1.5px, -1.2px) rotateZ(45deg)"}}),children:T||(T=(0,z.jsx)(K.Z,{}))}),(0,z.jsx)(O.Z,{onClickAway:function(e){d.current&&!d.current.contains(e.target)&&n(!1)},children:(0,z.jsx)(_.Z,{in:t,sx:{position:"fixed",top:56,left:0,right:0,boxShadow:function(e){return"0px 4px 20px ".concat("dark"===e.palette.mode?"rgba(0, 0, 0, 0.5)":"rgba(170, 180, 190, 0.3)")},bgcolor:"background.paper"},children:(0,z.jsx)(f.Z,{sx:{p:2,bgcolor:"background.paper",maxHeight:"calc(100vh - 56px)",overflow:"auto"},children:(0,z.jsxs)(N,{children:[C().nav_products&&(0,z.jsxs)("li",{children:[(0,z.jsxs)(H,{as:"button",onClick:function(){return l((function(e){return!e}))},sx:{justifyContent:"space-between"},children:["Products",(0,z.jsx)(W.default,{color:"primary",sx:{transition:"0.3s",transform:a?"rotate(-180deg)":"rotate(0)"}})]}),(0,z.jsx)(_.Z,{in:a,children:(0,z.jsx)(N,{sx:{borderLeft:"1px solid",borderColor:function(e){return"dark"===e.palette.mode?"primaryDark.700":"grey.100"},pl:1,pb:1,ml:1},children:B.map((function(e){return(0,z.jsx)("li",{children:(0,z.jsxs)(H,{href:e.href,as:S.Z,noLinkStyle:!0,sx:{flexDirection:"column",alignItems:"initial"},children:[(0,z.jsx)("div",{children:e.name}),(0,z.jsx)(b.Z,{variant:"body2",color:"text.secondary",children:e.description})]})},e.name)}))})})]}),(0,z.jsx)("li",{children:(0,z.jsx)(H,{href:w.Z.documentation,as:S.Z,noLinkStyle:!0,children:"Docs"})}),(0,z.jsx)("li",{children:(0,z.jsx)(H,{href:w.Z.pricing,as:S.Z,noLinkStyle:!0,children:"Pricing"})}),(0,z.jsx)("li",{children:(0,z.jsx)(H,{href:w.Z.about,as:S.Z,noLinkStyle:!0,children:"About us"})}),(0,z.jsx)("li",{children:(0,z.jsx)(H,{href:w.Z.blog,as:S.Z,noLinkStyle:!0,children:"Blog"})})]})})})})]})}var U,q,V=t(26035),Y=t(784854),X=t(623675);function G(e){return(0,z.jsx)(V.Z,{title:e.checked?"Turn on the light":"Turn off the light",children:(0,z.jsx)(E.Z,{color:"primary",disableTouchRipple:!0,onClick:function(){return e.onChange(!e.checked)},children:e.checked?U||(U=(0,z.jsx)(X.default,{fontSize:"small"})):q||(q=(0,z.jsx)(Y.default,{fontSize:"small"}))})})}var Q,J,$,ee,re,te=t(269445),ne=t(885131),oe=t(837218),ie=t(814933),ae=t(328109),le=(0,d.ZP)("header")((function(e){var r=e.theme;return{position:"sticky",top:0,transition:r.transitions.create("top"),zIndex:r.zIndex.appBar,backdropFilter:"blur(20px)",boxShadow:"inset 0px -1px 1px ".concat("dark"===r.palette.mode?r.palette.primaryDark[700]:r.palette.grey[100]),backgroundColor:"dark"===r.palette.mode?(0,u.Fq)(r.palette.primaryDark[900],.72):"rgba(255,255,255,0.72)"}}));function se(){var e=(0,ne.Kz)(),r=c.useState(null),t=(0,s.Z)(r,2),n=t[0],o=t[1],i=(0,p.Z)("(prefers-color-scheme: dark)"),a=(0,ae.qM)();c.useEffect((function(){var e=(0,te.ej)("paletteMode")||"system";o(e)}),[]);return(0,z.jsx)(le,{children:(0,z.jsxs)(m.Z,{sx:{display:"flex",alignItems:"center",minHeight:56},children:[(0,z.jsx)(f.Z,{component:S.Z,href:w.Z.home,"aria-label":"Go to homepage",sx:{lineHeight:0,mr:2},children:Q||(Q=(0,z.jsx)(x.Z,{width:30}))}),(0,z.jsx)(f.Z,{sx:{display:{xs:"none",md:"initial"}},children:J||(J=(0,z.jsx)(P,{}))}),(0,z.jsx)(f.Z,{sx:{ml:"auto"}}),(0,z.jsxs)(h.Z,{direction:"row",spacing:1,children:[$||($=(0,z.jsx)(oe.ji,{})),(0,z.jsx)(V.Z,{title:a("appFrame.github"),enterDelay:300,children:ee||(ee=(0,z.jsx)(E.Z,{component:"a",color:"primary",href:"https://github.com/mui","data-ga-event-category":"header","data-ga-event-action":"github",children:(0,z.jsx)(ie.default,{fontSize:"small"})}))}),null!==n?(0,z.jsx)(G,{checked:"system"===n?i:"dark"===n,onChange:function(r){var t=r?"dark":"light";o(t),document.cookie="paletteMode=".concat(t,";path=/;max-age=31536000"),e({paletteMode:t})}}):null]}),(0,z.jsx)(f.Z,{sx:{display:{md:"none"},ml:1},children:re||(re=(0,z.jsx)(F,{}))})]})})}},672738:function(e,r,t){t.d(r,{Z:function(){return I}});var n=t(481936),o=t(957379),i=t(295649),a=t(827378),l=t(138944),s=t(47918),c=t(240120),d=t(290763),u=t(906205),p=t(326162),f=t(709497),h=t(892992);function m(e){return(0,h.Z)("MuiAlert",e)}var x,g=(0,t(84408).Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),Z=t(62072),v=t(403503),y=t(824246),j=(0,v.Z)((0,y.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),b=(0,v.Z)((0,y.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),k=(0,v.Z)((0,y.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),w=(0,v.Z)((0,y.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),M=t(10071),C=["action","children","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"],S=(0,d.ZP)(f.Z,{name:"MuiAlert",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,r[t.variant],r["".concat(t.variant).concat((0,p.Z)(t.color||t.severity))]]}})((function(e){var r=e.theme,t=e.ownerState,n="light"===r.palette.mode?c._j:c.$n,a="light"===r.palette.mode?c.$n:c._j,l=t.color||t.severity;return(0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},r.typography.body2),{},{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},l&&"standard"===t.variant&&(0,o.Z)({color:n(r.palette[l].light,.6),backgroundColor:a(r.palette[l].light,.9)},"& .".concat(g.icon),{color:"dark"===r.palette.mode?r.palette[l].main:r.palette[l].light})),l&&"outlined"===t.variant&&(0,o.Z)({color:n(r.palette[l].light,.6),border:"1px solid ".concat(r.palette[l].light)},"& .".concat(g.icon),{color:"dark"===r.palette.mode?r.palette[l].main:r.palette[l].light})),l&&"filled"===t.variant&&{color:"#fff",fontWeight:r.typography.fontWeightMedium,backgroundColor:"dark"===r.palette.mode?r.palette[l].dark:r.palette[l].main})})),z=(0,d.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:function(e,r){return r.icon}})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),D=(0,d.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:function(e,r){return r.message}})({padding:"8px 0"}),A=(0,d.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:function(e,r){return r.action}})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),R={success:(0,y.jsx)(j,{fontSize:"inherit"}),warning:(0,y.jsx)(b,{fontSize:"inherit"}),error:(0,y.jsx)(k,{fontSize:"inherit"}),info:(0,y.jsx)(w,{fontSize:"inherit"})},I=a.forwardRef((function(e,r){var t=(0,u.Z)({props:e,name:"MuiAlert"}),o=t.action,a=t.children,c=t.className,d=t.closeText,f=void 0===d?"Close":d,h=t.color,g=t.icon,v=t.iconMapping,j=void 0===v?R:v,b=t.onClose,k=t.role,w=void 0===k?"alert":k,I=t.severity,L=void 0===I?"success":I,P=t.variant,T=void 0===P?"standard":P,_=(0,n.Z)(t,C),O=(0,i.Z)((0,i.Z)({},t),{},{color:h,severity:L,variant:T}),E=function(e){var r=e.variant,t=e.color,n=e.severity,o=e.classes,i={root:["root","".concat(r).concat((0,p.Z)(t||n)),"".concat(r)],icon:["icon"],message:["message"],action:["action"]};return(0,s.Z)(i,m,o)}(O);return(0,y.jsxs)(S,(0,i.Z)((0,i.Z)({role:w,elevation:0,ownerState:O,className:(0,l.default)(E.root,c),ref:r},_),{},{children:[!1!==g?(0,y.jsx)(z,{ownerState:O,className:E.icon,children:g||j[L]||R[L]}):null,(0,y.jsx)(D,{ownerState:O,className:E.message,children:a}),null!=o?(0,y.jsx)(A,{className:E.action,children:o}):null,null==o&&b?(0,y.jsx)(A,{ownerState:O,className:E.action,children:(0,y.jsx)(Z.Z,{size:"small","aria-label":f,title:f,color:"inherit",onClick:b,children:x||(x=(0,y.jsx)(M.Z,{fontSize:"small"}))})}):null]}))}))},301362:function(e,r,t){t.d(r,{Z:function(){return x}});var n=t(295649),o=t(481936),i=t(827378),a=t(138944),l=t(47918),s=t(290763),c=t(906205),d=t(376811),u=t(892992);function p(e){return(0,u.Z)("MuiAlertTitle",e)}(0,t(84408).Z)("MuiAlertTitle",["root"]);var f=t(824246),h=["className"],m=(0,s.ZP)(d.Z,{name:"MuiAlertTitle",slot:"Root",overridesResolver:function(e,r){return r.root}})((function(e){return{fontWeight:e.theme.typography.fontWeightMedium,marginTop:-2}})),x=i.forwardRef((function(e,r){var t=(0,c.Z)({props:e,name:"MuiAlertTitle"}),i=t.className,s=(0,o.Z)(t,h),d=t,u=function(e){var r=e.classes;return(0,l.Z)({root:["root"]},p,r)}(d);return(0,f.jsx)(m,(0,n.Z)({gutterBottom:!0,component:"div",ownerState:d,ref:r,className:(0,a.default)(u.root,i)},s))}))},10071:function(e,r,t){t(827378);var n=t(403503),o=t(824246);r.Z=(0,n.Z)((0,o.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},705895:function(e,r,t){var n=t(307914);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=n(t(122268)),i=t(824246),a=(0,o.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29 5.7 12.7a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"}),"CheckCircleRounded");r.default=a},55499:function(e,r,t){var n=t(307914);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=n(t(122268)),i=t(824246),a=(0,o.default)((0,i.jsx)("path",{d:"M8.12 9.29 12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7a.9959.9959 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z"}),"KeyboardArrowDownRounded");r.default=a},623675:function(e,r,t){var n=t(307914);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=n(t(122268)),i=t(824246),a=(0,o.default)((0,i.jsx)("path",{d:"M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"}),"LightModeOutlined");r.default=a},188684:function(e,r,t){var n=t(307914);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;!function(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=a(r);if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(n,i,l):n[i]=e[i]}n.default=e,t&&t.set(e,n)}(t(827378));var o=n(t(122268)),i=t(824246);function a(e){if("function"!==typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(a=function(e){return e?t:r})(e)}var l=(0,o.default)((0,i.jsx)("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}),"LinkedIn");r.default=l},814081:function(e,r,t){var n=t(307914);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;!function(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=a(r);if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(n,i,l):n[i]=e[i]}n.default=e,t&&t.set(e,n)}(t(827378));var o=n(t(122268)),i=t(824246);function a(e){if("function"!==typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(a=function(e){return e?t:r})(e)}var l=(0,o.default)((0,i.jsx)("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),"Twitter");r.default=l}}]);