"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[47836],{75688:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>k,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>m,toc:()=>d});n(67294);var a=n(3905),r=n(51715),i=n(7626);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const s={id:"blockchain-parity-restapi",title:"Parity API"},c=void 0,m={unversionedId:"integrations/plugin-packs/procedures/blockchain-parity-restapi",id:"integrations/plugin-packs/procedures/blockchain-parity-restapi",title:"Parity API",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/blockchain-parity-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/blockchain-parity-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/blockchain-parity-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/blockchain-parity-restapi.md",tags:[],version:"current",frontMatter:{id:"blockchain-parity-restapi",title:"Parity API"},sidebar:"pp",previous:{title:"Hyperledger API",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/blockchain-hyperledger-exporter"},next:{title:"Parity Ethpoller API",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/blockchain-parity-ethpoller-restapi"}},k={},d=[{value:"Overview",id:"overview",level:2},{value:"Pack assets",id:"pack-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"How to check in the CLI that the configuration is OK and what are the main options for ?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"UNKNOWN: Can&#39;t connect to ...",id:"unknown-cant-connect-to-",level:3},{value:"UNKNOWN: Cannot decode json response",id:"unknown-cannot-decode-json-response",level:3}],u={toc:d},g="wrapper";function h(t){var{components:e}=t,n=p(t,["components"]);return(0,a.kt)(g,o(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){l(t,e,n[e])}))}return t}({},u,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Parity Blockchain is a fork of the Ethereum Blockchain. "),(0,a.kt)("p",null,"The Centreon Monitoring Connector ",(0,a.kt)("em",{parentName:"p"},"Parity API")," aims to get information and metrics from the\nParity API. "),(0,a.kt)("h2",{id:"pack-assets"},"Pack assets"),(0,a.kt)("h3",{id:"monitored-objects"},"Monitored objects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Blockchain Parity nodes",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Parity"),(0,a.kt)("li",{parentName:"ul"},"Info"),(0,a.kt)("li",{parentName:"ul"},"Eth"),(0,a.kt)("li",{parentName:"ul"},"Net")))),(0,a.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Parity",label:"Parity",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"parity.pending.transactions"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of pending transactions"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"parity.mempol.usage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Memory pool usage"),(0,a.kt)("td",{parentName:"tr",align:null},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"parity.mempol.size"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Memory pool size"),(0,a.kt)("td",{parentName:"tr",align:null},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"parity.peers.connected"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of connected peers"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"parity.peers.max"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Maximum number of peers"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"parity.peers.usage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Peers usage expressed in percent"),(0,a.kt)("td",{parentName:"tr",align:null},"%"))))),(0,a.kt)(i.Z,{value:"Eth",label:"Eth",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"parity.eth.sync.status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"State of node synchronization")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"parity.eth.block.gas"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Gas")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"parity.eth.block.usage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Block Usage")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"parity.eth.block.size"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Size of Block")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"parity.eth.block.transactions.number"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of block transactions")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"parity.eth.block.uncles"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of block uncles")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"parity.eth.gas.limit"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Maximum Gas available")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"parity.eth.gas.price"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Gas price")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"parity.eth.gas.used"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Gas consumption"))))),(0,a.kt)(i.Z,{value:"Net",label:"Net",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"parity.network.peers.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of known peers")))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To get data from the API, the Poller must be able to communicate with it over the\nconfigured port (default: 8545). "),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon Poller expected to monitor\nParity network nodes:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Blockchain-Parity-Restapi\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"Parity API")," Centreon Monitoring Connector on\nthe ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page"))),(0,a.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon Poller expected to monitor\nBlockchain Parity nodes:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Blockchain-Parity-Restapi\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install the ",(0,a.kt)("em",{parentName:"li"},"Parity API")," Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-blockchain-parity-restapi\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"Parity API")," Centreon Monitoring Connector on\nthe ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page")))),(0,a.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Log into Centreon and add a new Host through "Configuration > Hosts".'),(0,a.kt)("li",{parentName:"ul"},'Fill the "Name", "Alias" & "IP Address / DNS" fields according to your Blockchain\nParity Server settings'),(0,a.kt)("li",{parentName:"ul"},"Apply the ",(0,a.kt)("em",{parentName:"li"},"Blockchain-Parity-Restapi-custom")," template and configure all the\nmandatory Macros:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"PARITYAPIPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"(Default: '8545')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"PARITYPROTO"),(0,a.kt)("td",{parentName:"tr",align:"left"},"(Default: 'http')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"PARITYAPIURLPATH"),(0,a.kt)("td",{parentName:"tr",align:"left"},"(Default: '/')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"TIMEOUT"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"PARITYEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command_line (eg. a --verbose flag)")))),(0,a.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-"},"How to check in the CLI that the configuration is OK and what are the main options for ?"),(0,a.kt)("p",null,"Once the plugin installed, log into your Centreon Poller CLI using the\n",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," user account and test the Plugin by running the following\ncommand:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_blockchain_parity_api.pl  \\ \n   --plugin=blockchain::parity::restapi::plugin  \\ \n   --mode=net  \\ \n   --hostname=10.0.0.1  \\ \n   --port=8545  \\ \n   --proto=http \\\n   --timeout=10  \\ \n   --proto=http  \\ \n   --api-path=/  \\ \n   --warning-peers=''  \\ \n   --critical-peers='1:'   \n")),(0,a.kt)("p",null,"Expected command output is shown below:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"OK: Parity network module: connected peers: 2")),(0,a.kt)("p",null,"This command would trigger a WARNING alarm if the number of peers is reported as (--warning-peers) and a CRITICAL alarm if less than 1 (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-peers=1:"),")."),(0,a.kt)("p",null,"All the available options for a given mode can be displayed by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_blockchain_parity_api.pl  \\ \n    --plugin=blockchain::parity::restapi::plugin  \\ \n    --mode=net  \\ \n    --help\n")),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("h3",{id:"unknown-cant-connect-to-"},"UNKNOWN: Can't connect to ..."),(0,a.kt)("p",null,"This error message means that the Centreon Plugin couldn't successfully connect to the Parity API. Check that no third party\ndevice (such as a firewall) is blocking the request. "),(0,a.kt)("h3",{id:"unknown-cannot-decode-json-response"},"UNKNOWN: Cannot decode json response"),(0,a.kt)("p",null,"This error message means that the Centreon Plugin couldn't successfully connect to the Parity API. Check that no third party\ndevice (such as a firewall) is blocking the request. "),(0,a.kt)("p",null,"A proxy connection may also be necessary to connect to the API.\nThis can be done by using this option in the command: ",(0,a.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany:8080'"),"."))}h.isMDXComponent=!0}}]);