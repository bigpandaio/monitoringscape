---
title: Time-Series Databases
slug: time-series
weight: 2
type: section
---
Use time-series databases to **store** and **visualize** your performance metrics. Common metrics include **system & network performance** (e.g. CPU Load), **application performance** (e.g. Transaction Latency) and **business KPIs** (e.g. Ad Impressions). Time-series databases are optimized for **scale & performance** and are capable of consuming millions of samples per second in most cases.

## Common Features
* Configurable data granularity and retention
* Aggregation functions (e.g. sum, mean)
* API & language wrappers
* Dashboards / integration with dashboarding tools

## Tool Overview
{{% tools %}}
  {{% tool timeseries Blueflood     blueflood "http://www.blueflood.io"         "Open Source" 2013  "On Prem" %}}
  {{% tool timeseries Cacti         cacti "http://www.cacti.net"                "Open Source" 2001  "On Prem" %}}
  {{% tool timeseries Circonus      circonus "http://www.circonus.com"          "" 2010  "On Prem & SaaS" %}}
  {{% tool timeseries Cube          cube  "http://square.github.io/cube/"       "Open Source" 2011  "On Prem" %}}
  {{% tool timeseries Druid         druid "http://druid.io/"                    "Open Source" 2012  "On Prem" no-screenshot %}}
  {{% tool timeseries Graphite      graphite "http://graphite.wikidot.com"      "Open Source" 2008  "On Prem & SaaS" %}}
  {{% tool timeseries InfluxDB      grafana "http://influxdb.com"               "Open Source" 2013  "On Prem & SaaS" %}}
  {{% tool timeseries Instrumental  instrumental "https://instrumentalapp.com"  ""            2011  "SaaS" %}}
  {{% tool timeseries KairosDB      kairosdb "http://kairosdb.github.io/"       "Open Source" 2013  "On Prem" %}}
  {{% tool timeseries Librato       librato "https://www.librato.com"           "Acquired by SolarWinds" 2011  "SaaS" %}}
  {{% tool timeseries OpenTSDB      grafana "http://opentsdb.net"               "Open Source" 2010  "On Prem" %}}
  {{% tool timeseries Prometheus    prometheus "http://prometheus.io/"          "Open Source" 2012  "On Prem" %}}
  {{% tool timeseries "Rackspace Metrics"    rackspace-metrics "http://bit.ly/rax-metrics-overview"   "" 2015 "SaaS" %}}
  {{% tool timeseries RRDtool       rrdtool "https://oss.oetiker.ch/rrdtool"    "Open Source" 1999  "On Prem" %}}
  {{% tool timeseries SignalFX      signalfx "https://signalfx.com/"            "" 2013  "SaaS" %}}
  {{% tool timeseries StatHat       stathat "http://www.stathat.com/"           "" 2011  "SaaS" %}}
{{% /tools %}}
