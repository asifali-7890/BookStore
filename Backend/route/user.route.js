import signUp from '../controllers/user.controller.js'
import express from 'express';

const router = express.Router();

router.post('/signup', signUp);
export default router