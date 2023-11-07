"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[70362],{63520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"remote-server",title:"Installing on a remote server"},l=void 0,c={unversionedId:"graph-views/remote-server",id:"version-23.10/graph-views/remote-server",title:"Installing on a remote server",description:"As MAP (Legacy) will no longer evolve, we suggest you install Centreon MAP instead. MAP has significant advantages compared to MAP (Legacy), including:",source:"@site/versioned_docs/version-23.10/graph-views/remote-server.md",sourceDirName:"graph-views",slug:"/graph-views/remote-server",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/graph-views/remote-server",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/graph-views/remote-server.md",tags:[],version:"23.10",lastUpdatedAt:1699374559,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{id:"remote-server",title:"Installing on a remote server"},sidebar:"version-23.10/docs",previous:{title:"Install Centreon MAP extension",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/graph-views/install"},next:{title:"Updating the extension",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/graph-views/update"}},p={},u=[{value:"Centreon MAP (Legacy) installation for a Centreon remote server",id:"centreon-map-legacy-installation-for-a-centreon-remote-server",level:2},{value:"Image synchronization",id:"image-synchronization",level:2},{value:"Centreon Broker configuration",id:"centreon-broker-configuration",level:2},{value:"Uninstalling Centreon MAP (Legacy)",id:"uninstalling-centreon-map-legacy",level:2}],g={toc:u},m="wrapper";function d(e){var{components:t}=e,s=i(e,["components"]);return(0,r.kt)(m,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},g,s),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"As MAP (Legacy) will no longer evolve, we suggest you install ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/graph-views/introduction-map"},"Centreon MAP")," instead. MAP has significant advantages compared to MAP (Legacy), including:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Web editor: Create and edit your views directly from your web browser."),(0,r.kt)("li",{parentName:"ul"},"New server: Brand new server and data model providing better performance."))),(0,r.kt)("h2",{id:"centreon-map-legacy-installation-for-a-centreon-remote-server"},"Centreon MAP (Legacy) installation for a Centreon remote server"),(0,r.kt)("p",null,"Installation of Centreon MAP (Legacy) extension on a Centreon\nremote server is done exactly like the installation on a\ncentral server, but configuration and uninstallation are different."),(0,r.kt)("p",null,"If your Centreon remote server has not been installed yet, please refer to\nthe following\n",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/installation/installation-of-a-remote-server/using-packages"},"documentation")),(0,r.kt)("p",null,"Then refer to the ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/graph-views/install"},"installation procedure")," to install\nthe two main components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The web interface."),(0,r.kt)("li",{parentName:"ul"},"The server.")),(0,r.kt)("p",null,"After that, you will have to perform the additional steps explained below, to finish\ninstalling Centreon Map on your remote server."),(0,r.kt)("h2",{id:"image-synchronization"},"Image synchronization"),(0,r.kt)("p",null,"Add an access to the image synchronization page ",(0,r.kt)("strong",{parentName:"p"},"Administration  >  Parameters  >  Images"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"[root@remote ~]# mysql centreon\nMariaDB [centreon]> update topology SET topology_show='1' where topology_name='Images' ;\n")),(0,r.kt)("h2",{id:"centreon-broker-configuration"},"Centreon Broker configuration"),(0,r.kt)("p",null,"In order to display real time statuses, ",(0,r.kt)("strong",{parentName:"p"},"Centreon MAP (Legacy)")," needs to receive this data from the Centreon remote server's Broker."),(0,r.kt)("p",null,"To do so, you need to log in to your central server and modify the Centreon Broker Master configuration of the\nCentreon remote poller. Go to the ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Pollers > Broker\nconfiguration")," menu and edit the ",(0,r.kt)("strong",{parentName:"p"},"remote server's")," configuration."),(0,r.kt)("p",null,"In the ",(0,r.kt)("strong",{parentName:"p"},"Output")," tab, create a new output with the following parameters:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(30740).Z,width:"2998",height:"1296"})),(0,r.kt)("p",null,"To complete the installation process, generate and deploy the Centreon remote\nserver configuration by selecting ",(0,r.kt)("strong",{parentName:"p"},"Restart"),"."),(0,r.kt)("h2",{id:"uninstalling-centreon-map-legacy"},"Uninstalling Centreon MAP (Legacy)"),(0,r.kt)("p",null,"On a remote poller, you can uninstall the ",(0,r.kt)("strong",{parentName:"p"},"Centreon MAP (Legacy)")," module the same\nway as on the Centreon central server. All Centreon Broker configurations for the Centreon remote server linked to the Centreon\nMAP (Legacy) module must be removed manually. Look at the ",(0,r.kt)("a",{parentName:"p",href:"#centreon-broker-configuration"},"Centreon Broker configuration")," section above to know what output you need to delete for your Centreon remote server(s)."))}d.isMDXComponent=!0},30740:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/output_broker-494e4f58825c3c0646c9ea67fca2bd30.png"}}]);