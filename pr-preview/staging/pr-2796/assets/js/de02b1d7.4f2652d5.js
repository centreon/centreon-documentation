"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[26530],{54829:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>k,frontMatter:()=>p,metadata:()=>u,toc:()=>m});n(67294);var o=n(3905),a=n(51715),r=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={id:"applications-protocol-ssh",title:"Protocol SSH"},c=void 0,u={unversionedId:"integrations/plugin-packs/procedures/applications-protocol-ssh",id:"integrations/plugin-packs/procedures/applications-protocol-ssh",title:"Protocol SSH",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/applications-protocol-ssh.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-protocol-ssh",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/applications-protocol-ssh",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-protocol-ssh.md",tags:[],version:"current",frontMatter:{id:"applications-protocol-ssh",title:"Protocol SSH"},sidebar:"pp",previous:{title:"Protocol SFTP",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/applications-protocol-sftp"},next:{title:"Protocol UDP",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/applications-protocol-udp"}},d={},m=[{value:"Overview",id:"overview",level:2},{value:"Pack assets",id:"pack-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for ?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"<code>UNKNOWN: Command error: Host key verification failed.</code>",id:"unknown-command-error-host-key-verification-failed",level:4}],g={toc:m},h="wrapper";function k(e){var{components:t}=e,n=s(e,["components"]);return(0,o.kt)(h,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){i(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The Secure Shell Protocol (SSH) is a secure network protocol for remote actions\nfrom one computer to another."),(0,o.kt)("p",null,"The Centreon Monitoring Connector ",(0,o.kt)("em",{parentName:"p"},"Protocol SSH")," aims to collect the status and response\ntime of a SSH server login."),(0,o.kt)("h2",{id:"pack-assets"},"Pack assets"),(0,o.kt)("h3",{id:"monitored-objects"},"Monitored objects"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SSH server")),(0,o.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,o.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"Ssh-Login",label:"Ssh-Login",mdxType:"TabItem"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"status"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Login status"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"response.time.seconds"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Login response time"),(0,o.kt)("td",{parentName:"tr",align:"left"},"seconds")))))),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,'To use this pack, the SSH service must be properly configured on your server and\nthe mandatory Host Macros must be properly configured. More info in the\n"Configuration" section ',(0,o.kt)("a",{parentName:"p",href:"#Host"},"here"),"."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor a SSH server:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Protocol-Ssh\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,o.kt)("em",{parentName:"li"},"Protocol SSH")," Centreon Monitoring Connector on the ",(0,o.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page"))),(0,o.kt)(r.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor a SSH server:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Protocol-Ssh\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Install the ",(0,o.kt)("em",{parentName:"li"},"Protocol SSH")," Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-protocol-ssh\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,o.kt)("em",{parentName:"li"},"Protocol SSH")," Centreon Monitoring Connector on the ",(0,o.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page")))),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"host"},"Host"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Log into Centreon and add a new Host through "Configuration > Hosts".'),(0,o.kt)("li",{parentName:"ul"},'Fill the "Name", "Alias" & "IP Address / DNS" fields according to your SSH server settings'),(0,o.kt)("li",{parentName:"ul"},"Select the ",(0,o.kt)("em",{parentName:"li"},"Applications-Protocol-Ssh-custom")," template to apply to the Host"),(0,o.kt)("li",{parentName:"ul"},"Once the template applied, some Macros marked as 'Mandatory' hereafter have to be configured.")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"X"),(0,o.kt)("td",{parentName:"tr",align:"left"},"PROTOCOLSSHPASSWORD"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"X"),(0,o.kt)("td",{parentName:"tr",align:"left"},"PROTOCOLSSHUSERNAME"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command","_","line (eg. a --verbose flag)")))),(0,o.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-"},"How to check in the CLI that the configuration is OK and what are the main options for ?"),(0,o.kt)("p",null,"Once the plugin installed, log into your Centreon Poller CLI using the\n",(0,o.kt)("em",{parentName:"p"},"centreon-engine")," user account and test the Plugin by running the following\ncommand:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," /usr/lib/centreon/plugins//centreon_protocol_ssh.pl  \\\n    --plugin=apps::protocols::ssh::plugin  \\\n    --mode=login  \\\n    --hostname=10.0.0.1   \\\n    --ssh-username=''  \\\n    --ssh-password=''  \\\n    --warning-status=''  \\\n    --critical-status='%{message} !~ /authentification succeeded/i'  \\\n    --warning-time='2'  \\\n    --critical-time='3'  \\\n    --use-new-perfdata \n")),(0,o.kt)("p",null," Expected command output is shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"OK : authentification succeeded | 'response.time.seconds'=1s;;;; \n")),(0,o.kt)("p",null,"This command would trigger a WARNING alarm if the login response time is\nreported as over 2 seconds (",(0,o.kt)("inlineCode",{parentName:"p"},"--warning-time='2'"),") and a CRITICAL alarm\nover 3 seconds (",(0,o.kt)("inlineCode",{parentName:"p"},"--critical-time='3'"),') or if the login status if different\nthan "authentification succeeded"\n(',(0,o.kt)("inlineCode",{parentName:"p"},"--critical-status='%{message} !~ /authentification succeeded/i''"),")."),(0,o.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,o.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_protocol_ssh.pl  \\\n   --plugin=apps::protocols::ssh::plugin  \\\n   --mode=login  \\\n   --help\n")),(0,o.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,o.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," /usr/lib/centreon/plugins//centreon_protocol_ssh.pl  \\\n    --plugin=apps::protocols::ssh::plugin  \\\n    --list-mode\n")),(0,o.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h4",{id:"unknown-command-error-host-key-verification-failed"},(0,o.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: Command error: Host key verification failed.")),(0,o.kt)("p",null,"This error means means you haven't manually validated the target server\nfingerprint with ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"plink")," on the Centreon poller."))}k.isMDXComponent=!0}}]);