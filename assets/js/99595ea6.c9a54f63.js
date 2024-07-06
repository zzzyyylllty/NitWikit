"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[5796],{14729:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(74848),i=n(28453),s=n(3514);const o={title:"\u767b\u5f55",slug:"/Plugins/OtherPlugin/Login",sidebar_position:3},c="\u767b\u5f55\u63d2\u4ef6",l={id:"process/plugin/other/Login/Login",title:"\u767b\u5f55",description:"\u4e00\u822c\u53ea\u6709 \u975e\u6b63\u7248 \u670d\u52a1\u5668\u624d\u9700\u8981\u767b\u5f55\u63d2\u4ef6\u3002",source:"@site/docs/process/plugin/other/Login/Login.md",sourceDirName:"process/plugin/other/Login",slug:"/Plugins/OtherPlugin/Login",permalink:"/NitWikit/Plugins/OtherPlugin/Login",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs/process/plugin/other/Login/Login.md",tags:[],version:"current",lastUpdatedBy:"\u51c9\u8336\u662f\u5e05\u54e5",lastUpdatedAt:1720232695e3,sidebarPosition:3,frontMatter:{title:"\u767b\u5f55",slug:"/Plugins/OtherPlugin/Login",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"TrMenu",permalink:"/NitWikit/process/plugin/other/Menu/TrMenu"},next:{title:"Authme",permalink:"/NitWikit/process/plugin/other/Login/Authme"}},a={},u=[];function d(e){const t={h1:"h1",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"\u767b\u5f55\u63d2\u4ef6",children:"\u767b\u5f55\u63d2\u4ef6"}),"\n",(0,r.jsxs)(t.p,{children:["\u4e00\u822c\u53ea\u6709 ",(0,r.jsx)(t.strong,{children:"\u975e\u6b63\u7248"})," \u670d\u52a1\u5668\u624d\u9700\u8981\u767b\u5f55\u63d2\u4ef6\u3002"]}),"\n",(0,r.jsx)(t.p,{children:"\u5e38\u89c1\u7684\u767b\u5f55\u63d2\u4ef6\u6709\uff1a"}),"\n","\n",(0,r.jsx)(s.A,{})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>j});n(96540);var r=n(34164),i=n(81754),s=n(28774),o=n(53465),c=n(16654),l=n(21312),a=n(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(74848);function p(e){let{href:t,children:n}=e;return(0,d.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:i,description:s}=e;return(0,d.jsxs)(p,{href:t,children:[(0,d.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:i,children:[n," ",i]}),s&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function m(e){let{item:t}=e;const n=(0,i.Nr)(t),r=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function g(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return(0,d.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(g,{item:t});case"category":return(0,d.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,i.$S)();return(0,d.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const s=(0,i.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},t)))})}},53465:(e,t,n)=>{n.d(t,{W:()=>a});var r=n(96540),i=n(44586);const s=["zero","one","two","few","many","other"];function o(e){return s.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function a(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const i=n.select(t),s=n.pluralForms.indexOf(i);return r[Math.min(s,r.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(96540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);