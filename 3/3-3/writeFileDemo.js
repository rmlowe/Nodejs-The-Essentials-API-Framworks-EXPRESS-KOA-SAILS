var fs = require('fs');

var user = '{"name":"luke"}';

fs.writeFile('user.json', user, err => console.log(err));

var user2 = {
  name: 'Hillary'
};

fs.writeFile('user2.json', JSON.stringify(user2), err => console.log(err));
