const CONFIG = {
    port: 3000
}

const dns       = require('dns')
const express   = require('express')
const app       = express()

app.use(express.json());

app.get('/', (req, res)=>{
    console.log('req >> / ')
    res.status(200).json(`Welcome to DNS API`)
});

app.post('/resolve', (req, res) => {
    let domain = req.body.domain
    let type = req.body.type

    dns.resolve(domain,type.toUpperCase(),(err,records)=>{
        res.status(200).json(records)
    });
});


app.listen(process.env.PORT || CONFIG.port, () => {
    console.log(`the server is listening on port ${CONFIG.port}`)
})