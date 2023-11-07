"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[52046],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>g});var n=r(67294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var p=n.createContext({}),s=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},c=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,o=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=s(r),d=i,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(g,a(a({ref:e},c),{},{components:r})):n.createElement(g,a({ref:e},c))}));function g(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[u]="string"==typeof t?t:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},60429:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>u});r(67294);var n=r(3905);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})),t}function a(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}const l={id:"ot-glpi-restapi",title:"GLPI RestAPI"},p=void 0,s={unversionedId:"integrations/itsm/ot-glpi-restapi",id:"version-23.10/integrations/itsm/ot-glpi-restapi",title:"GLPI RestAPI",description:"How it works",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/integrations/itsm/ot-glpirestapi.md",sourceDirName:"integrations/itsm",slug:"/integrations/itsm/ot-glpi-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/integrations/itsm/ot-glpi-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/integrations/itsm/ot-glpirestapi.md",tags:[],version:"23.10",lastUpdatedAt:1699359701,formattedLastUpdatedAt:"7 nov. 2023",frontMatter:{id:"ot-glpi-restapi",title:"GLPI RestAPI"},sidebar:"version-23.10/docs",previous:{title:"GLPI",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/integrations/itsm/ot-glpi"},next:{title:"iTop",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/integrations/itsm/ot-itop"}},c={},u=[{value:"How it works",id:"how-it-works",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Possibilities",id:"possibilities",level:2},{value:"Configuration",id:"configuration",level:2}],m={toc:u},d="wrapper";function g(t){var{components:e}=t,l=a(t,["components"]);return(0,n.kt)(d,o(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),n.forEach((function(e){i(t,e,r[e])}))}return t}({},m,l),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"how-it-works"},"How it works"),(0,n.kt)("p",null,"The GlpiRestApi provider uses the REST API of Glpi to retrieve data in order to\nopen a ticket. Since it gathers a lot of configurations objects from Glpi, it\nputs them in cache. Loging out or waiting 10 hours will flush the cache."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"architecture",src:r(55551).Z,width:"912",height:"626"})),(0,n.kt)("h2",{id:"compatibility"},"Compatibility"),(0,n.kt)("p",null,"This connector is (at least) compatible with the following Glpi versions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"9.4"),(0,n.kt)("li",{parentName:"ul"},"9.3"),(0,n.kt)("li",{parentName:"ul"},"9.2"),(0,n.kt)("li",{parentName:"ul"},"9.1 (Glpi REST API birth)")),(0,n.kt)("p",null,"You can\u2019t use this provider with Glpi < 9.1. From the 8.5 to 9.0 version, you\nshould use the old Glpi provider that uses the Glpi plugin called \u201cwebservice\u201d"),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("p",null,"Before going any further, make sure that you correctly setup\n",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/alerts-notifications/ticketing#configuration-avanc%C3%A9e"},"centreon-open-ticket"),"\ninto your Centreon instance."),(0,n.kt)("p",null,"Our provider requires the following parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Example of value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Address"),(0,n.kt)("td",{parentName:"tr",align:null},"10.30.2.46")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"User token"),(0,n.kt)("td",{parentName:"tr",align:null},"cYpJTf0SAPHHGP561chJJxoGV2kivhDv3nFYxQbl")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"App token"),(0,n.kt)("td",{parentName:"tr",align:null},"f5Rm9t5ozAyhcHDpHoMhFoPapi49TAVsXBZwulMR")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"REST API url"),(0,n.kt)("td",{parentName:"tr",align:null},"/glpi/apirest.php")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Protocol"),(0,n.kt)("td",{parentName:"tr",align:null},"https")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Timeout"),(0,n.kt)("td",{parentName:"tr",align:null},"60")))),(0,n.kt)("h2",{id:"possibilities"},"Possibilities"),(0,n.kt)("p",null,"As of now, the provider is able to retrieve the following objects from Glpi:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Entities"),(0,n.kt)("li",{parentName:"ul"},"Itil categories"),(0,n.kt)("li",{parentName:"ul"},"Requesters"),(0,n.kt)("li",{parentName:"ul"},"Users"),(0,n.kt)("li",{parentName:"ul"},"Groups"),(0,n.kt)("li",{parentName:"ul"},"Suppliers")),(0,n.kt)("p",null,"It will also fill the following parameters from a predefined list in Centreon.\nYou can extend those lists inside the provider configuration since they are\n",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/alerts-notifications/ticketing#configuration-avanc%C3%A9e"},"custom lists"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"User role"),(0,n.kt)("li",{parentName:"ul"},"Group role"),(0,n.kt)("li",{parentName:"ul"},"Urgency"),(0,n.kt)("li",{parentName:"ul"},"Impact"),(0,n.kt)("li",{parentName:"ul"},"Priority")),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"You'll find the required ",(0,n.kt)("strong",{parentName:"p"},"app token")," in the following menu:\n",(0,n.kt)("img",{alt:"app_token",src:r(83685).Z,width:"1604",height:"743"})),(0,n.kt)("p",null,"You'll find the ",(0,n.kt)("strong",{parentName:"p"},"user token")," in the following menu:\n",(0,n.kt)("img",{alt:"user_token",src:r(48102).Z,width:"1537",height:"838"})))}g.isMDXComponent=!0},83685:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/ot-glpi-rest-api-app-token-553a04d7b779e8677ba05ebf4e2a19d8.png"},55551:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/ot-glpi-rest-api-architecture-d17dd1c7d27b5154b24b6b9dfc13c0df.png"},48102:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/ot-glpi-rest-api-user-token-9c61d8ccdc54e804c8383b72127f3972.png"}}]);