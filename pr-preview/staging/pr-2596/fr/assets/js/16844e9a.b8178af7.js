"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[94798],{84574:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>k,frontMatter:()=>u,metadata:()=>p,toc:()=>m});r(67294);var t=r(3905),s=r(51715),a=r(7626);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function l(e,n){if(null==e)return{};var r,t,s=function(e,n){if(null==e)return{};var r,t,s={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}const u={id:"update-centreon-ha",title:"Mise \xe0 jour d'une plateforme Centreon-HA"},c=void 0,p={unversionedId:"update/update-centreon-ha",id:"version-23.10/update/update-centreon-ha",title:"Mise \xe0 jour d'une plateforme Centreon-HA",description:"La proc\xe9dure suivante est \xe0 utiliser lors de l'application d'une mise \xe0 jour mineure sur un cluster Centreon-HA install\xe9 suivant cette documentation, dans le cas o\xf9 il n'y a pas de rupture de compatibilit\xe9 Engine/broker entre l'ancienne et la nouvelle version. Celle-ci peut se faire sans interrompre la supervision, mais en rendant l'interface indisponible pendant un court instant.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/update/update-centreon-ha.md",sourceDirName:"update",slug:"/update/update-centreon-ha",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/update/update-centreon-ha",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/update/update-centreon-ha.md",tags:[],version:"23.10",lastUpdatedAt:1699359701,formattedLastUpdatedAt:"7 nov. 2023",frontMatter:{id:"update-centreon-ha",title:"Mise \xe0 jour d'une plateforme Centreon-HA"},sidebar:"version-23.10/docs",previous:{title:"D\xe9panner Centreon-HA",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/administration/centreon-ha/troubleshooting-guide"},next:{title:"Mont\xe9e de version de Centreon HA depuis Centreon 21.04",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/upgrade/centreon-ha/upgrade-centreon-ha-from-21-04"}},d={},m=[{value:"Suspension de la gestion des resources par le cluster",id:"suspension-de-la-gestion-des-resources-par-le-cluster",level:2},{value:"D\xe9roulement de la mise \xe0 jour",id:"d\xe9roulement-de-la-mise-\xe0-jour",level:2},{value:"Mise \xe0 jour de Centreon-Web",id:"mise-\xe0-jour-de-centreon-web",level:3},{value:"Suppression des crons",id:"suppression-des-crons",level:3},{value:"Mise \xe0 jour des extensions",id:"mise-\xe0-jour-des-extensions",level:3},{value:"Mise \xe0 jour des connecteurs de supervision",id:"mise-\xe0-jour-des-connecteurs-de-supervision",level:3},{value:"Mise \xe0 jour des pollers",id:"mise-\xe0-jour-des-pollers",level:3},{value:"Export de la configuration Broker/Engine",id:"export-de-la-configuration-brokerengine",level:3},{value:"R\xe9tablissement de la gestion des ressources par le cluster",id:"r\xe9tablissement-de-la-gestion-des-ressources-par-le-cluster",level:2},{value:"V\xe9rification de la stabilit\xe9 de la plateforme",id:"v\xe9rification-de-la-stabilit\xe9-de-la-plateforme",level:2}],g={toc:m},f="wrapper";function k(e){var{components:n}=e,r=l(e,["components"]);return(0,t.kt)(f,i(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){o(e,n,r[n])}))}return e}({},g,r),{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"La proc\xe9dure suivante est \xe0 utiliser lors de l'application d'une mise \xe0 jour mineure sur un cluster Centreon-HA install\xe9 suivant ",(0,t.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/installation/installation-of-centreon-ha/installation-2-nodes"},"cette documentation"),", dans le cas o\xf9 il n'y a pas de rupture de compatibilit\xe9 Engine/broker entre l'ancienne et la nouvelle version. Celle-ci peut se faire sans interrompre la supervision, mais en rendant l'interface indisponible pendant un court instant."),(0,t.kt)("h2",{id:"suspension-de-la-gestion-des-resources-par-le-cluster"},"Suspension de la gestion des resources par le cluster"),(0,t.kt)("p",null,"Cette op\xe9ration n\xe9cessite de suspendre la gestion des ressources Centreon et MariaDB par le cluster pour \xe9viter qu'une bascule se produise en pleine mise \xe0 jour."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource unmanage centreon\npcs resource unmanage ms_mysql\n")),(0,t.kt)("h2",{id:"d\xe9roulement-de-la-mise-\xe0-jour"},"D\xe9roulement de la mise \xe0 jour"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Assurez-vous que tous les utilisateurs sont d\xe9connect\xe9s avant de commencer\nla proc\xe9dure de mise \xe0 jour.")),(0,t.kt)("h3",{id:"mise-\xe0-jour-de-centreon-web"},"Mise \xe0 jour de Centreon-Web"),(0,t.kt)("p",null,"Lancer la mise \xe0 jour sur les deux serveurs centraux :"),(0,t.kt)(s.Z,{groupId:"sync",mdxType:"Tabs"},(0,t.kt)(a.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"dnf update\n")))),(0,t.kt)("p",null,"Une fois les mises \xe0 jour termin\xe9es sur les deux serveurs, il reste \xe0 appliquer la mise \xe0 jour via l'interface web en fermant la session en cours ou en rafraichissant la page de login."),(0,t.kt)("p",null,'En parall\xe8le, sur le central "esclave", il faut d\xe9placer le r\xe9pertoire "install" pour \xe9viter d\'afficher \xe0 nouveau l\'interface de mise \xe0 jour suite \xe0 une bascule et reg\xe9n\xe9rer le cache Symfony :'),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"mv /usr/share/centreon/www/install /var/lib/centreon/installs/install-update-YYYY-MM-DD\nsudo -u apache /usr/share/centreon/bin/console cache:clear\n")),(0,t.kt)("h3",{id:"suppression-des-crons"},"Suppression des crons"),(0,t.kt)("p",null,"Les crons sont remis en place lors de la mise \xe0 jour des RPMs. Supprimer les sur les deux noeuds centraux afin d'\xe9viter les executions concurrentes."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"rm /etc/cron.d/centreon\nrm /etc/cron.d/centstorage\nrm /etc/cron.d/centreon-auto-disco\n")),(0,t.kt)("h3",{id:"mise-\xe0-jour-des-extensions"},"Mise \xe0 jour des extensions"),(0,t.kt)("p",null,"Les extensions (ou modules) Centreon n\xe9cessitent \xe9galement d'\xeatre mis \xe0 jour ",(0,t.kt)("em",{parentName:"p"},"via"),' l\'interface, depuis le menu "Administration > Extensions > Gestionnaire" en utilisant le bouton "Update all".'),(0,t.kt)("h3",{id:"mise-\xe0-jour-des-connecteurs-de-supervision"},"Mise \xe0 jour des connecteurs de supervision"),(0,t.kt)("p",null,"Afin de maintenir la compatibilit\xe9 entre les ",(0,t.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/monitoring/pluginpacks"},"connecteurs de supervision")," et les plugins install\xe9s (qui  ont \xe9t\xe9 mis \xe0 jour sur les serveurs centraux par la commande ",(0,t.kt)("inlineCode",{parentName:"p"},"yum update"),") il faut appliquer les mises \xe0 jour des connecteurs de supervision depuis le menu ",(0,t.kt)("strong",{parentName:"p"},"Configuration > Gestionnaire de connecteurs de supervision"),"."),(0,t.kt)("h3",{id:"mise-\xe0-jour-des-pollers"},"Mise \xe0 jour des pollers"),(0,t.kt)("p",null,"Il est recommand\xe9 de mettre \xe9galement \xe0 jour les pollers Centreon, ",(0,t.kt)("strong",{parentName:"p"},"en particulier dans le cas o\xf9 les paquets ",(0,t.kt)("inlineCode",{parentName:"strong"},"centreon-engine")," et/ou ",(0,t.kt)("inlineCode",{parentName:"strong"},"centreon-broker")," ont \xe9t\xe9 mis \xe0 jour"),"."),(0,t.kt)(s.Z,{groupId:"sync",mdxType:"Tabs"},(0,t.kt)(a.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"dnf update\n")))),(0,t.kt)("h3",{id:"export-de-la-configuration-brokerengine"},"Export de la configuration Broker/Engine"),(0,t.kt)("p",null,'G\xe9n\xe9rer une nouvelle configuration pour tous les pollers (central compris) via le menu "Configuration -> Pollers" en cochant les options :'),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"G\xe9n\xe9rer les fichiers de configuration"),(0,t.kt)("li",{parentName:"ul"},"Lancer le d\xe9bogage du moteur de supervision (-v)"),(0,t.kt)("li",{parentName:"ul"},"Deplacer les fichiers g\xe9n\xe9r\xe9s")),(0,t.kt)("p",null,"Puis les red\xe9marrer ",(0,t.kt)("strong",{parentName:"p"},"un \xe0 un"),' \xe0 partir du m\xeame menu, en s\xe9lectionnant l\'option "Red\xe9marrer" plut\xf4t que "Recharger" dans le cas o\xf9 les paquets ',(0,t.kt)("inlineCode",{parentName:"p"},"centreon-engine")," et/ou ",(0,t.kt)("inlineCode",{parentName:"p"},"centreon-broker")," ont \xe9t\xe9 mis \xe0 jour."),(0,t.kt)("p",null,"En compl\xe9ment, dans le cas o\xf9 ",(0,t.kt)("inlineCode",{parentName:"p"},"centreon-broker")," a \xe9t\xe9 mis \xe0 jour, il faut red\xe9marrer le broker central ",(0,t.kt)("strong",{parentName:"p"},"sur le serveur central ma\xeetre")," :"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"service cbd-sql restart\n")),(0,t.kt)("p",null,"Dans le cas o\xf9 des ",(0,t.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/installation/architectures#description"},"Remote Servers")," seraient pr\xe9sents, il faut y red\xe9marrer le service ",(0,t.kt)("inlineCode",{parentName:"p"},"cbd")," :"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"service cbd restart\n")),(0,t.kt)("h2",{id:"r\xe9tablissement-de-la-gestion-des-ressources-par-le-cluster"},"R\xe9tablissement de la gestion des ressources par le cluster"),(0,t.kt)("p",null,"Tous les composants devraient \xe0 pr\xe9sent \xeatre \xe0 jour et fonctionnels, il faut donc r\xe9tablir la gestion des ressources par le cluster :"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource manage centreon\npcs resource manage ms_mysql\n")),(0,t.kt)("h2",{id:"v\xe9rification-de-la-stabilit\xe9-de-la-plateforme"},"V\xe9rification de la stabilit\xe9 de la plateforme"),(0,t.kt)("p",null,"Il est toujours recommand\xe9, apr\xe8s une mise \xe0 jour, de contr\xf4ler que tout fonctionne bien :"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Acc\xe8s aux menus dans l'interface."),(0,t.kt)("li",{parentName:"ul"},"G\xe9n\xe9ration de configuration + reload ou restart de Centreon Engine"),(0,t.kt)("li",{parentName:"ul"},'Plannifier un contr\xf4le imm\xe9diat dans le menu "Monitoring" et contr\xf4ler que c\'est bien pris en compte (dans un d\xe9lai raisonnable). Faire de m\xeame avec un acquittement, un arr\xeat pr\xe9vu...'),(0,t.kt)("li",{parentName:"ul"},"Migrer une ressource ou un groupe de ressources d'un n\u0153ud \xe0 l'autre, rebooter un serveur ma\xeetre et contr\xf4ler que tout continue de fonctionner (refaire le tests ci-dessus).")))}k.isMDXComponent=!0}}]);