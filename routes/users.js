import express from "express";
import {getUsers, createUser, getUserById, deleteUserById, updateUserById} from "../controllers/usercontroller.js"

const router = express.Router();

router.get('/',getUsers);

router.post('/',createUser);

router.get('/:id',getUserById);

router.delete('/:id',deleteUserById);

router.patch('/:id',updateUserById);

export default router;