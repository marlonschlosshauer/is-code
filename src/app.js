const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const app = express();
const auth = require('./routes/auth');
const github = require('./routes/github');
const resources = require('./routes/resources');

const port = 3000;

app.use(cors());
app.use(bodyparser.json())
app.use('/auth', auth);
app.use('/auth/github', github);
app.use('/api', resources);

app.listen(port, () => console.log(`Server running on port ${port}`));

