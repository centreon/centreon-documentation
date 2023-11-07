"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[39001],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(r),c=a,g=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},86406:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>m});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={id:"hardware-servers-sun-mgmtcards",title:"Sun MgmtCard"},p=void 0,u={unversionedId:"integrations/plugin-packs/procedures/hardware-servers-sun-mgmtcards",id:"integrations/plugin-packs/procedures/hardware-servers-sun-mgmtcards",title:"Sun MgmtCard",description:"Prerequisites",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-servers-sun-mgmtcards.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-servers-sun-mgmtcards",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/hardware-servers-sun-mgmtcards",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-servers-sun-mgmtcards.md",tags:[],version:"current",frontMatter:{id:"hardware-servers-sun-mgmtcards",title:"Sun MgmtCard"},sidebar:"pp",previous:{title:"Safenet Keysecure",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/hardware-device-safenet-keysecure-snmp"},next:{title:"Sun Mseries",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/hardware-servers-sun-mseries-snmp"}},s={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon Plugin",id:"centreon-plugin",level:3},{value:"Sun Server Hardware List",id:"sun-server-hardware-list",level:3},{value:"My Sun Hardware is not the list",id:"my-sun-hardware-is-not-the-list",level:3},{value:"Centreon Configuration",id:"centreon-configuration",level:2},{value:"Create a host using the appropriate template",id:"create-a-host-using-the-appropriate-template",level:3}],d={toc:m},c="wrapper";function g(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)(c,l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"This chapter describes the prerequisites installation needed by plugins to run."),(0,n.kt)("h3",{id:"centreon-plugin"},"Centreon Plugin"),(0,n.kt)("p",null,"Install this plugin on each needed poller:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"yum install centreon-plugin-Hardware-Servers-Sun-Mgmtcards\n")),(0,n.kt)("p",null,"The plugin has 3 kind of modes, it depends of the sun management card to monitor\n:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Telnet:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Dependency: Perl Module Net::Telnet (yum install perl-Net-Telnet.noarch)"),(0,n.kt)("li",{parentName:"ul"},"Host macros: 'TELNETUSERNAME', 'TELNETPASSWORD'"))),(0,n.kt)("li",{parentName:"ul"},"SSH:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Dependency: 'plink' command (no ssh key exchange needed)"),(0,n.kt)("li",{parentName:"ul"},"Host macros: 'SSHUSERNAME', 'SSHPASSWORD'"))),(0,n.kt)("li",{parentName:"ul"},"IPMI:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Dependency: 'ipmitool' command (yum install ipmitool)"),(0,n.kt)("li",{parentName:"ul"},"Host macros: 'IPMIUSERNAME', 'IPMIPASSWORD'")))),(0,n.kt)("h3",{id:"sun-server-hardware-list"},"Sun Server Hardware List"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Host Template"),(0,n.kt)("th",{parentName:"tr",align:null},"Method"),(0,n.kt)("th",{parentName:"tr",align:null},"Hardware"),(0,n.kt)("th",{parentName:"tr",align:null},"Mgmt Card"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"HW-Server-Sun-Alom4v-SSH"),(0,n.kt)("td",{parentName:"tr",align:null},"SSH"),(0,n.kt)("td",{parentName:"tr",align:null},"T1xxx, T2xxx"),(0,n.kt)("td",{parentName:"tr",align:null},"ALOM4v")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"HW-Server-Sun-Ilom-SSH"),(0,n.kt)("td",{parentName:"tr",align:null},"SSH"),(0,n.kt)("td",{parentName:"tr",align:null},"T3-x, T4-x, T5xxx"),(0,n.kt)("td",{parentName:"tr",align:null},"ILOM")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"HW-Server-Sun-Alom-TELNET"),(0,n.kt)("td",{parentName:"tr",align:null},"Telnet"),(0,n.kt)("td",{parentName:"tr",align:null},"v240, v245, v440,..."),(0,n.kt)("td",{parentName:"tr",align:null},"ALOM")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"HW-Server-Sun-Sf2xx-TELNET"),(0,n.kt)("td",{parentName:"tr",align:null},"Telnet"),(0,n.kt)("td",{parentName:"tr",align:null},"sf280"),(0,n.kt)("td",{parentName:"tr",align:null},"RSC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"HW-Server-Sun-Sfxxxx-TELNET"),(0,n.kt)("td",{parentName:"tr",align:null},"Telnet"),(0,n.kt)("td",{parentName:"tr",align:null},"sfXXXX (sf6900, ScpApp sf6800, sf3800,...)"),(0,n.kt)("td",{parentName:"tr",align:null},"RSC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"HW-Server-Sun-V4xx-TELNET"),(0,n.kt)("td",{parentName:"tr",align:null},"Telnet"),(0,n.kt)("td",{parentName:"tr",align:null},"v4xx (v490, v480)"),(0,n.kt)("td",{parentName:"tr",align:null},"RSC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"HW-Server-Sun-V8xx-TELNET"),(0,n.kt)("td",{parentName:"tr",align:null},"Telnet"),(0,n.kt)("td",{parentName:"tr",align:null},"v8xx (v890, v880)"),(0,n.kt)("td",{parentName:"tr",align:null},"RSC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"HW-Server-Sun-Ilom-IPMITOOL"),(0,n.kt)("td",{parentName:"tr",align:null},"Ipmi"),(0,n.kt)("td",{parentName:"tr",align:null},"x4100,x4600,..."),(0,n.kt)("td",{parentName:"tr",align:null},"ILOM")))),(0,n.kt)("h3",{id:"my-sun-hardware-is-not-the-list"},"My Sun Hardware is not the list"),(0,n.kt)("p",null,"Following hardware can be also monitored:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Hardware"),(0,n.kt)("th",{parentName:"tr",align:null},"Host template Service"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mseries"),(0,n.kt)("td",{parentName:"tr",align:null},"HW-Server-Sun-Mseries-SNMP Linked with the host template")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sf12k, sf15k, sf20k, sf25k"),(0,n.kt)("td",{parentName:"tr",align:null},"HW-Server-Sun-Sfxxk-PSSH Linked with the host template")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"v120, v1280 and others OS-Solaris-NRPE"),(0,n.kt)("td",{parentName:"tr",align:null},"OS-Solaris-Prtdiag-Status-NRPE-Custom")))),(0,n.kt)("h2",{id:"centreon-configuration"},"Centreon Configuration"),(0,n.kt)("h3",{id:"create-a-host-using-the-appropriate-template"},"Create a host using the appropriate template"),(0,n.kt)("p",null,"Go to ",(0,n.kt)("em",{parentName:"p"},"Configuration ",">"," Hosts")," and click ",(0,n.kt)("em",{parentName:"p"},"Add"),". Then, fill the form as shown by\nthe following table:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Host name"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Name of the host"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Alias"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Host description"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"IP"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Host IP Address"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Monitored from"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Monitoring Poller to use"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Host Multiple Templates"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Template provided by the Monitoring Connector")))),(0,n.kt)("p",null,"Click on the ",(0,n.kt)("em",{parentName:"p"},"Save")," button."))}g.isMDXComponent=!0}}]);