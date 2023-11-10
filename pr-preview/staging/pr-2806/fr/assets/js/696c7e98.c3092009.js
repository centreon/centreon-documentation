"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[62184],{74363:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>d});n(67294);var r=n(3905),a=n(51715),i=n(7626);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={id:"network-cisco-firepower-fmc-restapi",title:"Cisco Firepower Management Console Rest API"},c=void 0,u={unversionedId:"integrations/plugin-packs/procedures/network-cisco-firepower-fmc-restapi",id:"integrations/plugin-packs/procedures/network-cisco-firepower-fmc-restapi",title:"Cisco Firepower Management Console Rest API",description:"Contenu du connecteur de supervision",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/network-cisco-firepower-fmc-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-cisco-firepower-fmc-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/network-cisco-firepower-fmc-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/network-cisco-firepower-fmc-restapi.md",tags:[],version:"current",frontMatter:{id:"network-cisco-firepower-fmc-restapi",title:"Cisco Firepower Management Console Rest API"},sidebar:"pp",previous:{title:"Cisco ESA XMLAPI",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/network-cisco-esa-xmlapi"},next:{title:"Cisco Firepower SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/network-cisco-firepower-snmp"}},m={},d=[{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment faire le test en ligne de commande et que signifient les principales options ?",id:"comment-faire-le-test-en-ligne-de-commande-et-que-signifient-les-principales-options-",level:3},{value:"J&#39;obtiens le message d&#39;erreur suivant:",id:"jobtiens-le-message-derreur-suivant",level:3},{value:"<code>UNKNOWN: 500 Can&#39;t connect to 10.30.2.79:443 |</code>",id:"unknown-500-cant-connect-to-1030279443-",level:4},{value:"<code>UNKNOWN: 501 Protocol scheme &#39;connect&#39; is not supported |</code>",id:"unknown-501-protocol-scheme-connect-is-not-supported-",level:4}],k={toc:d},g="wrapper";function f(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)(g,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,r.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,r.kt)("p",null,"Le connecteur de supervision inclut la supervision des \xe9quipements rattach\xe9s \xe0 la console de management Firepower. "),(0,r.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Devices",label:"Devices",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"devices.total.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of devices"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"devices.status.green.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of green status devices"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"devices.status.black.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of black status devices"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"devices.status.blue.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of blue status devices"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"devices.status.red.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of red status devices"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"devices.status.yellow.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of yellow status devices"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"device status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Device status"),(0,r.kt)("td",{parentName:"tr",align:"left"})))))),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("p",null,"Afin de contr\xf4ler l'application Cisco Firepower Management Center, l'API Rest doit \xeatre configur\xe9 comme indiqu\xe9 dans lea documentation officielle: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.cisco.com/c/en/us/td/docs/security/firepower/620/api/REST/Firepower_Management_Center_REST_API_Quick_Start_Guide_620.html"},"https://www.cisco.com/c/en/us/td/docs/security/firepower/620/api/REST/Firepower_Management_Center_REST_API_Quick_Start_Guide_620.html"))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Cisco-Firepower-Fmc-Restapi\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,r.kt)("em",{parentName:"li"},"Cisco Firepower FMC Rest API")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,r.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Cisco-Firepower-Fmc-Restapi\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le connecteur de supervision via le RPM:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-network-cisco-firepower-fmc-restapi\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,r.kt)("em",{parentName:"li"},"Cisco Firepower FMC Rest API")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Ce connecteur de supervision est con\xe7u de mani\xe8re \xe0 avoir dans Centreon un h\xf4te par \xe9quipement Cisco Firepower Management Center.\nLorsque vous ajoutez un h\xf4te \xe0 Centreon, appliquez-lui le Mod\xe8le ",(0,r.kt)("em",{parentName:"p"},"Net-Cisco-Firepower-Fmc-Restapi-custom"),".\nUne fois celui-ci configur\xe9, certaines Macros doivent \xeatre renseign\xe9es:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"FMCAPIPORT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Port used (Default: 443)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"FMCAPIPROTO"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specify https if needed (Default: 'https')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"FMCAPIUSERNAME"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Cisco Firepower management center password")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"FMCAPIPASSWORD"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Cisco Firepower management center username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"FMCAPIEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --verbose flag)")))),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h3",{id:"comment-faire-le-test-en-ligne-de-commande-et-que-signifient-les-principales-options-"},"Comment faire le test en ligne de commande et que signifient les principales options ?"),(0,r.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur ",(0,r.kt)("em",{parentName:"p"},"centreon-engine"),"\n(Les param\xe8tres tels que ",(0,r.kt)("inlineCode",{parentName:"p"},"api-username")," ou ",(0,r.kt)("inlineCode",{parentName:"p"},"api-password")," doivront \xeatre ajust\xe9s):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_cisco_firepower_fmc_restapi.pl \\\n    --plugin=network::cisco::firepower::fmc::restapi::plugin \\\n    --mode=devices \\\n    --hostname='10.30.2.79' \\\n    --port='443' \\\n    --proto='https' \\\n    --api-username='myapiusername' \\\n    --api-password='myapipassword' \\\n    --filter-domain-name='Global' \\\n    --critical-devices-status-red='0' \\\n    --verbose\n")),(0,r.kt)("p",null,"Exemple de sortie:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"OK: Domain 'Global' devices are ok | 'devices.total.count'=2;;;0; 'devices.status.green.count'=0;;;0;2 'devices.status.black.count'=0;;;0;2 'devices.status.blue.count'=0;;;0;2 'devices.status.red.count'=0;;0;0;2 'devices.status.yellow.count'=0;;;0;2\nchecking domain 'Global'\ndevice 'APEXTIFWL01' status: green\ndevice 'APEXTIFWL02' status: green\n")),(0,r.kt)("p",null,"La commande ci-dessus contr\xf4le les \xe9quipements attach\xe9s au Cisco Firepower Management Center (",(0,r.kt)("inlineCode",{parentName:"p"},"--mode=devices"),") du domaine ",(0,r.kt)("em",{parentName:"p"},"Global")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--filter-domain-name='Global'"),").\nLe Plugin utilise l'api-username (",(0,r.kt)("inlineCode",{parentName:"p"},"--api-username='myapiusername'"),"), l'api-password (",(0,r.kt)("inlineCode",{parentName:"p"},"--api-password='myapipassword'"),")\net il se connecte \xe0 l'h\xf4te ",(0,r.kt)("em",{parentName:"p"},"10.30.2.79")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--hostname='10.30.2.79'"),") sur le port ",(0,r.kt)("em",{parentName:"p"},"443")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--port='443'"),") utilisant le protocol ",(0,r.kt)("em",{parentName:"p"},"https")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--proto='https'"),")."),(0,r.kt)("p",null,"Cette commande d\xe9clenchera une alarme CRITICAL si le nombre d'\xe9quipement avec un statut en rouge est sup\xe9rieur \xe0 0 (",(0,r.kt)("inlineCode",{parentName:"p"},"--critical-devices-status-red='0'"),")."),(0,r.kt)("p",null,"Toutes les options et leur utilisation peuvent \xeatre consult\xe9es avec le param\xe8tre ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," ajout\xe9 \xe0 la commande:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_cisco_firepower_fmc_restapi.pl --plugin=network::cisco::firepower::fmc::restapi::plugin \\\n     --mode=devices \\\n     --help\n")),(0,r.kt)("h3",{id:"jobtiens-le-message-derreur-suivant"},"J'obtiens le message d'erreur suivant:"),(0,r.kt)("h4",{id:"unknown-500-cant-connect-to-1030279443-"},(0,r.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to 10.30.2.79:443 |")),(0,r.kt)("p",null,"Lors du d\xe9ploiement de mes contr\xf4les, j'obtiens le message suivant ",(0,r.kt)("inlineCode",{parentName:"p"},"UNKNOWN: 500 Can't connect to 10.30.2.79:443 |"),".\nCela signifie que Centreon n'a pas r\xe9ussi \xe0 se connecter au Cisco Firepower Management Center API (",(0,r.kt)("em",{parentName:"p"},"10.30.2.79"),").\nLa plupart du temps, il faut pr\xe9ciser le proxy \xe0 utiliser pour requ\xeater l'URL ",(0,r.kt)("em",{parentName:"p"},"10.30.2.79")," en utilisant l'option ",(0,r.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany:8080'"),"."),(0,r.kt)("h4",{id:"unknown-501-protocol-scheme-connect-is-not-supported-"},(0,r.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported |")),(0,r.kt)("p",null,"Suite \xe0 la mise en place du proxy, j'obtiens le message suivant ",(0,r.kt)("inlineCode",{parentName:"p"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported |"),"\nCela signifie que le protocole de connexion au proxy n'est pas support\xe9 par la libraire ",(0,r.kt)("em",{parentName:"p"},"LWP")," utlis\xe9e par d\xe9faut par le Plugin Centreon.\nCette erreur peut \xeatre r\xe9solue en utilisant le backend HTTP ",(0,r.kt)("em",{parentName:"p"},"curl"),". Pour ce faire, ajoutez l'option ",(0,r.kt)("inlineCode",{parentName:"p"},"--http-backend='curl'")," \xe0 la commande."))}f.isMDXComponent=!0}}]);