"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[15165],{71389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>N,frontMatter:()=>p,metadata:()=>c,toc:()=>m});n(67294);var r=n(3905),a=n(51715),l=n(7626);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={id:"applications-webservers-nginx-serverstatus",title:"Nginx Server"},u=void 0,c={unversionedId:"integrations/plugin-packs/procedures/applications-webservers-nginx-serverstatus",id:"integrations/plugin-packs/procedures/applications-webservers-nginx-serverstatus",title:"Nginx Server",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-webservers-nginx-serverstatus.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-webservers-nginx-serverstatus",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/applications-webservers-nginx-serverstatus",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-webservers-nginx-serverstatus.md",tags:[],version:"current",frontMatter:{id:"applications-webservers-nginx-serverstatus",title:"Nginx Server"},sidebar:"pp",previous:{title:"Nginx Plus Restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/applications-nginx-plus-restapi"},next:{title:"Nmap CLI Discovery",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/applications-nmap-cli"}},d={},m=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Comment tester le Plugin en ligne de commande et comment utiliser ses options ?",id:"comment-tester-le-plugin-en-ligne-de-commande-et-comment-utiliser-ses-options-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:2},{value:"UNKNOWN: Cannot load module &#39;Net::Curl::Easy&#39;",id:"unknown-cannot-load-module-netcurleasy",level:3},{value:"UNKNOWN: curl perform error : Couldn&#39;t connect to server",id:"unknown-curl-perform-error--couldnt-connect-to-server",level:3}],g={toc:m},k="wrapper";function N(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(k,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,r.kt)("p",null,"Nginx est un serveur web open-source aussi utilis\xe9 comme reverse proxy, cache HTTP, et load balancer."),(0,r.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,r.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Nginx Server")),(0,r.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Requests",label:"Requests",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"server.connections.accepted.persecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of accepted connections"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Connections/second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"server.connections.handled.persecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of handled connections"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Connections/second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"server.connections.dropped.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of dropped connections"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"server.requests.persecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of requests"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Requests/second"))))),(0,r.kt)(l.Z,{value:"Connections",label:"Connections",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"server.connections.active.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of active connections"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"server.connections.waiting.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of waiting connections"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"server.connections.writing.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of writing connections"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"server.connections.reading.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of reading connections"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Count")))))),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("p",null,"Remarque: La proc\xe9dure suivante est un exemple et ne peut pas \xeatre appliqu\xe9e dans tous les contextes."),(0,r.kt)("p",null,"Le module permet de g\xe9n\xe9rer un rapport Nginx et de le rendre disponible sur une page web d\xe9di\xe9e. Ce rapport est utilis\xe9 pour g\xe9n\xe9rer des statistiques dans Centreon.."),(0,r.kt)("p",null,"Pour activer ce module, vous devez ouvrir votre fichier de configuration nginx."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ vi /etc/nginx/nginx.conf\n")),(0,r.kt)("p",null,"and ajouter les lignes suivantes dans la parenth\xe8se 'server':"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"server { \n    ... \n    location /nginx_status { \n        stub_status on; \n        access_log off;\n        allow <centreon-poller_@IP>;\n        deny all; \n    }\n    ...\n}\n")),(0,r.kt)("p",null,"Assurez-vous que le collecteur est authoris\xe9 \xe0 acc\xe9der \xe0 cette URL."),(0,r.kt)("p",null,"Contr\xf4ler la validit\xe9 de votre configuration en utilisant la commande suivante:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ nginx -t nginx: the configuration file\n/etc/nginx/nginx.conf syntax is ok nginx: configuration file\n/etc/nginx/nginx.conf test is successful\n")),(0,r.kt)("p",null,"Nginx doit \xeatre recharg\xe9 pour prendre en compte cette modification :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ /etc/init.d/nginx reload\n")),(0,r.kt)("p",null,"Acc\xe9der \xe0 l'url suivante pour contr\xf4ler le r\xe9sultat\xa0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"http://<nginx_address>/nginx_status\n")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon devant superviser des serveurs Nginx:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Webservers-Nginx-Serverstatus\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,r.kt)("em",{parentName:"li"},"Nginx Server")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,r.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon devant superviser des serveurs Nginx:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Webservers-Nginx-Serverstatus\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le RPM du connecteur de supervision ",(0,r.kt)("em",{parentName:"li"},"Nginx Server")," :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-webservers-nginx-serverstatus\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,r.kt)("em",{parentName:"li"},"Nginx Server")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Depuis l\'interface Web de Centreon, ajoutez un nouvel H\xf4te depuis la page "Configuration > H\xf4tes".'),(0,r.kt)("li",{parentName:"ul"},'Appliquez le mod\xe8le "App-Webserver-Nginx-ServerStatus-custom" et configurez toutes les macros obligatoires:')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NGINXPORT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Port used by Apache. Default is 80")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NGINXPROTOCOL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Protocol used. Default is http")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"NGINXSTATUSEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --verbose flag)")))),(0,r.kt)("p",null,"Par d\xe9faut ",(0,r.kt)("inlineCode",{parentName:"p"},"NGINXSTATUSEXTRAOPTIONS")," contient les options : ",(0,r.kt)("inlineCode",{parentName:"p"},'--http-backend=curl --curl-opt="CURLOPT_SSL_VERIFYPEER => 0"')," pour utiliser ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," et pour ne pas contr\xf4ler le certificat SSL."),(0,r.kt)("h2",{id:"comment-tester-le-plugin-en-ligne-de-commande-et-comment-utiliser-ses-options-"},"Comment tester le Plugin en ligne de commande et comment utiliser ses options ?"),(0,r.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis un collecteur Centreon en vous connectant avec l'utilisateur\n",(0,r.kt)("em",{parentName:"p"},"centreon-engine")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'/usr/lib/centreon/plugins//centreon_nginx_serverstatus.pl \\\n    --plugin=apps::nginx::serverstatus::plugin \\\n    --mode=requests \\\n    --hostname=10.30.2.11 \\\n    --proto=https \\\n    --port=443 \\\n    --warning-connections-dropped=10 \\\n    --critical-connections-dropped=20 \\\n    --http-backend=curl \\\n    --curl-opt="CURLOPT_SSL_VERIFYPEER => 0" \\\n    --verbose  \n')),(0,r.kt)("p",null,"La commande ci-dessus contr\xf4le les statistiques des requ\xeates sur le serveur Nginx (",(0,r.kt)("inlineCode",{parentName:"p"},"--mode=requests"),"). Les informations importantes sont l'adresse IP/FQDN (",(0,r.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.11"),"),"),(0,r.kt)("p",null,"le port utilis\xe9 par Apache (",(0,r.kt)("inlineCode",{parentName:"p"},"--port=443"),") et le protocole (",(0,r.kt)("inlineCode",{parentName:"p"},"--proto=https"),")."),(0,r.kt)("p",null,"Le backend ",(0,r.kt)("em",{parentName:"p"},"curl")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--http-backend='curl'"),") est utilis\xe9 par la commande et le certificat SSL du serveur cible n'est pas contr\xf4l\xe9 (",(0,r.kt)("inlineCode",{parentName:"p"},'--curl-opt="CURLOPT_SSL_VERIFYPEER => 0"'),")."),(0,r.kt)("p",null,"Une alarme de type WARNING est d\xe9clench\xe9e si le nombre de connexions interrompues sur le serveur est sup\xe9rieur \xe0 10 (",(0,r.kt)("inlineCode",{parentName:"p"},"--warning-connections-dropped=10"),")."),(0,r.kt)("p",null,"Une alarme CRITICAL est quant \xe0 elle d\xe9clench\xe9e si le nombre de connexions interrompues sur le serveur est sup\xe9rieur \xe0 20 (",(0,r.kt)("inlineCode",{parentName:"p"},"--critical-connections-dropped=20"),")."),(0,r.kt)("p",null,"La commande retourne le message de sortie ci-dessous:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OK: connections accepted: 0.36/s - connections handled: 0.36/s - connections dropped: 0 - requests: 13.00/s | 'server.connections.accepted.persecond'=0.36;;;0; 'server.connections.handled.persecond'=0.36;;;0; 'server.connections.dropped.count'=0;0:0;0:20;0; 'server.requests.persecond'=13.00;;;0;\n")),(0,r.kt)("p",null,"Des seuils peuvent \xeatre positionn\xe9s \xe0 l'aide des options ",(0,r.kt)("inlineCode",{parentName:"p"},"--warning-*")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"--critical-*")," sur les m\xe9triques."),(0,r.kt)("p",null,"Pour chaque mode, les options disponibles peuvent \xeatre consult\xe9es en ajoutant l'option ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_nginx_serverstatus.pl \\\n    --plugin=apps::nginx::serverstatus::plugin \\\n    --mode=requests \\\n    --help\n")),(0,r.kt)("p",null,"Les modes disponibles peuvent \xeatre affich\xe9s \xe0 l'aide de la commande suivante : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"usr/lib/centreon/plugins//centreon_nginx_serverstatus.pl \\\n    --plugin=apps::nginx::serverstatus::plugin \\\n    --list-mode \n")),(0,r.kt)("h2",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,r.kt)("h3",{id:"unknown-cannot-load-module-netcurleasy"},"UNKNOWN: Cannot load module 'Net::Curl::Easy'"),(0,r.kt)("p",null,"Ce message d'erreur indique qu'une librairie Perl est manquante pour utiliser le backend ",(0,r.kt)("em",{parentName:"p"},"curl"),"."),(0,r.kt)("p",null,"Pour corriger ce probl\xe8me, installer la librairie Perl Net::Curl::Easy \xe0 l'aide de la commande suivante :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install perl-Net-Curl\n")),(0,r.kt)("h3",{id:"unknown-curl-perform-error--couldnt-connect-to-server"},"UNKNOWN: curl perform error : Couldn't connect to server"),(0,r.kt)("p",null,"Lors du d\xe9ploiement de mes contr\xf4les, j'obtiens le message suivant ",(0,r.kt)("inlineCode",{parentName:"p"},"UNKNOWN: curl perform error : Couldn't connect to server |"),".\nCela signifie que Centreon n'a pas r\xe9ussi \xe0 se connecter \xe0 l'URL du serveur Nginx.\nLa plupart du temps, il faut pr\xe9ciser le proxy \xe0 utiliser en utilisant l'option ",(0,r.kt)("inlineCode",{parentName:"p"},"--proxyurl"),"."))}N.isMDXComponent=!0}}]);