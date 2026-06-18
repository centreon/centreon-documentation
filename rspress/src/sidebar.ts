import type { Sidebar } from '@rspress/shared';

export const sidebar: Sidebar = {
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
        },
        {
          "text": "Secure your MBI platform",
          "link": "/25.10/reporting/secure-your-mbi-platform"
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
              "text": "Kafka Events",
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
              "text": "ServiceNow Incident Events",
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
  "/pp/": [
    {
      "text": "Getting started with Monitoring Connectors",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "How-to guides",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Customizing plugin behavior",
              "link": "/pp/integrations/plugin-packs/getting-started/how-to-guides/plugin-customization"
            },
            {
              "text": "Centreon Monitoring Agent",
              "link": "/pp/integrations/plugin-packs/getting-started/how-to-guides/cma/cma"
            },
            {
              "text": "Azure Monitoring Prerequisites",
              "link": "/pp/integrations/plugin-packs/getting-started/how-to-guides/azure-credential-configuration"
            },
            {
              "text": "Centreon NSClient++",
              "link": "/pp/integrations/plugin-packs/getting-started/how-to-guides/centreon-nsclient-tutorial"
            },
            {
              "text": "Telegraf",
              "link": "/pp/integrations/plugin-packs/getting-started/how-to-guides/telegraf"
            },
            {
              "text": "Collect OpenMetrics",
              "link": "/pp/integrations/plugin-packs/getting-started/how-to-guides/collect-openmetrics"
            },
            {
              "text": "Additional Connector Configuration",
              "link": "/pp/integrations/plugin-packs/getting-started/how-to-guides/additional-connector-configuration"
            },
            {
              "text": "Troubleshooting Plugin errors",
              "link": "/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"
            },
            {
              "text": "Windows WSMAN Configuration tutorial",
              "link": "/pp/integrations/plugin-packs/getting-started/how-to-guides/windows-winrm-wsman-tutorial"
            },
            {
              "text": "Offline/online licenses and connectors",
              "link": "/pp/integrations/plugin-packs/getting-started/how-to-guides/connectors-licenses"
            }
          ]
        },
        {
          "text": "Release Notes",
          "link": "/pp/integrations/plugin-packs/releases/release-notes"
        },
        {
          "text": "Developers Center",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Getting started - Plugin development",
              "link": "/pp/integrations/plugin-packs/dev-resources/introduction"
            },
            {
              "text": "Plugins development guidelines",
              "link": "/pp/integrations/plugin-packs/dev-resources/plugins-guidelines"
            },
            {
              "text": "Develop with centreon-plugins",
              "link": "/pp/integrations/plugin-packs/dev-resources/develop-with-centreon-plugins"
            }
          ]
        }
      ],
      "link": "/pp/integrations/plugin-packs/getting-started/introduction"
    },
    {
      "text": "Applications",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "3CX",
          "link": "/pp/integrations/plugin-packs/procedures/applications-voip-3cx-restapi"
        },
        {
          "text": "Absyss VTOM Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-vtom-restapi"
        },
        {
          "text": "ActiveMQ JMX",
          "link": "/pp/integrations/plugin-packs/procedures/applications-activemq-jmx"
        },
        {
          "text": "Alyvix Server",
          "link": "/pp/integrations/plugin-packs/procedures/applications-monitoring-alyvix-restapi"
        },
        {
          "text": "Ansible CLI",
          "link": "/pp/integrations/plugin-packs/procedures/applications-ansible-cli"
        },
        {
          "text": "Ansible Tower",
          "link": "/pp/integrations/plugin-packs/procedures/applications-ansible-tower"
        },
        {
          "text": "Antivirus ClamAV",
          "link": "/pp/integrations/plugin-packs/procedures/applications-antivirus-clamav-ssh"
        },
        {
          "text": "Apache CXF",
          "link": "/pp/integrations/plugin-packs/procedures/applications-apache-cxf-jmx"
        },
        {
          "text": "Apache Server",
          "link": "/pp/integrations/plugin-packs/procedures/applications-webservers-apache-serverstatus"
        },
        {
          "text": "Asterisk VoIP AMI",
          "link": "/pp/integrations/plugin-packs/procedures/applications-voip-asterisk-ami"
        },
        {
          "text": "Asterisk VoIP SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/applications-voip-asterisk-snmp"
        },
        {
          "text": "AWA (Automic Workload Automation) JMX",
          "link": "/pp/integrations/plugin-packs/procedures/applications-awa-jmx"
        },
        {
          "text": "Bind9 Web",
          "link": "/pp/integrations/plugin-packs/procedures/applications-bind9-web"
        },
        {
          "text": "BlueMind (deprecated)",
          "link": "/pp/integrations/plugin-packs/procedures/applications-mail-bluemind"
        },
        {
          "text": "BlueMind SSH",
          "link": "/pp/integrations/plugin-packs/procedures/applications-bluemind-ssh"
        },
        {
          "text": "Cassandra",
          "link": "/pp/integrations/plugin-packs/procedures/applications-databases-cassandra-jmx"
        },
        {
          "text": "Ceph Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-ceph-restapi"
        },
        {
          "text": "Cisco CMS",
          "link": "/pp/integrations/plugin-packs/procedures/applications-cisco-cms-restapi"
        },
        {
          "text": "Cisco DNA Center Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-cisco-dnac-restapi"
        },
        {
          "text": "Cisco ISE",
          "link": "/pp/integrations/plugin-packs/procedures/applications-cisco-ise-restapi"
        },
        {
          "text": "Cisco SSMS",
          "link": "/pp/integrations/plugin-packs/procedures/applications-cisco-ssms-restapi"
        },
        {
          "text": "Commvault CommServe Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-commvault-commserve-restapi"
        },
        {
          "text": "Control-M Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-controlm-restapi"
        },
        {
          "text": "Docker REST API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-docker-restapi"
        },
        {
          "text": "DRBD SSH",
          "link": "/pp/integrations/plugin-packs/procedures/applications-drbd-ssh"
        },
        {
          "text": "Dynamics AX Database",
          "link": "/pp/integrations/plugin-packs/procedures/applications-dynamics-ax-mssql"
        },
        {
          "text": "Dynamics365 NSClient 0.5 NRPE",
          "link": "/pp/integrations/plugin-packs/procedures/applications-dynamics-365-nsclient-05-nrpe"
        },
        {
          "text": "Dynatrace Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-monitoring-dynatrace-restapi"
        },
        {
          "text": "Eclipse Mosquitto MQTT",
          "link": "/pp/integrations/plugin-packs/procedures/applications-eclipse-mosquitto-mqtt"
        },
        {
          "text": "EMC PPMA Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-emc-ppma-restapi"
        },
        {
          "text": "Ericsson ENM API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-ericsson-enm-api"
        },
        {
          "text": "Exense Step REST API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-exense-step-restapi"
        },
        {
          "text": "GitHub Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-github-restapi"
        },
        {
          "text": "Google Gsuite (deprecated)",
          "link": "/pp/integrations/plugin-packs/procedures/applications-google-gsuite-api"
        },
        {
          "text": "Google Workspace",
          "link": "/pp/integrations/plugin-packs/procedures/applications-google-workspace-api"
        },
        {
          "text": "Grafana",
          "link": "/pp/integrations/plugin-packs/procedures/applications-grafana-api"
        },
        {
          "text": "Graylog",
          "link": "/pp/integrations/plugin-packs/procedures/applications-graylog-restapi"
        },
        {
          "text": "Haproxy SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/applications-haproxy-snmp"
        },
        {
          "text": "HAProxy Web API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-haproxy-web"
        },
        {
          "text": "HashiCorp Vault Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-hashicorp-vault-restapi"
        },
        {
          "text": "Hddtemp TCP",
          "link": "/pp/integrations/plugin-packs/procedures/applications-hddtemp-tcp"
        },
        {
          "text": "Hibernate",
          "link": "/pp/integrations/plugin-packs/procedures/applications-hibernate-jmx"
        },
        {
          "text": "IBM MQ MQI",
          "link": "/pp/integrations/plugin-packs/procedures/applications-ibmmq-mqi"
        },
        {
          "text": "IBM MQ Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-ibmmq-restapi"
        },
        {
          "text": "IBM Tivoli Storage M",
          "link": "/pp/integrations/plugin-packs/procedures/applications-ibm-tsm-dsmadmc"
        },
        {
          "text": "IBM TSAMP SSH",
          "link": "/pp/integrations/plugin-packs/procedures/applications-ibm-tsamp-ssh"
        },
        {
          "text": "Infor ION Grid Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-infor-ion-grid-restapi"
        },
        {
          "text": "IP Fabric API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-ipfabric-api"
        },
        {
          "text": "IP-Label datametrie API (deprecated)",
          "link": "/pp/integrations/plugin-packs/procedures/applications-monitoring-iplabel-datametrie-restapi"
        },
        {
          "text": "IP-Label Ekara Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-monitoring-iplabel-ekara-restapi"
        },
        {
          "text": "IP-Label Newtest Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-monitoring-iplabel-newtest-restapi"
        },
        {
          "text": "JBoss Server",
          "link": "/pp/integrations/plugin-packs/procedures/applications-jboss-jmx"
        },
        {
          "text": "Jenkins API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-jenkins"
        },
        {
          "text": "JMeter",
          "link": "/pp/integrations/plugin-packs/procedures/applications-jmeter"
        },
        {
          "text": "JVM Actuator",
          "link": "/pp/integrations/plugin-packs/procedures/applications-jvm-actuator"
        },
        {
          "text": "JVM JMX",
          "link": "/pp/integrations/plugin-packs/procedures/applications-jvm-jmx"
        },
        {
          "text": "Kadiska Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-monitoring-kadiska-restapi"
        },
        {
          "text": "Kafka",
          "link": "/pp/integrations/plugin-packs/procedures/applications-kafka-jmx"
        },
        {
          "text": "Kaspersky",
          "link": "/pp/integrations/plugin-packs/procedures/applications-antivirus-kaspersky-snmp"
        },
        {
          "text": "Keepalived SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/applications-keepalived-snmp"
        },
        {
          "text": "LatenceTech RestAPI",
          "link": "/pp/integrations/plugin-packs/procedures/applications-monitoring-latencetech-restapi"
        },
        {
          "text": "Loggly Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-monitoring-loggly-restapi"
        },
        {
          "text": "Lync 2013",
          "link": "/pp/integrations/plugin-packs/procedures/applications-lync-2013-mssql"
        },
        {
          "text": "Maltem Insight Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-monitoring-mip-restapi"
        },
        {
          "text": "McAfee Web Gateway",
          "link": "/pp/integrations/plugin-packs/procedures/applications-antivirus-mcafee-webgateway-snmp"
        },
        {
          "text": "Microsoft Active Directory CMA",
          "link": "/pp/integrations/plugin-packs/procedures/infrastructure-active-directory-centreon-monitoring-agent"
        },
        {
          "text": "Microsoft Active Directory NRPE",
          "link": "/pp/integrations/plugin-packs/procedures/infrastructure-active-directory-nrpe"
        },
        {
          "text": "Microsoft Active Directory NSClient++ API",
          "link": "/pp/integrations/plugin-packs/procedures/infrastructure-active-directory-nsclient-05-restapi"
        },
        {
          "text": "Microsoft Active Directory WSMAN",
          "link": "/pp/integrations/plugin-packs/procedures/applications-active-directory-wsman"
        },
        {
          "text": "Microsoft Cluster Server CMA",
          "link": "/pp/integrations/plugin-packs/procedures/applications-mscs-cma"
        },
        {
          "text": "Microsoft Cluster Server NSClient++ NRPE",
          "link": "/pp/integrations/plugin-packs/procedures/applications-mscs-nrpe"
        },
        {
          "text": "Microsoft DHCP SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/applications-microsoft-dhcp-snmp"
        },
        {
          "text": "Dynamics AX NSClient 0.5 NRPE",
          "link": "/pp/integrations/plugin-packs/procedures/applications-dynamics-ax-nsclient-05-nrpe"
        },
        {
          "text": "Microsoft Exchange 2010 NRPE (deprecated)",
          "link": "/pp/integrations/plugin-packs/procedures/applications-exchange-2010-nrpe"
        },
        {
          "text": "Microsoft Exchange 2010 Nsclient Restapi (deprecated)",
          "link": "/pp/integrations/plugin-packs/procedures/applications-exchange-2010-nsclient-05-restapi"
        },
        {
          "text": "Microsoft Exchange CMA",
          "link": "/pp/integrations/plugin-packs/procedures/applications-exchange-cma"
        },
        {
          "text": "Microsoft Exchange NSClient NRPE",
          "link": "/pp/integrations/plugin-packs/procedures/applications-exchange-nrpe"
        },
        {
          "text": "Microsoft Exchange NSClient RestAPI",
          "link": "/pp/integrations/plugin-packs/procedures/applications-exchange-nsclient-restapi"
        },
        {
          "text": "Microsoft IIS Server NRPE (deprecated)",
          "link": "/pp/integrations/plugin-packs/procedures/applications-webservers-iis-nrpe"
        },
        {
          "text": "Microsoft IIS Server NSClient API (deprecated)",
          "link": "/pp/integrations/plugin-packs/procedures/applications-webservers-iis-nsclient-05-restapi"
        },
        {
          "text": "Microsoft IIS Server Restapi",
          "link": "/pp/integrations/plugin-packs/procedures/applications-webservers-iis-restapi"
        },
        {
          "text": "Microsoft IIS Server WSMAN",
          "link": "/pp/integrations/plugin-packs/procedures/applications-iis-wsman"
        },
        {
          "text": "Microsoft SCCM",
          "link": "/pp/integrations/plugin-packs/procedures/applications-sccm-nsclient"
        },
        {
          "text": "Microsoft SCCM CMA",
          "link": "/pp/integrations/plugin-packs/procedures/applications-sccm-cma"
        },
        {
          "text": "Microsoft WSUS CMA",
          "link": "/pp/integrations/plugin-packs/procedures/applications-wsus-cma"
        },
        {
          "text": "Microsoft WSUS Server",
          "link": "/pp/integrations/plugin-packs/procedures/applications-wsus-nsclient"
        },
        {
          "text": "MS Biztalk",
          "link": "/pp/integrations/plugin-packs/procedures/applications-biztalk"
        },
        {
          "text": "Mulesoft Anypoint",
          "link": "/pp/integrations/plugin-packs/procedures/applications-mulesoft-restapi"
        },
        {
          "text": "Netbackup NSClient++ API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-netbackup-nsclient-05-restapi"
        },
        {
          "text": "Netdata RestAPI",
          "link": "/pp/integrations/plugin-packs/procedures/applications-monitoring-netdata-restapi"
        },
        {
          "text": "Nginx Plus Restapi",
          "link": "/pp/integrations/plugin-packs/procedures/applications-nginx-plus-restapi"
        },
        {
          "text": "Nginx Server",
          "link": "/pp/integrations/plugin-packs/procedures/applications-webservers-nginx-serverstatus"
        },
        {
          "text": "Nmap CLI Discovery",
          "link": "/pp/integrations/plugin-packs/procedures/applications-nmap-cli"
        },
        {
          "text": "Node Exporter Linux Metrics",
          "link": "/pp/integrations/plugin-packs/procedures/applications-monitoring-node-exporter-linux"
        },
        {
          "text": "Node Exporter Windows Metrics",
          "link": "/pp/integrations/plugin-packs/procedures/applications-monitoring-node-exporter-windows"
        },
        {
          "text": "NtopNG Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-monitoring-ntopng-restapi"
        },
        {
          "text": "OpenHeadend",
          "link": "/pp/integrations/plugin-packs/procedures/applications-video-openheadend-snmp"
        },
        {
          "text": "OpenLDAP",
          "link": "/pp/integrations/plugin-packs/procedures/applications-openldap-ldap"
        },
        {
          "text": "OpenMetrics",
          "link": "/pp/integrations/plugin-packs/procedures/applications-monitoring-openmetrics"
        },
        {
          "text": "OpenVPN OMI",
          "link": "/pp/integrations/plugin-packs/procedures/applications-openvpn-omi"
        },
        {
          "text": "OpenWeatherMap",
          "link": "/pp/integrations/plugin-packs/procedures/applications-openweathermap-restapi"
        },
        {
          "text": "Oracle GoldenGate SSH",
          "link": "/pp/integrations/plugin-packs/procedures/applications-oracle-goldengate-ssh"
        },
        {
          "text": "Oracle UCP JMX",
          "link": "/pp/integrations/plugin-packs/procedures/applications-oracle-ucp-jmx"
        },
        {
          "text": "Oracle VM Manager API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-oracle-ovm-api"
        },
        {
          "text": "Pacemaker",
          "link": "/pp/integrations/plugin-packs/procedures/applications-pacemaker-ssh"
        },
        {
          "text": "Peoplesoft",
          "link": "/pp/integrations/plugin-packs/procedures/applications-peoplesoft-jmx"
        },
        {
          "text": "Pfsense Fauxapi",
          "link": "/pp/integrations/plugin-packs/procedures/applications-pfsense-fauxapi"
        },
        {
          "text": "PHP APC",
          "link": "/pp/integrations/plugin-packs/procedures/applications-php-apc-web"
        },
        {
          "text": "PHP FPM",
          "link": "/pp/integrations/plugin-packs/procedures/applications-php-fpm-web"
        },
        {
          "text": "PineApp Mail Secure",
          "link": "/pp/integrations/plugin-packs/procedures/applications-pineapp-securemail-snmp"
        },
        {
          "text": "Podman Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-podman-restapi"
        },
        {
          "text": "Prometheus Alertmanager API",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-prometheus-alertmanager-api"
        },
        {
          "text": "Prometheus Server API",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-prometheus-api"
        },
        {
          "text": "Proxmox Mail Gateway",
          "link": "/pp/integrations/plugin-packs/procedures/applications-proxmox-mg-api"
        },
        {
          "text": "PVX",
          "link": "/pp/integrations/plugin-packs/procedures/applications-pvx-restapi"
        },
        {
          "text": "Quadstor NSClient++ NRPE",
          "link": "/pp/integrations/plugin-packs/procedures/applications-quadstor-nrpe"
        },
        {
          "text": "Quanta Rest API (deprecated)",
          "link": "/pp/integrations/plugin-packs/procedures/applications-monitoring-quanta-restapi"
        },
        {
          "text": "RabbitMQ RestAPI",
          "link": "/pp/integrations/plugin-packs/procedures/applications-rabbitmq-restapi"
        },
        {
          "text": "Rapid Recovery SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/applications-rapidrecovery-snmp"
        },
        {
          "text": "Redis Labs Enterprise Cluster Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-redis-rlec-restapi"
        },
        {
          "text": "Redis Restapi (deprecated)",
          "link": "/pp/integrations/plugin-packs/procedures/applications-redis-restapi"
        },
        {
          "text": "Redis Sentinel",
          "link": "/pp/integrations/plugin-packs/procedures/applications-redis-sentinel"
        },
        {
          "text": "RRDCached",
          "link": "/pp/integrations/plugin-packs/procedures/applications-rrdcached"
        },
        {
          "text": "Rubrik Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-rubrik-restapi"
        },
        {
          "text": "Rubrik Security Cloud GraphQL API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-rubrik-graphql"
        },
        {
          "text": "Rudder",
          "link": "/pp/integrations/plugin-packs/procedures/applications-rudder-restapi"
        },
        {
          "text": "Sahi Pro Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-sahipro-restapi"
        },
        {
          "text": "SailPoint IdentityNow Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-sailpoint-identitynow-restapi"
        },
        {
          "text": "Salesforce",
          "link": "/pp/integrations/plugin-packs/procedures/applications-salesforce-restapi"
        },
        {
          "text": "SCOM Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-monitoring-scom-restapi"
        },
        {
          "text": "Selenium",
          "link": "/pp/integrations/plugin-packs/procedures/applications-selenium"
        },
        {
          "text": "Sendmail",
          "link": "/pp/integrations/plugin-packs/procedures/applications-sendmail-snmp"
        },
        {
          "text": "Skyhigh Security Web Gateway SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/applications-antivirus-skyhigh-webgateway-snmp"
        },
        {
          "text": "Skype 2015",
          "link": "/pp/integrations/plugin-packs/procedures/applications-skype-2015-mssql"
        },
        {
          "text": "Slack",
          "link": "/pp/integrations/plugin-packs/procedures/applications-slack-restapi"
        },
        {
          "text": "Smartermail Server",
          "link": "/pp/integrations/plugin-packs/procedures/applications-smartermail-api"
        },
        {
          "text": "Solr",
          "link": "/pp/integrations/plugin-packs/procedures/applications-solr-jmx"
        },
        {
          "text": "Speedtest",
          "link": "/pp/integrations/plugin-packs/procedures/applications-monitoring-speedtest"
        },
        {
          "text": "Splunk",
          "link": "/pp/integrations/plugin-packs/procedures/applications-monitoring-splunk-api"
        },
        {
          "text": "Squid SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/applications-squid-snmp"
        },
        {
          "text": "Symantec Netbackup CMA",
          "link": "/pp/integrations/plugin-packs/procedures/applications-netbackup-cma"
        },
        {
          "text": "Symantec Netbackup NSClient++ NRPE",
          "link": "/pp/integrations/plugin-packs/procedures/applications-netbackup-nrpe"
        },
        {
          "text": "Symantec Netbackup SSH",
          "link": "/pp/integrations/plugin-packs/procedures/applications-netbackup-ssh"
        },
        {
          "text": "Thales Mistral VS9 Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-thales-mistral-vs9-restapi"
        },
        {
          "text": "Tomcat JMX",
          "link": "/pp/integrations/plugin-packs/procedures/applications-webservers-tomcat-jmx"
        },
        {
          "text": "Tomcat Webmanager",
          "link": "/pp/integrations/plugin-packs/procedures/applications-webservers-tomcat-webmanager"
        },
        {
          "text": "Tosca Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-tosca-restapi"
        },
        {
          "text": "TrendMicro Iwsva",
          "link": "/pp/integrations/plugin-packs/procedures/applications-trendmicro-iwsva-snmp"
        },
        {
          "text": "Varnish NRPE",
          "link": "/pp/integrations/plugin-packs/procedures/applications-varnish-nrpe"
        },
        {
          "text": "Veeam Backup Enterprise Manager Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-veeam-vbem-restapi"
        },
        {
          "text": "Veeam CMA",
          "link": "/pp/integrations/plugin-packs/procedures/applications-veeam-centreon-monitoring-agent"
        },
        {
          "text": "Veeam NRPE",
          "link": "/pp/integrations/plugin-packs/procedures/applications-veeam-nrpe"
        },
        {
          "text": "Veeam NSClient++ API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-veeam-nsclient-05-restapi"
        },
        {
          "text": "Veeam ONE Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-veeam-vone-restapi"
        },
        {
          "text": "Veeam WSMAN",
          "link": "/pp/integrations/plugin-packs/procedures/applications-veeam-wsman"
        },
        {
          "text": "Veritas Backup Exec NSCP API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-backupexec-nscp-restapi"
        },
        {
          "text": "VerneMQ Restapi",
          "link": "/pp/integrations/plugin-packs/procedures/applications-vernemq-restapi"
        },
        {
          "text": "VMware VCSA Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-vmware-vcsa-restapi"
        },
        {
          "text": "VMware VCSA SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/applications-vmware-vcsa-snmp"
        },
        {
          "text": "Wallix Bastion SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/applications-wallix-bastion-snmp"
        },
        {
          "text": "Wazuh Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-wazuh-restapi"
        },
        {
          "text": "Weblogic Server",
          "link": "/pp/integrations/plugin-packs/procedures/applications-weblogic-jmx"
        },
        {
          "text": "ZIXI",
          "link": "/pp/integrations/plugin-packs/procedures/applications-video-zixi-restapi"
        },
        {
          "text": "Zookeeper",
          "link": "/pp/integrations/plugin-packs/procedures/applications-zookeeper-jmx"
        },
        {
          "text": "Zscaler ZDX API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-monitoring-zscaler-zdx-api"
        }
      ]
    },
    {
      "text": "Blockchain",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Hyperledger API",
          "link": "/pp/integrations/plugin-packs/procedures/blockchain-hyperledger-exporter"
        },
        {
          "text": "Parity API",
          "link": "/pp/integrations/plugin-packs/procedures/blockchain-parity-restapi"
        },
        {
          "text": "Parity Ethpoller API",
          "link": "/pp/integrations/plugin-packs/procedures/blockchain-parity-ethpoller-restapi"
        }
      ]
    },
    {
      "text": "Centreon",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Centreon Central",
          "link": "/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-central"
        },
        {
          "text": "Centreon Database",
          "link": "/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-database"
        },
        {
          "text": "Centreon Experience Monitoring (formerly Quanta) Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-experience-monitoring-restapi"
        },
        {
          "text": "Centreon Log Management Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-clm-restapi"
        },
        {
          "text": "Centreon Map (deprecated)",
          "link": "/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-map-jmx"
        },
        {
          "text": "Centreon Map Engine",
          "link": "/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-map-engine-actuator"
        },
        {
          "text": "Centreon Map4 (deprecated)",
          "link": "/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-map4-jmx"
        },
        {
          "text": "Centreon MBI",
          "link": "/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-mbi"
        },
        {
          "text": "Centreon Poller",
          "link": "/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-poller"
        },
        {
          "text": "Centreon SQL Metrics",
          "link": "/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-sql-metrics"
        },
        {
          "text": "Centreon-HA",
          "link": "/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-ha"
        },
        {
          "text": "Gorgone Restapi",
          "link": "/pp/integrations/plugin-packs/procedures/applications-gorgone-restapi"
        }
      ]
    },
    {
      "text": "Cloud",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Amazon API Gateway",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-aws-apigateway"
        },
        {
          "text": "Amazon Backup Vault",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-aws-backup"
        },
        {
          "text": "Amazon CloudFront",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-aws-cloudfront"
        },
        {
          "text": "Amazon CloudWatch",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-aws-cloudwatch"
        },
        {
          "text": "Amazon CloudWatch Logs",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-aws-cloudwatchlogs"
        },
        {
          "text": "Amazon Direct Connect",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-aws-directconnect"
        },
        {
          "text": "Amazon EBS",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-aws-ebs"
        },
        {
          "text": "Amazon EC2",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-aws-ec2"
        },
        {
          "text": "Amazon EFS",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-aws-efs"
        },
        {
          "text": "Amazon ElastiCache",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-aws-elasticache"
        },
        {
          "text": "Amazon FSx",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-aws-fsx"
        },
        {
          "text": "Amazon Kinesis",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-aws-kinesis"
        },
        {
          "text": "Amazon RDS",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-aws-rds"
        },
        {
          "text": "Amazon S3",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-aws-s3"
        },
        {
          "text": "Amazon SES",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-aws-ses"
        },
        {
          "text": "Amazon SNS",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-aws-sns"
        },
        {
          "text": "Amazon SQS",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-aws-sqs"
        },
        {
          "text": "AWS Billing",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-aws-billing"
        },
        {
          "text": "AWS CloudTrail",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-aws-cloudtrail"
        },
        {
          "text": "AWS Discover",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-aws-cloudwatch-discover"
        },
        {
          "text": "AWS ELB",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-aws-elb"
        },
        {
          "text": "AWS Health",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-aws-health"
        },
        {
          "text": "AWS Lambda",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-aws-lambda"
        },
        {
          "text": "AWS Transit Gateway",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-aws-transitgateway"
        },
        {
          "text": "AWS VPN",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-aws-vpn"
        },
        {
          "text": "Azure API Management",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-management-apimanagement"
        },
        {
          "text": "Azure App Configuration",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-devtools-appconfiguration"
        },
        {
          "text": "Azure App Service",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-web-appservice"
        },
        {
          "text": "Azure App Service Plan",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-web-appserviceplan"
        },
        {
          "text": "Azure Application Gateway",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-network-appgateway"
        },
        {
          "text": "Azure Application Insights",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-management-applicationinsights"
        },
        {
          "text": "Azure Automation",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-management-automation"
        },
        {
          "text": "Azure Cache for Redis",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-database-redis"
        },
        {
          "text": "Azure CDN",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-network-cdn"
        },
        {
          "text": "Azure Classic Storage",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-classicstorage-storageaccount"
        },
        {
          "text": "Azure Container Registry",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-storage-acr"
        },
        {
          "text": "Azure Cosmos DB",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-database-cosmosdb"
        },
        {
          "text": "Azure Data Factory",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-datafactory-factories"
        },
        {
          "text": "Azure Database for MariaDB",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-database-mariadb"
        },
        {
          "text": "Azure Database for MySQL",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-database-mysql"
        },
        {
          "text": "Azure Database for PostgreSQL",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-database-postgresql"
        },
        {
          "text": "Azure Discover",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-management-discover"
        },
        {
          "text": "Azure Elastic Pool",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-database-elasticpool"
        },
        {
          "text": "Azure Event Grid",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-integration-eventgrid"
        },
        {
          "text": "Azure Event Hubs",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-analytics-eventhubs"
        },
        {
          "text": "Azure ExpressRoute",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-network-expressroute"
        },
        {
          "text": "Azure Firewall",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-network-firewall"
        },
        {
          "text": "Azure Front Door",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-network-frontdoor"
        },
        {
          "text": "Azure Functions",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-compute-functions"
        },
        {
          "text": "Azure InsightsMetrics",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-management-insightsmetrics"
        },
        {
          "text": "Azure Key Vault",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-security-keyvault"
        },
        {
          "text": "Azure Kubernetes Service",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-compute-aks"
        },
        {
          "text": "Azure Load Balancer",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-network-loadbalancer"
        },
        {
          "text": "Azure Log Analytics",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-management-loganalytics"
        },
        {
          "text": "Azure Management Costs",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-management-costs"
        },
        {
          "text": "Azure Monitor",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-management-monitor"
        },
        {
          "text": "Azure Network Interface",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-network-networkinterface"
        },
        {
          "text": "Azure Policy States",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-policyinsights-policystates"
        },
        {
          "text": "Azure Public IP",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-network-publicip"
        },
        {
          "text": "Azure Recovery",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-management-recovery"
        },
        {
          "text": "Azure Resource",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-management-resource"
        },
        {
          "text": "Azure ServiceBus",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-integration-servicebus"
        },
        {
          "text": "Azure SignalR",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-web-signalr"
        },
        {
          "text": "Azure SQL Database",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-database-sqldatabase"
        },
        {
          "text": "Azure SQL Managed Instance",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-database-sqlmanagedinstance"
        },
        {
          "text": "Azure SQL Server",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-database-sqlserver"
        },
        {
          "text": "Azure Storage Account",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-storage-storageaccount"
        },
        {
          "text": "Azure Storage Sync",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-storage-storagesync"
        },
        {
          "text": "Azure Traffic Manager",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-network-trafficmanager"
        },
        {
          "text": "Azure Virtual Machine",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-compute-virtualmachine"
        },
        {
          "text": "Azure Virtual Machine Scale Sets",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-compute-vmscalesets"
        },
        {
          "text": "Azure Virtual Network",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-network-virtualnetwork"
        },
        {
          "text": "Azure VPN Gateway",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-azure-network-vpngateway"
        },
        {
          "text": "cAdvisor API",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-cadvisor-api"
        },
        {
          "text": "cAdvisor w/ Prometheus API",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-prometheus-cadvisor-api"
        },
        {
          "text": "Cloud Foundry API",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-cloudfoundry-api"
        },
        {
          "text": "Docker SSH",
          "link": "/pp/integrations/plugin-packs/procedures/applications-docker-ssh"
        },
        {
          "text": "Google CloudSQL MySQL",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-gcp-cloudsql-mysql"
        },
        {
          "text": "Google Compute Engine",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-gcp-compute-computeengine"
        },
        {
          "text": "Google Stackdriver",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-gcp-management-stackdriver"
        },
        {
          "text": "Google Storage",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-gcp-storage"
        },
        {
          "text": "IBM Softlayer API",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-ibm-softlayer-api"
        },
        {
          "text": "IICS Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-iics-restapi"
        },
        {
          "text": "Kubernetes API",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-kubernetes-api"
        },
        {
          "text": "Kubernetes w/ Prometheus API",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-prometheus-kubernetes-api"
        },
        {
          "text": "Node Exporter w/ Prometheus API",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-prometheus-node-exporter-api"
        },
        {
          "text": "Office 365 Azure AD",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-microsoft-office365-azuread"
        },
        {
          "text": "Office 365 Management",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-microsoft-office365-management"
        },
        {
          "text": "Office 365 OneDrive",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-microsoft-office365-onedrive"
        },
        {
          "text": "Office365 Exchange",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-microsoft-office365-exchange"
        },
        {
          "text": "Office365 SharePoint",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-microsoft-office365-sharepoint"
        },
        {
          "text": "Office365 Skype",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-microsoft-office365-skype"
        },
        {
          "text": "Office365 Teams",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-microsoft-office365-teams"
        },
        {
          "text": "OpenShift API",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-openshift-api"
        },
        {
          "text": "OpenStack RESTAPI",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-openstack-restapi"
        },
        {
          "text": "Outscale API",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-outscale"
        },
        {
          "text": "OVH Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-ovh-restapi"
        },
        {
          "text": "Talend TMC API",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-talend-tmc-api"
        },
        {
          "text": "VMware VeloCloud Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/cloud-vmware-velocloud-restapi"
        }
      ]
    },
    {
      "text": "Database",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "CouchDB Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-databases-couchdb-restapi"
        },
        {
          "text": "DB2 Database",
          "link": "/pp/integrations/plugin-packs/procedures/applications-databases-db2"
        },
        {
          "text": "Elasticsearch",
          "link": "/pp/integrations/plugin-packs/procedures/applications-databases-elasticsearch"
        },
        {
          "text": "Elasticsearch (deprecated)",
          "link": "/pp/integrations/plugin-packs/procedures/applications-elasticsearch"
        },
        {
          "text": "Firebird",
          "link": "/pp/integrations/plugin-packs/procedures/applications-databases-firebird"
        },
        {
          "text": "InfluxDB",
          "link": "/pp/integrations/plugin-packs/procedures/applications-databases-influxdb"
        },
        {
          "text": "Informix DB",
          "link": "/pp/integrations/plugin-packs/procedures/applications-databases-informix"
        },
        {
          "text": "Informix DB SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/applications-databases-informix-snmp"
        },
        {
          "text": "Microsoft SQL Server",
          "link": "/pp/integrations/plugin-packs/procedures/applications-databases-mssql"
        },
        {
          "text": "MongoDB",
          "link": "/pp/integrations/plugin-packs/procedures/applications-databases-mongodb"
        },
        {
          "text": "MySQL/MariaDB",
          "link": "/pp/integrations/plugin-packs/procedures/applications-databases-mysql"
        },
        {
          "text": "Oracle Database",
          "link": "/pp/integrations/plugin-packs/procedures/applications-databases-oracle"
        },
        {
          "text": "PostgreSQL DB",
          "link": "/pp/integrations/plugin-packs/procedures/applications-databases-postgresql"
        },
        {
          "text": "Redis Cli (deprecated)",
          "link": "/pp/integrations/plugin-packs/procedures/applications-redis-cli"
        },
        {
          "text": "Redis Database",
          "link": "/pp/integrations/plugin-packs/procedures/applications-databases-redis"
        },
        {
          "text": "RRDtool",
          "link": "/pp/integrations/plugin-packs/procedures/applications-databases-rrdtool"
        },
        {
          "text": "SAP HANA",
          "link": "/pp/integrations/plugin-packs/procedures/applications-databases-sap-hana"
        },
        {
          "text": "Sybase",
          "link": "/pp/integrations/plugin-packs/procedures/applications-databases-sybase"
        },
        {
          "text": "Warp10 Sensision",
          "link": "/pp/integrations/plugin-packs/procedures/applications-databases-warp10-sensision"
        }
      ]
    },
    {
      "text": "Hardware-server",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Adder AIM SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-kvm-adder-aim-snmp"
        },
        {
          "text": "AEG ACM SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-devices-aeg-acm-snmp"
        },
        {
          "text": "Appear TV SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-devices-video-appeartv-snmp"
        },
        {
          "text": "Avigilon camera SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-devices-camera-avigilon-snmp"
        },
        {
          "text": "Avocent ACS 6000 SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-kvm-avocent-acs-6000-snmp"
        },
        {
          "text": "Avocent ACS 8000 SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-kvm-avocent-acs-8000-snmp"
        },
        {
          "text": "Axis Video SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-devices-video-axis-snmp"
        },
        {
          "text": "Barco ClickShare Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-devices-barco-cs-restapi"
        },
        {
          "text": "Cisco Collaboration Endpoint Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-devices-cisco-ces-restapi"
        },
        {
          "text": "Cisco Telepresence System SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-devices-cisco-cts-snmp"
        },
        {
          "text": "Cisco UCS SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-servers-cisco-ucs-snmp"
        },
        {
          "text": "Dell CMC SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-servers-dell-cmc-snmp"
        },
        {
          "text": "Dell iDRAC SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-servers-dell-idrac-snmp"
        },
        {
          "text": "Dell OME-Modular SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-servers-dell-omem-snmp"
        },
        {
          "text": "Dell OpenManage SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-servers-dell-openmanage-snmp"
        },
        {
          "text": "Dell VxRail Manager Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-servers-dell-vxm-restapi"
        },
        {
          "text": "Eltek eNexus SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-devices-eltek-enexus-snmp"
        },
        {
          "text": "Fujitsu Server SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-servers-fujitsu-snmp"
        },
        {
          "text": "Hanwha camera SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-devices-camera-hanwha-snmp"
        },
        {
          "text": "Hikvision camera SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-devices-camera-hikvision-snmp"
        },
        {
          "text": "Hikvision NVR SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-devices-hikvision-nvr-snmp"
        },
        {
          "text": "HMS Ewon SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-devices-hms-ewon-snmp"
        },
        {
          "text": "HMS Netbiter Argos RestAPI",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-devices-hms-netbiter-argos-restapi"
        },
        {
          "text": "HP Blade Chassis SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-servers-hp-blade-chassis-snmp"
        },
        {
          "text": "HP iLO Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-servers-hp-ilo-restapi"
        },
        {
          "text": "HP Ilo XMLAPI",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-servers-hp-ilo-xmlapi"
        },
        {
          "text": "HP OneView Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-servers-hp-oneview-restapi"
        },
        {
          "text": "HP Proliant SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-servers-hp-snmp"
        },
        {
          "text": "Huawei HMM SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-servers-huawei-hmm-snmp"
        },
        {
          "text": "Huawei iBMC SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-servers-huawei-ibmc-snmp"
        },
        {
          "text": "IBM BladeCenter SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-servers-ibm-bladecenter-snmp"
        },
        {
          "text": "IBM HMC SSH",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-servers-ibm-hmc-ssh"
        },
        {
          "text": "IBM IMM SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-servers-ibm-imm-snmp"
        },
        {
          "text": "Lenovo XCC SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-servers-lenovo-xcc-snmp"
        },
        {
          "text": "Masterclock NTP100GP SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-devices-masterclock-ntp100gps-snmp"
        },
        {
          "text": "Mobotix Camera SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-devices-camera-mobotix-snmp"
        },
        {
          "text": "NVIDIA GPU SMI SSH",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-devices-nvidia-gpu-smi-ssh"
        },
        {
          "text": "Optelecom camera SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-devices-camera-optelecom-snmp"
        },
        {
          "text": "Pexip Infinity ManagementAPI",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-devices-pexip-infinity-managementapi"
        },
        {
          "text": "Polycom GroupSeries SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-devices-polycom-groupseries-snmp"
        },
        {
          "text": "Polycom Trio Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-devices-polycom-trio-restapi"
        },
        {
          "text": "Safenet Keysecure SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-device-safenet-keysecure-snmp"
        },
        {
          "text": "Sun MgmtCard",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-servers-sun-mgmtcards"
        },
        {
          "text": "Sun Mseries SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-servers-sun-mseries-snmp"
        },
        {
          "text": "Sun SFxxK PSSH",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-servers-sun-sfxxk-pssh"
        },
        {
          "text": "Supermicro (deprecated)",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-servers-supermicro-snmp"
        },
        {
          "text": "Supermicro BMC SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-servers-supermicro-bmc-snmp"
        },
        {
          "text": "Supermicro SuperDoctor SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-servers-supermicro-superdoctor-snmp"
        },
        {
          "text": "Timelinkmicro Tms6001 SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-devices-timelinkmicro-tms6001-snmp"
        },
        {
          "text": "xFusion iBMC SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-servers-xfusion-ibmc-snmp"
        }
      ]
    },
    {
      "text": "Network",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "3com Network SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-3com-snmp"
        },
        {
          "text": "A10 AX SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-loadbalancers-a10-ax-snmp"
        },
        {
          "text": "Acme Packet SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-acmepacket-snmp"
        },
        {
          "text": "Adva FSP 150 SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-adva-fsp150-snmp"
        },
        {
          "text": "Adva FSP 3000 SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-adva-fsp3000-snmp"
        },
        {
          "text": "Aerohive SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-aerohive-snmp"
        },
        {
          "text": "Alcatel Omniswitch SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-switchs-alcatel-omniswitch-snmp"
        },
        {
          "text": "Allied Telesis SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-allied-snmp"
        },
        {
          "text": "Alvarion BreezeACCESS SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-alvarion-breezeaccess-snmp"
        },
        {
          "text": "Arista Switch SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-switchs-arista-snmp"
        },
        {
          "text": "Arkoon SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-firewalls-arkoon-snmp"
        },
        {
          "text": "Aruba CPPM SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-aruba-cppm-snmp"
        },
        {
          "text": "Aruba Instant SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-aruba-instant-snmp"
        },
        {
          "text": "Aruba Orchestrator Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/network-aruba-orchestrator-restapi"
        },
        {
          "text": "Aruba Standard SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-switchs-aruba-standard-snmp"
        },
        {
          "text": "ArubaOS-CX SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-aruba-aoscx-snmp"
        },
        {
          "text": "Athonet ePC SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-athonet-epc-snmp"
        },
        {
          "text": "Atrica Routeur SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-routers-atrica-snmp"
        },
        {
          "text": "Atto Fibrebridge SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-atto-fibrebridge-snmp"
        },
        {
          "text": "Aviat Networks SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-aviat-snmp"
        },
        {
          "text": "Backbox Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/network-backbox-restapi"
        },
        {
          "text": "Barracuda Cloudgen SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-barracuda-cloudgen-snmp"
        },
        {
          "text": "Barracuda Message Archiver SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-barracuda-bma-snmp"
        },
        {
          "text": "Bee Ware SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-beeware-snmp"
        },
        {
          "text": "BGP Protocol SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/applications-protocol-bgp-snmp"
        },
        {
          "text": "Bluecoat generic SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-generic-bluecoat-snmp"
        },
        {
          "text": "Brocade Switch SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-switchs-brocade-snmp"
        },
        {
          "text": "Cambium CnPilot SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-cambium-cnpilot-snmp"
        },
        {
          "text": "Cambium ePMP SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-cambium-epmp-snmp"
        },
        {
          "text": "Cato Networks API",
          "link": "/pp/integrations/plugin-packs/procedures/network-security-cato-networks-api"
        },
        {
          "text": "ChapsVision CrossinG SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-chapsvision-crossing-snmp"
        },
        {
          "text": "CheckPoint firewall",
          "link": "/pp/integrations/plugin-packs/procedures/network-firewalls-checkpoint-snmp"
        },
        {
          "text": "Cisco Apic Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/network-cisco-apic-restapi"
        },
        {
          "text": "Cisco ASA SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-firewalls-cisco-asa-snmp"
        },
        {
          "text": "Cisco Call Manager SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-cisco-callmanager-snmp"
        },
        {
          "text": "Cisco Callmanager SXML",
          "link": "/pp/integrations/plugin-packs/procedures/network-cisco-callmanager-sxml"
        },
        {
          "text": "Cisco ESA Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/network-cisco-esa-restapi"
        },
        {
          "text": "Cisco ESA XMLAPI",
          "link": "/pp/integrations/plugin-packs/procedures/network-cisco-esa-xmlapi"
        },
        {
          "text": "Cisco Firepower Management Console Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/network-cisco-firepower-fmc-restapi"
        },
        {
          "text": "Cisco Firepower SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-cisco-firepower-snmp"
        },
        {
          "text": "Cisco IronPort SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-cisco-ironport-snmp"
        },
        {
          "text": "Cisco Meraki Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/network-cisco-meraki-restapi"
        },
        {
          "text": "Cisco Meraki SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-cisco-meraki-snmp"
        },
        {
          "text": "Cisco Prime RestAPI",
          "link": "/pp/integrations/plugin-packs/procedures/network-cisco-prime-restapi"
        },
        {
          "text": "Cisco Small Business SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-switchs-cisco-smallbusiness-standard-snmp"
        },
        {
          "text": "Cisco Standard SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-cisco-standard-snmp"
        },
        {
          "text": "Cisco Standard SSH",
          "link": "/pp/integrations/plugin-packs/procedures/network-cisco-standard-ssh"
        },
        {
          "text": "Cisco Umbrella SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-cisco-umbrella-snmp"
        },
        {
          "text": "Cisco VCS Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/network-cisco-vcs-restapi"
        },
        {
          "text": "Cisco Voice Gateway SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-cisco-voice-gateway-snmp"
        },
        {
          "text": "Cisco Waas SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-cisco-waas-snmp"
        },
        {
          "text": "Cisco WAP SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-cisco-wap-snmp"
        },
        {
          "text": "Cisco WLC SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-cisco-wlc-snmp"
        },
        {
          "text": "Citrix Acceleration SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-citrix-appacceleration-snmp"
        },
        {
          "text": "Citrix Netscaler SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-loadbalancers-netscaler-snmp"
        },
        {
          "text": "Citrix SDX",
          "link": "/pp/integrations/plugin-packs/procedures/network-citrix-sdx-snmp"
        },
        {
          "text": "Colubris SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-colubris-snmp"
        },
        {
          "text": "Cyberoam SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-cyberoam-snmp"
        },
        {
          "text": "D-Link DGS 3100 SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-dlink-dgs3100-snmp"
        },
        {
          "text": "D-Link standard SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-dlink-standard-snmp"
        },
        {
          "text": "Dell 6200 (deprecated)",
          "link": "/pp/integrations/plugin-packs/procedures/network-dell-6200"
        },
        {
          "text": "Dell 6200 SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-dell-6200-snmp"
        },
        {
          "text": "Dell N-series SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-dell-nseries-snmp"
        },
        {
          "text": "Dell N4000 (deprecated)",
          "link": "/pp/integrations/plugin-packs/procedures/network-dell-n4000"
        },
        {
          "text": "Dell OS10 SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-dell-os10-snmp"
        },
        {
          "text": "Dell S-series SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-dell-sseries-snmp"
        },
        {
          "text": "Dell Xseries SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-switchs-dell-xseries-snmp"
        },
        {
          "text": "DenyAll SNMP (Rohde & Schwarz)",
          "link": "/pp/integrations/plugin-packs/procedures/network-denyall-snmp"
        },
        {
          "text": "Digi Anywhere USB SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-digi-anywhereusb-snmp"
        },
        {
          "text": "Digi PortServers TS (deprecated)",
          "link": "/pp/integrations/plugin-packs/procedures/network-digi-portservers-snmp"
        },
        {
          "text": "Digi PortServers TS SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-digi-portserverts-snmp"
        },
        {
          "text": "Digi Sarian SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-digi-sarian-snmp"
        },
        {
          "text": "Efficient IP SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-efficientip-snmp"
        },
        {
          "text": "Enterasys SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-enterasys-snmp"
        },
        {
          "text": "Evertz FC7800 SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-evertz-fc7800-snmp"
        },
        {
          "text": "Extreme (formerly Nortel/Avaya) SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-nortel-standard-snmp"
        },
        {
          "text": "Extreme Networks SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-extreme-snmp"
        },
        {
          "text": "F5 BigIP SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-loadbalancers-f5-bigip-snmp"
        },
        {
          "text": "Fiberstore SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-fiberstore-snmp"
        },
        {
          "text": "Forcepoint Sdwan SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-firewalls-forcepoint-sdwan-snmp"
        },
        {
          "text": "Fortinet FortiADC SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-fortinet-fortiadc-snmp"
        },
        {
          "text": "Fortinet FortiAuthenticator RestAPI",
          "link": "/pp/integrations/plugin-packs/procedures/network-fortinet-fortiauthenticator-restapi"
        },
        {
          "text": "Fortinet FortiAuthenticator SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-fortinet-fortiauthenticator-snmp"
        },
        {
          "text": "Fortinet Fortigate Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/network-fortinet-fortigate-restapi"
        },
        {
          "text": "Fortinet Fortigate SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-firewalls-fortinet-fortigate-snmp"
        },
        {
          "text": "Fortinet FortiMail SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-fortinet-fortimail-snmp"
        },
        {
          "text": "Fortinet Fortimanager SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-fortinet-fortimanager-snmp"
        },
        {
          "text": "Fortinet FortiSwitch SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-fortinet-fortiswitch-snmp"
        },
        {
          "text": "Fortinet FortiWeb SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-fortinet-fortiweb-snmp"
        },
        {
          "text": "Freebox RestAPI",
          "link": "/pp/integrations/plugin-packs/procedures/network-freebox-restapi"
        },
        {
          "text": "Fritz!Box UPnP",
          "link": "/pp/integrations/plugin-packs/procedures/network-fritzbox-upnp"
        },
        {
          "text": "Gorgy NTP Server SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-device-gorgy-ntpserver-snmp"
        },
        {
          "text": "H3C Network SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-h3c-snmp"
        },
        {
          "text": "Hirschmann switch SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-switchs-hirschmann-snmp"
        },
        {
          "text": "HP Moonshot SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-hp-moonshot-snmp"
        },
        {
          "text": "HP Procurve SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-switchs-hp-procurve-snmp"
        },
        {
          "text": "HP Standard Network SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-hp-standard-snmp"
        },
        {
          "text": "HP Virtual Connect SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-hp-vc-snmp"
        },
        {
          "text": "HPE Athonet Alertmanager w/ Prometheus",
          "link": "/pp/integrations/plugin-packs/procedures/network-hpe-athonet-alertmanager-api"
        },
        {
          "text": "HPE Athonet w/ Prometheus API",
          "link": "/pp/integrations/plugin-packs/procedures/network-hpe-athonet-node-exporter-api"
        },
        {
          "text": "Huawei Standard SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-huawei-snmp"
        },
        {
          "text": "Huawei WLC SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-huawei-wlc-snmp"
        },
        {
          "text": "IBM Bladecenter Switch SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-ibm-bladecenter-snmp"
        },
        {
          "text": "Infoblox SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-infoblox-snmp"
        },
        {
          "text": "Juniper EX Series SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-switchs-juniper-ex-snmp"
        },
        {
          "text": "Juniper GGSN SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-juniper-ggsn-snmp"
        },
        {
          "text": "Juniper ISG SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-juniper-isg-snmp"
        },
        {
          "text": "Juniper M-Series Netconf",
          "link": "/pp/integrations/plugin-packs/procedures/network-routers-juniper-mseries-netconf"
        },
        {
          "text": "Juniper M-Series SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-routers-juniper-mseries-snmp"
        },
        {
          "text": "Juniper Mag SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-firewalls-juniper-mag-snmp"
        },
        {
          "text": "Juniper SA SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-firewalls-juniper-sa-snmp"
        },
        {
          "text": "Juniper SRX SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-firewalls-juniper-srx-snmp"
        },
        {
          "text": "Juniper SSG SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-firewalls-juniper-ssg-snmp"
        },
        {
          "text": "Juniper Trapeze SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-juniper-trapeze-snmp"
        },
        {
          "text": "Kairos SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-kairos-snmp"
        },
        {
          "text": "Kemp Loadbalancer SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-loadbalancers-kemp-snmp"
        },
        {
          "text": "Keysight NVOS Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/network-keysight-nvos-restapi"
        },
        {
          "text": "Lenovo Flexsystem Switch SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-lenovo-flexsystem-snmp"
        },
        {
          "text": "Lenovo RackSwitch SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-lenovo-rackswitch-snmp"
        },
        {
          "text": "Libraesva SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-libraesva-snmp"
        },
        {
          "text": "Meru SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-meru-snmp"
        },
        {
          "text": "MessPC Ehternetbox SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-sensors-messpc-ethernetbox-snmp"
        },
        {
          "text": "Microsens G6 SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-microsens-g6-snmp"
        },
        {
          "text": "Mikrotik SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-mikrotik-snmp"
        },
        {
          "text": "Mitel 3300ICP SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-mitel-3300icp-snmp"
        },
        {
          "text": "Moxa Switch SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-moxa-switch-snmp"
        },
        {
          "text": "Mrv Optiswitch SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-switchs-mrv-optiswitch-snmp"
        },
        {
          "text": "NetASQ Network (deprecated)",
          "link": "/pp/integrations/plugin-packs/procedures/network-netasq-snmp"
        },
        {
          "text": "Netgear MSeries SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-netgear-mseries-snmp"
        },
        {
          "text": "Netgear SSeries SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-netgear-sseries-snmp"
        },
        {
          "text": "Netscaler MPX 8000 (deprecated)",
          "link": "/pp/integrations/plugin-packs/procedures/network-loadbalancers-netscaler-mpx8000-snmp"
        },
        {
          "text": "Nokia Isam SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-nokia-isam-snmp"
        },
        {
          "text": "Nokia TiMos SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-nokia-timos-snmp"
        },
        {
          "text": "Nvidia (formerly Mellanox) SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-nvidia-mellanox-snmp"
        },
        {
          "text": "OneAccess SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-oneaccess-snmp"
        },
        {
          "text": "Opengear SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-opengear-snmp"
        },
        {
          "text": "Oracle Infiniband SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-oracle-infiniband-snmp"
        },
        {
          "text": "Oracle Traffic Director SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-oracle-otd-snmp"
        },
        {
          "text": "Palo Alto firewall API",
          "link": "/pp/integrations/plugin-packs/procedures/network-firewalls-paloalto-standard-api"
        },
        {
          "text": "Palo Alto firewall SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-firewalls-paloalto-standard-snmp"
        },
        {
          "text": "Palo Alto firewall SSH",
          "link": "/pp/integrations/plugin-packs/procedures/network-firewalls-paloalto-standard-ssh"
        },
        {
          "text": "Patton SmartNode SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-patton-smartnode-snmp"
        },
        {
          "text": "Peplink Balance SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-routers-peplink-balance-snmp"
        },
        {
          "text": "Peplink Pepwave SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-peplink-pepwave-snmp"
        },
        {
          "text": "Perle IDS SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-perle-ids-snmp"
        },
        {
          "text": "pfSense SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-firewalls-pfsense-snmp"
        },
        {
          "text": "Rad Airmux SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-rad-airmux-snmp"
        },
        {
          "text": "Radware Alteon SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-radware-alteon-snmp"
        },
        {
          "text": "Raisecom SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-raisecom-snmp"
        },
        {
          "text": "RedBack Router SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-routers-redback-snmp"
        },
        {
          "text": "Riverbed Interceptor SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-riverbed-interceptor-snmp"
        },
        {
          "text": "Riverbed SteelHead SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-riverbed-steelhead-snmp"
        },
        {
          "text": "Ruckus ICX SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-ruckus-icx-snmp"
        },
        {
          "text": "Ruckus SCG SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-ruckus-scg-snmp"
        },
        {
          "text": "Ruckus Smartzone SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-ruckus-smartzone-snmp"
        },
        {
          "text": "Ruckus SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-ruckus-snmp"
        },
        {
          "text": "Ruckus Zonedirector SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-ruckus-zonedirector-snmp"
        },
        {
          "text": "Ruggedcom Network SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-ruggedcom"
        },
        {
          "text": "Securactive SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-securactive-snmp"
        },
        {
          "text": "Silverpeak SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-silverpeak-snmp"
        },
        {
          "text": "Sonicwall SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-firewalls-sonicwall-snmp"
        },
        {
          "text": "Sophos ES SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-sophos-es-snmp"
        },
        {
          "text": "Stonesoft SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-firewalls-stonesoft"
        },
        {
          "text": "Stormshield API",
          "link": "/pp/integrations/plugin-packs/procedures/network-stormshield-api"
        },
        {
          "text": "Stormshield SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-stormshield-snmp"
        },
        {
          "text": "Stormshield SSH",
          "link": "/pp/integrations/plugin-packs/procedures/network-stormshield-ssh"
        },
        {
          "text": "Symbol WiNG SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-symbol-wing-snmp"
        },
        {
          "text": "Teldat SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-teldat-snmp"
        },
        {
          "text": "Teltonika SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-teltonika-snmp"
        },
        {
          "text": "TP-Link SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-tplink-snmp"
        },
        {
          "text": "Ubiquiti AirFiber SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-ubiquiti-airfiber-snmp"
        },
        {
          "text": "Ubiquiti Edge SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-ubiquiti-edge-snmp"
        },
        {
          "text": "Ubiquiti UniFi SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-ubiquiti-unifi-snmp"
        },
        {
          "text": "Ucopia SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-ucopia-snmp"
        },
        {
          "text": "Vectra Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/network-vectra-restapi"
        },
        {
          "text": "Versa Director Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/network-versa-director-restapi"
        },
        {
          "text": "Versa SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-versa-snmp"
        },
        {
          "text": "Viptela SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-viptela-snmp"
        },
        {
          "text": "Watchguard SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-watchguard-snmp"
        },
        {
          "text": "Westermo Standard SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-westermo-standard-snmp"
        },
        {
          "text": "Zyxel SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-zyxel-snmp"
        }
      ]
    },
    {
      "text": "Operating-system",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "AIX SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/operatingsystems-aix-snmp"
        },
        {
          "text": "AIX SSH",
          "link": "/pp/integrations/plugin-packs/procedures/operatingsystems-aix-ssh"
        },
        {
          "text": "Base Pack",
          "link": "/pp/integrations/plugin-packs/procedures/base-generic"
        },
        {
          "text": "F5OS SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/operatingsystems-f5os-snmp"
        },
        {
          "text": "FreeBSD SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/operatingsystems-freebsd-snmp"
        },
        {
          "text": "HP-UX SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/operatingsystems-hpux-snmp"
        },
        {
          "text": "IBM AS400 (deprecated)",
          "link": "/pp/integrations/plugin-packs/procedures/operatingsystems-as400"
        },
        {
          "text": "IBM AS400 Connector",
          "link": "/pp/integrations/plugin-packs/procedures/operatingsystems-as400-connector"
        },
        {
          "text": "Linux CMA",
          "link": "/pp/integrations/plugin-packs/procedures/operatingsystems-linux-centreon-monitoring-agent"
        },
        {
          "text": "Linux NRPE (deprecated)",
          "link": "/pp/integrations/plugin-packs/procedures/operatingsystems-linux-nrpe"
        },
        {
          "text": "Linux NRPE3 (deprecated)",
          "link": "/pp/integrations/plugin-packs/procedures/operatingsystems-linux-nrpe3"
        },
        {
          "text": "Linux NRPE4",
          "link": "/pp/integrations/plugin-packs/procedures/operatingsystems-linux-nrpe4"
        },
        {
          "text": "Linux SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/operatingsystems-linux-snmp"
        },
        {
          "text": "Linux SNMP v3",
          "link": "/pp/integrations/plugin-packs/procedures/operatingsystems-linux-snmpv3"
        },
        {
          "text": "Linux SSH",
          "link": "/pp/integrations/plugin-packs/procedures/operatingsystems-linux-ssh"
        },
        {
          "text": "Linux Telegraf Agent",
          "link": "/pp/integrations/plugin-packs/procedures/operatingsystems-linux-telegraf-agent"
        },
        {
          "text": "Mac SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/operatingsystems-mac-snmp"
        },
        {
          "text": "PICOS SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/operatingsystems-picos-snmp"
        },
        {
          "text": "Solaris SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/operatingsystems-solaris-snmp"
        },
        {
          "text": "Windows CMA",
          "link": "/pp/integrations/plugin-packs/procedures/operatingsystems-windows-centreon-monitoring-agent"
        },
        {
          "text": "Windows NRPE (deprecated)",
          "link": "/pp/integrations/plugin-packs/procedures/operatingsystems-windows-nrpe"
        },
        {
          "text": "Windows NSClient 0.5 NRPE",
          "link": "/pp/integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-nrpe"
        },
        {
          "text": "Windows NSClient API",
          "link": "/pp/integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-restapi"
        },
        {
          "text": "Windows SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/operatingsystems-windows-snmp"
        },
        {
          "text": "Windows Telegraf Agent",
          "link": "/pp/integrations/plugin-packs/procedures/operatingsystems-windows-telegraf-agent"
        },
        {
          "text": "Windows WSMAN",
          "link": "/pp/integrations/plugin-packs/procedures/operatingsystems-windows-wsman"
        }
      ]
    },
    {
      "text": "Printer",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Printer standard SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-printers-standard-rfc3805-snmp"
        }
      ]
    },
    {
      "text": "Protocol",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "BGP Protocol (deprecated)",
          "link": "/pp/integrations/plugin-packs/procedures/applications-protocol-bgp"
        },
        {
          "text": "DHCP Server",
          "link": "/pp/integrations/plugin-packs/procedures/infrastructure-dhcp"
        },
        {
          "text": "DNS Service",
          "link": "/pp/integrations/plugin-packs/procedures/applications-protocol-dns"
        },
        {
          "text": "FTP Server",
          "link": "/pp/integrations/plugin-packs/procedures/applications-protocol-ftp"
        },
        {
          "text": "Generic SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/applications-protocol-snmp"
        },
        {
          "text": "HTTP Server",
          "link": "/pp/integrations/plugin-packs/procedures/applications-protocol-http"
        },
        {
          "text": "IMAP Server",
          "link": "/pp/integrations/plugin-packs/procedures/applications-protocol-imap"
        },
        {
          "text": "JMX value",
          "link": "/pp/integrations/plugin-packs/procedures/applications-protocol-jmx"
        },
        {
          "text": "LDAP Server",
          "link": "/pp/integrations/plugin-packs/procedures/applications-protocol-ldap"
        },
        {
          "text": "Modbus",
          "link": "/pp/integrations/plugin-packs/procedures/applications-protocol-modbus"
        },
        {
          "text": "NTP Server",
          "link": "/pp/integrations/plugin-packs/procedures/applications-protocol-ntp"
        },
        {
          "text": "OSPF Protocol",
          "link": "/pp/integrations/plugin-packs/procedures/applications-protocol-ospf"
        },
        {
          "text": "POP Server",
          "link": "/pp/integrations/plugin-packs/procedures/infrastructure-pop"
        },
        {
          "text": "Protocol CIFS",
          "link": "/pp/integrations/plugin-packs/procedures/applications-protocol-cifs"
        },
        {
          "text": "Protocol DHCP",
          "link": "/pp/integrations/plugin-packs/procedures/applications-protocol-dhcp"
        },
        {
          "text": "Protocol SFTP",
          "link": "/pp/integrations/plugin-packs/procedures/applications-protocol-sftp"
        },
        {
          "text": "Protocol SSH",
          "link": "/pp/integrations/plugin-packs/procedures/applications-protocol-ssh"
        },
        {
          "text": "Protocol UDP",
          "link": "/pp/integrations/plugin-packs/procedures/applications-protocol-udp"
        },
        {
          "text": "Protocol WHOIS",
          "link": "/pp/integrations/plugin-packs/procedures/applications-protocol-whois"
        },
        {
          "text": "Radius Service",
          "link": "/pp/integrations/plugin-packs/procedures/applications-protocol-radius"
        },
        {
          "text": "SMTP Server",
          "link": "/pp/integrations/plugin-packs/procedures/applications-protocol-smtp"
        },
        {
          "text": "TCP Protocol",
          "link": "/pp/integrations/plugin-packs/procedures/applications-protocol-tcp"
        },
        {
          "text": "Telnet Scenario",
          "link": "/pp/integrations/plugin-packs/procedures/applications-protocol-telnet"
        },
        {
          "text": "TFTP Server",
          "link": "/pp/integrations/plugin-packs/procedures/applications-protocol-tftp"
        },
        {
          "text": "X509 Certificate",
          "link": "/pp/integrations/plugin-packs/procedures/applications-protocol-x509"
        }
      ]
    },
    {
      "text": "Sensor",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "ABB CMS-700 SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-devices-abb-cms700-snmp"
        },
        {
          "text": "AKCP Sensor SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-sensors-akcp-snmp"
        },
        {
          "text": "APC Sensor SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-sensors-apc-snmp"
        },
        {
          "text": "Comet P8000 Sensor SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-sensors-comet-p8000-snmp"
        },
        {
          "text": "Geist Sensor SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-sensors-geist-snmp"
        },
        {
          "text": "HWg-STE Sensor SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-sensors-hwgste-snmp"
        },
        {
          "text": "Jacarta Sensor SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-sensors-jacarta-snmp"
        },
        {
          "text": "LM Sensors SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/applications-lmsensors-snmp"
        },
        {
          "text": "Netbotz Sensor SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-sensors-netbotz-snmp"
        },
        {
          "text": "Rittal CMC3 SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-sensors-rittal-cmc3-snmp"
        },
        {
          "text": "Sensor IP SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-sensors-sensorip-snmp"
        },
        {
          "text": "SensorGateway SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-sensors-serverscheck-sensorgateway-snmp"
        },
        {
          "text": "Sensormetrix",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-sensors-sensormetrix-em01-web"
        }
      ]
    },
    {
      "text": "Storage",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Adic Tape SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-adic-tape-snmp"
        },
        {
          "text": "Avid Isis SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-avid-isis-snmp"
        },
        {
          "text": "BDT MultiStak SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-bdt-multistak-snmp"
        },
        {
          "text": "Buffalo TeraStation SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-buffalo-terastation-snmp"
        },
        {
          "text": "Datacore RestApi",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-datacore-api"
        },
        {
          "text": "Dell Compellent Nsclient NRPE",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-dell-compellent-api"
        },
        {
          "text": "Dell Compellent SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-dell-compellent-snmp"
        },
        {
          "text": "Dell Equallogic SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-dell-equallogic-snmp"
        },
        {
          "text": "Dell FluidFS SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-dell-fluidfs-snmp"
        },
        {
          "text": "Dell MD3000 SMcli",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-dell-md3000-smcli"
        },
        {
          "text": "Dell ME4 Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-dell-me4-restapi"
        },
        {
          "text": "Dell ML6000 SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-dell-ml6000-snmp"
        },
        {
          "text": "Dell PowerStore Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-dell-powerstore-restapi"
        },
        {
          "text": "Dell TL2000 SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-dell-tl2000-snmp"
        },
        {
          "text": "EMC Celerra SSH",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-emc-celerra-ssh"
        },
        {
          "text": "EMC Clariion Navisphere",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-emc-clariion-navisphere"
        },
        {
          "text": "EMC Data Domain SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-emc-datadomain-snmp"
        },
        {
          "text": "EMC Isilon SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-emc-isilon-snmp"
        },
        {
          "text": "EMC RecoveryPoint SSH",
          "link": "/pp/integrations/plugin-packs/procedures/applications-backup-emc-recoverypoint-ssh"
        },
        {
          "text": "EMC Symmetrix NRPE",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-emc-symmetrix-nrpe"
        },
        {
          "text": "EMC Symmetrix NSClient++ API",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-emc-symmetrix-nsclient-05-restapi"
        },
        {
          "text": "EMC Unisphere Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-emc-unisphere-restapi"
        },
        {
          "text": "EMC Vplex Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-emc-vplex-restapi"
        },
        {
          "text": "EMC Xtremio Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-emc-xtremio-restapi"
        },
        {
          "text": "Exagrid SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-exagrid-snmp"
        },
        {
          "text": "Fujitsu Eternus DX SSH",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-fujitsu-eternus-dx-ssh"
        },
        {
          "text": "Hitachi E Series CMA",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-hitachi-eseries-cma"
        },
        {
          "text": "Hitachi HCP SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-hitachi-hcp-snmp"
        },
        {
          "text": "Hitachi NAS SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-hitachi-hnas-snmp"
        },
        {
          "text": "Hitachi Standard SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-hitachi-standard-snmp"
        },
        {
          "text": "HP 3PAR 7000 (deprecated)",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-hp-3par-7000-ssh"
        },
        {
          "text": "HP 3PAR SSH",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-hp-3par-ssh"
        },
        {
          "text": "HP EVA Cli",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-hp-eva-cli"
        },
        {
          "text": "HP Lefthand SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-hp-lefthand-snmp"
        },
        {
          "text": "HP MSA2000 SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-hp-msa2000-snmp"
        },
        {
          "text": "HP MSL SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-hp-msl-snmp"
        },
        {
          "text": "HP P2000 XML API",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-hp-p2000-xmlapi"
        },
        {
          "text": "HP StoreOnce (deprecated)",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-hp-storeonce-restapi"
        },
        {
          "text": "HP StoreOnce 3 Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-hp-storeonce3-restapi"
        },
        {
          "text": "HP StoreOnce 4 Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-hp-storeonce4-restapi"
        },
        {
          "text": "HP StoreOnce SSH",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-hp-storeonce-ssh"
        },
        {
          "text": "HPE Alletra REST API",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-hpe-alletra-restapi"
        },
        {
          "text": "HPE Primera REST API",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-hpe-primera-restapi"
        },
        {
          "text": "Huawei OceanStor SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-huawei-oceanstor-snmp"
        },
        {
          "text": "IBM DS3000 SMcli",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-ibm-ds3000-smcli"
        },
        {
          "text": "IBM DS4000 SMcli",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-ibm-ds4000-smcli"
        },
        {
          "text": "IBM DS5000 SMcli",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-ibm-ds5000-smcli"
        },
        {
          "text": "IBM FlashSystem 900 SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-ibm-fs900-snmp"
        },
        {
          "text": "IBM Storwize SSH",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-ibm-storwize-ssh"
        },
        {
          "text": "IBM TS2900 SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-ibm-ts2900-snmp"
        },
        {
          "text": "IBM TS3100 SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-ibm-ts3100-snmp"
        },
        {
          "text": "IBM TS3200 SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-ibm-ts3200-snmp"
        },
        {
          "text": "IBM TS3500 SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-ibm-ts3500-snmp"
        },
        {
          "text": "Kaminario RestAPI",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-kaminario-restapi"
        },
        {
          "text": "Lenovo Iomega SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-lenovo-iomega-snmp"
        },
        {
          "text": "Lenovo S Series SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-lenovo-sseries-snmp"
        },
        {
          "text": "NetApp Ontap OnCommand API",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-netapp-ontap-oncommandapi"
        },
        {
          "text": "NetApp Ontap Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-netapp-ontap-restapi"
        },
        {
          "text": "NetApp Ontap SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-netapp-ontap-snmp"
        },
        {
          "text": "Netapp RestAPI (deprecated)",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-netapp-restapi"
        },
        {
          "text": "Netapp Santricity Restapi",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-netapp-santricity-restapi"
        },
        {
          "text": "Netapp SNMP (deprecated)",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-netapp-snmp"
        },
        {
          "text": "Netgear Readynas SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-netgear-readynas-snmp"
        },
        {
          "text": "Nimble Storage Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-nimble-restapi"
        },
        {
          "text": "Nimble Storage SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-nimble-snmp"
        },
        {
          "text": "Oracle ZS Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-oracle-zs-restapi"
        },
        {
          "text": "Oracle ZS SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-oracle-zs-snmp"
        },
        {
          "text": "Overland Neo SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-overland-neo-snmp"
        },
        {
          "text": "Panzura SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-panzura-snmp"
        },
        {
          "text": "Pure Storage FlashArray Legacy Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-purestorage-flasharray-legacy-restapi"
        },
        {
          "text": "Pure Storage FlashArray Rest API v2",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-purestorage-flasharray-v2-restapi"
        },
        {
          "text": "Pure Storage FlashBlade v2 Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-purestorage-flashblade-v2-restapi"
        },
        {
          "text": "Pure Storage SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-purestorage-snmp"
        },
        {
          "text": "Qnap SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-qnap-snmp"
        },
        {
          "text": "QSAN NAS SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-qsan-nas-snmp"
        },
        {
          "text": "Quantum DXi Series SSH",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-quantum-dxi-ssh"
        },
        {
          "text": "Quantum Scalar SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-quantum-scalar-snmp"
        },
        {
          "text": "Storagetek SL SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-storagetek-sl-snmp"
        },
        {
          "text": "Synology SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-synology-snmp"
        },
        {
          "text": "Violin Memory 3000 SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-violin-3000-snmp"
        },
        {
          "text": "WD NAS SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-storage-wd-nas-snmp"
        }
      ]
    },
    {
      "text": "Toip-voip",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Alcatel OXE SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-telephony-alcatel-oxe-snmp"
        },
        {
          "text": "Asterisk VoIP Server (deprecated)",
          "link": "/pp/integrations/plugin-packs/procedures/applications-voip-asterisk"
        },
        {
          "text": "AudioCodes SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-audiocodes-snmp"
        },
        {
          "text": "Avaya AES SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-telephony-avaya-aes-snmp"
        },
        {
          "text": "Avaya CM SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-telephony-avaya-cm-snmp"
        },
        {
          "text": "Avaya Media Gateway SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-telephony-avaya-mediagateway-snmp"
        },
        {
          "text": "Polycom DMA SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-devices-polycom-dma-snmp"
        },
        {
          "text": "Polycom HDX SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-devices-polycom-hdx-snmp"
        },
        {
          "text": "Polycom RMX SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-polycom-rmx-snmp"
        },
        {
          "text": "Polycom RPRM SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-devices-polycom-rprm-snmp"
        },
        {
          "text": "Sonus SBC SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/network-sonus-sbc-snmp"
        },
        {
          "text": "XiVO VoIP Server",
          "link": "/pp/integrations/plugin-packs/procedures/applications-voip-xivo"
        }
      ]
    },
    {
      "text": "Ups-pdu",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Alpha UPS SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-ups-alpha-snmp"
        },
        {
          "text": "APC ATS SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-ats-apc"
        },
        {
          "text": "APC PDU SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-pdu-apc-snmp"
        },
        {
          "text": "APC UPS SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-ups-apc-snmp"
        },
        {
          "text": "Clever PDU SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-pdu-clever-snmp"
        },
        {
          "text": "CyberPower Systems PDU SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-pdu-cyberpower-snmp"
        },
        {
          "text": "CyberPower Systems UPS SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-ups-cyberpower-snmp"
        },
        {
          "text": "Eaton ATS SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-ats-eaton-snmp"
        },
        {
          "text": "Eaton PDU SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-pdu-eaton-snmp"
        },
        {
          "text": "EES UPS SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-ups-ees-snmp"
        },
        {
          "text": "Emerson PDU SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-pdu-emerson-snmp"
        },
        {
          "text": "Gude EPC PDU SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-pdu-gude-epc-snmp"
        },
        {
          "text": "Himoinsa SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-ups-himoinsa-snmp"
        },
        {
          "text": "HP UPS SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-ups-hp-snmp"
        },
        {
          "text": "Inmatics PSU Sputnik SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-ups-inmatics-sputnik-snmp"
        },
        {
          "text": "MGE UPS System SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-ups-mge-snmp"
        },
        {
          "text": "Nitram UPS SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-ups-nitram-snmp"
        },
        {
          "text": "Phoenixtec UPS SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-ups-phoenixtec-snmp"
        },
        {
          "text": "Powerware UPS SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-ups-powerware-snmp"
        },
        {
          "text": "Raritan PDU SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-pdu-raritan-snmp"
        },
        {
          "text": "Riello UPS SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-ups-riello-snmp"
        },
        {
          "text": "Schleifenbauer Gateway SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-pdu-schleifenbauer-gateway-snmp"
        },
        {
          "text": "UPS Socomec Net Vision SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-ups-socomec-netvision-snmp"
        },
        {
          "text": "UPS Standard SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/hardware-ups-standard-rfc1628-snmp"
        }
      ]
    },
    {
      "text": "Virtualization",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "HPE Simplivity Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/virtualization-hpe-simplivity-restapi"
        },
        {
          "text": "Hyper-V 2012 CMA",
          "link": "/pp/integrations/plugin-packs/procedures/virtualization-hyperv-2012-cma"
        },
        {
          "text": "Hyper-V 2012 NSClient++ NRPE",
          "link": "/pp/integrations/plugin-packs/procedures/virtualization-hyperv-2012-nrpe"
        },
        {
          "text": "Hyper-V NSCP Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/virtualization-hyperv-nscp-restapi"
        },
        {
          "text": "Linux Libvirt CMA",
          "link": "/pp/integrations/plugin-packs/procedures/virtualization-linux-libvirt-cma"
        },
        {
          "text": "Linux Libvirt SSH",
          "link": "/pp/integrations/plugin-packs/procedures/virtualization-linux-libvirt-ssh"
        },
        {
          "text": "Nutanix SNMP",
          "link": "/pp/integrations/plugin-packs/procedures/virtualization-nutanix-snmp"
        },
        {
          "text": "Proxmox VE Rest API",
          "link": "/pp/integrations/plugin-packs/procedures/virtualization-proxmox-ve-restapi"
        },
        {
          "text": "VMware ESX",
          "link": "/pp/integrations/plugin-packs/procedures/virtualization-vmware2-esx"
        },
        {
          "text": "VMware ESX WS-MAN",
          "link": "/pp/integrations/plugin-packs/procedures/virtualization-vmware2-esx-wsman"
        },
        {
          "text": "VMware vCenter",
          "link": "/pp/integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-generic"
        },
        {
          "text": "VMware vCenter v4 (deprecated)",
          "link": "/pp/integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-4"
        },
        {
          "text": "VMware vCenter v5 (deprecated)",
          "link": "/pp/integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-5"
        },
        {
          "text": "VMware vCenter v6",
          "link": "/pp/integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-6"
        },
        {
          "text": "VMware VM",
          "link": "/pp/integrations/plugin-packs/procedures/virtualization-vmware2-vm"
        },
        {
          "text": "VMware8 ESX REST API",
          "link": "/pp/integrations/plugin-packs/procedures/application-virtualization-vmware8-esx-restapi"
        },
        {
          "text": "VMware8 vCenter REST API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-virtualization-vmware8-vcenter-restapi"
        },
        {
          "text": "VMware8 VCSA REST API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-virtualization-vmware8-vcsa-restapi"
        },
        {
          "text": "VMware8 VM REST API",
          "link": "/pp/integrations/plugin-packs/procedures/applications-virtualization-vmware8-vm-restapi"
        }
      ]
    }
  ],
  "/cloud/": [
    {
      "text": "Getting started with Centreon Cloud",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "About Centreon Cloud",
          "link": "/cloud/getting-started/about-centreon-cloud"
        },
        {
          "text": "Centreon Cloud Trial",
          "link": "/cloud/getting-started/centreon-cloud-trial"
        },
        {
          "text": "Discover Centreon Cloud",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Architecture of Centreon Cloud",
              "link": "/cloud/getting-started/architecture"
            },
            {
              "text": "Overview of the Centreon interface",
              "link": "/cloud/getting-started/interface"
            },
            {
              "text": "Centreon basics",
              "link": "/cloud/getting-started/concepts"
            }
          ]
        },
        {
          "text": "Set up your platform",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Getting your platform ready",
              "link": "/cloud/getting-started/platform"
            },
            {
              "text": "Getting started with pollers",
              "link": "/cloud/getting-started/start-with-pollers"
            },
            {
              "text": "Getting started with Monitoring Connectors",
              "link": "/cloud/getting-started/start-with-connectors"
            }
          ]
        },
        {
          "text": "Prepare the monitoring",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "How do I monitor a resource?",
              "link": "/cloud/getting-started/monitoring"
            },
            {
              "text": "Tutorials",
              "collapsible": true,
              "collapsed": true,
              "items": [
                {
                  "text": "Monitor your first Linux host",
                  "link": "/cloud/getting-started/monitor-linux-server-with-snmp"
                },
                {
                  "text": "Monitor your first Windows host",
                  "link": "/cloud/getting-started/monitor-windows-server-with-snmp"
                },
                {
                  "text": "Monitor your first Cisco router",
                  "link": "/cloud/getting-started/monitor-cisco-router-with-snmp"
                },
                {
                  "text": "Monitor Mysql Server",
                  "link": "/cloud/getting-started/monitor-mysql-server"
                },
                {
                  "text": "Monitor AWS EC2 instances using autodiscovery",
                  "link": "/cloud/getting-started/autodisco-aws"
                }
              ],
              "link": "/cloud/getting-started/tutorials"
            }
          ]
        },
        {
          "text": "Monitor and visualize",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Monitoring resources in real time",
              "link": "/cloud/getting-started/monitor-in-real-time"
            },
            {
              "text": "Creating your first dashboard",
              "link": "/cloud/getting-started/create-dashboard"
            }
          ]
        },
        {
          "text": "Centreon Cloud beyond basics",
          "link": "/cloud/getting-started/cloud-beyond-basics"
        }
      ],
      "link": "/cloud/getting-started/welcome"
    },
    {
      "text": "Managing Centreon Cloud users",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "User portal (Centreon Hub)",
          "link": "/cloud/users/centreon-hub"
        },
        {
          "text": "Users in Centreon Cloud",
          "link": "/cloud/users/users"
        },
        {
          "text": "User groups in Centreon Cloud",
          "link": "/cloud/users/user_groups"
        },
        {
          "text": "Ram",
          "link": "/cloud/administration/ram"
        },
        {
          "text": "Cloud Saml",
          "link": "/cloud/users/cloud-saml"
        }
      ]
    },
    {
      "text": "Managing pollers",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Prerequisites",
          "link": "/cloud/installation/prerequisites"
        },
        {
          "text": "Deploying a poller",
          "link": "/cloud/installation/deploy-poller"
        },
        {
          "text": "Updating/upgrading a poller",
          "link": "/cloud/installation/poller-update-upgrade"
        },
        {
          "text": "Securing your pollers",
          "link": "/cloud/installation/poller-secure"
        },
        {
          "text": "Monitoring your pollers",
          "link": "/cloud/installation/poller-monitor"
        },
        {
          "text": "Troubleshooting your pollers",
          "link": "/cloud/installation/poller-troubleshoot"
        },
        {
          "text": "Migrating a poller to another host machine",
          "link": "/cloud/installation/poller-migrate"
        },
        {
          "text": "Removing a poller from your architecture",
          "link": "/cloud/installation/poller-remove"
        },
        {
          "text": "Poller versions",
          "link": "/cloud/installation/poller-versions"
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
              "text": "Understanding metrics",
              "link": "/cloud/monitoring/metrics"
            },
            {
              "text": "Monitoring Connectors",
              "link": "/cloud/monitoring/pluginpacks"
            },
            {
              "text": "Deploying a configuration",
              "link": "/cloud/monitoring/monitoring-servers/deploying-a-configuration"
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
              "link": "/cloud/monitoring/basic-objects/hosts-create"
            },
            {
              "text": "Creating hosts manually",
              "link": "/cloud/monitoring/basic-objects/hosts"
            },
            {
              "text": "Creating hosts automatically",
              "link": "/cloud/monitoring/basic-objects/hosts-create-disco"
            },
            {
              "text": "Using host templates",
              "link": "/cloud/monitoring/basic-objects/hosts-templates"
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
              "link": "/cloud/monitoring/basic-objects/services-create"
            },
            {
              "text": "Creating services manually",
              "link": "/cloud/monitoring/basic-objects/services"
            },
            {
              "text": "Creating services automatically",
              "link": "/cloud/monitoring/basic-objects/services-create-disco"
            },
            {
              "text": "Using service templates",
              "link": "/cloud/monitoring/basic-objects/services-templates"
            },
            {
              "text": "Creating Meta Services",
              "link": "/cloud/monitoring/basic-objects/meta-services"
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
              "link": "/cloud/monitoring/discovery/introduction"
            },
            {
              "text": "Discovering hosts automatically",
              "link": "/cloud/monitoring/discovery/hosts-discovery"
            },
            {
              "text": "Discovering services automatically",
              "link": "/cloud/monitoring/discovery/services-discovery"
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
              "link": "/cloud/monitoring/groups"
            },
            {
              "text": "Categories and severities",
              "link": "/cloud/monitoring/categories"
            }
          ]
        },
        {
          "text": "Basic objects and actions",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Commands",
              "link": "/cloud/monitoring/basic-objects/commands"
            },
            {
              "text": "Time periods",
              "link": "/cloud/monitoring/basic-objects/timeperiods"
            },
            {
              "text": "Macros",
              "link": "/cloud/monitoring/basic-objects/macros"
            },
            {
              "text": "Generic actions",
              "link": "/cloud/monitoring/generic-actions"
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
              "link": "/cloud/monitoring/anomaly-detection"
            }
          ]
        },
        {
          "text": "Event handler (auto remediation)",
          "link": "/cloud/monitoring/event-handler"
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
              "link": "/cloud/alerts-notifications/concepts"
            },
            {
              "text": "Resources Status page",
              "link": "/cloud/alerts-notifications/resources-status"
            },
            {
              "text": "Event Logs",
              "link": "/cloud/alerts-notifications/event-log"
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
              "link": "/cloud/alerts-notifications/acknowledge"
            },
            {
              "text": "Planning downtime",
              "link": "/cloud/alerts-notifications/downtimes"
            },
            {
              "text": "Submitting a status",
              "link": "/cloud/alerts-notifications/submit"
            }
          ]
        },
        {
          "text": "Configuring notifications",
          "link": "/cloud/alerts-notifications/notif-configuration"
        },
        {
          "text": "Flapping",
          "link": "/cloud/alerts-notifications/notif-flapping"
        },
        {
          "text": "Managing tickets",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Configuring Open Tickets",
              "link": "/cloud/alerts-notifications/ticketing"
            },
            {
              "text": "Customizing tickets",
              "collapsible": true,
              "collapsed": true,
              "items": [
                {
                  "text": "Ticketing Advanced Smarty Variables",
                  "link": "/cloud/alerts-notifications/ticketing/ticketing-advanced-smarty-variables"
                },
                {
                  "text": "Ticketing Advanced Smarty Functions",
                  "link": "/cloud/alerts-notifications/ticketing/ticketing-advanced-smarty-functions"
                },
                {
                  "text": "Ticketing Advanced Mapping",
                  "link": "/cloud/alerts-notifications/ticketing/ticketing-advanced-mapping"
                },
                {
                  "text": "Open tickets glossary",
                  "link": "/cloud/alerts-notifications/ticketing/glossary"
                }
              ],
              "link": "/cloud/alerts-notifications/ticketing/ticketing-advanced-body"
            },
            {
              "text": "Using Open Tickets",
              "link": "/cloud/alerts-notifications/ticketing-use"
            },
            {
              "text": "Ticketing Advanced Architecture",
              "link": "/cloud/alerts-notifications/ticketing/ticketing-advanced-architecture"
            }
          ],
          "link": "/cloud/alerts-notifications/ticketing-overview"
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
          "link": "/cloud/service-mapping/introduction"
        },
        {
          "text": "Guide",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Manage Business Activities",
              "link": "/cloud/service-mapping/ba-management"
            },
            {
              "text": "Monitor Business Activities",
              "link": "/cloud/service-mapping/ba-monitoring"
            },
            {
              "text": "Report Business Activities",
              "link": "/cloud/service-mapping/ba-reporting"
            },
            {
              "text": "Settings",
              "link": "/cloud/service-mapping/ba-settings"
            },
            {
              "text": "Widgets",
              "link": "/cloud/service-mapping/widgets"
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
          "link": "/cloud/alerts-notifications/dashboards"
        },
        {
          "text": "Performance graphs",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Chart management",
              "link": "/cloud/metrology/chart-management"
            },
            {
              "text": "Chart Template",
              "link": "/cloud/metrology/chart-template"
            },
            {
              "text": "Chart Curves",
              "link": "/cloud/metrology/chart-curves"
            },
            {
              "text": "Chart Virtual Metrics",
              "link": "/cloud/metrology/chart-virtual-metrics"
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
              "link": "/cloud/graph-views/introduction-map"
            },
            {
              "text": "Guide",
              "collapsible": true,
              "collapsed": true,
              "items": [
                {
                  "text": "Manage access rights in MAP",
                  "link": "/cloud/graph-views/map-web-access"
                },
                {
                  "text": "Manage maps in MAP",
                  "link": "/cloud/graph-views/map-web-manage"
                },
                {
                  "text": "Create a standard map",
                  "link": "/cloud/graph-views/map-web-create-standard-map"
                },
                {
                  "text": "Create a geographic view",
                  "link": "/cloud/graph-views/map-web-create-geoview"
                },
                {
                  "text": "MAP known issues",
                  "link": "/cloud/graph-views/map-web-known-issues"
                }
              ]
            }
          ]
        },
        {
          "text": "Custom views (legacy)",
          "link": "/cloud/alerts-notifications/custom-views"
        }
      ]
    },
    {
      "text": "Administration",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Authentication Tokens",
          "link": "/cloud/administration/authentication-tokens"
        },
        {
          "text": "Managing media",
          "link": "/cloud/administration/media"
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
          "link": "/cloud/cma/cma"
        },
        {
          "text": "Setting up the agent's environment",
          "link": "/cloud/cma/cma-setup"
        },
        {
          "text": "Configuring certificates",
          "link": "/cloud/cma/cma-certificates"
        },
        {
          "text": "Using custom plugins with CMA",
          "link": "/cloud/cma/cma-custom"
        },
        {
          "text": "Centreon Monitoring Agent - Migrate from NSClient++",
          "link": "/cloud/cma/cma-migratenscpp"
        },
        {
          "text": "Troubleshooting CMA",
          "link": "/cloud/cma/cma-troubleshooting"
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
          "link": "/cloud/integrations/stream-connectors-cloud"
        },
        {
          "text": "Mcp Server",
          "link": "/cloud/integrations/mcp-server"
        },
        {
          "text": "ITSM",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "BMC Footprints",
              "link": "/cloud/integrations/itsm/ot-bmc-footprints"
            },
            {
              "text": "EasyVista API SOAP",
              "link": "/cloud/integrations/itsm/ot-easyvista"
            },
            {
              "text": "EasyVista RestAPI",
              "link": "/cloud/integrations/itsm/ot-easyvista-rest-api"
            },
            {
              "text": "GLPI",
              "link": "/cloud/integrations/itsm/ot-glpi"
            },
            {
              "text": "Ot Glpi Restapi",
              "link": "/cloud/integrations/itsm/ot-glpi-restapi"
            },
            {
              "text": "iTop",
              "link": "/cloud/integrations/itsm/ot-itop"
            },
            {
              "text": "Jira",
              "link": "/cloud/integrations/itsm/ot-jira"
            },
            {
              "text": "Ot Otrs Restapi",
              "link": "/cloud/integrations/itsm/ot-otrs-restapi"
            },
            {
              "text": "Ot Request Tracker Restapi",
              "link": "/cloud/integrations/itsm/ot-request-tracker-restapi"
            },
            {
              "text": "Ot Servicenow",
              "link": "/cloud/integrations/itsm/ot-servicenow"
            }
          ],
          "link": "/cloud/integrations/itsm/itsm-overview"
        }
      ]
    },
    {
      "text": "API",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Api Tokens",
          "link": "/cloud/administration/api-tokens"
        }
      ]
    },
    {
      "text": "Security",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Centreon Cloud security management",
          "link": "/cloud/security/security"
        }
      ]
    },
    {
      "text": "Release notes",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Centreon Cloud release notes",
          "link": "/cloud/releases/cloud-release-notes"
        }
      ]
    },
    {
      "text": "Resources",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Centreon Cloud known issues",
          "link": "/cloud/resources/known-issues"
        },
        {
          "text": "Glossary of Centreon concepts",
          "link": "/cloud/resources/glossary"
        }
      ]
    }
  ],
  "/logmanagement/": [
    {
      "text": "Getting started with Centreon Log Management",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Observability",
          "link": "/logmanagement/getting-started/observability"
        },
        {
          "text": "Concepts",
          "link": "/logmanagement/getting-started/concepts"
        },
        {
          "text": "Use Cases",
          "link": "/logmanagement/getting-started/use-cases"
        }
      ],
      "link": "/logmanagement/getting-started/welcome"
    },
    {
      "text": "Managing users",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "User portal (Centreon Hub)",
          "link": "/logmanagement/centreon-hub"
        }
      ]
    },
    {
      "text": "Sending logs to Centreon Log Management",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "How an OpenTelemetry collector works",
          "link": "/logmanagement/collector/opentelemetry-collector"
        },
        {
          "text": "Copyright 2025 Centreon.",
          "link": "/logmanagement/collector/collector-simple"
        },
        {
          "text": "Collector",
          "link": "/logmanagement/collector/collector"
        },
        {
          "text": "Troubleshooting your installation",
          "link": "/logmanagement/collector/collector-troubleshooting"
        }
      ]
    },
    {
      "text": "Exploring and analyzing logs",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Log Explorer",
          "link": "/logmanagement/log-explorer"
        },
        {
          "text": "Query syntax",
          "link": "/logmanagement/query-syntax"
        },
        {
          "text": "Creating dashboards",
          "link": "/logmanagement/dashboards"
        }
      ],
      "link": "/logmanagement/explore-analyze"
    },
    {
      "text": "Managing alerts",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Alert Events",
          "link": "/logmanagement/alert-events"
        }
      ]
    },
    {
      "text": "Administration",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Keeping track of storage usage",
          "link": "/logmanagement/administration/storage-usage"
        },
        {
          "text": "Tokens",
          "link": "/logmanagement/administration/tokens"
        }
      ]
    },
    {
      "text": "API",
      "link": "/logmanagement/api"
    },
    {
      "text": "Resources",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Glossary",
          "link": "/logmanagement/resources/glossary"
        }
      ]
    }
  ],
  "/experience-monitoring/": [
    {
      "text": "Getting started with Centreon Experience Monitoring",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Experience Monitoring Solution",
          "link": "/experience-monitoring/getting-started/experience-monitoring-solution"
        },
        {
          "text": "Contact Support",
          "link": "/experience-monitoring/getting-started/contact-support"
        },
        {
          "text": "Synthetic Monitoring",
          "link": "/experience-monitoring/getting-started/synthetic-monitoring"
        },
        {
          "text": "Real User Monitoring",
          "link": "/experience-monitoring/getting-started/real-user-monitoring"
        },
        {
          "text": "System View",
          "link": "/experience-monitoring/getting-started/system-view"
        },
        {
          "text": "Business View",
          "link": "/experience-monitoring/getting-started/business-view"
        },
        {
          "text": "Load Tests",
          "link": "/experience-monitoring/getting-started/load-tests"
        },
        {
          "text": "Dashboards",
          "link": "/experience-monitoring/getting-started/dashboards"
        }
      ],
      "link": "/experience-monitoring/getting-started/welcome"
    },
    {
      "text": "Installation",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Installation Checklist",
          "link": "/experience-monitoring/installation/installation-checklist"
        },
        {
          "text": "Experience Monitoring Ip Addresses",
          "link": "/experience-monitoring/installation/experience-monitoring-ip-addresses"
        },
        {
          "text": "Real User Monitoring Installation",
          "link": "/experience-monitoring/installation/real-user-monitoring-installation"
        },
        {
          "text": "Monitor Production Events",
          "link": "/experience-monitoring/installation/monitor-production-events"
        },
        {
          "text": "Servers and middleware",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Install System Agents",
              "link": "/experience-monitoring/installation/servers/install-system-agents"
            },
            {
              "text": "Cloud Configuration Of Agents",
              "link": "/experience-monitoring/installation/servers/cloud-configuration-of-agents"
            },
            {
              "text": "Add Advanced Metrics",
              "link": "/experience-monitoring/installation/servers/add-advanced-metrics"
            },
            {
              "text": "Install Php Magento Orocommerce Profiler",
              "link": "/experience-monitoring/installation/servers/install-php-magento-orocommerce-profiler"
            }
          ]
        }
      ]
    },
    {
      "text": "Configuration",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Configuration Checklist",
          "link": "/experience-monitoring/configuration/configuration-checklist"
        },
        {
          "text": "Manage Users And Rights",
          "link": "/experience-monitoring/configuration/manage-users-and-rights"
        },
        {
          "text": "Configure Digital Sobriety",
          "link": "/experience-monitoring/configuration/configure-digital-sobriety"
        },
        {
          "text": "Configure Google Analytics",
          "link": "/experience-monitoring/configuration/configure-google-analytics"
        },
        {
          "text": "Receive And Configure Alerts",
          "link": "/experience-monitoring/configuration/receive-and-configure-alerts"
        },
        {
          "text": "User journey",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Create A Scenario",
              "link": "/experience-monitoring/configuration/user-journey/create-a-scenario"
            },
            {
              "text": "User Journey Best Practices",
              "link": "/experience-monitoring/configuration/user-journey/user-journey-best-practices"
            },
            {
              "text": "Monitoring non-public user journeys (closed beta)",
              "link": "/experience-monitoring/configuration/user-journey/stm-zones"
            }
          ]
        },
        {
          "text": "Advanced configuration",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Define CSRF token and _qm3k_session variables",
              "link": "/experience-monitoring/configuration/advanced-configuration/enable-disable-scenario-or-alert-via-api"
            }
          ]
        }
      ]
    },
    {
      "text": "Performance analysis",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Network Tab Indicators",
          "link": "/experience-monitoring/performance-analysis/network-tab-indicators"
        },
        {
          "text": "System Tab Indicators",
          "link": "/experience-monitoring/performance-analysis/system-tab-indicators"
        },
        {
          "text": "Speed Up Website With Applications Or Server Configuration",
          "link": "/experience-monitoring/performance-analysis/speed-up-website-with-applications-or-server-configuration"
        },
        {
          "text": "Errors And Unavailability Front End",
          "link": "/experience-monitoring/performance-analysis/errors-and-unavailability-front-end"
        },
        {
          "text": "Metric overview",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Hero Time",
              "link": "/experience-monitoring/performance-analysis/metrics/hero-time"
            },
            {
              "text": "Time To First Byte",
              "link": "/experience-monitoring/performance-analysis/metrics/time-to-first-byte"
            },
            {
              "text": "Speed Index",
              "link": "/experience-monitoring/performance-analysis/metrics/speed-index"
            },
            {
              "text": "OnLoad",
              "link": "/experience-monitoring/performance-analysis/metrics/on-load"
            },
            {
              "text": "Largest Contentful Paint",
              "link": "/experience-monitoring/performance-analysis/metrics/largest-contentful-paint"
            },
            {
              "text": "TBT - Total Blocking Time (Web Vitals)",
              "link": "/experience-monitoring/performance-analysis/metrics/total-blocking-time"
            },
            {
              "text": "CLS - Cumulative Layout Shift (Web Vitals)",
              "link": "/experience-monitoring/performance-analysis/metrics/cumulative-layout-shift"
            }
          ],
          "link": "/experience-monitoring/performance-analysis/metrics/overview-of-metrics"
        },
        {
          "text": "Basic actions",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Navigate In Experience Monitoring",
              "link": "/experience-monitoring/performance-analysis/basic-actions/navigate-in-experience-monitoring"
            },
            {
              "text": "How Alerts Work",
              "link": "/experience-monitoring/performance-analysis/basic-actions/how-alerts-work"
            },
            {
              "text": "Gray Areas On Charts",
              "link": "/experience-monitoring/performance-analysis/basic-actions/gray-areas-on-charts"
            },
            {
              "text": "Event Tracking",
              "link": "/experience-monitoring/performance-analysis/basic-actions/event-tracking"
            }
          ]
        }
      ]
    },
    {
      "text": "Digital sobriety",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Carbon Footprint Evaluation And Digital Sobriety",
          "link": "/experience-monitoring/digital-sobriety/carbon-footprint-evaluation-and-digital-sobriety"
        },
        {
          "text": "Digital Sobriety Score",
          "link": "/experience-monitoring/digital-sobriety/digital-sobriety-score"
        },
        {
          "text": "Differences With Eco Index",
          "link": "/experience-monitoring/digital-sobriety/differences-with-eco-index"
        }
      ]
    },
    {
      "text": "How-to articles",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Unable To Connect",
          "link": "/experience-monitoring/how-to-articles/unable-to-connect"
        },
        {
          "text": "To view the error details, hover over the red bar — Experience Monitoring will show at which step the scenario stopped and why.",
          "link": "/experience-monitoring/how-to-articles/meaning-of-colors-in-graphs"
        },
        {
          "text": "SEO Module – Google Search Optimization",
          "link": "/experience-monitoring/how-to-articles/seo-module"
        },
        {
          "text": "Measurement Interval",
          "link": "/experience-monitoring/how-to-articles/measurement-interval"
        },
        {
          "text": "Experience Monitoring Probes In Google Analytics",
          "link": "/experience-monitoring/how-to-articles/experience-monitoring-probes-in-google-analytics"
        },
        {
          "text": "I'm concerned about my server's security, can you explain how the Experience Monitoring agent and PHP module work?",
          "link": "/experience-monitoring/how-to-articles/faq"
        },
        {
          "text": "How do I reset my password?",
          "link": "/experience-monitoring/how-to-articles/password-reset"
        },
        {
          "text": "Using Charts",
          "link": "/experience-monitoring/how-to-articles/using-charts"
        },
        {
          "text": "User Journey Screen",
          "link": "/experience-monitoring/how-to-articles/user-journey-screen"
        },
        {
          "text": "Rum Blocked By Csp",
          "link": "/experience-monitoring/how-to-articles/rum-blocked-by-csp"
        }
      ]
    },
    {
      "text": "Centreon Experience Monitoring release notes",
      "link": "/experience-monitoring/release-notes"
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
        },
        {
          "text": "Sécuriser votre plateforme MBI",
          "link": "/fr/25.10/reporting/secure-your-mbi-platform"
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
              "text": "Kafka Events",
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
              "text": "ServiceNow Incident Events",
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
  ],
  "/fr/pp/": [
    {
      "text": "Démarrer avec les connecteurs de supervision",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Guides",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Personnaliser le comportement d'un plugin",
              "link": "/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/plugin-customization"
            },
            {
              "text": "Centreon Monitoring Agent",
              "link": "/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/cma/cma"
            },
            {
              "text": "Prérequis pour la supervision Azure",
              "link": "/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/azure-credential-configuration"
            },
            {
              "text": "Centreon NSClient++",
              "link": "/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/centreon-nsclient-tutorial"
            },
            {
              "text": "Telegraf",
              "link": "/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/telegraf"
            },
            {
              "text": "Collecter des OpenMetrics",
              "link": "/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/collect-openmetrics"
            },
            {
              "text": "Additional Connector Configuration",
              "link": "/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/additional-connector-configuration"
            },
            {
              "text": "Dépanner les erreurs de plugin",
              "link": "/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"
            },
            {
              "text": "Tutoriel de configuration de Windows WSMAN",
              "link": "/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/windows-winrm-wsman-tutorial"
            },
            {
              "text": "Licences offline/online et connecteurs",
              "link": "/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/connectors-licenses"
            }
          ]
        },
        {
          "text": "Release Notes",
          "link": "/fr/pp/integrations/plugin-packs/releases/release-notes"
        },
        {
          "text": "Developers Center",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Getting started - Plugin development",
              "link": "/fr/pp/integrations/plugin-packs/dev-resources/introduction"
            },
            {
              "text": "Plugins development guidelines",
              "link": "/fr/pp/integrations/plugin-packs/dev-resources/plugins-guidelines"
            },
            {
              "text": "Develop with centreon-plugins",
              "link": "/fr/pp/integrations/plugin-packs/dev-resources/develop-with-centreon-plugins"
            }
          ]
        }
      ],
      "link": "/fr/pp/integrations/plugin-packs/getting-started/introduction"
    },
    {
      "text": "Applications",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "3CX",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-voip-3cx-restapi"
        },
        {
          "text": "Absyss VTOM Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-vtom-restapi"
        },
        {
          "text": "ActiveMQ JMX",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-activemq-jmx"
        },
        {
          "text": "Alyvix Server",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-alyvix-restapi"
        },
        {
          "text": "Ansible CLI",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-ansible-cli"
        },
        {
          "text": "Ansible Tower",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-ansible-tower"
        },
        {
          "text": "Antivirus ClamAV",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-antivirus-clamav-ssh"
        },
        {
          "text": "Apache CXF",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-apache-cxf-jmx"
        },
        {
          "text": "Apache Server",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-webservers-apache-serverstatus"
        },
        {
          "text": "Asterisk VoIP AMI",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-voip-asterisk-ami"
        },
        {
          "text": "Asterisk VoIP SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-voip-asterisk-snmp"
        },
        {
          "text": "AWA (Automic Workload Automation) JMX",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-awa-jmx"
        },
        {
          "text": "Bind9 Web",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-bind9-web"
        },
        {
          "text": "BlueMind (déprécié)",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-mail-bluemind"
        },
        {
          "text": "BlueMind SSH",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-bluemind-ssh"
        },
        {
          "text": "Cassandra",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-databases-cassandra-jmx"
        },
        {
          "text": "Ceph Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-ceph-restapi"
        },
        {
          "text": "Cisco CMS",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-cisco-cms-restapi"
        },
        {
          "text": "Cisco DNA Center Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-cisco-dnac-restapi"
        },
        {
          "text": "Cisco ISE",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-cisco-ise-restapi"
        },
        {
          "text": "Cisco SSMS",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-cisco-ssms-restapi"
        },
        {
          "text": "Commvault CommServe Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-commvault-commserve-restapi"
        },
        {
          "text": "Control-M Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-controlm-restapi"
        },
        {
          "text": "Docker REST API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-docker-restapi"
        },
        {
          "text": "DRBD SSH",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-drbd-ssh"
        },
        {
          "text": "Dynamics AX Database",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-dynamics-ax-mssql"
        },
        {
          "text": "Dynamics365 NSClient 0.5 NRPE",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-dynamics-365-nsclient-05-nrpe"
        },
        {
          "text": "Dynatrace Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-dynatrace-restapi"
        },
        {
          "text": "Eclipse Mosquitto MQTT",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-eclipse-mosquitto-mqtt"
        },
        {
          "text": "EMC PPMA Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-emc-ppma-restapi"
        },
        {
          "text": "Ericsson ENM API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-ericsson-enm-api"
        },
        {
          "text": "Exense Step REST API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-exense-step-restapi"
        },
        {
          "text": "GitHub Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-github-restapi"
        },
        {
          "text": "Google GSuite (déprécié)",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-google-gsuite-api"
        },
        {
          "text": "Google Workspace",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-google-workspace-api"
        },
        {
          "text": "Grafana",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-grafana-api"
        },
        {
          "text": "Graylog",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-graylog-restapi"
        },
        {
          "text": "Haproxy SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-haproxy-snmp"
        },
        {
          "text": "HAProxy Web API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-haproxy-web"
        },
        {
          "text": "HashiCorp Vault Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-hashicorp-vault-restapi"
        },
        {
          "text": "Hddtemp TCP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-hddtemp-tcp"
        },
        {
          "text": "Hibernate",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-hibernate-jmx"
        },
        {
          "text": "IBM MQ MQI",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-ibmmq-mqi"
        },
        {
          "text": "IBM MQ Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-ibmmq-restapi"
        },
        {
          "text": "IBM Tivoli Storage M",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-ibm-tsm-dsmadmc"
        },
        {
          "text": "IBM TSAMP SSH",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-ibm-tsamp-ssh"
        },
        {
          "text": "Infor ION Grid Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-infor-ion-grid-restapi"
        },
        {
          "text": "IP Fabric API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-ipfabric-api"
        },
        {
          "text": "IP-Label datametrie API (déprécié)",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-iplabel-datametrie-restapi"
        },
        {
          "text": "IP-Label Ekara Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-iplabel-ekara-restapi"
        },
        {
          "text": "IP-Label Newtest Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-iplabel-newtest-restapi"
        },
        {
          "text": "JBoss Server",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-jboss-jmx"
        },
        {
          "text": "Jenkins API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-jenkins"
        },
        {
          "text": "JMeter",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-jmeter"
        },
        {
          "text": "JVM Actuator",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-jvm-actuator"
        },
        {
          "text": "JVM JMX",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-jvm-jmx"
        },
        {
          "text": "Kadiska Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-kadiska-restapi"
        },
        {
          "text": "Kafka",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-kafka-jmx"
        },
        {
          "text": "Kaspersky",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-antivirus-kaspersky-snmp"
        },
        {
          "text": "Keepalived SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-keepalived-snmp"
        },
        {
          "text": "LatenceTech RestAPI",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-latencetech-restapi"
        },
        {
          "text": "Loggly Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-loggly-restapi"
        },
        {
          "text": "Lync 2013",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-lync-2013-mssql"
        },
        {
          "text": "Maltem Insight Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-mip-restapi"
        },
        {
          "text": "McAfee Web Gateway",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-antivirus-mcafee-webgateway-snmp"
        },
        {
          "text": "Microsoft Active Directory CMA",
          "link": "/fr/pp/integrations/plugin-packs/procedures/infrastructure-active-directory-centreon-monitoring-agent"
        },
        {
          "text": "Microsoft Active Directory NRPE",
          "link": "/fr/pp/integrations/plugin-packs/procedures/infrastructure-active-directory-nrpe"
        },
        {
          "text": "Microsoft Active Directory NSClient++ API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/infrastructure-active-directory-nsclient-05-restapi"
        },
        {
          "text": "Microsoft Active Directory WSMAN",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-active-directory-wsman"
        },
        {
          "text": "Microsoft Cluster Server CMA",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-mscs-cma"
        },
        {
          "text": "Microsoft Cluster Server NSClient++ NRPE",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-mscs-nrpe"
        },
        {
          "text": "Microsoft DHCP SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-microsoft-dhcp-snmp"
        },
        {
          "text": "Dynamics AX NSClient 0.5 NRPE",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-dynamics-ax-nsclient-05-nrpe"
        },
        {
          "text": "Microsoft Exchange 2010 NRPE (déprécié)",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-exchange-2010-nrpe"
        },
        {
          "text": "Microsoft Exchange 2010 Nsclient Restapi (déprécié)",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-exchange-2010-nsclient-05-restapi"
        },
        {
          "text": "Microsoft Exchange CMA",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-exchange-cma"
        },
        {
          "text": "Microsoft Exchange NSClient NRPE",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-exchange-nrpe"
        },
        {
          "text": "Microsoft Exchange NSClient RestAPI",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-exchange-nsclient-restapi"
        },
        {
          "text": "Microsoft IIS Server NRPE (déprécié)",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-webservers-iis-nrpe"
        },
        {
          "text": "Microsoft IIS Server NSClient API (déprécié)",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-webservers-iis-nsclient-05-restapi"
        },
        {
          "text": "Microsoft IIS Server Restapi",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-webservers-iis-restapi"
        },
        {
          "text": "Microsoft IIS Server WSMAN",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-iis-wsman"
        },
        {
          "text": "Microsoft SCCM",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-sccm-nsclient"
        },
        {
          "text": "Microsoft SCCM CMA",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-sccm-cma"
        },
        {
          "text": "Microsoft WSUS CMA",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-wsus-cma"
        },
        {
          "text": "Microsoft WSUS Server",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-wsus-nsclient"
        },
        {
          "text": "MS Biztalk",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-biztalk"
        },
        {
          "text": "Mulesoft Anypoint",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-mulesoft-restapi"
        },
        {
          "text": "Netbackup NSClient++ API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-netbackup-nsclient-05-restapi"
        },
        {
          "text": "Netdata RestAPI",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-netdata-restapi"
        },
        {
          "text": "Nginx Plus Restapi",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-nginx-plus-restapi"
        },
        {
          "text": "Nginx Server",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-webservers-nginx-serverstatus"
        },
        {
          "text": "Nmap CLI Discovery",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-nmap-cli"
        },
        {
          "text": "Node Exporter Linux Metrics",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-node-exporter-linux"
        },
        {
          "text": "Node Exporter Windows Metrics",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-node-exporter-windows"
        },
        {
          "text": "NtopNG Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-ntopng-restapi"
        },
        {
          "text": "OpenHeadend",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-video-openheadend-snmp"
        },
        {
          "text": "OpenLDAP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-openldap-ldap"
        },
        {
          "text": "OpenMetrics",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-openmetrics"
        },
        {
          "text": "OpenVPN OMI",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-openvpn-omi"
        },
        {
          "text": "OpenWeatherMap",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-openweathermap-restapi"
        },
        {
          "text": "Oracle GoldenGate SSH",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-oracle-goldengate-ssh"
        },
        {
          "text": "Oracle UCP JMX",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-oracle-ucp-jmx"
        },
        {
          "text": "Oracle VM Manager API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-oracle-ovm-api"
        },
        {
          "text": "Pacemaker",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-pacemaker-ssh"
        },
        {
          "text": "Peoplesoft",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-peoplesoft-jmx"
        },
        {
          "text": "Pfsense Fauxapi",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-pfsense-fauxapi"
        },
        {
          "text": "PHP APC",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-php-apc-web"
        },
        {
          "text": "PHP FPM",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-php-fpm-web"
        },
        {
          "text": "PineApp Mail Secure",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-pineapp-securemail-snmp"
        },
        {
          "text": "Podman Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-podman-restapi"
        },
        {
          "text": "Prometheus Alertmanager API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-prometheus-alertmanager-api"
        },
        {
          "text": "Prometheus Server API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-prometheus-api"
        },
        {
          "text": "Proxmox Mail Gateway",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-proxmox-mg-api"
        },
        {
          "text": "PVX",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-pvx-restapi"
        },
        {
          "text": "Quadstor NSClient++ NRPE",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-quadstor-nrpe"
        },
        {
          "text": "Quanta Rest API (déprécié)",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-quanta-restapi"
        },
        {
          "text": "RabbitMQ RestAPI",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-rabbitmq-restapi"
        },
        {
          "text": "Rapid Recovery SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-rapidrecovery-snmp"
        },
        {
          "text": "Redis Labs Enterprise Cluster Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-redis-rlec-restapi"
        },
        {
          "text": "Redis Restapi (déprécié)",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-redis-restapi"
        },
        {
          "text": "Redis Sentinel",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-redis-sentinel"
        },
        {
          "text": "RRDCached",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-rrdcached"
        },
        {
          "text": "Rubrik Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-rubrik-restapi"
        },
        {
          "text": "Rubrik Security Cloud GraphQL API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-rubrik-graphql"
        },
        {
          "text": "Rudder",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-rudder-restapi"
        },
        {
          "text": "Sahi Pro Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-sahipro-restapi"
        },
        {
          "text": "SailPoint IdentityNow Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-sailpoint-identitynow-restapi"
        },
        {
          "text": "Salesforce",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-salesforce-restapi"
        },
        {
          "text": "SCOM Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-scom-restapi"
        },
        {
          "text": "Selenium",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-selenium"
        },
        {
          "text": "Sendmail",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-sendmail-snmp"
        },
        {
          "text": "Skyhigh Security Web Gateway SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-antivirus-skyhigh-webgateway-snmp"
        },
        {
          "text": "Skype 2015",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-skype-2015-mssql"
        },
        {
          "text": "Slack",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-slack-restapi"
        },
        {
          "text": "Smartermail Server",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-smartermail-api"
        },
        {
          "text": "Solr",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-solr-jmx"
        },
        {
          "text": "Speedtest",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-speedtest"
        },
        {
          "text": "Splunk",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-splunk-api"
        },
        {
          "text": "Squid SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-squid-snmp"
        },
        {
          "text": "Symantec Netbackup CMA",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-netbackup-cma"
        },
        {
          "text": "Symantec Netbackup NSClient++ NRPE",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-netbackup-nrpe"
        },
        {
          "text": "Symantec Netbackup SSH",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-netbackup-ssh"
        },
        {
          "text": "Thales Mistral VS9 Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-thales-mistral-vs9-restapi"
        },
        {
          "text": "Tomcat JMX",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-webservers-tomcat-jmx"
        },
        {
          "text": "Tomcat Webmanager",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-webservers-tomcat-webmanager"
        },
        {
          "text": "Tosca Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-tosca-restapi"
        },
        {
          "text": "TrendMicro Iwsva",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-trendmicro-iwsva-snmp"
        },
        {
          "text": "Varnish NRPE",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-varnish-nrpe"
        },
        {
          "text": "Veeam Backup Enterprise Manager Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-veeam-vbem-restapi"
        },
        {
          "text": "Veeam CMA",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-veeam-centreon-monitoring-agent"
        },
        {
          "text": "Veeam NRPE",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-veeam-nrpe"
        },
        {
          "text": "Veeam NSClient++ API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-veeam-nsclient-05-restapi"
        },
        {
          "text": "Veeam ONE Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-veeam-vone-restapi"
        },
        {
          "text": "Veeam WSMAN",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-veeam-wsman"
        },
        {
          "text": "Veritas Backup Exec NSCP API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-backupexec-nscp-restapi"
        },
        {
          "text": "VerneMQ Restapi",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-vernemq-restapi"
        },
        {
          "text": "VMware VCSA RestAPI",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-vmware-vcsa-restapi"
        },
        {
          "text": "VMware VCSA SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-vmware-vcsa-snmp"
        },
        {
          "text": "Wallix Bastion SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-wallix-bastion-snmp"
        },
        {
          "text": "Wazuh Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-wazuh-restapi"
        },
        {
          "text": "Weblogic Server",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-weblogic-jmx"
        },
        {
          "text": "ZIXI",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-video-zixi-restapi"
        },
        {
          "text": "Zookeeper",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-zookeeper-jmx"
        },
        {
          "text": "Zscaler ZDX API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-zscaler-zdx-api"
        }
      ]
    },
    {
      "text": "Blockchain",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Hyperledger API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/blockchain-hyperledger-exporter"
        },
        {
          "text": "Parity API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/blockchain-parity-restapi"
        },
        {
          "text": "Parity Ethpoller API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/blockchain-parity-ethpoller-restapi"
        }
      ]
    },
    {
      "text": "Centreon",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Centreon Central",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-central"
        },
        {
          "text": "Centreon Database",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-database"
        },
        {
          "text": "Centreon Experience Monitoring (formerly Quanta) Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-experience-monitoring-restapi"
        },
        {
          "text": "Centreon Log Management Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-clm-restapi"
        },
        {
          "text": "Centreon Map (déprécié)",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-map-jmx"
        },
        {
          "text": "Centreon Map Engine",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-map-engine-actuator"
        },
        {
          "text": "Centreon Map4 (déprécié)",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-map4-jmx"
        },
        {
          "text": "Centreon MBI",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-mbi"
        },
        {
          "text": "Centreon Poller",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-poller"
        },
        {
          "text": "Centreon SQL Metrics",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-sql-metrics"
        },
        {
          "text": "Centreon-HA",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-ha"
        },
        {
          "text": "Gorgone Restapi",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-gorgone-restapi"
        }
      ]
    },
    {
      "text": "Cloud",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Amazon API Gateway",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-aws-apigateway"
        },
        {
          "text": "Amazon Backup Vault",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-aws-backup"
        },
        {
          "text": "Amazon CloudFront",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-aws-cloudfront"
        },
        {
          "text": "Amazon CloudWatch",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-aws-cloudwatch"
        },
        {
          "text": "Amazon CloudWatch Logs",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-aws-cloudwatchlogs"
        },
        {
          "text": "Amazon Direct Connect",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-aws-directconnect"
        },
        {
          "text": "Amazon EBS",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-aws-ebs"
        },
        {
          "text": "Amazon EC2",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-aws-ec2"
        },
        {
          "text": "Amazon EFS",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-aws-efs"
        },
        {
          "text": "Amazon ElastiCache",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-aws-elasticache"
        },
        {
          "text": "Amazon FSx",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-aws-fsx"
        },
        {
          "text": "Amazon Kinesis",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-aws-kinesis"
        },
        {
          "text": "Amazon RDS",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-aws-rds"
        },
        {
          "text": "Amazon S3",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-aws-s3"
        },
        {
          "text": "Amazon SES",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-aws-ses"
        },
        {
          "text": "Amazon SNS",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-aws-sns"
        },
        {
          "text": "Amazon SQS",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-aws-sqs"
        },
        {
          "text": "AWS Billing",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-aws-billing"
        },
        {
          "text": "AWS CloudTrail",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-aws-cloudtrail"
        },
        {
          "text": "AWS Discover",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-aws-cloudwatch-discover"
        },
        {
          "text": "AWS ELB",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-aws-elb"
        },
        {
          "text": "AWS Health",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-aws-health"
        },
        {
          "text": "AWS Lambda",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-aws-lambda"
        },
        {
          "text": "AWS Transit Gateway",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-aws-transitgateway"
        },
        {
          "text": "AWS VPN",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-aws-vpn"
        },
        {
          "text": "Azure API Management",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-management-apimanagement"
        },
        {
          "text": "Azure App Configuration",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-devtools-appconfiguration"
        },
        {
          "text": "Azure App Service",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-web-appservice"
        },
        {
          "text": "Azure App Service Plan",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-web-appserviceplan"
        },
        {
          "text": "Azure Application Gateway",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-network-appgateway"
        },
        {
          "text": "Azure Application Insights",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-management-applicationinsights"
        },
        {
          "text": "Azure Automation",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-management-automation"
        },
        {
          "text": "Azure Cache for Redis",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-database-redis"
        },
        {
          "text": "Azure CDN",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-network-cdn"
        },
        {
          "text": "Azure Classic Storage",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-classicstorage-storageaccount"
        },
        {
          "text": "Azure Container Registry",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-storage-acr"
        },
        {
          "text": "Azure Cosmos DB",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-database-cosmosdb"
        },
        {
          "text": "Azure Data Factory",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-datafactory-factories"
        },
        {
          "text": "Azure Database for MariaDB",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-database-mariadb"
        },
        {
          "text": "Azure Database for MySQL",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-database-mysql"
        },
        {
          "text": "Azure Database for PostgreSQL",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-database-postgresql"
        },
        {
          "text": "Azure Discover",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-management-discover"
        },
        {
          "text": "Azure Elastic Pool",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-database-elasticpool"
        },
        {
          "text": "Azure Event Grid",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-integration-eventgrid"
        },
        {
          "text": "Azure Event Hubs",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-analytics-eventhubs"
        },
        {
          "text": "Azure ExpressRoute",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-network-expressroute"
        },
        {
          "text": "Azure Firewall",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-network-firewall"
        },
        {
          "text": "Azure Front Door",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-network-frontdoor"
        },
        {
          "text": "Azure Functions",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-compute-functions"
        },
        {
          "text": "Azure InsightsMetrics",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-management-insightsmetrics"
        },
        {
          "text": "Azure Key Vault",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-security-keyvault"
        },
        {
          "text": "Azure Kubernetes Service",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-compute-aks"
        },
        {
          "text": "Azure Load Balancer",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-network-loadbalancer"
        },
        {
          "text": "Azure Log Analytics",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-management-loganalytics"
        },
        {
          "text": "Azure Management Costs",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-management-costs"
        },
        {
          "text": "Azure Monitor",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-management-monitor"
        },
        {
          "text": "Azure Network Interface",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-network-networkinterface"
        },
        {
          "text": "Azure Policy States",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-policyinsights-policystates"
        },
        {
          "text": "Azure Public IP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-network-publicip"
        },
        {
          "text": "Azure Recovery",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-management-recovery"
        },
        {
          "text": "Azure Resource",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-management-resource"
        },
        {
          "text": "Azure ServiceBus",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-integration-servicebus"
        },
        {
          "text": "Azure SignalR",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-web-signalr"
        },
        {
          "text": "Azure SQL Database",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-database-sqldatabase"
        },
        {
          "text": "Azure SQL Managed Instance",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-database-sqlmanagedinstance"
        },
        {
          "text": "Azure SQL Server",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-database-sqlserver"
        },
        {
          "text": "Azure Storage Account",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-storage-storageaccount"
        },
        {
          "text": "Azure Storage Sync",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-storage-storagesync"
        },
        {
          "text": "Azure Traffic Manager",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-network-trafficmanager"
        },
        {
          "text": "Azure Virtual Machine",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-compute-virtualmachine"
        },
        {
          "text": "Azure Virtual Machine Scale Sets",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-compute-vmscalesets"
        },
        {
          "text": "Azure Virtual Network",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-network-virtualnetwork"
        },
        {
          "text": "Azure VPN Gateway",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-azure-network-vpngateway"
        },
        {
          "text": "cAdvisor API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-cadvisor-api"
        },
        {
          "text": "cAdvisor w/ Prometheus API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-prometheus-cadvisor-api"
        },
        {
          "text": "Cloud Foundry API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-cloudfoundry-api"
        },
        {
          "text": "Docker SSH",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-docker-ssh"
        },
        {
          "text": "Google CloudSQL MySQL",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-gcp-cloudsql-mysql"
        },
        {
          "text": "Google Compute Engine",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-gcp-compute-computeengine"
        },
        {
          "text": "Google Stackdriver",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-gcp-management-stackdriver"
        },
        {
          "text": "Google Storage",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-gcp-storage"
        },
        {
          "text": "IBM Softlayer API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-ibm-softlayer-api"
        },
        {
          "text": "IICS Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-iics-restapi"
        },
        {
          "text": "Kubernetes API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-kubernetes-api"
        },
        {
          "text": "Kubernetes w/ Prometheus API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-prometheus-kubernetes-api"
        },
        {
          "text": "Node Exporter w/ Prometheus API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-prometheus-node-exporter-api"
        },
        {
          "text": "Office 365 Azure AD",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-microsoft-office365-azuread"
        },
        {
          "text": "Office 365 Management",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-microsoft-office365-management"
        },
        {
          "text": "Office 365 OneDrive",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-microsoft-office365-onedrive"
        },
        {
          "text": "Office365 Exchange",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-microsoft-office365-exchange"
        },
        {
          "text": "Office365 SharePoint",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-microsoft-office365-sharepoint"
        },
        {
          "text": "Office365 Skype",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-microsoft-office365-skype"
        },
        {
          "text": "Office365 Teams",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-microsoft-office365-teams"
        },
        {
          "text": "OpenShift API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-openshift-api"
        },
        {
          "text": "OpenStack RESTAPI",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-openstack-restapi"
        },
        {
          "text": "Outscale API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-outscale"
        },
        {
          "text": "OVH Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-ovh-restapi"
        },
        {
          "text": "Talend TMC API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-talend-tmc-api"
        },
        {
          "text": "VMware VeloCloud Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/cloud-vmware-velocloud-restapi"
        }
      ]
    },
    {
      "text": "Database",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "CouchDB Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-databases-couchdb-restapi"
        },
        {
          "text": "DB2 Database",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-databases-db2"
        },
        {
          "text": "Elasticsearch",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-databases-elasticsearch"
        },
        {
          "text": "Elasticsearch (déprécié)",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-elasticsearch"
        },
        {
          "text": "Firebird",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-databases-firebird"
        },
        {
          "text": "InfluxDB",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-databases-influxdb"
        },
        {
          "text": "Informix DB",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-databases-informix"
        },
        {
          "text": "Informix DB SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-databases-informix-snmp"
        },
        {
          "text": "Microsoft SQL Server",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-databases-mssql"
        },
        {
          "text": "MongoDB",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-databases-mongodb"
        },
        {
          "text": "MySQL/MariaDB",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-databases-mysql"
        },
        {
          "text": "Oracle Database",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-databases-oracle"
        },
        {
          "text": "PostgreSQL DB",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-databases-postgresql"
        },
        {
          "text": "Redis Cli (déprécié)",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-redis-cli"
        },
        {
          "text": "Redis Database",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-databases-redis"
        },
        {
          "text": "RRDtool",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-databases-rrdtool"
        },
        {
          "text": "SAP HANA",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-databases-sap-hana"
        },
        {
          "text": "Sybase",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-databases-sybase"
        },
        {
          "text": "Warp10 Sensision",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-databases-warp10-sensision"
        }
      ]
    },
    {
      "text": "Hardware-server",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Adder AIM SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-kvm-adder-aim-snmp"
        },
        {
          "text": "AEG ACM SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-devices-aeg-acm-snmp"
        },
        {
          "text": "Appear TV SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-devices-video-appeartv-snmp"
        },
        {
          "text": "Avigilon camera SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-devices-camera-avigilon-snmp"
        },
        {
          "text": "Avocent ACS 6000 SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-kvm-avocent-acs-6000-snmp"
        },
        {
          "text": "Avocent ACS 8000 SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-kvm-avocent-acs-8000-snmp"
        },
        {
          "text": "Axis Video SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-devices-video-axis-snmp"
        },
        {
          "text": "Barco ClickShare Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-devices-barco-cs-restapi"
        },
        {
          "text": "Cisco Collaboration Endpoint Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-devices-cisco-ces-restapi"
        },
        {
          "text": "Cisco Telepresence System SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-devices-cisco-cts-snmp"
        },
        {
          "text": "Cisco UCS SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-servers-cisco-ucs-snmp"
        },
        {
          "text": "Dell CMC SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-servers-dell-cmc-snmp"
        },
        {
          "text": "Dell iDRAC SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-servers-dell-idrac-snmp"
        },
        {
          "text": "Dell OME-Modular SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-servers-dell-omem-snmp"
        },
        {
          "text": "Dell OpenManage SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-servers-dell-openmanage-snmp"
        },
        {
          "text": "Dell VxRail Manager Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-servers-dell-vxm-restapi"
        },
        {
          "text": "Eltek eNexus SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-devices-eltek-enexus-snmp"
        },
        {
          "text": "Fujitsu Server SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-servers-fujitsu-snmp"
        },
        {
          "text": "Hanwha camera SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-devices-camera-hanwha-snmp"
        },
        {
          "text": "Hikvision camera SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-devices-camera-hikvision-snmp"
        },
        {
          "text": "Hikvision NVR SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-devices-hikvision-nvr-snmp"
        },
        {
          "text": "HMS Ewon SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-devices-hms-ewon-snmp"
        },
        {
          "text": "HMS Netbiter Argos RestAPI",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-devices-hms-netbiter-argos-restapi"
        },
        {
          "text": "HP Blade Chassis SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-servers-hp-blade-chassis-snmp"
        },
        {
          "text": "HP iLO Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-servers-hp-ilo-restapi"
        },
        {
          "text": "HP Ilo XMLAPI",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-servers-hp-ilo-xmlapi"
        },
        {
          "text": "HP OneView Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-servers-hp-oneview-restapi"
        },
        {
          "text": "HP Proliant SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-servers-hp-snmp"
        },
        {
          "text": "Huawei HMM SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-servers-huawei-hmm-snmp"
        },
        {
          "text": "Huawei iBMC SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-servers-huawei-ibmc-snmp"
        },
        {
          "text": "IBM BladeCenter SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-servers-ibm-bladecenter-snmp"
        },
        {
          "text": "IBM HMC SSH",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-servers-ibm-hmc-ssh"
        },
        {
          "text": "IBM IMM SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-servers-ibm-imm-snmp"
        },
        {
          "text": "Lenovo XCC SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-servers-lenovo-xcc-snmp"
        },
        {
          "text": "Masterclock NTP100GP SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-devices-masterclock-ntp100gps-snmp"
        },
        {
          "text": "Mobotix Camera SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-devices-camera-mobotix-snmp"
        },
        {
          "text": "NVIDIA GPU SMI SSH",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-devices-nvidia-gpu-smi-ssh"
        },
        {
          "text": "Optelecom camera SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-devices-camera-optelecom-snmp"
        },
        {
          "text": "Pexip Infinity ManagementAPI",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-devices-pexip-infinity-managementapi"
        },
        {
          "text": "Polycom GroupSeries SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-devices-polycom-groupseries-snmp"
        },
        {
          "text": "Polycom Trio Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-devices-polycom-trio-restapi"
        },
        {
          "text": "Safenet Keysecure SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-device-safenet-keysecure-snmp"
        },
        {
          "text": "Sun MgmtCard",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-servers-sun-mgmtcards"
        },
        {
          "text": "Sun Mseries SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-servers-sun-mseries-snmp"
        },
        {
          "text": "Sun SFxxK PSSH",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-servers-sun-sfxxk-pssh"
        },
        {
          "text": "Supermicro (déprécié)",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-servers-supermicro-snmp"
        },
        {
          "text": "Supermicro BMC SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-servers-supermicro-bmc-snmp"
        },
        {
          "text": "Supermicro SuperDoctor SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-servers-supermicro-superdoctor-snmp"
        },
        {
          "text": "Timelinkmicro Tms6001 SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-devices-timelinkmicro-tms6001-snmp"
        },
        {
          "text": "xFusion iBMC SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-servers-xfusion-ibmc-snmp"
        }
      ]
    },
    {
      "text": "Network",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "3com Network SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-3com-snmp"
        },
        {
          "text": "A10 AX SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-loadbalancers-a10-ax-snmp"
        },
        {
          "text": "Acme Packet SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-acmepacket-snmp"
        },
        {
          "text": "Adva FSP 150 SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-adva-fsp150-snmp"
        },
        {
          "text": "Adva FSP 3000 SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-adva-fsp3000-snmp"
        },
        {
          "text": "Aerohive SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-aerohive-snmp"
        },
        {
          "text": "Alcatel Omniswitch SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-switchs-alcatel-omniswitch-snmp"
        },
        {
          "text": "Allied Telesis SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-allied-snmp"
        },
        {
          "text": "Alvarion BreezeACCESS SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-alvarion-breezeaccess-snmp"
        },
        {
          "text": "Arista Switch SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-switchs-arista-snmp"
        },
        {
          "text": "Arkoon SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-firewalls-arkoon-snmp"
        },
        {
          "text": "Aruba CPPM SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-aruba-cppm-snmp"
        },
        {
          "text": "Aruba Instant SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-aruba-instant-snmp"
        },
        {
          "text": "Aruba Orchestrator Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-aruba-orchestrator-restapi"
        },
        {
          "text": "Aruba Standard SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-switchs-aruba-standard-snmp"
        },
        {
          "text": "ArubaOS-CX SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-aruba-aoscx-snmp"
        },
        {
          "text": "Athonet ePC SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-athonet-epc-snmp"
        },
        {
          "text": "Atrica Routeur SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-routers-atrica-snmp"
        },
        {
          "text": "Atto Fibrebridge SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-atto-fibrebridge-snmp"
        },
        {
          "text": "Aviat Networks SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-aviat-snmp"
        },
        {
          "text": "Backbox Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-backbox-restapi"
        },
        {
          "text": "Barracuda Cloudgen SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-barracuda-cloudgen-snmp"
        },
        {
          "text": "Barracuda Message Archiver SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-barracuda-bma-snmp"
        },
        {
          "text": "Bee Ware SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-beeware-snmp"
        },
        {
          "text": "BGP Protocol SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-protocol-bgp-snmp"
        },
        {
          "text": "Bluecoat generic SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-generic-bluecoat-snmp"
        },
        {
          "text": "Brocade Switch SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-switchs-brocade-snmp"
        },
        {
          "text": "Cambium CnPilot SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-cambium-cnpilot-snmp"
        },
        {
          "text": "Cambium ePMP SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-cambium-epmp-snmp"
        },
        {
          "text": "Cato Networks API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-security-cato-networks-api"
        },
        {
          "text": "ChapsVision CrossinG SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-chapsvision-crossing-snmp"
        },
        {
          "text": "CheckPoint firewall",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-firewalls-checkpoint-snmp"
        },
        {
          "text": "Cisco Apic Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-cisco-apic-restapi"
        },
        {
          "text": "Cisco ASA SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-firewalls-cisco-asa-snmp"
        },
        {
          "text": "Cisco Call Manager SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-cisco-callmanager-snmp"
        },
        {
          "text": "Cisco Callmanager SXML",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-cisco-callmanager-sxml"
        },
        {
          "text": "Cisco ESA Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-cisco-esa-restapi"
        },
        {
          "text": "Cisco ESA XMLAPI",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-cisco-esa-xmlapi"
        },
        {
          "text": "Cisco Firepower Management Console Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-cisco-firepower-fmc-restapi"
        },
        {
          "text": "Cisco Firepower SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-cisco-firepower-snmp"
        },
        {
          "text": "Cisco IronPort SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-cisco-ironport-snmp"
        },
        {
          "text": "Cisco Meraki Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-cisco-meraki-restapi"
        },
        {
          "text": "Cisco Meraki SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-cisco-meraki-snmp"
        },
        {
          "text": "Cisco Prime RestAPI",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-cisco-prime-restapi"
        },
        {
          "text": "Cisco Small Business SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-switchs-cisco-smallbusiness-standard-snmp"
        },
        {
          "text": "Cisco Standard SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-cisco-standard-snmp"
        },
        {
          "text": "Cisco Standard SSH",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-cisco-standard-ssh"
        },
        {
          "text": "Cisco Umbrella SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-cisco-umbrella-snmp"
        },
        {
          "text": "Cisco VCS Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-cisco-vcs-restapi"
        },
        {
          "text": "Cisco Voice Gateway SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-cisco-voice-gateway-snmp"
        },
        {
          "text": "Cisco WaaS SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-cisco-waas-snmp"
        },
        {
          "text": "Cisco WAP SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-cisco-wap-snmp"
        },
        {
          "text": "Cisco WLC SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-cisco-wlc-snmp"
        },
        {
          "text": "Citrix Acceleration SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-citrix-appacceleration-snmp"
        },
        {
          "text": "Citrix Netscaler SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-loadbalancers-netscaler-snmp"
        },
        {
          "text": "Citrix SDX",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-citrix-sdx-snmp"
        },
        {
          "text": "Colubris SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-colubris-snmp"
        },
        {
          "text": "Cyberoam SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-cyberoam-snmp"
        },
        {
          "text": "D-Link DGS 3100 SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-dlink-dgs3100-snmp"
        },
        {
          "text": "D-Link standard SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-dlink-standard-snmp"
        },
        {
          "text": "Dell 6200 (déprécié)",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-dell-6200"
        },
        {
          "text": "Dell 6200 SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-dell-6200-snmp"
        },
        {
          "text": "Dell N-series SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-dell-nseries-snmp"
        },
        {
          "text": "Dell N4000 (déprécié)",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-dell-n4000"
        },
        {
          "text": "Dell OS10 SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-dell-os10-snmp"
        },
        {
          "text": "Dell S-series SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-dell-sseries-snmp"
        },
        {
          "text": "Dell Xseries SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-switchs-dell-xseries-snmp"
        },
        {
          "text": "DenyAll SNMP (Rohde & Schwarz)",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-denyall-snmp"
        },
        {
          "text": "Digi Anywhere USB SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-digi-anywhereusb-snmp"
        },
        {
          "text": "Digi PortServers TS (déprécié)",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-digi-portservers-snmp"
        },
        {
          "text": "Digi PortServers TS SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-digi-portserverts-snmp"
        },
        {
          "text": "Digi Sarian SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-digi-sarian-snmp"
        },
        {
          "text": "Efficient IP SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-efficientip-snmp"
        },
        {
          "text": "Enterasys SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-enterasys-snmp"
        },
        {
          "text": "Evertz FC7800 SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-evertz-fc7800-snmp"
        },
        {
          "text": "Extreme (formerly Nortel/Avaya) SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-nortel-standard-snmp"
        },
        {
          "text": "Extreme Networks SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-extreme-snmp"
        },
        {
          "text": "F5 BigIP SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-loadbalancers-f5-bigip-snmp"
        },
        {
          "text": "Fiberstore SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-fiberstore-snmp"
        },
        {
          "text": "Forcepoint Sdwan SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-firewalls-forcepoint-sdwan-snmp"
        },
        {
          "text": "Fortinet FortiADC SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-fortinet-fortiadc-snmp"
        },
        {
          "text": "Fortinet FortiAuthenticator RestAPI",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-fortinet-fortiauthenticator-restapi"
        },
        {
          "text": "Fortinet FortiAuthenticator SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-fortinet-fortiauthenticator-snmp"
        },
        {
          "text": "Fortinet Fortigate Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-fortinet-fortigate-restapi"
        },
        {
          "text": "Fortinet Fortigate SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-firewalls-fortinet-fortigate-snmp"
        },
        {
          "text": "Fortinet FortiMail SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-fortinet-fortimail-snmp"
        },
        {
          "text": "Fortinet Fortimanager SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-fortinet-fortimanager-snmp"
        },
        {
          "text": "Fortinet FortiSwitch SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-fortinet-fortiswitch-snmp"
        },
        {
          "text": "Fortinet FortiWeb SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-fortinet-fortiweb-snmp"
        },
        {
          "text": "Freebox RestAPI",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-freebox-restapi"
        },
        {
          "text": "Fritz!Box UPnP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-fritzbox-upnp"
        },
        {
          "text": "Gorgy NTP Server SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-device-gorgy-ntpserver-snmp"
        },
        {
          "text": "H3C Network SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-h3c-snmp"
        },
        {
          "text": "Hirschmann switch SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-switchs-hirschmann-snmp"
        },
        {
          "text": "HP Moonshot SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-hp-moonshot-snmp"
        },
        {
          "text": "HP Procurve SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-switchs-hp-procurve-snmp"
        },
        {
          "text": "HP Standard Network SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-hp-standard-snmp"
        },
        {
          "text": "HP Virtual Connect SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-hp-vc-snmp"
        },
        {
          "text": "HPE Athonet Alertmanager w/ Prometheus",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-hpe-athonet-alertmanager-api"
        },
        {
          "text": "HPE Athonet w/ Prometheus API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-hpe-athonet-node-exporter-api"
        },
        {
          "text": "Huawei Standard SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-huawei-snmp"
        },
        {
          "text": "Huawei WLC SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-huawei-wlc-snmp"
        },
        {
          "text": "IBM Bladecenter Switch SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-ibm-bladecenter-snmp"
        },
        {
          "text": "Infoblox SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-infoblox-snmp"
        },
        {
          "text": "Juniper EX Series SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-switchs-juniper-ex-snmp"
        },
        {
          "text": "Juniper GGSN SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-juniper-ggsn-snmp"
        },
        {
          "text": "Juniper ISG SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-juniper-isg-snmp"
        },
        {
          "text": "Juniper M-Series Netconf",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-routers-juniper-mseries-netconf"
        },
        {
          "text": "Juniper M-Series SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-routers-juniper-mseries-snmp"
        },
        {
          "text": "Juniper Mag SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-firewalls-juniper-mag-snmp"
        },
        {
          "text": "Juniper SA SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-firewalls-juniper-sa-snmp"
        },
        {
          "text": "Juniper SRX SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-firewalls-juniper-srx-snmp"
        },
        {
          "text": "Juniper SSG SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-firewalls-juniper-ssg-snmp"
        },
        {
          "text": "Juniper Trapeze SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-juniper-trapeze-snmp"
        },
        {
          "text": "Kairos SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-kairos-snmp"
        },
        {
          "text": "Kemp Loadbalancer SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-loadbalancers-kemp-snmp"
        },
        {
          "text": "Keysight NVOS Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-keysight-nvos-restapi"
        },
        {
          "text": "Lenovo Flexsystem Switch SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-lenovo-flexsystem-snmp"
        },
        {
          "text": "Lenovo RackSwitch SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-lenovo-rackswitch-snmp"
        },
        {
          "text": "Libraesva SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-libraesva-snmp"
        },
        {
          "text": "Meru SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-meru-snmp"
        },
        {
          "text": "MessPC Ehternetbox SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-sensors-messpc-ethernetbox-snmp"
        },
        {
          "text": "Microsens G6 SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-microsens-g6-snmp"
        },
        {
          "text": "Mikrotik SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-mikrotik-snmp"
        },
        {
          "text": "Mitel 3300ICP SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-mitel-3300icp-snmp"
        },
        {
          "text": "Moxa Switch SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-moxa-switch-snmp"
        },
        {
          "text": "Mrv Optiswitch SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-switchs-mrv-optiswitch-snmp"
        },
        {
          "text": "NetASQ Network (déprécié)",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-netasq-snmp"
        },
        {
          "text": "Netgear MSeries SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-netgear-mseries-snmp"
        },
        {
          "text": "Netgear SSeries SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-netgear-sseries-snmp"
        },
        {
          "text": "Netscaler MPX 8000 (déprécié)",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-loadbalancers-netscaler-mpx8000-snmp"
        },
        {
          "text": "Nokia Isam SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-nokia-isam-snmp"
        },
        {
          "text": "Nokia TiMos SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-nokia-timos-snmp"
        },
        {
          "text": "Nvidia (formerly Mellanox) SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-nvidia-mellanox-snmp"
        },
        {
          "text": "OneAccess SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-oneaccess-snmp"
        },
        {
          "text": "Opengear SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-opengear-snmp"
        },
        {
          "text": "Oracle Infiniband SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-oracle-infiniband-snmp"
        },
        {
          "text": "Oracle Traffic Director SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-oracle-otd-snmp"
        },
        {
          "text": "Palo Alto firewall API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-firewalls-paloalto-standard-api"
        },
        {
          "text": "Palo Alto firewall SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-firewalls-paloalto-standard-snmp"
        },
        {
          "text": "Palo Alto firewall SSH",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-firewalls-paloalto-standard-ssh"
        },
        {
          "text": "Patton SmartNode SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-patton-smartnode-snmp"
        },
        {
          "text": "Peplink Balance SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-routers-peplink-balance-snmp"
        },
        {
          "text": "Peplink Pepwave SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-peplink-pepwave-snmp"
        },
        {
          "text": "Perle IDS SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-perle-ids-snmp"
        },
        {
          "text": "pfSense SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-firewalls-pfsense-snmp"
        },
        {
          "text": "Rad Airmux SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-rad-airmux-snmp"
        },
        {
          "text": "Radware Alteon SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-radware-alteon-snmp"
        },
        {
          "text": "Raisecom SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-raisecom-snmp"
        },
        {
          "text": "RedBack Router SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-routers-redback-snmp"
        },
        {
          "text": "Riverbed Interceptor SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-riverbed-interceptor-snmp"
        },
        {
          "text": "Riverbed SteelHead SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-riverbed-steelhead-snmp"
        },
        {
          "text": "Ruckus ICX SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-ruckus-icx-snmp"
        },
        {
          "text": "Ruckus SCG SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-ruckus-scg-snmp"
        },
        {
          "text": "Ruckus Smartzone SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-ruckus-smartzone-snmp"
        },
        {
          "text": "Ruckus SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-ruckus-snmp"
        },
        {
          "text": "Ruckus Zonedirector SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-ruckus-zonedirector-snmp"
        },
        {
          "text": "Ruggedcom Network SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-ruggedcom"
        },
        {
          "text": "Securactive SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-securactive-snmp"
        },
        {
          "text": "Silverpeak SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-silverpeak-snmp"
        },
        {
          "text": "Sonicwall SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-firewalls-sonicwall-snmp"
        },
        {
          "text": "Sophos ES SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-sophos-es-snmp"
        },
        {
          "text": "Stonesoft SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-firewalls-stonesoft"
        },
        {
          "text": "Stormshield API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-stormshield-api"
        },
        {
          "text": "Stormshield SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-stormshield-snmp"
        },
        {
          "text": "Stormshield SSH",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-stormshield-ssh"
        },
        {
          "text": "Symbol WiNG SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-symbol-wing-snmp"
        },
        {
          "text": "Teldat SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-teldat-snmp"
        },
        {
          "text": "Teltonika SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-teltonika-snmp"
        },
        {
          "text": "TP-Link SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-tplink-snmp"
        },
        {
          "text": "Ubiquiti AirFiber SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-ubiquiti-airfiber-snmp"
        },
        {
          "text": "Ubiquiti Edge SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-ubiquiti-edge-snmp"
        },
        {
          "text": "Ubiquiti UniFi SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-ubiquiti-unifi-snmp"
        },
        {
          "text": "Ucopia SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-ucopia-snmp"
        },
        {
          "text": "Vectra Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-vectra-restapi"
        },
        {
          "text": "Versa Director Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-versa-director-restapi"
        },
        {
          "text": "Versa SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-versa-snmp"
        },
        {
          "text": "Viptela SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-viptela-snmp"
        },
        {
          "text": "Watchguard SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-watchguard-snmp"
        },
        {
          "text": "Westermo Standard SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-westermo-standard-snmp"
        },
        {
          "text": "Zyxel SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-zyxel-snmp"
        }
      ]
    },
    {
      "text": "Operating-system",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "AIX SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/operatingsystems-aix-snmp"
        },
        {
          "text": "AIX SSH",
          "link": "/fr/pp/integrations/plugin-packs/procedures/operatingsystems-aix-ssh"
        },
        {
          "text": "Base Pack",
          "link": "/fr/pp/integrations/plugin-packs/procedures/base-generic"
        },
        {
          "text": "F5OS SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/operatingsystems-f5os-snmp"
        },
        {
          "text": "FreeBSD SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/operatingsystems-freebsd-snmp"
        },
        {
          "text": "HP-UX SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/operatingsystems-hpux-snmp"
        },
        {
          "text": "IBM AS400 (déprécié)",
          "link": "/fr/pp/integrations/plugin-packs/procedures/operatingsystems-as400"
        },
        {
          "text": "IBM AS400 Connector",
          "link": "/fr/pp/integrations/plugin-packs/procedures/operatingsystems-as400-connector"
        },
        {
          "text": "Linux CMA",
          "link": "/fr/pp/integrations/plugin-packs/procedures/operatingsystems-linux-centreon-monitoring-agent"
        },
        {
          "text": "Linux NRPE (déprécié)",
          "link": "/fr/pp/integrations/plugin-packs/procedures/operatingsystems-linux-nrpe"
        },
        {
          "text": "Linux NRPE3 (déprécié)",
          "link": "/fr/pp/integrations/plugin-packs/procedures/operatingsystems-linux-nrpe3"
        },
        {
          "text": "Linux NRPE4",
          "link": "/fr/pp/integrations/plugin-packs/procedures/operatingsystems-linux-nrpe4"
        },
        {
          "text": "Linux SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/operatingsystems-linux-snmp"
        },
        {
          "text": "Linux SNMP v3",
          "link": "/fr/pp/integrations/plugin-packs/procedures/operatingsystems-linux-snmpv3"
        },
        {
          "text": "Linux SSH",
          "link": "/fr/pp/integrations/plugin-packs/procedures/operatingsystems-linux-ssh"
        },
        {
          "text": "Linux Telegraf Agent",
          "link": "/fr/pp/integrations/plugin-packs/procedures/operatingsystems-linux-telegraf-agent"
        },
        {
          "text": "Mac SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/operatingsystems-mac-snmp"
        },
        {
          "text": "PICOS SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/operatingsystems-picos-snmp"
        },
        {
          "text": "Solaris SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/operatingsystems-solaris-snmp"
        },
        {
          "text": "Windows CMA",
          "link": "/fr/pp/integrations/plugin-packs/procedures/operatingsystems-windows-centreon-monitoring-agent"
        },
        {
          "text": "Windows NRPE (déprécié)",
          "link": "/fr/pp/integrations/plugin-packs/procedures/operatingsystems-windows-nrpe"
        },
        {
          "text": "Windows NSClient 0.5 NRPE",
          "link": "/fr/pp/integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-nrpe"
        },
        {
          "text": "Windows NSClient API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-restapi"
        },
        {
          "text": "Windows SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/operatingsystems-windows-snmp"
        },
        {
          "text": "Windows Telegraf Agent",
          "link": "/fr/pp/integrations/plugin-packs/procedures/operatingsystems-windows-telegraf-agent"
        },
        {
          "text": "Windows WSMAN",
          "link": "/fr/pp/integrations/plugin-packs/procedures/operatingsystems-windows-wsman"
        }
      ]
    },
    {
      "text": "Printer",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Printer standard SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-printers-standard-rfc3805-snmp"
        }
      ]
    },
    {
      "text": "Protocol",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "BGP Protocol (déprécié)",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-protocol-bgp"
        },
        {
          "text": "DHCP Server",
          "link": "/fr/pp/integrations/plugin-packs/procedures/infrastructure-dhcp"
        },
        {
          "text": "DNS Service",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-protocol-dns"
        },
        {
          "text": "FTP Server",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-protocol-ftp"
        },
        {
          "text": "Generic SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-protocol-snmp"
        },
        {
          "text": "HTTP Server",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-protocol-http"
        },
        {
          "text": "IMAP Server",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-protocol-imap"
        },
        {
          "text": "JMX value",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-protocol-jmx"
        },
        {
          "text": "LDAP Server",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-protocol-ldap"
        },
        {
          "text": "Modbus",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-protocol-modbus"
        },
        {
          "text": "NTP Server",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-protocol-ntp"
        },
        {
          "text": "OSPF Protocol",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-protocol-ospf"
        },
        {
          "text": "POP Server",
          "link": "/fr/pp/integrations/plugin-packs/procedures/infrastructure-pop"
        },
        {
          "text": "Protocol CIFS",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-protocol-cifs"
        },
        {
          "text": "Protocol DHCP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-protocol-dhcp"
        },
        {
          "text": "Protocol SFTP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-protocol-sftp"
        },
        {
          "text": "Protocol SSH",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-protocol-ssh"
        },
        {
          "text": "Protocol UDP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-protocol-udp"
        },
        {
          "text": "Protocol WHOIS",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-protocol-whois"
        },
        {
          "text": "Radius Service",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-protocol-radius"
        },
        {
          "text": "SMTP Server",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-protocol-smtp"
        },
        {
          "text": "TCP Protocol",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-protocol-tcp"
        },
        {
          "text": "Telnet Scenario",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-protocol-telnet"
        },
        {
          "text": "TFTP Server",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-protocol-tftp"
        },
        {
          "text": "X509 Certificate",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-protocol-x509"
        }
      ]
    },
    {
      "text": "Sensor",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "ABB CMS-700 SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-devices-abb-cms700-snmp"
        },
        {
          "text": "AKCP Sensor SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-sensors-akcp-snmp"
        },
        {
          "text": "APC Sensor SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-sensors-apc-snmp"
        },
        {
          "text": "Comet P8000 Sensor SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-sensors-comet-p8000-snmp"
        },
        {
          "text": "Geist Sensor SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-sensors-geist-snmp"
        },
        {
          "text": "HWg-STE Sensor SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-sensors-hwgste-snmp"
        },
        {
          "text": "Jacarta Sensor SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-sensors-jacarta-snmp"
        },
        {
          "text": "LM Sensors SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-lmsensors-snmp"
        },
        {
          "text": "Netbotz Sensor SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-sensors-netbotz-snmp"
        },
        {
          "text": "Rittal CMC3 SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-sensors-rittal-cmc3-snmp"
        },
        {
          "text": "Sensor IP SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-sensors-sensorip-snmp"
        },
        {
          "text": "SensorGateway SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-sensors-serverscheck-sensorgateway-snmp"
        },
        {
          "text": "Sensormetrix",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-sensors-sensormetrix-em01-web"
        }
      ]
    },
    {
      "text": "Storage",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Adic Tape SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-adic-tape-snmp"
        },
        {
          "text": "Avid Isis SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-avid-isis-snmp"
        },
        {
          "text": "BDT MultiStak SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-bdt-multistak-snmp"
        },
        {
          "text": "Buffalo TeraStation SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-buffalo-terastation-snmp"
        },
        {
          "text": "Datacore RestApi",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-datacore-api"
        },
        {
          "text": "Dell Compellent Nsclient NRPE",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-dell-compellent-api"
        },
        {
          "text": "Dell Compellent SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-dell-compellent-snmp"
        },
        {
          "text": "Dell Equallogic SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-dell-equallogic-snmp"
        },
        {
          "text": "Dell FluidFS SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-dell-fluidfs-snmp"
        },
        {
          "text": "Dell MD3000 SMcli",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-dell-md3000-smcli"
        },
        {
          "text": "Dell ME4 Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-dell-me4-restapi"
        },
        {
          "text": "Dell ML6000 SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-dell-ml6000-snmp"
        },
        {
          "text": "Dell PowerStore Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-dell-powerstore-restapi"
        },
        {
          "text": "Dell TL2000 SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-dell-tl2000-snmp"
        },
        {
          "text": "EMC Celerra SSH",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-emc-celerra-ssh"
        },
        {
          "text": "EMC Clariion Navisphere",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-emc-clariion-navisphere"
        },
        {
          "text": "EMC Data Domain SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-emc-datadomain-snmp"
        },
        {
          "text": "EMC Isilon SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-emc-isilon-snmp"
        },
        {
          "text": "EMC RecoveryPoint SSH",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-backup-emc-recoverypoint-ssh"
        },
        {
          "text": "EMC Symmetrix NRPE",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-emc-symmetrix-nrpe"
        },
        {
          "text": "EMC Symmetrix NSClient++ API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-emc-symmetrix-nsclient-05-restapi"
        },
        {
          "text": "EMC Unisphere Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-emc-unisphere-restapi"
        },
        {
          "text": "EMC Vplex Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-emc-vplex-restapi"
        },
        {
          "text": "EMC Xtremio Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-emc-xtremio-restapi"
        },
        {
          "text": "Exagrid SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-exagrid-snmp"
        },
        {
          "text": "Fujitsu Eternus DX SSH",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-fujitsu-eternus-dx-ssh"
        },
        {
          "text": "Hitachi E Series CMA",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-hitachi-eseries-cma"
        },
        {
          "text": "Hitachi HCP SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-hitachi-hcp-snmp"
        },
        {
          "text": "Hitachi NAS SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-hitachi-hnas-snmp"
        },
        {
          "text": "Hitachi Standard SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-hitachi-standard-snmp"
        },
        {
          "text": "HP 3PAR 7000 (déprécié)",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-hp-3par-7000-ssh"
        },
        {
          "text": "HP 3PAR SSH",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-hp-3par-ssh"
        },
        {
          "text": "HP EVA Cli",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-hp-eva-cli"
        },
        {
          "text": "HP Lefthand SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-hp-lefthand-snmp"
        },
        {
          "text": "HP MSA2000 SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-hp-msa2000-snmp"
        },
        {
          "text": "HP MSL SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-hp-msl-snmp"
        },
        {
          "text": "HP P2000 XML API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-hp-p2000-xmlapi"
        },
        {
          "text": "HP StoreOnce (déprécié)",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-hp-storeonce-restapi"
        },
        {
          "text": "HP StoreOnce 3 Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-hp-storeonce3-restapi"
        },
        {
          "text": "HP StoreOnce 4 Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-hp-storeonce4-restapi"
        },
        {
          "text": "HP StoreOnce SSH",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-hp-storeonce-ssh"
        },
        {
          "text": "HPE Alletra REST API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-hpe-alletra-restapi"
        },
        {
          "text": "HPE Primera REST API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-hpe-primera-restapi"
        },
        {
          "text": "Huawei OceanStor SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-huawei-oceanstor-snmp"
        },
        {
          "text": "IBM DS3000 SMcli",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-ibm-ds3000-smcli"
        },
        {
          "text": "IBM DS4000 SMcli",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-ibm-ds4000-smcli"
        },
        {
          "text": "IBM DS5000 SMcli",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-ibm-ds5000-smcli"
        },
        {
          "text": "IBM FlashSystem 900 SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-ibm-fs900-snmp"
        },
        {
          "text": "IBM Storwize SSH",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-ibm-storwize-ssh"
        },
        {
          "text": "IBM TS2900 SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-ibm-ts2900-snmp"
        },
        {
          "text": "IBM TS3100 SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-ibm-ts3100-snmp"
        },
        {
          "text": "IBM TS3200 SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-ibm-ts3200-snmp"
        },
        {
          "text": "IBM TS3500 SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-ibm-ts3500-snmp"
        },
        {
          "text": "Kaminario RestAPI",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-kaminario-restapi"
        },
        {
          "text": "Lenovo Iomega SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-lenovo-iomega-snmp"
        },
        {
          "text": "Lenovo S Series SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-lenovo-sseries-snmp"
        },
        {
          "text": "NetApp Ontap OnCommand API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-netapp-ontap-oncommandapi"
        },
        {
          "text": "NetApp Ontap Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-netapp-ontap-restapi"
        },
        {
          "text": "NetApp Ontap SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-netapp-ontap-snmp"
        },
        {
          "text": "Netapp RestAPI (déprécié)",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-netapp-restapi"
        },
        {
          "text": "Netapp Santricity Restapi",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-netapp-santricity-restapi"
        },
        {
          "text": "Netapp SNMP (déprécié)",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-netapp-snmp"
        },
        {
          "text": "Netgear Readynas SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-netgear-readynas-snmp"
        },
        {
          "text": "Nimble Storage Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-nimble-restapi"
        },
        {
          "text": "Nimble Storage SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-nimble-snmp"
        },
        {
          "text": "Oracle ZS Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-oracle-zs-restapi"
        },
        {
          "text": "Oracle ZS SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-oracle-zs-snmp"
        },
        {
          "text": "Overland Neo SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-overland-neo-snmp"
        },
        {
          "text": "Panzura SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-panzura-snmp"
        },
        {
          "text": "Pure Storage FlashArray Legacy Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-purestorage-flasharray-legacy-restapi"
        },
        {
          "text": "Pure Storage FlashArray Rest API v2",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-purestorage-flasharray-v2-restapi"
        },
        {
          "text": "Pure Storage FlashBlade v2 Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-purestorage-flashblade-v2-restapi"
        },
        {
          "text": "Pure Storage SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-purestorage-snmp"
        },
        {
          "text": "Qnap SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-qnap-snmp"
        },
        {
          "text": "QSAN NAS SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-qsan-nas-snmp"
        },
        {
          "text": "Quantum DXi Series SSH",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-quantum-dxi-ssh"
        },
        {
          "text": "Quantum Scalar SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-quantum-scalar-snmp"
        },
        {
          "text": "Storagetek SL SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-storagetek-sl-snmp"
        },
        {
          "text": "Synology SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-synology-snmp"
        },
        {
          "text": "Violin Memory 3000 SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-violin-3000-snmp"
        },
        {
          "text": "WD NAS SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-storage-wd-nas-snmp"
        }
      ]
    },
    {
      "text": "Toip-voip",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Alcatel OXE SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-telephony-alcatel-oxe-snmp"
        },
        {
          "text": "Asterisk VoIP Server (déprécié)",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-voip-asterisk"
        },
        {
          "text": "AudioCodes SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-audiocodes-snmp"
        },
        {
          "text": "Avaya AES SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-telephony-avaya-aes-snmp"
        },
        {
          "text": "Avaya CM SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-telephony-avaya-cm-snmp"
        },
        {
          "text": "Avaya Media Gateway SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-telephony-avaya-mediagateway-snmp"
        },
        {
          "text": "Polycom DMA SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-devices-polycom-dma-snmp"
        },
        {
          "text": "Polycom HDX SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-devices-polycom-hdx-snmp"
        },
        {
          "text": "Polycom RMX SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-polycom-rmx-snmp"
        },
        {
          "text": "Polycom RPRM SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-devices-polycom-rprm-snmp"
        },
        {
          "text": "Sonus SBC SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/network-sonus-sbc-snmp"
        },
        {
          "text": "XiVO VoIP Server",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-voip-xivo"
        }
      ]
    },
    {
      "text": "Ups-pdu",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Alpha UPS SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-ups-alpha-snmp"
        },
        {
          "text": "APC ATS SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-ats-apc"
        },
        {
          "text": "APC PDU SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-pdu-apc-snmp"
        },
        {
          "text": "APC UPS SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-ups-apc-snmp"
        },
        {
          "text": "Clever PDU SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-pdu-clever-snmp"
        },
        {
          "text": "CyberPower Systems PDU SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-pdu-cyberpower-snmp"
        },
        {
          "text": "CyberPower Systems UPS SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-ups-cyberpower-snmp"
        },
        {
          "text": "Eaton ATS SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-ats-eaton-snmp"
        },
        {
          "text": "Eaton PDU SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-pdu-eaton-snmp"
        },
        {
          "text": "EES UPS SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-ups-ees-snmp"
        },
        {
          "text": "Emerson PDU SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-pdu-emerson-snmp"
        },
        {
          "text": "Gude EPC PDU SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-pdu-gude-epc-snmp"
        },
        {
          "text": "Himoinsa SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-ups-himoinsa-snmp"
        },
        {
          "text": "HP UPS SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-ups-hp-snmp"
        },
        {
          "text": "Inmatics PSU Sputnik SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-ups-inmatics-sputnik-snmp"
        },
        {
          "text": "MGE UPS System SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-ups-mge-snmp"
        },
        {
          "text": "Nitram UPS SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-ups-nitram-snmp"
        },
        {
          "text": "Phoenixtec UPS SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-ups-phoenixtec-snmp"
        },
        {
          "text": "Powerware UPS SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-ups-powerware-snmp"
        },
        {
          "text": "Raritan PDU SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-pdu-raritan-snmp"
        },
        {
          "text": "Riello UPS SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-ups-riello-snmp"
        },
        {
          "text": "Schleifenbauer Gateway SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-pdu-schleifenbauer-gateway-snmp"
        },
        {
          "text": "UPS Socomec Net Vision SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-ups-socomec-netvision-snmp"
        },
        {
          "text": "UPS Standard SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/hardware-ups-standard-rfc1628-snmp"
        }
      ]
    },
    {
      "text": "Virtualization",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "HPE Simplivity Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/virtualization-hpe-simplivity-restapi"
        },
        {
          "text": "Hyper-V 2012 CMA",
          "link": "/fr/pp/integrations/plugin-packs/procedures/virtualization-hyperv-2012-cma"
        },
        {
          "text": "Hyper-V 2012 NSClient++ NRPE",
          "link": "/fr/pp/integrations/plugin-packs/procedures/virtualization-hyperv-2012-nrpe"
        },
        {
          "text": "Hyper-V NSCP Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/virtualization-hyperv-nscp-restapi"
        },
        {
          "text": "Linux Libvirt CMA",
          "link": "/fr/pp/integrations/plugin-packs/procedures/virtualization-linux-libvirt-cma"
        },
        {
          "text": "Linux Libvirt SSH",
          "link": "/fr/pp/integrations/plugin-packs/procedures/virtualization-linux-libvirt-ssh"
        },
        {
          "text": "Nutanix SNMP",
          "link": "/fr/pp/integrations/plugin-packs/procedures/virtualization-nutanix-snmp"
        },
        {
          "text": "Proxmox VE Rest API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/virtualization-proxmox-ve-restapi"
        },
        {
          "text": "VMware ESX",
          "link": "/fr/pp/integrations/plugin-packs/procedures/virtualization-vmware2-esx"
        },
        {
          "text": "VMware ESX WS-MAN",
          "link": "/fr/pp/integrations/plugin-packs/procedures/virtualization-vmware2-esx-wsman"
        },
        {
          "text": "VMware vCenter",
          "link": "/fr/pp/integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-generic"
        },
        {
          "text": "VMware vCenter v4 (déprécié)",
          "link": "/fr/pp/integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-4"
        },
        {
          "text": "VMware vCenter v5 (déprécié)",
          "link": "/fr/pp/integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-5"
        },
        {
          "text": "VMware vCenter v6",
          "link": "/fr/pp/integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-6"
        },
        {
          "text": "VMware VM",
          "link": "/fr/pp/integrations/plugin-packs/procedures/virtualization-vmware2-vm"
        },
        {
          "text": "VMware8 ESX REST API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/application-virtualization-vmware8-esx-restapi"
        },
        {
          "text": "VMware8 vCenter REST API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-virtualization-vmware8-vcenter-restapi"
        },
        {
          "text": "VMware8 VCSA REST API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-virtualization-vmware8-vcsa-restapi"
        },
        {
          "text": "VMware8 VM REST API",
          "link": "/fr/pp/integrations/plugin-packs/procedures/applications-virtualization-vmware8-vm-restapi"
        }
      ]
    }
  ],
  "/fr/cloud/": [
    {
      "text": "Démarrer avec Centreon Cloud",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "À propos de Centreon Cloud",
          "link": "/fr/cloud/getting-started/about-centreon-cloud"
        },
        {
          "text": "Centreon Cloud Trial",
          "link": "/fr/cloud/getting-started/centreon-cloud-trial"
        },
        {
          "text": "Découvrez Centreon Cloud",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Architecture de Centreon Cloud",
              "link": "/fr/cloud/getting-started/architecture"
            },
            {
              "text": "Aperçu de l'interface Centreon",
              "link": "/fr/cloud/getting-started/interface"
            },
            {
              "text": "Bases de la supervision",
              "link": "/fr/cloud/getting-started/concepts"
            }
          ]
        },
        {
          "text": "Préparez votre plateforme",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Étapes de mise en place",
              "link": "/fr/cloud/getting-started/platform"
            },
            {
              "text": "Débuter avec les collecteurs",
              "link": "/fr/cloud/getting-started/start-with-pollers"
            },
            {
              "text": "Débuter avec les connecteurs de supervision",
              "link": "/fr/cloud/getting-started/start-with-connectors"
            }
          ]
        },
        {
          "text": "Mettez en supervision",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Comment mettre une ressource en supervision ?",
              "link": "/fr/cloud/getting-started/monitoring"
            },
            {
              "text": "Tutoriels",
              "collapsible": true,
              "collapsed": true,
              "items": [
                {
                  "text": "Superviser votre premier serveur Linux",
                  "link": "/fr/cloud/getting-started/monitor-linux-server-with-snmp"
                },
                {
                  "text": "Superviser votre premier serveur Windows",
                  "link": "/fr/cloud/getting-started/monitor-windows-server-with-snmp"
                },
                {
                  "text": "Superviser votre premier routeur Cisco",
                  "link": "/fr/cloud/getting-started/monitor-cisco-router-with-snmp"
                },
                {
                  "text": "Monitor Mysql Server",
                  "link": "/fr/cloud/getting-started/monitor-mysql-server"
                },
                {
                  "text": "Découvrir des instances AWS EC2 avec autodiscovery",
                  "link": "/fr/cloud/getting-started/autodisco-aws"
                }
              ],
              "link": "/fr/cloud/getting-started/tutorials"
            }
          ]
        },
        {
          "text": "Supervisez et visualisez",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Superviser vos ressources en temps réel",
              "link": "/fr/cloud/getting-started/monitor-in-real-time"
            },
            {
              "text": "Créer votre premier tableau de bord",
              "link": "/fr/cloud/getting-started/create-dashboard"
            }
          ]
        },
        {
          "text": "Pour aller plus loin dans Centreon Cloud",
          "link": "/fr/cloud/getting-started/cloud-beyond-basics"
        }
      ],
      "link": "/fr/cloud/getting-started/welcome"
    },
    {
      "text": "Gérer les utilisateurs de Centreon",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Portail utilisateur (Centreon Hub)",
          "link": "/fr/cloud/users/centreon-hub"
        },
        {
          "text": "Les utilisateurs dans Centreon Cloud",
          "link": "/fr/cloud/users/users"
        },
        {
          "text": "Les groupes d'utilisateurs dans Centreon Cloud",
          "link": "/fr/cloud/users/user_groups"
        },
        {
          "text": "Ram",
          "link": "/fr/cloud/administration/ram"
        },
        {
          "text": "Cloud Saml",
          "link": "/fr/cloud/users/cloud-saml"
        }
      ]
    },
    {
      "text": "Gérer les collecteurs",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Prérequis",
          "link": "/fr/cloud/installation/prerequisites"
        },
        {
          "text": "Déployer un collecteur",
          "link": "/fr/cloud/installation/deploy-poller"
        },
        {
          "text": "Mettre à jour/monter de version un collecteur",
          "link": "/fr/cloud/installation/poller-update-upgrade"
        },
        {
          "text": "Sécuriser vos collecteurs",
          "link": "/fr/cloud/installation/poller-secure"
        },
        {
          "text": "Superviser vos collecteurs",
          "link": "/fr/cloud/installation/poller-monitor"
        },
        {
          "text": "Dépanner vos collecteurs",
          "link": "/fr/cloud/installation/poller-troubleshoot"
        },
        {
          "text": "Migrer un collecteur vers une autre machine hôte",
          "link": "/fr/cloud/installation/poller-migrate"
        },
        {
          "text": "Supprimer un collecteur de votre architecture",
          "link": "/fr/cloud/installation/poller-remove"
        },
        {
          "text": "Versions des collecteurs",
          "link": "/fr/cloud/installation/poller-versions"
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
              "text": "Comprendre les métriques",
              "link": "/fr/cloud/monitoring/metrics"
            },
            {
              "text": "Utiliser des connecteurs de supervision",
              "link": "/fr/cloud/monitoring/pluginpacks"
            },
            {
              "text": "Déployer une configuration",
              "link": "/fr/cloud/monitoring/monitoring-servers/deploying-a-configuration"
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
              "link": "/fr/cloud/monitoring/basic-objects/hosts-create"
            },
            {
              "text": "Créer un hôte manuellement",
              "link": "/fr/cloud/monitoring/basic-objects/hosts"
            },
            {
              "text": "Créer des hôtes automatiquement",
              "link": "/fr/cloud/monitoring/basic-objects/hosts-create-disco"
            },
            {
              "text": "Utiliser des modèles d'hôtes",
              "link": "/fr/cloud/monitoring/basic-objects/hosts-templates"
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
              "link": "/fr/cloud/monitoring/basic-objects/services-create"
            },
            {
              "text": "Créer un service manuellement",
              "link": "/fr/cloud/monitoring/basic-objects/services"
            },
            {
              "text": "Créer des services automatiquement",
              "link": "/fr/cloud/monitoring/basic-objects/services-create-disco"
            },
            {
              "text": "Utiliser des modèles de services",
              "link": "/fr/cloud/monitoring/basic-objects/services-templates"
            },
            {
              "text": "Créer des méta-services",
              "link": "/fr/cloud/monitoring/basic-objects/meta-services"
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
              "link": "/fr/cloud/monitoring/discovery/introduction"
            },
            {
              "text": "Découvrir des hôtes automatiquement",
              "link": "/fr/cloud/monitoring/discovery/hosts-discovery"
            },
            {
              "text": "Découvrir des services automatiquement",
              "link": "/fr/cloud/monitoring/discovery/services-discovery"
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
              "link": "/fr/cloud/monitoring/groups"
            },
            {
              "text": "Catégories et criticités",
              "link": "/fr/cloud/monitoring/categories"
            }
          ]
        },
        {
          "text": "Objets et actions de base",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Les commandes",
              "link": "/fr/cloud/monitoring/basic-objects/commands"
            },
            {
              "text": "Les périodes temporelles",
              "link": "/fr/cloud/monitoring/basic-objects/timeperiods"
            },
            {
              "text": "Les macros",
              "link": "/fr/cloud/monitoring/basic-objects/macros"
            },
            {
              "text": "Actions génériques",
              "link": "/fr/cloud/monitoring/generic-actions"
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
              "link": "/fr/cloud/monitoring/anomaly-detection"
            }
          ]
        },
        {
          "text": "Gestionnaire d'évènements (auto-remédiation)",
          "link": "/fr/cloud/monitoring/event-handler"
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
              "link": "/fr/cloud/alerts-notifications/concepts"
            },
            {
              "text": "Page Statut des ressources",
              "link": "/fr/cloud/alerts-notifications/resources-status"
            },
            {
              "text": "Journal des évènements",
              "link": "/fr/cloud/alerts-notifications/event-log"
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
              "link": "/fr/cloud/alerts-notifications/acknowledge"
            },
            {
              "text": "Planifier un temps d'arrêt",
              "link": "/fr/cloud/alerts-notifications/downtimes"
            },
            {
              "text": "Soumettre un résultat",
              "link": "/fr/cloud/alerts-notifications/submit"
            }
          ]
        },
        {
          "text": "Configurer les notifications",
          "link": "/fr/cloud/alerts-notifications/notif-configuration"
        },
        {
          "text": "Bagotage (flapping)",
          "link": "/fr/cloud/alerts-notifications/notif-flapping"
        },
        {
          "text": "Gérer des tickets",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Configurer Open Tickets",
              "link": "/fr/cloud/alerts-notifications/ticketing"
            },
            {
              "text": "Personnaliser les tickets",
              "collapsible": true,
              "collapsed": true,
              "items": [
                {
                  "text": "Ticketing Advanced Smarty Variables",
                  "link": "/fr/cloud/alerts-notifications/ticketing/ticketing-advanced-smarty-variables"
                },
                {
                  "text": "Ticketing Advanced Smarty Functions",
                  "link": "/fr/cloud/alerts-notifications/ticketing/ticketing-advanced-smarty-functions"
                },
                {
                  "text": "Ticketing Advanced Mapping",
                  "link": "/fr/cloud/alerts-notifications/ticketing/ticketing-advanced-mapping"
                },
                {
                  "text": "Glossaire Open Tickets",
                  "link": "/fr/cloud/alerts-notifications/ticketing/glossary"
                }
              ],
              "link": "/fr/cloud/alerts-notifications/ticketing/ticketing-advanced-body"
            },
            {
              "text": "Utiliser Open Tickets",
              "link": "/fr/cloud/alerts-notifications/ticketing-use"
            },
            {
              "text": "Ticketing Advanced Architecture",
              "link": "/fr/cloud/alerts-notifications/ticketing/ticketing-advanced-architecture"
            }
          ],
          "link": "/fr/cloud/alerts-notifications/ticketing-overview"
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
          "link": "/fr/cloud/service-mapping/introduction"
        },
        {
          "text": "Guide",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Gestion",
              "link": "/fr/cloud/service-mapping/ba-management"
            },
            {
              "text": "Supervision",
              "link": "/fr/cloud/service-mapping/ba-monitoring"
            },
            {
              "text": "Reporting",
              "link": "/fr/cloud/service-mapping/ba-reporting"
            },
            {
              "text": "Paramètres",
              "link": "/fr/cloud/service-mapping/ba-settings"
            },
            {
              "text": "Widgets",
              "link": "/fr/cloud/service-mapping/widgets"
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
          "link": "/fr/cloud/alerts-notifications/dashboards"
        },
        {
          "text": "Graphiques de performance",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Gestion des graphiques",
              "link": "/fr/cloud/metrology/chart-management"
            },
            {
              "text": "Chart Template",
              "link": "/fr/cloud/metrology/chart-template"
            },
            {
              "text": "Chart Curves",
              "link": "/fr/cloud/metrology/chart-curves"
            },
            {
              "text": "Chart Virtual Metrics",
              "link": "/fr/cloud/metrology/chart-virtual-metrics"
            }
          ]
        },
        {
          "text": "Graphical views (maps)",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Introduction à Centreon MAP",
              "link": "/fr/cloud/graph-views/introduction-map"
            },
            {
              "text": "Guide",
              "collapsible": true,
              "collapsed": true,
              "items": [
                {
                  "text": "Gérer les droits d'accès dans MAP",
                  "link": "/fr/cloud/graph-views/map-web-access"
                },
                {
                  "text": "Gérer les cartes dans MAP",
                  "link": "/fr/cloud/graph-views/map-web-manage"
                },
                {
                  "text": "Créer une carte standard",
                  "link": "/fr/cloud/graph-views/map-web-create-standard-map"
                },
                {
                  "text": "Créer une vue géographique",
                  "link": "/fr/cloud/graph-views/map-web-create-geoview"
                },
                {
                  "text": "Problèmes connus dans MAP",
                  "link": "/fr/cloud/graph-views/map-web-known-issues"
                }
              ]
            }
          ]
        },
        {
          "text": "Vues personnalisées (legacy)",
          "link": "/fr/cloud/alerts-notifications/custom-views"
        }
      ]
    },
    {
      "text": "Administration",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Authentication Tokens",
          "link": "/fr/cloud/administration/authentication-tokens"
        },
        {
          "text": "Gérer les médias",
          "link": "/fr/cloud/administration/media"
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
          "link": "/fr/cloud/cma/cma"
        },
        {
          "text": "Configurer l’environnement de l’agent",
          "link": "/fr/cloud/cma/cma-setup"
        },
        {
          "text": "Configurer les certificats",
          "link": "/fr/cloud/cma/cma-certificates"
        },
        {
          "text": "Utiliser des plugins personnalisés avec CMA",
          "link": "/fr/cloud/cma/cma-custom"
        },
        {
          "text": "Migrer vers CMA depuis NSClient++",
          "link": "/fr/cloud/cma/cma-migratenscpp"
        },
        {
          "text": "Dépanner l'agent CMA",
          "link": "/fr/cloud/cma/cma-troubleshooting"
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
          "link": "/fr/cloud/integrations/stream-connectors-cloud"
        },
        {
          "text": "Mcp Server",
          "link": "/fr/cloud/integrations/mcp-server"
        },
        {
          "text": "ITSM",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "BMC Footprints",
              "link": "/fr/cloud/integrations/itsm/ot-bmc-footprints"
            },
            {
              "text": "EasyVista API SOAP",
              "link": "/fr/cloud/integrations/itsm/ot-easyvista"
            },
            {
              "text": "EasyVista RestAPI",
              "link": "/fr/cloud/integrations/itsm/ot-easyvista-rest-api"
            },
            {
              "text": "GLPI",
              "link": "/fr/cloud/integrations/itsm/ot-glpi"
            },
            {
              "text": "Ot Glpi Restapi",
              "link": "/fr/cloud/integrations/itsm/ot-glpi-restapi"
            },
            {
              "text": "iTop",
              "link": "/fr/cloud/integrations/itsm/ot-itop"
            },
            {
              "text": "Jira",
              "link": "/fr/cloud/integrations/itsm/ot-jira"
            },
            {
              "text": "Ot Otrs Restapi",
              "link": "/fr/cloud/integrations/itsm/ot-otrs-restapi"
            },
            {
              "text": "Ot Request Tracker Restapi",
              "link": "/fr/cloud/integrations/itsm/ot-request-tracker-restapi"
            },
            {
              "text": "Ot Servicenow",
              "link": "/fr/cloud/integrations/itsm/ot-servicenow"
            }
          ],
          "link": "/fr/cloud/integrations/itsm/itsm-overview"
        }
      ]
    },
    {
      "text": "API",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Api Tokens",
          "link": "/fr/cloud/administration/api-tokens"
        }
      ]
    },
    {
      "text": "Sécurité",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Centreon Cloud - Management de la sécurité",
          "link": "/fr/cloud/security/security"
        }
      ]
    },
    {
      "text": "Release notes",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Cloud Release Notes",
          "link": "/fr/cloud/releases/cloud-release-notes"
        }
      ]
    },
    {
      "text": "Ressources",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Problèmes connus sur Centreon Cloud",
          "link": "/fr/cloud/resources/known-issues"
        },
        {
          "text": "Glossaire des concepts Centreon",
          "link": "/fr/cloud/resources/glossary"
        }
      ]
    }
  ],
  "/fr/logmanagement/": [
    {
      "text": "Démarrer avec Centreon Log Management",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Observability",
          "link": "/fr/logmanagement/getting-started/observability"
        },
        {
          "text": "Concepts",
          "link": "/fr/logmanagement/getting-started/concepts"
        },
        {
          "text": "Use Cases",
          "link": "/fr/logmanagement/getting-started/use-cases"
        }
      ],
      "link": "/fr/logmanagement/getting-started/welcome"
    },
    {
      "text": "Gérer les utilisateurs",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Portail utilisateur (Centreon Hub)",
          "link": "/fr/logmanagement/centreon-hub"
        }
      ]
    },
    {
      "text": "Envoyer des logs à Centreon Log Management",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Fonctionnement d'un collecteur OpenTelemetry",
          "link": "/fr/logmanagement/collector/opentelemetry-collector"
        },
        {
          "text": "Copyright 2025 Centreon",
          "link": "/fr/logmanagement/collector/collector-simple"
        },
        {
          "text": "Collector",
          "link": "/fr/logmanagement/collector/collector"
        },
        {
          "text": "Collector Troubleshooting",
          "link": "/fr/logmanagement/collector/collector-troubleshooting"
        }
      ]
    },
    {
      "text": "Explorer et analyser les logs",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Log Explorer",
          "link": "/fr/logmanagement/log-explorer"
        },
        {
          "text": "Syntaxe des requêtes",
          "link": "/fr/logmanagement/query-syntax"
        },
        {
          "text": "Créer des tableaux de bord",
          "link": "/fr/logmanagement/dashboards"
        }
      ],
      "link": "/fr/logmanagement/explore-analyze"
    },
    {
      "text": "Gérer les alertes",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Alert Events",
          "link": "/fr/logmanagement/alert-events"
        }
      ]
    },
    {
      "text": "Administration",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Surveiller l’utilisation du stockage",
          "link": "/fr/logmanagement/administration/storage-usage"
        },
        {
          "text": "Tokens",
          "link": "/fr/logmanagement/administration/tokens"
        }
      ]
    },
    {
      "text": "API",
      "link": "/fr/logmanagement/api"
    },
    {
      "text": "Ressources",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Glossary",
          "link": "/fr/logmanagement/resources/glossary"
        }
      ]
    }
  ],
  "/fr/experience-monitoring/": [
    {
      "text": "Démarrer avec Centreon Experience Monitoring",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Experience Monitoring Solution",
          "link": "/fr/experience-monitoring/getting-started/experience-monitoring-solution"
        },
        {
          "text": "Contact Support",
          "link": "/fr/experience-monitoring/getting-started/contact-support"
        },
        {
          "text": "Synthetic Monitoring",
          "link": "/fr/experience-monitoring/getting-started/synthetic-monitoring"
        },
        {
          "text": "Real User Monitoring",
          "link": "/fr/experience-monitoring/getting-started/real-user-monitoring"
        },
        {
          "text": "System View",
          "link": "/fr/experience-monitoring/getting-started/system-view"
        },
        {
          "text": "Business View",
          "link": "/fr/experience-monitoring/getting-started/business-view"
        },
        {
          "text": "Load Tests",
          "link": "/fr/experience-monitoring/getting-started/load-tests"
        },
        {
          "text": "Dashboards",
          "link": "/fr/experience-monitoring/getting-started/dashboards"
        }
      ],
      "link": "/fr/experience-monitoring/getting-started/welcome"
    },
    {
      "text": "Installation",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Installation Checklist",
          "link": "/fr/experience-monitoring/installation/installation-checklist"
        },
        {
          "text": "Experience Monitoring Ip Addresses",
          "link": "/fr/experience-monitoring/installation/experience-monitoring-ip-addresses"
        },
        {
          "text": "Real User Monitoring Installation",
          "link": "/fr/experience-monitoring/installation/real-user-monitoring-installation"
        },
        {
          "text": "Monitor Production Events",
          "link": "/fr/experience-monitoring/installation/monitor-production-events"
        },
        {
          "text": "Serveurs et middleware",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Install System Agents",
              "link": "/fr/experience-monitoring/installation/servers/install-system-agents"
            },
            {
              "text": "Cloud Configuration Of Agents",
              "link": "/fr/experience-monitoring/installation/servers/cloud-configuration-of-agents"
            },
            {
              "text": "Add Advanced Metrics",
              "link": "/fr/experience-monitoring/installation/servers/add-advanced-metrics"
            },
            {
              "text": "Install Php Magento Orocommerce Profiler",
              "link": "/fr/experience-monitoring/installation/servers/install-php-magento-orocommerce-profiler"
            }
          ]
        }
      ]
    },
    {
      "text": "Configuration",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Configuration Checklist",
          "link": "/fr/experience-monitoring/configuration/configuration-checklist"
        },
        {
          "text": "Manage Users And Rights",
          "link": "/fr/experience-monitoring/configuration/manage-users-and-rights"
        },
        {
          "text": "Configure Digital Sobriety",
          "link": "/fr/experience-monitoring/configuration/configure-digital-sobriety"
        },
        {
          "text": "Configure Google Analytics",
          "link": "/fr/experience-monitoring/configuration/configure-google-analytics"
        },
        {
          "text": "Receive And Configure Alerts",
          "link": "/fr/experience-monitoring/configuration/receive-and-configure-alerts"
        },
        {
          "text": "Parcours Utilisateurs",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Create A Scenario",
              "link": "/fr/experience-monitoring/configuration/user-journey/create-a-scenario"
            },
            {
              "text": "User Journey Best Practices",
              "link": "/fr/experience-monitoring/configuration/user-journey/user-journey-best-practices"
            },
            {
              "text": "Superviser des parcours utilisateur non-publics (beta fermée)",
              "link": "/fr/experience-monitoring/configuration/user-journey/stm-zones"
            }
          ]
        },
        {
          "text": "Configuration avancée",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Définir les variables CSRF-Token et _qm3k_session",
              "link": "/fr/experience-monitoring/configuration/advanced-configuration/enable-disable-scenario-or-alert-via-api"
            }
          ]
        }
      ]
    },
    {
      "text": "Analyse de la performance",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Network Tab Indicators",
          "link": "/fr/experience-monitoring/performance-analysis/network-tab-indicators"
        },
        {
          "text": "System Tab Indicators",
          "link": "/fr/experience-monitoring/performance-analysis/system-tab-indicators"
        },
        {
          "text": "Speed Up Website With Applications Or Server Configuration",
          "link": "/fr/experience-monitoring/performance-analysis/speed-up-website-with-applications-or-server-configuration"
        },
        {
          "text": "Errors And Unavailability Front End",
          "link": "/fr/experience-monitoring/performance-analysis/errors-and-unavailability-front-end"
        },
        {
          "text": "Vue d'ensemble des métriques",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Hero Time",
              "link": "/fr/experience-monitoring/performance-analysis/metrics/hero-time"
            },
            {
              "text": "Time To First Byte",
              "link": "/fr/experience-monitoring/performance-analysis/metrics/time-to-first-byte"
            },
            {
              "text": "Speed Index",
              "link": "/fr/experience-monitoring/performance-analysis/metrics/speed-index"
            },
            {
              "text": "OnLoad",
              "link": "/fr/experience-monitoring/performance-analysis/metrics/on-load"
            },
            {
              "text": "Largest Contentful Paint",
              "link": "/fr/experience-monitoring/performance-analysis/metrics/largest-contentful-paint"
            },
            {
              "text": "TTB - Total Blocking Time (Web Vital)",
              "link": "/fr/experience-monitoring/performance-analysis/metrics/total-blocking-time"
            },
            {
              "text": "CLS - Cumulative Layout Shift (Web Vital)",
              "link": "/fr/experience-monitoring/performance-analysis/metrics/cumulative-layout-shift"
            }
          ],
          "link": "/fr/experience-monitoring/performance-analysis/metrics/overview-of-metrics"
        },
        {
          "text": "Actions de base",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Navigate In Experience Monitoring",
              "link": "/fr/experience-monitoring/performance-analysis/basic-actions/navigate-in-experience-monitoring"
            },
            {
              "text": "How Alerts Work",
              "link": "/fr/experience-monitoring/performance-analysis/basic-actions/how-alerts-work"
            },
            {
              "text": "Gray Areas On Charts",
              "link": "/fr/experience-monitoring/performance-analysis/basic-actions/gray-areas-on-charts"
            },
            {
              "text": "Event Tracking",
              "link": "/fr/experience-monitoring/performance-analysis/basic-actions/event-tracking"
            }
          ]
        }
      ]
    },
    {
      "text": "Sobriété numérique",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Carbon Footprint Evaluation And Digital Sobriety",
          "link": "/fr/experience-monitoring/digital-sobriety/carbon-footprint-evaluation-and-digital-sobriety"
        },
        {
          "text": "Digital Sobriety Score",
          "link": "/fr/experience-monitoring/digital-sobriety/digital-sobriety-score"
        },
        {
          "text": "Differences With Eco Index",
          "link": "/fr/experience-monitoring/digital-sobriety/differences-with-eco-index"
        }
      ]
    },
    {
      "text": "Articles How-to",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Unable To Connect",
          "link": "/fr/experience-monitoring/how-to-articles/unable-to-connect"
        },
        {
          "text": "Meaning Of Colors In Graphs",
          "link": "/fr/experience-monitoring/how-to-articles/meaning-of-colors-in-graphs"
        },
        {
          "text": "Module SEO - Référencement Google",
          "link": "/fr/experience-monitoring/how-to-articles/seo-module"
        },
        {
          "text": "Measurement Interval",
          "link": "/fr/experience-monitoring/how-to-articles/measurement-interval"
        },
        {
          "text": "Experience Monitoring Probes In Google Analytics",
          "link": "/fr/experience-monitoring/how-to-articles/experience-monitoring-probes-in-google-analytics"
        },
        {
          "text": "Faq",
          "link": "/fr/experience-monitoring/how-to-articles/faq"
        },
        {
          "text": "Comment réinitialiser mon mot de passe ?",
          "link": "/fr/experience-monitoring/how-to-articles/password-reset"
        },
        {
          "text": "Using Charts",
          "link": "/fr/experience-monitoring/how-to-articles/using-charts"
        },
        {
          "text": "L’écran Parcours Utilisateurs",
          "link": "/fr/experience-monitoring/how-to-articles/user-journey-screen"
        },
        {
          "text": "Les données du RUM sont bloquées car le site utilise une politique CSP stricte",
          "link": "/fr/experience-monitoring/how-to-articles/rum-blocked-by-csp"
        }
      ]
    },
    {
      "text": "Centreon Experience Monitoring - notes de release",
      "link": "/fr/experience-monitoring/release-notes"
    }
  ],
  "/26.10/": [
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
              "link": "/26.10/getting-started/which-install"
            },
            {
              "text": "Elements of a Centreon platform",
              "link": "/26.10/getting-started/platform"
            },
            {
              "text": "Set up your free IT-100 solution",
              "link": "/26.10/getting-started/IT100"
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
              "link": "/26.10/getting-started/interface"
            },
            {
              "text": "Monitoring basics",
              "link": "/26.10/getting-started/concepts"
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
              "link": "/26.10/getting-started/first-supervision"
            },
            {
              "text": "Monitor your first Linux host",
              "link": "/26.10/getting-started/monitor-linux-server-with-snmp"
            },
            {
              "text": "Monitor your first Windows host",
              "link": "/26.10/getting-started/monitor-windows-server-with-snmp"
            },
            {
              "text": "Monitor your first Cisco router",
              "link": "/26.10/getting-started/monitor-cisco-router-with-snmp"
            },
            {
              "text": "Monitor Mysql Server",
              "link": "/26.10/getting-started/monitor-mysql-server"
            },
            {
              "text": "Use Autodiscovery to monitor AWS EC2 instances",
              "link": "/26.10/getting-started/autodisco-aws"
            },
            {
              "text": "Monitor Printer Snmp",
              "link": "/26.10/getting-started/monitor-printer-snmp"
            },
            {
              "text": "Monitor Ups Snmp",
              "link": "/26.10/getting-started/monitor-ups-snmp"
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
              "link": "/26.10/getting-started/actions"
            },
            {
              "text": "Creating your first dashboard",
              "link": "/26.10/getting-started/create-dashboard"
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
              "link": "/26.10/getting-started/create-graphical-view"
            },
            {
              "text": "Model your IT services",
              "link": "/26.10/getting-started/model-it-services"
            },
            {
              "text": "Analyze resources availability",
              "link": "/26.10/getting-started/analyze-resources-availability"
            }
          ]
        }
      ],
      "link": "/26.10/getting-started/welcome"
    },
    {
      "text": "Installation",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Introduction",
          "link": "/26.10/installation/introduction"
        },
        {
          "text": "Compatibility",
          "link": "/26.10/installation/compatibility"
        },
        {
          "text": "Architectures",
          "link": "/26.10/installation/architectures"
        },
        {
          "text": "Inside Centreon",
          "link": "/26.10/installation/inside-centreon"
        },
        {
          "text": "Prerequisites",
          "link": "/26.10/installation/prerequisites"
        },
        {
          "text": "Technical information",
          "link": "/26.10/installation/technical"
        },
        {
          "text": "Download",
          "link": "/26.10/installation/download"
        },
        {
          "text": "Installation of a Central server",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Using packages",
              "link": "/26.10/installation/installation-of-a-central-server/using-packages"
            },
            {
              "text": "Unattended Install Central",
              "link": "/26.10/installation/installation-of-a-central-server/unattended-install-central"
            },
            {
              "text": "Using a virtual machine (VM)",
              "link": "/26.10/installation/installation-of-a-central-server/using-virtual-machines"
            }
          ]
        },
        {
          "text": "Web And Post Installation",
          "link": "/26.10/installation/web-and-post-installation"
        },
        {
          "text": "Installation of a Poller",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Using packages",
              "link": "/26.10/installation/installation-of-a-poller/using-packages"
            },
            {
              "text": "Unattended Install Poller",
              "link": "/26.10/installation/installation-of-a-poller/unattended-install-poller"
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
              "link": "/26.10/installation/installation-of-a-remote-server/using-packages"
            },
            {
              "text": "Unattended Install Remote",
              "link": "/26.10/installation/installation-of-a-remote-server/unattended-install-remote"
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
              "link": "/26.10/monitoring/monitoring-servers/add-a-poller-to-configuration"
            },
            {
              "text": "Attach a remote server to a central server",
              "link": "/26.10/monitoring/monitoring-servers/add-a-remote-server-to-configuration"
            },
            {
              "text": "Communications",
              "link": "/26.10/monitoring/monitoring-servers/communications"
            },
            {
              "text": "Attach a poller to a different remote server",
              "link": "/26.10/monitoring/monitoring-servers/move-poller"
            },
            {
              "text": "Advanced configuration",
              "link": "/26.10/monitoring/monitoring-servers/advanced-configuration"
            }
          ]
        },
        {
          "text": "Offline installation",
          "link": "/26.10/installation/offline"
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
          "link": "/26.10/administration/secure-platform"
        },
        {
          "text": "Secure your MAP platform",
          "link": "/26.10/graph-views/secure-your-map-platform"
        },
        {
          "text": "Secure your MBI platform",
          "link": "/26.10/reporting/secure-your-mbi-platform"
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
              "link": "/26.10/monitoring/about"
            },
            {
              "text": "Understanding metrics",
              "link": "/26.10/monitoring/metrics"
            },
            {
              "text": "Monitoring Connectors",
              "link": "/26.10/monitoring/pluginpacks"
            },
            {
              "text": "Deploying a configuration",
              "link": "/26.10/monitoring/monitoring-servers/deploying-a-configuration"
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
              "link": "/26.10/monitoring/basic-objects/hosts-create"
            },
            {
              "text": "Creating hosts manually",
              "link": "/26.10/monitoring/basic-objects/hosts"
            },
            {
              "text": "Creating hosts automatically",
              "link": "/26.10/monitoring/basic-objects/hosts-create-disco"
            },
            {
              "text": "Using host templates",
              "link": "/26.10/monitoring/basic-objects/hosts-templates"
            },
            {
              "text": "Change the monitoring server for a host",
              "link": "/26.10/monitoring/basic-objects/hosts-switch-poller"
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
              "link": "/26.10/monitoring/basic-objects/services-create"
            },
            {
              "text": "Creating services manually",
              "link": "/26.10/monitoring/basic-objects/services"
            },
            {
              "text": "Creating services automatically",
              "link": "/26.10/monitoring/basic-objects/services-create-disco"
            },
            {
              "text": "Using service templates",
              "link": "/26.10/monitoring/basic-objects/services-templates"
            },
            {
              "text": "Creating Meta Services",
              "link": "/26.10/monitoring/basic-objects/meta-services"
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
              "link": "/26.10/monitoring/discovery/introduction"
            },
            {
              "text": "Installation",
              "link": "/26.10/monitoring/discovery/installation"
            },
            {
              "text": "Discovering hosts automatically",
              "link": "/26.10/monitoring/discovery/hosts-discovery"
            },
            {
              "text": "Discovering services automatically",
              "link": "/26.10/monitoring/discovery/services-discovery"
            },
            {
              "text": "Administration",
              "link": "/26.10/monitoring/discovery/administration"
            },
            {
              "text": "Troubleshooting host discovery issues",
              "link": "/26.10/monitoring/discovery/troubleshooting-hosts-discovery"
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
              "link": "/26.10/monitoring/groups"
            },
            {
              "text": "Categories and severities",
              "link": "/26.10/monitoring/categories"
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
              "link": "/26.10/monitoring/basic-objects/timeperiods"
            },
            {
              "text": "Macros",
              "link": "/26.10/monitoring/basic-objects/macros"
            },
            {
              "text": "Commands",
              "link": "/26.10/monitoring/basic-objects/commands"
            },
            {
              "text": "Generic actions",
              "link": "/26.10/monitoring/generic-actions"
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
              "link": "/26.10/monitoring/anomaly-detection"
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
              "link": "/26.10/monitoring/passive-monitoring/enable-snmp-traps"
            },
            {
              "text": "Create SNMP Traps definitions",
              "link": "/26.10/monitoring/passive-monitoring/create-snmp-traps-definitions"
            },
            {
              "text": "Monitoring with SNMP Traps",
              "link": "/26.10/monitoring/passive-monitoring/monitoring-with-snmp-traps"
            },
            {
              "text": "Debug SNMP Traps management",
              "link": "/26.10/monitoring/passive-monitoring/debug-snmp-traps-management"
            },
            {
              "text": "Dynamic Service Management",
              "link": "/26.10/monitoring/passive-monitoring/dsm"
            }
          ]
        },
        {
          "text": "Auto Remediation",
          "link": "/26.10/monitoring/event-handler"
        },
        {
          "text": "Import/Export",
          "link": "/26.10/monitoring/web-import-export"
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
              "link": "/26.10/alerts-notifications/concepts"
            },
            {
              "text": "Resources Status page",
              "link": "/26.10/alerts-notifications/resources-status"
            },
            {
              "text": "Event consoles",
              "link": "/26.10/alerts-notifications/event-console"
            },
            {
              "text": "Event Logs",
              "link": "/26.10/alerts-notifications/event-log"
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
              "link": "/26.10/alerts-notifications/acknowledge"
            },
            {
              "text": "Planning downtime",
              "link": "/26.10/alerts-notifications/downtimes"
            },
            {
              "text": "Submitting a status",
              "link": "/26.10/alerts-notifications/submit"
            },
            {
              "text": "Other actions",
              "link": "/26.10/alerts-notifications/other"
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
              "link": "/26.10/alerts-notifications/notif-concept"
            },
            {
              "text": "Configuring notifications",
              "link": "/26.10/alerts-notifications/notif-configuration"
            },
            {
              "text": "Types of notifications",
              "collapsible": true,
              "collapsed": true,
              "items": [
                {
                  "text": "Email notifications",
                  "link": "/26.10/alerts-notifications/notif-email"
                },
                {
                  "text": "Microsoft Teams notifications",
                  "link": "/26.10/alerts-notifications/notif-config-for-teams"
                },
                {
                  "text": "Sms Notifications",
                  "link": "/26.10/integrations/notifications/sms-notifications"
                },
                {
                  "text": "Slack Notifications",
                  "link": "/26.10/integrations/notifications/slack-notifications"
                },
                {
                  "text": "Telegram notifications",
                  "link": "/26.10/integrations/notifications/plugin-telegram"
                }
              ]
            },
            {
              "text": "Dependencies",
              "link": "/26.10/alerts-notifications/notif-dependencies"
            },
            {
              "text": "Escalation",
              "link": "/26.10/alerts-notifications/notif-escalation"
            },
            {
              "text": "Flapping",
              "link": "/26.10/alerts-notifications/notif-flapping"
            },
            {
              "text": "To go further",
              "link": "/26.10/alerts-notifications/notif-advanced"
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
              "link": "/26.10/alerts-notifications/ticketing-install"
            },
            {
              "text": "Configuring Open Tickets",
              "link": "/26.10/alerts-notifications/ticketing"
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
          "link": "/26.10/monitoring/basic-objects/contacts"
        },
        {
          "text": "Creating contacts/users manually",
          "link": "/26.10/monitoring/basic-objects/contacts-create"
        },
        {
          "text": "Using contact templates",
          "link": "/26.10/monitoring/basic-objects/contacts-templates"
        },
        {
          "text": "Using contact groups",
          "link": "/26.10/monitoring/basic-objects/contacts-groups"
        },
        {
          "text": "Granting rights to Centreon users (ACL)",
          "link": "/26.10/administration/access-control-lists"
        },
        {
          "text": "Changing your Centreon account's settings",
          "link": "/26.10/monitoring/basic-objects/customization"
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
          "link": "/26.10/service-mapping/introduction"
        },
        {
          "text": "Guide",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Manage Business Activities",
              "link": "/26.10/service-mapping/ba-management"
            },
            {
              "text": "Monitor Business Activities",
              "link": "/26.10/service-mapping/ba-monitoring"
            },
            {
              "text": "Report Business Activities",
              "link": "/26.10/service-mapping/ba-reporting"
            },
            {
              "text": "Settings",
              "link": "/26.10/service-mapping/ba-settings"
            },
            {
              "text": "Widgets",
              "link": "/26.10/service-mapping/widgets"
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
              "link": "/26.10/service-mapping/install"
            },
            {
              "text": "Update the extension",
              "link": "/26.10/service-mapping/update"
            },
            {
              "text": "Upgrade the extension",
              "link": "/26.10/service-mapping/upgrade"
            },
            {
              "text": "Install on a Remote Server",
              "link": "/26.10/service-mapping/remote-server"
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
          "link": "/26.10/alerts-notifications/dashboards"
        },
        {
          "text": "Performance graphs",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Chart management",
              "link": "/26.10/metrology/chart-management"
            },
            {
              "text": "Chart Template",
              "link": "/26.10/metrology/chart-template"
            },
            {
              "text": "Chart Curves",
              "link": "/26.10/metrology/chart-curves"
            },
            {
              "text": "Chart Virtual Metrics",
              "link": "/26.10/metrology/chart-virtual-metrics"
            },
            {
              "text": "Viewing Centreon data in Grafana",
              "link": "/26.10/metrology/grafana"
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
              "link": "/26.10/graph-views/introduction-map"
            },
            {
              "text": "Installing MAP",
              "link": "/26.10/graph-views/map-web-install"
            },
            {
              "text": "Installing MAP on a remote server",
              "link": "/26.10/graph-views/map-web-install-remote"
            },
            {
              "text": "Updating MAP",
              "link": "/26.10/graph-views/map-web-update"
            },
            {
              "text": "Upgrading MAP",
              "link": "/26.10/graph-views/map-web-upgrade"
            },
            {
              "text": "Managing access rights in MAP",
              "link": "/26.10/graph-views/map-web-access"
            },
            {
              "text": "Managing maps in MAP",
              "link": "/26.10/graph-views/map-web-manage"
            },
            {
              "text": "Creating a standard map",
              "link": "/26.10/graph-views/map-web-create-standard-map"
            },
            {
              "text": "Creating a geographic view",
              "link": "/26.10/graph-views/map-web-create-geoview"
            },
            {
              "text": "Migrating the extension",
              "link": "/26.10/graph-views/map-web-migrate"
            },
            {
              "text": "Advanced configuration in MAP",
              "link": "/26.10/graph-views/map-web-advanced-configuration"
            },
            {
              "text": "Advanced parameters in MAP",
              "link": "/26.10/graph-views/map-web-advanced"
            },
            {
              "text": "Backing up and restoring your MAP server",
              "link": "/26.10/graph-views/map-web-backup-restore"
            },
            {
              "text": "MAP known issues",
              "link": "/26.10/graph-views/map-web-known-issues"
            },
            {
              "text": "MAP troubleshooting",
              "link": "/26.10/graph-views/map-web-troubleshooting"
            },
            {
              "text": "Map Api",
              "link": "/26.10/api/map-api"
            }
          ]
        },
        {
          "text": "Custom views (legacy)",
          "link": "/26.10/alerts-notifications/custom-views"
        },
        {
          "text": "Availability reports",
          "link": "/26.10/alerts-notifications/availability"
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
          "link": "/26.10/reporting/introduction"
        },
        {
          "text": "MBI concepts",
          "link": "/26.10/reporting/concepts"
        },
        {
          "text": "How does MBI work?",
          "link": "/26.10/reporting/how-mbi-works"
        },
        {
          "text": "Installing MBI",
          "link": "/26.10/reporting/installation"
        },
        {
          "text": "Using MBI",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Preparing data for report generation",
              "link": "/26.10/reporting/preparing-data"
            },
            {
              "text": "Generating reports using jobs",
              "link": "/26.10/reporting/generating-reports"
            },
            {
              "text": "Publishing your reports",
              "link": "/26.10/reporting/reports-publication-rule"
            },
            {
              "text": "Giving access to jobs and reports in Centreon",
              "link": "/26.10/reporting/share"
            },
            {
              "text": "MBI Widgets",
              "link": "/26.10/reporting/widgets"
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
              "link": "/26.10/reporting/troubleshooting"
            },
            {
              "text": "Rebuilding MBI data",
              "link": "/26.10/reporting/rebuilding-data"
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
              "link": "/26.10/reporting/backup-restore"
            },
            {
              "text": "Update the extension",
              "link": "/26.10/reporting/update"
            },
            {
              "text": "Upgrade the extension",
              "link": "/26.10/reporting/upgrade"
            },
            {
              "text": "Migrate the extension",
              "link": "/26.10/reporting/migrate"
            },
            {
              "text": "Creating custom reports",
              "link": "/26.10/reporting/report-development"
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
              "link": "/26.10/reporting/available-reports/ba-monitoring-reports"
            },
            {
              "text": "Availability and Events reports",
              "link": "/26.10/reporting/available-reports/availability-events-reports"
            },
            {
              "text": "Performance reports",
              "link": "/26.10/reporting/available-reports/performance-reports"
            },
            {
              "text": "Storage reports",
              "link": "/26.10/reporting/available-reports/storage-reports"
            },
            {
              "text": "Network reports",
              "link": "/26.10/reporting/available-reports/network-reports"
            },
            {
              "text": "Virtualization reports",
              "link": "/26.10/reporting/available-reports/virtualization-reports"
            },
            {
              "text": "Electric consumption reports",
              "link": "/26.10/reporting/available-reports/electric-consumption-reports"
            },
            {
              "text": "Profiling reports",
              "link": "/26.10/reporting/available-reports/profiling-reports"
            },
            {
              "text": "Inventory and Configuration reports",
              "link": "/26.10/reporting/available-reports/inventory-configuration-reports"
            },
            {
              "text": "Database diagnostics reports",
              "link": "/26.10/reporting/available-reports/database-diagnostics-reports"
            }
          ],
          "link": "/26.10/reporting/available-reports/available-reports"
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
              "link": "/26.10/administration/parameters/centreon-ui"
            },
            {
              "text": "Monitoring",
              "link": "/26.10/administration/parameters/monitoring"
            },
            {
              "text": "Gorgone",
              "link": "/26.10/administration/parameters/gorgone"
            },
            {
              "text": "RRDTool",
              "link": "/26.10/administration/parameters/rrdtool"
            },
            {
              "text": "Debug",
              "link": "/26.10/administration/parameters/debug"
            },
            {
              "text": "Data management",
              "link": "/26.10/administration/parameters/data-management"
            },
            {
              "text": "Media",
              "link": "/26.10/administration/parameters/medias"
            }
          ]
        },
        {
          "text": "Customize Centreon",
          "link": "/26.10/administration/customize-centreon"
        },
        {
          "text": "Configuring the connection to Centreon",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Configuring a local authentication",
              "link": "/26.10/connect/loginpwd"
            },
            {
              "text": "Connecting Centreon to an LDAP directory",
              "link": "/26.10/administration/parameters/ldap"
            },
            {
              "text": "Configuring a Web SSO connection",
              "link": "/26.10/connect/sso"
            },
            {
              "text": "Configuring connection via OpenId Connect",
              "link": "/26.10/connect/openid"
            },
            {
              "text": "Configuring connection via SAML",
              "link": "/26.10/connect/saml"
            },
            {
              "text": "Configuring Autologin",
              "link": "/26.10/connect/autologin"
            }
          ]
        },
        {
          "text": "Extensions",
          "link": "/26.10/administration/extensions"
        },
        {
          "text": "Licenses",
          "link": "/26.10/administration/licenses"
        },
        {
          "text": "Database partitioning",
          "link": "/26.10/administration/database-partitioning"
        },
        {
          "text": "Disaster recovery",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Back up and restore your central server",
              "link": "/26.10/administration/backup"
            },
            {
              "text": "Back up and restore your pollers",
              "link": "/26.10/administration/backup-poller"
            }
          ],
          "link": "/26.10/administration/disaster-recovery"
        },
        {
          "text": "Knowledge Base",
          "link": "/26.10/administration/knowledge-base"
        },
        {
          "text": "Logging configuration changes",
          "link": "/26.10/administration/logging-configuration-changes"
        },
        {
          "text": "Platform statistics",
          "link": "/26.10/administration/platform-statistics"
        },
        {
          "text": "Configuring your Centreon to send emails",
          "link": "/26.10/administration/postfix"
        },
        {
          "text": "Optimizing database traffic",
          "link": "/26.10/administration/sql-proxy"
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
              "link": "/26.10/update/update-centreon-platform"
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
              "link": "/26.10/upgrade/introduction"
            },
            {
              "text": "Upgrade from Centreon 24.10",
              "link": "/26.10/upgrade/upgrade-from-24-10"
            },
            {
              "text": "Upgrade from Centreon 24.04",
              "link": "/26.10/upgrade/upgrade-from-24-04"
            },
            {
              "text": "Upgrade from Centreon 23.10",
              "link": "/26.10/upgrade/upgrade-from-23-10"
            },
            {
              "text": "Upgrade from Centreon 23.04",
              "link": "/26.10/upgrade/upgrade-from-23-04"
            },
            {
              "text": "Upgrade from Centreon 22.10",
              "link": "/26.10/upgrade/upgrade-from-22-10"
            },
            {
              "text": "Upgrade from Centreon 22.04",
              "link": "/26.10/upgrade/upgrade-from-22-04"
            },
            {
              "text": "Upgrade from Centreon 21.10",
              "link": "/26.10/upgrade/upgrade-from-21-10"
            },
            {
              "text": "Upgrade from Centreon 21.04",
              "link": "/26.10/upgrade/upgrade-from-21-04"
            },
            {
              "text": "Upgrade from Centreon 20.10",
              "link": "/26.10/upgrade/upgrade-from-20-10"
            },
            {
              "text": "Upgrading MariaDB",
              "link": "/26.10/upgrade/upgrade-mariadb"
            },
            {
              "text": "Upgrading MySQL",
              "link": "/26.10/upgrade/upgrade-mysql"
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
              "link": "/26.10/migrate/introduction"
            },
            {
              "text": "Migrate from an EL-type OS to another EL-type OS (from a Centreon 18.10 or newer)",
              "link": "/26.10/migrate/migrate-from-el-to-el"
            },
            {
              "text": "Migrate from an EL-type OS to Debian",
              "link": "/26.10/migrate/migrate-from-el-to-debian"
            },
            {
              "text": "Migrate from Debian 11 to Debian 12",
              "link": "/26.10/migrate/migrate-from-debian-to-debian"
            },
            {
              "text": "Migrate from a Centreon 3.4 platform",
              "link": "/26.10/migrate/migrate-from-3-4"
            },
            {
              "text": "Nagios Reader to Centreon CLAPI",
              "link": "/26.10/migrate/nagios-to-centreon"
            },
            {
              "text": "Migrate a platform with Poller Display module",
              "link": "/26.10/migrate/poller-display-to-remote-server"
            },
            {
              "text": "Developer Gorgone Migrate From Centcore",
              "link": "/26.10/developer/developer-gorgone-migrate-from-centcore"
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
          "link": "/26.10/cma/cma"
        },
        {
          "text": "Setting up the agent's environment",
          "link": "/26.10/cma/cma-setup"
        },
        {
          "text": "Configuring certificates",
          "link": "/26.10/cma/cma-certificates"
        },
        {
          "text": "Using custom plugins with CMA",
          "link": "/26.10/cma/cma-custom"
        },
        {
          "text": "Centreon Monitoring Agent - Migrate from NSClient++",
          "link": "/26.10/cma/cma-migratenscpp"
        },
        {
          "text": "Troubleshooting CMA",
          "link": "/26.10/cma/cma-troubleshooting"
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
              "link": "/26.10/integrations/stream-connectors-rn"
            },
            {
              "text": "Sc Hp Bsm",
              "link": "/26.10/integrations/event-management/sc-hp-bsm"
            },
            {
              "text": "Canopsis Events",
              "link": "/26.10/integrations/data-analytics/sc-canopsis-events"
            },
            {
              "text": "Clickhouse",
              "link": "/26.10/integrations/data-analytics/sc-clickhouse"
            },
            {
              "text": "Datadog Events",
              "link": "/26.10/integrations/data-analytics/sc-datadog-events"
            },
            {
              "text": "Datadog Metrics",
              "link": "/26.10/integrations/data-analytics/sc-datadog-metrics"
            },
            {
              "text": "Elastic Events",
              "link": "/26.10/integrations/data-analytics/sc-elastic-events"
            },
            {
              "text": "Sc Elastic Metrics",
              "link": "/26.10/integrations/data-analytics/sc-elastic-metrics"
            },
            {
              "text": "HP OMI",
              "link": "/26.10/integrations/event-management/sc-hp-omi"
            },
            {
              "text": "InfluxDB 2 Metrics",
              "link": "/26.10/integrations/data-analytics/sc-influxdb2-metrics"
            },
            {
              "text": "Kafka Events",
              "link": "/26.10/integrations/data-analytics/sc-kafka-events"
            },
            {
              "text": "Logstash Events",
              "link": "/26.10/integrations/data-analytics/sc-logstash-events"
            },
            {
              "text": "Sc Opsgenie Events",
              "link": "/26.10/integrations/event-management/sc-opsgenie-events"
            },
            {
              "text": "PagerDuty Events",
              "link": "/26.10/integrations/event-management/sc-pagerduty-events"
            },
            {
              "text": "ServiceNow Event Manager Events",
              "link": "/26.10/integrations/event-management/sc-service-now-em-events"
            },
            {
              "text": "ServiceNow Incident Events",
              "link": "/26.10/integrations/event-management/sc-service-now-incident-events"
            },
            {
              "text": "Signl4 Events",
              "link": "/26.10/integrations/event-management/sc-signl4-events"
            },
            {
              "text": "Splunk Events",
              "link": "/26.10/integrations/data-analytics/sc-splunk-events"
            },
            {
              "text": "Splunk Metrics",
              "link": "/26.10/integrations/data-analytics/sc-splunk-metrics"
            },
            {
              "text": "Warp10",
              "link": "/26.10/integrations/data-analytics/sc-warp10"
            }
          ],
          "link": "/26.10/integrations/stream-connectors"
        },
        {
          "text": "ITSM",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "BMC Footprints",
              "link": "/26.10/integrations/itsm/ot-bmc-footprints"
            },
            {
              "text": "BMC Remedy",
              "link": "/26.10/integrations/itsm/ot-bmc-remedy"
            },
            {
              "text": "EasyVista API SOAP",
              "link": "/26.10/integrations/itsm/ot-easyvista"
            },
            {
              "text": "EasyVista RestAPI",
              "link": "/26.10/integrations/itsm/ot-easyvista-rest-api"
            },
            {
              "text": "GLPI",
              "link": "/26.10/integrations/itsm/ot-glpi"
            },
            {
              "text": "Ot Glpi Restapi",
              "link": "/26.10/integrations/itsm/ot-glpi-restapi"
            },
            {
              "text": "iTop",
              "link": "/26.10/integrations/itsm/ot-itop"
            },
            {
              "text": "Jira",
              "link": "/26.10/integrations/itsm/ot-jira"
            },
            {
              "text": "Mail",
              "link": "/26.10/integrations/itsm/ot-mail"
            },
            {
              "text": "Ot Otrs Restapi",
              "link": "/26.10/integrations/itsm/ot-otrs-restapi"
            },
            {
              "text": "Ot Request Tracker Restapi",
              "link": "/26.10/integrations/itsm/ot-request-tracker-restapi"
            },
            {
              "text": "Serena",
              "link": "/26.10/integrations/itsm/ot-serena"
            },
            {
              "text": "Ot Servicenow",
              "link": "/26.10/integrations/itsm/ot-servicenow"
            }
          ],
          "link": "/26.10/integrations/itsm/itsm-overview"
        },
        {
          "text": "NPM",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Widget NtopNG",
              "link": "/26.10/integrations/npm/ntopng"
            }
          ]
        }
      ],
      "link": "/26.10/integrations/introduction-integrations"
    },
    {
      "text": "Centreon mobile",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Introduction",
          "link": "/26.10/mobile/introduction"
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
          "link": "/26.10/api/introduction"
        },
        {
          "text": "Command Line API (v1) - CLAPI",
          "link": "/26.10/api/clapi"
        },
        {
          "text": "Rest API (v1)",
          "link": "/26.10/api/rest-api-v1"
        },
        {
          "text": "Using the v2 API with Postman",
          "link": "/26.10/api/rest-api-v2"
        },
        {
          "text": "Map Api",
          "link": "/26.10/api/map-api"
        },
        {
          "text": "API tokens",
          "link": "/26.10/api/api-tokens"
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
          "link": "/26.10/developer/developer-stream-connector"
        },
        {
          "text": "Developer Broker Stream Connector Migration",
          "link": "/26.10/developer/developer-broker-stream-connector-migration"
        },
        {
          "text": "Developer Widget",
          "link": "/26.10/developer/developer-widget"
        },
        {
          "text": "Mcp Server",
          "link": "/26.10/developer/mcp-server"
        },
        {
          "text": "Centreon Broker",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Developer Broker Stream Connector",
              "link": "/26.10/developer/developer-broker-stream-connector"
            },
            {
              "text": "The BBDO protocol",
              "link": "/26.10/developer/developer-broker-bbdo"
            },
            {
              "text": "Switching versions of BBDO",
              "link": "/26.10/developer/developer-broker-bbdo-switch-versions"
            },
            {
              "text": "Centreon Broker Event Mapping",
              "link": "/26.10/developer/developer-broker-mapping"
            }
          ],
          "link": "/26.10/developer/centreon-broker"
        },
        {
          "text": "Centreon Gorgone",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Developer Gorgone Client Server Communication",
              "link": "/26.10/developer/developer-gorgone-client-server-communication"
            },
            {
              "text": "Developer Gorgone Pull Mode",
              "link": "/26.10/developer/developer-gorgone-pull-mode"
            },
            {
              "text": "Developer Gorgone Rebound Mode",
              "link": "/26.10/developer/developer-gorgone-rebound-mode"
            }
          ],
          "link": "/26.10/developer/centreon-gorgone"
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
          "link": "/26.10/installation/installation-of-centreon-ha/ha-faq"
        },
        {
          "text": "Elements of a Centreon HA cluster",
          "link": "/26.10/installation/installation-of-centreon-ha/cluster-elements"
        },
        {
          "text": "How Centreon HA works",
          "link": "/26.10/installation/installation-of-centreon-ha/overview"
        },
        {
          "text": "Ha Prerequisites",
          "link": "/26.10/installation/installation-of-centreon-ha/ha-prerequisites"
        },
        {
          "text": "Centreon HA for small infrastuctures",
          "link": "/26.10/installation/installation-of-centreon-ha/ha-small"
        },
        {
          "text": "Completing your Centreon HA setup",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Integrating new pollers in a Centreon HA cluster",
              "link": "/26.10/installation/installation-of-centreon-ha/integrating-pollers"
            },
            {
              "text": "Monitoring Centreon HA",
              "link": "/26.10/administration/centreon-ha/monitoring-guide"
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
              "link": "/26.10/administration/centreon-ha/operating-guide"
            },
            {
              "text": "Troubleshooting HA",
              "link": "/26.10/administration/centreon-ha/troubleshooting-guide"
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
              "link": "/26.10/update/update-centreon-ha"
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
              "link": "/26.10/upgrade/centreon-ha/upgrade-centreon-ha-from-24-10"
            },
            {
              "text": "Upgrade Centreon Ha From 24 04",
              "link": "/26.10/upgrade/centreon-ha/upgrade-centreon-ha-from-24-04"
            },
            {
              "text": "Upgrade Centreon Ha From 23 10",
              "link": "/26.10/upgrade/centreon-ha/upgrade-centreon-ha-from-23-10"
            },
            {
              "text": "Upgrade Centreon Ha From 23 04",
              "link": "/26.10/upgrade/centreon-ha/upgrade-centreon-ha-from-23-04"
            },
            {
              "text": "Upgrade Centreon Ha From 22 10",
              "link": "/26.10/upgrade/centreon-ha/upgrade-centreon-ha-from-22-10"
            },
            {
              "text": "Upgrade Centreon Ha From 22 04",
              "link": "/26.10/upgrade/centreon-ha/upgrade-centreon-ha-from-22-04"
            },
            {
              "text": "Upgrade Centreon Ha From 21 10",
              "link": "/26.10/upgrade/centreon-ha/upgrade-centreon-ha-from-21-10"
            },
            {
              "text": "Upgrade Centreon Ha From 21 04",
              "link": "/26.10/upgrade/centreon-ha/upgrade-centreon-ha-from-21-04"
            }
          ]
        }
      ],
      "link": "/26.10/installation/installation-of-centreon-ha/centreon-ha"
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
              "link": "/26.10/releases/centreon-os"
            },
            {
              "text": "Centreon Commercial Extensions",
              "link": "/26.10/releases/centreon-commercial-extensions"
            }
          ],
          "link": "/26.10/releases/introduction"
        },
        {
          "text": "Product lifecycle policy",
          "link": "/26.10/releases/lifecycle"
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
          "link": "/26.10/security/security"
        },
        {
          "text": "Rotating keys",
          "link": "/26.10/security/key-rotation"
        },
        {
          "text": "User data storage",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "GDPR compliance",
              "link": "/26.10/security/user-data-storage/gdpr-compliance"
            },
            {
              "text": "What is Centreon CEIP?",
              "link": "/26.10/security/user-data-storage/what-is-centreon-ceip"
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
          "link": "/26.10/resources/known-issues"
        },
        {
          "text": "Troubleshooting your Centreon platform",
          "link": "/26.10/resources/troubleshooting"
        },
        {
          "text": "List of Centreon logs",
          "link": "/26.10/resources/logs"
        },
        {
          "text": "Glossary of Centreon concepts",
          "link": "/26.10/resources/glossary"
        },
        {
          "text": "Contributing to the Centreon documentation",
          "link": "/26.10/resources/contribute"
        }
      ]
    }
  ],
  "/fr/26.10/": [
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
              "link": "/fr/26.10/getting-started/which-install"
            },
            {
              "text": "Éléments d'une plateforme Centreon",
              "link": "/fr/26.10/getting-started/platform"
            },
            {
              "text": "Mettre en place sa solution gratuite IT-100",
              "link": "/fr/26.10/getting-started/IT100"
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
              "link": "/fr/26.10/getting-started/interface"
            },
            {
              "text": "Bases de la supervision",
              "link": "/fr/26.10/getting-started/concepts"
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
              "link": "/fr/26.10/getting-started/first-supervision"
            },
            {
              "text": "Superviser votre premier serveur Linux",
              "link": "/fr/26.10/getting-started/monitor-linux-server-with-snmp"
            },
            {
              "text": "Superviser votre premier serveur Windows",
              "link": "/fr/26.10/getting-started/monitor-windows-server-with-snmp"
            },
            {
              "text": "Superviser votre premier routeur Cisco",
              "link": "/fr/26.10/getting-started/monitor-cisco-router-with-snmp"
            },
            {
              "text": "Monitor Mysql Server",
              "link": "/fr/26.10/getting-started/monitor-mysql-server"
            },
            {
              "text": "Utiliser Autodiscovery pour découvrir des instances AWS EC2",
              "link": "/fr/26.10/getting-started/autodisco-aws"
            },
            {
              "text": "Monitor Printer Snmp",
              "link": "/fr/26.10/getting-started/monitor-printer-snmp"
            },
            {
              "text": "Monitor Ups Snmp",
              "link": "/fr/26.10/getting-started/monitor-ups-snmp"
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
              "link": "/fr/26.10/getting-started/actions"
            },
            {
              "text": "Créer votre premier tableau de bord",
              "link": "/fr/26.10/getting-started/create-dashboard"
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
              "link": "/fr/26.10/getting-started/create-graphical-view"
            },
            {
              "text": "Modéliser un service IT",
              "link": "/fr/26.10/getting-started/model-it-services"
            },
            {
              "text": "Analyser la disponibilité des ressources",
              "link": "/fr/26.10/getting-started/analyze-resources-availability"
            }
          ]
        }
      ],
      "link": "/fr/26.10/getting-started/welcome"
    },
    {
      "text": "Installation",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Introduction",
          "link": "/fr/26.10/installation/introduction"
        },
        {
          "text": "Compatibilité",
          "link": "/fr/26.10/installation/compatibility"
        },
        {
          "text": "Architectures",
          "link": "/fr/26.10/installation/architectures"
        },
        {
          "text": "À l'intérieur de Centreon",
          "link": "/fr/26.10/installation/inside-centreon"
        },
        {
          "text": "Prérequis",
          "link": "/fr/26.10/installation/prerequisites"
        },
        {
          "text": "Informations techniques",
          "link": "/fr/26.10/installation/technical"
        },
        {
          "text": "Téléchargements",
          "link": "/fr/26.10/installation/download"
        },
        {
          "text": "Installer un serveur central",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "À partir des paquets",
              "link": "/fr/26.10/installation/installation-of-a-central-server/using-packages"
            },
            {
              "text": "Unattended Install Central",
              "link": "/fr/26.10/installation/installation-of-a-central-server/unattended-install-central"
            },
            {
              "text": "À partir d'une VM",
              "link": "/fr/26.10/installation/installation-of-a-central-server/using-virtual-machines"
            }
          ]
        },
        {
          "text": "Installation Web",
          "link": "/fr/26.10/installation/web-and-post-installation"
        },
        {
          "text": "Installer un collecteur",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "À partir des paquets",
              "link": "/fr/26.10/installation/installation-of-a-poller/using-packages"
            },
            {
              "text": "Unattended Install Poller",
              "link": "/fr/26.10/installation/installation-of-a-poller/unattended-install-poller"
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
              "link": "/fr/26.10/installation/installation-of-a-remote-server/using-packages"
            },
            {
              "text": "Unattended Install Remote",
              "link": "/fr/26.10/installation/installation-of-a-remote-server/unattended-install-remote"
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
              "link": "/fr/26.10/monitoring/monitoring-servers/add-a-poller-to-configuration"
            },
            {
              "text": "Rattacher un serveur distant à un serveur central",
              "link": "/fr/26.10/monitoring/monitoring-servers/add-a-remote-server-to-configuration"
            },
            {
              "text": "Communications",
              "link": "/fr/26.10/monitoring/monitoring-servers/communications"
            },
            {
              "text": "Rattacher un collecteur à un serveur distant différent",
              "link": "/fr/26.10/monitoring/monitoring-servers/move-poller"
            },
            {
              "text": "Configuration avancée",
              "link": "/fr/26.10/monitoring/monitoring-servers/advanced-configuration"
            }
          ]
        },
        {
          "text": "Installation offline",
          "link": "/fr/26.10/installation/offline"
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
          "link": "/fr/26.10/administration/secure-platform"
        },
        {
          "text": "Sécurisez votre plateforme MAP",
          "link": "/fr/26.10/graph-views/secure-your-map-platform"
        },
        {
          "text": "Sécuriser votre plateforme MBI",
          "link": "/fr/26.10/reporting/secure-your-mbi-platform"
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
              "link": "/fr/26.10/monitoring/about"
            },
            {
              "text": "Comprendre les métriques",
              "link": "/fr/26.10/monitoring/metrics"
            },
            {
              "text": "Utiliser des connecteurs de supervision",
              "link": "/fr/26.10/monitoring/pluginpacks"
            },
            {
              "text": "Déployer une configuration",
              "link": "/fr/26.10/monitoring/monitoring-servers/deploying-a-configuration"
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
              "link": "/fr/26.10/monitoring/basic-objects/hosts-create"
            },
            {
              "text": "Créer un hôte manuellement",
              "link": "/fr/26.10/monitoring/basic-objects/hosts"
            },
            {
              "text": "Créer des hôtes automatiquement",
              "link": "/fr/26.10/monitoring/basic-objects/hosts-create-disco"
            },
            {
              "text": "Utiliser des modèles d'hôtes",
              "link": "/fr/26.10/monitoring/basic-objects/hosts-templates"
            },
            {
              "text": "Modifier le serveur de supervision pour un hôte",
              "link": "/fr/26.10/monitoring/basic-objects/hosts-switch-poller"
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
              "link": "/fr/26.10/monitoring/basic-objects/services-create"
            },
            {
              "text": "Créer un service manuellement",
              "link": "/fr/26.10/monitoring/basic-objects/services"
            },
            {
              "text": "Créer des services automatiquement",
              "link": "/fr/26.10/monitoring/basic-objects/services-create-disco"
            },
            {
              "text": "Utiliser des modèles de services",
              "link": "/fr/26.10/monitoring/basic-objects/services-templates"
            },
            {
              "text": "Créer des méta-services",
              "link": "/fr/26.10/monitoring/basic-objects/meta-services"
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
              "link": "/fr/26.10/monitoring/discovery/introduction"
            },
            {
              "text": "Installation",
              "link": "/fr/26.10/monitoring/discovery/installation"
            },
            {
              "text": "Découvrir des hôtes automatiquement",
              "link": "/fr/26.10/monitoring/discovery/hosts-discovery"
            },
            {
              "text": "Découvrir des services automatiquement",
              "link": "/fr/26.10/monitoring/discovery/services-discovery"
            },
            {
              "text": "Administration",
              "link": "/fr/26.10/monitoring/discovery/administration"
            },
            {
              "text": "Dépanner les incidents sur la découverte des hôtes",
              "link": "/fr/26.10/monitoring/discovery/troubleshooting-hosts-discovery"
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
              "link": "/fr/26.10/monitoring/groups"
            },
            {
              "text": "Catégories et criticités",
              "link": "/fr/26.10/monitoring/categories"
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
              "link": "/fr/26.10/monitoring/basic-objects/timeperiods"
            },
            {
              "text": "Les macros",
              "link": "/fr/26.10/monitoring/basic-objects/macros"
            },
            {
              "text": "Les commandes",
              "link": "/fr/26.10/monitoring/basic-objects/commands"
            },
            {
              "text": "Actions génériques",
              "link": "/fr/26.10/monitoring/generic-actions"
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
              "link": "/fr/26.10/monitoring/anomaly-detection"
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
              "link": "/fr/26.10/monitoring/passive-monitoring/enable-snmp-traps"
            },
            {
              "text": "Définition des Traps SNMP",
              "link": "/fr/26.10/monitoring/passive-monitoring/create-snmp-traps-definitions"
            },
            {
              "text": "Monitoring SNMP Traps",
              "link": "/fr/26.10/monitoring/passive-monitoring/monitoring-with-snmp-traps"
            },
            {
              "text": "Déboguer la gestion des traps SNMP",
              "link": "/fr/26.10/monitoring/passive-monitoring/debug-snmp-traps-management"
            },
            {
              "text": "Dynamic Service Management",
              "link": "/fr/26.10/monitoring/passive-monitoring/dsm"
            }
          ]
        },
        {
          "text": "Auto Remediation",
          "link": "/fr/26.10/monitoring/event-handler"
        },
        {
          "text": "Import/Export",
          "link": "/fr/26.10/monitoring/web-import-export"
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
              "link": "/fr/26.10/alerts-notifications/concepts"
            },
            {
              "text": "Page Statut des ressources",
              "link": "/fr/26.10/alerts-notifications/resources-status"
            },
            {
              "text": "Consoles d'évènements",
              "link": "/fr/26.10/alerts-notifications/event-console"
            },
            {
              "text": "Journal des évènements",
              "link": "/fr/26.10/alerts-notifications/event-log"
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
              "link": "/fr/26.10/alerts-notifications/acknowledge"
            },
            {
              "text": "Planifier un temps d'arrêt",
              "link": "/fr/26.10/alerts-notifications/downtimes"
            },
            {
              "text": "Soumettre un résultat",
              "link": "/fr/26.10/alerts-notifications/submit"
            },
            {
              "text": "Autres actions",
              "link": "/fr/26.10/alerts-notifications/other"
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
              "link": "/fr/26.10/alerts-notifications/notif-concept"
            },
            {
              "text": "Configurer les notifications",
              "link": "/fr/26.10/alerts-notifications/notif-configuration"
            },
            {
              "text": "Types de notifications",
              "collapsible": true,
              "collapsed": true,
              "items": [
                {
                  "text": "Notifications par email",
                  "link": "/fr/26.10/alerts-notifications/notif-email"
                },
                {
                  "text": "Notifications Microsoft Teams",
                  "link": "/fr/26.10/alerts-notifications/notif-config-for-teams"
                },
                {
                  "text": "Sms Notifications",
                  "link": "/fr/26.10/integrations/notifications/sms-notifications"
                },
                {
                  "text": "Slack Notifications",
                  "link": "/fr/26.10/integrations/notifications/slack-notifications"
                },
                {
                  "text": "Notifications Telegram",
                  "link": "/fr/26.10/integrations/notifications/plugin-telegram"
                }
              ]
            },
            {
              "text": "Les dépendances",
              "link": "/fr/26.10/alerts-notifications/notif-dependencies"
            },
            {
              "text": "Les escalades de notifications",
              "link": "/fr/26.10/alerts-notifications/notif-escalation"
            },
            {
              "text": "Bagotement (flapping)",
              "link": "/fr/26.10/alerts-notifications/notif-flapping"
            },
            {
              "text": "Pour aller plus loin",
              "link": "/fr/26.10/alerts-notifications/notif-advanced"
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
              "link": "/fr/26.10/alerts-notifications/ticketing-install"
            },
            {
              "text": "Configuration",
              "link": "/fr/26.10/alerts-notifications/ticketing"
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
          "link": "/fr/26.10/monitoring/basic-objects/contacts"
        },
        {
          "text": "Créer des utilisateurs/contacts manuellement",
          "link": "/fr/26.10/monitoring/basic-objects/contacts-create"
        },
        {
          "text": "Utiliser des modèles de contacts",
          "link": "/fr/26.10/monitoring/basic-objects/contacts-templates"
        },
        {
          "text": "Utiliser des groupes de contacts",
          "link": "/fr/26.10/monitoring/basic-objects/contacts-groups"
        },
        {
          "text": "Gérer les droits des utilisateurs Centreon (ACL)",
          "link": "/fr/26.10/administration/access-control-lists"
        },
        {
          "text": "Changer les paramètres de votre compte Centreon",
          "link": "/fr/26.10/monitoring/basic-objects/customization"
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
          "link": "/fr/26.10/service-mapping/introduction"
        },
        {
          "text": "Guide",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Gestion",
              "link": "/fr/26.10/service-mapping/ba-management"
            },
            {
              "text": "Supervision",
              "link": "/fr/26.10/service-mapping/ba-monitoring"
            },
            {
              "text": "Reporting",
              "link": "/fr/26.10/service-mapping/ba-reporting"
            },
            {
              "text": "Paramètres",
              "link": "/fr/26.10/service-mapping/ba-settings"
            },
            {
              "text": "Widgets",
              "link": "/fr/26.10/service-mapping/widgets"
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
              "link": "/fr/26.10/service-mapping/install"
            },
            {
              "text": "Mettre à jour l'extension",
              "link": "/fr/26.10/service-mapping/update"
            },
            {
              "text": "Monter de version l'extension",
              "link": "/fr/26.10/service-mapping/upgrade"
            },
            {
              "text": "Installer sur un Remote Server",
              "link": "/fr/26.10/service-mapping/remote-server"
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
          "link": "/fr/26.10/alerts-notifications/dashboards"
        },
        {
          "text": "Graphiques de performance",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Gestion des graphiques",
              "link": "/fr/26.10/metrology/chart-management"
            },
            {
              "text": "Chart Template",
              "link": "/fr/26.10/metrology/chart-template"
            },
            {
              "text": "Chart Curves",
              "link": "/fr/26.10/metrology/chart-curves"
            },
            {
              "text": "Chart Virtual Metrics",
              "link": "/fr/26.10/metrology/chart-virtual-metrics"
            },
            {
              "text": "Visualiser des données Centreon dans Grafana",
              "link": "/fr/26.10/metrology/grafana"
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
              "link": "/fr/26.10/graph-views/introduction-map"
            },
            {
              "text": "Installer MAP",
              "link": "/fr/26.10/graph-views/map-web-install"
            },
            {
              "text": "Installer MAP sur un serveur distant",
              "link": "/fr/26.10/graph-views/map-web-install-remote"
            },
            {
              "text": "Mettre à jour MAP",
              "link": "/fr/26.10/graph-views/map-web-update"
            },
            {
              "text": "Monter de version MAP",
              "link": "/fr/26.10/graph-views/map-web-upgrade"
            },
            {
              "text": "Gérer les droits d'accès dans MAP",
              "link": "/fr/26.10/graph-views/map-web-access"
            },
            {
              "text": "Gérer les cartes dans MAP",
              "link": "/fr/26.10/graph-views/map-web-manage"
            },
            {
              "text": "Créer une carte standard",
              "link": "/fr/26.10/graph-views/map-web-create-standard-map"
            },
            {
              "text": "Créer une vue géographique",
              "link": "/fr/26.10/graph-views/map-web-create-geoview"
            },
            {
              "text": "Migrer l'extension",
              "link": "/fr/26.10/graph-views/map-web-migrate"
            },
            {
              "text": "Configuration avancée dans MAP",
              "link": "/fr/26.10/graph-views/map-web-advanced-configuration"
            },
            {
              "text": "Paramètres avancés dans MAP",
              "link": "/fr/26.10/graph-views/map-web-advanced"
            },
            {
              "text": "Sauvegarder et restaurer votre serveur Centreon MAP",
              "link": "/fr/26.10/graph-views/map-web-backup-restore"
            },
            {
              "text": "Problèmes connus dans MAP",
              "link": "/fr/26.10/graph-views/map-web-known-issues"
            },
            {
              "text": "Dépannage de MAP",
              "link": "/fr/26.10/graph-views/map-web-troubleshooting"
            },
            {
              "text": "Map Api",
              "link": "/fr/26.10/api/map-api"
            }
          ]
        },
        {
          "text": "Vues personnalisées (legacy)",
          "link": "/fr/26.10/alerts-notifications/custom-views"
        },
        {
          "text": "Rapports de disponibilité",
          "link": "/fr/26.10/alerts-notifications/availability"
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
          "link": "/fr/26.10/reporting/introduction"
        },
        {
          "text": "Concepts MBI",
          "link": "/fr/26.10/reporting/concepts"
        },
        {
          "text": "Comment fonctionne MBI ?",
          "link": "/fr/26.10/reporting/how-mbi-works"
        },
        {
          "text": "Installer MBI",
          "link": "/fr/26.10/reporting/installation"
        },
        {
          "text": "Utiliser MBI",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Préparer les données pour pouvoir générer des rapports",
              "link": "/fr/26.10/reporting/preparing-data"
            },
            {
              "text": "Générer des rapports grâce aux tâches planifiées",
              "link": "/fr/26.10/reporting/generating-reports"
            },
            {
              "text": "Publier vos rapports",
              "link": "/fr/26.10/reporting/reports-publication-rule"
            },
            {
              "text": "Donner accès aux rapports et tâches dans Centreon",
              "link": "/fr/26.10/reporting/share"
            },
            {
              "text": "Widgets MBI",
              "link": "/fr/26.10/reporting/widgets"
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
              "link": "/fr/26.10/reporting/troubleshooting"
            },
            {
              "text": "Reconstruire les données MBI",
              "link": "/fr/26.10/reporting/rebuilding-data"
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
              "link": "/fr/26.10/reporting/backup-restore"
            },
            {
              "text": "Mise à jour de l'extension",
              "link": "/fr/26.10/reporting/update"
            },
            {
              "text": "Monter de version l'extension",
              "link": "/fr/26.10/reporting/upgrade"
            },
            {
              "text": "Migrer l'extension",
              "link": "/fr/26.10/reporting/migrate"
            },
            {
              "text": "Créer des rapports personnalisés",
              "link": "/fr/26.10/reporting/report-development"
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
              "link": "/fr/26.10/reporting/available-reports/ba-monitoring-reports"
            },
            {
              "text": "Rapports disponibilité et événements",
              "link": "/fr/26.10/reporting/available-reports/availability-events-reports"
            },
            {
              "text": "Rapports de performance",
              "link": "/fr/26.10/reporting/available-reports/performance-reports"
            },
            {
              "text": "Rapports de stockage",
              "link": "/fr/26.10/reporting/available-reports/storage-reports"
            },
            {
              "text": "Rapports de réseau",
              "link": "/fr/26.10/reporting/available-reports/network-reports"
            },
            {
              "text": "Rapports de virtualisation",
              "link": "/fr/26.10/reporting/available-reports/virtualization-reports"
            },
            {
              "text": "Rapports de consommation électrique",
              "link": "/fr/26.10/reporting/available-reports/electric-consumption-reports"
            },
            {
              "text": "Rapports de profiling",
              "link": "/fr/26.10/reporting/available-reports/profiling-reports"
            },
            {
              "text": "Rapports d'inventaire et de configuration",
              "link": "/fr/26.10/reporting/available-reports/inventory-configuration-reports"
            },
            {
              "text": "Rapports de diagnostic de la base de données",
              "link": "/fr/26.10/reporting/available-reports/database-diagnostics-reports"
            }
          ],
          "link": "/fr/26.10/reporting/available-reports/available-reports"
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
              "link": "/fr/26.10/administration/parameters/centreon-ui"
            },
            {
              "text": "Supervision",
              "link": "/fr/26.10/administration/parameters/monitoring"
            },
            {
              "text": "Gorgone",
              "link": "/fr/26.10/administration/parameters/gorgone"
            },
            {
              "text": "RRDTool",
              "link": "/fr/26.10/administration/parameters/rrdtool"
            },
            {
              "text": "Débogage",
              "link": "/fr/26.10/administration/parameters/debug"
            },
            {
              "text": "Gestion des données",
              "link": "/fr/26.10/administration/parameters/data-management"
            },
            {
              "text": "Medias",
              "link": "/fr/26.10/administration/parameters/medias"
            }
          ]
        },
        {
          "text": "Customize Centreon",
          "link": "/fr/26.10/administration/customize-centreon"
        },
        {
          "text": "Paramétrer la connexion à Centreon",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Configurer une authentification locale",
              "link": "/fr/26.10/connect/loginpwd"
            },
            {
              "text": "Connecter Centreon à un annuaire LDAP",
              "link": "/fr/26.10/administration/parameters/ldap"
            },
            {
              "text": "Configurer une authentification par SSO",
              "link": "/fr/26.10/connect/sso"
            },
            {
              "text": "Configurer une authentification par OpenId Connect",
              "link": "/fr/26.10/connect/openid"
            },
            {
              "text": "Configurer une authentification par SAML",
              "link": "/fr/26.10/connect/saml"
            },
            {
              "text": "Configurer une authentification par Autologin",
              "link": "/fr/26.10/connect/autologin"
            }
          ]
        },
        {
          "text": "Extensions",
          "link": "/fr/26.10/administration/extensions"
        },
        {
          "text": "Licences",
          "link": "/fr/26.10/administration/licenses"
        },
        {
          "text": "Partitionnement des bases de données",
          "link": "/fr/26.10/administration/database-partitioning"
        },
        {
          "text": "Reprise après sinistre",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Sauvegarder et restaurer votre serveur central",
              "link": "/fr/26.10/administration/backup"
            },
            {
              "text": "Sauvegarder et restaurer vos collecteurs",
              "link": "/fr/26.10/administration/backup-poller"
            }
          ],
          "link": "/fr/26.10/administration/disaster-recovery"
        },
        {
          "text": "Base de connaissance",
          "link": "/fr/26.10/administration/knowledge-base"
        },
        {
          "text": "Journalisation des modifications de configuration",
          "link": "/fr/26.10/administration/logging-configuration-changes"
        },
        {
          "text": "Statistiques de la plateforme",
          "link": "/fr/26.10/administration/platform-statistics"
        },
        {
          "text": "Configurer l'envoi d'emails",
          "link": "/fr/26.10/administration/postfix"
        },
        {
          "text": "Optimiser le trafic vers les bases de données",
          "link": "/fr/26.10/administration/sql-proxy"
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
              "link": "/fr/26.10/update/update-centreon-platform"
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
              "link": "/fr/26.10/upgrade/introduction"
            },
            {
              "text": "Montée de version depuis Centreon 24.10",
              "link": "/fr/26.10/upgrade/upgrade-from-24-10"
            },
            {
              "text": "Montée de version depuis Centreon 24.04",
              "link": "/fr/26.10/upgrade/upgrade-from-24-04"
            },
            {
              "text": "Montée de version depuis Centreon 23.10",
              "link": "/fr/26.10/upgrade/upgrade-from-23-10"
            },
            {
              "text": "Montée de version depuis Centreon 23.04",
              "link": "/fr/26.10/upgrade/upgrade-from-23-04"
            },
            {
              "text": "Montée de version depuis Centreon 22.10",
              "link": "/fr/26.10/upgrade/upgrade-from-22-10"
            },
            {
              "text": "Montée de version depuis Centreon 22.04",
              "link": "/fr/26.10/upgrade/upgrade-from-22-04"
            },
            {
              "text": "Montée de version depuis Centreon 21.10",
              "link": "/fr/26.10/upgrade/upgrade-from-21-10"
            },
            {
              "text": "Montée de version depuis Centreon 21.04",
              "link": "/fr/26.10/upgrade/upgrade-from-21-04"
            },
            {
              "text": "Montée de version depuis Centreon 20.10",
              "link": "/fr/26.10/upgrade/upgrade-from-20-10"
            },
            {
              "text": "Mettre à jour MariaDB",
              "link": "/fr/26.10/upgrade/upgrade-mariadb"
            },
            {
              "text": "Mettre à jour MySQL",
              "link": "/fr/26.10/upgrade/upgrade-mysql"
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
              "link": "/fr/26.10/migrate/introduction"
            },
            {
              "text": "Migrer depuis un OS de type EL vers un autre OS de type EL (depuis un Centreon 18.10 ou plus récent)",
              "link": "/fr/26.10/migrate/migrate-from-el-to-el"
            },
            {
              "text": "Migrer depuis un OS de type EL vers Debian",
              "link": "/fr/26.10/migrate/migrate-from-el-to-debian"
            },
            {
              "text": "Migrer depuis Debian 11 vers Debian 12",
              "link": "/fr/26.10/migrate/migrate-from-debian-to-debian"
            },
            {
              "text": "Migration depuis une plateforme Centreon 3.4",
              "link": "/fr/26.10/migrate/migrate-from-3-4"
            },
            {
              "text": "Nagios Reader vers Centreon CLAPI",
              "link": "/fr/26.10/migrate/nagios-to-centreon"
            },
            {
              "text": "Migration d'une plate-forme avec Poller Display",
              "link": "/fr/26.10/migrate/poller-display-to-remote-server"
            },
            {
              "text": "Developer Gorgone Migrate From Centcore",
              "link": "/fr/26.10/developer/developer-gorgone-migrate-from-centcore"
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
          "link": "/fr/26.10/cma/cma"
        },
        {
          "text": "Configurer l’environnement de l’agent",
          "link": "/fr/26.10/cma/cma-setup"
        },
        {
          "text": "Configurer les certificats",
          "link": "/fr/26.10/cma/cma-certificates"
        },
        {
          "text": "Utiliser des plugins personnalisés avec CMA",
          "link": "/fr/26.10/cma/cma-custom"
        },
        {
          "text": "Migrer vers CMA depuis NSClient++",
          "link": "/fr/26.10/cma/cma-migratenscpp"
        },
        {
          "text": "Dépanner l'agent CMA",
          "link": "/fr/26.10/cma/cma-troubleshooting"
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
              "link": "/fr/26.10/integrations/stream-connectors-rn"
            },
            {
              "text": "Sc Hp Bsm",
              "link": "/fr/26.10/integrations/event-management/sc-hp-bsm"
            },
            {
              "text": "Canopsis Events",
              "link": "/fr/26.10/integrations/data-analytics/sc-canopsis-events"
            },
            {
              "text": "Clickhouse",
              "link": "/fr/26.10/integrations/data-analytics/sc-clickhouse"
            },
            {
              "text": "Datadog Events",
              "link": "/fr/26.10/integrations/data-analytics/sc-datadog-events"
            },
            {
              "text": "Datadog Metrics",
              "link": "/fr/26.10/integrations/data-analytics/sc-datadog-metrics"
            },
            {
              "text": "Elastic Events",
              "link": "/fr/26.10/integrations/data-analytics/sc-elastic-events"
            },
            {
              "text": "Sc Elastic Metrics",
              "link": "/fr/26.10/integrations/data-analytics/sc-elastic-metrics"
            },
            {
              "text": "Sc Hp Omi",
              "link": "/fr/26.10/integrations/event-management/sc-hp-omi"
            },
            {
              "text": "InfluxDB 2 Metrics",
              "link": "/fr/26.10/integrations/data-analytics/sc-influxdb2-metrics"
            },
            {
              "text": "Kafka Events",
              "link": "/fr/26.10/integrations/data-analytics/sc-kafka-events"
            },
            {
              "text": "Logstash Events",
              "link": "/fr/26.10/integrations/data-analytics/sc-logstash-events"
            },
            {
              "text": "Sc Opsgenie Events",
              "link": "/fr/26.10/integrations/event-management/sc-opsgenie-events"
            },
            {
              "text": "PagerDuty Events",
              "link": "/fr/26.10/integrations/event-management/sc-pagerduty-events"
            },
            {
              "text": "ServiceNow Event Manager Events",
              "link": "/fr/26.10/integrations/event-management/sc-service-now-em-events"
            },
            {
              "text": "ServiceNow Incident Events",
              "link": "/fr/26.10/integrations/event-management/sc-service-now-incident-events"
            },
            {
              "text": "Signl4 Events",
              "link": "/fr/26.10/integrations/event-management/sc-signl4-events"
            },
            {
              "text": "Splunk Events",
              "link": "/fr/26.10/integrations/data-analytics/sc-splunk-events"
            },
            {
              "text": "Splunk Metrics",
              "link": "/fr/26.10/integrations/data-analytics/sc-splunk-metrics"
            },
            {
              "text": "Warp10",
              "link": "/fr/26.10/integrations/data-analytics/sc-warp10"
            }
          ],
          "link": "/fr/26.10/integrations/stream-connectors"
        },
        {
          "text": "ITSM",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "BMC Footprints",
              "link": "/fr/26.10/integrations/itsm/ot-bmc-footprints"
            },
            {
              "text": "BMC Remedy",
              "link": "/fr/26.10/integrations/itsm/ot-bmc-remedy"
            },
            {
              "text": "EasyVista API SOAP",
              "link": "/fr/26.10/integrations/itsm/ot-easyvista"
            },
            {
              "text": "EasyVista API Rest",
              "link": "/fr/26.10/integrations/itsm/ot-easyvista-rest-api"
            },
            {
              "text": "GLPI",
              "link": "/fr/26.10/integrations/itsm/ot-glpi"
            },
            {
              "text": "Ot Glpi Restapi",
              "link": "/fr/26.10/integrations/itsm/ot-glpi-restapi"
            },
            {
              "text": "iTop",
              "link": "/fr/26.10/integrations/itsm/ot-itop"
            },
            {
              "text": "Jira",
              "link": "/fr/26.10/integrations/itsm/ot-jira"
            },
            {
              "text": "Mail",
              "link": "/fr/26.10/integrations/itsm/ot-mail"
            },
            {
              "text": "Ot Otrs Restapi",
              "link": "/fr/26.10/integrations/itsm/ot-otrs-restapi"
            },
            {
              "text": "Ot Request Tracker Restapi",
              "link": "/fr/26.10/integrations/itsm/ot-request-tracker-restapi"
            },
            {
              "text": "Serena",
              "link": "/fr/26.10/integrations/itsm/ot-serena"
            },
            {
              "text": "Ot Servicenow",
              "link": "/fr/26.10/integrations/itsm/ot-servicenow"
            }
          ],
          "link": "/fr/26.10/integrations/itsm/itsm-overview"
        },
        {
          "text": "NPM",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Widget NtopNG",
              "link": "/fr/26.10/integrations/npm/ntopng"
            }
          ]
        }
      ],
      "link": "/fr/26.10/integrations/introduction-integrations"
    },
    {
      "text": "Centreon mobile",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "text": "Introduction",
          "link": "/fr/26.10/mobile/introduction"
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
          "link": "/fr/26.10/api/introduction"
        },
        {
          "text": "Command Line API (v1) - CLAPI",
          "link": "/fr/26.10/api/clapi"
        },
        {
          "text": "Rest API (v1)",
          "link": "/fr/26.10/api/rest-api-v1"
        },
        {
          "text": "Utiliser l'API v2 avec Postman",
          "link": "/fr/26.10/api/rest-api-v2"
        },
        {
          "text": "Map Api",
          "link": "/fr/26.10/api/map-api"
        },
        {
          "text": "Jetons d'API",
          "link": "/fr/26.10/api/api-tokens"
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
          "link": "/fr/26.10/developer/developer-stream-connector"
        },
        {
          "text": "Developer Broker Stream Connector Migration",
          "link": "/fr/26.10/developer/developer-broker-stream-connector-migration"
        },
        {
          "text": "Comment écrire un widget",
          "link": "/fr/26.10/developer/developer-widget"
        },
        {
          "text": "Mcp Server",
          "link": "/fr/26.10/developer/mcp-server"
        },
        {
          "text": "Centreon Broker",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Developer Broker Stream Connector",
              "link": "/fr/26.10/developer/developer-broker-stream-connector"
            },
            {
              "text": "Le protocole BBDO",
              "link": "/fr/26.10/developer/developer-broker-bbdo"
            },
            {
              "text": "Changer de version de BBDO",
              "link": "/fr/26.10/developer/developer-broker-bbdo-switch-versions"
            },
            {
              "text": "Mapping d’évènements Centreon Broker",
              "link": "/fr/26.10/developer/developer-broker-mapping"
            }
          ],
          "link": "/fr/26.10/developer/centreon-broker"
        },
        {
          "text": "Centreon Gorgone",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Developer Gorgone Client Server Communication",
              "link": "/fr/26.10/developer/developer-gorgone-client-server-communication"
            },
            {
              "text": "Developer Gorgone Pull Mode",
              "link": "/fr/26.10/developer/developer-gorgone-pull-mode"
            },
            {
              "text": "Developer Gorgone Rebound Mode",
              "link": "/fr/26.10/developer/developer-gorgone-rebound-mode"
            }
          ],
          "link": "/fr/26.10/developer/centreon-gorgone"
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
          "link": "/fr/26.10/installation/installation-of-centreon-ha/ha-faq"
        },
        {
          "text": "Éléments d'un cluster Centreon HA",
          "link": "/fr/26.10/installation/installation-of-centreon-ha/cluster-elements"
        },
        {
          "text": "Fonctionnement de Centreon HA",
          "link": "/fr/26.10/installation/installation-of-centreon-ha/overview"
        },
        {
          "text": "Ha Prerequisites",
          "link": "/fr/26.10/installation/installation-of-centreon-ha/ha-prerequisites"
        },
        {
          "text": "Centreon HA pour les petites infrastructures",
          "link": "/fr/26.10/installation/installation-of-centreon-ha/ha-small"
        },
        {
          "text": "Completing your Centreon HA setup",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Intégrer des collecteurs dans un cluster Centreon HA",
              "link": "/fr/26.10/installation/installation-of-centreon-ha/integrating-pollers"
            },
            {
              "text": "Superviser Centreon HA",
              "link": "/fr/26.10/administration/centreon-ha/monitoring-guide"
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
              "link": "/fr/26.10/administration/centreon-ha/operating-guide"
            },
            {
              "text": "Dépanner la HA",
              "link": "/fr/26.10/administration/centreon-ha/troubleshooting-guide"
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
              "link": "/fr/26.10/update/update-centreon-ha"
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
              "link": "/fr/26.10/upgrade/centreon-ha/upgrade-centreon-ha-from-24-10"
            },
            {
              "text": "Upgrade Centreon Ha From 24 04",
              "link": "/fr/26.10/upgrade/centreon-ha/upgrade-centreon-ha-from-24-04"
            },
            {
              "text": "Upgrade Centreon Ha From 23 10",
              "link": "/fr/26.10/upgrade/centreon-ha/upgrade-centreon-ha-from-23-10"
            },
            {
              "text": "Upgrade Centreon Ha From 23 04",
              "link": "/fr/26.10/upgrade/centreon-ha/upgrade-centreon-ha-from-23-04"
            },
            {
              "text": "Upgrade Centreon Ha From 22 10",
              "link": "/fr/26.10/upgrade/centreon-ha/upgrade-centreon-ha-from-22-10"
            },
            {
              "text": "Upgrade Centreon Ha From 22 04",
              "link": "/fr/26.10/upgrade/centreon-ha/upgrade-centreon-ha-from-22-04"
            },
            {
              "text": "Upgrade Centreon Ha From 21 10",
              "link": "/fr/26.10/upgrade/centreon-ha/upgrade-centreon-ha-from-21-10"
            },
            {
              "text": "Upgrade Centreon Ha From 21 04",
              "link": "/fr/26.10/upgrade/centreon-ha/upgrade-centreon-ha-from-21-04"
            }
          ]
        }
      ],
      "link": "/fr/26.10/installation/installation-of-centreon-ha/centreon-ha"
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
              "link": "/fr/26.10/releases/centreon-os"
            },
            {
              "text": "Centreon Commercial Extensions",
              "link": "/fr/26.10/releases/centreon-commercial-extensions"
            }
          ],
          "link": "/fr/26.10/releases/introduction"
        },
        {
          "text": "Politique de cycle de vie des solutions",
          "link": "/fr/26.10/releases/lifecycle"
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
          "link": "/fr/26.10/security/security"
        },
        {
          "text": "Rotation de clés",
          "link": "/fr/26.10/security/key-rotation"
        },
        {
          "text": "Stockage des données utilisateur",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "text": "Conformité RGPD",
              "link": "/fr/26.10/security/user-data-storage/gdpr-compliance"
            },
            {
              "text": "Qu'est-ce que Centreon CEIP?",
              "link": "/fr/26.10/security/user-data-storage/what-is-centreon-ceip"
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
          "link": "/fr/26.10/resources/known-issues"
        },
        {
          "text": "Dépannage de la plateforme Centreon",
          "link": "/fr/26.10/resources/troubleshooting"
        },
        {
          "text": "Liste des logs Centreon",
          "link": "/fr/26.10/resources/logs"
        },
        {
          "text": "Glossaire des concepts Centreon",
          "link": "/fr/26.10/resources/glossary"
        },
        {
          "text": "Contribuer à la documentation Centreon",
          "link": "/fr/26.10/resources/contribute"
        }
      ]
    }
  ]
};
