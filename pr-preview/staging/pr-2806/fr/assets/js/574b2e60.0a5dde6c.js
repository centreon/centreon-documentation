"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[13933],{1823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>d});n(67294);var a=n(3905),r=n(51715),l=n(7626);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={id:"applications-php-apc-web",title:"PHP APC"},c=void 0,u={unversionedId:"integrations/plugin-packs/procedures/applications-php-apc-web",id:"integrations/plugin-packs/procedures/applications-php-apc-web",title:"PHP APC",description:"Contenu du Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-php-apc-web.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-php-apc-web",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/applications-php-apc-web",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-php-apc-web.md",tags:[],version:"current",frontMatter:{id:"applications-php-apc-web",title:"PHP APC"},sidebar:"pp",previous:{title:"Pfsense Fauxapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/applications-pfsense-fauxapi"},next:{title:"PHP FPM",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/applications-php-fpm-web"}},m={},d=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Mod\xe8les",id:"mod\xe8les",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3}],g={toc:d},k="wrapper";function f(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(k,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){p(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,a.kt)("h3",{id:"mod\xe8les"},"Mod\xe8les"),(0,a.kt)("p",null,"Le connecteur de supervision Centreon PHP APC apporte 1 mod\xe8le d'h\xf4te :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"App-Php-Apc-Web")),(0,a.kt)("p",null,"Il apporte les Mod\xe8les de Services suivants :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Php-Apc-File-Cache"),(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Php-Apc-File-Cache-Web"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Php-Apc-Memory"),(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Php-Apc-Memory-Web"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,a.kt)("h3",{id:"m\xe9triques--statuts-collect\xe9s"},"M\xe9triques & statuts collect\xe9s"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Php-Apc-File-Cache",label:"Php-Apc-File-Cache",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"filecache.requests.persecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Global request rate per seconds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"r/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"filecache.requests.now.persecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Request Rate per seconds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"r/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"filecache.hits.persecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Global hit rate per seconds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"r/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"filecache.hits.now.persecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Hit rate per seconds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"r/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"filecache.misses.persecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Global miss rate per seconds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"r/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"filecache.misses.now.persecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Miss rate per seconds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"r/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"filecache.hits.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"GLobal hit ratio"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"filecache.hits.now.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Hit ratio"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,a.kt)(l.Z,{value:"Php-Apc-Memory",label:"Php-Apc-Memory",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memory.usage.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Memory usage in bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memory.fragmentation.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Memory Fragmentation"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("p",null,"La page Web PHP APC doit \xeatre joignable depuis le collecteur Centreon sur le\nport sp\xe9cifi\xe9 dans la Macro d'H\xf4te ",(0,a.kt)("em",{parentName:"p"},"PHPAPCWEBPORT"),". Plus d'information sur\nles Macros d'H\xf4te dans la partie ",(0,a.kt)("a",{parentName:"p",href:"#Configuration"},"Configuration"),"."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources ",(0,a.kt)("em",{parentName:"li"},"PHP APC"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Php-Apc-Web\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"PHP APC")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins")))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources ",(0,a.kt)("em",{parentName:"li"},"PHP APC"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Php-Apc-Web\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le RPM du Pack ",(0,a.kt)("em",{parentName:"li"},"PHP APC"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-php-apc-web\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"PHP APC")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"))))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ajoutez un H\xf4te \xe0 Centreon depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes"),"."),(0,a.kt)("li",{parentName:"ul"},'Compl\xe9tez les champs "Nom","Alias" & "IP Address / DNS" correspondant \xe0 votre serveur ',(0,a.kt)("em",{parentName:"li"},"PHP APC")),(0,a.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,a.kt)("em",{parentName:"li"},"Applications-Php-Apc-Web-custom")," "),(0,a.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, les Macros ci-dessous indiqu\xe9es comme requises(",(0,a.kt)("em",{parentName:"li"},"Mandatory"),") doivent \xeatre renseign\xe9es ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"PHPAPCWEBPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"(Default: '80')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"PHPAPCWEBPROTO"),(0,a.kt)("td",{parentName:"tr",align:"left"},"(Default: 'http')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"PHPAPCWEBURLPATH"),(0,a.kt)("td",{parentName:"tr",align:"left"},"(Default: '/apc.php')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"(Default: 'Any extra option you may want to add to every command","_","line (eg. a --verbose flag)')")))),(0,a.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis votre collecteur Centreon en vous connectant avec\nl'utilisateur ",(0,a.kt)("em",{parentName:"p"},"centreon-engine"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_php_apc_web.pl \\\n    --plugin=apps::php::apc::web::plugin \\\n    --mode=memory \\\n    --hostname=10.0.0.1 \\\n    --proto='http' \\\n    --port='80' \\\n    --urlpath='/apc.php' \\\n    --warning-used='80' \\\n    --critical-used='90' \\\n    --warning-fragmentation='' \\\n    --critical-fragmentation='' \\\n    --use-new-perfdata \n")),(0,a.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0 :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK : Memory Usage Total: 985.22 MB Used: 500.68 MB (50.82%) Free: 484.54 MB (49.18%) Memory Fragmentation: 10% | 'memory.usage.bytes'=525000704B;80;90;0;1033080832 'memory.fragmentation.percentage'=10%;;;0;100 \n")),(0,a.kt)("p",null,"Dans cet exemple, une alarme de type WARNING sera d\xe9clench\xe9e si l'utilisation\nde la m\xe9moire est sup\xe9rieure \xe0 80%\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-used='80'"),"); l'alarme sera de type CRITICAL au-del\xe0 de 90%."),(0,a.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre\naffich\xe9e en ajoutant le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_php_apc_web.pl \\\n    --plugin=apps::php::apc::web::plugin \\\n    --mode=memory \\\n    --help\n")),(0,a.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s en ajoutant le param\xe8tre\n",(0,a.kt)("inlineCode",{parentName:"p"},"--list-mode")," \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_php_apc_web.pl \\\n    --plugin=apps::php::apc::web::plugin \\\n    --list-mode\n")),(0,a.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,a.kt)("p",null,"Rendez-vous sur la ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"documentation d\xe9di\xe9e"),"\npour le diagnostique des erreurs commununes des Plugins Centreon."))}f.isMDXComponent=!0}}]);