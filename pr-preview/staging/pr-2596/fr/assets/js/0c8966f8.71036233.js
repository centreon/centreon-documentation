"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[54039],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=i,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},70404:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});r(67294);var n=r(3905);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const l={id:"ot-mail",title:"Mail"},c=void 0,s={unversionedId:"integrations/itsm/ot-mail",id:"version-23.10/integrations/itsm/ot-mail",title:"Mail",description:"How it works",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/integrations/itsm/ot-mail.md",sourceDirName:"integrations/itsm",slug:"/integrations/itsm/ot-mail",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/integrations/itsm/ot-mail",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/integrations/itsm/ot-mail.md",tags:[],version:"23.10",lastUpdatedAt:1699359701,formattedLastUpdatedAt:"7 nov. 2023",frontMatter:{id:"ot-mail",title:"Mail"},sidebar:"version-23.10/docs",previous:{title:"Jira",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/integrations/itsm/ot-jira"},next:{title:"OTRS RestAPI",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/integrations/itsm/ot-otrs-restapi"}},p={},u=[{value:"How it works",id:"how-it-works",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Possibilities",id:"possibilities",level:2}],m={toc:u},f="wrapper";function d(e){var{components:t}=e,l=a(e,["components"]);return(0,n.kt)(f,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},m,l),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"how-it-works"},"How it works"),(0,n.kt)("p",null,"The Mail provider sends a mail to a mailbox that an ITSM software will read and\ncreate a ticket based upon it"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"architecture",src:r(90307).Z,width:"780",height:"725"})),(0,n.kt)("h2",{id:"compatibility"},"Compatibility"),(0,n.kt)("p",null,"This integration is compatible with any ITSM software that is able to create a\nticket from a mail."),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("p",null,"Before going any further, make sure that you correctly setup\n",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/alerts-notifications/ticketing#configuration-avanc%C3%A9e"},"centreon-open-ticket"),"\ninto your Centreon instance"),(0,n.kt)("p",null,"Our provider requires the following parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Example of value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"From"),(0,n.kt)("td",{parentName:"tr",align:null},"{$user.email}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"To"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h2",{id:"possibilities"},"Possibilities"),(0,n.kt)("p",null,"You can add custom headers when sending your email"))}d.isMDXComponent=!0},90307:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ot-mail-architecture-f387b5666b66a8e821aee2b533ef0a7b.png"}}]);