---
id: use-cases
title: Use cases
description: Common use cases for detecting and resolving IT issues with logs
---

<!-- évaluer un nombre de lignes de logs basé sur un pattern, seuil fixe (ou anomaly detection). -->

Centreon Log Management enables you to detect and resolve a wide variety of issues in an IT system, ranging from minor errors to major incidents. Many typical Log Management use cases focus on root cause analysis. Here are a few concrete examples of what Log Management can help you detect from analyzing missing logs, unexpected log types, or unusual log volumes.

## Integration and communication issues between services

### Microservices or API failures

If a service interacting with other services or APIs does not respond or fails, this will often be recorded in the logs (e.g., HTTP errors such as 500, 503, or 404).

* [Alert rule](../alerts.md) (count): Track failed requests from a specific service (HTTP 4xx and 5xx) to detect service or API failures quickly. Example of query that could be used in such an alert rule:

   ```shell
   service_name:"my-service" AND attributes.http.response.status_code >= 400 AND attributes.http.response.status_code < 600
   ```

### Data inconsistency

For example, if expected data is not received or sent correctly between different services or components, this can generate error or conflict logs. The query you will use in your alert will depend on what your service or component returns (for instance, "missing argument", "bad deserialization of json" in the **body.message** attribute - or the corresponding HTTP code).

### Synchronization issues

Errors in the processing of message queues or asynchronous events can be identified by Log Management. You can detect these by filtering the log explorer on the service name (service_name:"synchronization service").

## Server or infrastructure issues

<!-- * **Full or failing disks**: System logs may indicate errors related to insufficient disk space or failing disks, which can cause system failure. -->
<!-- cas d'un problème disque, mais qui est rempli qu'à 50%. on essaye de comprendre pourquoi. syslog dit que le kernel remonte problème de connexion -->
<!-- 
* **Missing or insufficient system resources**: A lack of memory, network bandwidth, or CPU capacity may be revealed by logs indicating resource failures or "out of memory" errors. -->

### Server failures

If a server experiences a hardware failure (such as a hard drive issue or overload), this will typically appear in the system logs.
Root cause analysis can be performed in the log explorer.

<!-- ## Performance anomalies -> metrics

* **Abnormally long response times**: If an API or application starts responding much more slowly than usual, logs can reveal the underlying causes (e.g., request overload, insufficient server resources).

* **Memory leaks**: Logs of excessive memory consumption or abnormal growth in memory usage can be detected.

* **Excessive CPU or system resource consumption**: Spikes in CPU or system resource usage can be identified, helping to pinpoint bottlenecks. -->

## Application errors

### Code issues

Exceptions or errors in an application's code, such as null pointer exceptions, syntax errors, or logic errors, can be easily identified in the logs.

* [Alert rule](../alerts.md) (count): Trigger an alert if there are X or more exception messages in 5 minutes, indicating a potential problem in the application. Example of query that could be used in such an alert rule:

   ```shell
   service_name:"my-app" AND severity_number>"17" AND body.message:"this is an exception"
   ```

### Database connection failure

If an application fails to connect to a database, Log Management can report relevant error messages. You would typically detect these in the log explorer.

### Configuration errors

For example, a configuration error in a settings file (such as an incorrect port, API key, or missing configurations).

## Compatibility or update issues

### Problems after an update

After deploying or updating an application, errors or unexpected behavior may appear in the logs.

A typical example is deploying a configuration change to a small set of test machines. You would monitor the logs in the log explorer in real time to spot any issues, filtering by the service name or namespace you are updating.

### Version incompatibility

Conflicts between different versions of software, tools, or libraries can be identified in the error logs. Your query will depend on the type of messages returned by your application.

## Automation and batch issues

### Failed batch processes or automated jobs

If an automated job or batch script fails, Log Management can display the associated errors.

Examples:

* A nightly batch updates and synchronizes financial data across systems: all operations must succeed. Create an alert rule that detects every single failure.
* A service copies files every night: this is a less critical case, failures can be detected in the morning using filtering the log explorer.

### Scheduling issues

For example, if a cron job fails to run correctly at a given time, this may be reported in the logs.

## Compliance issues

### Violation of security rules or policies

If actions or login attempts do not comply with security or compliance rules (e.g., attempts to access without strong authentication), they can be detected.

* Create an alert rule on the number of login attempts.

<!-- * **Non-compliance with data retention policies**: Logs can be used to verify that data is retained in accordance with internal policies or legal requirements (such as the GDPR). -->

## Availability and scalability issues

<!-- * **Service outages (downtime)**: If a service goes down, this can be detected in server, application, or database logs. -->

### Decreased ability to respond to requests

Logs can also help detect a lack of resources or overload that prevents services from handling a high volume of requests.

* Create an alert rule on the corresponding HTTP code.

## Security incidents

### Failed login attempts or brute force attacks

If a user or attacker repeatedly tries to log in to a system without success, this generates logs that can be analyzed to detect brute force attack attempts.

* [Alert rule](../alerts.md) (count): Trigger an alert when there are more than x failed SSH login attempts within a given time window. Example of query that could be used in such an alert rule:

   ```shell
   event.type:"ssh_login" AND attributes.http.response.status_code >= 400 AND attributes.http.response.status_code < 500
   ```

### Intrusions or unauthorized access

Logs can reveal attempts to gain unauthorized access to sensitive systems or applications (e.g., alerts for permission changes, connections to a server without a valid key, etc.).

* [Alert rule](../alerts.md) (count) : Trigger a CRITICAL alert event if the number of logs recording access attempts to a specific GitHub repository is higher than 0 for users that do not belong to **my_github_group**. Example of query that could be used in such an alert rule:

   ```shell
   repo:"my-github-repo" AND attributes.http.response.status_code IS NOT NULL AND NOT user_groups:"my_github_group"
   ```

<!-- * **Suspicious activity**: Abnormal behavior in logs, such as logins at unusual times or from suspicious geographic locations, can be detected. -->

## Network issues

<!-- * **Network failures**: Log Management can capture error messages related to network connectivity issues (e.g., failed connections to remote servers). -->

### Timeout errors

Connection or communication failures between services (e.g., a server that does not respond within the expected time frame) can be detected in the logs. For example, 10 timeouts out of 100 requests suggest a problem, compared to 10 timeouts out of 1,000,000 requests.

* [Alert rule](../alerts.md) (ratio): Trigger an alert when the ratio of HTTP 408 responses (timeouts) exceeds X%. This indicates that too many requests are timing out. To calculate this ratio, you could use queries like these: <!--(attribute.http.response.status_code)-->

   * Query to divide: 
      ```shell
      service:"my-service" AND attributes.http.response.status_code IS NOT NULL
      ```

   * Query to divide by:
      ```shell
      service:"my-service" AND attributes.http.response.status_code = 408
      ```

## Examples of questions you can find answers to

* Which service is generating the most errors today? Filter the [timeline](../log-explorer.md) on today, then filter by severitynumber>17. Stack the graph by service name.
* Which services have changed their behavior after deployment? In the log explorer, filter by the service name or namespace, and check for any errors.
<!-- * Which resources have started issuing a new type of error?” anomaly detection -->
<!-- * Which endpoint is causing the most warnings? filtrer sur warning, filtrer sur endpoint -->
