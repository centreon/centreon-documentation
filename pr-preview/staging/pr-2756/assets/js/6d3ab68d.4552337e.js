"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[15684],{79221:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>g,toc:()=>d});n(67294);var r=n(3905),a=n(51715),o=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"applications-monitoring-centreon-poller",title:"Centreon Poller"},c=void 0,g={unversionedId:"integrations/plugin-packs/procedures/applications-monitoring-centreon-poller",id:"integrations/plugin-packs/procedures/applications-monitoring-centreon-poller",title:"Centreon Poller",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-poller.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-monitoring-centreon-poller",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-poller",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-poller.md",tags:[],version:"current",frontMatter:{id:"applications-monitoring-centreon-poller",title:"Centreon Poller"},sidebar:"pp",previous:{title:"Centreon MBI",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-mbi"},next:{title:"Centreon SQL Metrics",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-sql-metrics"}},m={},d=[{value:"Overview",id:"overview",level:2},{value:"Pack Assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"SNMP",id:"snmp",level:3},{value:"SSH key exchange",id:"ssh-key-exchange",level:3},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],u={toc:d},k="wrapper";function h(e){var{components:t}=e,n=p(e,["components"]);return(0,r.kt)(k,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Centreon Poller Monitoring Connector will help you set up monitoring for your pollers. To be the most accurate, the pollers should be monitored by the Central server. "),(0,r.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,r.kt)("h3",{id:"templates"},"Templates"),(0,r.kt)("p",null,"The Centreon Monitoring Connector Centreon Poller brings a host template:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"App-Monitoring-Centreon-Poller-custom")),(0,r.kt)("p",null,"It brings the following Service Templates:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Service Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Broker-Stats"),(0,r.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Centreon-Broker-Stats-Poller"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check Centreon Broker processes statistics."),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"proc-centengine"),(0,r.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Centreon-Process-centengine"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check centengine process."),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"proc-gorgoned"),(0,r.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Centreon-Process-gorgoned"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check gorgoned process."),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"proc-ntpd"),(0,r.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Centreon-Process-ntpd"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check NTP process."),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"proc-sshd"),(0,r.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Centreon-Process-sshd"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check sshd process."),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,r.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Broker-Stats",label:"Broker-Stats",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"queued-events"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"speed-events"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"unacknowledged-events"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"))))),(0,r.kt)(o.Z,{value:"proc-centegine",label:"proc-centegine",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"))))),(0,r.kt)(o.Z,{value:"proc-gorgoned",label:"proc-gorgoned",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"))))),(0,r.kt)(o.Z,{value:"proc-ntpd",label:"proc-ntpd",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"))))),(0,r.kt)(o.Z,{value:"proc-sshd",label:"proc-sshd",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string")))))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"snmp"},"SNMP"),(0,r.kt)("p",null,"SNMP must be configured on each poller being monitored. You can refer to this ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/operatingsystems-linux-snmp#prerequisites"},"documentation")," describing how to set up a quick SNMP configuration."),(0,r.kt)("h3",{id:"ssh-key-exchange"},"SSH key exchange"),(0,r.kt)("p",null,"One of the check coming along with the pack is performed through SSH, the Central server should be able to connect to each poller being monitored."),(0,r.kt)("p",null,"The Central server performs its checks while being ",(0,r.kt)("strong",{parentName:"p"},"centreon-engine")," user, and will log to the pollers as ",(0,r.kt)("strong",{parentName:"p"},"centreon")," user."),(0,r.kt)("p",null,"Follow below steps to exchange the SSH key:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the poller being monitored by the Central server, set a password for the ",(0,r.kt)("strong",{parentName:"li"},"centreon")," user: ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"passwd centreon\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"From the Central server, create and copy the new ",(0,r.kt)("strong",{parentName:"li"},"centreon-user's SSH key")," on the poller: ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"su - centreon-engine\nssh-keygen -t ed25519 -a 100\nssh-copy-id -i ~/.ssh/id_ed25519.pub centreon@<IP_POLLER>\n")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Centreon package on the Central Server:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Monitoring-Centreon-Poller centreon-plugin-Operatingsystems-Linux-Snmp\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,r.kt)("strong",{parentName:"li"},"Centreon Poller")," Centreon Monitoring Connector on the ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page."))),(0,r.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Centreon package on the Central Server:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Monitoring-Centreon-Poller centreon-plugin-Operatingsystems-Linux-Snmp\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the ",(0,r.kt)("strong",{parentName:"p"},"Centreon Poller")," Centreon Monitoring Connector RPM on the Centreon Central server:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-monitoring-centreon-poller\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the Centreon Web interface, install the ",(0,r.kt)("strong",{parentName:"p"},"Centreon Poller")," Centreon Monitoring Connector on the ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Monitoring Connectors Manager")," page."))))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"host"},"Host"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Log into Centreon and add a new Host through ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,r.kt)("li",{parentName:"ul"},"Fill the ",(0,r.kt)("strong",{parentName:"li"},"Name"),", ",(0,r.kt)("strong",{parentName:"li"},"Alias")," & ",(0,r.kt)("strong",{parentName:"li"},"IP Address/DNS")," fields according to your ",(0,r.kt)("em",{parentName:"li"},"Centreon Poller")," server settings."),(0,r.kt)("li",{parentName:"ul"},"Select the ",(0,r.kt)("em",{parentName:"li"},"App-Monitoring-Centreon-Poller-custom")," template to apply to the Host."),(0,r.kt)("li",{parentName:"ul"},"Once the template is applied, fill in the corresponding macros. Some macros are mandatory.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"MODULESTATSFILE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(Default: '/var/lib/centreon-engine/*-module-stats.json')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command","_","line (eg. a --verbose flag)")))),(0,r.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for"},"How to check in the CLI that the configuration is OK and what are the main options for?"),(0,r.kt)("p",null,"Once the plugin is installed, log into your Centreon Central Server CLI using the ",(0,r.kt)("strong",{parentName:"p"},"centreon-engine")," user account (",(0,r.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") and test the Plugin by running the following\ncommand:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_centreon_central.pl \\\n    --plugin=apps::centreon::local::plugin \\\n    --hostname=10.0.0.1 \\\n    --mode=broker-stats \\\n    --broker-stats-file='/var/lib/centreon-engine/*-module-stats.json' \\\n    --filter-name='' \\\n    --warning-speed-events='' \\\n    --critical-speed-events='' \\\n    --warning-queued-events='' \\\n    --critical-queued-events='' \\\n    --warning-unacknowledged-events='' \\\n    --critical-unacknowledged-events='' \\\n    --warning-status='' \\\n    --critical-status='%{type} eq \"output\" and %{queue_file_enabled} =~ /true/i' \\\n    --verbose \\\n    --remote \\\n    --ssh-option='-l=centreon'\n")),(0,r.kt)("p",null,"The expected command output is shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OK:  Speed Events: %s/s Queued Events: %s Unacknowledged Events: %s | \n")),(0,r.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_centreon_central.pl \\\n    --plugin=apps::centreon::local::plugin \\\n    --hostname=10.0.0.1 \\\n    --help\n")),(0,r.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,r.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_centreon_central.pl \\\n    --plugin=apps::centreon::local::plugin \\\n    --list-mode\n")),(0,r.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"Please find all the troubleshooting documentation for the Centreon Plugins in the ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"dedicated page"),"."))}h.isMDXComponent=!0}}]);