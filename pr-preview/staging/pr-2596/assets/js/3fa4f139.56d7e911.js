"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[54861],{44511:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});t(67294);var r=t(3905);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={id:"developer-gorgone-pull-mode",title:"Configuring Gorgone in pull mode"},s=void 0,u={unversionedId:"developer/developer-gorgone-pull-mode",id:"version-23.10/developer/developer-gorgone-pull-mode",title:"Configuring Gorgone in pull mode",description:"This procedure describes how to configure Gorgone between a distant poller and a central server.",source:"@site/versioned_docs/version-23.10/developer/developer-gorgone-pull-mode.md",sourceDirName:"developer",slug:"/developer/developer-gorgone-pull-mode",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/docs/developer/developer-gorgone-pull-mode",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/developer/developer-gorgone-pull-mode.md",tags:[],version:"23.10",lastUpdatedAt:1699359701,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{id:"developer-gorgone-pull-mode",title:"Configuring Gorgone in pull mode"},sidebar:"version-23.10/docs",previous:{title:"Managing client/server communication",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/docs/developer/developer-gorgone-client-server-communication"},next:{title:"Configuring Gorgone in rebound mode",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/docs/developer/developer-gorgone-rebound-mode"}},p={},c=[{value:"On the remote poller side",id:"on-the-remote-poller-side",level:2},{value:"Installation requirements",id:"installation-requirements",level:3},{value:"Configuration",id:"configuration",level:3},{value:"On the Central server side",id:"on-the-central-server-side",level:2},{value:"Installation requirements",id:"installation-requirements-1",level:3},{value:"Configuration",id:"configuration-1",level:3}],d={toc:c},g="wrapper";function m(e){var{components:n}=e,t=a(e,["components"]);return(0,r.kt)(g,l(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},d,t),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This procedure describes how to configure Gorgone between a distant poller and a central server."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pull mode allows the poller to act as a client and connect to the Central (which will be the server). ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pull mode is relevant when firewalls are set on pollers and prevent incoming traffic.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pull mode is relevant when the Central is in the cloud and pollers are not reachable through the usual IP addresses. In that situation, the pull (or reverse) mode is used to make each poller initiate a connection to the public IP address of the Central. Learn more about this use case in ",(0,r.kt)("a",{parentName:"p",href:"https://thewatch.centreon.com/product-how-to-21/how-to-use-the-gorgone-pull-mode-374"},"this article"),"."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: In our case, we have the configuration described below (you must adapt the procedure to your configuration).")),(0,r.kt)("p",null,"Central server:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"address: 10.30.2.203")),(0,r.kt)("p",null,"Distant Poller:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"id: 6 (configured in the Centreon interface as zmq. You can get this ID from the Centreon interface)."),(0,r.kt)("li",{parentName:"ul"},"address: 10.30.2.179"),(0,r.kt)("li",{parentName:"ul"},"rsa public key thumbprint: nJSH9nZN2ugQeksHif7Jtv19RQA58yjxfX-Cpnhx09s")),(0,r.kt)("h2",{id:"on-the-remote-poller-side"},"On the remote poller side"),(0,r.kt)("h3",{id:"installation-requirements"},"Installation requirements"),(0,r.kt)("p",null,"Ensure the remote poller and Gorgone are already installed."),(0,r.kt)("h3",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Configure the file ",(0,r.kt)("strong",{parentName:"p"},"/etc/centreon-gorgone/config.d/40-gorgoned.yaml")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'name:  distant-server\ndescription: Configuration for distant server\ngorgone:\n  gorgonecore:\n    id: 6\n    privkey: "/var/lib/centreon-gorgone/.keys/rsakey.priv.pem"\n    pubkey: "/var/lib/centreon-gorgone/.keys/rsakey.pub.pem"\n\n  modules:\n    - name: action\n      package: gorgone::modules::core::action::hooks\n      enable: true\n\n    - name: engine\n      package: gorgone::modules::centreon::engine::hooks\n      enable: true\n      command_file: "/var/lib/centreon-engine/rw/centengine.cmd"\n\n    - name: pull\n      package: "gorgone::modules::core::pull::hooks"\n      enable: true\n      target_type: tcp\n      target_path: 10.30.2.203:5556\n      ping: 1\n')),(0,r.kt)("h2",{id:"on-the-central-server-side"},"On the Central server side"),(0,r.kt)("h3",{id:"installation-requirements-1"},"Installation requirements"),(0,r.kt)("p",null,"Ensure the Central server and Gorgone are already installed."),(0,r.kt)("h3",{id:"configuration-1"},"Configuration"),(0,r.kt)("p",null,"Configure the file ",(0,r.kt)("strong",{parentName:"p"},"/etc/centreon-gorgone/config.d/40-gorgoned.yaml")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'...\ngorgone:\n  gorgonecore:\n    ...\n    external_com_type: tcp\n    external_com_path: "*:5556"\n    authorized_clients:\n      - key: nJSH9nZN2ugQeksHif7Jtv19RQA58yjxfX-Cpnhx09s\n    ...\n  modules:\n    ...\n    - name: register\n      package: "gorgone::modules::core::register::hooks"\n      enable: true\n      config_file: /etc/centreon-gorgone/nodes-register-override.yml\n    ...\n')),(0,r.kt)("p",null,"We created the file ",(0,r.kt)("strong",{parentName:"p"},"/etc/centreon-gorgone/nodes-register-override.yml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"nodes:\n  - id: 6\n    type: pull\n    prevail: 1\n")))}m.isMDXComponent=!0}}]);