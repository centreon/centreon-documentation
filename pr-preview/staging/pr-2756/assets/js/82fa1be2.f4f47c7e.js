"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[68408],{11791:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>p,metadata:()=>u,toc:()=>m});n(67294);var r=n(3905),a=n(51715),o=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={id:"introduction",title:"Introduction"},c=void 0,u={unversionedId:"installation/introduction",id:"version-23.10/installation/introduction",title:"Introduction",description:"This chapter describes how to install your Centreon monitoring platform.",source:"@site/versioned_docs/version-23.10/installation/introduction.md",sourceDirName:"installation",slug:"/installation/introduction",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/installation/introduction",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/installation/introduction.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"Nov 10, 2023",frontMatter:{id:"introduction",title:"Introduction"},sidebar:"version-23.10/docs",previous:{title:"Analyze resources availability",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/getting-started/analyze-resources-availability"},next:{title:"Compatibility",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/installation/compatibility"}},d={},m=[{value:"Unattended script",id:"unattended-script",level:2}],g={toc:m},y="wrapper";function b(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)(y,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This chapter describes how to install your Centreon monitoring platform."),(0,r.kt)("p",null,"The monitoring platform can be installed in several ways. However, ",(0,r.kt)("strong",{parentName:"p"},"we strongly\nrecommend using Centreon repositories (packages) to install your\nplatform"),". Enjoy our industrialization work during installation and update steps\nof the environment. Also enjoy optimizations installed by default on the system."),(0,r.kt)("p",null,"Centreon can be installed from sources (tar.gz) but the work is more\ncomplex. In addition, the installation will only be supported by the community."),(0,r.kt)("p",null,"Before installing Centreon:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Check the ",(0,r.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2756/docs/installation/compatibility"},"compatibility")," (supported OSs, DBMS)."),(0,r.kt)("li",{parentName:"ol"},"Choose ",(0,r.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2756/docs/installation/architectures"},"the type of architecture")," that best suits your needs."),(0,r.kt)("li",{parentName:"ol"},"Check the ",(0,r.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2756/docs/installation/prerequisites"},"prerequisites")," (CPU resources, memory, disks, partitioning, etc...)."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://download.centreon.com/"},"Download Centreon"),"."),(0,r.kt)("li",{parentName:"ol"},"Finally, you can install the platform.")),(0,r.kt)("h2",{id:"unattended-script"},"Unattended script"),(0,r.kt)("p",null,"To quickly test Centreon and install a central server on AlmaLinux/Oracle Linux/RHEL 8 or 9, you\ncan use a script."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Update your system:")),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"RHEL 8",label:"RHEL 8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf update\nsubscription-manager register --username my_username --password my_password --auto-attach --force\nsubscription-manager repos --enable codeready-builder-for-rhel-8-x86_64-rpms\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Replace ",(0,r.kt)("strong",{parentName:"p"},"my_username")," and ",(0,r.kt)("strong",{parentName:"p"},"my_password")," with the credentials of your RedHat account."))),(0,r.kt)(o.Z,{value:"Alma / Oracle Linux 8",label:"Alma / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf update\n"))),(0,r.kt)(o.Z,{value:"RHEL 9",label:"RHEL 9",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf update\nsubscription-manager register --username my_username --password my_password --auto-attach --force\nsubscription-manager repos --enable codeready-builder-for-rhel-9-x86_64-rpms\n"))),(0,r.kt)(o.Z,{value:"Alma / Oracle Linux 9",label:"Alma / Oracle Linux 9",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf update\n")))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following command as ",(0,r.kt)("strong",{parentName:"p"},"root"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-Bash"},"curl -L https://raw.githubusercontent.com/centreon/centreon/23.04.x/centreon/unattended.sh | sh\n")),(0,r.kt)("p",{parentName:"li"},"The script will install a central server using version 23.04, from the stable repository, with minimal output on your terminal."),(0,r.kt)("p",{parentName:"li"},"In case of problems when running the script, execute it again using the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'sh -x unattended.sh install -t central -v 22.10 -r stable -l DEBUG  2>&1 |tee -a /tmp/unattended-$(date +"%m-%d-%Y-%H%M%S").log\n')),(0,r.kt)("p",{parentName:"li"},"You will get a full log file with all errors in your tmp folder, named unattended(date).log.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once the script has run, all you have to do is to carry out the ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/docs/installation/web-and-post-installation"},"web installation steps"),"."))))}b.isMDXComponent=!0}}]);