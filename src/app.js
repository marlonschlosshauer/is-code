const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const passport = require('passport');
const app = express();
const auth = require('./routes/auth');
const github = require('./routes/github');
const pages = require('./routes/pages');
const resources = require('./routes/resources');

const port = 3000;

app.use(cors());
app.use(bodyparser.json())
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', auth);
app.use('/auth/github', github);
app.use('/api', resources);
app.use('/', pages);

app.listen(port, () => console.log(`Server running on port ${port}`));

