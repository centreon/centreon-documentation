"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[29134],{29489:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>m});a(67294);var n=a(3905),r=a(51715),l=a(7626);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const u={id:"cloud-azure-datafactory-factories",title:"Azure Data Factory"},p=void 0,c={unversionedId:"integrations/plugin-packs/procedures/cloud-azure-datafactory-factories",id:"integrations/plugin-packs/procedures/cloud-azure-datafactory-factories",title:"Azure Data Factory",description:"Contenu du Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-azure-datafactory-factories.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-azure-datafactory-factories",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/cloud-azure-datafactory-factories",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-azure-datafactory-factories.md",tags:[],version:"current",frontMatter:{id:"cloud-azure-datafactory-factories",title:"Azure Data Factory"},sidebar:"pp",previous:{title:"Azure Cosmos DB",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/cloud-azure-database-cosmosdb"},next:{title:"Azure Database for MariaDB",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/cloud-azure-database-mariadb"}},d={},m=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Mod\xe8les",id:"mod\xe8les",level:3},{value:"R\xe8gles de d\xe9couverte",id:"r\xe8gles-de-d\xe9couverte",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Pack de supervision",id:"pack-de-supervision",level:3},{value:"Plugin",id:"plugin",level:3},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"Comment puis-je tester le plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3}],g={toc:m},k="wrapper";function f(e){var{components:t}=e,u=s(e,["components"]);return(0,n.kt)(k,i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){o(e,t,a[t])}))}return e}({},g,u),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,n.kt)("h3",{id:"mod\xe8les"},"Mod\xe8les"),(0,n.kt)("p",null,"Le connecteur de supervision Centreon ",(0,n.kt)("strong",{parentName:"p"},"Azure Data Factory")," apporte un mod\xe8le d'h\xf4te :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cloud-Azure-DataFactory-Factories-custom")),(0,n.kt)("p",null,"Il apporte les mod\xe8les de service suivants :"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Alias"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Mod\xe8le de service"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"D\xe9faut"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Factory-Usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cloud-Azure-DataFactory-Factories-Factory-Usage-Api"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le la taille et les entit\xe9s de la fabrique"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Integration-Runtime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cloud-Azure-DataFactory-Factories-Integration-Runtime-Api"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le l'utilisation du runtime d'int\xe9gration"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,n.kt)("h3",{id:"r\xe8gles-de-d\xe9couverte"},"R\xe8gles de d\xe9couverte"),(0,n.kt)("p",null,"Le connecteur de supervision Centreon ",(0,n.kt)("strong",{parentName:"p"},"Azure Data Factory")," inclut un fournisseur de d\xe9couverte\nd'h\xf4tes nomm\xe9 ",(0,n.kt)("strong",{parentName:"p"},"Microsoft Azure Data Factories"),". Celui-ci permet de d\xe9couvrir l'ensemble des instances\nrattach\xe9es \xe0 une souscription Microsoft Azure donn\xe9e:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(1891).Z,width:"404",height:"124"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"La d\xe9couverte ",(0,n.kt)("strong",{parentName:"p"},"Azure Data Factory")," n'est compatible qu'avec le mode ",(0,n.kt)("strong",{parentName:"p"},"api"),". Le mode ",(0,n.kt)("strong",{parentName:"p"},"azcli")," n'est pas support\xe9 dans le cadre\nde cette utilisation.")),(0,n.kt)("p",null,"Rendez-vous sur la ",(0,n.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery"},"documentation d\xe9di\xe9e"),"\npour en savoir plus sur la d\xe9couverte automatique d'h\xf4tes."),(0,n.kt)("h3",{id:"m\xe9triques--statuts-collect\xe9s"},"M\xe9triques & statuts collect\xe9s"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Factory-Usage",label:"Factory-Usage",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azdatafactory.factoryusage.size.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azdatafactory.factoryusage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azdatafactory.factoryusage.resource.count"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azdatafactory.factoryusage.resource.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,n.kt)(l.Z,{value:"Integration-Runtime",label:"Integration-Runtime",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azdatafactory.integrationruntime.available.memory.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azdatafactory.integrationruntime.available.node.number.count"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azdatafactory.integrationruntime.average.pickup.delay.seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azdatafactory.integrationruntime.cpu.percentage.percent"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azdatafactory.integrationruntime.queue.length.count"),(0,n.kt)("td",{parentName:"tr",align:"left"})))))),(0,n.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,n.kt)("p",null,"Rendez-vous sur la ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/azure-credential-configuration"},"documentation d\xe9di\xe9e")," afin d'obtenir les pr\xe9requis n\xe9cessaires pour interroger les API d'Azure."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("h3",{id:"pack-de-supervision"},"Pack de supervision"),(0,n.kt)("p",null,"Si la plateforme est configur\xe9e avec une licence ",(0,n.kt)("em",{parentName:"p"},"online"),", l'installation d'un paquet\nn'est pas requise pour voir appara\xeetre le pack dans le menu ",(0,n.kt)("strong",{parentName:"p"},"Configuration > Gestionnaire de connecteurs de supervision"),"."),(0,n.kt)("p",null,"Au contraire, si la plateforme utilise une licence ",(0,n.kt)("em",{parentName:"p"},"offline"),", installez le paquet\nsur le ",(0,n.kt)("strong",{parentName:"p"},"serveur central")," via la commande correspondant au gestionnaire de paquet\nassoci\xe9 \xe0 sa distribution :"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-pack-cloud-azure-datafactory-factories\n"))),(0,n.kt)(l.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-azure-datafactory-factories\n"))),(0,n.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-pack-cloud-azure-datafactory-factories\n")))),(0,n.kt)("p",null,"Quel que soit le type de la licence (",(0,n.kt)("em",{parentName:"p"},"online")," ou ",(0,n.kt)("em",{parentName:"p"},"offline"),"), installez le Pack ",(0,n.kt)("strong",{parentName:"p"},"Azure Data Factory"),"\ndepuis l'interface web et le menu ",(0,n.kt)("strong",{parentName:"p"},"Configuration > Gestionnaire de connecteurs de supervision"),"."),(0,n.kt)("h3",{id:"plugin"},"Plugin"),(0,n.kt)("p",null,"\xc0 partir de Centreon 22.04, il est possible de demander le d\xe9ploiement automatique\ndu plugin lors de l'utilisation d'un pack. Si cette fonctionnalit\xe9 est activ\xe9e, et\nque vous ne souhaitez pas d\xe9couvrir des \xe9l\xe9ments pour la premi\xe8re fois, alors cette\n\xe9tape n'est pas requise."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Plus d'informations dans la section ",(0,n.kt)("a",{parentName:"p",href:"/docs/monitoring/pluginpacks/#installer-le-plugin"},"Installer le plugin"),".")),(0,n.kt)("p",null,"Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre syst\xe8me d'exploitation :"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-plugin-Cloud-Azure-DataFactory-Api\n"))),(0,n.kt)(l.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-DataFactory-Api\n"))),(0,n.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-plugin-cloud-azure-datafactory-api\n")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ajoutez un h\xf4te \xe0 Centreon depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes"),"."),(0,n.kt)("li",{parentName:"ul"},"Remplissez le champ ",(0,n.kt)("strong",{parentName:"li"},"Adresse IP/DNS")," avec l'adresse ",(0,n.kt)("strong",{parentName:"li"},"127.0.0.1"),"."),(0,n.kt)("li",{parentName:"ul"},"Appliquez le mod\xe8le d'h\xf4te ",(0,n.kt)("strong",{parentName:"li"},"Cloud-Azure-DataFactory-Factories-custom"),"."),(0,n.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, renseignez les macros correspondantes. Attention, certaines macros sont obligatoires. Elles doivent \xeatre renseign\xe9es selon le ",(0,n.kt)("em",{parentName:"li"},"custom mode")," utilis\xe9.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Deux m\xe9thodes peuvent \xeatre utilis\xe9es lors de l'assignation des macros :")),(0,n.kt)("blockquote",null,(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Utilisation de l'ID complet de la ressource (de type ",(0,n.kt)("inlineCode",{parentName:"li"},"/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXXX/XXXXXXX/<resource_name>"),") dans la macro ",(0,n.kt)("em",{parentName:"li"},"AZURERESOURCE"),"."),(0,n.kt)("li",{parentName:"ul"},"Utilisation du nom de la ressource dans la macro ",(0,n.kt)("strong",{parentName:"li"},"AZURERESOURCE")," et du nom du groupe de ressources dans la macro ",(0,n.kt)("strong",{parentName:"li"},"AZURERESOURCEGROUP"),"."))),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Azure Monitor API",label:"Azure Monitor API",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Obligatoire"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZUREAPICUSTOMMODE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Custom mode ",(0,n.kt)("strong",{parentName:"td"},"api"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURECLIENTID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Client ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURECLIENTSECRET"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Client secret")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ID or name of the Azure Data Factory resource")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCEGROUP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Resource group name if resource name is used")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURESUBSCRIPTION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Subscription ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURETENANT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Tenant ID")))))),(0,n.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le plugin et que signifient les options des commandes ?"),(0,n.kt)("p",null,"Une fois le plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis votre collecteur Centreon en vous connectant avec\nl'utilisateur ",(0,n.kt)("strong",{parentName:"p"},"centreon-engine")," (",(0,n.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_azure_datafactory_factories_api.pl \\\n    --plugin=cloud::azure::datafactory::factories::plugin \\\n    --mode=factory-usage \\\n    --custommode='api' \\\n    --resource='FACTORY001ABCD' \\\n    --resource-group='RSG1234' \\\n    --subscription='xxxxxxxxx' \\\n    --tenant='xxxxxxxxx' \\\n    --client-id='xxxxxxxxx' \\\n    --client-secret='xxxxxxxxx' \\\n    --proxyurl='' \\\n    --timeframe='' \\\n    --interval='' \\\n    --aggregation='' \\\n    --warning-factory-percentage-usage='' \\\n    --critical-factory-percentage-usage='' \\\n    --warning-resource-percentage-usage='' \\\n    --critical-resource-percentage-usage='' \\\n    --warning-factory-size='' \\\n    --critical-factory-size='' \\\n    --warning-resource-count='' \\\n    --critical-resource-count='' \\\n    --use-new-perfdata\n")),(0,n.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0 :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Instance 'FACTORY001ABCD' Statistic 'maximum' Metrics Factory size: 40.00GB, Factory usage: 30.00%, Resource count: 10.00, Resource usage: 25.00% | 'FACTORY001ABCD~maximum#azdatafactory.factoryusage.size.bytes'=40.00GB;;;0; 'FACTORY001ABCD~maximum#azdatafactory.factoryusage.percentage'=30.00%;;;0;100 'FACTORY001ABCD~maximum#azdatafactory.factoryusage.resource.count'=10.00;;;0; 'FACTORY001ABCD~maximum#azdatafactory.factoryusage.resource.percentage'=25.00%;;;0;100\n")),(0,n.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre\naffich\xe9e en ajoutant le param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_azure_datafactory_factories_api.pl \\\n    --plugin=cloud::azure::datafactory::factories::plugin \\\n    --mode=factory-usage \\\n    --help\n")),(0,n.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s en ajoutant le param\xe8tre\n",(0,n.kt)("inlineCode",{parentName:"p"},"--list-mode")," \xe0 la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_azure_datafactory_factories_api.pl \\\n    --plugin=cloud::azure::datafactory::factories::plugin \\\n    --list-mode\n")),(0,n.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,n.kt)("p",null,"Rendez-vous sur la ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#http-and-api-checks"},"documentation d\xe9di\xe9e"),"\ndes plugins bas\xe9s sur HTTP/API."))}f.isMDXComponent=!0},1891:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cloud-azure-datafactory-factories-provider-280117c05fa3023eca88c51c64d8c318.png"}}]);