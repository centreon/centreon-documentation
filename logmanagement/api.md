---
id: api
title: API
---

Centreon Log Management exposes a REST API that gives you full programmatic access to the platform. Anything you can do in the UI — searching logs, managing alerts, configuring inputs — you can automate through the API.

## What can you do with the API?

| Area | Examples |
|---|---|
| **Log search** | Query logs with filters, time ranges, and aggregations. Build custom dashboards or feed data into external tools. |
| **Alerts** | Create, update, delete, and list alert rules programmatically. Sync alert configurations across environments. |
| **Inputs & configuration** | Manage log sources and ingestion settings without touching the UI. |
| **Integration** | Connect CLM to your CI/CD pipelines, incident management tools, or internal platforms. |

## Getting started

### Base URL

All API endpoints are available at:

```
https://api.euwest1.obs.mycentreon.com/v1
```

### Authentication

API requests require a bearer token. You can generate one from the CLM interface:

1. Go to **Settings > API tokens**.
2. Click **Generate token**, give it a name and an expiration date.
3. Copy the token — it will only be shown once.

Then include it in every request:

```bash
curl -H "Authorization: Bearer <YOUR_TOKEN>" \
     https://api.euwest1.obs.mycentreon.com/v1/logs/search
```

### Quick example: search logs

```bash
curl -X POST \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "query": "severity:error AND service:nginx",
    "from": "2026-03-17T00:00:00Z",
    "to": "2026-03-17T12:00:00Z",
    "limit": 50
  }' \
  https://api.euwest1.obs.mycentreon.com/v1/logs/search
```

### Quick example: create an alert

```bash
curl -X POST \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "High error rate on nginx",
    "query": "severity:error AND service:nginx",
    "condition": {
      "type": "threshold",
      "value": 100,
      "window": "5m"
    },
    "notifications": [
      { "type": "email", "target": "ops@example.com" }
    ]
  }' \
  https://api.euwest1.obs.mycentreon.com/v1/alerts
```

## Rate limits

The API enforces rate limits to ensure platform stability. Current limits:

| Plan | Requests per minute |
|---|---|
| Standard | 60 |
| Enterprise | 300 |

If you exceed the limit, the API responds with `429 Too Many Requests`. Use exponential backoff in your retry logic.

## Error handling

All errors follow a consistent format:

```json
{
  "error": {
    "code": "INVALID_QUERY",
    "message": "Syntax error in query at position 12: unexpected token 'AND'",
    "doc_url": "https://docs-api.centreon.com/api/centreon-log-management/#errors"
  }
}
```

Common HTTP status codes:

| Code | Meaning |
|---|---|
| `200` | Success |
| `400` | Bad request — check your query syntax or payload |
| `401` | Unauthorized — invalid or expired token |
| `403` | Forbidden — token lacks permission for this action |
| `429` | Rate limit exceeded |
| `500` | Server error — contact support if persistent |

## Full API reference

The complete, interactive API documentation is available at:

👉 **[Centreon Log Management API reference](https://docs-api.centreon.com/api/centreon-log-management/)**

There you will find every endpoint, request/response schemas, and a built-in tool to test API calls directly from the browser.
