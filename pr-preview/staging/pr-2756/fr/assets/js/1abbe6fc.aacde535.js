"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[94030],{41401:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>N,frontMatter:()=>u,metadata:()=>m,toc:()=>d});n(67294);var a=n(3905),r=n(51715),l=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const u={id:"hardware-storage-bdt-multistak-snmp",title:"BDT MultiStak SNMP"},p=void 0,m={unversionedId:"integrations/plugin-packs/procedures/hardware-storage-bdt-multistak-snmp",id:"integrations/plugin-packs/procedures/hardware-storage-bdt-multistak-snmp",title:"BDT MultiStak SNMP",description:"Contenu du connecteur de supervision",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-storage-bdt-multistak-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-storage-bdt-multistak-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/hardware-storage-bdt-multistak-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-storage-bdt-multistak-snmp.md",tags:[],version:"current",frontMatter:{id:"hardware-storage-bdt-multistak-snmp",title:"BDT MultiStak SNMP"},sidebar:"pp",previous:{title:"Avid Isis",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/hardware-storage-avid-isis-snmp"},next:{title:"Buffalo TeraStation SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/hardware-storage-buffalo-terastation-snmp"}},c={},d=[{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:3}],g={toc:d},k="wrapper";function N(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)(k,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,a.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,a.kt)("p",null,"Le connecteur de supervision BDT MultiStak SNMP collecte les donn\xe9es pour:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hardware")),(0,a.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Hardware",label:"Hardware",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"device status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the device"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"module status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the module"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"module board status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the module board"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"module psu status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the module power supply"),(0,a.kt)("td",{parentName:"tr",align:"left"})))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("p",null,"Afin de contr\xf4ler votre \xe9quipement BDT MultiStak, le SNMP doit \xeatre configur\xe9. "),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Storage-Bdt-Multistak-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"BDT MultiStak SNMP")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Storage-Bdt-Multistak-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le connecteur de supervision via le RPM:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-storage-bdt-multistak-snmp\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"BDT MultiStak SNMP")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Ajoutez un nouvel H\xf4te depuis la page "Configuration > H\xf4tes"'),(0,a.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,a.kt)("em",{parentName:"li"},"Adresse IP/DNS"),", ",(0,a.kt)("em",{parentName:"li"},"Communaut\xe9 SNMP")," et ",(0,a.kt)("em",{parentName:"li"},"Version SNMP")),(0,a.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,a.kt)("em",{parentName:"li"},"HW-Storage-Bdt-Multistak-SNMP-Custom"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Si vous utilisez SNMP en version 3, vous devez configurer les param\xe8tres sp\xe9cifiques associ\xe9s via la macro SNMPEXTRAOPTIONS.\nPlus d'informations dans la section ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP"),". ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Extra options SNMP")))),(0,a.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande\ndepuis un collecteur Centreon en vous connectant avec l'utilisateur ",(0,a.kt)("em",{parentName:"p"},"centreon-engine"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_bdt_multistak_snmp.pl  \\\n    --plugin=storage::bdt::multistak::snmp::plugin \\\n    --mode=hardware \\\n    --hostname=10.30.2.114 \\\n    --snmp-version='2c' \\\n    --snmp-community='bdtms_ro' \\\n    --verbose\n")),(0,a.kt)("p",null,"La commande devrait retourner un message de sortie de la forme ci-dessous:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: All 2 components are ok [1/1 device, 1/1 modules]. | 'hardware.device.count'=1;;;; 'hardware.module.count'=1;;;;\nvendor: BDT, product: MULTISTAK, serial: DE56400414, revision: 1.2.0-A000\nchecking device\ndevice health status is 'ok' [instance: 0]\nchecking modules\nmodule '4' status is 'OK' [board status: N/A] [power supply: OK][instance: 4].\n")),(0,a.kt)("p",null,"Cette commande contr\xf4le le mat\xe9riel (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=hardware"),") d'un \xe9quipement BDT MultiStak ayant pour adresse ",(0,a.kt)("em",{parentName:"p"},"10.30.2.114")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.114"),")\nen version ",(0,a.kt)("em",{parentName:"p"},"2c")," du protocol SNMP (",(0,a.kt)("inlineCode",{parentName:"p"},"--snmp-version='2c'"),") et avec la communaut\xe9 ",(0,a.kt)("em",{parentName:"p"},"bdtms_ro")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--snmp-community='bdtms_ro'"),")."),(0,a.kt)("p",null,"Pour chaque mode, la liste de toutes les m\xe9triques, seuils associ\xe9s et options compl\xe9mentaires peut \xeatre affich\xe9e\nen ajoutant le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_bdt_multistak_snmp.pl  \\\n    --plugin=storage::bdt::multistak::snmp::plugin \\\n    --mode=hardware \\\n    --help\n")),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("h3",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,a.kt)("p",null,"Si vous obtenez ce message, cela signifie que vous ne parvenez pas \xe0 contacter l'\xe9quipement sur le port 161,\nou alors que la communaut\xe9 SNMP configur\xe9e n'est pas correcte.\nIl est \xe9galement possible qu'un firewall bloque le flux."),(0,a.kt)("h3",{id:"unknown-snmp-get-request--cant-get-a-single-value"},"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,a.kt)("p",null,"Si vous rencontrez cette erreur, il est probable que les autorisations donn\xe9es \xe0 l'agent SNMP soient trop restreintes. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"L'\xe9quipement ne prend pas en charge la MIB utilis\xe9e par le Plugin (branche: .1.3.6.1.4.1.20884)."),(0,a.kt)("li",{parentName:"ul"},"L'OID SNMP cibl\xe9 ne peut pas \xeatre r\xe9cup\xe9r\xe9 en raison de privil\xe8ges d'\xe9quipement insuffisants.")))}N.isMDXComponent=!0}}]);