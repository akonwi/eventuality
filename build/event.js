// Generated by CoffeeScript 1.10.0
(function() {
  var deepAssign;

  deepAssign = require('./deepAssign');

  module.exports = function(arg) {
    var aggregateId, event, name, payload;
    aggregateId = arg.aggregateId, name = arg.name, payload = arg.payload;
    event = {
      name: name,
      aggregateId: aggregateId,
      payload: Object.freeze(deepAssign({}, payload))
    };
    return Object.freeze(event);
  };

}).call(this);
