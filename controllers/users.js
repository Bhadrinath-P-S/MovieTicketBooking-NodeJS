const mysql = require("mysql2");
// const bcrypt = require("bcryptjs");

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    port: 3306,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE,
});
exports.login = (req, res) => {
    try {
        const Email = req.body.Email;
        const Password = req.body.Password;
        if (!Email || !Password) {
            return res.status(400).render("login", {
                msg: "Please Enter Your Email and Password",
                msg_type: "error",
            });
        }

        db.query('select * from register_id where Email=?', [Email], (error,result) =>{
            console.log(result);
//             if(!result || !(await bcrypt.compare(Password, result[0].Password))){
            if(result.length<=0){
            return res.status(401).render("login", {
                msg: "Email or Password Incorrect...",
                msg_type: "error",
                });
            }   else{
                if(Password != (result[0].Password)){
                    return res.status(401).render("login", {
                        msg: "Email or Password Incorrect...",
                        msg_type: "error",
                    });
                } else {
                    // res.send("Good");
                    res.status(200).redirect("/MovieNowShowing");
                }
            }
        });

} catch (error) {
    console.log(error);
} 
  
};




exports.register = (req, res) => {
    console.log(req.body);
    const Name = req.body.Name;
    const Email = req.body.Email;
    const Phone = req.body.Phone;
    const Password = req.body.Password;
    const Repass = req.body.Repass;

    db.query('Select email from register_id where email=?', [Email], (error, result) => {
        if (error) {
            confirm.log(error);
        }

        if(Name == "")
        {
            return res.render('register', {msg:"Please Fill all the details", msg_type:"error"});
        }

        if(Email == "")
        {
            return res.render('register', {msg:"Please enter email", msg_type:"error"});
        }

        if(Phone == "")
        {
            return res.render('register', {msg:"Please enter Phone number", msg_type:"error"});
        }
        
        if(Phone.length<10)
        {
            return res.render('register', {msg:"Please enter 10 digit Phone number", msg_type:"error"});
        }

        if(Phone.length>10)
        {
            return res.render('register', {msg:"Please enter 10 digit Phone number", msg_type:"error"});
        }

        if(Password == ""){
            return res.render('register', {msg:"Please enter the password", msg_type:"error"});

        }
        if(!Password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/))
        {
            return res.render('register', {msg:"Password must have 7-15 characters with Special keywords", msg_type:"error"});

        }
      

        if (result.length > 0) {
            return res.render('register', { msg: "Email Id already exists", msg_type: "error" });
        } else if (Password !== Repass) {
            return res.render('register', { msg: "Password does not match", msg_type: "error" });
        }
        // let hashedPassword = await bcrypt.hash(Password, 8);
        // console.log(hashedPassword);

        db.query('Insert into register_id set ?',
            { Name: Name, Email: Email, Phone: Phone, Password: Password },
            (error, result) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log(result);
                    return res.render("Register", { msg: "User registration success", msg_type: "good" });
                }
            });
    });
};

