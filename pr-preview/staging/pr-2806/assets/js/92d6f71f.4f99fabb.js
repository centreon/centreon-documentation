"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[18240],{64299:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>p,metadata:()=>d,toc:()=>m});r(67294);var n=r(3905),a=r(51715),o=r(7626);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const p={id:"upgrade-centreon-ha-from-22-10",title:"Upgrade Centreon HA from Centreon 22.10"},i=void 0,d={unversionedId:"upgrade/centreon-ha/upgrade-centreon-ha-from-22-10",id:"version-23.10/upgrade/centreon-ha/upgrade-centreon-ha-from-22-10",title:"Upgrade Centreon HA from Centreon 22.10",description:"This chapter describes how to upgrade your Centreon HA platform from version 22.10 to version 23.04.",source:"@site/versioned_docs/version-23.10/upgrade/centreon-ha/upgrade-from-22-10.md",sourceDirName:"upgrade/centreon-ha",slug:"/upgrade/centreon-ha/upgrade-centreon-ha-from-22-10",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/upgrade/centreon-ha/upgrade-centreon-ha-from-22-10",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/upgrade/centreon-ha/upgrade-from-22-10.md",tags:[],version:"23.10",lastUpdatedAt:1699630797,formattedLastUpdatedAt:"Nov 10, 2023",frontMatter:{id:"upgrade-centreon-ha-from-22-10",title:"Upgrade Centreon HA from Centreon 22.10"},sidebar:"version-23.10/docs",previous:{title:"Upgrade Centreon HA from Centreon 22.04",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/upgrade/centreon-ha/upgrade-centreon-ha-from-22-04"},next:{title:"Installing the Centreon Agent",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/health/centreon-agent"}},u={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Suspend cluster resources management",id:"suspend-cluster-resources-management",level:3},{value:"Perform a backup",id:"perform-a-backup",level:3},{value:"Update the RPM signing key",id:"update-the-rpm-signing-key",level:3},{value:"Upgrade process",id:"upgrade-process",level:2},{value:"Removing cron jobs",id:"removing-cron-jobs",level:3},{value:"Reset the permissions for centreon_central_sync resource",id:"reset-the-permissions-for-centreon_central_sync-resource",level:3},{value:"Cluster upgrade",id:"cluster-upgrade",level:2},{value:"Maintenance mode and backup",id:"maintenance-mode-and-backup",level:3},{value:"Delete the resources",id:"delete-the-resources",level:3},{value:"Restart Centreon process",id:"restart-centreon-process",level:3},{value:"Clean broker memory files",id:"clean-broker-memory-files",level:3},{value:"Recreate the cluster resources",id:"recreate-the-cluster-resources",level:3},{value:"PHP resource",id:"php-resource",level:4},{value:"RRD broker resource",id:"rrd-broker-resource",level:4},{value:"Recreating the <em>centreon</em> resource group",id:"recreating-the-centreon-resource-group",level:4},{value:"Recreating the constraint",id:"recreating-the-constraint",level:4},{value:"Resuming cluster resource management",id:"resuming-cluster-resource-management",level:2},{value:"Check the health of the cluster",id:"check-the-health-of-the-cluster",level:2},{value:"Disabled resources",id:"disabled-resources",level:3},{value:"Verifying platform stability",id:"verifying-platform-stability",level:2}],h={toc:m},g="wrapper";function k(e){var{components:t}=e,r=c(e,["components"]);return(0,n.kt)(g,l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}({},h,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This chapter describes how to upgrade your Centreon HA platform from version 22.10 to version 23.04."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("h3",{id:"suspend-cluster-resources-management"},"Suspend cluster resources management"),(0,n.kt)("p",null,"In order to avoid a failover of the cluster during the update, it is necessary to unmanage all Centreon resources, as well as MariaDB."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pcs property set maintenance-mode=true\n")),(0,n.kt)("h3",{id:"perform-a-backup"},"Perform a backup"),(0,n.kt)("p",null,"Be sure that you have fully backed up your environment for the following servers:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Central server"),(0,n.kt)("li",{parentName:"ul"},"Database server")),(0,n.kt)("h3",{id:"update-the-rpm-signing-key"},"Update the RPM signing key"),(0,n.kt)("p",null,"For security reasons, the keys used to sign Centreon RPMs are rotated regularly. The last change occurred on October 14, 2021.\nWhen upgrading from an older version, you need to go through the ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/security/key-rotation#existing-installation"},"key rotation procedure"),", to remove the old key and install the new one."),(0,n.kt)("h2",{id:"upgrade-process"},"Upgrade process"),(0,n.kt)("p",null,"To perform the upgrade:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For the ",(0,n.kt)("strong",{parentName:"p"},"active central node")," and ",(0,n.kt)("strong",{parentName:"p"},"active database node if needed")," please ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/upgrade/upgrade-from-22-04"},"follow the official documentation")," ",(0,n.kt)("strong",{parentName:"p"},'until the "Post-upgrade actions" step (included)'),".")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For the ",(0,n.kt)("strong",{parentName:"p"},"passive central node")," and ",(0,n.kt)("strong",{parentName:"p"},"passive database node if needed"),", please ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/upgrade/upgrade-from-22-04"},"follow the official documentation")," ",(0,n.kt)("strong",{parentName:"p"},'until the "Update your customized Apache configuration" step (included) only. Do not perform the "Finalizing the upgrade" step.'),".")),(0,n.kt)("p",null,"Then on the two central nodes, restore the file ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/centreon-ha/centreon_central_sync.pm"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mv /etc/centreon-ha/centreon_central_sync.pm.rpmsave /etc/centreon-ha/centreon_central_sync.pm\n")),(0,n.kt)("p",null,'On the passive central node, move the "install" directory to avoid getting the "upgrade" screen in the interface in the event of a further exchange of roles.'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mv /usr/share/centreon/www/install /var/lib/centreon/installs/install-update-`date +%Y-%m-%d`\nsudo -u apache /usr/share/centreon/bin/console cache:clear\n")),(0,n.kt)("h3",{id:"removing-cron-jobs"},"Removing cron jobs"),(0,n.kt)("p",null,"The RPM upgrade puts cron jobs back in place on the central and database servers. Remove them to avoid concurrent executions on central and database nodes: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf /etc/cron.d/centreon\nrm -rf /etc/cron.d/centstorage\nrm -f /etc/cron.d/centreon-ha-mysql\n")),(0,n.kt)("p",null,"As you have deleted the ",(0,n.kt)("strong",{parentName:"p"},"centreon-ha-mysql")," cron, check that the following line appears in the ",(0,n.kt)("strong",{parentName:"p"},"server")," section of the ",(0,n.kt)("strong",{parentName:"p"},"/etc/my.cnf.d/server.cnf")," file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"expire_logs_days=7\n")),(0,n.kt)("p",null,"If the line is not there, add it, then restart the ",(0,n.kt)("strong",{parentName:"p"},"ms_mysql")," resource:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"pcs resource restart ms_mysql\n")),(0,n.kt)("h3",{id:"reset-the-permissions-for-centreon_central_sync-resource"},"Reset the permissions for centreon_central_sync resource"),(0,n.kt)("p",null,"The RPM upgrade puts the permissions back in place on the two ",(0,n.kt)("strong",{parentName:"p"},"central servers"),". Change them using these commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'chmod 775 /var/log/centreon-engine/\nmkdir /var/log/centreon-engine/archives\nchown centreon-engine: /var/log/centreon-engine/archives\nchmod 775 /var/log/centreon-engine/archives/\nfind /var/log/centreon-engine/ -type f -exec chmod 664 {} \\;\nfind /usr/share/centreon/www/img/media -type d -exec chmod 775 {} \\;\nfind /usr/share/centreon/www/img/media -type f \\( ! -iname ".keep" ! -iname ".htaccess" \\) -exec chmod 664 {} \\;\n')),(0,n.kt)("h2",{id:"cluster-upgrade"},"Cluster upgrade"),(0,n.kt)("p",null,"From Centreon 22.04, MariaDB replication is based on ",(0,n.kt)("a",{parentName:"p",href:"https://mariadb.com/kb/en/gtid/"},"GTID"),".\nIt is necessary to destroy the cluster completely and then reconfigure it with the latest version of Centreon and MariaDB replication mechanisms."),(0,n.kt)("h3",{id:"maintenance-mode-and-backup"},"Maintenance mode and backup"),(0,n.kt)("p",null,"Perform a backup of the cluster using:"),(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"RHEL / Oracle Linux 8",label:"RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pcs config backup centreon_cluster\npcs resource config --output-format=cmd | sed -e :a -e '/\\\\$/N; s/\\\\\\n//; ta' | sed 's/-f tmp-cib.xml//' | egrep \"create|group\" | egrep -v \"(mysql|php|cbd_rrd)\" > centreon_pcs_command.sh\n")))),(0,n.kt)("p",null,"Check that the file ",(0,n.kt)("inlineCode",{parentName:"p"},"centreon_cluster.tar.bz2")," exists before continuing this procedure."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"ls -l centreon_cluster.tar.bz2\n")),(0,n.kt)("p",null,"You should have a result like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"-rw------- 1 root root 2777 May  3 17:49 centreon_cluster.tar.bz2\n")),(0,n.kt)("p",null,"Then check the file centreon_pcs_command.sh. The export command may display some warning lines, but this is not blocking."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cat centreon_pcs_command.sh\n")),(0,n.kt)("p",null,"The content should looks like this:"),(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"RHEL / Oracle Linux 8",label:"RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"pcs resource create --no-default-ops --force -- vip ocf:heartbeat:IPaddr2   broadcast=@VIP_BROADCAST_IPADDR@ cidr_netmask=@VIP_CIDR_NETMASK@ flush_routes=true ip=@VIP_IPADDR@ nic=@VIP_IFNAME@   op     monitor interval=10s id=vip-monitor-interval-10s timeout=20s     start interval=0s id=vip-start-interval-0s timeout=20s     stop interval=0s id=vip-stop-interval-0s timeout=20s   meta target-role=started;\npcs resource create --no-default-ops --force -- http systemd:httpd   op     monitor interval=5s id=http-monitor-interval-5s timeout=20s     start interval=0s id=http-start-interval-0s timeout=40s     stop interval=0s id=http-stop-interval-0s timeout=40s   meta target-role=started;\npcs resource create --no-default-ops --force -- gorgone systemd:gorgoned   op     monitor interval=5s id=gorgone-monitor-interval-5s timeout=20s     start interval=0s id=gorgone-start-interval-0s timeout=90s     stop interval=0s id=gorgone-stop-interval-0s timeout=90s   meta target-role=started;\npcs resource create --no-default-ops --force -- centreon_central_sync systemd:centreon-central-sync   op     monitor interval=5s id=centreon_central_sync-monitor-interval-5s timeout=20s     start interval=0s id=centreon_central_sync-start-interval-0s timeout=90s     stop interval=0s id=centreon_central_sync-stop-interval-0s timeout=90s   meta target-role=started;\npcs resource create --no-default-ops --force -- cbd_central_broker systemd:cbd-sql   op     monitor interval=5s id=cbd_central_broker-monitor-interval-5s timeout=30s     start interval=0s id=cbd_central_broker-start-interval-0s timeout=90s     stop interval=0s id=cbd_central_broker-stop-interval-0s timeout=90s   meta target-role=started;\npcs resource create --no-default-ops --force -- centengine systemd:centengine   op     monitor interval=5s id=centengine-monitor-interval-5s timeout=30s     start interval=0s id=centengine-start-interval-0s timeout=90s     stop interval=0s id=centengine-stop-interval-0s timeout=90s   meta multiple-active=stop_start target-role=started;\npcs resource create --no-default-ops --force -- centreontrapd systemd:centreontrapd   op     monitor interval=5s id=centreontrapd-monitor-interval-5s timeout=20s     start interval=0s id=centreontrapd-start-interval-0s timeout=30s     stop interval=0s id=centreontrapd-stop-interval-0s timeout=30s   meta target-role=started;\npcs resource create --no-default-ops --force -- snmptrapd systemd:snmptrapd   op     monitor interval=5s id=snmptrapd-monitor-interval-5s timeout=20s     start interval=0s id=snmptrapd-start-interval-0s timeout=30s     stop interval=0s id=snmptrapd-stop-interval-0s timeout=30s   meta target-role=started;\npcs resource group add centreon   vip http gorgone centreon_central_sync cbd_central_broker centengine centreontrapd snmptrapd;\n")))),(0,n.kt)("p",null,"This file will be necessary to recreate all the resources of your cluster."),(0,n.kt)("h3",{id:"delete-the-resources"},"Delete the resources"),(0,n.kt)("p",null,"These commands should run only on the active central node:"),(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"HA 2 Nodes",label:"HA 2 Nodes",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource delete ms_mysql --force\npcs resource delete cbd_rrd --force\npcs resource delete php --force\npcs resource delete centreon --force\n"))),(0,n.kt)(o.Z,{value:"HA 4 Nodes",label:"HA 4 Nodes",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource delete ms_mysql --force\npcs resource delete vip_mysql --force\npcs resource delete cbd_rrd --force\npcs resource delete php --force\npcs resource delete centreon --force\n")))),(0,n.kt)("h3",{id:"restart-centreon-process"},"Restart Centreon process"),(0,n.kt)("p",null,"Then to restart all the processes on the ",(0,n.kt)("strong",{parentName:"p"},"active central node"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl restart cbd-sql cbd gorgoned centengine centreontrapd\n")),(0,n.kt)("p",null,"And on the ",(0,n.kt)("strong",{parentName:"p"},"passive central node"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl restart cbd\n")),(0,n.kt)("h3",{id:"clean-broker-memory-files"},"Clean broker memory files"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"WARNING:")," perform this command only on the ",(0,n.kt)("strong",{parentName:"p"},"passive central node"),".")),(0,n.kt)("p",null,"Before resuming cluster resource management, to avoid broker issues, clean up all the ",(0,n.kt)("em",{parentName:"p"},".memory."),", ",(0,n.kt)("em",{parentName:"p"},".unprocessed.")," or ",(0,n.kt)("em",{parentName:"p"},".queue.")," files:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf /var/lib/centreon-broker/central-broker-master.memory*\nrm -rf /var/lib/centreon-broker/central-broker-master.queue*\nrm -rf /var/lib/centreon-broker/central-broker-master.unprocessed*\n")),(0,n.kt)("h3",{id:"recreate-the-cluster-resources"},"Recreate the cluster resources"),(0,n.kt)("p",null,"To be run ",(0,n.kt)("strong",{parentName:"p"},"only on one central node"),":"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"WARNING:")," the syntax of the following command depends on the Linux distribution you are using.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"You can find the @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ @MARIADB_REPL_USER@ @MARIADB_REPL_USER@ variables in ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/centreon-ha/mysql-resources.sh"))),(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"RHEL / Oracle Linux 8",label:"RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'pcs resource create "ms_mysql" \\\n    ocf:heartbeat:mariadb-centreon \\\n    config="/etc/my.cnf.d/server.cnf" \\\n    pid="/var/lib/mysql/mysql.pid" \\\n    datadir="/var/lib/mysql" \\\n    socket="/var/lib/mysql/mysql.sock" \\\n    binary="/usr/bin/mysqld_safe" \\\n    node_list="@CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@" \\\n    replication_user="@MARIADB_REPL_USER@" \\\n    replication_passwd=\'@MARIADB_REPL_PASSWD@\' \\\n    test_user="@MARIADB_REPL_USER@" \\\n    test_passwd="@MARIADB_REPL_PASSWD@" \\\n    test_table=\'centreon.host\'\n')))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"WARNING:")," the syntax of the following command depends on the Linux distribution you are using.")),(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"HA 2 Nodes",label:"HA 2 Nodes",mdxType:"TabItem"},(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"RHEL / Oracle Linux 8",label:"RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'pcs resource promotable ms_mysql \\\n    master-node-max="1" \\\n    clone_max="2" \\\n    globally-unique="false" \\\n    clone-node-max="1" \\\n    notify="true"\n'))))),(0,n.kt)(o.Z,{value:"HA 4 Nodes",label:"HA 4 Nodes",mdxType:"TabItem"},(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"RHEL / Oracle Linux 8",label:"RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'pcs resource promotable ms_mysql \\\n    master-node-max="1" \\\n    clone_max="2" \\\n    globally-unique="false" \\\n    clone-node-max="1" \\\n    notify="true"\n')),(0,n.kt)("p",null,"VIP Address of database servers"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'pcs resource create vip_mysql \\\n    ocf:heartbeat:IPaddr2 \\\n    ip="@VIP_SQL_IPADDR@" \\\n    nic="@VIP_SQL_IFNAME@" \\\n    cidr_netmask="@VIP_SQL_CIDR_NETMASK@" \\\n    broadcast="@VIP_SQL_BROADCAST_IPADDR@" \\\n    flush_routes="true" \\\n    meta target-role="stopped" \\\n    op start interval="0s" timeout="20s" \\\n    stop interval="0s" timeout="20s" \\\n    monitor interval="10s" timeout="20s"\n')))))),(0,n.kt)("h4",{id:"php-resource"},"PHP resource"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'pcs resource create "php" \\\n    systemd:php-fpm \\\n    meta target-role="started" \\\n    op start interval="0s" timeout="30s" \\\n    stop interval="0s" timeout="30s" \\\n    monitor interval="5s" timeout="30s" \\\n    clone\n')),(0,n.kt)("h4",{id:"rrd-broker-resource"},"RRD broker resource"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'pcs resource create "cbd_rrd" \\\n    systemd:cbd \\\n    meta target-role="started" \\\n    op start interval="0s" timeout="90s" \\\n    stop interval="0s" timeout="90s" \\\n    monitor interval="20s" timeout="30s" \\\n    clone\n')),(0,n.kt)("h4",{id:"recreating-the-centreon-resource-group"},"Recreating the ",(0,n.kt)("em",{parentName:"h4"},"centreon")," resource group"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"bash centreon_pcs_command.sh\n")),(0,n.kt)("h4",{id:"recreating-the-constraint"},"Recreating the constraint"),(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"HA 2 Nodes",label:"HA 2 Nodes",mdxType:"TabItem"},(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"RHEL / Oracle Linux 8",label:"RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'pcs constraint colocation add master "ms_mysql-clone" with "centreon"\npcs constraint colocation add master "centreon" with "ms_mysql-clone"\n'))))),(0,n.kt)(o.Z,{value:"HA 4 Nodes",label:"HA 4 Nodes",mdxType:"TabItem"},(0,n.kt)("p",null,"In order to bind the primary database role to the Virtual IP, define a mutual constraint:"),(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"RHEL / Oracle Linux 8",label:"RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'pcs constraint colocation add "vip_mysql" with master "ms_mysql-clone"\npcs constraint colocation add master "ms_mysql-clone" with "vip_mysql"\n')))),(0,n.kt)("p",null,"Then recreate the constraint that prevents Centreon processes from running on database nodes and vice-versa:"),(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"RHEL / Oracle Linux 8",label:"RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pcs constraint location centreon avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY\npcs constraint location ms_mysql-clone avoids @CENTRAL_MASTER_NAME@=INFINITY @CENTRAL_SLAVE_NAME@=INFINITY\npcs constraint location cbd_rrd-clone avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY\npcs constraint location php-clone avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY\n")))))),(0,n.kt)("h2",{id:"resuming-cluster-resource-management"},"Resuming cluster resource management"),(0,n.kt)("p",null,"Now that the update is finished, the resources can be managed again:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pcs property set maintenance-mode=false\npcs resource cleanup\n")),(0,n.kt)("h2",{id:"check-the-health-of-the-cluster"},"Check the health of the cluster"),(0,n.kt)("p",null,"You can monitor the cluster's resources in real time using the ",(0,n.kt)("inlineCode",{parentName:"p"},"crm_mon -fr")," command:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"INFO:")," The ",(0,n.kt)("inlineCode",{parentName:"p"},"-fr")," option allows you to display all resources even if they are disabled.")),(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"HA 2 Nodes",label:"HA 2 Nodes",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"Stack: corosync\nCurrent DC: @CENTRAL_SLAVE_NAME@ (version 1.1.20-5.el7_7.2-3c4c782f70) - partition with quorum\nLast updated: Thu Feb 20 13:14:17 2020\nLast change: Thu Feb 20 09:25:54 2020 by root via crm_attribute on @CENTRAL_MASTER_NAME@\n\n2 nodes configured\n14 resources configured\n\nOnline: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]\n\nActive resources:\n\n Master/Slave Set: ms_mysql-master [ms_mysql]\n     Masters: [ @CENTRAL_MASTER_NAME@ ]\n     Slaves: [ @CENTRAL_SLAVE_NAME@ ]\n Clone Set: cbd_rrd-clone [cbd_rrd]\n     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]\n Resource Group: centreon\n     vip        (ocf::heartbeat:IPaddr2):   Started @CENTRAL_MASTER_NAME@\n     http   (systemd:httpd24-httpd):        Started @CENTRAL_MASTER_NAME@\n     gorgone    (systemd:gorgoned):     Started @CENTRAL_MASTER_NAME@\n     centreon_central_sync  (systemd:centreon-central-sync):        Started @CENTRAL_MASTER_NAME@\n     centreontrapd  (systemd:centreontrapd):        Started @CENTRAL_MASTER_NAME@\n     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_MASTER_NAME@\n     cbd_central_broker (systemd:cbd-sql):  Started @CENTRAL_MASTER_NAME@\n     centengine (systemd:centengine):   Started @CENTRAL_MASTER_NAME@\n Clone Set: php-clone [php]\n     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]\n"))),(0,n.kt)(o.Z,{value:"HA 4 Nodes",label:"HA 4 Nodes",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"[...]\n4 nodes configured\n21 resources configured\n\nOnline: [@CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@]\n\nActive resources:\n\n Master/Slave Set: ms_mysql-master [ms_mysql]\n     Masters: [ @DATABASE_MASTER_NAME@ ]\n     Slaves: [ @DATABASE_SLAVE_NAME@ ]\n     Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]\nvip_mysql       (ocf::heartbeat:IPaddr2):       Started @DATABASE_MASTER_NAME@\n Clone Set: php-clone [php]\n     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]\n     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]\n Clone Set: cbd_rrd-clone [cbd_rrd]\n     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]\n     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]\n Resource Group: centreon\n     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_MASTER_NAME@\n     http       (systemd:httpd24-httpd):        Started @CENTRAL_MASTER_NAME@\n     gorgone    (systemd:gorgoned):     Started @CENTRAL_MASTER_NAME@\n     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_MASTER_NAME@\n     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_MASTER_NAME@\n     centengine (systemd:centengine):   Started @CENTRAL_MASTER_NAME@\n     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_MASTER_NAME@\n     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_MASTER_NAME@\n")))),(0,n.kt)("h3",{id:"disabled-resources"},"Disabled resources"),(0,n.kt)("p",null,"When you do a ",(0,n.kt)("inlineCode",{parentName:"p"},"crm_mon -fr")," and you have a resource that is disabled:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"...\n Master/Slave Set: ms_mysql-master [ms_mysql]\n     Masters: [ @DATABASE_MASTER_NAME@ ]\n     Slaves: [ @DATABASE_SLAVE_NAME@ ]\n     Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]\nvip_mysql       (ocf::heartbeat:IPaddr2):       Stopped (disabled)\n...\n")),(0,n.kt)("p",null,"You must enable the resource with the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource enable @RESSOURCE_NAME@\n")),(0,n.kt)("p",null,"In our case:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource enable vip_mysql\n")),(0,n.kt)("h2",{id:"verifying-platform-stability"},"Verifying platform stability"),(0,n.kt)("p",null,"You should now check that everything works fine:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Access to the web UI menus."),(0,n.kt)("li",{parentName:"ul"},"Poller configuration generation + reload and restart method."),(0,n.kt)("li",{parentName:"ul"},"Schedule immediate checks (Central + Pollers) , acknowledgements, downtime, etc."),(0,n.kt)("li",{parentName:"ul"},"Move resources or reboot the active server and check again that everything is fine.")))}k.isMDXComponent=!0}}]);