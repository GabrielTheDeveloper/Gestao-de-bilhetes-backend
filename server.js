const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const {connectToDb} = require('./config/db');
const initializeAdmin = require('./config/initializeAdmin');
const routes = require('./routes/routes');

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes)/
connectToDb();
initializeAdmin();

app.use('/api', routes);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});