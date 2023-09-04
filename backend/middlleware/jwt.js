
import jwt from 'jsonwebtoken';
const SECRET = "ovojenajvecatajna"

export default function signJwt(user_id) {
    const token = jwt.sign({sub: user_id}, SECRET);
    if (!token) return false;
    return token;
}

// export default function verifyJwt(req, res, next) {
//     const authorization = req.header('authorization');
//     const token = authorization ? authorization.split('Bearer ')[1] : undefined;
//     if(!token) {
//         return res.send(401, "Unauthorized");
//     }
//     jwt.verify(token, SECRET, (err, payload)=>{
//         if (err || !payload.sub) {
//             return res.send(401, "Unauthorized");
//         }
//         return next();
//     })
// }

// // module.exports = {signJwt, verifyJwt};