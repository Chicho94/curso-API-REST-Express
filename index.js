const express = require('express');
const routerApi = require('./routes');
// const cors = require('cors');

const {logError, errorHandler,boomErrorHandler } = require('./middleware/errorHandler');

const app = express();
const port = 3000;

app.use(express.json());
// app.use(cors());

app.get('/', (req, res) => {
  res.send('hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('esta es una nueva ruta');
});

routerApi(app);


app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi puerto es: ' + port);
});
