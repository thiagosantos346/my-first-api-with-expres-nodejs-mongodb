const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth.json')

module.exports = (req, res, next) =>{
    const authHeader = req.headers.authorization;

    if(! authHeader)
        return res.status(401).send({erro : 'no token provider!'});
    
    
    // Bearer <token>
    const parts = authHeader.split(' ');
    
    if(!parts.lenth === 2)
        return res.status(401).send({error : 'Token error'});
    
    const [schema ,  token ] = parts;

    if(!/^Bearer$/i.test(schema))
        return res.status(401).send({ error : 'Token malformatted'});
    
    jwt.verify(token, authConfig.secret, (err, decoded)=>{
        if(err)
            return res.status(401).send({ error : 'Token invalid' });
        
        req.userId = decoded.id;
        return next();
    
    })
    

}