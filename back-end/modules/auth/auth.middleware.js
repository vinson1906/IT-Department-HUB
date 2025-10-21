const jwt = require("jsonwebtoken")
const verifyToken = async (req, res, next) => {
    try {
        console.log(req.headers.authorization)
        const token = req.headers.authorization
        if(!token){
            return res.status(500).json({
                message:"token not found"
            })
        }

        const verify = jwt.verify(token,process.env.JWT_KEY);

        req.user = verify
        next();
    }
    catch (err) {
        res.status(500).json({
            message: "verification Denied"
        })
    }
}

module.exports = verifyToken