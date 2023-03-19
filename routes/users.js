import express from "express";
import {getUsers, createUser, getUser, deleteUserById, updateUserById} from "../controllers/usercontroller.js"

const router = express.Router();

router.get('/',getUsers);

router.post('/',createUser);

router.get('/:id',getUser);

router.delete('/:id',deleteUserById);

router.patch('/:id',updateUserById);

export default router;