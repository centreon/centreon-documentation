"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[26848],{76588:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>k,default:()=>N,frontMatter:()=>s,metadata:()=>m,toc:()=>d});a(67294);var n=a(3905),r=a(51715),l=a(7626);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function p(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const s={id:"applications-netbackup-ssh",title:"Symantec Netbackup SSH"},k=void 0,m={unversionedId:"integrations/plugin-packs/procedures/applications-netbackup-ssh",id:"integrations/plugin-packs/procedures/applications-netbackup-ssh",title:"Symantec Netbackup SSH",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/applications-netbackup-ssh.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-netbackup-ssh",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/applications-netbackup-ssh",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-netbackup-ssh.md",tags:[],version:"current",frontMatter:{id:"applications-netbackup-ssh",title:"Symantec Netbackup SSH"},sidebar:"pp",previous:{title:"Symantec Netbackup NSClient++ NRPE",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/applications-netbackup-nrpe"},next:{title:"Thales Mistral VS9 Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/applications-thales-mistral-vs9-restapi"}},u={},d=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"SSH configuration",id:"ssh-configuration",level:3},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for ?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],c={toc:d},g="wrapper";function N(t){var{components:e}=t,a=o(t,["components"]);return(0,n.kt)(g,p(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){i(t,e,a[e])}))}return t}({},c,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,n.kt)("h3",{id:"templates"},"Templates"),(0,n.kt)("p",null,"The Centreon Monitoring Connector Netbackup SSH brings 1 host template:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"App-Netbackup-SSH-custom")),(0,n.kt)("p",null,"It brings the following Service Templates:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Discovery"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Dedup-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Netbackup-SSH-Dedup-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Drive-Cleaning"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Netbackup-SSH-Drive-Cleaning"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Drive-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Netbackup-SSH-Drive-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Job-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Netbackup-SSH-Job-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Tape-Usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Netbackup-SSH-Tape-Usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h3",{id:"discovery-rules"},"Discovery rules"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Rule name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Netbackup-Job-Per-Policy"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discovery Netbackup Jobs")))),(0,n.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Dedup-Status",label:"Dedup-Status",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"disk_pool.deduplication.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,n.kt)(l.Z,{value:"Drive-Cleaning",label:"Drive-Cleaning",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"drives.unclean.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%d drives needs a reset mount time"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,n.kt)(l.Z,{value:"Drive-Status",label:"Drive-Status",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Job-Status",label:"Job-Status",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Global")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"jobs.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"total jobs : %s")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Per ",(0,n.kt)("em",{parentName:"li"},"job"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Tape-Usage",label:"Tape-Usage",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"tape.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"tape.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"})))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("h3",{id:"ssh-configuration"},"SSH configuration"),(0,n.kt)("p",null,"A user is required to query the server by SSH. There are two possible ways to log in through SSH, either by\nexchanging the SSH key from ",(0,n.kt)("strong",{parentName:"p"},"centreon-engine")," user to the target server, or by\nsetting your unique user and password directly in the Host Macros."),(0,n.kt)("p",null,"The remote user must have enough privileges to execute system commands. "),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon Poller expected to monitor ",(0,n.kt)("strong",{parentName:"li"},"Netbackup")," ressources:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Netbackup-Ssh\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,n.kt)("strong",{parentName:"li"},"Netbackup SSH")," Centreon Monitoring Connector on the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page"))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor ",(0,n.kt)("strong",{parentName:"li"},"Netbackup")," ressources:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Netbackup-Ssh\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Install the ",(0,n.kt)("strong",{parentName:"li"},"Netbackup SSH")," Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-netbackup-ssh\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,n.kt)("strong",{parentName:"li"},"Netbackup SSH")," Centreon Monitoring Connector on the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page.")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"host"},"Host"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Log into Centreon and add a new Host through ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,n.kt)("li",{parentName:"ul"},'Fill the "Name", "Alias" & "IP Address / DNS" fields according to your ',(0,n.kt)("em",{parentName:"li"},"Netbackup")," server settings"),(0,n.kt)("li",{parentName:"ul"},"Select the ",(0,n.kt)("strong",{parentName:"li"},"applications-netbackup-ssh-custom")," template to apply to the Host"),(0,n.kt)("li",{parentName:"ul"},"Once the template applied, some Macros marked as 'Mandatory' hereafter have to be configured.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"3 SSH backends are available to connect to the remote server: ",(0,n.kt)("em",{parentName:"p"},"sshcli"),", ",(0,n.kt)("em",{parentName:"p"},"plink")," and ",(0,n.kt)("em",{parentName:"p"},"libssh")," which are detailed below.")),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sshcli backend",label:"sshcli backend",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHBACKEND"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name of the backend: ",(0,n.kt)("inlineCode",{parentName:"td"},"sshcli"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"By default, it uses the user running process ",(0,n.kt)("strong",{parentName:"td"},"centengine")," on your Poller")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cannot be used with backend. Only ssh key authentication")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"By default: 22")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Customize it with your own if needed. E.g.: ",(0,n.kt)("inlineCode",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"With that backend, you have to validate the target server fingerprint manually (with the SSHUSERNAME used)."))),(0,n.kt)(l.Z,{value:"plink backend",label:"plink backend",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHBACKEND"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name of the backend: ",(0,n.kt)("inlineCode",{parentName:"td"},"plink"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"By default, it uses the user running process ",(0,n.kt)("strong",{parentName:"td"},"centengine")," on your Poller")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Can be used. If not set, SSH key authentication is used")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"By default: 22")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Customize it with your own if needed. E.g.: ",(0,n.kt)("inlineCode",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"With that backend, you have to validate the target server fingerprint manually (with the SSHUSERNAME used)."))),(0,n.kt)(l.Z,{value:"libssh backend (default)",label:"libssh backend (default)",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHBACKEND"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name of the backend: ",(0,n.kt)("inlineCode",{parentName:"td"},"libssh"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"By default, it uses the user running process ",(0,n.kt)("strong",{parentName:"td"},"centengine")," on your Poller")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Can be used. If not set, SSH key authentication is used")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"By default: 22")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Customize it with your own if needed. E.g.: ",(0,n.kt)("inlineCode",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,n.kt)("p",null,"With that backend, you do not have to validate the target server fingerprint manually."))),(0,n.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-"},"How to check in the CLI that the configuration is OK and what are the main options for ?"),(0,n.kt)("p",null,"Once the Plugin is installed, log into your Poller using the ",(0,n.kt)("strong",{parentName:"p"},"centreon-engine")," user account and run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_netbackup_ssh.pl \\\n    --plugin=apps::backup::netbackup::local::plugin \\\n    --mode=job-status \\\n    --hostname=10.30.2.81 \\\n    --ssh-username=centreon \\\n    --ssh-password='centreon-password' \\\n    --ssh-backend=sshcli \\\n    --critical-status='%{status} !~ /up/i' \\ \n    --verbose\n")),(0,n.kt)("p",null,"The above command gets the state of the Symantec Netbackup jobs (",(0,n.kt)("inlineCode",{parentName:"p"},"--mode=job-status"),").\nIt uses a SSH username ",(0,n.kt)("em",{parentName:"p"},"centreon")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--ssh-username=centreon"),"), a SSH password ",(0,n.kt)("em",{parentName:"p"},"centreon-password")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--ssh-password='centreon-password'"),"),\nuses a SSH backend ",(0,n.kt)("em",{parentName:"p"},"sshcli")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--ssh-backend='sshcli'"),") and it connects to the host ",(0,n.kt)("em",{parentName:"p"},"10.30.2.81")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.81"),")."),(0,n.kt)("p",null,"This command will return a CRITICAL state if one of the jobs isn't in the 'up' status."),(0,n.kt)("p",null,"All the options that can be used with this plugin can be found using the ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," option:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_netbackup_ssh.pl \\\n    --plugin=apps::backup::netbackup::local::plugin \\\n    --mode=job-status \\\n    --help\n")),(0,n.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"Please find all the troubleshooting documentation for the Centreon Plugins\non the ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#ssh-and-cli-checks"},"dedicated page")))}N.isMDXComponent=!0}}]);