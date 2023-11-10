"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[96568],{38770:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>m,toc:()=>g});a(67294);var n=a(3905),r=a(51715),l=a(7626);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const s={id:"applications-php-apc-web",title:"PHP APC"},c=void 0,m={unversionedId:"integrations/plugin-packs/procedures/applications-php-apc-web",id:"integrations/plugin-packs/procedures/applications-php-apc-web",title:"PHP APC",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/applications-php-apc-web.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-php-apc-web",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/applications-php-apc-web",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-php-apc-web.md",tags:[],version:"current",frontMatter:{id:"applications-php-apc-web",title:"PHP APC"},sidebar:"pp",previous:{title:"Pfsense Fauxapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/applications-pfsense-fauxapi"},next:{title:"PHP FPM",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/applications-php-fpm-web"}},d={},g=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for ?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],u={toc:g},k="wrapper";function h(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)(k,i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){p(e,t,a[t])}))}return e}({},u,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,n.kt)("h3",{id:"templates"},"Templates"),(0,n.kt)("p",null,"The Centreon Monitoring Connector PHP APC brings 1 host template :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"App-Php-Apc-Web-custom")),(0,n.kt)("p",null,"It brings the following Service Templates:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Php-Apc-File-Cache"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Php-Apc-File-Cache-Web"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Php-Apc-Memory"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Php-Apc-Memory-Web"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,n.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Php-Apc-File-Cache",label:"Php-Apc-File-Cache",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"filecache.requests.persecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Global request rate per seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"r/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"filecache.requests.now.persecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Request Rate per seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"r/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"filecache.hits.persecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Global hit rate per seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"r/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"filecache.hits.now.persecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Hit rate per seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"r/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"filecache.misses.persecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Global miss rate per seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"r/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"filecache.misses.now.persecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Miss rate per seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"r/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"filecache.hits.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"GLobal hit ratio"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"filecache.hits.now.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Hit ratio"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,n.kt)(l.Z,{value:"Php-Apc-Memory",label:"Php-Apc-Memory",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Memory usage in bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory.fragmentation.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Memory Fragmentation"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"The target PHP APC Web page must be reachable from the Centreon Poller on the\nspecified port in the ",(0,n.kt)("em",{parentName:"p"},"PHPAPCWEBPORT")," Host Macro. More information in the\n",(0,n.kt)("a",{parentName:"p",href:"#Configuration"},"Configuration")," section."),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor your ",(0,n.kt)("em",{parentName:"li"},"PHP APC")," ressources:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Php-Apc-Web\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,n.kt)("em",{parentName:"li"},"PHP APC")," Centreon Monitoring Connector on the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page"))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor your ",(0,n.kt)("em",{parentName:"li"},"PHP APC")," ressources:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Php-Apc-Web\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Install the ",(0,n.kt)("em",{parentName:"li"},"PHP APC")," Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-php-apc-web\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,n.kt)("em",{parentName:"li"},"PHP APC")," Centreon Monitoring Connector on the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"host"},"Host"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Log into Centreon and add a new Host through ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,n.kt)("li",{parentName:"ul"},'Fill the "Name", "Alias" & "IP Address / DNS" fields according to your ',(0,n.kt)("em",{parentName:"li"},"PHP APC")," server settings"),(0,n.kt)("li",{parentName:"ul"},"Select the ",(0,n.kt)("em",{parentName:"li"},"Applications-Php-Apc-Web-custom")," template to apply to the Host"),(0,n.kt)("li",{parentName:"ul"},"Once the template applied, some Macros marked as 'Mandatory' hereafter have to be configured.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"PHPAPCWEBPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(Default: '80')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"PHPAPCWEBPROTO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(Default: 'http')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"PHPAPCWEBURLPATH"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(Default: '/apc.php')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(Default: 'Any extra option you may want to add to every command","_","line (eg. a --verbose flag)')")))),(0,n.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-"},"How to check in the CLI that the configuration is OK and what are the main options for ?"),(0,n.kt)("p",null,"Once the plugin installed, log into your Centreon Poller CLI using the\n",(0,n.kt)("em",{parentName:"p"},"centreon-engine")," user account and test the Plugin by running the following\ncommand:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_php_apc_web.pl \\\n    --plugin=apps::php::apc::web::plugin \\\n    --mode=memory \\\n    --hostname=10.0.0.1 \\\n    --proto='http' \\\n    --port='80' \\\n    --urlpath='/apc.php' \\\n    --warning-used='80' \\\n    --critical-used='90' \\\n    --warning-fragmentation='' \\\n    --critical-fragmentation='' \\\n    --use-new-perfdata \n")),(0,n.kt)("p",null,"Expected command output is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK : Memory Usage Total: 985.22 MB Used: 500.68 MB (50.82%) Free: 484.54 MB (49.18%) Memory Fragmentation: 10% | 'memory.usage.bytes'=525000704B;80;90;0;1033080832 'memory.fragmentation.percentage'=10%;;;0;100 \n")),(0,n.kt)("p",null,"This command would trigger a WARNING alarm if the memory usage is reported as\nover 80% (",(0,n.kt)("inlineCode",{parentName:"p"},"--warning-used='80'"),") and a CRITICAL alarm if over than 90%\n(",(0,n.kt)("inlineCode",{parentName:"p"},"--critical-used='90'"),")."),(0,n.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_php_apc_web.pl \\\n    --plugin=apps::php::apc::web::plugin \\\n    --mode=memory \\\n    --help\n")),(0,n.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,n.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_php_apc_web.pl \\\n    --plugin=apps::php::apc::web::plugin \\\n    --list-mode\n")),(0,n.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"Please find all the troubleshooting documentation for the Centreon Plugins\nin the ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"dedicated page")))}h.isMDXComponent=!0}}]);