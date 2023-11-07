"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[15190],{14084:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>m,toc:()=>d});n(67294);var r=n(3905),a=n(51715),i=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={id:"network-fortinet-fortiweb-snmp",title:"Fortinet FortiWeb SNMP"},u=void 0,m={unversionedId:"integrations/plugin-packs/procedures/network-fortinet-fortiweb-snmp",id:"integrations/plugin-packs/procedures/network-fortinet-fortiweb-snmp",title:"Fortinet FortiWeb SNMP",description:"Contenu du connecteur de supervision",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/network-fortinet-fortiweb-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-fortinet-fortiweb-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/network-fortinet-fortiweb-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/network-fortinet-fortiweb-snmp.md",tags:[],version:"current",frontMatter:{id:"network-fortinet-fortiweb-snmp",title:"Fortinet FortiWeb SNMP"},sidebar:"pp",previous:{title:"Fortinet FortiSwitch SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/network-fortinet-fortiswitch-snmp"},next:{title:"Freebox RestAPI",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/network-freebox-restapi"}},c={},d=[{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"R\xe8gles de d\xe9couvertes",id:"r\xe8gles-de-d\xe9couvertes",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostique",id:"diagnostique",level:2}],k={toc:d},g="wrapper";function f(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)(g,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,r.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,r.kt)("p",null,"Le connecteur de supervision Fortinet FortiWeb SNMP collecte les donn\xe9es pour:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Interfaces"),(0,r.kt)("li",{parentName:"ul"},"Proxy"),(0,r.kt)("li",{parentName:"ul"},"System")),(0,r.kt)("h3",{id:"r\xe8gles-de-d\xe9couvertes"},"R\xe8gles de d\xe9couvertes"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Services",label:"Services",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Nom de la r\xe8gle"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Net-Fortinet-Fortiweb-SNMP-Interface-Name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"D\xe9couvre les interfaces r\xe9seaux et supervise le statut et l'utilisation de la bande passante")))))),(0,r.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Interfaces",label:"Interfaces",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Status of the interface"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.traffic.in.bitspersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Incoming traffic going through the interface"),(0,r.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.traffic.in.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Percentage of the interface's ",(0,r.kt)("em",{parentName:"td"},"in")," bandwidth usage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.traffic.out.bitspersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Outgoing traffic going through the interface"),(0,r.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.traffic.out.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Percentage of the interface's ",(0,r.kt)("em",{parentName:"td"},"out")," bandwidth usage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")))),(0,r.kt)("p",null,"A regexp filter is available to target a specific interface identifier - ifName ","[",(0,r.kt)("inlineCode",{parentName:"p"},"--interface='^eth0$' --name"),"]")),(0,r.kt)(i.Z,{value:"Proxy",label:"Proxy",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"proxy.connections.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current number of connections"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"proxy.connections.persecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Average number of connections"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"proxy.services.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of services"),(0,r.kt)("td",{parentName:"tr",align:"left"}))))),(0,r.kt)(i.Z,{value:"System",label:"System",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ha status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"High-availability status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cpu.utilization.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"CPU utilization"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"memory.usage.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Memory usage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"disk.log.space.usage.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Log disk usage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")))))),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("p",null,"Afin de contr\xf4ler votre \xe9quipement Fortinet FortiWeb, le SNMP doit \xeatre configur\xe9. "),(0,r.kt)("p",null,"Le flux SNMP UDP/161 doit \xeatre ouvert entre le Collecteur et l'\xe9quipement."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Fortinet-Fortiweb-Snmp\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Pack ",(0,r.kt)("em",{parentName:"li"},"Fortinet FortiWeb SNMP")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,r.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Fortinet-Fortiweb-Snmp\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le Pack via le RPM:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-network-fortinet-fortiweb-snmp\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Pack ",(0,r.kt)("em",{parentName:"li"},"Fortinet FortiWeb SNMP")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ajoutez un nouvel H\xf4te depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes")),(0,r.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,r.kt)("em",{parentName:"li"},"Adresse IP/DNS"),", ",(0,r.kt)("em",{parentName:"li"},"Communaut\xe9 SNMP")," et ",(0,r.kt)("em",{parentName:"li"},"Version SNMP")),(0,r.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,r.kt)("em",{parentName:"li"},"Net-Fortinet-Fortiweb-SNMP-custom"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Si vous utilisez SNMP en version 3, vous devez configurer les param\xe8tres sp\xe9cifiques associ\xe9s via la macro SNMPEXTRAOPTIONS.\nPlus d'informations dans la section ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP"),". ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Extra options SNMP")))),(0,r.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,r.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande\ndepuis un collecteur Centreon en vous connectant avec l'utilisateur ",(0,r.kt)("em",{parentName:"p"},"centreon-engine"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_fortinet_fortiweb_snmp.pl \\\n    --plugin=network::fortinet::fortiweb::snmp::plugin \\\n    --mode=system \\\n    --hostname=10.30.2.114 \\\n    --snmp-version='2c' \\\n    --snmp-community='fortinet_ro' \\\n    --warning-cpu-load='90' \\\n    --critical-cpu-load='95' \\\n    --verbose\n")),(0,r.kt)("p",null,"La commande devrait retourner un message de sortie de la forme ci-dessous:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OK: system usage is ok | 'cpu.utilization.percentage'=12.00%;0:90;0:95;0;100 'memory.usage.percentage'=79.00%;;;0;100 'disk.log.space.usage.percentage'=74.00%;;;0;100\nchecking system\n    high-availability mode: standalone\n    cpu load: 12.00 %\n    memory used: 79.00 %\n    disk log space used: 74.00 %\n")),(0,r.kt)("p",null,"Cette commande contr\xf4le le syst\xe8me (",(0,r.kt)("inlineCode",{parentName:"p"},"--mode=system"),") d'un \xe9quipement Fortinet FortiWeb ayant pour adresse ",(0,r.kt)("em",{parentName:"p"},"10.30.2.114")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.114"),")\nen version ",(0,r.kt)("em",{parentName:"p"},"2c")," du protocol SNMP (",(0,r.kt)("inlineCode",{parentName:"p"},"--snmp-version='2c'"),") et avec la communaut\xe9 ",(0,r.kt)("em",{parentName:"p"},"infoblox_ro")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--snmp-community='fortinet_ro'"),")."),(0,r.kt)("p",null,"Cette commande d\xe9clenchera une alarme WARNING si l'utilisation processeur est sup\xe9rieur \xe0 90% (",(0,r.kt)("inlineCode",{parentName:"p"},"--warning-cpu-utilization='90'"),")\net une alarme CRITICAL si sup\xe9rieur \xe0 95% (",(0,r.kt)("inlineCode",{parentName:"p"},"--critical-cpu-utilization='95'"),")."),(0,r.kt)("p",null,"Pour chaque mode, la liste de toutes les m\xe9triques, seuils associ\xe9s et options compl\xe9mentaires peut \xeatre affich\xe9e\nen ajoutant le param\xe8tre ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_fortinet_fortiweb_snmp.pl \\\n    --plugin=network::fortinet::fortiweb::snmp::plugin \\\n    --mode=system \\\n    --help\n")),(0,r.kt)("h2",{id:"diagnostique"},"Diagnostique"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"Diagnostique des plugins")))}f.isMDXComponent=!0}}]);