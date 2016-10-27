var LeeactComponent = function() {
  this.props = {};
  this.state = {};
  this.children = null;
};

LeeactComponent.prototype.setState = function(state) {
  this.state = state;
};

LeeactComponent.createElement = function(type, props) {

};

module.exports = LeeactComponent;
