"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[16870],{13625:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>N,frontMatter:()=>o,metadata:()=>m,toc:()=>d});a(67294);var n=a(3905),r=a(51715),i=a(7626);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={id:"cloud-azure-management-insightsmetrics",title:"Azure InsightsMetrics"},u=void 0,m={unversionedId:"integrations/plugin-packs/procedures/cloud-azure-management-insightsmetrics",id:"integrations/plugin-packs/procedures/cloud-azure-management-insightsmetrics",title:"Azure InsightsMetrics",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-azure-management-insightsmetrics.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-azure-management-insightsmetrics",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/cloud-azure-management-insightsmetrics",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-azure-management-insightsmetrics.md",tags:[],version:"current",frontMatter:{id:"cloud-azure-management-insightsmetrics",title:"Azure InsightsMetrics"},sidebar:"pp",previous:{title:"Azure Functions",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/cloud-azure-compute-functions"},next:{title:"Azure Key Vault",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/cloud-azure-security-keyvault"}},c={},d=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"R\xe8gles de d\xe9couverte",id:"r\xe8gles-de-d\xe9couverte",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"FAQ",id:"faq",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:3}],g={toc:d},k="wrapper";function N(e){var{components:t}=e,a=p(e,["components"]);return(0,n.kt)(k,s(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){l(e,t,a[t])}))}return e}({},g,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Ce Pack est fourni \xe0 titre exp\xe9rimental (version 2.x.x).")),(0,n.kt)("p",null,"Le Pack Centreon ",(0,n.kt)("em",{parentName:"p"},"Azure InsightsMetrics")," permet de superviser des m\xe9triques additionelles relatives aux resources Azure. Pour cela,\nelle se base sur l'API ",(0,n.kt)("em",{parentName:"p"},"LogAnalytics")," d'Azure et ex\xe9cutes des requ\xeates KustoQL sur la base de donn\xe9es InsightsMetrics.\nCe Pack permet par exemple de r\xe9cup\xe9rer et de superviser les indicateurs syst\xe8me (CPU, m\xe9moire, disques...) de Virtual Machines directement sur Azure."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Le Plugin associ\xe9 est uniquement compatible avec le ",(0,n.kt)("em",{parentName:"p"},"custom-mode")," 'api'.")),(0,n.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,n.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Azure Virtual Machines",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"CPU"),(0,n.kt)("li",{parentName:"ul"},"Memory"),(0,n.kt)("li",{parentName:"ul"},"Logical-Disks")))),(0,n.kt)("h3",{id:"m\xe9triques--statuts-collect\xe9s"},"M\xe9triques & statuts collect\xe9s"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Cpu",label:"Cpu",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"instance"),"#azure.insights.cpu.average.utilization.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Average utilization percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"instance","~","ID"),"#azure.insights.cpu.core.utilization.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current utilization per core"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,n.kt)(i.Z,{value:"Logical-Disks",label:"Logical-Disks",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"instance","~","mount_point"),"#azure.insights.logicaldisk.used.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Logical Disk current usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"instance","~","mount_point"),"#azure.insights.logicaldisk.used.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Logical Disk current usage percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"instance","~","mount_point"),"#azure.insights.logicaldisk.free.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Logical Disk current free percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"instance","~","mount_point"),"#azure.insights.logicaldisks.io.readspersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Logical Disk current IO/s reads rate"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"instance","~","mount_point"),"#azure.insights.logicaldisks.io.readbytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Logical Disk current IO B/s reads rate"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"instance","~","mount_point"),"#azure.insights.logicaldisks.io.writespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Logical Disk current IO writes rate"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"instance","~","mount_point"),"#azure.insights.logicaldisks.io.transferspersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Logical Disk current IO transfers rate"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count/s"))))),(0,n.kt)(i.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"instance"),"#azure.insights.memory.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current memory usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"instance"),"#azure.insights.memory.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current memory usage percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"instance"),"#azure.insights.memory.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current memory usage percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"instance"),"#azure.insights.memory.available.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current memory available percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")))))),(0,n.kt)("h3",{id:"r\xe8gles-de-d\xe9couverte"},"R\xe8gles de d\xe9couverte"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Services",label:"Services",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Rule name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Cloud-Azure-Management-InsightsMetrics-Api-VirtualMachine-Logical-Disks-Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover logical disks associated to Azure Virtual Machines")))))),(0,n.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,n.kt)("p",null,"Rendez-vous sur la ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/azure-credential-configuration"},"documentation d\xe9di\xe9e")," afin d'obtenir les pr\xe9requis n\xe9cessaires pour interroger les API d'Azure."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon devant superviser des resources ",(0,n.kt)("em",{parentName:"li"},"via")," InsightsMetrics:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-Management-InsightsMetrics-Api\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Web Centreon, installer le Pack ",(0,n.kt)("em",{parentName:"li"},"Azure InsightsMetrics")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"),"."))),(0,n.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon devant superviser des resources ",(0,n.kt)("em",{parentName:"li"},"via")," InsightsMetrics:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-Management-InsightsMetrics-Api\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le RPM du Pack ",(0,n.kt)("em",{parentName:"li"},"Azure InsightsMetrics"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-azure-management-insightsmetrics.noarch\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Web Centreon, installer le Pack ",(0,n.kt)("em",{parentName:"li"},"Azure InsightsMetrics")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"),".")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ajoutez un H\xf4te \xe0 Centreon, remplissez le champ ",(0,n.kt)("em",{parentName:"li"},"Adresse IP/DNS")," avec l'adresse 127.0.0.1\net appliquez-lui le Mod\xe8le d'H\xf4te ",(0,n.kt)("em",{parentName:"li"},"Cloud-Azure-Management-InsightsMetrics-XXX-custom")," appropri\xe9 au type de ressource \xe0 superviser\n(par exemple ",(0,n.kt)("em",{parentName:"li"},"Cloud-Azure-Management-InsightsMetrics-VirtualMachine-custom")," pour une resource Azure VM)."),(0,n.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, les Macros ci-dessous indiqu\xe9es comme requises (",(0,n.kt)("em",{parentName:"li"},"Mandatory"),")\ndoivent \xeatre renseign\xe9es:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURECUSTOMMODE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Custom mode 'api'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURELOGANALYTICSENDPOINT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"LogAnalytics endpoint (default: ",(0,n.kt)("inlineCode",{parentName:"td"},"https://api.loganalytics.io"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURESUBSCRIPTION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Subscription ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZUREWORKSPACEID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"LogAnalytics workspace ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURETENANT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Tenant ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURECLIENTID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Client ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURECLIENTSECRET"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Client secret")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"full ID of the resource to monitor")))),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("h3",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,n.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de\ncommande depuis votre collecteur Centreon en vous connectant avec l'utilisateur\n",(0,n.kt)("em",{parentName:"p"},"centreon-engine")," (",(0,n.kt)("inlineCode",{parentName:"p"},"#su - centreon-engine"),"):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_azure_management_insightsmetrics_api.pl \\\n    --plugin=cloud::azure::management::insightsmetrics::plugin \\\n    --mode=cpu --custommode='api' --management-endpoint='https://api.loganalytics.io' \\\n    --subscription='xxxxxxxxx' --tenant='xxxxxxx' --client-id='xxxxxxxx' --client-secret='xxxxxxxxxx' \\\n    --workspace-id='xxxxxxxxxxxxxxx' \\\n    --filter-resourceid='/subscriptions/XXXX/resourcegroups/my_resourcegroup1/providers/microsoft.compute/virtualmachines/my_vm1' \\\n    --warning-average-utilization-percentage='90' \\\n    --critical-average-utilization-percentage='95'\n")),(0,n.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: 2 CPU(s) average utilization: 2.18 % - All CPUs are ok | 'azure.insights.cpu.average.utilization.percentage'=2.18%;0:90;0:95;0;100\n'1#azure.insights.cpu.core.utilization.percentage'=2.12%;;;0;100 '2#azure.insights.cpu.core.utilization.percentage'=2.25%;;;0;100\nComputer 'my_vm1'\n2 CPU(s) average utilization: 2.18 %\nCPU #1 usage : 2.12 %\nCPU #2 usage : 2.25 %\n")),(0,n.kt)("p",null,"La commande ci-dessus contr\xf4le le CPU d'une ressource Azure VM via les indicateurs InsightsMetrics\n(",(0,n.kt)("inlineCode",{parentName:"p"},"--plugin=cloud::azure::management::insightsmetrics::plugin --mode=cpu --custommode='api'"),")."),(0,n.kt)("p",null,"Les \xe9l\xe9ments r\xe9cup\xe9r\xe9s dans la partie pr\xe9requis pour l'authentification sont\najout\xe9s pour l'obtention d'un token (",(0,n.kt)("inlineCode",{parentName:"p"},"--subscription='xxxxxxxxx' --tenant='xxxxxxx' --client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'"),"). "),(0,n.kt)("p",null,"Les options utilis\xe9es pour ce mode permettent de sp\xe9cifier le ",(0,n.kt)("em",{parentName:"p"},"workspace")," dans lequel\nsera lanc\xe9e la requ\xeate (",(0,n.kt)("inlineCode",{parentName:"p"},"--workspace-id='xxxxxxxxxxxxxxx'"),") ainsi que l'URL de l'API ",(0,n.kt)("em",{parentName:"p"},"LogAnalytics")," \xe0 utiliser (\n",(0,n.kt)("inlineCode",{parentName:"p"},"--management-endpoint='https://api.loganalytics.io'"),"). "),(0,n.kt)("p",null,"Dans cet exemple, une alarme de type WARNING sera d\xe9clench\xe9e si l'utilisation CPU moyenne est sup\xe9rieure \xe0 90% (",(0,n.kt)("inlineCode",{parentName:"p"},"--warning-average-utilization-percentage='90'"),");\nl'alarme sera de type CRITICAL au-del\xe0 de 95% d'utilisation (",(0,n.kt)("inlineCode",{parentName:"p"},"--critical-average-utilization-percentage='95'"),")."),(0,n.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre affich\xe9e en ajoutant le param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"p"},"--help"),"\n\xe0 la commande:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_azure_management_insightsmetrics_api.pl \\\n    --plugin=cloud::azure::management::insightsmetrics::plugin \\\n    --mode=cpu \\\n    --help\n")))}N.isMDXComponent=!0}}]);