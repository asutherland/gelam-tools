var spark = require('textspark');
var fs = require('fs');

var dataStr = fs.readFileSync('fps-histos.txt').toString();

var lines = dataStr.split('\n'), iLine, line;

var RE_DATA = /^\d/;

// normalizing

for (iLine = 0; iLine < lines.length; iLine++) {
  line = lines[iLine];

  if (RE_DATA.test(line)) {
    console.log(spark(line.split(' ').map(function(x) { return Math.min(7, parseInt(x, 10)); })));
  }
  else {
    console.log(line);
  }
}
