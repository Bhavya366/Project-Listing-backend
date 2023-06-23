const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const isAuthenticated = (req)=>{
    try{
      console.log(req.headers.token)
      const decoded = jwt.verify(req.headers.token,process.env.JWT_SECRET_KEY)
    }
    catch(error){
      console.log(error)
        res.send(error)
    }
    next();
}
  
module.exports = { isAuthenticated};