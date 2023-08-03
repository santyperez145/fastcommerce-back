import User from "../../models/User.js";
import { hashPassword } from "../../helpers/authHelper.js";


const registerController = async (req,res) => {
    try {
        const {name,email,password,photo} = req.body

        //validations//
        if(!name){
            return res.send({error:'Name is Required'})
        }
        if(!email){
            return res.send({error:'Email is Required'})
        }
        if(!password){
            return res.send({error:'Password is Required'})
        }
        if(!photo){
            return res.send({error:'Photo is Required'})
        }

        //Check user
        const existingUser = await User.findOne({email})
        
        //Existing User
        if(existingUser){
            return res.status(200).send({
                success: true,
                message: 'Already exist an User with that Email, Please Login'
            })
        }

        //Register user
        const hashedPassword = await hashPassword(password)
        //save
        const user = await new User({name, email, photo, password:hashedPassword}).save()

        res.status(201).send({
            success: true,
            message: "User registered Successfully",
            user
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            succes:false,
            message: "error in Registration",
            error
        })
    }
};

export default registerController