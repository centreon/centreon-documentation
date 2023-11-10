"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[4765],{97353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>N,frontMatter:()=>s,metadata:()=>m,toc:()=>c});n(67294);var r=n(3905),a=n(51715),i=n(7626);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"applications-monitoring-node-exporter-windows",title:"Node Exporter Windows Metrics"},d=void 0,m={unversionedId:"integrations/plugin-packs/procedures/applications-monitoring-node-exporter-windows",id:"integrations/plugin-packs/procedures/applications-monitoring-node-exporter-windows",title:"Node Exporter Windows Metrics",description:"Ce pack permet la supervision d'un h\xf4te Windows bas\xe9e sur les m\xe9triques remont\xe9es par l'exporteur Prometheus.",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-monitoring-node-exporter-windows.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-monitoring-node-exporter-windows",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-node-exporter-windows",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-monitoring-node-exporter-windows.md",tags:[],version:"current",frontMatter:{id:"applications-monitoring-node-exporter-windows",title:"Node Exporter Windows Metrics"},sidebar:"pp",previous:{title:"Node Exporter Linux Metrics",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-node-exporter-linux"},next:{title:"NtopNG Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-ntopng-restapi"}},u={},c=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Mod\xe8les",id:"mod\xe8les",level:3},{value:"R\xe8gles de d\xe9couverte",id:"r\xe8gles-de-d\xe9couverte",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"Comment puis-je tester le plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3}],g={toc:c},k="wrapper";function N(e){var{components:t}=e,n=p(e,["components"]);return(0,r.kt)(k,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Ce pack permet la supervision d'un h\xf4te Windows bas\xe9e sur les m\xe9triques remont\xe9es par l'exporteur Prometheus."),(0,r.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,r.kt)("h3",{id:"mod\xe8les"},"Mod\xe8les"),(0,r.kt)("p",null,"Le connecteur de supervision Centreon ",(0,r.kt)("strong",{parentName:"p"},"Node Exporter Windows Metrics")," apporte un mod\xe8le d'h\xf4te :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"App-Monitoring-Node-Exporter-Windows-custom")),(0,r.kt)("p",null,"Il apporte les mod\xe8les de service suivants :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Alias"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Mod\xe8le de service"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"D\xe9faut"),(0,r.kt)("th",{parentName:"tr",align:"left"},"D\xe9couverte"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Node-Cpu"),(0,r.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Node-Exporter-Windows-Cpu"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le l'utilisation CPU du noeud"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Node-Memory"),(0,r.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Node-Exporter-Windows-Memory"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le la consommation m\xe9moire du noeud"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Node-Service-Name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Node-Exporter-Windows-Service-Name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le l'\xe9tat des services"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Node-Storage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Node-Exporter-Windows-Storage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le la consommation du stockage du noeud"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Node-Traffic"),(0,r.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Node-Exporter-Windows-Traffic"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le le trafic r\xe9seau par interface"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,r.kt)("h3",{id:"r\xe8gles-de-d\xe9couverte"},"R\xe8gles de d\xe9couverte"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Nom de la r\xe8gle"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Node-Exporter-Windows-Interface-Name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"D\xe9couverte des interfaces r\xe9seau et supervision de leur utilisation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Node-Exporter-Windows-Storage-Name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"D\xe9couverte des disques et supervision de leur utilisation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Node-Exporter-Windows-Service-Name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"D\xe9couverte des services et supervision de leur \xe9tat.")))),(0,r.kt)("h3",{id:"m\xe9triques--statuts-collect\xe9s"},"M\xe9triques & statuts collect\xe9s"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Node-Cpu",label:"Node-Cpu",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cpu.utilization.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"node_cpu"),"#node.cpu.dpc.utilization.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"node_cpu"),"#node.cpu.idle.utilization.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"node_cpu"),"#node.cpu.interrupt.utilization.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"node_cpu"),"#node.cpu.privileged.utilization.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"node_cpu"),"#node.cpu.user.utilization.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,r.kt)(i.Z,{value:"Node-Memory",label:"Node-Memory",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"node.memory.pages.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"usage"),(0,r.kt)("td",{parentName:"tr",align:"left"}))))),(0,r.kt)(i.Z,{value:"Node-Service-Name",label:"Node-Service-Name",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"service"),"#status"),(0,r.kt)("td",{parentName:"tr",align:"left"}))))),(0,r.kt)(i.Z,{value:"Node-Storage",label:"Node-Storage",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"node_storage"),"#usage"),(0,r.kt)("td",{parentName:"tr",align:"left"}))))),(0,r.kt)(i.Z,{value:"Node-Traffic",label:"Node-Traffic",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"node.bandwidth.usage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"traffic"),"#node.packets.in.error.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"traffic"),"#node.packets.out.error.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"traffic"),"#node.packets.in.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"traffic"),"#node.packets.out.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"traffic"),"#node.traffic.in.bitspersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"traffic"),"#node.traffic.out.bitspersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"b/s")))))),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("p",null,"Ce pack est bas\xe9 sur l'exporteur Prometheus community pour les machines Windows : ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prometheus-community/windows_exporter#installation"},"https://github.com/prometheus-community/windows_exporter#installation"),"."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources ",(0,r.kt)("strong",{parentName:"li"},"Windows")," :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Monitoring-Nodeexporter-Windows\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface web de Centreon, installez le connecteur de supervision ",(0,r.kt)("strong",{parentName:"li"},"Node Exporter Windows Metrics")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),"."))),(0,r.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources ",(0,r.kt)("strong",{parentName:"li"},"Windows")," :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Monitoring-Nodeexporter-Windows\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur le serveur central Centreon, installez le RPM du connecteur de supervision ",(0,r.kt)("strong",{parentName:"li"},"Node Exporter Windows Metrics")," :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-monitoring-node-exporter-windows\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface web de Centreon, installez le connecteur de supervision ",(0,r.kt)("strong",{parentName:"li"},"Node Exporter Windows Metrics")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),".")))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ajoutez un h\xf4te \xe0 Centreon depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes"),"."),(0,r.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,r.kt)("strong",{parentName:"li"},"Nom"),", ",(0,r.kt)("strong",{parentName:"li"},"Alias")," & ",(0,r.kt)("strong",{parentName:"li"},"IP Address/DNS")," correspondant \xe0 votre serveur ",(0,r.kt)("strong",{parentName:"li"},"Windows"),"."),(0,r.kt)("li",{parentName:"ul"},"Appliquez le mod\xe8le d'h\xf4te ",(0,r.kt)("strong",{parentName:"li"},"App-Monitoring-Node-Exporter-Windows-custom"),"."),(0,r.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, les macros ci-dessous indiqu\xe9es comme requises (",(0,r.kt)("strong",{parentName:"li"},"Obligatoire"),") doivent \xeatre renseign\xe9es.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Obligatoire"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Options suppl\xe9mentaires \xe0 ajouter \xe0 l'ensemble des commandes de l'h\xf4te (ex: --verbose)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"NODEEXPORTERPORT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(D\xe9faut : '9182')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"NODEEXPORTERPROTO"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(D\xe9faut : 'http')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"NODEEXPORTERURL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(D\xe9faut : '/metrics')")))),(0,r.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le plugin et que signifient les options des commandes ?"),(0,r.kt)("p",null,"Une fois le plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis votre collecteur Centreon en vous connectant avec\nl'utilisateur ",(0,r.kt)("strong",{parentName:"p"},"centreon-engine")," (",(0,r.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_monitoring_nodeexporter_windows.pl \\\n    --plugin=apps::monitoring::nodeexporter::windows::plugin \\\n    --mode=services \\\n    --hostname=10.0.0.1 \\\n    --urlpath='/metrics' \\\n    --port='9182' \\\n    --proto='http' \\\n    --service='' \\\n    --warning-status='' \\\n    --critical-status='%{start_mode} =~ /auto/ && %{status} !~ /^running$/' \\\n    --use-new-perfdata\n")),(0,r.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0 :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CRITICAL: Service : 'winserv1' [state: 'stopped'] [start_mode: 'auto'] - Service : 'sysmonitor' [state: 'stopped'] [start_mode: 'auto']\n")),(0,r.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre\naffich\xe9e en ajoutant le param\xe8tre ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_monitoring_nodeexporter_windows.pl \\\n    --plugin=apps::monitoring::nodeexporter::windows::plugin \\\n    --mode=services \\\n    --help\n")),(0,r.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s en ajoutant le param\xe8tre\n",(0,r.kt)("inlineCode",{parentName:"p"},"--list-mode")," \xe0 la commande :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_monitoring_nodeexporter_windows.pl \\\n    --plugin=apps::monitoring::nodeexporter::windows::plugin \\\n    --list-mode\n")),(0,r.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,r.kt)("p",null,"Rendez-vous sur la ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"documentation d\xe9di\xe9e"),"\npour le diagnostic des erreurs communes des plugins Centreon."))}N.isMDXComponent=!0}}]);