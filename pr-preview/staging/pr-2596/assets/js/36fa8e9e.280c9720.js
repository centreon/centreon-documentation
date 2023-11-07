"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[86808],{92503:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"operating-guide",title:"Operating guide"},l=void 0,c={unversionedId:"administration/centreon-ha/operating-guide",id:"version-23.10/administration/centreon-ha/operating-guide",title:"Operating guide",description:"Unless otherwise stated, all commands in this document must be passed as root.",source:"@site/versioned_docs/version-23.10/administration/centreon-ha/operating-guide.md",sourceDirName:"administration/centreon-ha",slug:"/administration/centreon-ha/operating-guide",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/docs/administration/centreon-ha/operating-guide",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/administration/centreon-ha/operating-guide.md",tags:[],version:"23.10",lastUpdatedAt:1699359701,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{id:"operating-guide",title:"Operating guide"},sidebar:"version-23.10/docs",previous:{title:"Monitoring Centreon-HA",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/docs/administration/centreon-ha/monitoring-guide"},next:{title:"Troubleshooting HA",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/docs/administration/centreon-ha/troubleshooting-guide"}},u={},p=[{value:"Cluster Management",id:"cluster-management",level:2},{value:"Display cluster status",id:"display-cluster-status",level:3},{value:"View the status of a resource",id:"view-the-status-of-a-resource",level:3},{value:"View cluster configuration",id:"view-cluster-configuration",level:3},{value:"Test the configuration",id:"test-the-configuration",level:3},{value:"Save &amp; import configuration",id:"save--import-configuration",level:3},{value:"Export/import in XML format",id:"exportimport-in-xml-format",level:4},{value:"Export/import in binary format",id:"exportimport-in-binary-format",level:4},{value:"Check the &quot;switchability&quot; of a resource",id:"check-the-switchability-of-a-resource",level:3},{value:"Resource management",id:"resource-management",level:2},{value:"Switch a resource from one node to another",id:"switch-a-resource-from-one-node-to-another",level:3},{value:"Remove an error displayed in the cluster status",id:"remove-an-error-displayed-in-the-cluster-status",level:3},{value:"View cluster logs",id:"view-cluster-logs",level:3},{value:"Change the cluster log verbosity level",id:"change-the-cluster-log-verbosity-level",level:3},{value:"Management of the MariaDB resource",id:"management-of-the-mariadb-resource",level:2},{value:"Check the status of MariaDB replication",id:"check-the-status-of-mariadb-replication",level:3},{value:"Restore MariaDB master-slave replication",id:"restore-mariadb-master-slave-replication",level:3},{value:"Reverse the direction of the MariaDB master-slave replication",id:"reverse-the-direction-of-the-mariadb-master-slave-replication",level:3},{value:"Managing the Centreon resource group",id:"managing-the-centreon-resource-group",level:2},{value:"Toggle the <code>centreon</code> resource group",id:"toggle-the-centreon-resource-group",level:3},{value:"Delete a Pacemaker resource group",id:"delete-a-pacemaker-resource-group",level:3},{value:"Monitoring a Centreon-HA cluster",id:"monitoring-a-centreon-ha-cluster",level:2},{value:"System indicators and processes",id:"system-indicators-and-processes",level:3},{value:"Application monitoring",id:"application-monitoring",level:3},{value:"Cluster monitoring",id:"cluster-monitoring",level:3}],m={toc:p},d="wrapper";function h(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)(d,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Unless otherwise stated, all commands in this document must be passed as ",(0,a.kt)("inlineCode",{parentName:"p"},"root"),".")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In this document, we will refer to characteristics that are bound to change from one platform to another (such as IP addresses and host names) by the ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/docs/installation/installation-of-centreon-ha/installation-2-nodes#defining-hosts-names-and-addresses"},"macros defined here"),".")),(0,a.kt)("h2",{id:"cluster-management"},"Cluster Management"),(0,a.kt)("p",null,"The following set of commands can be run from any member of the cluster."),(0,a.kt)("h3",{id:"display-cluster-status"},"Display cluster status"),(0,a.kt)("p",null,"To view the general state of the cluster, run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"crm_mon\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'Check the "Failed actions" on the resources and troubleshoot them using the ',(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/docs/administration/centreon-ha/troubleshooting-guide"},"troubleshooting guide"),".")),(0,a.kt)("h3",{id:"view-the-status-of-a-resource"},"View the status of a resource"),(0,a.kt)("p",null,"To find out the status of a specific resource, run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource show <resource_name>\n")),(0,a.kt)("p",null,"For example, to find out the status of the ",(0,a.kt)("strong",{parentName:"p"},"centengine")," resource, run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource show centengine\n")),(0,a.kt)("h3",{id:"view-cluster-configuration"},"View cluster configuration"),(0,a.kt)("p",null,"To view the cluster configuration, run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pcs config show\n")),(0,a.kt)("h3",{id:"test-the-configuration"},"Test the configuration"),(0,a.kt)("p",null,"To test the cluster configuration, run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"crm_verify -L -V\n")),(0,a.kt)("h3",{id:"save--import-configuration"},"Save & import configuration"),(0,a.kt)("h4",{id:"exportimport-in-xml-format"},"Export/import in XML format"),(0,a.kt)("p",null,"To save the cluster configuration in XML format, run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cibadmin --query > /tmp/cluster_configuration.xml\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The following commands perform important modifications to the cluster's configuration and might break it. Use them wisely.")),(0,a.kt)("p",null,"After modifying the XML configuration file, reimport it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cibadmin --replace --xml-file /tmp/cluster_configuration.xml\n")),(0,a.kt)("p",null,"To completely reset your cluster's configuration, run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cibadmin --force --erase\n")),(0,a.kt)("h4",{id:"exportimport-in-binary-format"},"Export/import in binary format"),(0,a.kt)("p",null,"The cluster's configuration can be backed up to a binary file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pcs config backup export\n")),(0,a.kt)("p",null,"This backup can then be re-imported:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pcs config restore export.tar.bz2\n")),(0,a.kt)("h3",{id:"check-the-switchability-of-a-resource"},'Check the "switchability" of a resource'),(0,a.kt)("p",null,"To simulate the ability to toggle a resource from one node to another, run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"crm_simulate -L -s\n")),(0,a.kt)("p",null,"Then check the scores displayed."),(0,a.kt)("h2",{id:"resource-management"},"Resource management"),(0,a.kt)("h3",{id:"switch-a-resource-from-one-node-to-another"},"Switch a resource from one node to another"),(0,a.kt)("p",null,"To move a resource from the node where it is currently running to the other, run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource move <resource_name>\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Warning: the ",(0,a.kt)("inlineCode",{parentName:"p"},"pcs resource move")," adds a constraint that will prevent the resource from moving back to the node where it used to be running.")),(0,a.kt)("p",null,"Once the resource is done moving, run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource clear <resource_name>\n")),(0,a.kt)("h3",{id:"remove-an-error-displayed-in-the-cluster-status"},"Remove an error displayed in the cluster status"),(0,a.kt)("p",null,"Once the cause of the error has been identified and fixed (",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/docs/administration/centreon-ha/troubleshooting-guide"},"troubleshooting guide"),"), you must manually delete the error message:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource cleanup\n")),(0,a.kt)("p",null,"Or, if you want to remove only the errors linked to one resource:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource cleanup <resource_name>\n")),(0,a.kt)("h3",{id:"view-cluster-logs"},"View cluster logs"),(0,a.kt)("p",null,"The cluster logs are located in ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/log/cluster/corosync.log"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tailf /var/log/cluster/corosync.log\n")),(0,a.kt)("p",null,"Useful logs can also be found in ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/log/messages"),"."),(0,a.kt)("h3",{id:"change-the-cluster-log-verbosity-level"},"Change the cluster log verbosity level"),(0,a.kt)("p",null,"To change the verbosity level of the cluster logs, edit the following files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/etc/sysconfig/pacemaker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/etc/rsyslog.d/centreon-cluster.conf"))),(0,a.kt)("h2",{id:"management-of-the-mariadb-resource"},"Management of the MariaDB resource"),(0,a.kt)("p",null,"This chapter discusses the operating procedures for the ",(0,a.kt)("inlineCode",{parentName:"p"},"ms_mysql")," resource. The procedures are to be performed on the ",(0,a.kt)("inlineCode",{parentName:"p"},"@CENTRAL_MASTER_NAME@")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@CENTRAL_SLAVE_NAME@")," servers."),(0,a.kt)("h3",{id:"check-the-status-of-mariadb-replication"},"Check the status of MariaDB replication"),(0,a.kt)("p",null,"Run the following command on one of the database servers:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/share/centreon-ha/bin/mysql-check-status.sh\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Connection Status '@CENTRAL_MASTER_NAME@' [OK]\nConnection Status '@CENTRAL_SLAVE_NAME@' [OK]\nSlave Thread Status [OK]\nPosition Status [OK]\n")),(0,a.kt)("p",null,"If errors are displayed on the third or fourth line, it means that the database replication has been broken for some reason. The procedure below explains how to manually re-enable MariaDB replication."),(0,a.kt)("h3",{id:"restore-mariadb-master-slave-replication"},"Restore MariaDB master-slave replication"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This procedure should be applied in the event of a breakdown in the MariaDB databases' replication thread or a server crash if it cannot be recovered by running ",(0,a.kt)("inlineCode",{parentName:"p"},"pcs resource cleanup ms_mysql")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"pcs resource restart ms_mysql"),".")),(0,a.kt)("p",null,"Prevent the cluster from managing the MariaDB resource during the operation (to be run from any node):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource unmanage ms_mysql\n")),(0,a.kt)("p",null,"Connect to the MariaDB slave server and shut down the MariaDB service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mysqladmin -p shutdown\n")),(0,a.kt)("p",null,"Connect to the MariaDB master server and run the following command to overwrite the slave's data with the master's:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/share/centreon-ha/bin/mysql-sync-bigdb.sh\n")),(0,a.kt)("p",null,"Re-enable the cluster to manage the MariaDB resource:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource manage ms_mysql\n")),(0,a.kt)("p",null,"Run the following command on one of the database servers to make sure that the replication has been successfully restored:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/share/centreon-ha/bin/mysql-check-status.sh\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Connection Status '@CENTRAL_MASTER_NAME@' [OK]\nConnection Status '@CENTRAL_SLAVE_NAME@' [OK]\nSlave Thread Status [OK]\nPosition Status [OK]\n")),(0,a.kt)("h3",{id:"reverse-the-direction-of-the-mariadb-master-slave-replication"},"Reverse the direction of the MariaDB master-slave replication"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Before performing this operation, it is mandatory to make sure that the MariaDB replication thread ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/docs/administration/centreon-ha/operating-guide#check-the-status-of-mariadb-replication"},"is running well"),".")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Warning:")," Following this procedure on a two-node cluster installed using ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/docs/installation/installation-of-centreon-ha/installation-2-nodes"},"this procedure")," will move the ",(0,a.kt)("inlineCode",{parentName:"p"},"centreon")," resource group as well, because it ",(0,a.kt)("strong",{parentName:"p"},"must")," run on the node that has the ",(0,a.kt)("inlineCode",{parentName:"p"},"ms_mysql-master")," meta attribute.")),(0,a.kt)("p",null,"To make the resource move from one node to the other, run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource move ms_mysql-master\n")),(0,a.kt)("p",null,'This command sets an "-Inf" constraint on the node hosting the resource. As a result, the resource switches to another node. '),(0,a.kt)("p",null,"Wait until all the resources have switched to the other node and then clear the constraint:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource clear ms_mysql-master\n")),(0,a.kt)("h2",{id:"managing-the-centreon-resource-group"},"Managing the Centreon resource group"),(0,a.kt)("h3",{id:"toggle-the-centreon-resource-group"},"Toggle the ",(0,a.kt)("inlineCode",{parentName:"h3"},"centreon")," resource group"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Warning:")," As in ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/docs/administration/centreon-ha/operating-guide#reverse-the-direction-of-the-mariadb-master-slave-replication"},"this chapter"),", following this procedure on a two-node cluster installed using ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/docs/installation/installation-of-centreon-ha/installation-2-nodes"},"this procedure")," will switch the MariaDB master as well, because it ",(0,a.kt)("strong",{parentName:"p"},"must")," run on the node that has the ",(0,a.kt)("inlineCode",{parentName:"p"},"ms_mysql-master")," meta attribute.")),(0,a.kt)("p",null,"Move the resource group to the other node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource move centreon\n")),(0,a.kt)("p",null,'This command sets an "-Inf" constraint on the node hosting the resource. As a result, the resource group switches to another node. Following this manipulation, it is necessary to clear the constraint:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource clear centreon\n")),(0,a.kt)("h3",{id:"delete-a-pacemaker-resource-group"},"Delete a Pacemaker resource group"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Warning:")," These commands will prevent your Centreon cluster from working. Only do this if you know what you are doing.")),(0,a.kt)("p",null,"Connect to a cluster node and run the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource delete centreon             \\\n                cbd_central_broker       \\\n                gorgone                  \\\n                snmptrapd                \\\n                centreontrapd            \\\n                http                     \\\n                centreon_central_sync    \\\n                vip\n")),(0,a.kt)("p",null,"If that does not work, it is probably due to a resource in a failed state. Run the following commands to delete the resource:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"crm_resource --resource [resource] -D -t primitive -C\npcs resource cleanup centreon\n")),(0,a.kt)("p",null,"To create the resources again, follow the installation procedure ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/docs/installation/installation-of-centreon-ha/installation-2-nodes#creating-the-centreon-resource-group"},"from this point")),(0,a.kt)("h2",{id:"monitoring-a-centreon-ha-cluster"},"Monitoring a Centreon-HA cluster"),(0,a.kt)("p",null,"A high-availability platform is basically a LAMP platform (Linux Apache MariaDB PHP) managed by the ",(0,a.kt)("a",{parentName:"p",href:"https://clusterlabs.org/"},"ClusterLabs")," tools. The platform's monitoring must therefore include the same indicators as with any Centreon platform, and some cluster-specific ones. ",(0,a.kt)("strong",{parentName:"p"},"The monitoring of the cluster must be performed from an external poller.")),(0,a.kt)("h3",{id:"system-indicators-and-processes"},"System indicators and processes"),(0,a.kt)("p",null,"The easiest part consists in monitoring the basic system indicators, mostly using SNMP Protocol, which is made quite simple thanks to the ",(0,a.kt)("a",{parentName:"p",href:"/pp/integrations/plugin-packs/procedures/operatingsystems-linux-snmp"},"Linux Monitoring Connector"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"System metrics",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"LOAD Average"),(0,a.kt)("li",{parentName:"ul"},"CPU usage"),(0,a.kt)("li",{parentName:"ul"},"Memory usage"),(0,a.kt)("li",{parentName:"ul"},"SWAP usage"),(0,a.kt)("li",{parentName:"ul"},"File systems usage"),(0,a.kt)("li",{parentName:"ul"},"Networking traffic"),(0,a.kt)("li",{parentName:"ul"},"NTP synchronization with the reference time server"))),(0,a.kt)("li",{parentName:"ul"},"Processes",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"System processes ",(0,a.kt)("inlineCode",{parentName:"li"},"crond"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ntpd"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"rsyslogd")),(0,a.kt)("li",{parentName:"ul"},"Centreon processes ",(0,a.kt)("inlineCode",{parentName:"li"},"gorgoned"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"centengine"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"centreontrapd"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"httpd24-httpd"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"snmptrapd"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"mysqld"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"php-fpm"))))),(0,a.kt)("h3",{id:"application-monitoring"},"Application monitoring"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Control access to the URL ",(0,a.kt)("inlineCode",{parentName:"li"},"http://@VIP_IPADDR@/centreon")," using the ",(0,a.kt)("a",{parentName:"li",href:"/pp/integrations/plugin-packs/procedures/applications-protocol-http"},"HTTP Protocol Monitoring Connector")),(0,a.kt)("li",{parentName:"ul"},"MariaDB, using the ",(0,a.kt)("a",{parentName:"li",href:"/pp/integrations/plugin-packs/procedures/applications-databases-mysql"},"MySQL/MariaDB Database Monitoring Connector"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"MariaDB Server Connection Control"),(0,a.kt)("li",{parentName:"ul"},"MariaDB / InnoDB buffers and caches"),(0,a.kt)("li",{parentName:"ul"},"Index usage"),(0,a.kt)("li",{parentName:"ul"},"MariaDB replication")))),(0,a.kt)("h3",{id:"cluster-monitoring"},"Cluster monitoring"),(0,a.kt)("p",null,"The cluster-specific health checks can be monitored using the ",(0,a.kt)("a",{parentName:"p",href:"/pp/integrations/plugin-packs/procedures/applications-pacemaker-ssh"},"Pacemaker Monitoring Connector"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Resource constraints: only for ",(0,a.kt)("inlineCode",{parentName:"li"},"ms_mysql")," and  ",(0,a.kt)("inlineCode",{parentName:"li"},"centreon")," resources"),(0,a.kt)("li",{parentName:"ul"},"Failed actions")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: a Monitoring Connector dedicated to Centreon-HA might be released in the future to make this easier.")))}h.isMDXComponent=!0}}]);