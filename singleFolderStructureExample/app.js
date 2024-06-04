const express = require('express');

const app = express();
const port = 7070;


//Mock DB
const db = [
    {id: 1, name: 'Jane'},
    {id: 2, name: 'John'},
    {id: 3, name: 'Jaame'},
    {id: 4, name: 'Jamel'},
    {id: 5, name: 'Jemmy'},
    {id: 6, name: 'Afro'},
    {id: 7, name: 'Nita'},
    {id: 8, name: 'Abi'}

]

/*Route*/
app.get('/rabbits', (req, res)=> {
    res.json(db)
})

app.get('/rabbits/:idx', (req, res)=> {res.json(db[req.params.idx])})

app.listen(port, () => console.log(`⚡️[server]: Server is running at http://localhost:${port}/rabbits`))
