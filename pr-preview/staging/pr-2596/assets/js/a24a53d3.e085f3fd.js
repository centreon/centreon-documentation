"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[36364],{75999:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>g,contentTitle:()=>d,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>u});n(67294);var o=n(3905),a=n(51715),i=n(7626);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function s(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const p={id:"ntopng",title:"Widget NtopNG"},d=void 0,c={unversionedId:"integrations/npm/ntopng",id:"version-23.10/integrations/npm/ntopng",title:"Widget NtopNG",description:"Use the NtopNG widget in custom views to view data about network usage collected by an NtopNG server.",source:"@site/versioned_docs/version-23.10/integrations/npm/ntopng.md",sourceDirName:"integrations/npm",slug:"/integrations/npm/ntopng",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/docs/integrations/npm/ntopng",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/integrations/npm/ntopng.md",tags:[],version:"23.10",lastUpdatedAt:1699359701,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{id:"ntopng",title:"Widget NtopNG"},sidebar:"version-23.10/docs",previous:{title:"Notify with Telegram bot",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/docs/integrations/notifications/plugin-telegram"},next:{title:"Introduction",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/docs/mobile/introduction"}},g={},u=[{value:"Install the widget",id:"install-the-widget",level:2},{value:"Configure the widget",id:"configure-the-widget",level:2},{value:"NtopNG Probe",id:"ntopng-probe",level:3},{value:"View",id:"view",level:3},{value:"Filters",id:"filters",level:3},{value:"Misc",id:"misc",level:3},{value:"Examples",id:"examples",level:2},{value:"Top N Local address",id:"top-n-local-address",level:3},{value:"Top N Remote address",id:"top-n-remote-address",level:3},{value:"Top N Flows",id:"top-n-flows",level:3},{value:"Top N Applications",id:"top-n-applications",level:3}],m={toc:u},N="wrapper";function f(t){var{components:e}=t,p=s(t,["components"]);return(0,o.kt)(N,l(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),o.forEach((function(e){r(t,e,n[e])}))}return t}({},m,p),{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Use the NtopNG widget in ",(0,o.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/docs/alerts-notifications/custom-views"},"custom views")," to view data about network usage collected by an NtopNG server."),(0,o.kt)("p",null,"The widget can display the following views (see ",(0,o.kt)("a",{parentName:"p",href:"#examples"},(0,o.kt)("strong",{parentName:"a"},"Examples"))," below):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Top N Local address")," : Display the n local hosts that receive/emit the most traffic"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Top N Remote address")," : Display the n remote hosts that receive/emit the most traffic"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Top N Flows")," : Display the top n flows by network usage (local/remote hosts and ports)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Top N Applications")," : Display the n applications that emit/receive the most traffic (group flows by application)")),(0,o.kt)("h2",{id:"install-the-widget"},"Install the widget"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install the following package on the central server:")),(0,o.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-widget-ntopng-listing\n"))),(0,o.kt)(i.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-widget-ntopng-listing\n"))),(0,o.kt)(i.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"apt update && apt install centreon-widget-ntopng-listing\n")))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"On page ",(0,o.kt)("strong",{parentName:"li"},"Administration > Extensions > Manager"),", install the ",(0,o.kt)("strong",{parentName:"li"},"NtopNG")," widget.")),(0,o.kt)("h2",{id:"configure-the-widget"},"Configure the widget"),(0,o.kt)("p",null,"To configure the widget, click on the wrench icon in its top right corner. A window opens:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Parameters",src:n(90777).Z,width:"406",height:"566"})),(0,o.kt)("h3",{id:"ntopng-probe"},"NtopNG Probe"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Login"),": Account used to access NtopNG (we recommend not to use an admin account)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Password"),": Password for this account"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Probe"),": IP address of your NtopNG server"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Protocol"),": Protocol to use to connect to NtopNG (https by default)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Port"),": Network port to connect to NtopNG (TCP/3000 by default)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Interface"),": ID of the interface. You can find it in the NtopNG interface, on page ",(0,o.kt)("strong",{parentName:"li"},"Interface"),":")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Interface ID",src:n(45235).Z,width:"1153",height:"853"})),(0,o.kt)("h3",{id:"view"},"View"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Mode"),": Select the data you want to display"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Top"),": Define how many lines should be displayed")),(0,o.kt)("h3",{id:"filters"},"Filters"),(0,o.kt)("p",null,"Those filters only work for the ",(0,o.kt)("strong",{parentName:"p"},"Top N Flows")," view. You can filter on an IP address, on a port, or on both."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"IP Address"),": Display only the traffic related to a specific IP Address (do not use a hostname)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Port"),": Display only the traffic on this particular port.")),(0,o.kt)("h3",{id:"misc"},"Misc"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Refresh interval (seconds)"),": Define how often the data should be refreshed.")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"top-n-local-address"},"Top N Local address"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Top N Local address",src:n(53850).Z,width:"1229",height:"381"})),(0,o.kt)("h3",{id:"top-n-remote-address"},"Top N Remote address"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Top N Remote address",src:n(27312).Z,width:"1224",height:"375"})),(0,o.kt)("h3",{id:"top-n-flows"},"Top N Flows"),(0,o.kt)("p",null,"Widget without a filter:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Top N Flows",src:n(35242).Z,width:"1236",height:"372"})),(0,o.kt)("p",null,"Widget with a filter on an IP address:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Top N Flows Address Filter",src:n(5819).Z,width:"1235",height:"372"})),(0,o.kt)("p",null,"Widget with a filter on a port and an IP address:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Top N Flows Address Port Filters",src:n(92862).Z,width:"1241",height:"252"})),(0,o.kt)("h3",{id:"top-n-applications"},"Top N Applications"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Top N Applications",src:n(75647).Z,width:"1236",height:"470"})))}f.isMDXComponent=!0},45235:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/NtopNG_Interface_ID-9f51c0314743b51c1069fea50af11fe3.png"},90777:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/Widget_NtopNG_Options-b8f96d50f7d4aab6a01cb30fd9de6b1f.png"},75647:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/Widget_NtopNG_Top_N_Applications-6f896a73e0a253ae4c56928fe7fb9604.png"},35242:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/Widget_NtopNG_Top_N_Flows-65480fc9bf15b4ff8d355cf3c8bb3e0e.png"},5819:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/Widget_NtopNG_Top_N_Flows_Address_Filter-f1cda09ca915c673a2bacdf6bcd15172.png"},92862:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/Widget_NtopNG_Top_N_Flows_Address_Port_Filters-aefba07efa945eaaf352d625183b73fd.png"},53850:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/Widget_NtopNG_Top_N_Local-ed0ad89b7a90df38526b79ad8bb5d0f1.png"},27312:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/Widget_NtopNG_Top_N_Remote-5edae192fedeb87aef8e46d8a69e07f1.png"}}]);