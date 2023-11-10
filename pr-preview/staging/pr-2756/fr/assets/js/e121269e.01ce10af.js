"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[87619],{38132:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>u});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={id:"applications-openweathermap-restapi",title:"OpenWeatherMap"},l=void 0,s={unversionedId:"integrations/plugin-packs/procedures/applications-openweathermap-restapi",id:"integrations/plugin-packs/procedures/applications-openweathermap-restapi",title:"OpenWeatherMap",description:"Prerequisites",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-openweathermap-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-openweathermap-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-openweathermap-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-openweathermap-restapi.md",tags:[],version:"current",frontMatter:{id:"applications-openweathermap-restapi",title:"OpenWeatherMap"},sidebar:"pp",previous:{title:"OpenVPN OMI",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-openvpn-omi"},next:{title:"Oracle GoldenGate SSH",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-oracle-goldengate-ssh"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon Plugin",id:"centreon-plugin",level:3},{value:"API token",id:"api-token",level:3},{value:"Centreon Configuration",id:"centreon-configuration",level:2},{value:"Create a host using the appropriate template",id:"create-a-host-using-the-appropriate-template",level:3},{value:"Service Macro Configuration",id:"service-macro-configuration",level:3}],d={toc:u},m="wrapper";function k(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(m,p(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"centreon-plugin"},"Centreon Plugin"),(0,r.kt)("p",null,"Install this plugin on each needed poller:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yum install centreon-plugin-Applications-Openweathermap-Restapi\n")),(0,r.kt)("h3",{id:"api-token"},"API token"),(0,r.kt)("p",null,"A token is mandatory to access the API. More information can be found on the\nofficial OpenWeatherMap website : ",(0,r.kt)("a",{parentName:"p",href:"https://openweathermap.org/api"},"https://openweathermap.org/api"),"."),(0,r.kt)("h2",{id:"centreon-configuration"},"Centreon Configuration"),(0,r.kt)("h3",{id:"create-a-host-using-the-appropriate-template"},"Create a host using the appropriate template"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("em",{parentName:"p"},"Configuration ",">"," Hosts")," and click ",(0,r.kt)("em",{parentName:"p"},"Add"),". Then, fill the form as shown by\nthe following table:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Host name"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Name of the host"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Alias"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Host description"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"IP address / DNS"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"api.openweathermap.org"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Monitored from"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Monitoring Poller to use"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Host Multiple Templates"),(0,r.kt)("td",{parentName:"tr",align:"left"},"App-OpenWeatherMap-Restapi-custom")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"APITOKEN"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Token from OpenWeatherMap subscription"))))),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("em",{parentName:"p"},"Save")," button."),(0,r.kt)("h3",{id:"service-macro-configuration"},"Service Macro Configuration"),(0,r.kt)("p",null,"The following macros must be configured on the service:"),(0,r.kt)("p",null,"Macro"),(0,r.kt)("p",null,"Description"),(0,r.kt)("p",null,"CITYNAME"),(0,r.kt)("p",null,"City name (e.g London or ISO 3166 code like London,uk)"),(0,r.kt)("p",null,"WARNINGTEMPERATURE"),(0,r.kt)("p",null,"Set warning threshold for temperature (in \xc2\xb0C)"),(0,r.kt)("p",null,"CRITICALTEMPERATURE"),(0,r.kt)("p",null,"Set critical threshold for temperature (in \xc2\xb0C)"),(0,r.kt)("p",null,"WARNINGHUMIDITY"),(0,r.kt)("p",null,"Set warning threshold for humidity (in %)"),(0,r.kt)("p",null,"CRITICALHUMIDITY"),(0,r.kt)("p",null,"Set critical threshold for humidity (in %)"),(0,r.kt)("p",null,"WARNINGCLOUDS"),(0,r.kt)("p",null,"Set warning threshold for clouds (in %)"),(0,r.kt)("p",null,"CRITICALCLOUDS"),(0,r.kt)("p",null,"Set critical threshold for clouds (in %)"),(0,r.kt)("p",null,"WARNINGWIND"),(0,r.kt)("p",null,"Set warning threshold for wind (in m/s)"),(0,r.kt)("p",null,"CRITICALWIND"),(0,r.kt)("p",null,"Set critical threshold for wind (in m/s)"),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("em",{parentName:"p"},"Save")," button."))}k.isMDXComponent=!0}}]);