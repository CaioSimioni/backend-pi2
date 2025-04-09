import express from 'express';
import {login, responder, teste } from '../controllers/mainController'
import { authMiddleware } from '../middlewares/auth';


const router = express.Router();

router.route('/teste').get(teste);
router.route('/login').post(login);
// router.route('/responder').post(authMiddleware,responder as any);
router.route('/responder').post(responder as any);


export {router as mainRouter};

