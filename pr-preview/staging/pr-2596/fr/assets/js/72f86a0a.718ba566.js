"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[22693],{67098:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>N,frontMatter:()=>u,metadata:()=>d,toc:()=>m});n(67294);var r=n(3905),a=n(51715),s=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={id:"overview",title:"Centreon HA"},p=void 0,d={unversionedId:"installation/installation-of-centreon-ha/overview",id:"version-23.10/installation/installation-of-centreon-ha/overview",title:"Centreon HA",description:"Introduction",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/installation/installation-of-centreon-ha/overview.md",sourceDirName:"installation/installation-of-centreon-ha",slug:"/installation/installation-of-centreon-ha/overview",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/installation/installation-of-centreon-ha/overview",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/installation/installation-of-centreon-ha/overview.md",tags:[],version:"23.10",lastUpdatedAt:1699359701,formattedLastUpdatedAt:"7 nov. 2023",frontMatter:{id:"overview",title:"Centreon HA"},sidebar:"version-23.10/docs",previous:{title:"Graphical views API (beta)",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/api/graph-views-api"},next:{title:"Installation d'un cluster \xe0 2 n\u0153uds",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/installation/installation-of-centreon-ha/installation-2-nodes"}},c={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Concepts",id:"concepts",level:2},{value:"Groupe fonctionnel MariaDB",id:"groupe-fonctionnel-mariadb",level:3},{value:"Groupe fonctionnel Centreon",id:"groupe-fonctionnel-centreon",level:3},{value:"Description du type de ressources",id:"description-du-type-de-ressources",level:3},{value:"Contraintes de resources\u3000\uff1a",id:"contraintes-de-resources",level:3},{value:"QDevice et votes",id:"qdevice-et-votes",level:3},{value:"Support",id:"support",level:2},{value:"Logiciels et syst\xe8mes d&#39;exploitation",id:"logiciels-et-syst\xe8mes-dexploitation",level:3},{value:"Architectures",id:"architectures",level:3},{value:"Informations compl\xe9mentaires",id:"informations-compl\xe9mentaires",level:2},{value:"Placement des serveurs",id:"placement-des-serveurs",level:3},{value:"R\xf4le du serveur central Centreon",id:"r\xf4le-du-serveur-central-centreon",level:3},{value:"VIP et Bascule",id:"vip-et-bascule",level:3}],k={toc:m},v="wrapper";function N(e){var{components:t}=e,u=o(e,["components"]);return(0,r.kt)(v,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},k,u),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Centreon-HA est la seule solution officielle et support\xe9e pour mettre en place un cluster de supervision en haute disponibilit\xe9. Il inclut\nles \xe9l\xe9ments suivants : "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Une documentation, principalement pour d\xe9crire comment mettre en place votre Cluster sur votre solution Centreon."),(0,r.kt)("li",{parentName:"ul"},"Une collection de scripts permettant une gestion s\xfbre et efficace des ressources li\xe9es \xe0 Centreon."),(0,r.kt)("li",{parentName:"ul"},"Des fichiers additionnels qui \xe9tendront les capacit\xe9s par d\xe9faut de Centreon. ")),(0,r.kt)("p",null,"Cette architecture s'appuie sur les composants pacemaker et corosync de ",(0,r.kt)("a",{parentName:"p",href:"https://clusterlabs.org/"},"ClusterLabs"),",\npermettant une tol\xe9rance aux pannes sur les composants suivants : "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Daemons applicatifs du serveur central",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"centreon-engine (ordonnanceur)"),(0,r.kt)("li",{parentName:"ul"},"centreon-Broker (multiplexeur)"),(0,r.kt)("li",{parentName:"ul"},"centreon-Gorgone (gestionnaire de t\xe2ches)"),(0,r.kt)("li",{parentName:"ul"},"centreon-central-sync (r\xe9plication des fichiers de configuration)"),(0,r.kt)("li",{parentName:"ul"},"snmptrapd et centreontrapd (syst\xe8me et processus applicatifs de gestion des traps SNMP)"))),(0,r.kt)("li",{parentName:"ul"},"Daemons tiers du serveur central",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"php-fpm (cache FastCGI PHP)"),(0,r.kt)("li",{parentName:"ul"},"apache server (serveur web)"))),(0,r.kt)("li",{parentName:"ul"},"Bases de donn\xe9es",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"R\xe9plication active/passive de binlogs (stockage)"))),(0,r.kt)("li",{parentName:"ul"},"D\xe9faillances des h\xf4tes",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Machines virtuelles ou serveurs physiques")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Avertissement:")," Si vous disposez d'une IT ou Business edition, veuillez contacter votre repr\xe9sentant commercial Centreon\nou votre responsable de compte technique avant de le mettre en place. Les extensions ont besoin de fichiers\nde licence sp\xe9cifiques pour fonctionner sans probl\xe8me sur les deux n\u0153uds.")),(0,r.kt)("h2",{id:"concepts"},"Concepts"),(0,r.kt)("p",null,"La solution met en \u0153uvre trois types de ressources diff\xe9rentes : "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ressources ",(0,r.kt)("em",{parentName:"li"},"multi-state"),", fonctionnant sur les deux n\u0153uds avec des r\xf4les diff\xe9rents. "),(0,r.kt)("li",{parentName:"ul"},"Ressources ",(0,r.kt)("em",{parentName:"li"},"clone"),", fonctionnant \xe0 la fois sur le n\u0153ud principal et le n\u0153ud secondaire."),(0,r.kt)("li",{parentName:"ul"},"Ressources ",(0,r.kt)("em",{parentName:"li"},"unique"),", faisant partie d'un groupe et fonctionnant sur un seul n\u0153ud.")),(0,r.kt)("p",null,"Les services du cluster sont divis\xe9s en deux groupes fonctionnels."),(0,r.kt)("h3",{id:"groupe-fonctionnel-mariadb"},"Groupe fonctionnel MariaDB"),(0,r.kt)("p",null,"Le groupe fonctionnel ",(0,r.kt)("inlineCode",{parentName:"p"},"ms_mysql")," est une ressource ",(0,r.kt)("em",{parentName:"p"},"multi-state"),". Cette ressource peut \xeatre en mode\nactif/primaire sur un n\u0153ud et en mode secondaire/passif sur l'autre n\u0153ud. "),(0,r.kt)("p",null,"La m\xe9ta-ressource ",(0,r.kt)("inlineCode",{parentName:"p"},"ms_mysql-master")," est affect\xe9e \xe0 la base de donn\xe9es primaire."),(0,r.kt)("h3",{id:"groupe-fonctionnel-centreon"},"Groupe fonctionnel Centreon"),(0,r.kt)("p",null,"Le groupe fonctionnel ",(0,r.kt)("inlineCode",{parentName:"p"},"centreon")," rassemble toutes les ressources Centreon pour les g\xe9rer."),(0,r.kt)("h3",{id:"description-du-type-de-ressources"},"Description du type de ressources"),(0,r.kt)("p",null,"Toutes ces ressources sont d\xe9crites dans le tableau ci-dessous."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nom"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ms_mysql")),(0,r.kt)("td",{parentName:"tr",align:null},"ressource multi-state"),(0,r.kt)("td",{parentName:"tr",align:null},"G\xe8re le processus ",(0,r.kt)("inlineCode",{parentName:"td"},"mysql")," et la r\xe9plication des donn\xe9es.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ms_mysql-master")),(0,r.kt)("td",{parentName:"tr",align:null},"location"),(0,r.kt)("td",{parentName:"tr",align:null},"D\xe9finir la pr\xe9f\xe9rence de r\xe8gle du serveur ma\xeetre MariaDB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"php7")),(0,r.kt)("td",{parentName:"tr",align:null},"service clone"),(0,r.kt)("td",{parentName:"tr",align:null},"Service gestionnaire des processus FastCGI (",(0,r.kt)("inlineCode",{parentName:"td"},"php-fpm"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cbd_rrd")),(0,r.kt)("td",{parentName:"tr",align:null},"service clone"),(0,r.kt)("td",{parentName:"tr",align:null},"Service du Broker RRD (",(0,r.kt)("inlineCode",{parentName:"td"},"cbd"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"centreon")),(0,r.kt)("td",{parentName:"tr",align:null},"groupe"),(0,r.kt)("td",{parentName:"tr",align:null},'Groupe des "services primitifs" de Centreon')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"vip")),(0,r.kt)("td",{parentName:"tr",align:null},"service primitif"),(0,r.kt)("td",{parentName:"tr",align:null},"Adresse de la VIP pour Centreon")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"http")),(0,r.kt)("td",{parentName:"tr",align:null},"service primitif"),(0,r.kt)("td",{parentName:"tr",align:null},"Service Apache  (",(0,r.kt)("inlineCode",{parentName:"td"},"httpd24-httpd"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gorgone")),(0,r.kt)("td",{parentName:"tr",align:null},"service primitif"),(0,r.kt)("td",{parentName:"tr",align:null},"Service Gorgone  (",(0,r.kt)("inlineCode",{parentName:"td"},"gorgoned"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"centreon_central_sync")),(0,r.kt)("td",{parentName:"tr",align:null},"service primitif"),(0,r.kt)("td",{parentName:"tr",align:null},"Service de synchronisation des fichiers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cbd_central_broker")),(0,r.kt)("td",{parentName:"tr",align:null},"service primitif"),(0,r.kt)("td",{parentName:"tr",align:null},"Service du Broker Central  (",(0,r.kt)("inlineCode",{parentName:"td"},"cbd-sql"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"centengine")),(0,r.kt)("td",{parentName:"tr",align:null},"service primitif"),(0,r.kt)("td",{parentName:"tr",align:null},"Service Centreon-Engine (",(0,r.kt)("inlineCode",{parentName:"td"},"centengine"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"centreontrapd")),(0,r.kt)("td",{parentName:"tr",align:null},"service primitif"),(0,r.kt)("td",{parentName:"tr",align:null},"Service de gestion des traps SNMP (",(0,r.kt)("inlineCode",{parentName:"td"},"centreontrapd"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"snmptrapd")),(0,r.kt)("td",{parentName:"tr",align:null},"service primitif"),(0,r.kt)("td",{parentName:"tr",align:null},"Service d'\xe9coute des traps SNMP (",(0,r.kt)("inlineCode",{parentName:"td"},"snmptrapd"),")")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Les ressources du groupe ",(0,r.kt)("inlineCode",{parentName:"p"},"centreon")," sont d\xe9marr\xe9es les unes apr\xe8s les autres dans l'ordre de la liste."),(0,r.kt)("h3",{id:"contraintes-de-resources"},"Contraintes de resources\u3000\uff1a"),(0,r.kt)("p",null,"Pacemaker propose diff\xe9rents types de contraintes :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Location")," : o\xf9 la ressource doit ou ne doit pas s'ex\xe9cuter."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Colocation")," : comment les ressources se comportent les unes par rapport aux autres.")),(0,r.kt)("p",null,"Par exemple, Centreon-HA utilise des contraintes de location pour sp\xe9cifier \xe0 Pacemaker que le processus\nde base de donn\xe9es dois \xeatre op\xe9rationnel sur les n\u0153uds backend, mais pas sur les n\u0153uds frontend. "),(0,r.kt)("p",null,"En ce qui concerne les contraintes de colocation, ils peuvent s'assurer qu'une IP virtuelle (VIP) est attribu\xe9e aux n\u0153uds primaires.\nPar cons\xe9quent, les utilisateurs, les Collecteurs et les D\xe9mons interagissent constamment avec le n\u0153ud primaire."),(0,r.kt)("h3",{id:"qdevice-et-votes"},"QDevice et votes"),(0,r.kt)("p",null,"La configuration d'un qdevice est ",(0,r.kt)("strong",{parentName:"p"},"obligatoire")," pour \xe9viter le split-brain et autres situations auxquelles personne ne veut \xeatre\nconfront\xe9 dans un Cluster. Le serveur avec le r\xf4le ",(0,r.kt)("inlineCode",{parentName:"p"},"quorum-device")," vise \xe0 obtenir une majorit\xe9 absolue lors d'un vote\npour \xe9lire un n\u0153ud ma\xeetre ou un r\xf4le ressource."),(0,r.kt)("h2",{id:"support"},"Support"),(0,r.kt)("h3",{id:"logiciels-et-syst\xe8mes-dexploitation"},"Logiciels et syst\xe8mes d'exploitation"),(0,r.kt)("p",null,"Centreon supporte officiellement le Clustering sur les produits suivants :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Toutes les \xe9ditions sous licence de Centreon "),(0,r.kt)("li",{parentName:"ul"},"Serveur de Centreon-Map")),(0,r.kt)("p",null,"Et sur les syst\xe8mes d'exploitation suivants : "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Alma / RHEL / Oracle Linux 8"),(0,r.kt)("li",{parentName:"ul"},"Debian 11")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Important:")," Pour installer les paquets pacemaker et corosync sur les syst\xe8mes RedHat, les serveurs doivent avoir acc\xe8s au d\xe9p\xf4t\nsous licence ",(0,r.kt)("em",{parentName:"p"},"Red Hat Enterprise Linux High Availability"),".  "),(0,r.kt)("p",null,"Le seul syst\xe8me de base de donn\xe9es officiel pris en charge par Centreon est MariaDB. "),(0,r.kt)("p",null,"N\xe9anmoins, notez que nous avons valid\xe9 que l'ensemble de la solution peut fonctionner sur MySQL 8 ",(0,r.kt)("em",{parentName:"p"},"avec quelques modifications"),",\nseule la ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/centreon-ha/issues"},"communaut\xe9")," (ou vos DBA) peut vous aider\net vous supporter dans l'ex\xe9cution d'un Cluster sur un serveur Oracle MySQL."),(0,r.kt)("p",null,"Pour MariaDB et Oracle MySQL, la configuration de la r\xe9plication peut \xeatre intrusive. Nous ",(0,r.kt)("em",{parentName:"p"},"vous d\xe9conseillons fortement")," de\nmettre en place un Cluster sur un serveur contenant d'autres bases de donn\xe9es d'applications, nous ne le supporterons pas. "),(0,r.kt)("h3",{id:"architectures"},"Architectures"),(0,r.kt)("p",null,"Centreon prend en charge les architectures \xe0 2 et 4 n\u0153uds. Nous recommandons l'utilisation d'une architecture \xe0 deux n\u0153uds,\nsauf si votre organisation exige une s\xe9paration syst\xe9matique des serveurs frontend et backend ou si votre p\xe9rim\xe8tre de supevision\nest sup\xe9rieur \xe0 5k h\xf4tes. "),(0,r.kt)("p",null,"Les sch\xe9mas ci-dessous montrent \xe0 la fois la structure de l'architecture et les flux r\xe9seau entre les serveurs. Pour obtenir la matrice\ncompl\xe8te des flux, reportez-vous \xe0 la page d'installation de l'architecture d\xe9di\xe9e."),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Cluster-deux-n\u0153uds",label:"Cluster-deux-n\u0153uds",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(36532).Z,width:"2044",height:"1530"})),(0,r.kt)("p",null,"Acc\xe9der \xe0 ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/installation/installation-of-centreon-ha/installation-2-nodes"},"cette page")," pour commencer votre installation \xe0 deux n\u0153uds !")),(0,r.kt)(s.Z,{value:"Cluster-quatre-n\u0153uds",label:"Cluster-quatre-n\u0153uds",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(3658).Z,width:"2228",height:"1517"})),(0,r.kt)("p",null,"Acc\xe9der \xe0 ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/installation/installation-of-centreon-ha/installation-4-nodes"},"cette page")," pour commencer votre installation \xe0 quatre n\u0153uds !"))),(0,r.kt)("h2",{id:"informations-compl\xe9mentaires"},"Informations compl\xe9mentaires"),(0,r.kt)("h3",{id:"placement-des-serveurs"},"Placement des serveurs"),(0,r.kt)("p",null,"La mise en place d'un cluster Centreon-HA peut s'av\xe9rer excessive ou du moins non-optimale lorsque tous vos serveurs\nfonctionnent dans le m\xeame datacenter, voir dans la m\xeame baie. "),(0,r.kt)("p",null,"Dans un monde parfait, les n\u0153uds primaires et secondaires fonctionnent sur des sites (g\xe9ographiques) diff\xe9rents, et le QDevice\ncommunique avec les deux sites ind\xe9pendamment. \xc9videmment, tous les n\u0153uds doivent communiquer entre eux."),(0,r.kt)("h3",{id:"r\xf4le-du-serveur-central-centreon"},"R\xf4le du serveur central Centreon"),(0,r.kt)("p",null,"Dans le cas d'une architecture hautement disponible, le ",(0,r.kt)("strong",{parentName:"p"},"cluster central Centreon ne doit pas \xeatre utilis\xe9 comme Poller"),".\nEn d'autres termes, il ne doit pas surveiller les ressources. Sa capacit\xe9 de supervision ne doit \xeatre utilis\xe9e que pour surveiller ses Pollers.\nSi cette recommandation n'est pas suivie, le service ",(0,r.kt)("inlineCode",{parentName:"p"},"centengine")," prendrait trop de temps \xe0 red\xe9marrer\net ",(0,r.kt)("strong",{parentName:"p"},"il pourrait provoquer le basculement du groupe fonctionnel ",(0,r.kt)("inlineCode",{parentName:"strong"},"centreon")),"."),(0,r.kt)("h3",{id:"vip-et-bascule"},"VIP et Bascule"),(0,r.kt)("p",null,"Centreon recommande d'utiliser des adresses virtuelles."),(0,r.kt)("p",null,"L'utilisation d'un ",(0,r.kt)("em",{parentName:"p"},"load balancer")," est une option, mais il doit prendre en charge des r\xe8gles personnalis\xe9es afin d'acheminer les flux d'applications."),(0,r.kt)("p",null,"Par exemple, dans une configuration \xe0 quatre n\u0153uds, un ",(0,r.kt)("em",{parentName:"p"},"load balancer")," peut s'appuyer sur :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"frontend-vip: le port d'\xe9coute ou l'\xe9tat du processus apache pour acheminer les communications des utilisateurs et des Collecteurs vers les serveurs frontend."),(0,r.kt)("li",{parentName:"ul"},'backend-vip: la valeur de l\'indicateur "read_only" sur les deux serveurs de base de donn\xe9es pour d\xe9terminer lequel est le serveur primaire.')))}N.isMDXComponent=!0},36532:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/centreon-ha-2-nodes-arch-eb3645f78eb3e10060716ab57e32d533.png"},3658:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/centreon-ha-4-nodes-arch-c1a4828019f6de055b39d23ce6a046b0.png"}}]);