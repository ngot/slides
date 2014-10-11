var http = require('http');
var mq = require('mq');

var txt = 'a\ud83d字';
var len = txt.length;
var res = [];
console.log(len);

for (var i = 0; i < len; i++) {
	res.push(txt.charCodeAt(i));
}
console.log(res);

var fileHander = http.fileHandler('./');
new http.Server(8080, new mq.Routing({
	'^(/.*)$': new mq.Chain([fileHander, function(v, f) {
		v.response.removeHeader("Last-Modified");
		if (v.response.status === 404) {
			v.response.write(txt);
			v.response.status = 200;
		}
	}])
})).run();


