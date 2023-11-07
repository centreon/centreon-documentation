"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[10072],{36931:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>v,frontMatter:()=>p,metadata:()=>c,toc:()=>g});n(67294);var a=n(3905),r=n(51715),o=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"applications-gorgone-restapi",title:"Gorgone Restapi"},u=void 0,c={unversionedId:"integrations/plugin-packs/procedures/applications-gorgone-restapi",id:"integrations/plugin-packs/procedures/applications-gorgone-restapi",title:"Gorgone Restapi",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-gorgone-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-gorgone-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/applications-gorgone-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-gorgone-restapi.md",tags:[],version:"current",frontMatter:{id:"applications-gorgone-restapi",title:"Gorgone Restapi"},sidebar:"pp",previous:{title:"Google Workspace",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/applications-google-workspace-api"},next:{title:"Graylog",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/applications-graylog-restapi"}},d={},g=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"connecteur de supervision assets",id:"connecteur-de-supervision-assets",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Configuration de Gorgone",id:"configuration-de-gorgone",level:3},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment tester le Plugin et quelle est la signification des options principales",id:"comment-tester-le-plugin-et-quelle-est-la-signification-des-options-principales",level:3}],m={toc:g},k="wrapper";function v(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(k,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){l(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,a.kt)("p",null,"Le d\xe9mon Gorgone est un gestionnaire de t\xe2che en mode distribu\xe9 (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/centreon/centreon-gorgone"},"https://github.com/centreon/centreon-gorgone"),")."),(0,a.kt)("h2",{id:"connecteur-de-supervision-assets"},"connecteur de supervision assets"),(0,a.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Instances gorgoned")),(0,a.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Events",label:"Events",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"path.events.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"By instances. e.g. ",(0,a.kt)("inlineCode",{parentName:"td"},"internal")," ",(0,a.kt)("inlineCode",{parentName:"td"},"external"),". Number of events on a path")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"event.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"By instances. e.g. ",(0,a.kt)("inlineCode",{parentName:"td"},"internal~pong"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"internal~command"),", ... Number of a specific event"))))),(0,a.kt)(o.Z,{value:"Nodes",label:"Nodes",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"node.ping.received.lasttime.seconds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"By instances (",(0,a.kt)("inlineCode",{parentName:"td"},"node_id"),"). Time since last ping response. Unit: seconds")))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("h3",{id:"configuration-de-gorgone"},"Configuration de Gorgone"),(0,a.kt)("p",null,"Assurer vous que le module Gorgone ",(0,a.kt)("inlineCode",{parentName:"p"},"httpserver")," est correctement configur\xe9. Au besoin, ajouter le avec la directive suivante"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'modules:\n    - name: httpserver\n      package: "gorgone::modules::core::httpserver::hooks"\n      enable: true\n      address: "0.0.0.0"\n      port: "8085"\n      ssl: false\n      auth:\n        enabled: false\n      allowed_hosts:\n        enabled: true\n        subnets:\n          - 127.0.0.1/32\n')),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur les Poller supervisant des instances de Gorgone:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Gorgone-Restapi\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Dans l'interface Centreon, rendez-vous dans le menu ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")," et installer le connecteur de supervision 'Gorgone Rest API'"))),(0,a.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur les Poller supervisant des instances de Gorgone:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Gorgone-Restapi\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Installer le RPM du connecteur de supervision RPM sur le serveur Centreon Central:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-gorgone-restapi.noarch\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Dans l'interface Centreon, rendez-vous dans le menu ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")," et installer le connecteur de supervision 'Gorgone Rest API'")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Rendez-vous dans le menu "Configuration > H\xf4tes" et ajouter un nouvel H\xf4te'),(0,a.kt)("li",{parentName:"ul"},"Appliquer le mod\xe8le ",(0,a.kt)("em",{parentName:"li"},"App-Gorgone-Restapi-custom")," et configurer les macros obligatoires mentionn\xe9es ci-dessous:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"GORGONEAPIPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Port used. Default is 8085")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"GORGONEAPIPROTO"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Protocol used. Default is http")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"GORGONEAPIUSERNAME"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Username to access to the API.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"GORGONEAPIPASSWORD"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Password to access to the API.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"GORGONEAPIEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --verbose flag)")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"comment-tester-le-plugin-et-quelle-est-la-signification-des-options-principales"},"Comment tester le Plugin et quelle est la signification des options principales"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez l'ex\xe9cuter avec l'utilisateur centreon-engine:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_gorgone_restapi.pl \\\n    --plugin=apps::gorgone::restapi::plugin \\\n    --mode=events \\\n    --hostname='127.0.0.1' \\\n    --port='8085' \\\n    --proto='http' \\\n    --verbose\n")),(0,a.kt)("p",null,"Cette commande superviser le nombre d'\xe9v\xe9nements trait\xe9s par Gorgone. Lorsqu'une authentification basique est configur\xe9e, il est n\xe9cessaire de sp\xe9cifier le nom\nd'utilisateur et le mot de passe dans la commande comme ceci (",(0,a.kt)("inlineCode",{parentName:"p"},"--api-username='John.doe' --api-password='6fbadZEJbsLG'"),")."),(0,a.kt)("p",null,"Le r\xe9sultat attendu est similaire \xe0:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: All paths are ok | 'external#path.events.total.count'=0;;;0; 'internal#path.events.total.count'=12;;;0; 'internal~actionready#event.total.count'=0;;;0; 'internal~bcastlogger#event.total.count'=0;;;0; 'internal~centreonnodesready#event.total.count'=0;;;0; 'internal~command#event.total.count'=0;;;0; 'internal~constatus#event.total.count'=1;;;0; 'internal~dbcleanerready#event.total.count'=0;;;0; 'internal~enginecommand#event.total.count'=0;;;0; 'internal~engineready#event.total.count'=0;;;0; 'internal~httpserverready#event.total.count'=0;;;0; 'internal~information#event.total.count'=1;;;0; 'internal~judgeready#event.total.count'=0;;;0; 'internal~legacycmdready#event.total.count'=0;;;0; 'internal~pipelineready#event.total.count'=0;;;0; 'internal~pong#event.total.count'=6;;;0; 'internal~proxyready#event.total.count'=0;;;0; 'internal~putlog#event.total.count'=0;;;0; 'internal~registernodes#event.total.count'=0;;;0; 'internal~setcoreid#event.total.count'=0;;;0; 'internal~setlogs#event.total.count'=4;;;0; 'internal~unregisternodes#event.total.count'=0;;;0;\nchecking path 'external'\n    total events: 0\nchecking path 'internal'\n    total events: 12\n    event 'actionready' total: 0\n...\n")),(0,a.kt)("p",null,"Les options permettant au Plugin de d\xe9clencher des alertes peuvent \xeatre affich\xe9 via l'aide de la sonde. (",(0,a.kt)("inlineCode",{parentName:"p"},"--help"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_gorgone_restapi.pl \\\n    --plugin=apps::gorgone::restapi::plugin \\\n    --mode=events \\\n    --help\n")),(0,a.kt)("p",null,"Il est possible d'afficher l'ensemble des modes disponibles avec la commande ci-dessous:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_gorgone_restapi.pl \\\n    --plugin=apps::gorgone::restapi::plugin \\\n    --list-mode\n")))}v.isMDXComponent=!0}}]);