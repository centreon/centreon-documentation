"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[57468],{45177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>h,frontMatter:()=>p,metadata:()=>d,toc:()=>c});n(67294);var a=n(3905),r=n(51715),o=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"hardware-storage-hitachi-hcp-snmp",title:"Hitachi HCP SNMP"},m=void 0,d={unversionedId:"integrations/plugin-packs/procedures/hardware-storage-hitachi-hcp-snmp",id:"integrations/plugin-packs/procedures/hardware-storage-hitachi-hcp-snmp",title:"Hitachi HCP SNMP",description:"Monitoring Connector Assets",source:"@site/pp/integrations/plugin-packs/procedures/hardware-storage-hitachi-hcp-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-storage-hitachi-hcp-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/hardware-storage-hitachi-hcp-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/hardware-storage-hitachi-hcp-snmp.md",tags:[],version:"current",frontMatter:{id:"hardware-storage-hitachi-hcp-snmp",title:"Hitachi HCP SNMP"},sidebar:"pp",previous:{title:"Fujitsu Eternus DX",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/hardware-storage-fujitsu-eternus-dx-ssh"},next:{title:"Hitachi NAS SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/hardware-storage-hitachi-hnas-snmp"}},u={},c=[{value:"Monitoring Connector Assets",id:"monitoring-connector-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to test the Plugin and what are the main options for ?",id:"how-to-test-the-plugin-and-what-are-the-main-options-for-",level:3},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:3}],g={toc:c},k="wrapper";function h(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(k,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){l(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector Assets"),(0,a.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,a.kt)("p",null,"The Monitoring Connector Hitachi HCP SNMP including monitoring of Nodes, Tenants and Volumes."),(0,a.kt)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Nodes",label:"Nodes",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"node status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the node"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nic status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the nic"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"san path status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the san path"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"bbu status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the battery backup unit"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"nodeid"),"#node.space.usage.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Usage of the node"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"nodeid"),"#node.space.free.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Free space left on the node"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"nodeid"),"#node.space.usage.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Usage of the node in percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"nodeid"),"#node.sensor.temperature.celsius"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Sensor temperature"),(0,a.kt)("td",{parentName:"tr",align:"left"},"C")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"nodeid"),"#node.sensor.fan.speed.rpm"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Sensor fan speed"),(0,a.kt)("td",{parentName:"tr",align:"left"},"rpm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"nodeid"),"#node.sensor.voltage.volt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Sensor voltage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"V")))),(0,a.kt)("p",null,"It is possible to filter on the ID of a node using a REGEXP of the form ","[",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-node-id='101'"),"]",".")),(0,a.kt)(o.Z,{value:"Tenants",label:"Tenants",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"tenantname"),"#tenant.space.usage.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Usage of the tenant"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"tenantname"),"#tenant.space.free.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Free space left on the tenant"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"tenantname"),"#tenant.space.usage.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Usage of the tenant in percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")))),(0,a.kt)("p",null,"It is possible to filter on the name of a tenant using a REGEXP of the form ","[",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-tenant-name='backup'"),"]",".")),(0,a.kt)(o.Z,{value:"Volumes",label:"Volumes",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"volume status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the volume"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"nodeid"),":",(0,a.kt)("em",{parentName:"td"},"label"),"#volume.space.usage.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Usage of the volume"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"nodeid"),":",(0,a.kt)("em",{parentName:"td"},"label"),"#volume.space.free.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Free space left on the volume"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"nodeid"),":",(0,a.kt)("em",{parentName:"td"},"label"),"#volume.space.usage.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Usage of the volume in percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To control your Hitachi HCP, the SNMP must be configured.\n(",(0,a.kt)("a",{parentName:"p",href:"https://knowledge.hitachivantara.com/Documents/Storage/Content_Platform/9.0.x/Administering_HCP/System_monitoring/03_Configuring_SNMP"},"https://knowledge.hitachivantara.com/Documents/Storage/Content_Platform/9.0.x/Administering_HCP/System_monitoring/03_Configuring_SNMP"),")"),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Storage-Hitachi-Hcp-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,a.kt)("em",{parentName:"li"},"Hitachi HCP SNMP")," Monitoring Connector"))),(0,a.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Storage-Hitachi-Hcp-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Centreon Monitoring Connector from the RPM:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-storage-hitachi-hcp-snmp\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,a.kt)("em",{parentName:"li"},"Hitachi HCP SNMP")," Monitoring Connector")))),(0,a.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add a new Host and apply the ",(0,a.kt)("em",{parentName:"li"},"HW-Storage-Hitachi-Hcp-SNMP-custom")," Host Template"),(0,a.kt)("li",{parentName:"ul"},"Fill the SNMP Version and Community fields according to the device's configuration")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters\nMore information in the ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP")," section.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configure your own SNMPv3 credentials combo")))),(0,a.kt)("p",null,"By default, Host Template ",(0,a.kt)("em",{parentName:"p"},"HW-Storage-Hitachi-Hcp-SNMP")," doesn't have Service Template attached. You could:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"attached Service Template to Host Template ",(0,a.kt)("em",{parentName:"li"},"HW-Storage-Hitachi-Hcp-SNMP-custom")),(0,a.kt)("li",{parentName:"ul"},"using service discovery")),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"how-to-test-the-plugin-and-what-are-the-main-options-for-"},"How to test the Plugin and what are the main options for ?"),(0,a.kt)("p",null,"Once the Plugin installed, log into your Centreon Poller CLI using the ",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," user account\nand test the Plugin by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_hitachi_hcp_snmp.pl \\\n    --plugin=storage::hitachi::hcp::snmp::plugin \\\n    --mode=nodes \\\n    --hostname=10.30.2.114 \\\n    --snmp-version='2c' \\\n    --snmp-community='hcp_ro' \\\n    --filter-node-id='101' \\\n    --warning-space-usage-prct='80' \\\n    --critical-space-usage-prct='90' \\\n    --verbose\n")),(0,a.kt)("p",null,"Expected command output is shown below: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: node '101' [ip address: 10.214.4.16] node status: available, nic status: ok, san path status: rain, battery backup unit status: Healthy - space usage total: 13.58 TB used: 350.93 GB (2.52%) free: 13.24 TB (97.48%) | '101#node.space.usage.bytes'=376806080512B;;;0;14933122809856 '101#node.space.free.bytes'=14556316729344B;;;0;14933122809856 '101#node.space.usage.percentage'=2.52%;0:80;0:90;0;100 '101~Temp_Ambient_FP#node.sensor.temperature.celsius'=25.0C;;;; '101~Temp_CPU0#node.sensor.temperature.celsius'=35.0C;;;; '101~Temp_CPU1#node.sensor.temperature.celsius'=40.0C;;;; '101~Temp_DIMM_AB#node.sensor.temperature.celsius'=28.0C;;;; '101~Temp_DIMM_EF#node.sensor.temperature.celsius'=29.0C;;;; '101~Temp_Outlet#node.sensor.temperature.celsius'=29.0C;;;; '101~Temp_PCH#node.sensor.temperature.celsius'=37.0C;;;; '101~Temp_PCI_Area#node.sensor.temperature.celsius'=33.0C;;;; '101~Temp_PCI_Inlet1#node.sensor.temperature.celsius'=30.0C;;;; '101~Temp_PCI_Inlet2#node.sensor.temperature.celsius'=28.0C;;;; '101~Temp_VR_CPU0#node.sensor.temperature.celsius'=27.0C;;;; '101~Temp_VR_CPU1#node.sensor.temperature.celsius'=32.0C;;;; '101~Temp_VR_DIMM_AB#node.sensor.temperature.celsius'=25.0C;;;; '101~Temp_VR_DIMM_CD#node.sensor.temperature.celsius'=27.0C;;;; '101~Temp_VR_DIMM_EF#node.sensor.temperature.celsius'=29.0C;;;; '101~Temp_VR_DIMM_GH#node.sensor.temperature.celsius'=31.0C;;;; '101~Fan_SYS0#node.sensor.fan.speed.rpm'=5100rpm;;;0; '101~Fan_SYS1#node.sensor.fan.speed.rpm'=4300rpm;;;0; '101~Fan_SYS2#node.sensor.fan.speed.rpm'=5100rpm;;;0; '101~Fan_SYS3#node.sensor.fan.speed.rpm'=4200rpm;;;0; '101~Fan_SYS4#node.sensor.fan.speed.rpm'=6600rpm;;;0; '101~Fan_SYS5#node.sensor.fan.speed.rpm'=5400rpm;;;0; '101~Fan_SYS6#node.sensor.fan.speed.rpm'=6500rpm;;;0; '101~Fan_SYS7#node.sensor.fan.speed.rpm'=5300rpm;;;0; '101~Volt_P12V#node.sensor.voltage.volt'=12.18V;;;; '101~Volt_P1V05#node.sensor.voltage.volt'=1.058V;;;; '101~Volt_P1V8_AUX#node.sensor.voltage.volt'=1.833V;;;; '101~Volt_P3V3#node.sensor.voltage.volt'=3.339V;;;; '101~Volt_P3V3_AUX#node.sensor.voltage.volt'=3.339V;;;; '101~Volt_P3V_BAT#node.sensor.voltage.volt'=3.161V;;;; '101~Volt_P5V#node.sensor.voltage.volt'=5.009V;;;; '101~Volt_P5V_AUX#node.sensor.voltage.volt'=5.009V;;;; '101~Volt_VR_CPU0#node.sensor.voltage.volt'=1.81V;;;; '101~Volt_VR_CPU1#node.sensor.voltage.volt'=1.81V;;;; '101~Volt_VR_DIMM_AB#node.sensor.voltage.volt'=1.22V;;;; '101~Volt_VR_DIMM_CD#node.sensor.voltage.volt'=1.22V;;;; '101~Volt_VR_DIMM_EF#node.sensor.voltage.volt'=1.22V;;;; '101~Volt_VR_DIMM_GH#node.sensor.voltage.volt'=1.22V;;;;\nchecking node '101' [ip address: 10.214.4.16]\n    node status: available, nic status: ok, san path status: rain, battery backup unit status: Healthy\n    space usage total: 13.58 TB used: 350.93 GB (2.52%) free: 13.24 TB (97.48%)\n")),(0,a.kt)("p",null,"The command above monitors Hitachi HCP (",(0,a.kt)("inlineCode",{parentName:"p"},"--plugin=storage::hitachi::hcp::snmp::plugin --mode=nodes"),") identified\nby the IP address ",(0,a.kt)("em",{parentName:"p"},"10.30.2.114")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.114"),"). As the Plugin is using the SNMP protocol to request the device, the related\n",(0,a.kt)("em",{parentName:"p"},"community")," and ",(0,a.kt)("em",{parentName:"p"},"version")," are specified (",(0,a.kt)("inlineCode",{parentName:"p"},"--snmp-version='2c' --snmp-community='hcp_ro'"),")."),(0,a.kt)("p",null,"This command would trigger a WARNING alarm if space usage over 80%\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-space-usage-prct='80'"),") and a CRITICAL alarm over 90% (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-space-usage-prct='90'"),")."),(0,a.kt)("p",null,"For each Plugin mode, all the options as well as all the available thresholds can be displayed by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help"),"\nparameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_hitachi_hcp_snmp.pl \\\n    --plugin=storage::hitachi::hcp::snmp::plugin \\\n    --mode=nodes \\\n    --help\n")),(0,a.kt)("h3",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,a.kt)("p",null,"If you get this message, you're probably facing one of these issues: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The SNMP agent of the device isn't started or is misconfigured "),(0,a.kt)("li",{parentName:"ul"},"An external device is blocking the request (firewall, ...)")),(0,a.kt)("h3",{id:"unknown-snmp-get-request--cant-get-a-single-value"},"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,a.kt)("p",null,"This error message often refers to the following issues: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Hitachi HCP device doesn't support the MIB used by the plugin"),(0,a.kt)("li",{parentName:"ul"},"The targeted SNMP OID cannot be fetched because of insufficient privileges on the device.\nSNMP Agent must be capable of accessing to the enterprise branch Hitachi HCP: .1.3.6.1.4.1.116.5.46")))}h.isMDXComponent=!0}}]);