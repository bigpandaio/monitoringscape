---
title: APM
slug: application-performance-monitoring
weight: 5
type: section
---

Application Performance Monitoring tools (APMs) monitor the behavior of your applications by tracking transaction flow, starting with the client, and working down the stack, through the backend and database. They measure performance metrics such as **latency, throughput and error rate**. Use them to detect and debug **user experience issues**.

APMs provide important visibility that would be very hard to achieve otherwise.
APM agents perform **code-level instrumentation** and therefore require language-specific implementations. Your applications might incur small performance penalties when monitored using APMs.

## Common Features

* Latency, throughput & error-rate measurement
* Geography-based segmentation
* Common errors & occurrence frequency
* Database query performance
* Correlation of performance metrics with code deployments
* Alerting via email, sms, etc.

## Tool Overview

{{% tools %}}
  {{% tool apm "AppDynamics" appdynamics "https://www.appdynamics.com/" "" 2008 "On Prem & SaaS" %}}
  {{% tool apm "AppNeta" appneta "http://www.appneta.com/" "" 2010 "SaaS" %}}
  {{% tool apm "Dynatrace" dynatrace "http://www.dynatrace.com/" "" 1993 "On Prem" %}}
  {{% tool apm "New Relic" newrelic "http://newrelic.com/" "" 2008 "SaaS" %}}
  {{% tool apm "Ruxit" ruxit "https://www.ruxit.com/" "" 2014 "SaaS" %}}
  {{% tool apm "Stackify" stackify "http://stackify.com/" "" 2012 "SaaS" %}}
  {{% tool apm "Takipi" takipi "https://www.takipi.com/" "" 2011 "SaaS" %}}
{{% /tools %}}
