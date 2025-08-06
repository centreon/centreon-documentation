---
id: generating-reports
title: Generating reports using jobs
---

> MBI is a Centreon extension that has some terms you may not have heard elsewhere in our documentation. We strongly suggest you read the [concepts page](concepts.md) before following MBI-related procedures.

Reports are created using jobs. A job is a report definition, that can include several output formats, and several publication modes.

## Create a new job

1. Make sure you have [prepared your data](preparing-data.md) as per the MBI requirements.
2. Go to **Reporting > Monitoring Business Intelligence > Jobs**.  
3. Click the **Add** button to create a new job.
4. On the **Configuration** tab, in the **Report design** field, select the report template you want. Each report template contains specific data: use our [catalog of available reports](available-reports/available-reports.md) to choose the template best suited to your needs.
   
   Once you have selected a report template, the contents of the **Report parameters** tab changes

## Configure the job

on the Configuration tab

### Job Configuration

1. Enter a **name** for the job. This will also be the name of the generated report.  
3. Select the **language** of the report: you can generate reports in French or English. (Ignore the spinning arrows icon next to the language field.)
4. Choose the **output formats** for the report.  
   > Not all designs support all formats. Refer to the [available reports catalog](available-reports/available-reports.md) to avoid errors.  
5. Select the appropriate [**job groups**](concepts.md#job-groups) that determine who can access the report.

### Scheduling Parameters

1. Choose the **execution type**:
   - For **immediate jobs**, specify the **reporting period**.
   - For **scheduled jobs**, choose between:
     - **Regular job**: Executes at defined intervals (daily, weekly, etc.) and uses its own interval as the reporting period i.e. weekly reports contain information about the past week.
     - **One shot job**: Executes once at the scheduled time. Set the **reporting period** manually.
2. Set the **State**:
   - **Schedule** (default): Job runs at the intended time.
   - **Stop**: Puts the job on hold, preventing it from running.
   - **Finished**: Select **Schedule** and save to run again.
   - **Failed**: Checked after a job was canceled because of an error, select **Schedule** after resolving the issue to rerun.


## Define Report Parameters

Go to the **Report Parameters** tab.

> This tab will be empty if no report design was selected in the [configuration tab](#job-configuration).

Fill all fields based on the selected report design.  
    - Fields vary depending on the design.  
    - Fields requiring category selection must have at least one category on the **right side**.  
Select the **time periods** to define which hours are included in the report.

The following steps are optional. You may save the job now. Reports will be available under **Reporting > Monitoring Business Intelligence > Report view**.

## Set Publication Rules

Go to the **Publication** tab

Select the [**publication rules**](concepts.md#publication-rules) to apply.  
- **Global rules**, like the default, are not listed but applied automatically.  
- Reports with custom rules will be sent every time they are generated, based on the job's schedule.

## Adjust Tuning Options

Go to the **Tuning** tab

- Select a **theme** for the report. The default is set in the scheduler options when configuring MBI.  
- Set the **job weight multiplicator** to increase job priority if MBI cannot generate all scheduled reports at once.  
- Enable **administrator notification** for administrators to be alerted whenever this report is generated.  
> **Note:** Administrator notifications must first be enabled in **Reporting > Monitoring Business Intelligence > General Options, Notification options**.


You have now configured a job for generating reports with Centreon MBI, save the job for it to start running. Reports will be available under **Reporting > Monitoring Business Intelligence > Report view**.
