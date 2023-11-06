"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[99778],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},59290:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>p,metadata:()=>s,toc:()=>u});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const p={id:"applications-voip-xivo",title:"XiVO VoIP Server"},l=void 0,s={unversionedId:"integrations/plugin-packs/procedures/applications-voip-xivo",id:"integrations/plugin-packs/procedures/applications-voip-xivo",title:"XiVO VoIP Server",description:"Prerequisites",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-voip-xivo.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-voip-xivo",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/applications-voip-xivo",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-voip-xivo.md",tags:[],version:"current",frontMatter:{id:"applications-voip-xivo",title:"XiVO VoIP Server"},sidebar:"pp",previous:{title:"Sonus SBC SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/network-sonus-sbc-snmp"},next:{title:"Alpha UPS SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/hardware-ups-alpha-snmp"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"Centreon Plugin",id:"centreon-plugin",level:3},{value:"Remote server",id:"remote-server",level:3},{value:"Centreon Configuration",id:"centreon-configuration",level:2},{value:"Create a XiVO server",id:"create-a-xivo-server",level:3}],d={toc:u},m="wrapper";function g(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)(m,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"This chapter describes the prerequisites installation needed by plugins to run."),(0,n.kt)("h3",{id:"dependencies"},"Dependencies"),(0,n.kt)("p",null,'This Monitoring Connector depends on "NTP Server" "HTTP Server" and "Asterisk VoIP\nServer SNMP", so you might have to install these packages before being able to\nadd this Monitoring Connector:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"yum install centreon-pack-applications-protocol-ntp centreon-pack-applications-protocol-http centreon-pack-applications-voip-asterisk-snmp\n")),(0,n.kt)("h3",{id:"centreon-plugin"},"Centreon Plugin"),(0,n.kt)("p",null,"Install this plugin on each needed poller:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"yum install centreon-plugin-Operatingsystems-Linux-Snmp centreon-plugin-Applications-Protocol-Ntp centreon-plugin-Applications-Voip-Asterisk-Snmp centreon-plugin-Applications-Protocol-Http\n")),(0,n.kt)("h3",{id:"remote-server"},"Remote server"),(0,n.kt)("p",null,"The remote server must have a XiVO Appliance running and available."),(0,n.kt)("h2",{id:"centreon-configuration"},"Centreon Configuration"),(0,n.kt)("h3",{id:"create-a-xivo-server"},"Create a XiVO server"),(0,n.kt)("p",null,"Go to ",(0,n.kt)("em",{parentName:"p"},"Configuration ",">"," Hosts")," and click ",(0,n.kt)("em",{parentName:"p"},"Add"),". Then, fill the form as shown by\nthe following table:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Host name"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Name of the host"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Alias"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Host description"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"IP"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Host IP Address"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Monitored from"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Monitoring Poller to use"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Host Multiple Templates"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-VoIP-XiVO-custom")))),(0,n.kt)("p",null,"Click on the ",(0,n.kt)("em",{parentName:"p"},"Save")," button."),(0,n.kt)("p",null,"This service was automatically created for this host:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Service"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"XiVO-process-nginx"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Monitor nginx processus")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"XiVO-process-postgres"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Monitor postgres processus")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"XiVO-process-xivo-agentd"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Monitor xivo-agentd processus")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"XiVO-process-xivo-agid"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Monitor xivo-agid processus")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"XiVO-process-xivo-amid"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Monitor xivo-amid processus")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"XiVO-process-xivo-confgend"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Monitor xivo-confgend processus")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"XiVO-process-xivo-ctid"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Monitor xivo-ctid processus")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Optionnal Service"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"XiVO-process-xivo-call-logd"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Monitor xivo-call-logd processus")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"XiVO-process-xivo-confd"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Monitor xivo-confd processus")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"XiVO-process-xivo-dxtora"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Monitor xivo-dxtora processus")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"XiVO-process-xivo-provd"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Monitor xivo-provd processus")))))}g.isMDXComponent=!0}}]);