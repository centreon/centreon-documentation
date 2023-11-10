"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[62450],{20901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>m,toc:()=>d});n(67294);var r=n(3905),a=n(51715),o=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"offline",title:"Offline installation"},c=void 0,m={unversionedId:"installation/offline",id:"version-23.10/installation/offline",title:"Offline installation",description:"To be able to install Centreon on servers with no internet access, create a local copy of the Centreon repository on a server that has an internet access, and then make your offline Centreon servers point to it.",source:"@site/versioned_docs/version-23.10/installation/offline.md",sourceDirName:"installation",slug:"/installation/offline",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/installation/offline",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/installation/offline.md",tags:[],version:"23.10",lastUpdatedAt:1699630797,formattedLastUpdatedAt:"Nov 10, 2023",frontMatter:{id:"offline",title:"Offline installation"},sidebar:"version-23.10/docs",previous:{title:"Advanced configuration",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/monitoring-servers/advanced-configuration"},next:{title:"Secure your platform",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/administration/secure-platform"}},u={},d=[{value:"Creating a local copy of the Centreon repository",id:"creating-a-local-copy-of-the-centreon-repository",level:2},{value:"Keeping your local repository up to date",id:"keeping-your-local-repository-up-to-date",level:2}],g={toc:d},k="wrapper";function f(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)(k,p(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To be able to install Centreon on servers with no internet access, create a local copy of the Centreon repository on a server that has an internet access, and then make your offline Centreon servers point to it."),(0,r.kt)("h2",{id:"creating-a-local-copy-of-the-centreon-repository"},"Creating a local copy of the Centreon repository"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the repository on your mirror server.")),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/23.04/el8/centreon-23.04.repo\ndnf clean all --enablerepo=*\ndnf update\n")),(0,r.kt)("p",null,"Then retrieve the gpg key for the packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"rpm --import https://yum-gpg.centreon.com/RPM-GPG-KEY-CES\n"))),(0,r.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/23.04/el9/centreon-23.04.repo\ndnf clean all --enablerepo=*\ndnf update\n")),(0,r.kt)("p",null,"Then retrieve the gpg key for the packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"rpm --import https://yum-gpg.centreon.com/RPM-GPG-KEY-CES\n"))),(0,r.kt)(o.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,r.kt)("p",null,"To install the Centreon repository, execute the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'echo "deb https://packages.centreon.com/apt-standard-23.04-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon.list\necho "deb https://packages.centreon.com/apt-plugins-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon-plugins.list\n')),(0,r.kt)("p",null,"Then import the repository key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1\napt update\n")))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a directory for the local repository:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p /var/www/html/repos/centreon\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the required packages:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yum install yum-utils createrepo httpd\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Synchronize the repositories:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"reposync -p /var/www/html/repos/centreon/ -r centreon-stable-noarch\nreposync -p /var/www/html/repos/centreon/ -r centreon-stable\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the repository:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"createrepo /var/www/html/repos/centreon/\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start the web server:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"service httpd start\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On your Centreon server, edit the following file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vi /etc/yum.repos.d/centreon.repo\n")),(0,r.kt)("p",{parentName:"li"},"Add the following lines:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"[centreon]\nname=centreon\nbaseurl=http://<mirror_ip_address>/repos/centreon\ngpgcheck=1\nenabled=1\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<mirror_ip_address>")," with the actual address of your local repository.")))),(0,r.kt)("h2",{id:"keeping-your-local-repository-up-to-date"},"Keeping your local repository up to date"),(0,r.kt)("p",null,"To synchronize your mirror with the Centreon repository regularly, create a cron file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd  /var/spool/cron\ncrontab -e\n")),(0,r.kt)("p",null,"The following commands will schedule a synchronization every day at 2 for the ",(0,r.kt)("strong",{parentName:"p"},"centreon-stable-noarch")," repository, and every day at 3 for the ",(0,r.kt)("strong",{parentName:"p"},"centreon-stable")," repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"* 2 * * * reposync -p /var/www/html/repos/centreon/ -r centreon-stable-noarch\n* 3 * * * reposync -p /var/www/html/repos/centreon/ -r centreon-stable\n")))}f.isMDXComponent=!0}}]);