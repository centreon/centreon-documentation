"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[84844],{84620:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>v,frontMatter:()=>u,metadata:()=>c,toc:()=>m});t(67294);var r=t(3905),a=t(51715),o=t(7626);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const u={id:"migrate-from-3-4",title:"Migration depuis une plateforme Centreon 3.4"},p=void 0,c={unversionedId:"migrate/migrate-from-3-4",id:"version-23.10/migrate/migrate-from-3-4",title:"Migration depuis une plateforme Centreon 3.4",description:"Pr\xe9requis",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/migrate/migrate-from-3-4.md",sourceDirName:"migrate",slug:"/migrate/migrate-from-3-4",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/migrate/migrate-from-3-4",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/migrate/migrate-from-3-4.md",tags:[],version:"23.10",lastUpdatedAt:1699281350,formattedLastUpdatedAt:"6 nov. 2023",frontMatter:{id:"migrate-from-3-4",title:"Migration depuis une plateforme Centreon 3.4"},sidebar:"version-23.10/docs",previous:{title:"Migrer depuis un OS de type EL vers Debian 11",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/migrate/migrate-from-el-to-debian"},next:{title:"Nagios Reader vers Centreon CLAPI",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/migrate/nagios-to-centreon"}},d={},m=[{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Migration",id:"migration",level:2},{value:"Installation du nouveau serveur",id:"installation-du-nouveau-serveur",level:3},{value:"Synchronisation des donn\xe9es",id:"synchronisation-des-donn\xe9es",level:3},{value:"R\xe9cup\xe9ration des bases de donn\xe9es",id:"r\xe9cup\xe9ration-des-bases-de-donn\xe9es",level:3},{value:"Synchronisation des plugins",id:"synchronisation-des-plugins",level:3},{value:"Mont\xe9e de version de la solution Centreon",id:"mont\xe9e-de-version-de-la-solution-centreon",level:3},{value:"Mise \xe0 jour des modules",id:"mise-\xe0-jour-des-modules",level:3}],g={toc:m},k="wrapper";function v(e){var{components:n}=e,t=i(e,["components"]);return(0,r.kt)(k,l(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){s(e,n,t[n])}))}return e}({},g,t),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("p",null,"Cette proc\xe9dure ne s'applique que pour une plate-forme ",(0,r.kt)("strong",{parentName:"p"},"Centreon 3.4"),",\ninstall\xe9e sur une distribution GNU/Linux 64 bits\net disposant des pr\xe9requis suivants :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Composants"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Centreon Web"),(0,r.kt)("td",{parentName:"tr",align:null},"2.8.x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Centreon Broker"),(0,r.kt)("td",{parentName:"tr",align:null},"3.0.x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Centreon Engine"),(0,r.kt)("td",{parentName:"tr",align:null},"1.8.x")))),(0,r.kt)("h2",{id:"migration"},"Migration"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"En cas de migration d'une plate-forme disposant du syst\xe8me de redondance\nCentreon, il est n\xe9cessaire de contacter votre\n",(0,r.kt)("a",{parentName:"p",href:"https://support.centreon.com"},"support Centreon"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"En cas de migration d'une plate-forme disposant du module ",(0,r.kt)("strong",{parentName:"p"},"Centreon Poller\nDisplay 1.6.x"),", r\xe9f\xe9rez-vous \xe0 la\n",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/migrate/poller-display-to-remote-server"},"proc\xe9dure de migration"),".")),(0,r.kt)("h3",{id:"installation-du-nouveau-serveur"},"Installation du nouveau serveur"),(0,r.kt)("p",null,"R\xe9alisez les actions suivantes :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Installez un nouveau serveur Centreon \xe0 partir des ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/installation/installation-of-a-central-server/using-packages"},"paquets"),"\njusqu'\xe0 terminer le processus d'installation en vous connectant \xe0 l'interface\nweb.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"R\xe9alisez les mises \xe0 jour logicielle et syst\xe8me :"))),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf update\n"))),(0,r.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf update\n"))),(0,r.kt)(o.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"apt update\n")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Il est pr\xe9f\xe9rable de saisir le m\xeame mot de passe pour l'utilisateur 'centreon'\nlors du processus d'installation web.")),(0,r.kt)("h3",{id:"synchronisation-des-donn\xe9es"},"Synchronisation des donn\xe9es"),(0,r.kt)("p",null,"Connectez-vous \xe0 votre ancien serveur Centreon et synchronisez les r\xe9pertoires\nsuivants :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"rsync -avz /etc/centreon root@<IP_NOUVEAU_CENTREON>:/etc\nrsync -avz /etc/centreon-broker root@<IP_NOUVEAU_CENTREON>:/etc\nrsync -avz /var/log/centreon-engine/archives/ root@<IP_NOUVEAU_CENTREON>:/var/log/centreon-engine\nrsync -avz --exclude centcore/ --exclude log/ /var/lib/centreon root@<IP_NOUVEAU_CENTREON>:/var/lib\nrsync -avz /var/spool/centreon/.ssh root@<IP_NOUVEAU_CENTREON>:/var/spool/centreon\nrsync -avz /usr/share/centreon/www/img/media root@<IP_NEW_CENTREON>:/usr/share/centreon/www/img\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Remplacez ",(0,r.kt)("strong",{parentName:"p"},"<IP_NOUVEAU_CENTREON>")," par l'adresse IP de votre nouveau serveur\nCentreon.")),(0,r.kt)("h3",{id:"r\xe9cup\xe9ration-des-bases-de-donn\xe9es"},"R\xe9cup\xe9ration des bases de donn\xe9es"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Faire un dump des bases de donn\xe9es sources :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mysqldump -u root -p centreon > /tmp/centreon.sql\nmysqldump -u root -p centreon_storage > /tmp/centreon_storage.sql\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Arreter le serveur MariaDB source :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"}," service mysqld stop\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Transf\xe9rer les exports vers le nouveau serveur de base de donn\xe9es Centreon\n23.04 :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"```shell\nrsync -avz /tmp/centreon.sql root@<IP_NOUVEAU_CENTREON>:/tmp/\nrsync -avz /tmp/centreon_storage.sql root@<IP_NOUVEAU_CENTREON>:/tmp/\n```\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sur le serveur de base de donn\xe9es Centreon 23.04, supprimer les bases de\ndonn\xe9es vierges et les recr\xe9er :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"```shell\nmysql -u root -p\n```\n\n```SQL\nDROP DATABASE centreon;\nDROP DATABASE centreon_storage;\nCREATE DATABASE centreon;\nCREATE DATABASE centreon_storage;\n```\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Importer les dumps :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mysql -u root centreon -p </tmp/centreon.sql\nmysql -u root centreon_storage -p </tmp/centreon_storage.sql\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Executer l'upgrade des tables :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mysql_upgrade\n")),(0,r.kt)("p",{parentName:"li"}," Si votre base de donn\xe9es est prot\xe9g\xe9e par mot de passe, entrez :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"}," mysql_upgrade -u <utilisateur_admin_bdd> -p\n")),(0,r.kt)("p",{parentName:"li"}," Exemple : si votre utilisateur_admin_bdd est ",(0,r.kt)("inlineCode",{parentName:"p"},"root"),", entrez:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"mysql_upgrade -u root -p\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"D\xe9marrer le processus mariadb sur le nouveau serveur :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl start mariadb\n")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Remplacez ",(0,r.kt)("strong",{parentName:"p"},"<IP_NOUVEAU_CENTREON>")," par l'adresse IP de votre nouveau serveur\nCentreon.")),(0,r.kt)("h3",{id:"synchronisation-des-plugins"},"Synchronisation des plugins"),(0,r.kt)("p",null,"La synchronisation des sondes de supervision (plugins) est plus d\xe9licate et\nd\xe9pend de votre installation. Les principaux r\xe9pertoires \xe0 synchroniser sont :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"/usr/lib/nagios/plugins/"),(0,r.kt)("li",{parentName:"ol"},"/usr/lib/centreon/plugins/")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Il est important d'installer les d\xe9pendances n\xe9cessaires au fonctionnement des\nsondes de supervision.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Si vous avez des Pollers en Centreon Engine 1.8.1 que vous comptez migrer plus\ntard en 23.04, attention au dossier des plugins Nagios. La macro de\nressource $USER1$ de Centreon 23.04 pointe sur /usr/lib64/nagios/plugins"),(0,r.kt)("p",{parentName:"blockquote"},"A \xe9x\xe9cuter sur vos collecteurs en Centreon Engine 1.8.1 :"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mv /usr/lib64/nagios/plugins/* /usr/lib/nagios/plugins/\nrmdir /usr/lib64/nagios/plugins/\nln -s -t /usr/lib64/nagios/ /usr/lib/nagios/plugins/\n")),(0,r.kt)("p",{parentName:"blockquote"},"De cette fa\xe7on un lien symbolique est cr\xe9\xe9 :"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ls -alt /usr/lib64/nagios/\nlrwxrwxrwx   1 root root      24  1 nov.  17:59 plugins -> /usr/lib/nagios/plugins/\n-rwxr-xr-x   1 root root 1711288  6 avril  2018 cbmod.so\n"))),(0,r.kt)("p",null,"Vous pouvez g\xe9n\xe9rer les configurations depuis Centreon 23.04\nindiff\xe9remment vers un collecteur en 23.04 ou 1.8.1."),(0,r.kt)("h3",{id:"mont\xe9e-de-version-de-la-solution-centreon"},"Mont\xe9e de version de la solution Centreon"),(0,r.kt)("p",null,"Forcez la mont\xe9e de version du nouveau serveur en d\xe9placant le contenu du r\xe9pertoire\n",(0,r.kt)("strong",{parentName:"p"},"/var/lib/centreon/installs/install-23.04.0-YYYYMMDD","_","HHMMSS")," dans le\nr\xe9pertoire  ",(0,r.kt)("strong",{parentName:"p"},"/usr/share/centreon/www/install")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd /var/lib/centreon/installs/\nmv install-23.04.0-YYYYMMDD_HHMMSS/ /usr/share/centreon/www/install/\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Si vous utilisez la m\xeame adresse IP ou le m\xeame nom DNS entre l'ancien serveur\nweb Centreon et le nouveau, videz completement le cache de votre navigateur pour\n\xe9viter des problemes de scripts JS.")),(0,r.kt)("p",null,"Se connecter \xe0 l'URL ",(0,r.kt)("inlineCode",{parentName:"p"},"http://<IP_NEW_CENTREON>/centreon")," et suivre les \xe9tapes\nde mise \xe0 jour."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Si vous avez modifi\xe9 le mot de passe de l'utilisateur 'centreon' lors de\nl'installation de votre nouveau serveur Centreon pour acc\xe9der aux bases de\ndonn\xe9es, il sera n\xe9cessaire de r\xe9aliser les actions suivantes sur le nouveau\nserveur Centreon :"),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"Modifiez le fichier /etc/centreon/centreon.conf.php,"),(0,r.kt)("li",{parentName:"ol"},"Modifiez le fichier /etc/centreon/conf.pm,"),(0,r.kt)("li",{parentName:"ol"},"\xc9diter la configuration du Centreon Broker central, via l'interface web\nCentreon et modifier le mot de passe pour les deux output broker ",(0,r.kt)("strong",{parentName:"li"},"Perfdata\ngenerator")," et ",(0,r.kt)("strong",{parentName:"li"},"Broker SQL database"),","),(0,r.kt)("li",{parentName:"ol"},"Modifiez le fichier /etc/centreon/config.d/10-database.yaml."))),(0,r.kt)("p",null,"Si l'adresse IP de votre serveur Centreon a chang\xe9, \xe9ditez la configuration de\nl'ensemble des modules broker de vos collecteurs et modifiez l'adresse IP de\nconnexion au serveur Centreon central (output IPv4). Consultez le chapitre\n",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/monitoring/monitoring-servers/advanced-configuration#tcp-outputs"},"Configuration\navanc\xe9e"),"\npour plus d'information."),(0,r.kt)("p",null,"Puis ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/monitoring/monitoring-servers/deploying-a-configuration"},"g\xe9n\xe9rez"),"\nla configuration de l'ensemble de la plateforme et exportez l\xe0."),(0,r.kt)("h3",{id:"mise-\xe0-jour-des-modules"},"Mise \xe0 jour des modules"),(0,r.kt)("p",null,"R\xe9f\xe9rez-vous \xe0 la documentation des modules install\xe9s afin de conna\xeetre leur\ncompatibilit\xe9 avec Centreon 23.04, et pour mettre \xe0 jour ces derniers."))}v.isMDXComponent=!0}}]);