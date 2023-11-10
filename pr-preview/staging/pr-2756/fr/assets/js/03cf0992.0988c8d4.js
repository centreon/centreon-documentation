"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[10841],{22462:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>N,frontMatter:()=>s,metadata:()=>u,toc:()=>d});n(67294);var a=n(3905),r=n(51715),l=n(7626);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"applications-protocol-http",title:"HTTP Server"},m=void 0,u={unversionedId:"integrations/plugin-packs/procedures/applications-protocol-http",id:"integrations/plugin-packs/procedures/applications-protocol-http",title:"HTTP Server",description:"Contenu du Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-protocol-http.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-protocol-http",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-protocol-http",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-protocol-http.md",tags:[],version:"current",frontMatter:{id:"applications-protocol-http",title:"HTTP Server"},sidebar:"pp",previous:{title:"Generic SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-protocol-snmp"},next:{title:"IMAP Server",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-protocol-imap"}},c={},d=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Mod\xe8les",id:"mod\xe8les",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"Comment puis-je tester le plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3}],k={toc:d},g="wrapper";function N(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)(g,p(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,a.kt)("h3",{id:"mod\xe8les"},"Mod\xe8les"),(0,a.kt)("p",null,"Le connecteur de supervision Centreon ",(0,a.kt)("strong",{parentName:"p"},"HTTP Server")," apporte un mod\xe8le d'h\xf4te :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"App-Protocol-HTTP-custom")),(0,a.kt)("p",null,"Il apporte les mod\xe8les de service suivants :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Alias"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Mod\xe8le de service"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"D\xe9faut"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"HTTP-Expected-Content"),(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Protocol-HTTP-Expected-Content"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le la pr\xe9sence d'une cha\xeene de caract\xe8res dans une page Web"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"HTTP-Json-Content"),(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Protocol-HTTP-Json-Content"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le un webservice JSON"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"HTTP-Response-Time"),(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Protocol-HTTP-Response-Time"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le le temps de r\xe9ponse d'une page Web"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"HTTP-Soap-Content"),(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Protocol-HTTP-Soap-Content"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le un webservice SOAP"),(0,a.kt)("td",{parentName:"tr",align:"left"})))),(0,a.kt)("h3",{id:"m\xe9triques--statuts-collect\xe9s"},"M\xe9triques & statuts collect\xe9s"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"HTTP-Expected-Content",label:"HTTP-Expected-Content",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"content"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"http.extracted.value.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"http.content.size.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"http.response.time.seconds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"s"))))),(0,a.kt)(l.Z,{value:"HTTP-Json-Content",label:"HTTP-Json-Content",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"http.response.time.seconds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"s"))))),(0,a.kt)(l.Z,{value:"HTTP-Response-Time",label:"HTTP-Response-Time",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"http.response.connect.time.milliseconds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"ms")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"http.response.processing.time.milliseconds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"ms")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"http.response.resolve.time.milliseconds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"ms")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"http.response.size.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"http.response.time.seconds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"http.response.tls.time.milliseconds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"ms")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"http.response.transfer.time.milliseconds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"ms"))))),(0,a.kt)(l.Z,{value:"HTTP-Soap-Content",label:"HTTP-Soap-Content",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"http.response.time.seconds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"s")))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("p",null,"La page ou application web interrog\xe9e doit \xeatre accessible via le protocole HTTP ou HTTPS depuis le collecteur. Il est possible\nd'utiliser un proxy lorsque cela est n\xe9cessaire. "),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources ",(0,a.kt)("strong",{parentName:"li"},"HTTP Server")," :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Protocol-Http\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface web de Centreon, installez le connecteur de supervision ",(0,a.kt)("strong",{parentName:"li"},"HTTP Server")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),"."))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources ",(0,a.kt)("strong",{parentName:"li"},"HTTP Server")," :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Protocol-Http\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur le serveur central Centreon, installez le RPM du connecteur de supervision ",(0,a.kt)("strong",{parentName:"li"},"HTTP Server")," :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-protocol-http\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface web de Centreon, installez le connecteur de supervision ",(0,a.kt)("strong",{parentName:"li"},"HTTP Server")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),".")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ajoutez un h\xf4te \xe0 Centreon depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes"),"."),(0,a.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,a.kt)("strong",{parentName:"li"},"Nom"),", ",(0,a.kt)("strong",{parentName:"li"},"Alias")," & ",(0,a.kt)("strong",{parentName:"li"},"IP Address/DNS")," correspondant \xe0 votre serveur ",(0,a.kt)("strong",{parentName:"li"},"HTTP Server"),"."),(0,a.kt)("li",{parentName:"ul"},"Appliquez le mod\xe8le d'h\xf4te ",(0,a.kt)("strong",{parentName:"li"},"App-Protocol-HTTP-custom"),"."),(0,a.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, les macros ci-dessous indiqu\xe9es comme requises (",(0,a.kt)("strong",{parentName:"li"},"Obligatoire"),") doivent \xeatre renseign\xe9es.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Obligatoire"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Options suppl\xe9mentaires \xe0 ajouter \xe0 l'ensemble des commandes de l'h\xf4te (ex: --verbose)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"PORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"(D\xe9faut : '80')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"PROTOCOL"),(0,a.kt)("td",{parentName:"tr",align:"left"},"(D\xe9faut : 'http')")))),(0,a.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le plugin et que signifient les options des commandes ?"),(0,a.kt)("p",null,"Une fois le plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis votre collecteur Centreon en vous connectant avec\nl'utilisateur ",(0,a.kt)("strong",{parentName:"p"},"centreon-engine")," (",(0,a.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_protocol_http.pl \\\n    --plugin=apps::protocols::http::plugin \\\n    --mode=response \\\n    --hostname=google.com \\\n    --http-backend=curl \\\n    --extra-stats \\\n    --use-new-perfdata\n")),(0,a.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0 :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: response time 0.078s | 'http.response.time.seconds'=0.078s;;;0; 'http.response.size.count'=49602B;;;0; 'http.response.resolve.time.milliseconds'=4.176ms;;;0; 'http.response.connect.time.milliseconds'=4.176ms;;;0; 'http.response.processing.time.milliseconds'=44.163ms;;;0; 'http.response.transfer.time.milliseconds'=4.176ms;;;0;\n")),(0,a.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre\naffich\xe9e en ajoutant le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_protocol_http.pl \\\n    --plugin=apps::protocols::http::plugin \\\n    --mode=soap-content \\\n    --help\n")),(0,a.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s en ajoutant le param\xe8tre\n",(0,a.kt)("inlineCode",{parentName:"p"},"--list-mode")," \xe0 la commande :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_protocol_http.pl \\\n    --plugin=apps::protocols::http::plugin \\\n    --list-mode\n")),(0,a.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,a.kt)("p",null,"Rendez-vous sur la ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"documentation d\xe9di\xe9e"),"\npour le diagnostic des erreurs communes des plugins Centreon."))}N.isMDXComponent=!0}}]);