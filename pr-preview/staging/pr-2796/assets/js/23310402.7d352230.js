"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[17962],{76780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>g});n(67294);var r=n(3905),i=n(51715),a=n(7626);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const p={id:"monitor-linux-server-with-snmp",title:"Monitor your first Linux host"},c=void 0,u={unversionedId:"getting-started/monitor-linux-server-with-snmp",id:"version-23.10/getting-started/monitor-linux-server-with-snmp",title:"Monitor your first Linux host",description:"Monitoring a Linux server with SNMP",source:"@site/versioned_docs/version-23.10/getting-started/monitor-linux-server-with-snmp.md",sourceDirName:"getting-started",slug:"/getting-started/monitor-linux-server-with-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/getting-started/monitor-linux-server-with-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/getting-started/monitor-linux-server-with-snmp.md",tags:[],version:"23.10",lastUpdatedAt:1699281350,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{id:"monitor-linux-server-with-snmp",title:"Monitor your first Linux host"},sidebar:"version-23.10/docs",previous:{title:"Prerequisites",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/getting-started/first-supervision"},next:{title:"Monitor your first Windows host",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/getting-started/monitor-windows-server-with-snmp"}},m={},g=[{value:"Monitoring a Linux server with SNMP",id:"monitoring-a-linux-server-with-snmp",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"On the Linux server you want to monitor",id:"on-the-linux-server-you-want-to-monitor",level:3},{value:"On the poller",id:"on-the-poller",level:3},{value:"On the central server",id:"on-the-central-server",level:3},{value:"Configure the host and deploy the configuration",id:"configure-the-host-and-deploy-the-configuration",level:2}],d={toc:g},h="wrapper";function f(e){var{components:t}=e,p=l(e,["components"]);return(0,r.kt)(h,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},d,p),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"monitoring-a-linux-server-with-snmp"},"Monitoring a Linux server with SNMP"),(0,r.kt)("p",null,"In this tutorial, we're assuming that your Centreon platform is installed and running well, and that you have at least a ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/getting-started/IT100"},"Centreon IT 100 Edition")," that provides Centreon Monitoring Connectors (your ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/administration/licenses"},"license")," is already set up)."),(0,r.kt)("p",null,"Your Linux server will be monitored using the ",(0,r.kt)("a",{parentName:"p",href:"/pp/integrations/plugin-packs/procedures/operatingsystems-linux-snmp"},"Linux SNMP Monitoring Connector"),". (More about Monitoring Connectors ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/monitoring/pluginpacks"},"here"),")."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"on-the-linux-server-you-want-to-monitor"},"On the Linux server you want to monitor"),(0,r.kt)("p",null,"The first step is to activate and configure an SNMP agent on your monitored host.\nPlease refer to the documentation of your Linux distribution to find out how to configure the SNMP agent."),(0,r.kt)("p",null,"Find below a minimalist snmpd.conf/net-snmp configuration file:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"replace the ",(0,r.kt)("strong",{parentName:"li"},"agentaddress")," line with the appropriate address of the interface snmpd listens on"),(0,r.kt)("li",{parentName:"ul"},"replace ",(0,r.kt)("strong",{parentName:"li"},"my-snmp-community")," with the correct value for your environment."),(0,r.kt)("li",{parentName:"ul"},"Add the line ",(0,r.kt)("strong",{parentName:"li"},"view  centreon  included .1.3.6.1")," to have access to all information in the MIB required by the plugin")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'agentaddress 0.0.0.0,[::]\n\n#       sec.name  source          community\ncom2sec notConfigUser  default       my-snmp-community\n\n####\n# Second, map the security name into a group name:\n\n#       groupName      securityModel securityName\ngroup   notConfigGroup v1           notConfigUser\ngroup   notConfigGroup v2c           notConfigUser\n\n####\n# Third, create a view for us to let the group have rights to:\n\n# Make at least  snmpwalk -v 1 localhost -c public system fast again.\n#       name           incl/excl     subtree         mask(optional)\nview centreon included .1.3.6.1\nview    systemview    included   .1.3.6.1.2.1.1\nview    systemview    included   .1.3.6.1.2.1.25.1.1\n\n####\n# Finally, grant the group read-only access to the systemview view.\n\n#       group          context sec.model sec.level prefix read   write  notif\naccess notConfigGroup "" any noauth exact centreon none none\naccess  notConfigGroup ""      any       noauth    exact  systemview none none\n\n')),(0,r.kt)("p",null,"The SNMP server must be restarted each time the configuration is modified. Also make sure the SNMP server is configured to automatically start on boot. Use the following commands for recent distributions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart snmpd\nsystemctl enable snmpd\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The target server must be reachable from the Centreon Poller on the UDP/161 SNMP port.")),(0,r.kt)("h3",{id:"on-the-poller"},"On the poller"),(0,r.kt)("p",null,"Connect to your poller using SSH and install the Linux SNMP plugin (see the ",(0,r.kt)("a",{parentName:"p",href:"/pp/integrations/plugin-packs/procedures/operatingsystems-linux-snmp"},"monitoring procedure for the ",(0,r.kt)("strong",{parentName:"a"},"Linux SNMP")," Monitoring Connector")," for more information):"),(0,r.kt)(i.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-plugin-Operatingsystems-Linux-Snmp\n"))),(0,r.kt)(a.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-plugin-Operatingsystems-Linux-Snmp\n"))),(0,r.kt)(a.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"apt install centreon-plugin-operatingsystems-linux-snmp\n")))),(0,r.kt)("h3",{id:"on-the-central-server"},"On the central server"),(0,r.kt)("p",null,"In the web interface, go to ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Monitoring Connectors Manager")," and install the ",(0,r.kt)("strong",{parentName:"p"},"Linux SNMP")," Monitoring Connector:"),(0,r.kt)("p",null,"   ",(0,r.kt)("img",{alt:"image",src:n(54770).Z,width:"995",height:"561"})),(0,r.kt)("h2",{id:"configure-the-host-and-deploy-the-configuration"},"Configure the host and deploy the configuration"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Hosts > Hosts")," and click ",(0,r.kt)("strong",{parentName:"p"},"Add"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(89866).Z,width:"1600",height:"878"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Input the following information:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The name of the server (1)"),(0,r.kt)("li",{parentName:"ul"},"A description of the server (2)"),(0,r.kt)("li",{parentName:"ul"},"Its IP address (3)"),(0,r.kt)("li",{parentName:"ul"},"The SNMP version and community (4)"),(0,r.kt)("li",{parentName:"ul"},'Select the poller that will monitor your Linux server (keep "Central" if you have no other poller) (5)'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"+ Add a new entry")," in the ",(0,r.kt)("strong",{parentName:"p"},"Templates")," field (6), then select the ",(0,r.kt)("strong",{parentName:"p"},"OS-Linux-SNMP-custom")," template (7) from the list:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(5824).Z,width:"1502",height:"508"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save"),"(8). Your device has been added to the list of hosts:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(84398).Z,width:"1522",height:"317"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Services > Services by host"),". A set of indicators has been created automatically."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(27776).Z,width:"447",height:"121"})),(0,r.kt)("p",{parentName:"li"},"You can also use the shortcut beside the host's name to go directly to ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Services > Services by host"),". The list will be filtered by host name:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(14898).Z,width:"506",height:"321"})),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(6948).Z,width:"1525",height:"497"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/monitoring/monitoring-servers/deploying-a-configuration"},"Deploy the configuration"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Monitoring > Resources Status")," and select ",(0,r.kt)("strong",{parentName:"p"},"All")," from the ",(0,r.kt)("strong",{parentName:"p"},"Resource status")," filter. At first, the resources appear with the status ",(0,r.kt)("strong",{parentName:"p"},"Pending"),", which means that no checks have been executed yet:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(93344).Z,width:"1293",height:"414"})),(0,r.kt)("p",{parentName:"li"},"After a few minutes, the first results of the monitoring appear:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(43461).Z,width:"2065",height:"414"})),(0,r.kt)("p",{parentName:"li"},"If not all services are in an OK state, check what is causing the error and fix the problem."))))}f.isMDXComponent=!0},54770:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/quick_start_linux_0-a50e69833a3483531b86fb41cc278bb9.gif"},89866:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/quick_start_linux_1-795bfa67530e5ce010915a93c7867aa0.gif"},5824:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/quick_start_linux_2-1e6907779abe7f6a3681a00e0627a9f3.png"},84398:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/quick_start_linux_3-8ba1f96253ccaad0fb544e0018ecfe06.png"},27776:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},14898:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/quick_start_linux_4b-bf6d183c95f1cc9beed69e69f4dba99a.png"},6948:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/quick_start_linux_5-c888b4546f3c8cf52e8c856ff642af7f.png"},93344:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/quick_start_linux_6-6345b464c0b6289df45ee319dd4e97e0.png"},43461:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/quick_start_linux_7-61bff2b69e06b41f0b710e212a7d9ff4.png"}}]);