"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[25813],{61517:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>k,frontMatter:()=>i,metadata:()=>c,toc:()=>m});n(67294);var r=n(3905),a=n(51715),o=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"upgrade-from-21-10",title:"Upgrade from Centreon 21.10"},u=void 0,c={unversionedId:"upgrade/upgrade-from-21-10",id:"version-23.10/upgrade/upgrade-from-21-10",title:"Upgrade from Centreon 21.10",description:"This chapter describes how to upgrade your Centreon platform from version 21.10",source:"@site/versioned_docs/version-23.10/upgrade/upgrade-from-21-10.md",sourceDirName:"upgrade",slug:"/upgrade/upgrade-from-21-10",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/upgrade/upgrade-from-21-10",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/upgrade/upgrade-from-21-10.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"Nov 10, 2023",frontMatter:{id:"upgrade-from-21-10",title:"Upgrade from Centreon 21.10"},sidebar:"version-23.10/docs",previous:{title:"Upgrade from Centreon 22.04",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/upgrade/upgrade-from-22-04"},next:{title:"Upgrade from Centreon 21.04",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/upgrade/upgrade-from-21-04"}},d={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Perform a backup",id:"perform-a-backup",level:3},{value:"Upgrade the Centreon Central server",id:"upgrade-the-centreon-central-server",level:2},{value:"Install the new repositories",id:"install-the-new-repositories",level:3},{value:"Install the MariaDB repository",id:"install-the-mariadb-repository",level:3},{value:"Upgrade PHP",id:"upgrade-php",level:3},{value:"Upgrade the Centreon solution",id:"upgrade-the-centreon-solution",level:3},{value:"Update your customized Apache configuration",id:"update-your-customized-apache-configuration",level:3},{value:"Customized Apache configuration: enable text compression",id:"customized-apache-configuration-enable-text-compression",level:4},{value:"Finalizing the upgrade",id:"finalizing-the-upgrade",level:3},{value:"Post-upgrade actions",id:"post-upgrade-actions",level:3},{value:"Upgrade the Remote Servers",id:"upgrade-the-remote-servers",level:2},{value:"Upgrade the Pollers",id:"upgrade-the-pollers",level:2},{value:"Update the Centreon repository",id:"update-the-centreon-repository",level:3},{value:"Upgrade the Centreon solution",id:"upgrade-the-centreon-solution-1",level:3}],g={toc:m},h="wrapper";function k(e){var{components:t}=e,i=s(e,["components"]);return(0,r.kt)(h,p(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},g,i),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This chapter describes how to upgrade your Centreon platform from version 21.10\nto version 23.04."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When you upgrade your central server, make sure you also upgrade all your remote servers and your pollers. All servers in your architecture must have the same version of Centreon. In addition, all servers must use the same ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/docs/developer/developer-broker-bbdo#switching-versions-of-bbdo"},"version of the BBDO protocol"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you want to migrate your Centreon server to Oracle Linux / RHEL 8\nyou need to follow the ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/docs/migrate/migrate-from-el-to-el"},"migration procedure"),".")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"perform-a-backup"},"Perform a backup"),(0,r.kt)("p",null,"Be sure that you have fully backed up your environment for the following\nservers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Central server"),(0,r.kt)("li",{parentName:"ul"},"Database server")),(0,r.kt)("h2",{id:"upgrade-the-centreon-central-server"},"Upgrade the Centreon Central server"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When you run a command, check its output. If you get an error message, stop the procedure and fix the issue.")),(0,r.kt)("h3",{id:"install-the-new-repositories"},"Install the new repositories"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update your Centreon 21.10 to the latest minor version.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Remove the ",(0,r.kt)("strong",{parentName:"p"},"centreon.repo")," file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"rm /etc/yum.repos.d/centreon.repo\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the new repository:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/23.04/el8/centreon-23.04.repo\n")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you have an ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/docs/administration/licenses#types-of-licenses"},"offline license"),", also remove the old Monitoring Connectors repository, then install the new one."),(0,r.kt)("p",{parentName:"blockquote"},"If you have a Business edition, do the same with the Business repository."),(0,r.kt)("p",{parentName:"blockquote"},"You can find the address of these repositories on the ",(0,r.kt)("a",{parentName:"p",href:"https://support.centreon.com/hc/en-us/categories/10341239833105-Repositories"},"support portal"),".")),(0,r.kt)("h3",{id:"install-the-mariadb-repository"},"Install the MariaDB repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd /tmp\ncurl -JO https://downloads.mariadb.com/MariaDB/mariadb_repo_setup\nbash ./mariadb_repo_setup\nsed -ri 's/10\\.[0-9]+/10.5/' /etc/yum.repos.d/mariadb.repo\nrm -f ./mariadb_repo_setup\n")),(0,r.kt)("h3",{id:"upgrade-php"},"Upgrade PHP"),(0,r.kt)("p",null,"Centreon 23.04 uses PHP in version 8.1."),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"RHEL 8",label:"RHEL 8",mdxType:"TabItem"},(0,r.kt)("p",null,"You need to change the PHP stream from version 8.0 to 8.1 by executing the following commands and answering ",(0,r.kt)("strong",{parentName:"p"},"y"),"\nto confirm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf module reset php\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf module install php:remi-8.1\n"))),(0,r.kt)(o.Z,{value:"Alma / Oracle Linux 8",label:"Alma / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("p",null,"You need to change the PHP stream from version 8.0 to 8.1 by executing the following commands and answering ",(0,r.kt)("strong",{parentName:"p"},"y"),"\nto confirm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf module reset php\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf module install php:remi-8.1\n")))),(0,r.kt)("h3",{id:"upgrade-the-centreon-solution"},"Upgrade the Centreon solution"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Make sure all users are logged out from the Centreon web interface\nbefore starting the upgrade procedure.")),(0,r.kt)("p",null,"If you have installed Business extensions, update the Business repository to version 23.04.\nVisit the ",(0,r.kt)("a",{parentName:"p",href:"https://support.centreon.com/hc/en-us/categories/10341239833105-Repositories"},"support portal")," to get its address."),(0,r.kt)("p",null,"Stop the Centreon Broker process:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl stop cbd\n")),(0,r.kt)("p",null,"Delete existing retention files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"rm /var/lib/centreon-broker/* -f\n")),(0,r.kt)("p",null,"Clean the cache:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf clean all --enablerepo=*\n")),(0,r.kt)("p",null,"Then upgrade all the components with the following command:"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf update centreon\\* php-pecl-gnupg\n")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Accept new GPG keys from the repositories as needed.")),(0,r.kt)("h3",{id:"update-your-customized-apache-configuration"},"Update your customized Apache configuration"),(0,r.kt)("p",null,"This section only applies if you customized your Apache configuration."),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"RHEL / Oracle Linux 8",label:"RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("p",null,"When you upgrade your platform, the Apache configuration file is not upgraded automatically. The new configuration file brought by the rpm does not replace the old file. You must copy the changes manually to your customized configuration file."),(0,r.kt)("p",null,"Run a diff between the old and the new Apache configuration files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"diff -u /etc/httpd/conf.d/10-centreon.conf /etc/httpd/conf.d/10-centreon.conf.rpmnew\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"10-centreon.conf")," (post upgrade): this file contains the custom configuration. It does not contain anything new brought by the upgrade."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"10-centreon.conf.rpmnew")," (post upgrade): this file is provided by the rpm; it does not contain any custom configuration.")),(0,r.kt)("p",null,"For each difference between the files, assess whether you should copy it from ",(0,r.kt)("strong",{parentName:"p"},"10-centreon.conf.rpmnew")," to ",(0,r.kt)("strong",{parentName:"p"},"10-centreon.conf"),"."),(0,r.kt)("p",null,"Check that Apache is configured properly by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"apachectl configtest\n")),(0,r.kt)("p",null,"The expected result is the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Syntax OK\n")),(0,r.kt)("p",null,"Restart the Apache and PHP processes to take the new configuration into account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart php-fpm httpd\n")),(0,r.kt)("p",null,"Then check its status:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl status httpd\n")),(0,r.kt)("p",null,"If everything is ok, you should have:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'\u25cf httpd.service - The Apache HTTP Server\n   Loaded: loaded (/usr/lib/systemd/system/httpd.service; enabled; vendor preset: disabled)\n  Drop-In: /usr/lib/systemd/system/httpd.service.d\n           \u2514\u2500php-fpm.conf\n   Active: active (running) since Tue 2020-10-27 12:49:42 GMT; 2h 35min ago\n     Docs: man:httpd.service(8)\n Main PID: 1483 (httpd)\n   Status: "Total requests: 446; Idle/Busy workers 100/0;Requests/sec: 0.0479; Bytes served/sec: 443 B/sec"\n    Tasks: 278 (limit: 5032)\n   Memory: 39.6M\n   CGroup: /system.slice/httpd.service\n           \u251c\u25001483 /usr/sbin/httpd -DFOREGROUND\n           \u251c\u25001484 /usr/sbin/httpd -DFOREGROUND\n           \u251c\u25001485 /usr/sbin/httpd -DFOREGROUND\n           \u251c\u25001486 /usr/sbin/httpd -DFOREGROUND\n           \u251c\u25001487 /usr/sbin/httpd -DFOREGROUND\n           \u2514\u25001887 /usr/sbin/httpd -DFOREGROUND\n')))),(0,r.kt)("h4",{id:"customized-apache-configuration-enable-text-compression"},"Customized Apache configuration: enable text compression"),(0,r.kt)("p",null,"In order to improve page loading speed, you can activate text compression on the Apache server. It requires the ",(0,r.kt)("strong",{parentName:"p"},"brotli")," package to work. This is optional, but it provides a better user experience."),(0,r.kt)("p",null,"Add the following code to your Apache configuration file, in both the ",(0,r.kt)("inlineCode",{parentName:"p"},"<VirtualHost *:80>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<VirtualHost *:443>")," elements:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"<IfModule mod_brotli.c>\n    AddOutputFilterByType BROTLI_COMPRESS text/html text/plain text/xml text/css text/javascript application/javascript application/json\n</IfModule>\nAddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json\n")),(0,r.kt)("h3",{id:"finalizing-the-upgrade"},"Finalizing the upgrade"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("p",null,"Before starting the web upgrade process, reload the Apache server with the\nfollowing command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl reload httpd\n")))),(0,r.kt)("p",null,"Then log on to the Centreon web interface to continue the upgrade process:"),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"Next"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(81137).Z,width:"650",height:"300"})),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"Next"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(79778).Z,width:"650",height:"300"})),(0,r.kt)("p",null,"The release notes describe the main changes. Click ",(0,r.kt)("strong",{parentName:"p"},"Next"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(91003).Z,width:"650",height:"300"})),(0,r.kt)("p",null,"This process performs the various upgrades. Click ",(0,r.kt)("strong",{parentName:"p"},"Next"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(36221).Z,width:"650",height:"300"})),(0,r.kt)("p",null,"Your Centreon server is now up to date. Click ",(0,r.kt)("strong",{parentName:"p"},"Finish")," to access the login\npage:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(41978).Z,width:"650",height:"300"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"As the interface layout has changed in version 23.04, you need to clear your browser cache to display the new theme.")),(0,r.kt)("p",null,"If the Centreon BAM module is installed, refer to the\n",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/docs/service-mapping/upgrade"},"upgrade procedure"),"."),(0,r.kt)("h3",{id:"post-upgrade-actions"},"Post-upgrade actions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Upgrade extensions. From ",(0,r.kt)("strong",{parentName:"p"},"Administration > Extensions > Manager"),", upgrade all extensions, starting\nwith the following:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"License Manager,")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Monitoring Connector Manager,")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Auto Discovery."),(0,r.kt)("p",{parentName:"li"},"Then you can upgrade all other commercial extensions.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/docs/monitoring/monitoring-servers/deploying-a-configuration"},"Deploy the configuration"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Restart the processes:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart cbd centengine centreontrapd gorgoned\n")))),(0,r.kt)("h2",{id:"upgrade-the-remote-servers"},"Upgrade the Remote Servers"),(0,r.kt)("p",null,"This procedure is the same as for upgrading a Centreon Central server."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"At the end of the update, the configuration should be deployed from the Central server.")),(0,r.kt)("h2",{id:"upgrade-the-pollers"},"Upgrade the Pollers"),(0,r.kt)("h3",{id:"update-the-centreon-repository"},"Update the Centreon repository"),(0,r.kt)("p",null,"Run the following command:"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/23.04/el8/centreon-23.04.repo\n")))),(0,r.kt)("h3",{id:"upgrade-the-centreon-solution-1"},"Upgrade the Centreon solution"),(0,r.kt)("p",null,"Clean the cache:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf clean all --enablerepo=*\n")),(0,r.kt)("p",null,"Upgrade all the components with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf update centreon\\*\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Accept new GPG keys from the repositories as needed.")),(0,r.kt)("p",null,"Start and enable ",(0,r.kt)("strong",{parentName:"p"},"gorgoned"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl start gorgoned\nsystemctl enable gorgoned\n")),(0,r.kt)("p",null,"Restart ",(0,r.kt)("strong",{parentName:"p"},"centengine"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart centengine\n")))}k.isMDXComponent=!0},81137:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/web_update_1-229784d5ed7986045c49b65b99ce38cd.png"},79778:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/web_update_2-f12be23b17ba9e83853cbdbaaea65402.png"},91003:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/web_update_3-d505e49a3b4f60dfd887ff45ddbf006b.png"},36221:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/web_update_4-97901eb976096c68fb2bd9d37c4de9bc.png"},41978:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/web_update_5-01f8c54614c006d7c1bf9e03799c1b81.png"}}]);