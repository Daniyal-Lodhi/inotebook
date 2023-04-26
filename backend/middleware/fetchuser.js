var jwt = require('jsonwebtoken');
JWT_SECRET = "myNameIsDaniyalLodhi!!"

const fetchUser = (req, res, next)=>{
    const token = req.header("auth-token")
    if(!token){
        res.status(401).send({'error': "please aurthenticate using a valid token"})
    } 
    try {
        const data = jwt.verify(token , JWT_SECRET)
        req.user = data.user
    next()
    } catch (error) {
        res.status(401).send({error: "please aurthenticate using a valid token"})
    }     
    
}
module.exports = fetchUser