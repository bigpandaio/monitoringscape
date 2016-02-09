var logger = require('./logging').getLogger("enrichment");
var arcane = require('arcane');
var Q = require("q");

module.exports = function (arc, metro) {

  var IOFlow = arcane.IOFlow;
  var MeasuredFlow = arcane.MeasuredFlow;

  var ENRICHMENT_INPUT_CHANNEL = 'enrichment/incoming';
  var ENRICHMENT_OUTPUT_CHANNEL = 'enrichment-output';

  var enrichmentLogic = require('../logic/enrichment.logic').logic;
  var enrichmentFlow = new MeasuredFlow('enrichment_flow', metro.get('default'));

  enrichmentFlow.pipe(enrichmentLogic);

  var enrichmentIOFlow = new IOFlow('enrichment_flow', arc.getStore('default'));

  enrichmentIOFlow.on('error', function (err, message) {
    sendFailedToProcessLog(err, message, 'enrichment_flow');
  });

  enrichmentIOFlow.input(ENRICHMENT_INPUT_CHANNEL, {prefetchCount: 25, ack: true, timeout: 30000, numOfRetries: 3}).flow(enrichmentFlow).output(ENRICHMENT_OUTPUT_CHANNEL);

  return enrichmentIOFlow.start();
};

function sendFailedToProcessLog(err, message, flowName) {

  var organization = 'undefined';
  if (message.$payload && message.$payload.organization) {
    organization = message.$payload.organization;
  }

  logger.error("Enrichment flow - CRITICAL ERROR - shouldn't happen", {organization: organization, error_message: err.message, stack: err.stack, flow_name: flowName});
}