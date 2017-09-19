---
title: Log Management
slug: logging
weight: 4
type: section
---

Essentially all kinds of software output log files. Logs provide **low-level visibility on application behavior**; they are extremely useful for **debugging**, and can help with tracking **recurring errors**.

The rise of distributed systems resulted in an **explosion in the number of log files and log lines**. Locating an individual transaction in the ocean of log files became impossible. Log management tools were invented to address this issue. Similarly to the way Google crawls and indexes webpages, log management tools collect and index all your log data. This allows you to **quickly search** for specific messages, errors and patterns across all your log files.

## Common Features

* Query language for searching logs
* Timelines & histograms
* Automatic alerts
* Customizable dashboards
* Aggregation functions & analytics

## Tool Overview

{{% tools %}}
  {{% tool logging "ELK Stack" elk "https://www.elastic.co" "ElasticSearch, LogStash & Kibana. Open Source"          2011                "On Prem" %}}
  {{% tool logging Graylog   graylog "https://www.graylog.org/"   "Open Source"          2010                "On Prem" %}}
  {{% tool logging Logentries  logentries    "https://logentries.com/"       "" 2010     "SaaS" %}}
  {{% tool logging Loggly    loggly    "https://www.loggly.com/"       "" 2009     "SaaS" %}}
  {{% tool logging Papertrail   papertrail "https://papertrailapp.com/"         "Acquired by SolarWinds"          2011                "SaaS" %}}
  {{% tool logging Splunk     splunk "http://www.splunk.com/"      ""          2003                "On Prem" %}}
  {{% tool logging SumoLogic  sumologic "https://www.sumologic.com/"      ""          2010                "SaaS" %}}
  {{% tool logging Logscape  logscape "https://www.logscape.com/"      ""          2011                "On Prem & SaaS" %}}
  {{% tool logging "Sematext Cloud & Enterprise" sematext "https://sematext.com/cloud" "Performance Monitoring, Log Management, Alerting and Anomaly Detection for Logs & Metrics, Kibana integrated, RBAC" 2017 "SaaS, On Prem" %}}
{{% /tools %}}
