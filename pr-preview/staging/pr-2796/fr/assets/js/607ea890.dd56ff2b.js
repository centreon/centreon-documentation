"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[66820],{94645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>v,frontMatter:()=>u,metadata:()=>c,toc:()=>d});n(67294);var r=n(3905),a=n(51715),i=n(7626);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={id:"hardware-devices-hms-ewon-snmp",title:"HMS Ewon SNMP"},p=void 0,c={unversionedId:"integrations/plugin-packs/procedures/hardware-devices-hms-ewon-snmp",id:"integrations/plugin-packs/procedures/hardware-devices-hms-ewon-snmp",title:"HMS Ewon SNMP",description:"Contenu du connecteur de supervision",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-devices-hms-ewon-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-devices-hms-ewon-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/hardware-devices-hms-ewon-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-devices-hms-ewon-snmp.md",tags:[],version:"current",frontMatter:{id:"hardware-devices-hms-ewon-snmp",title:"HMS Ewon SNMP"},sidebar:"pp",previous:{title:"Hikvision NVR SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/hardware-devices-hikvision-nvr-snmp"},next:{title:"HMS Netbiter Argos RestAPI",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/hardware-devices-hms-netbiter-argos-restapi"}},m={},d=[{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment faire le test en ligne de commande et que signifient les principales options ?",id:"comment-faire-le-test-en-ligne-de-commande-et-que-signifient-les-principales-options-",level:3},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:3}],g={toc:d},k="wrapper";function v(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(k,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,r.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,r.kt)("p",null,"Le connecteur de supervision HMS Ewon la supervision des Tags."),(0,r.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Tags",label:"Tags",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"interface status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Status of the tag"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"tagname"),"#tag.value.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Tag value"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("p",null,"It is possible to filter on the name of a tag using a REGEXP of the form ","[",(0,r.kt)("inlineCode",{parentName:"p"},"--filter-tag-name='Fuel'"),"]","."))),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("p",null,"Afin de contr\xf4ler vos \xe9quipements HMS Ewon, le SNMP doit \xeatre configur\xe9."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Devices-Hms-Ewon-Snmp\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,r.kt)("em",{parentName:"li"},"HMS Ewon SNMP")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,r.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Devices-Hms-Ewon-Snmp\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le connecteur de supervision via le RPM:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-devices-hms-ewon-snmp\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,r.kt)("em",{parentName:"li"},"HMS Ewon SNMP")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Ce connecteur de supervision est con\xe7u de mani\xe8re \xe0 avoir dans Centreon un h\xf4te par \xe9quipement HMS Ewon.\nLorsque vous ajoutez un h\xf4te \xe0 Centreon, appliquez-lui le mod\xe8le ",(0,r.kt)("em",{parentName:"p"},"HW-Device-Hms-Ewon-SNMP-custom"),'.\nIl est n\xe9cessaire de remplir les valeurs des champs "SNMP Community" et "SNMP Version".'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Si vous utilisez SNMP en version 3, vous devez configurer les param\xe8tres sp\xe9cifiques associ\xe9s via la macro SNMPEXTRAOPTIONS.\nPlus d'informations dans la section ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP"),". ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Extra options SNMP")))),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h3",{id:"comment-faire-le-test-en-ligne-de-commande-et-que-signifient-les-principales-options-"},"Comment faire le test en ligne de commande et que signifient les principales options ?"),(0,r.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande depuis votre Collecteur Centreon avec l'utilisateur ",(0,r.kt)("em",{parentName:"p"},"centreon-engine")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_hms_ewon_snmp.pl \\\n    --plugin=hardware::devices::hms::ewon::snmp::plugin \\\n    --mode=tags \\\n    --hostname=10.30.2.114 \\\n    --snmp-version='2c' \\\n    --snmp-community='ewon_ro' \\\n    --filter-tag-name=Partiel \\\n    --tag-threshold-warning='40000' \\\n    --tag-threshold-critical='50000' \\\n    --verbose\n")),(0,r.kt)("p",null,"Exemple de sortie :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CRITICAL: Tag 'Compt_H_Partiel' value: 441985 | 'Compt_H_Partiel#tag.value.count'=441985;0:40000;0:50000;; 'Compt_Ea_Partiel#tag.value.count'=20507;0:40000;0:50000;; 'Compt_Er_Partiel#tag.value.count'=1040;0:40000;0:50000;;\nTag 'Compt_H_Partiel' status: none, value: 441985\nTag 'Compt_Ea_Partiel' status: none, value: 20507\nTag 'Compt_Er_Partiel' status: none, value: 1040\n")),(0,r.kt)("p",null,"Cette commande contr\xf4le les tags (",(0,r.kt)("inlineCode",{parentName:"p"},"--mode=tags"),") d'un \xe9quipement ayant pour adresse ",(0,r.kt)("em",{parentName:"p"},"10.30.2.114")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.114"),")\nen version ",(0,r.kt)("em",{parentName:"p"},"2c")," du protocol SNMP (",(0,r.kt)("inlineCode",{parentName:"p"},"--snmp-version='2c'"),") et avec la communaut\xe9 ",(0,r.kt)("em",{parentName:"p"},"ewon_ro")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--snmp-community='ewon_ro'"),")."),(0,r.kt)("p",null,"Cette commande d\xe9clenchera une alarme WARNING si la valeur des tags est sup\xe9rieur \xe0 40000 (",(0,r.kt)("inlineCode",{parentName:"p"},"--tag-threshold-warning='40000'"),")\net une alarme CRITICAL si sup\xe9rieur \xe0 50000 (",(0,r.kt)("inlineCode",{parentName:"p"},"--tag-threshold-critical='50000'"),")."),(0,r.kt)("p",null,"Toutes les options qui peuvent \xeatre utilis\xe9es avec ce plugin se trouvent sur la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_hms_ewon_snmp.pl \\\n    --plugin=hardware::devices::hms::ewon::snmp::plugin \\\n    --mode=tags \\\n    --help\n")),(0,r.kt)("h3",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,r.kt)("p",null,"Si vous obtenez ce message, cela signifie que vous ne parvenez pas \xe0 contacter l'\xe9quipement HMS Ewon sur le port 161,\nou alors que la communaut\xe9 SNMP configur\xe9e n'est pas correcte.\nIl est \xe9galement possible qu'un firewall bloque le flux."),(0,r.kt)("h3",{id:"unknown-snmp-get-request--cant-get-a-single-value"},"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,r.kt)("p",null,"Si vous rencontrez cette erreur, il est probable que les autorisations donn\xe9es \xe0 l'agent SNMP soient trop restreintes. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"L'\xe9quipement HMS Ewon ne prend pas en charge la MIB utilis\xe9e par le Plugin (branche: .1.3.6.1.4.1.8284.2.1)."),(0,r.kt)("li",{parentName:"ul"},"L'OID SNMP cibl\xe9 ne peut pas \xeatre r\xe9cup\xe9r\xe9 en raison de privil\xe8ges d'\xe9quipement insuffisants.")))}v.isMDXComponent=!0}}]);