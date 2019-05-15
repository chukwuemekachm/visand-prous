const expess = require('express');
const path = require('path');

const app = expess();
const PORT = process.env.PORT || 8000;

app.use(expess.static('dist'));

app.all('*', (req, res) => res
  .status(200).sendFile(path.join(__dirname, '../dist', 'index.html')));

app.listen(PORT);
