import { createError } from "../error.js";
import User from "../models/User.js";

export const update = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "you can update only your account!"));
  }
};

export const deleteuser =async (req, res, next) => {
  if (req.params.id === req.user.id) {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted");
  } catch (err) {
    next(err);
  }
} else {
  return next(createError(403, "you can delete only your account!"));
}};

export const getUser = async(req, res, next) => {
  try {
    const user=await User.findById(req.params.id)
    res.status(200).json(user);
  } catch (err) {
    next(err)
  }
};

export const subscribe = async(req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id,{
      $push:{subUsers:req.params.id}
    })
    await User.findByIdAndUpdate(req.params.id,{
      $inc:{subs:1}
    });
    console.log(req.user.subUsers)
    res.status(200).json("Subscription successfull.")
  } catch (err) {
    next(err)
  }
};

export const unsubscribe = async(req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id,{
      $pull:{subUsers:req.params.id}
    })
    await User.findByIdAndUpdate(req.params.id,{
      $inc:{subs:-1}
    });
    res.status(200).json("Unsubscription successfull.")
  } catch (err) {
    next(err)
  }
};

export const like = async(req, res, next) => {
  try {
    
  } catch (err) {
    next(err)
  }
};

export const dislike = async(req, res, next) => {
  try {
    
  } catch (err) {
    next(err)
  }
};
