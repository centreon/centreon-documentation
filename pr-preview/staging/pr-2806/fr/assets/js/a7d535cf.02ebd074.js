"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[51146],{43801:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>p,metadata:()=>s,toc:()=>c});r(67294);var n=r(3905);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})),t}function a(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}const p={id:"network-firewalls-fortinet-fortigate-snmp",title:"Fortinet Fortigate"},l=void 0,s={unversionedId:"integrations/plugin-packs/procedures/network-firewalls-fortinet-fortigate-snmp",id:"integrations/plugin-packs/procedures/network-firewalls-fortinet-fortigate-snmp",title:"Fortinet Fortigate",description:"Prerequisites",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/network-firewalls-fortinet-fortigate-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-firewalls-fortinet-fortigate-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/network-firewalls-fortinet-fortigate-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/network-firewalls-fortinet-fortigate-snmp.md",tags:[],version:"current",frontMatter:{id:"network-firewalls-fortinet-fortigate-snmp",title:"Fortinet Fortigate"},sidebar:"pp",previous:{title:"Fortinet FortiAuthenticator SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/network-fortinet-fortiauthenticator-snmp"},next:{title:"Fortinet Fortigate Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/network-fortinet-fortigate-restapi"}},u={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon Plugin",id:"centreon-plugin",level:3},{value:"SNMP",id:"snmp",level:3},{value:"Centreon Configuration",id:"centreon-configuration",level:2},{value:"Create a host using the appropriate template",id:"create-a-host-using-the-appropriate-template",level:3}],g={toc:c},f="wrapper";function d(t){var{components:e}=t,r=a(t,["components"]);return(0,n.kt)(f,o(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),n.forEach((function(e){i(t,e,r[e])}))}return t}({},g,r),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"This chapter describes the prerequisites installation needed by plugins to run."),(0,n.kt)("h3",{id:"centreon-plugin"},"Centreon Plugin"),(0,n.kt)("p",null,"Install this plugin on each needed poller:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"yum install centreon-plugin-Network-Firewalls-Fortinet-Fortigate-Snmp\n")),(0,n.kt)("h3",{id:"snmp"},"SNMP"),(0,n.kt)("p",null,"It's necessary to enable SNMP on your equipment"),(0,n.kt)("h2",{id:"centreon-configuration"},"Centreon Configuration"),(0,n.kt)("h3",{id:"create-a-host-using-the-appropriate-template"},"Create a host using the appropriate template"),(0,n.kt)("p",null,"Go to ",(0,n.kt)("em",{parentName:"p"},"Configuration ",">"," Hosts")," and click ",(0,n.kt)("em",{parentName:"p"},"Add"),". Then, fill the form as shown by\nthe following table:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Host name"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Name of the host"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Alias"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Host description"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"IP"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Host IP Address"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Monitored from"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Monitoring Poller to use"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Host Multiple Templates"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Net-Fortinet-Fortigate-SNMP-custom")))),(0,n.kt)("p",null,"Click on the ",(0,n.kt)("em",{parentName:"p"},"Save")," button."))}d.isMDXComponent=!0}}]);