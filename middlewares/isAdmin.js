import User from "../models/User"


export const isAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id)
        if(user.role !==3){
            return res.status(401).send({
                success: false,
                message: 'Unautorized Access'
            })
        }else{
            next()
        }
    } catch (error) {
        console.log(error)
        return res.status(401).send({
            success: false,
            message: 'Error in Admin Middleware',
            error
        })
    }
}