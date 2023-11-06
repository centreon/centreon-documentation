"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[95949],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79734:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>u});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"extensions",title:"Extensions"},l=void 0,c={unversionedId:"administration/extensions",id:"version-23.10/administration/extensions",title:"Extensions",description:"Extensions can be used to add additional features to Centreon. It is",source:"@site/versioned_docs/version-23.10/administration/extensions.md",sourceDirName:"administration",slug:"/administration/extensions",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/administration/extensions",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/administration/extensions.md",tags:[],version:"23.10",lastUpdatedAt:1699281350,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{id:"extensions",title:"Extensions"},sidebar:"version-23.10/docs",previous:{title:"Configuring Autologin",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/connect/autologin"},next:{title:"Licenses",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/administration/licenses"}},p={},u=[],d={toc:u},m="wrapper";function f(e){var{components:t}=e,s=a(e,["components"]);return(0,r.kt)(m,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},d,s),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Extensions can be used to add additional features to Centreon. It is\npossible to install extensions using the package manager or using source files\n(","*",".tar.gz)."),(0,r.kt)("p",null,"There are three types of extension:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Community"),", under license GPL v2, developed by the Centreon community,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Core"),", under license GPL v2, developed by the Centreon team,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Proprietary"),", subject to a license, developed by\n",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("a",{parentName:"em",href:"http://www.centreon.com"},"Centreon")),".")),(0,r.kt)("p",null,"To install an extension:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the extensions from the associated documentation."),(0,r.kt)("li",{parentName:"ol"},"Go into the ",(0,r.kt)("strong",{parentName:"li"},"Administration > Extensions > Manage")," menu.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(15947).Z,width:"1011",height:"505"})),(0,r.kt)("p",null,"To install all extensions, click ",(0,r.kt)("strong",{parentName:"p"},"Install all"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(54762).Z,width:"804",height:"502"})),(0,r.kt)("p",null,"You can also update all extensions by clicking ",(0,r.kt)("strong",{parentName:"p"},"Update all"),", or manage\nextension by extension."),(0,r.kt)("p",null,"Click an extension to see its description:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(74127).Z,width:"780",height:"926"})))}f.isMDXComponent=!0},74127:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/extension-popin-611e2665df0c4af364dcdc072d287a2b.png"},15947:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/install-imp-1-8a581211cb43d004dc09386c41d5c2e2.png"},54762:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/install-imp-2-0bb990b23db7628ddbafe3c727a97a88.png"}}]);