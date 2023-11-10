"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[60576],{76803:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>d});a(67294);var n=a(3905);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={id:"applications-databases-sybase",title:"Sybase"},s=void 0,p={unversionedId:"integrations/plugin-packs/procedures/applications-databases-sybase",id:"integrations/plugin-packs/procedures/applications-databases-sybase",title:"Sybase",description:"Prerequisites",source:"@site/pp/integrations/plugin-packs/procedures/applications-databases-sybase.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-databases-sybase",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/applications-databases-sybase",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-databases-sybase.md",tags:[],version:"current",frontMatter:{id:"applications-databases-sybase",title:"Sybase"},sidebar:"pp",previous:{title:"RRDtool",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/applications-databases-rrdtool"},next:{title:"Warp10 Sensision",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/applications-databases-warp10-sensision"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon Plugin",id:"centreon-plugin",level:3},{value:"Username",id:"username",level:2},{value:"RPM",id:"rpm",level:3},{value:"Centreon Configuration",id:"centreon-configuration",level:2},{value:"Create a new Sybase database server",id:"create-a-new-sybase-database-server",level:3},{value:"Host Macro Configuration",id:"host-macro-configuration",level:3}],u={toc:d},m="wrapper";function k(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)(m,l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},u,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("h3",{id:"centreon-plugin"},"Centreon Plugin"),(0,n.kt)("p",null,"Install this plugin on each needed poller:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"yum install centreon-plugin-Applications-Databases-Sybase\n")),(0,n.kt)("h2",{id:"username"},"Username"),(0,n.kt)("p",null,"The username string should not be longer than 32 chararacters. Username must be\nin the following form: ","[","Servername|Domainname","]","\\","Username"),(0,n.kt)("h3",{id:"rpm"},"RPM"),(0,n.kt)("p",null,"In order to use this template, the following RPM are needed:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"freetds-0.82"),(0,n.kt)("li",{parentName:"ul"},"perl-DBD-Sybase-1.10-1"),(0,n.kt)("li",{parentName:"ul"},"unixODBC-2.2.11-10"),(0,n.kt)("li",{parentName:"ul"},"unixODBC-devel-2.2.11-10")),(0,n.kt)("h2",{id:"centreon-configuration"},"Centreon Configuration"),(0,n.kt)("h3",{id:"create-a-new-sybase-database-server"},"Create a new Sybase database server"),(0,n.kt)("p",null,'Go to "Configuration ',">",' Hosts" and click "Add". Then, fill the form as shown by\nthe following table :'),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Host name"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Name of the host"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Alias"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Host description"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"IP"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Host IP Address"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Monitored from"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Monitoring Poller to use"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Host Multiple Templates"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-DB-Sybase-custom")))),(0,n.kt)("p",null,'Click "Save" button.'),(0,n.kt)("p",null,"Those services were automatically created for this host:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Service"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Blocked-Processes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check blocked processes on the server.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Connection-Time"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check the connection time to the server.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Database-Size"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check Size space of databases on the server.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Connected-User"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check connected user.")))),(0,n.kt)("h3",{id:"host-macro-configuration"},"Host Macro Configuration"),(0,n.kt)("p",null,"The following macros must be configured on host:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SYBASEUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the Sybase user"),(0,n.kt)("td",{parentName:"tr",align:"left"},"USERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"root")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SYBASEPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the Sybase password"),(0,n.kt)("td",{parentName:"tr",align:"left"},"PASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"p@ssw0rd")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SYBASEPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Port Of the Sybase Database"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2638"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2638")))))}k.isMDXComponent=!0}}]);