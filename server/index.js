const express = require('express');
const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser())

app.post('/data', function (req, res) {
 let text = req.body.text
 let response = JSON.stringify({response:text})
 return res.send(response);
});

app.listen(process.env.PORT || 3013);
console.log("I'm running on port 3013")