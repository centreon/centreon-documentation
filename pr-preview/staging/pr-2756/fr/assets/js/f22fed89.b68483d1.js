"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[5849],{39394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>N,frontMatter:()=>o,metadata:()=>c,toc:()=>d});n(67294);var r=n(3905),a=n(51715),i=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={id:"network-ruckus-icx-snmp",title:"Ruckus ICX"},p=void 0,c={unversionedId:"integrations/plugin-packs/procedures/network-ruckus-icx-snmp",id:"integrations/plugin-packs/procedures/network-ruckus-icx-snmp",title:"Ruckus ICX",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/network-ruckus-icx-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-ruckus-icx-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/network-ruckus-icx-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/network-ruckus-icx-snmp.md",tags:[],version:"current",frontMatter:{id:"network-ruckus-icx-snmp",title:"Ruckus ICX"},sidebar:"pp",previous:{title:"Ruckus",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/network-ruckus-snmp"},next:{title:"Ruckus SCG",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/network-ruckus-scg-snmp"}},m={},d=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"\xc9l\xe9ments supervis\xe9s",id:"\xe9l\xe9ments-supervis\xe9s",level:3},{value:"R\xe8gles de d\xe9couverte",id:"r\xe8gles-de-d\xe9couverte",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:2},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Configuration SNMP de l&#39;\xe9quipement Ruckus ICX",id:"configuration-snmp-de-l\xe9quipement-ruckus-icx",level:3},{value:"Flux r\xe9seaux",id:"flux-r\xe9seaux",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration d&#39;un h\xf4te",id:"configuration-dun-h\xf4te",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:3},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:3}],k={toc:d},g="wrapper";function N(e){var{components:t}=e,n=u(e,["components"]);return(0,r.kt)(g,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,r.kt)("p",null,"Les switchs Ruckus ICX simplifient la configuration et la maintenance des r\xe9seaux, am\xe9liorent la s\xe9curit\xe9,\nfacilitent l'exploitation et rendent les mont\xe9es de version plus simples.\nIls peuvent s'int\xe9grer en toute transparence avec les points d'acc\xe8s Wi-Fi Ruckus, les contr\xf4leurs Ruckus SmartZone\net Ruckus Cloud pour d\xe9livrer les meilleurs performances et unifier les co\xfbts.  "),(0,r.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,r.kt)("h3",{id:"\xe9l\xe9ments-supervis\xe9s"},"\xc9l\xe9ments supervis\xe9s"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ruckus ICX Switches series")),(0,r.kt)("h3",{id:"r\xe8gles-de-d\xe9couverte"},"R\xe8gles de d\xe9couverte"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Services",label:"Services",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Rule name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Net-Ruckus-Icx-SNMP-Traffic-Name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Discover network interfaces and monitor status and bandwidth utilization")))))),(0,r.kt)("h2",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Cpu",label:"Cpu",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cpu.utilization.5s.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"CPU usage for the last 5s period. Unit: percentage (%)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cpu.utilization.1m.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"CPU usage for the last 1m period. Unit: percentage (%)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cpu.utilization.5m.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"CPU usage for the last 5m period. Unit: percentage (%)"))))),(0,r.kt)(i.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"memory.usage.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Memory usage in bytes. Unit: Bytes (B)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"memory.usage.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Memory usage in percentage. Unit: percentage (%)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"memory.free.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Free memory. Unit: Bytes (B)"))))),(0,r.kt)(i.Z,{value:"Interfaces",label:"Interfaces",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Status of the interface")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"interface.traffic.in.bitspersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Incoming traffic going through the interface. Unit: bits/second (b/s)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"interface.traffic.out.bitspersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Outgoing traffic going through the interface. Unit: bits/second (b/s)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"interface.packets.in.error.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Incoming errored packets going through the interface. Unit: percentage (%)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"interface.packets.in.discard.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Incoming discarded packets going through the interface. Unit: percentage (%)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"interface.packets.out.error.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Outgoing errored packets going through the interface. Unit: percentage (%)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"interface.packets.out.discard.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Outgoing discarded packets going through the interface. Unit: percentage (%)")))))),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("h3",{id:"configuration-snmp-de-l\xe9quipement-ruckus-icx"},"Configuration SNMP de l'\xe9quipement Ruckus ICX"),(0,r.kt)("p",null,"Pour superviser votre \xe9quipement Ruckus ICX, le SNMP v2 doit \xeatre configur\xe9 et l'adresse IP du collecteur Centreon autoris\xe9e \xe0 interroger l'\xe9quipement."),(0,r.kt)("h3",{id:"flux-r\xe9seaux"},"Flux r\xe9seaux"),(0,r.kt)("p",null,"Les collecteurs Centreon doivent pouvoir joindre le port UDP/161 SNMP de l'\xe9quipement."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon supervisant des \xe9quipements Ruckus ICX:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Switch-Ruckus-Icx-Snmp\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,r.kt)("em",{parentName:"li"},"Ruckus ICX")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,r.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon supervisant des \xe9quipements Ruckus ICX:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Switch-Ruckus-Icx-Snmp\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Installer le RPM du connecteur de supervision sur le serveur Centreon Central:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-network-switch-ruckus-icx-snmp\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Centreon connecteur de supervision ",(0,r.kt)("em",{parentName:"li"},"Ruckus ICX")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,r.kt)("h2",{id:"configuration-dun-h\xf4te"},"Configuration d'un h\xf4te"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Depuis l\'interface Web de Centreon, ajoutez un nouvel H\xf4te depuis la page "Configuration > H\xf4tes".'),(0,r.kt)("li",{parentName:"ul"},"Appliquez le mod\xe8le d'H\xf4te ",(0,r.kt)("em",{parentName:"li"},"Net-Switch-Ruckus-Icx-SNMP-custom")," et renseignez les champs ",(0,r.kt)("em",{parentName:"li"},"SNMP community")," et ",(0,r.kt)("em",{parentName:"li"},"SNMP version"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Si vous utilisez SNMP en version 3, vous devez configurer les param\xe8tres sp\xe9cifiques associ\xe9s via la macro SNMPEXTRAOPTIONS.\nPlus d'informations dans la section ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP"),". ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"SNMP Extra options of Ruckus ICX")))),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h3",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,r.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon\navec l'utilisateur ",(0,r.kt)("em",{parentName:"p"},"centreon-engine")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_ruckus_icx_snmp.pl \\\n    --plugin=network::ruckus::icx::snmp::plugin \\\n    --hostname=ruckus.int.centreon.com \\\n    --snmp-version='2c' \\\n    --snmp-community='public' \\\n    --mode=memory \\\n    --warning-usage-prct='80' \\\n    --critical-usage-prct='90' \\\n    --verbose\n")),(0,r.kt)("p",null,"La commande devrait retourner le message de sortie ci-dessous:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OK: memory total: 7.78 GB used: 5.83 GB (75.00%) free: 1.94 GB (25.00%)|\n'memory.usage.bytes'=6261946368B;;;0;8349261824; 'memory.free.bytes'=2087315456B;;;0;8349261824; 'memory.usage.percentage'=75.00%;;;0;100\n")),(0,r.kt)("p",null,"La commande ci-dessus interroge le switch Ruckus en SNMP (",(0,r.kt)("inlineCode",{parentName:"p"},"--plugin=network::ruckus::icx::snmp::plugin"),"); en utilisant la communaut\xe9 ",(0,r.kt)("em",{parentName:"p"},"public")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--snmp-community='public'"),")\net la version ",(0,r.kt)("em",{parentName:"p"},"2c")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--snmp-version='2c'"),") du protocole.\nCette commande supervise la m\xe9moire du switch (",(0,r.kt)("inlineCode",{parentName:"p"},"--mode=memory"),")."),(0,r.kt)("p",null,"La commande retournera une alerte WARNING si l'utilisation de la m\xe9moire d\xe9passe 80% (",(0,r.kt)("inlineCode",{parentName:"p"},"--warning-usage-prct='80'"),")\net une alerte CRITIQUE au del\xe0 de 90%  (",(0,r.kt)("inlineCode",{parentName:"p"},"--critical-usage-prct='90'"),")."),(0,r.kt)("p",null,"Les seuils d'alertes peuvent \xeatre d\xe9finis pour l'ensemble des m\xe9triques collect\xe9es \xe0 l'aide des\noptions ",(0,r.kt)("inlineCode",{parentName:"p"},"--warning-*")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"--critical-*"),", par exemple:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--warning-usage-free=500000000 --critical-usage-free=250000000")),(0,r.kt)("p",null,"Pour chaque mode, les options disponibles peuvent \xeatre consult\xe9es en ajoutant l'option ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_ruckus_icx_snmp.pl \\ \n    --plugin=network::ruckus::icx::snmp::plugin \\\n    --mode=memory \\\n    --help\n")),(0,r.kt)("p",null,"Vous pouvez afficher tous les modes disponibles \xe0 l'aide de la commande suivante :`"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_ruckus_icx_snmp.pl \\\n    --plugin=network::ruckus::icx::snmp::plugin \\\n    --list-mode\n")),(0,r.kt)("h3",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,r.kt)("p",null,"Si vous obtenez ce message, cela signifie le collecteur Centreon ne parvient pas \xe0 contacter l'\xe9quipement Ruckus ICX sur le port 161 (pare-feu ou autre \xe9quipement en coupure) ou que la communaut\xe9 SNMP configur\xe9e n'est pas correcte."),(0,r.kt)("h3",{id:"unknown-snmp-get-request--cant-get-a-single-value"},"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,r.kt)("p",null,"Les causes de cette erreur peuvent \xeatre les suivantes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"cet \xe9quipement ne supporte ou n'embarque pas la MIB utilis\xe9e par ce mode."),(0,r.kt)("li",{parentName:"ul"},"les autorisations donn\xe9es \xe0 l'utilisateur en SNMP sont trop restreintes. L'agent SNMP doit \xeatre en mesure d'acc\xe9der \xe0 la branche entreprise Ruckus: ",(0,r.kt)("em",{parentName:"li"},".1.3.6.1.4.1.1991"),".")))}N.isMDXComponent=!0}}]);