"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[40873],{95675:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>p,metadata:()=>s,toc:()=>u});r(67294);var a=r(3905);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})),t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}const p={id:"applications-vmware-vcsa-restapi",title:"VMware VCSA RestAPI"},l=void 0,s={unversionedId:"integrations/plugin-packs/procedures/applications-vmware-vcsa-restapi",id:"integrations/plugin-packs/procedures/applications-vmware-vcsa-restapi",title:"VMware VCSA RestAPI",description:"Prerequisites",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-vmware-vcsa-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-vmware-vcsa-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/applications-vmware-vcsa-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-vmware-vcsa-restapi.md",tags:[],version:"current",frontMatter:{id:"applications-vmware-vcsa-restapi",title:"VMware VCSA RestAPI"},sidebar:"pp",previous:{title:"VerneMQ Restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/applications-vernemq-restapi"},next:{title:"VMware VCSA SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/applications-vmware-vcsa-snmp"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon Plugin",id:"centreon-plugin",level:3},{value:"Centreon Configuration",id:"centreon-configuration",level:2},{value:"Create a host using the appropriate template",id:"create-a-host-using-the-appropriate-template",level:3},{value:"Host Macro Configuration",id:"host-macro-configuration",level:3}],m={toc:u},d="wrapper";function g(t){var{components:e}=t,r=o(t,["components"]);return(0,a.kt)(d,i(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),a.forEach((function(e){n(t,e,r[e])}))}return t}({},m,r),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"centreon-plugin"},"Centreon Plugin"),(0,a.kt)("p",null,"Install this plugin on each needed poller:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yum install centreon-plugin-Applications-Vmware-Vcsa-Restapi\n")),(0,a.kt)("h2",{id:"centreon-configuration"},"Centreon Configuration"),(0,a.kt)("h3",{id:"create-a-host-using-the-appropriate-template"},"Create a host using the appropriate template"),(0,a.kt)("p",null,"Go to ",(0,a.kt)("em",{parentName:"p"},"Configuration ",">"," Hosts")," and click ",(0,a.kt)("em",{parentName:"p"},"Add"),". Then, fill the form as shown by\nthe following table:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Host name"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Name of the host"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Alias"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Host description"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"IP"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Host IP Address"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Monitored from"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Monitoring Poller to use"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Host Multiple Templates"),(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Vmware-Vcsa-Restapi-custom")))),(0,a.kt)("p",null,"Click on the ",(0,a.kt)("em",{parentName:"p"},"Save")," button."),(0,a.kt)("h3",{id:"host-macro-configuration"},"Host Macro Configuration"),(0,a.kt)("p",null,"The following macros must be configured on host:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"VCSAAPIPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Port used by the API"),(0,a.kt)("td",{parentName:"tr",align:"left"},"443")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"VCSAAPIPROTO"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Protocol used by the API"),(0,a.kt)("td",{parentName:"tr",align:"left"},"https")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"VCSAAPIUSERNAME"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Username to access API"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"VCSAAPIPASSWORD"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Password to access API"),(0,a.kt)("td",{parentName:"tr",align:"left"})))),(0,a.kt)("p",null,"Click on the ",(0,a.kt)("em",{parentName:"p"},"Save")," button."))}g.isMDXComponent=!0}}]);