const express = require('express');
const compression = require('compression');
const cors = require('cors');

const app = express();
const port = 3003;

app.use(express.json());
app.use('/compare', express.static('client/dist'));
app.use(compression());
app.use(cors());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
}); 