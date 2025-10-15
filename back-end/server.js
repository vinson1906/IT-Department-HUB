const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json());
app.use(cors())

app.get("/api",(req,res) => {
    res.status(200).json({
        message:"server is running successfully"
    })
})

const PORT = 1310;

app.listen(PORT,() => {
    console.log(`Jiii Server Start Aagiruchu jii...port number ${PORT} la run aagitu irruku`);
})

