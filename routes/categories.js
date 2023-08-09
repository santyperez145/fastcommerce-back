import { Router } from "express";
import create from "../controllers/categories/create.js"
import read from "../controllers/categories/read.js"
import update from "../controllers/categories/update.js"
import remove from "../controllers/categories/remove.js"
import passport from "../middlewares/passport.js"

let category_router = Router();

category_router.post("/register", passport.authenticate('jwt', { session: false }), create)
category_router.get("/", read)
//category_router.put("/:id", passport.authenticate('jwt', { session: false }), /*is_property_of_categories,*/ update)
//category_router.delete(":id", passport.authenticate('jwt', { session: false }), /*is_property_of_categories,*/ remove)

export default category_router;