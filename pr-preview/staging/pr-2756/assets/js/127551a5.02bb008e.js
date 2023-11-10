"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[81114],{87497:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>d});n(67294);var r=n(3905);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}const a={id:"monitor-printer-snmp",title:"Monitor a printer with SNMP"},p=void 0,c={unversionedId:"getting-started/monitor-printer-snmp",id:"version-23.10/getting-started/monitor-printer-snmp",title:"Monitor a printer with SNMP",description:"Go to the Configuration \\> Monitoring Connectors menu and install the Printer Standard Monitoring Connector:",source:"@site/versioned_docs/version-23.10/getting-started/monitor-printer-with-snmp.md",sourceDirName:"getting-started",slug:"/getting-started/monitor-printer-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/getting-started/monitor-printer-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/getting-started/monitor-printer-with-snmp.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"Nov 10, 2023",frontMatter:{id:"monitor-printer-snmp",title:"Monitor a printer with SNMP"},sidebar:"version-23.10/docs",previous:{title:"Use Autodiscovery to monitor AWS EC2 instances",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/getting-started/autodisco-aws"},next:{title:"Monitor UPS devices with SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/getting-started/monitor-ups-snmp"}},l={},d=[],u={toc:d},g="wrapper";function m(t){var{components:e}=t,a=s(t,["components"]);return(0,r.kt)(g,i(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){o(t,e,n[e])}))}return t}({},u,a),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Go to the ",(0,r.kt)("strong",{parentName:"p"},"Configuration ",">"," Monitoring Connectors")," menu and install the ",(0,r.kt)("strong",{parentName:"p"},"Printer Standard")," Monitoring Connector:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(79290).Z,width:"995",height:"561"})),(0,r.kt)("p",null,"Go to the ",(0,r.kt)("strong",{parentName:"p"},"Configuration ",">"," Hosts ",">"," Hosts")," menu and click ",(0,r.kt)("strong",{parentName:"p"},"Add"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(50890).Z,width:"1273",height:"489"})),(0,r.kt)("p",null,"Input the following information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The name of the server"),(0,r.kt)("li",{parentName:"ul"},"A description of the server"),(0,r.kt)("li",{parentName:"ul"},"The IP address"),(0,r.kt)("li",{parentName:"ul"},"The SNMP version and community")),(0,r.kt)("p",null,"Click the ",(0,r.kt)("strong",{parentName:"p"},"+ Add a new entry")," button in ",(0,r.kt)("strong",{parentName:"p"},"Templates")," field, and then select the ",(0,r.kt)("strong",{parentName:"p"},"HW-Printer-standard-rfc3805-custom"),"\ntemplate in the list."),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"Save"),"."),(0,r.kt)("p",null,"Your device has been added to the monitoring configuration:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(84346).Z,width:"1273",height:"286"})),(0,r.kt)("p",null,"Go to ",(0,r.kt)("strong",{parentName:"p"},"Configuration ",">"," Services ",">"," Services by host"),". A set of indicators has been automatically deployed:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(45064).Z,width:"1273",height:"503"})),(0,r.kt)("p",null,"It is now time to ",(0,r.kt)("a",{parentName:"p",href:"#deploying-a-configuration"},"deploy the supervision"),"."),(0,r.kt)("p",null,"Then go to ",(0,r.kt)("strong",{parentName:"p"},"Monitoring ",">"," Status Details ",">"," Services")," and select the value ",(0,r.kt)("strong",{parentName:"p"},"All")," for the ",(0,r.kt)("strong",{parentName:"p"},"Service Status"),"\nfilter. After a few minutes, the first results of the monitoring appear:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(28309).Z,width:"1273",height:"447"})))}m.isMDXComponent=!0},79290:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/quick_start_printer_0-ce22b5cc5ceef3e340254f4843e78b6e.gif"},50890:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/quick_start_printer_1-300d4e4d90c609966d0b6592a7d3e16b.png"},84346:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/quick_start_printer_2-101619ee65b3587edbd1b24e4ceb2527.png"},45064:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/quick_start_printer_3-b9c5703e94e4251b61ebc59d1d51b435.png"},28309:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/quick_start_printer_4-4251c79492d21105fc1ce66797228971.png"}}]);