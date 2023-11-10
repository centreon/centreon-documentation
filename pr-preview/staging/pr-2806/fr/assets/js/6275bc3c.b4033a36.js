"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[57185],{12963:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>p,metadata:()=>m,toc:()=>d});n(67294);var a=n(3905),r=n(51715),i=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"cloud-azure-compute-functions",title:"Azure Functions"},u=void 0,m={unversionedId:"integrations/plugin-packs/procedures/cloud-azure-compute-functions",id:"integrations/plugin-packs/procedures/cloud-azure-compute-functions",title:"Azure Functions",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-azure-compute-functions.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-azure-compute-functions",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/cloud-azure-compute-functions",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-azure-compute-functions.md",tags:[],version:"current",frontMatter:{id:"cloud-azure-compute-functions",title:"Azure Functions"},sidebar:"pp",previous:{title:"Azure Front Door",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/cloud-azure-network-frontdoor"},next:{title:"Azure InsightsMetrics",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/cloud-azure-management-insightsmetrics"}},c={},d=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"R\xe8gles de d\xe9couverte",id:"r\xe8gles-de-d\xe9couverte",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"FAQ",id:"faq",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:3},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3},{value:"Les identifiants ont chang\xe9 et mon Plugin ne fonctionne plus",id:"les-identifiants-ont-chang\xe9-et-mon-plugin-ne-fonctionne-plus",level:4},{value:"<code>UNKNOWN: Login endpoint API returns error code &#39;ERROR_NAME&#39; (add --debug option for detailed message)</code>",id:"unknown-login-endpoint-api-returns-error-code-error_name-add---debug-option-for-detailed-message",level:4},{value:"<code>UNKNOWN: 500 Can&#39;t connect to login.microsoftonline.com:443</code>",id:"unknown-500-cant-connect-to-loginmicrosoftonlinecom443",level:4},{value:"<code>UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values</code>",id:"unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values",level:4}],k={toc:d},N="wrapper";function g(e){var{components:t}=e,p=s(e,["components"]);return(0,a.kt)(N,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){l(e,t,n[t])}))}return e}({},k,p),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,a.kt)("p",null,"Azure Functions est une plateforme serverless qui permet d'\xe9crire et de d\xe9ployer\nrapidement du code r\xe9agissant aux \xe9v\xe9nements survenant dans les services Azure\nou tiers."),(0,a.kt)("p",null,"Le connecteur de supervision Centreon ",(0,a.kt)("em",{parentName:"p"},"Azure Functions")," s'appuie sur les API Azure Monitor\nafin de r\xe9cuperer les m\xe9triques relatives au service\nFunctions. Il est possible d'utiliser les 2 modes propos\xe9s par\nMicrosoft: RestAPI ou Azure CLI."),(0,a.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,a.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Instances Azure ",(0,a.kt)("em",{parentName:"li"},"Functions"))),(0,a.kt)("h3",{id:"r\xe8gles-de-d\xe9couverte"},"R\xe8gles de d\xe9couverte"),(0,a.kt)("p",null,"Le connecteur de supervision Centreon ",(0,a.kt)("em",{parentName:"p"},"Azure Functions")," inclut un ",(0,a.kt)("em",{parentName:"p"},"provider")," de d\xe9couverte d'H\xf4tes nomm\xe9 ",(0,a.kt)("strong",{parentName:"p"},"Microsoft Azure Functions"),".\nCelui-ci permet de d\xe9couvrir l'ensemble des instances ",(0,a.kt)("em",{parentName:"p"},"Functions")," rattach\xe9s \xe0 une ",(0,a.kt)("em",{parentName:"p"},"souscription")," Microsoft Azure donn\xe9e:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(19306).Z,width:"615",height:"194"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"La d\xe9couverte ",(0,a.kt)("em",{parentName:"p"},"Azure Functions")," n'est compatible qu'avec le mode 'api'. Le mode 'azcli' n'est pas support\xe9 dans le cadre\nde cette utilisation. ")),(0,a.kt)("p",null,"Vous trouverez plus d'informations sur la d\xe9couverte d'H\xf4tes et son fonctionnement sur la documentation du module:\n",(0,a.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery"},"D\xe9couverte des h\xf4tes")),(0,a.kt)("h3",{id:"m\xe9triques--statuts-collect\xe9s"},"M\xe9triques & statuts collect\xe9s"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"App-Usage",label:"App-Usage",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appservice.connections.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of bound sockets existing in the sandbox"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appservice.assemblies.current.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The current number of assemblies loaded across all AppDomains in this application"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appservice.handle.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The total number of handles currently open by the app process"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appservice.thread.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of threads currently active in the app process"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appservice.appdomains.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The current number of AppDomains loaded in this application"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appservice.appdomains.unloaded.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The total number of AppDomains unloaded since the start of the application"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,a.kt)(i.Z,{value:"Cpu-Time",label:"Cpu-Time",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appservice.cpu.consumed.seconds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The amount of CPU consumed by the app in seconds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"s"))))),(0,a.kt)(i.Z,{value:"Data",label:"Data",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appservice.data.in.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The amount of incoming bandwidth consumed by the app"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appservice.data.out.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The amount of outgoing bandwidth consumed by the app"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B"))))),(0,a.kt)(i.Z,{value:"Executions",label:"Executions",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"functions.executions.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of function exectution"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"functions.executions.units.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of functon execution units"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,a.kt)(i.Z,{value:"File-System",label:"File-System",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appservice.filesystem.usage.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Filesystem quota consumed by the app"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B"))))),(0,a.kt)(i.Z,{value:"Gc-Usage",label:"Gc-Usage",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appservice.gc.gen0.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of times the generation 0 objects are garbage collected since the start of the app process"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appservice.gc.gen1.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of times the generation 1 objects are garbage collected since the start of the app process"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appservice.gc.gen2.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of times the generation 2 objects are garbage collected since the start of the app process"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,a.kt)(i.Z,{value:"Health",label:"Health",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Status Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Current operational status")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"summary"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Last related status message"))))),(0,a.kt)(i.Z,{value:"Http-Requests",label:"Http-Requests",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appservice.http.request.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The total number of requests regardless of their resulting HTTP status code"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appservice.http.request.queue.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of requests in the application request queue"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appservice.htpp.request.XXX.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The count of requests resulting in an HTTP status code = XXX"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,a.kt)(i.Z,{value:"IO-Operations",label:"IO-Operations",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appservice.bytes.other.bytespersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The rate at which the app process is issuing bytes to I/O operations that don't involve data"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appservice.operations.other.bytespersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The rate at which the app process is issuing I/O operations that aren't read or write operations"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appservice.bytes.read.bytespersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The rate at which the app process is reading bytes from I/O operations"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appservice.operations.read.bytespersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The rate at which the app process is issuing read I/O operations"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appservice.bytes.write.bytespersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The rate at which the app process is writing bytes to I/O operations"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appservice.operations.write.bytespersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The rate at which the app process is issuing write I/O operations"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B/s"))))),(0,a.kt)(i.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appservice.memory.average.usage.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The average amount of memory used by the app"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appservice.memory.usage.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The current amount of memory used by the app"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B"))))),(0,a.kt)(i.Z,{value:"Response-Time",label:"Response-Time",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appservice.http.response.time.seconds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The time taken for the app to serve requests"),(0,a.kt)("td",{parentName:"tr",align:"left"},"s"))))),(0,a.kt)(i.Z,{value:"Status",label:"Status",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appservice.status.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Health check status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("p",null,"Deux moyens sont disponibles pour interroger les API Microsoft Azure. "),(0,a.kt)("p",null,"Centreon pr\xe9conise l'utilisation de la m\xe9thode ",(0,a.kt)("em",{parentName:"p"},"API")," plut\xf4t que la ",(0,a.kt)("em",{parentName:"p"},"CLI"),", cette derni\xe8re \xe9tant significativement\nmoins performante. L'API permet \xe9galement une authentification ",(0,a.kt)("em",{parentName:"p"},"Application")," et ne n\xe9cessite pas de compte de service d\xe9di\xe9."),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Azure Monitor API",label:"Azure Monitor API",mdxType:"TabItem"},(0,a.kt)("p",null,"Pour le custom-mode 'api', r\xe9cup\xe9rez les informations en suivant la proc\xe9dure ci-dessous (en anglais)\net notez celles-ci en lieu s\xfbr. Elles seront en effet indispensables lors de la configuration des ressources\ndans Centreon."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Create an ",(0,a.kt)("em",{parentName:"p"},"application")," in Azure Active Directory:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Log in to your Azure account."),(0,a.kt)("li",{parentName:"ul"},"Select ",(0,a.kt)("em",{parentName:"li"},"Azure Active directory")," in the left sidebar."),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("em",{parentName:"li"},"App registrations"),"."),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("em",{parentName:"li"},"+ Add"),"."),(0,a.kt)("li",{parentName:"ul"},"Enter Centreon as the application name (or any name of your choice), select application type(api) and sign-on-url."),(0,a.kt)("li",{parentName:"ul"},"Click on the ",(0,a.kt)("em",{parentName:"li"},"Create")," button."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Get ",(0,a.kt)("em",{parentName:"p"},"Subscription ID")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Log in to your Azure account."),(0,a.kt)("li",{parentName:"ul"},"Select ",(0,a.kt)("em",{parentName:"li"},"Subscriptions")," in the left sidebar."),(0,a.kt)("li",{parentName:"ul"},"Select whichever subscription is needed."),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("em",{parentName:"li"},"Overview"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Copy the Subscription ID.")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Get ",(0,a.kt)("em",{parentName:"p"},"Tenant ID")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Log in to your Azure account."),(0,a.kt)("li",{parentName:"ul"},"Select ",(0,a.kt)("em",{parentName:"li"},"Azure Active directory")," in the left sidebar."),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("em",{parentName:"li"},"Properties"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Copy the directory ID.")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Get ",(0,a.kt)("em",{parentName:"p"},"Client ID")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Log in to your Azure account."),(0,a.kt)("li",{parentName:"ul"},"Select ",(0,a.kt)("em",{parentName:"li"},"Azure Active directory")," in the left sidebar."),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("em",{parentName:"li"},"Enterprise applications"),"."),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("em",{parentName:"li"},"All applications"),"."),(0,a.kt)("li",{parentName:"ul"},"Select the application previously created."),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("em",{parentName:"li"},"Properties"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Copy the Application ID.")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Get ",(0,a.kt)("em",{parentName:"p"},"Client secret")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Log in to your Azure account."),(0,a.kt)("li",{parentName:"ul"},"Select ",(0,a.kt)("em",{parentName:"li"},"Azure Active directory")," in the left sidebar."),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("em",{parentName:"li"},"App registrations"),"."),(0,a.kt)("li",{parentName:"ul"},"Select the application previously created."),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("em",{parentName:"li"},"All settings"),"."),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("em",{parentName:"li"},"Keys"),"."),(0,a.kt)("li",{parentName:"ul"},"Enter the key description and select the duration."),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("em",{parentName:"li"},"Save"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Copy and store the key value. You won't be able to retrieve it after you leave this page.")))))),(0,a.kt)(i.Z,{value:"Azure AZ CLI",label:"Azure AZ CLI",mdxType:"TabItem"},(0,a.kt)("p",null,"Afin d'utiliser le custom-mode 'azcli', installez le binaire associ\xe9 sur tous les Collecteurs Centreon\ndevant superviser des resources Azure:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"La CLI requiert une version de Python >= 2.7 (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Azure/azure-cli/blob/dev/doc/install_linux_prerequisites.md"},"https://github.com/Azure/azure-cli/blob/dev/doc/install_linux_prerequisites.md"),")")),(0,a.kt)("p",null,"Sur un syst\xe8me utilisant le packaging RPM, utilisez les commandes ci-dessous avec\nl'utilisateur ",(0,a.kt)("em",{parentName:"p"},"root")," ou un utilisateur avec les droits 'sudo' ad\xe9quats:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc\nsudo echo -e "[azure-cli]\\nname=Azure CLI\\nbaseurl=https://packages.microsoft.com/yumrepos/azure-cli\\nenabled=1\\ngpgcheck=1\\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/azure-cli.repo\nsudo yum install azure-cli\n')),(0,a.kt)("p",null,"Ensuite, r\xe9alisez les op\xe9rations suivantes avec l'utilisateur ",(0,a.kt)("em",{parentName:"p"},"centreon-engine"),"\nafin de r\xe9cup\xe9rer le token d'authentification Azure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"su - centreon-engine\naz login\n")),(0,a.kt)("p",null,"La commande retourne le message ci-dessous contenant un code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"*To sign in, use a web browser to open the page https://microsoft.com/devicelogin*\n*and enter the code CWT4WQZAD to authenticate.*\n")),(0,a.kt)("p",null,"Rendez-vous sur ",(0,a.kt)("a",{parentName:"p",href:"https://microsoft.com/devicelogin"},"https://microsoft.com/devicelogin")," afin de saisir le code obtenu, puis connectez vous avec le compte de service d\xe9di\xe9 \xe0 la supervision."),(0,a.kt)("p",null,"Une fois ces actions effectu\xe9es, des informations d'auhtentification de la forme suivante devraient s'afficher dans le terminal\ndu collecteur Centreon: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'    [\n      {\n        "cloudName": "AzureCloud",\n        "id": "0ef83f3a-d83e-2039-d930-309df93acd93d",\n        "isDefault": true,\n        "name": "N/A(tenant level account)",\n        "state": "Enabled",\n        "tenantId": "0ef83f3a-03cd-2039-d930-90fd39ecd048",\n        "user": {\n          "name": "email@mycompany.onmicrosoft.com",\n          "type": "user"\n        }\n      }\n    ]\n')),(0,a.kt)("p",null,"Vous avez d\xe9sormais les informations stock\xe9es localement dans un fichier\naccessTokens.json qui sera utilis\xe9 automatiquement par le Plugin. "))),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon devant superviser des resources Azure Functions:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-Compute-Functions-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Integration de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Azure Functions")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,a.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon devant superviser des resources Azure Functions:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-Compute-Functions-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le RPM du connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Azure Functions"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-azure-compute-functions.noarch\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Integration de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Azure Functions")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ajoutez un H\xf4te \xe0 Centreon, remplissez le champ ",(0,a.kt)("em",{parentName:"li"},"Adresse IP/DNS")," avec l'adresse 127.0.0.1\net appliquez-lui le Mod\xe8le d'H\xf4te ",(0,a.kt)("em",{parentName:"li"},"Cloud-Azure-Compute-Functions-custom"),"."),(0,a.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, les Macros ci-dessous indiqu\xe9es comme requises (",(0,a.kt)("em",{parentName:"li"},"Mandatory"),")\ndoivent \xeatre renseign\xe9es selon le custom-mode utilis\xe9:")),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Azure Monitor API",label:"Azure Monitor API",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURECUSTOMMODE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Custom mode 'api'")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURESUBSCRIPTION"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Subscription ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURETENANT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Tenant ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURECLIENTID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Client ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURECLIENTSECRET"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Client secret")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Id of the Functions instance"))))),(0,a.kt)(i.Z,{value:"Azure AZ CLI",label:"Azure AZ CLI",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURECUSTOMMODE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Custom mode 'azcli'")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURESUBSCRIPTION"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Subscription ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Id of the Functions instance")))))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de\ncommande depuis votre collecteur Centreon en vous connectant avec l'utilisateur\n",(0,a.kt)("em",{parentName:"p"},"centreon-engine"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_azure_compute_functions_api.pl \\\n    --plugin=cloud::azure::compute::functions::plugin \\\n    --mode=cpu-time \\\n    --custommode=api \\\n    --subscription='xxxxxxxxx' \\\n    --tenant='xxxxxxxxx' \\\n    --client-id='xxxxxxxxx' \\\n    --client-secret='xxxxxxxxx' \\\n    --resource='APP01' \\\n    --resource-group='xxxxxxxxx' \\\n    --timeframe='900' \\\n    --interval='PT5M' \\\n    --aggregation='Total' \\\n    --warning-cpu-time='1' \\\n    --critical-cpu-time='2'\n")),(0,a.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Instance 'APP01' Statistic 'total' Metrics CPU Time: 0.08s | 'APP01~total#appservice.cpu.consumed.seconds'=0.08s;;;0;\n")),(0,a.kt)("p",null,"La commande ci-dessus v\xe9rifie le temps processeur consomm\xe9 sur l'instance ",(0,a.kt)("em",{parentName:"p"},"Functions")," nomm\xe9e ",(0,a.kt)("em",{parentName:"p"},"APP01"),"\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--plugin=cloud::azure::compute::functions::plugin --mode=cpu-time --resource='APP01'"),")."),(0,a.kt)("p",null,"Le mode de connexion utilis\xe9 est 'api' (",(0,a.kt)("inlineCode",{parentName:"p"},"--custommode=api"),"), les param\xe8tres d'authentification n\xe9cessaires \xe0 l'utilisation de ce mode\nsont donc renseign\xe9s en fonction (",(0,a.kt)("inlineCode",{parentName:"p"},"--subscription='xxxxxxxxx' --tenant='xxxxxxx' --client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'"),")."),(0,a.kt)("p",null,"Les statuts cacul\xe9s se baseront sur les valeurs totales d'un \xe9chantillon dans un intervalle de 15 minutes / 900 secondes  (",(0,a.kt)("inlineCode",{parentName:"p"},"--timeframe='900'"),")\navec un \xe9tat retourn\xe9 par tranche de 5 minutes (",(0,a.kt)("inlineCode",{parentName:"p"},"--interval='PT5M'"),")."),(0,a.kt)("p",null,"Dans cet exemple, une alarme de type WARNING sera d\xe9clench\xe9e si le temps de processeur consomm\xe9 pendant l'intervalle donn\xe9\nest sup\xe9rieur \xe0 1 (",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-cpu-time='1'"),"); l'alarme sera de type CRITICAL au-del\xe0 de 2\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-cpu-time='2'"),")."),(0,a.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification\npeut \xeatre affich\xe9e en ajoutant le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_azure_compute_functions_api.pl \\\n    --plugin=cloud::azure::compute::functions::plugin \\\n    --mode=cpu-time \\\n    --help\n")),(0,a.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,a.kt)("h4",{id:"les-identifiants-ont-chang\xe9-et-mon-plugin-ne-fonctionne-plus"},"Les identifiants ont chang\xe9 et mon Plugin ne fonctionne plus"),(0,a.kt)("p",null,"Le Plugin utilise un fichier de cache pour conserver les informations de connexion afin de ne pas\nse r\xe9-authentifier \xe0 chaque appel. Si des informations sur le Tenant, la Souscription ou les\nClient ID / Secret changent, il est n\xe9cessaire de supprimer le fichier de cache du Plugin. "),(0,a.kt)("p",null,"Celui ci se trouve dans le r\xe9pertoire ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/centreon/centplugins/")," avec le nom azure",(0,a.kt)("em",{parentName:"p"},"api"),(0,a.kt)("inlineCode",{parentName:"p"},"<md5>_<md5>_<md5>_<md5>"),"."),(0,a.kt)("h4",{id:"unknown-login-endpoint-api-returns-error-code-error_name-add---debug-option-for-detailed-message"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)")),(0,a.kt)("p",null,"Lors du d\xe9ploiement de mes contr\xf4les, j'obtiens le message suivant :\n",(0,a.kt)("inlineCode",{parentName:"p"},"UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)"),"."),(0,a.kt)("p",null,"Cela signifie que l'un des param\xe8tres utilis\xe9s pour authentifier la requ\xeate est incorrect. Le param\xe8tre\nen question est sp\xe9cifi\xe9 dans le message d'erreur en lieu et place de 'ERROR_DESC'. "),(0,a.kt)("p",null,"Par exemple, 'invalid_client' signifie que le client-id et/ou le client-secret\nn'est (ne sont) pas valide(s)."),(0,a.kt)("h4",{id:"unknown-500-cant-connect-to-loginmicrosoftonlinecom443"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to login.microsoftonline.com:443")),(0,a.kt)("p",null,"Si l'utilisation d'un proxy est requise pour les connexions HTTP depuis le\ncollecteur Centreon, il est n\xe9cessaire de le pr\xe9ciser dans la commande en\nutilisant l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany.com:8080'"),"."),(0,a.kt)("p",null,"Il est \xe9galement possible qu'un \xe9quipement tiers de type Pare-feu bloque la requ\xeate\neffectu\xe9e par le Plugin."),(0,a.kt)("h4",{id:"unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values")),(0,a.kt)("p",null,"Lors du d\xe9ploiement de mes contr\xf4les, j'obtiens le message suivant 'UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values'. "),(0,a.kt)("p",null,"Cela signifie qu'Azure n'a pas consolid\xe9 de donn\xe9es sur la p\xe9riode."),(0,a.kt)("p",null,"Vous pouvez ajouter ",(0,a.kt)("inlineCode",{parentName:"p"},"--zeroed")," \xe0 la macro EXTRAOPTIONS du ",(0,a.kt)("strong",{parentName:"p"},"service")," en question afin de forcer le stockage d'un 0 et ainsi \xe9viter un statut UNKNOWN."))}g.isMDXComponent=!0},19306:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cloud-azure-compute-functions-provider-7e5b4c8ab32a530ce57320d2f3216152.png"}}]);