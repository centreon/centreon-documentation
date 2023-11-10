"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[12800],{94901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>k,frontMatter:()=>p,metadata:()=>d,toc:()=>m});n(67294);var r=n(3905),a=n(51715),s=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={id:"upgrade-from-21-04",title:"Mont\xe9e de version depuis Centreon 21.04"},u=void 0,d={unversionedId:"upgrade/upgrade-from-21-04",id:"version-23.10/upgrade/upgrade-from-21-04",title:"Mont\xe9e de version depuis Centreon 21.04",description:"Ce chapitre d\xe9crit la proc\xe9dure de mont\xe9e de version de votre plate-forme",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/upgrade/upgrade-from-21-04.md",sourceDirName:"upgrade",slug:"/upgrade/upgrade-from-21-04",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/upgrade/upgrade-from-21-04",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/upgrade/upgrade-from-21-04.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"10 nov. 2023",frontMatter:{id:"upgrade-from-21-04",title:"Mont\xe9e de version depuis Centreon 21.04"},sidebar:"version-23.10/docs",previous:{title:"Mont\xe9e de version depuis Centreon 21.10",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/upgrade/upgrade-from-21-10"},next:{title:"Mont\xe9e de version depuis Centreon 20.10",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/upgrade/upgrade-from-20-10"}},c={},m=[{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Sauvegarde",id:"sauvegarde",level:3},{value:"Mettre \xe0 jour la cl\xe9 de signature RPM",id:"mettre-\xe0-jour-la-cl\xe9-de-signature-rpm",level:3},{value:"Mont\xe9e de version du serveur Centreon Central",id:"mont\xe9e-de-version-du-serveur-centreon-central",level:2},{value:"Installer les nouveaux d\xe9p\xf4ts",id:"installer-les-nouveaux-d\xe9p\xf4ts",level:3},{value:"Installer le d\xe9p\xf4t MariaDB",id:"installer-le-d\xe9p\xf4t-mariadb",level:3},{value:"Mont\xe9e de version de PHP",id:"mont\xe9e-de-version-de-php",level:3},{value:"Mont\xe9e de version de la solution Centreon",id:"mont\xe9e-de-version-de-la-solution-centreon",level:3},{value:"Mettre \xe0 jour une configuration Apache personnalis\xe9e",id:"mettre-\xe0-jour-une-configuration-apache-personnalis\xe9e",level:3},{value:"Configuration Apache personnalis\xe9e : activer la compression du texte",id:"configuration-apache-personnalis\xe9e--activer-la-compression-du-texte",level:4},{value:"Finalisation de la mise \xe0 jour",id:"finalisation-de-la-mise-\xe0-jour",level:3},{value:"Actions post mont\xe9e de version",id:"actions-post-mont\xe9e-de-version",level:3},{value:"Mont\xe9e de version des Remote Servers",id:"mont\xe9e-de-version-des-remote-servers",level:2},{value:"Mont\xe9e de version des collecteurs",id:"mont\xe9e-de-version-des-collecteurs",level:2},{value:"Mise \xe0 jour des d\xe9p\xf4ts",id:"mise-\xe0-jour-des-d\xe9p\xf4ts",level:3},{value:"Mont\xe9e de version de la solution Centreon",id:"mont\xe9e-de-version-de-la-solution-centreon-1",level:3}],v={toc:m},g="wrapper";function k(e){var{components:t}=e,p=i(e,["components"]);return(0,r.kt)(g,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},v,p),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Ce chapitre d\xe9crit la proc\xe9dure de mont\xe9e de version de votre plate-forme\nCentreon depuis la version 21.04 vers la version 23.04."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Lorsque vous effectuez la mont\xe9e de version de votre serveur central, assurez-vous d'\xe9galement mettre \xe0 jour tous vos serveurs distants et vos collecteurs. Dans votre architecture, tous les serveurs doivent avoir la m\xeame version de Centreon. De plus, tous les serveurs doivent utiliser la m\xeame ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/developer/developer-broker-bbdo#switching-versions-of-bbdo"},"version du protocole BBDO"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Si vous souhaitez migrer votre serveur Centreon vers Oracle Linux\n/ RHEL 8, vous devez suivre la ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/migrate/migrate-from-el-to-el"},"proc\xe9dure de migration"))),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("h3",{id:"sauvegarde"},"Sauvegarde"),(0,r.kt)("p",null,"Avant toute chose, il est pr\xe9f\xe9rable de s\u2019assurer de l\u2019\xe9tat et de la consistance\ndes sauvegardes de l\u2019ensemble des serveurs centraux de votre plate-forme :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Serveur Centreon Central,"),(0,r.kt)("li",{parentName:"ul"},"Serveur de gestion de base de donn\xe9es.")),(0,r.kt)("h3",{id:"mettre-\xe0-jour-la-cl\xe9-de-signature-rpm"},"Mettre \xe0 jour la cl\xe9 de signature RPM"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Pour des raisons de s\xe9curit\xe9, les cl\xe9s utilis\xe9es pour signer les RPMs Centreon sont chang\xe9es r\xe9guli\xe8rement. Le dernier changement a eu lieu le 14 octobre 2021. Lorsque vous mettez Centreon \xe0 jour depuis une version plus ancienne, vous devez suivre la ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/security/key-rotation#installation-existante"},"proc\xe9dure de changement de cl\xe9"),", afin de supprimer l'ancienne cl\xe9 et d'installer la nouvelle.")),(0,r.kt)("h2",{id:"mont\xe9e-de-version-du-serveur-centreon-central"},"Mont\xe9e de version du serveur Centreon Central"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Lorsque vous lancez une commande, v\xe9rifiez les messagez obtenus. En cas de message d'erreur, arr\xeatez la proc\xe9dure et d\xe9pannez les probl\xe8mes.")),(0,r.kt)("h3",{id:"installer-les-nouveaux-d\xe9p\xf4ts"},"Installer les nouveaux d\xe9p\xf4ts"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Mettez \xe0 jour votre Centreon 21.04 jusqu'\xe0 la derni\xe8re version mineure.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Supprimez le fichier ",(0,r.kt)("strong",{parentName:"p"},"centreon.repo")," :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"rm /etc/yum.repos.d/centreon.repo\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Installez le nouveau d\xe9p\xf4t :"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/23.04/el8/centreon-23.04.repo\n")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Si vous avez une ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/administration/licenses#types-de-licences"},"licence offline"),", supprimez \xe9galement l'ancien d\xe9p\xf4t des connecteurs de supervision, puis installez le nouveau d\xe9p\xf4t."),(0,r.kt)("p",{parentName:"blockquote"},"Si vous avez une \xe9dition Business, faites de m\xeame avec le d\xe9p\xf4t Business."),(0,r.kt)("p",{parentName:"blockquote"},"Vous pouvez trouver l'adresse des d\xe9p\xf4ts sur le ",(0,r.kt)("a",{parentName:"p",href:"https://support.centreon.com/hc/fr/categories/10341239833105-D%C3%A9p%C3%B4ts"},"portail support Centreon"),".")),(0,r.kt)("h3",{id:"installer-le-d\xe9p\xf4t-mariadb"},"Installer le d\xe9p\xf4t MariaDB"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd /tmp\ncurl -JO https://downloads.mariadb.com/MariaDB/mariadb_repo_setup\nbash ./mariadb_repo_setup\nsed -ri 's/1[0-1]\\.[0-9]+/10.5/' /etc/yum.repos.d/mariadb.repo\nrm -f ./mariadb_repo_setup\n")),(0,r.kt)("h3",{id:"mont\xe9e-de-version-de-php"},"Mont\xe9e de version de PHP"),(0,r.kt)("p",null,"Centreon 23.04 utilise PHP en version 8.1."),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"RHEL 8",label:"RHEL 8",mdxType:"TabItem"},(0,r.kt)("p",null,"Vous devez tout d'abord installer les d\xe9p\xf4ts ",(0,r.kt)("strong",{parentName:"p"},"remi")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install -y dnf-plugins-core\ndnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm\ndnf install -y https://rpms.remirepo.net/enterprise/remi-release-8.rpm\nsudo subscription-manager repos --enable codeready-builder-for-rhel-8-x86_64-rpms\n")),(0,r.kt)("p",null,"Ensuite, vous devez changer le flux PHP de la version 7.3 \xe0 8.1 en ex\xe9cutant les commandes suivantes et en r\xe9pondant ",(0,r.kt)("strong",{parentName:"p"},"y"),"\npour confirmer :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf module reset php\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf module install php:remi-8.1\n"))),(0,r.kt)(s.Z,{value:"Alma / Oracle Linux 8",label:"Alma / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("p",null,"Vous devez tout d'abord installer les d\xe9p\xf4ts ",(0,r.kt)("strong",{parentName:"p"},"remi")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install -y dnf-plugins-core\ndnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm\ndnf install -y https://rpms.remirepo.net/enterprise/remi-release-8.rpm\n")),(0,r.kt)("p",null,"Ensuite, vous devez changer le flux PHP de la version 7.3 \xe0 8.1 en ex\xe9cutant les commandes suivantes et en r\xe9pondant ",(0,r.kt)("strong",{parentName:"p"},"y"),"\npour confirmer :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf module reset php\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf module install php:remi-8.1\n")))),(0,r.kt)("h3",{id:"mont\xe9e-de-version-de-la-solution-centreon"},"Mont\xe9e de version de la solution Centreon"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Assurez-vous que tous les utilisateurs sont d\xe9connect\xe9s avant de commencer\nla proc\xe9dure de mise \xe0 jour.")),(0,r.kt)("p",null,"Si vous avez des extensions Business install\xe9es, mettez \xe0 jour le d\xe9p\xf4t business en 23.04.\nRendez-vous sur le ",(0,r.kt)("a",{parentName:"p",href:"https://support.centreon.com/hc/fr/categories/10341239833105-D%C3%A9p%C3%B4ts"},"portail du support")," pour en r\xe9cup\xe9rer l'adresse."),(0,r.kt)("p",null,"Arr\xeater le processus Centreon Broker :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl stop cbd\n")),(0,r.kt)("p",null,"Supprimer les fichiers de r\xe9tention pr\xe9sents :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"rm /var/lib/centreon-broker/* -f\n")),(0,r.kt)("p",null,"Videz le cache :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf clean all --enablerepo=*\n")),(0,r.kt)("p",null,"Mettez \xe0 jour l'ensemble des composants :"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf update centreon\\* php-pecl-gnupg\n")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Acceptez les nouvelles cl\xe9s GPG des d\xe9p\xf4ts si n\xe9cessaire.")),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("p",null,"Ex\xe9cutez les commandes suivantes :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl enable php-fpm\nsystemctl restart php-fpm\n")))),(0,r.kt)("h3",{id:"mettre-\xe0-jour-une-configuration-apache-personnalis\xe9e"},"Mettre \xe0 jour une configuration Apache personnalis\xe9e"),(0,r.kt)("p",null,"Cette section s'applique uniquement si vous avez personnalis\xe9 votre configuration Apache. "),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("p",null,"Lors de la mont\xe9e de version, le fichier de configuration Apache n'est pas mis \xe0 jour automatiquement : le nouveau fichier de configuration amen\xe9 par le rpm ne remplace pas l'ancien. Vous devez reporter les changements manuellement dans votre fichier de configuration personnalis\xe9e."),(0,r.kt)("p",null,"Faites un diff entre l'ancien et le nouveau fichier de configuration Apache :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"diff -u /etc/httpd/conf.d/10-centreon.conf /etc/httpd/conf.d/10-centreon.conf.rpmnew\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"10-centreon.conf")," (post mont\xe9e de version) : ce fichier contient la configuration personnalis\xe9e. Il ne contient pas les nouveaut\xe9s apport\xe9es par la mont\xe9e de version."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"10-centreon.conf.rpmnew")," (post mont\xe9e de version) : ce fichier est fourni par le rpm; il ne contient pas la configuration personnalis\xe9e.")),(0,r.kt)("p",null,"Pour chaque diff\xe9rence entre les fichiers, \xe9valuez si celle-ci doit \xeatre report\xe9e du fichier ",(0,r.kt)("strong",{parentName:"p"},"10-centreon.conf.rpmnew")," au fichier ",(0,r.kt)("strong",{parentName:"p"},"10-centreon.conf"),"."),(0,r.kt)("p",null,"V\xe9rifiez qu'Apache est bien configur\xe9, en ex\xe9cutant la commande suivante :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"apachectl configtest\n")),(0,r.kt)("p",null,"Le r\xe9sultat attendu est le suivant :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Syntax OK\n")),(0,r.kt)("p",null,"Red\xe9marrez Apache pour appliquer les modifications :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart php-fpm httpd\n")),(0,r.kt)("p",null,"Puis v\xe9rifiez le statut :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl status httpd\n")),(0,r.kt)("p",null,"Si tout est correct, vous devriez avoir quelque chose comme :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'\u25cf httpd.service - The Apache HTTP Server\n   Loaded: loaded (/usr/lib/systemd/system/httpd.service; enabled; vendor preset: disabled)\n  Drop-In: /usr/lib/systemd/system/httpd.service.d\n           \u2514\u2500php-fpm.conf\n   Active: active (running) since Tue 2020-10-27 12:49:42 GMT; 2h 35min ago\n     Docs: man:httpd.service(8)\n Main PID: 1483 (httpd)\n   Status: "Total requests: 446; Idle/Busy workers 100/0;Requests/sec: 0.0479; Bytes served/sec: 443 B/sec"\n    Tasks: 278 (limit: 5032)\n   Memory: 39.6M\n   CGroup: /system.slice/httpd.service\n           \u251c\u25001483 /usr/sbin/httpd -DFOREGROUND\n           \u251c\u25001484 /usr/sbin/httpd -DFOREGROUND\n           \u251c\u25001485 /usr/sbin/httpd -DFOREGROUND\n           \u251c\u25001486 /usr/sbin/httpd -DFOREGROUND\n           \u251c\u25001487 /usr/sbin/httpd -DFOREGROUND\n           \u2514\u25001887 /usr/sbin/httpd -DFOREGROUND\n\n')))),(0,r.kt)("h4",{id:"configuration-apache-personnalis\xe9e--activer-la-compression-du-texte"},"Configuration Apache personnalis\xe9e : activer la compression du texte"),(0,r.kt)("p",null,"Pour am\xe9liorer le temps de chargement des pages, vous pouvez activer la compression du texte sur le serveur Apache. Le paquet ",(0,r.kt)("strong",{parentName:"p"},"brotli")," est n\xe9cessaire. Cette configuration est optionnelle mais vous fournira une meilleure exp\xe9rience utilisateur."),(0,r.kt)("p",null,"Ajoutez le code suivant \xe0 votre fichier de configuration Apache, dans les \xe9l\xe9ments ",(0,r.kt)("inlineCode",{parentName:"p"},"<VirtualHost *:80>")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"<VirtualHost *:443>")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"<IfModule mod_brotli.c>\n    AddOutputFilterByType BROTLI_COMPRESS text/html text/plain text/xml text/css text/javascript application/javascript application/json\n</IfModule>\nAddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json\n")),(0,r.kt)("h3",{id:"finalisation-de-la-mise-\xe0-jour"},"Finalisation de la mise \xe0 jour"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("p",null,"Avant de d\xe9marrer la mont\xe9e de version via l'interface web, rechargez le serveur Apache avec la commande suivante :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl reload httpd\n")))),(0,r.kt)("p",null,"Connectez-vous ensuite \xe0 l'interface web Centreon pour d\xe9marrer le processus de\nmise \xe0 jour :"),(0,r.kt)("p",null,"Cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Next")," :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(17068).Z,width:"650",height:"300"})),(0,r.kt)("p",null,"Cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Next")," :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(63986).Z,width:"650",height:"300"})),(0,r.kt)("p",null,"La note de version pr\xe9sente les principaux changements, cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Next")," :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(88358).Z,width:"650",height:"300"})),(0,r.kt)("p",null,"Le processus r\xe9alise les diff\xe9rentes mises \xe0 jour, cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Next")," :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(83376).Z,width:"650",height:"300"})),(0,r.kt)("p",null,"Votre serveur Centreon est maintenant \xe0 jour, cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Finish")," pour\nacc\xe9der \xe0 la page de connexion :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(81229).Z,width:"650",height:"300"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"La pr\xe9sentation de l'interface ayant \xe9t\xe9 modifi\xe9e dans la version 22.10, vous devez vider le cache de votre navigateur pour afficher le nouveau th\xe8me.")),(0,r.kt)("p",null,"Si le module Centreon BAM est install\xe9, r\xe9f\xe9rez-vous \xe0 la ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/service-mapping/upgrade"},"documentation\nassoci\xe9e")," pour le mettre \xe0 jour."),(0,r.kt)("h3",{id:"actions-post-mont\xe9e-de-version"},"Actions post mont\xe9e de version"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Mont\xe9e de version des extensions :"),(0,r.kt)("p",{parentName:"li"},"Depuis le menu ",(0,r.kt)("strong",{parentName:"p"},"Administration > Extensions > Gestionnaire"),", mettez \xe0 jour\ntoutes les extensions, en commen\xe7ant par les suivantes :"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"License Manager,"),(0,r.kt)("li",{parentName:"ul"},"Gestionnaire de connecteurs de supervision,"),(0,r.kt)("li",{parentName:"ul"},"Auto Discovery.")),(0,r.kt)("p",{parentName:"li"},"Vous pouvez alors mettre \xe0 jour toutes les autres extensions commerciales.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/monitoring/monitoring-servers/deploying-a-configuration"},"D\xe9ployez la configuration"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Red\xe9marrez les processus Centreon :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart cbd centengine centreontrapd gorgoned\n")))),(0,r.kt)("h2",{id:"mont\xe9e-de-version-des-remote-servers"},"Mont\xe9e de version des Remote Servers"),(0,r.kt)("p",null,"Cette proc\xe9dure est identique \xe0 la mont\xe9e de version d'un serveur Centreon\nCentral."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"En fin de mise \xe0 jour, la configuration doit \xeatre d\xe9ploy\xe9e depuis le serveur Central.")),(0,r.kt)("h2",{id:"mont\xe9e-de-version-des-collecteurs"},"Mont\xe9e de version des collecteurs"),(0,r.kt)("h3",{id:"mise-\xe0-jour-des-d\xe9p\xf4ts"},"Mise \xe0 jour des d\xe9p\xf4ts"),(0,r.kt)("p",null,"Ex\xe9cutez la commande suivante :"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/23.04/el8/centreon-23.04.repo\n")))),(0,r.kt)("h3",{id:"mont\xe9e-de-version-de-la-solution-centreon-1"},"Mont\xe9e de version de la solution Centreon"),(0,r.kt)("p",null,"Videz le cache :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf clean all --enablerepo=*\n")),(0,r.kt)("p",null,"Mettez \xe0 jour l'ensemble des composants :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf update centreon\\*\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Acceptez les nouvelles cl\xe9s GPG des d\xe9p\xf4ts si n\xe9cessaire.")),(0,r.kt)("p",null,"D\xe9marrez et activez ",(0,r.kt)("strong",{parentName:"p"},"gorgoned"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl start gorgoned\nsystemctl enable gorgoned\n")),(0,r.kt)("p",null,"Red\xe9marrez ",(0,r.kt)("strong",{parentName:"p"},"centengine"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart centengine\n")))}k.isMDXComponent=!0},17068:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/web_update_1-229784d5ed7986045c49b65b99ce38cd.png"},63986:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/web_update_2-f12be23b17ba9e83853cbdbaaea65402.png"},88358:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/web_update_3-d505e49a3b4f60dfd887ff45ddbf006b.png"},83376:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/web_update_4-97901eb976096c68fb2bd9d37c4de9bc.png"},81229:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/web_update_5-01f8c54614c006d7c1bf9e03799c1b81.png"}}]);