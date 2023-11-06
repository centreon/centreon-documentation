"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[92690],{61598:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>N,frontMatter:()=>s,metadata:()=>m,toc:()=>c});a(67294);var n=a(3905),r=a(51715),l=a(7626);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const s={id:"applications-monitoring-netdata-restapi",title:"Netdata RestAPI"},u=void 0,m={unversionedId:"integrations/plugin-packs/procedures/applications-monitoring-netdata-restapi",id:"integrations/plugin-packs/procedures/applications-monitoring-netdata-restapi",title:"Netdata RestAPI",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-monitoring-netdata-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-monitoring-netdata-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-netdata-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-monitoring-netdata-restapi.md",tags:[],version:"current",frontMatter:{id:"applications-monitoring-netdata-restapi",title:"Netdata RestAPI"},sidebar:"pp",previous:{title:"Netbackup NSClient++ API",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/applications-netbackup-nsclient-05-restapi"},next:{title:"Nginx Plus Restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/applications-nginx-plus-restapi"}},d={},c=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"\xc9l\xe9ments supervis\xe9s",id:"\xe9l\xe9ments-supervis\xe9s",level:3},{value:"Points de contr\xf4le disponibles",id:"points-de-contr\xf4le-disponibles",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation de l&#39;agent Netdata",id:"installation-de-lagent-netdata",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:3},{value:"J&#39;obtiens le message d&#39;erreur suivant:",id:"jobtiens-le-message-derreur-suivant",level:3},{value:"<code>UNKNOWN: 500 Can&#39;t connect to myserver.mycompany.com:19999 |</code>",id:"unknown-500-cant-connect-to-myservermycompanycom19999-",level:4},{value:"<code>UNKNOWN: 501 Protocol scheme &#39;connect&#39; is not supported |</code>",id:"unknown-501-protocol-scheme-connect-is-not-supported-",level:4},{value:"<code>UNKNOWN: Cannot load module &#39;Net::Curl::Easy&#39;</code>",id:"unknown-cannot-load-module-netcurleasy",level:4}],k={toc:c},g="wrapper";function N(e){var{components:t}=e,a=p(e,["components"]);return(0,n.kt)(g,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){i(e,t,a[t])}))}return e}({},k,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,n.kt)("p",null,"Netdata est un outil open source pour visualiser et surveiller les mesures en temps r\xe9el, optimis\xe9 pour accumuler tous les types de donn\xe9es,\ntels que l'utilisation du processeur, l'activit\xe9 du disque, les requ\xeates SQL, les visites sur un site Web, etc."),(0,n.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,n.kt)("h3",{id:"\xe9l\xe9ments-supervis\xe9s"},"\xc9l\xe9ments supervis\xe9s"),(0,n.kt)("p",null,"Le connecteur de supervision Netdata RestAPI permet de superviser l'ensemble des donn\xe9es d'un serveur accessibles au travers de l'API de l'agent Netdata.\nL'agent est quant \xe0 lui compatible avec les OS suivants:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Linux (Debian, Ubuntu, RedHat, CentOS, Fedora, Arch...)"),(0,n.kt)("li",{parentName:"ul"},"BSD"),(0,n.kt)("li",{parentName:"ul"},"MacOs"),(0,n.kt)("li",{parentName:"ul"},"pfSense"),(0,n.kt)("li",{parentName:"ul"},"Synology")),(0,n.kt)("h3",{id:"points-de-contr\xf4le-disponibles"},"Points de contr\xf4le disponibles"),(0,n.kt)("p",null,"Le connecteur de supervision dans sa version actuelle permet la supervision des points de contr\xf4le suivants:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Alarmes Netdata"),(0,n.kt)("li",{parentName:"ul"},"CPU"),(0,n.kt)("li",{parentName:"ul"},"Disques (Utilisation & Inodes)"),(0,n.kt)("li",{parentName:"ul"},"Load"),(0,n.kt)("li",{parentName:"ul"},"RAM"),(0,n.kt)("li",{parentName:"ul"},"Swap"),(0,n.kt)("li",{parentName:"ul"},"Inodes"),(0,n.kt)("li",{parentName:"ul"},"Trafic r\xe9seau"),(0,n.kt)("li",{parentName:"ul"},'"Chart" personnalis\xe9')),(0,n.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,n.kt)("p",null,"Les m\xe9triques collect\xe9es par le Plugin sont les suivantes:"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Alarms",label:"Alarms",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"netdata.alarms.current.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current total active alarms triggered by the Netdata agent"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"netdata.alarms.current.warning.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current warning alarms triggered by the Netdata agent"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"netdata.alarms.current.critical.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current critical alarms triggered by the Netdata agent"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"CPU",label:"CPU",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cpu.utilization.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Average total CPU usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"core.cpu.utilization.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Per core CPU usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,n.kt)(l.Z,{value:"Disks",label:"Disks",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"storage.partitions.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total number of partitions"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"storage.space.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Per partition space usage (in Bytes)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"storage.space.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Per partition space usage (in %)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"storage.space.free.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Per partition free space (in Bytes)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B"))))),(0,n.kt)(l.Z,{value:"Inodes",label:"Inodes",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"storage.inodes.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Per partition Inodes usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,n.kt)(l.Z,{value:"Load",label:"Load",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"load1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"System load average on a 1 minute period"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"load5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"System load average on a 5 minutes period"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"load15"),(0,n.kt)("td",{parentName:"tr",align:"left"},"System load average on a 15 minutes period"),(0,n.kt)("td",{parentName:"tr",align:"center"}))))),(0,n.kt)(l.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total current memory usage (in Bytes)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total current memory usage (in %)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory.free.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current free memory"),(0,n.kt)("td",{parentName:"tr",align:"center"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory.buffer.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current amount of memory allocated to 'buffer'"),(0,n.kt)("td",{parentName:"tr",align:"center"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory.cached.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current amount of memory allocated to 'cached'"),(0,n.kt)("td",{parentName:"tr",align:"center"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory.shared.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current amount of memory allocated to 'shared'"),(0,n.kt)("td",{parentName:"tr",align:"center"},"B"))))),(0,n.kt)(l.Z,{value:"Swap",label:"Swap",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"swap.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Swap space usage (in Bytes)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"swap.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Swap space usage (in %)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"swap.free.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Free Swap space"),(0,n.kt)("td",{parentName:"tr",align:"center"},"B"))))),(0,n.kt)(l.Z,{value:"Traffic",label:"Traffic",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"network.traffic.in.bitspersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Per interface incoming traffic"),(0,n.kt)("td",{parentName:"tr",align:"center"},"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"network.traffic.out.bitspersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Per interface outgoing traffic"),(0,n.kt)("td",{parentName:"tr",align:"center"},"b/s")))))),(0,n.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,n.kt)("h3",{id:"installation-de-lagent-netdata"},"Installation de l'agent Netdata"),(0,n.kt)("p",null,"L'agent Netdata doit \xeatre install\xe9 et op\xe9rationnel sur le serveur cible afin de pouvoir utiliser le connecteur de supervision Centreon Netdata."),(0,n.kt)("p",null,"Vous trouverez plus d'informations sur comment installer et configurer l'agent Netdata en suivant la documentation officielle:\n",(0,n.kt)("a",{parentName:"p",href:"https://learn.netdata.cloud/docs/agent/packaging/installer"},"https://learn.netdata.cloud/docs/agent/packaging/installer")),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon supervisant des agents Netdata :")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Monitoring-Netdata-Restapi\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,n.kt)("em",{parentName:"li"},"Netdata RestAPI")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon supervisant des agents Netdata :")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Monitoring-Netdata-Restapi\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Installer le RPM du connecteur de supervision sur le serveur Centreon Central:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-monitoring-netdata-restapi.noarch\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Depuis l'interface Web de Centreon, installer le connecteur de supervision ",(0,n.kt)("em",{parentName:"li"},"Netdata RestAPI")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Sur l\'interface Web de Centreon, ajoutez un nouvel H\xf4te depuis la page "Configuration > H\xf4tes".'),(0,n.kt)("li",{parentName:"ul"},"Appliquez le mod\xe8le d'H\xf4te ",(0,n.kt)("em",{parentName:"li"},"App-Monitoring-Netdata-Restapi")," et configurer les macros n\xe9cessaires :")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NETDATAAPIPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Port used (Default: 19999)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NETDATAAPIPROTOCOL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specify https if needed (Default: 'http')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NETDATAAPIENDPOINT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specify the API URL path (Default: '/api/v1')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a ",(0,n.kt)("inlineCode",{parentName:"td"},"--verbose")," flag)")))),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("h3",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,n.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur\nCentreon avec l'utilisateur ",(0,n.kt)("em",{parentName:"p"},"centreon-engine"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_monitoring_netdata_restapi.pl \\\n    --plugin=apps::monitoring::netdata::restapi::plugin \\\n    --hostname=10.0.0.1 \\\n    --mode=cpu \\\n    --warning-average=70 \\\n    --critical-average=80 \\\n    --verbose\n")),(0,n.kt)("p",null,"La commande doit retourner un r\xe9sultat de la forme suivante:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: 2 CPU(s) average usage is 17.23 % | \n'cpu.utilization.percentage'=17.23%;0:40;0:50;0;100 '0#core.cpu.utilization.percentage'=16.71%;;;0;100 '1#core.cpu.utilization.percentage'=17.75%;;;0;100\nCPU '0' usage: 16.71 %\nCPU '1' usage: 17.75 %\n")),(0,n.kt)("p",null,"Cette commande v\xe9rifie l'utilisation CPU moyenne (",(0,n.kt)("inlineCode",{parentName:"p"},"--mode=cpu"),") d'un serveur h\xe9bergeant l'agent Netdata en requ\xeatant l'API de ce dernier\n(",(0,n.kt)("inlineCode",{parentName:"p"},"--plugin=apps::monitoring::netdata::restapi::plugin --hostname=10.0.0.1"),")."),(0,n.kt)("p",null,"Cette commande d\xe9clenchera une alarme WARNING si l'utilisation CPU moyenne d\xe9passe 70%   (",(0,n.kt)("inlineCode",{parentName:"p"},"--warning-average=70"),")\net une alarme de type CRITICAL pour une utilisation moyenne sup\xe9rieure \xe0 80% (",(0,n.kt)("inlineCode",{parentName:"p"},"--critical-average=80"),")."),(0,n.kt)("p",null,"Pour chaque mode, les options disponibles peuvent \xeatre consult\xe9es en ajoutant l'option ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/usr/lib/centreon/plugins/centreon_monitoring_netdata_restapi.pl \\\n    --plugin=apps::monitoring::netdata::restapi::plugin \\\n    --hostname=10.0.0.1 \\\n    --mode=cpu \\\n    --help\n")),(0,n.kt)("h3",{id:"jobtiens-le-message-derreur-suivant"},"J'obtiens le message d'erreur suivant:"),(0,n.kt)("h4",{id:"unknown-500-cant-connect-to-myservermycompanycom19999-"},(0,n.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to myserver.mycompany.com:19999 |")),(0,n.kt)("p",null,"Lors du d\xe9ploiement de mes contr\xf4les, j'obtiens le message suivant: ",(0,n.kt)("inlineCode",{parentName:"p"},"UNKNOWN: 500 Can't connect to myserver.mycompany.com:19999 |"),"."),(0,n.kt)("p",null,"Cela signifie que Centreon n'a pas r\xe9ussi \xe0 se connecter \xe0 l'API Netdata du serveur cible."),(0,n.kt)("p",null,"Si l'utilisation d'un proxy est requise pour les connexions HTTP depuis le collecteur Centreon,\nil est n\xe9cessaire de le pr\xe9ciser dans la commande en utilisant l'option ",(0,n.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany.com:8080'"),"."),(0,n.kt)("h4",{id:"unknown-501-protocol-scheme-connect-is-not-supported-"},(0,n.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported |")),(0,n.kt)("p",null,"Suite \xe0 la mise en place du proxy, j'obtiens le message suivant ",(0,n.kt)("inlineCode",{parentName:"p"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported |")),(0,n.kt)("p",null,"Cela signifie que le protocole de connexion au proxy n'est pas support\xe9 par la libraire ",(0,n.kt)("em",{parentName:"p"},"lwp")," utlis\xe9e par d\xe9faut par le Plugin Centreon."),(0,n.kt)("p",null,"Cette erreur peut \xeatre r\xe9solue en utilisant le backend HTTP ",(0,n.kt)("em",{parentName:"p"},"curl"),". Pour ce faire, ajoutez l'option ",(0,n.kt)("inlineCode",{parentName:"p"},"--http-backend='curl'")," \xe0 la commande."),(0,n.kt)("h4",{id:"unknown-cannot-load-module-netcurleasy"},(0,n.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: Cannot load module 'Net::Curl::Easy'")),(0,n.kt)("p",null,"Ce message d'erreur signifie qu'une librairie Perl est manquante."),(0,n.kt)("p",null,"Dans le cas pr\xe9sent, vous pouvez installer la librairie manquante en lan\xe7ant la commande suivante:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install perl-Net-Curl\n")))}N.isMDXComponent=!0}}]);