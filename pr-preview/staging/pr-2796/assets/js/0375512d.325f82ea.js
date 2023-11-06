"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[85932],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),g=p(n),m=o,d=g["".concat(c,".").concat(m)]||g[m]||u[m]||i;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[g]="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73484:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>g});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={id:"move-poller",title:"Attach a poller to a different remote server"},c=void 0,p={unversionedId:"monitoring/monitoring-servers/move-poller",id:"version-23.10/monitoring/monitoring-servers/move-poller",title:"Attach a poller to a different remote server",description:"Here is the procedure for attaching a poller from the Centreon Central server to a Remote Server, or from one Remote Server",source:"@site/versioned_docs/version-23.10/monitoring/monitoring-servers/move-poller.md",sourceDirName:"monitoring/monitoring-servers",slug:"/monitoring/monitoring-servers/move-poller",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/monitoring/monitoring-servers/move-poller",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/monitoring/monitoring-servers/move-poller.md",tags:[],version:"23.10",lastUpdatedAt:1699281350,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{id:"move-poller",title:"Attach a poller to a different remote server"},sidebar:"version-23.10/docs",previous:{title:"Communications",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/monitoring/monitoring-servers/communications"},next:{title:"Advanced configuration",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/monitoring/monitoring-servers/advanced-configuration"}},s={},g=[{value:"Update the Centreon Poller configuration",id:"update-the-centreon-poller-configuration",level:2},{value:"Update the Centreon Gorgone configuration",id:"update-the-centreon-gorgone-configuration",level:2},{value:"Update the Centreon Broker configuration",id:"update-the-centreon-broker-configuration",level:2},{value:"Deploy the new configuration",id:"deploy-the-new-configuration",level:2}],u={toc:g},m="wrapper";function d(e){var{components:t}=e,a=l(e,["components"]);return(0,r.kt)(m,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},u,a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Here is the procedure for attaching a poller from the Centreon Central server to a Remote Server, or from one Remote Server\nto another."),(0,r.kt)("h2",{id:"update-the-centreon-poller-configuration"},"Update the Centreon Poller configuration"),(0,r.kt)("p",null,"Go to the ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Pollers > Pollers")," menu and edit your poller."),(0,r.kt)("p",null,"Select the Remote Server from the ",(0,r.kt)("strong",{parentName:"p"},"Attach to Master Remote Server")," field:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(54773).Z,width:"1766",height:"608"})),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"Save"),"."),(0,r.kt)("h2",{id:"update-the-centreon-gorgone-configuration"},"Update the Centreon Gorgone configuration"),(0,r.kt)("p",null,"From the poller list, click the ",(0,r.kt)("strong",{parentName:"p"},"Display Gorgone configuration")," action\nicon on the line corresponding to your Poller ",(0,r.kt)("img",{alt:"image",src:n(66505).Z+"#thumbnail1",width:"32",height:"32"})),(0,r.kt)("p",null,"A popin will show the configuration to copy into the ",(0,r.kt)("strong",{parentName:"p"},"Poller terminal"),".\nClick ",(0,r.kt)("strong",{parentName:"p"},"Copy to clipboard"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(8678).Z,width:"1320",height:"442"})),(0,r.kt)("p",null,"Paste the content of the clipboard directly into the ",(0,r.kt)("strong",{parentName:"p"},"Poller terminal")," as it\ncontains the following content, and will fill the right file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'cat <<EOF > /etc/centreon-gorgone/config.d/40-gorgoned.yaml\nname:  gorgoned-My Poller\ndescription: Configuration for poller My Poller\ngorgone:\n  gorgonecore:\n    id: 2\n    external_com_type: tcp\n    external_com_path: "*:5556"\n    authorized_clients:\n      - key: Np1wWwpbFD2I0MdeHWRlFx51FmlYkDRZy9JTFxkrDPI\n    privkey: "/var/lib/centreon-gorgone/.keys/rsakey.priv.pem"\n    pubkey: "/var/lib/centreon-gorgone/.keys/rsakey.pub.pem"\n  modules:\n    - name: action\n      package: gorgone::modules::core::action::hooks\n      enable: true\n\n    - name: engine\n      package: gorgone::modules::centreon::engine::hooks\n      enable: true\n      command_file: "/var/lib/centreon-engine/rw/centengine.cmd"\n\nEOF\n')),(0,r.kt)("p",null,"Hit the ",(0,r.kt)("em",{parentName:"p"},"Enter")," key for the command to be applied."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can copy the configuration in a custom file by copying the content from\nthe popin.")),(0,r.kt)("p",null,"Restart Centreon Gorgone:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart gorgoned\n")),(0,r.kt)("h2",{id:"update-the-centreon-broker-configuration"},"Update the Centreon Broker configuration"),(0,r.kt)("p",null,"Go to the ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Pollers > Pollers")," menu and edit the broker configuration of the poller."),(0,r.kt)("p",null,"In the ",(0,r.kt)("strong",{parentName:"p"},"Output")," tab, add or edit the previous ",(0,r.kt)("strong",{parentName:"p"},"TCP - IPv4")," entry to connect to the new server:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(8272).Z,width:"1916",height:"688"})),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"Save")),(0,r.kt)("h2",{id:"deploy-the-new-configuration"},"Deploy the new configuration"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Pollers > Pollers")," and deploy the configuration of the poller."),(0,r.kt)("p",null,"On the server to which you have attached your server, restart Centreon Gorgone:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart gorgoned\n")))}d.isMDXComponent=!0},66505:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYzODE5OUMzODdDNDExRTVBM0NFRkI5Njg4NUZGRTE2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYzODE5OUM0ODdDNDExRTVBM0NFRkI5Njg4NUZGRTE2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjM4MTk5QzE4N0M0MTFFNUEzQ0VGQjk2ODg1RkZFMTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjM4MTk5QzI4N0M0MTFFNUEzQ0VGQjk2ODg1RkZFMTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5/QN5jAAADoUlEQVR42uxXW0iTURz/f3Nzm2O2uTTmZV6gHhStrOiiZaBBFkoSSJGg0UOlJIEPlq/R7SW0LKzAygp6KYqCKHroMiG76sOM1oVodjEv+9zaxd2+/mc7jem+uc0+8aUDP853Lv//+Z3/bWdMSUlpOgCcQpQhkkD49hLRotc/G+BbFCM6ETUwd60ccRVRxLcoQlTA3LfCSAvEAkzI+AnisUCHZiMaom0iBHwh45uIM/Gcgr7lnS8tXZ8XCwHRtLFGQLNnxbJJBPPc5p2AeIa1BMSaKHuIr0OH/RgTE0IRWEBiLM4LbUPcEYqADdGGkMahb0BIF0wijs82DYUgoEDcpn2sMdCEhN4KGYQbEIlx6FMJaQFLLP6fSxcQC6ygfawuMCAhi5Bp2Pc/DaMp6N1zXUs8QV9U3cylr+n+hV1ddtXnPlj4cxDUw+8B54VNQ6dCI/lUVK0FpzUVZMrwTJEpgc2v8APsZjJzFHEaMfzPaTiSswqMa+vxBakOzknlDJpMxIHDy4RpCuxro++DxtA4menX0IpIpcEYRG/dhVZj+cGA0kQUFzPQlJ8MltpMGK3RMlXZPO/aBOQkFXnxK51atTEWC3C0FgTznekxNYCXO0nGJ1aqwOYBOGKwQOfqQP3RSBm4XJICmiEH4L4pmjqXqxJ+e3xw6BVLZs5S3demW2AsEhsMolzsusj34aUqaC1MRmujZrcPQo4Cs8sXLuzjwIqHExkiSxshkSue5obtEZ9l1l+7QZkm3aJLgmPFyf4prTwgWvloFLrXqfFwDur0Y1Nv/zcmEwKhQWRfj7tcD012oqRnugvKKHiqAppOmTZlqhrJtKBJH5jskHHL6b8p3+EkBrZmyqcYNLik0+kKIv1pCG2pmM8/CjbBhwkvuDgGyrVSSJGKgMVb941MBg7n+GVbChbAzrxAcLa9scAVo5VkGHk5bSYEntJoz0B4aQEKg8Rln5TaWd+4rliiH3bCuJvzkyA3e2fxgMHs5j28Nk8BF9E9LiTY+JyFDkMwrutJHWM4jourdGIwNmPXQb6XpCRCO2ZDZYYM7poccOOLA/rZAJFlKgnsyJFDVZYc7n9zwt4XZqeJdcuomn2I83598RKgJGpoVcsk4xx1IntgscKXpRDL5GImycNxdoebsxkt7tH2j7Zk1urJoKJDiP2Ie0FdsyFASSzCrpkWlWgPEZL85/hK8awJhBAh1a0EsRGRT6sdad8Rg/S/Zi8dh7U/AgwAYk04ZraQjHUAAAAASUVORK5CYII="},54773:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/move_poller_conf_1-392e55435ec6898cea53047938b7394b.png"},8272:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/move_poller_conf_2-217e8bfe3fd81decf2c9e88c781bb48d.png"},8678:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/poller-gorgone-display-config-816c81ae1ca1be59d46bf669f191848f.png"}}]);