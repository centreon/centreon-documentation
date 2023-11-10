"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[42614],{54998:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>m});n(67294);var a=n(3905),r=n(51715),o=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"applications-google-workspace-api",title:"Google Workspace"},u=void 0,c={unversionedId:"integrations/plugin-packs/procedures/applications-google-workspace-api",id:"integrations/plugin-packs/procedures/applications-google-workspace-api",title:"Google Workspace",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-google-workspace-api.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-google-workspace-api",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-google-workspace-api",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-google-workspace-api.md",tags:[],version:"current",frontMatter:{id:"applications-google-workspace-api",title:"Google Workspace"},sidebar:"pp",previous:{title:"Google GSuite (d\xe9pr\xe9ci\xe9)",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-google-gsuite-api"},next:{title:"Gorgone Restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-gorgone-restapi"}},d={},m=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"R\xe8gles de d\xe9couvertes",id:"r\xe8gles-de-d\xe9couvertes",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostique",id:"diagnostique",level:2}],g={toc:m},k="wrapper";function f(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(k,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){l(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,a.kt)("p",null,"Google Workspace est une suite d'outils et de logiciels de productivit\xe9 de type Cloud computing et de groupware destin\xe9e aux professionnels,\npropos\xe9e par Google sous la forme d'un abonnement."),(0,a.kt)("p",null,"Le connecteur de supervision Centreon permet de r\xe9cup\xe9rer le statut en temps r\xe9el de la disponibilit\xe9 des services composant cette suite,\nceci par le biais du portail d\xe9di\xe9 mis \xe0 disposition par Google."),(0,a.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,a.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Applications: Gmail, Meet, Drive, etc...")),(0,a.kt)("p",null,"La liste compl\xe8te des applications prises en charge est disponible ici:\n",(0,a.kt)("a",{parentName:"p",href:"https://workspace.google.fr/intl/en/features/"},"https://workspace.google.fr/intl/en/features/")),(0,a.kt)("h3",{id:"r\xe8gles-de-d\xe9couvertes"},"R\xe8gles de d\xe9couvertes"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Services",label:"Services",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Rule name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Google-Workspace-Services-Name"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Discover services and monitor their status")))))),(0,a.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Services",label:"Services",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"google.workspace.services.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of services currently monitored")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the service")))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("p",null,"Le collecteur Centreon doit pouvoir joindre les serveurs Google (",(0,a.kt)("a",{parentName:"p",href:"http://www.google.com"},"www.google.com"),") sur Internet sur le port TCP/443 (HTTPS).\nIl est possible de sp\xe9cifier un proxy \xe0 utiliser le cas \xe9ch\xe9ant."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur chaque collecteur Centreon devant superviser les services ",(0,a.kt)("em",{parentName:"li"},"Google Workspace"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Google-Workspace-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Pack ",(0,a.kt)("em",{parentName:"li"},"Google Workspace")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,a.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur chaque collecteur Centreon devant superviser les services ",(0,a.kt)("em",{parentName:"li"},"Google Workspace"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Google-Workspace-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Installer le RPM du Pack sur le serveur Centreon Central:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-google-workspace-api\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Pack ",(0,a.kt)("em",{parentName:"li"},"Google Workspace")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ajoutez un nouvel H\xf4te depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes")),(0,a.kt)("li",{parentName:"ul"},'Compl\xe9tez le champ "IP Address / DNS" en indiquant une IP ',(0,a.kt)("em",{parentName:"li"},"localhost")," (par exemple 127.0.0.1)"),(0,a.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,a.kt)("em",{parentName:"li"},"App-Google-Workspace-Api-custom"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Ce mod\xe8le d'H\xf4te est de type ",(0,a.kt)("em",{parentName:"p"},"dummy")," afin de ne pas initier de commande de v\xe9rification (",(0,a.kt)("em",{parentName:"p"},"ping"),") vers Internet\n(ce type de requ\xeate \xe9tant souvent bloqu\xe9e). l'H\xf4te ajout\xe9 renverra donc par d\xe9faut ",(0,a.kt)("em",{parentName:"p"},"OK"),".")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"GOOGLEWORKSPACESTATUSHOSTNAME"),(0,a.kt)("td",{parentName:"tr",align:"left"},"IP or name of the Status server (Default: ",(0,a.kt)("inlineCode",{parentName:"td"},"www.google.com"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"GOOGLEWORKSPACESTATUSPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Port used to reach the Google server (Default: '443')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"GOOGLEWORKSPACESTATUSPROTO"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Protocol used to reach the Google server (Default: 'https')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"PROXYURL"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configure a proxy URL to use if needed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"GOOGLEWORKSPACEEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command","_","line (eg. a --verbose flag)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"DUMMYSTATUS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Host state. Default is OK, do not modify it unless you know what you are doing")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"DUMMYOUTPUT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Host check output. Default is 'This is a dummy check'. Customize it with your own if needed")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'Par d\xe9faut, un Service de type "Global" sera d\xe9ploy\xe9, supervisant l\'ensemble des services Google Workspace.\nUtilisez la fonctionnalit\xe9 ',(0,a.kt)("strong",{parentName:"p"},"Service Discovery")," si vous souhaitez obtenir un Service par service Google Workspace.")),(0,a.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande\ndepuis un collecteur Centreon en vous connectant avec l'utilisateur ",(0,a.kt)("em",{parentName:"p"},"centreon-engine"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_google_workspace_api.pl \\\n    --plugin='apps::google::workspace::plugin' \\\n    --mode=services \\\n    --hostname='www.google.com' \\\n    --proto='https' \\\n    --port='443' \\\n    --proxyurl='http://myproxy.mycompany.org:8080' \\\n    --filter-name='mail|drive|meet' \\\n    --warning-status='%{status} eq \"disruption\"' \\\n    --critical-status='%{status} eq \"outage\"' \\\n    --verbose\n")),(0,a.kt)("p",null,"La commande devrait retourner un message de sortie de la forme ci-dessous:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: All Google workspace services are ok | 'google.workspace.services.count'=3;;;0;\nService 'Gmail' status is available\nService 'Google Drive' status is available\nService 'Google Meet' status is available\n")),(0,a.kt)("p",null,"Dans cet exemple, le Plugin r\xe9cup\xe8re les statuts des services Google Workspace (",(0,a.kt)("inlineCode",{parentName:"p"},"--plugin='apps::google::workspace::plugin' --mode=services"),")\ndepuis le site d\xe9di\xe9 (--hostname='",(0,a.kt)("a",{parentName:"p",href:"http://www.google.com'"},"www.google.com'"),"). On choisit ci-desus de n'afficher que le statut des applications ",(0,a.kt)("em",{parentName:"p"},"gmail"),", ",(0,a.kt)("em",{parentName:"p"},"drive")," et ",(0,a.kt)("em",{parentName:"p"},"meet"),"\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-name='gmail|drive|meet'"),")."),(0,a.kt)("p",null,"Une alarme WARNING sera ainsi d\xe9clench\xe9e si le statut d'un de ces services est signal\xe9e comme d\xe9grad\xe9e (",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-status='%{status} eq \"disruption\"'"),");\nl'alarme sera de type CRITICAL pour un service inaccessible (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-status='%{status} eq \"outage\"'"),")."),(0,a.kt)("p",null,"Pour chaque mode, la liste de toutes les m\xe9triques, seuils associ\xe9s et options compl\xe9mentaires peut \xeatre affich\xe9e\nen ajoutant le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_google_workspace_api.pl \\\n    --plugin='apps::google::workspace::plugin' \\\n    --mode=services \\\n    --help\n")),(0,a.kt)("h2",{id:"diagnostique"},"Diagnostique"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"Diagnostique des plugins")))}f.isMDXComponent=!0}}]);