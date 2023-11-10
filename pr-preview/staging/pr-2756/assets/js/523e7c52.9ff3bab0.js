"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[87277],{27593:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>g,frontMatter:()=>p,metadata:()=>c,toc:()=>k});n(67294);var a=n(3905),r=n(51715),l=n(7626);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"map-web-troubleshooting",title:"MAP troubleshooting"},u=void 0,c={unversionedId:"graph-views/map-web-troubleshooting",id:"version-23.10/graph-views/map-web-troubleshooting",title:"MAP troubleshooting",description:"This chapter shows some guidelines on how to troubleshoot your MAP installation.",source:"@site/versioned_docs/version-23.10/graph-views/map-web-troubleshooting.md",sourceDirName:"graph-views",slug:"/graph-views/map-web-troubleshooting",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/graph-views/map-web-troubleshooting",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/graph-views/map-web-troubleshooting.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"Nov 10, 2023",frontMatter:{id:"map-web-troubleshooting",title:"MAP troubleshooting"},sidebar:"version-23.10/docs",previous:{title:"MAP known issues",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/graph-views/map-web-known-issues"},next:{title:"Introduction to Centreon MAP (Legacy)",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/graph-views/introduction"}},m={},k=[{value:"MAP configuration is not working in HTTPS",id:"map-configuration-is-not-working-in-https",level:2},{value:"Symptom",id:"symptom",level:3},{value:"Problem",id:"problem",level:3},{value:"Solution",id:"solution",level:3},{value:"Make sure you installed the correct RPMs",id:"make-sure-you-installed-the-correct-rpms",level:2},{value:"Increase the logs level",id:"increase-the-logs-level",level:2},{value:"Run our diagnostic tool",id:"run-our-diagnostic-tool",level:2},{value:"Debug problems with the web interface",id:"debug-problems-with-the-web-interface",level:2},{value:"Still stuck?",id:"still-stuck",level:2},{value:"Output of diagnostic.sh",id:"output-of-diagnosticsh",level:3},{value:"Screenshots from the web interface",id:"screenshots-from-the-web-interface",level:3},{value:"Output of <code>yum list</code> command",id:"output-of-yum-list-command",level:3}],h={toc:k},d="wrapper";function g(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(d,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This chapter shows some guidelines on how to troubleshoot your MAP installation."),(0,a.kt)("h2",{id:"map-configuration-is-not-working-in-https"},"MAP configuration is not working in HTTPS"),(0,a.kt)("h3",{id:"symptom"},"Symptom"),(0,a.kt)("p",null,"The MAP configuration is not working. This issue occurs when the MAP module is installed on the Centreon central server while the MAP platform is secured in HTTPS."),(0,a.kt)("h3",{id:"problem"},"Problem"),(0,a.kt)("p",null,"The MAP configuration is not set in TLS."),(0,a.kt)("h3",{id:"solution"},"Solution"),(0,a.kt)("p",null,"If you are using IPv6, you need to force the MAP server to use IPv4. "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to the ",(0,a.kt)("strong",{parentName:"p"},"/etc/centreon-map/centreon-map.conf")," file.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Edit the file by adding the following option:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'RUN_ARGS="--spring.profiles.active=prod,tls"\nJAVA_OPTS="-Djava.net.preferIPv4Stack=true -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/var/log/centreon-map -Dcentreon-map.signing-key=8uT4BM1RsXRmIPQbTEazUAhQHtyM7xZ4nlFMIUqQ7lRkbWz24yemkGs9tS4eOwDfF -Dcentreon-map.access-token-validity-seconds=15552000 -Xms512m -Xmx4G"\n')))),(0,a.kt)("h2",{id:"make-sure-you-installed-the-correct-rpms"},"Make sure you installed the correct RPMs"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the following command:"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dnf info centreon-map-web-client\ndnf info centreon-map-server-engine\n"))),(0,a.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dnf info centreon-map-web-client\ndnf info centreon-map-server-engine\n"))),(0,a.kt)(l.Z,{value:"Debian",label:"Debian",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"apt info centreon-map-web-client\napt info centreon-map-engine\n"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the output, ",(0,a.kt)("strong",{parentName:"p"},"Repository")," should read ",(0,a.kt)("strong",{parentName:"p"},"centreon-stable-noarch"),". If this is not the case, you do not have the correct packages installed. Do the following :"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo dnf install centreon-map-web-client\n"))),(0,a.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo dnf install centreon-map-web-client\n"))),(0,a.kt)(l.Z,{value:"Debian",label:"Debian",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install centreon-map-web-client\n")))))),(0,a.kt)("h2",{id:"increase-the-logs-level"},"Increase the logs level"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To increase the logs level, edit the ",(0,a.kt)("strong",{parentName:"p"},"/etc/centreon-map/map-log.xml")," file by changing the following entries to INFO:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'<logger name="com.centreon.studio" level="INFO" />\n<logger name="org.springframework" level="INFO" />\n<logger name="org.springframework.web" level="INFO" />\n<logger name="org.apache" level="INFO" />\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Restart your ",(0,a.kt)("strong",{parentName:"p"},"centreon-map-engine")," server:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart centreon-map-engine\n")))),(0,a.kt)("h2",{id:"run-our-diagnostic-tool"},"Run our diagnostic tool"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the following script:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd /etc/centreon-map\n./diagnostic.sh\n")),(0,a.kt)("p",{parentName:"li"},"All entries should be set to ",(0,a.kt)("strong",{parentName:"p"},"OK")," or ",(0,a.kt)("strong",{parentName:"p"},"INFO"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Try to solve any errors using the guidelines below."))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you still have an error, send us the complete output of the script (see the ",(0,a.kt)("a",{parentName:"p",href:"#still-stuck"},"Still stuck?")," section).")),(0,a.kt)("p",null,"Here are the main errors that you can encounter:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Database connection or authentication: if any of these are not OK, check your credentials, network, and mysql users."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"########## Database connection ##########\n\n[ok]   Connection to centreon\n[ok]   Connection to centreon_storage\n[ok]   Connection to centreon_map\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Connection to broker output: if this is not OK, check broker output configuration, network, and TLS configuration (if used)."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"########## Broker connection ##########\n\n[ok]   Connection to 127.0.0.1 5758 port\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Connection or authentication from MAP NG to central server:  if this is not OK, check your credentials, network, proxies, and TLS configuration (if used)."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"########## Authentication ##########\n\n[ok]   Centreon Central authentication using user admin\n")))),(0,a.kt)("h2",{id:"debug-problems-with-the-web-interface"},"Debug problems with the web interface"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make sure the URL specified in ",(0,a.kt)("strong",{parentName:"p"},"Administration > Extensions > MAP > Options")," is reachable (both reachable and resolvable) from the computer accessing the web interface.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Check the status of MAP by opening the following URL in the browser (use the same values for ",(0,a.kt)("strong",{parentName:"p"},"MAP_IP_ADDRESS")," and ",(0,a.kt)("strong",{parentName:"p"},"MAP_PORT")," as the ones defined in ",(0,a.kt)("strong",{parentName:"p"},"Administration > Extensions > MAP > Options"),")."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"http://[MAP_IP_ADDRESS]:[MAP_PORT]/centreon-map/api/actuator/health\n")),(0,a.kt)("p",{parentName:"li"},"Example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"http://10.0.0.2:8081/centreon-map/api/actuator/health\n")),(0,a.kt)("p",{parentName:"li"},"The result should be as follows:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'{\n  "status": "UP"\n}\n')),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"If not, send us a screenshot of the error (see the ",(0,a.kt)("a",{parentName:"p",href:"#still-stuck"},"Still stuck?")," section).")))),(0,a.kt)("h2",{id:"still-stuck"},"Still stuck?"),(0,a.kt)("p",null,"If you still need help, please contact the ",(0,a.kt)("a",{parentName:"p",href:"https://support.centreon.com/"},"Centreon support team")," with the basic information about how Centreon MAP is installed."),(0,a.kt)("p",null,"Here is an example for a standard installation:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"Central"),(0,a.kt)("th",{parentName:"tr",align:null},"MAP"),(0,a.kt)("th",{parentName:"tr",align:null},"MAP (Legacy)"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Is there a direct connection between this element and the central (are they on the same network?)"),(0,a.kt)("td",{parentName:"tr",align:null},"n/a"),(0,a.kt)("td",{parentName:"tr",align:null},"Y"),(0,a.kt)("td",{parentName:"tr",align:null},"Y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Is this element installed on the same server as the central?"),(0,a.kt)("td",{parentName:"tr",align:null},"n/a"),(0,a.kt)("td",{parentName:"tr",align:null},"Y"),(0,a.kt)("td",{parentName:"tr",align:null},"N")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Is HTTPS enabled?"),(0,a.kt)("td",{parentName:"tr",align:null},"Y"),(0,a.kt)("td",{parentName:"tr",align:null},"Y"),(0,a.kt)("td",{parentName:"tr",align:null},"Y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Is it a new installation?"),(0,a.kt)("td",{parentName:"tr",align:null},"N"),(0,a.kt)("td",{parentName:"tr",align:null},"Y"),(0,a.kt)("td",{parentName:"tr",align:null},"N")))),(0,a.kt)("h3",{id:"output-of-diagnosticsh"},"Output of diagnostic.sh"),(0,a.kt)("p",null,"See above ",(0,a.kt)("a",{parentName:"p",href:"#run-our-diagnostic-tool"},"Run our diagnostic tool")," and send us the complete output of the script."),(0,a.kt)("p",null,"Provide the following log files (default paths):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Centreon MAP server:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"/var/log/centreon-map/centreon-map-engine.log\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Centreon Central server:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"/var/log/php-fpm/centreon-error.log\n")))),(0,a.kt)("h3",{id:"screenshots-from-the-web-interface"},"Screenshots from the web interface"),(0,a.kt)("p",null,"If you encounter issues on the web interface, please provide us with screenshots of the interface with the error, with the browser Dev tool opened on the following tabs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Network tab (F12 key), if possible filtered on failing requests."),(0,a.kt)("li",{parentName:"ul"},"Console tab (F12 key), if possible filtered on errors.")),(0,a.kt)("h3",{id:"output-of-yum-list-command"},"Output of ",(0,a.kt)("inlineCode",{parentName:"h3"},"yum list")," command"),(0,a.kt)("p",null,"Run the following commands and send us their output:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"On the central:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yum list centreon-map-web-client --showduplicates -q\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"On the server where ",(0,a.kt)("strong",{parentName:"p"},"centreon-map-engine")," is installed:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yum list centreon-map-engine --showduplicates -q\n")))))}g.isMDXComponent=!0}}]);