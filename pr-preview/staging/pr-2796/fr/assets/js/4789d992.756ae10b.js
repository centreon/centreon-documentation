"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[83885],{51512:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>u,metadata:()=>c,toc:()=>d});n(67294);var a=n(3905),r=n(51715),s=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const u={id:"network-aruba-instant-snmp",title:"Aruba Instant SNMP"},p=void 0,c={unversionedId:"integrations/plugin-packs/procedures/network-aruba-instant-snmp",id:"integrations/plugin-packs/procedures/network-aruba-instant-snmp",title:"Aruba Instant SNMP",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/network-aruba-instant-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-aruba-instant-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/network-aruba-instant-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/network-aruba-instant-snmp.md",tags:[],version:"current",frontMatter:{id:"network-aruba-instant-snmp",title:"Aruba Instant SNMP"},sidebar:"pp",previous:{title:"Aruba CPPM SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/network-aruba-cppm-snmp"},next:{title:"Aruba Orchestrator Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/network-aruba-orchestrator-restapi"}},m={},d=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Comment tester le Plugin en ligne de commande et comment utiliser ses options ?",id:"comment-tester-le-plugin-en-ligne-de-commande-et-comment-utiliser-ses-options-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:2},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:3}],g={toc:d},k="wrapper";function b(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)(k,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,a.kt)("p",null,"Aruba Networks est un fournisseur de solutions d'acc\xe8s r\xe9seau."),(0,a.kt)("p",null,"Le connecteur de supervision ",(0,a.kt)("em",{parentName:"p"},"Aruba Instant SNMP")," utilise le protocole SNMP pour se connecter, r\xe9cup\xe9rer des informations et les m\xe9triques relatives aux bornes d'acc\xe8s sans fil de marque Aruba."),(0,a.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,a.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Equipements : Point d'acc\xe8s, etc.")),(0,a.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"Session-Usage",label:"Session-Usage",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"accesspoints.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of access points on the Aruba device"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ap_name#clients.current.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of clients connected to the access point"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ap_name#cpu.utilization.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Percentage of used CPU on the access point"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ap_name#memory.usage.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Memory usage of the access point"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ap_name#memory.usage.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Percentage of memory usage of the access point"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ap_name#memory.free.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Free memory on the access point"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ap_name#memory.free.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Percentage of free memory on the access point"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ap_name#memory.usage.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Memory usage on the access point"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ap_name#memory.usage.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Percentage of memory usage on the access point"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,a.kt)(s.Z,{value:"SSID-Status",label:"SSID-Status",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Check SSID status"),(0,a.kt)("td",{parentName:"tr",align:"left"})))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("p",null,"La communaut\xe9 SNMP doit \xeatre activ\xe9e sur l'\xe9quipement en mode Read-only."),(0,a.kt)("p",null,"La communication doit \xeatre possible sur le port UDP 161 depuis le collecteur Centreon vers la borne d'acc\xe8s sans fil Aruba."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon devant superviser des \xe9quipements Aruba:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Aruba-Instant-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Aruba Instant SNMP")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,a.kt)(s.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon devant superviser des \xe9quipements Aruba :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Aruba-Instant-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le RPM du connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Aruba Instant SNMP")," :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-network-aruba-instant-snmp\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Aruba Instant SNMP")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Ajoutez un nouvel H\xf4te depuis la page "Configuration > H\xf4tes"".'),(0,a.kt)("li",{parentName:"ul"},'Compl\xe9tez les champs "Nom","Alias" & "IP Address / DNS" correspondant \xe0 votre \xe9quipement Aruba'),(0,a.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,a.kt)("em",{parentName:"li"},"Net-Aruba-Instant-SNMP-custom"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Si vous utilisez SNMP en version 3, vous devez configurer les param\xe8tres sp\xe9cifiques associ\xe9s via la macro SNMPEXTRAOPTIONS.\nPlus d'informations dans la section ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP"),". ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Extra options SNMP")))),(0,a.kt)("h2",{id:"comment-tester-le-plugin-en-ligne-de-commande-et-comment-utiliser-ses-options-"},"Comment tester le Plugin en ligne de commande et comment utiliser ses options ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis un collecteur Centreon en vous connectant avec l'utilisateur\n",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_aruba_instant_snmp.pl --plugin=network::aruba::instant::snmp::plugin \\\n    --mode=ap-usage \\\n    --hostname=10.30.2.11 \\\n    --snmp-version='2c' \\\n    --snmp-community='test/aruba' \\\n    --filter-name='' \\\n    --warning-status='' \\\n    --critical-status='%{status} !~ /up/i' \\\n    --warning-cpu='' \\\n    --critical-cpu='' \\\n    --warning-clients='20' \\\n    --critical-clients='50' \\\n    --warning-mem-usage='' \\\n    --critical-mem-usage='' \\\n    --warning-mem-usage-free='' \\\n    --critical-mem-usage-free='' \\\n    --warning-mem-usage-prct='' \\\n    --critical-mem-usage-prct='' \\\n    --verbose\n\n")),(0,a.kt)("p",null,"La commande ci-dessus collecte les donn\xe9es d'utilisation d'un point d'acc\xe8s Aruba (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=ap-usage"),"). Les informations importantes sont l'adresse IP/FQDN "),(0,a.kt)("p",null,"(",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.11"),") et la communaut\xe9 SNMP configur\xe9e sur l'\xe9quipement (",(0,a.kt)("inlineCode",{parentName:"p"},"--snmp-community='test/aruba'"),")."),(0,a.kt)("p",null,"Une alarme de type WARNING est d\xe9clench\xe9e si le nombre de clients connect\xe9s est sup\xe9rieur \xe0 20 (",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-clients='20'"),")."),(0,a.kt)("p",null,"Une alarme CRITICAL est quant \xe0 elle d\xe9clench\xe9e si le nombre de clients connect\xe9s est sup\xe9rieur \xe0 50 (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-clients='50'"),")."),(0,a.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre affich\xe9e en ajoutant le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_aruba_instant_snmp.pl \\\n    --plugin=network::aruba::instant::snmp::plugin \\\n    --mode=ap-usage \\\n    --help\n")),(0,a.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s via l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--list-mode")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_aruba_instant_snmp.pl \\\n    --plugin=network::aruba::instant::snmp::plugin \\\n    --list-mode\n")),(0,a.kt)("h2",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,a.kt)("h3",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,a.kt)("p",null,"Si vous obtenez ce message, cela signifie que le collecteur Centreon ne parvient pas \xe0 contacter votre borne d'acc\xe8s sans fil Aruba sur le port UDP 161, ou alors que la communaut\xe9 SNMP configur\xe9e n'est pas correcte."),(0,a.kt)("h3",{id:"unknown-snmp-get-request--cant-get-a-single-value"},"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,a.kt)("p",null,"Si vous rencontrez cette erreur, il est probable que les autorisations donn\xe9es \xe0 l'agent SNMP soient trop restreintes. Ce dernier doit avoir acc\xe8s \xe0 la branche entreprise Aruba: .1.3.6.1.4.1.14823"))}b.isMDXComponent=!0}}]);