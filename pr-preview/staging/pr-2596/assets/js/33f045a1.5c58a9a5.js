"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[66208],{83274:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});n(67294);var o=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={id:"integrating-pollers",title:"Integrating new pollers in a manual Centreon-HA cluster"},s=void 0,c={unversionedId:"installation/installation-of-centreon-ha-manual/integrating-pollers",id:"version-23.10/installation/installation-of-centreon-ha-manual/integrating-pollers",title:"Integrating new pollers in a manual Centreon-HA cluster",description:"Obtaining central nodes' thumbprints",source:"@site/versioned_docs/version-23.10/installation/installation-of-centreon-ha-manual/integrating-pollers.md",sourceDirName:"installation/installation-of-centreon-ha-manual",slug:"/installation/installation-of-centreon-ha-manual/integrating-pollers",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/docs/installation/installation-of-centreon-ha-manual/integrating-pollers",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/installation/installation-of-centreon-ha-manual/integrating-pollers.md",tags:[],version:"23.10",lastUpdatedAt:1699359701,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{id:"integrating-pollers",title:"Integrating new pollers in a manual Centreon-HA cluster"},sidebar:"version-23.10/docs",previous:{title:"4-node manual failover installation",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/docs/installation/installation-of-centreon-ha-manual/centreon-ha-4-nodes-installation-manual-failover"},next:{title:"Cluster acceptance guide",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/docs/administration/centreon-ha/acceptance-guide"}},p={},u=[{value:"Obtaining central nodes&#39; thumbprints",id:"obtaining-central-nodes-thumbprints",level:2},{value:"Adding the Poller to the configuration",id:"adding-the-poller-to-the-configuration",level:2},{value:"Configuring Gorgone on the poller",id:"configuring-gorgone-on-the-poller",level:2}],g={toc:u},d="wrapper";function m(e){var{components:t}=e,n=i(e,["components"]);return(0,o.kt)(d,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"obtaining-central-nodes-thumbprints"},"Obtaining central nodes' thumbprints"),(0,o.kt)("p",null,"The Gorgone services of both central nodes will need to be authorized by the pollers' Gorgone services. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First, obtain each central node's key:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget -O /root/gorgone_key_thumbprint.pl  https://raw.githubusercontent.com/centreon/centreon-gorgone/master/contrib/gorgone_key_thumbprint.pl\nperl /root/gorgone_key_thumbprint.pl --key-path /var/lib/centreon-gorgone/.keys/rsakey.priv.pem\n")),(0,o.kt)("p",null,"The command output should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"2020-09-25 10:47:35 - INFO - File '/var/lib/centreon-gorgone/.keys/rsakey.priv.pem' JWK thumbprint: RsfNibuDdOvzwP75G72rpIKIG2nRhkyGQrQXE4pXa_s\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You must have two keys; one for each central node. Copy the last part of the printed lines (what is displayed after ",(0,o.kt)("inlineCode",{parentName:"li"},"JWK thumbprint:"),") and keep it for later.")),(0,o.kt)("h2",{id:"adding-the-poller-to-the-configuration"},"Adding the Poller to the configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Add your poller to the configuration "the standard way" ',(0,o.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/docs/monitoring/monitoring-servers/add-a-poller-to-configuration"},"following these steps with ZeroMQ protocol")," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You should now have overwritten the ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/centreon-gorgone/config.d/40-gorgoned.yaml")," file, and it should contain lines like these:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"    authorized_clients:\n    - key: tRsFMBv9X3ScNFMwvG8D652nXMsgEYMb1qsJek-Mns8\n")),(0,o.kt)("h2",{id:"configuring-gorgone-on-the-poller"},"Configuring Gorgone on the poller"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You must now modify ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/centreon-gorgone/config.d/40-gorgoned.yaml")," on the poller in order to have both central keys in this section:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"    authorized_clients:\n    - key: key_1_from_earlier\n    - key: key_2_from_earlier\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Now restart Gorgone on the poller:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl restart gorgoned\n")),(0,o.kt)("p",null,"At this point, any of your central nodes should be allowed to connect to your poller's Gorgone service and send configurations, retrieve statistics, restart services, etc."))}m.isMDXComponent=!0}}]);