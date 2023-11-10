"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[17575],{54724:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>m,default:()=>h,frontMatter:()=>p,metadata:()=>d,toc:()=>c});a(67294);var n=a(3905),r=a(51715),l=a(7626);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const p={id:"operatingsystems-aix-ssh",title:"AIX SSH"},m=void 0,d={unversionedId:"integrations/plugin-packs/procedures/operatingsystems-aix-ssh",id:"integrations/plugin-packs/procedures/operatingsystems-aix-ssh",title:"AIX SSH",description:"Monitoring Connector Assets",source:"@site/pp/integrations/plugin-packs/procedures/operatingsystems-aix-ssh.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/operatingsystems-aix-ssh",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/operatingsystems-aix-ssh",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/operatingsystems-aix-ssh.md",tags:[],version:"current",frontMatter:{id:"operatingsystems-aix-ssh",title:"AIX SSH"},sidebar:"pp",previous:{title:"AIX SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/operatingsystems-aix-snmp"},next:{title:"Base Pack",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/base-generic"}},k={},c=[{value:"Monitoring Connector Assets",id:"monitoring-connector-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"How to check in the CLI that the configuration is OK and what are the main options for ?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"I have that error message: <code>UNKNOWN: Command error: Host key verification failed.</code>. What does it mean ?",id:"i-have-that-error-message-unknown-command-error-host-key-verification-failed-what-does-it-mean-",level:3}],u={toc:c},g="wrapper";function h(e){var{components:t}=e,a=s(e,["components"]);return(0,n.kt)(g,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){i(e,t,a[t])}))}return e}({},u,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector Assets"),(0,n.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,n.kt)("p",null,"The Monitoring Connector includes monitoring the AIX system commands using SSH, such as:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Command return"),(0,n.kt)("li",{parentName:"ul"},"Errpt messages"),(0,n.kt)("li",{parentName:"ul"},"Inodes"),(0,n.kt)("li",{parentName:"ul"},"Group volumes"),(0,n.kt)("li",{parentName:"ul"},"Processes"),(0,n.kt)("li",{parentName:"ul"},"Storage ")),(0,n.kt)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Cmdreturn",label:"Cmdreturn",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"command.exit.code.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of exit code return"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,n.kt)(l.Z,{value:"Inodes",label:"Inodes",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"storage.inodes.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Inodes usage in percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,n.kt)(l.Z,{value:"Process",label:"Process",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"processes.alerts.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of alerts processes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"processes.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total number of alerts processes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,n.kt)(l.Z,{value:"Storage",label:"Storage",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"storage.space.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Storage space usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"storage.space.free.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Storage free space usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"storageresource.space.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Storage percentage space usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"A user is required to query the OS AIX by SSH. There is no need for root or sudo privileges.\nThere are two possible ways to perform SSH check, either by exchanging the SSH key from centreon-engine to the target server,\nor by setting your unique user and password directly in the host macros."),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"SSH keys exchange",label:"SSH keys exchange",mdxType:"TabItem"},(0,n.kt)("p",null,"Add and generate a password for your user on the ",(0,n.kt)("strong",{parentName:"p"},"Target sever"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"adduser ro_ssh_centreon\npasswd ro_ssh_centreon\n")),(0,n.kt)("p",null,"Switch to ",(0,n.kt)("inlineCode",{parentName:"p"},"centreon-engine"),"'s bash environment on your Central server and Poller :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"su - centreon-engine\n")),(0,n.kt)("p",null,"Then, copy this key on to the ",(0,n.kt)("strong",{parentName:"p"},"Target server")," with the following commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen -t ed25519 -a 100\nssh-copy-id -i .ssh/id_ed25519.pub ro_ssh_centreon@<IP_TARGET_SERVER>\n"))),(0,n.kt)(l.Z,{value:"User/Password Authentication",label:"User/Password Authentication",mdxType:"TabItem"},(0,n.kt)("p",null,"After setting the Name, Alias, IP, and Host Template parameters, you need to set up in the macros described in the ",(0,n.kt)("strong",{parentName:"p"},"Configuration")," part below."))),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Operatingsystems-Aix-Local\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,n.kt)("em",{parentName:"li"},"AIX SSH")," Monitoring Connector"))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Operatingsystems-Aix-Local\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Centreon Monitoring Connector from the RPM:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-operatingsystems-aix-ssh\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,n.kt)("em",{parentName:"li"},"AIX SSH")," Monitoring Connector")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add a new Host and apply the ",(0,n.kt)("em",{parentName:"li"},"OS-AIX-SSH-custom")," Host Template")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"3 SSH backends are available to connect to the remote server: ",(0,n.kt)("em",{parentName:"p"},"sshcli"),", ",(0,n.kt)("em",{parentName:"p"},"plink")," and ",(0,n.kt)("em",{parentName:"p"},"libssh")," which are detailed below.")),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sshcli backend",label:"sshcli backend",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHBACKEND"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name of the backend: ",(0,n.kt)("inlineCode",{parentName:"td"},"sshcli"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"By default, it uses the user running process ",(0,n.kt)("inlineCode",{parentName:"td"},"centengine")," on your Poller")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cannot be used with backend. Only ssh key authentication")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"By default: 22")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Customize it with your own if needed. E.g.: ",(0,n.kt)("inlineCode",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Warning")," With that backend, you have to validate the target server fingerprint manually (with the SSHUSERNAME used).")),(0,n.kt)(l.Z,{value:"plink backend",label:"plink backend",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHBACKEND"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name of the backend: ",(0,n.kt)("inlineCode",{parentName:"td"},"plink"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"By default, it uses the user running process ",(0,n.kt)("inlineCode",{parentName:"td"},"centengine")," on your Poller")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Can be used. If not set, SSH key authentication is used")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"By default: 22")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Customize it with your own if needed. E.g.: ",(0,n.kt)("inlineCode",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Warning")," With that backend, you have to validate the target server fingerprint manually (with the SSHUSERNAME used).")),(0,n.kt)(l.Z,{value:"libssh backend (default)",label:"libssh backend (default)",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHBACKEND"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name of the backend: ",(0,n.kt)("inlineCode",{parentName:"td"},"libssh"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"By default, it uses the user running process ",(0,n.kt)("inlineCode",{parentName:"td"},"centengine")," on your Poller")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Can be used. If not set, SSH key authentication is used")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"By default: 22")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Customize it with your own if needed. E.g.: ",(0,n.kt)("inlineCode",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,n.kt)("p",null,"With that backend, you do not have to validate the target server fingerprint manually."))),(0,n.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-"},"How to check in the CLI that the configuration is OK and what are the main options for ?"),(0,n.kt)("p",null,"Once the Plugin installed, log into your Poller using the ",(0,n.kt)("em",{parentName:"p"},"centreon-engine")," user account and test by running the following command :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_aix_local.pl \\\n    --plugin=os::aix::local::plugin \\\n    --mode=lvsync \\\n    --hostname=10.30.2.81 \\\n    --ssh-username=centreon \\\n    --ssh-password='centreon-password' \\\n    --ssh-backend=sshcli \\\n    --filter-type='SVG' \\\n      --critical-status='%{state} =~ /stale/i'\\\n    --verbose\n")),(0,n.kt)("p",null,"The above command controls the state of volumes groups mirroring (",(0,n.kt)("inlineCode",{parentName:"p"},"--mode=lvsync"),").\nIt uses a SSH username ",(0,n.kt)("em",{parentName:"p"},"centreon")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--ssh-username=centreon"),"), a SSH password ",(0,n.kt)("em",{parentName:"p"},"centreon-password")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--ssh-password='centreon-password'"),"),\nuses a SSH backend ",(0,n.kt)("em",{parentName:"p"},"libssh")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--ssh-backend='libssh'"),") and it connects to the host ",(0,n.kt)("em",{parentName:"p"},"10.30.2.81")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.81"),")."),(0,n.kt)("p",null,"All the options that can be used with this plugin can be found over the ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," options:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_aix_local.pl \\\n    --plugin=os::aix::local::plugin \\\n    --mode=lvsync \\\n    --help\n")),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("h3",{id:"i-have-that-error-message-unknown-command-error-host-key-verification-failed-what-does-it-mean-"},"I have that error message: ",(0,n.kt)("inlineCode",{parentName:"h3"},"UNKNOWN: Command error: Host key verification failed."),". What does it mean ?"),(0,n.kt)("p",null,"It means you haven't manually validated the target server fingerprint with ",(0,n.kt)("inlineCode",{parentName:"p"},"libssh")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"plink")," on the Centreon Poller."))}h.isMDXComponent=!0}}]);