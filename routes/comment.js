import Router from 'express'
import create from '../controllers/comments/create.js'
import read from '../controllers/comments/read.js'
import update from '../controllers/comments/update.js';
import remove from '../controllers/comments/remove.js';
import passport from '../middlewares/passport.js';
import is_property_of_comments from '../middlewares/is_property_of_comments.js';

let comment_router = Router();

comment_router.post('/', create)
comment_router.get("/", read)
comment_router.put("/:id", passport.authenticate('jwt',{ session:false }), is_property_of_comments, update)
comment_router.delete("/:id", passport.authenticate('jwt',{ session:false }), is_property_of_comments, remove)

export default comment_router;