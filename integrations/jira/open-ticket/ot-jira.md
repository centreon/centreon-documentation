# Jira Open ticket connector

## Table of contents
1. [How it works] (#how-it-works)
2. [Compatibility] (#compatibility)
3. [Requirements] (#requirements)
4. [Possibilities] (#possibilities)

## How it works <a name="how-it-works"></a>
The Jira provider connects to your Itop server and retrieve data through the Jira REST API.

![architecture](img/ot-jira-architecture.png)

## Compatibility <a name="compatibility"></a>
This integration is (at least) compatible with Jira cloud

## Requirements
Before going any further, make sure that you correctly setup [centreon-open-ticket](https://documentation.centreon.com/docs/centreon-open-tickets/en/latest/installation/index.html)
into your Centreon instance

Our provider requires the following parameters:

| Parameter | Example of value |
| --------- | ---------------- |
| Address | xxxxx.atlassian.net |
| Rest Api Resource | /rest/api/latest/ |
| Username | MyUser |
| Password | MyPassword |
| Timeout | 60 |

## Possibilities <a name="possibilities"></a>
As of now, the provider is able to retrieve the following objects from Jira:

- Project
- Priority
- Assignee
- Issue type
