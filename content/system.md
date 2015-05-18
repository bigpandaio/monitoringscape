---
title: System Monitoring
slug: system-monitoring
weight: 3
type: section
---

For most operations teams, system monitoring tools constitute the **central hub of visibility** into the status of their production environments. Use these tools to detect and investigate **hardware**, **network** and **software** problems. This is a broad definition that captures many flavors of tools, and thorough research is required before adopting a tool for production use.

System monitoring tools frequently employ a **plugin architecture**, making it easy to monitor the health of various types of infrastructure. Note that often **breadth comes at the expense of depth**: as your company grows, you will likely choose to adopt additional tools from other categories to augment your system monitoring solution.

## Common Features

* Status dashboard (i.e. "red/yellow/green" infrastructure overview )
* Alerting via email, sms, etc.
* Agents for periodical execution of health checks
* Built-in collectors for servers & networks
* Plugin architecture that supports many types of infrastructure
* Check hierarchy / dependency mapping

## Tool Overview
{{% tools %}}
  {{% tool system Boundary     boundary "http://www.boundary.com"            "Boundary"   2011    "SaaS" %}}
  {{% tool timeseries collectd      cube  "http://square.github.io/cube/"   Square              2011    "Cross-Platform, Open Source" %}}
  {{% tool timeseries CopperEgg     druid "http://druid.io/"                Metamarkets         2012    "Cross-Platform, Open Source" %}}
  {{% tool timeseries Datadog  graphite "http://graphite.wikidot.com"  "The Graphite Project" 2008 "Cross-Platform, Open Source" %}}
  {{% tool timeseries Ganglia  grafana "http://influxdb.com"             InfluxDB            2013    "Cross-Platform, Open Source" %}}
  {{% tool timeseries Icinga cacti "https://instrumentalapp.com"  "Expected Behavior" 2011    "SaaS" %}}
  {{% tool timeseries LogicMonitor   librato "https://www.librato.com"         SolarWinds          2011    "SaaS" %}}
  {{% tool timeseries Munin  grafana "http://opentsdb.net"             OpenTSDB            2010    "Cross-Platform, Open Source" %}}
  {{% tool timeseries Nagios   rrdtool "https://oss.oetiker.ch/rrdtool"  "Tobias Oetiker"    1999    "Cross-Platform, Open Source" %}}
  {{% tool timeseries OpenNMS   rrdtool "https://oss.oetiker.ch/rrdtool"  "Tobias Oetiker"    1999    "Cross-Platform, Open Source" %}}
  {{% tool timeseries OpsView   rrdtool "https://oss.oetiker.ch/rrdtool"  "Tobias Oetiker"    1999    "Cross-Platform, Open Source" %}}
  {{% tool timeseries Scout   rrdtool "https://oss.oetiker.ch/rrdtool"  "Tobias Oetiker"    1999    "Cross-Platform, Open Source" %}}
  {{% tool timeseries Sensu   rrdtool "https://oss.oetiker.ch/rrdtool"  "Tobias Oetiker"    1999    "Cross-Platform, Open Source" %}}
  {{% tool timeseries ServerDensity   rrdtool "https://oss.oetiker.ch/rrdtool"  "Tobias Oetiker"    1999    "Cross-Platform, Open Source" %}}
  {{% tool timeseries statsd   rrdtool "https://oss.oetiker.ch/rrdtool"  "Tobias Oetiker"    1999    "Cross-Platform, Open Source" %}}
  {{% tool timeseries Zabbix   rrdtool "https://oss.oetiker.ch/rrdtool"  "Tobias Oetiker"    1999    "Cross-Platform, Open Source" %}}
  {{% tool timeseries Zennos   rrdtool "https://oss.oetiker.ch/rrdtool"  "Tobias Oetiker"    1999    "Cross-Platform, Open Source" %}}
{{% /tools %}}
