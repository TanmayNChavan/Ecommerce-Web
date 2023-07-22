import express from 'express';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import { brainTreePaymentController, braintreeTokenController, createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productFiltersController, productListController, productPhotoController, realtedProductController, searchProductController, updateProductController } from '../controllers/productController.js';
import formidable from 'express-formidable'
const router= express.Router();

//routes
//http://localhost:8081/api/v1/product/create-product
router.post(
    "/create-product",
    requireSignIn,
    isAdmin,
    formidable(),
    createProductController
  );

//get all product
//http://localhost:8081/api/v1/product/get-product
router.get('/get-product',getProductController);

//get single product
//http://localhost:8081/api/v1/product/get-product
router.get('/get-product/:slug',getSingleProductController);

//get photo
//http://localhost:8081/api/v1/product/product-photo
router.get("/product-photo/:pid", productPhotoController);

//delete photo
//http://localhost:8081/api/v1/product
router.delete("/delete-product/:pid", deleteProductController);

//filter product
//http://localhost:8081/api/v1/product/product-photo
router.post("/product-filters",productFiltersController);

//product count
//http://localhost:8081/api/v1/product/product-count
router.get("/product-count",productCountController);

//product per page
router.get("/product-list/:page", productListController);

//update product
//http://localhost:8081/api/v1/product/update-product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//search product
//http://localhost:8081/api/v1/product/search/:keyword
router.get("/search/:keyword", searchProductController);

//similar product
//http://localhost:8081/api/v1/product/related-product/:pid/:cid
router.get("/related-product/:pid/:cid", realtedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;
