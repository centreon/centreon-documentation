"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[94528],{61155:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>k,frontMatter:()=>p,metadata:()=>s,toc:()=>c});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const p={id:"network-silverpeak-snmp",title:"Silverpeak"},l=void 0,s={unversionedId:"integrations/plugin-packs/procedures/network-silverpeak-snmp",id:"integrations/plugin-packs/procedures/network-silverpeak-snmp",title:"Silverpeak",description:"Prerequisites",source:"@site/pp/integrations/plugin-packs/procedures/network-silverpeak-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-silverpeak-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/network-silverpeak-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/network-silverpeak-snmp.md",tags:[],version:"current",frontMatter:{id:"network-silverpeak-snmp",title:"Silverpeak"},sidebar:"pp",previous:{title:"Ruggedcom Network",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/network-ruggedcom"},next:{title:"Sonicwall",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/network-firewalls-sonicwall-snmp"}},u={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon Plugin",id:"centreon-plugin",level:3},{value:"Configure SNMP on your server",id:"configure-snmp-on-your-server",level:3},{value:"SNMP Permissions",id:"snmp-permissions",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Centreon Configuration",id:"centreon-configuration",level:2},{value:"Create a host using the appropriate template",id:"create-a-host-using-the-appropriate-template",level:3}],m={toc:c},g="wrapper";function k(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)(g,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"centreon-plugin"},"Centreon Plugin"),(0,r.kt)("p",null,"Install this plugin on each needed poller:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yum install centreon-plugin-Network-Silverpeak-Snmp\n")),(0,r.kt)("p",null,"Be sure to have with you the following information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Read-Only SNMP community"),(0,r.kt)("li",{parentName:"ul"},"IP Address of the equipment")),(0,r.kt)("h3",{id:"configure-snmp-on-your-server"},"Configure SNMP on your server"),(0,r.kt)("p",null,"Follow constructor procedure for your equipment."),(0,r.kt)("h3",{id:"snmp-permissions"},"SNMP Permissions"),(0,r.kt)("p",null,"Read-Only access."),(0,r.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"Read ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#troubleshooting-snmp"},"Troubleshooting\nSNMP"),"."),(0,r.kt)("h2",{id:"centreon-configuration"},"Centreon Configuration"),(0,r.kt)("h3",{id:"create-a-host-using-the-appropriate-template"},"Create a host using the appropriate template"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("em",{parentName:"p"},"Configuration ",">"," Hosts")," and click ",(0,r.kt)("em",{parentName:"p"},"Add"),". Then, fill the form as shown by\nthe following table:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Host name"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Name of the host"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Alias"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Host description"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"IP"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Host IP Address"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Monitored from"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Monitoring Poller to use"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Host Multiple Templates"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Net-Silverpeak-SNMP-custom")))),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("em",{parentName:"p"},"Save")," button."))}k.isMDXComponent=!0}}]);