"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[52115],{52434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>o,metadata:()=>d,toc:()=>m});n(67294);var r=n(3905),a=n(51715),l=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={id:"applications-hddtemp-tcp",title:"Hddtemp TCP"},u=void 0,d={unversionedId:"integrations/plugin-packs/procedures/applications-hddtemp-tcp",id:"integrations/plugin-packs/procedures/applications-hddtemp-tcp",title:"Hddtemp TCP",description:"Contenu du Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-hddtemp-tcp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-hddtemp-tcp",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/applications-hddtemp-tcp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-hddtemp-tcp.md",tags:[],version:"current",frontMatter:{id:"applications-hddtemp-tcp",title:"Hddtemp TCP"},sidebar:"pp",previous:{title:"HashiCorp Vault Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/applications-hashicorp-vault-restapi"},next:{title:"Hibernate",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/applications-hibernate-jmx"}},c={},m=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Mod\xe8les",id:"mod\xe8les",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3}],g={toc:m},k="wrapper";function f(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)(k,p(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,r.kt)("h3",{id:"mod\xe8les"},"Mod\xe8les"),(0,r.kt)("p",null,"Le connecteur de supervision Centreon Hddtemp TCP apporte 1 mod\xe8le d'h\xf4te :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"App-Hddtemp-Tcp-custom")),(0,r.kt)("p",null,"Il apporte le Mod\xe8le de Service suivant :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Temperatures"),(0,r.kt)("td",{parentName:"tr",align:"left"},"App-Hddtemp-Temperatures-Tcp"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,r.kt)("h3",{id:"m\xe9triques--statuts-collect\xe9s"},"M\xe9triques & statuts collect\xe9s"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Temperatures",label:"Temperatures",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"temperature"),(0,r.kt)("td",{parentName:"tr",align:"left"},"celsius or fahrenheit")))))),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("p",null,"Pour utiliser ce Pack, il est n\xe9cessaire d'installer l'utilitaire Hddtemp sur le\nserveur Linux \xe0 superviser. La plupart des distributions offre un paquet dans son\nsocle standard. "),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources ",(0,r.kt)("strong",{parentName:"li"},"Hddtemp"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Hddtemp\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,r.kt)("strong",{parentName:"li"},"Hddtemp TCP")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),"."))),(0,r.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources ",(0,r.kt)("strong",{parentName:"li"},"Hddtemp"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Hddtemp\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le RPM du Pack ",(0,r.kt)("strong",{parentName:"li"},"Hddtemp TCP"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-hddtemp-tcp\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,r.kt)("strong",{parentName:"li"},"Hddtemp TCP")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),".")))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ajoutez un H\xf4te \xe0 Centreon depuis la page ",(0,r.kt)("strong",{parentName:"p"},"Configuration > H\xf4tes"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Compl\xe9tez les champs ",(0,r.kt)("strong",{parentName:"p"},"Nom"),",",(0,r.kt)("strong",{parentName:"p"},"Alias")," & ",(0,r.kt)("strong",{parentName:"p"},"IP Address / DNS")," correspondant \xe0 votre serveur ",(0,r.kt)("strong",{parentName:"p"},"Hddtemp"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,r.kt)("strong",{parentName:"p"},"App-Hddtemp-Tcp-custom"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Une fois le mod\xe8le appliqu\xe9, renseignez les macros correspondantes. Attention, certaines macros sont obligatoires ("mandatory"). '))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"HDDTEMPTCPPORT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Port d'\xe9coute de HDDTemp (Par d\xe9faut: '7634')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Options suppl\xe9mentaires \xe0 ajouter \xe0 l'ensemble des commandes de l'h\xf4te (ex: --verbose)")))),(0,r.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,r.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis votre collecteur Centreon en vous connectant avec\nl'utilisateur ",(0,r.kt)("strong",{parentName:"p"},"centreon-engine"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_hddtemp.pl \\\n    --plugin=apps::hddtemp::plugin \\\n    --mode=temperatures \\\n    --custommode=tcp \\\n    --hostname='10.0.0.1' \\\n    --port=7634 \\\n    --filter-name='' \\\n    --unknown-status='' \\\n    --warning-status='' \\\n    --critical-status='%{status} !~ /ok/i' \\\n    --warning-temperature='30' \\\n    --critical-temperature='50' \\\n    --verbose \\\n    --use-new-perfdata \n")),(0,r.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0 :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Drive '/dev/sda' temperature: 24 C status: ok | '/dev/sda#drive.temperature.celsius'=24C;0:30;0:50;;\n")),(0,r.kt)("p",null,"Dans cet exemple, une alarme de type WARNING sera d\xe9clench\xe9e si la temp\xe9rature du\ndisque est sup\xe9rieure \xe0 30\xb0 (",(0,r.kt)("inlineCode",{parentName:"p"},"--warning-temperature='30"),")."),(0,r.kt)("p",null,"Une alarme CRITICAL sera d\xe9clench\xe9e si la temp\xe9rature est sup\xe9rieure \xe0 50\xb0 ou que\nle statut est diff\xe9rent de 'ok' (",(0,r.kt)("inlineCode",{parentName:"p"},"--critical-temperature='50' --critical-status='%{status} !~ /ok/i'"),")."),(0,r.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre\naffich\xe9e en ajoutant le param\xe8tre ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_hddtemp.pl \\\n    --plugin=apps::hddtemp::plugin \\\n    --mode=temperatures \\\n    --help\n")),(0,r.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s en ajoutant le param\xe8tre\n",(0,r.kt)("inlineCode",{parentName:"p"},"--list-mode")," \xe0 la commande:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_hddtemp.pl \\\n    --plugin=apps::hddtemp::plugin \\\n    --list-mode\n")),(0,r.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,r.kt)("p",null,"Rendez-vous sur la ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"documentation d\xe9di\xe9e"),"\npour le diagnostic des erreurs communes des Plugins Centreon."))}f.isMDXComponent=!0}}]);