---
title: Web & User Monitoring
slug: web-monitoring
weight: 6
type: section
---

Web & user monitoring tools measure how your application performs "from the outside." They simulate traffic to your application from various geographies and alert you on failures and timeouts (**Synthetic Monitoring**). Additionally, they can be embedded into your web frontends or mobile applications in order to track real failures arising in your users' clients (**Real User Monitoring**).

Unlike monitoring tools that track technical performance metrics, web & user monitoring metrics are tied directly to **actual user experience**. Web & user monitoring alerts almost always indicate that you have a real issue that must be resolved promptly. However, these alerts can't provide much context as to *what* is causing the problem. It is recommended to complement web & user monitoring tools with [System Monitoring](#system-monitoring) and [Application Performance Monitoring](#application-performance-monitoring) tools.

## Common Features

* Monitor HTTP / HTTPS / SSH / generic TCP endpoints
* Uptime & SLA tests
* Geographical segmentation
* Alerting via email, sms, etc.

## Tool Overview

{{% tools %}}
  {{% tool web "Apica" apica "https://www.apicasystem.com/" "" 2005 "SaaS" %}}
  {{% tool web "CatchPoint" catchpoint "http://www.catchpoint.com/" "" 2008 "SaaS & On Prem" %}}
  {{% tool web "dotcom" dotcom "https://www.dotcom-monitor.com/" "" 1998 "SaaS" %}}
  {{% tool web "Gomez" gomez "http://www.ndm.net/apm/Compuware/gomez" "Acquired by Compuware" 1997 "SaaS" %}}
  {{% tool web "Keynote" keynote "http://www.keynote.com/" "" 1995 "SaaS" %}}
  {{% tool web "Pingdom" pingdom "https://www.pingdom.com/" "Acquired by SolarWinds" 2007 "SaaS" %}}
  {{% tool web "Site24x7" site24x7 "https://www.site24x7.com/" "" 2006 "SaaS" %}}
  {{% tool web "StatusCake" statuscake "https://www.statuscake.com/" "" 2012 "SaaS" %}}
  {{% tool web "UptimeRobot" uptimerobot "https://uptimerobot.com/" "" 2010 "SaaS" %}}
{{% /tools %}}
