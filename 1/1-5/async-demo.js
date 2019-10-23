fs = require('fs');

fs.readdir('/', function(err, data) {
  console.log('data', data);
});

console.log('this comes after');
