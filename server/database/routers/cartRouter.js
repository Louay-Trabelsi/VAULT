const express = require("express");
const cartController = require("../controllers/cartController");
const { authenticate } = require("../controllers/userController"); // Middleware for authentication

const router = express.Router();

// Routes (Protected routes require authentication)
router.get("/", authenticate, cartController.getAllCartItems); // Get all cart items
router.get("/user", authenticate, cartController.getCartByUserId); // Get cart by user ID
router.post("/", authenticate, cartController.addToCart); // Add a product to the cart
router.put("/:id", authenticate, cartController.updateCartItem); // Update cart item
router.delete("/:id", authenticate, cartController.removeFromCart); // Remove an item from the cart
router.delete("/clear", authenticate, cartController.clearCart); // Clear the user's cart

module.exports = router;