const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try {
        let token;
        let authHeader = req.headers.Authorization || req.headers.authorization;
        // console.log(token);
        if (authHeader && authHeader.startsWith("Bearer")){
            token = authHeader.split(" ")[1];
            const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
            req.userData = data.user;
            
            next();
        }
        // console.log(data);
    } catch (error) {
        console.log("This error is coming from auth.js");
        console.log(error);
        return res.status(401).json({message: 'User is not Authorised.'});
    }
};


module.exports = auth;