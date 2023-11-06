"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[59183],{36658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>N,frontMatter:()=>p,metadata:()=>m,toc:()=>c});n(67294);var a=n(3905),r=n(51715),s=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"hardware-storage-hitachi-hcp-snmp",title:"Hitachi HCP SNMP"},u=void 0,m={unversionedId:"integrations/plugin-packs/procedures/hardware-storage-hitachi-hcp-snmp",id:"integrations/plugin-packs/procedures/hardware-storage-hitachi-hcp-snmp",title:"Hitachi HCP SNMP",description:"Contenu du connecteur de supervision",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-storage-hitachi-hcp-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-storage-hitachi-hcp-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/hardware-storage-hitachi-hcp-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-storage-hitachi-hcp-snmp.md",tags:[],version:"current",frontMatter:{id:"hardware-storage-hitachi-hcp-snmp",title:"Hitachi HCP SNMP"},sidebar:"pp",previous:{title:"Fujitsu Eternus DX",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/hardware-storage-fujitsu-eternus-dx-ssh"},next:{title:"Hitachi NAS SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/hardware-storage-hitachi-hnas-snmp"}},d={},c=[{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment faire le test en ligne de commande et que signifient les principales options ?",id:"comment-faire-le-test-en-ligne-de-commande-et-que-signifient-les-principales-options-",level:4},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:3}],g={toc:c},k="wrapper";function N(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)(k,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){l(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,a.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,a.kt)("p",null,"Le connecteur de supervision Hitachi HCP SNMP inclut la supervision des Nodes, Tenants et Volumes."),(0,a.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"Nodes",label:"Nodes",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"node status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the node"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nic status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the nic"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"san path status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the san path"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"bbu status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the battery backup unit"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"nodeid"),"#node.space.usage.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Usage of the node"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"nodeid"),"#node.space.free.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Free space left on the node"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"nodeid"),"#node.space.usage.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Usage of the node in percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"nodeid"),"#node.sensor.temperature.celsius"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Sensor temperature"),(0,a.kt)("td",{parentName:"tr",align:"left"},"C")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"nodeid"),"#node.sensor.fan.speed.rpm"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Sensor fan speed"),(0,a.kt)("td",{parentName:"tr",align:"left"},"rpm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"nodeid"),"#node.sensor.voltage.volt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Sensor voltage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"V")))),(0,a.kt)("p",null,"It is possible to filter on the name of a node using a REGEXP of the form ","[",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-node-id='101'"),"]",".")),(0,a.kt)(s.Z,{value:"Tenants",label:"Tenants",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"tenantname"),"#tenant.space.usage.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Usage of the tenant"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"tenantname"),"#tenant.space.free.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Free space left on the tenant"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"tenantname"),"#tenant.space.usage.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Usage of the tenant in percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")))),(0,a.kt)("p",null,"It is possible to filter on the ID of a tenant using a REGEXP of the form ","[",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-tenant-name='backup'"),"]",".")),(0,a.kt)(s.Z,{value:"Volumes",label:"Volumes",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"volume status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the volume"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"nodeid"),":",(0,a.kt)("em",{parentName:"td"},"label"),"#volume.space.usage.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Usage of the volume"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"nodeid"),":",(0,a.kt)("em",{parentName:"td"},"label"),"#volume.space.free.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Free space left on the volume"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"nodeid"),":",(0,a.kt)("em",{parentName:"td"},"label"),"#volume.space.usage.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Usage of the volume in percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("p",null,"Afin de contr\xf4ler vos \xe9quipements Hitachi HCP, le SNMP doit \xeatre configur\xe9.\n(",(0,a.kt)("a",{parentName:"p",href:"https://knowledge.hitachivantara.com/Documents/Storage/Content_Platform/9.0.x/Administering_HCP/System_monitoring/03_Configuring_SNMP"},"https://knowledge.hitachivantara.com/Documents/Storage/Content_Platform/9.0.x/Administering_HCP/System_monitoring/03_Configuring_SNMP"),")"),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Storage-Hitachi-Hcp-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Hitachi HCP SNMP")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,a.kt)(s.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Storage-Hitachi-Hcp-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le connecteur de supervision via le RPM:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-storage-hitachi-hcp-snmp\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Hitachi HCP SNMP")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Ce connecteur de supervision est con\xe7u de mani\xe8re \xe0 avoir dans Centreon un h\xf4te par \xe9quipement Hitachi HCP.\nLorsque vous ajoutez un h\xf4te \xe0 Centreon, appliquez-lui le mod\xe8le ",(0,a.kt)("em",{parentName:"p"},"HW-Storage-Hitachi-Hcp-SNMP-custom"),'.\nIl est n\xe9cessaire de remplir les valeurs des champs "SNMP Community" et "SNMP Version".'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Si vous utilisez SNMP en version 3, vous devez configurer les param\xe8tres sp\xe9cifiques associ\xe9s via la macro SNMPEXTRAOPTIONS.\nPlus d'informations dans la section ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP"),". ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Extra options SNMP")))),(0,a.kt)("p",null,"Par d\xe9faut, le mod\xe8le ",(0,a.kt)("em",{parentName:"p"},"HW-Storage-Hitachi-Hcp-SNMP")," n'a pas de mod\xe8les de services associ\xe9s. Vous pouvez au choix:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"associer des mod\xe8les de services au mod\xe8le d'h\xf4te ",(0,a.kt)("em",{parentName:"li"},"HW-Storage-Hitachi-Hcp-SNMP-custom")),(0,a.kt)("li",{parentName:"ul"},"utiliser la d\xe9couverte des services")),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h4",{id:"comment-faire-le-test-en-ligne-de-commande-et-que-signifient-les-principales-options-"},"Comment faire le test en ligne de commande et que signifient les principales options ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande depuis votre Collecteur Centreon avec l'utilisateur ",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_hitachi_hcp_snmp.pl \\\n    --plugin=storage::hitachi::hcp::snmp::plugin \\\n    --mode=nodes \\\n    --hostname=10.30.2.114 \\\n    --snmp-version='2c' \\\n    --snmp-community='hcp_ro' \\\n    --filter-node-id='101' \\\n    --warning-space-usage-prct='80' \\\n    --critical-space-usage-prct='90' \\\n    --verbose\n")),(0,a.kt)("p",null,"Exemple de sortie :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"OK: node '101' [ip address: 10.214.4.16] node status: available, nic status: ok, san path status: rain, battery backup unit status: Healthy - space usage total: 13.58 TB used: 350.93 GB (2.52%) free: 13.24 TB (97.48%) | '101#node.space.usage.bytes'=376806080512B;;;0;14933122809856 '101#node.space.free.bytes'=14556316729344B;;;0;14933122809856 '101#node.space.usage.percentage'=2.52%;0:80;0:90;0;100 '101~Temp_Ambient_FP#node.sensor.temperature.celsius'=25.0C;;;; '101~Temp_CPU0#node.sensor.temperature.celsius'=35.0C;;;; '101~Temp_CPU1#node.sensor.temperature.celsius'=40.0C;;;; '101~Temp_DIMM_AB#node.sensor.temperature.celsius'=28.0C;;;; '101~Temp_DIMM_EF#node.sensor.temperature.celsius'=29.0C;;;; '101~Temp_Outlet#node.sensor.temperature.celsius'=29.0C;;;; '101~Temp_PCH#node.sensor.temperature.celsius'=37.0C;;;; '101~Temp_PCI_Area#node.sensor.temperature.celsius'=33.0C;;;; '101~Temp_PCI_Inlet1#node.sensor.temperature.celsius'=30.0C;;;; '101~Temp_PCI_Inlet2#node.sensor.temperature.celsius'=28.0C;;;; '101~Temp_VR_CPU0#node.sensor.temperature.celsius'=27.0C;;;; '101~Temp_VR_CPU1#node.sensor.temperature.celsius'=32.0C;;;; '101~Temp_VR_DIMM_AB#node.sensor.temperature.celsius'=25.0C;;;; '101~Temp_VR_DIMM_CD#node.sensor.temperature.celsius'=27.0C;;;; '101~Temp_VR_DIMM_EF#node.sensor.temperature.celsius'=29.0C;;;; '101~Temp_VR_DIMM_GH#node.sensor.temperature.celsius'=31.0C;;;; '101~Fan_SYS0#node.sensor.fan.speed.rpm'=5100rpm;;;0; '101~Fan_SYS1#node.sensor.fan.speed.rpm'=4300rpm;;;0; '101~Fan_SYS2#node.sensor.fan.speed.rpm'=5100rpm;;;0; '101~Fan_SYS3#node.sensor.fan.speed.rpm'=4200rpm;;;0; '101~Fan_SYS4#node.sensor.fan.speed.rpm'=6600rpm;;;0; '101~Fan_SYS5#node.sensor.fan.speed.rpm'=5400rpm;;;0; '101~Fan_SYS6#node.sensor.fan.speed.rpm'=6500rpm;;;0; '101~Fan_SYS7#node.sensor.fan.speed.rpm'=5300rpm;;;0; '101~Volt_P12V#node.sensor.voltage.volt'=12.18V;;;; '101~Volt_P1V05#node.sensor.voltage.volt'=1.058V;;;; '101~Volt_P1V8_AUX#node.sensor.voltage.volt'=1.833V;;;; '101~Volt_P3V3#node.sensor.voltage.volt'=3.339V;;;; '101~Volt_P3V3_AUX#node.sensor.voltage.volt'=3.339V;;;; '101~Volt_P3V_BAT#node.sensor.voltage.volt'=3.161V;;;; '101~Volt_P5V#node.sensor.voltage.volt'=5.009V;;;; '101~Volt_P5V_AUX#node.sensor.voltage.volt'=5.009V;;;; '101~Volt_VR_CPU0#node.sensor.voltage.volt'=1.81V;;;; '101~Volt_VR_CPU1#node.sensor.voltage.volt'=1.81V;;;; '101~Volt_VR_DIMM_AB#node.sensor.voltage.volt'=1.22V;;;; '101~Volt_VR_DIMM_CD#node.sensor.voltage.volt'=1.22V;;;; '101~Volt_VR_DIMM_EF#node.sensor.voltage.volt'=1.22V;;;; '101~Volt_VR_DIMM_GH#node.sensor.voltage.volt'=1.22V;;;;\nchecking node '101' [ip address: 10.214.4.16]\n    node status: available, nic status: ok, san path status: rain, battery backup unit status: Healthy\n    space usage total: 13.58 TB used: 350.93 GB (2.52%) free: 13.24 TB (97.48%)\n")),(0,a.kt)("p",null,"Cette commande contr\xf4le les noeuds (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=nodes"),") d'un \xe9quipement ayant pour adresse ",(0,a.kt)("em",{parentName:"p"},"10.30.2.114")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.114"),")\nen version ",(0,a.kt)("em",{parentName:"p"},"2c")," du protocol SNMP (",(0,a.kt)("inlineCode",{parentName:"p"},"--snmp-version='2c'"),") et avec la communaut\xe9 ",(0,a.kt)("em",{parentName:"p"},"hcp_ro")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--snmp-community='hcp_ro'"),")."),(0,a.kt)("p",null,"Cette commande d\xe9clenchera une alarme WARNING si l'utilisation de l'espace disque est sup\xe9rieur \xe0 80% (",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-space-usage-prct='80'"),")\net une alarme CRITICAL si sup\xe9rieur \xe0 90% (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-space-usage-prct='90'"),")."),(0,a.kt)("p",null,"Toutes les options qui peuvent \xeatre utilis\xe9es avec ce plugin se trouvent sur la commande ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_hitachi_hcp_snmp.pl \\\n    --plugin=storage::hitachi::hcp::snmp::plugin \\\n    --mode=nodes \\\n    --help\n")),(0,a.kt)("h3",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,a.kt)("p",null,"Si vous obtenez ce message, cela signifie que vous ne parvenez pas \xe0 contacter l'\xe9quipement Hitachi HCP sur le port 161,\nou alors que la communaut\xe9 SNMP configur\xe9e n'est pas correcte.\nIl est \xe9galement possible qu'un firewall bloque le flux."),(0,a.kt)("h3",{id:"unknown-snmp-get-request--cant-get-a-single-value"},"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,a.kt)("p",null,"Si vous rencontrez cette erreur, il est probable que les autorisations donn\xe9es \xe0 l'agent SNMP soient trop restreintes. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"L'\xe9quipement Hitachi HCP ne prend pas en charge la MIB utilis\xe9e par le Plugin (branche: .1.3.6.1.4.1.116.5.46)."),(0,a.kt)("li",{parentName:"ul"},"L'OID SNMP cibl\xe9 ne peut pas \xeatre r\xe9cup\xe9r\xe9 en raison de privil\xe8ges d'\xe9quipement insuffisants.")))}N.isMDXComponent=!0}}]);