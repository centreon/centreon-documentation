"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[71748],{71893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>m,toc:()=>d});n(67294);var r=n(3905),o=n(51715),a=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"add-a-poller-to-configuration",title:"Attach a poller to a central or a remote server"},c=void 0,m={unversionedId:"monitoring/monitoring-servers/add-a-poller-to-configuration",id:"version-23.10/monitoring/monitoring-servers/add-a-poller-to-configuration",title:"Attach a poller to a central or a remote server",description:"Prerequisites",source:"@site/versioned_docs/version-23.10/monitoring/monitoring-servers/add-a-poller-to-configuration.md",sourceDirName:"monitoring/monitoring-servers",slug:"/monitoring/monitoring-servers/add-a-poller-to-configuration",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/docs/monitoring/monitoring-servers/add-a-poller-to-configuration",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/monitoring/monitoring-servers/add-a-poller-to-configuration.md",tags:[],version:"23.10",lastUpdatedAt:1699359701,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{id:"add-a-poller-to-configuration",title:"Attach a poller to a central or a remote server"},sidebar:"version-23.10/docs",previous:{title:"Using packages",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/docs/installation/installation-of-a-remote-server/using-packages"},next:{title:"Attach a remote server to a central server",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/docs/monitoring/monitoring-servers/add-a-remote-server-to-configuration"}},g={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Configure a new Poller",id:"step-1-configure-a-new-poller",level:2},{value:"Step 2: Enable communication",id:"step-2-enable-communication",level:2},{value:"Step 3: Export the configuration of the remote",id:"step-3-export-the-configuration-of-the-remote",level:2},{value:"Step 4: Export the configuration of the poller",id:"step-4-export-the-configuration-of-the-poller",level:2},{value:"Getting started",id:"getting-started",level:2}],k={toc:d},h="wrapper";function u(e){var{components:t}=e,s=p(e,["components"]);return(0,r.kt)(h,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},k,s),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Install the poller ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/docs/installation/installation-of-a-poller/using-packages"},"using packages"),"."),(0,r.kt)("h2",{id:"step-1-configure-a-new-poller"},"Step 1: Configure a new Poller"),(0,r.kt)("p",null,"As of Centreon version 18.10, a new wizard has been added for adding a new\npoller to the Centreon platform."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Pollers > Pollers")," menu and click ",(0,r.kt)("strong",{parentName:"p"},"Add")," to configure a new poller.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Add a Centreon Poller")," and click ",(0,r.kt)("strong",{parentName:"p"},"Next"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(47511).Z,width:"598",height:"282"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the option you want:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Create new Poller")," if you haven't registered the poller yet on the central or remote server"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Select a Poller")," if you have already registered the poller on the central or remote server."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Type in the name, the IP address of the new poller, and the IP address of the Central\nServer. Click ",(0,r.kt)("strong",{parentName:"p"},"Next"),":"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{alt:"image",src:n(86574).Z,width:"595",height:"429"})),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"The IP address of the Poller is the IP address or the FQDN used to access this\npoller from the Central server."),(0,r.kt)("p",{parentName:"blockquote"},"The IP address of the Central server is the IP address or the FQDN used to\naccess the Central server from the Poller."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Link the poller to the central server or to a remote server:"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you want to link the poller to the Central Server, click ",(0,r.kt)("strong",{parentName:"p"},"Apply"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(83055).Z,width:"560",height:"317"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you want to link the poller to an existing Remote Server, select one from the list, then click ",(0,r.kt)("strong",{parentName:"p"},"Apply"),"."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"If you want to change the direction of the flow between the Central Server\n(or the Remote Server) and the Poller, check the ",(0,r.kt)("strong",{parentName:"p"},"Advanced: reverse Centreon\nBroker communication flow")," checkbox. In this case, it will be necessary to\nexport the configuration of the poller as well as the server to which it\nwill be attached.")),(0,r.kt)("p",{parentName:"li"},"In a few seconds the wizard will configure your new poller."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(88904).Z,width:"1155",height:"258"})))),(0,r.kt)("h2",{id:"step-2-enable-communication"},"Step 2: Enable communication"),(0,r.kt)("p",null,"The communication between the Central server and a Poller is ensured by Gorgone and can\nbe done using ZMQ (with a Gorgone running on the Poller, recommended) or using\nSSH protocol."),(0,r.kt)(o.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"Using ZMQ (Recommended)",label:"Using ZMQ (Recommended)",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the communication type:"),(0,r.kt)("p",{parentName:"li"},"Edit the newly created Poller configuration, and select ",(0,r.kt)("strong",{parentName:"p"},"ZMQ")," as ",(0,r.kt)("strong",{parentName:"p"},"Gorgone\nconnection protocol"),". Define the suitable ",(0,r.kt)("strong",{parentName:"p"},"port")," (port ",(0,r.kt)("strong",{parentName:"p"},"5556")," is\nrecommended)."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(11845).Z,width:"1345",height:"486"})),(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save"),"."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Note that the ",(0,r.kt)("em",{parentName:"p"},"SSH Legacy port")," is no longer used, and will be removed."),(0,r.kt)("p",{parentName:"blockquote"},"If you were using it in custom scripts, consider changing to the\nGorgone communication system."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the Gorgone configuration:"),(0,r.kt)("p",{parentName:"li"},"From the poller list, click the ",(0,r.kt)("strong",{parentName:"p"},"Display Gorgone configuration")," action\nicon on the line corresponding to your Poller ",(0,r.kt)("img",{alt:"image",src:n(66505).Z+"#thumbnail1",width:"32",height:"32"})),(0,r.kt)("p",{parentName:"li"},"A popin will show the configuration to copy into the ",(0,r.kt)("strong",{parentName:"p"},"Poller terminal"),".\nClick ",(0,r.kt)("strong",{parentName:"p"},"Copy to clipboard"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(8678).Z,width:"1320",height:"442"})),(0,r.kt)("p",{parentName:"li"},"Paste the content of the clipboard directly into the ",(0,r.kt)("strong",{parentName:"p"},"Poller terminal")," as it\ncontains the following content, and will fill the right file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'cat <<EOF > /etc/centreon-gorgone/config.d/40-gorgoned.yaml\nname:  gorgoned-My Poller\ndescription: Configuration for poller My Poller\ngorgone:\n  gorgonecore:\n    id: 2\n    external_com_type: tcp\n    external_com_path: "*:5556"\n    authorized_clients:\n      - key: Np1wWwpbFD2I0MdeHWRlFx51FmlYkDRZy9JTFxkrDPI\n    privkey: "/var/lib/centreon-gorgone/.keys/rsakey.priv.pem"\n    pubkey: "/var/lib/centreon-gorgone/.keys/rsakey.pub.pem"\n  modules:\n    - name: action\n      package: gorgone::modules::core::action::hooks\n      enable: true\n\n    - name: engine\n      package: gorgone::modules::centreon::engine::hooks\n      enable: true\n      command_file: "/var/lib/centreon-engine/rw/centengine.cmd"\n\nEOF\n')),(0,r.kt)("p",{parentName:"li"},"Hit the ",(0,r.kt)("em",{parentName:"p"},"Enter")," key for the command to be applied."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"You can copy the configuration in a custom file by copying the content from\nthe popin."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Restart the Gorgone daemon:"),(0,r.kt)("p",{parentName:"li"},"From the Poller, run the following command to restart the Gorgone service:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart gorgoned\n")),(0,r.kt)("p",{parentName:"li"},"Make sure it is started by running the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl status gorgoned\n")),(0,r.kt)("p",{parentName:"li"},"It should result as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\u25cf gorgoned.service - Centreon Gorgone\n  Loaded: loaded (/etc/systemd/system/gorgoned.service; disabled; vendor preset: disabled)\n  Active: active (running) since Mon 2020-03-24 19:45:00 CET; 20h ago\nMain PID: 28583 (perl)\n  CGroup: /system.slice/gorgoned.service\n          \u251c\u250028583 /usr/bin/perl /usr/bin/gorgoned --config=/etc/centreon-gorgone/config.yaml --logfile=/var/log/centreon-gorgone/gorgoned.log --severity=info\n          \u251c\u250028596 gorgone-dbcleaner\n          \u251c\u250028597 gorgone-engine\n          \u2514\u250028598 gorgone-action\n\nMar 24 19:45:00 localhost.localdomain systemd[1]: Started Centreon Gorgone.\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"To force the Central's Gorgone daemon to connect to the Poller"),", restart it with\nthe following command from the ",(0,r.kt)("strong",{parentName:"p"},"Central server"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart gorgoned\n"))))),(0,r.kt)(a.Z,{value:"Using SSH",label:"Using SSH",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the communication type:"),(0,r.kt)("p",{parentName:"li"},"Edit the newly created Poller configuration, and select ",(0,r.kt)("strong",{parentName:"p"},"SSH")," as ",(0,r.kt)("strong",{parentName:"p"},"Gorgone\nconnection protocol"),". Define the suitable ",(0,r.kt)("strong",{parentName:"p"},"port"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(76163).Z,width:"1343",height:"485"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save"),"."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Note that the ",(0,r.kt)("em",{parentName:"p"},"SSH Legacy port")," is no longer used, and will be removed."),(0,r.kt)("p",{parentName:"blockquote"},"If you were using it in custom scripts, consider changing to the\nGorgone communication system."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Exchange SSH keys:"),(0,r.kt)("p",{parentName:"li"},"If you do not have any private SSH keys on the ",(0,r.kt)("strong",{parentName:"p"},"Central server")," for the\n",(0,r.kt)("strong",{parentName:"p"},"centreon-gorgone")," user, create one with the following commands:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"su - centreon-gorgone\nssh-keygen -t rsa\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Hit enter when it prompts for a file to save the key to use the default\nlocation, or create one in a specified directory. ",(0,r.kt)("strong",{parentName:"p"},"Leave the passphrase\nblank"),". You will receive a key fingerprint and a randomart image.")),(0,r.kt)("p",{parentName:"li"},"Generate a password for the ",(0,r.kt)("strong",{parentName:"p"},"centreon")," user on the ",(0,r.kt)("strong",{parentName:"p"},"new Poller"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"passwd centreon\n")),(0,r.kt)("p",{parentName:"li"},"Then, copy this key on to the ",(0,r.kt)("strong",{parentName:"p"},"new Poller")," with the following commands:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"su - centreon-gorgone\nssh-copy-id -i .ssh/id_rsa.pub centreon@<IP_POLLER>\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"To force the Central's Gorgone daemon to connect to the Poller"),", restart it with\nthe following command from the ",(0,r.kt)("strong",{parentName:"p"},"Central server"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart gorgoned\n")))))),(0,r.kt)("h2",{id:"step-3-export-the-configuration-of-the-remote"},"Step 3: Export the configuration of the remote"),(0,r.kt)("p",null,"This step only applies if you are attaching a poller to a remote server (not to a central server)."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the central server, deploy the configuration of the remote server to which the poller will be attached:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Pollers > Pollers")," and select the remote server."),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Export configuration"),"."),(0,r.kt)("li",{parentName:"ul"},"Select the first four boxes, select the ",(0,r.kt)("strong",{parentName:"li"},"Restart")," method, and then click ",(0,r.kt)("strong",{parentName:"li"},"Export"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Restart gorgone on the remote server:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart gorgoned\n")))),(0,r.kt)("h2",{id:"step-4-export-the-configuration-of-the-poller"},"Step 4: Export the configuration of the poller"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the poller list, select the poller and click ",(0,r.kt)("strong",{parentName:"p"},"Export\nconfiguration"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Then check the first four boxes, select the ",(0,r.kt)("strong",{parentName:"p"},"Restart")," method, and click\n",(0,r.kt)("strong",{parentName:"p"},"Export"),":"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{alt:"image",src:n(41554).Z,width:"1361",height:"344"})),(0,r.kt)("p",{parentName:"li"},"  The poller's engine will then start and connect to the Broker service of the central server or remote server (according to which one you have attached the poller to)."),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{alt:"image",src:n(36581).Z,width:"1317",height:"250"})))),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,"Go to the ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/docs/getting-started/welcome"},"Getting Started"),"\nchapter to configure your first monitoring."))}u.isMDXComponent=!0},66505:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYzODE5OUMzODdDNDExRTVBM0NFRkI5Njg4NUZGRTE2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYzODE5OUM0ODdDNDExRTVBM0NFRkI5Njg4NUZGRTE2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjM4MTk5QzE4N0M0MTFFNUEzQ0VGQjk2ODg1RkZFMTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjM4MTk5QzI4N0M0MTFFNUEzQ0VGQjk2ODg1RkZFMTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5/QN5jAAADoUlEQVR42uxXW0iTURz/f3Nzm2O2uTTmZV6gHhStrOiiZaBBFkoSSJGg0UOlJIEPlq/R7SW0LKzAygp6KYqCKHroMiG76sOM1oVodjEv+9zaxd2+/mc7jem+uc0+8aUDP853Lv//+Z3/bWdMSUlpOgCcQpQhkkD49hLRotc/G+BbFCM6ETUwd60ccRVRxLcoQlTA3LfCSAvEAkzI+AnisUCHZiMaom0iBHwh45uIM/Gcgr7lnS8tXZ8XCwHRtLFGQLNnxbJJBPPc5p2AeIa1BMSaKHuIr0OH/RgTE0IRWEBiLM4LbUPcEYqADdGGkMahb0BIF0wijs82DYUgoEDcpn2sMdCEhN4KGYQbEIlx6FMJaQFLLP6fSxcQC6ygfawuMCAhi5Bp2Pc/DaMp6N1zXUs8QV9U3cylr+n+hV1ddtXnPlj4cxDUw+8B54VNQ6dCI/lUVK0FpzUVZMrwTJEpgc2v8APsZjJzFHEaMfzPaTiSswqMa+vxBakOzknlDJpMxIHDy4RpCuxro++DxtA4menX0IpIpcEYRG/dhVZj+cGA0kQUFzPQlJ8MltpMGK3RMlXZPO/aBOQkFXnxK51atTEWC3C0FgTznekxNYCXO0nGJ1aqwOYBOGKwQOfqQP3RSBm4XJICmiEH4L4pmjqXqxJ+e3xw6BVLZs5S3demW2AsEhsMolzsusj34aUqaC1MRmujZrcPQo4Cs8sXLuzjwIqHExkiSxshkSue5obtEZ9l1l+7QZkm3aJLgmPFyf4prTwgWvloFLrXqfFwDur0Y1Nv/zcmEwKhQWRfj7tcD012oqRnugvKKHiqAppOmTZlqhrJtKBJH5jskHHL6b8p3+EkBrZmyqcYNLik0+kKIv1pCG2pmM8/CjbBhwkvuDgGyrVSSJGKgMVb941MBg7n+GVbChbAzrxAcLa9scAVo5VkGHk5bSYEntJoz0B4aQEKg8Rln5TaWd+4rliiH3bCuJvzkyA3e2fxgMHs5j28Nk8BF9E9LiTY+JyFDkMwrutJHWM4jourdGIwNmPXQb6XpCRCO2ZDZYYM7poccOOLA/rZAJFlKgnsyJFDVZYc7n9zwt4XZqeJdcuomn2I83598RKgJGpoVcsk4xx1IntgscKXpRDL5GImycNxdoebsxkt7tH2j7Zk1urJoKJDiP2Ie0FdsyFASSzCrpkWlWgPEZL85/hK8awJhBAh1a0EsRGRT6sdad8Rg/S/Zi8dh7U/AgwAYk04ZraQjHUAAAAASUVORK5CYII="},76163:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/poller-edit-ssh-e58c11525450c70989a4bfcb4a23287d.png"},11845:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/poller-edit-zmq-3bdf0b81ace574822de00b5600cf5a97.png"},41554:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/poller-generate-config-153ed9616fc28a4327b6d7bbf0b8afa7.png"},8678:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/poller-gorgone-display-config-816c81ae1ca1be59d46bf669f191848f.png"},36581:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/poller-list-zmq-started-8449adba9c76a95666d876daf6aa7999.png"},88904:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/poller-list-zmq-b036b832862b771eeb8e56f417d6222f.png"},47511:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/wizard-add-poller-1-9a674767e7c5b68605777fe2fde4c1e9.png"},86574:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/wizard-add-poller-2-ab88a69c0bc3dd4f865f26bcac63f46b.png"},83055:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/wizard-add-poller-3-d44b494e889a43e12a165892a235e0a0.png"}}]);