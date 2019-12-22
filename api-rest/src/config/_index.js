const crypto = require('crypto')
var data = "";
console.log(crypto.createHash('md5').update(data).digest("hex"));
