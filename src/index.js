var LeeactComponent = require('./LeeactComponent');

var Leeact = function() {};

Leeact.render = function(targetDOM, component) {
  if (!targetDOM) {
    throw new Error('Missing parameter: targetDOM');
  } else if (!component) {
    throw new Error('Missing parameter: component');
  } else if (component.__proto__.constructor !== LeeactComponent) {
    throw new Error('Invalid Component');
  }
};

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.Leeact = factory();
  }
})(this, function () {
  return Leeact;
});
