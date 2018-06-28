var fs = require('fs');

fs.appendFile('mynewfile1.txt', ' This all we are.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});