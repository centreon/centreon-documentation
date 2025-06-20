---
id: generating-reports
title: Generating reports
---

MBI is a Centreon extension that has some terms you may not have heard elsewhere in our documentation. We strongly suggest you read the [concepts page](concepts.md) before following MBI-related procedures.


# Jobs
"Report templates" as the new term 

Reporting > MBI > jobs > add
Configuration
specify the use of the “state” field

Report parameters
page is vague out of necessity because its contents depend on the report template/design but should still be clear on its purpose
Report publication
properly explain how to add publication rules
Specify jobs determine the frequency of the reports, not the publication rules and review the "send MBI reports by email" part, specifically the frequency of the emails sent. That frequency is the same as the frequency of report generation specified in the job (daily, weekly or monthly), the report is automtically sent each time it is generated (double check this last point).

Tuning
Choosing a default theme does not mean one creates their own color palette for their reports. It is actually only to allow the user to choose one of our existing themes as the default theme.


Need to clarify what job groups are, the name can misdirect users: one would expect them to be a group of jobs similar to host groups or contact groups but they are actually more similar to ACLs, determining who can access each report


# Publication tab

used to apply the publication rules which in turn determine what is done with the generated report (i.e. who it is sent to and how)
