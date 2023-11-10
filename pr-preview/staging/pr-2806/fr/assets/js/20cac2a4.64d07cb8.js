"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[93004],{21891:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>d,default:()=>N,frontMatter:()=>o,metadata:()=>u,toc:()=>c});a(67294);var r=a(3905),n=a(51715),l=a(7626);function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function p(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}const o={id:"hardware-storage-hp-storeonce4-restapi",title:"HP StoreOnce 4.x Rest API"},d=void 0,u={unversionedId:"integrations/plugin-packs/procedures/hardware-storage-hp-storeonce4-restapi",id:"integrations/plugin-packs/procedures/hardware-storage-hp-storeonce4-restapi",title:"HP StoreOnce 4.x Rest API",description:"Contenu du Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-storage-hp-storeonce4-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-storage-hp-storeonce4-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/hardware-storage-hp-storeonce4-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-storage-hp-storeonce4-restapi.md",tags:[],version:"current",frontMatter:{id:"hardware-storage-hp-storeonce4-restapi",title:"HP StoreOnce 4.x Rest API"},sidebar:"pp",previous:{title:"HP StoreOnce 3.x Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/hardware-storage-hp-storeonce3-restapi"},next:{title:"HP StoreOnce (d\xe9pr\xe9ci\xe9)",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/hardware-storage-hp-storeonce-restapi"}},m={},c=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Mod\xe8les",id:"mod\xe8les",level:3},{value:"R\xe8gles de d\xe9couverte",id:"r\xe8gles-de-d\xe9couverte",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3}],k={toc:c},g="wrapper";function N(t){var{components:e}=t,a=i(t,["components"]);return(0,r.kt)(g,p(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),r.forEach((function(e){s(t,e,a[e])}))}return t}({},k,a),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,r.kt)("h3",{id:"mod\xe8les"},"Mod\xe8les"),(0,r.kt)("p",null,"Le Pack Centreon HP StoreOnce apporte un mod\xe8le d'h\xf4te :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HW-Storage-Hp-Storeonce4-Restapi-custom")),(0,r.kt)("p",null,"Il apporte les mod\xe8les de service suivants :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Alias"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Mod\xe8le de services"),(0,r.kt)("th",{parentName:"tr",align:"left"},"D\xe9faut"),(0,r.kt)("th",{parentName:"tr",align:"left"},"D\xe9couverte"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Appliances"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-Hp-Storeonce4-Appliances-Restapi"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Hardware-Storage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-Hp-Storeonce4-Hardware-Storage-Restapi"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Stores"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-Hp-Storeonce4-Stores-Restapi"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,r.kt)("h3",{id:"r\xe8gles-de-d\xe9couverte"},"R\xe8gles de d\xe9couverte"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Nom de la r\xe8gle"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-Hp-Storeonce4-Restapi-Appliance-Hostname"),(0,r.kt)("td",{parentName:"tr",align:"left"},"D\xe9couvre les appliances et supervise l'utilisation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-Hp-Storeonce4-Restapi-Store-Name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"D\xe9couvre les catalyst stores et supervise l'utilisation")))),(0,r.kt)("h3",{id:"m\xe9triques--statuts-collect\xe9s"},"M\xe9triques & statuts collect\xe9s"),(0,r.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Appliances",label:"Appliances",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"appliances.detected.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of appliances detected"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"service status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current appliance service status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"appliance_hostname"),"#appliance.disk.space.usage.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Space used on the appliance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"appliance_hostname"),"#appliance.disk.space.free.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Free space left on the appliance"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"appliance_hostname"),"#appliance.disk.space.usage.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Space used on the appliance in percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"appliance_hostname"),"#appliance.deduplication.ratio.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Deduplication ratio on the appliance"),(0,r.kt)("td",{parentName:"tr",align:"left"}))))),(0,r.kt)(l.Z,{value:"Hardware-Storage",label:"Hardware-Storage",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"drive status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current drive status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"drive enclosure status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current drive enclosure status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"fan status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current fan status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"component_location"),"#hardware.fan.speed.rpm"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current fan speed"),(0,r.kt)("td",{parentName:"tr",align:"left"},"rpm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"iomodule status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current I/O module status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"pool status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current pool status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"power supply status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current power supply status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"temperature status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current temperature probes status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"component_location"),"#hardware.temperature.celsius"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current temperature"),(0,r.kt)("td",{parentName:"tr",align:"left"},"C"))))),(0,r.kt)(l.Z,{value:"Stores",label:"Stores",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"stores.detected.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of catalyst stores detected"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"store health"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current catalyst store health level"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"store_name"),"#store.disk.space.usage.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Disk space used on the catalyst store"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"store_name"),"#store.user.space.usage.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"User space used on the catalyst store"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"store_name"),"#store.deduplication.ratio.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Deduplication ratio on the catalyst store"),(0,r.kt)("td",{parentName:"tr",align:"left"})))))),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("p",null,"Ce Pack supporte uniquement les versions 4.x des \xe9quipements HP StoreOnce.\nPour la supervision, un utilisateur avec les droits en lecture est n\xe9cessaire. R\xe9f\xe9rez-vous \xe0 la documentation officielle : ",(0,r.kt)("a",{parentName:"p",href:"https://hewlettpackard.github.io/storeonce-rest/index.html"},"https://hewlettpackard.github.io/storeonce-rest/index.html")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources ",(0,r.kt)("strong",{parentName:"li"},"HP StoreOnce 4.x Rest API")," :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Storage-Hp-Storeonce4-Restapi\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface web de Centreon, installer le Pack ",(0,r.kt)("strong",{parentName:"li"},"HP StoreOnce 4.x Rest API")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),"."))),(0,r.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources ",(0,r.kt)("strong",{parentName:"li"},"HP StoreOnce 4.x Rest API")," :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Storage-Hp-Storeonce4-Restapi\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur le serveur central Centreon, installer le RPM du Pack ",(0,r.kt)("strong",{parentName:"li"},"HP StoreOnce 4.x Rest API")," :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-storage-hp-storeonce4-restapi\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface web de Centreon, installer le Pack ",(0,r.kt)("strong",{parentName:"li"},"HP StoreOnce 4.x Rest API")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),".")))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ajoutez un h\xf4te \xe0 Centreon depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes")),(0,r.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,r.kt)("strong",{parentName:"li"},"Nom"),", ",(0,r.kt)("strong",{parentName:"li"},"Alias")," & ",(0,r.kt)("strong",{parentName:"li"},"IP Address / DNS")," correspondant \xe0 votre serveur ",(0,r.kt)("strong",{parentName:"li"},"HP StoreOnce 4.x Rest API"),"."),(0,r.kt)("li",{parentName:"ul"},"Appliquez le mod\xe8le d'h\xf4te ",(0,r.kt)("strong",{parentName:"li"},"HW-Storage-Hp-Storeonce4-Restapi-custom"),"."),(0,r.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, les macros ci-dessous indiqu\xe9es comme requises (",(0,r.kt)("strong",{parentName:"li"},"Obligatoire"),") doivent \xeatre renseign\xe9es.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Obligatoire"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"STOREONCEAPIPORT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Port used (Default: 443)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"STOREONCEAPIPROTO"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specify http if needed (default: 'https')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"STOREONCEAPIUSERNAME"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Api username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"STOREONCEAPIPASSWORD"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Api password")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"STOREONCEAPIEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --verbose flag)")))),(0,r.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,r.kt)("p",null,"Une fois le plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis votre collecteur Centreon en vous connectant avec\nl'utilisateur ",(0,r.kt)("strong",{parentName:"p"},"centreon-engine")," (",(0,r.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$CENTREONPLUGINS$/centreon_hp_storeonce4_restapi.pl \\\n    --plugin=storage::hp::storeonce::4::restapi::plugin \\\n    --mode=stores \\\n    --hostname='10.0.0.1' \\\n    --port='443' \\\n    --proto='https' \\\n    --api-username='my-username' \\\n    --api-password='my-password' \\\n    --verbose\n")),(0,r.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0 :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OK: All catalyst stores are ok | 'stores.detected.count'=3;;;0; 'Catalyst01#store.disk.space.usage.bytes'=1838969531121B;;;0; 'Catalyst01#store.user.space.usage.bytes'=62700600887099B;;;0; 'Catalyst01#store.deduplication.ratio.count'=34.00;;;0; 'Catalyst02#store.disk.space.usage.bytes'=50306416657426B;;;0; 'Catalyst02#store.user.space.usage.bytes'=1793362240355355B;;;0; 'Catalyst02#store.deduplication.ratio.count'=35.60;;;0; 'Catalyst03#store.disk.space.usage.bytes'=21192464324702B;;;0; 'Catalyst03#store.user.space.usage.bytes'=540818386772559B;;;0; 'Catalyst03#store.deduplication.ratio.count'=25.50;;;0;\nchecking catalyst store 'Catalyst01'\n    health: ok\n    disk space used: 1.67TB, user space used: 57.03TB\n    deduplication ratio: 34.00\nchecking catalyst store 'Catalyst02'\n    health: ok\n    disk space used: 45.75TB, user space used: 1631.05TB\n    deduplication ratio: 35.60\nchecking catalyst store 'Catalyst03'\n    health: ok\n    disk space used: 19.27TB, user space used: 491.87TB\n    deduplication ratio: 25.50\n")),(0,r.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre\naffich\xe9e en ajoutant le param\xe8tre ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$CENTREONPLUGINS$/centreon_hp_storeonce4_restapi.pl \\\n    --plugin=storage::hp::storeonce::4::restapi::plugin \\\n    --mode=stores \\\n    --help\n")),(0,r.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s en ajoutant le param\xe8tre\n",(0,r.kt)("inlineCode",{parentName:"p"},"--list-mode")," \xe0 la commande:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$CENTREONPLUGINS$/centreon_hp_storeonce4_restapi.pl \\\n    --plugin=storage::hp::storeonce::4::restapi::plugin \\\n    --list-mode\n")),(0,r.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,r.kt)("p",null,"Rendez-vous sur la ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#http-and-api-checks"},"documentation d\xe9di\xe9e"),"\ndes plugins bas\xe9s sur HTTP/API."))}N.isMDXComponent=!0}}]);