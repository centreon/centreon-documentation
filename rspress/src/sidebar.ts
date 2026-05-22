import type { Sidebar } from '@rspress/shared';

export const sidebar: Sidebar = {
  "/": [
    {
      "text": "Getting started with Centreon Infra Monitoring OnPrem",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Before you start",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Which installation should I choose?",
              "link": "/getting-started/which-install"
            },
            {
              "text": "Elements of a Centreon platform",
              "link": "/getting-started/platform"
            },
            {
              "text": "Set up your free IT-100 solution",
              "link": "/getting-started/IT100"
            }
          ]
        },
        {
          "text": "First steps with Centreon",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Discover the Centreon web interface",
              "link": "/getting-started/interface"
            },
            {
              "text": "Monitoring basics",
              "link": "/getting-started/concepts"
            }
          ]
        },
        {
          "text": "Setting up the monitoring",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Prerequisites",
              "link": "/getting-started/first-supervision"
            },
            {
              "text": "Monitor your first Linux host",
              "link": "/getting-started/monitor-linux-server-with-snmp"
            },
            {
              "text": "Monitor your first Windows host",
              "link": "/getting-started/monitor-windows-server-with-snmp"
            },
            {
              "text": "Monitor your first Cisco router",
              "link": "/getting-started/monitor-cisco-router-with-snmp"
            },
            {
              "text": "Monitor Mysql Server",
              "link": "/getting-started/monitor-mysql-server"
            },
            {
              "text": "Use Autodiscovery to monitor AWS EC2 instances",
              "link": "/getting-started/autodisco-aws"
            },
            {
              "text": "Monitor Printer Snmp",
              "link": "/getting-started/monitor-printer-snmp"
            },
            {
              "text": "Monitor Ups Snmp",
              "link": "/getting-started/monitor-ups-snmp"
            }
          ]
        },
        {
          "text": "Monitoring resources in real time",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "What actions can you take?",
              "link": "/getting-started/actions"
            },
            {
              "text": "Creating your first dashboard",
              "link": "/getting-started/create-dashboard"
            }
          ]
        },
        {
          "text": "Tutorials for Business modules",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Create a graphical view",
              "link": "/getting-started/create-graphical-view"
            },
            {
              "text": "Model your IT services",
              "link": "/getting-started/model-it-services"
            },
            {
              "text": "Analyze resources availability",
              "link": "/getting-started/analyze-resources-availability"
            }
          ]
        }
      ],
      "link": "/getting-started/welcome"
    },
    {
      "text": "Installation",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Introduction",
          "link": "/installation/introduction"
        },
        {
          "text": "Compatibility",
          "link": "/installation/compatibility"
        },
        {
          "text": "Architectures",
          "link": "/installation/architectures"
        },
        {
          "text": "Inside Centreon",
          "link": "/installation/inside-centreon"
        },
        {
          "text": "Prerequisites",
          "link": "/installation/prerequisites"
        },
        {
          "text": "Technical information",
          "link": "/installation/technical"
        },
        {
          "text": "Download",
          "link": "/installation/download"
        },
        {
          "text": "Installation of a Central server",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Using packages",
              "link": "/installation/installation-of-a-central-server/using-packages"
            },
            {
              "text": "Unattended Install Central",
              "link": "/installation/installation-of-a-central-server/unattended-install-central"
            },
            {
              "text": "Using a virtual machine (VM)",
              "link": "/installation/installation-of-a-central-server/using-virtual-machines"
            }
          ]
        },
        {
          "text": "Web And Post Installation",
          "link": "/installation/web-and-post-installation"
        },
        {
          "text": "Installation of a Poller",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Using packages",
              "link": "/installation/installation-of-a-poller/using-packages"
            },
            {
              "text": "Unattended Install Poller",
              "link": "/installation/installation-of-a-poller/unattended-install-poller"
            }
          ]
        },
        {
          "text": "Installation of a Remote server",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Using packages",
              "link": "/installation/installation-of-a-remote-server/using-packages"
            },
            {
              "text": "Unattended Install Remote",
              "link": "/installation/installation-of-a-remote-server/unattended-install-remote"
            }
          ]
        },
        {
          "text": "Configuring monitoring servers",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Attach a poller to a central or a remote server",
              "link": "/monitoring/monitoring-servers/add-a-poller-to-configuration"
            },
            {
              "text": "Attach a remote server to a central server",
              "link": "/monitoring/monitoring-servers/add-a-remote-server-to-configuration"
            },
            {
              "text": "Communications",
              "link": "/monitoring/monitoring-servers/communications"
            },
            {
              "text": "Attach a poller to a different remote server",
              "link": "/monitoring/monitoring-servers/move-poller"
            },
            {
              "text": "Advanced configuration",
              "link": "/monitoring/monitoring-servers/advanced-configuration"
            }
          ]
        },
        {
          "text": "Offline installation",
          "link": "/installation/offline"
        }
      ]
    },
    {
      "text": "Secure your platform",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Secure your platform",
          "link": "/administration/secure-platform"
        },
        {
          "text": "Secure your MAP platform",
          "link": "/graph-views/secure-your-map-platform"
        }
      ]
    },
    {
      "text": "Monitoring resources",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Monitoring basics",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Basic principles of monitoring",
              "link": "/monitoring/about"
            },
            {
              "text": "Understanding metrics",
              "link": "/monitoring/metrics"
            },
            {
              "text": "Monitoring Connectors",
              "link": "/monitoring/pluginpacks"
            },
            {
              "text": "Deploying a configuration",
              "link": "/monitoring/monitoring-servers/deploying-a-configuration"
            }
          ]
        },
        {
          "text": "Monitoring hosts",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Monitoring a host",
              "link": "/monitoring/basic-objects/hosts-create"
            },
            {
              "text": "Creating hosts manually",
              "link": "/monitoring/basic-objects/hosts"
            },
            {
              "text": "Creating hosts automatically",
              "link": "/monitoring/basic-objects/hosts-create-disco"
            },
            {
              "text": "Using host templates",
              "link": "/monitoring/basic-objects/hosts-templates"
            },
            {
              "text": "Change the monitoring server for a host",
              "link": "/monitoring/basic-objects/hosts-switch-poller"
            }
          ]
        },
        {
          "text": "Monitoring services",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Monitoring a service",
              "link": "/monitoring/basic-objects/services-create"
            },
            {
              "text": "Creating services manually",
              "link": "/monitoring/basic-objects/services"
            },
            {
              "text": "Creating services automatically",
              "link": "/monitoring/basic-objects/services-create-disco"
            },
            {
              "text": "Using service templates",
              "link": "/monitoring/basic-objects/services-templates"
            },
            {
              "text": "Creating Meta Services",
              "link": "/monitoring/basic-objects/meta-services"
            }
          ]
        },
        {
          "text": "Discovering hosts and services automatically",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Introduction",
              "link": "/monitoring/discovery/introduction"
            },
            {
              "text": "Installation",
              "link": "/monitoring/discovery/installation"
            },
            {
              "text": "Discovering hosts automatically",
              "link": "/monitoring/discovery/hosts-discovery"
            },
            {
              "text": "Discovering services automatically",
              "link": "/monitoring/discovery/services-discovery"
            },
            {
              "text": "Administration",
              "link": "/monitoring/discovery/administration"
            },
            {
              "text": "Troubleshooting host discovery issues",
              "link": "/monitoring/discovery/troubleshooting-hosts-discovery"
            }
          ]
        },
        {
          "text": "Organizing hosts and services",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Groups",
              "link": "/monitoring/groups"
            },
            {
              "text": "Categories and severities",
              "link": "/monitoring/categories"
            }
          ]
        },
        {
          "text": "Basic objects and actions",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Time periods",
              "link": "/monitoring/basic-objects/timeperiods"
            },
            {
              "text": "Macros",
              "link": "/monitoring/basic-objects/macros"
            },
            {
              "text": "Commands",
              "link": "/monitoring/basic-objects/commands"
            },
            {
              "text": "Generic actions",
              "link": "/monitoring/generic-actions"
            }
          ]
        },
        {
          "text": "Detecting anomalies",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Anomaly detection",
              "link": "/monitoring/anomaly-detection"
            }
          ]
        },
        {
          "text": "Passive Monitoring",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Enable SNMP Traps",
              "link": "/monitoring/passive-monitoring/enable-snmp-traps"
            },
            {
              "text": "Create SNMP Traps definitions",
              "link": "/monitoring/passive-monitoring/create-snmp-traps-definitions"
            },
            {
              "text": "Monitoring with SNMP Traps",
              "link": "/monitoring/passive-monitoring/monitoring-with-snmp-traps"
            },
            {
              "text": "Debug SNMP Traps management",
              "link": "/monitoring/passive-monitoring/debug-snmp-traps-management"
            },
            {
              "text": "Dynamic Service Management",
              "link": "/monitoring/passive-monitoring/dsm"
            }
          ]
        },
        {
          "text": "Auto Remediation",
          "link": "/monitoring/event-handler"
        },
        {
          "text": "Import/Export",
          "link": "/monitoring/web-import-export"
        }
      ]
    },
    {
      "text": "Managing events and alerts",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Viewing events",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Possible statuses of a resource",
              "link": "/alerts-notifications/concepts"
            },
            {
              "text": "Resources Status page",
              "link": "/alerts-notifications/resources-status"
            },
            {
              "text": "Event consoles",
              "link": "/alerts-notifications/event-console"
            },
            {
              "text": "Event Logs",
              "link": "/alerts-notifications/event-log"
            }
          ]
        },
        {
          "text": "Managing alerts",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Acknowledging an alert",
              "link": "/alerts-notifications/acknowledge"
            },
            {
              "text": "Planning downtime",
              "link": "/alerts-notifications/downtimes"
            },
            {
              "text": "Submitting a status",
              "link": "/alerts-notifications/submit"
            },
            {
              "text": "Other actions",
              "link": "/alerts-notifications/other"
            }
          ]
        },
        {
          "text": "Managing notifications",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "How notifications work",
              "link": "/alerts-notifications/notif-concept"
            },
            {
              "text": "Configuring notifications",
              "link": "/alerts-notifications/notif-configuration"
            },
            {
              "text": "Types of notifications",
              "collapsible": true,
              "collapsed": true,
              "items": [
                {
                  "text": "Email notifications",
                  "link": "/alerts-notifications/notif-email"
                },
                {
                  "text": "Microsoft Teams notifications",
                  "link": "/alerts-notifications/notif-config-for-teams"
                },
                {
                  "text": "Sms Notifications",
                  "link": "/integrations/notifications/sms-notifications"
                },
                {
                  "text": "Slack Notifications",
                  "link": "/integrations/notifications/slack-notifications"
                },
                {
                  "text": "Telegram notifications",
                  "link": "/integrations/notifications/plugin-telegram"
                }
              ]
            },
            {
              "text": "Dependencies",
              "link": "/alerts-notifications/notif-dependencies"
            },
            {
              "text": "Escalation",
              "link": "/alerts-notifications/notif-escalation"
            },
            {
              "text": "Flapping",
              "link": "/alerts-notifications/notif-flapping"
            },
            {
              "text": "To go further",
              "link": "/alerts-notifications/notif-advanced"
            }
          ]
        },
        {
          "text": "Managing tickets",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Installing Open Tickets",
              "link": "/alerts-notifications/ticketing-install"
            },
            {
              "text": "Configuring Open Tickets",
              "link": "/alerts-notifications/ticketing"
            }
          ]
        }
      ]
    },
    {
      "text": "Managing Centreon users",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Contacts/Users",
          "link": "/monitoring/basic-objects/contacts"
        },
        {
          "text": "Creating contacts/users manually",
          "link": "/monitoring/basic-objects/contacts-create"
        },
        {
          "text": "Using contact templates",
          "link": "/monitoring/basic-objects/contacts-templates"
        },
        {
          "text": "Using contact groups",
          "link": "/monitoring/basic-objects/contacts-groups"
        },
        {
          "text": "Granting rights to Centreon users (ACL)",
          "link": "/administration/access-control-lists"
        },
        {
          "text": "Changing your Centreon account's settings",
          "link": "/monitoring/basic-objects/customization"
        }
      ]
    },
    {
      "text": "Service Mapping",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Introduction to Centreon BAM",
          "link": "/service-mapping/introduction"
        },
        {
          "text": "Guide",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Manage Business Activities",
              "link": "/service-mapping/ba-management"
            },
            {
              "text": "Monitor Business Activities",
              "link": "/service-mapping/ba-monitoring"
            },
            {
              "text": "Report Business Activities",
              "link": "/service-mapping/ba-reporting"
            },
            {
              "text": "Settings",
              "link": "/service-mapping/ba-settings"
            },
            {
              "text": "Widgets",
              "link": "/service-mapping/widgets"
            }
          ]
        },
        {
          "text": "Administrate",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Install the Centreon BAM extension",
              "link": "/service-mapping/install"
            },
            {
              "text": "Update the extension",
              "link": "/service-mapping/update"
            },
            {
              "text": "Upgrade the extension",
              "link": "/service-mapping/upgrade"
            },
            {
              "text": "Install on a Remote Server",
              "link": "/service-mapping/remote-server"
            }
          ]
        }
      ]
    },
    {
      "text": "Data Visualization",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Dashboards",
          "link": "/alerts-notifications/dashboards"
        },
        {
          "text": "Performance graphs",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Chart management",
              "link": "/metrology/chart-management"
            },
            {
              "text": "Chart Template",
              "link": "/metrology/chart-template"
            },
            {
              "text": "Chart Curves",
              "link": "/metrology/chart-curves"
            },
            {
              "text": "Chart Virtual Metrics",
              "link": "/metrology/chart-virtual-metrics"
            },
            {
              "text": "Viewing Centreon data in Grafana",
              "link": "/metrology/grafana"
            }
          ]
        },
        {
          "text": "Graphical views (maps)",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Introduction to Centreon MAP",
              "link": "/graph-views/introduction-map"
            },
            {
              "text": "Information for MAP Legacy users",
              "collapsible": true,
              "collapsed": true,
              "items": [
                {
                  "text": "MAP Legacy end of life",
                  "link": "/graph-views/map-legacy-eol"
                },
                {
                  "text": "Upgrading MAP Legacy to version 24.10",
                  "link": "/graph-views/upgrading-map-legacy"
                },
                {
                  "text": "Switching from MAP (Legacy) to MAP",
                  "link": "/graph-views/import-into-map-web"
                }
              ]
            },
            {
              "text": "Installing MAP",
              "link": "/graph-views/map-web-install"
            },
            {
              "text": "Installing MAP on a remote server",
              "link": "/graph-views/map-web-install-remote"
            },
            {
              "text": "Updating MAP",
              "link": "/graph-views/map-web-update"
            },
            {
              "text": "Upgrading MAP",
              "link": "/graph-views/map-web-upgrade"
            },
            {
              "text": "Managing access rights in MAP",
              "link": "/graph-views/map-web-access"
            },
            {
              "text": "Managing maps in MAP",
              "link": "/graph-views/map-web-manage"
            },
            {
              "text": "Creating a standard map",
              "link": "/graph-views/map-web-create-standard-map"
            },
            {
              "text": "Creating a geographic view",
              "link": "/graph-views/map-web-create-geoview"
            },
            {
              "text": "Migrating the extension",
              "link": "/graph-views/map-web-migrate"
            },
            {
              "text": "Advanced configuration in MAP",
              "link": "/graph-views/map-web-advanced-configuration"
            },
            {
              "text": "Advanced parameters in MAP",
              "link": "/graph-views/map-web-advanced"
            },
            {
              "text": "Backing up and restoring your MAP server",
              "link": "/graph-views/map-web-backup-restore"
            },
            {
              "text": "MAP known issues",
              "link": "/graph-views/map-web-known-issues"
            },
            {
              "text": "MAP troubleshooting",
              "link": "/graph-views/map-web-troubleshooting"
            },
            {
              "text": "Map Api",
              "link": "/api/map-api"
            }
          ]
        },
        {
          "text": "Custom views (legacy)",
          "link": "/alerts-notifications/custom-views"
        },
        {
          "text": "Availability reports",
          "link": "/alerts-notifications/availability"
        }
      ]
    },
    {
      "text": "Reporting (MBI)",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Introduction to MBI",
          "link": "/reporting/introduction"
        },
        {
          "text": "MBI concepts",
          "link": "/reporting/concepts"
        },
        {
          "text": "How does MBI work?",
          "link": "/reporting/how-mbi-works"
        },
        {
          "text": "Installing MBI",
          "link": "/reporting/installation"
        },
        {
          "text": "Using MBI",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Preparing data for report generation",
              "link": "/reporting/preparing-data"
            },
            {
              "text": "Generating reports using jobs",
              "link": "/reporting/generating-reports"
            },
            {
              "text": "Publishing your reports",
              "link": "/reporting/reports-publication-rule"
            },
            {
              "text": "Giving access to jobs and reports in Centreon",
              "link": "/reporting/share"
            },
            {
              "text": "MBI Widgets",
              "link": "/reporting/widgets"
            }
          ]
        },
        {
          "text": "Fixing MBI issues",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Troubleshooting MBI",
              "link": "/reporting/troubleshooting"
            },
            {
              "text": "Rebuilding MBI data",
              "link": "/reporting/rebuilding-data"
            }
          ]
        },
        {
          "text": "MBI administration",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Backing up and restoring MBI",
              "link": "/reporting/backup-restore"
            },
            {
              "text": "Update the extension",
              "link": "/reporting/update"
            },
            {
              "text": "Upgrade the extension",
              "link": "/reporting/upgrade"
            },
            {
              "text": "Migrate the extension",
              "link": "/reporting/migrate"
            },
            {
              "text": "Creating custom reports",
              "link": "/reporting/report-development"
            }
          ]
        },
        {
          "text": "Available reports",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Business Activity Monitoring reports",
              "link": "/reporting/available-reports/ba-monitoring-reports"
            },
            {
              "text": "Availability and Events reports",
              "link": "/reporting/available-reports/availability-events-reports"
            },
            {
              "text": "Performance reports",
              "link": "/reporting/available-reports/performance-reports"
            },
            {
              "text": "Storage reports",
              "link": "/reporting/available-reports/storage-reports"
            },
            {
              "text": "Network reports",
              "link": "/reporting/available-reports/network-reports"
            },
            {
              "text": "Virtualization reports",
              "link": "/reporting/available-reports/virtualization-reports"
            },
            {
              "text": "Electric consumption reports",
              "link": "/reporting/available-reports/electric-consumption-reports"
            },
            {
              "text": "Profiling reports",
              "link": "/reporting/available-reports/profiling-reports"
            },
            {
              "text": "Inventory and Configuration reports",
              "link": "/reporting/available-reports/inventory-configuration-reports"
            },
            {
              "text": "Database diagnostics reports",
              "link": "/reporting/available-reports/database-diagnostics-reports"
            }
          ],
          "link": "/reporting/available-reports/available-reports"
        }
      ]
    },
    {
      "text": "Administration",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Parameters",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Centreon UI",
              "link": "/administration/parameters/centreon-ui"
            },
            {
              "text": "Monitoring",
              "link": "/administration/parameters/monitoring"
            },
            {
              "text": "Gorgone",
              "link": "/administration/parameters/gorgone"
            },
            {
              "text": "RRDTool",
              "link": "/administration/parameters/rrdtool"
            },
            {
              "text": "Debug",
              "link": "/administration/parameters/debug"
            },
            {
              "text": "Data management",
              "link": "/administration/parameters/data-management"
            },
            {
              "text": "Media",
              "link": "/administration/parameters/medias"
            }
          ]
        },
        {
          "text": "Customize Centreon",
          "link": "/administration/customize-centreon"
        },
        {
          "text": "Configuring the connection to Centreon",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Configuring a local authentication",
              "link": "/connect/loginpwd"
            },
            {
              "text": "Connecting Centreon to an LDAP directory",
              "link": "/administration/parameters/ldap"
            },
            {
              "text": "Configuring a Web SSO connection",
              "link": "/connect/sso"
            },
            {
              "text": "Configuring connection via OpenId Connect",
              "link": "/connect/openid"
            },
            {
              "text": "Configuring connection via SAML",
              "link": "/connect/saml"
            },
            {
              "text": "Configuring Autologin",
              "link": "/connect/autologin"
            }
          ]
        },
        {
          "text": "Extensions",
          "link": "/administration/extensions"
        },
        {
          "text": "Licenses",
          "link": "/administration/licenses"
        },
        {
          "text": "Database partitioning",
          "link": "/administration/database-partitioning"
        },
        {
          "text": "Disaster recovery",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Back up and restore your central server",
              "link": "/administration/backup"
            },
            {
              "text": "Back up and restore your pollers",
              "link": "/administration/backup-poller"
            }
          ],
          "link": "/administration/disaster-recovery"
        },
        {
          "text": "Knowledge Base",
          "link": "/administration/knowledge-base"
        },
        {
          "text": "Logging configuration changes",
          "link": "/administration/logging-configuration-changes"
        },
        {
          "text": "Platform statistics",
          "link": "/administration/platform-statistics"
        },
        {
          "text": "Configuring your Centreon to send emails",
          "link": "/administration/postfix"
        },
        {
          "text": "Optimizing database traffic",
          "link": "/administration/sql-proxy"
        }
      ]
    },
    {
      "text": "Update, Upgrade & Migrate",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Update",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Update a Centreon 25.10 platform",
              "link": "/update/update-centreon-platform"
            }
          ]
        },
        {
          "text": "Upgrade",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Introduction to upgrade",
              "link": "/upgrade/introduction"
            },
            {
              "text": "Upgrade from Centreon 24.10",
              "link": "/upgrade/upgrade-from-24-10"
            },
            {
              "text": "Upgrade from Centreon 24.04",
              "link": "/upgrade/upgrade-from-24-04"
            },
            {
              "text": "Upgrade from Centreon 23.10",
              "link": "/upgrade/upgrade-from-23-10"
            },
            {
              "text": "Upgrade from Centreon 23.04",
              "link": "/upgrade/upgrade-from-23-04"
            },
            {
              "text": "Upgrade from Centreon 22.10",
              "link": "/upgrade/upgrade-from-22-10"
            },
            {
              "text": "Upgrade from Centreon 22.04",
              "link": "/upgrade/upgrade-from-22-04"
            },
            {
              "text": "Upgrade from Centreon 21.10",
              "link": "/upgrade/upgrade-from-21-10"
            },
            {
              "text": "Upgrade from Centreon 21.04",
              "link": "/upgrade/upgrade-from-21-04"
            },
            {
              "text": "Upgrade from Centreon 20.10",
              "link": "/upgrade/upgrade-from-20-10"
            },
            {
              "text": "Upgrading MariaDB",
              "link": "/upgrade/upgrade-mariadb"
            },
            {
              "text": "Upgrading MySQL",
              "link": "/upgrade/upgrade-mysql"
            }
          ]
        },
        {
          "text": "Migrate",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Introduction to the migration process",
              "link": "/migrate/introduction"
            },
            {
              "text": "Migrate from an EL-type OS to another EL-type OS (from a Centreon 18.10 or newer)",
              "link": "/migrate/migrate-from-el-to-el"
            },
            {
              "text": "Migrate from an EL-type OS to Debian",
              "link": "/migrate/migrate-from-el-to-debian"
            },
            {
              "text": "Migrate from Debian 11 to Debian 12",
              "link": "/migrate/migrate-from-debian-to-debian"
            },
            {
              "text": "Migrate from a Centreon 3.4 platform",
              "link": "/migrate/migrate-from-3-4"
            },
            {
              "text": "Nagios Reader to Centreon CLAPI",
              "link": "/migrate/nagios-to-centreon"
            },
            {
              "text": "Migrate a platform with Poller Display module",
              "link": "/migrate/poller-display-to-remote-server"
            },
            {
              "text": "Developer Gorgone Migrate From Centcore",
              "link": "/developer/developer-gorgone-migrate-from-centcore"
            }
          ]
        }
      ]
    },
    {
      "text": "Centreon Monitoring Agent",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Introduction to CMA",
          "link": "/cma/cma"
        },
        {
          "text": "Setting up the agent's environment",
          "link": "/cma/cma-setup"
        },
        {
          "text": "Configuring certificates",
          "link": "/cma/cma-certificates"
        },
        {
          "text": "Using custom plugins with CMA",
          "link": "/cma/cma-custom"
        },
        {
          "text": "Centreon Monitoring Agent - Migrate from NSClient++",
          "link": "/cma/cma-migratenscpp"
        },
        {
          "text": "Troubleshooting CMA",
          "link": "/cma/cma-troubleshooting"
        }
      ]
    },
    {
      "text": "Integrations",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Stream connectors",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Stream connectors release notes",
              "link": "/integrations/stream-connectors-rn"
            },
            {
              "text": "Sc Hp Bsm",
              "link": "/integrations/event-management/sc-hp-bsm"
            },
            {
              "text": "Canopsis Events",
              "link": "/integrations/data-analytics/sc-canopsis-events"
            },
            {
              "text": "Clickhouse",
              "link": "/integrations/data-analytics/sc-clickhouse"
            },
            {
              "text": "Datadog Events",
              "link": "/integrations/data-analytics/sc-datadog-events"
            },
            {
              "text": "Datadog Metrics",
              "link": "/integrations/data-analytics/sc-datadog-metrics"
            },
            {
              "text": "Elastic Events",
              "link": "/integrations/data-analytics/sc-elastic-events"
            },
            {
              "text": "Sc Elastic Metrics",
              "link": "/integrations/data-analytics/sc-elastic-metrics"
            },
            {
              "text": "HP OMI",
              "link": "/integrations/event-management/sc-hp-omi"
            },
            {
              "text": "InfluxDB 2 Metrics",
              "link": "/integrations/data-analytics/sc-influxdb2-metrics"
            },
            {
              "text": "Kafka Event Manager",
              "link": "/integrations/data-analytics/sc-kafka-events"
            },
            {
              "text": "Logstash Events",
              "link": "/integrations/data-analytics/sc-logstash-events"
            },
            {
              "text": "Sc Opsgenie Events",
              "link": "/integrations/event-management/sc-opsgenie-events"
            },
            {
              "text": "PagerDuty Events",
              "link": "/integrations/event-management/sc-pagerduty-events"
            },
            {
              "text": "ServiceNow Event Manager Events",
              "link": "/integrations/event-management/sc-service-now-em-events"
            },
            {
              "text": "ServiceNow Incident",
              "link": "/integrations/event-management/sc-service-now-incident-events"
            },
            {
              "text": "Signl4 Events",
              "link": "/integrations/event-management/sc-signl4-events"
            },
            {
              "text": "Splunk Events",
              "link": "/integrations/data-analytics/sc-splunk-events"
            },
            {
              "text": "Splunk Metrics",
              "link": "/integrations/data-analytics/sc-splunk-metrics"
            },
            {
              "text": "Warp10",
              "link": "/integrations/data-analytics/sc-warp10"
            }
          ],
          "link": "/integrations/stream-connectors"
        },
        {
          "text": "ITSM",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "BMC Footprints",
              "link": "/integrations/itsm/ot-bmc-footprints"
            },
            {
              "text": "BMC Remedy",
              "link": "/integrations/itsm/ot-bmc-remedy"
            },
            {
              "text": "EasyVista API SOAP",
              "link": "/integrations/itsm/ot-easyvista"
            },
            {
              "text": "EasyVista RestAPI",
              "link": "/integrations/itsm/ot-easyvista-rest-api"
            },
            {
              "text": "GLPI",
              "link": "/integrations/itsm/ot-glpi"
            },
            {
              "text": "Ot Glpi Restapi",
              "link": "/integrations/itsm/ot-glpi-restapi"
            },
            {
              "text": "iTop",
              "link": "/integrations/itsm/ot-itop"
            },
            {
              "text": "Jira",
              "link": "/integrations/itsm/ot-jira"
            },
            {
              "text": "Mail",
              "link": "/integrations/itsm/ot-mail"
            },
            {
              "text": "Ot Otrs Restapi",
              "link": "/integrations/itsm/ot-otrs-restapi"
            },
            {
              "text": "Ot Request Tracker Restapi",
              "link": "/integrations/itsm/ot-request-tracker-restapi"
            },
            {
              "text": "Serena",
              "link": "/integrations/itsm/ot-serena"
            },
            {
              "text": "Ot Servicenow",
              "link": "/integrations/itsm/ot-servicenow"
            }
          ],
          "link": "/integrations/itsm/itsm-overview"
        },
        {
          "text": "NPM",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Widget NtopNG",
              "link": "/integrations/npm/ntopng"
            }
          ]
        }
      ],
      "link": "/integrations/introduction-integrations"
    },
    {
      "text": "Centreon mobile",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Introduction",
          "link": "/mobile/introduction"
        }
      ]
    },
    {
      "text": "API",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Introduction",
          "link": "/api/introduction"
        },
        {
          "text": "Command Line API (v1) - CLAPI",
          "link": "/api/clapi"
        },
        {
          "text": "Rest API (v1)",
          "link": "/api/rest-api-v1"
        },
        {
          "text": "Using the v2 API with Postman",
          "link": "/api/rest-api-v2"
        },
        {
          "text": "Map Api",
          "link": "/api/map-api"
        },
        {
          "text": "API tokens",
          "link": "/api/api-tokens"
        }
      ]
    },
    {
      "text": "Developer resources",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Developer Stream Connector",
          "link": "/developer/developer-stream-connector"
        },
        {
          "text": "Developer Broker Stream Connector Migration",
          "link": "/developer/developer-broker-stream-connector-migration"
        },
        {
          "text": "Developer Widget",
          "link": "/developer/developer-widget"
        },
        {
          "text": "Mcp Server",
          "link": "/developer/mcp-server"
        },
        {
          "text": "Centreon Broker",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Developer Broker Stream Connector",
              "link": "/developer/developer-broker-stream-connector"
            },
            {
              "text": "The BBDO protocol",
              "link": "/developer/developer-broker-bbdo"
            },
            {
              "text": "Switching versions of BBDO",
              "link": "/developer/developer-broker-bbdo-switch-versions"
            },
            {
              "text": "Centreon Broker Event Mapping",
              "link": "/developer/developer-broker-mapping"
            }
          ],
          "link": "/developer/centreon-broker"
        },
        {
          "text": "Centreon Gorgone",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Developer Gorgone Client Server Communication",
              "link": "/developer/developer-gorgone-client-server-communication"
            },
            {
              "text": "Developer Gorgone Pull Mode",
              "link": "/developer/developer-gorgone-pull-mode"
            },
            {
              "text": "Developer Gorgone Rebound Mode",
              "link": "/developer/developer-gorgone-rebound-mode"
            }
          ],
          "link": "/developer/centreon-gorgone"
        }
      ]
    },
    {
      "text": "Centreon HA",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Ha Faq",
          "link": "/installation/installation-of-centreon-ha/ha-faq"
        },
        {
          "text": "Elements of a Centreon HA cluster",
          "link": "/installation/installation-of-centreon-ha/cluster-elements"
        },
        {
          "text": "How Centreon HA works",
          "link": "/installation/installation-of-centreon-ha/overview"
        },
        {
          "text": "Ha Prerequisites",
          "link": "/installation/installation-of-centreon-ha/ha-prerequisites"
        },
        {
          "text": "Centreon HA for small infrastuctures",
          "link": "/installation/installation-of-centreon-ha/ha-small"
        },
        {
          "text": "Completing your Centreon HA setup",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Integrating new pollers in a Centreon HA cluster",
              "link": "/installation/installation-of-centreon-ha/integrating-pollers"
            },
            {
              "text": "Monitoring Centreon HA",
              "link": "/administration/centreon-ha/monitoring-guide"
            }
          ]
        },
        {
          "text": "Operating Centreon HA",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Operating guide",
              "link": "/administration/centreon-ha/operating-guide"
            },
            {
              "text": "Troubleshooting HA",
              "link": "/administration/centreon-ha/troubleshooting-guide"
            }
          ]
        },
        {
          "text": "Updating Centreon HA",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Updating a Centreon HA platform",
              "link": "/update/update-centreon-ha"
            }
          ]
        },
        {
          "text": "Upgrading Centreon HA",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Upgrade Centreon Ha From 24 10",
              "link": "/upgrade/centreon-ha/upgrade-centreon-ha-from-24-10"
            },
            {
              "text": "Upgrade Centreon Ha From 24 04",
              "link": "/upgrade/centreon-ha/upgrade-centreon-ha-from-24-04"
            },
            {
              "text": "Upgrade Centreon Ha From 23 10",
              "link": "/upgrade/centreon-ha/upgrade-centreon-ha-from-23-10"
            },
            {
              "text": "Upgrade Centreon Ha From 23 04",
              "link": "/upgrade/centreon-ha/upgrade-centreon-ha-from-23-04"
            },
            {
              "text": "Upgrade Centreon Ha From 22 10",
              "link": "/upgrade/centreon-ha/upgrade-centreon-ha-from-22-10"
            },
            {
              "text": "Upgrade Centreon Ha From 22 04",
              "link": "/upgrade/centreon-ha/upgrade-centreon-ha-from-22-04"
            },
            {
              "text": "Upgrade Centreon Ha From 21 10",
              "link": "/upgrade/centreon-ha/upgrade-centreon-ha-from-21-10"
            },
            {
              "text": "Upgrade Centreon Ha From 21 04",
              "link": "/upgrade/centreon-ha/upgrade-centreon-ha-from-21-04"
            }
          ]
        }
      ],
      "link": "/installation/installation-of-centreon-ha/centreon-ha"
    },
    {
      "text": "Releases",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Release notes for Centreon 26.10",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Centreon Os",
              "link": "/releases/centreon-os"
            },
            {
              "text": "Centreon Commercial Extensions",
              "link": "/releases/centreon-commercial-extensions"
            }
          ],
          "link": "/releases/introduction"
        },
        {
          "text": "Product lifecycle policy",
          "link": "/releases/lifecycle"
        }
      ]
    },
    {
      "text": "Security",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Centreon and Security",
          "link": "/security/security"
        },
        {
          "text": "Rotating keys",
          "link": "/security/key-rotation"
        },
        {
          "text": "User data storage",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "GDPR compliance",
              "link": "/security/user-data-storage/gdpr-compliance"
            },
            {
              "text": "What is Centreon CEIP?",
              "link": "/security/user-data-storage/what-is-centreon-ceip"
            }
          ]
        }
      ]
    },
    {
      "text": "Resources",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Known issues",
          "link": "/resources/known-issues"
        },
        {
          "text": "Troubleshooting your Centreon platform",
          "link": "/resources/troubleshooting"
        },
        {
          "text": "List of Centreon logs",
          "link": "/resources/logs"
        },
        {
          "text": "Glossary of Centreon concepts",
          "link": "/resources/glossary"
        },
        {
          "text": "Contributing to the Centreon documentation",
          "link": "/resources/contribute"
        }
      ]
    }
  ],
  "/fr/": [
    {
      "text": "Getting started with Centreon Infra Monitoring OnPrem",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Avant de commencer",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Quelle installation choisir ?",
              "link": "/fr/getting-started/which-install"
            },
            {
              "text": "Éléments d'une plateforme Centreon",
              "link": "/fr/getting-started/platform"
            },
            {
              "text": "Mettre en place sa solution gratuite IT-100",
              "link": "/fr/getting-started/IT100"
            }
          ]
        },
        {
          "text": "Premiers pas avec Centreon",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Découvrir l'interface web Centreon",
              "link": "/fr/getting-started/interface"
            },
            {
              "text": "Bases de la supervision",
              "link": "/fr/getting-started/concepts"
            }
          ]
        },
        {
          "text": "Mettre des ressources en supervision",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Prérequis",
              "link": "/fr/getting-started/first-supervision"
            },
            {
              "text": "Superviser votre premier serveur Linux",
              "link": "/fr/getting-started/monitor-linux-server-with-snmp"
            },
            {
              "text": "Superviser votre premier serveur Windows",
              "link": "/fr/getting-started/monitor-windows-server-with-snmp"
            },
            {
              "text": "Superviser votre premier routeur Cisco",
              "link": "/fr/getting-started/monitor-cisco-router-with-snmp"
            },
            {
              "text": "Monitor Mysql Server",
              "link": "/fr/getting-started/monitor-mysql-server"
            },
            {
              "text": "Utiliser Autodiscovery pour découvrir des instances AWS EC2",
              "link": "/fr/getting-started/autodisco-aws"
            },
            {
              "text": "Monitor Printer Snmp",
              "link": "/fr/getting-started/monitor-printer-snmp"
            },
            {
              "text": "Monitor Ups Snmp",
              "link": "/fr/getting-started/monitor-ups-snmp"
            }
          ]
        },
        {
          "text": "Superviser les ressources en temps réel",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Quelles actions effectuer pour superviser?",
              "link": "/fr/getting-started/actions"
            },
            {
              "text": "Créer votre premier tableau de bord",
              "link": "/fr/getting-started/create-dashboard"
            }
          ]
        },
        {
          "text": "Tutoriels des modules Business",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Créer une vue graphique",
              "link": "/fr/getting-started/create-graphical-view"
            },
            {
              "text": "Modéliser un service IT",
              "link": "/fr/getting-started/model-it-services"
            },
            {
              "text": "Analyser la disponibilité des ressources",
              "link": "/fr/getting-started/analyze-resources-availability"
            }
          ]
        }
      ],
      "link": "/fr/getting-started/welcome"
    },
    {
      "text": "Installation",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Introduction",
          "link": "/fr/installation/introduction"
        },
        {
          "text": "Compatibilité",
          "link": "/fr/installation/compatibility"
        },
        {
          "text": "Architectures",
          "link": "/fr/installation/architectures"
        },
        {
          "text": "À l'intérieur de Centreon",
          "link": "/fr/installation/inside-centreon"
        },
        {
          "text": "Prérequis",
          "link": "/fr/installation/prerequisites"
        },
        {
          "text": "Informations techniques",
          "link": "/fr/installation/technical"
        },
        {
          "text": "Téléchargements",
          "link": "/fr/installation/download"
        },
        {
          "text": "Installer un serveur central",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "À partir des paquets",
              "link": "/fr/installation/installation-of-a-central-server/using-packages"
            },
            {
              "text": "Unattended Install Central",
              "link": "/fr/installation/installation-of-a-central-server/unattended-install-central"
            },
            {
              "text": "À partir d'une VM",
              "link": "/fr/installation/installation-of-a-central-server/using-virtual-machines"
            }
          ]
        },
        {
          "text": "Installation Web",
          "link": "/fr/installation/web-and-post-installation"
        },
        {
          "text": "Installer un collecteur",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "À partir des paquets",
              "link": "/fr/installation/installation-of-a-poller/using-packages"
            },
            {
              "text": "Unattended Install Poller",
              "link": "/fr/installation/installation-of-a-poller/unattended-install-poller"
            }
          ]
        },
        {
          "text": "Installer un serveur distant",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "À partir des paquets",
              "link": "/fr/installation/installation-of-a-remote-server/using-packages"
            },
            {
              "text": "Unattended Install Remote",
              "link": "/fr/installation/installation-of-a-remote-server/unattended-install-remote"
            }
          ]
        },
        {
          "text": "Configurer les serveurs de supervision",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Rattacher un collecteur à un serveur central ou distant",
              "link": "/fr/monitoring/monitoring-servers/add-a-poller-to-configuration"
            },
            {
              "text": "Rattacher un serveur distant à un serveur central",
              "link": "/fr/monitoring/monitoring-servers/add-a-remote-server-to-configuration"
            },
            {
              "text": "Communications",
              "link": "/fr/monitoring/monitoring-servers/communications"
            },
            {
              "text": "Rattacher un collecteur à un serveur distant différent",
              "link": "/fr/monitoring/monitoring-servers/move-poller"
            },
            {
              "text": "Configuration avancée",
              "link": "/fr/monitoring/monitoring-servers/advanced-configuration"
            }
          ]
        },
        {
          "text": "Installation offline",
          "link": "/fr/installation/offline"
        }
      ]
    },
    {
      "text": "Sécuriser la plateforme",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Sécurisez votre plateforme",
          "link": "/fr/administration/secure-platform"
        },
        {
          "text": "Sécurisez votre plateforme MAP",
          "link": "/fr/graph-views/secure-your-map-platform"
        }
      ]
    },
    {
      "text": "Superviser des ressources",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Bases de la supervision",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Principes de base de la supervision",
              "link": "/fr/monitoring/about"
            },
            {
              "text": "Comprendre les métriques",
              "link": "/fr/monitoring/metrics"
            },
            {
              "text": "Utiliser des connecteurs de supervision",
              "link": "/fr/monitoring/pluginpacks"
            },
            {
              "text": "Déployer une configuration",
              "link": "/fr/monitoring/monitoring-servers/deploying-a-configuration"
            }
          ]
        },
        {
          "text": "Superviser des hôtes",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Mettre un hôte en supervision",
              "link": "/fr/monitoring/basic-objects/hosts-create"
            },
            {
              "text": "Créer un hôte manuellement",
              "link": "/fr/monitoring/basic-objects/hosts"
            },
            {
              "text": "Créer des hôtes automatiquement",
              "link": "/fr/monitoring/basic-objects/hosts-create-disco"
            },
            {
              "text": "Utiliser des modèles d'hôtes",
              "link": "/fr/monitoring/basic-objects/hosts-templates"
            },
            {
              "text": "Modifier le serveur de supervision pour un hôte",
              "link": "/fr/monitoring/basic-objects/hosts-switch-poller"
            }
          ]
        },
        {
          "text": "Superviser des services",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Mettre un service en supervision",
              "link": "/fr/monitoring/basic-objects/services-create"
            },
            {
              "text": "Créer un service manuellement",
              "link": "/fr/monitoring/basic-objects/services"
            },
            {
              "text": "Créer des services automatiquement",
              "link": "/fr/monitoring/basic-objects/services-create-disco"
            },
            {
              "text": "Utiliser des modèles de services",
              "link": "/fr/monitoring/basic-objects/services-templates"
            },
            {
              "text": "Créer des méta-services",
              "link": "/fr/monitoring/basic-objects/meta-services"
            }
          ]
        },
        {
          "text": "Auto-découverte d'hôtes et de services",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Introduction",
              "link": "/fr/monitoring/discovery/introduction"
            },
            {
              "text": "Installation",
              "link": "/fr/monitoring/discovery/installation"
            },
            {
              "text": "Découvrir des hôtes automatiquement",
              "link": "/fr/monitoring/discovery/hosts-discovery"
            },
            {
              "text": "Découvrir des services automatiquement",
              "link": "/fr/monitoring/discovery/services-discovery"
            },
            {
              "text": "Administration",
              "link": "/fr/monitoring/discovery/administration"
            },
            {
              "text": "Dépanner les incidents sur la découverte des hôtes",
              "link": "/fr/monitoring/discovery/troubleshooting-hosts-discovery"
            }
          ]
        },
        {
          "text": "Organiser hôtes et services",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Groupes",
              "link": "/fr/monitoring/groups"
            },
            {
              "text": "Catégories et criticités",
              "link": "/fr/monitoring/categories"
            }
          ]
        },
        {
          "text": "Objets et actions de base",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Les périodes temporelles",
              "link": "/fr/monitoring/basic-objects/timeperiods"
            },
            {
              "text": "Les macros",
              "link": "/fr/monitoring/basic-objects/macros"
            },
            {
              "text": "Les commandes",
              "link": "/fr/monitoring/basic-objects/commands"
            },
            {
              "text": "Actions génériques",
              "link": "/fr/monitoring/generic-actions"
            }
          ]
        },
        {
          "text": "Détecter des anomalies",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Anomaly Detection",
              "link": "/fr/monitoring/anomaly-detection"
            }
          ]
        },
        {
          "text": "Supervision Passive",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Activer les Traps SNMP",
              "link": "/fr/monitoring/passive-monitoring/enable-snmp-traps"
            },
            {
              "text": "Définition des Traps SNMP",
              "link": "/fr/monitoring/passive-monitoring/create-snmp-traps-definitions"
            },
            {
              "text": "Monitoring SNMP Traps",
              "link": "/fr/monitoring/passive-monitoring/monitoring-with-snmp-traps"
            },
            {
              "text": "Déboguer la gestion des traps SNMP",
              "link": "/fr/monitoring/passive-monitoring/debug-snmp-traps-management"
            },
            {
              "text": "Dynamic Service Management",
              "link": "/fr/monitoring/passive-monitoring/dsm"
            }
          ]
        },
        {
          "text": "Auto Remediation",
          "link": "/fr/monitoring/event-handler"
        },
        {
          "text": "Import/Export",
          "link": "/fr/monitoring/web-import-export"
        }
      ]
    },
    {
      "text": "Gérer évènements et alertes",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Visualiser les évènements",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Statuts possibles d'une ressource",
              "link": "/fr/alerts-notifications/concepts"
            },
            {
              "text": "Page Statut des ressources",
              "link": "/fr/alerts-notifications/resources-status"
            },
            {
              "text": "Consoles d'évènements",
              "link": "/fr/alerts-notifications/event-console"
            },
            {
              "text": "Journal des évènements",
              "link": "/fr/alerts-notifications/event-log"
            }
          ]
        },
        {
          "text": "Gérer les alertes",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Acquitter une alerte",
              "link": "/fr/alerts-notifications/acknowledge"
            },
            {
              "text": "Planifier un temps d'arrêt",
              "link": "/fr/alerts-notifications/downtimes"
            },
            {
              "text": "Soumettre un résultat",
              "link": "/fr/alerts-notifications/submit"
            },
            {
              "text": "Autres actions",
              "link": "/fr/alerts-notifications/other"
            }
          ]
        },
        {
          "text": "Gérer les notifications",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Fonctionnement des notifications",
              "link": "/fr/alerts-notifications/notif-concept"
            },
            {
              "text": "Configurer les notifications",
              "link": "/fr/alerts-notifications/notif-configuration"
            },
            {
              "text": "Types de notifications",
              "collapsible": true,
              "collapsed": true,
              "items": [
                {
                  "text": "Notifications par email",
                  "link": "/fr/alerts-notifications/notif-email"
                },
                {
                  "text": "Notifications Microsoft Teams",
                  "link": "/fr/alerts-notifications/notif-config-for-teams"
                },
                {
                  "text": "Sms Notifications",
                  "link": "/fr/integrations/notifications/sms-notifications"
                },
                {
                  "text": "Slack Notifications",
                  "link": "/fr/integrations/notifications/slack-notifications"
                },
                {
                  "text": "Notifications Telegram",
                  "link": "/fr/integrations/notifications/plugin-telegram"
                }
              ]
            },
            {
              "text": "Les dépendances",
              "link": "/fr/alerts-notifications/notif-dependencies"
            },
            {
              "text": "Les escalades de notifications",
              "link": "/fr/alerts-notifications/notif-escalation"
            },
            {
              "text": "Bagotement (flapping)",
              "link": "/fr/alerts-notifications/notif-flapping"
            },
            {
              "text": "Pour aller plus loin",
              "link": "/fr/alerts-notifications/notif-advanced"
            }
          ]
        },
        {
          "text": "Gérer des tickets",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Installation d'Open Tickets",
              "link": "/fr/alerts-notifications/ticketing-install"
            },
            {
              "text": "Configuration",
              "link": "/fr/alerts-notifications/ticketing"
            }
          ]
        }
      ]
    },
    {
      "text": "Gérer les utilisateurs de Centreon",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Les utilisateurs/contacts",
          "link": "/fr/monitoring/basic-objects/contacts"
        },
        {
          "text": "Créer des utilisateurs/contacts manuellement",
          "link": "/fr/monitoring/basic-objects/contacts-create"
        },
        {
          "text": "Utiliser des modèles de contacts",
          "link": "/fr/monitoring/basic-objects/contacts-templates"
        },
        {
          "text": "Utiliser des groupes de contacts",
          "link": "/fr/monitoring/basic-objects/contacts-groups"
        },
        {
          "text": "Gérer les droits des utilisateurs Centreon (ACL)",
          "link": "/fr/administration/access-control-lists"
        },
        {
          "text": "Changer les paramètres de votre compte Centreon",
          "link": "/fr/monitoring/basic-objects/customization"
        }
      ]
    },
    {
      "text": "Service Mapping",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Introduction à Centreon BAM",
          "link": "/fr/service-mapping/introduction"
        },
        {
          "text": "Guide",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Gestion",
              "link": "/fr/service-mapping/ba-management"
            },
            {
              "text": "Supervision",
              "link": "/fr/service-mapping/ba-monitoring"
            },
            {
              "text": "Reporting",
              "link": "/fr/service-mapping/ba-reporting"
            },
            {
              "text": "Paramètres",
              "link": "/fr/service-mapping/ba-settings"
            },
            {
              "text": "Widgets",
              "link": "/fr/service-mapping/widgets"
            }
          ]
        },
        {
          "text": "Administrer",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Installer l'extension Centreon BAM",
              "link": "/fr/service-mapping/install"
            },
            {
              "text": "Mettre à jour l'extension",
              "link": "/fr/service-mapping/update"
            },
            {
              "text": "Monter de version l'extension",
              "link": "/fr/service-mapping/upgrade"
            },
            {
              "text": "Installer sur un Remote Server",
              "link": "/fr/service-mapping/remote-server"
            }
          ]
        }
      ]
    },
    {
      "text": "Visualisation des données",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Tableaux de bord",
          "link": "/fr/alerts-notifications/dashboards"
        },
        {
          "text": "Graphiques de performance",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Gestion des graphiques",
              "link": "/fr/metrology/chart-management"
            },
            {
              "text": "Chart Template",
              "link": "/fr/metrology/chart-template"
            },
            {
              "text": "Chart Curves",
              "link": "/fr/metrology/chart-curves"
            },
            {
              "text": "Chart Virtual Metrics",
              "link": "/fr/metrology/chart-virtual-metrics"
            },
            {
              "text": "Visualiser des données Centreon dans Grafana",
              "link": "/fr/metrology/grafana"
            }
          ]
        },
        {
          "text": "Vues graphiques (cartes)",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Introduction à Centreon MAP",
              "link": "/fr/graph-views/introduction-map"
            },
            {
              "text": "Informations pour les utilisateurs de MAP Legacy",
              "collapsible": true,
              "collapsed": true,
              "items": [
                {
                  "text": "Fin de vie de MAP Legacy",
                  "link": "/fr/graph-views/map-legacy-eol"
                },
                {
                  "text": "Monter MAP Legacy en 25.10",
                  "link": "/fr/graph-views/upgrading-map-legacy"
                },
                {
                  "text": "Passer de MAP (Legacy) à MAP",
                  "link": "/fr/graph-views/import-into-map-web"
                }
              ]
            },
            {
              "text": "Installer MAP",
              "link": "/fr/graph-views/map-web-install"
            },
            {
              "text": "Installer MAP sur un serveur distant",
              "link": "/fr/graph-views/map-web-install-remote"
            },
            {
              "text": "Mettre à jour MAP",
              "link": "/fr/graph-views/map-web-update"
            },
            {
              "text": "Monter de version MAP",
              "link": "/fr/graph-views/map-web-upgrade"
            },
            {
              "text": "Gérer les droits d'accès dans MAP",
              "link": "/fr/graph-views/map-web-access"
            },
            {
              "text": "Gérer les cartes dans MAP",
              "link": "/fr/graph-views/map-web-manage"
            },
            {
              "text": "Créer une carte standard",
              "link": "/fr/graph-views/map-web-create-standard-map"
            },
            {
              "text": "Créer une vue géographique",
              "link": "/fr/graph-views/map-web-create-geoview"
            },
            {
              "text": "Migrer l'extension",
              "link": "/fr/graph-views/map-web-migrate"
            },
            {
              "text": "Configuration avancée dans MAP",
              "link": "/fr/graph-views/map-web-advanced-configuration"
            },
            {
              "text": "Paramètres avancés dans MAP",
              "link": "/fr/graph-views/map-web-advanced"
            },
            {
              "text": "Sauvegarder et restaurer votre serveur Centreon MAP",
              "link": "/fr/graph-views/map-web-backup-restore"
            },
            {
              "text": "Problèmes connus dans MAP",
              "link": "/fr/graph-views/map-web-known-issues"
            },
            {
              "text": "Dépannage de MAP",
              "link": "/fr/graph-views/map-web-troubleshooting"
            },
            {
              "text": "Map Api",
              "link": "/fr/api/map-api"
            }
          ]
        },
        {
          "text": "Vues personnalisées (legacy)",
          "link": "/fr/alerts-notifications/custom-views"
        },
        {
          "text": "Rapports de disponibilité",
          "link": "/fr/alerts-notifications/availability"
        }
      ]
    },
    {
      "text": "Reporting (MBI)",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Introduction à Centreon MBI",
          "link": "/fr/reporting/introduction"
        },
        {
          "text": "Concepts MBI",
          "link": "/fr/reporting/concepts"
        },
        {
          "text": "Comment fonctionne MBI ?",
          "link": "/fr/reporting/how-mbi-works"
        },
        {
          "text": "Installer MBI",
          "link": "/fr/reporting/installation"
        },
        {
          "text": "Utiliser MBI",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Préparer les données pour pouvoir générer des rapports",
              "link": "/fr/reporting/preparing-data"
            },
            {
              "text": "Générer des rapports grâce aux tâches planifiées",
              "link": "/fr/reporting/generating-reports"
            },
            {
              "text": "Publier vos rapports",
              "link": "/fr/reporting/reports-publication-rule"
            },
            {
              "text": "Donner accès aux rapports et tâches dans Centreon",
              "link": "/fr/reporting/share"
            },
            {
              "text": "Widgets MBI",
              "link": "/fr/reporting/widgets"
            }
          ]
        },
        {
          "text": "Résoudre les problèmes MBI",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Dépanner MBI",
              "link": "/fr/reporting/troubleshooting"
            },
            {
              "text": "Reconstruire les données MBI",
              "link": "/fr/reporting/rebuilding-data"
            }
          ]
        },
        {
          "text": "Administration de MBI",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Sauvegarder et restaurer MBI",
              "link": "/fr/reporting/backup-restore"
            },
            {
              "text": "Mise à jour de l'extension",
              "link": "/fr/reporting/update"
            },
            {
              "text": "Monter de version l'extension",
              "link": "/fr/reporting/upgrade"
            },
            {
              "text": "Migrer l'extension",
              "link": "/fr/reporting/migrate"
            },
            {
              "text": "Créer des rapports personnalisés",
              "link": "/fr/reporting/report-development"
            }
          ]
        },
        {
          "text": "Rapports disponibles",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Rapports d'activité métier (BAM)",
              "link": "/fr/reporting/available-reports/ba-monitoring-reports"
            },
            {
              "text": "Rapports disponibilité et événements",
              "link": "/fr/reporting/available-reports/availability-events-reports"
            },
            {
              "text": "Rapports de performance",
              "link": "/fr/reporting/available-reports/performance-reports"
            },
            {
              "text": "Rapports de stockage",
              "link": "/fr/reporting/available-reports/storage-reports"
            },
            {
              "text": "Rapports de réseau",
              "link": "/fr/reporting/available-reports/network-reports"
            },
            {
              "text": "Rapports de virtualisation",
              "link": "/fr/reporting/available-reports/virtualization-reports"
            },
            {
              "text": "Rapports de consommation électrique",
              "link": "/fr/reporting/available-reports/electric-consumption-reports"
            },
            {
              "text": "Rapports de profiling",
              "link": "/fr/reporting/available-reports/profiling-reports"
            },
            {
              "text": "Rapports d'inventaire et de configuration",
              "link": "/fr/reporting/available-reports/inventory-configuration-reports"
            },
            {
              "text": "Rapports de diagnostic de la base de données",
              "link": "/fr/reporting/available-reports/database-diagnostics-reports"
            }
          ],
          "link": "/fr/reporting/available-reports/available-reports"
        }
      ]
    },
    {
      "text": "Administrer",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Paramètres",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Centreon UI",
              "link": "/fr/administration/parameters/centreon-ui"
            },
            {
              "text": "Supervision",
              "link": "/fr/administration/parameters/monitoring"
            },
            {
              "text": "Gorgone",
              "link": "/fr/administration/parameters/gorgone"
            },
            {
              "text": "RRDTool",
              "link": "/fr/administration/parameters/rrdtool"
            },
            {
              "text": "Débogage",
              "link": "/fr/administration/parameters/debug"
            },
            {
              "text": "Gestion des données",
              "link": "/fr/administration/parameters/data-management"
            },
            {
              "text": "Medias",
              "link": "/fr/administration/parameters/medias"
            }
          ]
        },
        {
          "text": "Customize Centreon",
          "link": "/fr/administration/customize-centreon"
        },
        {
          "text": "Paramétrer la connexion à Centreon",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Configurer une authentification locale",
              "link": "/fr/connect/loginpwd"
            },
            {
              "text": "Connecter Centreon à un annuaire LDAP",
              "link": "/fr/administration/parameters/ldap"
            },
            {
              "text": "Configurer une authentification par SSO",
              "link": "/fr/connect/sso"
            },
            {
              "text": "Configurer une authentification par OpenId Connect",
              "link": "/fr/connect/openid"
            },
            {
              "text": "Configurer une authentification par SAML",
              "link": "/fr/connect/saml"
            },
            {
              "text": "Configurer une authentification par Autologin",
              "link": "/fr/connect/autologin"
            }
          ]
        },
        {
          "text": "Extensions",
          "link": "/fr/administration/extensions"
        },
        {
          "text": "Licences",
          "link": "/fr/administration/licenses"
        },
        {
          "text": "Partitionnement des bases de données",
          "link": "/fr/administration/database-partitioning"
        },
        {
          "text": "Reprise après sinistre",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Sauvegarder et restaurer votre serveur central",
              "link": "/fr/administration/backup"
            },
            {
              "text": "Sauvegarder et restaurer vos collecteurs",
              "link": "/fr/administration/backup-poller"
            }
          ],
          "link": "/fr/administration/disaster-recovery"
        },
        {
          "text": "Base de connaissance",
          "link": "/fr/administration/knowledge-base"
        },
        {
          "text": "Journalisation des modifications de configuration",
          "link": "/fr/administration/logging-configuration-changes"
        },
        {
          "text": "Statistiques de la plateforme",
          "link": "/fr/administration/platform-statistics"
        },
        {
          "text": "Configurer l'envoi d'emails",
          "link": "/fr/administration/postfix"
        },
        {
          "text": "Optimiser le trafic vers les bases de données",
          "link": "/fr/administration/sql-proxy"
        }
      ]
    },
    {
      "text": "Mettre à jour, monter de version et migrer",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Mettre à jour (version mineure)",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Mise à jour d'une plateforme Centreon 25.10",
              "link": "/fr/update/update-centreon-platform"
            }
          ]
        },
        {
          "text": "Monter de version (version majeure)",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Introduction à la montée de version",
              "link": "/fr/upgrade/introduction"
            },
            {
              "text": "Montée de version depuis Centreon 24.10",
              "link": "/fr/upgrade/upgrade-from-24-10"
            },
            {
              "text": "Montée de version depuis Centreon 24.04",
              "link": "/fr/upgrade/upgrade-from-24-04"
            },
            {
              "text": "Montée de version depuis Centreon 23.10",
              "link": "/fr/upgrade/upgrade-from-23-10"
            },
            {
              "text": "Montée de version depuis Centreon 23.04",
              "link": "/fr/upgrade/upgrade-from-23-04"
            },
            {
              "text": "Montée de version depuis Centreon 22.10",
              "link": "/fr/upgrade/upgrade-from-22-10"
            },
            {
              "text": "Montée de version depuis Centreon 22.04",
              "link": "/fr/upgrade/upgrade-from-22-04"
            },
            {
              "text": "Montée de version depuis Centreon 21.10",
              "link": "/fr/upgrade/upgrade-from-21-10"
            },
            {
              "text": "Montée de version depuis Centreon 21.04",
              "link": "/fr/upgrade/upgrade-from-21-04"
            },
            {
              "text": "Montée de version depuis Centreon 20.10",
              "link": "/fr/upgrade/upgrade-from-20-10"
            },
            {
              "text": "Mettre à jour MariaDB",
              "link": "/fr/upgrade/upgrade-mariadb"
            },
            {
              "text": "Mettre à jour MySQL",
              "link": "/fr/upgrade/upgrade-mysql"
            }
          ]
        },
        {
          "text": "Migrer sur un nouveau serveur",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Introduction à la migration",
              "link": "/fr/migrate/introduction"
            },
            {
              "text": "Migrer depuis un OS de type EL vers un autre OS de type EL (depuis un Centreon 18.10 ou plus récent)",
              "link": "/fr/migrate/migrate-from-el-to-el"
            },
            {
              "text": "Migrer depuis un OS de type EL vers Debian",
              "link": "/fr/migrate/migrate-from-el-to-debian"
            },
            {
              "text": "Migrer depuis Debian 11 vers Debian 12",
              "link": "/fr/migrate/migrate-from-debian-to-debian"
            },
            {
              "text": "Migration depuis une plateforme Centreon 3.4",
              "link": "/fr/migrate/migrate-from-3-4"
            },
            {
              "text": "Nagios Reader vers Centreon CLAPI",
              "link": "/fr/migrate/nagios-to-centreon"
            },
            {
              "text": "Migration d'une plate-forme avec Poller Display",
              "link": "/fr/migrate/poller-display-to-remote-server"
            },
            {
              "text": "Developer Gorgone Migrate From Centcore",
              "link": "/fr/developer/developer-gorgone-migrate-from-centcore"
            }
          ]
        }
      ]
    },
    {
      "text": "Centreon Monitoring Agent",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Introduction à l'agent CMA",
          "link": "/fr/cma/cma"
        },
        {
          "text": "Configurer l’environnement de l’agent",
          "link": "/fr/cma/cma-setup"
        },
        {
          "text": "Configurer les certificats",
          "link": "/fr/cma/cma-certificates"
        },
        {
          "text": "Utiliser des plugins personnalisés avec CMA",
          "link": "/fr/cma/cma-custom"
        },
        {
          "text": "Migrer vers CMA depuis NSClient++",
          "link": "/fr/cma/cma-migratenscpp"
        },
        {
          "text": "Dépanner l'agent CMA",
          "link": "/fr/cma/cma-troubleshooting"
        }
      ]
    },
    {
      "text": "Intégrations",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Stream connectors",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Stream connectors release notes",
              "link": "/fr/integrations/stream-connectors-rn"
            },
            {
              "text": "Sc Hp Bsm",
              "link": "/fr/integrations/event-management/sc-hp-bsm"
            },
            {
              "text": "Canopsis Events",
              "link": "/fr/integrations/data-analytics/sc-canopsis-events"
            },
            {
              "text": "Clickhouse",
              "link": "/fr/integrations/data-analytics/sc-clickhouse"
            },
            {
              "text": "Datadog Events",
              "link": "/fr/integrations/data-analytics/sc-datadog-events"
            },
            {
              "text": "Datadog Metrics",
              "link": "/fr/integrations/data-analytics/sc-datadog-metrics"
            },
            {
              "text": "Elastic Events",
              "link": "/fr/integrations/data-analytics/sc-elastic-events"
            },
            {
              "text": "Sc Elastic Metrics",
              "link": "/fr/integrations/data-analytics/sc-elastic-metrics"
            },
            {
              "text": "Sc Hp Omi",
              "link": "/fr/integrations/event-management/sc-hp-omi"
            },
            {
              "text": "InfluxDB 2 Metrics",
              "link": "/fr/integrations/data-analytics/sc-influxdb2-metrics"
            },
            {
              "text": "Kafka Event Manager",
              "link": "/fr/integrations/data-analytics/sc-kafka-events"
            },
            {
              "text": "Logstash Events",
              "link": "/fr/integrations/data-analytics/sc-logstash-events"
            },
            {
              "text": "Sc Opsgenie Events",
              "link": "/fr/integrations/event-management/sc-opsgenie-events"
            },
            {
              "text": "PagerDuty Events",
              "link": "/fr/integrations/event-management/sc-pagerduty-events"
            },
            {
              "text": "ServiceNow Event Manager Events",
              "link": "/fr/integrations/event-management/sc-service-now-em-events"
            },
            {
              "text": "ServiceNow Incident",
              "link": "/fr/integrations/event-management/sc-service-now-incident-events"
            },
            {
              "text": "Signl4 Events",
              "link": "/fr/integrations/event-management/sc-signl4-events"
            },
            {
              "text": "Splunk Events",
              "link": "/fr/integrations/data-analytics/sc-splunk-events"
            },
            {
              "text": "Splunk Metrics",
              "link": "/fr/integrations/data-analytics/sc-splunk-metrics"
            },
            {
              "text": "Warp10",
              "link": "/fr/integrations/data-analytics/sc-warp10"
            }
          ],
          "link": "/fr/integrations/stream-connectors"
        },
        {
          "text": "ITSM",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "BMC Footprints",
              "link": "/fr/integrations/itsm/ot-bmc-footprints"
            },
            {
              "text": "BMC Remedy",
              "link": "/fr/integrations/itsm/ot-bmc-remedy"
            },
            {
              "text": "EasyVista API SOAP",
              "link": "/fr/integrations/itsm/ot-easyvista"
            },
            {
              "text": "EasyVista API Rest",
              "link": "/fr/integrations/itsm/ot-easyvista-rest-api"
            },
            {
              "text": "GLPI",
              "link": "/fr/integrations/itsm/ot-glpi"
            },
            {
              "text": "Ot Glpi Restapi",
              "link": "/fr/integrations/itsm/ot-glpi-restapi"
            },
            {
              "text": "iTop",
              "link": "/fr/integrations/itsm/ot-itop"
            },
            {
              "text": "Jira",
              "link": "/fr/integrations/itsm/ot-jira"
            },
            {
              "text": "Mail",
              "link": "/fr/integrations/itsm/ot-mail"
            },
            {
              "text": "Ot Otrs Restapi",
              "link": "/fr/integrations/itsm/ot-otrs-restapi"
            },
            {
              "text": "Ot Request Tracker Restapi",
              "link": "/fr/integrations/itsm/ot-request-tracker-restapi"
            },
            {
              "text": "Serena",
              "link": "/fr/integrations/itsm/ot-serena"
            },
            {
              "text": "Ot Servicenow",
              "link": "/fr/integrations/itsm/ot-servicenow"
            }
          ],
          "link": "/fr/integrations/itsm/itsm-overview"
        },
        {
          "text": "NPM",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Widget NtopNG",
              "link": "/fr/integrations/npm/ntopng"
            }
          ]
        }
      ],
      "link": "/fr/integrations/introduction-integrations"
    },
    {
      "text": "Centreon mobile",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Introduction",
          "link": "/fr/mobile/introduction"
        }
      ]
    },
    {
      "text": "API",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Introduction",
          "link": "/fr/api/introduction"
        },
        {
          "text": "Command Line API (v1) - CLAPI",
          "link": "/fr/api/clapi"
        },
        {
          "text": "Rest API (v1)",
          "link": "/fr/api/rest-api-v1"
        },
        {
          "text": "Utiliser l'API v2 avec Postman",
          "link": "/fr/api/rest-api-v2"
        },
        {
          "text": "Map Api",
          "link": "/fr/api/map-api"
        },
        {
          "text": "Jetons d'API",
          "link": "/fr/api/api-tokens"
        }
      ]
    },
    {
      "text": "Ressources développeur",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Comment écrire un Stream Connector",
          "link": "/fr/developer/developer-stream-connector"
        },
        {
          "text": "Developer Broker Stream Connector Migration",
          "link": "/fr/developer/developer-broker-stream-connector-migration"
        },
        {
          "text": "Comment écrire un widget",
          "link": "/fr/developer/developer-widget"
        },
        {
          "text": "Mcp Server",
          "link": "/fr/developer/mcp-server"
        },
        {
          "text": "Centreon Broker",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Developer Broker Stream Connector",
              "link": "/fr/developer/developer-broker-stream-connector"
            },
            {
              "text": "Le protocole BBDO",
              "link": "/fr/developer/developer-broker-bbdo"
            },
            {
              "text": "Changer de version de BBDO",
              "link": "/fr/developer/developer-broker-bbdo-switch-versions"
            },
            {
              "text": "Mapping d’évènements Centreon Broker",
              "link": "/fr/developer/developer-broker-mapping"
            }
          ],
          "link": "/fr/developer/centreon-broker"
        },
        {
          "text": "Centreon Gorgone",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Developer Gorgone Client Server Communication",
              "link": "/fr/developer/developer-gorgone-client-server-communication"
            },
            {
              "text": "Developer Gorgone Pull Mode",
              "link": "/fr/developer/developer-gorgone-pull-mode"
            },
            {
              "text": "Developer Gorgone Rebound Mode",
              "link": "/fr/developer/developer-gorgone-rebound-mode"
            }
          ],
          "link": "/fr/developer/centreon-gorgone"
        }
      ]
    },
    {
      "text": "Centreon HA",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Ha Faq",
          "link": "/fr/installation/installation-of-centreon-ha/ha-faq"
        },
        {
          "text": "Éléments d'un cluster Centreon HA",
          "link": "/fr/installation/installation-of-centreon-ha/cluster-elements"
        },
        {
          "text": "Fonctionnement de Centreon HA",
          "link": "/fr/installation/installation-of-centreon-ha/overview"
        },
        {
          "text": "Ha Prerequisites",
          "link": "/fr/installation/installation-of-centreon-ha/ha-prerequisites"
        },
        {
          "text": "Centreon HA pour les petites infrastructures",
          "link": "/fr/installation/installation-of-centreon-ha/ha-small"
        },
        {
          "text": "Completing your Centreon HA setup",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Intégrer des collecteurs dans un cluster Centreon HA",
              "link": "/fr/installation/installation-of-centreon-ha/integrating-pollers"
            },
            {
              "text": "Superviser Centreon HA",
              "link": "/fr/administration/centreon-ha/monitoring-guide"
            }
          ]
        },
        {
          "text": "Faire fonctionner Centreon HA",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Guide d'utilisation",
              "link": "/fr/administration/centreon-ha/operating-guide"
            },
            {
              "text": "Dépanner la HA",
              "link": "/fr/administration/centreon-ha/troubleshooting-guide"
            }
          ]
        },
        {
          "text": "Mettre à jour Centreon HA",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Mise à jour d'une plateforme Centreon HA",
              "link": "/fr/update/update-centreon-ha"
            }
          ]
        },
        {
          "text": "Monter de version Centreon HA",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Upgrade Centreon Ha From 24 10",
              "link": "/fr/upgrade/centreon-ha/upgrade-centreon-ha-from-24-10"
            },
            {
              "text": "Upgrade Centreon Ha From 24 04",
              "link": "/fr/upgrade/centreon-ha/upgrade-centreon-ha-from-24-04"
            },
            {
              "text": "Upgrade Centreon Ha From 23 10",
              "link": "/fr/upgrade/centreon-ha/upgrade-centreon-ha-from-23-10"
            },
            {
              "text": "Upgrade Centreon Ha From 23 04",
              "link": "/fr/upgrade/centreon-ha/upgrade-centreon-ha-from-23-04"
            },
            {
              "text": "Upgrade Centreon Ha From 22 10",
              "link": "/fr/upgrade/centreon-ha/upgrade-centreon-ha-from-22-10"
            },
            {
              "text": "Upgrade Centreon Ha From 22 04",
              "link": "/fr/upgrade/centreon-ha/upgrade-centreon-ha-from-22-04"
            },
            {
              "text": "Upgrade Centreon Ha From 21 10",
              "link": "/fr/upgrade/centreon-ha/upgrade-centreon-ha-from-21-10"
            },
            {
              "text": "Upgrade Centreon Ha From 21 04",
              "link": "/fr/upgrade/centreon-ha/upgrade-centreon-ha-from-21-04"
            }
          ]
        }
      ],
      "link": "/fr/installation/installation-of-centreon-ha/centreon-ha"
    },
    {
      "text": "Releases",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Release notes for Centreon 26.10",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Centreon Os",
              "link": "/fr/releases/centreon-os"
            },
            {
              "text": "Centreon Commercial Extensions",
              "link": "/fr/releases/centreon-commercial-extensions"
            }
          ],
          "link": "/fr/releases/introduction"
        },
        {
          "text": "Politique de cycle de vie des solutions",
          "link": "/fr/releases/lifecycle"
        }
      ]
    },
    {
      "text": "Sécurité",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Centreon et la sécurité",
          "link": "/fr/security/security"
        },
        {
          "text": "Rotation de clés",
          "link": "/fr/security/key-rotation"
        },
        {
          "text": "Stockage des données utilisateur",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Conformité RGPD",
              "link": "/fr/security/user-data-storage/gdpr-compliance"
            },
            {
              "text": "Qu'est-ce que Centreon CEIP?",
              "link": "/fr/security/user-data-storage/what-is-centreon-ceip"
            }
          ]
        }
      ]
    },
    {
      "text": "Ressources",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Problèmes connus",
          "link": "/fr/resources/known-issues"
        },
        {
          "text": "Dépannage de la plateforme Centreon",
          "link": "/fr/resources/troubleshooting"
        },
        {
          "text": "Liste des logs Centreon",
          "link": "/fr/resources/logs"
        },
        {
          "text": "Glossaire des concepts Centreon",
          "link": "/fr/resources/glossary"
        },
        {
          "text": "Contribuer à la documentation Centreon",
          "link": "/fr/resources/contribute"
        }
      ]
    }
  ],
  "/25.10/": [
    {
      "text": "Getting started with Centreon OnPrem",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Before you start",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Which installation should I choose?",
              "link": "/25.10/getting-started/which-install"
            },
            {
              "text": "Elements of a Centreon platform",
              "link": "/25.10/getting-started/platform"
            },
            {
              "text": "Set up your free IT-100 solution",
              "link": "/25.10/getting-started/IT100"
            }
          ]
        },
        {
          "text": "First steps with Centreon",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Discover the Centreon web interface",
              "link": "/25.10/getting-started/interface"
            },
            {
              "text": "Monitoring basics",
              "link": "/25.10/getting-started/concepts"
            }
          ]
        },
        {
          "text": "Setting up the monitoring",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Prerequisites",
              "link": "/25.10/getting-started/first-supervision"
            },
            {
              "text": "Monitor your first Linux host",
              "link": "/25.10/getting-started/monitor-linux-server-with-snmp"
            },
            {
              "text": "Monitor your first Windows host",
              "link": "/25.10/getting-started/monitor-windows-server-with-snmp"
            },
            {
              "text": "Monitor your first Cisco router",
              "link": "/25.10/getting-started/monitor-cisco-router-with-snmp"
            },
            {
              "text": "Monitor Mysql Server",
              "link": "/25.10/getting-started/monitor-mysql-server"
            },
            {
              "text": "Use Autodiscovery to monitor AWS EC2 instances",
              "link": "/25.10/getting-started/autodisco-aws"
            },
            {
              "text": "Monitor Printer Snmp",
              "link": "/25.10/getting-started/monitor-printer-snmp"
            },
            {
              "text": "Monitor Ups Snmp",
              "link": "/25.10/getting-started/monitor-ups-snmp"
            }
          ]
        },
        {
          "text": "Monitoring resources in real time",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "What actions can you take?",
              "link": "/25.10/getting-started/actions"
            },
            {
              "text": "Creating your first dashboard",
              "link": "/25.10/getting-started/create-dashboard"
            }
          ]
        },
        {
          "text": "Tutorials for Business modules",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Create a graphical view",
              "link": "/25.10/getting-started/create-graphical-view"
            },
            {
              "text": "Model your IT services",
              "link": "/25.10/getting-started/model-it-services"
            },
            {
              "text": "Analyze resources availability",
              "link": "/25.10/getting-started/analyze-resources-availability"
            }
          ]
        }
      ],
      "link": "/25.10/getting-started/welcome"
    },
    {
      "text": "Installation",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Introduction",
          "link": "/25.10/installation/introduction"
        },
        {
          "text": "Compatibility",
          "link": "/25.10/installation/compatibility"
        },
        {
          "text": "Architectures",
          "link": "/25.10/installation/architectures"
        },
        {
          "text": "Inside Centreon",
          "link": "/25.10/installation/inside-centreon"
        },
        {
          "text": "Prerequisites",
          "link": "/25.10/installation/prerequisites"
        },
        {
          "text": "Technical information",
          "link": "/25.10/installation/technical"
        },
        {
          "text": "Download",
          "link": "/25.10/installation/download"
        },
        {
          "text": "Installation of a Central server",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Using packages",
              "link": "/25.10/installation/installation-of-a-central-server/using-packages"
            },
            {
              "text": "Unattended Install Central",
              "link": "/25.10/installation/installation-of-a-central-server/unattended-install-central"
            },
            {
              "text": "Using a virtual machine (VM)",
              "link": "/25.10/installation/installation-of-a-central-server/using-virtual-machines"
            }
          ]
        },
        {
          "text": "Web And Post Installation",
          "link": "/25.10/installation/web-and-post-installation"
        },
        {
          "text": "Installation of a Poller",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Using packages",
              "link": "/25.10/installation/installation-of-a-poller/using-packages"
            },
            {
              "text": "Unattended Install Poller",
              "link": "/25.10/installation/installation-of-a-poller/unattended-install-poller"
            }
          ]
        },
        {
          "text": "Installation of a Remote server",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Using packages",
              "link": "/25.10/installation/installation-of-a-remote-server/using-packages"
            },
            {
              "text": "Unattended Install Remote",
              "link": "/25.10/installation/installation-of-a-remote-server/unattended-install-remote"
            }
          ]
        },
        {
          "text": "Configuring monitoring servers",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Attach a poller to a central or a remote server",
              "link": "/25.10/monitoring/monitoring-servers/add-a-poller-to-configuration"
            },
            {
              "text": "Attach a remote server to a central server",
              "link": "/25.10/monitoring/monitoring-servers/add-a-remote-server-to-configuration"
            },
            {
              "text": "Communications",
              "link": "/25.10/monitoring/monitoring-servers/communications"
            },
            {
              "text": "Attach a poller to a different remote server",
              "link": "/25.10/monitoring/monitoring-servers/move-poller"
            },
            {
              "text": "Advanced configuration",
              "link": "/25.10/monitoring/monitoring-servers/advanced-configuration"
            }
          ]
        },
        {
          "text": "Offline installation",
          "link": "/25.10/installation/offline"
        }
      ]
    },
    {
      "text": "Secure your platform",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Secure your platform",
          "link": "/25.10/administration/secure-platform"
        },
        {
          "text": "Secure your MAP platform",
          "link": "/25.10/graph-views/secure-your-map-platform"
        }
      ]
    },
    {
      "text": "Monitoring resources",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Monitoring basics",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Basic principles of monitoring",
              "link": "/25.10/monitoring/about"
            },
            {
              "text": "Understanding metrics",
              "link": "/25.10/monitoring/metrics"
            },
            {
              "text": "Monitoring Connectors",
              "link": "/25.10/monitoring/pluginpacks"
            },
            {
              "text": "Deploying a configuration",
              "link": "/25.10/monitoring/monitoring-servers/deploying-a-configuration"
            }
          ]
        },
        {
          "text": "Monitoring hosts",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Monitoring a host",
              "link": "/25.10/monitoring/basic-objects/hosts-create"
            },
            {
              "text": "Creating hosts manually",
              "link": "/25.10/monitoring/basic-objects/hosts"
            },
            {
              "text": "Creating hosts automatically",
              "link": "/25.10/monitoring/basic-objects/hosts-create-disco"
            },
            {
              "text": "Using host templates",
              "link": "/25.10/monitoring/basic-objects/hosts-templates"
            },
            {
              "text": "Change the monitoring server for a host",
              "link": "/25.10/monitoring/basic-objects/hosts-switch-poller"
            }
          ]
        },
        {
          "text": "Monitoring services",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Monitoring a service",
              "link": "/25.10/monitoring/basic-objects/services-create"
            },
            {
              "text": "Creating services manually",
              "link": "/25.10/monitoring/basic-objects/services"
            },
            {
              "text": "Creating services automatically",
              "link": "/25.10/monitoring/basic-objects/services-create-disco"
            },
            {
              "text": "Using service templates",
              "link": "/25.10/monitoring/basic-objects/services-templates"
            },
            {
              "text": "Creating Meta Services",
              "link": "/25.10/monitoring/basic-objects/meta-services"
            }
          ]
        },
        {
          "text": "Discovering hosts and services automatically",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Introduction",
              "link": "/25.10/monitoring/discovery/introduction"
            },
            {
              "text": "Installation",
              "link": "/25.10/monitoring/discovery/installation"
            },
            {
              "text": "Discovering hosts automatically",
              "link": "/25.10/monitoring/discovery/hosts-discovery"
            },
            {
              "text": "Discovering services automatically",
              "link": "/25.10/monitoring/discovery/services-discovery"
            },
            {
              "text": "Administration",
              "link": "/25.10/monitoring/discovery/administration"
            },
            {
              "text": "Troubleshooting host discovery issues",
              "link": "/25.10/monitoring/discovery/troubleshooting-hosts-discovery"
            }
          ]
        },
        {
          "text": "Organizing hosts and services",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Groups",
              "link": "/25.10/monitoring/groups"
            },
            {
              "text": "Categories and severities",
              "link": "/25.10/monitoring/categories"
            }
          ]
        },
        {
          "text": "Basic objects and actions",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Time periods",
              "link": "/25.10/monitoring/basic-objects/timeperiods"
            },
            {
              "text": "Macros",
              "link": "/25.10/monitoring/basic-objects/macros"
            },
            {
              "text": "Commands",
              "link": "/25.10/monitoring/basic-objects/commands"
            },
            {
              "text": "Generic actions",
              "link": "/25.10/monitoring/generic-actions"
            }
          ]
        },
        {
          "text": "Detecting anomalies",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Anomaly detection",
              "link": "/25.10/monitoring/anomaly-detection"
            }
          ]
        },
        {
          "text": "Passive Monitoring",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Enable SNMP Traps",
              "link": "/25.10/monitoring/passive-monitoring/enable-snmp-traps"
            },
            {
              "text": "Create SNMP Traps definitions",
              "link": "/25.10/monitoring/passive-monitoring/create-snmp-traps-definitions"
            },
            {
              "text": "Monitoring with SNMP Traps",
              "link": "/25.10/monitoring/passive-monitoring/monitoring-with-snmp-traps"
            },
            {
              "text": "Debug SNMP Traps management",
              "link": "/25.10/monitoring/passive-monitoring/debug-snmp-traps-management"
            },
            {
              "text": "Dynamic Service Management",
              "link": "/25.10/monitoring/passive-monitoring/dsm"
            }
          ]
        },
        {
          "text": "Auto Remediation",
          "link": "/25.10/monitoring/event-handler"
        },
        {
          "text": "Import/Export",
          "link": "/25.10/monitoring/web-import-export"
        }
      ]
    },
    {
      "text": "Managing events and alerts",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Viewing events",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Possible statuses of a resource",
              "link": "/25.10/alerts-notifications/concepts"
            },
            {
              "text": "Resources Status page",
              "link": "/25.10/alerts-notifications/resources-status"
            },
            {
              "text": "Event consoles",
              "link": "/25.10/alerts-notifications/event-console"
            },
            {
              "text": "Event Logs",
              "link": "/25.10/alerts-notifications/event-log"
            }
          ]
        },
        {
          "text": "Managing alerts",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Acknowledging an alert",
              "link": "/25.10/alerts-notifications/acknowledge"
            },
            {
              "text": "Planning downtime",
              "link": "/25.10/alerts-notifications/downtimes"
            },
            {
              "text": "Submitting a status",
              "link": "/25.10/alerts-notifications/submit"
            },
            {
              "text": "Other actions",
              "link": "/25.10/alerts-notifications/other"
            }
          ]
        },
        {
          "text": "Managing notifications",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "How notifications work",
              "link": "/25.10/alerts-notifications/notif-concept"
            },
            {
              "text": "Configuring notifications",
              "link": "/25.10/alerts-notifications/notif-configuration"
            },
            {
              "text": "Types of notifications",
              "collapsible": true,
              "collapsed": true,
              "items": [
                {
                  "text": "Email notifications",
                  "link": "/25.10/alerts-notifications/notif-email"
                },
                {
                  "text": "Microsoft Teams notifications",
                  "link": "/25.10/alerts-notifications/notif-config-for-teams"
                },
                {
                  "text": "Sms Notifications",
                  "link": "/25.10/integrations/notifications/sms-notifications"
                },
                {
                  "text": "Slack Notifications",
                  "link": "/25.10/integrations/notifications/slack-notifications"
                },
                {
                  "text": "Telegram notifications",
                  "link": "/25.10/integrations/notifications/plugin-telegram"
                }
              ]
            },
            {
              "text": "Dependencies",
              "link": "/25.10/alerts-notifications/notif-dependencies"
            },
            {
              "text": "Escalation",
              "link": "/25.10/alerts-notifications/notif-escalation"
            },
            {
              "text": "Flapping",
              "link": "/25.10/alerts-notifications/notif-flapping"
            },
            {
              "text": "To go further",
              "link": "/25.10/alerts-notifications/notif-advanced"
            }
          ]
        },
        {
          "text": "Managing tickets",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Installing Open Tickets",
              "link": "/25.10/alerts-notifications/ticketing-install"
            },
            {
              "text": "Configuring Open Tickets",
              "link": "/25.10/alerts-notifications/ticketing"
            }
          ]
        }
      ]
    },
    {
      "text": "Managing Centreon users",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Contacts/Users",
          "link": "/25.10/monitoring/basic-objects/contacts"
        },
        {
          "text": "Creating contacts/users manually",
          "link": "/25.10/monitoring/basic-objects/contacts-create"
        },
        {
          "text": "Using contact templates",
          "link": "/25.10/monitoring/basic-objects/contacts-templates"
        },
        {
          "text": "Using contact groups",
          "link": "/25.10/monitoring/basic-objects/contacts-groups"
        },
        {
          "text": "Granting rights to Centreon users (ACL)",
          "link": "/25.10/administration/access-control-lists"
        },
        {
          "text": "Changing your Centreon account's settings",
          "link": "/25.10/monitoring/basic-objects/customization"
        }
      ]
    },
    {
      "text": "Service Mapping",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Introduction to Centreon BAM",
          "link": "/25.10/service-mapping/introduction"
        },
        {
          "text": "Guide",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Manage Business Activities",
              "link": "/25.10/service-mapping/ba-management"
            },
            {
              "text": "Monitor Business Activities",
              "link": "/25.10/service-mapping/ba-monitoring"
            },
            {
              "text": "Report Business Activities",
              "link": "/25.10/service-mapping/ba-reporting"
            },
            {
              "text": "Settings",
              "link": "/25.10/service-mapping/ba-settings"
            },
            {
              "text": "Widgets",
              "link": "/25.10/service-mapping/widgets"
            }
          ]
        },
        {
          "text": "Administrate",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Install the Centreon BAM extension",
              "link": "/25.10/service-mapping/install"
            },
            {
              "text": "Update the extension",
              "link": "/25.10/service-mapping/update"
            },
            {
              "text": "Upgrade the extension",
              "link": "/25.10/service-mapping/upgrade"
            },
            {
              "text": "Install on a Remote Server",
              "link": "/25.10/service-mapping/remote-server"
            }
          ]
        }
      ]
    },
    {
      "text": "Data Visualization",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Dashboards",
          "link": "/25.10/alerts-notifications/dashboards"
        },
        {
          "text": "Performance graphs",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Chart management",
              "link": "/25.10/metrology/chart-management"
            },
            {
              "text": "Chart Template",
              "link": "/25.10/metrology/chart-template"
            },
            {
              "text": "Chart Curves",
              "link": "/25.10/metrology/chart-curves"
            },
            {
              "text": "Chart Virtual Metrics",
              "link": "/25.10/metrology/chart-virtual-metrics"
            },
            {
              "text": "Viewing Centreon data in Grafana",
              "link": "/25.10/metrology/grafana"
            }
          ]
        },
        {
          "text": "Graphical views (maps)",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Introduction to Centreon MAP",
              "link": "/25.10/graph-views/introduction-map"
            },
            {
              "text": "Information for MAP Legacy users",
              "collapsible": true,
              "collapsed": true,
              "items": [
                {
                  "text": "MAP Legacy end of life",
                  "link": "/25.10/graph-views/map-legacy-eol"
                },
                {
                  "text": "Upgrading MAP Legacy to version 24.10",
                  "link": "/25.10/graph-views/upgrading-map-legacy"
                },
                {
                  "text": "Switching from MAP (Legacy) to MAP",
                  "link": "/25.10/graph-views/import-into-map-web"
                }
              ]
            },
            {
              "text": "Installing MAP",
              "link": "/25.10/graph-views/map-web-install"
            },
            {
              "text": "Installing MAP on a remote server",
              "link": "/25.10/graph-views/map-web-install-remote"
            },
            {
              "text": "Updating MAP",
              "link": "/25.10/graph-views/map-web-update"
            },
            {
              "text": "Upgrading MAP",
              "link": "/25.10/graph-views/map-web-upgrade"
            },
            {
              "text": "Managing access rights in MAP",
              "link": "/25.10/graph-views/map-web-access"
            },
            {
              "text": "Managing maps in MAP",
              "link": "/25.10/graph-views/map-web-manage"
            },
            {
              "text": "Creating a standard map",
              "link": "/25.10/graph-views/map-web-create-standard-map"
            },
            {
              "text": "Creating a geographic view",
              "link": "/25.10/graph-views/map-web-create-geoview"
            },
            {
              "text": "Migrating the extension",
              "link": "/25.10/graph-views/map-web-migrate"
            },
            {
              "text": "Advanced configuration in MAP",
              "link": "/25.10/graph-views/map-web-advanced-configuration"
            },
            {
              "text": "Advanced parameters in MAP",
              "link": "/25.10/graph-views/map-web-advanced"
            },
            {
              "text": "Backing up and restoring your MAP server",
              "link": "/25.10/graph-views/map-web-backup-restore"
            },
            {
              "text": "MAP known issues",
              "link": "/25.10/graph-views/map-web-known-issues"
            },
            {
              "text": "MAP troubleshooting",
              "link": "/25.10/graph-views/map-web-troubleshooting"
            },
            {
              "text": "Map Api",
              "link": "/25.10/api/map-api"
            }
          ]
        },
        {
          "text": "Custom views (legacy)",
          "link": "/25.10/alerts-notifications/custom-views"
        },
        {
          "text": "Availability reports",
          "link": "/25.10/alerts-notifications/availability"
        }
      ]
    },
    {
      "text": "Reporting (MBI)",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Introduction to MBI",
          "link": "/25.10/reporting/introduction"
        },
        {
          "text": "MBI concepts",
          "link": "/25.10/reporting/concepts"
        },
        {
          "text": "How does MBI work?",
          "link": "/25.10/reporting/how-mbi-works"
        },
        {
          "text": "Installing MBI",
          "link": "/25.10/reporting/installation"
        },
        {
          "text": "Using MBI",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Preparing data for report generation",
              "link": "/25.10/reporting/preparing-data"
            },
            {
              "text": "Generating reports using jobs",
              "link": "/25.10/reporting/generating-reports"
            },
            {
              "text": "Publishing your reports",
              "link": "/25.10/reporting/reports-publication-rule"
            },
            {
              "text": "Giving access to jobs and reports in Centreon",
              "link": "/25.10/reporting/share"
            },
            {
              "text": "MBI Widgets",
              "link": "/25.10/reporting/widgets"
            }
          ]
        },
        {
          "text": "Fixing MBI issues",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Troubleshooting MBI",
              "link": "/25.10/reporting/troubleshooting"
            },
            {
              "text": "Rebuilding MBI data",
              "link": "/25.10/reporting/rebuilding-data"
            }
          ]
        },
        {
          "text": "MBI administration",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Backing up and restoring MBI",
              "link": "/25.10/reporting/backup-restore"
            },
            {
              "text": "Update the extension",
              "link": "/25.10/reporting/update"
            },
            {
              "text": "Upgrade the extension",
              "link": "/25.10/reporting/upgrade"
            },
            {
              "text": "Migrate the extension",
              "link": "/25.10/reporting/migrate"
            },
            {
              "text": "Creating custom reports",
              "link": "/25.10/reporting/report-development"
            }
          ]
        },
        {
          "text": "Available reports",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Business Activity Monitoring reports",
              "link": "/25.10/reporting/available-reports/ba-monitoring-reports"
            },
            {
              "text": "Availability and Events reports",
              "link": "/25.10/reporting/available-reports/availability-events-reports"
            },
            {
              "text": "Performance reports",
              "link": "/25.10/reporting/available-reports/performance-reports"
            },
            {
              "text": "Storage reports",
              "link": "/25.10/reporting/available-reports/storage-reports"
            },
            {
              "text": "Network reports",
              "link": "/25.10/reporting/available-reports/network-reports"
            },
            {
              "text": "Virtualization reports",
              "link": "/25.10/reporting/available-reports/virtualization-reports"
            },
            {
              "text": "Electric consumption reports",
              "link": "/25.10/reporting/available-reports/electric-consumption-reports"
            },
            {
              "text": "Profiling reports",
              "link": "/25.10/reporting/available-reports/profiling-reports"
            },
            {
              "text": "Inventory and Configuration reports",
              "link": "/25.10/reporting/available-reports/inventory-configuration-reports"
            },
            {
              "text": "Database diagnostics reports",
              "link": "/25.10/reporting/available-reports/database-diagnostics-reports"
            }
          ],
          "link": "/25.10/reporting/available-reports/available-reports"
        }
      ]
    },
    {
      "text": "Administration",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Parameters",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Centreon UI",
              "link": "/25.10/administration/parameters/centreon-ui"
            },
            {
              "text": "Monitoring",
              "link": "/25.10/administration/parameters/monitoring"
            },
            {
              "text": "Gorgone",
              "link": "/25.10/administration/parameters/gorgone"
            },
            {
              "text": "RRDTool",
              "link": "/25.10/administration/parameters/rrdtool"
            },
            {
              "text": "Debug",
              "link": "/25.10/administration/parameters/debug"
            },
            {
              "text": "Data management",
              "link": "/25.10/administration/parameters/data-management"
            },
            {
              "text": "Media",
              "link": "/25.10/administration/parameters/medias"
            }
          ]
        },
        {
          "text": "Customize Centreon",
          "link": "/25.10/administration/customize-centreon"
        },
        {
          "text": "Configuring the connection to Centreon",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Configuring a local authentication",
              "link": "/25.10/connect/loginpwd"
            },
            {
              "text": "Connecting Centreon to an LDAP directory",
              "link": "/25.10/administration/parameters/ldap"
            },
            {
              "text": "Configuring a Web SSO connection",
              "link": "/25.10/connect/sso"
            },
            {
              "text": "Configuring connection via OpenId Connect",
              "link": "/25.10/connect/openid"
            },
            {
              "text": "Configuring connection via SAML",
              "link": "/25.10/connect/saml"
            },
            {
              "text": "Configuring Autologin",
              "link": "/25.10/connect/autologin"
            }
          ]
        },
        {
          "text": "Extensions",
          "link": "/25.10/administration/extensions"
        },
        {
          "text": "Licenses",
          "link": "/25.10/administration/licenses"
        },
        {
          "text": "Database partitioning",
          "link": "/25.10/administration/database-partitioning"
        },
        {
          "text": "Disaster recovery",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Back up and restore your central server",
              "link": "/25.10/administration/backup"
            },
            {
              "text": "Back up and restore your pollers",
              "link": "/25.10/administration/backup-poller"
            }
          ],
          "link": "/25.10/administration/disaster-recovery"
        },
        {
          "text": "Knowledge Base",
          "link": "/25.10/administration/knowledge-base"
        },
        {
          "text": "Logging configuration changes",
          "link": "/25.10/administration/logging-configuration-changes"
        },
        {
          "text": "Platform statistics",
          "link": "/25.10/administration/platform-statistics"
        },
        {
          "text": "Configuring your Centreon to send emails",
          "link": "/25.10/administration/postfix"
        },
        {
          "text": "Optimizing database traffic",
          "link": "/25.10/administration/sql-proxy"
        }
      ]
    },
    {
      "text": "Update, Upgrade & Migrate",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Update",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Update a Centreon 25.10 platform",
              "link": "/25.10/update/update-centreon-platform"
            }
          ]
        },
        {
          "text": "Upgrade",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Introduction to upgrade",
              "link": "/25.10/upgrade/introduction"
            },
            {
              "text": "Upgrade from Centreon 24.10",
              "link": "/25.10/upgrade/upgrade-from-24-10"
            },
            {
              "text": "Upgrade from Centreon 24.04",
              "link": "/25.10/upgrade/upgrade-from-24-04"
            },
            {
              "text": "Upgrade from Centreon 23.10",
              "link": "/25.10/upgrade/upgrade-from-23-10"
            },
            {
              "text": "Upgrade from Centreon 23.04",
              "link": "/25.10/upgrade/upgrade-from-23-04"
            },
            {
              "text": "Upgrade from Centreon 22.10",
              "link": "/25.10/upgrade/upgrade-from-22-10"
            },
            {
              "text": "Upgrade from Centreon 22.04",
              "link": "/25.10/upgrade/upgrade-from-22-04"
            },
            {
              "text": "Upgrade from Centreon 21.10",
              "link": "/25.10/upgrade/upgrade-from-21-10"
            },
            {
              "text": "Upgrade from Centreon 21.04",
              "link": "/25.10/upgrade/upgrade-from-21-04"
            },
            {
              "text": "Upgrade from Centreon 20.10",
              "link": "/25.10/upgrade/upgrade-from-20-10"
            },
            {
              "text": "Upgrading MariaDB",
              "link": "/25.10/upgrade/upgrade-mariadb"
            },
            {
              "text": "Upgrading MySQL",
              "link": "/25.10/upgrade/upgrade-mysql"
            }
          ]
        },
        {
          "text": "Migrate",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Introduction to the migration process",
              "link": "/25.10/migrate/introduction"
            },
            {
              "text": "Migrate from an EL-type OS to another EL-type OS (from a Centreon 18.10 or newer)",
              "link": "/25.10/migrate/migrate-from-el-to-el"
            },
            {
              "text": "Migrate from an EL-type OS to Debian",
              "link": "/25.10/migrate/migrate-from-el-to-debian"
            },
            {
              "text": "Migrate from Debian 11 to Debian 12",
              "link": "/25.10/migrate/migrate-from-debian-to-debian"
            },
            {
              "text": "Migrate from a Centreon 3.4 platform",
              "link": "/25.10/migrate/migrate-from-3-4"
            },
            {
              "text": "Nagios Reader to Centreon CLAPI",
              "link": "/25.10/migrate/nagios-to-centreon"
            },
            {
              "text": "Migrate a platform with Poller Display module",
              "link": "/25.10/migrate/poller-display-to-remote-server"
            },
            {
              "text": "Developer Gorgone Migrate From Centcore",
              "link": "/25.10/developer/developer-gorgone-migrate-from-centcore"
            }
          ]
        }
      ]
    },
    {
      "text": "Centreon Monitoring Agent",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Introduction to CMA",
          "link": "/25.10/cma/cma"
        },
        {
          "text": "Setting up the agent's environment",
          "link": "/25.10/cma/cma-setup"
        },
        {
          "text": "Configuring certificates",
          "link": "/25.10/cma/cma-certificates"
        },
        {
          "text": "Using custom plugins with CMA",
          "link": "/25.10/cma/cma-custom"
        },
        {
          "text": "Centreon Monitoring Agent - Migrate from NSClient++",
          "link": "/25.10/cma/cma-migratenscpp"
        },
        {
          "text": "Troubleshooting CMA",
          "link": "/25.10/cma/cma-troubleshooting"
        }
      ]
    },
    {
      "text": "Integrations",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Stream connectors",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Stream connectors release notes",
              "link": "/25.10/integrations/stream-connectors-rn"
            },
            {
              "text": "Sc Hp Bsm",
              "link": "/25.10/integrations/event-management/sc-hp-bsm"
            },
            {
              "text": "Canopsis Events",
              "link": "/25.10/integrations/data-analytics/sc-canopsis-events"
            },
            {
              "text": "Clickhouse",
              "link": "/25.10/integrations/data-analytics/sc-clickhouse"
            },
            {
              "text": "Datadog Events",
              "link": "/25.10/integrations/data-analytics/sc-datadog-events"
            },
            {
              "text": "Datadog Metrics",
              "link": "/25.10/integrations/data-analytics/sc-datadog-metrics"
            },
            {
              "text": "Elastic Events",
              "link": "/25.10/integrations/data-analytics/sc-elastic-events"
            },
            {
              "text": "Sc Elastic Metrics",
              "link": "/25.10/integrations/data-analytics/sc-elastic-metrics"
            },
            {
              "text": "HP OMI",
              "link": "/25.10/integrations/event-management/sc-hp-omi"
            },
            {
              "text": "InfluxDB 2 Metrics",
              "link": "/25.10/integrations/data-analytics/sc-influxdb2-metrics"
            },
            {
              "text": "Kafka Event Manager",
              "link": "/25.10/integrations/data-analytics/sc-kafka-events"
            },
            {
              "text": "Logstash Events",
              "link": "/25.10/integrations/data-analytics/sc-logstash-events"
            },
            {
              "text": "Sc Opsgenie Events",
              "link": "/25.10/integrations/event-management/sc-opsgenie-events"
            },
            {
              "text": "PagerDuty Events",
              "link": "/25.10/integrations/event-management/sc-pagerduty-events"
            },
            {
              "text": "ServiceNow Event Manager Events",
              "link": "/25.10/integrations/event-management/sc-service-now-em-events"
            },
            {
              "text": "ServiceNow Incident",
              "link": "/25.10/integrations/event-management/sc-service-now-incident-events"
            },
            {
              "text": "Signl4 Events",
              "link": "/25.10/integrations/event-management/sc-signl4-events"
            },
            {
              "text": "Splunk Events",
              "link": "/25.10/integrations/data-analytics/sc-splunk-events"
            },
            {
              "text": "Splunk Metrics",
              "link": "/25.10/integrations/data-analytics/sc-splunk-metrics"
            },
            {
              "text": "Warp10",
              "link": "/25.10/integrations/data-analytics/sc-warp10"
            }
          ],
          "link": "/25.10/integrations/stream-connectors"
        },
        {
          "text": "ITSM",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "BMC Footprints",
              "link": "/25.10/integrations/itsm/ot-bmc-footprints"
            },
            {
              "text": "BMC Remedy",
              "link": "/25.10/integrations/itsm/ot-bmc-remedy"
            },
            {
              "text": "EasyVista API SOAP",
              "link": "/25.10/integrations/itsm/ot-easyvista"
            },
            {
              "text": "EasyVista RestAPI",
              "link": "/25.10/integrations/itsm/ot-easyvista-rest-api"
            },
            {
              "text": "GLPI",
              "link": "/25.10/integrations/itsm/ot-glpi"
            },
            {
              "text": "Ot Glpi Restapi",
              "link": "/25.10/integrations/itsm/ot-glpi-restapi"
            },
            {
              "text": "iTop",
              "link": "/25.10/integrations/itsm/ot-itop"
            },
            {
              "text": "Jira",
              "link": "/25.10/integrations/itsm/ot-jira"
            },
            {
              "text": "Mail",
              "link": "/25.10/integrations/itsm/ot-mail"
            },
            {
              "text": "Ot Otrs Restapi",
              "link": "/25.10/integrations/itsm/ot-otrs-restapi"
            },
            {
              "text": "Ot Request Tracker Restapi",
              "link": "/25.10/integrations/itsm/ot-request-tracker-restapi"
            },
            {
              "text": "Serena",
              "link": "/25.10/integrations/itsm/ot-serena"
            },
            {
              "text": "Ot Servicenow",
              "link": "/25.10/integrations/itsm/ot-servicenow"
            }
          ],
          "link": "/25.10/integrations/itsm/itsm-overview"
        },
        {
          "text": "NPM",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Widget NtopNG",
              "link": "/25.10/integrations/npm/ntopng"
            }
          ]
        }
      ],
      "link": "/25.10/integrations/introduction-integrations"
    },
    {
      "text": "Centreon mobile",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Introduction",
          "link": "/25.10/mobile/introduction"
        }
      ]
    },
    {
      "text": "API",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Introduction",
          "link": "/25.10/api/introduction"
        },
        {
          "text": "Command Line API (v1) - CLAPI",
          "link": "/25.10/api/clapi"
        },
        {
          "text": "Rest API (v1)",
          "link": "/25.10/api/rest-api-v1"
        },
        {
          "text": "Using the v2 API with Postman",
          "link": "/25.10/api/rest-api-v2"
        },
        {
          "text": "Map Api",
          "link": "/25.10/api/map-api"
        },
        {
          "text": "API tokens",
          "link": "/25.10/api/api-tokens"
        }
      ]
    },
    {
      "text": "Developer resources",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Developer Stream Connector",
          "link": "/25.10/developer/developer-stream-connector"
        },
        {
          "text": "Developer Broker Stream Connector Migration",
          "link": "/25.10/developer/developer-broker-stream-connector-migration"
        },
        {
          "text": "Developer Widget",
          "link": "/25.10/developer/developer-widget"
        },
        {
          "text": "Mcp Server",
          "link": "/25.10/developer/mcp-server"
        },
        {
          "text": "Centreon Broker",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Developer Broker Stream Connector",
              "link": "/25.10/developer/developer-broker-stream-connector"
            },
            {
              "text": "The BBDO protocol",
              "link": "/25.10/developer/developer-broker-bbdo"
            },
            {
              "text": "Switching versions of BBDO",
              "link": "/25.10/developer/developer-broker-bbdo-switch-versions"
            },
            {
              "text": "Centreon Broker Event Mapping",
              "link": "/25.10/developer/developer-broker-mapping"
            }
          ],
          "link": "/25.10/developer/centreon-broker"
        },
        {
          "text": "Centreon Gorgone",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Developer Gorgone Client Server Communication",
              "link": "/25.10/developer/developer-gorgone-client-server-communication"
            },
            {
              "text": "Developer Gorgone Pull Mode",
              "link": "/25.10/developer/developer-gorgone-pull-mode"
            },
            {
              "text": "Developer Gorgone Rebound Mode",
              "link": "/25.10/developer/developer-gorgone-rebound-mode"
            }
          ],
          "link": "/25.10/developer/centreon-gorgone"
        }
      ]
    },
    {
      "text": "Centreon HA",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Ha Faq",
          "link": "/25.10/installation/installation-of-centreon-ha/ha-faq"
        },
        {
          "text": "Elements of a Centreon HA cluster",
          "link": "/25.10/installation/installation-of-centreon-ha/cluster-elements"
        },
        {
          "text": "How Centreon HA works",
          "link": "/25.10/installation/installation-of-centreon-ha/overview"
        },
        {
          "text": "Ha Prerequisites",
          "link": "/25.10/installation/installation-of-centreon-ha/ha-prerequisites"
        },
        {
          "text": "Centreon HA for small infrastuctures",
          "link": "/25.10/installation/installation-of-centreon-ha/ha-small"
        },
        {
          "text": "Completing your Centreon HA setup",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Integrating new pollers in a Centreon HA cluster",
              "link": "/25.10/installation/installation-of-centreon-ha/integrating-pollers"
            },
            {
              "text": "Monitoring Centreon HA",
              "link": "/25.10/administration/centreon-ha/monitoring-guide"
            }
          ]
        },
        {
          "text": "Operating Centreon HA",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Operating guide",
              "link": "/25.10/administration/centreon-ha/operating-guide"
            },
            {
              "text": "Troubleshooting HA",
              "link": "/25.10/administration/centreon-ha/troubleshooting-guide"
            }
          ]
        },
        {
          "text": "Updating Centreon HA",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Updating a Centreon HA platform",
              "link": "/25.10/update/update-centreon-ha"
            }
          ]
        },
        {
          "text": "Upgrading Centreon HA",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Upgrade Centreon Ha From 24 10",
              "link": "/25.10/upgrade/centreon-ha/upgrade-centreon-ha-from-24-10"
            },
            {
              "text": "Upgrade Centreon Ha From 24 04",
              "link": "/25.10/upgrade/centreon-ha/upgrade-centreon-ha-from-24-04"
            },
            {
              "text": "Upgrade Centreon Ha From 23 10",
              "link": "/25.10/upgrade/centreon-ha/upgrade-centreon-ha-from-23-10"
            },
            {
              "text": "Upgrade Centreon Ha From 23 04",
              "link": "/25.10/upgrade/centreon-ha/upgrade-centreon-ha-from-23-04"
            },
            {
              "text": "Upgrade Centreon Ha From 22 10",
              "link": "/25.10/upgrade/centreon-ha/upgrade-centreon-ha-from-22-10"
            },
            {
              "text": "Upgrade Centreon Ha From 22 04",
              "link": "/25.10/upgrade/centreon-ha/upgrade-centreon-ha-from-22-04"
            },
            {
              "text": "Upgrade Centreon Ha From 21 10",
              "link": "/25.10/upgrade/centreon-ha/upgrade-centreon-ha-from-21-10"
            },
            {
              "text": "Upgrade Centreon Ha From 21 04",
              "link": "/25.10/upgrade/centreon-ha/upgrade-centreon-ha-from-21-04"
            }
          ]
        }
      ],
      "link": "/25.10/installation/installation-of-centreon-ha/centreon-ha"
    },
    {
      "text": "Releases",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Release notes for Centreon 25.10",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Centreon Os",
              "link": "/25.10/releases/centreon-os"
            },
            {
              "text": "Centreon Commercial Extensions",
              "link": "/25.10/releases/centreon-commercial-extensions"
            }
          ],
          "link": "/25.10/releases/introduction"
        },
        {
          "text": "Product lifecycle policy",
          "link": "/25.10/releases/lifecycle"
        }
      ]
    },
    {
      "text": "Security",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Centreon and Security",
          "link": "/25.10/security/security"
        },
        {
          "text": "Rotating keys",
          "link": "/25.10/security/key-rotation"
        },
        {
          "text": "User data storage",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "GDPR compliance",
              "link": "/25.10/security/user-data-storage/gdpr-compliance"
            },
            {
              "text": "What is Centreon CEIP?",
              "link": "/25.10/security/user-data-storage/what-is-centreon-ceip"
            }
          ]
        }
      ]
    },
    {
      "text": "Resources",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Known issues",
          "link": "/25.10/resources/known-issues"
        },
        {
          "text": "Troubleshooting your Centreon platform",
          "link": "/25.10/resources/troubleshooting"
        },
        {
          "text": "List of Centreon logs",
          "link": "/25.10/resources/logs"
        },
        {
          "text": "Glossary of Centreon concepts",
          "link": "/25.10/resources/glossary"
        },
        {
          "text": "Contributing to the Centreon documentation",
          "link": "/25.10/resources/contribute"
        }
      ]
    }
  ],
  "/fr/25.10/": [
    {
      "text": "Démarrer avec Centreon OnPrem",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Avant de commencer",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Quelle installation choisir ?",
              "link": "/fr/25.10/getting-started/which-install"
            },
            {
              "text": "Éléments d'une plateforme Centreon",
              "link": "/fr/25.10/getting-started/platform"
            },
            {
              "text": "Mettre en place sa solution gratuite IT-100",
              "link": "/fr/25.10/getting-started/IT100"
            }
          ]
        },
        {
          "text": "Premiers pas avec Centreon",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Découvrir l'interface web Centreon",
              "link": "/fr/25.10/getting-started/interface"
            },
            {
              "text": "Bases de la supervision",
              "link": "/fr/25.10/getting-started/concepts"
            }
          ]
        },
        {
          "text": "Mettre des ressources en supervision",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Prérequis",
              "link": "/fr/25.10/getting-started/first-supervision"
            },
            {
              "text": "Superviser votre premier serveur Linux",
              "link": "/fr/25.10/getting-started/monitor-linux-server-with-snmp"
            },
            {
              "text": "Superviser votre premier serveur Windows",
              "link": "/fr/25.10/getting-started/monitor-windows-server-with-snmp"
            },
            {
              "text": "Superviser votre premier routeur Cisco",
              "link": "/fr/25.10/getting-started/monitor-cisco-router-with-snmp"
            },
            {
              "text": "Monitor Mysql Server",
              "link": "/fr/25.10/getting-started/monitor-mysql-server"
            },
            {
              "text": "Utiliser Autodiscovery pour découvrir des instances AWS EC2",
              "link": "/fr/25.10/getting-started/autodisco-aws"
            },
            {
              "text": "Monitor Printer Snmp",
              "link": "/fr/25.10/getting-started/monitor-printer-snmp"
            },
            {
              "text": "Monitor Ups Snmp",
              "link": "/fr/25.10/getting-started/monitor-ups-snmp"
            }
          ]
        },
        {
          "text": "Superviser les ressources en temps réel",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Quelles actions effectuer pour superviser?",
              "link": "/fr/25.10/getting-started/actions"
            },
            {
              "text": "Créer votre premier tableau de bord",
              "link": "/fr/25.10/getting-started/create-dashboard"
            }
          ]
        },
        {
          "text": "Tutoriels des modules Business",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Créer une vue graphique",
              "link": "/fr/25.10/getting-started/create-graphical-view"
            },
            {
              "text": "Modéliser un service IT",
              "link": "/fr/25.10/getting-started/model-it-services"
            },
            {
              "text": "Analyser la disponibilité des ressources",
              "link": "/fr/25.10/getting-started/analyze-resources-availability"
            }
          ]
        }
      ],
      "link": "/fr/25.10/getting-started/welcome"
    },
    {
      "text": "Installation",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Introduction",
          "link": "/fr/25.10/installation/introduction"
        },
        {
          "text": "Compatibilité",
          "link": "/fr/25.10/installation/compatibility"
        },
        {
          "text": "Architectures",
          "link": "/fr/25.10/installation/architectures"
        },
        {
          "text": "À l'intérieur de Centreon",
          "link": "/fr/25.10/installation/inside-centreon"
        },
        {
          "text": "Prérequis",
          "link": "/fr/25.10/installation/prerequisites"
        },
        {
          "text": "Informations techniques",
          "link": "/fr/25.10/installation/technical"
        },
        {
          "text": "Téléchargements",
          "link": "/fr/25.10/installation/download"
        },
        {
          "text": "Installer un serveur central",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "À partir des paquets",
              "link": "/fr/25.10/installation/installation-of-a-central-server/using-packages"
            },
            {
              "text": "Unattended Install Central",
              "link": "/fr/25.10/installation/installation-of-a-central-server/unattended-install-central"
            },
            {
              "text": "À partir d'une VM",
              "link": "/fr/25.10/installation/installation-of-a-central-server/using-virtual-machines"
            }
          ]
        },
        {
          "text": "Installation Web",
          "link": "/fr/25.10/installation/web-and-post-installation"
        },
        {
          "text": "Installer un collecteur",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "À partir des paquets",
              "link": "/fr/25.10/installation/installation-of-a-poller/using-packages"
            },
            {
              "text": "Unattended Install Poller",
              "link": "/fr/25.10/installation/installation-of-a-poller/unattended-install-poller"
            }
          ]
        },
        {
          "text": "Installer un serveur distant",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "À partir des paquets",
              "link": "/fr/25.10/installation/installation-of-a-remote-server/using-packages"
            },
            {
              "text": "Unattended Install Remote",
              "link": "/fr/25.10/installation/installation-of-a-remote-server/unattended-install-remote"
            }
          ]
        },
        {
          "text": "Configurer les serveurs de supervision",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Rattacher un collecteur à un serveur central ou distant",
              "link": "/fr/25.10/monitoring/monitoring-servers/add-a-poller-to-configuration"
            },
            {
              "text": "Rattacher un serveur distant à un serveur central",
              "link": "/fr/25.10/monitoring/monitoring-servers/add-a-remote-server-to-configuration"
            },
            {
              "text": "Communications",
              "link": "/fr/25.10/monitoring/monitoring-servers/communications"
            },
            {
              "text": "Rattacher un collecteur à un serveur distant différent",
              "link": "/fr/25.10/monitoring/monitoring-servers/move-poller"
            },
            {
              "text": "Configuration avancée",
              "link": "/fr/25.10/monitoring/monitoring-servers/advanced-configuration"
            }
          ]
        },
        {
          "text": "Installation offline",
          "link": "/fr/25.10/installation/offline"
        }
      ]
    },
    {
      "text": "Sécuriser la plateforme",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Sécurisez votre plateforme",
          "link": "/fr/25.10/administration/secure-platform"
        },
        {
          "text": "Sécurisez votre plateforme MAP",
          "link": "/fr/25.10/graph-views/secure-your-map-platform"
        }
      ]
    },
    {
      "text": "Superviser des ressources",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Bases de la supervision",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Principes de base de la supervision",
              "link": "/fr/25.10/monitoring/about"
            },
            {
              "text": "Comprendre les métriques",
              "link": "/fr/25.10/monitoring/metrics"
            },
            {
              "text": "Utiliser des connecteurs de supervision",
              "link": "/fr/25.10/monitoring/pluginpacks"
            },
            {
              "text": "Déployer une configuration",
              "link": "/fr/25.10/monitoring/monitoring-servers/deploying-a-configuration"
            }
          ]
        },
        {
          "text": "Superviser des hôtes",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Mettre un hôte en supervision",
              "link": "/fr/25.10/monitoring/basic-objects/hosts-create"
            },
            {
              "text": "Créer un hôte manuellement",
              "link": "/fr/25.10/monitoring/basic-objects/hosts"
            },
            {
              "text": "Créer des hôtes automatiquement",
              "link": "/fr/25.10/monitoring/basic-objects/hosts-create-disco"
            },
            {
              "text": "Utiliser des modèles d'hôtes",
              "link": "/fr/25.10/monitoring/basic-objects/hosts-templates"
            },
            {
              "text": "Modifier le serveur de supervision pour un hôte",
              "link": "/fr/25.10/monitoring/basic-objects/hosts-switch-poller"
            }
          ]
        },
        {
          "text": "Superviser des services",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Mettre un service en supervision",
              "link": "/fr/25.10/monitoring/basic-objects/services-create"
            },
            {
              "text": "Créer un service manuellement",
              "link": "/fr/25.10/monitoring/basic-objects/services"
            },
            {
              "text": "Créer des services automatiquement",
              "link": "/fr/25.10/monitoring/basic-objects/services-create-disco"
            },
            {
              "text": "Utiliser des modèles de services",
              "link": "/fr/25.10/monitoring/basic-objects/services-templates"
            },
            {
              "text": "Créer des méta-services",
              "link": "/fr/25.10/monitoring/basic-objects/meta-services"
            }
          ]
        },
        {
          "text": "Auto-découverte d'hôtes et de services",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Introduction",
              "link": "/fr/25.10/monitoring/discovery/introduction"
            },
            {
              "text": "Installation",
              "link": "/fr/25.10/monitoring/discovery/installation"
            },
            {
              "text": "Découvrir des hôtes automatiquement",
              "link": "/fr/25.10/monitoring/discovery/hosts-discovery"
            },
            {
              "text": "Découvrir des services automatiquement",
              "link": "/fr/25.10/monitoring/discovery/services-discovery"
            },
            {
              "text": "Administration",
              "link": "/fr/25.10/monitoring/discovery/administration"
            },
            {
              "text": "Dépanner les incidents sur la découverte des hôtes",
              "link": "/fr/25.10/monitoring/discovery/troubleshooting-hosts-discovery"
            }
          ]
        },
        {
          "text": "Organiser hôtes et services",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Groupes",
              "link": "/fr/25.10/monitoring/groups"
            },
            {
              "text": "Catégories et criticités",
              "link": "/fr/25.10/monitoring/categories"
            }
          ]
        },
        {
          "text": "Objets et actions de base",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Les périodes temporelles",
              "link": "/fr/25.10/monitoring/basic-objects/timeperiods"
            },
            {
              "text": "Les macros",
              "link": "/fr/25.10/monitoring/basic-objects/macros"
            },
            {
              "text": "Les commandes",
              "link": "/fr/25.10/monitoring/basic-objects/commands"
            },
            {
              "text": "Actions génériques",
              "link": "/fr/25.10/monitoring/generic-actions"
            }
          ]
        },
        {
          "text": "Détecter des anomalies",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Anomaly Detection",
              "link": "/fr/25.10/monitoring/anomaly-detection"
            }
          ]
        },
        {
          "text": "Supervision Passive",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Activer les Traps SNMP",
              "link": "/fr/25.10/monitoring/passive-monitoring/enable-snmp-traps"
            },
            {
              "text": "Définition des Traps SNMP",
              "link": "/fr/25.10/monitoring/passive-monitoring/create-snmp-traps-definitions"
            },
            {
              "text": "Monitoring SNMP Traps",
              "link": "/fr/25.10/monitoring/passive-monitoring/monitoring-with-snmp-traps"
            },
            {
              "text": "Déboguer la gestion des traps SNMP",
              "link": "/fr/25.10/monitoring/passive-monitoring/debug-snmp-traps-management"
            },
            {
              "text": "Dynamic Service Management",
              "link": "/fr/25.10/monitoring/passive-monitoring/dsm"
            }
          ]
        },
        {
          "text": "Auto Remediation",
          "link": "/fr/25.10/monitoring/event-handler"
        },
        {
          "text": "Import/Export",
          "link": "/fr/25.10/monitoring/web-import-export"
        }
      ]
    },
    {
      "text": "Gérer évènements et alertes",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Visualiser les évènements",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Statuts possibles d'une ressource",
              "link": "/fr/25.10/alerts-notifications/concepts"
            },
            {
              "text": "Page Statut des ressources",
              "link": "/fr/25.10/alerts-notifications/resources-status"
            },
            {
              "text": "Consoles d'évènements",
              "link": "/fr/25.10/alerts-notifications/event-console"
            },
            {
              "text": "Journal des évènements",
              "link": "/fr/25.10/alerts-notifications/event-log"
            }
          ]
        },
        {
          "text": "Gérer les alertes",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Acquitter une alerte",
              "link": "/fr/25.10/alerts-notifications/acknowledge"
            },
            {
              "text": "Planifier un temps d'arrêt",
              "link": "/fr/25.10/alerts-notifications/downtimes"
            },
            {
              "text": "Soumettre un résultat",
              "link": "/fr/25.10/alerts-notifications/submit"
            },
            {
              "text": "Autres actions",
              "link": "/fr/25.10/alerts-notifications/other"
            }
          ]
        },
        {
          "text": "Gérer les notifications",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Fonctionnement des notifications",
              "link": "/fr/25.10/alerts-notifications/notif-concept"
            },
            {
              "text": "Configurer les notifications",
              "link": "/fr/25.10/alerts-notifications/notif-configuration"
            },
            {
              "text": "Types de notifications",
              "collapsible": true,
              "collapsed": true,
              "items": [
                {
                  "text": "Notifications par email",
                  "link": "/fr/25.10/alerts-notifications/notif-email"
                },
                {
                  "text": "Notifications Microsoft Teams",
                  "link": "/fr/25.10/alerts-notifications/notif-config-for-teams"
                },
                {
                  "text": "Sms Notifications",
                  "link": "/fr/25.10/integrations/notifications/sms-notifications"
                },
                {
                  "text": "Slack Notifications",
                  "link": "/fr/25.10/integrations/notifications/slack-notifications"
                },
                {
                  "text": "Notifications Telegram",
                  "link": "/fr/25.10/integrations/notifications/plugin-telegram"
                }
              ]
            },
            {
              "text": "Les dépendances",
              "link": "/fr/25.10/alerts-notifications/notif-dependencies"
            },
            {
              "text": "Les escalades de notifications",
              "link": "/fr/25.10/alerts-notifications/notif-escalation"
            },
            {
              "text": "Bagotement (flapping)",
              "link": "/fr/25.10/alerts-notifications/notif-flapping"
            },
            {
              "text": "Pour aller plus loin",
              "link": "/fr/25.10/alerts-notifications/notif-advanced"
            }
          ]
        },
        {
          "text": "Gérer des tickets",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Installation d'Open Tickets",
              "link": "/fr/25.10/alerts-notifications/ticketing-install"
            },
            {
              "text": "Configuration",
              "link": "/fr/25.10/alerts-notifications/ticketing"
            }
          ]
        }
      ]
    },
    {
      "text": "Gérer les utilisateurs de Centreon",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Les utilisateurs/contacts",
          "link": "/fr/25.10/monitoring/basic-objects/contacts"
        },
        {
          "text": "Créer des utilisateurs/contacts manuellement",
          "link": "/fr/25.10/monitoring/basic-objects/contacts-create"
        },
        {
          "text": "Utiliser des modèles de contacts",
          "link": "/fr/25.10/monitoring/basic-objects/contacts-templates"
        },
        {
          "text": "Utiliser des groupes de contacts",
          "link": "/fr/25.10/monitoring/basic-objects/contacts-groups"
        },
        {
          "text": "Gérer les droits des utilisateurs Centreon (ACL)",
          "link": "/fr/25.10/administration/access-control-lists"
        },
        {
          "text": "Changer les paramètres de votre compte Centreon",
          "link": "/fr/25.10/monitoring/basic-objects/customization"
        }
      ]
    },
    {
      "text": "Service Mapping",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Introduction à Centreon BAM",
          "link": "/fr/25.10/service-mapping/introduction"
        },
        {
          "text": "Guide",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Gestion",
              "link": "/fr/25.10/service-mapping/ba-management"
            },
            {
              "text": "Supervision",
              "link": "/fr/25.10/service-mapping/ba-monitoring"
            },
            {
              "text": "Reporting",
              "link": "/fr/25.10/service-mapping/ba-reporting"
            },
            {
              "text": "Paramètres",
              "link": "/fr/25.10/service-mapping/ba-settings"
            },
            {
              "text": "Widgets",
              "link": "/fr/25.10/service-mapping/widgets"
            }
          ]
        },
        {
          "text": "Administrer",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Installer l'extension Centreon BAM",
              "link": "/fr/25.10/service-mapping/install"
            },
            {
              "text": "Mettre à jour l'extension",
              "link": "/fr/25.10/service-mapping/update"
            },
            {
              "text": "Monter de version l'extension",
              "link": "/fr/25.10/service-mapping/upgrade"
            },
            {
              "text": "Installer sur un Remote Server",
              "link": "/fr/25.10/service-mapping/remote-server"
            }
          ]
        }
      ]
    },
    {
      "text": "Visualisation des données",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Tableaux de bord",
          "link": "/fr/25.10/alerts-notifications/dashboards"
        },
        {
          "text": "Graphiques de performance",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Gestion des graphiques",
              "link": "/fr/25.10/metrology/chart-management"
            },
            {
              "text": "Chart Template",
              "link": "/fr/25.10/metrology/chart-template"
            },
            {
              "text": "Chart Curves",
              "link": "/fr/25.10/metrology/chart-curves"
            },
            {
              "text": "Chart Virtual Metrics",
              "link": "/fr/25.10/metrology/chart-virtual-metrics"
            },
            {
              "text": "Visualiser des données Centreon dans Grafana",
              "link": "/fr/25.10/metrology/grafana"
            }
          ]
        },
        {
          "text": "Vues graphiques (cartes)",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Introduction à Centreon MAP",
              "link": "/fr/25.10/graph-views/introduction-map"
            },
            {
              "text": "Informations pour les utilisateurs de MAP Legacy",
              "collapsible": true,
              "collapsed": true,
              "items": [
                {
                  "text": "Fin de vie de MAP Legacy",
                  "link": "/fr/25.10/graph-views/map-legacy-eol"
                },
                {
                  "text": "Monter MAP Legacy en 25.10",
                  "link": "/fr/25.10/graph-views/upgrading-map-legacy"
                },
                {
                  "text": "Passer de MAP (Legacy) à MAP",
                  "link": "/fr/25.10/graph-views/import-into-map-web"
                }
              ]
            },
            {
              "text": "Installer MAP",
              "link": "/fr/25.10/graph-views/map-web-install"
            },
            {
              "text": "Installer MAP sur un serveur distant",
              "link": "/fr/25.10/graph-views/map-web-install-remote"
            },
            {
              "text": "Mettre à jour MAP",
              "link": "/fr/25.10/graph-views/map-web-update"
            },
            {
              "text": "Monter de version MAP",
              "link": "/fr/25.10/graph-views/map-web-upgrade"
            },
            {
              "text": "Gérer les droits d'accès dans MAP",
              "link": "/fr/25.10/graph-views/map-web-access"
            },
            {
              "text": "Gérer les cartes dans MAP",
              "link": "/fr/25.10/graph-views/map-web-manage"
            },
            {
              "text": "Créer une carte standard",
              "link": "/fr/25.10/graph-views/map-web-create-standard-map"
            },
            {
              "text": "Créer une vue géographique",
              "link": "/fr/25.10/graph-views/map-web-create-geoview"
            },
            {
              "text": "Migrer l'extension",
              "link": "/fr/25.10/graph-views/map-web-migrate"
            },
            {
              "text": "Configuration avancée dans MAP",
              "link": "/fr/25.10/graph-views/map-web-advanced-configuration"
            },
            {
              "text": "Paramètres avancés dans MAP",
              "link": "/fr/25.10/graph-views/map-web-advanced"
            },
            {
              "text": "Sauvegarder et restaurer votre serveur Centreon MAP",
              "link": "/fr/25.10/graph-views/map-web-backup-restore"
            },
            {
              "text": "Problèmes connus dans MAP",
              "link": "/fr/25.10/graph-views/map-web-known-issues"
            },
            {
              "text": "Dépannage de MAP",
              "link": "/fr/25.10/graph-views/map-web-troubleshooting"
            },
            {
              "text": "Map Api",
              "link": "/fr/25.10/api/map-api"
            }
          ]
        },
        {
          "text": "Vues personnalisées (legacy)",
          "link": "/fr/25.10/alerts-notifications/custom-views"
        },
        {
          "text": "Rapports de disponibilité",
          "link": "/fr/25.10/alerts-notifications/availability"
        }
      ]
    },
    {
      "text": "Reporting (MBI)",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Introduction à Centreon MBI",
          "link": "/fr/25.10/reporting/introduction"
        },
        {
          "text": "Concepts MBI",
          "link": "/fr/25.10/reporting/concepts"
        },
        {
          "text": "Comment fonctionne MBI ?",
          "link": "/fr/25.10/reporting/how-mbi-works"
        },
        {
          "text": "Installer MBI",
          "link": "/fr/25.10/reporting/installation"
        },
        {
          "text": "Utiliser MBI",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Préparer les données pour pouvoir générer des rapports",
              "link": "/fr/25.10/reporting/preparing-data"
            },
            {
              "text": "Générer des rapports grâce aux tâches planifiées",
              "link": "/fr/25.10/reporting/generating-reports"
            },
            {
              "text": "Publier vos rapports",
              "link": "/fr/25.10/reporting/reports-publication-rule"
            },
            {
              "text": "Donner accès aux rapports et tâches dans Centreon",
              "link": "/fr/25.10/reporting/share"
            },
            {
              "text": "Widgets MBI",
              "link": "/fr/25.10/reporting/widgets"
            }
          ]
        },
        {
          "text": "Résoudre les problèmes MBI",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Dépanner MBI",
              "link": "/fr/25.10/reporting/troubleshooting"
            },
            {
              "text": "Reconstruire les données MBI",
              "link": "/fr/25.10/reporting/rebuilding-data"
            }
          ]
        },
        {
          "text": "Administration de MBI",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Sauvegarder et restaurer MBI",
              "link": "/fr/25.10/reporting/backup-restore"
            },
            {
              "text": "Mise à jour de l'extension",
              "link": "/fr/25.10/reporting/update"
            },
            {
              "text": "Monter de version l'extension",
              "link": "/fr/25.10/reporting/upgrade"
            },
            {
              "text": "Migrer l'extension",
              "link": "/fr/25.10/reporting/migrate"
            },
            {
              "text": "Créer des rapports personnalisés",
              "link": "/fr/25.10/reporting/report-development"
            }
          ]
        },
        {
          "text": "Rapports disponibles",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Rapports d'activité métier (BAM)",
              "link": "/fr/25.10/reporting/available-reports/ba-monitoring-reports"
            },
            {
              "text": "Rapports disponibilité et événements",
              "link": "/fr/25.10/reporting/available-reports/availability-events-reports"
            },
            {
              "text": "Rapports de performance",
              "link": "/fr/25.10/reporting/available-reports/performance-reports"
            },
            {
              "text": "Rapports de stockage",
              "link": "/fr/25.10/reporting/available-reports/storage-reports"
            },
            {
              "text": "Rapports de réseau",
              "link": "/fr/25.10/reporting/available-reports/network-reports"
            },
            {
              "text": "Rapports de virtualisation",
              "link": "/fr/25.10/reporting/available-reports/virtualization-reports"
            },
            {
              "text": "Rapports de consommation électrique",
              "link": "/fr/25.10/reporting/available-reports/electric-consumption-reports"
            },
            {
              "text": "Rapports de profiling",
              "link": "/fr/25.10/reporting/available-reports/profiling-reports"
            },
            {
              "text": "Rapports d'inventaire et de configuration",
              "link": "/fr/25.10/reporting/available-reports/inventory-configuration-reports"
            },
            {
              "text": "Rapports de diagnostic de la base de données",
              "link": "/fr/25.10/reporting/available-reports/database-diagnostics-reports"
            }
          ],
          "link": "/fr/25.10/reporting/available-reports/available-reports"
        }
      ]
    },
    {
      "text": "Administrer",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Paramètres",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Centreon UI",
              "link": "/fr/25.10/administration/parameters/centreon-ui"
            },
            {
              "text": "Supervision",
              "link": "/fr/25.10/administration/parameters/monitoring"
            },
            {
              "text": "Gorgone",
              "link": "/fr/25.10/administration/parameters/gorgone"
            },
            {
              "text": "RRDTool",
              "link": "/fr/25.10/administration/parameters/rrdtool"
            },
            {
              "text": "Débogage",
              "link": "/fr/25.10/administration/parameters/debug"
            },
            {
              "text": "Gestion des données",
              "link": "/fr/25.10/administration/parameters/data-management"
            },
            {
              "text": "Medias",
              "link": "/fr/25.10/administration/parameters/medias"
            }
          ]
        },
        {
          "text": "Customize Centreon",
          "link": "/fr/25.10/administration/customize-centreon"
        },
        {
          "text": "Paramétrer la connexion à Centreon",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Configurer une authentification locale",
              "link": "/fr/25.10/connect/loginpwd"
            },
            {
              "text": "Connecter Centreon à un annuaire LDAP",
              "link": "/fr/25.10/administration/parameters/ldap"
            },
            {
              "text": "Configurer une authentification par SSO",
              "link": "/fr/25.10/connect/sso"
            },
            {
              "text": "Configurer une authentification par OpenId Connect",
              "link": "/fr/25.10/connect/openid"
            },
            {
              "text": "Configurer une authentification par SAML",
              "link": "/fr/25.10/connect/saml"
            },
            {
              "text": "Configurer une authentification par Autologin",
              "link": "/fr/25.10/connect/autologin"
            }
          ]
        },
        {
          "text": "Extensions",
          "link": "/fr/25.10/administration/extensions"
        },
        {
          "text": "Licences",
          "link": "/fr/25.10/administration/licenses"
        },
        {
          "text": "Partitionnement des bases de données",
          "link": "/fr/25.10/administration/database-partitioning"
        },
        {
          "text": "Reprise après sinistre",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Sauvegarder et restaurer votre serveur central",
              "link": "/fr/25.10/administration/backup"
            },
            {
              "text": "Sauvegarder et restaurer vos collecteurs",
              "link": "/fr/25.10/administration/backup-poller"
            }
          ],
          "link": "/fr/25.10/administration/disaster-recovery"
        },
        {
          "text": "Base de connaissance",
          "link": "/fr/25.10/administration/knowledge-base"
        },
        {
          "text": "Journalisation des modifications de configuration",
          "link": "/fr/25.10/administration/logging-configuration-changes"
        },
        {
          "text": "Statistiques de la plateforme",
          "link": "/fr/25.10/administration/platform-statistics"
        },
        {
          "text": "Configurer l'envoi d'emails",
          "link": "/fr/25.10/administration/postfix"
        },
        {
          "text": "Optimiser le trafic vers les bases de données",
          "link": "/fr/25.10/administration/sql-proxy"
        }
      ]
    },
    {
      "text": "Mettre à jour, monter de version et migrer",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Mettre à jour (version mineure)",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Mise à jour d'une plateforme Centreon 25.10",
              "link": "/fr/25.10/update/update-centreon-platform"
            }
          ]
        },
        {
          "text": "Monter de version (version majeure)",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Introduction à la montée de version",
              "link": "/fr/25.10/upgrade/introduction"
            },
            {
              "text": "Montée de version depuis Centreon 24.10",
              "link": "/fr/25.10/upgrade/upgrade-from-24-10"
            },
            {
              "text": "Montée de version depuis Centreon 24.04",
              "link": "/fr/25.10/upgrade/upgrade-from-24-04"
            },
            {
              "text": "Montée de version depuis Centreon 23.10",
              "link": "/fr/25.10/upgrade/upgrade-from-23-10"
            },
            {
              "text": "Montée de version depuis Centreon 23.04",
              "link": "/fr/25.10/upgrade/upgrade-from-23-04"
            },
            {
              "text": "Montée de version depuis Centreon 22.10",
              "link": "/fr/25.10/upgrade/upgrade-from-22-10"
            },
            {
              "text": "Montée de version depuis Centreon 22.04",
              "link": "/fr/25.10/upgrade/upgrade-from-22-04"
            },
            {
              "text": "Montée de version depuis Centreon 21.10",
              "link": "/fr/25.10/upgrade/upgrade-from-21-10"
            },
            {
              "text": "Montée de version depuis Centreon 21.04",
              "link": "/fr/25.10/upgrade/upgrade-from-21-04"
            },
            {
              "text": "Montée de version depuis Centreon 20.10",
              "link": "/fr/25.10/upgrade/upgrade-from-20-10"
            },
            {
              "text": "Mettre à jour MariaDB",
              "link": "/fr/25.10/upgrade/upgrade-mariadb"
            },
            {
              "text": "Mettre à jour MySQL",
              "link": "/fr/25.10/upgrade/upgrade-mysql"
            }
          ]
        },
        {
          "text": "Migrer sur un nouveau serveur",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Introduction à la migration",
              "link": "/fr/25.10/migrate/introduction"
            },
            {
              "text": "Migrer depuis un OS de type EL vers un autre OS de type EL (depuis un Centreon 18.10 ou plus récent)",
              "link": "/fr/25.10/migrate/migrate-from-el-to-el"
            },
            {
              "text": "Migrer depuis un OS de type EL vers Debian",
              "link": "/fr/25.10/migrate/migrate-from-el-to-debian"
            },
            {
              "text": "Migrer depuis Debian 11 vers Debian 12",
              "link": "/fr/25.10/migrate/migrate-from-debian-to-debian"
            },
            {
              "text": "Migration depuis une plateforme Centreon 3.4",
              "link": "/fr/25.10/migrate/migrate-from-3-4"
            },
            {
              "text": "Nagios Reader vers Centreon CLAPI",
              "link": "/fr/25.10/migrate/nagios-to-centreon"
            },
            {
              "text": "Migration d'une plate-forme avec Poller Display",
              "link": "/fr/25.10/migrate/poller-display-to-remote-server"
            },
            {
              "text": "Developer Gorgone Migrate From Centcore",
              "link": "/fr/25.10/developer/developer-gorgone-migrate-from-centcore"
            }
          ]
        }
      ]
    },
    {
      "text": "Centreon Monitoring Agent",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Introduction à l'agent CMA",
          "link": "/fr/25.10/cma/cma"
        },
        {
          "text": "Configurer l’environnement de l’agent",
          "link": "/fr/25.10/cma/cma-setup"
        },
        {
          "text": "Configurer les certificats",
          "link": "/fr/25.10/cma/cma-certificates"
        },
        {
          "text": "Utiliser des plugins personnalisés avec CMA",
          "link": "/fr/25.10/cma/cma-custom"
        },
        {
          "text": "Migrer vers CMA depuis NSClient++",
          "link": "/fr/25.10/cma/cma-migratenscpp"
        },
        {
          "text": "Dépanner l'agent CMA",
          "link": "/fr/25.10/cma/cma-troubleshooting"
        }
      ]
    },
    {
      "text": "Intégrations",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Stream connectors",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Stream connectors release notes",
              "link": "/fr/25.10/integrations/stream-connectors-rn"
            },
            {
              "text": "Sc Hp Bsm",
              "link": "/fr/25.10/integrations/event-management/sc-hp-bsm"
            },
            {
              "text": "Canopsis Events",
              "link": "/fr/25.10/integrations/data-analytics/sc-canopsis-events"
            },
            {
              "text": "Clickhouse",
              "link": "/fr/25.10/integrations/data-analytics/sc-clickhouse"
            },
            {
              "text": "Datadog Events",
              "link": "/fr/25.10/integrations/data-analytics/sc-datadog-events"
            },
            {
              "text": "Datadog Metrics",
              "link": "/fr/25.10/integrations/data-analytics/sc-datadog-metrics"
            },
            {
              "text": "Elastic Events",
              "link": "/fr/25.10/integrations/data-analytics/sc-elastic-events"
            },
            {
              "text": "Sc Elastic Metrics",
              "link": "/fr/25.10/integrations/data-analytics/sc-elastic-metrics"
            },
            {
              "text": "Sc Hp Omi",
              "link": "/fr/25.10/integrations/event-management/sc-hp-omi"
            },
            {
              "text": "InfluxDB 2 Metrics",
              "link": "/fr/25.10/integrations/data-analytics/sc-influxdb2-metrics"
            },
            {
              "text": "Kafka Event Manager",
              "link": "/fr/25.10/integrations/data-analytics/sc-kafka-events"
            },
            {
              "text": "Logstash Events",
              "link": "/fr/25.10/integrations/data-analytics/sc-logstash-events"
            },
            {
              "text": "Sc Opsgenie Events",
              "link": "/fr/25.10/integrations/event-management/sc-opsgenie-events"
            },
            {
              "text": "PagerDuty Events",
              "link": "/fr/25.10/integrations/event-management/sc-pagerduty-events"
            },
            {
              "text": "ServiceNow Event Manager Events",
              "link": "/fr/25.10/integrations/event-management/sc-service-now-em-events"
            },
            {
              "text": "ServiceNow Incident",
              "link": "/fr/25.10/integrations/event-management/sc-service-now-incident-events"
            },
            {
              "text": "Signl4 Events",
              "link": "/fr/25.10/integrations/event-management/sc-signl4-events"
            },
            {
              "text": "Splunk Events",
              "link": "/fr/25.10/integrations/data-analytics/sc-splunk-events"
            },
            {
              "text": "Splunk Metrics",
              "link": "/fr/25.10/integrations/data-analytics/sc-splunk-metrics"
            },
            {
              "text": "Warp10",
              "link": "/fr/25.10/integrations/data-analytics/sc-warp10"
            }
          ],
          "link": "/fr/25.10/integrations/stream-connectors"
        },
        {
          "text": "ITSM",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "BMC Footprints",
              "link": "/fr/25.10/integrations/itsm/ot-bmc-footprints"
            },
            {
              "text": "BMC Remedy",
              "link": "/fr/25.10/integrations/itsm/ot-bmc-remedy"
            },
            {
              "text": "EasyVista API SOAP",
              "link": "/fr/25.10/integrations/itsm/ot-easyvista"
            },
            {
              "text": "EasyVista API Rest",
              "link": "/fr/25.10/integrations/itsm/ot-easyvista-rest-api"
            },
            {
              "text": "GLPI",
              "link": "/fr/25.10/integrations/itsm/ot-glpi"
            },
            {
              "text": "Ot Glpi Restapi",
              "link": "/fr/25.10/integrations/itsm/ot-glpi-restapi"
            },
            {
              "text": "iTop",
              "link": "/fr/25.10/integrations/itsm/ot-itop"
            },
            {
              "text": "Jira",
              "link": "/fr/25.10/integrations/itsm/ot-jira"
            },
            {
              "text": "Mail",
              "link": "/fr/25.10/integrations/itsm/ot-mail"
            },
            {
              "text": "Ot Otrs Restapi",
              "link": "/fr/25.10/integrations/itsm/ot-otrs-restapi"
            },
            {
              "text": "Ot Request Tracker Restapi",
              "link": "/fr/25.10/integrations/itsm/ot-request-tracker-restapi"
            },
            {
              "text": "Serena",
              "link": "/fr/25.10/integrations/itsm/ot-serena"
            },
            {
              "text": "Ot Servicenow",
              "link": "/fr/25.10/integrations/itsm/ot-servicenow"
            }
          ],
          "link": "/fr/25.10/integrations/itsm/itsm-overview"
        },
        {
          "text": "NPM",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Widget NtopNG",
              "link": "/fr/25.10/integrations/npm/ntopng"
            }
          ]
        }
      ],
      "link": "/fr/25.10/integrations/introduction-integrations"
    },
    {
      "text": "Centreon mobile",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Introduction",
          "link": "/fr/25.10/mobile/introduction"
        }
      ]
    },
    {
      "text": "API",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Introduction",
          "link": "/fr/25.10/api/introduction"
        },
        {
          "text": "Command Line API (v1) - CLAPI",
          "link": "/fr/25.10/api/clapi"
        },
        {
          "text": "Rest API (v1)",
          "link": "/fr/25.10/api/rest-api-v1"
        },
        {
          "text": "Utiliser l'API v2 avec Postman",
          "link": "/fr/25.10/api/rest-api-v2"
        },
        {
          "text": "Map Api",
          "link": "/fr/25.10/api/map-api"
        },
        {
          "text": "Jetons d'API",
          "link": "/fr/25.10/api/api-tokens"
        }
      ]
    },
    {
      "text": "Ressources développeur",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Comment écrire un Stream Connector",
          "link": "/fr/25.10/developer/developer-stream-connector"
        },
        {
          "text": "Developer Broker Stream Connector Migration",
          "link": "/fr/25.10/developer/developer-broker-stream-connector-migration"
        },
        {
          "text": "Comment écrire un widget",
          "link": "/fr/25.10/developer/developer-widget"
        },
        {
          "text": "Mcp Server",
          "link": "/fr/25.10/developer/mcp-server"
        },
        {
          "text": "Centreon Broker",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Developer Broker Stream Connector",
              "link": "/fr/25.10/developer/developer-broker-stream-connector"
            },
            {
              "text": "Le protocole BBDO",
              "link": "/fr/25.10/developer/developer-broker-bbdo"
            },
            {
              "text": "Changer de version de BBDO",
              "link": "/fr/25.10/developer/developer-broker-bbdo-switch-versions"
            },
            {
              "text": "Mapping d’évènements Centreon Broker",
              "link": "/fr/25.10/developer/developer-broker-mapping"
            }
          ],
          "link": "/fr/25.10/developer/centreon-broker"
        },
        {
          "text": "Centreon Gorgone",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Developer Gorgone Client Server Communication",
              "link": "/fr/25.10/developer/developer-gorgone-client-server-communication"
            },
            {
              "text": "Developer Gorgone Pull Mode",
              "link": "/fr/25.10/developer/developer-gorgone-pull-mode"
            },
            {
              "text": "Developer Gorgone Rebound Mode",
              "link": "/fr/25.10/developer/developer-gorgone-rebound-mode"
            }
          ],
          "link": "/fr/25.10/developer/centreon-gorgone"
        }
      ]
    },
    {
      "text": "Centreon HA",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Ha Faq",
          "link": "/fr/25.10/installation/installation-of-centreon-ha/ha-faq"
        },
        {
          "text": "Éléments d'un cluster Centreon HA",
          "link": "/fr/25.10/installation/installation-of-centreon-ha/cluster-elements"
        },
        {
          "text": "Fonctionnement de Centreon HA",
          "link": "/fr/25.10/installation/installation-of-centreon-ha/overview"
        },
        {
          "text": "Ha Prerequisites",
          "link": "/fr/25.10/installation/installation-of-centreon-ha/ha-prerequisites"
        },
        {
          "text": "Centreon HA pour les petites infrastructures",
          "link": "/fr/25.10/installation/installation-of-centreon-ha/ha-small"
        },
        {
          "text": "Completing your Centreon HA setup",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Intégrer des collecteurs dans un cluster Centreon HA",
              "link": "/fr/25.10/installation/installation-of-centreon-ha/integrating-pollers"
            },
            {
              "text": "Superviser Centreon HA",
              "link": "/fr/25.10/administration/centreon-ha/monitoring-guide"
            }
          ]
        },
        {
          "text": "Faire fonctionner Centreon HA",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Guide d'utilisation",
              "link": "/fr/25.10/administration/centreon-ha/operating-guide"
            },
            {
              "text": "Dépanner la HA",
              "link": "/fr/25.10/administration/centreon-ha/troubleshooting-guide"
            }
          ]
        },
        {
          "text": "Mettre à jour Centreon HA",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Mise à jour d'une plateforme Centreon HA",
              "link": "/fr/25.10/update/update-centreon-ha"
            }
          ]
        },
        {
          "text": "Monter de version Centreon HA",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Upgrade Centreon Ha From 24 10",
              "link": "/fr/25.10/upgrade/centreon-ha/upgrade-centreon-ha-from-24-10"
            },
            {
              "text": "Upgrade Centreon Ha From 24 04",
              "link": "/fr/25.10/upgrade/centreon-ha/upgrade-centreon-ha-from-24-04"
            },
            {
              "text": "Upgrade Centreon Ha From 23 10",
              "link": "/fr/25.10/upgrade/centreon-ha/upgrade-centreon-ha-from-23-10"
            },
            {
              "text": "Upgrade Centreon Ha From 23 04",
              "link": "/fr/25.10/upgrade/centreon-ha/upgrade-centreon-ha-from-23-04"
            },
            {
              "text": "Upgrade Centreon Ha From 22 10",
              "link": "/fr/25.10/upgrade/centreon-ha/upgrade-centreon-ha-from-22-10"
            },
            {
              "text": "Upgrade Centreon Ha From 22 04",
              "link": "/fr/25.10/upgrade/centreon-ha/upgrade-centreon-ha-from-22-04"
            },
            {
              "text": "Upgrade Centreon Ha From 21 10",
              "link": "/fr/25.10/upgrade/centreon-ha/upgrade-centreon-ha-from-21-10"
            },
            {
              "text": "Upgrade Centreon Ha From 21 04",
              "link": "/fr/25.10/upgrade/centreon-ha/upgrade-centreon-ha-from-21-04"
            }
          ]
        }
      ],
      "link": "/fr/25.10/installation/installation-of-centreon-ha/centreon-ha"
    },
    {
      "text": "Releases",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Notes de release Centreon Infra Monitoring 25.10",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Centreon Os",
              "link": "/fr/25.10/releases/centreon-os"
            },
            {
              "text": "Centreon Commercial Extensions",
              "link": "/fr/25.10/releases/centreon-commercial-extensions"
            }
          ],
          "link": "/fr/25.10/releases/introduction"
        },
        {
          "text": "Politique de cycle de vie des solutions",
          "link": "/fr/25.10/releases/lifecycle"
        }
      ]
    },
    {
      "text": "Sécurité",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Centreon et la sécurité",
          "link": "/fr/25.10/security/security"
        },
        {
          "text": "Rotation de clés",
          "link": "/fr/25.10/security/key-rotation"
        },
        {
          "text": "Stockage des données utilisateur",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Conformité RGPD",
              "link": "/fr/25.10/security/user-data-storage/gdpr-compliance"
            },
            {
              "text": "Qu'est-ce que Centreon CEIP?",
              "link": "/fr/25.10/security/user-data-storage/what-is-centreon-ceip"
            }
          ]
        }
      ]
    },
    {
      "text": "Ressources",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Problèmes connus",
          "link": "/fr/25.10/resources/known-issues"
        },
        {
          "text": "Dépannage de la plateforme Centreon",
          "link": "/fr/25.10/resources/troubleshooting"
        },
        {
          "text": "Liste des logs Centreon",
          "link": "/fr/25.10/resources/logs"
        },
        {
          "text": "Glossaire des concepts Centreon",
          "link": "/fr/25.10/resources/glossary"
        },
        {
          "text": "Contribuer à la documentation Centreon",
          "link": "/fr/25.10/resources/contribute"
        }
      ]
    }
  ]
};
