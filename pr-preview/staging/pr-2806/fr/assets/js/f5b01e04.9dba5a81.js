"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[19588],{82071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>N,frontMatter:()=>o,metadata:()=>u,toc:()=>m});n(67294);var a=n(3905),r=n(51715),l=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={id:"applications-backupexec-nscp-restapi",title:"Veritas Backup Exec NSCP Rest API"},c=void 0,u={unversionedId:"integrations/plugin-packs/procedures/applications-backupexec-nscp-restapi",id:"integrations/plugin-packs/procedures/applications-backupexec-nscp-restapi",title:"Veritas Backup Exec NSCP Rest API",description:"Contenu du Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-backupexec-nscp-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-backupexec-nscp-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/applications-backupexec-nscp-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-backupexec-nscp-restapi.md",tags:[],version:"current",frontMatter:{id:"applications-backupexec-nscp-restapi",title:"Veritas Backup Exec NSCP Rest API"},sidebar:"pp",previous:{title:"Veeam NSClient++ NRPE",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/applications-veeam-nrpe"},next:{title:"VerneMQ Restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/applications-vernemq-restapi"}},d={},m=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Mod\xe8les",id:"mod\xe8les",level:3},{value:"R\xe8gles de d\xe9couverte",id:"r\xe8gles-de-d\xe9couverte",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"NSClient Configuration",id:"nsclient-configuration",level:3},{value:"Flux r\xe9seau",id:"flux-r\xe9seau",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3}],k={toc:m},g="wrapper";function N(e){var{components:t}=e,n=p(e,["components"]);return(0,a.kt)(g,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,a.kt)("h3",{id:"mod\xe8les"},"Mod\xe8les"),(0,a.kt)("p",null,"Le Pack Veritas Backup Exec apporte un mod\xe8le d'h\xf4te :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"App-Backupexec-Nscp-Restapi-custom")),(0,a.kt)("p",null,"Il apporte les mod\xe8les de service suivants :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Alias"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Mod\xe8le de service"),(0,a.kt)("th",{parentName:"tr",align:"left"},"D\xe9faut"),(0,a.kt)("th",{parentName:"tr",align:"left"},"D\xe9couverte"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Alerts"),(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Backupexec-Alerts-Nscp-Restapi"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Disks"),(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Backupexec-Disks-Nscp-Restapi"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Jobs"),(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Backupexec-Jobs-Nscp-Restapi"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"})))),(0,a.kt)("h3",{id:"r\xe8gles-de-d\xe9couverte"},"R\xe8gles de d\xe9couverte"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom de la r\xe8gle"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Backupexec-Nscp-Restapi-Disk-Name"),(0,a.kt)("td",{parentName:"tr",align:"left"},"D\xe9couvre les disques et supervise le statut et l'utilisation")))),(0,a.kt)("h3",{id:"m\xe9triques--statuts-collect\xe9s"},"M\xe9triques & statuts collect\xe9s"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Alerts",label:"Alerts",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"alerts.severity.none.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of alerts with none severity"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"alerts.severity.question.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of alerts with question severity"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"alerts.severity.error.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of alerts with error severity"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"alerts.severity.warning.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of alerts with warning severity"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"alerts.severity.information.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of alerts with informational severity"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"alert status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Current alert status"),(0,a.kt)("td",{parentName:"tr",align:"left"}))))),(0,a.kt)(l.Z,{value:"Disks",label:"Disks",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"disk status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the disk (enabled or disabled)"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"disk_name"),"#disk.space.usage.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Space used on the disk"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"disk_name"),"#disk.space.free.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Free space left on the disk"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"disk_name"),"#disk.space.usage.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Space used on the disk in percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,a.kt)(l.Z,{value:"Jobs",label:"Jobs",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"jobs.detected.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of jobs detected"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"job status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Current job status"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"job long status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Current active job elapsed time"),(0,a.kt)("td",{parentName:"tr",align:"left"})))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("h3",{id:"nsclient-configuration"},"NSClient Configuration"),(0,a.kt)("p",null,"Pour superviser un ",(0,a.kt)("strong",{parentName:"p"},"Backup Exec")," de Veritas via NRPE, installez la version packag\xe9e Centreon de l'agent NSClient++.\nSuivez notre ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/centreon-nsclient-tutorial"},"documentation officielle")),(0,a.kt)("p",null,"Veuillez t\xe9l\xe9charger et installer la derni\xe8re version en date de ",(0,a.kt)("strong",{parentName:"p"},"Centreon-NSClient-xxx.exe"),": ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/centreon/centreon-nsclient-build/releases"},"https://github.com/centreon/centreon-nsclient-build/releases")),(0,a.kt)("p",null,"Par d\xe9faut, l'utilisateur ",(0,a.kt)("strong",{parentName:"p"},"centreon")," avec le mot de passe ",(0,a.kt)("strong",{parentName:"p"},"centreon")," est utilis\xe9 pour se connecter \xe0 NSClient."),(0,a.kt)("h3",{id:"flux-r\xe9seau"},"Flux r\xe9seau"),(0,a.kt)("p",null,"La communication doit \xeatre possible sur le port TCP 8443 depuis le collecteur\nCentreon vers l'\xe9quipement supervis\xe9."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installez le plugin Centreon sur tous les collecteurs Centreon devant superviser des resources ",(0,a.kt)("strong",{parentName:"li"},"Veritas Backup Exec NSCP API")," :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Protocol-Nrpe\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface web de Centreon, installez le Pack ",(0,a.kt)("strong",{parentName:"li"},"Veritas Backup Exec NSCP API")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),"."))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installez le plugin Centreon sur tous les collecteurs Centreon devant superviser des resources ",(0,a.kt)("strong",{parentName:"li"},"Veritas Backup Exec NSCP API")," :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Protocol-Nrpe\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur le serveur central Centreon, installez le RPM du Pack ",(0,a.kt)("strong",{parentName:"li"},"Veritas Backup Exec NSCP API")," :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-backupexec-nscp-restapi\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface web de Centreon, installez le Pack ",(0,a.kt)("strong",{parentName:"li"},"Veritas Backup Exec NSCP API")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),".")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ajoutez un h\xf4te \xe0 Centreon depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes"),"."),(0,a.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,a.kt)("strong",{parentName:"li"},"Nom"),", ",(0,a.kt)("strong",{parentName:"li"},"Alias")," et ",(0,a.kt)("strong",{parentName:"li"},"IP Address / DNS")," correspondant \xe0 votre serveur ",(0,a.kt)("strong",{parentName:"li"},"Veritas Backup Exec"),"."),(0,a.kt)("li",{parentName:"ul"},"Appliquez le mod\xe8le d'h\xf4te ",(0,a.kt)("strong",{parentName:"li"},"App-Backupexec-Nscp-Restapi-custom"),"."),(0,a.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, les macros ci-dessous indiqu\xe9es comme requises (",(0,a.kt)("strong",{parentName:"li"},"Obligatoire"),") doivent \xeatre renseign\xe9es.")),(0,a.kt)("p",null,"Une fois celui-ci configur\xe9, certaines macros doivent \xeatre renseign\xe9es:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Obligatoire"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPIPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Port used (Default: 8443)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPIPROTO"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Protocol used (Default: https)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPIUSERNAME"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NSClient API username")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPIPASSWORD"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NSClient API password")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPILEGACYPASSWORD"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NSClient API legacy authentication password")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPIEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --insecure)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"BEMCLIFILE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Powershell module file (Default: C:/Program Files/Veritas/Backup Exec/Modules/BEMCLI/bemcli)")))),(0,a.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,a.kt)("p",null,"Une fois le plugin install\xe9, vous pouvez tester la bonne configuration NSClient directement en ligne\nde commande depuis votre collecteur Centreon en vous connectant avec\nl'utilisateur ",(0,a.kt)("strong",{parentName:"p"},"centreon-engine")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_protocol_nrpe.pl \\\n    --plugin=apps::protocols::nrpe::plugin \\\n    --mode=query \\\n    --custommode=nsclient \\\n    --hostname='10.0.0.1' \\\n    --username=centreon \\\n    --password=centreon \\\n    --insecure \\\n    --http-backend=curl \\\n    --command=check_version\n")),(0,a.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0 :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"0.5.2.41 2018-04-26\n")),(0,a.kt)("p",null,"Vous pouvez maintenant tester le plugin Backup Exec :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_protocol_nrpe.pl \\\n    --plugin=apps::protocols::nrpe::plugin \\\n    --mode=query \\\n    --custommode=nsclient \\\n    --hostname='10.0.0.1' \\\n    --username=centreon \\\n    --password=centreon \\\n    --insecure \\\n    --http-backend=curl \\\n    --command=check_centreon_plugins \\\n    --arg='apps::backup::backupexec::local::plugin' \\\n    --arg='disks' \\\n    --arg='--filter-name=\"\" --verbose' \\\n    --verbose\n")),(0,a.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0 :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: All disks are ok | 'disk 1#disk.space.usage.bytes'=1000000B;;;0;100000000 'disk 1#disk.space.free.bytes'=99000000B;;;0;100000000 'disk 1#disk.space.usage.percentage'=1.00%;;;0;100 'disk 2#disk.space.usage.bytes'=1000000B;;;0;250000000 'disk 2#disk.space.free.bytes'=249000000B;;;0;250000000 'disk 2#disk.space.usage.percentage'=0.40%;;;0;100\nchecking disk 'disk 1' [type: tapeDriveDevice]\n    status: enabled\n    space usage total: 95.37 MB used: 976.56 KB (1.00%) free: 94.41 MB (99.00%)\nchecking disk 'disk 2' [type: deduplicationDiskStorageDevice]\n    status: enabled\n    space usage total: 238.42 MB used: 976.56 KB (0.40%) free: 237.46 MB (99.60%)\n")),(0,a.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre\naffich\xe9e en ajoutant le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_protocol_nrpe.pl \\\n    --plugin=apps::protocols::nrpe::plugin \\\n    --mode=query \\\n    --custommode=nsclient \\\n    --hostname='10.0.0.1' \\\n    --username=centreon \\\n    --password=centreon \\\n    --insecure \\\n    --http-backend=curl \\\n    --command=check_centreon_plugins \\\n    --arg='apps::backup::backupexec::local::plugin' \\\n    --arg='disks' \\\n    --arg='--help'\n")),(0,a.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s en ajoutant le param\xe8tre\n",(0,a.kt)("inlineCode",{parentName:"p"},"--list-mode")," \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_protocol_nrpe.pl \\\n    --plugin=apps::protocols::nrpe::plugin \\\n    --mode=query \\\n    --custommode=nsclient \\\n    --hostname='10.0.0.1' \\\n    --username=centreon \\\n    --password=centreon \\\n    --insecure \\\n    --http-backend=curl \\\n    --command=check_centreon_plugins \\\n    --arg='apps::backup::backupexec::local::plugin' \\\n    --arg='xxx' \\\n    --arg='--list-mode'\n")),(0,a.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,a.kt)("p",null,"Rendez-vous sur la ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"documentation d\xe9di\xe9e"),"\npour le diagnostic des erreurs communes des plugins Centreon."))}N.isMDXComponent=!0}}]);