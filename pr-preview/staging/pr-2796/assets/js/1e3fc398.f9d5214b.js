"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[45769],{59834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>d});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"network-cisco-standard-ssh",title:"Cisco Standard SSH"},l=void 0,p={unversionedId:"integrations/plugin-packs/procedures/network-cisco-standard-ssh",id:"integrations/plugin-packs/procedures/network-cisco-standard-ssh",title:"Cisco Standard SSH",description:"Prerequisites",source:"@site/pp/integrations/plugin-packs/procedures/network-cisco-standard-ssh.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-cisco-standard-ssh",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/network-cisco-standard-ssh",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/network-cisco-standard-ssh.md",tags:[],version:"current",frontMatter:{id:"network-cisco-standard-ssh",title:"Cisco Standard SSH"},sidebar:"pp",previous:{title:"Cisco Standard",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/network-cisco-standard-snmp"},next:{title:"Cisco Umbrella",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/network-cisco-umbrella-snmp"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon Plugin",id:"centreon-plugin",level:3},{value:"SSH",id:"ssh",level:3},{value:"Centreon Configuration",id:"centreon-configuration",level:2},{value:"Create a new host",id:"create-a-new-host",level:3}],u={toc:d},m="wrapper";function k(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(m,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"centreon-plugin"},"Centreon Plugin"),(0,r.kt)("p",null,"Install this plugin on each needed poller:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yum install centreon-plugin-Network-Cisco-Standard-Ssh\n")),(0,r.kt)("h3",{id:"ssh"},"SSH"),(0,r.kt)("p",null,"SSH key exchange mut be done between poller and monitored server."),(0,r.kt)("h2",{id:"centreon-configuration"},"Centreon Configuration"),(0,r.kt)("h3",{id:"create-a-new-host"},"Create a new host"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("em",{parentName:"p"},"Configuration ",">"," Hosts")," and click ",(0,r.kt)("em",{parentName:"p"},"Add"),". Then, fill the form as shown by\nthe following table:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Host name"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Name of the host"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Alias"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Host description"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"IP"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Host IP Address"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Monitored from"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Monitoring Poller to use"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Host Multiple Templates"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Net-Cisco-Standard-SSH-custom")))),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("em",{parentName:"p"},"Save")," button."))}k.isMDXComponent=!0}}]);