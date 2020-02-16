Prerequisites
=============

+--------------+-------------------------+
| **Software** | **Compatible Versions** |
+--------------+-------------------------+
| **Centreon** | 19.10.x                 |
+--------------+-------------------------+

License
--------

A license file is required in order to use Centreon BAM.

To generate the license, we need the *fingerprint* of the machine on which the Centreon BAM interface is installed (central server).
The fingerprint is generated using Centreon Fingerprint which is packaged in the RPM and available in the Centreon repository.

Install the Centreon Fingerprint binary.

::

   # yum install centreon-fingerprint

Execute Centreon Fingerprint

::

   # centreon-fingerprint

The machine fingerprint will be displayed in the console.

After you provide the fingerprint to Centreon Support, it will generate the license file required for you to use Centreon BAM Server. You will install
it during the BAM installation procedure.