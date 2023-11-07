"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[85221],{7461:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function o(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}const l={id:"ot-iws-isilog",title:"IWS Isilog"},s=void 0,p={unversionedId:"integrations/itsm/ot-iws-isilog",id:"version-23.10/integrations/itsm/ot-iws-isilog",title:"IWS Isilog",description:"How it works",source:"@site/versioned_docs/version-23.10/integrations/itsm/ot-iws-isilog.md",sourceDirName:"integrations/itsm",slug:"/integrations/itsm/ot-iws-isilog",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/integrations/itsm/ot-iws-isilog",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/integrations/itsm/ot-iws-isilog.md",tags:[],version:"23.10",lastUpdatedAt:1699374559,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{id:"ot-iws-isilog",title:"IWS Isilog"},sidebar:"version-23.10/docs",previous:{title:"iTop",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/integrations/itsm/ot-itop"},next:{title:"Jira",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/integrations/itsm/ot-jira"}},u={},c=[{value:"How it works",id:"how-it-works",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Possibilities",id:"possibilities",level:2}],m={toc:c},d="wrapper";function g(t){var{components:e}=t,l=o(t,["components"]);return(0,r.kt)(d,a(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){i(t,e,n[e])}))}return t}({},m,l),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"The IWS Isilog provider uses the SOAP API of Isilog to retrieve data in order to\nopen a ticket. Since it gathers a lot of configurations objects from Isilog, it\nputs them in cache. Loging out or waiting 10 hours will flush the cache."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"architecture",src:n(44220).Z,width:"423",height:"720"})),(0,r.kt)("h2",{id:"compatibility"},"Compatibility"),(0,r.kt)("p",null,"This connector is compatibile with at least the following versions of Isilog:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Component"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Product"),(0,r.kt)("td",{parentName:"tr",align:null},"IWS Infinity V4.1.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Referential"),(0,r.kt)("td",{parentName:"tr",align:null},"3.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Framework"),(0,r.kt)("td",{parentName:"tr",align:null},"4.0.0.0")))),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"Before going any further, make sure that you correctly setup\n",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/alerts-notifications/ticketing#advanced-configuration"},"centreon-open-ticket"),"\ninto your Centreon instance"),(0,r.kt)("p",null,"Our provider requires the following parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Example of value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Address"),(0,r.kt)("td",{parentName:"tr",align:null},"demo.iws-saas.fr/isilogwebsystem")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Username"),(0,r.kt)("td",{parentName:"tr",align:null},"MyAccount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},"MyPassword")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Database name"),(0,r.kt)("td",{parentName:"tr",align:null},"MyDatabase")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Protocol"),(0,r.kt)("td",{parentName:"tr",align:null},"https")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"60")))),(0,r.kt)("h2",{id:"possibilities"},"Possibilities"),(0,r.kt)("p",null,"As of now you'll only be able to open a ticket and close it from Centreon. In\nthe near future you'll be able to fill the following parameters when opening a\nticket"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Origin"),(0,r.kt)("li",{parentName:"ul"},"Impact"),(0,r.kt)("li",{parentName:"ul"},"Urgency"),(0,r.kt)("li",{parentName:"ul"},"Service"),(0,r.kt)("li",{parentName:"ul"},"Category"),(0,r.kt)("li",{parentName:"ul"},"Team"),(0,r.kt)("li",{parentName:"ul"},"Element")))}g.isMDXComponent=!0},44220:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/ot-iws-isilog-architecture-b977040a90adf8577009bcd677f94474.png"}}]);