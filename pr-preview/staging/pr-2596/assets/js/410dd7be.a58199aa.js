"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[34651],{19147:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>g});n(67294);var r=n(3905);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function a(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}const s={id:"first-supervision",title:"Prerequisites"},p=void 0,l={unversionedId:"getting-started/first-supervision",id:"version-23.10/getting-started/first-supervision",title:"Prerequisites",description:"This tutorial describes how to install the monitoring templates supplied free of charge with the Centreon solution",source:"@site/versioned_docs/version-23.10/getting-started/first-supervision.md",sourceDirName:"getting-started",slug:"/getting-started/first-supervision",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/docs/getting-started/first-supervision",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/getting-started/first-supervision.md",tags:[],version:"23.10",lastUpdatedAt:1699359701,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{id:"first-supervision",title:"Prerequisites"},sidebar:"version-23.10/docs",previous:{title:"Setting up the monitoring",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/docs/category/setting-up-the-monitoring"},next:{title:"Monitor your first Linux host",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/docs/getting-started/monitor-linux-server-with-snmp"}},c={},g=[{value:"Installation of basic monitoring templates",id:"installation-of-basic-monitoring-templates",level:3},{value:"Deploying a configuration",id:"deploying-a-configuration",level:2}],m={toc:g},u="wrapper";function d(t){var{components:e}=t,s=a(t,["components"]);return(0,r.kt)(u,i(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){o(t,e,n[e])}))}return t}({},m,s),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This tutorial describes how to install the monitoring templates supplied free of charge with the Centreon solution\nand then implement them to monitor your first device."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you have a license for it, you can use our ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/docs/monitoring/discovery/introduction"},"Auto Discovery")," feature to find and configure hosts easily. See also our tutorial on ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/docs/getting-started/autodisco-aws"},"how to detect AWS EC2 instances"),".")),(0,r.kt)("h3",{id:"installation-of-basic-monitoring-templates"},"Installation of basic monitoring templates"),(0,r.kt)("p",null,"Go to the ",(0,r.kt)("strong",{parentName:"p"},"Configuration ",">"," Monitoring Connectors")," menu."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/docs/administration/parameters/centreon-ui#proxy-configuration"},"Configure the proxy")," to allow the Centreon server to access the internet.")),(0,r.kt)("p",null,"Install the ",(0,r.kt)("strong",{parentName:"p"},"Base Generic")," Monitoring Connector (if it is not already installed) by moving your cursor onto it and then clicking the ",(0,r.kt)("strong",{parentName:"p"},"+")," icon (it is a prerequisite\nfor the installation of any other Monitoring Connectors):"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(52590).Z,width:"136",height:"133"})),(0,r.kt)("p",null,"You can also click the Monitoring Connector to discover its content before installing it:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(10242).Z,width:"491",height:"205"})),(0,r.kt)("p",null,"Install other Monitoring Connectors you probably need for your environment, for example ",(0,r.kt)("strong",{parentName:"p"},"Linux SNMP")," and ",(0,r.kt)("strong",{parentName:"p"},"Windows SNMP")," available\nfor free:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(56133).Z,width:"1217",height:"478"})),(0,r.kt)("p",null,"Now you have the basic templates and plugins to start monitoring hosts!"),(0,r.kt)("h2",{id:"deploying-a-configuration"},"Deploying a configuration"),(0,r.kt)("p",null,"When you create a host, you will need to deploy the configuration for the host to be monitored."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Configuration ",">"," Pollers > Pollers"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the pollers whose configuration you want to export.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Export configuration"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(79490).Z,width:"1247",height:"110"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the following boxes:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Generate Configuration Files")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Run monitoring engine debug (-v)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Move Export Files")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Restart Monitoring Engine"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Export"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(98208).Z,width:"756",height:"454"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check that no errors appear during generation."))))}d.isMDXComponent=!0},52590:(t,e,n)=>{n.d(e,{Z:()=>r});const r="data:image/png;base64,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"},10242:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/pp_base_generic_2-c096ffb7be1c26171a379ea29c3ea490.png"},56133:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/pp_install_basic-b5c344d1d34158ebb3a1e73313b26617.gif"},79490:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/export_conf-38771fa3a50cc7e264ca523d64280458.png"},98208:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/export_conf_done-f457e72a278a262d9a0f0d2e81011608.png"}}]);