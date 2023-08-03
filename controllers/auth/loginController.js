import { comparePassword } from "../../helpers/authHelper.js"
import User from "../../models/User.js"

const loginController = async (req,res) => {
    try {
        const {email, password} = req.body

        //validation
        if(!email || !password){
            return res.status(404).send({
                success: true,
                message: 'Invalid Email or Password'
            })
        }
        const user = await User.findOne({email})
        if(!user){
            res.status(404).send({
                succes:false,
                message: "Email is not Registered",
            })
        }

        const match = await comparePassword(password, user.password)
        if(!match){
            res.status(200).send({
                succes:false,
                message: "Invalid Password",
            })
        }

        res.status(200).send({
            success: true,
            message: 'Login Successfully',
            user: {
                name: user.name,
                email: user.email,
                photo: user.photo,

            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            succes:false,
            message: "Error in Login",
            error
        })
    }
}

export default loginController