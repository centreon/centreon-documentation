"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[80076],{57439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>p,metadata:()=>m,toc:()=>d});n(67294);var a=n(3905),r=n(51715),l=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"applications-mulesoft-restapi",title:"Mulesoft Anypoint"},u=void 0,m={unversionedId:"integrations/plugin-packs/procedures/applications-mulesoft-restapi",id:"integrations/plugin-packs/procedures/applications-mulesoft-restapi",title:"Mulesoft Anypoint",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-mulesoft-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-mulesoft-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-mulesoft-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-mulesoft-restapi.md",tags:[],version:"current",frontMatter:{id:"applications-mulesoft-restapi",title:"Mulesoft Anypoint"},sidebar:"pp",previous:{title:"MS Biztalk",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-biztalk"},next:{title:"Netbackup NSClient++ API",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-netbackup-nsclient-05-restapi"}},c={},d=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"R\xe8gles de d\xe9couvertes",id:"r\xe8gles-de-d\xe9couvertes",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Privil\xe8ges API",id:"privil\xe8ges-api",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"FAQ",id:"faq",level:2},{value:"Comment tester un contr\xf4le en ligne de commandes et que signifient les options principales ?",id:"comment-tester-un-contr\xf4le-en-ligne-de-commandes-et-que-signifient-les-options-principales-",level:3},{value:"Comment puis-je supprimer les perfdatas <em>count</em> dans le cas o\xf9 je ne souhaite v\xe9rifier qu&#39;une seule application ?",id:"comment-puis-je-supprimer-les-perfdatas-count-dans-le-cas-o\xf9-je-ne-souhaite-v\xe9rifier-quune-seule-application-",level:3}],f={toc:d},k="wrapper";function g(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)(k,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,a.kt)("p",null,"Mulesoft offre une plateforme d'int\xe9gration la plus utilis\xe9e pour connecter les applications SaaS et d'entreprise dans le cloud et/ou on-prem."),(0,a.kt)("p",null,"Le Plugin Centreon associ\xe9 permet d'interroger l'API Rest de Mulesoft Anypoint afin de r\xe9cup\xe9rer le statut de diverses ressources Mulesoft."),(0,a.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,a.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Applications"),(0,a.kt)("li",{parentName:"ul"},"Serveurs"),(0,a.kt)("li",{parentName:"ul"},"Clusters"),(0,a.kt)("li",{parentName:"ul"},"Messages des queues MQ")),(0,a.kt)("h3",{id:"r\xe8gles-de-d\xe9couvertes"},"R\xe8gles de d\xe9couvertes"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Services",label:"Services",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Rule name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Mulesoft-Restapi-Application-Name"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Discover Anypoint applications and monitor their status")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Mulesoft-Restapi-Server-Name"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Discover Anypoint servers and monitor their status")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Mulesoft-Restapi-Queue-Messages-Name"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Discover Anypoint MQ queues and monitor the related messages count")))))),(0,a.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,a.kt)("p",null,"Vous pouvez vous renseigner en d\xe9tails sur les m\xe9triques pr\xe9sent\xe9es ci-apr\xe8s sur la documentation officielle de\nl'API Rest Mulesoft: ",(0,a.kt)("a",{parentName:"p",href:"https://anypoint.mulesoft.com/exchange/portals/anypoint-platform/f1e97bc6-315a-4490-82a7-23abe036327a.anypoint-platform/arm-rest-services/"},"https://anypoint.mulesoft.com/exchange/portals/anypoint-platform/f1e97bc6-315a-4490-82a7-23abe036327a.anypoint-platform/arm-rest-services/")),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Applications",label:"Applications",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Current status of each application")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"mulesoft.applications.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total number of applications")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"mulesoft.applications.status.started.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of started applications")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"mulesoft.applications.status.stopped.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of stopped applications")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"mulesoft.applications.status.failed.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of failed applications"))))),(0,a.kt)(l.Z,{value:"Clusters",label:"Clusters",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Current status of each cluster")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"mulesoft.clusters.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total number of clusters")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"mulesoft.clusters.status.running.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of running clusters")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"mulesoft.clusters.status.disconnected.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of disconnected clusters"))))),(0,a.kt)(l.Z,{value:"Messages",label:"Messages",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"mulesoft.mq.messages.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total number of messages in the queue")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"mulesoft.mq.inflight.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of inflight messages in the queue")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"mulesoft.mq.received.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of received messages in the queue")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"mulesoft.mq.sent.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of sent messages in the queue")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"mulesoft.mq.visible.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of visible messages in the queue")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"mulesoft.mq.acked.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of acknowledged messages in the queue"))))),(0,a.kt)(l.Z,{value:"Servers",label:"Servers",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Current status of each server")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"mulesoft.servers.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total number of servers")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"mulesoft.servers.status.running.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of running servers")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"mulesoft.servers.status.disconnected.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of disconnected servers")))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("h3",{id:"privil\xe8ges-api"},"Privil\xe8ges API"),(0,a.kt)("p",null,"Un compte de service est requis pour interroger l'API Mulesoft. Celui-ci doit avoir suffisamment de privil\xe8ges en lecture dans l'environnement\net l'organisation Anypoint cibl\xe9es.\nCe compte doit \xe9galement \xeatre en mesure d'acc\xe9der aux Applications, Serveurs, Clusters et services MQ de l'environnement\net de l'organisation en question."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources Mulesoft Anypoint :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Mulesoft-Restapi.noarch\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Mulesoft Anypoint")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources Mulesoft Anypoint :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Mulesoft-Restapi.noarch\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le connecteur de supervision via le RPM:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-mulesoft-restapi.noarch\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Mulesoft Anypoint")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"host"},"Host"),(0,a.kt)("p",null," Ce connecteur de supervision est conc\xe7u de mani\xe8re \xe0 avoir dans Centreon un h\xf4te par environnement/organisation\nLorsque vous ajoutez un h\xf4te \xe0 Centreon, appliquez-lui le mod\xe8le ",(0,a.kt)("em",{parentName:"p"},"App-Mulesoft-Restapi-custom"),". Une fois celui-ci configur\xe9, certaines macros doivent \xeatre renseign\xe9es:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"ENVID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Mulesoft Environment ID fetched from the Mulesoft Web console")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"ORGID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Mulesoft Organization ID fetched from the Mulesoft Web console")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"(X)"),(0,a.kt)("td",{parentName:"tr",align:"left"},"REGIONID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Mulesoft MQ region ID to use (only mandatory for ",(0,a.kt)("em",{parentName:"td"},"messages")," mode)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"APIUSERNAME"),(0,a.kt)("td",{parentName:"tr",align:"left"},"API username")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"APIPASSWORD"),(0,a.kt)("td",{parentName:"tr",align:"left"},"API password (",(0,a.kt)("em",{parentName:"td"},"password")," type should be ticked)")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"comment-tester-un-contr\xf4le-en-ligne-de-commandes-et-que-signifient-les-options-principales-"},"Comment tester un contr\xf4le en ligne de commandes et que signifient les options principales ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commandes depuis votre collecteur Centreon avec l'utilisateur ",(0,a.kt)("em",{parentName:"p"},"centreon-engine"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_mulesoft_restapi.pl \\\n    --plugin=apps::mulesoft::restapi::plugin \\\n    --mode=applications \\\n    --environment-id='1234abc-56de-78fg-90hi-1234abcdefg' \\\n    --organization-id='1234abcd-56ef-78fg-90hi-1234abcdefg' \\\n    --api-username='myapiuser' \\\n    --api-password='myapipassword' \\\n    --filter-name='myapplication1' \\\n    --warning-status='%{status} =~ /STOPPED/' \\\n    --critical-status='%{status} =~ /FAILED/' \\\n    --verbose\n    \n\nOK: Total applications Total : 1, Started : 1, Stopped : 0, Failed : 0 - Application 'myapplication1' Id: 123456, Status: STARTED |\n'mulesoft.applications.total.count'=1;;;0; 'mulesoft.applications.status.started.count'=1;;;0; 'mulesoft.applications.status.stopped.count'=0;;;0; 'mulesoft.applications.status.failed.count'=0;;;0;\nApplication 'myapplication1' Id: 123456, Status: STARTED\n\n")),(0,a.kt)("p",null,"La commande ci-dessus contr\xf4le le statut d'une application Mulesoft (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=applications"),") nomm\xe9e ",(0,a.kt)("em",{parentName:"p"},"myapplication1")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-name='myapplication1'"),").\nThe command above gets the status of a Mulesoft application (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=applications"),") named ",(0,a.kt)("em",{parentName:"p"},"myapplication1")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-name='myapplication1'"),").\nCette application appartient \xe0 l'environnement ",(0,a.kt)("em",{parentName:"p"},"1234abc-56de-78fg-90hi-1234abcdefg")," de l'organisation ",(0,a.kt)("em",{parentName:"p"},"234abcd-56ef-78fg-90hi-1234abcdefg"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"---environment-id='1234abc-56de-78fg-90hi-1234abcdefg' --organization-id='1234abcd-56ef-78fg-90hi-1234abcdefg'"),"). "),(0,a.kt)("p",null,"Cette commande d\xe9clenchera une alarme WARNING si le statut de l'application contient le mot ",(0,a.kt)("em",{parentName:"p"},"STOPPED")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-status='%{status} =~ /STOPPED/'"),")\net une alarme CRITICAL s'il contient le mot ",(0,a.kt)("em",{parentName:"p"},"FAILED")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-status='%{status} =~ /FAILED/'"),")."),(0,a.kt)("p",null,"Toutes les options et leur utilisation peuvent \xeatre consult\xe9es avec le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," ajout\xe9 \xe0 la commande:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/usr/lib/centreon/plugins/centreon_mulesoft_restapi.pl --plugin=apps::mulesoft::restapi::plugin --mode=applications --help")),(0,a.kt)("h3",{id:"comment-puis-je-supprimer-les-perfdatas-count-dans-le-cas-o\xf9-je-ne-souhaite-v\xe9rifier-quune-seule-application-"},"Comment puis-je supprimer les perfdatas ",(0,a.kt)("em",{parentName:"h3"},"count")," dans le cas o\xf9 je ne souhaite v\xe9rifier qu'une seule application ?"),(0,a.kt)("p",null,"Le Plugin permet de filtrer sur un ou plusieurs \xe9l\xe9ments mais permet \xe9galement de r\xe9cup\xe9rer l'ensemble des \xe9l\xe9ments si aucun filtre n'est sp\xe9cifi\xe9.\nDe ce fait, des perfdatas \"globales\" sur les statistiques des objets sont ajout\xe9es par d\xe9faut. Il est possible de supprimer ces donn\xe9es de performance en appliquant le filtre suivant: ",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-perfdata='^$'"),"."))}g.isMDXComponent=!0}}]);