const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.addUser = async(req, res, next) => {
    delete req.body._id;
    const Users = new user({
        ...req.body
    });
    await Users.save()
        .then(() => res.status(201).json({ message: "---- User creer"}))
        .catch((error) => { res.status(400).json({ error }) });
    next();
}
exports.getByIdUser = async(req, res, next) => {

}
// router.post('/testToken' , verifyToken , (req,res) => {
//     jwt.verify(req.token , 'secretkey' , (err, authData) => {
//         if(err) {
//             res.sendStatus(403);
//         }else{
//             res.json({
//                 message : 'Post created ....' , 
//                 authData
//             })
//         }
//     });
// });

// exports.authentification('/login', verifyToken ,(req,res) =>{
//     const user = {
//         id : 1 ,
//         username : 'brad',
//         email : 'brad@gmail.com'
//     }
//   jwt.sign({user:user} , 'secretkey' , {expresIn : '30s'} , (err,token) => {
//         res.json({
//             token : token
//         });
//   });
// });