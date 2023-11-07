"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[34156],{83874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>p,metadata:()=>u,toc:()=>m});n(67294);var r=n(3905),a=n(51715),s=n(7626);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={id:"upgrade-centreon-ha-from-21-04",title:"Upgrade Centreon HA from Centreon 21.04"},i=void 0,u={unversionedId:"upgrade/centreon-ha/upgrade-centreon-ha-from-21-04",id:"version-23.10/upgrade/centreon-ha/upgrade-centreon-ha-from-21-04",title:"Upgrade Centreon HA from Centreon 21.04",description:"This chapter describes how to upgrade your Centreon HA platform from version 21.04",source:"@site/versioned_docs/version-23.10/upgrade/centreon-ha/upgrade-from-21-04.md",sourceDirName:"upgrade/centreon-ha",slug:"/upgrade/centreon-ha/upgrade-centreon-ha-from-21-04",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/docs/upgrade/centreon-ha/upgrade-centreon-ha-from-21-04",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/upgrade/centreon-ha/upgrade-from-21-04.md",tags:[],version:"23.10",lastUpdatedAt:1699359701,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{id:"upgrade-centreon-ha-from-21-04",title:"Upgrade Centreon HA from Centreon 21.04"},sidebar:"version-23.10/docs",previous:{title:"Updating Centreon-HA platform",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/docs/update/update-centreon-ha"},next:{title:"Upgrade Centreon HA from Centreon 21.10",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/docs/upgrade/centreon-ha/upgrade-centreon-ha-from-21-10"}},d={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Suspend cluster resources management",id:"suspend-cluster-resources-management",level:3},{value:"Perform a backup",id:"perform-a-backup",level:3},{value:"Update the RPM signing key",id:"update-the-rpm-signing-key",level:3},{value:"Upgrade process",id:"upgrade-process",level:2},{value:"Removing cron jobs",id:"removing-cron-jobs",level:3},{value:"Reset the permissions for centreon_central_sync resource",id:"reset-the-permissions-for-centreon_central_sync-resource",level:3},{value:"Cluster upgrade",id:"cluster-upgrade",level:2},{value:"Maintenance mode and backup",id:"maintenance-mode-and-backup",level:3},{value:"Delete the resources",id:"delete-the-resources",level:3},{value:"Reconfigure MariaDB",id:"reconfigure-mariadb",level:3},{value:"Launch GTID replication",id:"launch-gtid-replication",level:3},{value:"Restart Centreon process",id:"restart-centreon-process",level:3},{value:"Clean broker memory files",id:"clean-broker-memory-files",level:3},{value:"Recreate the cluster resources",id:"recreate-the-cluster-resources",level:3},{value:"PHP resource",id:"php-resource",level:4},{value:"RRD broker resource",id:"rrd-broker-resource",level:4},{value:"Recreating the <em>centreon</em> resource group",id:"recreating-the-centreon-resource-group",level:4},{value:"Recreating the constraint",id:"recreating-the-constraint",level:4},{value:"Resuming cluster resource management",id:"resuming-cluster-resource-management",level:2},{value:"Check the health of the cluster",id:"check-the-health-of-the-cluster",level:2},{value:"Disabled resources",id:"disabled-resources",level:3},{value:"Verifying platform stability",id:"verifying-platform-stability",level:2}],h={toc:m},g="wrapper";function k(e){var{components:t}=e,n=c(e,["components"]);return(0,r.kt)(g,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This chapter describes how to upgrade your Centreon HA platform from version 21.04\nto version 23.04."),(0,r.kt)("p",null,"You cannot simply upgrade a platform with Centreon HA (or Centreon Failover) from a version earlier than 21.04 to version 23.04, as CentOS 7 is no longer supported. You need to ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/docs/migrate/introduction"},"migrate your platform to a supported OS"),", then install Centreon HA on the new platform. You can also contact Centreon to order a migration service."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"suspend-cluster-resources-management"},"Suspend cluster resources management"),(0,r.kt)("p",null,"In order to avoid a failover of the cluster during the update, it is necessary to unmanage all Centreon resources, as well as MariaDB."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pcs property set maintenance-mode=true\n")),(0,r.kt)("h3",{id:"perform-a-backup"},"Perform a backup"),(0,r.kt)("p",null,"Be sure that you have fully backed up your environment for the following\nservers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Central server"),(0,r.kt)("li",{parentName:"ul"},"Database server")),(0,r.kt)("h3",{id:"update-the-rpm-signing-key"},"Update the RPM signing key"),(0,r.kt)("p",null,"For security reasons, the keys used to sign Centreon RPMs are rotated regularly. The last change occurred on October 14, 2021. When upgrading from an older version, you need to go through the ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/docs/security/key-rotation#existing-installation"},"key rotation procedure"),", to remove the old key and install the new one."),(0,r.kt)("h2",{id:"upgrade-process"},"Upgrade process"),(0,r.kt)("p",null,"To perform the upgrade, please ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/docs/upgrade/upgrade-from-21-04"},"follow the official documentation")," only on the ",(0,r.kt)("strong",{parentName:"p"},"active central node")," and ",(0,r.kt)("strong",{parentName:"p"},"active database node if needed"),"."),(0,r.kt)("p",null,"Then perform the following commands only on the Central Servers:"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"RHEL 8 / Oracle Linux 8",label:"RHEL 8 / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mv /etc/centreon-ha/centreon_central_sync.pm.rpmsave /etc/centreon-ha/centreon_central_sync.pm\n")))),(0,r.kt)("p",null,'On the passive central node, move the "install" directory to avoid getting the "upgrade" screen in the WUI in the event of a further exchange of roles.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mv /usr/share/centreon/www/install /var/lib/centreon/installs/install-update-YYYY-MM-DD\nsudo -u apache /usr/share/centreon/bin/console cache:clear\n")),(0,r.kt)("h3",{id:"removing-cron-jobs"},"Removing cron jobs"),(0,r.kt)("p",null,"The RPM upgrade puts cron jobs back in place on the central and database servers. Remove them to avoid concurrent executions: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf /etc/cron.d/centreon\nrm -rf /etc/cron.d/centstorage\nrm -f /etc/cron.d/centreon-ha-mysql\n")),(0,r.kt)("p",null,"As you have deleted the ",(0,r.kt)("strong",{parentName:"p"},"centreon-ha-mysql")," cron, check that the following line appears in the ",(0,r.kt)("strong",{parentName:"p"},"server")," section of the ",(0,r.kt)("strong",{parentName:"p"},"/etc/my.cnf.d/server.cnf")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"expire_logs_days=7\n")),(0,r.kt)("p",null,"If the line is not there, add it, then restart the ",(0,r.kt)("strong",{parentName:"p"},"ms_mysql")," resource:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pcs resource restart ms_mysql\n")),(0,r.kt)("h3",{id:"reset-the-permissions-for-centreon_central_sync-resource"},"Reset the permissions for centreon_central_sync resource"),(0,r.kt)("p",null,"The RPM upgrade puts the permissions back in place on the ",(0,r.kt)("strong",{parentName:"p"},"central servers"),". Change them using these commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'chmod 775 /var/log/centreon-engine/\nmkdir /var/log/centreon-engine/archives\nchown centreon-engine: /var/log/centreon-engine/archives\nchmod 775 /var/log/centreon-engine/archives/\nfind /var/log/centreon-engine/ -type f -exec chmod 664 {} \\;\nfind /usr/share/centreon/www/img/media -type d -exec chmod 775 {} \\;\nfind /usr/share/centreon/www/img/media -type f \\( ! -iname ".keep" ! -iname ".htaccess" \\) -exec chmod 664 {} \\;\n')),(0,r.kt)("h2",{id:"cluster-upgrade"},"Cluster upgrade"),(0,r.kt)("p",null,"From Centreon 22.04, MariaDB Replication is based on ",(0,r.kt)("a",{parentName:"p",href:"https://mariadb.com/kb/en/gtid/"},"GTID"),".\nIt is necessary to destroy the cluster completely and then reconfigure it with\nthe latest version of the Centreon and MariaDB Replication mechanisms."),(0,r.kt)("h3",{id:"maintenance-mode-and-backup"},"Maintenance mode and backup"),(0,r.kt)("p",null,"Perform a backup of the cluster using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pcs config backup centreon_cluster\npcs config export pcs-commands | sed -e :a -e '/\\\\$/N; s/\\\\\\n//; ta' | sed 's/-f tmp-cib.xml//' | egrep \"create|group\" | egrep -v \"(mysql|php|cbd_rrd)\" > centreon_pcs_command.sh\n")),(0,r.kt)("p",null,"Check that the file ",(0,r.kt)("inlineCode",{parentName:"p"},"centreon_cluster.tar.bz2")," exists before continuing this procedure."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ls -l centreon_cluster.tar.bz2\n")),(0,r.kt)("p",null,"You should have a result like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"-rw------- 1 root root 2777 May  3 17:49 centreon_cluster.tar.bz2\n")),(0,r.kt)("p",null,"Then check the file centreon_pcs_command.sh. The export command may display some warning lines, but this is not blocking."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat centreon_pcs_command.sh\n")),(0,r.kt)("p",null,"The content should looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"pcs resource create vip ocf:heartbeat:IPaddr2 broadcast=@VIP_BROADCAST_IPADDR@ cidr_netmask=@VIP_CIDR_NETMASK@ flush_routes=true ip=@VIP_IPADDR@ nic=@VIP_IFNAME@ op monitor interval=10s timeout=20s start interval=0s timeout=20s stop interval=0s timeout=20s meta target-role=started\npcs resource create http systemd:httpd24-httpd op monitor interval=5s timeout=20s start interval=0s timeout=40s stop interval=0s timeout=40s meta target-role=started\npcs resource create gorgone systemd:gorgoned op monitor interval=5s timeout=20s start interval=0s timeout=90s stop interval=0s timeout=90s meta target-role=started\npcs resource create centreon_central_sync systemd:centreon-central-sync op monitor interval=5s timeout=20s start interval=0s timeout=90s stop interval=0s timeout=90s meta target-role=started\npcs resource create cbd_central_broker systemd:cbd-sql op monitor interval=5s timeout=30s start interval=0s timeout=90s stop interval=0s timeout=90s meta target-role=started\npcs resource create centengine systemd:centengine op monitor interval=5s timeout=30s start interval=0s timeout=90s stop interval=0s timeout=90s meta multiple-active=stop_start target-role=started\npcs resource create centreontrapd systemd:centreontrapd op monitor interval=5s timeout=20s start interval=0s timeout=30s stop interval=0s timeout=30s meta target-role=started\npcs resource create snmptrapd systemd:snmptrapd op monitor interval=5s timeout=20s start interval=0s timeout=30s stop interval=0s timeout=30s meta target-role=started\npcs resource group add centreon vip http gorgone centreon_central_sync cbd_central_broker centengine centreontrapd snmptrapd\n")),(0,r.kt)("p",null,"This file will be necessary to recreate all the resources of your cluster."),(0,r.kt)("h3",{id:"delete-the-resources"},"Delete the resources"),(0,r.kt)("p",null,"These commands should run only on the active central node:"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"HA 2 Nodes",label:"HA 2 Nodes",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource delete ms_mysql --force\npcs resource delete cbd_rrd --force\npcs resource delete php7 --force\npcs resource delete centreon --force\n"))),(0,r.kt)(s.Z,{value:"HA 4 Nodes",label:"HA 4 Nodes",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource delete ms_mysql --force\npcs resource delete vip_mysql --force\npcs resource delete cbd_rrd --force\npcs resource delete php7 --force\npcs resource delete centreon --force\n")))),(0,r.kt)("h3",{id:"reconfigure-mariadb"},"Reconfigure MariaDB"),(0,r.kt)("p",null,"It is necessary to modify the mysql configuration by editing the file ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/my.cnf.d/server.cnf"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"On the 2 Central servers in HA 2 nodes\nOn the 2 Database servers in HA 4 nodes.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"[server]\n...\nskip-slave-start\nlog-slave-updates\ngtid_strict_mode=ON\nexpire_logs_days=7\nignore-db-dir=lost+found\n...\n")),(0,r.kt)("h3",{id:"launch-gtid-replication"},"Launch GTID replication"),(0,r.kt)("p",null,"Run this command ",(0,r.kt)("strong",{parentName:"p"},"on the secondary database node"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mysqladmin -p shutdown\n")),(0,r.kt)("p",null,"It is important to make sure that MariaDB is completely shut down. Run this command and check that it returns no output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ps -ef | grep mariadb[d]\n")),(0,r.kt)("p",null,"Once the service is stopped ",(0,r.kt)("strong",{parentName:"p"},"on the secondary database node"),", run the synchronization script ",(0,r.kt)("strong",{parentName:"p"},"from the primary database node"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mysqladmin -p shutdown\nsystemctl restart mariadb\n/usr/share/centreon-ha/bin/mysql-sync-bigdb.sh\n")),(0,r.kt)("p",null,"This script's output is very verbose and you can't expect to understand everything, so to make sure it went well, focus on the last lines of its output, checking that it looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'Umount and Delete LVM snapshot\n  Logical volume "dbbackupdatadir" successfully removed\nStart MySQL Slave\nStart Replication\nId  User    Host    db  Command Time    State   Info    Progress\n[variable number of lines]\n')),(0,r.kt)("p",null,"The important thing to check is that ",(0,r.kt)("inlineCode",{parentName:"p"},"Start MySQL Slave")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Start Replication")," are present and are not followed by any errors."),(0,r.kt)("p",null,"In addition, the output of this command must display only ",(0,r.kt)("inlineCode",{parentName:"p"},"OK")," results:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/share/centreon-ha/bin/mysql-check-status.sh\n")),(0,r.kt)("p",null,"The expected output is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Connection Status '@CENTRAL_MASTER_NAME@' [OK]\nConnection Status '@CENTRAL_SLAVE_NAME@' [OK]\nSlave Thread Status [OK]\nPosition Status [OK]\n")),(0,r.kt)("h3",{id:"restart-centreon-process"},"Restart Centreon process"),(0,r.kt)("p",null,"Then to restart all the processes on the ",(0,r.kt)("strong",{parentName:"p"},"active central node"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl restart cbd-sql cbd gorgoned centengine centreontrapd\n")),(0,r.kt)("p",null,"And on the ",(0,r.kt)("strong",{parentName:"p"},"passive central node"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl restart cbd\n")),(0,r.kt)("h3",{id:"clean-broker-memory-files"},"Clean broker memory files"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"WARNING:")," perform this command only on the ",(0,r.kt)("strong",{parentName:"p"},"passive central node"),".")),(0,r.kt)("p",null,"Before resuming cluster resource management, to avoid broker issues, clean up all the ",(0,r.kt)("em",{parentName:"p"},".memory."),", ",(0,r.kt)("em",{parentName:"p"},".unprocessed.")," or ",(0,r.kt)("em",{parentName:"p"},".queue.")," files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf /var/lib/centreon-broker/central-broker-master.memory*\nrm -rf /var/lib/centreon-broker/central-broker-master.queue*\nrm -rf /var/lib/centreon-broker/central-broker-master.unprocessed*\n")),(0,r.kt)("h3",{id:"recreate-the-cluster-resources"},"Recreate the cluster resources"),(0,r.kt)("p",null,"To be run ",(0,r.kt)("strong",{parentName:"p"},"only on one central node"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"WARNING:")," the syntax of the following command depends on the Linux Distribution you are using.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can find @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ @MARIADB_REPL_USER@\n@MARIADB_REPL_USER@ variable in ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/centreon-ha/mysql-resources.sh"),".")),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"RHEL 8 / Oracle Linux 8",label:"RHEL 8 / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pcs resource create "ms_mysql" \\\n    ocf:heartbeat:mariadb-centreon \\\n    config="/etc/my.cnf.d/server.cnf" \\\n    pid="/var/lib/mysql/mysql.pid" \\\n    datadir="/var/lib/mysql" \\\n    socket="/var/lib/mysql/mysql.sock" \\\n    binary="/usr/bin/mysqld_safe" \\\n    node_list="@CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@" \\\n    replication_user="@MARIADB_REPL_USER@" \\\n    replication_passwd=\'@MARIADB_REPL_PASSWD@\' \\\n    test_user="@MARIADB_REPL_USER@" \\\n    test_passwd="@MARIADB_REPL_PASSWD@" \\\n    test_table=\'centreon.host\'\n')))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"WARNING:")," the syntax of the following command depends on the Linux Distribution you are using.")),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"HA 2 Nodes",label:"HA 2 Nodes",mdxType:"TabItem"},(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"RHEL 8 / Oracle Linux 8",label:"RHEL 8 / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pcs resource promotable ms_mysql \\\n    master-node-max="1" \\\n    clone_max="2" \\\n    globally-unique="false" \\\n    clone-node-max="1" \\\n    notify="true"\n'))))),(0,r.kt)(s.Z,{value:"HA 4 Nodes",label:"HA 4 Nodes",mdxType:"TabItem"},(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"RHEL 8 / Oracle Linux 8",label:"RHEL 8 / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pcs resource promotable ms_mysql \\\n    master-node-max="1" \\\n    clone_max="2" \\\n    globally-unique="false" \\\n    clone-node-max="1" \\\n    notify="true"\n')),(0,r.kt)("p",null,"VIP Address of database servers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pcs resource create vip_mysql \\\n    ocf:heartbeat:IPaddr2 \\\n    ip="@VIP_SQL_IPADDR@" \\\n    nic="@VIP_SQL_IFNAME@" \\\n    cidr_netmask="@VIP_SQL_CIDR_NETMASK@" \\\n    broadcast="@VIP_SQL_BROADCAST_IPADDR@" \\\n    flush_routes="true" \\\n    meta target-role="stopped" \\\n    op start interval="0s" timeout="20s" \\\n    stop interval="0s" timeout="20s" \\\n    monitor interval="10s" timeout="20s"\n')))))),(0,r.kt)("h4",{id:"php-resource"},"PHP resource"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pcs resource create "php" \\\n    systemd:php-fpm \\\n    meta target-role="started" \\\n    op start interval="0s" timeout="30s" \\\n    stop interval="0s" timeout="30s" \\\n    monitor interval="5s" timeout="30s" \\\n    clone\n')),(0,r.kt)("h4",{id:"rrd-broker-resource"},"RRD broker resource"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pcs resource create "cbd_rrd" \\\n    systemd:cbd \\\n    meta target-role="started" \\\n    op start interval="0s" timeout="90s" \\\n    stop interval="0s" timeout="90s" \\\n    monitor interval="20s" timeout="30s" \\\n    clone\n')),(0,r.kt)("h4",{id:"recreating-the-centreon-resource-group"},"Recreating the ",(0,r.kt)("em",{parentName:"h4"},"centreon")," resource group"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bash centreon_pcs_command.sh\n")),(0,r.kt)("h4",{id:"recreating-the-constraint"},"Recreating the constraint"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"HA 2 Nodes",label:"HA 2 Nodes",mdxType:"TabItem"},(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"RHEL 8 / Oracle Linux 8",label:"RHEL 8 / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pcs constraint colocation add master "ms_mysql-clone" with "centreon"\npcs constraint order stop centreon then demote ms_mysql-clone\n'))))),(0,r.kt)(s.Z,{value:"HA 4 Nodes",label:"HA 4 Nodes",mdxType:"TabItem"},(0,r.kt)("p",null,"In order to bind the primary database role to the Virtual IP, define a mutual constraint:"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"RHEL 8 / Oracle Linux 8",label:"RHEL 8 / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pcs constraint colocation add "vip_mysql" with master "ms_mysql-clone"\npcs constraint colocation add master "ms_mysql-clone" with "vip_mysql"\n')))),(0,r.kt)("p",null,"Then recreate the constraint that prevents Centreon processes from running on database nodes and vice-versa:"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"RHEL 8 / Oracle Linux 8",label:"RHEL 8 / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pcs constraint location centreon avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY\npcs constraint location ms_mysql-clone avoids @CENTRAL_MASTER_NAME@=INFINITY @CENTRAL_SLAVE_NAME@=INFINITY\npcs constraint location cbd_rrd-clone avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY\npcs constraint location php-clone avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY\n")))))),(0,r.kt)("h2",{id:"resuming-cluster-resource-management"},"Resuming cluster resource management"),(0,r.kt)("p",null,"Now that the update is finished, the resources can be managed again:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pcs property set maintenance-mode=false\npcs resource cleanup\n")),(0,r.kt)("h2",{id:"check-the-health-of-the-cluster"},"Check the health of the cluster"),(0,r.kt)("p",null,"You can monitor the cluster's resources in real time using the ",(0,r.kt)("inlineCode",{parentName:"p"},"crm_mon -fr")," command:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"INFO:")," The ",(0,r.kt)("inlineCode",{parentName:"p"},"-fr")," option allows you to display all resources even if they are disabled.")),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"HA 2 Nodes",label:"HA 2 Nodes",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Stack: corosync\nCurrent DC: @CENTRAL_SLAVE_NAME@ (version 1.1.20-5.el7_7.2-3c4c782f70) - partition with quorum\nLast updated: Thu Feb 20 13:14:17 2020\nLast change: Thu Feb 20 09:25:54 2020 by root via crm_attribute on @CENTRAL_MASTER_NAME@\n\n2 nodes configured\n14 resources configured\n\nOnline: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]\n\nActive resources:\n\n Master/Slave Set: ms_mysql-master [ms_mysql]\n     Masters: [ @CENTRAL_MASTER_NAME@ ]\n     Slaves: [ @CENTRAL_SLAVE_NAME@ ]\n Clone Set: cbd_rrd-clone [cbd_rrd]\n     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]\n Resource Group: centreon\n     vip        (ocf::heartbeat:IPaddr2):   Started @CENTRAL_MASTER_NAME@\n     http   (systemd:httpd24-httpd):        Started @CENTRAL_MASTER_NAME@\n     gorgone    (systemd:gorgoned):     Started @CENTRAL_MASTER_NAME@\n     centreon_central_sync  (systemd:centreon-central-sync):        Started @CENTRAL_MASTER_NAME@\n     centreontrapd  (systemd:centreontrapd):        Started @CENTRAL_MASTER_NAME@\n     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_MASTER_NAME@\n     cbd_central_broker (systemd:cbd-sql):  Started @CENTRAL_MASTER_NAME@\n     centengine (systemd:centengine):   Started @CENTRAL_MASTER_NAME@\n Clone Set: php-clone [php]\n     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]\n"))),(0,r.kt)(s.Z,{value:"HA 4 Nodes",label:"HA 4 Nodes",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"[...]\n4 nodes configured\n21 resources configured\n\nOnline: [@CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@]\n\nActive resources:\n\n Master/Slave Set: ms_mysql-master [ms_mysql]\n     Masters: [ @DATABASE_MASTER_NAME@ ]\n     Slaves: [ @DATABASE_SLAVE_NAME@ ]\n     Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]\nvip_mysql       (ocf::heartbeat:IPaddr2):       Started @DATABASE_MASTER_NAME@\n Clone Set: php-clone [php]\n     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]\n     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]\n Clone Set: cbd_rrd-clone [cbd_rrd]\n     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]\n     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]\n Resource Group: centreon\n     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_MASTER_NAME@\n     http       (systemd:httpd24-httpd):        Started @CENTRAL_MASTER_NAME@\n     gorgone    (systemd:gorgoned):     Started @CENTRAL_MASTER_NAME@\n     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_MASTER_NAME@\n     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_MASTER_NAME@\n     centengine (systemd:centengine):   Started @CENTRAL_MASTER_NAME@\n     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_MASTER_NAME@\n     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_MASTER_NAME@\n")))),(0,r.kt)("h3",{id:"disabled-resources"},"Disabled resources"),(0,r.kt)("p",null,"When you do a ",(0,r.kt)("inlineCode",{parentName:"p"},"crm_mon -fr")," and you have a resource that is disabled:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"...\n Master/Slave Set: ms_mysql-master [ms_mysql]\n     Masters: [ @DATABASE_MASTER_NAME@ ]\n     Slaves: [ @DATABASE_SLAVE_NAME@ ]\n     Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]\nvip_mysql       (ocf::heartbeat:IPaddr2):       Stopped (disabled)\n...\n")),(0,r.kt)("p",null,"You must enable the resource with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource enable @RESSOURCE_NAME@\n")),(0,r.kt)("p",null,"In our case:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource enable vip_mysql\n")),(0,r.kt)("h2",{id:"verifying-platform-stability"},"Verifying platform stability"),(0,r.kt)("p",null,"You should now check that everything works fine:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Access to the web UI menus."),(0,r.kt)("li",{parentName:"ul"},"Poller configuration generation + reload and restart method."),(0,r.kt)("li",{parentName:"ul"},"Schedule immediate checks (Central + Pollers) , acknowledgements, downtime, etc."),(0,r.kt)("li",{parentName:"ul"},"Move resources or reboot the active server and check again that everything is fine.")))}k.isMDXComponent=!0}}]);