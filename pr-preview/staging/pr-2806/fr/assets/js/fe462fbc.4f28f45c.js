"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[84349],{386:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>N,frontMatter:()=>o,metadata:()=>u,toc:()=>g});a(67294);var r=a(3905),n=a(51715),l=a(7626);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const o={id:"hardware-storage-purestorage-flashblade-v2-restapi",title:"Pure Storage FlashBlade v2 Rest API"},d=void 0,u={unversionedId:"integrations/plugin-packs/procedures/hardware-storage-purestorage-flashblade-v2-restapi",id:"integrations/plugin-packs/procedures/hardware-storage-purestorage-flashblade-v2-restapi",title:"Pure Storage FlashBlade v2 Rest API",description:"Contenu du Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-storage-purestorage-flashblade-v2-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-storage-purestorage-flashblade-v2-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/hardware-storage-purestorage-flashblade-v2-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-storage-purestorage-flashblade-v2-restapi.md",tags:[],version:"current",frontMatter:{id:"hardware-storage-purestorage-flashblade-v2-restapi",title:"Pure Storage FlashBlade v2 Rest API"},sidebar:"pp",previous:{title:"Pure Storage FlashArray Rest API v2",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/hardware-storage-purestorage-flasharray-v2-restapi"},next:{title:"Qnap",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/hardware-storage-qnap-snmp"}},m={},g=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Mod\xe8les",id:"mod\xe8les",level:3},{value:"R\xe8gles de d\xe9couverte",id:"r\xe8gles-de-d\xe9couverte",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Pack de supervision",id:"pack-de-supervision",level:3},{value:"Plugin",id:"plugin",level:3},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"Comment puis-je tester le plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3}],c={toc:g},k="wrapper";function N(e){var{components:t}=e,a=p(e,["components"]);return(0,r.kt)(k,i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){s(e,t,a[t])}))}return e}({},c,a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,r.kt)("h3",{id:"mod\xe8les"},"Mod\xe8les"),(0,r.kt)("p",null,"Le Pack Centreon ",(0,r.kt)("strong",{parentName:"p"},"Pure Storage FlashBlade Rest API v2")," apporte un mod\xe8le d'h\xf4te :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HW-Storage-Purestorage-Flashblade-V2-Restapi-custom")),(0,r.kt)("p",null,"Il apporte les mod\xe8les de service suivants :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Alias"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Mod\xe8le de service"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"D\xe9faut"),(0,r.kt)("th",{parentName:"tr",align:"left"},"D\xe9couverte"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Alerts"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-Purestorage-Flashblade-V2-Alerts-Restapi"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le les alertes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Arrays"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-Purestorage-Flashblade-V2-Arrays-Restapi"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le les grappes de stockage"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Filesystems"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-Purestorage-Flashblade-V2-Filesystems-Restapi"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le les syst\xe8mes de fichiers"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Hardware"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-Purestorage-Flashblade-V2-Hardware-Restapi"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le l'\xe9tat mat\xe9riel"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h3",{id:"r\xe8gles-de-d\xe9couverte"},"R\xe8gles de d\xe9couverte"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Nom de la r\xe8gle"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-Purestorage-Flashblade-V2-Restapi-Array-Name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"D\xe9couvre les grappes de stockage et supervise l'utilisation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-Purestorage-Flashblade-V2-Restapi-Filesystem-Name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"D\xe9couvre les syst\xe8mes de fichiers et supervise l'utilisation")))),(0,r.kt)("p",null,"Rendez-vous sur la ",(0,r.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/services-discovery"},"documentation d\xe9di\xe9e"),"\npour en savoir plus sur la d\xe9couverte automatique de services et sa ",(0,r.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/services-discovery/#r%C3%A8gles-de-d%C3%A9couverte"},"planification"),"."),(0,r.kt)("h3",{id:"m\xe9triques--statuts-collect\xe9s"},"M\xe9triques & statuts collect\xe9s"),(0,r.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Alerts",label:"Alerts",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"alerts.detected.count"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"alert status"),(0,r.kt)("td",{parentName:"tr",align:"left"}))))),(0,r.kt)(l.Z,{value:"Arrays",label:"Arrays",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"array_name"),"#array.space.usage.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"array_name"),"#array.space.free.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"array_name"),"#array.space.usage.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"array_name"),"#array.data.reduction.count"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"array_name~resolution"),"#array.io.read.usage.bytespersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"array_name~resolution"),"#array.io.write.usage.bytespersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B/s"))))),(0,r.kt)(l.Z,{value:"Filesystems",label:"Filesystems",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"filesystem_name"),"#filesystem.space.usage.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"filesystem_name"),"#filesystem.space.free.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"filesystem_name"),"#filesystem.space.usage.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"filesystem_name"),"#filesystem.data.reduction.count"),(0,r.kt)("td",{parentName:"tr",align:"left"}))))),(0,r.kt)(l.Z,{value:"Hardware",label:"Hardware",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"chassis status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"eth port status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"fan status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"flash blade status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"fabric module status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"mgmt port status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"power supply status"),(0,r.kt)("td",{parentName:"tr",align:"left"})))))),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("p",null,'Vous devez configurer un utilisateur pouvant se connecter \xe0 la baie de stockage. Cet utilisateur doit avoir au moins un acc\xe8s "en lecture seule" \xe0 la baie de stockage.'),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("h3",{id:"pack-de-supervision"},"Pack de supervision"),(0,r.kt)("p",null,"Si la plateforme est configur\xe9e avec une licence ",(0,r.kt)("em",{parentName:"p"},"online"),", l'installation d'un paquet\nn'est pas requise pour voir appara\xeetre le pack dans le menu ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Gestionnaire de connecteurs de supervision"),"."),(0,r.kt)("p",null,"Au contraire, si la plateforme utilise une licence ",(0,r.kt)("em",{parentName:"p"},"offline"),", installez le paquet\nsur le ",(0,r.kt)("strong",{parentName:"p"},"serveur central")," via la commande correspondant au gestionnaire de paquets\nassoci\xe9 \xe0 sa distribution :"),(0,r.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-pack-hardware-storage-purestorage-flashblade-v2-restapi\n"))),(0,r.kt)(l.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-storage-purestorage-flashblade-v2-restapi\n"))),(0,r.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-pack-hardware-storage-purestorage-flashblade-v2-restapi\n")))),(0,r.kt)("p",null,"Quel que soit le type de la licence (",(0,r.kt)("em",{parentName:"p"},"online")," ou ",(0,r.kt)("em",{parentName:"p"},"offline"),"), installez le Pack ",(0,r.kt)("strong",{parentName:"p"},"Pure Storage FlashBlade Rest API v2"),"\ndepuis l'interface web et le menu ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Gestionnaire de connecteurs de supervision"),"."),(0,r.kt)("h3",{id:"plugin"},"Plugin"),(0,r.kt)("p",null,"\xc0 partir de Centreon 22.04, il est possible de demander le d\xe9ploiement automatique\ndu plugin lors de l'utilisation d'un pack. Si cette fonctionnalit\xe9 est activ\xe9e, et\nque vous ne souhaitez pas d\xe9couvrir des \xe9l\xe9ments pour la premi\xe8re fois, alors cette\n\xe9tape n'est pas requise."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Plus d'informations dans la section ",(0,r.kt)("a",{parentName:"p",href:"/docs/monitoring/pluginpacks/#installer-le-plugin"},"Installer le plugin"),".")),(0,r.kt)("p",null,"Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre syst\xe8me d'exploitation :"),(0,r.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-plugin-Hardware-Storage-Purestorage-Flashblade-V2-Restapi\n"))),(0,r.kt)(l.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Storage-Purestorage-Flashblade-V2-Restapi\n"))),(0,r.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-plugin-hardware-storage-purestorage-flashblade-v2-restapi\n")))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ajoutez un h\xf4te \xe0 Centreon depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes"),"."),(0,r.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,r.kt)("strong",{parentName:"li"},"Nom"),", ",(0,r.kt)("strong",{parentName:"li"},"Alias")," & ",(0,r.kt)("strong",{parentName:"li"},"IP Address/DNS")," correspondant \xe0 votre serveur ",(0,r.kt)("strong",{parentName:"li"},"Pure Storage FlashBlade"),"."),(0,r.kt)("li",{parentName:"ul"},"Appliquez le mod\xe8le d'h\xf4te ",(0,r.kt)("strong",{parentName:"li"},"HW-Storage-Purestorage-Flashblade-V2-Restapi-custom"),"."),(0,r.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, les macros ci-dessous indiqu\xe9es comme requises (",(0,r.kt)("strong",{parentName:"li"},"Obligatoire"),") doivent \xeatre renseign\xe9es.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Obligatoire"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"APIEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--insecure")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"APIPORT"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"APIPROTO"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"APITOKEN"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"APIVERSION"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(D\xe9faut : '2.4')")))),(0,r.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le plugin et que signifient les options des commandes ?"),(0,r.kt)("p",null,"Une fois le plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis votre collecteur Centreon en vous connectant avec\nl'utilisateur ",(0,r.kt)("strong",{parentName:"p"},"centreon-engine")," (",(0,r.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_purestorage_flashblade_v2_restapi.pl \\\n    --plugin=storage::purestorage::flashblade::v2::restapi::plugin \\\n    --mode=arrays \\\n    --hostname='10.0.0.1' \\\n    --api-version='2.4' \\\n    --api-token='mytoken' \\\n    --insecure \\\n    --verbose\n")),(0,r.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0 :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Array 'objectstor301' space usage total: 59.73 TB used: 138.42 GB (0.23%) free: 59.60 TB (99.77%) - data reduction: 1.023 - read: 0.00 B/s, write: 73.16 KB/s | 'objectstor301#array.space.usage.bytes'=148629707720B;;;0;65677494565820 'objectstor301#array.space.free.bytes'=65528864858100B;;;0;65677494565820 'objectstor301#array.space.usage.percentage'=0.23%;;;0;100 'objectstor301#array.data.reduction.count'=1.023;;;0; 'objectstor301~5m#array.io.read.usage.bytespersecond'=0B/s;;;0; 'objectstor301~5m#array.io.write.usage.bytespersecond'=74913.1533333333B/s;;;0;\nchecking array 'objectstor301'\n    space usage total: 59.73 TB used: 138.42 GB (0.23%) free: 59.60 TB (99.77%)\n    data reduction: 1.023\n    read: 0.00 B/s, write: 73.16 KB/s\n")),(0,r.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre\naffich\xe9e en ajoutant le param\xe8tre ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_purestorage_flashblade_v2_restapi.pl \\\n    --plugin=storage::purestorage::flashblade::v2::restapi::plugin \\\n    --mode=arrays \\\n    --help\n")),(0,r.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s en ajoutant le param\xe8tre\n",(0,r.kt)("inlineCode",{parentName:"p"},"--list-mode")," \xe0 la commande :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_purestorage_flashblade_v2_restapi.pl \\\n    --plugin=storage::purestorage::flashblade::v2::restapi::plugin \\\n    --list-mode\n")),(0,r.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,r.kt)("p",null,"Rendez-vous sur la ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#http-and-api-checks"},"documentation d\xe9di\xe9e"),"\ndes plugins bas\xe9s sur HTTP/API."))}N.isMDXComponent=!0}}]);