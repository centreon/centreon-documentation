"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[2246],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,m=d["".concat(p,".").concat(u)]||d[u]||f[u]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32787:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"enable-snmp-traps",title:"Enable SNMP Traps"},p=void 0,c={unversionedId:"monitoring/passive-monitoring/enable-snmp-traps",id:"version-23.10/monitoring/passive-monitoring/enable-snmp-traps",title:"Enable SNMP Traps",description:"Description",source:"@site/versioned_docs/version-23.10/monitoring/passive-monitoring/enable-snmp-traps.md",sourceDirName:"monitoring/passive-monitoring",slug:"/monitoring/passive-monitoring/enable-snmp-traps",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/monitoring/passive-monitoring/enable-snmp-traps",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/monitoring/passive-monitoring/enable-snmp-traps.md",tags:[],version:"23.10",lastUpdatedAt:1699281350,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{id:"enable-snmp-traps",title:"Enable SNMP Traps"},sidebar:"version-23.10/docs",previous:{title:"Anomaly detection",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/monitoring/anomaly-detection"},next:{title:"Create SNMP Traps definitions",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/monitoring/passive-monitoring/create-snmp-traps-definitions"}},l={},d=[{value:"Description",id:"description",level:2},{value:"Architecture",id:"architecture",level:2},{value:"SNMP trap processing by the central server",id:"snmp-trap-processing-by-the-central-server",level:3},{value:"SNMP trap processing by a poller server",id:"snmp-trap-processing-by-a-poller-server",level:3},{value:"Successive actions by the centreontrapd process",id:"successive-actions-by-the-centreontrapd-process",level:3},{value:"Configuring services",id:"configuring-services",level:2},{value:"Snmptrapd",id:"snmptrapd",level:3},{value:"centreontrapdforward",id:"centreontrapdforward",level:3},{value:"centreontrapd",id:"centreontrapd",level:3},{value:"Configuration of the service",id:"configuration-of-the-service",level:4},{value:"Configuring the database connection",id:"configuring-the-database-connection",level:4}],f={toc:d},u="wrapper";function m(e){var{components:t}=e,s=i(e,["components"]);return(0,r.kt)(u,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},f,s),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"SNMP traps are information sent using the SNMP protocol from monitored resources to a poller server. This information\ncontains multiple attributes, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Address of the resource sending the information."),(0,r.kt)("li",{parentName:"ul"},"The root OID (Object Identifier) corresponding to the identifier of the message received."),(0,r.kt)("li",{parentName:"ul"},"The message sent via the SNMP trap which corresponds to a set of settings (1 to N).")),(0,r.kt)("p",null,"In order to be able to interpret the event received, the Network supervisor server needs to possess in its configuration\nthe necessary elements to translate the event. For this, it must have a database containing the OID and the\ndescriptions, known as MIB files. There are two types of MIB:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Standard MIBs that use standardized OIDs and are implemented by numerous manufacturers on their equipment."),(0,r.kt)("li",{parentName:"ul"},"MIB manufacturers who are specific to each one and often to each equipment model.")),(0,r.kt)("p",null,"MIB manufacturers can be retrieved from the equipment. Centreon allows us to store the definition of SNMP traps in its\nMariaDB database. The traps can subsequently be linked to passive services via the ",(0,r.kt)("strong",{parentName:"p"},"Relations")," tab of the definition\nof a service."),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("h3",{id:"snmp-trap-processing-by-the-central-server"},"SNMP trap processing by the central server"),(0,r.kt)("p",null,"The processing of an SNMP trap is as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"snmptrapd is the service enabling the retrieval of SNMP traps sent by the equipment (by default it listens on port\n",(0,r.kt)("strong",{parentName:"li"},"UDP 162"),")."),(0,r.kt)("li",{parentName:"ol"},"Once the SNMP trap has been received, it is sent to the \u2018centreontrapdforward\u2019 script, which writes the information\nreceived in a buffer folder (by default ",(0,r.kt)("strong",{parentName:"li"},"/var/spool/centreontrapd/"),")."),(0,r.kt)("li",{parentName:"ol"},"The \u2018centreontrapd\u2019 service reads the information received in the buffer folder and interprets the traps received,\nchecking, in the centreon database, the actions necessary to process these events."),(0,r.kt)("li",{parentName:"ol"},"The \u2018centreontrapd\u2019 service transmits the information to the scheduler or the \u2018gorgoned\u2019 service (to send the\ninformation to a remote scheduler), which changes the status and the information associated with the service to which the\nSNMP trap is linked.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(50234).Z,width:"748",height:"444"})),(0,r.kt)("h3",{id:"snmp-trap-processing-by-a-poller-server"},"SNMP trap processing by a poller server"),(0,r.kt)("p",null,"To keep a copy of the configuration of the SNMP traps on each satellite server, an SQLite database is charged with\nkeeping the information of the traps contained in the MariaDB database cached. This SQLite database is automatically\ngenerated by the central server."),(0,r.kt)("p",null,"The processing of an SNMP trap is as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"snmptrapd is the service used to retrieve the SNMP traps sent by the equipment (by default it listens on port\n",(0,r.kt)("strong",{parentName:"li"},"UDP 162"),")."),(0,r.kt)("li",{parentName:"ol"},"Once the SNMP trap has been received, it is sent to the \u2018centreontrapdforward\u2019 script, which writes the information\nreceived in a buffer folder (by default ",(0,r.kt)("strong",{parentName:"li"},"/var/spool/centreontrapd/"),")."),(0,r.kt)("li",{parentName:"ol"},"The \u2018centreontrapd\u2019 service reads the information received in the buffer folder and interprets the various traps\nreceived, checking in the SQLite database for the actions to be taken to process the traps received."),(0,r.kt)("li",{parentName:"ol"},"The \u2018centreontrapd\u2019 service transmits the information to the scheduler, which changes the status and the information\nassociated with the service to which the SNMP trap is linked.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(31401).Z,width:"661",height:"394"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The Centreon Gorgone process is responsible for copying the SQLite base on the remote poller.")),(0,r.kt)("h3",{id:"successive-actions-by-the-centreontrapd-process"},"Successive actions by the centreontrapd process"),(0,r.kt)("p",null,"Successive actions by the centreontrapd process are:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(15690).Z,width:"935",height:"376"})),(0,r.kt)("h2",{id:"configuring-services"},"Configuring services"),(0,r.kt)("h3",{id:"snmptrapd"},"Snmptrapd"),(0,r.kt)("p",null,"To call the \u2018centreontrapdfoward\u2019 script, the file ",(0,r.kt)("strong",{parentName:"p"},"/etc/snmp/snmptrapd.conf")," must contain the following lines:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'disableAuthorization yes\ntraphandle default su -l centreon -c "/usr/share/centreon/bin/centreontrapdforward"\n')),(0,r.kt)("p",null,"You can optimize the performance of snmptrapd by using the following options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"-On")," don\u2019t try to convert the OIDs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"-t")," don\u2019t log the traps to the syslog server"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"-n")," don\u2019t try to convert the IP addresses into host names")),(0,r.kt)("p",null,"These options can be changed in the file ",(0,r.kt)("strong",{parentName:"p"},"/etc/sysconfig/snmptrapd"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'OPTIONS="-On -d -t -n -p /var/run/snmptrapd.pid"\n')),(0,r.kt)("h3",{id:"centreontrapdforward"},"centreontrapdforward"),(0,r.kt)("p",null,"To change the buffer folder to which the information will be written, change the configuration file\n",(0,r.kt)("strong",{parentName:"p"},"/etc/centreon/centreontrapd.pm"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-perl"},"our %centreontrapd_config = (\n    spool_directory => '/var/spool/centreontrapd/',\n);\n\n1;\n")),(0,r.kt)("p",null,"You can also map the folder in the RAM, by adding the following line in the file ",(0,r.kt)("strong",{parentName:"p"},"/etc/fstab"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"tmpfs /var/spool/centreontrapd      tmpfs defaults,size=512m 0 0\n")),(0,r.kt)("h3",{id:"centreontrapd"},"centreontrapd"),(0,r.kt)("p",null,"Two configuration files exist in centreontrapd:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"/etc/centreon/conf.pm")," contains the connection information to the MariaDB database"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"/etc/centreon/centreontrapd.pm")," contains the configuration of the centreontrapd service")),(0,r.kt)("h4",{id:"configuration-of-the-service"},"Configuration of the service"),(0,r.kt)("p",null,"In the file ",(0,r.kt)("strong",{parentName:"p"},"/etc/centreon/centreontrapd.pm")," we advise changing three settings only (if necessary):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the ",(0,r.kt)("strong",{parentName:"li"},"mode")," option is defined in 1 centreontrapd functions on a satellite server, otherwise it functions on a\ncentral server (centreon)."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"centreon_user")," option can be used to change the user executing the actions."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"spool_directory")," option can be used to change the buffer folder to be read (if you have changed it in the\n\u2018centreontrapdforward\u2019 configuration file).")),(0,r.kt)("p",null,"Here is an example of possible configuration of the file ",(0,r.kt)("strong",{parentName:"p"},"/etc/centreon/centreontrapd.pm")," (the configuration file can\nbe changed with \u2018-config-extra = xxx\u2019):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-perl"},'our %centreontrapd_config = (\n    # Time in seconds before killing not gently sub process\n    timeout_end => 30,\n    spool_directory => "/var/spool/centreontrapd/",\n    # Delay between spool directory check new files\n    sleep => 2,\n    # 1 = use the time that the trap was processed by centreontrapdforward\n    use_trap_time => 1,\n    net_snmp_perl_enable => 1,\n    mibs_environment => \'\',\n    remove_backslash_from_quotes => 1,\n    dns_enable => 0,\n    # Separator for arguments substitution\n    separator => \' \',\n    strip_domain => 0,\n    strip_domain_list => [],\n    duplicate_trap_window => 1,\n    date_format => "",\n    time_format => "",\n    date_time_format => "",\n    # Time in seconds before cache reload\n    cache_unknown_traps_retention => 600,\n    # 0 = central, 1 = poller\n    mode => 0,\n    cmd_timeout => 10,\n    centreon_user => "centreon",\n    # 0 => skip if MariaDB error | 1 => don\'t skip (block) if MariaDB error (and keep order)\n    policy_trap => 1,\n    # Log DB\n    log_trap_db => 0,\n    log_transaction_request_max => 500,\n    log_transaction_timeout => 10,\n    log_purge_time => 600\n);\n\n1;\n')),(0,r.kt)("h4",{id:"configuring-the-database-connection"},"Configuring the database connection"),(0,r.kt)("p",null,"On Centreon Central server, edit the ",(0,r.kt)("strong",{parentName:"p"},"/etc/centreon/conf.pm")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-perl"},'$centreon_config = {\n    VarLib => "/var/lib/centreon",\n    CentreonDir => "/usr/share/centreon/",\n    "centreon_db" => "centreon",\n    "centstorage_db" => "centreon_storage",\n    "db_host" => "localhost:3306",\n    "db_user" => "centreon",\n    "db_passwd" => "centreon"\n};\n\n1;\n')),(0,r.kt)("p",null,"On a poller, edit the ",(0,r.kt)("strong",{parentName:"p"},"/etc/centreon/centreontrapd.pm")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-perl"},'our %centreontrapd_config = (\n    ...\n    "centreon_db" => "dbname=/etc/snmp/centreon_traps/centreontrapd.sdb",\n    "centstorage_db" => "dbname=/etc/snmp/centreon_traps/centreontrapd.sdb",\n    "db_host" => "",\n    "db_user" => "",\n    "db_passwd" => "",\n    "db_type" => \'SQLite\',\n    ...\n);\n\n1;\n')))}m.isMDXComponent=!0},50234:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/06_trap_centreon-a96b6bb236955a2978ca8baf8492787b.png"},31401:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/06_trap_poller-2333cc91e56607147bd7a72e843fcf49.png"},15690:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);