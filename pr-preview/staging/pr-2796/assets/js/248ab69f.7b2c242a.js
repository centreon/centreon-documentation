"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[20772],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>k});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var i=a.createContext({}),d=function(t){var e=a.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=d(t.components);return a.createElement(i.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),m=d(r),u=n,k=m["".concat(i,".").concat(u)]||m[u]||c[u]||l;return r?a.createElement(k,o(o({ref:e},s),{},{components:r})):a.createElement(k,o({ref:e},s))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=u;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[m]="string"==typeof t?t:n,o[1]=p;for(var d=2;d<l;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},91447:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>p,metadata:()=>d,toc:()=>m});r(67294);var a=r(3905);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})),t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}const p={id:"applications-rudder-restapi",title:"Rudder"},i=void 0,d={unversionedId:"integrations/plugin-packs/procedures/applications-rudder-restapi",id:"integrations/plugin-packs/procedures/applications-rudder-restapi",title:"Rudder",description:"Prerequisites",source:"@site/pp/integrations/plugin-packs/procedures/applications-rudder-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-rudder-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/applications-rudder-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-rudder-restapi.md",tags:[],version:"current",frontMatter:{id:"applications-rudder-restapi",title:"Rudder"},sidebar:"pp",previous:{title:"Rubrik Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/applications-rubrik-restapi"},next:{title:"Sahi Pro Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/applications-sahipro-restapi"}},s={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon Plugin",id:"centreon-plugin",level:3},{value:"API token",id:"api-token",level:3},{value:"Centreon Configuration",id:"centreon-configuration",level:2},{value:"Create hosts using the appropriate template",id:"create-hosts-using-the-appropriate-template",level:3},{value:"Rudder instance",id:"rudder-instance",level:4},{value:"Host",id:"host",level:4}],c={toc:m},u="wrapper";function k(t){var{components:e}=t,r=o(t,["components"]);return(0,a.kt)(u,l(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),a.forEach((function(e){n(t,e,r[e])}))}return t}({},c,r),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"centreon-plugin"},"Centreon Plugin"),(0,a.kt)("p",null,"Install this plugin on each needed poller:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yum install centreon-plugin-Applications-Rudder-Restapi\n")),(0,a.kt)("h3",{id:"api-token"},"API token"),(0,a.kt)("p",null,"A token needs to be created to acces the API."),(0,a.kt)("p",null,"To do so, follow the official documentation here :\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.rudder.io/api/#api-_-Authentication"},"https://docs.rudder.io/api/#api-_-Authentication"),"."),(0,a.kt)("h2",{id:"centreon-configuration"},"Centreon Configuration"),(0,a.kt)("h3",{id:"create-hosts-using-the-appropriate-template"},"Create hosts using the appropriate template"),(0,a.kt)("p",null,"The Rudder instance can be monitored as a host to get global statuses and\nstatistics."),(0,a.kt)("p",null,"A dedicated host template can also be added to any Centreon host to monitor its\nRudder compliance."),(0,a.kt)("h4",{id:"rudder-instance"},"Rudder instance"),(0,a.kt)("p",null,"Go to ",(0,a.kt)("em",{parentName:"p"},"Configuration ",">"," Hosts")," and click ",(0,a.kt)("em",{parentName:"p"},"Add"),". Then, fill the form as shown by\nthe following table:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Name of the Rudder instance"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Alias"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Description"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"IP Address / DNS"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"IP address of the Rudder instance (or localhost)"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Monitored from"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Poller used to monitor"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Templates"),(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Rudder-Restapi-custom")))),(0,a.kt)("p",null,"The following host macros should be set as shown:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"RUDDERAPIHOSTNAME"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Rudder instance hostname or IP address"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"RUDDERAPIURLPATH"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"URL path of the Rudder instance API"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"RUDDERAPIPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Port of the Rudder instance API"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"RUDDERAPIPROTO"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Protocol used by the Rudder API"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"RUDDERAPITOKEN"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Token used to access the Rudder API"))))),(0,a.kt)("p",null,"Check the ",(0,a.kt)("em",{parentName:"p"},"Create Services linked to the Template too")," box and click on the\n",(0,a.kt)("em",{parentName:"p"},"Save")," button."),(0,a.kt)("p",null,"The following services will be created:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Global-Compliance"),(0,a.kt)("li",{parentName:"ul"},"Nodes-Overall-Compliance"),(0,a.kt)("li",{parentName:"ul"},"Statistics")),(0,a.kt)("p",null,"The following rules are linked to this host template:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"App-Rudder-Restapi-Nodes"),(0,a.kt)("li",{parentName:"ul"},"App-Rudder-Restapi-Rules")),(0,a.kt)("h4",{id:"host"},"Host"),(0,a.kt)("p",null,"Go to ",(0,a.kt)("em",{parentName:"p"},"Configuration ",">"," Hosts")," and click ",(0,a.kt)("em",{parentName:"p"},"Add"),". Then, fill the form as shown by\nthe following table:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Hostname"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Alias"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Description"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"IP Address / DNS"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"IP address of the host"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Monitored from"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Poller used to monitor"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Templates"),(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Rudder-Node-Compliance-Restapi-custom")))),(0,a.kt)("p",null,"The following host macros should be set as shown:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"RUDDERAPIHOSTNAME"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Rudder instance hostname or IP address"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"RUDDERAPIURLPATH"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"URL path of the Rudder instance API"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"RUDDERAPIPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Port of the Rudder instance API"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"RUDDERAPIPROTO"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Protocol used by the Rudder API"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"RUDDERAPITOKEN"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Token used to access the Rudder API"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"RUDDERNODENAME"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Hostname (or name as registered in Rudder)"))))),(0,a.kt)("p",null,"Check the ",(0,a.kt)("em",{parentName:"p"},"Create Services linked to the Template too")," box and click on the\n",(0,a.kt)("em",{parentName:"p"},"Save")," button."),(0,a.kt)("p",null,"The following service will be created:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Node-Compliance")))}k.isMDXComponent=!0}}]);