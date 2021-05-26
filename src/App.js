const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const auth = require('./routes/auth');
const resources = require('./routes/resources');

const port = 3000;

app.use(bodyparser.json())
app.use('/', auth);
app.use('/api', resources);

app.listen(port, () => console.log(`Server running on port ${port}`));

