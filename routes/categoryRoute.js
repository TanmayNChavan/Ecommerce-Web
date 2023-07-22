import express from 'express';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from '../controllers/categoryController.js';

const router = express.Router()

//routes create category
//http://localhost:8081/api/v1/category/create-category
router.post('/create-category',requireSignIn,isAdmin,createCategoryController)

//update category
//http://localhost:8081/api/v1/category/update-category/64870e2788f17d51198db668
router.put('/update-category/:id',requireSignIn,isAdmin,updateCategoryController)

//get all category
//http://localhost:8081/api/v1/category/get-category
router.get('/get-category',categoryController);

//singal category
//http://localhost:8081/api/v1/category/single-category
router.get('/single-category/:slug',singleCategoryController);

//delete category
//http://localhost:8081/api/v1/category/delete-category
router.delete('/delete-category/:id',requireSignIn,isAdmin,deleteCategoryController);

export default router;