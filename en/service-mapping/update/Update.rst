Updating and upgrading
======================

1. Update the package
-----------------------

In order to update the Centreon BAM module using an RPM package, execute the following command: 

::

 #yum update centreon-bam-server
 
  
2. Updating through the interface
----------------------------------

Log on to the Centreon web interface and go to the **Administration > Manager** menu. 

Click on the orange button to update the module, do the same for Centreon BAM widget.
 
Alternative: updating from a source package
*******************************************

You can also update the interface using the following package:

* centreon-bam-server-$version$-phpXX.tar.gz

.. Warning:: Follow the procedure as root user.


Decompress the package and follow the update procedure:::

  tar zxf centreon-bam-server-$version$-phpXX.tar.gz
  cd centreon-bam-server-$version$-phpXX/
  ./install.sh -i

Finish this by updating the module on the interface (section above).