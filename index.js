const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/dist')));
// app.use(express.static(path.join(__dirname, '/dist')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'), (err) => {
    if (err) {
      console.log("error my guy");
      res.status(500).send(err);
    }
  })
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));