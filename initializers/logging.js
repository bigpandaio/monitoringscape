var winston = require('winston');
var fileTransport = require('bp-api-common/logging/winston/utils').fileTransport;
var filterTransports = require('bp-api-common/logging/winston/utils').filterTransports;
var loggerProxy = require('bp-api-common/logging/winston/utils').loggerProxy;

// Adds the logstash transport to winston
require('winston-redis').Redis;
var server = require('os').hostname();

exports.init = function (config) {

  try {
    var logstash = null;
    var sentry = null;

    // Configures a new logstash transport instance
    if (config.logging.logstash) {
      logstash = new winston.transports.Redis(config.logging.logstash);
      logstash.globalMeta.server = server;
    }

    winston.loggers.options.transports = filterTransports(
      new (winston.transports.Console)({ level: 'info' }),
      logstash
    );

    if (config.logging.sentry && config.logging.sentry.enabled) {
      var Sentry = require('winston-sentry');
      sentry = new Sentry({
        level: 'error',
        logger: 'enrichment',
        dsn: config.logging.sentry.std
      })
    }

    if (config.logging.filename) {
      winston.loggers.add('enrichment', {
        transports: filterTransports(
          fileTransport('info', config.logging.filename),
          logstash,
          sentry
        )
      });
    }

  } catch (e) {
    console.error('Failed to initialize logging: ' + e.message);
  }
};

module.exports.getLogger = function getLogger(category) {
  return loggerProxy(winston.loggers.get(category));
};

