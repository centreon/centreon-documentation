"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[79324],{64558:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>u,contentTitle:()=>m,default:()=>k,frontMatter:()=>p,metadata:()=>d,toc:()=>c});r(67294);var t=r(3905),n=r(51715),i=r(7626);function l(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):function(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})),e}function s(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const p={id:"upgrade-mariadb",title:"Upgrading MariaDB"},m=void 0,d={unversionedId:"upgrade/upgrade-mariadb",id:"version-23.10/upgrade/upgrade-mariadb",title:"Upgrading MariaDB",description:"You may have several MariaDB databases in your architecture. The central server has a database, each remote server has a database,",source:"@site/versioned_docs/version-23.10/upgrade/upgrade-mariadb.md",sourceDirName:"upgrade",slug:"/upgrade/upgrade-mariadb",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/upgrade/upgrade-mariadb",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/upgrade/upgrade-mariadb.md",tags:[],version:"23.10",lastUpdatedAt:1699281350,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{id:"upgrade-mariadb",title:"Upgrading MariaDB"},sidebar:"version-23.10/docs",previous:{title:"Upgrade from Centreon 20.10",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/upgrade/upgrade-from-20-10"},next:{title:"Introduction to the migration process",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/migrate/introduction"}},u={},c=[{value:"Upgrading process",id:"upgrading-process",level:2},{value:"Version of Maria DB for each version of Centreon",id:"version-of-maria-db-for-each-version-of-centreon",level:2},{value:"Knowing your version of MariaDB",id:"knowing-your-version-of-mariadb",level:2},{value:"Upgrading between major MariaDB versions",id:"upgrading-between-major-mariadb-versions",level:2},{value:"Upgrading from 10.1 to 10.5",id:"upgrading-from-101-to-105",level:3},{value:"Upgrading between minor versions of MariaDB",id:"upgrading-between-minor-versions-of-mariadb",level:2}],b={toc:c},g="wrapper";function k(e){var{components:a}=e,r=s(e,["components"]);return(0,t.kt)(g,o(function(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(a){l(e,a,r[a])}))}return e}({},b,r),{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"You may have several MariaDB databases in your architecture. The central server has a database, each remote server has a database,\nand the MBI and MAP modules each have a dedicated database. Within your architecture, all databases must have the same version of MariaDB."),(0,t.kt)("h2",{id:"upgrading-process"},"Upgrading process"),(0,t.kt)("p",null,"When you upgrade from one major version of Centreon to another, you must:"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"Upgrade Centreon (packages, web installation, deploying the configuration)."),(0,t.kt)("li",{parentName:"ol"},"Upgrade MariaDB.")),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Refer to the official MariaDB documentation for more information about this process:\n",(0,t.kt)("a",{parentName:"p",href:"https://mariadb.com/kb/en/upgrading-between-major-mariadb-versions/"},"https://mariadb.com/kb/en/upgrading-between-major-mariadb-versions/"))),(0,t.kt)("h2",{id:"version-of-maria-db-for-each-version-of-centreon"},"Version of Maria DB for each version of Centreon"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",{parentName:"tr",align:null},"Centreon"),(0,t.kt)("th",{parentName:"tr",align:null},"MariaDB"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"23.04"),(0,t.kt)("td",{parentName:"tr",align:null},"10.5")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"22.10"),(0,t.kt)("td",{parentName:"tr",align:null},"10.5")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"22.04"),(0,t.kt)("td",{parentName:"tr",align:null},"10.5")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"21.10"),(0,t.kt)("td",{parentName:"tr",align:null},"10.5")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"21.04"),(0,t.kt)("td",{parentName:"tr",align:null},"10.5")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"20.10"),(0,t.kt)("td",{parentName:"tr",align:null},"10.3.x")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"20.04"),(0,t.kt)("td",{parentName:"tr",align:null},"10.3.x")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"19.10"),(0,t.kt)("td",{parentName:"tr",align:null},"10.1.x")))),(0,t.kt)("h2",{id:"knowing-your-version-of-mariadb"},"Knowing your version of MariaDB"),(0,t.kt)("p",null,"To find out which version of MariaDB is installed on your machine, enter the following command:"),(0,t.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,t.kt)(i.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"rpm -qa |grep MariaDB\n")),(0,t.kt)("p",null,"The results should look like this:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"MariaDB-client-10.5.8-1.el8.centos.x86_64\nMariaDB-server-10.5.8-1.el8.centos.x86_64\nMariaDB-common-10.5.8-1.el8.centos.x86_64\nMariaDB-shared-10.5.8-1.el8.centos.x86_64\nMariaDB-compat-10.5.8-1.el8.centos.x86_64\n"))),(0,t.kt)(i.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"rpm -qa |grep MariaDB\n")),(0,t.kt)("p",null,"The results should look like this:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"MariaDB-client-10.5.8-1.el9.centos.x86_64\nMariaDB-server-10.5.8-1.el9.centos.x86_64\nMariaDB-common-10.5.8-1.el9.centos.x86_64\nMariaDB-shared-10.5.8-1.el9.centos.x86_64\nMariaDB-compat-10.5.8-1.el9.centos.x86_64\n"))),(0,t.kt)(i.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"dpkg -l |grep MariaDB\n")),(0,t.kt)("p",null,"The results should look like this:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"ii  libdbd-mysql-perl:amd64                4.050-3+b1                                                                 amd64        Perl5 database interface to the MariaDB/MySQL database\nii  libmariadb3:amd64                      1:10.5.17+maria~deb11      amd64        MariaDB database client library\nii  mariadb-client-10.5                    1:10.5.17+maria~deb11      amd64        MariaDB database client binaries\nii  mariadb-client-core-10.5               1:10.5.17+maria~deb11      amd64        MariaDB database core client binaries\nii  mariadb-common                         1:10.5.17+maria~deb11      all          MariaDB common configuration files\nii  mariadb-server                         1:10.5.17+maria~deb11      all          MariaDB database server (metapackage depending on the latest version)\nii  mariadb-server-10.5                    1:10.5.17+maria~deb11      amd64        MariaDB database server binaries\nii  mariadb-server-core-10.5               1:10.5.17+maria~deb11      amd64        MariaDB database core server files\nii  mysql-common                           1:10.5.17+maria~deb11      all          MariaDB database common files (e.g. /etc/mysql/my.cnf)\n")))),(0,t.kt)("h2",{id:"upgrading-between-major-mariadb-versions"},"Upgrading between major MariaDB versions"),(0,t.kt)("p",null,"You must uninstall then reinstall MariaDB to upgrade between major versions (for example to switch from version 10.4 to version 10.5)."),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Stop the MariaDB service:"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl stop mariadb\n"))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Uninstall the current version:"))),(0,t.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,t.kt)(i.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"rpm --erase --nodeps --verbose MariaDB-server MariaDB-client MariaDB-shared MariaDB-compat MariaDB-common\n"))),(0,t.kt)(i.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"rpm --erase --nodeps --verbose MariaDB-server MariaDB-client MariaDB-shared MariaDB-compat MariaDB-common\n"))),(0,t.kt)(i.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"dpkg -r --ignore-depends=MariaDB-server,MariaDB-client,MariaDB-shared,MariaDB-compat,MariaDB-common\n")))),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"During this uninstallation step, you may encounter an error because one or several MariaDB packages are missing. In that case, you should execute the uninstallation command without including the missing package."),(0,t.kt)("p",{parentName:"blockquote"},"For instance, you get the following error message:"),(0,t.kt)("p",{parentName:"blockquote"},(0,t.kt)("inlineCode",{parentName:"p"},"package MariaDB-compat is not installed")),(0,t.kt)("p",{parentName:"blockquote"},"As ",(0,t.kt)("strong",{parentName:"p"},"MariaDB-compat")," is the missing package, please execute the same command without quoting ",(0,t.kt)("strong",{parentName:"p"},"MariaDB-compat"),":"),(0,t.kt)("p",{parentName:"blockquote"},(0,t.kt)("inlineCode",{parentName:"p"},"rpm --erase --nodeps --verbose MariaDB-server MariaDB-client MariaDB-shared MariaDB-common"))),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Make sure you have ",(0,t.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/upgrade/upgrade-from-22-04#install-the-mariadb-repository"},"installed the official MariaDB repository")," before you continue the procedure.")),(0,t.kt)("ol",{start:3},(0,t.kt)("li",{parentName:"ol"},"Install the 10.5 version:")),(0,t.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,t.kt)(i.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install MariaDB-server-10.5\\* MariaDB-client-10.5\\* MariaDB-shared-10.5\\* MariaDB-compat-10.5\\* MariaDB-common-10.5\\*\n"))),(0,t.kt)(i.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install MariaDB-server-10.5\\* MariaDB-client-10.5\\* MariaDB-shared-10.5\\* MariaDB-compat-10.5\\* MariaDB-common-10.5\\*\n"))),(0,t.kt)(i.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},'curl -LsS https://r.mariadb.com/downloads/mariadb_repo_setup | sudo bash -s -- --os-type=debian --os-version=11 --mariadb-server-version="mariadb-10.5"\n')))),(0,t.kt)("ol",{start:4},(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Start the MariaDB service:"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl start mariadb\n"))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Launch the MariaDB upgrade process:"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"mysql_upgrade\n")),(0,t.kt)("p",{parentName:"li"},"If your database is password-protected, enter:"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"mysql_upgrade -u <database_admin_user> -p\n")),(0,t.kt)("p",{parentName:"li"},"Example: if your database_admin_user is ",(0,t.kt)("inlineCode",{parentName:"p"},"root"),", enter:"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"mysql_upgrade -u root -p\n")),(0,t.kt)("blockquote",{parentName:"li"},(0,t.kt)("p",{parentName:"blockquote"},"Refer to the ",(0,t.kt)("a",{parentName:"p",href:"https://mariadb.com/kb/en/mysql_upgrade/"},"official documentation"),"\nfor more information or if errors occur during this last step."))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"To enable MariaDB on startup, execute the following command:"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl enable mariadb\n")))),(0,t.kt)("h3",{id:"upgrading-from-101-to-105"},"Upgrading from 10.1 to 10.5"),(0,t.kt)("p",null,"The ",(0,t.kt)("inlineCode",{parentName:"p"},"innodb_additional_mem_pool_size")," parameter has been removed since MariaDB 10.2,\nso you should remove it from file ",(0,t.kt)("strong",{parentName:"p"},"/etc/my.cnf.d/centreon.cnf")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-diff"},"#\n# Custom MySQL/MariaDB server configuration for Centreon\n#\n[server]\ninnodb_file_per_table=1\n\nopen_files_limit = 32000\n\nkey_buffer_size = 256M\nsort_buffer_size = 32M\njoin_buffer_size = 4M\nthread_cache_size = 64\nread_buffer_size = 512K\nread_rnd_buffer_size = 256K\nmax_allowed_packet = 8M\n\n# For 4 Go Ram\n-#innodb_additional_mem_pool_size=512M\n#innodb_buffer_pool_size=512M\n\n# For 8 Go Ram\n-#innodb_additional_mem_pool_size=1G\n#innodb_buffer_pool_size=1G\n")),(0,t.kt)("h2",{id:"upgrading-between-minor-versions-of-mariadb"},"Upgrading between minor versions of MariaDB"),(0,t.kt)("p",null,"Follow these steps to upgrade between minor versions of MariaDB (for example, to switch from version 10.3.2 to version 10.3.5):"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"Update MariaDB:")),(0,t.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,t.kt)(i.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"dnf update MariaDB-*\n"))),(0,t.kt)(i.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"dnf update MariaDB-*\n"))),(0,t.kt)(i.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"apt update MariaDB-*\n")))),(0,t.kt)("ol",{start:2},(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Restart MariaDB:"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"restart mariadb\n")))))}k.isMDXComponent=!0}}]);