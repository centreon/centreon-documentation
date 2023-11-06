"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[99436],{98536:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>p,metadata:()=>u,toc:()=>m});t(67294);var n=t(3905),l=t(51715),r=t(7626);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):function(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})),e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}const p={id:"using-packages",title:"Using packages"},d=void 0,u={unversionedId:"installation/installation-of-a-central-server/using-packages",id:"version-23.10/installation/installation-of-a-central-server/using-packages",title:"Using packages",description:"Centreon provides RPM and DEB packages for its products through the Centreon Open",source:"@site/versioned_docs/version-23.10/installation/installation-of-a-central-server/using-packages.md",sourceDirName:"installation/installation-of-a-central-server",slug:"/installation/installation-of-a-central-server/using-packages",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/installation/installation-of-a-central-server/using-packages",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/installation/installation-of-a-central-server/using-packages.md",tags:[],version:"23.10",lastUpdatedAt:1699281350,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{id:"using-packages",title:"Using packages"},sidebar:"version-23.10/docs",previous:{title:"Download",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/installation/download"},next:{title:"Using a virtual machine (VM)",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/installation/installation-of-a-central-server/using-virtual-machines"}},c={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Additional configuration",id:"additional-configuration",level:3},{value:"Additional configuration",id:"additional-configuration-1",level:3},{value:"Step 1: Pre-installation",id:"step-1-pre-installation",level:2},{value:"Disable SELinux",id:"disable-selinux",level:3},{value:"Configure or disable the firewall",id:"configure-or-disable-the-firewall",level:3},{value:"Install the repositories",id:"install-the-repositories",level:3},{value:"Remi repository",id:"remi-repository",level:4},{value:"Remi and CodeReady Builder repository",id:"remi-and-codeready-builder-repository",level:4},{value:"Remi and CodeReady Builder repositories",id:"remi-and-codeready-builder-repositories",level:4},{value:"Install dependencies",id:"install-dependencies",level:4},{value:"Add Sury APT repository for PHP 8.1",id:"add-sury-apt-repository-for-php-81",level:4},{value:"MariaDB repository",id:"mariadb-repository",level:4},{value:"Centreon repository",id:"centreon-repository",level:4},{value:"Step 2: Installation",id:"step-2-installation",level:2},{value:"Step 3: Configuration",id:"step-3-configuration",level:2},{value:"Server name",id:"server-name",level:3},{value:"Set the PHP time zone",id:"set-the-php-time-zone",level:3},{value:"Service startup during system bootup",id:"service-startup-during-system-bootup",level:3},{value:"Secure the database",id:"secure-the-database",level:3},{value:"Step 4: Web installation",id:"step-4-web-installation",level:2}],g={toc:m},k="wrapper";function h(e){var{components:a}=e,t=i(e,["components"]);return(0,n.kt)(k,o(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(a){s(e,a,t[a])}))}return e}({},g,t),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Centreon provides RPM and DEB packages for its products through the Centreon Open\nSource version available free of charge in our repository."),(0,n.kt)("p",null,"These packages can be installed on Alma/RHEL/Oracle Linux 8 and 9 and on Debian 11."),(0,n.kt)("p",null,"You must run the installation procedure as a privileged user."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"When you run a command, check its output. If you get an error message, stop the procedure and fix the issue.")),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"After installing your server, update your operating system using the following\ncommand:"),(0,n.kt)(l.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf update\n")),(0,n.kt)("h3",{id:"additional-configuration"},"Additional configuration"),(0,n.kt)("p",null,"If you intend to use Centreon in French, Spanish, Portuguese or German, install the corresponding packages:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install glibc-langpack-fr\ndnf install glibc-langpack-es\ndnf install glibc-langpack-pt\ndnf install glibc-langpack-de\n")),(0,n.kt)("p",null,"Use the following command to check which languages are installed on your system:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"locale -a\n"))),(0,n.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf update\n")),(0,n.kt)("h3",{id:"additional-configuration-1"},"Additional configuration"),(0,n.kt)("p",null,"If you intend to use Centreon in French, Spanish, Portuguese or German, install the corresponding packages:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install glibc-langpack-fr\ndnf install glibc-langpack-es\ndnf install glibc-langpack-pt\ndnf install glibc-langpack-de\n")),(0,n.kt)("p",null,"Use the following command to check which languages are installed on your system:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"locale -a\n"))),(0,n.kt)(r.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"apt update && apt upgrade\n")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Accept all GPG keys and reboot your server if a kernel update is proposed.")),(0,n.kt)("h2",{id:"step-1-pre-installation"},"Step 1: Pre-installation"),(0,n.kt)("h3",{id:"disable-selinux"},"Disable SELinux"),(0,n.kt)(l.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("p",null,"During installation, SELinux should be disabled. To do this, edit the file ",(0,n.kt)("strong",{parentName:"p"},"/etc/selinux/config")," and replace\n",(0,n.kt)("strong",{parentName:"p"},"enforcing")," with ",(0,n.kt)("strong",{parentName:"p"},"disabled"),". You can also run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"sed -i s/^SELINUX=.*$/SELINUX=disabled/ /etc/selinux/config\n")),(0,n.kt)("p",null,"Reboot your operating system to apply the change."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"reboot\n")),(0,n.kt)("p",null,"After system startup, perform a quick check of the SELinux status:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"getenforce\n")),(0,n.kt)("p",null,"You should have this result:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"Disabled\n"))),(0,n.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,n.kt)("p",null,"During installation, SELinux should be disabled. To do this, edit the file ",(0,n.kt)("strong",{parentName:"p"},"/etc/selinux/config")," and replace\n",(0,n.kt)("strong",{parentName:"p"},"enforcing")," with ",(0,n.kt)("strong",{parentName:"p"},"disabled"),". You can also run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"sed -i s/^SELINUX=.*$/SELINUX=disabled/ /etc/selinux/config\n")),(0,n.kt)("p",null,"Reboot your operating system to apply the change."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"reboot\n")),(0,n.kt)("p",null,"After system startup, perform a quick check of the SELinux status:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"getenforce\n")),(0,n.kt)("p",null,"You should have this result:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"Disabled\n"))),(0,n.kt)(r.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("p",null,"SELinux is not installed on Debian 11, continue."))),(0,n.kt)("h3",{id:"configure-or-disable-the-firewall"},"Configure or disable the firewall"),(0,n.kt)("p",null,"If your firewall is active, add ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/administration/secure-platform#enable-firewalld"},"firewall rules"),".\nYou can also disable the firewall during installation by running the following commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl stop firewalld\nsystemctl disable firewalld\n")),(0,n.kt)("h3",{id:"install-the-repositories"},"Install the repositories"),(0,n.kt)(l.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"Alma 8",label:"Alma 8",mdxType:"TabItem"},(0,n.kt)("h4",{id:"remi-repository"},"Remi repository"),(0,n.kt)("p",null,"To install Centreon you will need to install the ",(0,n.kt)("strong",{parentName:"p"},"remi")," repository."),(0,n.kt)("p",null,"Run the following commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install -y dnf-plugins-core\ndnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm\ndnf install -y https://rpms.remirepo.net/enterprise/remi-release-8.rpm\ndnf config-manager --set-enabled 'powertools'\n")),(0,n.kt)("p",null,"Enable PHP 8.1 using the following commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf module reset php\ndnf module install php:remi-8.1\n"))),(0,n.kt)(r.Z,{value:"RHEL 8",label:"RHEL 8",mdxType:"TabItem"},(0,n.kt)("h4",{id:"remi-and-codeready-builder-repository"},"Remi and CodeReady Builder repository"),(0,n.kt)("p",null,"To install Centreon you will need to install the ",(0,n.kt)("strong",{parentName:"p"},"remi")," and ",(0,n.kt)("strong",{parentName:"p"},"CodeReady Builder")," repositories."),(0,n.kt)("p",null,"Run the following commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install -y dnf-plugins-core\ndnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm\ndnf install -y https://rpms.remirepo.net/enterprise/remi-release-8.rpm\nsubscription-manager repos --enable codeready-builder-for-rhel-8-x86_64-rpms\ndnf config-manager --set-enabled codeready-builder-for-rhel-8-rhui-rpms\n")),(0,n.kt)("p",null,"Enable PHP 8.1 using the following commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf module reset php\ndnf module install php:remi-8.1\n"))),(0,n.kt)(r.Z,{value:"Oracle Linux 8",label:"Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("h4",{id:"remi-and-codeready-builder-repositories"},"Remi and CodeReady Builder repositories"),(0,n.kt)("p",null,"To install Centreon you will need to install the ",(0,n.kt)("strong",{parentName:"p"},"remi")," and ",(0,n.kt)("strong",{parentName:"p"},"CodeReady Builder")," repositories."),(0,n.kt)("p",null,"Run the following commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install -y dnf-plugins-core\ndnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm\ndnf install -y https://rpms.remirepo.net/enterprise/remi-release-8.rpm\ndnf config-manager --set-enabled ol8_codeready_builder\n")),(0,n.kt)("p",null,"Enable PHP 8.1 using the following commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf module reset php\ndnf module install php:remi-8.1\n"))),(0,n.kt)(r.Z,{value:"Alma 9",label:"Alma 9",mdxType:"TabItem"},(0,n.kt)("p",null,"To install Centreon you will need to install the ",(0,n.kt)("strong",{parentName:"p"},"CodeReady Builder")," repository."),(0,n.kt)("p",null,"Run the following commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install dnf-plugins-core\ndnf install epel-release\ndnf config-manager --set-enabled crb\n")),(0,n.kt)("p",null,"Enable PHP 8.1 using the following commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf module reset php\ndnf module install php:8.1\n"))),(0,n.kt)(r.Z,{value:"RHEL 9",label:"RHEL 9",mdxType:"TabItem"},(0,n.kt)("p",null,"To install Centreon you will need to install the ",(0,n.kt)("strong",{parentName:"p"},"CodeReady Builder")," repository."),(0,n.kt)("p",null,"Run the following commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install -y dnf-plugins-core\ndnf install -y http://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm\nsubscription-manager repos --enable codeready-builder-for-rhel-9-x86_64-rpms\ndnf config-manager --set-enabled codeready-builder-for-rhel-9-rhui-rpms\n")),(0,n.kt)("p",null,"Enable PHP 8.1 using the following commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf module reset php\ndnf module install php:8.1\n"))),(0,n.kt)(r.Z,{value:"Oracle Linux 9",label:"Oracle Linux 9",mdxType:"TabItem"},(0,n.kt)("p",null,"To install Centreon you will need to install the ",(0,n.kt)("strong",{parentName:"p"},"CodeReady Builder")," repository."),(0,n.kt)("p",null,"Run the following commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install dnf-plugins-core\ndnf install -y http://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm\ndnf config-manager --set-enabled ol9_codeready_builder\n")),(0,n.kt)("p",null,"Enable PHP 8.1 using the following commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf module reset php\ndnf module install php:8.1\n"))),(0,n.kt)(r.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("h4",{id:"install-dependencies"},"Install dependencies"),(0,n.kt)("p",null,"Install the following dependencies:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"apt update && apt install lsb-release ca-certificates apt-transport-https software-properties-common wget gnupg2 curl\n")),(0,n.kt)("h4",{id:"add-sury-apt-repository-for-php-81"},"Add Sury APT repository for PHP 8.1"),(0,n.kt)("p",null,"To install the Sury repository, execute the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/sury-php.list\n')),(0,n.kt)("p",null,"Then import the repository key:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"wget -O- https://packages.sury.org/php/apt.gpg | gpg --dearmor | tee /etc/apt/trusted.gpg.d/php.gpg  > /dev/null 2>&1\napt update\n")))),(0,n.kt)("h4",{id:"mariadb-repository"},"MariaDB repository"),(0,n.kt)(l.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'curl -LsS https://r.mariadb.com/downloads/mariadb_repo_setup | sudo bash -s -- --os-type=rhel --os-version=8 --mariadb-server-version="mariadb-10.5"\n'))),(0,n.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'curl -LsS https://r.mariadb.com/downloads/mariadb_repo_setup | sudo bash -s -- --os-type=rhel --os-version=9 --mariadb-server-version="mariadb-10.5"\n'))),(0,n.kt)(r.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'curl -LsS https://r.mariadb.com/downloads/mariadb_repo_setup | bash -s -- --os-type=debian --os-version=11 --mariadb-server-version="mariadb-10.5"\n')))),(0,n.kt)("h4",{id:"centreon-repository"},"Centreon repository"),(0,n.kt)("p",null,"To install Centreon software from the repository, you should first install the\ncentreon-release package, which will provide the repository file."),(0,n.kt)("p",null,"Install the Centreon repository using this command:"),(0,n.kt)(l.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/23.04/el8/centreon-23.04.repo\ndnf clean all --enablerepo=*\ndnf update\n"))),(0,n.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/23.04/el9/centreon-23.04.repo\ndnf clean all --enablerepo=*\ndnf update\n"))),(0,n.kt)(r.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("p",null,"To install the Centreon repository, execute the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'echo "deb https://packages.centreon.com/apt-standard-23.04-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon.list\necho "deb https://packages.centreon.com/apt-plugins-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon-plugins.list\n')),(0,n.kt)("p",null,"Then import the repository key:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1\napt update\n")))),(0,n.kt)("h2",{id:"step-2-installation"},"Step 2: Installation"),(0,n.kt)("p",null,"This section describes how to install a Centreon central server."),(0,n.kt)("p",null,"You can install this server with a local database on the server or\na remote database on a dedicated server."),(0,n.kt)(l.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"With a local database",label:"With a local database",mdxType:"TabItem"},(0,n.kt)(l.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install -y centreon\nsystemctl daemon-reload\nsystemctl restart mariadb\n"))),(0,n.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install -y centreon\nsystemctl daemon-reload\nsystemctl restart mariadb\n"))),(0,n.kt)(r.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"apt update\napt install -y --no-install-recommends centreon\nsystemctl daemon-reload\nsystemctl restart mariadb\n"))))),(0,n.kt)(r.Z,{value:"With a remote database",label:"With a remote database",mdxType:"TabItem"},(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If installing the database on a dedicated server, this server should also have\nthe prerequisite repositories.")),(0,n.kt)("p",null,"Run the following command on the Central server:"),(0,n.kt)(l.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install -y centreon-central\n"))),(0,n.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install -y centreon-central\n"))),(0,n.kt)(r.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"apt update\napt install -y --no-install-recommends centreon-central\n")))),(0,n.kt)("p",null,"Then run the following commands on the dedicated server for your database:"),(0,n.kt)(l.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install -y centreon-database\nsystemctl daemon-reload\nsystemctl restart mariadb\n"))),(0,n.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install -y centreon-database\nsystemctl daemon-reload\nsystemctl restart mariadb\n"))),(0,n.kt)(r.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"apt update\napt install -y --no-install-recommends centreon-database\nsystemctl daemon-reload\nsystemctl restart mariadb\n")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"It is mandatory to set a password for the root user of the database.")),(0,n.kt)("p",null,"Secure your MariaDB root access by executing the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mysql_secure_installation\n")),(0,n.kt)("p",null,"Then, in the remote dabatase, create a user with ",(0,n.kt)("strong",{parentName:"p"},"root")," privileges. You will have to enter this user during the\nweb installation process (at ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/installation/web-and-post-installation#step-6-database-information"},"step 6"),",\nin the ",(0,n.kt)("strong",{parentName:"p"},"Root user")," and ",(0,n.kt)("strong",{parentName:"p"},"Root password")," fields)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-SQL"},"CREATE USER '<USER>'@'<CENTRAL_SERVER_IP>' IDENTIFIED BY '<PASSWORD>';\nGRANT ALL PRIVILEGES ON *.* TO '<USER>'@'<CENTRAL_SERVER_IP>' WITH GRANT OPTION;\nFLUSH PRIVILEGES;\n")),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"CREATE USER 'dbadmin'@'<CENTRAL_SERVER_IP>' IDENTIFIED BY '<DBADMIN_PASSWORD>';\nGRANT ALL PRIVILEGES ON *.* TO 'dbadmin'@'<CENTRAL_SERVER_IP>' WITH GRANT OPTION;\nFLUSH PRIVILEGES;\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Replace ",(0,n.kt)("strong",{parentName:"p"},"<CENTRAL_SERVER_IP",">")," with the Centreon Central IP address that will connect to the database server."),(0,n.kt)("p",{parentName:"blockquote"},"Replace ",(0,n.kt)("strong",{parentName:"p"},"<USER",">")," and ",(0,n.kt)("strong",{parentName:"p"},"<PASSWORD",">")," with the user's credentials.")),(0,n.kt)("p",null,"This user will only be used for the installation process; once the ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/installation/web-and-post-installation"},"web installation")," is complete you can delete this user using:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-SQL"},"DROP USER '<USER>'@'<CENTRAL_SERVER_IP>';\n")),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-SQL"},"DROP USER 'dbadmin'@'<CENTRAL_SERVER_IP>';\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The package ",(0,n.kt)("strong",{parentName:"li"},"centreon-database")," installs an optimized MariaDB configuration\nto be used with Centreon.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If this package is not installed, system limitation ",(0,n.kt)("strong",{parentName:"p"},"LimitNOFILE")," should be\nat least set to ",(0,n.kt)("strong",{parentName:"p"},"32000")," using a dedicated configuration file; for example:"),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ cat /etc/systemd/system/mariadb.service.d/centreon.conf\n[Service]\nLimitNOFILE=32000\n"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Same for the MariaDB ",(0,n.kt)("strong",{parentName:"li"},"open_files_limit")," directive:")),(0,n.kt)(l.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("blockquote",null,(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ cat /etc/my.cnf.d/centreon.cnf\n[server]\ninnodb_file_per_table=1\nopen_files_limit=32000\n")))),(0,n.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,n.kt)("blockquote",null,(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ cat /etc/my.cnf.d/centreon.cnf\n[server]\ninnodb_file_per_table=1\nopen_files_limit=32000\n")))),(0,n.kt)(r.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("blockquote",null,(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ cat /etc/mysql/mariadb.conf.d/80-centreon.cnf\n[server]\ninnodb_file_per_table=1\nopen_files_limit=32000\n")),(0,n.kt)("p",{parentName:"blockquote"},"MariaDB must listen to all interfaces instead of localhost/127.0.0.1, which is the default value. Edit the following file:"),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"/etc/mysql/mariadb.conf.d/50-server.cnf\n")),(0,n.kt)("p",{parentName:"blockquote"},"Set the ",(0,n.kt)("strong",{parentName:"p"},"bind-address")," parameter to ",(0,n.kt)("strong",{parentName:"p"},"0.0.0.0")," and restart mariadb."),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart mariadb\n"))))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"In addition to the directives above, it is strongly recommended to tune the\ndatabase configuration with the following parameters:"),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"[server]\nkey_buffer_size = 256M\nsort_buffer_size = 32M\njoin_buffer_size = 4M\nthread_cache_size = 64\nread_buffer_size = 512K\nread_rnd_buffer_size = 256K\nmax_allowed_packet = 128M\n")),(0,n.kt)("p",{parentName:"blockquote"},"Optionally, tune the memory and buffer utilization of the InnoDB engine powered\ntables. The example below applies to a database server with 8 GB RAM"),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"innodb_buffer_pool_size=1G\n")),(0,n.kt)("p",{parentName:"blockquote"},"Remember to restart MariaDB after changing the configuration.")))),(0,n.kt)("h2",{id:"step-3-configuration"},"Step 3: Configuration"),(0,n.kt)("h3",{id:"server-name"},"Server name"),(0,n.kt)("p",null,"If you want to change the server's hostname, use the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"hostnamectl set-hostname new-server-name\n")),(0,n.kt)("p",null,"Replace ",(0,n.kt)("strong",{parentName:"p"},"new-server-name")," with the name of your choice. Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"hostnamectl set-hostname central\n")),(0,n.kt)("h3",{id:"set-the-php-time-zone"},"Set the PHP time zone"),(0,n.kt)("p",null,"You are required to set the PHP time zone."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Replace ",(0,n.kt)("strong",{parentName:"p"},"Europe/Paris")," with your time zone. You can find the list of\nsupported time zones ",(0,n.kt)("a",{parentName:"p",href:"http://php.net/manual/en/timezones.php"},"here"),".")),(0,n.kt)(l.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("p",null,"Run the following command as ",(0,n.kt)("inlineCode",{parentName:"p"},"root"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'echo "date.timezone = Europe/Paris" >> /etc/php.d/50-centreon.ini\n')),(0,n.kt)("p",null,"After saving the file, restart the PHP-FPM service:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart php-fpm\n"))),(0,n.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,n.kt)("p",null,"Run the following command as ",(0,n.kt)("inlineCode",{parentName:"p"},"root"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'echo "date.timezone = Europe/Paris" >> /etc/php.d/50-centreon.ini\n')),(0,n.kt)("p",null,"After saving the file, restart the PHP-FPM service:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart php-fpm\n"))),(0,n.kt)(r.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'echo "date.timezone = Europe/Paris" >> /etc/php/8.1/mods-available/centreon.ini\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The PHP timezone was defined during the installation process by retrieving the timezone configured on the operating system.")),(0,n.kt)("p",null,"After saving the file, restart the PHP8.1-FPM service:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart php8.1-fpm\n")))),(0,n.kt)("h3",{id:"service-startup-during-system-bootup"},"Service startup during system bootup"),(0,n.kt)("p",null,"To make services start automatically during system bootup, run these commands\non the central server:"),(0,n.kt)(l.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl enable php-fpm httpd centreon cbd centengine gorgoned snmptrapd centreontrapd snmpd\nsystemctl enable crond\nsystemctl start crond\n"))),(0,n.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl enable php-fpm httpd centreon cbd centengine gorgoned snmptrapd centreontrapd snmpd\nsystemctl enable crond\nsystemctl start crond\n"))),(0,n.kt)(r.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl enable php8.1-fpm apache2 centreon cbd centengine gorgoned centreontrapd snmpd snmptrapd\n")))),(0,n.kt)("p",null,"Then execute the following command (on the central server if you are using a local database, or on your remote database server):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl enable mariadb\nsystemctl restart mariadb\n")),(0,n.kt)("h3",{id:"secure-the-database"},"Secure the database"),(0,n.kt)("p",null,"Since MariaDB 10.5, it is mandatory to secure the database's root access before installing Centreon.\nIf you are using a local database, run the following command on the central server:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mysql_secure_installation\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Answer ",(0,n.kt)("strong",{parentName:"li"},"yes"),' to all the questions except "Disallow root login remotely?".'),(0,n.kt)("li",{parentName:"ul"},"It is mandatory to set a password for the ",(0,n.kt)("strong",{parentName:"li"},"root")," user of the database. You will need this password during the ",(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/installation/web-and-post-installation"},"web installation"),".")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For more information, please see the ",(0,n.kt)("a",{parentName:"p",href:"https://mariadb.com/kb/en/mysql_secure_installation/"},"official MariaDB documentation"),".")),(0,n.kt)("h2",{id:"step-4-web-installation"},"Step 4: Web installation"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Start the Apache server with the\nfollowing command:")),(0,n.kt)(l.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl start httpd\n"))),(0,n.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl start httpd\n"))),(0,n.kt)(r.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl start apache2\n")))),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"To complete the installation, follow the\n",(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/installation/web-and-post-installation#web-installation"},"web installation")," procedure.")))}h.isMDXComponent=!0}}]);