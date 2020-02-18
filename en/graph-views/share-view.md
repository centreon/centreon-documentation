---
id: share-view
title: Share a view
---

If you want to share a view to someone that may not know Centreon and/or don't
want to have to connect to Centreon but only see a Centreon Map view, you can
create a dedicated limited account and give access only to dedicated menu,
actions & views.

How to create the URL :

  - Have a dedicated limited account & copy its autologin key & user name (ex:
    partner-1 & `autologin key = 23d501aa0\[\...\]8bf4fbc8a`)

  - Know the direct link to go to you view (ex:
    `https://demo.centreon.com/centreon/main.php?p=288#renderGate/View1/xxxx/`).

    *You can retrieve the URL by using the "Copy to clipboard" shortcut next to
    the breadcrumb.*

  - Decide to hide Centreon menu or not (ex: add *\&min=1* to the URL to minify
    the menu)

Here is an example that uses our demo platform so the user (partner-1) directly
accesses the view in full screen mode (no menu)

    https://demo.centreon.com/centreon/main.php?autologin=1&min=1&useralias=partner-1&token=23d501aa07a2ebd7cd2d1480d782f898bf4fbc8a&p=288#renderGate/122355/122354/HILLMORE%20Insurance
