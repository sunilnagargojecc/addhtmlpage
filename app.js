console.log('Hi');

const express = require('express');

const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/example', (req, res) => {
 res.send('Full name is:${req.body.filename} ${req.body.sourcename} ${req.body.sendername} ${req.body.msg}.');
 console.log("POST FORM BODY", req.body);
});

const port = 8081;

app.listen(port, () => {
 console.log('Server running on port${port}');
});