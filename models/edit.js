router.post("/edit-profile", (req, res) => {
    const { name, email } = req.body;
    const _id = ObjectId(req.session.passport.user._id);
   console.log(_id)
    user.findOne({ _id: _id })
      .then((user) => {
        if (!user) {
          req.flash("error_msg", "user not found");
          res.redirect("/users/doctor-profile");
        }
        if (typeof name !== "undefined") {
          user.name = name;
          console.log(user.name);
        }
        if (typeof email !== "undefined") {
          user.email = email;
        }
        user.save(function (err, resolve) {
            if(err)
              console.log('db error', err)
               // saved!
             })
      })
    })