import Router from "express"
import create from "../controllers/products/create.js"
import read from "../controllers/products/read.js"
import readadmin from "../controllers/products/readadmin.js"
import read_one from "../controllers/products/read_one.js"
import update from "../controllers/products/update.js"
import remove from "../controllers/products/remove.js"
import passport from "../middlewares/passport.js"
import validator from "../middlewares/validator.js"
import productCreate from "../schemas/product/productCreate.js"
import is_property_of_products from "../middlewares/is_property_of_products.js"

let product_router = Router();

product_router.get("/", read)
product_router.get("/readadmin", readadmin)
product_router.post("/create", /*passport.authenticate('jwt', { session: false }),*/ validator(productCreate), create)
product_router.get("/:id", read_one)
product_router.put("/update/:id", /*passport.authenticate('jwt', { session: false }),*/ is_property_of_products, update)
product_router.delete("/delete/:id", /*passport.authenticate('jwt', { session: false }),*/ is_property_of_products, remove)

export default product_router;
