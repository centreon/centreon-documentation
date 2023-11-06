"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[44416],{12980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>c,default:()=>g,frontMatter:()=>p,metadata:()=>u,toc:()=>d});n(67294);var r=n(3905),a=n(51715),o=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={id:"secure-your-map-platform",title:"Secure your MAP platform"},c=void 0,u={unversionedId:"graph-views/secure-your-map-platform",id:"version-23.10/graph-views/secure-your-map-platform",title:"Secure your MAP platform",description:"This chapter describes advanced procedures to secure your Centreon MAP and MAP (Legacy)",source:"@site/versioned_docs/version-23.10/graph-views/secure-your-map-platform.md",sourceDirName:"graph-views",slug:"/graph-views/secure-your-map-platform",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/graph-views/secure-your-map-platform",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/graph-views/secure-your-map-platform.md",tags:[],version:"23.10",lastUpdatedAt:1699281350,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{id:"secure-your-map-platform",title:"Secure your MAP platform"},sidebar:"version-23.10/docs",previous:{title:"Secure your platform",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/administration/secure-platform"},next:{title:"Basic principles of monitoring",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/monitoring/about"}},k={},d=[{value:"Configure HTTPS/TLS on the MAP (or MAP Legacy) server",id:"configure-httpstls-on-the-map-or-map-legacy-server",level:2},{value:"HTTPS/TLS configuration with a recognized key",id:"httpstls-configuration-with-a-recognized-key",level:3},{value:"HTTPS/TLS configuration with an auto-signed key",id:"httpstls-configuration-with-an-auto-signed-key",level:3},{value:"HTTPS/TLS configuration with an auto-signed key",id:"httpstls-configuration-with-an-auto-signed-key-1",level:3},{value:"Activate TLS profile of Centreon MAP service",id:"activate-tls-profile-of-centreon-map-service",level:3},{value:"Configure TLS on the Broker connection",id:"configure-tls-on-the-broker-connection",level:2},{value:"Broker configuration",id:"broker-configuration",level:3},{value:"MAP server configuration",id:"map-server-configuration",level:3},{value:"Configuration with a self-signed certificate",id:"configuration-with-a-self-signed-certificate",level:4},{value:"Configuration with a recognized CA certificate",id:"configuration-with-a-recognized-ca-certificate",level:4}],m={toc:d},h="wrapper";function g(e){var{components:t}=e,p=l(e,["components"]);return(0,r.kt)(h,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},m,p),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This chapter describes advanced procedures to secure your Centreon MAP and MAP (Legacy)\nplatform."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you want to use MAP and MAP (Legacy) in HTTPS, you must secure both your Centreon platform and MAP (or MAP Legacy). Follow this ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/administration/secure-platform"},"procedure")," if you need to secure your Centreon platform.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Mistakes when editing configuration files can lead to malfunctions of the software. We recommend that you make a backup of the file before editing it and that you only change the settings advised by Centreon.")),(0,r.kt)("h2",{id:"configure-httpstls-on-the-map-or-map-legacy-server"},"Configure HTTPS/TLS on the MAP (or MAP Legacy) server"),(0,r.kt)("h3",{id:"httpstls-configuration-with-a-recognized-key"},"HTTPS/TLS configuration with a recognized key"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This section describes how to add a ",(0,r.kt)("strong",{parentName:"p"},"recognized key")," to the Centreon\nMAP (or MAP Legacy) server."),(0,r.kt)("p",{parentName:"blockquote"},"If you want to create an auto-signed key and add it to your server, please\nrefer to the ",(0,r.kt)("a",{parentName:"p",href:"#httpstls-configuration-with-an-auto-signed-key"},"following\nsection"))),(0,r.kt)("p",null,"You will require:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A key file, referred to as ",(0,r.kt)("em",{parentName:"li"},"key.key"),"."),(0,r.kt)("li",{parentName:"ul"},"A certificate file, referred to as ",(0,r.kt)("em",{parentName:"li"},"certificate.crt"),".")),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"MAP",label:"MAP",mdxType:"TabItem"},(0,r.kt)("p",null,"Access the Centreon MAP server through SSH."),(0,r.kt)("p",null,"Create a PKCS12 file with the following command line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"openssl pkcs12 -inkey key.key -in certificate.crt -export -out keys.pkcs12\n")),(0,r.kt)("p",null,"Then, import this file into a new keystore (a Java repository of security\ncertificates):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"keytool -importkeystore -srckeystore keys.pkcs12 -srcstoretype pkcs12 -destkeystore map.jks\n")),(0,r.kt)("p",null,'Put above keystore file (map.jks) to the folder "/etc/centreon-map/",\nand set below parameters inside\n',(0,r.kt)("inlineCode",{parentName:"p"},"/etc/centreon-map/map-config.properties"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"centreon-map.keystore=/etc/centreon-map/map.jks\ncentreon-map.keystore-pass=xxx\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Replace the keystore-pass value "xxx" with the password you used for\nthe keystore and adapt the path (if it was changed) to the keystore.')),(0,r.kt)("h3",{id:"httpstls-configuration-with-an-auto-signed-key"},"HTTPS/TLS configuration with an auto-signed key"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Enabling the TLS mode with an auto-signed key will force every user to add an\nexception for the certificate before using the web interface."),(0,r.kt)("p",{parentName:"blockquote"},"Enable it only if your Centreon also uses this protocol."),(0,r.kt)("p",{parentName:"blockquote"},"Users will have to open the URL:"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"https://<MAP_IP>:9443/centreon-map/api/beta/actuator/health\n")),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"The solution we recommend is to use a recognized key method, as explained\nabove."))),(0,r.kt)("p",null,"On the Centreon MAP server, create a keystore."),(0,r.kt)("p",null,"Go to the folder where Java is installed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd $JAVA_HOME/bin\n")),(0,r.kt)("p",null,"Then generate a keystore file with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"keytool -genkey -alias map -keyalg RSA -keystore /etc/centreon-map/map.jks\n")),(0,r.kt)("p",null,'The alias value "map" and the keystore file path\n',(0,r.kt)("inlineCode",{parentName:"p"},"/etc/centreon-map/map.jks")," may be changed, but unless there is a\nspecific reason, we advise keeping the default values."),(0,r.kt)("p",null,"Provide the needed information when creating the keystore."),(0,r.kt)("p",null,'At the end of the screen form, when the "key password" is requested, use\nthe same password as the one used for the keystore itself by pressing the\nENTER key.'),(0,r.kt)("p",null,'Put above keystore file (map.jks) to the folder "/etc/centreon-map/",\nand set below parameters inside\n',(0,r.kt)("inlineCode",{parentName:"p"},"/etc/centreon-map/map-config.properties"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"centreon-map.keystore=/etc/centreon-map/map.jks\ncentreon-map.keystore-pass=xxx\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Replace the keystore-pass value "xxx" with the password you used for\nthe keystore and adapt the path (if it was changed to the keystore).'))),(0,r.kt)(o.Z,{value:"MAP (Legacy)",label:"MAP (Legacy)",mdxType:"TabItem"},(0,r.kt)("p",null,"Access the Centreon MAP Legacy server through SSH."),(0,r.kt)("p",null,"Create a PKCS12 file with the following command line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"openssl pkcs12 -inkey key.key -in certificate.crt -export -out keys.pkcs12\n")),(0,r.kt)("p",null,"Then, import this file into a new keystore (a Java repository of security\ncertificates):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"keytool -importkeystore -srckeystore keys.pkcs12 -srcstoretype pkcs12 -destkeystore studio.jks\n")),(0,r.kt)("p",null,'Put above keystore file (studio.jks) to the folder "/etc/centreon-studio/",\nand set below parameters inside\n',(0,r.kt)("inlineCode",{parentName:"p"},"/etc/centreon-studio/map-config.properties"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"centreon-map.keystore=/etc/centreon-studio/studio.jks\ncentreon-map.keystore-pass=xxx\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Replace the keystore-pass value "xxx" with the password you used for\nthe keystore and adapt the path (if it was changed) to the keystore.')),(0,r.kt)("h3",{id:"httpstls-configuration-with-an-auto-signed-key-1"},"HTTPS/TLS configuration with an auto-signed key"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Enabling the TLS mode with an auto-signed key will force every user to add an\nexception for the certificate before using the web interface."),(0,r.kt)("p",{parentName:"blockquote"},"Enable it only if your Centreon also uses this protocol."),(0,r.kt)("p",{parentName:"blockquote"},"Users will have to open the URL:"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"https://<MAP_IP>:8443/centreon-studio/api/beta/actuator/health\n")),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"The solution we recommend is to use a recognized key method, as explained\nabove."))),(0,r.kt)("p",null,"On the Centreon MAP Legacy server, create a keystore."),(0,r.kt)("p",null,"Go to the folder where Java is installed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd $JAVA_HOME/bin\n")),(0,r.kt)("p",null,"Then generate a keystore file with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"keytool -genkey -alias studio -keyalg RSA -keystore /etc/centreon-studio/studio.jks\n")),(0,r.kt)("p",null,'The alias value "studio" and the keystore file path\n',(0,r.kt)("inlineCode",{parentName:"p"},"/etc/centreon-studio/studio.jks")," may be changed, but unless there is a\nspecific reason, we advise keeping the default values."),(0,r.kt)("p",null,"Provide the needed information when creating the keystore."),(0,r.kt)("p",null,'At the end of the screen form, when the "key password" is requested, use\nthe same password as the one used for the keystore itself by pressing the\nENTER key.'),(0,r.kt)("p",null,'Put above keystore file (studio.jks) to the folder "/etc/centreon-studio/",\nand set below parameters inside\n',(0,r.kt)("inlineCode",{parentName:"p"},"/etc/centreon-studio/map-config.properties"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"centreon-map.keystore=/etc/centreon-studio/studio.jks\ncentreon-map.keystore-pass=xxx\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Replace the keystore-pass value "xxx" with the password you used for\nthe keystore and adapt the path (if it was changed to the keystore).')))),(0,r.kt)("h3",{id:"activate-tls-profile-of-centreon-map-service"},"Activate TLS profile of Centreon MAP service"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"MAP",label:"MAP",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Stop the Centreon MAP service:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl stop centreon-map-engine\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit the file ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/centreon-map/centreon-map.conf"),', adding ",tls"\nafter "prod" profile:'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},'RUN_ARGS="--spring.profiles.active=prod,tls"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Restart the Centreon MAP service:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl start centreon-map-engine\n"))))),(0,r.kt)(o.Z,{value:"MAP (Legacy)",label:"MAP (Legacy)",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Stop the Centreon MAP service:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl stop centreon-map\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit the file ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/centreon-studio/centreon-map.conf"),', adding ",tls"\nafter "prod" profile:'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},'RUN_ARGS="--spring.profiles.active=prod,tls"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Restart the Centreon MAP service:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl start centreon-map\n")))))),(0,r.kt)("p",null,"Centreon MAP server is now configured to respond to requests from HTTPS:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"at port 9443 for MAP,"),(0,r.kt)("li",{parentName:"ul"},"at port 8443 for MAP (Legacy).")),(0,r.kt)("p",null,"To change the default port, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/graph-views/advanced-configuration#change-centreon-map-server-port"},"dedicated\nprocedure"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Remember to modify the URL on the Centreon side in the ",(0,r.kt)("strong",{parentName:"p"},"Map server address"),"\nfield in the ",(0,r.kt)("strong",{parentName:"p"},"Administration > Extensions > Map > Options")," menu.\n",(0,r.kt)("img",{alt:"image",src:n(14043).Z,width:"1671",height:"851"}))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Remember to update your connection profile in the desktop client\nby checking the ssl checkbox.\n",(0,r.kt)("img",{alt:"image",src:n(32492).Z,width:"500",height:"291"}))),(0,r.kt)("h2",{id:"configure-tls-on-the-broker-connection"},"Configure TLS on the Broker connection"),(0,r.kt)("p",null,"An additional Broker output for Centreon Central (centreon-broker-master) has\nbeen created during the installation."),(0,r.kt)("p",null,"You can check it in your Centreon web interface, from ",(0,r.kt)("inlineCode",{parentName:"p"},"Configuration >\nPollers > Broker Configuration"),", by editing the ",(0,r.kt)("inlineCode",{parentName:"p"},"centreon-broker-master"),"\nconfiguration."),(0,r.kt)("p",null,"The output configuration should look like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(30740).Z,width:"2998",height:"1296"})),(0,r.kt)("h3",{id:"broker-configuration"},"Broker configuration"),(0,r.kt)("p",null,"You can enable TLS output and set up the Broker's private key and public\ncertificate as described below:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(64666).Z,width:"1222",height:"471"})),(0,r.kt)("p",null,"To create a self-signed certificate, you can use the following commands: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"openssl req -new -newkey rsa:2048 -nodes -keyout broker_private.key -out broker.csr\nopenssl x509 -req -in broker.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out broker_public.crt -days 365 -sha256\n")),(0,r.kt)("p",null,"And then copy the private key and the certificate into the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/centreon/broker_cert/")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"mv broker_private.key /etc/centreon/broker_cert/\nmv broker_public.crt /etc/centreon/broker_cert/\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'The "Trusted CA\'s certificate" field is optional. If you activate the Broker\'s client\nauthentication by setting this "ca',"_",'certificate.crt", then you must set up a\n',(0,r.kt)("a",{parentName:"p",href:"#configure-httpstls-on-the-web-server"},"keystore for MAP server")),(0,r.kt)("p",{parentName:"blockquote"},"You MUST push the new broker configuration and restart the broker after\nconfiguration.")),(0,r.kt)("h3",{id:"map-server-configuration"},"MAP server configuration"),(0,r.kt)("p",null,"First of all, you should ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/administration/secure-platform#enable-https-on-the-web-server"},"activate HTTPS/TLS on the web server")),(0,r.kt)("p",null,"Then, set the following parameters in the MAP server configuration at:"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"MAP",label:"MAP",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"/etc/centreon-map/centreon-map.conf"))),(0,r.kt)(o.Z,{value:"MAP (Legacy)",label:"MAP (Legacy)",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"/etc/centreon-studio/studio-config.properties")))),(0,r.kt)("p",null,"To set the communication protocol with Centreon server to HTTPS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"centreon.url=https://<server-address>\n")),(0,r.kt)("p",null,"To enable TLS socket connection with Broker:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"broker.tls=true\n")),(0,r.kt)("h4",{id:"configuration-with-a-self-signed-certificate"},"Configuration with a self-signed certificate"),(0,r.kt)("p",null,"If the Broker public certificate is self-signed, you must create a trust store\ncontaining the given certificate or its CA certificate with the following command\nline:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"keytool -import -alias centreon-broker -file broker_public.crt -keystore truststore.jks\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"broker',"_",'public.crt" is the Broker public certificate or its CA certificate\nin PEM format,'),(0,r.kt)("li",{parentName:"ul"},'"truststore.jks" is the generated trust store in JKS format,'),(0,r.kt)("li",{parentName:"ul"},"a store password is required during generation.")),(0,r.kt)("p",null,'Then, put the generated output file "truststore.jks" into\n"/etc/centreon-studio" of MAP server host.'),(0,r.kt)("p",null,"And add truststore parameters in\n",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/centreon-studio/studio-config.properties"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"centreon-map.truststore=/etc/centreon-studio/truststore.jks\ncentreon-map.truststore-pass=XXXX\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Replace the trustStorePassword value "xxx" with the password you used when\ngenerating the trust store.')),(0,r.kt)("p",null,'Meanwhile, you should activate the "tls_broker" profile of Centreon MAP\nservice.'),(0,r.kt)("p",null,"Edit the file ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/centreon-studio/centreon-map.conf"),', and replace ",tls" by\n",tls_broker" after "prod" profile:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'RUN_ARGS="--spring.profiles.active=prod,tls_broker"\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'"tls_broker" profile implies "tls" profile. So Centreon MAP service\nnecessarily serves HTTPS.')),(0,r.kt)("p",null,"Once you add a truststore, Centreon MAP will use it to validate self-signed certificates.\nThis means that if you use a self-signed certificate for the central server, you must add it to the truststore. If you don't, the\n",(0,r.kt)("strong",{parentName:"p"},"Monitoring > Map")," page will be blank, and the logs (",(0,r.kt)("strong",{parentName:"p"},"/var/log/centreon-map/centreon-map.log"),")\nwill show the following error :\n",(0,r.kt)("inlineCode",{parentName:"p"},"unable to find valid certification path to requested target"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the central server's ",(0,r.kt)("strong",{parentName:"p"},".crt")," certificate to the MAP server.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the certificate to the truststore:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"keytool -import -alias centreon-broker -file central_public.crt -keystore truststore.jks\n")))),(0,r.kt)("h4",{id:"configuration-with-a-recognized-ca-certificate"},"Configuration with a recognized CA certificate"),(0,r.kt)("p",null,'If the broker public certificate is signed with a recognized CA, the JVM\ndefault trust store "cacerts (/etc/pki/java/cacerts)" will be used. Nothing\nto configure for Centreon MAP service'))}g.isMDXComponent=!0},32492:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/desktop-ssl-option-35d21867fe17acbfe78e1702056257b6.png"},14043:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/map-address-https-fc6a107dda2236d28ff090b466462bde.png"},30740:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/output_broker-494e4f58825c3c0646c9ea67fca2bd30.png"},64666:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/output_broker_tls-06c7ceab462d3430c573d0546159aef1.png"}}]);