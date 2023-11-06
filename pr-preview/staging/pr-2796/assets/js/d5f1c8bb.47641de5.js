"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[30064],{19101:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>p,metadata:()=>u,toc:()=>m});n(67294);var r=n(3905),a=n(51715),o=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={id:"applications-webservers-nginx-serverstatus",title:"Nginx Server"},c=void 0,u={unversionedId:"integrations/plugin-packs/procedures/applications-webservers-nginx-serverstatus",id:"integrations/plugin-packs/procedures/applications-webservers-nginx-serverstatus",title:"Nginx Server",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/applications-webservers-nginx-serverstatus.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-webservers-nginx-serverstatus",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/applications-webservers-nginx-serverstatus",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-webservers-nginx-serverstatus.md",tags:[],version:"current",frontMatter:{id:"applications-webservers-nginx-serverstatus",title:"Nginx Server"},sidebar:"pp",previous:{title:"Nginx Plus Restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/applications-nginx-plus-restapi"},next:{title:"Nmap CLI Discovery",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/applications-nmap-cli"}},d={},m=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector assets",id:"monitoring-connector-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Collected metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Host configuration",id:"host-configuration",level:3},{value:"How to test my Plugin and what do the main parameters stand for ?",id:"how-to-test-my-plugin-and-what-do-the-main-parameters-stand-for-",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"<code>UNKNOWN: Cannot load module &#39;Net::Curl::Easy&#39;</code>",id:"unknown-cannot-load-module-netcurleasy",level:4},{value:"<code>UNKNOWN: curl perform error : Couldn&#39;t connect to server</code>",id:"unknown-curl-perform-error--couldnt-connect-to-server",level:4}],g={toc:m},k="wrapper";function h(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)(k,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Nginx is an open-source Web Server also used as a proxy server for email (IMAP, POP3, and SMTP) and a reverse proxy and load balancer for HTTP, TCP, and UDP servers."),(0,r.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector assets"),(0,r.kt)("h3",{id:"monitored-objects"},"Monitored objects"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Nginx Server")),(0,r.kt)("h3",{id:"collected-metrics"},"Collected metrics"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Requests",label:"Requests",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"server.connections.accepted.persecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of accepted connections"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Connections/second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"server.connections.handled.persecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of handled connections"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Connections/second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"server.connections.dropped.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of dropped connections"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"server.requests.persecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of requests"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Requests/second"))))),(0,r.kt)(o.Z,{value:"Connections",label:"Connections",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"server.connections.active.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of active connections"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"server.connections.waiting.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of waiting connections"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"server.connections.writing.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of writing connections"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"server.connections.reading.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of reading connections"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Count")))))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Warning: The following procedure is an example. Cannot be applied on all context."),(0,r.kt)("p",null,"The module allows the generation of a live Nginx report, available on a dedicated web page. This report is used to generate statistics in Centreon.\nTo activate this module, you have to open your nginx configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ vi /etc/nginx/nginx.conf\n")),(0,r.kt)("p",null,"and check that if not already configured, add the followings lines in 'server'\nbracket:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"server { \n    ... \n    location /nginx_status { \n        stub_status on; \n        access_log off;\n        allow <centreon-poller_@IP>;\n        deny all; \n    }\n    ...\n}\n")),(0,r.kt)("p",null,"Make sure you are allowing Pollers to access this URL."),(0,r.kt)("p",null,"You can check the validity of your configuration using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ nginx -t nginx: the configuration file\n/etc/nginx/nginx.conf syntax is ok nginx: configuration file\n/etc/nginx/nginx.conf test is successful\n")),(0,r.kt)("p",null,"Nginx must be reloaded to take this modification into account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ /etc/init.d/nginx reload\n")),(0,r.kt)("p",null,"You can now check the result by accessing the URL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"http://<nginx_address>/nginx_status\n")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon Poller expected to monitor Nginx Servers:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Webservers-Nginx-Serverstatus\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,r.kt)("em",{parentName:"li"},"Nginx Server")," Monitoring Connector through ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page."))),(0,r.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon Poller expected to monitor Nginx Servers:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Webservers-Nginx-Serverstatus\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Install the Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-webservers-nginx-serverstatus\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,r.kt)("em",{parentName:"li"},"Nginx Server")," Monitoring Connector through ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page.")))),(0,r.kt)("h3",{id:"host-configuration"},"Host configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Log into Centreon and add a new Host through "Configuration > Hosts".'),(0,r.kt)("li",{parentName:"ul"},"Apply the ",(0,r.kt)("em",{parentName:"li"},"App-Webserver-Nginx-ServerStatus-custom")," template and configure all the mandatory Macros :")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NGINXPORT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Port used by Apache. Default is 80")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NGINXPROTOCOL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Protocol used. Default is http")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"NGINXSTATUSEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --verbose flag)")))),(0,r.kt)("p",null,"By default ",(0,r.kt)("inlineCode",{parentName:"p"},"NGINXSTATUSEXTRAOPTIONS")," contains : ",(0,r.kt)("inlineCode",{parentName:"p"},'--http-backend=curl --curl-opt="CURLOPT_SSL_VERIFYPEER => 0"')," options to use the ",(0,r.kt)("em",{parentName:"p"},"curl")," backend and to ignore the validity's check of the SSL certificate."),(0,r.kt)("h2",{id:"how-to-test-my-plugin-and-what-do-the-main-parameters-stand-for-"},"How to test my Plugin and what do the main parameters stand for ?"),(0,r.kt)("p",null,"Once the Plugin is installed, you can test it logging into the CLI with the centreon-engine user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'/usr/lib/centreon/plugins//centreon_nginx_serverstatus.pl \\\n    --plugin=apps::nginx::serverstatus::plugin \\\n    --mode=requests \\\n    --hostname=10.30.2.11 \\\n    --proto=https \\\n    --port=443 \\\n    --warning-connections-dropped=10 \\\n    --critical-connections-dropped=20 \\\n    --http-backend=curl \\\n    --curl-opt="CURLOPT_SSL_VERIFYPEER => 0" \\\n    --verbose   \n\n')),(0,r.kt)("p",null,"The above command checks requests statistics on the Nginx server (",(0,r.kt)("inlineCode",{parentName:"p"},"--mode=requests"),"). Mandatory options are the IP/FQDN of the device"),(0,r.kt)("p",null,"(",(0,r.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.11"),"), the port used by Apache (",(0,r.kt)("inlineCode",{parentName:"p"},"--port=443"),") and the protocol (",(0,r.kt)("inlineCode",{parentName:"p"},"--proto=https"),")."),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"curl")," backend is used (",(0,r.kt)("inlineCode",{parentName:"p"},"--http-backend='curl'"),") and the SSL certificate validity is not checked (",(0,r.kt)("inlineCode",{parentName:"p"},'--curl-opt="CURLOPT_SSL_VERIFYPEER => 0"'),")."),(0,r.kt)("p",null,"This command would trigger a WARNING alarm if the number of dropped connections on the server is greater than 10 (",(0,r.kt)("inlineCode",{parentName:"p"},"--warning-connections-dropped=10"),") and "),(0,r.kt)("p",null,"a CRITICAL alarm if the number of dropped connections on the server is greater than 20 (",(0,r.kt)("inlineCode",{parentName:"p"},"--critical-connections-dropped=20"),")."),(0,r.kt)("p",null,"Expected command output is shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OK: connections accepted: 0.36/s - connections handled: 0.36/s - connections dropped: 0 - requests: 13.00/s | 'server.connections.accepted.persecond'=0.36;;;0; 'server.connections.handled.persecond'=0.36;;;0; 'server.connections.dropped.count'=0;0:0;0:20;0; 'server.requests.persecond'=13.00;;;0;\n")),(0,r.kt)("p",null,"Some thresholds can also be set on metrics with options ",(0,r.kt)("inlineCode",{parentName:"p"},"--warning-*")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--critical-*"),"."),(0,r.kt)("p",null,"All available options for a given mode can be displayed by adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_nginx_serverstatus.pl \\\n    --plugin=apps::nginx::serverstatus::plugin \\\n    --mode=requests \\\n    --help\n")),(0,r.kt)("p",null,"All Plugin modes can be listed with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"usr/lib/centreon/plugins//centreon_nginx_serverstatus.pl \\\n    --plugin=apps::nginx::serverstatus::plugin \\\n    --list-mode \n")),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h4",{id:"unknown-cannot-load-module-netcurleasy"},(0,r.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: Cannot load module 'Net::Curl::Easy'")),(0,r.kt)("p",null,"This error message means that a Perl library required to use the ",(0,r.kt)("em",{parentName:"p"},"curl")," backend is missing."),(0,r.kt)("p",null,"In order to fix this issue, install the Net::Curl::Easy Perl library using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install perl-Net-Curl\n")),(0,r.kt)("h4",{id:"unknown-curl-perform-error--couldnt-connect-to-server"},(0,r.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: curl perform error : Couldn't connect to server")),(0,r.kt)("p",null,"This error message means that the Centreon Plugin couldn't successfully connect to the URL of the Nginx Server.\nCheck that no third party device (such as a firewall) is blocking the request.\nA proxy connection may also be necessary to connect to the server. This can be done by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--proxyurl")," option in the command."))}h.isMDXComponent=!0}}]);