"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[82096],{60648:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>N,frontMatter:()=>o,metadata:()=>m,toc:()=>c});a(67294);var n=a(3905),r=a(51715),l=a(7626);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={id:"applications-monitoring-iplabel-ekara-restapi",title:"IP-Label Ekara Rest API"},u=void 0,m={unversionedId:"integrations/plugin-packs/procedures/applications-monitoring-iplabel-ekara-restapi",id:"integrations/plugin-packs/procedures/applications-monitoring-iplabel-ekara-restapi",title:"IP-Label Ekara Rest API",description:"Contenu du Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-monitoring-iplabel-ekara-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-monitoring-iplabel-ekara-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-iplabel-ekara-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-monitoring-iplabel-ekara-restapi.md",tags:[],version:"current",frontMatter:{id:"applications-monitoring-iplabel-ekara-restapi",title:"IP-Label Ekara Rest API"},sidebar:"pp",previous:{title:"IP-Label datametrie API (d\xe9pr\xe9ci\xe9)",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-iplabel-datametrie-restapi"},next:{title:"IP-Label Newtest Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-iplabel-newtest-restapi"}},d={},c=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Mod\xe8les",id:"mod\xe8les",level:3},{value:"R\xe8gles de d\xe9couverte",id:"r\xe8gles-de-d\xe9couverte",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3}],k={toc:c},g="wrapper";function N(e){var{components:t}=e,a=p(e,["components"]);return(0,n.kt)(g,s(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){i(e,t,a[t])}))}return e}({},k,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,n.kt)("h3",{id:"mod\xe8les"},"Mod\xe8les"),(0,n.kt)("p",null,"Le Pack Centreon ",(0,n.kt)("strong",{parentName:"p"},"IP-Label Ekara Rest API")," apporte 1 mod\xe8le d'h\xf4te :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"App-Monitoring-Iplabel-Ekara-Restapi-custom")),(0,n.kt)("p",null,"Il apporte les mod\xe8les de service suivants :"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Alias"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Mod\xe8le de service"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"D\xe9faut"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incidents"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Iplabel-Ekara-Incidents-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le les incidents IP-Label Ekara"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Scenario-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Iplabel-Ekara-Scenario-Status-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le les sc\xe9narios IP-Label Ekara"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,n.kt)("h3",{id:"r\xe8gles-de-d\xe9couverte"},"R\xe8gles de d\xe9couverte"),(0,n.kt)("p",null,"Le Pack Centreon ",(0,n.kt)("strong",{parentName:"p"},"IP-Label Ekara Rest API")," inclut un fournisseur de d\xe9couverte d'H\xf4tes nomm\xe9 ",(0,n.kt)("strong",{parentName:"p"},"IP-Label Ekara"),".\nCelui-ci permet de d\xe9couvrir l'ensemble des scenarios Ekara d'une instance donn\xe9e et d'ajouter ceux-ci en tant qu'h\xf4tes dans Centreon."),(0,n.kt)("p",null,"Vous trouverez plus d'informations sur la d\xe9couverte d'H\xf4tes et son fonctionnement dans la documentation du module:\n",(0,n.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery"},"D\xe9couverte des h\xf4tes")),(0,n.kt)("h3",{id:"m\xe9triques--statuts-collect\xe9s"},"M\xe9triques & statuts collect\xe9s"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Incidents",label:"Incidents",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ekara.incidents.current.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ekara.incident.duration.seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"incident-severity"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"incident-status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"trigger-status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"))))),(0,n.kt)(l.Z,{value:"Scenario-Status",label:"Scenario-Status",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"scenario.availability.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"scenario-status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"scenario.time.interaction.milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ms")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"scenario.time.allsteps.total.milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ms")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"steps"),"#scenario.step.time.milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ms")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"steps"),"#scenario.steps.time.total.milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ms")))))),(0,n.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Un compte de service disposant des droits en lecture est requis pour l'acc\xe8s \xe0 l'API Rest Ekara."),(0,n.kt)("li",{parentName:"ul"},"Le collecteur Centreon en charge de la supervision de ces ressources doit \xeatre en mesure de pouvoir joindre l'API Ekara sur Internet sur le port TCP/443.")),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources ",(0,n.kt)("strong",{parentName:"p"},"IP-Label Ekara")," :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," yum install centreon-plugin-Applications-Monitoring-Iplabel-Ekara-Restapi\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,n.kt)("strong",{parentName:"p"},"IP-Label Ekara Rest API")," depuis la page ",(0,n.kt)("strong",{parentName:"p"},"Configuration > Packs de plugins"),".")))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources ",(0,n.kt)("strong",{parentName:"p"},"IP-Label Ekara")," :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Monitoring-Iplabel-Ekara-Restapi\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Sur le serveur Central Centreon, installer le RPM du Pack ",(0,n.kt)("strong",{parentName:"p"},"IP-Label Ekara Rest API")," :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-monitoring-iplabel-ekara-restapi\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,n.kt)("strong",{parentName:"p"},"IP-Label Ekara Rest API")," depuis la page ",(0,n.kt)("strong",{parentName:"p"},"Configuration > Packs de plugins"),"."))))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ajoutez un h\xf4te \xe0 Centreon depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes"),"."),(0,n.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,n.kt)("strong",{parentName:"li"},"Nom"),", ",(0,n.kt)("strong",{parentName:"li"},"Alias")," et remplissez le champ ",(0,n.kt)("strong",{parentName:"li"},"Adresse IP/DNS")," avec l'adresse 127.0.0.1."),(0,n.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,n.kt)("strong",{parentName:"li"},"App-Monitoring-Iplabel-Ekara-Restapi-custom"),"."),(0,n.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, les Macros ci-dessous indiqu\xe9es comme requises (",(0,n.kt)("em",{parentName:"li"},"Obligatoire"),") doivent \xeatre renseign\xe9es.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Obligatoire"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"EKARAAPIEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Options suppl\xe9mentaires \xe0 ajouter \xe0 l'ensemble des commandes de l'h\xf4te (ex: --verbose)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"EKARAAPIHOSTNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"api.ekara.ip-label.net")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"EKARAAPIUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"EKARAAPIPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"EKARAAPIPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"443")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"EKARAAPIPROTO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"https")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"FILTERID"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"FILTERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"PROXYURL"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,n.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis votre collecteur Centreon en vous connectant avec\nl'utilisateur ",(0,n.kt)("strong",{parentName:"p"},"centreon-engine")," (",(0,n.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_monitoring_iplabel_ekara_restapi.pl \\\n    --plugin=apps::monitoring::iplabel::ekara::restapi::plugin \\\n    --mode=scenarios \\\n    --hostname='api.ekara.ip-label.net' \\\n    --api-username='johndoe@company.com' \\\n    --api-password='MyPassw0rd' \\\n    --port='443' \\\n    --proto='https' \\\n    --proxyurl='' \\\n    --timeframe='900' \\\n    --filter-name='MyScenario' \\\n    --filter-id='' \\\n    --verbose\n")),(0,n.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0 :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Scenario 'MyScenario': status: Success (1), availability: 100% | 'MyScenario#scenario.availability.percentage'=100%;;;0;100\nScenario 'MyScenario':\n    status: Success (1), availability: 100%\n")),(0,n.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre\naffich\xe9e en ajoutant le param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_monitoring_iplabel_ekara_restapi.pl \\\n    --plugin=apps::monitoring::iplabel::ekara::restapi::plugin \\\n    --mode=scenarios \\\n    --help\n")),(0,n.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s en ajoutant le param\xe8tre\n",(0,n.kt)("inlineCode",{parentName:"p"},"--list-mode")," \xe0 la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_monitoring_iplabel_ekara_restapi.pl \\\n    --plugin=apps::monitoring::iplabel::ekara::restapi::plugin \\\n    --list-mode\n")),(0,n.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,n.kt)("p",null,"Rendez-vous sur la ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#http-and-api-checks"},"documentation d\xe9di\xe9e"),"\ndes Plugins bas\xe9s sur HTTP/API."))}N.isMDXComponent=!0}}]);