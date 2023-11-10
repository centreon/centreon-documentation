"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[96240],{5341:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>d});n(67294);var r=n(3905),a=n(51715),i=n(7626);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={id:"applications-dynamics-365-nsclient-05-nrpe",title:"Microsoft Dynamics365 NRPE 0.5"},c=void 0,u={unversionedId:"integrations/plugin-packs/procedures/applications-dynamics-365-nsclient-05-nrpe",id:"integrations/plugin-packs/procedures/applications-dynamics-365-nsclient-05-nrpe",title:"Microsoft Dynamics365 NRPE 0.5",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/applications-dynamics-365-nsclient-05-nrpe.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-dynamics-365-nsclient-05-nrpe",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/applications-dynamics-365-nsclient-05-nrpe",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-dynamics-365-nsclient-05-nrpe.md",tags:[],version:"current",frontMatter:{id:"applications-dynamics-365-nsclient-05-nrpe",title:"Microsoft Dynamics365 NRPE 0.5"},sidebar:"pp",previous:{title:"Microsoft Dynamics NRPE 0.5",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/applications-dynamics-ax-nsclient-05-nrpe"},next:{title:"Microsoft Exchange NSClient++ NRPE",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/applications-exchange-nrpe"}},m={},d=[{value:"Overview",id:"overview",level:2},{value:"Pack assets",id:"pack-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Collected metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon NSClient++",id:"centreon-nsclient",level:3},{value:"Installation",id:"installation",level:2},{value:"Host configuration",id:"host-configuration",level:2}],g={toc:d},k="wrapper";function f(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)(k,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This Monitoring Connector allows you to get metrics and statuses collected thanks to the NSClient++\nmonitoring agent and its embedded NRPE Server."),(0,r.kt)("h2",{id:"pack-assets"},"Pack assets"),(0,r.kt)("h3",{id:"monitored-objects"},"Monitored objects"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Windows Server OS from 2003 SP2 version"),(0,r.kt)("li",{parentName:"ul"},"Windows Workstation from XP version")),(0,r.kt)("h3",{id:"collected-metrics"},"Collected metrics"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"New-Orders",label:"New-Orders",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Service name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"New-Orders"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check new orders presence and age.")))))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"centreon-nsclient"},"Centreon NSClient++"),(0,r.kt)("p",null,"To monitor ",(0,r.kt)("strong",{parentName:"p"},"Dynamics 365")," through NRPE, install the Centreon packaged version of the NSClient++ agent. Please follow our ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/getting-started/how-to-guides/centreon-nsclient-tutorial"},"official documentation"),"\nand make sure that the ",(0,r.kt)("strong",{parentName:"p"},"NRPE Server")," configuration is correct."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Centreon NRPE Client package on every poller:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-nrpe3-plugin\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the Centreon Pack ",(0,r.kt)("strong",{parentName:"li"},"Dynamics 365"),"\nfrom the ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page."))),(0,r.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Centreon package on every poller:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-nrpe3-plugin\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Install the Centreon Pack RPM on the Centreon central server:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-operatingsystems-windows-nsclient-05-nrpe centreon-pack-applications-dynamics-365-nsclient-05-nrpe\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the Centreon Pack ",(0,r.kt)("strong",{parentName:"li"},"Dynamics 365"),"\nfrom the ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page.")))),(0,r.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Log into Centreon and add a new host through ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Hosts > Hosts"),"."),(0,r.kt)("li",{parentName:"ul"},"Apply the ",(0,r.kt)("strong",{parentName:"li"},"App-Dynamics-365-NRPE-custom")," template and configure all the mandatory macros:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NRPECLIENT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NRPE Plugin binary to use (Default: 'check_centreon_nrpe3')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NRPEPORT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NRPE Port of the target server (Default: '5666')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NRPETIMEOUT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Timeout value (Default: '30')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NRPEEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Extraoptions to use with the NRPE binary (default: '-2 -u -P 8192')")))))}f.isMDXComponent=!0}}]);