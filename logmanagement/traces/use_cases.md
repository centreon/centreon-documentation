---
id: traces-use-cases
title: Use cases
description: "Common ways to use traces in Log Management: find latency bottlenecks, trace errors to their source, map service dependencies and measure release impact."
---

Traces are mainly used to understand and improve your systems. Here are the most common use cases.

## Finding latency bottlenecks

[A trace breaks one request into spans](concepts.md#what-is-a-trace) across services, databases and external calls, so you can see exactly which step is slow. "Checkout takes 3s" becomes "the payment API call takes 2.4s, the SQL query 0.4s." No guessing, no digging through logs.

## Diagnosing cascading errors during incidents

When an alert fires, traces let you follow the failing request to the service, endpoint or dependency where the error actually started — not just where it surfaced. Essential when one failure triggers others downstream.

## Linking a log error to its full request context

A log line like **ERROR: payment declined** appears in Log Management. [The **trace_id** in that log opens the full trace directly](exploring.md#go-from-a-log-to-its-trace): upstream calls, all services involved, request attributes (user, tenant, version, region). Without traces, a log is an isolated data point. With traces, it’s the complete story of what happened. In Log Management, the native integration makes this seamless for existing customers.

## Mapping real service dependencies

Traces aggregated across many requests produce [a live map of which services call which](exploring.md#service-graph) — not the architecture diagram that hasn’t been updated in six months. Useful for understanding blast radius before a change, or spotting unexpected dependencies in production.

## Measuring deployment and release impact

Compare trace latency and error rates before and after a deploy, or between canary and stable versions. Confirm or rule out a regression in minutes rather than hours. In Log Management, [manually define two trace groups](exploring.md#compare-trace-groups) and compare their p50/p95/p99 side by side.

## Spotting inefficient code patterns

An endpoint queries the database 47 times instead of once (N+1), triggers retry storms, or runs calls sequentially that could be parallel. These patterns are invisible in metrics and buried in logs. In Log Management, you can spot them manually in the [span waterfall](concepts.md#the-waterfall-view-of-a-trace) — no configuration required, just open the trace.

## Monitoring external APIs and third-party dependencies

Outbound call spans show exactly how external providers (payment, auth, cloud APIs) affect your service latency and reliability. Measure their real response times, detect recurring timeouts and check whether they’re meeting their SLAs.

## Proving that a fix actually worked

After a patch, [compare traces before and after](exploring.md#compare-trace-groups) objectively: p50/p95 per operation, error rate, frequency of the problematic pattern. In Log Management, this is done by manually setting up a before/after trace group comparison — concrete, shareable evidence for reviews and post-mortems.
