"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[83838],{69744:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>m,toc:()=>g});a(67294);var n=a(3905),r=a(51715),i=a(7626);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const s={id:"applications-monitoring-speedtest",title:"Speedtest"},d=void 0,m={unversionedId:"integrations/plugin-packs/procedures/applications-monitoring-speedtest",id:"integrations/plugin-packs/procedures/applications-monitoring-speedtest",title:"Speedtest",description:"Pack assets",source:"@site/pp/integrations/plugin-packs/procedures/applications-monitoring-speedtest.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-monitoring-speedtest",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/applications-monitoring-speedtest",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-monitoring-speedtest.md",tags:[],version:"current",frontMatter:{id:"applications-monitoring-speedtest",title:"Speedtest"},sidebar:"pp",previous:{title:"Solr",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/applications-solr-jmx"},next:{title:"Splunk",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/applications-monitoring-splunk-api"}},c={},g=[{value:"Pack assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installing the monitoring connector",id:"installing-the-monitoring-connector",level:2},{value:"Pack",id:"pack",level:3},{value:"Plugin",id:"plugin",level:3},{value:"Using the monitoring connector",id:"using-the-monitoring-connector",level:2},{value:"Using a host template provided by the connector",id:"using-a-host-template-provided-by-the-connector",level:3},{value:"Using a service template provided by the connector",id:"using-a-service-template-provided-by-the-connector",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Available modes",id:"available-modes",level:3},{value:"Available options",id:"available-options",level:3},{value:"Modes options",id:"modes-options",level:4}],u={toc:g},k="wrapper";function h(t){var{components:e}=t,a=p(t,["components"]);return(0,n.kt)(k,o(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){l(t,e,a[e])}))}return t}({},u,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"pack-assets"},"Pack assets"),(0,n.kt)("h3",{id:"templates"},"Templates"),(0,n.kt)("p",null,"The Monitoring Connector ",(0,n.kt)("strong",{parentName:"p"},"Speedtest")," brings a host template:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"App-Monitoring-Speedtest-custom"))),(0,n.kt)("p",null,"The connector brings the following service templates (sorted by the host template they are attached to):"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"App-Monitoring-Speedtest-custom",label:"App-Monitoring-Speedtest-custom",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Internet-Bandwidth"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Speedtest-Internet-Bandwidth-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check internet bandwidth")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The services listed above are created automatically when the ",(0,n.kt)("strong",{parentName:"p"},"App-Monitoring-Speedtest-custom")," host template is used.")))),(0,n.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,n.kt)("p",null,"Here is the list of services for this connector, detailing all metrics linked to each service."),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Internet-Bandwidth",label:"Internet-Bandwidth",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ping.latency.milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ms")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ping.jitter.milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"internet.bandwidth.download.bitspersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"internet.bandwidth.upload.bitspersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"b/s")))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install the ",(0,n.kt)("inlineCode",{parentName:"p"},"speedtest")," command using the ",(0,n.kt)("a",{parentName:"p",href:"https://www.speedtest.net/apps/cli"},"following procedure"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Execute the ",(0,n.kt)("inlineCode",{parentName:"p"},"speedtest")," command once, manually, to validate the license.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"speedtest.net")," must be reachable from the Centreon poller."))),(0,n.kt)("h2",{id:"installing-the-monitoring-connector"},"Installing the monitoring connector"),(0,n.kt)("h3",{id:"pack"},"Pack"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"If the platform uses an ",(0,n.kt)("em",{parentName:"li"},"online")," license, you can skip the package installation\ninstruction below as it is not required to have the connector displayed within the\n",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," menu.\nIf the platform uses an ",(0,n.kt)("em",{parentName:"li"},"offline")," license, install the package on the ",(0,n.kt)("strong",{parentName:"li"},"central server"),"\nwith the command corresponding to the operating system's package manager:")),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-pack-applications-monitoring-speedtest\n"))),(0,n.kt)(i.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-pack-applications-monitoring-speedtest\n"))),(0,n.kt)(i.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-pack-applications-monitoring-speedtest\n"))),(0,n.kt)(i.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-monitoring-speedtest\n")))),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Whatever the license type (",(0,n.kt)("em",{parentName:"li"},"online")," or ",(0,n.kt)("em",{parentName:"li"},"offline"),"), install the ",(0,n.kt)("strong",{parentName:"li"},"Speedtest")," connector through\nthe ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," menu.")),(0,n.kt)("h3",{id:"plugin"},"Plugin"),(0,n.kt)("p",null,"Since Centreon 22.04, you can benefit from the 'Automatic plugin installation' feature.\nWhen this feature is enabled, you can skip the installation part below."),(0,n.kt)("p",null,"You still have to manually install the plugin on the poller(s) when:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Automatic plugin installation is turned off"),(0,n.kt)("li",{parentName:"ul"},"You want to run a discovery job from a poller that doesn't monitor any resource of this kind yet")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"More information in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/monitoring/pluginpacks/#installing-the-plugin"},"Installing the plugin")," section.")),(0,n.kt)("p",null,"Use the commands below according to your operating system's package manager:"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-plugin-Applications-Monitoring-Speedtest\n"))),(0,n.kt)(i.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-plugin-Applications-Monitoring-Speedtest\n"))),(0,n.kt)(i.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-plugin-applications-monitoring-speedtest\n"))),(0,n.kt)(i.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Monitoring-Speedtest\n")))),(0,n.kt)("h2",{id:"using-the-monitoring-connector"},"Using the monitoring connector"),(0,n.kt)("h3",{id:"using-a-host-template-provided-by-the-connector"},"Using a host template provided by the connector"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log into Centreon and add a new host through ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,n.kt)("li",{parentName:"ol"},"Fill the ",(0,n.kt)("strong",{parentName:"li"},"Name"),", ",(0,n.kt)("strong",{parentName:"li"},"Alias")," & ",(0,n.kt)("strong",{parentName:"li"},"IP Address/DNS")," fields according to your ressource settings."),(0,n.kt)("li",{parentName:"ol"},"Apply the ",(0,n.kt)("strong",{parentName:"li"},"App-Monitoring-Speedtest-custom")," template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior."),(0,n.kt)("li",{parentName:"ol"},"Fill in the macros you want. Some macros are mandatory.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Mandatory"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SPEEDTESTEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed ",(0,n.kt)("a",{parentName:"td",href:"#available-options"},"here")),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"center"})))),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/monitoring/monitoring-servers/deploying-a-configuration"},"Deploy the configuration"),". The host appears in the list of hosts, and on the ",(0,n.kt)("strong",{parentName:"li"},"Resources Status")," page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.")),(0,n.kt)("h3",{id:"using-a-service-template-provided-by-the-connector"},"Using a service template provided by the connector"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"If you have used a host template and checked ",(0,n.kt)("strong",{parentName:"li"},"Create Services linked to the Template too"),", the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, ",(0,n.kt)("a",{parentName:"li",href:"/docs/monitoring/basic-objects/services"},"create manually the services you want")," and apply a service template to them."),(0,n.kt)("li",{parentName:"ol"},"Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).")),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Internet-Bandwidth",label:"Internet-Bandwidth",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Mandatory"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"WARNINGBANDWIDTHDOWNLOAD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Thresholds"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CRITICALBANDWIDTHDOWNLOAD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Thresholds"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"WARNINGBANDWIDTHUPLOAD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Thresholds"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CRITICALBANDWIDTHUPLOAD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Thresholds"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"WARNINGPINGJITTER"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Thresholds"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CRITICALPINGJITTER"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Thresholds"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"WARNINGPINGLATENCY"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Thresholds"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CRITICALPINGLATENCY"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Thresholds"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed ",(0,n.kt)("a",{parentName:"td",href:"#available-options"},"here")),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"center"})))))),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/monitoring/monitoring-servers/deploying-a-configuration"},"Deploy the configuration"),". The service appears in the list of services, and on page ",(0,n.kt)("strong",{parentName:"li"},"Resources Status"),". The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.")),(0,n.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for"},"How to check in the CLI that the configuration is OK and what are the main options for?"),(0,n.kt)("p",null,"Once the plugin is installed, log into your Centreon poller's CLI using the\n",(0,n.kt)("strong",{parentName:"p"},"centreon-engine")," user account (",(0,n.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),"). Test that the connector\nis able to monitor the resource using a command like this one (replace the sample values by yours):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_monitoring_speedtest.pl \\\n    --plugin=apps::monitoring::speedtest::plugin \\\n    --mode=internet-bandwidth\n")),(0,n.kt)("p",null,"The expected command output is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: ping latency: 1.208 ms, jitter: 0.011 - download: 4.87 Gb/s, upload: 1.83 Gb/s | 'ping.latency.milliseconds'=1.208ms;;;0; 'ping.jitter.milliseconds'=0.011;;;0; 'internet.bandwidth.download.bitspersecond'=4871581536b/s;;;0; 'internet.bandwidth.upload.bitspersecond'=1834082509b/s;;;0;\n")),(0,n.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"Please find the ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"troubleshooting documentation"),"\nfor Centreon Plugins typical issues."),(0,n.kt)("h3",{id:"available-modes"},"Available modes"),(0,n.kt)("p",null,"In most cases, a mode corresponds to a service template. The mode appears in the execution command for the connector.\nIn the Centreon interface, you don't need to specify a mode explicitly: its use is implied when you apply a service template.\nHowever, you will need to specify the correct mode for the template if you want to test the execution command for the\nconnector in your terminal."),(0,n.kt)("p",null,"All available modes can be displayed by adding the ",(0,n.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to\nthe command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_monitoring_speedtest.pl \\\n    --plugin=apps::monitoring::speedtest::plugin \\\n    --list-mode\n")),(0,n.kt)("p",null,"The plugin brings the following modes:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mode"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Linked service template"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"internet-bandwidth"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Speedtest-Internet-Bandwidth-custom")))),(0,n.kt)("h3",{id:"available-options"},"Available options"),(0,n.kt)("h4",{id:"modes-options"},"Modes options"),(0,n.kt)("p",null,"All available options for each service template are listed below:"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Internet-Bandwidth",label:"Internet-Bandwidth",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Option"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--mode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Define the mode in which you want the plugin to be executed (see--list-mode).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--dyn-mode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specify a mode with the module's path (advanced).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--list-mode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"List all available modes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--mode-version"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check minimal version of mode. If not, unknown error.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--version"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Return the version of the plugin.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--custommode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--list-custommode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"List all available custom modes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--multiple"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Multiple custom mode objects. This may be required by some specific modes (advanced).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--pass-manager"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--verbose"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Display extended status information (long output).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--debug"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Display debug messages.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--filter-perfdata"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--filter-perfdata-adv"),(0,n.kt)("td",{parentName:"tr",align:"left"},'Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv=\'not (%(value) == 0 and %(max) eq "")\' will remove all metrics whose value equals 0 and that don\'t have a maximum value.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--explode-perfdata-max"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '","_","max' suffix). Eg: it will split 'used","_","prct'=26.93%;0:80;0:90;0;100 into 'used","_","prct'=26.93%;0:80;0:90;0;100 'used","_","prct","_","max'=100%;;;;")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--change-perfdata --extend-perfdata"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target","[",",","[","newuom","]",",","[","min","]",",","[","m ax","]","]","  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic","_","in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic","_","in,,percent()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--extend-perfdata-group"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation","[",",","[","ne wuom","]",",","[","min","]",",","[","max","]","]"," regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets","_","wrong,sum(packets","_","(discard     ","|","error)","_","(in","|","out))'      Sum traffic by interface:     --extend-perfdata-group='traffic","_","in","_","(.*),traffic","_","$1,sum(traf     fic","_","(in","|","out)","_","$1)'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--change-short-output --change-long-output"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--change-exit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--range-perfdata"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--filter-uom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mask the units when they don't match the given regular expression.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--opt-exit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--output-ignore-perfdata"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Remove all the metrics from the service. The service will still have a status and an output.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--output-ignore-label"),(0,n.kt)("td",{parentName:"tr",align:"left"},'Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: \'OK: Ram Total:...\' will become \'Ram Total:...\'')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--output-xml"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Return the output in XML format (to send to an XML API).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--output-json"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Return the output in JSON format (to send to a JSON API).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--output-openmetrics"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Return the output in OpenMetrics format (to send to a tool expecting this format).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--output-file"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--disco-format"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--disco-show"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--float-precision"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Define the float precision for thresholds (default: 8).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--source-encoding"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--hostname"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Hostname to query in ssh.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--timeout"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Timeout in seconds for the command (Default: 45). Default value can be override by the mode.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--command"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Command to get information. Used it you have output in a file.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--command-path"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Command path.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--command-options"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Command options.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--sudo  sudo command"),(0,n.kt)("td",{parentName:"tr",align:"left"},".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--ssh-backend"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Define the backend you want to use. It can be: sshcli (default), plink and libssh.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--ssh-username"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Define the user name to log in to the host.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--ssh-password"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--ssh-port"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Define the TCP port on which SSH is listening.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--ssh-priv-key"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Define the private key file to use for user authentication.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--sshcli-command"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ssh command (default: 'ssh').")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--sshcli-path"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ssh command path (default: none)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--sshcli-option"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specify ssh cli options (example: --sshcli-option='-o=StrictHostKeyChecking=no').")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--plink-command"),(0,n.kt)("td",{parentName:"tr",align:"left"},"plink command (default: 'plink').")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--plink-path"),(0,n.kt)("td",{parentName:"tr",align:"left"},"plink command path (default: none)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--plink-option"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specify plink options (example: --plink-option='-T').")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--libssh-strict-connect"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Connection won't be OK even if there is a problem (server known changed or server found other) with the ssh server.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--warning-",(0,n.kt)("em",{parentName:"td"}," --critical-")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Thresholds. Can be: 'ping-jitter', 'ping-latency', 'bandwidth-download', 'bandwidth-upload'.")))))),(0,n.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_monitoring_speedtest.pl \\\n    --plugin=apps::monitoring::speedtest::plugin \\\n    --mode=internet-bandwidth  \\\n    --help\n")))}h.isMDXComponent=!0}}]);