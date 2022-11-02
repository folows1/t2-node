const express = require('express');
const jogosRouter = require('./router/jogos.router');

const app = express();
app.use(express.json());

app.use('/api/v1/jogos', jogosRouter);

app.listen(8087, () => {
    console.log('Server is running on port 8087');
})