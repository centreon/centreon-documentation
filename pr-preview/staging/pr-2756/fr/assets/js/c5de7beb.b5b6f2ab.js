"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[83782],{75776:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>d,toc:()=>m});t(67294);var l=t(3905),n=t(51715),r=t(7626);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):function(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})),e}function i(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const o={id:"using-packages",title:"\xc0 partir des paquets"},u=void 0,d={unversionedId:"installation/installation-of-a-central-server/using-packages",id:"version-23.10/installation/installation-of-a-central-server/using-packages",title:"\xc0 partir des paquets",description:"Centreon fournit des paquets RPM et DEB pour ses produits via la version Centreon Open Source disponible gratuitement dans notre d\xe9p\xf4t.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/installation/installation-of-a-central-server/using-packages.md",sourceDirName:"installation/installation-of-a-central-server",slug:"/installation/installation-of-a-central-server/using-packages",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/installation/installation-of-a-central-server/using-packages",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/installation/installation-of-a-central-server/using-packages.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"10 nov. 2023",frontMatter:{id:"using-packages",title:"\xc0 partir des paquets"},sidebar:"version-23.10/docs",previous:{title:"T\xe9l\xe9chargements",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/installation/download"},next:{title:"\xc0 partir d'une VM",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/installation/installation-of-a-central-server/using-virtual-machines"}},c={},m=[{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Configuration sp\xe9cifique",id:"configuration-sp\xe9cifique",level:3},{value:"Configuration sp\xe9cifique",id:"configuration-sp\xe9cifique-1",level:3},{value:"\xc9tape 1 : Pr\xe9-installation",id:"\xe9tape-1--pr\xe9-installation",level:2},{value:"D\xe9sactiver SELinux",id:"d\xe9sactiver-selinux",level:3},{value:"Configurer ou d\xe9sactiver le pare-feu",id:"configurer-ou-d\xe9sactiver-le-pare-feu",level:3},{value:"Installer les d\xe9p\xf4ts",id:"installer-les-d\xe9p\xf4ts",level:3},{value:"D\xe9p\xf4t Remi",id:"d\xe9p\xf4t-remi",level:4},{value:"D\xe9p\xf4t Remi et CodeReady Builder",id:"d\xe9p\xf4t-remi-et-codeready-builder",level:4},{value:"D\xe9p\xf4ts Remi et CodeReady Builder",id:"d\xe9p\xf4ts-remi-et-codeready-builder",level:4},{value:"Installer les d\xe9pendances",id:"installer-les-d\xe9pendances",level:4},{value:"Installer le d\xe9p\xf4t Sury APT pour PHP 8.1",id:"installer-le-d\xe9p\xf4t-sury-apt-pour-php-81",level:4},{value:"D\xe9p\xf4t MariaDB",id:"d\xe9p\xf4t-mariadb",level:4},{value:"D\xe9p\xf4t Centreon",id:"d\xe9p\xf4t-centreon",level:4},{value:"\xc9tape 2 : Installation",id:"\xe9tape-2--installation",level:3},{value:"\xc9tape 3 : Configuration",id:"\xe9tape-3--configuration",level:3},{value:"Nom du serveur",id:"nom-du-serveur",level:3},{value:"D\xe9finir le fuseau horaire de PHP",id:"d\xe9finir-le-fuseau-horaire-de-php",level:3},{value:"D\xe9marrage des services au d\xe9marrage du syst\xe8me",id:"d\xe9marrage-des-services-au-d\xe9marrage-du-syst\xe8me",level:3},{value:"S\xe9curiser la base de donn\xe9es",id:"s\xe9curiser-la-base-de-donn\xe9es",level:3},{value:"\xc9tape 4 : Installation web",id:"\xe9tape-4--installation-web",level:2}],k={toc:m},g="wrapper";function b(e){var{components:a}=e,t=i(e,["components"]);return(0,l.kt)(g,p(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},l=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),l.forEach((function(a){s(e,a,t[a])}))}return e}({},k,t),{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Centreon fournit des paquets RPM et DEB pour ses produits via la version Centreon Open Source disponible gratuitement dans notre d\xe9p\xf4t."),(0,l.kt)("p",null,"Ces paquets peuvent \xeatre install\xe9s sur Alma/RHEL/Oracle Linux 8 et 9 et sur Debian 11."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Vous devez ex\xe9cuter la proc\xe9dure d'installation en tant qu'utilisateur privil\xe9gi\xe9.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Lorsque vous lancez une commande, v\xe9rifiez les messagez obtenus. En cas de message d'erreur, arr\xeatez la proc\xe9dure et d\xe9pannez les probl\xe8mes.")),(0,l.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,l.kt)("p",null,"Apr\xe8s avoir install\xe9 votre serveur, mettez \xe0 jour votre syst\xe8me d'exploitation \xe0 l'aide de la commande suivante :"),(0,l.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"dnf update\n")),(0,l.kt)("h3",{id:"configuration-sp\xe9cifique"},"Configuration sp\xe9cifique"),(0,l.kt)("p",null,"Pour utiliser Centreon en fran\xe7ais, espagnol, portugais ou allemand, installez les paquets correspondants :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install glibc-langpack-fr\ndnf install glibc-langpack-es\ndnf install glibc-langpack-pt\ndnf install glibc-langpack-de\n")),(0,l.kt)("p",null,"Utilisez la commande suivante pour v\xe9rifier quelles langues sont install\xe9es sur votre syst\xe8me :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"locale -a\n"))),(0,l.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"dnf update\n")),(0,l.kt)("h3",{id:"configuration-sp\xe9cifique-1"},"Configuration sp\xe9cifique"),(0,l.kt)("p",null,"Pour utiliser Centreon en fran\xe7ais, espagnol, portugais ou allemand, installez les paquets correspondants :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install glibc-langpack-fr\ndnf install glibc-langpack-es\ndnf install glibc-langpack-pt\ndnf install glibc-langpack-de\n")),(0,l.kt)("p",null,"Utilisez la commande suivante pour v\xe9rifier quelles langues sont install\xe9es sur votre syst\xe8me :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"locale -a\n"))),(0,l.kt)(r.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"apt update && apt upgrade\n")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Acceptez toutes les cl\xe9s GPG propos\xe9es et red\xe9marrez votre serveur\nsi une mise \xe0 jour du noyau est propos\xe9e.")),(0,l.kt)("h2",{id:"\xe9tape-1--pr\xe9-installation"},"\xc9tape 1 : Pr\xe9-installation"),(0,l.kt)("h3",{id:"d\xe9sactiver-selinux"},"D\xe9sactiver SELinux"),(0,l.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,l.kt)("p",null,"Pendant l'installation, SELinux doit \xeatre d\xe9sactiv\xe9. \xc9ditez le fichier\n",(0,l.kt)("strong",{parentName:"p"},"/etc/selinux/config")," et remplacez ",(0,l.kt)("strong",{parentName:"p"},"enforcing")," par ",(0,l.kt)("strong",{parentName:"p"},"disabled"),", ou bien\nex\xe9cutez la commande suivante :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sed -i s/^SELINUX=.*$/SELINUX=disabled/ /etc/selinux/config\n")),(0,l.kt)("p",null,"Red\xe9marrez votre syst\xe8me d'exploitation pour prendre en compte le changement."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"reboot\n")),(0,l.kt)("p",null,"Apr\xe8s le red\xe9marrage, une v\xe9rification rapide permet de confirmer le statut de\nSELinux :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ getenforce\n")),(0,l.kt)("p",null,"Vous devriez obtenir ce r\xe9sultat :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"Disabled\n"))),(0,l.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,l.kt)("p",null,"Pendant l'installation, SELinux doit \xeatre d\xe9sactiv\xe9. \xc9ditez le fichier\n",(0,l.kt)("strong",{parentName:"p"},"/etc/selinux/config")," et remplacez ",(0,l.kt)("strong",{parentName:"p"},"enforcing")," par ",(0,l.kt)("strong",{parentName:"p"},"disabled"),", ou bien\nex\xe9cutez la commande suivante :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sed -i s/^SELINUX=.*$/SELINUX=disabled/ /etc/selinux/config\n")),(0,l.kt)("p",null,"Red\xe9marrez votre syst\xe8me d'exploitation pour prendre en compte le changement."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"reboot\n")),(0,l.kt)("p",null,"Apr\xe8s le d\xe9marrage du syst\xe8me, effectuez une v\xe9rification rapide de l'\xe9tat de SELinux :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"getenforce\n")),(0,l.kt)("p",null,"Vous devriez obtenir ce r\xe9sultat :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"Disabled\n"))),(0,l.kt)(r.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,l.kt)("p",null,"SELinux n'est pas install\xe9 sur Debian 11, continuez."))),(0,l.kt)("h3",{id:"configurer-ou-d\xe9sactiver-le-pare-feu"},"Configurer ou d\xe9sactiver le pare-feu"),(0,l.kt)("p",null,"Si votre pare-feu syst\xe8me est actif, ",(0,l.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/administration/secure-platform#activer-firewalld"},"param\xe9trez-le"),".\nVous pouvez \xe9galement le d\xe9sactiver le temps de l'installation :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl stop firewalld\nsystemctl disable firewalld\n")),(0,l.kt)("h3",{id:"installer-les-d\xe9p\xf4ts"},"Installer les d\xe9p\xf4ts"),(0,l.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Alma 8",label:"Alma 8",mdxType:"TabItem"},(0,l.kt)("h4",{id:"d\xe9p\xf4t-remi"},"D\xe9p\xf4t Remi"),(0,l.kt)("p",null,"Pour installer Centreon, vous devez installer le d\xe9p\xf4t ",(0,l.kt)("strong",{parentName:"p"},"remi"),"."),(0,l.kt)("p",null,"Ex\xe9cutez les commandes suivantes :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install -y dnf-plugins-core\ndnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm\ndnf install -y https://rpms.remirepo.net/enterprise/remi-release-8.rpm\ndnf config-manager --set-enabled 'powertools'\n")),(0,l.kt)("p",null,"Activez PHP 8.1 en utilisant les commandes suivantes :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"dnf module reset php\ndnf module install php:remi-8.1\n"))),(0,l.kt)(r.Z,{value:"RHEL 8",label:"RHEL 8",mdxType:"TabItem"},(0,l.kt)("h4",{id:"d\xe9p\xf4t-remi-et-codeready-builder"},"D\xe9p\xf4t Remi et CodeReady Builder"),(0,l.kt)("p",null,"Pour installer Centreon, vous devez installer les d\xe9p\xf4ts ",(0,l.kt)("strong",{parentName:"p"},"remi")," et ",(0,l.kt)("strong",{parentName:"p"},"CodeReady Builder"),"."),(0,l.kt)("p",null,"Ex\xe9cutez les commandes suivantes :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install -y dnf-plugins-core\ndnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm\ndnf install -y https://rpms.remirepo.net/enterprise/remi-release-8.rpm\nsubscription-manager repos --enable codeready-builder-for-rhel-8-x86_64-rpms\ndnf config-manager --set-enabled codeready-builder-for-rhel-8-rhui-rpms\n")),(0,l.kt)("p",null,"Activez PHP 8.1 en utilisant les commandes suivantes :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"dnf module reset php\ndnf module install php:remi-8.1\n"))),(0,l.kt)(r.Z,{value:"Oracle Linux 8",label:"Oracle Linux 8",mdxType:"TabItem"},(0,l.kt)("h4",{id:"d\xe9p\xf4ts-remi-et-codeready-builder"},"D\xe9p\xf4ts Remi et CodeReady Builder"),(0,l.kt)("p",null,"Pour installer Centreon, vous devez installer les d\xe9p\xf4ts ",(0,l.kt)("strong",{parentName:"p"},"remi")," et ",(0,l.kt)("strong",{parentName:"p"},"CodeReady Builder"),"."),(0,l.kt)("p",null,"Ex\xe9cutez les commandes suivantes :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install -y dnf-plugins-core\ndnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm\ndnf install -y https://rpms.remirepo.net/enterprise/remi-release-8.rpm\ndnf config-manager --set-enabled ol8_codeready_builder\n")),(0,l.kt)("p",null,"Activez PHP 8.1 en utilisant les commandes suivantes :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"dnf module reset php\ndnf module install php:remi-8.1\n"))),(0,l.kt)(r.Z,{value:"Alma 9",label:"Alma 9",mdxType:"TabItem"},(0,l.kt)("p",null,"Ex\xe9cutez les commandes suivantes :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install dnf-plugins-core\ndnf install epel-release\ndnf config-manager --set-enabled crb\n")),(0,l.kt)("p",null,"Activez PHP 8.1 avec la commande suivante :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"dnf module reset php\ndnf module install php:8.1\n"))),(0,l.kt)(r.Z,{value:"RHEL 9",label:"RHEL 9",mdxType:"TabItem"},(0,l.kt)("p",null,"Ex\xe9cutez les commandes suivantes :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install -y dnf-plugins-core\ndnf install -y http://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm\nsubscription-manager repos --enable codeready-builder-for-rhel-9-x86_64-rpms\ndnf config-manager --set-enabled codeready-builder-for-rhel-9-rhui-rpms\n")),(0,l.kt)("p",null,"Activez PHP 8.1 avec la commande suivante :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"dnf module reset php\ndnf module install php:8.1\n"))),(0,l.kt)(r.Z,{value:"Oracle Linux 9",label:"Oracle Linux 9",mdxType:"TabItem"},(0,l.kt)("p",null,"Ex\xe9cutez les commandes suivantes :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install dnf-plugins-core\ndnf install -y http://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm\ndnf config-manager --set-enabled ol9_codeready_builder\n")),(0,l.kt)("p",null,"Activez PHP 8.1 avec la commande suivante :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"dnf module reset php\ndnf module install php:8.1\n"))),(0,l.kt)(r.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,l.kt)("h4",{id:"installer-les-d\xe9pendances"},"Installer les d\xe9pendances"),(0,l.kt)("p",null,"Installez les d\xe9pendances suivantes :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"apt update && apt install lsb-release ca-certificates apt-transport-https software-properties-common wget gnupg2 curl\n")),(0,l.kt)("h4",{id:"installer-le-d\xe9p\xf4t-sury-apt-pour-php-81"},"Installer le d\xe9p\xf4t Sury APT pour PHP 8.1"),(0,l.kt)("p",null,"Pour installer le d\xe9p\xf4t Sury, ex\xe9cutez la commande suivante :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/sury-php.list\n')),(0,l.kt)("p",null,"Ensuite, importez la cl\xe9 du d\xe9p\xf4t :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wget -O- https://packages.sury.org/php/apt.gpg | gpg --dearmor | tee /etc/apt/trusted.gpg.d/php.gpg  > /dev/null 2>&1\napt update\n")))),(0,l.kt)("h4",{id:"d\xe9p\xf4t-mariadb"},"D\xe9p\xf4t MariaDB"),(0,l.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -LsS https://r.mariadb.com/downloads/mariadb_repo_setup | sudo bash -s -- --os-type=rhel --os-version=8 --mariadb-server-version="mariadb-10.5"\n'))),(0,l.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -LsS https://r.mariadb.com/downloads/mariadb_repo_setup | sudo bash -s -- --os-type=rhel --os-version=9 --mariadb-server-version="mariadb-10.5"\n'))),(0,l.kt)(r.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -LsS https://r.mariadb.com/downloads/mariadb_repo_setup | bash -s -- --os-type=debian --os-version=11 --mariadb-server-version="mariadb-10.5"\n')))),(0,l.kt)("h4",{id:"d\xe9p\xf4t-centreon"},"D\xe9p\xf4t Centreon"),(0,l.kt)("p",null,"Pour installer le logiciel Centreon \xe0 partir des d\xe9p\xf4ts, vous devez d'abord installer le paquet\n",(0,l.kt)("strong",{parentName:"p"},"centreon-release"),", qui fournira le fichier du d\xe9p\xf4t."),(0,l.kt)("p",null,"Installez le d\xe9p\xf4t Centreon \xe0 l'aide de la commande suivante :"),(0,l.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/23.04/el8/centreon.repo\ndnf clean all --enablerepo=*\ndnf update\n"))),(0,l.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/23.04/el9/centreon.repo\ndnf clean all --enablerepo=*\ndnf update\n"))),(0,l.kt)(r.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'echo "deb https://packages.centreon.com/apt-standard-23.04-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon.list\necho "deb https://packages.centreon.com/apt-plugins-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon-plugins.list\n')),(0,l.kt)("p",null,"Ensuite, importez la cl\xe9 du d\xe9p\xf4t :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1\napt update\n")))),(0,l.kt)("h3",{id:"\xe9tape-2--installation"},"\xc9tape 2 : Installation"),(0,l.kt)("p",null,"Cette section d\xe9crit comment installer un serveur central Centreon."),(0,l.kt)("p",null,"Vous pouvez installer ce serveur avec une base de donn\xe9es locale au serveur, ou\nune base de donn\xe9es distante sur un serveur d\xe9di\xe9."),(0,l.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Avec base de donn\xe9es locale",label:"Avec base de donn\xe9es locale",mdxType:"TabItem"},(0,l.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install -y centreon\nsystemctl daemon-reload\nsystemctl restart mariadb\n"))),(0,l.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install -y centreon\nsystemctl daemon-reload\nsystemctl restart mariadb\n"))),(0,l.kt)(r.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"apt update\napt install -y --no-install-recommends centreon\nsystemctl daemon-reload\nsystemctl restart mariadb\n"))))),(0,l.kt)(r.Z,{value:"Avec une base de donn\xe9es d\xe9port\xe9e",label:"Avec une base de donn\xe9es d\xe9port\xe9e",mdxType:"TabItem"},(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Si vous installez la base de donn\xe9es sur un serveur d\xe9di\xe9, ce serveur doit \xe9galement avoir\nles d\xe9p\xf4ts requis.")),(0,l.kt)("p",null,"Ex\xe9cutez la commande suivante sur le serveur central :"),(0,l.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install -y centreon-central\n"))),(0,l.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install -y centreon-central\n"))),(0,l.kt)(r.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"apt update\napt install -y --no-install-recommends centreon-central\n")))),(0,l.kt)("p",null,"Ex\xe9cutez ensuite les commandes suivantes sur le serveur d\xe9di\xe9 \xe0 votre base de donn\xe9es :"),(0,l.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install -y centreon-database\nsystemctl daemon-reload\nsystemctl restart mariadb\n"))),(0,l.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install -y centreon-database\nsystemctl daemon-reload\nsystemctl restart mariadb\n"))),(0,l.kt)(r.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"apt update\napt install -y --no-install-recommends centreon-database\nsystemctl daemon-reload\nsystemctl restart mariadb\n")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Il est obligatoire de d\xe9finir un mot de passe pour l'utilisateur root de la base de donn\xe9es.")),(0,l.kt)("p",null,"S\xe9curisez l'acc\xe8s root \xe0 MariaDB en ex\xe9cutant la commande suivante :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mysql_secure_installation\n")),(0,l.kt)("p",null,"Ensuite, dans la base de donn\xe9es distante, cr\xe9ez un utilisateur avec des privil\xe8ges ",(0,l.kt)("strong",{parentName:"p"},"root"),". Vous devrez entrer cet utilisateur pendant\nle processus d'installation web (\xe0 ",(0,l.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/installation/web-and-post-installation#%C3%A9tape-6-database-information"},"\xe9tape 6"),",\ndans les champs ",(0,l.kt)("strong",{parentName:"p"},"Root user")," et ",(0,l.kt)("strong",{parentName:"p"},"Root password"),")."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"CREATE USER '<UTILISATEUR>'@'<IP_SERVEUR_CENTRAL>' IDENTIFIED BY '<MOT_DE_PASSE>';\nGRANT ALL PRIVILEGES ON *.* TO '<UTILISATEUR>'@'<IP_SERVEUR_CENTRAL>' WITH GRANT OPTION;\nFLUSH PRIVILEGES;\n")),(0,l.kt)("p",null,"Exemple :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"CREATE USER 'dbadmin'@'<IP_SERVEUR_CENTRAL>' IDENTIFIED BY '<MOT_DE_PASSE_DBADMIN>';\nGRANT ALL PRIVILEGES ON *.* TO 'dbadmin'@'<IP_SERVEUR_CENTRAL>' WITH GRANT OPTION;\nFLUSH PRIVILEGES;\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Remplacez ",(0,l.kt)("strong",{parentName:"p"},"<IP_SERVEUR_CENTRAL",">")," par l'adresse IP du serveur central qui se connectera au serveur de bases de donn\xe9es."),(0,l.kt)("p",{parentName:"blockquote"},"Remplacez ",(0,l.kt)("strong",{parentName:"p"},"<UTILISATEUR",">")," et ",(0,l.kt)("strong",{parentName:"p"},"<MOT_DE_PASSE",">")," par les identifiants de l'utilisateur.")),(0,l.kt)("p",null,"Cet utilisateur ne sera utilis\xe9 que pour le processus d'installation. Une fois ",(0,l.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/installation/web-and-post-installation/"},"l'installation web")," termin\xe9e, vous pouvez supprimer cet utilisateur via la commande suivante :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"DROP USER '<UTILISATEUR>'@'<IP_SERVEUR_CENTRAL>';\n")),(0,l.kt)("p",null,"Exemple :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"DROP USER 'dbadmin'@'<IP_SERVEUR_CENTRAL>';\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Le paquet ",(0,l.kt)("strong",{parentName:"li"},"centreon-database")," installe une configuration de MariaDB optimis\xe9e pour \xeatre utilis\xe9e avec Centreon.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Si ce paquet n'est pas install\xe9, la limitation du syst\xe8me ",(0,l.kt)("strong",{parentName:"p"},"LimitNOFILE")," devrait \xeatre\nau moins fix\xe9e \xe0 ",(0,l.kt)("strong",{parentName:"p"},"32000")," \xe0 l'aide d'un fichier de configuration d\xe9di\xe9, par exemple :"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ cat /etc/systemd/system/mariadb.service.d/centreon.conf\n[Service]\nLimitNOFILE=32000\n"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Idem pour la directive MariaDB ",(0,l.kt)("strong",{parentName:"li"},"open_files_limit")," :")),(0,l.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ cat /etc/my.cnf.d/centreon.cnf\n[server]\ninnodb_file_per_table=1\nopen_files_limit=32000\n")))),(0,l.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ cat /etc/my.cnf.d/centreon.cnf\n[server]\ninnodb_file_per_table=1\nopen_files_limit=32000\n")))),(0,l.kt)(r.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ cat /etc/mysql/mariadb.conf.d/80-centreon.cnf\n[server]\ninnodb_file_per_table=1\nopen_files_limit=32000\n")),(0,l.kt)("p",{parentName:"blockquote"},"MariaDB doit \xe9couter sur toutes les interfaces au lieu d'\xe9couter sur localhost/127.0.0.1, qui est la valeur par d\xe9faut. \xc9ditez le fichier suivant :"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"/etc/mysql/mariadb.conf.d/50-server.cnf\n")),(0,l.kt)("p",{parentName:"blockquote"},"Attribuez au param\xe8tre ",(0,l.kt)("strong",{parentName:"p"},"bind-address")," la valeur ",(0,l.kt)("strong",{parentName:"p"},"0.0.0.0")," et red\xe9marrez mariadb."),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart mariadb\n"))))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"En plus des directives ci-dessus, il est fortement recommand\xe9 d'adapter la configuration de la base de donn\xe9es avec les param\xe8tres suivants :"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"[server]\nkey_buffer_size = 256M\nsort_buffer_size = 32M\njoin_buffer_size = 4M\nthread_cache_size = 64\nread_buffer_size = 512K\nread_rnd_buffer_size = 256K\nmax_allowed_packet = 128M\n")),(0,l.kt)("p",{parentName:"blockquote"},"En option, r\xe9gler l'utilisation de la m\xe9moire et des tampons du moteur InnoDB alimentant les\ntables. L'exemple ci-dessous s'applique \xe0 un serveur de base de donn\xe9es avec 8 Go de RAM."),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"innodb_buffer_pool_size=1G\n"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"N'oubliez pas de red\xe9marrer MariaDB apr\xe8s modification de la configuration.")))),(0,l.kt)("h3",{id:"\xe9tape-3--configuration"},"\xc9tape 3 : Configuration"),(0,l.kt)("h3",{id:"nom-du-serveur"},"Nom du serveur"),(0,l.kt)("p",null,"Si vous le souhaitez, vous pouvez changer le nom d'h\xf4te du serveur en utilisant la commande suivante :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"hostnamectl set-hostname new-server-name\n")),(0,l.kt)("p",null,"Remplacez ",(0,l.kt)("strong",{parentName:"p"},"new-server-name")," par le nom que vous souhaitez. Exemple :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"hostnamectl set-hostname central\n")),(0,l.kt)("h3",{id:"d\xe9finir-le-fuseau-horaire-de-php"},"D\xe9finir le fuseau horaire de PHP"),(0,l.kt)("p",null,"Vous devez d\xe9finir le fuseau horaire de PHP."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Remplacez ",(0,l.kt)("strong",{parentName:"p"},"Europe/Paris")," par votre fuseau horaire. Vous pouvez trouver la liste des\nfuseaux horaires support\xe9s ","[ici]"," (",(0,l.kt)("a",{parentName:"p",href:"http://php.net/manual/en/timezones.php"},"http://php.net/manual/en/timezones.php"),").")),(0,l.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 8 / CentOS 7",label:"Alma / RHEL / Oracle Linux 8 / CentOS 7",mdxType:"TabItem"},(0,l.kt)("p",null,"Ex\xe9cutez la commande suivante en tant que ",(0,l.kt)("inlineCode",{parentName:"p"},"root")," :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'echo "date.timezone = Europe/Paris" >> /etc/php.d/50-centreon.ini\n')),(0,l.kt)("p",null,"Apr\xe8s avoir enregistr\xe9 le fichier, red\xe9marrez le service PHP-FPM :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart php-fpm\n"))),(0,l.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,l.kt)("p",null,"Ex\xe9cutez la commande suivante en tant que ",(0,l.kt)("inlineCode",{parentName:"p"},"root")," :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'echo "date.timezone = Europe/Paris" >> /etc/php.d/50-centreon.ini\n')),(0,l.kt)("p",null,"Apr\xe8s avoir enregistr\xe9 le fichier, red\xe9marrez le service PHP-FPM :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart php-fpm\n"))),(0,l.kt)(r.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'echo "date.timezone = Europe/Paris" >> /etc/php/8.1/mods-available/centreon.ini\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Celui-ci a \xe9t\xe9 d\xe9fini durant le processus d'installation en r\xe9cup\xe9rant le fuseau horaire configur\xe9 sur le\nsyst\xe8me d'exploitation.")),(0,l.kt)("p",null,"Apr\xe8s avoir enregistr\xe9 le fichier, red\xe9marrez le service PHP-FPM :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart php8.1-fpm\n")))),(0,l.kt)("h3",{id:"d\xe9marrage-des-services-au-d\xe9marrage-du-syst\xe8me"},"D\xe9marrage des services au d\xe9marrage du syst\xe8me"),(0,l.kt)("p",null,"Pour que les services d\xe9marrent automatiquement au d\xe9marrage du syst\xe8me, ex\xe9cutez les commandes suivantes\nsur le serveur central :"),(0,l.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl enable php-fpm httpd centreon cbd centengine gorgoned snmptrapd centreontrapd snmpd\nsystemctl enable crond\nsystemctl start crond\n"))),(0,l.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl enable php-fpm httpd centreon cbd centengine gorgoned snmptrapd centreontrapd snmpd\nsystemctl enable crond\nsystemctl start crond\n"))),(0,l.kt)(r.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl enable php8.1-fpm apache2 centreon cbd centengine gorgoned centreontrapd snmpd snmptrapd\n")))),(0,l.kt)("p",null,"Ex\xe9cutez ensuite la commande suivante (sur le serveur central si vous utilisez une base de donn\xe9es locale, ou sur votre serveur de base de donn\xe9es distant) :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl enable mariadb\nsystemctl restart mariadb\n")),(0,l.kt)("h3",{id:"s\xe9curiser-la-base-de-donn\xe9es"},"S\xe9curiser la base de donn\xe9es"),(0,l.kt)("p",null,"Depuis MariaDB 10.5, il est obligatoire de s\xe9curiser l'acc\xe8s root de la base de donn\xe9es avant d'installer Centreon.\nSi vous utilisez une base de donn\xe9es locale, ex\xe9cutez la commande suivante sur le serveur central :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mysql_secure_installation\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"R\xe9pondez ",(0,l.kt)("strong",{parentName:"li"},"oui"),' \xe0 toutes les questions, sauf \xe0 "Disallow root login remotely ?".'),(0,l.kt)("li",{parentName:"ul"},"Il est obligatoire de d\xe9finir un mot de passe pour l'utilisateur ",(0,l.kt)("strong",{parentName:"li"},"root")," de la base de donn\xe9es. Ce mot de passe vous sera demand\xe9 pendant l'",(0,l.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/installation/web-and-post-installation"},"installation web"),".")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Pour plus d'informations, veuillez consulter la ",(0,l.kt)("a",{parentName:"p",href:"https://mariadb.com/kb/en/mysql_secure_installation/"},"documentation officielle de MariaDB"),".")),(0,l.kt)("h2",{id:"\xe9tape-4--installation-web"},"\xc9tape 4 : Installation web"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"D\xe9marrez le serveur Apache avec la\ncommande suivante :")),(0,l.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl start httpd\n"))),(0,l.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl start httpd\n"))),(0,l.kt)(r.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl start apache2\n")))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Pour terminer l'installation, suivez la proc\xe9dure\nd'",(0,l.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/installation/web-and-post-installation#web-installation"},"installation web"),".")))}b.isMDXComponent=!0}}]);