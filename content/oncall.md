---
title: On-Call Management
slug: on-call
weight: 7
type: section
---

More and more companies are transitioning away from a strict tier-based operations model. In these companies, developers and infrastructure engineers **respond to alerts directly**, instead of a tier-1 team. This shortcuts the traditional, manual-escalation process and reduces overall resolution time significantly.

On Call Management tools enable this methodology. They consume alerts from your monitoring stack, and **route the alerts automatically** to the person who is currently on call. The alert is normally communicated to the on-call person via a mobile notification. If the person doesn't respond within the confines of a pre-defined SLA, the alert is **automatically escalated** to a second on-call person.

## Common Features

* Manage on-call schedules
* Automatic routing based on schedule
* Configurable, automatic escalation policies
* Notification via SMS, phone call or push notification
* Acknowledge, resolve & add a comment to an alert
* Mobile apps

## Tool Overview

{{% tools %}}
  {{% tool oncall "OpsGenie" opsgenie "https://www.opsgenie.com/" "" 2012 "SaaS" %}}
  {{% tool oncall "PagerDuty" pagerduty "https://www.pagerduty.com/" "" 2010 "SaaS" %}}
  {{% tool oncall "VictorOps" victorops "https://www.victorops.com/" "" 2012 "SaaS" %}}
  {{% tool oncall "xMatters" xmatters "https://www.xmatters.com/" "" 2000 "SaaS" %}}
{{% /tools %}}
