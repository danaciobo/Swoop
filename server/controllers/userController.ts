import User from '../models/user';
import { Request, Response, NextFunction } from 'express';


export const createProfile = async (req:Request, res:Response) => {
  try {
    const newUser = await User.create({
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      // avatar: req.file.path

    })
    return res.status(201).send(newUser);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

export const updateProfile = async (req:Request, res:Response) => {
  try {

  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

export const getProfile = async (req:Request, res:Response) => {
  try {
    console.log(req.params);
    const id = req.params.id
    const profile = await User.findById(id)
    return res.status(200).json(profile);

  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

export const getUserByEmail = async (req:Request, res:Response) => {
  try {
    console.log(req.params);
    const email = req.params.email
    const profile = await User.findOne({email: email})
    return res.status(200).json(profile);

  } catch (e) {
    console.log(e);
    res.status(500);
  }
};
export const getUsers = async (req:Request, res:Response) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

export default  {getUsers, getUserByEmail, getProfile, updateProfile, createProfile}