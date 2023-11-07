"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[93895],{36097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>N,frontMatter:()=>s,metadata:()=>c,toc:()=>d});n(67294);var r=n(3905),a=n(51715),l=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"blockchain-parity-ethpoller-restapi",title:"Parity Ethpoller API"},u=void 0,c={unversionedId:"integrations/plugin-packs/procedures/blockchain-parity-ethpoller-restapi",id:"integrations/plugin-packs/procedures/blockchain-parity-ethpoller-restapi",title:"Parity Ethpoller API",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/blockchain-parity-ethpoller-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/blockchain-parity-ethpoller-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/blockchain-parity-ethpoller-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/blockchain-parity-ethpoller-restapi.md",tags:[],version:"current",frontMatter:{id:"blockchain-parity-ethpoller-restapi",title:"Parity Ethpoller API"},sidebar:"pp",previous:{title:"Parity API",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/blockchain-parity-restapi"},next:{title:"Centreon Central",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-central"}},m={},d=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration d&#39;un H\xf4te",id:"configuration-dun-h\xf4te",level:2},{value:"Comment tester mes configurations et le Plugin en ligne de commande ?",id:"comment-tester-mes-configurations-et-le-plugin-en-ligne-de-commande-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:2},{value:"UNKNOWN: Can&#39;t connect to ...",id:"unknown-cant-connect-to-",level:3},{value:"J&#39;obtiens le message d&#39;erreur suivant:  ``UNKNOWN: 501 Protocol scheme &#39;connect&#39; is not supported |```",id:"jobtiens-le-message-derreur-suivant--unknown-501-protocol-scheme-connect-is-not-supported-",level:3}],k={toc:d},g="wrapper";function N(e){var{components:t}=e,n=p(e,["components"]);return(0,r.kt)(g,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,r.kt)("p",null,"Le BCM Poller expose collecte des donn\xe9es sur le comportement d'un r\xe9seau Blockchain\nbas\xe9 sur les technologies Ethereum ou Hyperledger Fabric. "),(0,r.kt)("p",null,"Le connecteur de supervision ",(0,r.kt)("em",{parentName:"p"},"Ethpoller API")," r\xe9cup\xe8re les informations collect\xe9es au travers de\nl'API expos\xe9e par cet outil afin d'offrir une analyse de l'utilisation et de l'adoption\ndu r\xe9seaux au travers du comportement des noeuds observ\xe9s."),(0,r.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,r.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"EventPoller node ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Tracking"),(0,r.kt)("li",{parentName:"ul"},"Stats"),(0,r.kt)("li",{parentName:"ul"},"Disk  ")))),(0,r.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Tracking",label:"Tracking",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"parity.tracking.events.perminute"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of events by minute"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"parity.tracking.mined.block.prct"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Percentage of block mined"),(0,r.kt)("td",{parentName:"tr",align:null},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"parity.tracking.balance.changes.perminute"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of balance changes per minute"),(0,r.kt)("td",{parentName:"tr",align:null},"wei"))))),(0,r.kt)(l.Z,{value:"Stats",label:"Stats",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Per ",(0,r.kt)("em",{parentName:"li"},"block"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"parity.stats.block.perminute"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of block per minute"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"parity.stats.transaction.perminute"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of transaction per minute"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"parity.stats.fork.perminute"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of fork per minute"),(0,r.kt)("td",{parentName:"tr",align:null}))))),(0,r.kt)(l.Z,{value:"Disk",label:"Disk",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"eth.poller.disk.free"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Free space"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"eth.poller.disk.available"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Availability space"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"eth.poller.disk.size"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total size"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"eth.poller.disk.used"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Used space"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"eth.poller.disk.usage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Disk usage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"eth.poller.blockchain.directory"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Size of blockchain directory"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")))))),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("p",null,"Afin de r\xe9cup\xe9rer des donn\xe9es, d\xe9ployer le BCM Poller en suivant la documentation\nfournie par l'IRT-Systemx ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/IRT-SystemX/bcm-poller#getting-started"},"ici"),"."),(0,r.kt)("p",null,"Le Collecteur Centreon doit pouvoir communiquer avec le BCM Poller au travers du port\nconfigur\xe9 (par d\xe9faut: 8000)."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon interrogeant des ressources ",(0,r.kt)("em",{parentName:"li"},"Ethpoller API"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Blockchain-Parity-Ethpoller-Restapi\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Dans l'interface Web de Centreon, installer le connecteur de supervision ",(0,r.kt)("em",{parentName:"li"},"Ethpoller API")," depuis la page  ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"),"."))),(0,r.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon interrogeant des ressources ",(0,r.kt)("em",{parentName:"li"},"Ethpoller API"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Blockchain-Parity-Ethpoller-Restapi\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le paquet RPM ",(0,r.kt)("em",{parentName:"li"},"Ethpoller API"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-blockchain-parity-ethpoller-restapi\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Dans l'interface Web de Centreon, installer le connecteur de supervision ",(0,r.kt)("em",{parentName:"li"},"Ethpoller API")," depuis la page  ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"),".")))),(0,r.kt)("h2",{id:"configuration-dun-h\xf4te"},"Configuration d'un H\xf4te"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ajoutez un nouvel H\xf4te depuis la page ",(0,r.kt)("inlineCode",{parentName:"li"},"Configuration > H\xf4tes")),(0,r.kt)("li",{parentName:"ul"},'Compl\xe9tez les champs "Nom","Alias" & "IP Address / DNS" correspondant \xe0 votre noeud Hyperledger'),(0,r.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,r.kt)("em",{parentName:"li"},"Blockchain-Hyperledger-Exporter-custom"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ETHPOLLERAPIPORT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Port used (Default: '8000')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ETHPOLLERPROTO"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Protocol used (Default: 'http')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ETHPOLLERAPIURLPATH"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path to the API - (Default: '/')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"TIMEOUT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Request timeout")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"ETHPOLLEREXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command","_","line (eg. a --verbose flag)")))),(0,r.kt)("h2",{id:"comment-tester-mes-configurations-et-le-plugin-en-ligne-de-commande-"},"Comment tester mes configurations et le Plugin en ligne de commande ?"),(0,r.kt)("p",null,"Une fois le Plugin d\xe9ploy\xe9, connectez vous \xe0 votre Collecteur en SSH et executez\nla commande suivante au travers de l'utilisateur ",(0,r.kt)("em",{parentName:"p"},"centreon-engine"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_blockchain_parity_ethpoller_api.pl  \\ \n   --plugin=blockchain::parity::ethpoller::plugin  \\ \n   --mode=tracking  \\ \n   --hostname=10.0.0.1  \\ \n   --port='8000'  \\ \n   --proto='http'  \\ \n   --url-path='/'  \\ \n   --timeout='10' \\ \n   --warning-balance-changes=''  \\ \n   --critical-balance-changes=''  \\ \n   --warning-events-frequency=''  \\ \n   --critical-events-frequency=''  \\ \n   --warning-mining-frequency=''  \\ \n   --critical-mining-frequency=''  \\ \n   --warning-mining-prct=''  \\ \n   --critical-mining-prct='50:'   \n")),(0,r.kt)("p",null,"Le retour de la commande doit \xeatre similaire \xe0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Events metrics are ok - Mining metrics are ok - Balances metrics are ok |\n'agent1#parity.tracking.events.perminute'=5.00;;;; 'agent2#parity.tracking.events.perminute'=15.00;;;; 'agent3#parity.tracking.events.perminute'=15.00;;;; 'agent4#parity.tracking.events.perminute'=10.00;;;; 'agent5#parity.tracking.events.perminute'=0.00;;;; 'credit#parity.tracking.events.perminute'=10.00;;;; 'deploy#parity.tracking.events.perminute'=20.00;;;; 'registry#parity.tracking.events.perminute'=5.00;;;; 'black#parity.tracking.mined.block.perminute'=5.00;;;; 'black#parity.tracking.mined.block.prct'=33.41%;;;0; 'gray#parity.tracking.mined.block.perminute'=10.00;;;; 'gray#parity.tracking.mined.block.prct'=33.14%;;;0; 'white#parity.tracking.mined.block.perminute'=10.00;;;; 'white#parity.tracking.mined.block.prct'=33.46%;;;0; 'master#parity.tracking.balance.changes.perminute'=0.00wei;;;; 'random#parity.tracking.balance.changes.perminute'=729999999999997378560.00wei;;;; \n")),(0,r.kt)("p",null,"Cette commande d\xe9clenchera une alerte CRITICAL si l'un des noeuds a min\xe9 moins de\n50% des blocks (",(0,r.kt)("inlineCode",{parentName:"p"},"--critical-mining-prct=50:"),"). "),(0,r.kt)("p",null,"Les options disponibles pour un mode donn\xe9e peuvent \xeatre affich\xe9 en ajoutant\nl'option ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande."),(0,r.kt)("p",null,"Tous les modes d'un Plugin donn\xe9 peuvent \xeatre list\xe9s au moyen de la commande suivante:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_blockchain_parity_ethpoller_api.pl  \\ \n   --plugin=blockchain::parity::ethpoller::plugin  \\ \n   --list-mode\n")),(0,r.kt)("h2",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,r.kt)("h3",{id:"unknown-cant-connect-to-"},"UNKNOWN: Can't connect to ..."),(0,r.kt)("p",null,"Cette erreur signifie que Centreon n'a pas r\xe9ussi \xe0 se connecter \xe0 l'API du\nBCM Poller. V\xe9rifiez que la requ\xeate n'est pas bloqu\xe9e par un outil externe\n(un pare-feu par exemple). Si vous utilisez un proxy, renseignez son URL dans la\nMacro EXTRAOPTIONS de l'H\xf4te ou directement dans la commande avec l'option\n",(0,r.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany:8080'"),"."),(0,r.kt)("p",null,"V\xe9rifiez \xe9galement que le port configur\xe9 est correct."),(0,r.kt)("h3",{id:"jobtiens-le-message-derreur-suivant--unknown-501-protocol-scheme-connect-is-not-supported-"},"J'obtiens le message d'erreur suivant:  ``UNKNOWN: 501 Protocol scheme 'connect' is not supported |```"),(0,r.kt)("p",null,"Dans certains cas, et plus sp\xe9cifiquement lors de l'usage d'un proxy\nd'entreprise, le protocole de connexion n'est pas support\xe9 par la libraire lwp\nutlis\xe9e par d\xe9faut par le Plugin Centreon.\nCette erreur peut \xeatre r\xe9solue en utilisant le backend HTTP curl. Pour ce faire,\najoutez l'option ",(0,r.kt)("inlineCode",{parentName:"p"},"--http-backend='curl'")," dans la Macro EXTRAOPTIONS de\nl'H\xf4te ou directement \xe0 la commande."))}N.isMDXComponent=!0}}]);