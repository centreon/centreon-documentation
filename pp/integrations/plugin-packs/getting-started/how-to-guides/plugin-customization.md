---
id: plugin-customization
title: Customizing plugin behavior
---

Le connecteur de supervision HTTP Server
créer un hôte
appliquer template
exporter la conf, les services aussi sont créés
un check est fait - commande du service response time (temps que prend la page html à répondre)
vérifier qu'on obtient bien la page demandée et pas juste une réponse d'erreur ou de maintenance
donc personnaliser e check de service
personnaliser le comportament du plugin
--help : options d'output
filter perfdata=time : garde uniquement le time


Let’s count the number of running php-fpm workers to monitor the usage of my centreon server

If I want it to be CRITICAL when it is higher than a value:

--critical='5'



/usr/lib/centreon/plugins//centreon_linux_snmp.pl --plugin=os::linux::snmp::plugin --mode=processcount --hostname=127.0.0.1 --snmp-version='2c' --snmp-community='public'  --process-name='php-fpm' --process-path='' --process-args='' --regexp-name --regexp-path --regexp-args --warning='' --critical='5' 
CRITICAL: Number of current processes running: 11 | 'nbproc'=11;;0:5;0;
or --critical='0:5'



/usr/lib/centreon/plugins//centreon_linux_snmp.pl --plugin=os::linux::snmp::plugin --mode=processcount --hostname=127.0.0.1 --snmp-version='2c' --snmp-community='public'  --process-name='php-fpm' --process-path='' --process-args='' --regexp-name --regexp-path --regexp-args --warning='' --critical='0:5' 
CRITICAL: Number of current processes running: 6 | 'nbproc'=6;;0:5;0;
(both syntaxes have exactly the same meaning)

 

If I want it to be CRITICAL when it is lower than a value --critical='5:'



/usr/lib/centreon/plugins//centreon_linux_snmp.pl --plugin=os::linux::snmp::plugin --mode=processcount --hostname=127.0.0.1 --snmp-version='2c' --snmp-community='public'  --process-name='php-fpm' --process-path='' --process-args='' --regexp-name --regexp-path --regexp-args --warning='' --critical='5:' 
OK: Number of current processes running: 9 | 'nbproc'=9;;5:;0;
 

If I raise the threshold (--critical='15:')



/usr/lib/centreon/plugins//centreon_linux_snmp.pl --plugin=os::linux::snmp::plugin --mode=processcount --hostname=127.0.0.1 --snmp-version='2c' --snmp-community='public'  --process-name='php-fpm' --process-path='' --process-args='' --regexp-name --regexp-path --regexp-args --warning='' --critical='10:' 
CRITICAL: Number of current processes running: 8 | 'nbproc'=8;;10:;0;
 

 

If I want it to be CRITICAL when the metric is whithin a range of values:



/usr/lib/centreon/plugins//centreon_linux_snmp.pl --plugin=os::linux::snmp::plugin --mode=processcount --hostname=127.0.0.1 --snmp-version='2c' --snmp-community='public'  --process-name='php-fpm' --process-path='' --process-args='' --regexp-name --regexp-path --regexp-args --warning='' --critical='@0:5' 
OK: Number of current processes running: 9 | 'nbproc'=9;;@0:5;0;
 

If I want it to be CRITICAL when the metric is out of a range of values:



/usr/lib/centreon/plugins//centreon_linux_snmp.pl --plugin=os::linux::snmp::plugin --mode=processcount --hostname=127.0.0.1 --snmp-version='2c' --snmp-community='public'  --process-name='php-fpm' --process-path='' --process-args='' --regexp-name --regexp-path --regexp-args --warning='' --critical='5:15'
OK: Number of current processes running: 13 | 'nbproc'=13;;5:15;0;

First try



/usr/lib/centreon/plugins//centreon_protocol_http.pl --plugin=apps::protocols::http::plugin --mode=response --hostname=www.centreon.com --proto='http' --port='80' --urlpath='/' --warning=''  --critical=''  
OK: response time 0.277s | 'time'=0.277s;;;0; 'size'=158714B;;;0;
 



