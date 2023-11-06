"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[62649],{70092:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>k,frontMatter:()=>p,metadata:()=>u,toc:()=>d});n(67294);var a=n(3905),r=n(51715),i=n(7626);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"applications-antivirus-clamav-ssh",title:"Antivirus ClamAV"},c=void 0,u={unversionedId:"integrations/plugin-packs/procedures/applications-antivirus-clamav-ssh",id:"integrations/plugin-packs/procedures/applications-antivirus-clamav-ssh",title:"Antivirus ClamAV",description:"Pack assets",source:"@site/pp/integrations/plugin-packs/procedures/applications-antivirus-clamav-ssh.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-antivirus-clamav-ssh",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/applications-antivirus-clamav-ssh",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-antivirus-clamav-ssh.md",tags:[],version:"current",frontMatter:{id:"applications-antivirus-clamav-ssh",title:"Antivirus ClamAV"},sidebar:"pp",previous:{title:"Ansible Tower CLI",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/applications-ansible-tower"},next:{title:"Apache Server",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/applications-webservers-apache-serverstatus"}},m={},d=[{value:"Pack assets",id:"pack-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"SSH configuration",id:"ssh-configuration",level:3},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for ?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"<code>UNKNOWN: Command error: Host key verification failed.</code>",id:"unknown-command-error-host-key-verification-failed",level:4}],g={toc:d},h="wrapper";function k(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(h,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"pack-assets"},"Pack assets"),(0,a.kt)("h3",{id:"monitored-objects"},"Monitored objects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Engine version"),(0,a.kt)("li",{parentName:"ul"},"main.cvd version"),(0,a.kt)("li",{parentName:"ul"},"daily.cvd version")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"ssh-configuration"},"SSH configuration"),(0,a.kt)("p",null,"A user is required to query the ClamAV server by SSH. There is no need for root\nor sudo privileges. There are two possible ways to perform SSH check, either by\nexchanging the SSH key from ",(0,a.kt)("inlineCode",{parentName:"p"},"centreon-engine")," user to the target server,\nor by setting your unique user and password directly in the Host Macros."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor ",(0,a.kt)("em",{parentName:"li"},"ClamAV")," ressources:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Clamav-Ssh\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"Antivirus ClamAV")," Centreon Monitoring Connector on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page"))),(0,a.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor ",(0,a.kt)("em",{parentName:"li"},"ClamAV")," ressources:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Clamav-Ssh\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install the ",(0,a.kt)("em",{parentName:"li"},"Antivirus ClamAV")," Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-antivirus-clamav-ssh\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"Antivirus ClamAV")," Centreon Monitoring Connector on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"host"},"Host"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Log into Centreon and add a new Host through ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,a.kt)("li",{parentName:"ul"},'Fill the "Name", "Alias" & "IP Address / DNS" fields according to your ',(0,a.kt)("em",{parentName:"li"},"Antivirus ClamAV")," Server settings"),(0,a.kt)("li",{parentName:"ul"},"Select the ",(0,a.kt)("em",{parentName:"li"},"Applications-Antivirus-Clamav-Ssh-custom")," template to apply to the Host"),(0,a.kt)("li",{parentName:"ul"},"Once the template applied, some Macros marked as 'Mandatory' hereafter have to be configured.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command","_","line (eg. a --verbose flag)")))),(0,a.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-"},"How to check in the CLI that the configuration is OK and what are the main options for ?"),(0,a.kt)("p",null,"Once the plugin installed, log into your Centreon Poller CLI using the\n",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," user account and test the Plugin by running the following\ncommand:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," /usr/lib/centreon/plugins//centreon_clamav_ssh.pl \\\n    --plugin=apps::antivirus::clamav::local::plugin \\\n    --mode=update-status \\\n    --hostname=10.0.0.1 \\\n    --remote \\\n    --critical-maindb-status='%{last_maindb_version} ne %{current_maindb_version}' \\\n    --use-new-perfdata\n")),(0,a.kt)("p",null," Expected command output is shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK : clamav engine version '0.103.2/0.103.2' main.cvd version '60/60', last update 1d 3h 46m 40s daily.cvd version '25839/25839', last update 1d 3h 46m 40s | \n")),(0,a.kt)("p",null,"This command would trigger a CRITICAL alarm if the last ",(0,a.kt)("em",{parentName:"p"},"maindb version")," is not\nequal to the current ",(0,a.kt)("em",{parentName:"p"},"maindb version"),"\n(",(0,a.kt)("inlineCode",{parentName:"p"},"-critical-maindb-status='%{last_maindb_version} ne %{current_maindb_version}'"),")."),(0,a.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," parameter to thecommand:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_clamav_ssh.pl  \\\n    --plugin=apps::antivirus::clamav::local::plugin  \\\n    --mode=update-status  \\\n    --help\n")),(0,a.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,a.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to thecommand:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," /usr/lib/centreon/plugins//centreon_clamav_ssh.pl  \\\n    --plugin=apps::antivirus::clamav::local::plugin  \\\n    --list-mode\n")),(0,a.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("h4",{id:"unknown-command-error-host-key-verification-failed"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: Command error: Host key verification failed.")),(0,a.kt)("p",null,"is error may come out whenever the ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh")," or the ",(0,a.kt)("inlineCode",{parentName:"p"},"plink")," backends are used in the\ncommand. In this case, it is necessary to manually initiate a first SSH\nconnection to the target server in order to validate the SSH fingerprint."))}k.isMDXComponent=!0}}]);