"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[73489],{51049:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>a,metadata:()=>u,toc:()=>p});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={id:"centreon-os",title:"Centreon Open Source"},s=void 0,u={unversionedId:"releases/centreon-os",id:"version-23.10/releases/centreon-os",title:"Centreon Open Source",description:"Introduction",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/releases/centreon-os.md",sourceDirName:"releases",slug:"/releases/centreon-os",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/releases/centreon-os",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/releases/centreon-os.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"10 nov. 2023",frontMatter:{id:"centreon-os",title:"Centreon Open Source"},sidebar:"version-23.10/docs",previous:{title:"Politique de cycle de vie des solutions",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/releases/lifecycle"},next:{title:"Extensions Commerciales",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/releases/centreon-commercial-extensions"}},c={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Centreon Web",id:"centreon-web",level:2},{value:"23.04.0",id:"23040",level:3},{value:"Centreon Collect",id:"centreon-collect",level:2},{value:"23.04.0",id:"23040-1",level:3},{value:"Centreon Engine",id:"centreon-engine",level:4},{value:"Centreon Broker",id:"centreon-broker",level:4},{value:"Centreon Gorgone",id:"centreon-gorgone",level:2},{value:"23.04.0",id:"23040-2",level:3},{value:"Centreon High Availability",id:"centreon-high-availability",level:2},{value:"23.04.0",id:"23040-3",level:3},{value:"Centreon DSM",id:"centreon-dsm",level:2},{value:"23.04.0",id:"23040-4",level:3},{value:"Centreon Open Tickets",id:"centreon-open-tickets",level:2},{value:"23.04.0",id:"23040-5",level:3}],d={toc:p},m="wrapper";function k(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)(m,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Vous trouverez dans ce chapitre tout ce qui concerne ",(0,r.kt)("strong",{parentName:"p"},"Centreon Open Source"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Il est important de mettre \xe0 jour en utilisant la documentation ad\xe9quate de mise \xe0 jour et de lire attentivement les\nnotes de mise \xe0 jour afin d'\xeatre au courant des changements qui pourraient impacter votre usage ou votre plateforme\nou des d\xe9veloppements sp\xe9cifiques que vous auriez fait.")),(0,r.kt)("p",null,"Pour faire des demandes d'\xe9volutions ou signaler des bugs sur les extensions commerciales, vous pouvez vous rendre sur\nnotre ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/centreon/centreon/issues/new/choose"},"Github"),"."),(0,r.kt)("h2",{id:"centreon-web"},"Centreon Web"),(0,r.kt)("h3",{id:"23040"},"23.04.0"),(0,r.kt)("p",null,"Release date: ",(0,r.kt)("inlineCode",{parentName:"p"},"April 26, 2023")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[API]"," We have started extending Centreon's Configuration REST API. The first endpoints available in this release allow you to manage:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Time periods."),(0,r.kt)("li",{parentName:"ul"},"Host groups."),(0,r.kt)("li",{parentName:"ul"},"Host categories."),(0,r.kt)("li",{parentName:"ul"},"Host severities."),(0,r.kt)("li",{parentName:"ul"},"Service groups."),(0,r.kt)("li",{parentName:"ul"},"Service categories."),(0,r.kt)("li",{parentName:"ul"},"Service severities."))),(0,r.kt)("li",{parentName:"ul"},"[Authentication]"," Added SAML authentication. With SAML, you can:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use conditions to access Centreon."),(0,r.kt)("li",{parentName:"ul"},"Import users automatically."),(0,r.kt)("li",{parentName:"ul"},"Manage groups manually or automatically."),(0,r.kt)("li",{parentName:"ul"},"Manage roles manually or automatically."))),(0,r.kt)("li",{parentName:"ul"},"[Installation]"," Removed Enterprise Linux version 7 and added version 9."),(0,r.kt)("li",{parentName:"ul"},"[Resources Status]"," Added extended mode for Resources Status listing display."),(0,r.kt)("li",{parentName:"ul"},"[Resources Status]"," You can now switch between extended and compact mode in the Resources Status page."),(0,r.kt)("li",{parentName:"ul"},"[Resources Status]"," Both simple and forced check options are provided in Resources Status."),(0,r.kt)("li",{parentName:"ul"},"[Resources Status]"," Various user interface improvements in Resources Status :",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Aligned column contents with labels."),(0,r.kt)("li",{parentName:"ul"},"The icon that allows you to reorder columns is now displayed only on mouseover."),(0,r.kt)("li",{parentName:"ul"},"The columns displayed by default have been changed."),(0,r.kt)("li",{parentName:"ul"},"Listing pagination icons are now displayed at the same time as the resource details panel."))),(0,r.kt)("li",{parentName:"ul"},"[Terminology]"," Renamed \u201cproblems\u201d to \u201calerts\u201d in Resources Status."),(0,r.kt)("li",{parentName:"ul"},"[Terminology]"," Renamed \u201cPlugin Pack\u201d to \u201cMonitoring Connectors\u201d in the user interface."),(0,r.kt)("li",{parentName:"ul"},"[UI]"," Improved Top Counter responsiveness."),(0,r.kt)("li",{parentName:"ul"},"[UI]"," Applied new Centreon branding."),(0,r.kt)("li",{parentName:"ul"},"[UX]"," Added German translation."),(0,r.kt)("li",{parentName:"ul"},"[Widgets]"," Added the possibility to select a Meta-Service in the graph monitoring widget.")),(0,r.kt)("h2",{id:"centreon-collect"},"Centreon Collect"),(0,r.kt)("h3",{id:"23040-1"},"23.04.0"),(0,r.kt)("p",null,"Release date: ",(0,r.kt)("inlineCode",{parentName:"p"},"April 26, 2023")),(0,r.kt)("h4",{id:"centreon-engine"},"Centreon Engine"),(0,r.kt)("p",null,"Compatibility with other 23.04 components."),(0,r.kt)("h4",{id:"centreon-broker"},"Centreon Broker"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Converted all BBDO messages to Protobuf: the BBDO v2 protocol was entirely based on buffers with a static structure. We converted all the event message types into Protobuf classes, in order to easily add new fields or new message types in the future.")),(0,r.kt)("h2",{id:"centreon-gorgone"},"Centreon Gorgone"),(0,r.kt)("h3",{id:"23040-2"},"23.04.0"),(0,r.kt)("p",null,"Release date: ",(0,r.kt)("inlineCode",{parentName:"p"},"April 26, 2023")),(0,r.kt)("p",null,"Compatibility with other 23.04 components."),(0,r.kt)("h2",{id:"centreon-high-availability"},"Centreon High Availability"),(0,r.kt)("h3",{id:"23040-3"},"23.04.0"),(0,r.kt)("p",null,"Release date: ",(0,r.kt)("inlineCode",{parentName:"p"},"April 26, 2023")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Compatibility with other 23.04 components.")),(0,r.kt)("h2",{id:"centreon-dsm"},"Centreon DSM"),(0,r.kt)("h3",{id:"23040-4"},"23.04.0"),(0,r.kt)("p",null,"Release date: ",(0,r.kt)("inlineCode",{parentName:"p"},"April 26, 2023")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Compatibility with other 23.04 components.")),(0,r.kt)("h2",{id:"centreon-open-tickets"},"Centreon Open Tickets"),(0,r.kt)("h3",{id:"23040-5"},"23.04.0"),(0,r.kt)("p",null,"Release date: ",(0,r.kt)("inlineCode",{parentName:"p"},"April 26, 2023")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Compatibility with other 23.04 components."),(0,r.kt)("li",{parentName:"ul"},"Added Schedule Check option & auto close popup capability")))}k.isMDXComponent=!0}}]);