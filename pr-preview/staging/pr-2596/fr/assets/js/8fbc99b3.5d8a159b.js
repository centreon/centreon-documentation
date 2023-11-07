"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[53226],{81751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>N,frontMatter:()=>u,metadata:()=>c,toc:()=>m});n(67294);var r=n(3905),a=n(51715),l=n(7626);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={id:"cloud-azure-storage-storagesync",title:"Azure Storage Sync"},p=void 0,c={unversionedId:"integrations/plugin-packs/procedures/cloud-azure-storage-storagesync",id:"integrations/plugin-packs/procedures/cloud-azure-storage-storagesync",title:"Azure Storage Sync",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-azure-storage-storagesync.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-azure-storage-storagesync",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/cloud-azure-storage-storagesync",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-azure-storage-storagesync.md",tags:[],version:"current",frontMatter:{id:"cloud-azure-storage-storagesync",title:"Azure Storage Sync"},sidebar:"pp",previous:{title:"Azure Storage Account",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/cloud-azure-storage-storageaccount"},next:{title:"Azure Traffic Manager",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/cloud-azure-network-trafficmanager"}},d={},m=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"R\xe8gles de d\xe9couverte",id:"r\xe8gles-de-d\xe9couverte",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3},{value:"Les identifiants ont chang\xe9 et mon Plugin ne fonctionne plus",id:"les-identifiants-ont-chang\xe9-et-mon-plugin-ne-fonctionne-plus",level:4},{value:"<code>UNKNOWN: Login endpoint API returns error code &#39;ERROR_NAME&#39; (add --debug option for detailed message)</code>",id:"unknown-login-endpoint-api-returns-error-code-error_name-add---debug-option-for-detailed-message",level:4},{value:"<code>UNKNOWN: 500 Can&#39;t connect to login.microsoftonline.com:443</code>",id:"unknown-500-cant-connect-to-loginmicrosoftonlinecom443",level:4},{value:"<code>UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values</code>",id:"unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values",level:4}],g={toc:m},k="wrapper";function N(e){var{components:t}=e,u=s(e,["components"]);return(0,r.kt)(k,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},g,u),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,r.kt)("p",null,"En transformant un serveur Windows en cache rapide, le service Azure Storage\nSync vous permet de centraliser votre partage de fichiers dans Azure Files."),(0,r.kt)("p",null,"Le connecteur de supervision Centreon ",(0,r.kt)("em",{parentName:"p"},"Azure Storage Sync")," s'appuie sur les API Azure Monitor afin de r\xe9cuperer les m\xe9triques relatives au service\nStorage Sync. Il est possible d'utiliser les 2 modes propos\xe9s par Microsoft:\nRestAPI ou Azure CLI."),(0,r.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,r.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Files synchronised "),(0,r.kt)("li",{parentName:"ul"},"Recalls statistics"),(0,r.kt)("li",{parentName:"ul"},"Server Status")),(0,r.kt)("h3",{id:"r\xe8gles-de-d\xe9couverte"},"R\xe8gles de d\xe9couverte"),(0,r.kt)("p",null,"Le connecteur de supervision Centreon ",(0,r.kt)("em",{parentName:"p"},"Azure Storage Sync")," inclut un ",(0,r.kt)("em",{parentName:"p"},"provider")," de d\xe9couverte\nd'H\xf4tes nomm\xe9 ",(0,r.kt)("em",{parentName:"p"},"Microsoft Azure Storage Syncs**. Celui-ci permet de d\xe9couvrir l'ensemble des instances\n"),"Azure Storage Sync",(0,r.kt)("em",{parentName:"p"}," rattach\xe9es \xe0 une "),"souscription* Microsoft Azure donn\xe9e:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(67625).Z,width:"602",height:"187"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"La d\xe9couverte ",(0,r.kt)("em",{parentName:"p"},"Azure Storage Sync")," n'est compatible qu'avec le mode 'api'. Le mode 'azcli' n'est pas support\xe9 dans le cadre\nde cette utilisation.")),(0,r.kt)("p",null,"Vous trouverez plus d'informations sur la d\xe9couverte d'H\xf4tes et son\nfonctionnement sur la documentation du module:\n",(0,r.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery"},"D\xe9couverte des h\xf4tes")),(0,r.kt)("h3",{id:"m\xe9triques--statuts-collect\xe9s"},"M\xe9triques & statuts collect\xe9s"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Files-Synced",label:"Files-Synced",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"storagesync.files.synced.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Files Synced"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"storagesync.item.errors.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Item errors"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"storagesync.bytes.synced.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Bytes synced"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B"))))),(0,r.kt)(l.Z,{value:"Recalls",label:"Recalls",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"storagesync.recalls.succesful.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Cloud tiering recall success rate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"storagesync.recalls.application.size.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Cloud tiering recall size by application"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"storagesync.recalls.size.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Cloud tiering recall size"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"storagesync.recalls.total.size.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Cloud tiering recall"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"storagesync.recalls.throughput.size.bytespersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Cloud tiering recall throughput"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B/s"))))),(0,r.kt)(l.Z,{value:"Server-Status",label:"Server-Status",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"storagesync.heartbeat.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Heartbeat"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Count")))))),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("p",null,"Rendez-vous sur la ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/azure-credential-configuration"},"documentation d\xe9di\xe9e")," afin d'obtenir les pr\xe9requis n\xe9cessaires pour interroger les API d'Azure."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources ",(0,r.kt)("em",{parentName:"li"},"Azure Storage Sync"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-Storage-StorageSync-Api\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Integration de Centreon, installer le connecteur de supervision ",(0,r.kt)("em",{parentName:"li"},"Azure Storage Sync")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,r.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources ",(0,r.kt)("em",{parentName:"li"},"Azure Storage Sync"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-Storage-StorageSync-Api\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le RPM du Pack ",(0,r.kt)("em",{parentName:"li"},"Azure Storage Sync"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-azure-storage-storagesync\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Integration de Centreon, installer le connecteur de supervision ",(0,r.kt)("em",{parentName:"li"},"Azure Storage Sync")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ajoutez un H\xf4te \xe0 Centreon, remplissez le champ ",(0,r.kt)("em",{parentName:"li"},"Adresse IP/DNS")," avec l'adresse 127.0.0.1\net appliquez-lui le Mod\xe8le d'H\xf4te ",(0,r.kt)("em",{parentName:"li"},"Cloud-Azure-Storage-StorageSync-custom"),"."),(0,r.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, les Macros ci-dessous indiqu\xe9es comme requises (",(0,r.kt)("em",{parentName:"li"},"Mandatory"),")\ndoivent \xeatre renseign\xe9es selon le ",(0,r.kt)("em",{parentName:"li"},"custom mode")," utilis\xe9.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Deux m\xe9thodes peuvent \xeatre utilis\xe9es lors de l'assignation des Macros:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Utilisation de l'ID complet de la ressource (de type ",(0,r.kt)("inlineCode",{parentName:"li"},"/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/Microsoft.EventHub/<resource_type>/<resource_name>"),")\ndans la Macro ",(0,r.kt)("em",{parentName:"li"},"AZURERESOURCE")),(0,r.kt)("li",{parentName:"ul"},"Utilisation du nom de la ressource dans la Macro ",(0,r.kt)("em",{parentName:"li"},"AZURERESOURCE")," associ\xe9e \xe0 la Macro ",(0,r.kt)("em",{parentName:"li"},"AZURERESOURCEGROUP")," "))),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Azure Monitor API",label:"Azure Monitor API",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"AZURECUSTOMMODE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Custom mode 'api'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"AZURESUBSCRIPTION"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Subscription ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"AZURETENANT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Tenant ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"AZURECLIENTID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Client ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"AZURECLIENTSECRET"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Client secret")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ID or name of the Storage Sync resource")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCEGROUP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Associated Resource Group if resource name is used"))))),(0,r.kt)(l.Z,{value:"Azure AZ CLI",label:"Azure AZ CLI",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"AZURECUSTOMMODE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Custom mode 'azcli'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"AZURESUBSCRIPTION"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Subscription ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ID or name of the Storage Sync resource")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCEGROUP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Associated Resource Group if resource name is used")))))),(0,r.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,r.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis votre collecteur Centreon en vous connectant avec\nl'utilisateur ",(0,r.kt)("em",{parentName:"p"},"centreon-engine"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," /usr/lib/centreon/plugins//centreon_azure_storage_storagesync_api.pl   \\\n    --plugin=cloud::azure::storage::storagesync::plugin  \\\n    --mode=files-synced  \\\n    --custommode='api'  \\\n    --subscription='xxxxxxxxx' \\\n    --tenant='xxxxxxxxx' \\\n    --client-id='xxxxxxxxx' \\\n    --client-secret='xxxxxxxxx' \\\n    --resource='STO001ABCD' \\\n    --resource-group='RSG1234'\n    --aggregation='Total' \\\n    --timeframe='900' \\\n    --interval='PT5M' \\\n    --warning-item-errors='800'  \\\n    --critical-item-errors='900'\n")),(0,r.kt)("p",null," La commande devrait retourner un message de sortie similaire \xe0 :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OK : Instance 'STO001ABCD' Statistic 'total'Files Synced: 546.00, Item errors: 3.00, Bytes synced: 246.00 |\n'STO001ABCD~storagesync.files.synced.count'=546;;;; 'STO001ABCD~storagesync.item.errors.count'=3;800;900;0; 'STO001ABCD~storagesync.bytes.synced.bytes'=246;;;0;\n")),(0,r.kt)("p",null,"La commande ci-dessus v\xe9rifie le nombre d'erreurs de synchronisation sur l'instance ",(0,r.kt)("em",{parentName:"p"},"Storage Sync")," nomm\xe9e ",(0,r.kt)("em",{parentName:"p"},"STO001ABCD"),"\n(",(0,r.kt)("inlineCode",{parentName:"p"},"--plugin=cloud::azure::network::cdn::plugin --mode=requests --resource='STO001ABCD'"),") et li\xe9e au ",(0,r.kt)("em",{parentName:"p"},"Resource Group")," ",(0,r.kt)("em",{parentName:"p"},"RSG1234"),"\n(",(0,r.kt)("inlineCode",{parentName:"p"},"--resource-group='RSG1234'"),")."),(0,r.kt)("p",null,"Le mode de connexion utilis\xe9 est 'api' (",(0,r.kt)("inlineCode",{parentName:"p"},"--custommode=api"),"), les param\xe8tres d'authentification n\xe9cessaires \xe0 l'utilisation de ce mode\nsont donc renseign\xe9s en fonction (",(0,r.kt)("inlineCode",{parentName:"p"},"--subscription='xxxxxxxxx' --tenant='xxxxxxx' --client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'"),")."),(0,r.kt)("p",null,"Les statuts cacul\xe9s se baseront sur les valeurs totales d'un \xe9chantillon dans un intervalle de 15 minutes / 900 secondes  (",(0,r.kt)("inlineCode",{parentName:"p"},"--timeframe='900'"),")\navec un \xe9tat retourn\xe9 par tranche de 5 minutes (",(0,r.kt)("inlineCode",{parentName:"p"},"--interval='PT5M'"),")."),(0,r.kt)("p",null,"Dans cet exemple, une alarme de type WARNING sera d\xe9clench\xe9e si le nombre d'erreurs de synchronisation pendant l'intervalle donn\xe9\nest sup\xe9rieur \xe0 800 (",(0,r.kt)("inlineCode",{parentName:"p"},"--warning-item-errors='800'"),"); l'alarme sera de type CRITICAL au-del\xe0 de 900 erreurs\n(",(0,r.kt)("inlineCode",{parentName:"p"},"--critical-item-errors='900'"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_azure_storage_storagesync_api.pl   \\\n    --plugin=cloud::azure::storage::storagesync::plugin  \\\n    --mode=files-synced  \\\n    --help\n")),(0,r.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s en ajoute le param\xe8tre\n",(0,r.kt)("inlineCode",{parentName:"p"},"--list-mode")," \xe0 la commande:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," /usr/lib/centreon/plugins//centreon_azure_storage_storagesync_api.pl   \\\n    --plugin=cloud::azure::storage::storagesync::plugin  \\\n    --list-mode\n")),(0,r.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,r.kt)("h4",{id:"les-identifiants-ont-chang\xe9-et-mon-plugin-ne-fonctionne-plus"},"Les identifiants ont chang\xe9 et mon Plugin ne fonctionne plus"),(0,r.kt)("p",null,"Le Plugin utilise un fichier de cache pour conserver les informations de connexion afin de ne pas\nse r\xe9-authentifier \xe0 chaque appel. Si des informations sur le Tenant, la Souscription ou les\nClient ID / Secret changent, il est n\xe9cessaire de supprimer le fichier de cache du Plugin. "),(0,r.kt)("p",null,"Celui ci se trouve dans le r\xe9pertoire ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/centreon/centplugins/")," avec le nom azure",(0,r.kt)("em",{parentName:"p"},"api"),(0,r.kt)("inlineCode",{parentName:"p"},"<md5>_<md5>_<md5>_<md5>"),"."),(0,r.kt)("h4",{id:"unknown-login-endpoint-api-returns-error-code-error_name-add---debug-option-for-detailed-message"},(0,r.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)")),(0,r.kt)("p",null,"Lors du d\xe9ploiement de mes contr\xf4les, j'obtiens le message suivant :\n",(0,r.kt)("inlineCode",{parentName:"p"},"UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)"),"."),(0,r.kt)("p",null,"Cela signifie que l'un des param\xe8tres utilis\xe9s pour authentifier la requ\xeate est incorrect. Le param\xe8tre\nen question est sp\xe9cifi\xe9 dans le message d'erreur en lieu et place de 'ERROR_DESC'. "),(0,r.kt)("p",null,"Par exemple, 'invalid_client' signifie que le client-id et/ou le client-secret\nn'est (ne sont) pas valide(s)."),(0,r.kt)("h4",{id:"unknown-500-cant-connect-to-loginmicrosoftonlinecom443"},(0,r.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to login.microsoftonline.com:443")),(0,r.kt)("p",null,"Si l'utilisation d'un proxy est requise pour les connexions HTTP depuis le\ncollecteur Centreon, il est n\xe9cessaire de le pr\xe9ciser dans la commande en\nutilisant l'option ",(0,r.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany.com:8080'"),"."),(0,r.kt)("p",null,"Il est \xe9galement possible qu'un \xe9quipement tiers de type Pare-feu bloque la requ\xeate\neffectu\xe9e par le Plugin."),(0,r.kt)("h4",{id:"unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values"},(0,r.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values")),(0,r.kt)("p",null,"Lors du d\xe9ploiement de mes contr\xf4les, j'obtiens le message suivant 'UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values'. "),(0,r.kt)("p",null,"Cela signifie qu'Azure n'a pas consolid\xe9 de donn\xe9es sur la p\xe9riode."),(0,r.kt)("p",null,"Vous pouvez ajouter ",(0,r.kt)("inlineCode",{parentName:"p"},"--zeroed")," \xe0 la macro EXTRAOPTIONS du ",(0,r.kt)("strong",{parentName:"p"},"service")," en question afin de forcer le stockage d'un 0 et ainsi \xe9viter un statut UNKNOWN."))}N.isMDXComponent=!0},67625:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cloud-azure-storage-storagesync-provider-41c4f2fec53cde9211a51231d115ba2c.png"}}]);