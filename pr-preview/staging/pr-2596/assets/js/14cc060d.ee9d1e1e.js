"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[16252],{45104:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>d});n(67294);var r=n(3905),a=n(51715),i=n(7626);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const s={id:"applications-monitoring-mip-restapi",title:"Maltem Insight Rest API"},c=void 0,u={unversionedId:"integrations/plugin-packs/procedures/applications-monitoring-mip-restapi",id:"integrations/plugin-packs/procedures/applications-monitoring-mip-restapi",title:"Maltem Insight Rest API",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/applications-monitoring-mip-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-monitoring-mip-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/applications-monitoring-mip-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-monitoring-mip-restapi.md",tags:[],version:"current",frontMatter:{id:"applications-monitoring-mip-restapi",title:"Maltem Insight Rest API"},sidebar:"pp",previous:{title:"Lync 2013",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/applications-lync-2013-mssql"},next:{title:"McAfee Web Gateway",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/applications-antivirus-mcafee-webgateway-snmp"}},m={},d=[{value:"Overview",id:"overview",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Requirements",id:"requirements",level:2},{value:"MIP",id:"mip",level:3},{value:"Centreon",id:"centreon",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Hosts",id:"hosts",level:3},{value:"Services",id:"services",level:3}],g={toc:d},k="wrapper";function f(t){var{components:e}=t,s=p(t,["components"]);return(0,r.kt)(k,l(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){o(t,e,n[e])}))}return t}({},g,s),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Maltem Insight Performance (MIP) provides solutions to measure performance of web applications and thick clients through custom scenarios. It provides an API to gather metrics and status associated to the end-user experience from various locations."),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"The MIP instance exposes a JSON based RestAPI. Centreon connector uses this endpoint to fetch relevant data about Digital Experience Monitoring Scenarios "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(56765).Z,width:"1050",height:"1035"})),(0,r.kt)("h2",{id:"compatibility"},"Compatibility"),(0,r.kt)("p",null,"The connector has been tested with MIP v 6.4.90 and its API. "),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("h3",{id:"mip"},"MIP"),(0,r.kt)("p",null,"To be able to get data from MIP API, you must have a valid API key. Contact MIP support or sales representative to get one. "),(0,r.kt)("h3",{id:"centreon"},"Centreon"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the MIP plugin on each poller monitoring MIP endpoints:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install -y centreon-plugin-Applications-Monitoring-Mip-Restapi`\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Install the Monitoring Connector RPM on your Central Server:"))),(0,r.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the MIP plugin on each poller monitoring MIP endpoints:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install -y centreon-plugin-Applications-Monitoring-Mip-Restapi`\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Install the Monitoring Connector RPM on your Central Server: ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install -y centreon-pack-applications-monitoring-mip-restapi`\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Install the Monitoring Connector through the ",(0,r.kt)("strong",{parentName:"li"},"Configuration ",">"," Monitoring Connectors Manager")," menu:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"install_epp",src:n(83390).Z,width:"644",height:"446"})))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"hosts"},"Hosts"),(0,r.kt)("p",null,"You can now add a new host based on the ",(0,r.kt)("strong",{parentName:"p"},"App-Monitoring-Mip-Restapi-custom"),' host template. The host macros marked hereafter as "mandatory" need to be configured:'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"MIPAPIPROTO"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Protocol used to connect to MIP API. Default: https")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"MIPAPIPORT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Port used to connect to MIP API. Default: 443")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"MIPAPIHOSTNAME"),(0,r.kt)("td",{parentName:"tr",align:"left"},"MIP Instance FQDN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"MIPAPIKEY"),(0,r.kt)("td",{parentName:"tr",align:"left"},"MIP API Key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"MIPAPIEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Any relevant extraoptions (proxy, http-backend, etc.)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"MIPAPITIMEOUT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Timeout to use during API requests")))),(0,r.kt)("p",null,"Set the 'Create service linked to template\" option to 'No' and save your configuration. "),(0,r.kt)("h3",{id:"services"},"Services"),(0,r.kt)("p",null,"A discovery rule is available to get all your scenarios and quickly configure them as Centreon services. Here is a step-by-step guide: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Go to "Configuration > Services" and click "Scan" in the Discovery sub menu')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Fill the Host box with the hostname configured in the previous section")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select 'App-Monitoring-Mip-Scenarios' in the rule drop-down list on the left")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click Scan to launch the discovery process")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Check the boxes associated to the scenario you want to monitor ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Save and then go to the 'Configuration > Pollers' menu to export your configuration"))))}f.isMDXComponent=!0},56765:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/mip-connector-architecture-37dfc53097491d8dbcece3d486beff42.png"},83390:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/mip-epp-install-cd3e254c88403319f3cecacb1c3b160f.png"}}]);