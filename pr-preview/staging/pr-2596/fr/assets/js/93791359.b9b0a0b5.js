"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[2741],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>g});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),d=a,g=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return t?n.createElement(g,s(s({ref:r},u),{},{components:t})):n.createElement(g,s({ref:r},u))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},49258:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>c});t(67294);var n=t(3905);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const l={id:"migrate-from-el-to-debian",title:"Migrer depuis un OS de type EL vers Debian 11"},i=void 0,p={unversionedId:"migrate/migrate-from-el-to-debian",id:"version-23.10/migrate/migrate-from-el-to-debian",title:"Migrer depuis un OS de type EL vers Debian 11",description:"Pr\xe9requis",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/migrate/migrate-from-el-to-debian.md",sourceDirName:"migrate",slug:"/migrate/migrate-from-el-to-debian",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/migrate/migrate-from-el-to-debian",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/migrate/migrate-from-el-to-debian.md",tags:[],version:"23.10",lastUpdatedAt:1699359701,formattedLastUpdatedAt:"7 nov. 2023",frontMatter:{id:"migrate-from-el-to-debian",title:"Migrer depuis un OS de type EL vers Debian 11"},sidebar:"version-23.10/docs",previous:{title:"Migrer depuis un OS de type EL vers un autre OS de type EL (depuis un Centreon 18.10 ou plus r\xe9cent)",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/migrate/migrate-from-el-to-el"},next:{title:"Migration depuis une plateforme Centreon 3.4",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/migrate/migrate-from-3-4"}},u={},c=[{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Migrer un serveur central",id:"migrer-un-serveur-central",level:2},{value:"\xc9tape 1 : Installer le nouveau serveur",id:"\xe9tape-1--installer-le-nouveau-serveur",level:3},{value:"\xc9tape 2 : Synchroniser les donn\xe9es",id:"\xe9tape-2--synchroniser-les-donn\xe9es",level:3},{value:"\xc9tape 3 : R\xe9cup\xe9rer les bases de donn\xe9es",id:"\xe9tape-3--r\xe9cup\xe9rer-les-bases-de-donn\xe9es",level:3},{value:"\xc9tape 4 : Synchroniser les plugins",id:"\xe9tape-4--synchroniser-les-plugins",level:3},{value:"\xc9tape 5 : Mont\xe9e de version de la solution Centreon",id:"\xe9tape-5--mont\xe9e-de-version-de-la-solution-centreon",level:3},{value:"\xc9tape 6 (anciennes versions uniquement): Migrer vers Gorgone",id:"\xe9tape-6-anciennes-versions-uniquement-migrer-vers-gorgone",level:3},{value:"\xc9tape 7: Mettre \xe0 jour les modules",id:"\xe9tape-7-mettre-\xe0-jour-les-modules",level:3},{value:"Migrer un serveur distant",id:"migrer-un-serveur-distant",level:2},{value:"Migrer un collecteur",id:"migrer-un-collecteur",level:2}],m={toc:c},d="wrapper";function g(e){var{components:r}=e,t=s(e,["components"]);return(0,n.kt)(d,o(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){a(e,r,t[r])}))}return e}({},m,t),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,n.kt)("p",null,"Cette proc\xe9dure ne s'applique que dans les conditions suivantes :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Vous souhaitez migrer d'un OS de type EL 64-bits vers Debian 11. Par exemple, vous souhaitez migrer d'un CentOS 7 \xe0 Debian 11."),(0,n.kt)("li",{parentName:"ul"},"Votre version de Centreon est 18.10 ou plus r\xe9cente, et vous souhaitez passer \xe0 la derni\xe8re version de Centreon. Si vous souhaitez migrer depuis une plus ancienne version, ",(0,n.kt)("a",{parentName:"li",href:"https://support.centreon.com"},"contactez l'\xe9quipe support Centreon"),".")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"En cas de migration d'une plateforme disposant du syst\xe8me de redondance\nCentreon, il est n\xe9cessaire de contacter le\n",(0,n.kt)("a",{parentName:"p",href:"https://support.centreon.com"},"support Centreon"),".")),(0,n.kt)("h2",{id:"migrer-un-serveur-central"},"Migrer un serveur central"),(0,n.kt)("h3",{id:"\xe9tape-1--installer-le-nouveau-serveur"},"\xc9tape 1 : Installer le nouveau serveur"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Installez votre nouvel OS: voir la liste des ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/installation/compatibility#syst%C3%A8me-dexploitation"},"OS support\xe9s"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Installez un nouveau serveur central Centreon \xe0 partir des ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/installation/installation-of-a-central-server/using-packages"},"paquets"),"\njusqu'\xe0 terminer le processus d'installation en vous connectant \xe0 l'interface web."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Pendant le processus d'installation web, utilisez le m\xeame mot de passe pour l'utilisateur ",(0,n.kt)("strong",{parentName:"p"},"centreon")," que sur l'ancienne plateforme."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"R\xe9alisez les mises \xe0 jour logicielle et syst\xe8me :"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"apt update && apt upgrade\n")),(0,n.kt)("h3",{id:"\xe9tape-2--synchroniser-les-donn\xe9es"},"\xc9tape 2 : Synchroniser les donn\xe9es"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Connectez-vous \xe0 votre ancien serveur Centreon.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"G\xe9n\xe9rez une paire de cl\xe9s ssh pour ",(0,n.kt)("strong",{parentName:"p"},"root")," :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"ssh-keygen -t rsa\n")),(0,n.kt)("p",{parentName:"li"},"Par d\xe9faut, la paire de cl\xe9s g\xe9n\xe9r\xe9e sera ",(0,n.kt)("strong",{parentName:"p"},"/root/.ssh/id_rsa.pub")," et ",(0,n.kt)("strong",{parentName:"p"},"/root/.ssh/id_rsa"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Copiez la cl\xe9 publique de ",(0,n.kt)("strong",{parentName:"p"},"root")," (",(0,n.kt)("strong",{parentName:"p"},"/root/.ssh/id_rsa.pub"),") dans le fichier ",(0,n.kt)("strong",{parentName:"p"},"/root/.ssh/authorized_keys")," du nouveau serveur. Si vous n'utilisez pas le compte ",(0,n.kt)("strong",{parentName:"p"},"root")," pour la synchronisation, assurez-vous que votre utilisateur dispose de droits d'\xe9criture sur le dossier cible.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Depuis l'ancien serveur, synchronisez les r\xe9pertoires suivants vers le nouveau serveur :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"rsync -avz /etc/centreon root@<IP_NOUVEAU_CENTREON>:/etc\nrsync -avz /etc/centreon-broker root@<IP_NOUVEAU_CENTREON>:/etc\nrsync -avz /var/log/centreon-engine/archives/ root@<IP_NOUVEAU_CENTREON>:/var/log/centreon-engine\nrsync -avz --exclude centcore/ --exclude log/ /var/lib/centreon root@<IP_NOUVEAU_CENTREON>:/var/lib\nrsync -avz /usr/share/centreon/www/img/media root@<IP_NEW_CENTREON>:/usr/share/centreon/www/img\n")),(0,n.kt)("p",{parentName:"li"},"Si vous avez personnalis\xe9 le nom de votre fichier de cl\xe9 priv\xe9e, utilisez le format suivant (remplacez ",(0,n.kt)("strong",{parentName:"p"},"id_rsa_custom")," par le nom de votre fichier, et ",(0,n.kt)("inlineCode",{parentName:"p"},"<commande>")," par les commandes ci-dessus):"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'rsync -avz -e "ssh -i /root/.ssh/id_rsa_custom" <commande>\n')),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Remplacez ",(0,n.kt)("strong",{parentName:"p"},"\\<IP_NOUVEAU_CENTREON",">")," par l'adresse IP de votre nouveau serveur Centreon."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Sur le nouveau serveur, changez les droits utilisateur suivants :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"chown www-data: /etc/centreon-broker/*\nchown www-data: /etc/centreon-engine/*\nchown centreon: /etc/centreon/*\nchown centreon: /var/lib/centreon/*\nchown centreon-broker: /var/lib/centreon/metrics/*\nchown centreon-broker: /var/lib/centreon/status/*\nchown centreon-gorgone: /var/lib/centreon/nagios-perf/perfmon-* -R\nchown centreon-engine: /var/lib/centreon/centplugins/*\n")))),(0,n.kt)("h3",{id:"\xe9tape-3--r\xe9cup\xe9rer-les-bases-de-donn\xe9es"},"\xc9tape 3 : R\xe9cup\xe9rer les bases de donn\xe9es"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Sur l'ancien serveur, faitez un dump des bases de donn\xe9es :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mysqldump -u root -p centreon > /tmp/centreon.sql\nmysqldump -u root -p centreon_storage > /tmp/centreon_storage.sql\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Sur l'ancien serveur, arr\xeatez MariaDB :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl stop mariadb\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Depuis l'ancien serveur, exportez les dumps vers le nouveau serveur de base de donn\xe9es (assurez-vous d'avoir assez d'espace):"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"rsync -avz /tmp/centreon.sql root@<IP_NOUVEAU_CENTREON>:/tmp/\nrsync -avz /tmp/centreon_storage.sql root@<IP_NOUVEAU_CENTREON>:/tmp/\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Sur le nouveau serveur de base de donn\xe9es, supprimez les bases de\ndonn\xe9es vierges et recr\xe9ez-les :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mysql -u root -p\n")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-SQL"},"DROP DATABASE centreon;\nDROP DATABASE centreon_storage;\nCREATE DATABASE centreon;\nCREATE DATABASE centreon_storage;\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Sur le nouveau serveur de bases de donn\xe9es, importez dans la base les dumps pr\xe9c\xe9demment transf\xe9r\xe9s :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mysql -u root centreon -p </tmp/centreon.sql\nmysql -u root centreon_storage -p </tmp/centreon_storage.sql\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ex\xe9cutez l'upgrade des tables :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mysql_upgrade\n")),(0,n.kt)("p",{parentName:"li"},"Si votre base de donn\xe9es est prot\xe9g\xe9e par mot de passe, entrez :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mysql_upgrade -u <utilisateur_admin_bdd> -p\n")),(0,n.kt)("p",{parentName:"li"},"Exemple : si votre utilisateur_admin_bdd est ",(0,n.kt)("inlineCode",{parentName:"p"},"root"),", entrez:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mysql_upgrade -u root -p\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"D\xe9marrez le processus ",(0,n.kt)("strong",{parentName:"p"},"mariadb")," sur le nouveau serveur :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl start mariadb\n")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Remplacez ",(0,n.kt)("strong",{parentName:"p"},"\\<IP_NOUVEAU_CENTREON",">")," par l'adresse IP de votre nouveau serveur\nCentreon.")),(0,n.kt)("h3",{id:"\xe9tape-4--synchroniser-les-plugins"},"\xc9tape 4 : Synchroniser les plugins"),(0,n.kt)("p",null,"Si vous n'utilisez que des plugins Centreon, r\xe9installez-les sur le nouveau serveur:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Installez le d\xe9p\xf4t des connecteurs de supervision (vous trouverez son adresse sur le ",(0,n.kt)("a",{parentName:"p",href:"https://support.centreon.com/hc/fr/categories/10341239833105-D%C3%A9p%C3%B4ts"},"portail support Centreon"),").")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ex\xe9cutez les commandes suivantes :"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"apt update\napt install centreon-pack*\napt install centreon-plugin-\\*\n")),(0,n.kt)("p",null,"Sous Debian, le r\xe9pertoire des plugins Nagios (qui ex\xe9cutent par exemple la commande ",(0,n.kt)("strong",{parentName:"p"},"check_icmp"),") est ",(0,n.kt)("strong",{parentName:"p"},"/usr/lib/nagios/plugins/"),". Allez \xe0 la page ",(0,n.kt)("strong",{parentName:"p"},"Configuration > Collecteurs > Ressources")," et v\xe9rifiez que le chemin de la macro ",(0,n.kt)("strong",{parentName:"p"},"$USER1$")," est bien ",(0,n.kt)("strong",{parentName:"p"},"/usr/lib/nagios/plugins/"),". Idem pour le champ ",(0,n.kt)("strong",{parentName:"p"},"R\xe9pertoire des sondes")," \xe0 la page ",(0,n.kt)("strong",{parentName:"p"},"Administration > Param\xe8tres > Supervision"),"."),(0,n.kt)("p",null,"Si vous utilisez vos propres plugins personnalis\xe9s, synchronisez les r\xe9pertoires qui contiennent ceux-ci, ainsi que toutes \xe9ventuelles d\xe9pendances."),(0,n.kt)("h3",{id:"\xe9tape-5--mont\xe9e-de-version-de-la-solution-centreon"},"\xc9tape 5 : Mont\xe9e de version de la solution Centreon"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Sur le nouveau serveur, forcez la mont\xe9e de version en d\xe9placant le contenu du r\xe9pertoire\n",(0,n.kt)("strong",{parentName:"p"},"/var/lib/centreon/installs/install-23.04.x-YYYYMMDD_HHMMSS")," dans le\nr\xe9pertoire ",(0,n.kt)("strong",{parentName:"p"},"/usr/share/centreon/www/install")," (",(0,n.kt)("strong",{parentName:"p"},"x")," est le num\xe9ro de version cible pour votre machine migr\xe9e):"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cd /var/lib/centreon/installs/\nmv install-23.04.x-YYYYMMDD_HHMMSS/ /usr/share/centreon/www/install/\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Si vous utilisez la meme adresse IP ou le m\xeame nom DNS entre l'ancien serveur\nweb Centreon et le nouveau, videz compl\xe8tement le cache de votre navigateur pour\n\xe9viter des problemes de scripts JS.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Connectez-vous \xe0 l'URL ",(0,n.kt)("inlineCode",{parentName:"p"},"http://<IP_NEW_CENTREON>/centreon")," et suivez les \xe9tapes\nde la mise \xe0 jour.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Si vous avez modifi\xe9 le mot de passe de l'utilisateur ",(0,n.kt)("strong",{parentName:"p"},"centreon")," lors de\nl'installation de votre nouveau serveur Centreon pour acc\xe9der aux bases de\ndonn\xe9es, il sera n\xe9cessaire de r\xe9aliser les actions suivantes sur le nouveau\nserveur Centreon :"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Modifiez le fichier ",(0,n.kt)("strong",{parentName:"li"},"/etc/centreon/centreon.conf.php"),","),(0,n.kt)("li",{parentName:"ol"},"Modifiez le fichier ",(0,n.kt)("strong",{parentName:"li"},"/etc/centreon/conf.pm"),","),(0,n.kt)("li",{parentName:"ol"},"\xc9ditez la configuration du Centreon Broker central, via l'interface web\nCentreon et modifiez le mot de passe pour l'output ",(0,n.kt)("strong",{parentName:"li"},"unfied-sql"),","),(0,n.kt)("li",{parentName:"ol"},"Modifiez le fichier ",(0,n.kt)("strong",{parentName:"li"},"/etc/centreon/config.d/10-database.yaml"),"."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Si l'adresse IP de votre serveur Centreon a chang\xe9 :"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\xc9ditez la configuration de l'ensemble des modules Broker de vos collecteurs et modifiez l'adresse IP de\nconnexion au serveur Centreon central (output IPv4). Consultez le chapitre\n",(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/monitoring/monitoring-servers/advanced-configuration#tcp-outputs"},"Configuration\navanc\xe9e"),"\npour plus d'information."),(0,n.kt)("li",{parentName:"ul"},"L'empreinte de votre plateforme a \xe9galement chang\xe9 : ",(0,n.kt)("a",{parentName:"li",href:"mailto:support@centreon.com"},"contactez Centreon")," pour obtenir une nouvelle licence."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/monitoring/monitoring-servers/deploying-a-configuration"},"D\xe9ployez la configuration")," de tous vos serveurs de supervision (y compris celle du central).")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Red\xe9marrez les processus suivants :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart cbd centengine\nsystemctl restart gorgoned\nsystemctl start snmptrapd centreontrapd\nsystemctl start snmpd\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Si vous supervisiez votre ancienne machine Centreon, et que vous avez chang\xe9 le nom d'utilisateur/mot de passe de la base pendant la migration, mettez \xe0 jour la configuration des ressources concern\xe9es (h\xf4te, services d\xe9pendant de cet h\xf4te).")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Allez \xe0 la page ",(0,n.kt)("strong",{parentName:"p"},"Configuration > Gestionnaire de connecteurs de supervision"),", puis ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/monitoring/pluginpacks#mettre-%C3%A0-jour-un-ou-plusieurs-packs"},"mettez \xe0 jour tous les connecteurs de supervision"),"."))),(0,n.kt)("h3",{id:"\xe9tape-6-anciennes-versions-uniquement-migrer-vers-gorgone"},"\xc9tape 6 (anciennes versions uniquement): Migrer vers Gorgone"),(0,n.kt)("p",null,"Si vous migrez depuis un Centreon 18.10, 19.04 ou 19.10, vous devez \xe9galement ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/developer/developer-gorgone-migrate-from-centcore"},"migrer de Centcore \xe0 Gorgone"),"."),(0,n.kt)("h3",{id:"\xe9tape-7-mettre-\xe0-jour-les-modules"},"\xc9tape 7: Mettre \xe0 jour les modules"),(0,n.kt)("p",null,"Pour finir la mise \xe0 jour des connecteurs de supervision, allez \xe0 la page ",(0,n.kt)("strong",{parentName:"p"},"Configuration > Gestionnaire de connecteurs de supervision"),", puis cliquez sur"),(0,n.kt)("p",null,"Pour mettre \xe0 jour les modules, allez \xe0 la page ",(0,n.kt)("strong",{parentName:"p"},"Administration > Extensions > Gestionnaire")," et cliquez sur ",(0,n.kt)("strong",{parentName:"p"},"Update all"),".\nSi vous avez un serveur MAP ou MBI, suivez les proc\xe9dures de migration correspondantes :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Proc\xe9dure de migration pour ",(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/graph-views/migrate"},"MAP"),","),(0,n.kt)("li",{parentName:"ul"},"Proc\xe9dure de migration pour ",(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/reporting/migrate"},"MBI"),".")),(0,n.kt)("h2",{id:"migrer-un-serveur-distant"},"Migrer un serveur distant"),(0,n.kt)("p",null,"Pour migrer un serveur distant :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Suivez la m\xeame proc\xe9dure que pour un serveur central."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/monitoring/monitoring-servers/add-a-remote-server-to-configuration"},"Rattachez le nouveau serveur distant")," \xe0 votre serveur central.")),(0,n.kt)("h2",{id:"migrer-un-collecteur"},"Migrer un collecteur"),(0,n.kt)("p",null,"Pour migrer un collecteur :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Effectuez les \xe9tapes 1 et 4 de la proc\xe9dure de migration d'un serveur central (c'est-\xe0-dire ",(0,n.kt)("a",{parentName:"li",href:"#%C3%A9tape-1--installer-le-nouveau-serveur"},"installer le nouveau serveur")," et ",(0,n.kt)("a",{parentName:"li",href:"#%C3%A9tape-4--synchroniser-les-plugins"},"synchronisez les plugins"),")."),(0,n.kt)("li",{parentName:"ol"},"Sur le serveur central, allez \xe0 la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Collecteurs"),". S\xe9lectionnez le collecteur migr\xe9 et mettez \xe0 jour son adresse IP (si celle-ci a chang\xe9)."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/monitoring/monitoring-servers/deploying-a-configuration"},"D\xe9ployez la configuration"),"."),(0,n.kt)("li",{parentName:"ol"},"Si votre collecteur rencontre des probl\xe8mes suite \xe0 la migration (impossible de d\xe9ployer la configuration, d'effectuer des actions de supervision...), mettez \xe0 jour l'empreinte du collecteur comme d\xe9crit dans ",(0,n.kt)("a",{parentName:"li",href:"https://thewatch.centreon.com/troubleshooting-41/poller-does-not-work-after-migration-or-reinstallation-fingerprint-changed-for-target-1177"},"cet article de base de connaissances"),".")))}g.isMDXComponent=!0}}]);