---
id: share
title: Giving access to jobs and reports in Centreon
description: "Share MBI jobs and generated reports with non-admin users"
---

* Administrators can see and edit all jobs (created by all users on the platform), and can see all generated reports.
* By default, non-admin users can see no jobs and no generated reports. If you want to make it possible for a user to download a report from the Centreon interface and/or to edit jobs, you need first to [link a job group to an MBI ACL rule](#preparing-acls), then [link the job group to the job you want to share](#using-a-job-group-in-a-job-definition).

A much simpler option is to send the generated report to this user by email or copy the report to a server they can access, using a [publication rule](reports-publication-rule.md).

Please note that the data included in the report depends on the ACLs **of the person creating the job**. It is the responsibility of the person creating the job to make sure that the resources included in the report are authorized for the users with which they want to share the report.

## Preparing ACLs

1. Make sure your users belong to an [access group](../administration/access-control-lists.md#creating-an-access-group). Check [which menus your users can access](../administration/access-control-lists.md#access-filters-on-menus): at this step, for instance, you can choose to give them access to the list of generated reports but not to the list of jobs so that they cannot edit jobs.
2. Go to **Reporting > Monitoring Business Intelligence > Job groups** and create a new job group.
3. Go to **Administration > ACL > ACL rules** and create a new ACL rule for MBI.
   * On the **General information** tab, add the access groups you want.  
   * On the **Report designs** tab, select the report designs that these users will be able to use.
   * on the **Jobs** tab, select the job groups you want to give access to (you may have to save the rule and edit it again before the list of jobs/job groups is refreshed).

## Using a job group in a job definition

When [creating a job](generating-reports.md) (on the **Reporting > Monitoring Business Intelligence > Jobs** page), in the **Job Configuration** section of the **Configuration** tab, link a job group to your job so as to apply the ACLs you have defined.
