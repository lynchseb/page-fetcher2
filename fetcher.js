const request = require('request');
const fs = require('fs');
const input = process.argv;
const url = input[2];
const path = input[3];

request(url, (error, response, body) => {
  fs.writeFile(path, body, function (err) {
    function getFilesizeInBytes(amount) {
      var stats = fs.statSync(amount)
      var fileSizeInBytes = stats["size"]
      return fileSizeInBytes
    }
    if (err) throw err;
    console.log("Downloaded and saved " + getFilesizeInBytes(path) + " bytes to ./index.html")
  });
});



