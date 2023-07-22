import mongoose from "mongoose";
import  express, { Router }  from "express";
import {registerController,loginController,testController, forgotPasswordController, updateProfileController, getOrdersController, getAllOrdersController, orderStatusController} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router=express.Router();// router object

//register
//http://localhost:8081/api/v1/auth/register
router.post('/register',registerController);

//login
//http://localhost:8081/api/v1/auth/login
router.post('/login',loginController);

//Forgot Password || post
router.post('/forgot-password',forgotPasswordController);

//test 
//http://localhost:8081/api/v1/auth/test
router.get('/test',requireSignIn,isAdmin,testController);

//protected User route auth
//http://localhost:8081/api/v1/auth/user-auth
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  });

//protected admin route auth
//http://localhost:8081/api/v1/auth/admin-auth
router.get("/admin-auth", requireSignIn,isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
//http://localhost:8081/api/v1/auth/orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put("/order-status/:orderId", requireSignIn, isAdmin, orderStatusController);

export default router;
