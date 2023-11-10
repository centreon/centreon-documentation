"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[37306],{79262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>u});n(67294);var r=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={id:"applications-databases-informix",title:"Informix DB"},p=void 0,s={unversionedId:"integrations/plugin-packs/procedures/applications-databases-informix",id:"integrations/plugin-packs/procedures/applications-databases-informix",title:"Informix DB",description:"Prerequisites",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-databases-informix.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-databases-informix",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/applications-databases-informix",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-databases-informix.md",tags:[],version:"current",frontMatter:{id:"applications-databases-informix",title:"Informix DB"},sidebar:"pp",previous:{title:"InfluxDB",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/applications-databases-influxdb"},next:{title:"Informix DB SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/applications-databases-informix-snmp"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon Plugin",id:"centreon-plugin",level:3},{value:"Informix Client SDK:",id:"informix-client-sdk",level:2},{value:"Perl DBD Informix",id:"perl-dbd-informix",level:3},{value:"user account",id:"user-account",level:3},{value:"Centreon Configuration",id:"centreon-configuration",level:2},{value:"Create a new Informix server",id:"create-a-new-informix-server",level:3}],m={toc:u},d="wrapper";function f(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(d,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"centreon-plugin"},"Centreon Plugin"),(0,r.kt)("p",null,"Install this plugin on each needed poller:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yum install centreon-plugin-Applications-Databases-Informix\n")),(0,r.kt)("h2",{id:"informix-client-sdk"},"Informix Client SDK:"),(0,r.kt)("p",null,'Go to download "Informix Client Software Development Kit for Linux x86',"_",'64,\n64-bit" (clientsdk.3.50.FC9.LINUX.tar) on IBM website.'),(0,r.kt)("p",null,"Install with the following procedure::"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy archive on the poller")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create an user informix"),(0,r.kt)("p",{parentName:"li"},"useradd informix chmod 775 /home/informix")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Need to install Sun JRE 1.6.x")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install SDK (choose Typical Installation)::"),(0,r.kt)("p",{parentName:"li"},"./installclientsdk -javahome /usr/java/jre1.6.0","_","45/ .... Please specify a\ndirectory or press Enter to accept the default directory. Directory Name:\n","[","/root/informix/sdkclient/","]"," /home/informix/sdkclient"))),(0,r.kt)("h3",{id:"perl-dbd-informix"},"Perl DBD Informix"),(0,r.kt)("p",null,"To compile DBD Informix, you need an access to an Informix Database, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# cd /usr/local/src \n# wget http://search.cpan.org/CPAN/authors/id/J/JO/JOHNL/DBD-Informix-2013.0521.tar.gz\n# tar xzf DBD-Informix-2013.0521.tar.gz \n# cd DBD-Informix-2013.0521 \n# export INFORMIXDIR=/home/informix/sdkclient \n# export LD\\_LIBRARY\\_PATH=$ORACLE\\_HOME/lib  \n# export PATH=${PATH}:/home/informix/sdkclient/bin\n# export LD\\_LIBRARY\\_PATH=/home/informix/sdkclient/lib/esql/:/home/informix/sdkclient/lib/\n# export DBD\\_INFORMIX\\_USERNAME=root \n# export DBD\\_INFORMIX\\_PASSWORD=xxxx # export DBD\\_INFORMIX\\_DATABASE=xxxx\n")),(0,r.kt)("p",null,'Set Informix Instance in "/home/informix/sdkclient/etc/sqlhosts" file:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"INSTANCE onsoctcp IP PORT\n")),(0,r.kt)("p",null,"Compile the library:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ perl Makefile.PL $ make\n")),(0,r.kt)("p",null,"Then install it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ make install\n")),(0,r.kt)("p",null,"Then create the file : /etc/ld.so.conf.d/informix.conf and link to the Informix\nLibrary:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ touch /etc/ld.so.conf.d/informix.conf vi /etc/ld.so.conf.d/informix.conf\n")),(0,r.kt)("p",null,"You just have to enter in the file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/home/informix/sdkclient/lib/esql/ /home/informix/sdkclient/lib/\n")),(0,r.kt)("p",null,"Then:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/sbin/ldconfig\n")),(0,r.kt)("h3",{id:"user-account"},"user account"),(0,r.kt)("p",null,"The safest way to retrieve information from the Oracle server is to create a\ndedicated user for Centreon."),(0,r.kt)("p",null,'This user account must have the read permission on "sysmaster" database.'),(0,r.kt)("h2",{id:"centreon-configuration"},"Centreon Configuration"),(0,r.kt)("h3",{id:"create-a-new-informix-server"},"Create a new Informix server"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("em",{parentName:"p"},"Configuration ",">"," Hosts")," and click ",(0,r.kt)("em",{parentName:"p"},"Add"),". Then, fill the form as shown by\nthe following table:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Host name"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Name of the host"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Alias"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Host description"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"IP"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Host IP Address"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Monitored from"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Monitoring Poller to use"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Host Multiple Templates"),(0,r.kt)("td",{parentName:"tr",align:"left"},"App-DB-Informix-custom")))),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("em",{parentName:"p"},"Save")," button."))}f.isMDXComponent=!0}}]);