import Item from '../models/item'
// const { Request, Response, NextFunction } =  require('express');
import { Request, Response } from "express";


export const getItems = async (req:Request, res:Response) => {
  try {
    const items = await Item.find();
    //console.log('items in controller', items)
    return res.status(200).send(items);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

export const getByCategory = async (req:Request, res:Response) => {
  try {

  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

export const getItemById = async (req:Request, res:Response) => {
  try {
    const id = req.params.id
    const item = await Item.findById(id)
    return res.status(200).json(item);

  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

export const createItem = async (req:any, res:Response) => {
  try {
    console.log('creating')
    console.log(req.body)
      const newItem = await Item.create({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        quantity: req.body.quantity,
        location: req.body.location,
        image: req.file ? req.file.path : undefined,
        date_added: Date.now(),
        // seller: req.body.user._id
      });
      // await Item.create(newItem)
      console.log(newItem)

      res.status(201).send(newItem);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

export const updateItem = async (req:Request, res:Response) => {
  try {
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

export const deleteItem = async (req:Request, res:Response) => {
  try {

  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

export default { getItemById, getByCategory, deleteItem, updateItem, createItem, getItems }

