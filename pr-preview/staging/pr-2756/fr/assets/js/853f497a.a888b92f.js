"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[10332],{97654:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>b,frontMatter:()=>u,metadata:()=>c,toc:()=>m});n(67294);var r=n(3905),a=n(51715),o=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={id:"cloud-gcp-storage",title:"Google Storage"},p=void 0,c={unversionedId:"integrations/plugin-packs/procedures/cloud-gcp-storage",id:"integrations/plugin-packs/procedures/cloud-gcp-storage",title:"Google Storage",description:"Contenu du connecteur de supervision",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-gcp-storage.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-gcp-storage",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/cloud-gcp-storage",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-gcp-storage.md",tags:[],version:"current",frontMatter:{id:"cloud-gcp-storage",title:"Google Storage"},sidebar:"pp",previous:{title:"Google Stackdriver",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/cloud-gcp-management-stackdriver"},next:{title:"IBM Softlayer",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/cloud-ibm-softlayer-api"}},d={},m=[{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"R\xe8gles de d\xe9couverte",id:"r\xe8gles-de-d\xe9couverte",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Privil\xe8ges Google Cloud",id:"privil\xe8ges-google-cloud",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:3},{value:"J&#39;obtiens le message d&#39;erreur suivant: <code>UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values</code>",id:"jobtiens-le-message-derreur-suivant-unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values",level:3}],g={toc:m},k="wrapper";function b(e){var{components:t}=e,u=i(e,["components"]);return(0,r.kt)(k,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},g,u),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,r.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,r.kt)("p",null,"Le connecteur de supervision Google Storage collecte les donn\xe9es pour:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bucket")),(0,r.kt)("h3",{id:"r\xe8gles-de-d\xe9couverte"},"R\xe8gles de d\xe9couverte"),(0,r.kt)("p",null,"Le connecteur de supervision Centreon ",(0,r.kt)("em",{parentName:"p"},"Google Storage")," inclut un ",(0,r.kt)("em",{parentName:"p"},"provider")," de d\xe9couverte d'H\xf4tes.\nCelui-ci permet de d\xe9couvrir l'ensemble des supports de stockage associ\xe9s \xe0 un projet GCP donn\xe9:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(79974).Z,width:"411",height:"131"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Le fichier ",(0,r.kt)("em",{parentName:"p"},"key")," doit \xeatre d\xe9ploy\xe9 sur les Collecteurs utilis\xe9s pour la d\xe9couverte en amont de son execution (voir chapitre Pr\xe9requis)")),(0,r.kt)("p",null,"Vous trouverez plus d'informations sur la d\xe9couverte d'H\xf4tes et son fonctionnement sur la documentation du module:\n",(0,r.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery"},"D\xe9couverte des h\xf4tes")),(0,r.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,r.kt)("p",null,"Pour l'ensemble des m\xe9triques collect\xe9es, il est possible de choisir ",(0,r.kt)("em",{parentName:"p"},"aggregation"),": ",(0,r.kt)("em",{parentName:"p"},"average"),", ",(0,r.kt)("em",{parentName:"p"},"minimum"),", ",(0,r.kt)("em",{parentName:"p"},"maximum")," et ",(0,r.kt)("em",{parentName:"p"},"total"),"."),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Bucket",label:"Bucket",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"bucket_name"),"~",(0,r.kt)("em",{parentName:"td"},"aggregation"),"#storage.bucket.objects.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of objects"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"bucket_name"),"~",(0,r.kt)("em",{parentName:"td"},"aggregation"),"#storage.network.received.volume.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Count of bytes received over the network"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"bucket_name"),"~",(0,r.kt)("em",{parentName:"td"},"aggregation"),"#storage.network.received.volume.bytespersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Count of bytes received per second over the network"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"bucket_name"),"~",(0,r.kt)("em",{parentName:"td"},"aggregation"),"#storage.network.sent.volume.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Count of bytes sent over the network"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"bucket_name"),"~",(0,r.kt)("em",{parentName:"td"},"aggregation"),"#storage.network.sent.volume.bytespersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Count of bytes sent per second over the network"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B/s")))))),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("h3",{id:"privil\xe8ges-google-cloud"},"Privil\xe8ges Google Cloud"),(0,r.kt)("p",null,"Cr\xe9er une ",(0,r.kt)("em",{parentName:"p"},"cl\xe9 de compte de service")," (t\xe9l\xe9charger sa cl\xe9 priv\xe9e sous la forme d'un fichier JSON) avec les privil\xe8ges suivants:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Google Scope"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.googleapis.com/auth/cloud-platform"},"https://www.googleapis.com/auth/cloud-platform")),(0,r.kt)("td",{parentName:"tr",align:"left"},"View and manage your data across Google Cloud Platform services")))),(0,r.kt)("p",null,"Comment cr\xe9er une cl\xe9 de compte de service: ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/protocols/oauth2/service-account"},"https://developers.google.com/identity/protocols/oauth2/service-account")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Gcp-Storage-Api\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,r.kt)("em",{parentName:"li"},"Google Storage")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,r.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Gcp-Storage-Api\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le connecteur de supervision via le RPM:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-gcp-storage\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,r.kt)("em",{parentName:"li"},"Google Storage")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Ce connecteur de supervision est con\xe7u de mani\xe8re \xe0 avoir dans Centreon un h\xf4te par bucket Google Storage.\nLorsque vous ajoutez un h\xf4te \xe0 Centreon, appliquez-lui le mod\xe8le ",(0,r.kt)("em",{parentName:"p"},"Cloud-Gcp-Storage-custom"),".\nUne fois celui-ci configur\xe9, certaines macros doivent \xeatre renseign\xe9es:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"GCPKEYFILEPATH"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Service account key json file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"GCPSCOPEENDPOINT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Google Scope. Default: ",(0,r.kt)("a",{parentName:"td",href:"https://www.googleapis.com/auth/cloud-platform"},"https://www.googleapis.com/auth/cloud-platform"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"GCPDIMENSIONNAME"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the dimension to filter on. Default: resource.labels.bucket_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"GCPDIMENSIONOPERATOR"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Define the type of filter match to use. Default: equals")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"GCPDIMENSIONVALUE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the bucket you want to monitor.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"PROXYURL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Configure proxy URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"GCPEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command_line (eg. a --verbose flag)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"DUMMYSTATUS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Host state. Default is OK, do not modify it until you know what you are doing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"DUMMYOUTPUT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Host check output. Default is 'This is a dummy check'. Customize it with your own if needed")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"WARNING"),": La cl\xe9 de service (format json) doit \xeatre h\xe9berg\xe9e sur le collecteur Centreon. L'utilisateur ",(0,r.kt)("em",{parentName:"p"},"centreon-engine")," doit avoir les droits en lecture sur ce fichier.")),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h3",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,r.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande\ndepuis un collecteur Centreon en vous connectant avec l'utilisateur ",(0,r.kt)("em",{parentName:"p"},"centreon-engine"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_gcp_storage_api.pl \\\n    --plugin=cloud::google::gcp::storage::plugin \\\n    --mode=bucket \\\n    --key-file=/var/lib/centreon-engine/centreon-dev-6e5531fc9e82.json \\\n    --dimension-name='resource.labels.bucket_name' \\\n    --dimension-operator='equals' \\\n    --dimension-value='centreon-dev.appspot.com' \\\n    --aggregation='average' \\\n    --warning-bucket-objects='1000' \\\n    --critical-bucket-objects='2000' \\\n    --verbose\n")),(0,r.kt)("p",null,"La commande devrait retourner un message de sortie de la forme ci-dessous:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Instance 'centreon-dev.appspot.com' aggregation 'average' metrics objects: 0.00, received: 0.00 B, sent: 382.00 B | 'centreon-dev.appspot.com~average#storage.bucket.objects.count'=0.00;0:1000;0:2000;0; 'centreon-dev.appspot.com~average#storage.network.received.volume.bytes'=0.00B;;;0; 'centreon-dev.appspot.com~average#storage.network.sent.volume.bytes'=382.00B;;;0;\nChecking 'centreon-dev.appspot.com'\n    aggregation 'average' metrics objects: 0.00, received: 0.00 B, sent: 382.00 B\n")),(0,r.kt)("p",null,"Cette commande contr\xf4le l'utilisation (",(0,r.kt)("inlineCode",{parentName:"p"},"--mode=bucket"),") d'une bucket Google Storage\nayant pour nom ",(0,r.kt)("em",{parentName:"p"},"centreon-dev.appspot.com")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--dimension-name='resource.labels.bucket_name' --dimension-operator='equals' --dimension-value='centreon-dev.appspot.com'"),")."),(0,r.kt)("p",null,"Cette commande d\xe9clenchera une alarme WARNING si le nombre d'objets est sup\xe9rieur \xe0 1000 (",(0,r.kt)("inlineCode",{parentName:"p"},"--warning-bucket-objects='1000'"),")\net une alarme CRITICAL si sup\xe9rieur \xe0 2000 (",(0,r.kt)("inlineCode",{parentName:"p"},"--critical-bucket-objects='2000'"),")."),(0,r.kt)("p",null,"Pour chaque mode, la liste de toutes les m\xe9triques, seuils associ\xe9s et options compl\xe9mentaires peut \xeatre affich\xe9e\nen ajoutant le param\xe8tre ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_gcp_storage_api.pl \\\n    --plugin=cloud::google::gcp::storage::plugin \\\n    --mode=bucket \\\n    --help\n")),(0,r.kt)("h3",{id:"jobtiens-le-message-derreur-suivant-unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values"},"J'obtiens le message d'erreur suivant: ",(0,r.kt)("inlineCode",{parentName:"h3"},"UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values")),(0,r.kt)("p",null,"Lors du d\xe9ploiement de mes contr\xf4les, j'obtiens le message suivant 'UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values'. "),(0,r.kt)("p",null,"Cela signifie qu'il n'y a pas de donn\xe9es sur la p\xe9riode."),(0,r.kt)("p",null,"Vous pouvez ajouter ",(0,r.kt)("inlineCode",{parentName:"p"},"--zeroed")," \xe0 la macro EXTRAOPTIONS du ",(0,r.kt)("strong",{parentName:"p"},"service")," en question afin de forcer le stockage d'un 0 et ainsi \xe9viter un statut UNKNOWN."))}b.isMDXComponent=!0},79974:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);