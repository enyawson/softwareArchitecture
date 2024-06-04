const express = require('express');

const app = express();
const port = 7070;

const rabbitRoutes = require('./rabbits/routes/rabbits.routes')

/*Route*/
app.use('/rabbits', rabbitRoutes)

app.listen(port, () => console.log(`⚡️[server]: Server is running at http://localhost:${port}`))
