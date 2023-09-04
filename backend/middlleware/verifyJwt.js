import jwt from 'jsonwebtoken';
const SECRET = "ovojenajvecatajna"


function verifyJwt(req, res, next) {
      const authorization = req.header('authorization');
      const token = authorization ? authorization.split('Bearer ')[1] : undefined;
      if(!token) {
          return res.send(401, "Unauthorized");
      }
      jwt.verify(token, SECRET, (err, payload)=>{
          if (err || !payload.sub) {
              return res.send(401, "Unauthorized");
          }
          return next();
      })
  }

  export default verifyJwt;