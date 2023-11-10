"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[19408],{68987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>N,frontMatter:()=>p,metadata:()=>d,toc:()=>m});n(67294);var a=n(3905),r=n(51715),l=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"operatingsystems-linux-nrpe3",title:"Linux NRPE3"},u=void 0,d={unversionedId:"integrations/plugin-packs/procedures/operatingsystems-linux-nrpe3",id:"integrations/plugin-packs/procedures/operatingsystems-linux-nrpe3",title:"Linux NRPE3",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/operatingsystems-linux-nrpe3.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/operatingsystems-linux-nrpe3",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/operatingsystems-linux-nrpe3",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/operatingsystems-linux-nrpe3.md",tags:[],version:"current",frontMatter:{id:"operatingsystems-linux-nrpe3",title:"Linux NRPE3"},sidebar:"pp",previous:{title:"Linux NRPE (d\xe9pr\xe9ci\xe9)",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/operatingsystems-linux-nrpe"},next:{title:"Linux SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/operatingsystems-linux-snmp"}},c={},m=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"Types d&#39;\xe9quipements",id:"types-d\xe9quipements",level:4},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Flux r\xe9seau",id:"flux-r\xe9seau",level:3},{value:"Installation de l&#39;agent NRPE packag\xe9 par Centreon et sonde Linux locale",id:"installation-de-lagent-nrpe-packag\xe9-par-centreon-et-sonde-linux-locale",level:3},{value:"Configuration de NRPE",id:"configuration-de-nrpe",level:3},{value:"Installation",id:"installation",level:2},{value:"connecteur de supervision",id:"connecteur-de-supervision",level:3},{value:"Centreon NRPE3 Plugin",id:"centreon-nrpe3-plugin",level:3},{value:"Validation de l&#39;ensemble des pr\xe9requis",id:"validation-de-lensemble-des-pr\xe9requis",level:3},{value:"Configuration de l&#39;h\xf4te dans Centreon",id:"configuration-de-lh\xf4te-dans-centreon",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment \xe7a marche ?",id:"comment-\xe7a-marche-",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"<code>connect to address x.x.x.x port 5666: Connection refused</code>",id:"connect-to-address-xxxx-port-5666-connection-refused",level:4},{value:"<code>CHECK_NRPE STATE CRITICAL: Socket timeout after 10 seconds</code>",id:"check_nrpe-state-critical-socket-timeout-after-10-seconds",level:4},{value:"<code>NRPE: Command &#39;my_command&#39; not defined</code>",id:"nrpe-command-my_command-not-defined",level:4}],k={toc:m},g="wrapper";function N(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(g,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,a.kt)("p",null,"NRPE (Nagios Remote Plugin Executor) est un protocole qui a \xe9t\xe9 con\xe7u pour lancer \xe0 distance des commandes de supervision locales sur les serveurs supervis\xe9s."),(0,a.kt)("p",null,"Ce pack de plugin repose sur 3 composants, qui sont d\xe9taill\xe9s dans le tableau ci-dessous."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Composant"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Emplacement"),(0,a.kt)("th",{parentName:"tr",align:null},"R\xf4le"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"centreon_nrpe3_plugin")),(0,a.kt)("td",{parentName:"tr",align:null},"Binaire ex\xe9cutable"),(0,a.kt)("td",{parentName:"tr",align:null},"Poller"),(0,a.kt)("td",{parentName:"tr",align:null},"Transmet un nom de commande et des arguments associ\xe9s \xe0 celle-ci")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"centreon_linux_local.pl")),(0,a.kt)("td",{parentName:"tr",align:null},"Script Perl"),(0,a.kt)("td",{parentName:"tr",align:null},"Serveur supervis\xe9"),(0,a.kt)("td",{parentName:"tr",align:null},"S'ex\xe9cute localement et retourne un statut, un message d'information et des m\xe9triques")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"centreon-nrpe3")),(0,a.kt)("td",{parentName:"tr",align:null},"Service/daemon"),(0,a.kt)("td",{parentName:"tr",align:null},"Serveur supervis\xe9"),(0,a.kt)("td",{parentName:"tr",align:null},"\xc9coute sur le port 5666 et ex\xe9cute les commandes demand\xe9es si elles sont d\xe9finies dans sa configuration")))),(0,a.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,a.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,a.kt)("h4",{id:"types-d\xe9quipements"},"Types d'\xe9quipements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Serveur Linux CentOS 7 / RHEL7 (document\xe9 dans la pr\xe9sente proc\xe9dure)"),(0,a.kt)("li",{parentName:"ul"},"Serveur Linux d'autres distributions, \xe0 condition d'y installer manuellement le plugin et le ",(0,a.kt)("em",{parentName:"li"},"daemon")," NRPE3 (2e et 3e lignes du tableau ci-dessus).")),(0,a.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,a.kt)("p",null,"Seules les m\xe9triques sont d\xe9taill\xe9es dans cette section, mais sachez qu'un grand nombre de tests et de m\xe9triques peuvent \xeatre fournies par le Plugin ",(0,a.kt)("inlineCode",{parentName:"p"},"centreon_linux_local.pl"),". En voici une liste non exhaustive :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cmd-Generic :  V\xe9rifier le retour d'une commande"),(0,a.kt)("li",{parentName:"ul"},"Connections-Generic : V\xe9rifier les connections TCP/UDP"),(0,a.kt)("li",{parentName:"ul"},"Cpu-Detailed : V\xe9rifier l'utilisation moyenne des CPU (User, Nice, System, Idle, Wait, Interrupt, SoftIRQ, Steal, Guest, GuestNice)"),(0,a.kt)("li",{parentName:"ul"},"Disk-Generic-Name : V\xe9rifier l'utilisation des disques (une seule partition)"),(0,a.kt)("li",{parentName:"ul"},"Disk-Global : V\xe9rifier l'utilisation des disques (toutes les partitions ou filtrage par expression r\xe9guli\xe8re)"),(0,a.kt)("li",{parentName:"ul"},"Disk-IO-Generic-Name : V\xe9rifier les IO disques (une seule partition)"),(0,a.kt)("li",{parentName:"ul"},"Disk-IO-Global : V\xe9rifier les IO disques (toutes les partitions ou filtrage par expression r\xe9guli\xe8re)"),(0,a.kt)("li",{parentName:"ul"},"File-Date-Generic : V\xe9rifier la date (modification, cr\xe9ation) d'un fichier ou d'un r\xe9pertoire"),(0,a.kt)("li",{parentName:"ul"},"File-Size-Generic : V\xe9rifier la taille d'un fichier ou d'un r\xe9pertoire"),(0,a.kt)("li",{parentName:"ul"},"Inodes-Generic-Name : V\xe9rifier l'utilisation des inodes (une seule partition)"),(0,a.kt)("li",{parentName:"ul"},"Inodes-Global : V\xe9rifier l'utilisation des inodes (toutes les partitions ou filtrage par expression r\xe9guli\xe8re)"),(0,a.kt)("li",{parentName:"ul"},"Is-File-Generic : V\xe9rifier la pr\xe9sence d'un fichier"),(0,a.kt)("li",{parentName:"ul"},"Is-Not-File-Generic : V\xe9rifier l'absence d'un fichier"),(0,a.kt)("li",{parentName:"ul"},"Packet-Errors-Generic-Name : V\xe9rifier le nomdre de paquets r\xe9seau en erreur (une seule interface)"),(0,a.kt)("li",{parentName:"ul"},"Packet-Errors-Global : V\xe9rifier le nomdre de paquets r\xe9seau en erreur (toutes les partitions ou filtrage par expression r\xe9guli\xe8re)"),(0,a.kt)("li",{parentName:"ul"},"Process-Generic : V\xe9rifier qu'un processus est en cours d'ex\xe9cution"),(0,a.kt)("li",{parentName:"ul"},"Systemd-Sc-Status : V\xe9rifier l'\xe9tat des services g\xe9r\xe9s par ",(0,a.kt)("em",{parentName:"li"},"systemd")),(0,a.kt)("li",{parentName:"ul"},"Traffic-Generic-Name : V\xe9rifier la consommation de bande passante sur une interface"),(0,a.kt)("li",{parentName:"ul"},"Traffic-Global : V\xe9rifier la consommation de bande passante (toutes les partitions ou filtrage par expression r\xe9guli\xe8re)")),(0,a.kt)("p",null,"Voici les m\xe9triques collect\xe9es pour les services li\xe9s au mod\xe8le dh\xf4te par d\xe9faut :"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Cpu",label:"Cpu",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Unit\xe9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"0#core.cpu.utilization.percentage")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Utilisation moyenne du c\u0153ur 0"),(0,a.kt)("td",{parentName:"tr",align:"center"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"1#core.cpu.utilization.percentage")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Utilisation moyenne du c\u0153ur 1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"..."),(0,a.kt)("td",{parentName:"tr",align:"left"},"..."),(0,a.kt)("td",{parentName:"tr",align:"center"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"cpu.utilization.percentage")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Utilisation moyenne globale"),(0,a.kt)("td",{parentName:"tr",align:"center"},"%"))))),(0,a.kt)(l.Z,{value:"Load",label:"Load",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Unit\xe9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"load1")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Charge syst\xe8me moyenne sur 1 minute"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"load5")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Charge syst\xe8me moyenne sur 5 minutes"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"load15")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Charge syst\xe8me moyenne sur 15 minutes"),(0,a.kt)("td",{parentName:"tr",align:"center"}))))),(0,a.kt)(l.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Unit\xe9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"buffer")),(0,a.kt)("td",{parentName:"tr",align:"left"},"M\xe9moire allou\xe9e aux buffers"),(0,a.kt)("td",{parentName:"tr",align:"center"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"cached")),(0,a.kt)("td",{parentName:"tr",align:"left"},"M\xe9moire allou\xe9e en cache"),(0,a.kt)("td",{parentName:"tr",align:"center"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"slab")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Allocation Slab"),(0,a.kt)("td",{parentName:"tr",align:"center"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"used")),(0,a.kt)("td",{parentName:"tr",align:"left"},"M\xe9moire consomm\xe9e totale"),(0,a.kt)("td",{parentName:"tr",align:"center"},"B"))))),(0,a.kt)(l.Z,{value:"Swap",label:"Swap",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Unit\xe9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"swap.free.bytes")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Espace d'\xe9change non utilis\xe9"),(0,a.kt)("td",{parentName:"tr",align:"center"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"swap.usage.bytes")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Espace d'\xe9change utilis\xe9"),(0,a.kt)("td",{parentName:"tr",align:"center"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"swap.usage.percentage")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Utilisation de l'espace d'\xe9change"),(0,a.kt)("td",{parentName:"tr",align:"center"},"%"))))),(0,a.kt)(l.Z,{value:"Uptime",label:"Uptime",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Unit\xe9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"uptime")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Temps \xe9coul\xe9 depuis le dernier red\xe9marrage"),(0,a.kt)("td",{parentName:"tr",align:"center"},"s")))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("p",null,"Les pr\xe9requis ci-dessous sont indispendables pour que le connecteur de supervision puisse fonctionner correctement."),(0,a.kt)("h3",{id:"flux-r\xe9seau"},"Flux r\xe9seau"),(0,a.kt)("p",null,"Le port TCP par d\xe9faut pour le protocole NRPE est le port 5666."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Source"),(0,a.kt)("th",{parentName:"tr",align:null},"Destination"),(0,a.kt)("th",{parentName:"tr",align:null},"Protocole"),(0,a.kt)("th",{parentName:"tr",align:null},"Port"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Poller"),(0,a.kt)("td",{parentName:"tr",align:null},"H\xf4te supervis\xe9"),(0,a.kt)("td",{parentName:"tr",align:null},"TCP"),(0,a.kt)("td",{parentName:"tr",align:null},"5666")))),(0,a.kt)("h3",{id:"installation-de-lagent-nrpe-packag\xe9-par-centreon-et-sonde-linux-locale"},"Installation de l'agent NRPE packag\xe9 par Centreon et sonde Linux locale"),(0,a.kt)("p",null,"Les h\xf4tes supervis\xe9s ont besoin de deux composants pour que cela fonctionne :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"la sonde ",(0,a.kt)("inlineCode",{parentName:"li"},"centreon_linux_local.pl")),(0,a.kt)("li",{parentName:"ul"},"L'agent (",(0,a.kt)("em",{parentName:"li"},"daemon"),") NRPE3")),(0,a.kt)("p",null,"Installer les paquets suivants :"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"RHEL / CentOS / Oracle Linux 8",label:"RHEL / CentOS / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install -y https://packages.centreon.com/rpm-standard/22.10/el8/stable/noarch/RPMS/centreon-release-22.10-1.el8.noarch.rpm\ndnf install centreon-nrpe3-daemon.x86_64 centreon-plugin-Operatingsystems-Linux-Local.noarch\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"NB :")," Pour \xe9viter l'ajout du d\xe9p\xf4t Centreon sur tous vos serveurs, il est possible d'installer directement les paquets ",(0,a.kt)("inlineCode",{parentName:"p"},"https://yum.centreon.com/standard/22.10/el8/stable/noarch/RPMS/centreon-plugin-Operatingsystems-Linux-Local-20230117-074217.el8.noarch.rpm")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"https://yum.centreon.com/standard/22.10/el8/stable/x86_64/RPMS/centreon-nrpe3-plugin-4.0.3-0.el8.x86_64.rpm")," (versions courantes au moment de la r\xe9daction de cette documentation) ",(0,a.kt)("strong",{parentName:"p"},"mais dans ce cas il ne sera pas possible de les mettre \xe0 jour par un ",(0,a.kt)("inlineCode",{parentName:"strong"},"yum update")),"."))),(0,a.kt)(l.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yum install -y https://packages.centreon.com/rpm-standard/22.10/el7/stable/noarch/RPMS/centreon-release-22.10-1.el7.centos.noarch.rpm\nyum install centreon-nrpe3-daemon.x86_64 centreon-plugin-Operatingsystems-Linux-Local.noarch\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"NB :")," Pour \xe9viter l'ajout du d\xe9p\xf4t Centreon sur tous vos serveurs, il est possible d'installer directement les paquets ",(0,a.kt)("inlineCode",{parentName:"p"},"https://yum.centreon.com/standard/22.10/el7/stable/noarch/RPMS/centreon-plugin-Operatingsystems-Linux-Local-20230117-074217.el7.centos.noarch.rpm")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"https://yum.centreon.com/standard/22.10/el7/stable/x86_64/RPMS/centreon-nrpe3-daemon-4.0.3-0.el7.centos.x86_64.rpm")," (versions courantes au moment de la r\xe9daction de cette documentation) ",(0,a.kt)("strong",{parentName:"p"},"mais dans ce cas il ne sera pas possible de les mettre \xe0 jour par un ",(0,a.kt)("inlineCode",{parentName:"strong"},"yum update")),"."))),(0,a.kt)(l.Z,{value:"Debian",label:"Debian",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# Ajout de l\'utilisateur centreon-engine user\nuseradd --create-home centreon-engine\n# Installation de gpg\napt install gpg\n# Ajout du d\xe9p\xf4t Centreon\nwget -qO- https://apt-key.centreon.com | gpg --dearmor > /etc/apt/trusted.gpg.d/centreon.gpg\necho "deb https://apt.centreon.com/repository/22.10/ $(lsb_release -sc) main" > /etc/apt/sources.list.d/centreon.list\napt update\n# Installation de centreon-nrpe3-daemon\napt install centreon-nrpe3-daemon centreon-plugin-operatingsystems-linux-local\n# Cr\xe9ation du r\xe9pertoire pour le cache du plugin\nmkdir -p /var/lib/centreon/centplugins/\nchown centreon-engine: /var/lib/centreon/centplugins/\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"NB :")," Pour \xe9viter l'ajout du d\xe9p\xf4t Centreon sur tous vos serveurs, il est possible d'installer directement les paquets ",(0,a.kt)("inlineCode",{parentName:"p"},"https://apt.centreon.com/repository/22.10/pool%2Fc%2Fcentreon-plugin-operatingsystems-linux-local%2Fcentreon-plugin-operatingsystems-linux-local_20221215-102705-bullseye_amd64.deb")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"https://apt.centreon.com/repository/22.10/pool%2Fc%2Fcentreon-nrpe3-daemon%2Fcentreon-nrpe3-daemon_4.0.3-1_amd64.deb")," (versions courantes au moment de la r\xe9daction de cette documentation) ",(0,a.kt)("strong",{parentName:"p"},"mais dans ce cas il ne sera pas possible de les mettre \xe0 jour par un ",(0,a.kt)("inlineCode",{parentName:"strong"},"apt update")),".")))),(0,a.kt)("h3",{id:"configuration-de-nrpe"},"Configuration de NRPE"),(0,a.kt)("p",null,"Pour que le(s) poller(s) puisse(nt) superviser les h\xf4tes, il est n\xe9cessaire d'adapter le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"allowed_hosts")," dans le fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/nrpe/centreon-nrpe3.cfg")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[...]\n# ALLOWED HOST ADDRESSES\n# This is an optional comma-delimited list of IP address or hostnames\n# that are allowed to talk to the NRPE daemon. Network addresses with a bit mask\n# (i.e. 192.168.1.0/24) are also supported. Hostname wildcards are not currently\n# supported.\nallowed_hosts=127.0.0.1,::1\n[...]\n")),(0,a.kt)("p",null,"Et red\xe9marrer le service :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl restart centreon-nrpe3.service\n")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("h3",{id:"connecteur-de-supervision"},"connecteur de supervision"),(0,a.kt)("p",null,"L'installation du connecteur de supervision en lui-m\xeame ne concerne que le serveur central et la proc\xe9dure d\xe9pend du type de licence."),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Licence IMP/EPP Online & IT-100 Editions",label:"Licence IMP/EPP Online & IT-100 Editions",mdxType:"TabItem"},(0,a.kt)("p",null,'Installer le connecteur de supervision "Linux NRPE3" depuis la page ',(0,a.kt)("strong",{parentName:"p"},"Configuration > Gestionnaire de connecteurs de supervision"),".")),(0,a.kt)(l.Z,{value:"Licence IMP/EPP Offline",label:"Licence IMP/EPP Offline",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le RPM du connecteur de supervision contenant les mod\xe8les de supervision sur le serveur Centreon Central:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-operatingsystems-linux-nrpe3\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},'Installer le connecteur de supervision "Linux NRPE3" depuis la page ',(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"),".")))),(0,a.kt)("h3",{id:"centreon-nrpe3-plugin"},"Centreon NRPE3 Plugin"),(0,a.kt)("p",null,"Pour commencer, installer le plugin NRPE3, qui permettra au poller de communiquer avec les agents NRPE3 :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-nrpe3-plugin\n")),(0,a.kt)("h3",{id:"validation-de-lensemble-des-pr\xe9requis"},"Validation de l'ensemble des pr\xe9requis"),(0,a.kt)("p",null,"Si tout a \xe9t\xe9 correctement install\xe9 et configur\xe9, la commande :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib64/nagios/plugins/check_centreon_nrpe3 -H monitored_host_ip -p 5666\n")),(0,a.kt)("p",null,"devrait aboutir au r\xe9sultat suivant :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"NRPE v4.0.3\n")),(0,a.kt)("p",null,"Dans le cas contraire, se r\xe9f\xe9rer \xe0 la section ",(0,a.kt)("a",{parentName:"p",href:"#troubleshooting"},"troubleshooting"),"."),(0,a.kt)("h2",{id:"configuration-de-lh\xf4te-dans-centreon"},"Configuration de l'h\xf4te dans Centreon"),(0,a.kt)("p",null,'Cr\xe9er un nouvel h\xf4te dans Centreon et lui appliquer le mod\xe8le d\'h\xf4te "OS-Linux-NRPE3-custom".'),(0,a.kt)("p",null,"Une fois le mod\xe8le appliqu\xe9, il est possible de modifier les macros suivantes :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Obligatoire"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"NRPECLIENT"),(0,a.kt)("td",{parentName:"tr",align:null},"Nom de la sonde employ\xe9e pour dialoguer avec l'agent NRPE3 (par d\xe9faut ",(0,a.kt)("inlineCode",{parentName:"td"},"check_centreon_nrpe3"),")"),(0,a.kt)("td",{parentName:"tr",align:"center"},"X")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"NRPEPORT"),(0,a.kt)("td",{parentName:"tr",align:null},"Port sur lequel \xe9coute l'agent NRPE3 (par d\xe9faut 5666)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"X")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"NRPETIMEOUT"),(0,a.kt)("td",{parentName:"tr",align:null},"Temps maximum autoris\xe9 pour ex\xe9cuter la commande (par d\xe9faut 5s)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"X")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"NRPEEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:null},"Options suppl\xe9mentaires (par d\xe9faut ",(0,a.kt)("inlineCode",{parentName:"td"},"-u")," pour que la sonde NRPE retourne un \xe9tat ",(0,a.kt)("inlineCode",{parentName:"td"},"UNKNOWN")," en cas d'erreur de connexion \xe0 l'agent)"),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"comment-\xe7a-marche-"},"Comment \xe7a marche ?"),(0,a.kt)("p",null,"Voici une commande qui permet de surveiller la consommation CPU d'un serveur Linux dont l'adresse IP est ",(0,a.kt)("inlineCode",{parentName:"p"},"x.x.x.x")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib64/nagios/plugins/check_centreon_nrpe3 \\\n    -H x.x.x.x \\\n    -p 5666 -t 5 -u \\\n    -c check_centreon_plugins \\\n    -a 'os::linux::local::plugin' 'cpu'  '  --statefile-dir=/var/log/nrpe/centplugins'\n")),(0,a.kt)("p",null,"Cette commande devrait afficher un retour de la forme :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"OK: CPU(s) average usage is: 1.16% | 'cpu0'=1.64%;;;0;100 'cpu1'=0.98%;;;0;100 'cpu2'=1.09%;;;0;100 'cpu3'=0.94%;;;0;100 'total_cpu_avg'=1.16%;;;0;100\n")),(0,a.kt)("p",null,"Que s'est-il pass\xe9 ?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Le Plugin ",(0,a.kt)("inlineCode",{parentName:"li"},"check_centreon_nrpe3"),' a demand\xe9 \xe0 l\'agent NRPE d\'ex\xe9cuter sa commande "check_centreon_plugins" associ\xe9e aux arguments "os::linux::local::plugin", "cpu"  et "  --statefile-dir=/var/log/nrpe/centplugins".'),(0,a.kt)("li",{parentName:"ul"},"L'agent NRPE met bout-\xe0-bout la commande telle que d\xe9finie dans ses fichiers de configuration et les arguments envoy\xe9s pour former la ligne de commande suivante :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_linux_local.pl --plugin=os::linux::local::plugin --mode=cpu --statefile-dir=/var/log/nrpe/centplugins\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cette commande est alors ex\xe9cut\xe9e par l'utilisateur ",(0,a.kt)("inlineCode",{parentName:"li"},"centreon-engine")," puis l'agent renvoie les r\xe9sultats (code retour et message affich\xe9) au Plugin ",(0,a.kt)("inlineCode",{parentName:"li"},"check_centreon_nrpe3")," qui attend ce retour.")),(0,a.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"Les erreurs les plus courantes sont d\xe9taill\xe9es ci-dessous."),(0,a.kt)("h4",{id:"connect-to-address-xxxx-port-5666-connection-refused"},(0,a.kt)("inlineCode",{parentName:"h4"},"connect to address x.x.x.x port 5666: Connection refused")),(0,a.kt)("p",null,"Si le message retourn\xe9 est le suivant :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"connect to address x.x.x.x port 5666: Connection refused\n")),(0,a.kt)("p",null,"C'est probablement que l'adresse IP x.x.x.x d'o\xf9 est venue la requ\xeate (c'est-\xe0-dire celle du poller) n'est pas autoris\xe9e \xe0 interroger l'agent NRPE."),(0,a.kt)("p",null,"Il faut alors v\xe9rifier le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"allowed_hosts")," dans le fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/nrpe/centreon-nrpe3.cfg")," (",(0,a.kt)("a",{parentName:"p",href:"#configuration-de-nrpe"},(0,a.kt)("em",{parentName:"a"},"cf")," plus haut"),"."),(0,a.kt)("p",null,"Puis red\xe9marrer le service."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl restart centreon-nrpe3.service\n")),(0,a.kt)("h4",{id:"check_nrpe-state-critical-socket-timeout-after-10-seconds"},(0,a.kt)("inlineCode",{parentName:"h4"},"CHECK_NRPE STATE CRITICAL: Socket timeout after 10 seconds")),(0,a.kt)("p",null,"Si le message retourn\xe9 est le suivant :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"CHECK_NRPE STATE CRITICAL: Socket timeout after 10 seconds.\n")),(0,a.kt)("p",null,"V\xe9rifier alors les points suivants :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"le service ",(0,a.kt)("inlineCode",{parentName:"li"},"centreon-nrpe3")," est bien d\xe9marr\xe9")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status centreon-nrpe3.service\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"le port utilis\xe9 par la sonde (",(0,a.kt)("inlineCode",{parentName:"li"},"-p 5666")," par exemple) est conforme \xe0 la configuration de l'agent, si le port a \xe9t\xe9 personnalis\xe9"),(0,a.kt)("li",{parentName:"ul"},"aucun pare-feu local ne bloque le port NRPE (",(0,a.kt)("inlineCode",{parentName:"li"},"iptables -L"),")"),(0,a.kt)("li",{parentName:"ul"},"aucun \xe9quipement de type firewall ne filtre ce port sur le r\xe9seau")),(0,a.kt)("h4",{id:"nrpe-command-my_command-not-defined"},(0,a.kt)("inlineCode",{parentName:"h4"},"NRPE: Command 'my_command' not defined")),(0,a.kt)("p",null,"Si le message retourn\xe9 est le suivant :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"NRPE: Command 'my_command' not defined\n")),(0,a.kt)("p",null,"Cela signifie que l'on demande \xe0 l'agent NRPE d'ex\xe9cuter une commande qui lui est inconnue."),(0,a.kt)("p",null,"Pour qu'une commande soit reconnue, il faut qu'elle soit convenablement d\xe9clar\xe9e avec la syntaxe suivante :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[my_command]=/full/path/to/command --argument --other-argument\n")),(0,a.kt)("p",null,"Et red\xe9marrer le service :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl restart centreon-nrpe3.service\n")))}N.isMDXComponent=!0}}]);