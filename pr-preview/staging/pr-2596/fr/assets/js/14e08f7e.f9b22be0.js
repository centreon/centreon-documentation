"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[37183],{32316:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>d});n(67294);var r=n(3905),a=n(51715),s=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={id:"hardware-sensors-jacarta-snmp",title:"Jacarta Sensor"},u=void 0,c={unversionedId:"integrations/plugin-packs/procedures/hardware-sensors-jacarta-snmp",id:"integrations/plugin-packs/procedures/hardware-sensors-jacarta-snmp",title:"Jacarta Sensor",description:"Contenu du Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-sensors-jacarta-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-sensors-jacarta-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/hardware-sensors-jacarta-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-sensors-jacarta-snmp.md",tags:[],version:"current",frontMatter:{id:"hardware-sensors-jacarta-snmp",title:"Jacarta Sensor"},sidebar:"pp",previous:{title:"HWg-STE Sensor",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/hardware-sensors-hwgste-snmp"},next:{title:"LM Sensors",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/applications-lmsensors-snmp"}},m={},d=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Mod\xe8les",id:"mod\xe8les",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Configuration SNMP",id:"configuration-snmp",level:3},{value:"Flux r\xe9seau",id:"flux-r\xe9seau",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"Comment puis-je tester le plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3}],g={toc:d},k="wrapper";function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(k,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,r.kt)("h3",{id:"mod\xe8les"},"Mod\xe8les"),(0,r.kt)("p",null,"Le connecteur de supervision Centreon ",(0,r.kt)("strong",{parentName:"p"},"Jacarta Sensor")," apporte un mod\xe8le d'h\xf4te :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HW-Sensor-Jacarta-SNMP-custom")),(0,r.kt)("p",null,"Il apporte le mod\xe8le de service suivant :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Alias"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Mod\xe8le de service"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"D\xe9faut"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Sensors-Global"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Sensors-Jacarta-Sensors-Global-SNMP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le l'ensemble des sondes de l'\xe9quipement"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,r.kt)("h3",{id:"m\xe9triques--statuts-collect\xe9s"},"M\xe9triques & statuts collect\xe9s"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Sensors-Global",label:"Sensors-Global",mdxType:"TabItem"},(0,r.kt)("p",null,"Could not retrieve metrics"))),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("h3",{id:"configuration-snmp"},"Configuration SNMP"),(0,r.kt)("p",null,"Afin de superviser votre ",(0,r.kt)("strong",{parentName:"p"},"Jacarta Sensor")," en SNMP,  il est n\xe9cessaire de configurer l'agent sur le serveur comme indiqu\xe9 sur la documentation officielle :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.jacarta.com/support/resources/"},"Jacarta Sensor"))),(0,r.kt)("h3",{id:"flux-r\xe9seau"},"Flux r\xe9seau"),(0,r.kt)("p",null,"La communication doit \xeatre possible sur le port UDP 161 depuis le collecteur\nCentreon vers le serveur supervis\xe9."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources ",(0,r.kt)("strong",{parentName:"li"},"Jacarta Sensor")," :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Sensors-Jacarta-Snmp\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface web de Centreon, installez le connecteur de supervision ",(0,r.kt)("strong",{parentName:"li"},"Jacarta Sensor")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),"."))),(0,r.kt)(s.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources ",(0,r.kt)("strong",{parentName:"li"},"Jacarta Sensor")," :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Sensors-Jacarta-Snmp\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur le serveur central Centreon, installez le RPM du connecteur de supervision ",(0,r.kt)("strong",{parentName:"li"},"Jacarta Sensor")," :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-sensors-jacarta-snmp\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface web de Centreon, installez le connecteur de supervision ",(0,r.kt)("strong",{parentName:"li"},"Jacarta Sensor")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),".")))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ajoutez un h\xf4te \xe0 Centreon depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes"),"."),(0,r.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,r.kt)("strong",{parentName:"li"},"Nom"),", ",(0,r.kt)("strong",{parentName:"li"},"Alias")," & ",(0,r.kt)("strong",{parentName:"li"},"IP Address/DNS")," correspondant \xe0 votre serveur ",(0,r.kt)("strong",{parentName:"li"},"Jacarta Sensor"),"."),(0,r.kt)("li",{parentName:"ul"},"Appliquez le mod\xe8le d'h\xf4te ",(0,r.kt)("strong",{parentName:"li"},"HW-Sensor-Jacarta-SNMP-custom"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Si vous utilisez SNMP en version 3, vous devez configurer les param\xe8tres sp\xe9cifiques associ\xe9s via la macro SNMPEXTRAOPTIONS.\nPlus d'informations dans la section ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP"),".")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Obligatoire"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Configurer vos param\xe8tres de s\xe9curit\xe9 SNMPv3")))),(0,r.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le plugin et que signifient les options des commandes ?"),(0,r.kt)("p",null,"Une fois le plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis votre collecteur Centreon en vous connectant avec\nl'utilisateur ",(0,r.kt)("strong",{parentName:"p"},"centreon-engine")," (",(0,r.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_jacarta.pl \\\n    --plugin=hardware::sensors::jacarta::snmp::plugin \\\n    --mode=sensors \\\n    --hostname=10.0.0.1 \\\n    --snmp-version='2c' \\\n    --snmp-community='my-snmp-community' \\\n    --component='.*' \\\n    --verbose \\\n    --use-new-perfdata\n")),(0,r.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0 :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OK: | \n")),(0,r.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre\naffich\xe9e en ajoutant le param\xe8tre ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_jacarta.pl \\\n    --plugin=hardware::sensors::jacarta::snmp::plugin \\\n    --mode=sensors \\\n    --help\n")),(0,r.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s en ajoutant le param\xe8tre\n",(0,r.kt)("inlineCode",{parentName:"p"},"--list-mode")," \xe0 la commande :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_jacarta.pl \\\n    --plugin=hardware::sensors::jacarta::snmp::plugin \\\n    --list-mode\n")),(0,r.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,r.kt)("p",null,"Rendez-vous sur la ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"documentation d\xe9di\xe9e"),"\npour le diagnostic des erreurs communes des plugins Centreon."))}f.isMDXComponent=!0}}]);