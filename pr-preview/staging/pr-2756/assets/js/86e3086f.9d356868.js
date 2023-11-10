"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[90284],{23850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>m,toc:()=>d});n(67294);var r=n(3905),o=n(51715),a=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={id:"add-a-remote-server-to-configuration",title:"Attach a remote server to a central server"},c=void 0,m={unversionedId:"monitoring/monitoring-servers/add-a-remote-server-to-configuration",id:"version-23.10/monitoring/monitoring-servers/add-a-remote-server-to-configuration",title:"Attach a remote server to a central server",description:"Prerequisites",source:"@site/versioned_docs/version-23.10/monitoring/monitoring-servers/add-a-remote-server-to-configuration.md",sourceDirName:"monitoring/monitoring-servers",slug:"/monitoring/monitoring-servers/add-a-remote-server-to-configuration",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/monitoring/monitoring-servers/add-a-remote-server-to-configuration",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/monitoring/monitoring-servers/add-a-remote-server-to-configuration.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"Nov 10, 2023",frontMatter:{id:"add-a-remote-server-to-configuration",title:"Attach a remote server to a central server"},sidebar:"version-23.10/docs",previous:{title:"Attach a poller to a central or a remote server",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/monitoring/monitoring-servers/add-a-poller-to-configuration"},next:{title:"Communications",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/monitoring/monitoring-servers/communications"}},g={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Configure a new Remote Server",id:"step-1-configure-a-new-remote-server",level:2},{value:"Step 2: Enable communication",id:"step-2-enable-communication",level:2},{value:"Step 3: Export the configuration",id:"step-3-export-the-configuration",level:2},{value:"Getting started",id:"getting-started",level:2}],k={toc:d},u="wrapper";function h(e){var{components:t}=e,l=p(e,["components"]);return(0,r.kt)(u,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},k,l),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Install the remote server ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/docs/installation/installation-of-a-remote-server/using-packages"},"using packages"),"."),(0,r.kt)("h2",{id:"step-1-configure-a-new-remote-server"},"Step 1: Configure a new Remote Server"),(0,r.kt)("p",null,"As of Centreon version 18.10, a new wizard has been added for defining a new\nRemote Server on the Centreon platform."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Pollers > Pollers")," menu and click ",(0,r.kt)("strong",{parentName:"p"},"Add")," to configure a new Remote Server.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Add a Centreon Remote Server")," and click ",(0,r.kt)("strong",{parentName:"p"},"Next"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(35150).Z,width:"660",height:"286"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the option you want:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you enabled the ",(0,r.kt)("strong",{parentName:"p"},"Remote Server")," option when installing your server, select\nthe option ",(0,r.kt)("strong",{parentName:"p"},"Select a Remote Server"),", then select your server and fill in the\nform:"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{alt:"image",src:n(71305).Z,width:"660",height:"732"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Otherwise, select the ",(0,r.kt)("strong",{parentName:"p"},"Create new Remote Server")," option and fill in the form:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(10670).Z,width:"660",height:"727"})),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Database username")," and ",(0,r.kt)("strong",{parentName:"p"},"Database password")," are the credentials defined\nduring the installation of the Remote Server."),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Server IP address")," field has the following form:\n","[(http|https)://]","@IP","[:(port)]",". If your Remote Server is only available on\nHTTPS, it is mandatory to define the HTTP method and the TCP port if it is\nnot the default one."),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Do not check SSL certificate validation")," option allows you to connect to the\nRemote Server using a self-signed SSL certificate."),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Do not use configured proxy to connect to this server")," allows you to connect\nto the Remote Server without using the proxy configuration of the Centreon\nCentral server.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Next"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the poller(s) to be linked to this Remote Server, then click\n",(0,r.kt)("strong",{parentName:"p"},"Apply"),":"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{alt:"image",src:n(83564).Z,width:"660",height:"246"})),(0,r.kt)("p",{parentName:"li"},"  The wizard will configure your new server:"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{alt:"image",src:n(8889).Z,width:"562",height:"278"})),(0,r.kt)("p",{parentName:"li"},"  The Remote Server is now configured:"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{alt:"image",src:n(92765).Z,width:"1328",height:"299"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you have customized the names of the databases at step 6 of the ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/docs/installation/web-and-post-installation"},"web installation wizard"),", carry out the following steps:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Pollers > Broker configuration"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the broker service for the remote server you want.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the ",(0,r.kt)("strong",{parentName:"p"},"Output")," tab, in section ",(0,r.kt)("strong",{parentName:"p"},"Output 1 - Unified SQL"),", update the name of the database in the ",(0,r.kt)("strong",{parentName:"p"},"DB name")," field (the default name is ",(0,r.kt)("strong",{parentName:"p"},"centreon_storage"),"), then click ",(0,r.kt)("strong",{parentName:"p"},"Save"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/docs/monitoring/monitoring-servers/deploying-a-configuration"},"Export the configuration")," of the remote server.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Restart cbd:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart cbd\n")))),(0,r.kt)("p",{parentName:"li"},"If needed, check ",(0,r.kt)("strong",{parentName:"p"},"/var/log/centreon-broker/<remote-server-name",">",".log")," for issues/errors. (In the example above, the file would be ",(0,r.kt)("strong",{parentName:"p"},"/var/log/centreon-broker/remote-server.log"),".)"))),(0,r.kt)("h2",{id:"step-2-enable-communication"},"Step 2: Enable communication"),(0,r.kt)("p",null,"The communication between the Central server and a Remote Server is ensured by Gorgone\nand can be done using ZMQ (with a Gorgone running on the Remote Server,\nrecommended) or using SSH protocol."),(0,r.kt)(o.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"Using ZMQ",label:"Using ZMQ",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the communication type:"),(0,r.kt)("p",{parentName:"li"},"Edit the newly created Remote Server configuration, and select ",(0,r.kt)("strong",{parentName:"p"},"ZMQ")," as\n",(0,r.kt)("strong",{parentName:"p"},"Gorgone connection protocol"),". Define the suitable ",(0,r.kt)("strong",{parentName:"p"},"port")," (port ",(0,r.kt)("strong",{parentName:"p"},"5556"),"\nis recommended)."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(38584).Z,width:"1344",height:"545"})),(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save"),"."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Note that the ",(0,r.kt)("em",{parentName:"p"},"SSH Legacy port")," is no longer used, and will be removed."),(0,r.kt)("p",{parentName:"blockquote"},"If you were using it in custom scripts, consider changing to the\nGorgone communication system."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the Gorgone configuration:"),(0,r.kt)("p",{parentName:"li"},"From the poller list, click the ",(0,r.kt)("strong",{parentName:"p"},"Display Gorgone configuration")," action\nicon on the line corresponding to your Remote Server ",(0,r.kt)("img",{alt:"image",src:n(66505).Z+"#thumbnail1",width:"32",height:"32"})),(0,r.kt)("p",{parentName:"li"},"A popin will show the configuration to copy into the ",(0,r.kt)("strong",{parentName:"p"},"Remote Server\nterminal"),".\nClick ",(0,r.kt)("strong",{parentName:"p"},"Copy to clipboard"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(79506).Z,width:"1379",height:"335"})),(0,r.kt)("p",{parentName:"li"},"Paste the content of the clipboard directly into the ",(0,r.kt)("strong",{parentName:"p"},"Remote Server terminal"),"\nas it contains the following content, and will fill the right file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'cat <<EOF > /etc/centreon-gorgone/config.d/40-gorgoned.yaml\nname: gorgoned-My Remote Server\ndescription: Configuration for remote server My Remote Server\ngorgone:\n  gorgonecore:\n    id: 3\n    external_com_type: tcp\n    external_com_path: "*:5556"\n    authorized_clients:\n      - key: Np1wWwpbFD2I0MdeHWRlFx51FmlYkDRZy9JTFxkrDPI\n    privkey: "/var/lib/centreon-gorgone/.keys/rsakey.priv.pem"\n    pubkey: "/var/lib/centreon-gorgone/.keys/rsakey.pub.pem"\n  modules:\n    - name: action\n      package: gorgone::modules::core::action::hooks\n      enable: true\n\n    - name: cron\n      package: "gorgone::modules::core::cron::hooks"\n      enable: true\n      cron: !include cron.d/*.yaml\n\n    - name: nodes\n      package: gorgone::modules::centreon::nodes::hooks\n      enable: true\n\n    - name: proxy\n      package: gorgone::modules::core::proxy::hooks\n      enable: true\n\n    - name: legacycmd\n      package: gorgone::modules::centreon::legacycmd::hooks\n      enable: true\n      cmd_file: "/var/lib/centreon/centcore.cmd"\n      cache_dir: "/var/cache/centreon/"\n      cache_dir_trap: "/etc/snmp/centreon_traps/"\n      remote_dir: "/var/cache/centreon/config/remote-data/"\n\n    - name: engine\n      package: gorgone::modules::centreon::engine::hooks\n      enable: true\n      command_file: "/var/lib/centreon-engine/rw/centengine.cmd"\n\n    - name: statistics\n      package: "gorgone::modules::centreon::statistics::hooks"\n      enable: true\n      broker_cache_dir: "/var/cache/centreon/broker-stats/"\n      cron:\n        - id: broker_stats\n          timespec: "*/5 * * * *"\n          action: BROKERSTATS\n          parameters:\n            timeout: 10\n        - id: engine_stats\n          timespec: "*/5 * * * *"\n          action: ENGINESTATS\n          parameters:\n            timeout: 10\n\nEOF\n')),(0,r.kt)("p",{parentName:"li"},"Hit the ",(0,r.kt)("em",{parentName:"p"},"Enter")," key for the command to be applied."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"You can copy the configuration in a custom file by copying the content from\nthe popin."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Restart the Gorgone daemon:"),(0,r.kt)("p",{parentName:"li"},"From the Remote Server, run the following command to restart the Gorgone service:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart gorgoned\n")),(0,r.kt)("p",{parentName:"li"},"Make sure it is started by running the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl status gorgoned\n")),(0,r.kt)("p",{parentName:"li"},"It should result as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\u25cf gorgoned.service - Centreon Gorgone\n  Loaded: loaded (/etc/systemd/system/gorgoned.service; enabled; vendor preset: disabled)\n  Active: active (running) since Wed 2020-03-24 19:45:00 CET; 6s ago\nMain PID: 30902 (perl)\n  CGroup: /system.slice/gorgoned.service\n          \u251c\u250030902 /usr/bin/perl /usr/bin/gorgoned --config=/etc/centreon-gorgone/config.yaml --logfile=/var/log/centreon-gorgone/gorgoned.log --severity=info\n          \u251c\u250030916 gorgone-nodes\n          \u251c\u250030917 gorgone-dbcleaner\n          \u251c\u250030924 gorgone-proxy\n          \u251c\u250030925 gorgone-proxy\n          \u251c\u250030938 gorgone-proxy\n          \u251c\u250030944 gorgone-proxy\n          \u251c\u250030946 gorgone-proxy\n          \u251c\u250030959 gorgone-engine\n          \u251c\u250030966 gorgone-action\n          \u2514\u250030967 gorgone-legacycmd\n\nMar 24 19:45:00 localhost.localdomain systemd[1]: Started Centreon Gorgone.\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"To force the Central's Gorgone daemon to connect to the Remote Server"),", restart\nit with the following command from the ",(0,r.kt)("strong",{parentName:"p"},"Central server"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart gorgoned\n"))))),(0,r.kt)(a.Z,{value:"Using SSH (Deprecated)",label:"Using SSH (Deprecated)",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Deprecated")," "),(0,r.kt)("p",{parentName:"blockquote"},"This mode should no longer be used because it does not allow data\nsynchronization between the central and the remote server UI.")))),(0,r.kt)("h2",{id:"step-3-export-the-configuration"},"Step 3: Export the configuration"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the poller list, select the remote server and click ",(0,r.kt)("strong",{parentName:"p"},"Export\nconfiguration"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Then check the first three boxes and click ",(0,r.kt)("strong",{parentName:"p"},"Export"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(1986).Z,width:"1361",height:"347"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Finally, from the Remote Server, start/restart the collect processes:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart cbd centengine\n")),(0,r.kt)("p",{parentName:"li"},"The Remote Server's Broker and Engine will then start and connect to the\nCentral Broker."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(26514).Z,width:"1318",height:"254"})))),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,"Go to the ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/docs/getting-started/welcome"},"Getting Started"),"\nchapter to configure your first monitoring."))}h.isMDXComponent=!0},66505:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYzODE5OUMzODdDNDExRTVBM0NFRkI5Njg4NUZGRTE2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYzODE5OUM0ODdDNDExRTVBM0NFRkI5Njg4NUZGRTE2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjM4MTk5QzE4N0M0MTFFNUEzQ0VGQjk2ODg1RkZFMTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjM4MTk5QzI4N0M0MTFFNUEzQ0VGQjk2ODg1RkZFMTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5/QN5jAAADoUlEQVR42uxXW0iTURz/f3Nzm2O2uTTmZV6gHhStrOiiZaBBFkoSSJGg0UOlJIEPlq/R7SW0LKzAygp6KYqCKHroMiG76sOM1oVodjEv+9zaxd2+/mc7jem+uc0+8aUDP853Lv//+Z3/bWdMSUlpOgCcQpQhkkD49hLRotc/G+BbFCM6ETUwd60ccRVRxLcoQlTA3LfCSAvEAkzI+AnisUCHZiMaom0iBHwh45uIM/Gcgr7lnS8tXZ8XCwHRtLFGQLNnxbJJBPPc5p2AeIa1BMSaKHuIr0OH/RgTE0IRWEBiLM4LbUPcEYqADdGGkMahb0BIF0wijs82DYUgoEDcpn2sMdCEhN4KGYQbEIlx6FMJaQFLLP6fSxcQC6ygfawuMCAhi5Bp2Pc/DaMp6N1zXUs8QV9U3cylr+n+hV1ddtXnPlj4cxDUw+8B54VNQ6dCI/lUVK0FpzUVZMrwTJEpgc2v8APsZjJzFHEaMfzPaTiSswqMa+vxBakOzknlDJpMxIHDy4RpCuxro++DxtA4menX0IpIpcEYRG/dhVZj+cGA0kQUFzPQlJ8MltpMGK3RMlXZPO/aBOQkFXnxK51atTEWC3C0FgTznekxNYCXO0nGJ1aqwOYBOGKwQOfqQP3RSBm4XJICmiEH4L4pmjqXqxJ+e3xw6BVLZs5S3demW2AsEhsMolzsusj34aUqaC1MRmujZrcPQo4Cs8sXLuzjwIqHExkiSxshkSue5obtEZ9l1l+7QZkm3aJLgmPFyf4prTwgWvloFLrXqfFwDur0Y1Nv/zcmEwKhQWRfj7tcD012oqRnugvKKHiqAppOmTZlqhrJtKBJH5jskHHL6b8p3+EkBrZmyqcYNLik0+kKIv1pCG2pmM8/CjbBhwkvuDgGyrVSSJGKgMVb941MBg7n+GVbChbAzrxAcLa9scAVo5VkGHk5bSYEntJoz0B4aQEKg8Rln5TaWd+4rliiH3bCuJvzkyA3e2fxgMHs5j28Nk8BF9E9LiTY+JyFDkMwrutJHWM4jourdGIwNmPXQb6XpCRCO2ZDZYYM7poccOOLA/rZAJFlKgnsyJFDVZYc7n9zwt4XZqeJdcuomn2I83598RKgJGpoVcsk4xx1IntgscKXpRDL5GImycNxdoebsxkt7tH2j7Zk1urJoKJDiP2Ie0FdsyFASSzCrpkWlWgPEZL85/hK8awJhBAh1a0EsRGRT6sdad8Rg/S/Zi8dh7U/AgwAYk04ZraQjHUAAAAASUVORK5CYII="},38584:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/remote-edit-zmq-40834c7cdb7d7a2aa05a531348749a37.png"},1986:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/remote-generate-config-ac8ebd873bf8e37023ae47f8ce9a7fac.png"},79506:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/remote-gorgone-display-config-bbe1f9d4d5d6266f08ce560d47c25648.png"},26514:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/remote-list-zmq-started-78f6d34b3a7ca0534e9bf90e87a7143c.png"},92765:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/remote-list-zmq-a569e951eaa6336a633277dad9ea2c19.png"},35150:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/wizard-add-remote-1-9f8ad64741f104e3b8d41a0dd551b30b.png"},71305:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/wizard-add-remote-2a-009fcc6a8e3b964829af99c2eac99a65.png"},10670:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/wizard-add-remote-2b-2998a8114f81aa680dbeececfa8cec01.png"},83564:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/wizard-add-remote-3-ee148485df672e829799ceb30e21b855.png"},8889:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/wizard-add-remote-4-e1339573a19102b50ce213ab5140af6e.png"}}]);