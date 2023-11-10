"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[42875],{94596:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>N,frontMatter:()=>s,metadata:()=>u,toc:()=>d});a(67294);var n=a(3905),r=a(51715),l=a(7626);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const s={id:"applications-commvault-commserve-restapi",title:"Commvault CommServe Rest API"},m=void 0,u={unversionedId:"integrations/plugin-packs/procedures/applications-commvault-commserve-restapi",id:"integrations/plugin-packs/procedures/applications-commvault-commserve-restapi",title:"Commvault CommServe Rest API",description:"Contenu du connecteur de supervision",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-commvault-commserve-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-commvault-commserve-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/applications-commvault-commserve-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-commvault-commserve-restapi.md",tags:[],version:"current",frontMatter:{id:"applications-commvault-commserve-restapi",title:"Commvault CommServe Rest API"},sidebar:"pp",previous:{title:"Cisco SSMS",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/applications-cisco-ssms-restapi"},next:{title:"Control-M Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/applications-controlm-restapi"}},c={},d=[{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment faire le test en ligne de commande et que signifient les principales options ?",id:"comment-faire-le-test-en-ligne-de-commande-et-que-signifient-les-principales-options-",level:4},{value:"J&#39;obtiens le message d&#39;erreur suivant:",id:"jobtiens-le-message-derreur-suivant",level:3},{value:"<code>UNKNOWN: 500 Can&#39;t connect to 10.30.2.79:443 |</code>",id:"unknown-500-cant-connect-to-1030279443-",level:4},{value:"<code>UNKNOWN: 501 Protocol scheme &#39;connect&#39; is not supported |</code>",id:"unknown-501-protocol-scheme-connect-is-not-supported-",level:4}],g={toc:d},k="wrapper";function N(e){var{components:t}=e,a=p(e,["components"]);return(0,n.kt)(k,i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){o(e,t,a[t])}))}return e}({},g,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,n.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,n.kt)("p",null,"Le connecteur de supervision inclue la supervision des Alerts, Jobs, Media-agents et Storage-pools."),(0,n.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Alerts",label:"Alerts",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"alert status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"alert status, possible to set string-based alerts"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"alerts.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of alerts"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"alerts.critical.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of critical alerts"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"alerts.warning.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of warning alerts"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"alerts.info.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of informational alerts"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Jobs",label:"Jobs",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"job status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of on job status"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"job long status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status on job time duration"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"jobs.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of jobs"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Media-agents",label:"Media-agents",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"media agent status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Media agent status"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"media.agents.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of media agents"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Storage-pools",label:"Storage-pools",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"storage status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Storage status, possible to set string-based alerts"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"storagepoolname"),"#storagepool.space.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Space usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"storagepoolname"),"#storagepool.space.free.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Free space"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"storagepoolname"),"#storagepool.space.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Space usage in percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")))))),(0,n.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,n.kt)("p",null,"Afin de contr\xf4ler l'application Commvault CommServe, l'API Rest doit \xeatre configur\xe9 (cf: ",(0,n.kt)("a",{parentName:"p",href:"https://api.commvault.com/"},"https://api.commvault.com/"),")"),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Commvault-Commserve-Restapi\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,n.kt)("em",{parentName:"li"},"Commvault Commserve Rest API")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Commvault-Commserve-Restapi\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le connecteur de supervision via le RPM:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-commvault-commserve-restapi\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,n.kt)("em",{parentName:"li"},"Commvault Commserve Rest API")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"Ce connecteur de supervision est con\xe7u de mani\xe8re \xe0 avoir dans Centreon un h\xf4te par application Commvault CommServe.\nLorsque vous ajoutez un h\xf4te \xe0 Centreon, appliquez-lui le mod\xe8le ",(0,n.kt)("em",{parentName:"p"},"App-Commvault-Commserve-Restapi-custom"),".\nUne fois celui-ci configur\xe9, certaines macros doivent \xeatre renseign\xe9es:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"COMMSERVEAPIPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Port used (Default: 443)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"COMMSERVEAPIPROTO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specify https if needed (Default: 'https')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"COMMSERVEAPIUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Commvault CommServe username")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"COMMSERVEAPIPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Commvault CommServe password")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"COMMSERVEAPIPROTO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --verbose flag)")))),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("h4",{id:"comment-faire-le-test-en-ligne-de-commande-et-que-signifient-les-principales-options-"},"Comment faire le test en ligne de commande et que signifient les principales options ?"),(0,n.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur ",(0,n.kt)("em",{parentName:"p"},"centreon-engine"),"\n(Les param\xe8tres tels que ",(0,n.kt)("inlineCode",{parentName:"p"},"api-username")," ou ",(0,n.kt)("inlineCode",{parentName:"p"},"api-password")," doivront \xeatre ajust\xe9s):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_commvault_commserve_restapi.pl \\\n    --plugin=apps::backup::commvault::commserve::restapi::plugin \\\n    --mode=storage-pools \\\n    --hostname='10.30.2.79' \\\n    --port='443' \\\n    --proto='https' \\\n    --api-username='myapiusername' \\\n    --api-password='myapipassword' \\\n    --filter-name='IPL' \\\n    --warning-space-usage-prct='90' \\\n    --critical-space-usage-prct='95' \\\n    --verbose\n")),(0,n.kt)("p",null,"Exemple de sortie:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"OK: All storage pools are ok | 'IPL1-TEST#storagepool.space.usage.bytes'=22104757B;;;0;37192871 'IPL1-TEST#storagepool.space.free.bytes'=15088114B;;;0;37192871 'IPL1-TEST#storagepool.space.usage.percentage'=59.43%;90;95;0;100 'IPL2-TEST#storagepool.space.usage.bytes'=6469140B;;;0;7340013 'IPL2-TEST#storagepool.space.free.bytes'=870873B;;;0;7340013 'IPL2-TEST#storagepool.space.usage.percentage'=88.14%;90;95;0;100\nStorage pool 'IPL1-TEST' status: online, space usage total: 35.47 MB used: 21.08 MB (59.43%) free: 14.39 MB (40.57%)\nStorage pool 'IPL2-TEST' status: online, space usage total: 7.00 MB used: 6.17 MB (88.14%) free: 850.46 KB (11.86%)\n")),(0,n.kt)("p",null,"La commande ci-dessus contr\xf4le les storage pools de l'application Commvault CommServe via l'API (",(0,n.kt)("inlineCode",{parentName:"p"},"--mode=storage-pools"),") nomm\xe9e ",(0,n.kt)("em",{parentName:"p"},"IPL")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--filter-name='IPL'"),").\nLe Plugin utilise l'api-username (",(0,n.kt)("inlineCode",{parentName:"p"},"--api-username='myapiusername'"),"), l'api-password (",(0,n.kt)("inlineCode",{parentName:"p"},"--api-password='myapipassword'"),")\net il se connecte \xe0 l'h\xf4te ",(0,n.kt)("em",{parentName:"p"},"10.30.2.79")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--hostname='10.30.2.79'"),") sur le port ",(0,n.kt)("em",{parentName:"p"},"443")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--port='443'"),") utilisant le protocol ",(0,n.kt)("em",{parentName:"p"},"https")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--proto='https'"),")."),(0,n.kt)("p",null,"Cette commande d\xe9clenchera une alarme WARNING si l'espace utilis\xe9 est sup\xe9rieur \xe0 90% (",(0,n.kt)("inlineCode",{parentName:"p"},"--warning-space-usage-prct='90'"),")\net une alarme CRITICAL si l'espace utilis\xe9 est sup\xe9rieur \xe0 95% (",(0,n.kt)("inlineCode",{parentName:"p"},"--critical-space-usage-prct='95'"),")."),(0,n.kt)("p",null,"Toutes les options et leur utilisation peuvent \xeatre consult\xe9es avec le param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," ajout\xe9 \xe0 la commande:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_commvault_commserve_restapi.pl \\\n    --plugin=apps::backup::commvault::commserve::restapi::plugin \\\n    --mode=storage-pools \\\n    --help\n")),(0,n.kt)("h3",{id:"jobtiens-le-message-derreur-suivant"},"J'obtiens le message d'erreur suivant:"),(0,n.kt)("h4",{id:"unknown-500-cant-connect-to-1030279443-"},(0,n.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to 10.30.2.79:443 |")),(0,n.kt)("p",null,"Lors du d\xe9ploiement de mes contr\xf4les, j'obtiens le message suivant ",(0,n.kt)("inlineCode",{parentName:"p"},"UNKNOWN: 500 Can't connect to 10.30.2.79:443 |"),".\nCela signifie que Centreon n'a pas r\xe9ussi \xe0 se connecter au Commvault CommServe API (",(0,n.kt)("em",{parentName:"p"},"10.30.2.79"),").\nLa plupart du temps, il faut pr\xe9ciser le proxy \xe0 utiliser pour requ\xeater l'URL ",(0,n.kt)("em",{parentName:"p"},"10.30.2.79")," en utilisant l'option ",(0,n.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany:8080'"),"."),(0,n.kt)("h4",{id:"unknown-501-protocol-scheme-connect-is-not-supported-"},(0,n.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported |")),(0,n.kt)("p",null,"Suite \xe0 la mise en place du proxy, j'obtiens le message suivant ",(0,n.kt)("inlineCode",{parentName:"p"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported |"),"\nCela signifie que le protocole de connexion au proxy n'est pas support\xe9 par la libraire ",(0,n.kt)("em",{parentName:"p"},"LWP")," utlis\xe9e par d\xe9faut par le Plugin Centreon.\nCette erreur peut \xeatre r\xe9solue en utilisant le backend HTTP ",(0,n.kt)("em",{parentName:"p"},"curl"),". Pour ce faire, ajoutez l'option ",(0,n.kt)("inlineCode",{parentName:"p"},"--http-backend='curl'")," \xe0 la commande."))}N.isMDXComponent=!0}}]);