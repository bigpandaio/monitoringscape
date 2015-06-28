---
title: Event Processing
slug: event-processing
weight: 8
type: section
---

The growth in **scale & complexity** of modern production environments resulted in an explosion in the amount of data we have to process to make operational decisions. Manual processing of events is becoming harder and harder.

Event processing tools help you **automate** large parts of the **incident resolution process**. They consume alerts from your monitoring tools, and run them through a series of processing steps: **Correlation** (matching related alerts), **Enrichment** (adding insight & context to events), **Noise Supression** (removing unnecessary events) and **Routing** (funneling events to specific stakeholders). Use event processing tools to boost your service uptime and team productivity.


## Common Features

* Event correlation & enrichment
* Alert routing
* Alert analytics
* Integration with collaboration platforms (e.g. JIRA, Slack, ServiceNow, etc.)
* Consolidated event dashboard

## Tool Overview

{{% tools %}}
  {{% tool processing "BigPanda" bigpanda "https://www.bigpanda.io/" "" 2012 "SaaS" %}}
  {{% tool processing "Bosun" bosun "http://bosun.org/" "Open Source" 2013 "On Prem" %}}
  {{% tool processing "MoogSoft" moogsoft "http://www.moogsoft.com/" "" 2011 "On Prem" %}}
  {{% tool processing "Riemann" riemann "https://riemann.io/" "Open Source" 2012 "On Prem" %}}
{{% /tools %}}
