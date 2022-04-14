/** @format */
const router = require("express").Router();
const User = require("../models/Seller");
// const bcrypt = require('bcrypt')

//Register
router.post("/register", async (req, res) => {
  try {
     
    const newUser = new User({
        name: req.name,
        email: req.email,
        password: req.password,
    })
    //bcrypting our password
    // const salt = await bcrypt.genSalt(10)
    // const hashPass =   await bcrypt.hash(req.body.password, salt)
    //  const newUser = new User({
    //   name: req.body.name,
    //   email: req.body.email,
    //   password: hashPass,
    // });
    const user = await newUser.save();    
    console.log(user); 
    res.status(200).json(user);

  } catch (error) {
    res.status(500).json(error);
  }
});
//Login
  router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ name: req.body.userName });   
      const validated = await bcrypt.compare(req.body.password, user.password);
      if (!user) {
        errors.user = "User not found";
        res.status(404).json({ errors });
        return;
      }
      else if (!validated) {
        errors.user = "User not found";
        res.status(404).json({ errors });
        return;
      }else{
        const { password, ...others } = user._doc;
        res.status(200).json(others);
      }
    } catch (error) {
    res.status(500).json(error);
    return;
}  })
//   });
//   try {
//     const user = await User.findOne({name: req.body.name });
//     console.log(`user is ${user}`)
//     if(!user){
//       res.status(400).json("Wrong Credentials");
//     }
//     else{
//          const validated = await bcrypt.compare(req.body.password, user.password);
//          if(!validated){
//           res.status(400).json("Wrong Credentials");
//          }else{
//            res.status(200).json(user._doc);
//          }        
//     }    
//   } catch (error) {
//     console.log(error)
//   }
// });

module.exports = router;