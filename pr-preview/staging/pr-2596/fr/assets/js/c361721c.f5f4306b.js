"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[32148],{29644:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>N,frontMatter:()=>o,metadata:()=>m,toc:()=>k});a(67294);var n=a(3905),r=a(51715),l=a(7626);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function p(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const o={id:"applications-pvx-restapi",title:"Skylight PVX"},c=void 0,m={unversionedId:"integrations/plugin-packs/procedures/applications-pvx-restapi",id:"integrations/plugin-packs/procedures/applications-pvx-restapi",title:"Skylight PVX",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-pvx-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-pvx-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/applications-pvx-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-pvx-restapi.md",tags:[],version:"current",frontMatter:{id:"applications-pvx-restapi",title:"Skylight PVX"},sidebar:"pp",previous:{title:"Sendmail",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/applications-sendmail-snmp"},next:{title:"Skype 2015",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/applications-skype-2015-mssql"}},d={},k=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Mod\xe8les",id:"mod\xe8les",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Compatibilit\xe9",id:"compatibilit\xe9",level:3},{value:"PVX API",id:"pvx-api",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3}],u={toc:k},g="wrapper";function N(t){var{components:e}=t,o=s(t,["components"]);return(0,n.kt)(g,p(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){i(t,e,a[e])}))}return t}({},u,o),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,n.kt)("p",null,"Chaque instance PVX-Skylight fournit un endpoint API XML permettant \xe0 Centreon\nd'interroger ces derni\xe8res. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"architecture",src:a(18915).Z,width:"1050",height:"1035"})),(0,n.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,n.kt)("h3",{id:"mod\xe8les"},"Mod\xe8les"),(0,n.kt)("p",null,"Le connecteur de supervision Centreon PVX apporte 1 mod\xe8le d'h\xf4te :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"App-Pvx-Application-Restapi-custom")),(0,n.kt)("p",null,"Il apporte les Mod\xe8les de Service suivants :"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Alias"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Mod\xe8le de service"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"D\xe9faut"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Http-Hits-Application"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Pvx-Http-Hits-Application-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le le nombre d'erreur HTTP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Http-Hits"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Pvx-Http-Hits-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le le nombre d'erreur HTTP"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Http-Hits-Server-Ip"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Pvx-Http-Hits-Server-Ip-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le le nombre d'erreur HTTP"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Network-Connection-Application"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Pvx-Network-Connection-Application-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le le ratio connections tent\xe9es"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Network-Connection"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Pvx-Network-Connection-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le le ratio connections tent\xe9es"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Network-Connection-Server-Ip"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Pvx-Network-Connection-Server-Ip-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le le ratio connections tent\xe9es"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Network-Traffic-Application"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Pvx-Network-Traffic-Application-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le le traffic par application."),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Network-Traffic-Layer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Pvx-Network-Traffic-Layer-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},'Contr\xf4le le traffic par ""layer"".'),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Network-Traffic"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Pvx-Network-Traffic-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le le traffic par instance"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Network-Traffic-Server-Ip"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Pvx-Network-Traffic-Server-Ip-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le le traffic par IP"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Network-User-Experience-Application"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Pvx-Network-User-Experience-Application-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le l'exp\xe9rience utilisateur par application."),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Network-User-Experience"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Pvx-Network-User-Experience-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le l'exp\xe9rience utilisateur par instance"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Network-User-Experience-Server-Ip"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Pvx-Network-User-Experience-Server-Ip-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le l'exp\xe9rience utilisateur par IP"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h3",{id:"m\xe9triques--statuts-collect\xe9s"},"M\xe9triques & statuts collect\xe9s"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Http-Hits*",label:"Http-Hits*",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"instances"),"#http.hits.persecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"hits/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"instances"),"#http.hits.error.persecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"hits/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"instances"),"#http.hits.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Network-Connection*",label:"Network-Connection*",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"instances"),"#connections.attempts.persecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"connections/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"instances"),"#connection.time.milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ms")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"instances"),"#connections.ratio.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"instances"),"#connections.successful.persecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"connections/s"))))),(0,n.kt)(l.Z,{value:"Network-Traffic*",label:"Network-Traffic*",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"traffic.client.bitspersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"traffic.server.bitspersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"traffic.aggregated.bitspersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"instances"),"#instance.traffic.client.bitspersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"instances"),"#instance.traffic.server.bitspersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"instances"),"#instance.traffic.aggregated.bitspersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"b/s"))))),(0,n.kt)(l.Z,{value:"Network-User-Experience*",label:"Network-User-Experience*",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"instances"),"#enduser.experience.seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"s")))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("h3",{id:"compatibilit\xe9"},"Compatibilit\xe9"),(0,n.kt)("p",null,"Le connecteur a \xe9t\xe9 test\xe9 avec la version suivante : ","*"," PVX version 5.1.1."),(0,n.kt)("h3",{id:"pvx-api"},"PVX API"),(0,n.kt)("p",null,"Pour interroger les instances via l'API, une cl\xe9 d'acc\xe8s est n\xe9cessaire. Cette\ncl\xe9 n'a pas de date d'expiration. La proc\xe9dure suivante, extrait de la\n",(0,n.kt)("a",{parentName:"p",href:"http://docs.performancevision.com/api_use.html"},"documentation officielle"),",\npermet de la g\xe9n\xe9rer. A chaque \xe9tape, remplacez les valeurs des macro '< ",">","'\navec les v\xf4tres."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -k 'https://**<pvxapihost>**/api/login?user=**<user>**&password=**<password>**'`\n")),(0,n.kt)("p",null,"R\xe9sultat :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "result",\n    "result": "**session:91554086-842b-4b73-9028-c51d20d91b94**"\n}\n')),(0,n.kt)("p",null,"Gr\xe2ce \xe0 l'ID de session obtenu, ex\xe9cutez la commande suivante pour obtenir une\ncl\xe9 secr\xe8te."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -k 'https://**<pvxapihost>**/api/create-api-key?name=**<keyname>**&_session=session:91554086-842b-4b73-9028-c51d20d91b94'`\n")),(0,n.kt)("p",null,"R\xe9sultat :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "result",\n    "result": "**secret:e40b1cc6-f629-43a4-8be6-14a9c9f036e0**"\n}\n')),(0,n.kt)("p",null,'Dans cet exemple, la cl\xe9 API est "secret:e40b1cc6-f629-43a4-8be6-14a9c9f036e0".'),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources ",(0,n.kt)("strong",{parentName:"li"},"PVX")," :")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Pvx-Restapi\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,n.kt)("strong",{parentName:"li"},"PVX")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),"."))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources ",(0,n.kt)("strong",{parentName:"li"},"PVX")," :")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Pvx-Restapi\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le RPM du Pack ",(0,n.kt)("strong",{parentName:"li"},"PVX")," :")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-pvx-restapi\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,n.kt)("strong",{parentName:"li"},"PVX")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),".")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ajoutez un H\xf4te \xe0 Centreon depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes"),"."),(0,n.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,n.kt)("strong",{parentName:"li"},"Nom"),", ",(0,n.kt)("strong",{parentName:"li"},"Alias")," & ",(0,n.kt)("strong",{parentName:"li"},"IP Address/DNS")," correspondant \xe0 votre serveur ",(0,n.kt)("strong",{parentName:"li"},"PVX"),"."),(0,n.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,n.kt)("strong",{parentName:"li"},"App-Pvx-Application-Restapi-custom"),"."),(0,n.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, les Macros ci-dessous indiqu\xe9es comme requises (",(0,n.kt)("em",{parentName:"li"},"Obligatoire"),") doivent \xeatre renseign\xe9es.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Obligatoire"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"PVXAPIEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command","_","line (eg. a --verbose flag)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"PVXAPIHOSTNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"PVX hostname")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"PVXAPIKEY"),(0,n.kt)("td",{parentName:"tr",align:"left"},"PVX API key")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"PVXAPIPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(Default: '443')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"PVXAPIPROTO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(Default: 'https')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"PVXAPIURLPATH"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(Default: '/api')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"PVXCUSTOMMODE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(Default: 'api')")))),(0,n.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,n.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis votre collecteur Centreon en vous connectant avec\nl'utilisateur ",(0,n.kt)("strong",{parentName:"p"},"centreon-engine")," (",(0,n.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_pvx_restapi.pl \\\n    --plugin=apps::pvx::restapi::plugin \\\n    --mode=http-hits \\\n    --custommode='api' \\\n    --hostname='10.0.0.1' \\\n    --url-path='/api' \\\n    --api-key='' \\\n    --port='443' \\\n    --proto='https' \\\n    --timeframe='3600' \\\n    --instance='' \\\n    --warning-ratio='' \\\n    --critical-ratio='' \\\n    --warning-hits-error='' \\\n    --critical-hits-error='' \\\n    --warning-hits='40' \\\n    --critical-hits='60' \\\n    --use-new-perfdata \n")),(0,n.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0 :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: ratio: 18 hits error: 2 hits/s hits: 39 hits/s | 'http.hits.percentage'=18;;;0; 'http.hits.error.persecond'=2hits/s;;;0; 'http.hits.persecond'=39hits/s;0:40;0:60;0; \n")),(0,n.kt)("p",null,"Dans cet exemple, une alarme de type WARNING sera d\xe9clench\xe9e si le nombre de\nrequ\xeates HTTP est sup\xe9rieur \xe0 40 (",(0,n.kt)("inlineCode",{parentName:"p"},"--warning-hits='40'"),") durant la derni\xe8re\nheure (",(0,n.kt)("inlineCode",{parentName:"p"},"--timeframe='3600'"),"); l'alarme sera de type CRITICAL au-del\xe0 de 60\nrequ\xeate (",(0,n.kt)("inlineCode",{parentName:"p"},"--warning-hits='60'"),")."),(0,n.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre\naffich\xe9e en ajoutant le param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_pvx_restapi.pl \\\n    --plugin=apps::pvx::restapi::plugin \\\n    --mode=http-hits \\\n    --help\n")),(0,n.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s en ajoutant le param\xe8tre\n",(0,n.kt)("inlineCode",{parentName:"p"},"--list-mode")," \xe0 la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_pvx_restapi.pl \\\n    --plugin=apps::pvx::restapi::plugin \\\n    --list-mode\n")),(0,n.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,n.kt)("p",null,"Rendez-vous sur la ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#http-and-api-checks"},"documentation d\xe9di\xe9e"),"\ndes Plugins bas\xe9s sur HTTP/API."))}N.isMDXComponent=!0},18915:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/skylight-pvx-connector-c10a1b9365cdaa0b44eb896d61bfbc98.png"}}]);