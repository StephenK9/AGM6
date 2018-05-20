const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('./dist/AGM6'));
app.get('/*', function(req, res) {
  res.sendFile(path.join('./dist/AGM6/index.html'));
});
app.listen(process.env.PORT || 8080);