/usr/lib/centreon/plugins/centreon_protocol_http.pl --plugin apps::protocols::http::plugin --mode response --hostname www.centreon.com --debug
[a lot of HTTP headers & content and then, the page itself:]
<!doctype html>
<html lang="en-US">

<head>

  <script src="<https://consent.cookiefirst.com/sites/centreon.com-e0d6e6f9-8610-4eee-947f-f39412d646c4/consent.js"></script>>

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'<https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);>
})(window,document,'script','dataLayer','GTM-NXRRTR6');</script>
<!-- End Google Tag Manager -->

<!-- Start of HubSpot Embed Code -->
<script type="text/javascript" id="hs-script-loader" async defer src="//js-eu1.hs-scripts.com/26072647.js"></script>
<!-- End of HubSpot Embed Code -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
<link rel="alternate" hreflang="en" href="<https://www.centreon.com"> />
<link rel="alternate" hreflang="fr" href="<https://www.centreon.com/fr/"> />
<link rel="alternate" hreflang="it" href="<https://www.centreon.com/it/"> />
<link rel="alternate" hreflang="es" href="<https://www.centreon.com/es/"> />
<link rel="alternate" hreflang="de" href="<https://www.centreon.com/de/"> />
<link rel="alternate" hreflang="x-default" href="<https://www.centreon.com"> />
...
What can I do to make sure I get my page?



[centreon-engine@central-al9-23-04 ~]$ /usr/lib/centreon/plugins/centreon_protocol_http.pl --plugin apps::protocols::http::plugin --mode expected-content --hostname www.centreon.com --expected-string='Best-in-Class Hybrid IT Monitoring for Enterprise'
OK: HTTP test(s) | 'size'=158714B;;;0; 'time'=0.186s;;;0;
[centreon-engine@central-al9-23-04 ~]$ /usr/lib/centreon/plugins/centreon_protocol_http.pl --plugin apps::protocols::http::plugin --mode expected-content --hostname www.centreon.com --expected-string='Best-in-Class Hybrid IT Mon itoring for Enterprise'
CRITICAL: Content test [filter: '%{content} !~ /Best-in-Class Hybrid IT Mon itoring for Enterprise/mi'] | 'size'=158714B;;;0; 'time'=0.195s;;;0;
 

How to customize the output?



/usr/lib/centreon/plugins/centreon_protocol_http.pl --plugin apps::protocols::http::plugin --mode expected-content --hostname www.centreon.com --expected-string='Best-in-Class Hybrid IT Monitoring for Enterprise' --change-short-output='OK: HTTP test\(s\)~Expected content found~g'
Expected content found | 'size'=158714B;;;0; 'time'=0.262s;;;0;
How to get only the metrics I’m interested in? => Remove size



/usr/lib/centreon/plugins/centreon_protocol_http.pl --plugin apps::protocols::http::plugin --mode expected-content --hostname www.centreon.com --expected-string='Best-in-Class Hybrid IT Monitoring for Enterprise' --filter-perfdata=time
OK: HTTP test(s) | 'time'=0.259s;;;0;
Alternate way:



/usr/lib/centreon/plugins/centreon_protocol_http.pl --plugin apps::protocols::http::plugin --mode expected-content --hostname www.centreon.com --expected-string='Best-in-Class Hybrid IT Monitoring for Enterprise' --filter-perfdata-adv='(%(label) eq "time")'
OK: HTTP test(s) | 'time'=0.255s;;;0;
Very simple use of --change-perfdata:



/usr/lib/centreon/plugins/centreon_protocol_http.pl --plugin apps::protocols::http::plugin --mode expected-content --hostname www.centreon.com --expected-string='Best-in-Class Hybrid IT Monitoring for Enterprise'  --change-perfdata='time,response-time'
OK: HTTP test(s) | 'size'=158714B;;;0; 'response-time'=0.287s;;;0;
If you want to remove the former metric “time”, then go to Administration  >  Parameters  >  Data  (not available in cloud) search for your host/service and clic on the service. Then select the metric(s) you want to remove and choose “Delete graphs”.



imaginons que mon plugin me ramène total space, used space ET free space, mais je ne veux garder que free space

utiliser



 --filter-perfdata
Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.
donc

--filter-perfdata="free"