"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[48519],{43124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>N,frontMatter:()=>p,metadata:()=>u,toc:()=>c});n(67294);var a=n(3905),r=n(51715),l=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"hardware-devices-polycom-hdx-snmp",title:"Polycom HDX SNMP"},m=void 0,u={unversionedId:"integrations/plugin-packs/procedures/hardware-devices-polycom-hdx-snmp",id:"integrations/plugin-packs/procedures/hardware-devices-polycom-hdx-snmp",title:"Polycom HDX SNMP",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-devices-polycom-hdx-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-devices-polycom-hdx-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/hardware-devices-polycom-hdx-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-devices-polycom-hdx-snmp.md",tags:[],version:"current",frontMatter:{id:"hardware-devices-polycom-hdx-snmp",title:"Polycom HDX SNMP"},sidebar:"pp",previous:{title:"Polycom DMA SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/hardware-devices-polycom-dma-snmp"},next:{title:"Polycom RMX",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/network-polycom-rmx-snmp"}},d={},c=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Configuration SNMP de l&#39;\xe9quipement",id:"configuration-snmp-de-l\xe9quipement",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:3},{value:"J&#39;obtiens le message d&#39;erreur suivant:",id:"jobtiens-le-message-derreur-suivant",level:3},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:4},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:4}],k={toc:c},g="wrapper";function N(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(g,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,a.kt)("p",null,"La solution Polycom HDX vous permet d'\xe9tablir des visioconf\xe9rences HD flexibles pour des communications de qualit\xe9 en\nenvironnement professionnel. Rapide et simple \xe0 impl\xe9menter, le syst\xe8me Polycom HDX r\xe9pond id\xe9alement aux besoins des\nprofessionnels de l'enseignement, de la sant\xe9, du commerce et de l'industrie et de la collaboration \xe0 la demande."),(0,a.kt)("p",null,"Le connecteur de supervision Centreon utilise le protocole SNMP pour se connecter et r\xe9cup\xe9rer informations et m\xe9triques relatives aux \xe9quipements\nPolycom HDX."),(0,a.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,a.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Syst\xe8mes de conf\xe9rences Polycom HDX")),(0,a.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Cpu-Detailed",label:"Cpu-Detailed",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cpu.user.utilization.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CPU User utilization"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cpu.nice.utilization.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CPU Nice utilization"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cpu.system.utilization.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CPU System utilization"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cpu.idle.utilization.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CPU Idle utilization"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cpu.wait.utilization.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CPU Wait utilization"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cpu.kernel.utilization.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CPU Kernel utilization"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cpu.interrupt.utilization.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CPU Interrupt utilization"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cpu.softirq.utilization.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CPU SoftIrq utilization"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cpu.steal.utilization.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CPU Steal utilization"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cpu.guest.utilization.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CPU Guest utilization"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cpu.guestnice.utilization.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CPU Guest Nice utilization"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,a.kt)(l.Z,{value:"Interfaces",label:"Interfaces",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the interface"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"interface.traffic.in.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Incoming traffic going through the interface."),(0,a.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"interface.traffic.in.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Incoming traffic going through the interface."),(0,a.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"interface.traffic.out.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Outgoing traffic going through the interface."),(0,a.kt)("td",{parentName:"tr",align:"left"},"b/s")))),(0,a.kt)("p",null,"Vous pouvez restreindre ce contr\xf4le sur une interface donn\xe9e en sp\xe9cifiant le nom de l'interface \xe0 superviser\n(par exemple ",(0,a.kt)("inlineCode",{parentName:"p"},"--interface='^eth0$'"),") conjointement avec le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--name"),".")),(0,a.kt)(l.Z,{value:"Load",label:"Load",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"load1"),(0,a.kt)("td",{parentName:"tr",align:"left"},"System load 1 minute-sample")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"load5"),(0,a.kt)("td",{parentName:"tr",align:"left"},"System load 5 minutes-sample")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"load15"),(0,a.kt)("td",{parentName:"tr",align:"left"},"System load 15 minutes-sample"))))),(0,a.kt)(l.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memory.usage.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Memory usage on the device."),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memory.free.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Free memory on the device."),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memory.usage.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Percentage of Memory usage on the device."),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memory.buffer.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Buffered Memory allocation."),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memory.cached.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Cached Memory allocation."),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memory.shared.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Shared Memory allocation."),(0,a.kt)("td",{parentName:"tr",align:"left"},"B"))))),(0,a.kt)(l.Z,{value:"Uptime",label:"Uptime",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"system.uptime.seconds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"System uptime"),(0,a.kt)("td",{parentName:"tr",align:"left"},"s"))))),(0,a.kt)(l.Z,{value:"ViewStation-Statistics",label:"ViewStation-Statistics",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"viewstation.h323.packet.loss.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The current combined (audio/video) average percentage packet loss when in an H.323 call"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"viewstation.h323.jitter.milliseconds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The current combined (audio/video) cumulative average jitter (in ms) when in an H.323 call."),(0,a.kt)("td",{parentName:"tr",align:"left"},"ms")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"viewstation.h323.latency.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The current average latency based on round trip delay when in an H.323 call."),(0,a.kt)("td",{parentName:"tr",align:"left"})))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("h3",{id:"configuration-snmp-de-l\xe9quipement"},"Configuration SNMP de l'\xe9quipement"),(0,a.kt)("p",null,"Sur l'\xe9quipement Polycom HDX, configurez et activez l'agent SNMP en suivant ces \xe9tapes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Connectez-vous \xe0 l'interface Web d'administration de l'\xe9quipement"),(0,a.kt)("li",{parentName:"ul"},"Dans le menu, s\xe9lectionnez ",(0,a.kt)("em",{parentName:"li"},"System > Manage > Credentials")),(0,a.kt)("li",{parentName:"ul"},"Configurez les param\xe8tres SNMP en sp\xe9cifiant la version et la communaut\xe9 \xe0 utiliser")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur chaque collecteur Centreon devant superviser des \xe9quipements Polycom HDX:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Devices-Polycom-Hdx-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Polycom HDX SNMP"),"\ndepuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")," "))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur chaque collecteur Centreon devant superviser des \xe9quipements Polycom HDX:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Devices-Polycom-Hdx-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Installer le RPM du connecteur de supervision sur le serveur Centreon Central:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-devices-polycom-hdx-snmp\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Polycom HDX SNMP"),"\ndepuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Ajoutez un nouvel H\xf4te depuis la page "Configuration > H\xf4tes"'),(0,a.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,a.kt)("em",{parentName:"li"},"Communaut\xe9 SNMP")," et ",(0,a.kt)("em",{parentName:"li"},"Version SNMP")),(0,a.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,a.kt)("em",{parentName:"li"},"HW-Device-Polycom-Hdx-SNMP-Custom"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Si vous utilisez SNMP en version 3, vous devez configurer les param\xe8tres sp\xe9cifiques associ\xe9s via la macro SNMPEXTRAOPTIONS.\nPlus d'informations dans la section ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP"),". ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Extra options SNMP")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande\ndepuis un collecteur Centreon en vous connectant avec l'utilisateur ",(0,a.kt)("em",{parentName:"p"},"centreon-engine"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_polycom_hdx_snmp.pl \\\n    --plugin=hardware::devices::polycom::hdx::snmp::plugin  \\\n    --mode=viewstation-stats \\\n    --hostname=10.0.0.1 \\\n    --snmp-version='2c' \\\n    --snmp-community='mysnmpcommunity' \\\n    --warning-h323-packet-loss='5' \\\n    --critical-h323-packet-loss='10'\n")),(0,a.kt)("p",null,"La commande devrait retourner un message de sortie de la forme ci-dessous:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: View Station Phone Number: '0123456789' Stats: H323 Packet Loss 1.00 %, H323 (audio/video) Jitter 30.00 ms, H323 (audio/video) Latency 4.00 |\n'h323-packet-loss'=1.00%;;;0;100 'h323-jitter'=30.00ms;;;0;100 'vs_latency'=4.00;;;0;100\n")),(0,a.kt)("p",null,"Dans cet exemple, le Plugin r\xe9cup\xe8re les statistiques de sessions d'un \xe9quipement Polycom HDX (",(0,a.kt)("inlineCode",{parentName:"p"},"--plugin=hardware::devices::polycom::hdx::snmp::plugin --mode=viewstation-stats"),")\nidentifi\xe9 par l'adresse IP ",(0,a.kt)("em",{parentName:"p"},"10.0.0.1")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname=10.0.0.1"),"). Les param\xe8tres de communaut\xe9 et de version SNMP (",(0,a.kt)("inlineCode",{parentName:"p"},"--snmp-version='2c' --snmp-community='mysnmpcommunity'"),")\ncorrespondants sont renseign\xe9s afin de pouvoir joindre l'\xe9quipement."),(0,a.kt)("p",null,"Une alarme WARNING sera ainsi d\xe9clench\xe9e si le taux moyen de ",(0,a.kt)("em",{parentName:"p"},"packet-loss")," des sessions H323 est sup\xe9rieur \xe0 5% (",(0,a.kt)("inlineCode",{parentName:"p"},"---warning-h323-packet-loss='5'"),");\nl'alarme sera de type CRITICAL au del\xe0 de 10% de ce m\xeame taux observ\xe9 (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-h323-packet-loss='10'"),")."),(0,a.kt)("p",null,"Pour chaque mode, la liste de toutes les m\xe9triques, seuils associ\xe9s et options compl\xe9mentaires peut \xeatre affich\xe9e\nen ajoutant le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_polycom_hdx_snmp.pl --plugin=hardware::devices::polycom::hdx::snmp::plugin --mode=viewstation-stats --help\n")),(0,a.kt)("h3",{id:"jobtiens-le-message-derreur-suivant"},"J'obtiens le message d'erreur suivant:"),(0,a.kt)("h4",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,a.kt)("p",null,"Si vous obtenez ce message, cela signifie que vous ne parvenez pas \xe0 contacter l'\xe9quipement Polycom HDX sur le port UDP/161,\nou que la communaut\xe9 SNMP configur\xe9e n'est pas correcte. Il est \xe9galement possible qu'un pare-feu bloque le flux."),(0,a.kt)("h4",{id:"unknown-snmp-get-request--cant-get-a-single-value"},"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,a.kt)("p",null,"Les causes de cette erreur peuvent \xeatre les suivantes: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"cet \xe9quipement ne supporte ou n'embarque pas la MIB utilis\xe9e par ce mode"),(0,a.kt)("li",{parentName:"ul"},"les autorisations donn\xe9es \xe0 l'utilisateur en SNMP sont trop restreintes.")))}N.isMDXComponent=!0}}]);