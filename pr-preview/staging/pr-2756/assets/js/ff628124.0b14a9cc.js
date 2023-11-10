"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[69972],{30835:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});r(67294);var o=r(3905);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const l={id:"architectures",title:"Architectures"},s=void 0,c={unversionedId:"installation/architectures",id:"version-23.10/installation/architectures",title:"Architectures",description:"If you are monitoring a small number of hosts and services, a central server is enough. However, to monitor a large number of hosts and services, you will need to distribute the load over multiple servers.",source:"@site/versioned_docs/version-23.10/installation/architectures.md",sourceDirName:"installation",slug:"/installation/architectures",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/installation/architectures",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/installation/architectures.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"Nov 10, 2023",frontMatter:{id:"architectures",title:"Architectures"},sidebar:"version-23.10/docs",previous:{title:"Compatibility",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/installation/compatibility"},next:{title:"Prerequisites",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/installation/prerequisites"}},u={},d=[{value:"Available architectures",id:"available-architectures",level:2},{value:"Standalone central server",id:"standalone-central-server",level:3},{value:"Distributed architecture",id:"distributed-architecture",level:3},{value:"Architecture with remote DBMS",id:"architecture-with-remote-dbms",level:3},{value:"What kind of architecture do you need?",id:"what-kind-of-architecture-do-you-need",level:2}],p={toc:d},h="wrapper";function m(e){var{components:t}=e,l=i(e,["components"]);return(0,o.kt)(h,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n(e,t,r[t])}))}return e}({},p,l),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you are monitoring a small number of hosts and services, a central server is enough. However, to monitor a large number of hosts and services, you will need to distribute the load over multiple servers."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you do not know what remote servers and pollers are, see ",(0,o.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/docs/getting-started/platform"},"Elements of a Centreon platform"),".")),(0,o.kt)("h2",{id:"available-architectures"},"Available architectures"),(0,o.kt)("h3",{id:"standalone-central-server"},"Standalone central server"),(0,o.kt)("p",null,"If you are not monitoring many hosts, you may only need one central server. The central server will do all of the monitoring itself."),(0,o.kt)("h3",{id:"distributed-architecture"},"Distributed architecture"),(0,o.kt)("p",null,"A distributed architecture consists of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Centreon Central server to configure monitoring and to display and operate on collected data"),(0,o.kt)("li",{parentName:"ul"},"One or more remote servers to display and operate on a subset of collected data")),(0,o.kt)("p",null,"and/or"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One or more pollers to collect data.")),(0,o.kt)("p",null,"Example of distributed architecture with 3 remote servers and 6 pollers. Note that you can also attach a poller directly to the central server."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:r(29521).Z,width:"1211",height:"581"})),(0,o.kt)("h3",{id:"architecture-with-remote-dbms"},"Architecture with remote DBMS"),(0,o.kt)("p",null,"Your central server can have a remote DBMS. An architecture with a remote DBMS consists of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Centreon Central server to configure monitoring and display collected data"),(0,o.kt)("li",{parentName:"ul"},"A DBMS server to store collected data"),(0,o.kt)("li",{parentName:"ul"},"Optionally, one or more remote servers and/or pollers to collect data")),(0,o.kt)("h2",{id:"what-kind-of-architecture-do-you-need"},"What kind of architecture do you need?"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:r(78230).Z,width:"1298",height:"194"})),(0,o.kt)("p",null,"When designing your Centreon platform, bear the following considerations in mind:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The number of hosts you will monitor is not enough to determine how big your platform should be. You will also need to take into account the number of services per host and the number of metrics per service."),(0,o.kt)("li",{parentName:"ul"},"Another criterion to consider is whether you need to use pollers or remote servers to separate your resources according to geographical or logical criteria. Example: If your monitoring architecture has to monitor a DMZ area, it is easier (and safer) to place a remote server in the DMZ network."),(0,o.kt)("li",{parentName:"ul"},"A central server should only monitor a small number of hosts and services because its CPU should primarily handle the data sent by remote servers and pollers (the same applies to remote servers). The more hosts and services you monitor on your central server, the higher the risk of the interface being slowed down, because the monitoring engine will use more resources."),(0,o.kt)("li",{parentName:"ul"},"The central server should monitor all remote servers and pollers."),(0,o.kt)("li",{parentName:"ul"},"The central server should be monitored by a poller or a remote server."),(0,o.kt)("li",{parentName:"ul"},"Use a remote server instead of a poller if you need to view data on a site other than where the central server is located.")))}m.isMDXComponent=!0},29521:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/archi-df7f616720298fb72f21cbc1f389a491.png"},78230:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/architecture_decision-78982464cf9789aa43fd24050b6e6d84.png"}}]);