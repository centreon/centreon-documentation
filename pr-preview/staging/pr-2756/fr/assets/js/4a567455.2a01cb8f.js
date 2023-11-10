"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[13479],{46308:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>c});r(67294);var n=r(3905);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})),t}function o(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}const l={id:"ot-jira",title:"Jira"},s=void 0,p={unversionedId:"integrations/itsm/ot-jira",id:"version-23.10/integrations/itsm/ot-jira",title:"Jira",description:"How it works",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/integrations/itsm/ot-jira.md",sourceDirName:"integrations/itsm",slug:"/integrations/itsm/ot-jira",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/integrations/itsm/ot-jira",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/integrations/itsm/ot-jira.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"10 nov. 2023",frontMatter:{id:"ot-jira",title:"Jira"},sidebar:"version-23.10/docs",previous:{title:"IWS Isilog",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/integrations/itsm/ot-iws-isilog"},next:{title:"Mail",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/integrations/itsm/ot-mail"}},u={},c=[{value:"How it works",id:"how-it-works",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Possibilities",id:"possibilities",level:2}],d={toc:c},m="wrapper";function g(t){var{components:e}=t,l=o(t,["components"]);return(0,n.kt)(m,a(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),n.forEach((function(e){i(t,e,r[e])}))}return t}({},d,l),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"how-it-works"},"How it works"),(0,n.kt)("p",null,"The Jira provider connects to your Itop server and retrieve data through the\nJira REST API."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"architecture",src:r(19430).Z,width:"780",height:"625"})),(0,n.kt)("h2",{id:"compatibility"},"Compatibility"),(0,n.kt)("p",null,"This integration is (at least) compatible with Jira cloud"),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("p",null,"Before going any further, make sure that you correctly setup\n",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/alerts-notifications/ticketing-install"},"centreon-open-ticket"),"\ninto your Centreon instance."),(0,n.kt)("p",null,"Our provider requires the following parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Example of value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Address"),(0,n.kt)("td",{parentName:"tr",align:null},"xxxxx.atlassian.net")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rest Api Resource"),(0,n.kt)("td",{parentName:"tr",align:null},"/rest/api/latest/")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Username"),(0,n.kt)("td",{parentName:"tr",align:null},"MyUser")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Password"),(0,n.kt)("td",{parentName:"tr",align:null},"MyPassword")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Timeout"),(0,n.kt)("td",{parentName:"tr",align:null},"60")))),(0,n.kt)("h2",{id:"possibilities"},"Possibilities"),(0,n.kt)("p",null,"As of now, the provider is able to retrieve the following objects from Jira:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Project"),(0,n.kt)("li",{parentName:"ul"},"Priority"),(0,n.kt)("li",{parentName:"ul"},"Assignee"),(0,n.kt)("li",{parentName:"ul"},"Issue type")))}g.isMDXComponent=!0},19430:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/ot-jira-architecture-663079872dfaa4a7c2961806a0aa95b9.png"}}]);