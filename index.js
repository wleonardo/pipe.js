var slice = Array.prototype.slice;

Object.defineProperty(Object.prototype, '_pie', {
  writable: false,
  enumerable: false,
  configurable: true,
  value: function(fn) {
    var res = fn.call(this, this);
    return res;
  }
});

var P = {};

P.pie = function(data) {
  var fn = arguments[1];
  var res = fn.call(this, data);
  if (arguments.length > 2) {
    return P.pie.apply(this, [res].concat(slice.call(arguments, 2)));
  } else {
    return res;
  }
};

module.exports = P;
