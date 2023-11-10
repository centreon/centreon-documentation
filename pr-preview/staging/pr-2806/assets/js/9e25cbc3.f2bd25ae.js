"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[61510],{75460:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>k,contentTitle:()=>m,default:()=>N,frontMatter:()=>s,metadata:()=>c,toc:()=>d});n(67294);var a=n(3905),r=n(51715),l=n(7626);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const s={id:"applications-monitoring-centreon-central",title:"Centreon Central"},m=void 0,c={unversionedId:"integrations/plugin-packs/procedures/applications-monitoring-centreon-central",id:"integrations/plugin-packs/procedures/applications-monitoring-centreon-central",title:"Centreon Central",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-central.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-monitoring-centreon-central",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-central",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-central.md",tags:[],version:"current",frontMatter:{id:"applications-monitoring-centreon-central",title:"Centreon Central"},sidebar:"pp",previous:{title:"Parity Ethpoller API",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/blockchain-parity-ethpoller-restapi"},next:{title:"Centreon Database",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-database"}},k={},d=[{value:"Overview",id:"overview",level:2},{value:"Pack Assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"SNMP",id:"snmp",level:3},{value:"SSH key exchange",id:"ssh-key-exchange",level:3},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],g={toc:d},u="wrapper";function N(t){var{components:e}=t,n=i(t,["components"]);return(0,a.kt)(u,p(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){o(t,e,n[e])}))}return t}({},g,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The Centreon Central Monitoring Connector will help you set up monitoring for your Centreon Central server. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The best practice is to have the central server monitored by a poller if you have one. If not, you will need to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname=''")," option to the host's ",(0,a.kt)("inlineCode",{parentName:"p"},"EXTRAOPTIONS")," macro to avoid host key verification issues.")),(0,a.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,a.kt)("h3",{id:"templates"},"Templates"),(0,a.kt)("p",null,"The Centreon Monitoring Connector Centreon Central brings a host template:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"App-Monitoring-Centreon-Central-custom")),(0,a.kt)("p",null,"It brings the following Service Templates: "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Service Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Broker-Stats"),(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Centreon-Broker-Stats-Central"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Check Centreon Broker processes statistics"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"proc-broker-rrd"),(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Centreon-Process-broker-rrd"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Check Broker RRD process"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"proc-broker-sql"),(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Centreon-Process-broker-sql"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Check Broker SQL process"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"proc-centcore"),(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Centreon-Process-centcore"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Check centcore process"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"proc-centengine"),(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Centreon-Process-centengine"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Check centreon-engine process"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"proc-centreontrapd"),(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Centreon-Process-centreontrapd"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Check centreontrapd process"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"proc-crond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Centreon-Process-crond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Check crond process"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"proc-gorgoned"),(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Centreon-Process-gorgoned"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Check gorgoned process"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"proc-httpd"),(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Centreon-Process-httpd"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Check Apache process"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"proc-ntpd"),(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Centreon-Process-ntpd"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Check NTP process"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"proc-snmptrapd"),(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Centreon-Process-snmptrapd"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Check snmptrapd process"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"proc-sshd"),(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Centreon-Process-sshd"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Check sshd process"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,a.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Broker-Stats",label:"Broker-Stats",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"endpoint"),"#queued_events"),(0,a.kt)("td",{parentName:"tr",align:"left"},"events")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"endpoint"),"#speed_events"),(0,a.kt)("td",{parentName:"tr",align:"left"},"events/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"endpoint"),"#unacknowledged_events"),(0,a.kt)("td",{parentName:"tr",align:"left"},"events"))))),(0,a.kt)(l.Z,{value:"proc-broker-rrd",label:"proc-broker-rrd",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nbproc"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,a.kt)(l.Z,{value:"proc-broker-sql",label:"proc-broker-sql",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nbproc"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,a.kt)(l.Z,{value:"proc-centcore",label:"proc-centcore",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nbproc"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,a.kt)(l.Z,{value:"proc-centengine",label:"proc-centengine",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nbproc"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,a.kt)(l.Z,{value:"proc-centreontrapd",label:"proc-centreontrapd",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nbproc"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,a.kt)(l.Z,{value:"proc-crond",label:"proc-crond",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nbproc"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,a.kt)(l.Z,{value:"proc-gorgoned",label:"proc-gorgoned",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nbproc"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,a.kt)(l.Z,{value:"proc-httpd",label:"proc-httpd",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nbproc"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,a.kt)(l.Z,{value:"proc-ntpd",label:"proc-ntpd",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nbproc"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,a.kt)(l.Z,{value:"proc-snmptrapd",label:"proc-snmptrapd",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nbproc"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,a.kt)(l.Z,{value:"proc-sshd",label:"proc-sshd",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nbproc"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"snmp"},"SNMP"),(0,a.kt)("p",null,"SNMP must be configured on each poller being monitored. You can refer to this ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/operatingsystems-linux-snmp#prerequisites"},"documentation")," describing how to set up a quick SNMP configuration."),(0,a.kt)("h3",{id:"ssh-key-exchange"},"SSH key exchange"),(0,a.kt)("p",null,"The checks related to ",(0,a.kt)("strong",{parentName:"p"},"Broker-Stats")," service should be done from a poller and it is done through SSH. If you only have a central server, then checks will be initiated and performed on and by the central server itself. You can skip below steps for SSH key exchange if the central server monitors itself. "),(0,a.kt)("p",null,"The poller monitoring the central will have to log on through SSH as ",(0,a.kt)("strong",{parentName:"p"},"centreon")," user on the central server while being ",(0,a.kt)("strong",{parentName:"p"},"centreon-engine"),". "),(0,a.kt)("p",null,"Follow below steps to exchange the SSH key:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the ",(0,a.kt)("strong",{parentName:"li"},"central server"),", set a password for the ",(0,a.kt)("strong",{parentName:"li"},"centreon")," user: ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"passwd centreon\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"From the poller server, create and copy the new ",(0,a.kt)("strong",{parentName:"li"},"centreon-engine's SSH key")," on the central: ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"su - centreon-engine\nssh-keygen -t ed25519 -a 100\nssh-copy-id -i ~/.ssh/id_ed25519.pub centreon@<IP_CENTRAL>\n")),(0,a.kt)("p",null,"You will then have to set the check to be performed remotely. To do so, after applying the Host template, you will have to set the EXTRAOPTIONS macro in the ",(0,a.kt)("strong",{parentName:"p"},"Broker-Stats")," service."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Macro name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"--verbose --remote --ssh-option='-l=centreon'")))),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on a poller or directly on the central server if it monitors itself:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Monitoring-Centreon-Central centreon-plugin-Operatingsystems-Linux-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("strong",{parentName:"li"},"Centreon Central")," Centreon Monitoring Connector on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page."))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on a poller or directly on the central server if it monitors itself:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Monitoring-Centreon-Central centreon-plugin-Operatingsystems-Linux-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install the ",(0,a.kt)("strong",{parentName:"li"},"Centreon Central")," Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-monitoring-centreon-central\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("strong",{parentName:"li"},"Centreon Central")," Centreon Monitoring Connector on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page.")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"host"},"Host"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Log into Centreon and add a new Host through ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,a.kt)("li",{parentName:"ul"},"Fill the ",(0,a.kt)("strong",{parentName:"li"},"Name"),", ",(0,a.kt)("strong",{parentName:"li"},"Alias")," & ",(0,a.kt)("strong",{parentName:"li"},"IP Address/DNS")," fields according to your ",(0,a.kt)("em",{parentName:"li"},"Centreon Central")," server settings."),(0,a.kt)("li",{parentName:"ul"},"Select the ",(0,a.kt)("em",{parentName:"li"},"App-Monitoring-Centreon-Central-custom")," template to apply to the host."),(0,a.kt)("li",{parentName:"ul"},"Once the template is applied, fill in the corresponding macros. Some macros are mandatory.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"MODULESTATSFILE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"/var/lib/centreon-engine/central-module-master-stats.json")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"RRDSTATSFILE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"/var/lib/centreon-broker/central-rrd-master-stats.json")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command","_","line (eg. a --verbose flag)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SQLSTATSFILE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"/var/lib/centreon-broker/central-broker-master-stats.json")))),(0,a.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for"},"How to check in the CLI that the configuration is OK and what are the main options for?"),(0,a.kt)("p",null,"Once the plugin is installed, log into your Centreon Poller CLI using the\n",(0,a.kt)("strong",{parentName:"p"},"centreon-engine")," user account (",(0,a.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") and test the Plugin by\nrunning the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_linux_snmp.pl \\\n    --plugin=os::linux::snmp::plugin \\\n    --mode=processcount \\\n    --hostname=10.0.0.1 \\\n    --snmp-version='2c' \\\n    --snmp-community='my-snmp-community' \\\n    --process-name='sshd' \\\n    --process-path='' \\\n    --process-args='' \\\n    --regexp-name \\\n    --regexp-path \\\n    --regexp-args \\\n    --warning='' \\\n    --critical='' \\\n    --use-new-perfdata \n")),(0,a.kt)("p",null,"The expected command output is shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Number of current processes running: 1 | 'nbproc'=1;;;0; \n")),(0,a.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_linux_snmp.pl \\\n    --plugin=os::linux::snmp::plugin \\\n    --mode=processcount \\\n    --help\n")),(0,a.kt)("p",null,"All available plugin modes can be displayed by adding the\n",(0,a.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_linux_snmp.pl \\\n    --plugin=os::linux::snmp::plugin \\\n    --list-mode\n")),(0,a.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"Please find the ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"troubleshooting documentation")," for Centreon Plugins typical issues."))}N.isMDXComponent=!0}}]);