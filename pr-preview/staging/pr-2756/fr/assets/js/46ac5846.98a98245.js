"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[15794],{67420:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>N,frontMatter:()=>u,metadata:()=>m,toc:()=>d});a(67294);var n=a(3905),r=a(51715),l=a(7626);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const u={id:"hardware-devices-polycom-dma-snmp",title:"Polycom DMA SNMP"},p=void 0,m={unversionedId:"integrations/plugin-packs/procedures/hardware-devices-polycom-dma-snmp",id:"integrations/plugin-packs/procedures/hardware-devices-polycom-dma-snmp",title:"Polycom DMA SNMP",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-devices-polycom-dma-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-devices-polycom-dma-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/hardware-devices-polycom-dma-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-devices-polycom-dma-snmp.md",tags:[],version:"current",frontMatter:{id:"hardware-devices-polycom-dma-snmp",title:"Polycom DMA SNMP"},sidebar:"pp",previous:{title:"Avaya Media Gateway SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/hardware-telephony-avaya-mediagateway-snmp"},next:{title:"Polycom HDX SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/hardware-devices-polycom-hdx-snmp"}},c={},d=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Configuration SNMP de l&#39;\xe9quipement",id:"configuration-snmp-de-l\xe9quipement",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:3},{value:"Comment puis-je superviser les resources syst\xe8me tels que CPU, disques...?",id:"comment-puis-je-superviser-les-resources-syst\xe8me-tels-que-cpu-disques",level:3},{value:"J&#39;obtiens le message d&#39;erreur suivant:",id:"jobtiens-le-message-derreur-suivant",level:3},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:4},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:4}],g={toc:d},k="wrapper";function N(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)(k,i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){s(e,t,a[t])}))}return e}({},g,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,n.kt)("p",null,"Le Distributed Media Application (DMA) est une application logicielle r\xe9seau qui g\xe8re et distribue les appels sur les r\xe9seaux\nde collaboration. Gr\xe2ce \xe0 des algorithmes intelligents, DMA achemine les appels de fa\xe7on dynamique sur l'ensemble du r\xe9seau\ns\xe9curis\xe9 en fonction de la priorit\xe9, du niveau de service, de la disponibilit\xe9 des ressources et des pannes r\xe9seau, avec un\n\xe9quilibrage de charge hautement efficace et une virtualisation des ressources de pont. "),(0,n.kt)("p",null,"Le connecteur de supervision Centreon utilise le protocole SNMP pour se connecter et r\xe9cup\xe9rer informations et m\xe9triques relatives aux \xe9quipements\nPolycom DMA."),(0,n.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,n.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Appliances Polycom DMA"),(0,n.kt)("li",{parentName:"ul"},"Clusters Polycom DMA")),(0,n.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Alerts",label:"Alerts",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dma.alerts.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of alerts."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,n.kt)(l.Z,{value:"Conference-Manager",label:"Conference-Manager",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dma.conferences.active.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of active conference on the DMA"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dma.cluster.conferences.active.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of active conference on a cluster"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dma.cluster.participants.active.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of active participants on a cluster"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dma.cluster.local.database.users.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of local users in a cluster database"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dma.cluster.custom.conference.rooms.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of custom user rooms in a cluster"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dma.cluster.video.port.usage.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of video ports used by a cluster"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dma.cluster.video.port.free.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of free video ports on a cluster"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dma.cluster.video.port.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Percentage of video port used by a cluster"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dma.cluster.voice.port.usage.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of voice ports used by a cluster"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dma.cluster.voice.port.free.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of free voice ports on a cluster"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dma.cluster.voice.port.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Percentage of voice port used by a cluster"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")))),(0,n.kt)("p",null,"Vous pouvez utiliser l'option ",(0,n.kt)("inlineCode",{parentName:"p"},"--filter-cluster")," afin de restreindre le contr\xf4le sur un cluster donn\xe9.")),(0,n.kt)(l.Z,{value:"Clusters-Usage",label:"Clusters-Usage",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dma.clusters.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total number of DMA clusters"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dma.cluster.activecalls.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current active calls per cluster"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dma.cluster.licenses.free.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current free licenses sessions per cluster"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dma.cluster.licenses.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current percentage of licenses sessions used per cluster"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")))),(0,n.kt)("p",null,"Vous pouvez utiliser l'option ",(0,n.kt)("inlineCode",{parentName:"p"},"--filter-cluster")," afin de restreindre le contr\xf4le sur un cluster donn\xe9.")),(0,n.kt)(l.Z,{value:"Device-Registrations",label:"Device-Registrations",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dma.registrations.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of devices registered on the DMA"),(0,n.kt)("td",{parentName:"tr",align:null},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dma.cluster.endpoint.registrations.active.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of endpoint active registrations on a cluster"),(0,n.kt)("td",{parentName:"tr",align:null},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dma.cluster.endpoint.registrations.inactive.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of endpoint inactive registrations on a cluster"),(0,n.kt)("td",{parentName:"tr",align:null},"Count")))),(0,n.kt)("p",null,"Vous pouvez utiliser l'option ",(0,n.kt)("inlineCode",{parentName:"p"},"--filter-cluster")," afin de restreindre le contr\xf4le sur un cluster donn\xe9.")),(0,n.kt)(l.Z,{value:"Servers-usage",label:"Servers-usage",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dma.server.cpu.utilization.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CPU Utilization of a server"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dma.server.memory.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Memory usage of a server"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dma.server.memory.free.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Free memory on a server"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dma.server.memory.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Memory percentage use on a server"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dma.server.swap.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Swap usage of a server"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dma.server.swap.free.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Free swap on a server"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dma.server.swap.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Swap percentage use on a server"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dma.server.disk.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Disk space usage of a server"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dma.server.disk.free.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Free disk space on a server"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dma.server.disk.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Disk percentage space usage on a server"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dma.server.logs.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Logs space usage of a server"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dma.server.logs.free.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Free logs space on a server"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dma.server.logs.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Logs percentage space usage on a server"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")))))),(0,n.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,n.kt)("h3",{id:"configuration-snmp-de-l\xe9quipement"},"Configuration SNMP de l'\xe9quipement"),(0,n.kt)("p",null,"La documentation officielle Polycom (en anglais, lien ci-dessous) d\xe9taille les \xe9tapes pour activer et configurer le service SNMP:\n",(0,n.kt)("a",{parentName:"p",href:"https://documents.polycom.com/bundle/dma-ops-9-0/page/dma-ops-help/snmp/TOC_Configure_SNMP_Settings.htm"},"https://documents.polycom.com/bundle/dma-ops-9-0/page/dma-ops-help/snmp/TOC_Configure_SNMP_Settings.htm")),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin sur chaque collecteur Centreon devant superviser des \xe9quipements Polycom DMA:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Devices-Polycom-Dma-Snmp\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,n.kt)("em",{parentName:"li"},"Polycom DMA SNMP"),"\ndepuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")," "))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin sur chaque collecteur Centreon devant superviser des \xe9quipements Polycom DMA:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Devices-Polycom-Dma-Snmp\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Installer le RPM du connecteur de supervision sur le serveur Centreon Central:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-devices-polycom-dma-snmp\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,n.kt)("em",{parentName:"li"},"Polycom DMA SNMP"),"\ndepuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Ajoutez un nouvel H\xf4te depuis la page "Configuration > H\xf4tes"'),(0,n.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,n.kt)("em",{parentName:"li"},"Communaut\xe9 SNMP")," et ",(0,n.kt)("em",{parentName:"li"},"Version SNMP")),(0,n.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,n.kt)("em",{parentName:"li"},"HW-Device-Polycom-Dma-SNMP-Custom"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Si vous utilisez SNMP en version 3, vous devez configurer les param\xe8tres sp\xe9cifiques associ\xe9s via la macro SNMPEXTRAOPTIONS.\nPlus d'informations dans la section ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP"),". ")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Extra options SNMP")))),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("h3",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,n.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande\ndepuis un collecteur Centreon en vous connectant avec l'utilisateur ",(0,n.kt)("em",{parentName:"p"},"centreon-engine"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_polycom_dma_snmp.pl \\\n    --plugin=hardware::devices::polycom::dma::snmp::plugin \\\n    --mode=clusters \\\n    --hostname=10.0.0.1 \\\n    --snmp-version='2c'\n    --snmp-community='mysnmpcommunity' \\\n    --critical-cluster-status='%{cluster_status} =~ /outOfService/i' \\\n    --critical-license-status='%{license_status} =~ /notinstalled/i' \\\n    --warning-cluster-license-usage-prct='80' \\\n    --critical-cluster-license-usage-prct='90' \\\n    --verbose\n")),(0,n.kt)("p",null,"La commande devrait retourner un message de sortie de la forme ci-dessous:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Total clusters : 1 - Cluster 'my_dma_cluster_1' Active calls : 78, Free licenses : 722, Licenses percentage usage : 9.75% |\n'dma.clusters.total.count'=1;;;0; 'my_dma_cluster_1#dma.cluster.activecalls.count'=78;;;;800 \n'my_dma_cluster_1#dma.cluster.licenses.free.count'=722;;;0; 'my_dma_cluster_1#dma.cluster.licenses.usage.percentage'=9.75%;0:80;0:90;0;\nCluster 'my_dma_cluster_1' Active calls : 78, Free licenses : 722, Licenses percentage usage : 9.75%\n")),(0,n.kt)("p",null,"Dans cet exemple, le Plugin r\xe9cup\xe8re les informations concernant l'\xe9tat du ",(0,n.kt)("em",{parentName:"p"},"Cluster")," d'un noeud Polycom DMA (",(0,n.kt)("inlineCode",{parentName:"p"},"--plugin=hardware::devices::polycom::dma::snmp::plugin --mode=clusters"),")\nidentifi\xe9 par l'adresse IP ",(0,n.kt)("em",{parentName:"p"},"10.0.0.1")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--hostname=10.0.0.1"),"). Les param\xe8tres de communaut\xe9 et de version SNMP (",(0,n.kt)("inlineCode",{parentName:"p"},"--snmp-version='2c' --snmp-community='mysnmpcommunity'"),")\ncorrespondants sont renseign\xe9s afin de pouvoir joindre l'\xe9quipement."),(0,n.kt)("p",null,"Une alarme WARNING sera ainsi d\xe9clench\xe9e si le nombre d'appels en cours au travers de la plateforme d\xe9passe 80% du nombre total d'appels\nautoris\xe9 par la licence (",(0,n.kt)("inlineCode",{parentName:"p"},"--warning-cluster-license-usage-prct='80'"),") et une alarme CRITICAL au del\xe0 de 90% (",(0,n.kt)("inlineCode",{parentName:"p"},"--critical-cluster-license-usage-prct='90'"),")."),(0,n.kt)("p",null,"Cette commande d\xe9clenchera \xe9galement une alarme CRITICAL dans les cas suivants:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Si le noeud du ",(0,n.kt)("em",{parentName:"li"},"Cluster")," remonte un \xe9tat ",(0,n.kt)("em",{parentName:"li"},"Out of Service")," (",(0,n.kt)("inlineCode",{parentName:"li"},"--critical-cluster-status='%{cluster_status} =~ /outOfService/i'"),")"),(0,n.kt)("li",{parentName:"ul"},"Si la licence pr\xe9sente sur le noeud du ",(0,n.kt)("em",{parentName:"li"},"Cluster")," est invalide (",(0,n.kt)("inlineCode",{parentName:"li"},"--critical-license-status='%{license_status} =~ /notinstalled/i'"),")")),(0,n.kt)("p",null,"Pour chaque mode, la liste de toutes les m\xe9triques, seuils associ\xe9s et options compl\xe9mentaires peut \xeatre affich\xe9e\nen ajoutant le param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_polycom_dma_snmp.pl --plugin=hardware::devices::polycom::dma::snmp::plugin --mode=clusters --help\n")),(0,n.kt)("h3",{id:"comment-puis-je-superviser-les-resources-syst\xe8me-tels-que-cpu-disques"},"Comment puis-je superviser les resources syst\xe8me tels que CPU, disques...?"),(0,n.kt)("p",null,"Les \xe9quipements Polycom DMA sont bas\xe9s sur des syst\xe8mes Linux. Il est ainsi possible de superviser les resources de la couche OS\nen appliquant le Mod\xe8le d'H\xf4te ",(0,n.kt)("em",{parentName:"p"},"OS-Linux-Snmp-Custom")," en compl\xe9ment du Mod\xe8le ",(0,n.kt)("em",{parentName:"p"},"HW-Device-Polycom-Dma-SNMP-Custom")," d\xe9crit pr\xe9c\xe9demment."),(0,n.kt)("h3",{id:"jobtiens-le-message-derreur-suivant"},"J'obtiens le message d'erreur suivant:"),(0,n.kt)("h4",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,n.kt)("p",null,"Si vous obtenez ce message, cela signifie que vous ne parvenez pas \xe0 contacter l'\xe9quipement Polycom DMA sur le port UDP/161,\nou que la communaut\xe9 SNMP configur\xe9e n'est pas correcte. Il est \xe9galement possible qu'un pare-feu bloque le flux."),(0,n.kt)("h4",{id:"unknown-snmp-get-request--cant-get-a-single-value"},"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,n.kt)("p",null,"Les causes de cette erreur peuvent \xeatre les suivantes: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"cet \xe9quipement ne supporte ou n'embarque pas la MIB utilis\xe9e par ce mode"),(0,n.kt)("li",{parentName:"ul"},"les autorisations donn\xe9es \xe0 l'utilisateur en SNMP sont trop restreintes.")))}N.isMDXComponent=!0}}]);