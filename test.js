var expect = require('chai').expect;
const P = require('./index.js');

describe('基础功能函数测试', function() {
  it('数组测试', function() {
    expect([1, 5, 3]._pie(getMax)._pie(double)).to.equal(10);
    expect(P.pie([1, 5, 3], getMax, double)).to.equal(10);
  });
});

function getMax(arr) {
  var max;
  for (var i = 0; i < arr.length; i++) {
    var d = arr[i];
    if (max === undefined) {
      max = d;
    } else {
      max = max >= d ? max : d;
    }
  }
  return max;
}

function double(s) {
  return s * 2;
}