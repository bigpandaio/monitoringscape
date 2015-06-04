---
title: Anomaly Detection
slug: anomaly-detection
weight: 11
type: section
---

Application load tends to have a certain rhythm: it goes up during daytime and then down during nights. And yet our monitoring alerts rely almost exclusively on static thresholds, resulting in many inaccuracies. For example, consider an application bug causing high Disk IO. During nights, this bug will likely go unnoticed, due to the low baseline load (**False Negative**). During days, we will receive an alert, but then ignore it, as we'll already be flooded by many other unnecessary alerts caused by healthy high traffic (**False Positive**).

Anomaly detection tools address this problem. They analyze your system's behavior over time and calculate an **adaptive baseline** representing the systems "normal" behavior. Then, when your system behaves abnormally, they capture the anomaly and alert on it. You can read more about how anomaly detection helps DevOps teams [here](https://bigpanda.io/blog/a-practical-guide-to-anomaly-detection/23-a-practical-guide-to-anomaly-detection).

## Common Features

* Consume time-series or log data
* Detect & alert on anomalous behavior
* Automatic context for root cause analysis

## Tool Overview

{{% tools %}}
  {{% tool anomaly "Grok" grok "https://numenta.com/grok/" "Time-series data" 2014 "On Prem" %}}
  {{% tool anomaly "Anomaly Detective" detective "http://info.prelert.com/products/anomaly-detective-app" "Log data" 2013 "On Prem" %}}
  {{% tool anomaly "Skyline" skyline "https://github.com/etsy/skyline" "Time-series data, open source" 2013 "On Prem" %}}
{{% /tools %}}
