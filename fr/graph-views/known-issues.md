---
id: known-issues
title: Known issues
---

Below is a list of know issues and/or bugs you may encounter when using
Centreon MAP. We try to provide workarounds. We apply fixes when
necessary and are forever improving our software in order to solve any
issues for future releases.

  ----------------------------------------------------------------------------------------
  Issues                        Workaround if exists
  ----------------------------- ----------------------------------------------------------
  In some rare case, the        To update the content: Restart Centreon Map Service (type:
  content of a container may    systemctl restart centreon-map) and contact support so
  not seem modifiable. In fact, we can analyze your platform.
  it can be edited but the      
  rendering is not updated on   
  the client side.              

  You may occasionally          Adjust the element\'s size or label for a
  encounter illogical word      perfect rendering on the web interface (though
  wrapping on the web interface maybe not on the desktop client).
  (words split in middle).      

  Your desktop client may time  This may be linked to the time it takes to
  out for no apparent reason,   transfer data. Open the Centreon-Map4.ini file
  causing you to be             on the desktop client and add -Dread.timeout=600
  disconnected and return to    at the end. Then restart the desktop client to
  the login page. This may      apply the changes.
  occur when starting up the    
  desktop client or migrating   
  from MAP 3 to MAP 4.          

  An unwanted pop-up appears on On the Centreon MAP server, run the following
  the desktop client showing    script:
  hexadecimal data. This can be /etc/centreon-studio/findSpecialCharacters.sh.
  due to some special UTF-8     It will locate any special characters. If the
  characters that may appear in script does not highlight any characters, please
  the Centreon configuration or contact us. This script requires a MariaDB user
  real-time database, making    with select, create and drop privileges on the
  XML files invalid.            \"centreon\" database.

  When you add host groups to a Zoom out until you see the hosts.
  geographic view displayed in  
  a widget, the hosts are not   
  correctly positioned.         

  In the view list, you cannot  Press *Enter* to enter the view.
  enter a view by clicking on   
  it.                           

  A polygon is not correctly    Call images instead of drawing polygons.
  rendered, especially after    
  being resized.                

  The message, \"The Map server Ignore this message.
  is disconnected from          
  Broker,\" may occasionally    
  appear on the desktop client. 

  On the web interface, when    
  you double click on a process 
  widget, the underlying        
  command is not executed on    
  the target host.              

  Deleting images on the        Restart the desktop client so deleted image(s)
  Centreon central server is    disappear
  not instantaneously aplied to 
  desktop client                

  When you create a gauge with  Adjust the size of the gauge.
  a width \< 200 and height \<  
  80 the result displayed may   
  differ between the web &      
  desktop clients.              

  Polygon resize may not work   We advice you to recreate them if the rendering
  as expected                   fails on the web client
  ------------------------------------------------------------------------------
