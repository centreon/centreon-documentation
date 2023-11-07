"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[71342],{2912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>N,frontMatter:()=>s,metadata:()=>c,toc:()=>m});n(67294);var a=n(3905),r=n(51715),l=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"cloud-azure-web-appserviceplan",title:"Azure App Service Plan"},u=void 0,c={unversionedId:"integrations/plugin-packs/procedures/cloud-azure-web-appserviceplan",id:"integrations/plugin-packs/procedures/cloud-azure-web-appserviceplan",title:"Azure App Service Plan",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-azure-web-appserviceplan.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-azure-web-appserviceplan",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/cloud-azure-web-appserviceplan",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-azure-web-appserviceplan.md",tags:[],version:"current",frontMatter:{id:"cloud-azure-web-appserviceplan",title:"Azure App Service Plan"},sidebar:"pp",previous:{title:"Azure App Service",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/cloud-azure-web-appservice"},next:{title:"Azure Application Gateway",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/cloud-azure-network-appgateway"}},d={},m=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"R\xe8gles de d\xe9couverte",id:"r\xe8gles-de-d\xe9couverte",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3},{value:"Les identifiants ont chang\xe9 et mon Plugin ne fonctionne plus",id:"les-identifiants-ont-chang\xe9-et-mon-plugin-ne-fonctionne-plus",level:4},{value:"<code>UNKNOWN: Login endpoint API returns error code &#39;ERROR_NAME&#39; (add --debug option for detailed message)</code>",id:"unknown-login-endpoint-api-returns-error-code-error_name-add---debug-option-for-detailed-message",level:4},{value:"<code>UNKNOWN: 500 Can&#39;t connect to login.microsoftonline.com:443</code>",id:"unknown-500-cant-connect-to-loginmicrosoftonlinecom443",level:4},{value:"<code>UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values</code>",id:"unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values",level:4}],k={toc:m},g="wrapper";function N(e){var{components:t}=e,s=o(e,["components"]);return(0,a.kt)(g,p(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},k,s),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,a.kt)("p",null,"Un plan App Service d\xe9finit un ensemble de ressources de calcul n\xe9cessaires \xe0 l\u2019ex\xe9cution d\u2019une application web. Ces ressources\nde calcul sont analogues \xe0 la batterie de serveurs dans l\u2019h\xe9bergement web classique. Une ou plusieurs applications peuvent \xeatre\nconfigur\xe9es pour s\u2019ex\xe9cuter sur les m\xeames ressources informatiques (ou dans le m\xeame plan App Service)."),(0,a.kt)("p",null,"Le connecteur de supervision Centreon ",(0,a.kt)("em",{parentName:"p"},"Azure App Service Plan")," s'appuie sur les API Azure Monitor afin de r\xe9cuperer les m\xe9triques relatives au service\nApp Service Plan. Il est possible d'utiliser les 2 modes propos\xe9s par Microsoft: RestAPI ou Azure CLI."),(0,a.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,a.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Instances Azure ",(0,a.kt)("em",{parentName:"li"},"App Service Plan"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"CPU"),(0,a.kt)("li",{parentName:"ul"},"Data"),(0,a.kt)("li",{parentName:"ul"},"Health"),(0,a.kt)("li",{parentName:"ul"},"Memory"),(0,a.kt)("li",{parentName:"ul"},"Socket"),(0,a.kt)("li",{parentName:"ul"},"Tcp-Connections")))),(0,a.kt)("h3",{id:"r\xe8gles-de-d\xe9couverte"},"R\xe8gles de d\xe9couverte"),(0,a.kt)("p",null,"Le connecteur de supervision Centreon ",(0,a.kt)("em",{parentName:"p"},"Azure App Service Plan")," inclut un ",(0,a.kt)("em",{parentName:"p"},"provider")," de d\xe9couverte d'H\xf4tes nomm\xe9 ",(0,a.kt)("strong",{parentName:"p"},"Microsoft Azure App Service Plan"),".\nCelui-ci permet de d\xe9couvrir l'ensemble des instances ",(0,a.kt)("em",{parentName:"p"},"App Service Plan")," rattach\xe9s \xe0 une ",(0,a.kt)("em",{parentName:"p"},"souscription")," Microsoft Azure donn\xe9e:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(22121).Z,width:"608",height:"188"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"La d\xe9couverte ",(0,a.kt)("em",{parentName:"p"},"Azure App Service Plan")," n'est compatible qu'avec le mode 'api'. Le mode 'azcli' n'est pas support\xe9 dans le cadre\nde cette utilisation. ")),(0,a.kt)("p",null,"Vous trouverez plus d'informations sur la d\xe9couverte d'H\xf4tes et son fonctionnement sur la documentation du module:\n",(0,a.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery"},"D\xe9couverte des h\xf4tes")),(0,a.kt)("h3",{id:"m\xe9triques--statuts-collect\xe9s"},"M\xe9triques & statuts collect\xe9s"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Cpu",label:"Cpu",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appserviceplan.cpu.usage.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CPU Percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,a.kt)(l.Z,{value:"Data",label:"Data",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appserviceplan.data.in.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Data In"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appserviceplan.data.out.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Data Out"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B"))))),(0,a.kt)(l.Z,{value:"Health",label:"Health",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Status Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Current operational status")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"summary"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Last related status message"))))),(0,a.kt)(l.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appserviceplan.memory.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Memory Percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,a.kt)(l.Z,{value:"Socket",label:"Socket",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appserviceplan.socket.inboundall.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"SocketInboundAll"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appserviceplan.socket.loopback.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"SocketLoopback"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appserviceplan.socket.outboundall.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"SocketOutboundAll"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appserviceplan.socket.outboundestablished.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"SocketOutboundEstablished"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appserviceplan.socket.outboundtimewait.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"SocketOutboundTimeWait"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,a.kt)(l.Z,{value:"Tcp-Connections",label:"Tcp-Connections",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appserviceplan.connections.tcp.closewait.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"TCP Close Wait"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appserviceplan.connections.tcp.closing.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"TCP Closing"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appserviceplan.connections.tcp.finwait1.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"TCP Fin Wait 1"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appserviceplan.connections.tcp.finwait2.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"TCP Fin Wait 2"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appserviceplan.connections.tcp.lastack.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"TCP Last Ack"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appserviceplan.connections.tcp.synreceived.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"TCP Syn Received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appserviceplan.connections.tcp.synsent.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"TCP Syn Sent"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appserviceplan.connections.tcp.timewait.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"TCP Time Wait"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("p",null,"Rendez-vous sur la ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/azure-credential-configuration"},"documentation d\xe9di\xe9e")," afin d'obtenir les pr\xe9requis n\xe9cessaires pour interroger les API d'Azure."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon devant superviser des resources Azure App Service Plan:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-Web-AppServicePlan-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Integration de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Azure App Service Plan")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon devant superviser des resources Azure App Service Plan:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-Web-AppServicePlan-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le RPM du Pack ",(0,a.kt)("em",{parentName:"li"},"Azure App Service Plan"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-azure-web-appserviceplan.noarch\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Integration de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Azure App Service Plan")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ajoutez un H\xf4te \xe0 Centreon, remplissez le champ ",(0,a.kt)("em",{parentName:"li"},"Adresse IP/DNS")," avec l'adresse 127.0.0.1\net appliquez-lui le Mod\xe8le d'H\xf4te ",(0,a.kt)("em",{parentName:"li"},"Cloud-Azure-Web-AppServicePlan-custom"),"."),(0,a.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, les Macros ci-dessous indiqu\xe9es comme requises (",(0,a.kt)("em",{parentName:"li"},"Mandatory"),")\ndoivent \xeatre renseign\xe9es selon le ",(0,a.kt)("em",{parentName:"li"},"custom mode")," utilis\xe9.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Deux m\xe9thodes peuvent \xeatre utilis\xe9es lors de l'assignation des Macros:"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Utilisation de l'ID complet de la ressource (de type ",(0,a.kt)("inlineCode",{parentName:"li"},"/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/Microsoft.Network/serverFarms/<resource_name>"),")\ndans la Macro ",(0,a.kt)("em",{parentName:"li"},"AZURERESOURCE")),(0,a.kt)("li",{parentName:"ul"},"Utilisation du nom de la ressource dans la Macro ",(0,a.kt)("em",{parentName:"li"},"AZURERESOURCE")," associ\xe9e aux Macros ",(0,a.kt)("em",{parentName:"li"},"AZURERESOURCEGROUP")," et ",(0,a.kt)("em",{parentName:"li"},"AZURERESOURCETYPE")))),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Azure Monitor API",label:"Azure Monitor API",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURECUSTOMMODE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Custom mode 'api'")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURESUBSCRIPTION"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Subscription ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURETENANT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Tenant ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURECLIENTID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Client ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURECLIENTSECRET"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Client secret")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"ID or name of the App Service Plan resource")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCEGROUP"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Associated Resource Group if resource name is used")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCETYPE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Associated Resource Type if resource name is used"))))),(0,a.kt)(l.Z,{value:"Azure AZ CLI",label:"Azure AZ CLI",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURECUSTOMMODE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Custom mode 'azcli'")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURESUBSCRIPTION"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Subscription ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"ID or name of the App Service Plan resource")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCEGROUP"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Associated Resource Group if resource name is used")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCETYPE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Associated Resource Type if resource name is used")))))),(0,a.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de\ncommande depuis votre collecteur Centreon en vous connectant avec l'utilisateur\n",(0,a.kt)("em",{parentName:"p"},"centreon-engine"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_azure_web_appserviceplan_api.pl \\\n    --plugin=cloud::azure::web::appserviceplan::plugin \\\n    --mode=cpu \\\n    --custommode=api \\\n    --subscription='xxxxxxxxx' \\\n    --tenant='xxxxxxxxx' \\\n    --client-id='xxxxxxxxx' \\\n    --client-secret='xxxxxxxxx' \\\n    --resource='PLAN001ABCD' \\\n    --resource-group='RSG1234' \\\n    --timeframe='900' \\\n    --interval='PT5M' \\\n    --aggregation='Total' \\\n    --warning-cpu-usage-percentage='80' \\\n    --critical-cpu-usage-percentage='90'\n")),(0,a.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Instance 'PLAN001ABCD' Statistic 'total' Metrics CPU Percentage: 58.50% |\n'PLAN001ABCD~total#appserviceplan.cpu.usage.percentage'=58.50%;;;0;100\n")),(0,a.kt)("p",null,"La commande ci-dessus v\xe9rifie les statistiques ",(0,a.kt)("em",{parentName:"p"},"CPU")," de l'instance ",(0,a.kt)("em",{parentName:"p"},"App Service Plan")," nomm\xe9e ",(0,a.kt)("em",{parentName:"p"},"PLAN001ABCD"),"\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--plugin=cloud::azure::web::appserviceplan::plugin --mode=cpu --resource='PLAN001ABCD'"),") et li\xe9e au ",(0,a.kt)("em",{parentName:"p"},"Resource Group")," ",(0,a.kt)("em",{parentName:"p"},"RSG1234"),"\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--resource-group='RSG1234'"),")."),(0,a.kt)("p",null,"Le mode de connexion utilis\xe9 est 'api' (",(0,a.kt)("inlineCode",{parentName:"p"},"--custommode=api"),"), les param\xe8tres d'authentification n\xe9cessaires \xe0 l'utilisation de ce mode\nsont donc renseign\xe9s en fonction (",(0,a.kt)("inlineCode",{parentName:"p"},"--subscription='xxxxxxxxx' --tenant='xxxxxxx' --client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'"),")."),(0,a.kt)("p",null,"Les statuts cacul\xe9s se baseront sur les valeurs totales d'un \xe9chantillon dans un intervalle de 15 minutes / 900 secondes  (",(0,a.kt)("inlineCode",{parentName:"p"},"--timeframe='900'"),")\navec un \xe9tat retourn\xe9 par tranche de 5 minutes (",(0,a.kt)("inlineCode",{parentName:"p"},"--interval='PT5M'"),")."),(0,a.kt)("p",null,"Dans cet exemple, une alarme de type WARNING sera d\xe9clench\xe9e si l'utilisation totale du ",(0,a.kt)("em",{parentName:"p"},"CPU")," pendant l'intervalle donn\xe9\nest sup\xe9rieur \xe0 80% (",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-cpu-usage-percentage='80'"),"); l'alarme sera de type CRITICAL au-del\xe0 de 90% d'utilisation.\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-cpu-usage-percentage='90'"),")."),(0,a.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification\npeut \xeatre affich\xe9e en ajoutant le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_azure_web_appserviceplan_api.pl \\\n    --plugin=cloud::azure::web::appserviceplan::plugin \\\n    --mode=cpu \\\n    --help\n")),(0,a.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,a.kt)("h4",{id:"les-identifiants-ont-chang\xe9-et-mon-plugin-ne-fonctionne-plus"},"Les identifiants ont chang\xe9 et mon Plugin ne fonctionne plus"),(0,a.kt)("p",null,"Le Plugin utilise un fichier de cache pour conserver les informations de connexion afin de ne pas\nse r\xe9-authentifier \xe0 chaque appel. Si des informations sur le Tenant, la Souscription ou les\nClient ID / Secret changent, il est n\xe9cessaire de supprimer le fichier de cache du Plugin. "),(0,a.kt)("p",null,"Celui ci se trouve dans le r\xe9pertoire ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/centreon/centplugins/")," avec le nom azure",(0,a.kt)("em",{parentName:"p"},"api"),(0,a.kt)("inlineCode",{parentName:"p"},"<md5>_<md5>_<md5>_<md5>"),"."),(0,a.kt)("h4",{id:"unknown-login-endpoint-api-returns-error-code-error_name-add---debug-option-for-detailed-message"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)")),(0,a.kt)("p",null,"Cette erreur signifie que l'un des param\xe8tres utilis\xe9s pour authentifier la requ\xeate est incorrect. Le param\xe8tre\nen question est sp\xe9cifi\xe9 dans le message d'erreur en lieu et place de 'ERROR_DESC'. "),(0,a.kt)("p",null,"Par exemple, 'invalid_client' signifie que le client-id et/ou le client-secret\nn'est (ne sont) pas valide(s)."),(0,a.kt)("h4",{id:"unknown-500-cant-connect-to-loginmicrosoftonlinecom443"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to login.microsoftonline.com:443")),(0,a.kt)("p",null,"Si l'utilisation d'un proxy est requise pour les connexions HTTP depuis le\ncollecteur Centreon, il est n\xe9cessaire de le pr\xe9ciser dans la commande en\nutilisant l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany.com:8080'"),"."),(0,a.kt)("p",null,"Il est \xe9galement possible qu'un \xe9quipement tiers de type Pare-feu bloque la requ\xeate\neffectu\xe9e par le Plugin."),(0,a.kt)("h4",{id:"unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values")),(0,a.kt)("p",null,"Lors du d\xe9ploiement de mes contr\xf4les, j'obtiens le message suivant 'UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values'. "),(0,a.kt)("p",null,"Cela signifie qu'Azure n'a pas consolid\xe9 de donn\xe9es sur la p\xe9riode."),(0,a.kt)("p",null,"Vous pouvez ajouter ",(0,a.kt)("inlineCode",{parentName:"p"},"--zeroed")," \xe0 la macro EXTRAOPTIONS du ",(0,a.kt)("strong",{parentName:"p"},"service")," en question afin de forcer le stockage d'un 0 et ainsi \xe9viter un statut UNKNOWN."))}N.isMDXComponent=!0},22121:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cloud-azure-web-appserviceplan-provider-2e8adfe0cbc8c27f34f6b094545b6250.png"}}]);