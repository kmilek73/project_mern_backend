
const MernOn = require('../models/MernOnsModel');
const { post } = require('../routers/userRouters');


module.exports = {
    allUsers: (req, res) => {
        MernOn.find({})
            .lean()
            .exec((err, allUser) => {
                if (err) {
                    res.send("Błąd pobrania użykowników");
                }
        res.json(allUser)
            });
    },


    user: (req, res) => {
        MernOn.findById(req.params.id)
            .exec((err, singleUser) => {
                if (err) {
                    res.send("Błąd pobrania użykownika");
                }
                    res.json(singleUser);
            })
    },

    create: (req, res) => {
        let newUser = new MernOn(req.body);
        newUser.save();
        res.json(newUser)
    },



    delete: (req, res) => {
        MernOn.findByIdAndDelete(req.params.id).exec((err) => {
            if (err) {
                res.send("Błąd usuwania uzytkownika");
            }

           res.json({deleted:true})
         
        })
    },

    update: (req, res) => {
        MernOn.findByIdAndUpdate(req.params.id, req.body).exec((err, updateUser) => {
         
            if (err) {
                res.send("Błąd aktualizacji");
            }
            res.json(updateUser);
          
        })
    },
   

}