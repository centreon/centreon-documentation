"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[80689],{59077:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const s={id:"hardware-storage-avid-isis-snmp",title:"Avid Isis"},p=void 0,l={unversionedId:"integrations/plugin-packs/procedures/hardware-storage-avid-isis-snmp",id:"integrations/plugin-packs/procedures/hardware-storage-avid-isis-snmp",title:"Avid Isis",description:"Prerequisites",source:"@site/pp/integrations/plugin-packs/procedures/hardware-storage-avid-isis-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-storage-avid-isis-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/hardware-storage-avid-isis-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/hardware-storage-avid-isis-snmp.md",tags:[],version:"current",frontMatter:{id:"hardware-storage-avid-isis-snmp",title:"Avid Isis"},sidebar:"pp",previous:{title:"Adic Tape SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/hardware-storage-adic-tape-snmp"},next:{title:"BDT MultiStak SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/hardware-storage-bdt-multistak-snmp"}},u={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon Plugin",id:"centreon-plugin",level:3},{value:"Configure SNMP on your server",id:"configure-snmp-on-your-server",level:3},{value:"SNMP Permissions",id:"snmp-permissions",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Centreon Configuration",id:"centreon-configuration",level:2},{value:"Create a host using the appropriate template",id:"create-a-host-using-the-appropriate-template",level:3}],c={toc:d},g="wrapper";function m(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)(g,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},c,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("h3",{id:"centreon-plugin"},"Centreon Plugin"),(0,n.kt)("p",null,"Install this plugin on each needed poller:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"yum install centreon-plugin-Hardware-Storage-Avid-Isis-Snmp\n")),(0,n.kt)("p",null,"Be sure to have with you the following information:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Read-Only SNMP community"),(0,n.kt)("li",{parentName:"ul"},"IP Address of the equipment")),(0,n.kt)("h3",{id:"configure-snmp-on-your-server"},"Configure SNMP on your server"),(0,n.kt)("p",null,"Follow constructor procedure for your equipment."),(0,n.kt)("h3",{id:"snmp-permissions"},"SNMP Permissions"),(0,n.kt)("p",null,"Read-Only access."),(0,n.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"Read ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#troubleshooting-snmp"},"Troubleshooting\nSNMP")),(0,n.kt)("h2",{id:"centreon-configuration"},"Centreon Configuration"),(0,n.kt)("h3",{id:"create-a-host-using-the-appropriate-template"},"Create a host using the appropriate template"),(0,n.kt)("p",null,"Go to ",(0,n.kt)("em",{parentName:"p"},"Configuration ",">"," Hosts")," and click ",(0,n.kt)("em",{parentName:"p"},"Add"),". Then, fill the form as shown by\nthe following table:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Host name"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Name of the host"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Alias"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Host description"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"IP"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Host IP Address"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Monitored from"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Monitoring Poller to use"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Host Multiple Templates"),(0,n.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-Avid-Isis-SNMP-custom")))),(0,n.kt)("p",null,"Click on the ",(0,n.kt)("em",{parentName:"p"},"Save")," button."))}m.isMDXComponent=!0}}]);