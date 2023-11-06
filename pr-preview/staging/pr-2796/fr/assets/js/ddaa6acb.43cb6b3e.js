"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[21408],{44068:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>N,frontMatter:()=>u,metadata:()=>c,toc:()=>m});r(67294);var n=r(3905),a=r(51715),i=r(7626);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const u={id:"cloud-azure-storage-acr",title:"Azure Container Registry"},p=void 0,c={unversionedId:"integrations/plugin-packs/procedures/cloud-azure-storage-acr",id:"integrations/plugin-packs/procedures/cloud-azure-storage-acr",title:"Azure Container Registry",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-azure-storage-acr.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-azure-storage-acr",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/cloud-azure-storage-acr",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-azure-storage-acr.md",tags:[],version:"current",frontMatter:{id:"cloud-azure-storage-acr",title:"Azure Container Registry"},sidebar:"pp",previous:{title:"Azure Classic Storage",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/cloud-azure-classicstorage-storageaccount"},next:{title:"Azure Cosmos DB",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/cloud-azure-database-cosmosdb"}},d={},m=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"R\xe8gles de d\xe9couverte",id:"r\xe8gles-de-d\xe9couverte",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"FAQ",id:"faq",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:3},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3}],g={toc:m},k="wrapper";function N(e){var{components:t}=e,u=o(e,["components"]);return(0,n.kt)(k,l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}({},g,u),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,n.kt)("p",null,"Azure Container Registry est un service de registre Docker manag\xe9 priv\xe9, qui est bas\xe9 sur le registre open source Docker 2.0. Il permet de cr\xe9er et de\ntenir \xe0 jour des registres de conteneurs Azure pour stocker et g\xe9rer des images conteneur Docker priv\xe9es et les artefacts associ\xe9s."),(0,n.kt)("p",null,"Le Plugin Centreon ",(0,n.kt)("em",{parentName:"p"},"Azure Container Registry")," s'appuie sur les API Azure Monitor afin de r\xe9cup\xe9rer les m\xe9triques relatives au service\nContainer Registry. "),(0,n.kt)("p",null,"Il est possible d'utiliser les 2 modes de connexion aux API Azure propos\xe9s par Microsoft: RestAPI ou Azure CLI."),(0,n.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,n.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Registries",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Storage-usage")))),(0,n.kt)("h3",{id:"r\xe8gles-de-d\xe9couverte"},"R\xe8gles de d\xe9couverte"),(0,n.kt)("p",null,"Le connecteur de supervision Centreon ",(0,n.kt)("em",{parentName:"p"},"Azure Container Registry")," inclut un fournisseur de d\xe9couverte\nd'H\xf4tes nomm\xe9 ",(0,n.kt)("strong",{parentName:"p"},"Microsoft Azure Container Registry"),". Celui-ci permet de d\xe9couvrir l'ensemble des instances\nrattach\xe9es \xe0 une ",(0,n.kt)("em",{parentName:"p"},"souscription")," Microsoft Azure donn\xe9e:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(10859).Z,width:"608",height:"188"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"La d\xe9couverte ",(0,n.kt)("em",{parentName:"p"},"Azure Container Registry")," n'est compatible qu'avec le mode 'api'. Le mode 'azcli' n'est pas support\xe9 dans le cadre\nde cette utilisation.\nVous trouverez plus d'informations sur la d\xe9couverte d'H\xf4tes et son fonctionnement sur la documentation du module:\n",(0,n.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery"},"D\xe9couverte des h\xf4tes"))),(0,n.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Storage-usage",label:"Storage-usage",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"instance"),"#azure.containerregistry.storage.used.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Storage used"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")))))),(0,n.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,n.kt)("p",null,"Rendez-vous sur la ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/azure-credential-configuration"},"documentation d\xe9di\xe9e")," afin d'obtenir les pr\xe9requis n\xe9cessaires pour interroger les API d'Azure."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon devant superviser des resources ",(0,n.kt)("em",{parentName:"li"},"Azure Container Registry"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-Storage-ContainerRegistry-Api\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Web Centreon, installer le Pack ",(0,n.kt)("em",{parentName:"li"},"Azure Container Registry")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"),"."))),(0,n.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon devant superviser des resources ",(0,n.kt)("em",{parentName:"li"},"Azure Container Registry"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-Storage-ContainerRegistry-Api\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le RPM du Pack ",(0,n.kt)("em",{parentName:"li"},"Azure Container Registry"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-azure-storage-acr.noarch\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Web Centreon, installer le Pack ",(0,n.kt)("em",{parentName:"li"},"Azure Container Registry")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"),".")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ajoutez un H\xf4te \xe0 Centreon, remplissez le champ ",(0,n.kt)("strong",{parentName:"li"},"Adresse IP/DNS")," avec l'adresse 127.0.0.1\net appliquez-lui le Mod\xe8le d'H\xf4te ",(0,n.kt)("strong",{parentName:"li"},"Cloud-Azure-Storage-ContainerRegistry-custom"),"."),(0,n.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, les Macros ci-dessous indiqu\xe9es comme requises (",(0,n.kt)("em",{parentName:"li"},"Mandatory"),")\ndoivent \xeatre renseign\xe9es selon le ",(0,n.kt)("em",{parentName:"li"},"custom mode")," utilis\xe9.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Deux m\xe9thodes peuvent \xeatre utilis\xe9es lors de l'assignation des Macros:"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Utilisation de l'ID complet de la ressource (de type ",(0,n.kt)("inlineCode",{parentName:"li"},"/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/Microsoft.ContainerRegistry/registries/<resource_name>"),")\ndans la Macro ",(0,n.kt)("em",{parentName:"li"},"AZURERESOURCE")),(0,n.kt)("li",{parentName:"ul"},"Utilisation du nom de la ressource dans la Macro ",(0,n.kt)("em",{parentName:"li"},"AZURERESOURCE")," associ\xe9e \xe0 la Macro ",(0,n.kt)("em",{parentName:"li"},"AZURERESOURCEGROUP")," "))),(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Azure Monitor API",label:"Azure Monitor API",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURECUSTOMMODE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Custom mode 'api'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURESUBSCRIPTION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Subscription ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURETENANT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Tenant ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURECLIENTID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Client ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURECLIENTSECRET"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Client secret")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ID or name of the Container Registry resource")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCEGROUP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Associated Resource Group if resource name is used"))))),(0,n.kt)(i.Z,{value:"Azure AZ CLI",label:"Azure AZ CLI",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURECUSTOMMODE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Custom mode 'azcli'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURESUBSCRIPTION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Subscription ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ID or name of the Container Registry resource")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCEGROUP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Associated Resource Group if resource name is used")))))),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("h3",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,n.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de\ncommande depuis votre collecteur Centreon en vous connectant avec l'utilisateur\n",(0,n.kt)("em",{parentName:"p"},"centreon-engine")," (",(0,n.kt)("inlineCode",{parentName:"p"},"#su - centreon-engine"),"):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_azure_storage_acr_api.pl \\\n    --plugin=cloud::azure::storage::acr::plugin \\\n    --mode=storage-usage \\\n    --custommode='api' \\\n    --subscription='xxxxxxxxx' \\\n    --tenant='xxxxxxxxx' \\\n    --client-id='xxxxxxxxx' \\\n    --client-secret='xxxxxxxxx' \\\n    --resource='ACR001ABCD' \\\n    --resource-group='RSG1234'\n    --aggregation='Total' \\\n    --timeframe='3600' \\\n    --interval='PT1H' \\\n    --warning-storage-used='80000000000' \\\n    --critical-item-errors='90000000000'\n")),(0,n.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Instance 'ACR001ABCD' Statistic 'total' Metrics Storage used: 74.86GB |\n'ACR001ABCD~total#azure.containerregistry.storage.used.bytes'=80379853954.00B;0:70000000000;0:90000000000;0;\n")),(0,n.kt)("p",null,"La commande ci-dessus v\xe9rifie l'\xe9tat du stockage d\xe9di\xe9 \xe0 l'instance ",(0,n.kt)("em",{parentName:"p"},"Container Registry")," nomm\xe9e ",(0,n.kt)("em",{parentName:"p"},"ACR001ABCD"),"\n(",(0,n.kt)("inlineCode",{parentName:"p"},"--plugin=cloud::azure::storage::acr::plugin --mode=storage-usage --resource='ACR001ABCD'"),") et li\xe9e au ",(0,n.kt)("em",{parentName:"p"},"Resource Group")," ",(0,n.kt)("em",{parentName:"p"},"RSG1234"),"\n(",(0,n.kt)("inlineCode",{parentName:"p"},"--resource-group='RSG1234'"),")."),(0,n.kt)("p",null,"Le mode de connexion utilis\xe9 est 'api' (",(0,n.kt)("inlineCode",{parentName:"p"},"--custommode=api"),"), les param\xe8tres d'authentification n\xe9cessaires \xe0 l'utilisation de ce mode\nsont donc renseign\xe9s en fonction (",(0,n.kt)("inlineCode",{parentName:"p"},"--subscription='xxxxxxxxx' --tenant='xxxxxxx' --client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'"),")."),(0,n.kt)("p",null,"Les valeurs obtenus sont le r\xe9sultat de la r\xe9cup\xe9ration d'un point unique sur une p\xe9riode d'une heure / 3600 secondes.\n(",(0,n.kt)("inlineCode",{parentName:"p"},"--timeframe='3600' --interval='PT1H'"),")."),(0,n.kt)("p",null,"Dans cet exemple, une alarme de type WARNING sera d\xe9clench\xe9e lorsque le stockage utilis\xe9 est sup\xe9rieur \xe0 80GB (",(0,n.kt)("inlineCode",{parentName:"p"},"--warning-storage-used='80000000000'"),");\nl'alarme sera de type CRITICAL au-del\xe0 de 90GB d'utilisation (",(0,n.kt)("inlineCode",{parentName:"p"},"--critical-storage-used='90000000000'"),")."),(0,n.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre affich\xe9e en ajoutant le param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_azure_storage_acr_api.pl \\\n    --plugin=cloud::azure::storage::acr::plugin \\\n    --mode=storage-usage  \\\n    --help\n")),(0,n.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,n.kt)("p",null,"Rendez-vous sur la ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#http-and-api-checks"},"documentation d\xe9di\xe9e")," des Plugins bas\xe9s sur HTTP/API."))}N.isMDXComponent=!0},10859:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/cloud-azure-storage-acr-provider-12fb0b8b76034878c127ba686f3103b9.png"}}]);