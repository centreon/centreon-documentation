"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[26693],{47519:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>u});n(67294);var r=n(3905);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function a(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}const l={id:"ot-itop",title:"iTop"},s=void 0,p={unversionedId:"integrations/itsm/ot-itop",id:"version-23.10/integrations/itsm/ot-itop",title:"iTop",description:"How it works",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/integrations/itsm/ot-itop.md",sourceDirName:"integrations/itsm",slug:"/integrations/itsm/ot-itop",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/integrations/itsm/ot-itop",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/integrations/itsm/ot-itop.md",tags:[],version:"23.10",lastUpdatedAt:1699630797,formattedLastUpdatedAt:"10 nov. 2023",frontMatter:{id:"ot-itop",title:"iTop"},sidebar:"version-23.10/docs",previous:{title:"GLPI RestAPI",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/integrations/itsm/ot-glpi-restapi"},next:{title:"IWS Isilog",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/integrations/itsm/ot-iws-isilog"}},c={},u=[{value:"How it works",id:"how-it-works",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Possibilities",id:"possibilities",level:2}],m={toc:u},d="wrapper";function g(t){var{components:e}=t,l=a(t,["components"]);return(0,r.kt)(d,o(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){i(t,e,n[e])}))}return t}({},m,l),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"The Itop provider connects to your Itop server and retrieve data through the\nitop REST API. The data is refreshed dynamically depending on your choices.\nSince it gathers a lot of configurations objects from Itop, it puts them in\ncache. Loging out or waiting 10 hours will flush the cache."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"architecture",src:n(9565).Z,width:"670",height:"477"})),(0,r.kt)("h2",{id:"compatibility"},"Compatibility"),(0,r.kt)("p",null,"This integration is (at least) compatible with the following Itop versions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1.4"),(0,r.kt)("li",{parentName:"ul"},"1.3")),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"Before going any further, make sure that you correctly setup\n",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/alerts-notifications/ticketing#configuration-avanc%C3%A9e"},"centreon-open-ticket"),"\ninto your Centreon instance."),(0,r.kt)("p",null,"Our provider requires the following parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Example of value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Address"),(0,r.kt)("td",{parentName:"tr",align:null},"10.30.2.22/itop/web")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"API version"),(0,r.kt)("td",{parentName:"tr",align:null},"1.4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Username"),(0,r.kt)("td",{parentName:"tr",align:null},"admin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},"itop")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Protocol"),(0,r.kt)("td",{parentName:"tr",align:null},"https")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"60")))),(0,r.kt)("h2",{id:"possibilities"},"Possibilities"),(0,r.kt)("p",null,"As of now, the provider is able to retrieve the following objects from Itop:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Organizations"),(0,r.kt)("li",{parentName:"ul"},"Callers"),(0,r.kt)("li",{parentName:"ul"},"Services"),(0,r.kt)("li",{parentName:"ul"},"Service subcategories"),(0,r.kt)("li",{parentName:"ul"},"Origin")),(0,r.kt)("p",null,"It will also fill the following parameters from a predefined list in Centreon.\nYou can extend those lists inside the provider configuration since they are\n",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/alerts-notifications/ticketing#configuration-avanc%C3%A9e"},"custom lists"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Impact"),(0,r.kt)("li",{parentName:"ul"},"Urgency")))}g.isMDXComponent=!0},9565:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/ot-itop-architecture-7738d114394e000d2a22457afb95f0d4.png"}}]);