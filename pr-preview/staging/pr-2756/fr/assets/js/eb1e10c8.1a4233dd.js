"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[8843],{12940:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>N,frontMatter:()=>u,metadata:()=>p,toc:()=>d});n(67294);var r=n(3905),a=n(51715),l=n(7626);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={id:"sc-hp-bsm",title:"BSM"},m=void 0,p={unversionedId:"integrations/event-management/sc-hp-bsm",id:"version-23.10/integrations/event-management/sc-hp-bsm",title:"BSM",description:"Ce qu'apporte l'int\xe9gration de BSM + Centreon",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/integrations/event-management/sc-bsm.md",sourceDirName:"integrations/event-management",slug:"/integrations/event-management/sc-hp-bsm",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/integrations/event-management/sc-hp-bsm",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/integrations/event-management/sc-bsm.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"10 nov. 2023",frontMatter:{id:"sc-hp-bsm",title:"BSM"},sidebar:"version-23.10/docs",previous:{title:"Event Management",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/integrations/event-management/event-management-overview"},next:{title:"HP OMI",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/integrations/event-management/sc-hp-omi"}},c={},d=[{value:"Ce qu&#39;apporte l&#39;int\xe9gration de BSM + Centreon",id:"ce-quapporte-lint\xe9gration-de-bsm--centreon",level:2},{value:"Comment \xe7a marche",id:"comment-\xe7a-marche",level:2},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Support",id:"support",level:2},{value:"Proc\xe9dure d&#39;int\xe9gration",id:"proc\xe9dure-dint\xe9gration",level:2},{value:"Installation",id:"installation",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Configuration de <em>Centreon Broker</em>",id:"configuration-de-centreon-broker",level:4},{value:"Configuration avanc\xe9e",id:"configuration-avanc\xe9e",level:4},{value:"D\xe9sinstallation",id:"d\xe9sinstallation",level:2}],g={toc:d},k="wrapper";function N(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)(k,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"ce-quapporte-lint\xe9gration-de-bsm--centreon"},"Ce qu'apporte l'int\xe9gration de BSM + Centreon"),(0,r.kt)("p",null,"Le Stream Connector BSM envoie les donn\xe9es de ",(0,r.kt)("strong",{parentName:"p"},"Centreon")," vers le gestionnaire de service ",(0,r.kt)("strong",{parentName:"p"},"Micro Focus BSM")," (Business Service Management)."),(0,r.kt)("h2",{id:"comment-\xe7a-marche"},"Comment \xe7a marche"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chaque fois qu'un service ou un h\xf4te est v\xe9rifi\xe9 par le moteur de supervision, le r\xe9sultat passe par ",(0,r.kt)("em",{parentName:"li"},"Centreon Broker"),", qui utilise les fonctions d\xe9finies dans le script du Stream Connector pour transmettre les changements d'\xe9tat \xe0 BSM.")),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pour pouvoir transmettre des donn\xe9es vers BSM, il faut avoir cr\xe9\xe9 un webservice au pr\xe9alable. Veuillez contacter votre expert BSM pour cette partie."),(0,r.kt)("li",{parentName:"ul"},"L'int\xe9gration d'un Stream Connector n\xe9cessite un ",(0,r.kt)("strong",{parentName:"li"},"compte Centreon avec des privil\xe8ges d'administrateur")," ou bien les acc\xe8s aux menus ",(0,r.kt)("strong",{parentName:"li"},"Exporter la configuration")," et ",(0,r.kt)("strong",{parentName:"li"},"Configuration de Centreon Broker"),"."),(0,r.kt)("li",{parentName:"ul"},"Un ",(0,r.kt)("strong",{parentName:"li"},"acc\xe8s ",(0,r.kt)("inlineCode",{parentName:"strong"},"root")," en ligne de commande sur le serveur Centreon central")," est \xe9galement requis.")),(0,r.kt)("h2",{id:"support"},"Support"),(0,r.kt)("p",null,"Si vous avez besoin d'aide, vous pourrez en trouver via deux canaux, suivant votre statut :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Clients de Centreon titulaires d'un contrat de support")," : vous pouvez vous adresser directement \xe0 ",(0,r.kt)("a",{parentName:"li",href:"mailto:support@centreon.com"},"l'\xe9quipe du Support de Centreon"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Utilisateurs de l'\xe9dition Open Source")," ou de ",(0,r.kt)("strong",{parentName:"li"},"Centreon IT-100")," (versions gratuites) : nous vous invitons \xe0 rejoindre notre ",(0,r.kt)("a",{parentName:"li",href:"https://centreon.github.io"},"communaut\xe9 sur Slack")," o\xf9 nos utilisateurs et nos \xe9quipes feront de leur mieux pour vous aider.")),(0,r.kt)("h2",{id:"proc\xe9dure-dint\xe9gration"},"Proc\xe9dure d'int\xe9gration"),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Se connecter en tant que ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," au serveur central Centreon avec votre client SSH favori."),(0,r.kt)("p",null,"Lancer la commande adapt\xe9e \xe0 votre syst\xe8me :"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-stream-connector-bsm\n"))),(0,r.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-stream-connector-bsm\n"))),(0,r.kt)(l.Z,{value:"Debian 11",label:"Debian_11",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"apt install centreon-stream-connector-bsm\n")))),(0,r.kt)("p",null,"Le Stream Connector BSM est maintenant install\xe9 sur votre serveur Centreon central !"),(0,r.kt)("h3",{id:"configuration"},"Configuration"),(0,r.kt)("h4",{id:"configuration-de-centreon-broker"},"Configuration de ",(0,r.kt)("em",{parentName:"h4"},"Centreon Broker")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Se connecter \xe0 l'interface Web de Centreon avec un compte administrateur."),(0,r.kt)("li",{parentName:"ol"},"Naviguer vers ",(0,r.kt)("strong",{parentName:"li"},"Configuration")," > ",(0,r.kt)("strong",{parentName:"li"},"Collecteurs")," et choisir ",(0,r.kt)("strong",{parentName:"li"},"Configuration de Centreon Broker"),"."),(0,r.kt)("li",{parentName:"ol"},"Cliquer sur l'objet de configuration ",(0,r.kt)("strong",{parentName:"li"},"central-broker-master")," et naviguer dans l'onglet ",(0,r.kt)("strong",{parentName:"li"},"Output"),"."),(0,r.kt)("li",{parentName:"ol"},"S\xe9lectionner ",(0,r.kt)("strong",{parentName:"li"},"Generic - Stream connector")," et cliquer sur ",(0,r.kt)("strong",{parentName:"li"},"Ajouter")," pour cr\xe9er une nouvelle sortie."),(0,r.kt)("li",{parentName:"ol"},"Choisir son nom (",(0,r.kt)("strong",{parentName:"li"},"Name"),") par exemple ",(0,r.kt)("strong",{parentName:"li"},"BSM")," et saisir l'emplacement (",(0,r.kt)("strong",{parentName:"li"},"Path"),") o\xf9 le script a \xe9t\xe9 install\xe9 : ",(0,r.kt)("inlineCode",{parentName:"li"},"/usr/share/centreon-broker/lua/bsm_connector.lua"),"."),(0,r.kt)("li",{parentName:"ol"},"Le param\xe8tre ",(0,r.kt)("inlineCode",{parentName:"li"},"http_server_url")," est \xe0 personnaliser dans tous les cas :")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"http_server_url")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"https://<my.bsm.server>:30005/bsmc/rest/events/<my-webservice>/"))))),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Sauvegarder la configuration, puis naviguer vers le menu ",(0,r.kt)("strong",{parentName:"li"},"Configuration")," > ",(0,r.kt)("strong",{parentName:"li"},"Collecteurs")," et choisir ",(0,r.kt)("strong",{parentName:"li"},"Collecteurs"),"."),(0,r.kt)("li",{parentName:"ol"},"S\xe9lectionner le collecteur ",(0,r.kt)("strong",{parentName:"li"},"Central")," et cliquer sur ",(0,r.kt)("strong",{parentName:"li"},"Exporter la configuration"),"."),(0,r.kt)("li",{parentName:"ol"},"Conserver les cases ",(0,r.kt)("strong",{parentName:"li"},"G\xe9n\xe9rer les fichiers de configuration")," et ",(0,r.kt)("strong",{parentName:"li"},"Lancer le d\xe9bogage du moteur de supervision (-v)")," et cocher \xe9galement ",(0,r.kt)("strong",{parentName:"li"},"Deplacer les fichiers g\xe9n\xe9r\xe9s")," puis cliquer sur le bouton ",(0,r.kt)("strong",{parentName:"li"},"Exporter"),"."),(0,r.kt)("li",{parentName:"ol"},"Red\xe9marrer le service ",(0,r.kt)("inlineCode",{parentName:"li"},"cbd")," :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl restart cbd\n")),(0,r.kt)("p",null,"Votre serveur central a maintenant charg\xe9 le Stream Connector et commence \xe0 envoyer des donn\xe9es vers BSM !"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Pour s'assurer que tout fonctionne bien, on consultera les fichiers ",(0,r.kt)("inlineCode",{parentName:"p"},"central-broker-master.log")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"stream-connector-bsm.log"),", tous deux situ\xe9s \xe0 l'emplacement ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/log/centreon-broker")," du serveur central.")),(0,r.kt)("h4",{id:"configuration-avanc\xe9e"},"Configuration avanc\xe9e"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tableau des param\xe8tres")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Value (exemple)"),(0,r.kt)("th",{parentName:"tr",align:null},"Explication"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"http_server_url")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"https://<my.bsm.server>:30005/bsmc/rest/events/<my-webservice>/")),(0,r.kt)("td",{parentName:"tr",align:null},"URL de votre plateforme BSM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"http_proxy_string")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"http://your.proxy.server:3128")),(0,r.kt)("td",{parentName:"tr",align:null},"Param\xe9trage du proxy permettant de sortir vers Internet en HTTP/HTTPS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"source_ci")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Centreon")," (valeur par d\xe9faut)"),(0,r.kt)("td",{parentName:"tr",align:null},"Nom permettant d'identifier l'\xe9metteur")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"log_level")),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"2 (valeur par d\xe9faut)"),(0,r.kt)("td",{parentName:"tr",align:null},"Niveau de verbosit\xe9 des logs 0: errors seulement, 1: +warnings, 2: +verbose, 3: +debug")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"log_path")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/var/log/centreon-broker/my-custom-logfile.log")),(0,r.kt)("td",{parentName:"tr",align:null},"Chemin complet du fichier de log")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"max_buffer_size")),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"1 (valeur par d\xe9faut)"),(0,r.kt)("td",{parentName:"tr",align:null},"Nombre maximum d'\xe9v\xe9nements \xe0 stocker en m\xe9moire tampon en attendant de les transmettre en un seul envoi")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"max_buffer_age")),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"5 (valeur par d\xe9faut)"),(0,r.kt)("td",{parentName:"tr",align:null},"Temps d'attente maximum avant d'envoyer les \xe9v\xe9nements en m\xe9moire tampon si ",(0,r.kt)("inlineCode",{parentName:"td"},"max_buffer_size")," n'est pas encore atteint")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Remarques")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"La valeur par d\xe9faut de 2 pour le param\xe8tre ",(0,r.kt)("inlineCode",{parentName:"li"},"log_level")," est adapt\xe9e \xe0 la mise en place et au ",(0,r.kt)("em",{parentName:"li"},"troubleshooting")," initial \xe9ventuel, cela peut cependant g\xe9n\xe9rer un volume important de logs. Il est donc recommand\xe9, une fois la mise en place valid\xe9e, de l'abaisser \xe0 1."),(0,r.kt)("li",{parentName:"ul"},"La valeur par d\xe9faut de 1 pour le param\xe8tre ",(0,r.kt)("inlineCode",{parentName:"li"},"max_buffer_size")," fonctionne bien et garantit une latence r\xe9duite au minimum entre l'apparition d'une alerte et sa transmission \xe0 BSM. Il pourrait s'av\xe9rer utile de l'augmenter dans le cas o\xf9 le flux \xe0 transmettre comporterait en continu plusieurs \xe9v\xe9nements par seconde et au-del\xe0. ")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"d\xe9sinstallation"},"D\xe9sinstallation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Se connecter \xe0 l'interface Web de Centreon avec un compte administrateur."),(0,r.kt)("li",{parentName:"ol"},"Naviguer vers ",(0,r.kt)("strong",{parentName:"li"},"Configuration")," > ",(0,r.kt)("strong",{parentName:"li"},"Collecteurs")," et choisir ",(0,r.kt)("strong",{parentName:"li"},"Configuration de Centreon Broker"),"."),(0,r.kt)("li",{parentName:"ol"},"Cliquer sur l'objet de configuration ",(0,r.kt)("strong",{parentName:"li"},"central-broker-master")," et naviguer dans l'onglet ",(0,r.kt)("strong",{parentName:"li"},"Output"),"."),(0,r.kt)("li",{parentName:"ol"},"Supprimer la sortie ",(0,r.kt)("strong",{parentName:"li"},"Generic - Stream connector")," en cliquant sur la croix rouge entour\xe9e d'un cercle \xe0 la fin de la ligne."),(0,r.kt)("li",{parentName:"ol"},"Sauvegarder la configuration, puis naviguer vers le menu ",(0,r.kt)("strong",{parentName:"li"},"Configuration")," > ",(0,r.kt)("strong",{parentName:"li"},"Collecteurs")," et choisir ",(0,r.kt)("strong",{parentName:"li"},"Collecteurs"),"."),(0,r.kt)("li",{parentName:"ol"},"S\xe9lectionner le collecteur ",(0,r.kt)("strong",{parentName:"li"},"Central")," et cliquer sur ",(0,r.kt)("strong",{parentName:"li"},"Exporter la configuration"),"."),(0,r.kt)("li",{parentName:"ol"},"Conserver les cases ",(0,r.kt)("strong",{parentName:"li"},"G\xe9n\xe9rer les fichiers de configuration")," et ",(0,r.kt)("strong",{parentName:"li"},"Lancer le d\xe9bogage du moteur de supervision (-v)")," et cocher \xe9galement ",(0,r.kt)("strong",{parentName:"li"},"Deplacer les fichiers g\xe9n\xe9r\xe9s")," puis cliquer sur le bouton ",(0,r.kt)("strong",{parentName:"li"},"Exporter"),"."),(0,r.kt)("li",{parentName:"ol"},"Red\xe9marrer le service ",(0,r.kt)("inlineCode",{parentName:"li"},"cbd")," :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl restart cbd\n")),(0,r.kt)("p",null,"Le Stream Connector n'est plus charg\xe9 par ",(0,r.kt)("inlineCode",{parentName:"p"},"centreon-broker"),"."),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"Ce n'est pas n\xe9cessaire, mais vous pouvez \xe9galement supprimer le script pour d\xe9sinstaller compl\xe8tement le Stream Connector :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rm -f /usr/share/centreon-broker/lua/bsm_connector.lua\n")))}N.isMDXComponent=!0}}]);