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
  {{% tool system Centreon   centreon "https://www.centreon.com"         ""          2003                "On Prem" %}}
  {{% tool system Check_MK    checkmk "http://mathias-kettner.com/check_mk.html"         "Open Source, Uses Nagios Core"          2009                "On Prem" %}}
  {{% tool system collectd    collectd    "https://collectd.org/"       "Open Source, Collection only" 2005     "On Prem" no-screenshot %}}
  {{% tool system Datadog     datadog "https://www.datadoghq.com/"      ""          2010                "SaaS" %}}
  {{% tool system "Dataloop.io" dataloop "https://www.dataloop.io/"      ""          2014                "SaaS" %}}
  {{% tool system Ganglia     ganglia "http://ganglia.info/"            "Open Source"    2001     "On Prem" %}}
  {{% tool system Icinga      icinga "https://www.icinga.org/"          "Open Source, Forked from Nagios" 2009       "On Prem" %}}
  {{% tool system LogicMonitor   logicmonitor "http://www.logicmonitor.com/" ""          2009     "SaaS" %}}
  {{% tool system mackerel  mackerel "https://mackerel.io/" ""          2015     "SaaS" %}}
  {{% tool system Munin     munin "http://munin-monitoring.org/"           "Open Source"    2006     "On Prem" %}}
  {{% tool system Nagios    nagios "https://www.nagios.org/"  "Open Source"     1999      "On Prem" %}}
  {{% tool system OpenNMS   opennms "http://www.opennms.org/"  "Open Source"    2000     "On Prem" %}}
  {{% tool system OpsView   opsview "http://www.opsview.com/"  "Open Source, Forked from Nagios"    2003    "On Prem" %}}
  {{% tool system PRTG      prtg "https://www.paessler.com/prtg"  ""    1997    "On Prem" %}}
  {{% tool system Scout     scout "https://scoutapp.com/"  ""    2008    "SaaS" %}}
  {{% tool system Sensu     sensu "https://sensuapp.org/"  "Open Source"    2011    "On Prem" %}}
  {{% tool system "Server Density"   serverdensity "https://www.serverdensity.com/"  "Server and web monitoring"    2009    "SaaS" %}}
  {{% tool system "Shinken" shinken "http://shinken-monitoring.org/"  "Open Source, Nagios Core rewrite in Python"    2010    "SaaS" %}}
  {{% tool system Spiceworks   spiceworks "http://www.spiceworks.com/free-network-monitoring-management-software/"  ""         2014    "On Prem" %}}
  {{% tool system statsd   statsd "https://github.com/etsy/statsd"  "Open Source, Collection Only"         2012    "On Prem" no-screenshot %}}
  {{% tool system statsite statsite "https://github.com/armon/statsite"  "Open Source, statsd-inspired collector" 2012    "On Prem" no-screenshot %}}
  {{% tool system "Sysdig" Sysdig "http://www.sysdig.com/"  ""    2013    "SaaS + On Prem" %}}
  {{% tool system Zabbix   zabbix "http://www.zabbix.com/"  "Open Source"    1998    "On Prem" %}}
  {{% tool system Zenoss   zenoss "http://www.zenoss.com/"  "Open Source"    2002    "On Prem" %}}
{{% /tools %}}
