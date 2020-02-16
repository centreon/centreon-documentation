Installing on a *Centreon Remote Server*
=========================================

Installing Centreon BAM on the Centreon Remote Server
-------------------------------------------------------

The procedure for installing the Centreon BAM module on a Centreon Remote Server is the same as  
on a Central server, however configuration and uninstallation are different.

* If your Centreon Remote Server has not yet been installed, please refer to the following `documentation <https://documentation.centreon.com/docs/centreon/en/latest/administration_guide/poller/install_remote_server.html>`_.
* Refer to the :ref:`Centreon BAM installation documentation <install>`.
* Follow the extra steps described below.

.. _ref_Conf_Broker_Poller:

Configuring Centreon Broker
---------------------------

.. Warning: This is only compatible with Centreon Remote Server >= 18.10

Configuring the Centreon BAM module on a Centreon Remote Server requires configuring the Centreon Broker *from* the 
Centreon Central Server. This allows the Centreon Remote Server to manage calculations on Centreon BAM. The configuration will be automatically sent 
to the Centreon Remote Server when you export your business activities to the Centreon Remote Server from the central server.

To do so, you need to modify the Centreon Broker Master configuration of the Centeon Remote poller.
Go to the **Configuration > Pollers > Broker configuration** menu and edit the remote poller configuration.

In the Output tab, select **BAM - Monitoring engine (BAM)** and click on **Add**: 

.. image:: ../images/remote-server/conf_poller_bam_monitoring.png
    :align: center

Please consult the following table for the appropriate field values:

+-------------------------------------+-------------------------------------------------------------------------+
|             **Fields**              |                               **Values**                                |
+=====================================+=========================================================================+
| **Name**                            | remote-server-bam-monitoring                                            |
+-------------------------------------+-------------------------------------------------------------------------+
| **Filter category**                 |                                                                         |
+-------------------------------------+-------------------------------------------------------------------------+
| **Storage DB Name**                 | centreon_storage                                                        |
+-------------------------------------+-------------------------------------------------------------------------+
| **Cache**                           | No                                                                      |
+-------------------------------------+-------------------------------------------------------------------------+
| **Replication enabled**             | No                                                                      |
+-------------------------------------+-------------------------------------------------------------------------+
| **Command file path**               | /var/lib/centreon-engine/rw/centengine.cmd                              |
+-------------------------------------+-------------------------------------------------------------------------+
| **DB host**                         | localhost                                                               |
+-------------------------------------+-------------------------------------------------------------------------+
| **DB name**                         | centreon                                                                |
+-------------------------------------+-------------------------------------------------------------------------+
| **DB password**                     | *Retrieve it from  /etc/centreon/conf.pm on the Centreon Remote Server* |
+-------------------------------------+-------------------------------------------------------------------------+
| **DB port**                         | 3306                                                                    |
+-------------------------------------+-------------------------------------------------------------------------+
| **DB type**                         | MySQL                                                                   |
+-------------------------------------+-------------------------------------------------------------------------+
| **DB user**                         | centreon                                                                |
+-------------------------------------+-------------------------------------------------------------------------+
| **Maximum queries per transaction** | 0                                                                       |
+-------------------------------------+-------------------------------------------------------------------------+
| **Transaction commit timeout**      |                                                                         |
+-------------------------------------+-------------------------------------------------------------------------+
| **Retry interval**                  |                                                                         |
+-------------------------------------+-------------------------------------------------------------------------+

Select the **BAM - BI engine (BAM)** configuration type and click on **Add**:

.. image:: ../images/remote-server/conf_poller_bam_reporting.png
    :align: center

Please consult the following table for the appropriate field values:

+-------------------------------------+-------------------------------------------------------------------------+
|             **Fields**              |                               **Values**                                |
+=====================================+=========================================================================+
| **Name**                            | remote-server-bam-reporting                                             |
+-------------------------------------+-------------------------------------------------------------------------+
| **Filter category**                 | BAM                                                                     |
+-------------------------------------+-------------------------------------------------------------------------+
| **Replication enabled**             | No                                                                      |
+-------------------------------------+-------------------------------------------------------------------------+
| **DB host**                         | localhost                                                               |
+-------------------------------------+-------------------------------------------------------------------------+
| **DB name**                         | centreon_storage                                                        |
+-------------------------------------+-------------------------------------------------------------------------+
| **DB password**                     | *Retrieve it from  /etc/centreon/conf.pm on the Centreon Remote Server* |
+-------------------------------------+-------------------------------------------------------------------------+
| **DB port**                         | 3306                                                                    |
+-------------------------------------+-------------------------------------------------------------------------+
| **DB type**                         | MySQL                                                                   |
+-------------------------------------+-------------------------------------------------------------------------+
| **DB user**                         | centreon                                                                |
+-------------------------------------+-------------------------------------------------------------------------+
| **Maximum queries per transaction** | 0                                                                       |
+-------------------------------------+-------------------------------------------------------------------------+
| **Transaction commit timeout**      |                                                                         |
+-------------------------------------+-------------------------------------------------------------------------+
| **Retry interval**                  |                                                                         |
+-------------------------------------+-------------------------------------------------------------------------+

To complete the installation process, generate and export the Centreon Remote Server configuration by selecting **Restart**.

Uninstalling the Centreon BAM module
-------------------------------------

To uninstall the Centreon BAM module from a remote server you would follow the same procedure as on the Centreon central server.

You should also remove the above **Output** and in order to fully delete the Centreon BAM calculation system from 
the Centreon Remote Server. Perform this task from the **Configuration > Pollers > Broker configuration** menu on the
de Centreon Broker and also in the configuration of the Centreon Remote Server where the Centreon BAM has been uninstalled.
