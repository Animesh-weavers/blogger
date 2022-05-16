import express from 'express';
import { getAllUser, signup } from '../controller/user-Controller';

const router=express.Router();

router.get("/",getAllUser);
router.post("/signup",signup);

export default router;