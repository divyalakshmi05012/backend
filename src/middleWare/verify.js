import auth from "../common/Auth.js"
const verify = async (req,res,next)=>{
    try {
        let token = req.headers.authorization?.split(" ")[1]
        if(token)
        {
            
            let payload = await auth.decodeToken(token)
            if(payload.exp> (Math.floor(Date.now()/1000)))
                next()
            else
            {
                res.status(401).send({
                    message:"Token Expired"
                })
            }
        }
        else
            res.status(401).send({
                message:"Invalid Token"
            })
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server error"
        })
    }
}

export default verify