"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[50940],{38977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>m,toc:()=>c});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={id:"applications-monitoring-openmetrics",title:"OpenMetrics"},o=void 0,m={unversionedId:"integrations/plugin-packs/procedures/applications-monitoring-openmetrics",id:"integrations/plugin-packs/procedures/applications-monitoring-openmetrics",title:"OpenMetrics",description:"Prerequisites",source:"@site/pp/integrations/plugin-packs/procedures/applications-monitoring-openmetrics.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-monitoring-openmetrics",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/applications-monitoring-openmetrics",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-monitoring-openmetrics.md",tags:[],version:"current",frontMatter:{id:"applications-monitoring-openmetrics",title:"OpenMetrics"},sidebar:"pp",previous:{title:"OpenLDAP",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/applications-openldap-ldap"},next:{title:"OpenVPN OMI",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/applications-openvpn-omi"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon Plugin",id:"centreon-plugin",level:3},{value:"Centreon Configuration",id:"centreon-configuration",level:2},{value:"Create a host using the appropriate template",id:"create-a-host-using-the-appropriate-template",level:3},{value:"Checking using a web page",id:"checking-using-a-web-page",level:4},{value:"Checking using a remote file",id:"checking-using-a-remote-file",level:4},{value:"Set the service macros",id:"set-the-service-macros",level:3},{value:"Duplicate service to monitor more metrics",id:"duplicate-service-to-monitor-more-metrics",level:3}],d={toc:c},k="wrapper";function u(e){var{components:t}=e,n=p(e,["components"]);return(0,a.kt)(k,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"centreon-plugin"},"Centreon Plugin"),(0,a.kt)("p",null,"Install this plugin on each needed poller:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yum install centreon-plugin-Applications-Monitoring-Openmetrics\n")),(0,a.kt)("h2",{id:"centreon-configuration"},"Centreon Configuration"),(0,a.kt)("h3",{id:"create-a-host-using-the-appropriate-template"},"Create a host using the appropriate template"),(0,a.kt)("h4",{id:"checking-using-a-web-page"},"Checking using a web page"),(0,a.kt)("p",null,"Go to ",(0,a.kt)("em",{parentName:"p"},"Configuration ",">"," Hosts")," and click ",(0,a.kt)("em",{parentName:"p"},"Add"),". Then, fill the form as shown by\nthe following table:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Name of the host"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Alias"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Description"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"IP Address / DNS"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Can be localhost"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Monitored from"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Poller used to monitor"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Templates"),(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Openmetrics-Web")))),(0,a.kt)("p",null,"The following host macros should be set as shown:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"OPENMETRICSPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"OpenMetrics web page port"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"OPENMETRICSPROTO"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"OpenMetrics web page protocol"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"OPENMETRICSURLPATH"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"OpenMetrics web page url path"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"OPENMETRICSUSERNAME"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"OpenMetrics web page username (if needed)"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"OPENMETRICSPASSWORD"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"OpenMetrics web page password(if needed)"))))),(0,a.kt)("p",null,"Check the ",(0,a.kt)("em",{parentName:"p"},"Create Services linked to the Template too")," box and click on the\n",(0,a.kt)("em",{parentName:"p"},"Save")," button."),(0,a.kt)("p",null,"The following service will be created:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Scrape-Metrics")),(0,a.kt)("h4",{id:"checking-using-a-remote-file"},"Checking using a remote file"),(0,a.kt)("p",null,"Go to ",(0,a.kt)("em",{parentName:"p"},"Configuration ",">"," Hosts")," and click ",(0,a.kt)("em",{parentName:"p"},"Add"),". Then, fill the form as shown by\nthe following table:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Name of the host"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Alias"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Description"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"IP Address / DNS"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Can be localhost"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Monitored from"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Poller used to monitor"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Templates"),(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Openmetrics-File")))),(0,a.kt)("p",null,"The following host macros should be set as shown:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"OPENMETRICSFILEPATH"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"OpenMetrics file path on remote host"))))),(0,a.kt)("p",null,"Check the ",(0,a.kt)("em",{parentName:"p"},"Create Services linked to the Template too")," box and click on the\n",(0,a.kt)("em",{parentName:"p"},"Save")," button."),(0,a.kt)("p",null,"The following service will be created:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Scrape-Metrics")),(0,a.kt)("h3",{id:"set-the-service-macros"},"Set the service macros"),(0,a.kt)("p",null,"The following service macros should be set as shown:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"FILTERMETRICS"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Name of the metrics to filter on"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"WARNING"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Warning threshold"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"CRITICAL"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Critical threshold"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"INSTANCE"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Label from dimensions to get the instance value from"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"FILTERINSTANCE"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Filter on some instance"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"SUBINSTANCE"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Set the label from dimensions to get the subinstance value from"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"FILTERSUBINSTANCE"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Filter on some subinstance"))))),(0,a.kt)("p",null,"Examples on command line:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"# perl centreon_plugins.pl --plugin=apps::monitoring::openmetrics::plugin\n--mode=scrape-metrics --custommode=web --hostname=10.2.3.4 --port=9100 --verbose\n--filter-metrics='node_network_up' --critical='0:0' --instance='device'\n--new-perfdata")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"# perl centreon_plugins.pl --plugin=apps::monitoring::openmetrics::plugin\n--mode=scrape-metrics --custommode=web --hostname=10.2.3.4 --port=9100 --verbose\n--filter-metrics='node_cpu_seconds_total' --instance='cpu' --subinstance='mode'\n--filter-subinstance='idle'")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"# perl centreon_plugins.pl --plugin=apps::monitoring::openmetrics::plugin\n--mode=scrape-metrics --custommode=file --command-options='/tmp/metrics'\n--filter-metrics='cpu' --verbose")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"# perl centreon_plugins.pl --plugin=apps::monitoring::openmetrics::plugin\n--mode=scrape-metrics --custommode=file --hostname=10.2.3.4\n--ssh-option='-l=centreon-engine' --ssh-option='-p=52'\n--command-options='/my/app/path/metrics' --verbose")),(0,a.kt)("h3",{id:"duplicate-service-to-monitor-more-metrics"},"Duplicate service to monitor more metrics"),(0,a.kt)("p",null,"You can now duplicate the service to monitor several metrics."))}u.isMDXComponent=!0}}]);