const validator = (schema) => [
    (req, res, next) => {
        const validation = schema.validate(req.body, {abortEarly:false})
        if (validation.error) {
            console.log(validation)
            return res.status(400).json({
                success: false,
                messages: validation.error.details.map(error => error.message)
            })
        }
        return next()
    }
]
export default validator