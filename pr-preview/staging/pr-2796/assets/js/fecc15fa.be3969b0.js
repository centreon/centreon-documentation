"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[42883],{2697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>h,frontMatter:()=>p,metadata:()=>d,toc:()=>k});n(67294);var a=n(3905),r=n(51715),l=n(7626);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"applications-oracle-goldengate-ssh",title:"Oracle GoldenGate SSH"},c=void 0,d={unversionedId:"integrations/plugin-packs/procedures/applications-oracle-goldengate-ssh",id:"integrations/plugin-packs/procedures/applications-oracle-goldengate-ssh",title:"Oracle GoldenGate SSH",description:"Monitoring Connector Assets",source:"@site/pp/integrations/plugin-packs/procedures/applications-oracle-goldengate-ssh.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-oracle-goldengate-ssh",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/applications-oracle-goldengate-ssh",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-oracle-goldengate-ssh.md",tags:[],version:"current",frontMatter:{id:"applications-oracle-goldengate-ssh",title:"Oracle GoldenGate SSH"},sidebar:"pp",previous:{title:"OpenWeatherMap",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/applications-openweathermap-restapi"},next:{title:"Oracle UCP JMX",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/applications-oracle-ucp-jmx"}},m={},k=[{value:"Monitoring Connector Assets",id:"monitoring-connector-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to check in the CLI that the configuration is OK and what are the main options for ?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-",level:3},{value:"I have that error message: <code>UNKNOWN: Command error: Host key verification failed.</code>. What does it mean ?",id:"i-have-that-error-message-unknown-command-error-host-key-verification-failed-what-does-it-mean-",level:3}],u={toc:k},g="wrapper";function h(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(g,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector Assets"),(0,a.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,a.kt)("p",null,"The Monitoring Connector includes monitoring of status and lags of Oracle GG Processes thanks to GGSCI command-line utility. "),(0,a.kt)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Processes",label:"Processes",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"process status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Process status"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"processname"),"#process.lag.seconds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"processus lag at checkpoint"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"processname"),"#process.time.checkpoint.seconds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"processus time since checkpoint"),(0,a.kt)("td",{parentName:"tr",align:"left"})))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"The centreon-engine user performs a SSH connection to a remote system user. This user must have enough privileges to run ",(0,a.kt)("inlineCode",{parentName:"p"},"ggsci")," command."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Oracle-Goldengate-Ssh\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,a.kt)("em",{parentName:"li"},"Oracle GoldenGate SSH")," Monitoring Connector"))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Oracle-Goldengate-Ssh\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Centreon Monitoring Connector from the RPM:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-oracle-goldengate-ssh\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,a.kt)("em",{parentName:"li"},"Oracle GoldenGate SSH")," Monitoring Connector")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add a new Host and apply the ",(0,a.kt)("em",{parentName:"li"},"App-Oracle-Goldengate-SSH-custom")," Host Template")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Once the template applied, some Macros have to be configured:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"GGSHOME"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Directory of ",(0,a.kt)("inlineCode",{parentName:"td"},"ggsci"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"ORACLEHOME"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Oracle home directory")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"3 SSH backends are available to connect to the remote server: ",(0,a.kt)("em",{parentName:"p"},"sshcli"),", ",(0,a.kt)("em",{parentName:"p"},"plink")," and ",(0,a.kt)("em",{parentName:"p"},"libssh")," which are detailed below.")),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"sshcli backend",label:"sshcli backend",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHBACKEND"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Name of the backend: ",(0,a.kt)("inlineCode",{parentName:"td"},"sshcli"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHUSERNAME"),(0,a.kt)("td",{parentName:"tr",align:"left"},"By default, it uses the user running process ",(0,a.kt)("inlineCode",{parentName:"td"},"centengine")," on your Poller")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHPASSWORD"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Cannot be used with backend. Only ssh key authentication")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"By default: 22")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Customize it with your own if needed. E.g.: ",(0,a.kt)("inlineCode",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"With that backend, you have to validate the target server fingerprint manually (with the SSHUSERNAME used)."))),(0,a.kt)(l.Z,{value:"plink backend",label:"plink backend",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHBACKEND"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Name of the backend: ",(0,a.kt)("inlineCode",{parentName:"td"},"plink"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHUSERNAME"),(0,a.kt)("td",{parentName:"tr",align:"left"},"By default, it uses the user running process ",(0,a.kt)("inlineCode",{parentName:"td"},"centengine")," on your Poller")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHPASSWORD"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Can be used. If not set, SSH key authentication is used")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"By default: 22")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Customize it with your own if needed. E.g.: ",(0,a.kt)("inlineCode",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"With that backend, you have to validate the target server fingerprint manually (with the SSHUSERNAME used)."))),(0,a.kt)(l.Z,{value:"libssh backend (default)",label:"libssh backend (default)",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHBACKEND"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Name of the backend: ",(0,a.kt)("inlineCode",{parentName:"td"},"libssh"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHUSERNAME"),(0,a.kt)("td",{parentName:"tr",align:"left"},"By default, it uses the user running process ",(0,a.kt)("inlineCode",{parentName:"td"},"centengine")," on your Poller")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHPASSWORD"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Can be used. If not set, SSH key authentication is used")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"By default: 22")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Customize it with your own if needed. E.g.: ",(0,a.kt)("inlineCode",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,a.kt)("p",null,"With that backend, you do not have to validate the target server fingerprint manually."))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-"},"How to check in the CLI that the configuration is OK and what are the main options for ?"),(0,a.kt)("p",null,"Once the Plugin installed, log into your Poller using the ",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," user account and test by running the following command :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_oracle_gg_ssh.pl \\\n    --plugin=apps::oracle::gg::local::plugin \\\n    --mode=processes \\\n    --hostname=10.30.2.81 \\\n    --ssh-username=centreon \\\n    --ssh-password='centreon-password' \\\n    --ssh-backend=libssh \\\n    --filter-type=REPLICAT \\\n    --verbose\n")),(0,a.kt)("p",null,"Which output something similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"CRITICAL: Process 'REPLICAT:RP_TS02' status: ABENDED | 'REPLICAT:RP_TSO1#process.lag.seconds'=0s;;;0; 'REPLICAT:RP_TSO1#process.time.checkpoint.seconds'=4s;;;0; 'REPLICAT:RP_TS02#process.lag.seconds'=172472s;;;0; 'REPLICAT:RP_TS02#process.time.checkpoint.seconds'=1462s;;;0; 'REPLICAT:RP_TS03#process.lag.seconds'=0s;;;0; 'REPLICAT:RP_TS03#process.time.checkpoint.seconds'=4s;;;0;\nProcess 'REPLICAT:RP_TSO1' status: RUNNING, lag: 0, time since checkpoint: 4s\nProcess 'REPLICAT:RP_TS02' status: ABENDED, lag: 1d 23h 54m 32s, time since checkpoint: 24m 22s\nProcess 'REPLICAT:RP_TS03' status: RUNNING, lag: 0, time since checkpoint: 4s\n")),(0,a.kt)("p",null,"The command above gets the status of Oracle GoldenGate processes (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=processes"),").\nIt uses a SSH username ",(0,a.kt)("em",{parentName:"p"},"centreon")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--ssh-username=centreon"),"), a SSH password ",(0,a.kt)("em",{parentName:"p"},"centreon-password")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--ssh-password='centreon-password'"),"),\nuses a SSH backend ",(0,a.kt)("em",{parentName:"p"},"libssh")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--ssh-backend='libssh'"),") and it connects to the host ",(0,a.kt)("em",{parentName:"p"},"10.30.2.81")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.81"),")\non the SSH default port ",(0,a.kt)("em",{parentName:"p"},"22")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--ssh-port=22"),")."),(0,a.kt)("p",null,"All the options that can be used with this plugin can be found over the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_oracle_gg_ssh.pl \\\n    --plugin=apps::oracle::gg::local::plugin \\\n    --mode=processes \\\n    --help\n")),(0,a.kt)("h3",{id:"i-have-that-error-message-unknown-command-error-host-key-verification-failed-what-does-it-mean-"},"I have that error message: ",(0,a.kt)("inlineCode",{parentName:"h3"},"UNKNOWN: Command error: Host key verification failed."),". What does it mean ?"),(0,a.kt)("p",null,"It means you haven't manually validated the target server fingerprint with ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"plink")," on the Centreon Poller."))}h.isMDXComponent=!0}}]);