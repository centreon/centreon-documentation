"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[17807],{27569:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>m,toc:()=>c});n(67294);var a=n(3905),r=n(51715),i=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"network-ubiquiti-airfiber-snmp",title:"Ubiquiti AirFiber SNMP"},u=void 0,m={unversionedId:"integrations/plugin-packs/procedures/network-ubiquiti-airfiber-snmp",id:"integrations/plugin-packs/procedures/network-ubiquiti-airfiber-snmp",title:"Ubiquiti AirFiber SNMP",description:"Contenu du connecteur de supervision",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/network-ubiquiti-airfiber-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-ubiquiti-airfiber-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/network-ubiquiti-airfiber-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/network-ubiquiti-airfiber-snmp.md",tags:[],version:"current",frontMatter:{id:"network-ubiquiti-airfiber-snmp",title:"Ubiquiti AirFiber SNMP"},sidebar:"pp",previous:{title:"Traffic Director",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/network-oracle-otd-snmp"},next:{title:"Ubiquiti Edge SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/network-ubiquiti-edge-snmp"}},d={},c=[{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"R\xe8gles de d\xe9couvertes",id:"r\xe8gles-de-d\xe9couvertes",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:3},{value:"J&#39;obtiens le message d&#39;erreur suivant:",id:"jobtiens-le-message-derreur-suivant",level:2},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:3}],k={toc:c},g="wrapper";function f(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(g,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){l(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,a.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,a.kt)("p",null,"Le connecteur de supervision Ubiquiti AirFiber SNMP collecte les donn\xe9es pour:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Interfaces"),(0,a.kt)("li",{parentName:"ul"},"Load"),(0,a.kt)("li",{parentName:"ul"},"Memory"),(0,a.kt)("li",{parentName:"ul"},"Radios")),(0,a.kt)("h3",{id:"r\xe8gles-de-d\xe9couvertes"},"R\xe8gles de d\xe9couvertes"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Services",label:"Services",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom de la r\xe8gle"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Net-Ubiquiti-Airfiber-SNMP-Interface-Name"),(0,a.kt)("td",{parentName:"tr",align:"left"},"D\xe9couvre les interfaces r\xe9seaux et supervise le statut et l'utilisation de la bande passante")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Net-Ubiquiti-Airfiber-SNMP-Radio-Name"),(0,a.kt)("td",{parentName:"tr",align:"left"},"D\xe9couvre les interfaces radios et supervise le statut et l'utilisation de la bande passante")))))),(0,a.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Interfaces",label:"Interfaces",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the interface"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.traffic.in.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Incoming traffic going through the interface"),(0,a.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.traffic.in.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Percentage of the interface's ",(0,a.kt)("em",{parentName:"td"},"in")," bandwidth usage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.traffic.out.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Outgoing traffic going through the interface"),(0,a.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.traffic.out.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Percentage of the interface's ",(0,a.kt)("em",{parentName:"td"},"out")," bandwidth usage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")))),(0,a.kt)("p",null,"A regexp filter is available to target a specific interface identifier - ifName ","[",(0,a.kt)("inlineCode",{parentName:"p"},"--interface='^eth0$' --name"),"]")),(0,a.kt)(i.Z,{value:"Load",label:"Load",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"system.loadaverage.1m.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"System load 1 minute-sample"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"system.loadaverage.5m.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"System load 5 minutes-sample"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"system.loadaverage.15m.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"System load 15 minutes-sample"),(0,a.kt)("td",{parentName:"tr",align:"left"}))))),(0,a.kt)(i.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memory.usage.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Memory usage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memory.free.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Free memory"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memory.usage.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Memory usage in percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,a.kt)(i.Z,{value:"Radios",label:"Radios",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the radio interface"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"interfacename"),"#","radio.interface.chain0.signal.receive.power.dbm"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Radio chain 0 RX power level"),(0,a.kt)("td",{parentName:"tr",align:"left"},"dBm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"interfacename"),"#","radio.interface.chain1.signal.receive.power.dbm"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Radio chain 1 RX power level"),(0,a.kt)("td",{parentName:"tr",align:"left"},"dBm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"interfacename"),"#","radio.interface.traffic.in.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Incoming traffic going through the interface"),(0,a.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"interfacename"),"#","radio.interface.traffic.out.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"utgoing traffic going through the interface"),(0,a.kt)("td",{parentName:"tr",align:"left"},"b/s")))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("p",null,"Afin de contr\xf4ler votre \xe9quipement Ubiquiti AirFiber, le SNMP doit \xeatre configur\xe9. "),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Ubiquiti-Airfiber-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Ubiquiti AirFiber SNMP")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,a.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Ubiquiti-Airfiber-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le connecteur de supervision via le RPM:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-network-ubiquiti-airfiber-snmp\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Ubiquiti AirFiber SNMP")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Ajoutez un nouvel H\xf4te depuis la page "Configuration > H\xf4tes"'),(0,a.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,a.kt)("em",{parentName:"li"},"Adresse IP/DNS"),", ",(0,a.kt)("em",{parentName:"li"},"Communaut\xe9 SNMP")," et ",(0,a.kt)("em",{parentName:"li"},"Version SNMP")),(0,a.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,a.kt)("em",{parentName:"li"},"Net-Ubiquiti-Airfiber-SNMP-Custom"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Si vous utilisez SNMP en version 3, vous devez configurer les param\xe8tres sp\xe9cifiques associ\xe9s via la macro SNMPEXTRAOPTIONS.\nPlus d'informations dans la section ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP"),". ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Extra options SNMP")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande\ndepuis un collecteur Centreon en vous connectant avec l'utilisateur ",(0,a.kt)("em",{parentName:"p"},"centreon-engine"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_ubiquiti_airfiber_snmp.pl \\\n    --plugin=network::ubiquiti::airfiber::snmp::plugin \\\n    --mode=load \\\n    --hostname=10.30.2.114 \\\n    --snmp-version='2c' \\\n    --snmp-community='ubiquiti_ro' \\\n    --warning-load15='3' \\\n    --critical-load15='7' \\\n    --verbose\n")),(0,a.kt)("p",null,"La commande devrait retourner un message de sortie de la forme ci-dessous:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Load average 0.00 (1m), 0.00 (5m), 0.00 (15m) | 'system.loadaverage.1m.count'=0.00;;;0; 'system.loadaverage.5m.count'=0.00;;;0; 'system.loadaverage.15m.count'=0.00;0:3;0:7;0;\n")),(0,a.kt)("p",null,"Cette commande contr\xf4le le syst\xe8me load-average (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=load"),") d'un \xe9quipement Ubiquiti AirFiber ayant pour adresse ",(0,a.kt)("em",{parentName:"p"},"10.30.2.114")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.114"),")\nen version ",(0,a.kt)("em",{parentName:"p"},"2c")," du protocol SNMP (",(0,a.kt)("inlineCode",{parentName:"p"},"--snmp-version='2c'"),") et avec la communaut\xe9 ",(0,a.kt)("em",{parentName:"p"},"ubiquiti_ro")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--snmp-community='ubiquiti_ro'"),")."),(0,a.kt)("p",null,"Cette commande d\xe9clenchera une alarme WARNING si le load-average est sup\xe9rieur \xe0 3 (",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-load15='3'"),")\net une alarme CRITICAL si sup\xe9rieur \xe0 7 (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-load15='7'"),")."),(0,a.kt)("p",null,"Pour chaque mode, la liste de toutes les m\xe9triques, seuils associ\xe9s et options compl\xe9mentaires peut \xeatre affich\xe9e\nen ajoutant le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_ubiquiti_airfiber_snmp.pl \\\n    --plugin=network::ubiquiti::airfiber::snmp::plugin \\\n    --mode=load \\\n    --help\n")),(0,a.kt)("h2",{id:"jobtiens-le-message-derreur-suivant"},"J'obtiens le message d'erreur suivant:"),(0,a.kt)("h3",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,a.kt)("p",null,"Si vous obtenez ce message, cela signifie que vous ne parvenez pas \xe0 contacter l'\xe9quipement sur le port 161,\nou alors que la communaut\xe9 SNMP configur\xe9e n'est pas correcte.\nIl est \xe9galement possible qu'un firewall bloque le flux."),(0,a.kt)("h3",{id:"unknown-snmp-get-request--cant-get-a-single-value"},"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,a.kt)("p",null,"Si vous rencontrez cette erreur, il est probable que les autorisations donn\xe9es \xe0 l'agent SNMP soient trop restreintes. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"L'\xe9quipement ne prend pas en charge la MIB utilis\xe9e par le Plugin (branche: .1.3.6.1.4.1.41112)."),(0,a.kt)("li",{parentName:"ul"},"L'OID SNMP cibl\xe9 ne peut pas \xeatre r\xe9cup\xe9r\xe9 en raison de privil\xe8ges d'\xe9quipement insuffisants.")))}f.isMDXComponent=!0}}]);