---
id: how-mbi-works
title: How does MBI work?
---


MBI works in 3 disjointed phases: the regular Centreon cronjob, a dedicated cronjob for its ETL and the report generation of CBIS

Because each phase is independent of the others, they each have their own configuration to implement. 
Improper configuration in any of the 3 phases will cause the report generation to fail.


The regular cronjob collects the raw data of the resources
The ETL organizes it and stocks in the database
CBIS picks out the data that is relevant for the report and generates it.