"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[22989],{6543:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>u,metadata:()=>o,toc:()=>p});t(67294);var n=t(3905);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const u={id:"operating-guide",title:"Guide d'exploitation du cluster"},i=void 0,o={unversionedId:"administration/centreon-ha/operating-guide",id:"version-23.10/administration/centreon-ha/operating-guide",title:"Guide d'exploitation du cluster",description:"Sauf mention contraire, toutes les commandes pr\xe9sent\xe9es dans ce document sont \xe0 lancer en tant que root.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/administration/centreon-ha/operating-guide.md",sourceDirName:"administration/centreon-ha",slug:"/administration/centreon-ha/operating-guide",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/administration/centreon-ha/operating-guide",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/administration/centreon-ha/operating-guide.md",tags:[],version:"23.10",lastUpdatedAt:1699630797,formattedLastUpdatedAt:"10 nov. 2023",frontMatter:{id:"operating-guide",title:"Guide d'exploitation du cluster"},sidebar:"version-23.10/docs",previous:{title:"Supervision de Centreon-HA",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/administration/centreon-ha/monitoring-guide"},next:{title:"D\xe9panner Centreon-HA",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/administration/centreon-ha/troubleshooting-guide"}},c={},p=[{value:"Gestion du cluster",id:"gestion-du-cluster",level:2},{value:"Afficher l&#39;\xe9tat du cluster",id:"afficher-l\xe9tat-du-cluster",level:3},{value:"Afficher l&#39;\xe9tat d&#39;une ressource",id:"afficher-l\xe9tat-dune-ressource",level:3},{value:"Afficher la configuration du cluster",id:"afficher-la-configuration-du-cluster",level:3},{value:"Tester la configuration",id:"tester-la-configuration",level:3},{value:"Sauvegarder &amp; importer la configuration",id:"sauvegarder--importer-la-configuration",level:3},{value:"Export/import en format XML",id:"exportimport-en-format-xml",level:4},{value:"Export/import en format binaire",id:"exportimport-en-format-binaire",level:4},{value:"V\xe9rifier la possibilit\xe9 de bascule des ressources via une simulation du cluster",id:"v\xe9rifier-la-possibilit\xe9-de-bascule-des-ressources-via-une-simulation-du-cluster",level:3},{value:"Gestion des ressources",id:"gestion-des-ressources",level:2},{value:"Basculer une ressource d&#39;un n\u0153ud \xe0 un autre",id:"basculer-une-ressource-dun-n\u0153ud-\xe0-un-autre",level:3},{value:"Supprimer l&#39;affichage d&#39;une erreur",id:"supprimer-laffichage-dune-erreur",level:3},{value:"Consultation des journaux du cluster",id:"consultation-des-journaux-du-cluster",level:3},{value:"Modifier le niveau de verbosit\xe9 de journalisation du cluster",id:"modifier-le-niveau-de-verbosit\xe9-de-journalisation-du-cluster",level:3},{value:"Gestion de la ressources MariaDB",id:"gestion-de-la-ressources-mariadb",level:2},{value:"V\xe9rifier l\u2019\xe9tat de la r\xe9plication MariaDB",id:"v\xe9rifier-l\xe9tat-de-la-r\xe9plication-mariadb",level:3},{value:"R\xe9tablir manuellement la r\xe9plication MariaDB",id:"r\xe9tablir-manuellement-la-r\xe9plication-mariadb",level:3},{value:"Changer le sens de la r\xe9plication MariaDB",id:"changer-le-sens-de-la-r\xe9plication-mariadb",level:3},{value:"Gestion du groupe de ressources Centreon",id:"gestion-du-groupe-de-ressources-centreon",level:2},{value:"Basculer le groupe de ressource Centreon",id:"basculer-le-groupe-de-ressource-centreon",level:3},{value:"Supprimer un groupe de ressource Pacemaker",id:"supprimer-un-groupe-de-ressource-pacemaker",level:2},{value:"Superviser un cluster Centreon-HA",id:"superviser-un-cluster-centreon-ha",level:2},{value:"Indicateurs syst\xe8mes et processus",id:"indicateurs-syst\xe8mes-et-processus",level:3},{value:"Supervision applicative",id:"supervision-applicative",level:3},{value:"Supervision du cluster",id:"supervision-du-cluster",level:3}],d={toc:p},m="wrapper";function k(e){var{components:r}=e,t=l(e,["components"]);return(0,n.kt)(m,s(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){a(e,r,t[r])}))}return e}({},d,t),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Sauf mention contraire, toutes les commandes pr\xe9sent\xe9es dans ce document sont \xe0 lancer en tant que ",(0,n.kt)("inlineCode",{parentName:"p"},"root"),".")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Dans ce document, nous ferons r\xe9f\xe9rence \xe0 des param\xe8tres variant d'une installation \xe0 une autre (noms et adresses IP des n\u0153uds par exemple) par l'interm\xe9diaire des ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/installation/installation-of-centreon-ha/installation-2-nodes#d%C3%A9finition-des-noms-et-adresses-ip-des-serveurs"},"macros d\xe9finies ici"))),(0,n.kt)("h2",{id:"gestion-du-cluster"},"Gestion du cluster"),(0,n.kt)("p",null,"L'ensemble des commandes suivantes peuvent \xeatre ex\xe9cut\xe9es depuis n'importe quel n\u0153ud du cluster."),(0,n.kt)("h3",{id:"afficher-l\xe9tat-du-cluster"},"Afficher l'\xe9tat du cluster"),(0,n.kt)("p",null,"Pour afficher l'\xe9tat g\xe9n\xe9ral du cluster ex\xe9cuter la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"crm_mon\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"V\xe9rifier les erreurs de type ",(0,n.kt)("inlineCode",{parentName:"p"},"Failed")," pr\xe9sentes sur les ressources et corriger ces derni\xe8res en vous aidant du ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/administration/centreon-ha/troubleshooting-guide"},"guide de troubleshooting"),".")),(0,n.kt)("h3",{id:"afficher-l\xe9tat-dune-ressource"},"Afficher l'\xe9tat d'une ressource"),(0,n.kt)("p",null,"Pour conna\xeetre le statut d'une ressource en particulier, ex\xe9cuter la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource show <resource_name>\n")),(0,n.kt)("p",null,"Par exemple pour conna\xeetre le statut de la ressource ",(0,n.kt)("strong",{parentName:"p"},"centengine")," ex\xe9cuter la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource show centengine\n")),(0,n.kt)("h3",{id:"afficher-la-configuration-du-cluster"},"Afficher la configuration du cluster"),(0,n.kt)("p",null,"Pour afficher la configuration du cluster ex\xe9cuter la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pcs config show\n")),(0,n.kt)("h3",{id:"tester-la-configuration"},"Tester la configuration"),(0,n.kt)("p",null,"Pour tester la configuration du cluster ex\xe9cuter la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"crm_verify -L -V\n")),(0,n.kt)("h3",{id:"sauvegarder--importer-la-configuration"},"Sauvegarder & importer la configuration"),(0,n.kt)("h4",{id:"exportimport-en-format-xml"},"Export/import en format XML"),(0,n.kt)("p",null,"Pour sauvegarder la configuration du cluster au format XML ex\xe9cuter la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cibadmin --query > /tmp/cluster_configuration.xml\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Avertissement :")," les commandes qui suivent apportent des modifications \xe0 la configuration du cluster, et peuvent le rendre dysfonctionnel, elles ne doivent \xeatre utilis\xe9es qu'en connaissance de cause.")),(0,n.kt)("p",null,"Pour importer une configuration au format XML ex\xe9cuter la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cibadmin --replace --xml-file /tmp/cluster_configuration.xml\n")),(0,n.kt)("p",null,"Pour effacer compl\xe8tement la configuration du cluster ex\xe9cuter la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cibadmin --force --erase\n")),(0,n.kt)("h4",{id:"exportimport-en-format-binaire"},"Export/import en format binaire"),(0,n.kt)("p",null,"Export dans un fichier au format binaire"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pcs config backup export\n")),(0,n.kt)("p",null,"Restauration d'un fichier au format binaire"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pcs config restore export.tar.bz2\n")),(0,n.kt)("h3",{id:"v\xe9rifier-la-possibilit\xe9-de-bascule-des-ressources-via-une-simulation-du-cluster"},"V\xe9rifier la possibilit\xe9 de bascule des ressources via une simulation du cluster"),(0,n.kt)("p",null,"Pour simuler la possibilit\xe9 de bascule des ressources ex\xe9cuter la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"crm_simulate -L -s\n")),(0,n.kt)("p",null,"Puis contr\xf4ler les scores affich\xe9s."),(0,n.kt)("h2",{id:"gestion-des-ressources"},"Gestion des ressources"),(0,n.kt)("h3",{id:"basculer-une-ressource-dun-n\u0153ud-\xe0-un-autre"},"Basculer une ressource d'un n\u0153ud \xe0 un autre"),(0,n.kt)("p",null,"Pour basculer/d\xe9placer une ressource ex\xe9cuter la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource move <resource_name>\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Attention : La commande ",(0,n.kt)("inlineCode",{parentName:"p"},"pcs resource move <resource_name>")," positionne une contrainte ",(0,n.kt)("inlineCode",{parentName:"p"},"-INFINITY")," sur le n\u0153ud h\xe9bergeant la ressource qui n'est plus autoris\xe9e \xe0 \xeatre en fonctionnement sur ce n\u0153ud. De ce fait, la ressource bascule sur un autre n\u0153ud. Suite \xe0 cette manipulation, il est donc n\xe9cessaire d'ex\xe9cuter la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"pcs resource clear <resource_name>")," pour permettre \xe0 cette ressource de basculer \xe0 nouveau sur ce n\u0153ud \xe0 l'avenir.")),(0,n.kt)("p",null,"Une fois la bascule termin\xe9e, ex\xe9cuter la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource clear <resource_name>\n")),(0,n.kt)("h3",{id:"supprimer-laffichage-dune-erreur"},"Supprimer l'affichage d'une erreur"),(0,n.kt)("p",null,"Les erreurs d'ex\xe9cution ou de monitoring des ressources donnent lieu \xe0 l'apparition de \"failed actions\" dans le retour affich\xe9 par la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"pcs status"),". Il est recommand\xe9 d'en rechercher la cause en suivant ce ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/administration/centreon-ha/troubleshooting-guide"},"guide de r\xe9solution de panne")," avant d'\xe9liminer l'alerte, mais si l'alerte n'est plus d'actualit\xe9, il faut supprimer manuellement le message d'erreur en lan\xe7ant la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource cleanup\n")),(0,n.kt)("p",null,"Ou bien, pour ne supprimer que les erreurs relatives \xe0 une ressource en particulier :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource cleanup <resource_name>\n")),(0,n.kt)("h3",{id:"consultation-des-journaux-du-cluster"},"Consultation des journaux du cluster"),(0,n.kt)("p",null,"Pour visualiser les journaux d'\xe9v\xe8nements du cluster ex\xe9cuter les commandes :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"tailf /var/log/cluster/corosync.log\n")),(0,n.kt)("p",null,"Ce fichier de log est tr\xe8s verbeux, dont il est pr\xe9f\xe9rable de savoir ce que l'on cherche sous peine d'y passer beaucoup de temps."),(0,n.kt)("h3",{id:"modifier-le-niveau-de-verbosit\xe9-de-journalisation-du-cluster"},"Modifier le niveau de verbosit\xe9 de journalisation du cluster"),(0,n.kt)("p",null,"Pour modifier le niveau de verbosit\xe9 des journaux du cluster modifier le fichier suivant : ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/sysconfig/pacemaker")),(0,n.kt)("h2",{id:"gestion-de-la-ressources-mariadb"},"Gestion de la ressources MariaDB"),(0,n.kt)("h3",{id:"v\xe9rifier-l\xe9tat-de-la-r\xe9plication-mariadb"},"V\xe9rifier l\u2019\xe9tat de la r\xe9plication MariaDB"),(0,n.kt)("p",null,"Ex\xe9cuter la commande suivante sur l'un des deux serveurs centraux:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/share/centreon-ha/bin/mysql-check-status.sh\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"Connection Status '@CENTRAL_MASTER_NAME@' [OK]\nConnection Status '@CENTRAL_SLAVE_NAME@' [OK]\nSlave Thread Status [OK]\nPosition Status [OK]\n")),(0,n.kt)("p",null,"Si des erreurs apparaissent, suivre la proc\xe9dure ci-apr\xe8s pour r\xe9tablir la synchronisation."),(0,n.kt)("h3",{id:"r\xe9tablir-manuellement-la-r\xe9plication-mariadb"},"R\xe9tablir manuellement la r\xe9plication MariaDB"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Ces proc\xe9dures sont \xe0 r\xe9aliser en cas de probl\xe8mes de synchronisation n'ayant pu \xeatre r\xe9solu par les commandes ",(0,n.kt)("inlineCode",{parentName:"p"},"pcs resource cleanup")," ou ",(0,n.kt)("inlineCode",{parentName:"p"},"pcs resource restart ms_mysql"),". Par exemple dans le cas d'un ",(0,n.kt)("inlineCode",{parentName:"p"},"duplicate entry")," ou d'un crash serveur \xe0 la suite duquel la r\xe9plication n'a pas pu se remettre en marche.")),(0,n.kt)("p",null,"D\xe9sactiver le contr\xf4le des ressources MariaDB par le cluster :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource unmanage ms_mysql\n")),(0,n.kt)("p",null,"Se connecter au serveur esclave et arr\xeater le service MariaDB :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mysqladmin -p shutdown\n")),(0,n.kt)("p",null,"Se connecter au serveur ma\xeetre et ex\xe9cuter la commande suivante :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/share/centreon-ha/bin/mysql-sync-bigdb.sh\n")),(0,n.kt)("p",null,"R\xe9activer le contr\xf4le des ressources ",(0,n.kt)("inlineCode",{parentName:"p"},"MariaDB")," par le cluster :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource manage ms_mysql\n")),(0,n.kt)("p",null,"Ex\xe9cuter la commande suivante sur l'un des deux serveurs centraux:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/share/centreon-ha/bin/mysql-check-status.sh\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"Connection Status '@CENTRAL_MASTER_NAME@' [OK]\nConnection Status '@CENTRAL_SLAVE_NAME@' [OK]\nSlave Thread Status [OK]\nPosition Status [OK]\n")),(0,n.kt)("h3",{id:"changer-le-sens-de-la-r\xe9plication-mariadb"},"Changer le sens de la r\xe9plication MariaDB"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Avant d'ex\xe9cuter ces commandes, vous devez vous assurer que la r\xe9plication MariaDB est dans un \xe9tat ",(0,n.kt)("inlineCode",{parentName:"p"},"correct"),". Pour cela, se r\xe9f\xe9rer \xe0 ",(0,n.kt)("a",{parentName:"p",href:"#v%C3%A9rifier-l%C3%A9tat-de-la-r%C3%A9plication-mariadb"},"la proc\xe9dure plus haut"),".")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Avertissement :")," sur un cluster \xe0 2 serveurs install\xe9 ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/installation/installation-of-centreon-ha/installation-2-nodes"},"comme d\xe9crit ici"),", le groupe de ressources ",(0,n.kt)("inlineCode",{parentName:"p"},"centreon")," basculera \xe9galement pour suivre le serveur MariaDB ma\xeetre.")),(0,n.kt)("p",null,"Pour basculer/d\xe9placer le groupe de ressources ex\xe9cuter la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource move ms_mysql-master\n")),(0,n.kt)("p",null,"La commande ",(0,n.kt)("inlineCode",{parentName:"p"},"pcs resource move ms_mysql-master")," positionne une contrainte ",(0,n.kt)("inlineCode",{parentName:"p"},"-Inf")," sur le n\u0153ud h\xe9bergeant la ressource. De ce fait, la ressource bascule sur un autre n\u0153ud. Suite \xe0 cette manipulation, il est donc n\xe9cessaire, une fois la bascule termin\xe9e, d'ex\xe9cuter la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource clear ms_mysql-master\n")),(0,n.kt)("h2",{id:"gestion-du-groupe-de-ressources-centreon"},"Gestion du groupe de ressources Centreon"),(0,n.kt)("h3",{id:"basculer-le-groupe-de-ressource-centreon"},"Basculer le groupe de ressource Centreon"),(0,n.kt)("p",null,"Pour basculer/d\xe9placer le groupe de ressources ex\xe9cuter la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource move centreon\n")),(0,n.kt)("p",null,"La commande ",(0,n.kt)("inlineCode",{parentName:"p"},"pcs resource move centreon")," positionne une contrainte ",(0,n.kt)("inlineCode",{parentName:"p"},"-Inf")," sur le n\u0153ud h\xe9bergeant la ressource. De ce fait, la ressource bascule sur un autre n\u0153ud. Une fois la bascule termin\xe9e, il faut donc ex\xe9cuter la commande suivante pour r\xe9tablir la haute disponibilit\xe9 :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource clear centreon\n")),(0,n.kt)("h2",{id:"supprimer-un-groupe-de-ressource-pacemaker"},"Supprimer un groupe de ressource Pacemaker"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Avertissement :")," les commandes ci-dessous emp\xeacheront le cluster de fonctionner, elles ne doivent \xeatre utilis\xe9es qu'en connaissance de cause.")),(0,n.kt)("p",null,"Dans le cas o\xf9 il y aurait besoin de supprimer le groupe et les \xe9l\xe9ments rattach\xe9s (primitive des services, contraintes, ...), se connecter sur un n\u0153ud du cluster et ex\xe9cuter les commandes suivantes :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource delete centreon             \\\n                cbd_central_broker       \\\n                gorgone                  \\\n                snmptrapd                \\\n                centreontrapd            \\\n                http                     \\\n                centreon_central_sync    \\\n                vip\n")),(0,n.kt)("p",null,"Si cela ne fonctionne pas, cela est s\xfbrement d\xfb \xe0 une ressource en erreur. Lancer les commandes suivantes afin de supprimer la ressource :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"crm_resource --resource [resource] -D -t primitive -C\npcs resource cleanup centreon\n")),(0,n.kt)("p",null,"Pour recr\xe9er les ressources, on se r\xe9f\xe9rera \xe0 cette \xe9tape du ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/installation/installation-of-centreon-ha/installation-2-nodes#cr%C3%A9ation-du-groupe-de-ressources-centreon"},"guide d'installation d'un cluster \xe0 2 n\u0153uds"),"."),(0,n.kt)("h2",{id:"superviser-un-cluster-centreon-ha"},"Superviser un cluster Centreon-HA"),(0,n.kt)("p",null,"Une plate-forme de haute disponibilit\xe9 est avant tout une plate-forme LAMP (Linux Apache MariaDB PHP) pilot\xe9e par les outils du projet ",(0,n.kt)("a",{parentName:"p",href:"https://clusterlabs.org/"},"ClusterLabs"),". La supervision de la plate-forme doit donc inclure, en plus des indicateurs habituels, quelques sp\xe9cificit\xe9s relatives \xe0 son caract\xe8re de haute disponibilit\xe9. La supervision doit \xeatre assur\xe9e par un poller externe, non par le cluster lui-m\xeame."),(0,n.kt)("h3",{id:"indicateurs-syst\xe8mes-et-processus"},"Indicateurs syst\xe8mes et processus"),(0,n.kt)("p",null,"La partie la plus simple consiste \xe0 surveiller les indicateurs syst\xe8mes de base, principalement ",(0,n.kt)("em",{parentName:"p"},"via")," le protocole SNMP, ce qui est facilit\xe9 par le ",(0,n.kt)("a",{parentName:"p",href:"/pp/integrations/plugin-packs/procedures/operatingsystems-linux-snmp"},"connecteur de supervision Linux")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"M\xe9triques syst\xe8mes",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"LOAD Average"),(0,n.kt)("li",{parentName:"ul"},"Consommation CPU"),(0,n.kt)("li",{parentName:"ul"},"Consommation M\xe9moire"),(0,n.kt)("li",{parentName:"ul"},"Consommation SWAP"),(0,n.kt)("li",{parentName:"ul"},"Utilisation des syst\xe8mes de fichiers"),(0,n.kt)("li",{parentName:"ul"},"Trafic r\xe9seau"),(0,n.kt)("li",{parentName:"ul"},"Synchronisation NTP"))),(0,n.kt)("li",{parentName:"ul"},"Processus",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Contr\xf4le de l'\xe9tat des processus ",(0,n.kt)("inlineCode",{parentName:"li"},"crond"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"chronyd"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"rsyslogd")),(0,n.kt)("li",{parentName:"ul"},"Contr\xf4les de l'\xe9tat des processus ",(0,n.kt)("inlineCode",{parentName:"li"},"gorgoned"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"centengine"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"centreontrapd"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"httpd24-httpd"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"snmptrapd"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"mysqld"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"php-fpm"))))),(0,n.kt)("h3",{id:"supervision-applicative"},"Supervision applicative"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Contr\xf4le de l'acc\xe8s \xe0 l'url ",(0,n.kt)("inlineCode",{parentName:"li"},"http://@VIP_IPADDR@/centreon")," \xe0 l'aide du ",(0,n.kt)("a",{parentName:"li",href:"/pp/integrations/plugin-packs/procedures/applications-protocol-http"},"connecteur de supervision HTTP Protocol")),(0,n.kt)("li",{parentName:"ul"},"Contr\xf4le de la base de donn\xe9es MariaDB en utilisant le ",(0,n.kt)("a",{parentName:"li",href:"/pp/integrations/plugin-packs/procedures/applications-databases-mysql"},"connecteur de supervision MySQL/MariaDB")," :",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Contr\xf4le de connexion au serveur MariaDB"),(0,n.kt)("li",{parentName:"ul"},"Les buffers et caches MariaDB/InnoDB"),(0,n.kt)("li",{parentName:"ul"},"L\u2019usage des index"),(0,n.kt)("li",{parentName:"ul"},"R\xe9plication MariaDB")))),(0,n.kt)("h3",{id:"supervision-du-cluster"},"Supervision du cluster"),(0,n.kt)("p",null,"Les points de contr\xf4le sp\xe9cifiques au cluster peuvent \xeatre supervis\xe9s en utilisant le ",(0,n.kt)("a",{parentName:"p",href:"/pp/integrations/plugin-packs/procedures/applications-pacemaker-ssh"},"connecteur de supervision Pacemaker")," :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Contraintes sur les ressources : uniquement sur la ressource ",(0,n.kt)("inlineCode",{parentName:"li"},"ms_mysql")," et le groupe ",(0,n.kt)("inlineCode",{parentName:"li"},"centreon")),(0,n.kt)("li",{parentName:"ul"},"Failed actions")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note : un connecteur de supervision d\xe9di\xe9 \xe0 Centreon-HA devrait \xeatre publi\xe9 prochainement pour faciliter la supervision de cet aspect.")))}k.isMDXComponent=!0}}]);