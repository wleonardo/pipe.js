# pipe.js
用于流式处理数据

### Usage

```
const P = require('pipe.js');

var data = [10, 2, 3];

var getMax = function(Array){
	...
}

var double = funcion(s) {
	return s * 2;
}

//用法一

data._pie(getMax)
		._pie(double) // 20

//用法二

P.pie(data, getMax, double) // 20
```
