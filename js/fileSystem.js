//file system 
var fs = require('fs');
fs.readFile('./index2.html', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})