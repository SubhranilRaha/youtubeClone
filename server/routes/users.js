import express from "express";
import {
  deleteuser,
  dislike,
  getUser,
  like,
  subscribe,
  unsubscribe,
  update,
} from "../controllers/users.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//update user
router.put("/:id",verifyToken, update);
//delete user
router.delete("/del/:id", deleteuser);
//get a user
router.get("/find/:id", getUser);
//subscribe a user
router.put("/sub/:id", subscribe);
//unsubscribe a user
router.put("/unsub/:id", unsubscribe);
//like a video
router.put("/like/:videoId", like);
//dislike a video
router.put("/dislike/:videoId", dislike);

export default router;
