const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const router = require('./router');

const port = 3000;

app.use(bodyparser.json())
app.use('/api', router);
app.listen(port, () => console.log(`Server running on port ${port}`));

