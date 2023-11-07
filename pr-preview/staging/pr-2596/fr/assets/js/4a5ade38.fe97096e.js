"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[70919],{16183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>N,frontMatter:()=>p,metadata:()=>c,toc:()=>d});n(67294);var r=n(3905),a=n(51715),i=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={id:"applications-vernemq-restapi",title:"VerneMQ Restapi"},u=void 0,c={unversionedId:"integrations/plugin-packs/procedures/applications-vernemq-restapi",id:"integrations/plugin-packs/procedures/applications-vernemq-restapi",title:"VerneMQ Restapi",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-vernemq-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-vernemq-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/applications-vernemq-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-vernemq-restapi.md",tags:[],version:"current",frontMatter:{id:"applications-vernemq-restapi",title:"VerneMQ Restapi"},sidebar:"pp",previous:{title:"Veritas Backup Exec NSCP Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/applications-backupexec-nscp-restapi"},next:{title:"VMware VCSA RestAPI",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/applications-vmware-vcsa-restapi"}},m={},d=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:3},{value:"J&#39;obtiens le message d&#39;erreur suivant:",id:"jobtiens-le-message-derreur-suivant",level:3},{value:"<code>UNKNOWN: 500 Can&#39;t connect to myvernemq.com:8888 |</code>",id:"unknown-500-cant-connect-to-myvernemqcom8888-",level:4},{value:"<code>UNKNOWN: 501 Protocol scheme &#39;connect&#39; is not supported |</code>",id:"unknown-501-protocol-scheme-connect-is-not-supported-",level:4}],k={toc:d},g="wrapper";function N(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(g,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,r.kt)("p",null,"VerneMQ est un gestionnaire MQTT \xe9volutif et open source qui connecte l'IdO, le M2M, le mobile et les applications web.\nLe connecteur de supervision VerneMQ, supervise les Clusters, Listeners, Plugins et sessions en utilisant l'API Rest."),(0,r.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,r.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"VerneMQ incluant les Clusters, les Listeners, les Plugins, les sessions.")),(0,r.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,r.kt)("p",null,"Vous pouvez vous renseigner en d\xe9tails sur les m\xe9triques pr\xe9sent\xe9es ci-apr\xe8s sur la documentation officielle\nde VerneMQ : ",(0,r.kt)("a",{parentName:"p",href:"https://docs.vernemq.com/monitoring/introduction"},"https://docs.vernemq.com/monitoring/introduction")),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Clusters",label:"Clusters",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Status of clusters"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"clusters.running.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of clusters running"),(0,r.kt)("td",{parentName:"tr",align:"left"},"count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"clusters.notrunning.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of cluster not running"),(0,r.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,r.kt)(i.Z,{value:"Listeners",label:"Listeners",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Status of listeners"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"listeners.running.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of listeners running"),(0,r.kt)("td",{parentName:"tr",align:"left"},"count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"listeners.notrunning.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of listeners not running"),(0,r.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,r.kt)(i.Z,{value:"Plugins",label:"Plugins",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"plugins.total.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of plugins"),(0,r.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,r.kt)(i.Z,{value:"Sessions",label:"Sessions",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sessions.online.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of sessions online"),(0,r.kt)("td",{parentName:"tr",align:"left"},"count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sessions.total.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of sessions"),(0,r.kt)("td",{parentName:"tr",align:"left"},"count")))))),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("p",null,"Un certain nombre de distributions fournissent VerneMQ, y compris des paquets binaires pr\xe9-construits.\nLe support de ces compilations, s'il y en a, est fourni par le fournisseur de la distribution associ\xe9e.\nLeur cycle de publication peut \xeatre en retard par rapport aux versions sources de VerneMQ."),(0,r.kt)("p",null,"De plus amples informations sont disponibles sur la documentation officielle du VerneMQ : ",(0,r.kt)("a",{parentName:"p",href:"https://docs.vernemq.com/getting-started"},"https://docs.vernemq.com/getting-started")),(0,r.kt)("p",null,"L'API HTTP de VerneMQ est activ\xe9e par d\xe9faut et installe un gestionnaire HTTP sur ",(0,r.kt)("inlineCode",{parentName:"p"},"http://myvernemq.com:8888/api/v1"),".\nL'utilisateur de centreon-engine effectue une connexion \xe0 ce syst\xe8me.\nSur le serveur VerneMQ, vous devez avoir g\xe9n\xe9r\xe9 un Token avec la commande suivante :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ vmq-admin api-key create\n")),(0,r.kt)("p",null,"Plus d'informations sur l'API HTTP de VerneMQ sur : ",(0,r.kt)("a",{parentName:"p",href:"https://docs.vernemq.com/administration/http-administration#managing-api-keys"},"https://docs.vernemq.com/administration/http-administration#managing-api-keys")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon supervisant des ressources VerneMQ :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Vernemq-Restapi.noarch\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,r.kt)("em",{parentName:"li"},"VerneMQ Restapi")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,r.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon supervisant des ressources VerneMQ :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Vernemq-Restapi.noarch\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le connecteur de supervision via le RPM:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-vernemq-restapi.noarch\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,r.kt)("em",{parentName:"li"},"VerneMQ Restapi")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Ce connecteur de supervision est con\xe7u de mani\xe8re \xe0 avoir dans Centreon un h\xf4te par environnement VerneMQ\nLorsque vous ajoutez un h\xf4te \xe0 Centreon, appliquez-lui le mod\xe8le ",(0,r.kt)("em",{parentName:"p"},"App-Vernemq-Restapi-custom"),".\nUne fois celui-ci configur\xe9, certaines macros doivent \xeatre renseign\xe9es:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"APIPORT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Port used. Default is 8888")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"APIPROTO"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Protocol used. Default is http")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"APIKEY"),(0,r.kt)("td",{parentName:"tr",align:"left"},"VerneMQ API Token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"APIEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command")))),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h3",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,r.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur ",(0,r.kt)("em",{parentName:"p"},"centreon-engine")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_vernemq_restapi.pl \\\n    --plugin=apps::mq::vernemq::restapi::plugin \\\n    --mode='sessions' \\\n    --hostname='myvernemq.com' \\\n    --port='8888' \\\n    --proto='http' \\\n    --api-key='12342939495003' \\\n    --warning-total='15' \\\n    --critical-total='20' \\\n    --verbose\n    \nOK: Sessions current online: 14, current total: 14 \n| 'sessions.online.count'=14;;;0; 'sessions.total.count'=14;;;15;20\n")),(0,r.kt)("p",null,"La commande ci-dessus contr\xf4le les sessions de VerneMQ via la Restapi (",(0,r.kt)("inlineCode",{parentName:"p"},"--mode=sessions"),").\nLe Plugin utilise l'",(0,r.kt)("em",{parentName:"p"},"api-key")," qui correspond au Token VerneMQ (",(0,r.kt)("inlineCode",{parentName:"p"},"--api-key='12342939495003'"),")\net il se connecte \xe0 l'h\xf4te ",(0,r.kt)("em",{parentName:"p"},"myvernemq.com")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--hostname='myvernemq.com'"),")\nsur le port ",(0,r.kt)("em",{parentName:"p"},"8888")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--port='8888'"),") utilisant le protocol ",(0,r.kt)("em",{parentName:"p"},"http")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--proto='http'"),")."),(0,r.kt)("p",null,"Toutes les options et leur utilisation peuvent \xeatre consult\xe9es avec le param\xe8tre ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," ajout\xe9 \xe0 la commande:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_vernemq_restapi.pl \n    --plugin=apps::mq::vernemq::restapi::plugin \\\n    --mode='plugins' \\\n    --help\n")),(0,r.kt)("h3",{id:"jobtiens-le-message-derreur-suivant"},"J'obtiens le message d'erreur suivant:"),(0,r.kt)("h4",{id:"unknown-500-cant-connect-to-myvernemqcom8888-"},(0,r.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to myvernemq.com:8888 |")),(0,r.kt)("p",null,"Lors du d\xe9ploiement de mes contr\xf4les, j'obtiens le message suivant ",(0,r.kt)("inlineCode",{parentName:"p"},"UNKNOWN: 500 Can't connect to myvernemq.com:8888 |"),".\nCela signifie que Centreon n'a pas r\xe9ussi \xe0 se connecter \xe0 l'API VerneMQ (",(0,r.kt)("em",{parentName:"p"},"myvernemq.com"),").\nLa plupart du temps, il faut pr\xe9ciser le proxy \xe0 utiliser pour requ\xeater l'URL ",(0,r.kt)("em",{parentName:"p"},"myvernemq.com")," en utilisant l'option ",(0,r.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany:8080'"),"."),(0,r.kt)("h4",{id:"unknown-501-protocol-scheme-connect-is-not-supported-"},(0,r.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported |")),(0,r.kt)("p",null,"Suite \xe0 la mise en place du proxy, j'obtiens le message suivant ",(0,r.kt)("inlineCode",{parentName:"p"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported |"),"\nCela signifie que le protocole de connexion au proxy n'est pas support\xe9 par la libraire ",(0,r.kt)("em",{parentName:"p"},"curl")," utlis\xe9e par d\xe9faut par le Plugin Centreon.\nCette erreur peut \xeatre r\xe9solue en utilisant le backend HTTP ",(0,r.kt)("em",{parentName:"p"},"curl"),". Pour ce faire, ajoutez l'option ",(0,r.kt)("inlineCode",{parentName:"p"},"--http-backend='curl'")," \xe0 la commande."))}N.isMDXComponent=!0}}]);