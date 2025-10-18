const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const { connectDB } = require('./config/db')
const StaffRoutes = require('./modules/auth/staff/staff.routes')


dotenv.config()
connectDB()

app.use(express.json());
app.use(cors())

app.get("/api", (req, res) => {
    res.status(200).json({
        message: "server is running successfully"
    })
})

app.use("/api", StaffRoutes)

const PORT = 1310;

app.listen(process.env.PORT, () => {
    console.log(`Jiii Server Start Aagiruchu jii...port number ${PORT} la run aagitu irruku`);
})

