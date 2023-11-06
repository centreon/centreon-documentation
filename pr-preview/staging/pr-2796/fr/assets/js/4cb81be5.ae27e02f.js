"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[84689],{17234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>d,toc:()=>m});n(67294);var a=n(3905),r=n(51715),l=n(7626);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"applications-redis-sentinel",title:"Redis Sentinel"},u=void 0,d={unversionedId:"integrations/plugin-packs/procedures/applications-redis-sentinel",id:"integrations/plugin-packs/procedures/applications-redis-sentinel",title:"Redis Sentinel",description:"Contenu du Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-redis-sentinel.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-redis-sentinel",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/applications-redis-sentinel",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-redis-sentinel.md",tags:[],version:"current",frontMatter:{id:"applications-redis-sentinel",title:"Redis Sentinel"},sidebar:"pp",previous:{title:"Redis Restapi (d\xe9pr\xe9ci\xe9)",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/applications-redis-restapi"},next:{title:"Rubrik Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/applications-rubrik-restapi"}},c={},m=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Mod\xe8les",id:"mod\xe8les",level:3},{value:"R\xe8gles de d\xe9couverte",id:"r\xe8gles-de-d\xe9couverte",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3}],k={toc:m},g="wrapper";function f(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)(g,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){s(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,a.kt)("h3",{id:"mod\xe8les"},"Mod\xe8les"),(0,a.kt)("p",null,"Le Pack Centreon Redis Sentinel apporte 1 mod\xe8le d'h\xf4te :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"App-Redis-Sentinel-custom")),(0,a.kt)("p",null,"Il apporte les Mod\xe8les de Service suivants :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Discovery"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Redis-Clusters"),(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Redis-Sentinel-Redis-Clusters"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Sentinel-Clusters"),(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Redis-Sentinel-Sentinel-Clusters"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,a.kt)("h3",{id:"r\xe8gles-de-d\xe9couverte"},"R\xe8gles de d\xe9couverte"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Rule name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Redis-Sentinel-Redis-Cluster-Name"),(0,a.kt)("td",{parentName:"tr",align:"left"},"D\xe9couvre les clusters et supervise le statut et l'utilisation des Redis")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Redis-Sentinel-Sentinel-Cluster-Name"),(0,a.kt)("td",{parentName:"tr",align:"left"},"D\xe9couvre les clusters et supervise le statut et l'utilisation des Sentinel")))),(0,a.kt)("h3",{id:"m\xe9triques--statuts-collect\xe9s"},"M\xe9triques & statuts collect\xe9s"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Redis-Clusters",label:"Redis-Clusters",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cluster.redis.slaves.detected.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of detected slaves"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cluster.redis.subjectively_down.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of subjectively down redis instances"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cluster.redis.objectively_down.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of objectively down redis instances"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cluster.redis.slave_replication_offset.stddev.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Slave replication offset standard deviation (between all slaves)"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of redis instance"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"cluster_name~redis_address:redis_port"),"#cluster.redis.ping_ok.latency.milliseconds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Last ok ping latency"),(0,a.kt)("td",{parentName:"tr",align:"left"},"ms"))))),(0,a.kt)(l.Z,{value:"Sentinel-Clusters",label:"Sentinel-Clusters",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cluster.sentinels.slaves.detected.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of detected sentinels"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cluster.sentinels.subjectively_down.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of subjectively down sentinel instances"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cluster.sentinels.objectively_down.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of objectively down sentinel instances"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"quorum status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of sentinel voted quorum"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of sentinel instance"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"cluster_name~sentinel_address:sentinel_port"),"#cluster.sentinel.ping_ok.latency.milliseconds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Last ok ping latency"),(0,a.kt)("td",{parentName:"tr",align:"left"},"ms")))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("p",null,"Afin de superviser Redis Sentinel, le collecteur doit pouvoir r\xe9aliser des requ\xeates avec l'utilitaire ",(0,a.kt)("strong",{parentName:"p"},"redis-cli")," sur le port TCP/26379 (par d\xe9faut).\nVoici la liste des commandes utilis\xe9es:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"sentinel ckquorum <cluster_name>"),(0,a.kt)("li",{parentName:"ul"},"sentinel masters"),(0,a.kt)("li",{parentName:"ul"},"sentinel replicas <cluster_name>"),(0,a.kt)("li",{parentName:"ul"},"sentinel sentinels <cluster_name>")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources ",(0,a.kt)("strong",{parentName:"li"},"Redis Sentinel"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Redis-Sentinel\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Pack ",(0,a.kt)("strong",{parentName:"li"},"Redis Sentinel")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),"."))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources ",(0,a.kt)("strong",{parentName:"li"},"Redis Sentinel"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Redis-Sentinel\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Sur le serveur Central Centreon, installer le RPM du Pack ",(0,a.kt)("strong",{parentName:"p"},"Redis Sentinel"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-redis-sentinel\n")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\n3. Sur l\'interface Web de Centreon, installer le Pack **Redis Sentinel** depuis la page **Configuration > Packs de plugins**.\n\n</TabItem>\n</Tabs>\n\n## Configuration\n\n### H\xf4te\n\n* Ajoutez un H\xf4te \xe0 Centreon depuis la page **Configuration > H\xf4tes**\n* Compl\xe9tez les champs **Nom**, **Alias** & **IP Address / DNS** correspondant \xe0 votre serveur **Redis Sentinel**.\n* Appliquez le Mod\xe8le d\'H\xf4te **applications-redis-sentinel-custom**\n\n* Une fois le mod\xe8le appliqu\xe9, renseignez les macros correspondantes. Attention, certaines macros sont obligatoires ("mandatory").\n\n| Mandatory | Name             | Description                                                                  |\n|:----------|:-----------------|:-----------------------------------------------------------------------------|\n|           | SENTINELPORT     | (Default: \'26379\')                                                           |\n|           | SENTINELUSERNAME | Sentinel username (redis-cli >= 6.x mandatory)                               |\n|           | SENTINELPASSWORD | Sentinel password                                                            |\n|           | EXTRAOPTIONS     | Any extra option you may want to add to the command (eg. a --tls --insecure) |\n\n## Comment installer redis-cli 6.x ?\n\nPour le support TLS et des utilisateurs ACLs, une version 6.x minimum de **redis-cli** est n\xe9cessaire.\n\n<Tabs groupId="sync">\n<TabItem value="Centos 7" label="Centos 7">\n\n```bash\nyum install epel-release\nyum install http://rpms.remirepo.net/enterprise/remi-release-7.rpm \nyum --enablerepo=remi install redis\n')))),(0,a.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis votre collecteur Centreon en vous connectant avec\nl'utilisateur ",(0,a.kt)("strong",{parentName:"p"},"centreon-engine"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_redis_sentinel.pl \\\n    --plugin=apps::redis::sentinel::plugin \\\n    --server='10.0.0.1' \\\n    --port='26379' \\\n    --mode=redis-clusters \\\n    --filter-cluster-name='' \\\n    --verbose\n")),(0,a.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0 :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: cluster 'mymaster' number of detected slaves: 2, subjectively down instances: 0, objectively down instances: 0 - slave replication offset standard deviation: 843.00 - All redis instances are ok | 'mymaster#cluster.redis.slaves.detected.count'=2;;;0; 'mymaster#cluster.redis.subjectively_down.count'=0;;;0; 'mymaster#cluster.redis.objectively_down.count'=0;;;0; 'cluster.redis.slave_replication_offset.stddev.count'=843.00;;;; 'mymaster~10.25.52.107:6379#cluster.redis.ping_ok.latency.milliseconds'=1024s;;;0; 'mymaster~10.25.52.90:6379#cluster.redis.ping_ok.latency.milliseconds'=185s;;;0; 'mymaster~10.25.52.98:6379#cluster.redis.ping_ok.latency.milliseconds'=355s;;;0;\nchecking cluster 'mymaster'\n    number of detected slaves: 2, subjectively down instances: 0, objectively down instances: 0\n    slave replication offset standard deviation: 843.00\n    instance '10.25.52.107:6379' status: master [role: master], last ok ping: 1024 ms\n    instance '10.25.52.90:6379' status: slave [role: slave], last ok ping: 185 ms\n    instance '10.25.52.98:6379' status: slave [role: slave], last ok ping: 355 ms\n")),(0,a.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre\naffich\xe9e en ajoutant le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_redis_sentinel.pl \\\n    --plugin=apps::redis::sentinel::plugin \\\n    --mode=redis-clusters \\\n    --help\n")),(0,a.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s en ajoutant le param\xe8tre\n",(0,a.kt)("inlineCode",{parentName:"p"},"--list-mode")," \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_redis_sentinel.pl \\\n    --plugin=apps::redis::sentinel::plugin \\\n    --list-mode\n")),(0,a.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,a.kt)("p",null,"Rendez-vous sur la ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"documentation d\xe9di\xe9e"),"\npour le diagnostic des erreurs communes des Plugins Centreon."))}f.isMDXComponent=!0}}]);