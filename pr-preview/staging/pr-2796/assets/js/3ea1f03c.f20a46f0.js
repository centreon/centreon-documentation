"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[52736],{37014:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>g});t(67294);var o=t(3905);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const a={id:"developer-gorgone-client-server-communication",title:"Managing client/server communication"},c=void 0,p={unversionedId:"developer/developer-gorgone-client-server-communication",id:"version-23.10/developer/developer-gorgone-client-server-communication",title:"Managing client/server communication",description:"Centreon Gorgone is the component that allows communication from the central server to the pollers and remote servers. In addition, Gorgone deploys the configuration of the monitoring engines.",source:"@site/versioned_docs/version-23.10/developer/developer-gorgone-client-server-communication.md",sourceDirName:"developer",slug:"/developer/developer-gorgone-client-server-communication",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/developer/developer-gorgone-client-server-communication",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/developer/developer-gorgone-client-server-communication.md",tags:[],version:"23.10",lastUpdatedAt:1699374559,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{id:"developer-gorgone-client-server-communication",title:"Managing client/server communication"},sidebar:"version-23.10/docs",previous:{title:"Centreon Broker Event Mapping",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/developer/developer-broker-mapping"},next:{title:"Configuring Gorgone in pull mode",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/developer/developer-gorgone-pull-mode"}},s={},g=[{value:"Generate private and public keys",id:"generate-private-and-public-keys",level:2},{value:"Get the string-formatted JWK thumbprint",id:"get-the-string-formatted-jwk-thumbprint",level:2},{value:"Set the configurations",id:"set-the-configurations",level:2},{value:"On the server side",id:"on-the-server-side",level:3},{value:"On the client side",id:"on-the-client-side",level:3}],u={toc:g},d="wrapper";function m(e){var{components:n}=e,t=l(e,["components"]);return(0,o.kt)(d,i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){r(e,n,t[n])}))}return e}({},u,t),{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Centreon Gorgone is the component that allows communication from the central server to the pollers and remote servers. In addition, Gorgone deploys the configuration of the monitoring engines."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Gorgone replaces Centcore since the Centreon 20.04 version.")),(0,o.kt)("p",null,"Centreon recommends using the ZMQ protocol for communication between two ",(0,o.kt)("strong",{parentName:"p"},"gorgoned"),"\nprocesses.\nWhen using the ZMQ protocol, all communications are encrypted using symmetric-key encryption\nbased on public/private keys from both client and server. So you need to generate public/private keys to set the configuration."),(0,o.kt)("p",null,"In a Centreon context:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the Central server has a Gorgone running (by default) as a client and can connect to Gorgone servers running on remote servers and pollers."),(0,o.kt)("li",{parentName:"ul"},"Remote servers have a Gorgone running (by default) as a client and can connect to Gorgone servers running on pollers.")),(0,o.kt)("p",null,"Follow this procedure to set the communication between client and server."),(0,o.kt)("h2",{id:"generate-private-and-public-keys"},"Generate private and public keys"),(0,o.kt)("p",null,"On both client and server, generate RSA (format for key encryption) private and public keys using the ",(0,o.kt)("strong",{parentName:"p"},"centreon")," user."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ mkdir -p /var/spool/centreon/.gorgone/\n$ chmod 700 /var/spool/centreon/.gorgone\n$ openssl genrsa -out /var/spool/centreon/.gorgone/privkey.pem 4092\nGenerating RSA private key, 4092 bit long modulus\n...................................++\n...........................................................................................................................................................................++\ne is 65537 (0x10001)\n$ openssl rsa -in /var/spool/centreon/.gorgone/privkey.pem -out /var/spool/centreon/.gorgone/pubkey.pem -pubout -outform PEM\nwriting RSA key\n$ chmod 644 /var/spool/centreon/.gorgone/pubkey.pem\n$ chmod 600 /var/spool/centreon/.gorgone/privkey.pem\n")),(0,o.kt)("p",null,"Copy the server's public key onto the client in a specific directory (for example ",(0,o.kt)("strong",{parentName:"p"},"/var/spool/centreon/.gorgone/<target_id>"),")."),(0,o.kt)("h2",{id:"get-the-string-formatted-jwk-thumbprint"},"Get the string-formatted JWK thumbprint"),(0,o.kt)("p",null,"On the client side, execute the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ perl /usr/local/bin/gorgone_key_thumbprint.pl --key-path='/var/spool/centreon/.gorgone/pubkey.pem'\n2019-09-30 11:00:00 - INFO - File '/var/spool/centreon/.gorgone/pubkey.pem' JWK thumbprint: pnI6EWkiTbazjikJXRkLmjml5wvVECYtQduJUjS4QK4\n")),(0,o.kt)("h2",{id:"set-the-configurations"},"Set the configurations"),(0,o.kt)("p",null,"You need to make the Gorgone IDs match the Centreon poller IDs to benefit from the legacy command module's actions."),(0,o.kt)("h3",{id:"on-the-server-side"},"On the server side"),(0,o.kt)("p",null,"In the ",(0,o.kt)("strong",{parentName:"p"},"/etc/centreon/confid.d/20-gorgoned.yaml")," configuration file, add the following directives under the ",(0,o.kt)("strong",{parentName:"p"},"gorgonecore")," section:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gorgone:\n  gorgonecore:\n    id: 1\n    privkey: /var/spool/centreon/.gorgone/privkey.pem\n    pubkey: /var/spool/centreon/.gorgone/pubkey.pem\n")),(0,o.kt)("p",null,"Add the register module and define the path to the dedicated configuration file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'modules:\n  - name: register\n    package: "gorgone::modules::core::register::hooks"\n    enable: true\n    config_file: /etc/centreon/gorgone-targets.yml\n')),(0,o.kt)("p",null,"Create the file ",(0,o.kt)("strong",{parentName:"p"},"/etc/centreon/gorgone-targets.yml")," and fill it with the following configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"  nodes:\n  - id: 2\n    type: push_zmq\n    address: 10.1.2.3\n    port: 5556\n")),(0,o.kt)("h3",{id:"on-the-client-side"},"On the client side"),(0,o.kt)("p",null,"In the ",(0,o.kt)("strong",{parentName:"p"},"/etc/centreon/config.d/20-gorgoned.yaml")," configuration file, add the following directives:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'gorgone:\n  gorgonecore:\n    id: 2\n    external_com_type: tcp\n    external_com_path: "*:5556"\n    privkey: /var/spool/centreon/.gorgone/privkey.pem\n    pubkey: /var/spool/centreon/.gorgone/pubkey.pem\n    authorized_clients:\n      - key: pnI6EWkiTbazjikJXRkLmjml5wvVECYtQduJUjS4QK4\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"authorized_clients")," entry allows you to define the client public key thumbprint retrieved earlier."))}m.isMDXComponent=!0}}]);