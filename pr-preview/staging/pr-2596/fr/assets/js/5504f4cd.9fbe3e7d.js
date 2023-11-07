"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[20317],{71806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>N,frontMatter:()=>p,metadata:()=>m,toc:()=>d});n(67294);var r=n(3905),a=n(51715),i=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={id:"network-tplink-snmp",title:"TP-Link SNMP"},u=void 0,m={unversionedId:"integrations/plugin-packs/procedures/network-tplink-snmp",id:"integrations/plugin-packs/procedures/network-tplink-snmp",title:"TP-Link SNMP",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/network-tplink-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-tplink-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/network-tplink-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/network-tplink-snmp.md",tags:[],version:"current",frontMatter:{id:"network-tplink-snmp",title:"TP-Link SNMP"},sidebar:"pp",previous:{title:"Teltonika SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/network-teltonika-snmp"},next:{title:"Traffic Director",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/network-oracle-otd-snmp"}},c={},d=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Comment tester le Plugin en ligne de commande et comment utiliser ses options ?",id:"comment-tester-le-plugin-en-ligne-de-commande-et-comment-utiliser-ses-options-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:2},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:3}],k={toc:d},g="wrapper";function N(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)(g,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,r.kt)("p",null,"TP-link est un fournisseur de solutions r\xe9seau."),(0,r.kt)("p",null,"Le connecteur de supervision ",(0,r.kt)("em",{parentName:"p"},"TP-Link")," utilise le protocole SNMP pour se connecter, r\xe9cup\xe9rer des informations et les m\xe9triques relatives aux \xe9quipements de marque TP-Link."),(0,r.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,r.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CPU"),(0,r.kt)("li",{parentName:"ul"},"Interfaces"),(0,r.kt)("li",{parentName:"ul"},"M\xe9moire"),(0,r.kt)("li",{parentName:"ul"},"Uptime")),(0,r.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"CPU",label:"CPU",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"These 3 metrics for CPU core and average utilization")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cpu.utilization.5s.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Percentage of CPU utilization"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cpu.utilization.1m.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Percentage of CPU utilization"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cpu.utilization.5m.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Percentage of CPU utilization"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,r.kt)(i.Z,{value:"Interfaces",label:"Interfaces",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Status of the interface"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"interface.traffic.in.bitspersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Incoming traffic going through the interface."),(0,r.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"interface.traffic.out.bitspersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Outgoing traffic going through the interface."),(0,r.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"interface.packets.in.error.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Incoming errored packets going through the interface."),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"interface.packets.in.discard.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Incoming discarded packets going through the interface."),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"interface.packets.out.error.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Outgoing errored packets going through the interface."),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"interface.packets.out.discard.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Outgoing discarded packets going through the interface."),(0,r.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,r.kt)(i.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"memory.usage.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Percentage of memory usage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,r.kt)(i.Z,{value:"Uptime",label:"Uptime",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"system.uptime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Duration of system has been working and available."),(0,r.kt)("td",{parentName:"tr",align:"left"},"s")))))),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("p",null,"La communaut\xe9 SNMP doit \xeatre activ\xe9e sur l'\xe9quipement en mode Read-only."),(0,r.kt)("p",null,"La communication doit \xeatre possible sur le port UDP 161 depuis le collecteur Centreon vers l'\xe9quipement TP-Link."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon devant superviser des \xe9quipements TP-Link:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Tplink-Snmp\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,r.kt)("em",{parentName:"li"},"TP-Link SNMP")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,r.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon devant superviser des \xe9quipements TP-Link :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Tplink-Snmp\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le RPM du connecteur de supervision ",(0,r.kt)("em",{parentName:"li"},"TP-Link SNMP")," :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-network-tplink-snmp\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,r.kt)("em",{parentName:"li"},"TP-Link SNMP")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Ajoutez un nouvel H\xf4te depuis la page "Configuration > H\xf4tes"".'),(0,r.kt)("li",{parentName:"ul"},'Compl\xe9tez les champs "Nom","Alias" & "IP Address / DNS" correspondant \xe0 votre \xe9quipement TP-Link'),(0,r.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,r.kt)("em",{parentName:"li"},"Net-Tplink-SNMP-custom"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Si vous utilisez SNMP en version 3, vous devez configurer les param\xe8tres sp\xe9cifiques associ\xe9s via la macro SNMPEXTRAOPTIONS.\nPlus d'informations dans la section ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP"),". ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Configure your own SNMPv3 credentials combo")))),(0,r.kt)("h2",{id:"comment-tester-le-plugin-en-ligne-de-commande-et-comment-utiliser-ses-options-"},"Comment tester le Plugin en ligne de commande et comment utiliser ses options ?"),(0,r.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis un collecteur Centreon en vous connectant avec l'utilisateur\n",(0,r.kt)("em",{parentName:"p"},"centreon-engine")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_tplink_snmp.pl \\\n    --plugin=network::tplink::snmp::plugin \\\n    --mode=cpu \\    \n    --hostname=10.30.2.11 \\\n    --snmp-community=centreon-tplink \\\n    --snmp-version=2c \\\n    --warning-average-5m=90 \\\n    --critical-average-5m=95 \\\n    --verbose\n  \nOK: 1 CPU(s) average usage is 7.00 % (5s) 20.00 % (1m) 10.00 % (5m) - CPU '1' usage 7.00 % (5s) 20.00 % (1m) 10.00 % (5m) | \n'cpu.utilization.5s.percentage'=7.00%;;;0;100 'cpu.utilization.1m.percentage'=20.00%;;;0;100 'cpu.utilization.5m.percentage'=10.00%;0:90;0:95;0;100 \n'1#core.cpu.utilization.5s.percentage'=7.00%;;;0;100 '1#core.cpu.utilization.1m.percentage'=20.00%;;;0;100 '1#core.cpu.utilization.5m.percentage'=10.00%;;;0;100\nCPU '1' usage 7.00 % (5s) 20.00 % (1m) 10.00 % (5m)\n")),(0,r.kt)("p",null,"La commande ci-dessus v\xe9rifie l'utilisation CPU d'un \xe9quipement TP-Link (",(0,r.kt)("inlineCode",{parentName:"p"},"--mode=cpu"),"). Les informations importantes sont l'adresse IP/FQDN\n(",(0,r.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.11"),") et la communaut\xe9 SNMP configur\xe9e sur l'\xe9quipement (",(0,r.kt)("inlineCode",{parentName:"p"},"--snmp-community='centreon-tplink'"),")."),(0,r.kt)("p",null,"Une alarme de type WARNING est d\xe9clench\xe9e si l'utilisation moyenne du CPU est sup\xe9rieure \xe0 90 sur le 5 derni\xe8res minutes (",(0,r.kt)("inlineCode",{parentName:"p"},"--warning-average-5m='90'"),").\nUne alarme CRITICAL est quant \xe0 elle d\xe9clench\xe9e si l'utilisation moyenne du CPU est sup\xe9rieure \xe0 95 sur le 5 derni\xe8res minutes (",(0,r.kt)("inlineCode",{parentName:"p"},"--critical-average-5m='95'"),")."),(0,r.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre affich\xe9e en ajoutant le param\xe8tre ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_tplink_snmp.pl \\\n    --plugin=network::tplink::snmp::plugin \\\n    --mode=cpu \\\n    --help\n")),(0,r.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s via l'option ",(0,r.kt)("inlineCode",{parentName:"p"},"--list-mode")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_tplink_snmp.pl \\\n    --plugin=network::tplink::snmp::plugin \\\n    --list-mode\n")),(0,r.kt)("h2",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,r.kt)("h3",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,r.kt)("p",null,"Si vous obtenez ce message, cela signifie que le collecteur Centreon ne parvient pas \xe0 contacter votre \xe9quipement TP-Link sur le port UDP 161, ou alors que la communaut\xe9 SNMP configur\xe9e n'est pas correcte."),(0,r.kt)("h3",{id:"unknown-snmp-get-request--cant-get-a-single-value"},"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,r.kt)("p",null,"Si vous rencontrez cette erreur, il est probable que les autorisations donn\xe9es \xe0 l'agent SNMP soient trop restreintes. Ce dernier doit avoir acc\xe8s \xe0 la branche entreprise TP-Link: .1.3.6.1.4.1.11863"))}N.isMDXComponent=!0}}]);