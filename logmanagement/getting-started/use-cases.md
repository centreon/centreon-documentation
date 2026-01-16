---
id: use-cases
title: Use cases
---

Centreon Log Management enables you to detect and resolve a wide variety of issues in an IT system, ranging from minor errors to major incidents. Here are a few concrete examples of what CLM can help you detect from analyzing missing logs, unexpected log types, or unusual log volumes:

## Integration and communication issues between services

* **Microservices or API failures**: If a service interacting with other services or APIs does not respond or fails, this will often be recorded in the logs (e.g., HTTP errors such as 500, 503, or 404).

* **Data inconsistency**: For example, if expected data is not received or sent correctly between different services or components, this can generate error or conflict logs.

* **Synchronization issues**: Errors in the processing of message queues or asynchronous events can be identified by CLM.

## Server or infrastructure issues

* **Full or failing disks**: System logs may indicate errors related to insufficient disk space or failing disks, which can cause system failure.

* **Missing or insufficient system resources**: A lack of memory, network bandwidth, or CPU capacity may be revealed by logs indicating resource failures or "out of memory" errors.

* **Server failures**: If a server shuts down unexpectedly or experiences a hardware failure (such as a hard drive issue or overload), this will typically appear in the system logs.

## Performance anomalies

* **Abnormally long response times**: If an API or application starts responding much more slowly than usual, logs can reveal the underlying causes (e.g., request overload, insufficient server resources).

* **Memory leaks**: Logs of excessive memory consumption or abnormal growth in memory usage can be detected.

* **Excessive CPU or system resource consumption**: Spikes in CPU or system resource usage can be identified, helping to pinpoint bottlenecks.

## Application errors

* **Code issues**: Exceptions or errors in an application's code, such as null pointer exceptions, syntax errors, or logic errors, can be easily identified in the logs.

* **Database connection failure**: If an application fails to connect to a database, CLM can report relevant error messages.

* **Configuration errors**: For example, a configuration error in a settings file (such as an incorrect port, API key, or missing configurations).

## Compatibility or update issues

* **Problems after an update**: After deploying or updating an application, errors or unexpected behavior may appear in the logs.

* **Version incompatibility**: Conflicts between different versions of software, tools, or libraries can be identified in the error logs.

## Automation and batch issues

* **Failed batch processes or automated jobs**: If an automated job or batch script fails, CLM can display the associated errors.

* **Scheduling issues**: For example, if a cron job fails to run correctly at a given time, this may be reported in the logs.

## Compliance issues

* **Violation of security rules or policies**: If actions or login attempts do not comply with security or compliance rules (e.g., attempts to access without strong authentication), they can be detected.

* **Non-compliance with data retention policies**: Logs can be used to verify that data is retained in accordance with internal policies or legal requirements (such as the GDPR).

## Availability and scalability issues

* **Service outages (downtime)**: If a service goes down, this can be detected in server, application, or database logs.

* **Decreased ability to respond to requests**: Logs can also help detect a lack of resources or overload that prevents services from handling a high volume of requests.

## Security incidents

* **Failed login attempts or brute force attacks**: If a user or attacker repeatedly tries to log in to a system without success, this generates logs that can be analyzed to detect brute force attack attempts.

* **Intrusions or unauthorized access**: Logs can reveal attempts to gain unauthorized access to sensitive systems or applications (e.g., alerts for permission changes, connections to a server without a valid key, etc.).

* **Suspicious activity**: Abnormal behavior in logs, such as logins at unusual times or from suspicious geographic locations, can be detected.

## Network issues

* **Network failures**: CLM can capture error messages related to network connectivity issues (e.g., failed connections to remote servers).

* **Timeout errors**: Connection or communication failures between services (e.g., a server that does not respond within the expected time frame) can be detected in the logs.

## Examples of questions you can find answers to

* Which service is generating the most errors today?”
* Which services have changed their behavior after deployment?”
* Which resources have started issuing a new type of error?”
* Which endpoint is causing the most warnings?”