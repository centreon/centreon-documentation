"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[84913],{40751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>N,frontMatter:()=>p,metadata:()=>c,toc:()=>d});n(67294);var a=n(3905),r=n(51715),l=n(7626);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"applications-sccm-nsclient",title:"Microsoft SCCM"},u=void 0,c={unversionedId:"integrations/plugin-packs/procedures/applications-sccm-nsclient",id:"integrations/plugin-packs/procedures/applications-sccm-nsclient",title:"Microsoft SCCM",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-sccm-nsclient.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-sccm-nsclient",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/applications-sccm-nsclient",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-sccm-nsclient.md",tags:[],version:"current",frontMatter:{id:"applications-sccm-nsclient",title:"Microsoft SCCM"},sidebar:"pp",previous:{title:"Microsoft IIS WSMAN",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/applications-iis-wsman"},next:{title:"Microsoft WSUS",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/applications-wsus-nsclient"}},m={},d=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:3}],g={toc:d},k="wrapper";function N(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)(k,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){s(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,a.kt)("p",null,"System Center Configuration Manager (anciennement Microsoft Systems Management Server ou SMS) est un logiciel de gestion de syst\xe8me\n\xe9dit\xe9 par Microsoft. Il est destin\xe9 \xe0 g\xe9rer de grands parcs d\u2019ordinateurs sur syst\xe8mes Windows. Il permet la prise de main \xe0 distance,\nla gestion de correctifs, l\u2019automatisation de t\xe2ches, la t\xe9l\xe9distribution d\u2019applications, l\u2019inventaire mat\xe9riel et logiciel,\nla gestion de la conformit\xe9 et l\u2019administration des politiques de s\xe9curit\xe9."),(0,a.kt)("p",null,"Le connecteur de supervision Centreon ",(0,a.kt)("em",{parentName:"p"},"Microsoft SCCM")," permet de contr\xf4ler l'\xe9tat d'une infrastructure SCCM par l'utilisation de l'agent ",(0,a.kt)("em",{parentName:"p"},"centreon-nsclient"),"\npour Windows. Les deux m\xe9thodes de connexion \xe0 l'agent, NRPE & RestAPI, sont support\xe9es."),(0,a.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,a.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Databases"),(0,a.kt)("li",{parentName:"ul"},"Sites ")),(0,a.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"database-replication-status",label:"database-replication-status",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"link-status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the replication link")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"site-status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the site replication"))))),(0,a.kt)(l.Z,{value:"site-status",label:"site-status",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Operational status of the site")))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("p",null,"Le Plugin Centreon pour Microsoft SCCM est inclus dans l'agent ",(0,a.kt)("em",{parentName:"p"},"centreon-nsclient")," et est ex\xe9cut\xe9 localement par ce dernier.\nPour ce faire, l'agent ",(0,a.kt)("em",{parentName:"p"},"centreon-nsclient")," doit \xeatre install\xe9 et configur\xe9 sur les serveurs cible de l'infrastructure SCCM (ceux o\xf9 la console SCCM Admin est install\xe9e).\nVous pouvez utiliser au choix les m\xe9thodes de connexion NRPE & RestAPI depuis le Collecteur Centreon pour interroger l'agent.\nRendez-vous sur la documentation associ\xe9e pour plus d'informations sur l'agent et ses diff\xe9rentes m\xe9thodes de connexion:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-nrpe"},"NRPE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-restapi"},"RestAPI"))),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Selon la m\xe9thode de supervision choisie (NRPE ou RestAPI), installer le Plugin d\xe9di\xe9 sur chaque collecteur Centreon devant\nsuperviser les ressources ",(0,a.kt)("em",{parentName:"li"},"Microsoft SCCM")," via l'agent ",(0,a.kt)("em",{parentName:"li"},"centreon-nsclient"),":")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NRPE")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-nrpe-plugin\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"RestAPI")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Operatingsystems-Windows-Restapi\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Microsoft SCCM"),"\ndepuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Selon la m\xe9thode de supervision choisie (NRPE ou RestAPI), installer le Plugin d\xe9di\xe9 sur chaque collecteur Centreon devant\nsuperviser les ressources ",(0,a.kt)("em",{parentName:"li"},"Microsoft SCCM")," via l'agent ",(0,a.kt)("em",{parentName:"li"},"centreon-nsclient"),":")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NRPE")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-nrpe-plugin\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"RestAPI")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Operatingsystems-Windows-Restapi\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Installer le RPM du connecteur de supervision sur le serveur Centreon Central:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-sccm-nsclient\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Microsoft SCCM"),"\ndepuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Sur l\'interface Web de Centreon, ajoutez un nouvel H\xf4te depuis la page "Configuration > H\xf4tes"'),(0,a.kt)("li",{parentName:"ul"},"Renseignez l'adresse IP du serveur SCCM cible et appliquez le Mod\xe8le d'H\xf4te adapt\xe9 \xe0 votre configuration:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"App-Sccm-NRPE-custom")," pour NRPE"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"App-Sccm-NSClient-05-Restapi-custom")," pour RestAPI"))),(0,a.kt)("li",{parentName:"ul"},"Selon le Mod\xe8le s\xe9lectionn\xe9, remplissez les Macros d'H\xf4te associ\xe9es:")),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"App-Sccm-NRPE-custom",label:"App-Sccm-NRPE-custom",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NRPECLIENT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NRPE Plugin binary to use (Default: 'check_centreon_nrpe')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NRPEPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NRPE Port of the target server (Default: '5666')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NRPETIMEOUT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Timeout value (Default: '30')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"NRPEEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command","_","line (Default: '-u -m 8192')"))))),(0,a.kt)(l.Z,{value:"App-Sccm-NSClient-05-Restapi-custom",label:"App-Sccm-NSClient-05-Restapi-custom",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPIPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NSClient++ RestAPI port (Default: '8443')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPIPROTO"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NSClient++ RestAPI protocol to use (Default: 'https')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPILEGACYPASSWORD"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Password to authenticate against the API if relevant")))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sauvegarder puis exporter la nouvelle configuration")),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande\ndepuis un collecteur Centreon en vous connectant avec l'utilisateur ",(0,a.kt)("em",{parentName:"p"},"centreon-engine"),":"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"NRPE",label:"NRPE",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib64/nagios/plugins/check_centreon_nrpe \\\n    -H 10.0.0.1 \\\n    -p 5666 \\\n    -t 30 \\\n    -u -m 8192 \\\n    -c check_centreon_plugins -a 'apps::sccm::local::plugin' 'site-status' '--critical-status=\"%{status} eq FAILED\"'\n")),(0,a.kt)("p",null,"La commande devrait retourner un message de sortie de la forme ci-dessous:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Site 'MySite' status is 'ACTIVE' [Type: PRIMARY] [Mode: 'Unknown'] |\n")),(0,a.kt)("p",null,"Dans cet exemple, la commande vise \xe0 interroger un agent ",(0,a.kt)("em",{parentName:"p"},"centreon-nsclient")," en utilisant le protocole NRPE (",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/lib64/nagios/plugins/check_centreon_nrpe"),")\net les param\xe8tres de connexion associ\xe9s d\xe9finis dans les Macros d'H\xf4te (",(0,a.kt)("inlineCode",{parentName:"p"},"-p 5666 -t 30 -u -m 8192"),").\nL'agent va alors ex\xe9cuter localement le mode ",(0,a.kt)("em",{parentName:"p"},"site-status")," du Plugin ",(0,a.kt)("em",{parentName:"p"},"SCCM")," integr\xe9 dans ",(0,a.kt)("em",{parentName:"p"},"centreon-nsclient"),".\n(",(0,a.kt)("inlineCode",{parentName:"p"},"-c check_centreon_plugins -a 'apps::sccm::local::plugin' 'site-status'"),")."),(0,a.kt)("p",null,"Une alarme de type CRITICAL sera d\xe9clench\xe9e si le status ",(0,a.kt)("em",{parentName:"p"},"site SCCM")," est report\xe9 en \xe9tat ",(0,a.kt)("em",{parentName:"p"},"FAILED")," (",(0,a.kt)("inlineCode",{parentName:"p"},'--critical-status="%{status} eq FAILED"'),")."),(0,a.kt)("p",null,"Pour chaque mode, la liste de toutes les m\xe9triques, seuils associ\xe9s et options compl\xe9mentaires peut \xeatre affich\xe9e\nen ajoutant le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib64/nagios/plugins/check_centreon_nrpe -c check_centreon_plugins -a 'apps::sccm::local::plugin' 'site-status' '--help'\n"))),(0,a.kt)(l.Z,{value:"RestAPI",label:"RestAPI",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_nsclient_restapi.pl \\\n    --plugin=apps::nsclient::restapi::plugin  \\\n    --mode=query  \\\n    --hostname=10.0.0.1  \\\n    --port='8443'  \\\n    --proto='https'  \\\n    --legacy-password='centreon' \\\n    --command=check_centreon_plugins  \\\n    --arg='apps::sccm::local::plugin'  \\\n    --arg='site-status' \\\n    --arg='--critical-status=\"%{status} eq FAILED\"'\n\n")),(0,a.kt)("p",null,"La commande devrait retourner un message de sortie de la forme ci-dessous:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Site 'MySite' status is 'ACTIVE' [Type: PRIMARY] [Mode: 'Unknown'] |\n")),(0,a.kt)("p",null,"Dans cet exemple, la commande vise \xe0 interroger un agent ",(0,a.kt)("em",{parentName:"p"},"centreon-nsclient")," en utilisant la m\xe9thode de connexion RestAPI\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--plugin=apps::nsclient::restapi::plugin --mode=query"),") et les param\xe8tres de connexion associ\xe9s d\xe9finis dans les Macros d'H\xf4te\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--port='8443' --proto='https' --legacy-password='centreon'"),"). L'agent va alors ex\xe9cuter localement le mode ",(0,a.kt)("em",{parentName:"p"},"site-status"),"\ndu Plugin ",(0,a.kt)("em",{parentName:"p"},"SCCM")," integr\xe9 dans ",(0,a.kt)("em",{parentName:"p"},"centreon-nsclient")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--command=check_centreon_plugins --arg='apps::sccm::local::plugin' --arg='site-status'"),")."),(0,a.kt)("p",null,"Une alarme de type CRITICAL sera d\xe9clench\xe9e si le status ",(0,a.kt)("em",{parentName:"p"},"site SCCM")," est report\xe9 en \xe9tat ",(0,a.kt)("em",{parentName:"p"},"FAILED")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--arg='--critical-status=\"%{status} eq FAILED\"'"),")."),(0,a.kt)("p",null,"Pour chaque mode, la liste de toutes les m\xe9triques, seuils associ\xe9s et options compl\xe9mentaires peut \xeatre affich\xe9e\nen ajoutant le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_nsclient_restapi.pl --plugin=apps::nsclient::restapi::plugin --mode=query --command=check_centreon_plugins --arg='apps::sccm::local::plugin' --arg='site-status' --arg='--help'\n")))))}N.isMDXComponent=!0}}]);