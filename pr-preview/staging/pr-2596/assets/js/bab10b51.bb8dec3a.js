"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[7032],{5438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>g});n(67294);var r=n(3905),a=n(51715),o=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={id:"blockchain-hyperledger-exporter",title:"Hyperledger API"},s=void 0,d={unversionedId:"integrations/plugin-packs/procedures/blockchain-hyperledger-exporter",id:"integrations/plugin-packs/procedures/blockchain-hyperledger-exporter",title:"Hyperledger API",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/blockchain-hyperledger-exporter.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/blockchain-hyperledger-exporter",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/blockchain-hyperledger-exporter",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/blockchain-hyperledger-exporter.md",tags:[],version:"current",frontMatter:{id:"blockchain-hyperledger-exporter",title:"Hyperledger API"},sidebar:"pp",previous:{title:"Zookeeper",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/applications-zookeeper-jmx"},next:{title:"Parity API",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/blockchain-parity-restapi"}},u={},g=[{value:"Overview",id:"overview",level:2},{value:"Pack assets",id:"pack-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Monitored metrics",id:"monitored-metrics",level:3},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host configuration",id:"host-configuration",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"UNKNOWN: Can&#39;t connect to ...",id:"unknown-cant-connect-to-",level:3},{value:"UNKNOWN: Cannot decode json response",id:"unknown-cannot-decode-json-response",level:3}],k={toc:g},m="wrapper";function h(e){var{components:t}=e,n=p(e,["components"]);return(0,r.kt)(m,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Hyperledger Exporter is a tool exploiting the Hyperledger Fabric built-in APIs."),(0,r.kt)("p",null,"The Centreon Monitoring Connector ",(0,r.kt)("em",{parentName:"p"},"Hyperledger API")," aims to collect relative metrics about\nchannels and processing."),(0,r.kt)("h2",{id:"pack-assets"},"Pack assets"),(0,r.kt)("h3",{id:"monitored-objects"},"Monitored objects"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hyperledger private subnets / Channels ")),(0,r.kt)("h3",{id:"monitored-metrics"},"Monitored metrics"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Channels",label:"Channels",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"channel.ledger.transaction.count"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of processed transaction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"channel.gossip.membership.total.peers.known.count"),(0,r.kt)("td",{parentName:"tr",align:null},"Total known peers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"channel.gossip.state.height.count"),(0,r.kt)("td",{parentName:"tr",align:null},"Current ledger height")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"channel.ledger.blockchain.height.count"),(0,r.kt)("td",{parentName:"tr",align:null},"Height of the chain in blocks")))))),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor ",(0,r.kt)("em",{parentName:"li"},"Hyperledger API")," ressources:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Blockchain-Hyperledger-Exporter\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,r.kt)("em",{parentName:"li"},"Hyperledger API")," Centreon Monitoring Connector on the ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page"))),(0,r.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor ",(0,r.kt)("em",{parentName:"li"},"Hyperledger API")," ressources:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Blockchain-Hyperledger-Exporter\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Install the ",(0,r.kt)("em",{parentName:"li"},"Hyperledger API")," Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-blockchain-hyperledger-exporter\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,r.kt)("em",{parentName:"li"},"Hyperledger API")," Centreon Monitoring Connector on the ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page")))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"host-configuration"},"Host configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Log into Centreon and add a new Host through "Configuration > Hosts".'),(0,r.kt)("li",{parentName:"ul"},'Fill the "Name", "Alias" & "IP Address / DNS" fields according to your Hyperledger node settings'),(0,r.kt)("li",{parentName:"ul"},"Apply the ",(0,r.kt)("em",{parentName:"li"},"Blockchain-Hyperledger-Exporter-custom")," template and configure all the mandatory Macros:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"EXPORTERAPIPORT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Port used by the Hyperledger Exporter (Default: '80')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"EXPORTERPROTO"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Protocol used by the Hyperledger Exporter (Default: 'http')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"EXPORTERAPIURLPATH"),(0,r.kt)("td",{parentName:"tr",align:"left"},"URL to access the Hyperledger Exporter (Default: '/')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"TIMEOUT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Timeout (Default: '10')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command","_","line (eg. a --verbose flag)")))),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h3",{id:"unknown-cant-connect-to-"},"UNKNOWN: Can't connect to ..."),(0,r.kt)("p",null,"This error message means that the Centreon Plugin couldn't successfully connect to the Hyperledger API. Check that no third party\ndevice (such as a firewall) is blocking the request. "),(0,r.kt)("h3",{id:"unknown-cannot-decode-json-response"},"UNKNOWN: Cannot decode json response"),(0,r.kt)("p",null,"This error message means that the Centreon Plugin couldn't successfully connect to the Hyperledger Exporter API. Check that no third party\ndevice (such as a firewall) is blocking the request. A proxy connection may also be necessary to connect to the API.\nThis can be done by using this option in the command: ",(0,r.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany:8080'"),"."))}h.isMDXComponent=!0}}]);