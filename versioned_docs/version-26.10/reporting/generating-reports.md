---
id: generating-reports
title: Generating reports using jobs
---

> MBI is a Centreon extension that has some terms you may not have heard elsewhere in our documentation. We strongly suggest you read the [**Concepts** page](concepts.md) before following MBI-related procedures.

Reports are created using jobs. A job is a report definition, that can include several output formats, and several publication modes.

## Step 1: Create a new job

1. Make sure you have [prepared your data](preparing-data.md) as per the MBI requirements.
2. Go to **Reporting > Monitoring Business Intelligence > Jobs**.  
3. Click the **Add** button to create a new job.
4. On the **Configuration** tab, in the **Report design** field, select the report template you want. Each report template contains specific data: use our [catalog of available reports](available-reports/available-reports.md) to choose the template best suited to your needs (once you have selected a report template, the contents of the [**Report parameters** tab](#define-report-specific-parameters) display the options concerning this specific report template).

## Step 2: Configure the job

Go to the **Configuration** tab of the job creation page.

### Configure the main parameters

In the **Job Configuration** section of the **Configuration** tab:

* Enter a **Name** for the job. This will also be the name of the generated report in the **Reporting > Monitoring Business Intelligence > Report view** page.  
* Select the **Language** of the report: you can generate reports in French or English (ignore the refresh icon next to the list).
* Select the **Output formats** you want for this report: bear in mind that not all report designs support all formats. Refer to the [catalog of available reports](available-reports/available-reports.md) to find out which outputs are supported for the report design you selected.  
* Select the [**job groups**](concepts.md#job-groups) you want so as to [share your report with other non-admin users](share.md):
   * They will be able to edit the job (if they have the correct ACL to access the **Reporting > Monitoring Business Intelligence > Jobs** page).
   * They will be able to see the generated report in the **Reporting > Monitoring Business Intelligence > Report view** page (if they have the correct ACL to access this page).
   * This is not the same as [publishing your report for other users](reports-publication-rule.md), which is done using the **Publication** tab.

### Schedule job execution

In the **Scheduling parameters** section of the **Configuration** tab:

* Select an **Execution mode**:
   - **Immediate execution**: specify the reporting period (i.e. the time range) covered by the report. The report will be generated when you click the **Save** button once you have finished configuring the job. (Note that if you uncheck the **Periods** box, the report will be blank.)
   - **Scheduled execution**, choose between:
     - **Regular basis**: Executes at defined intervals (daily, weekly or monthly) and uses its own interval as the reporting period i.e. weekly reports contain information about the past week.
     - **One shot job**: Executes once at the scheduled time. You need to specify the reporting period (i.e. the time range) covered by the report. (Note that if you uncheck the **Periods** box, the report will be blank.)
* If needed, select a **State**:
   - **Schedule** (default): The job will run at the intended time.
   - **Stop**: The job will be put hold and will just not be run.
   - **Finished**: Select **Schedule** and save to run again.
   - **Failed**: Checked after a job was canceled because of an error, select **Schedule** after resolving the issue to rerun.

### Define report-specific parameters

Go to the **Report Parameters** tab of the job configuration page. The contents of this tab varies according to the report design you selected on the [**Configuration** tab](#configure-the-main-parameters) (it will be empty if no report design is selected yet).

* Typically, fields will allow you to define which host groups, host categories and service categories to include in the report. Fields with two sections (**Available/Selected**) must have at least one category or group in the **Selected** section.
* You may need to select which **time periods** to include in the report.

### Select publication rules to share your generated report (optional)

If you want to share the generated reports for example via email or on a server, go to the **Publication** tab of the configuration page.

Select the [**Publication rules**](reports-publication-rule.md) you want.

- Global rules are not listed on this tab, but they are applied automatically every time the job is executed.
- Reports with custom rules will be sent every time they are generated, based on the job's schedule.

### Adjust tuning options (optional)

If you want to define extra settings for your job, go to the **Tuning** tab of the configuration page.

- Select a **Report color theme**. The default color scheme is defined in the scheduler options when configuring MBI.  
- Set the **Job weight multiplicator** to increase job priority if MBI cannot generate all scheduled reports at once.  
- **Enable administrator notification** for administrators to be alerted whenever this report is generated. This option must be enabled in the **Reporting > Monitoring Business Intelligence > General Options** page, under **Notification options**.

## Step 3: Save the job

Once you are satisfied with its configuration, save the job.

* The job appears in the list of jobs in the **Reporting > Monitoring Business Intelligence > Jobs** page. An icon on the left shows you the current status of the job (scheduled, running, failed, stopped, finished).
* Once generated, reports will be available on the **Reporting > Monitoring Business Intelligence > Report view** page. Click the output icons on the right to download them.

Ran into any issues? Try [troubleshooting](troubleshooting.md) your configuration.
