const { Cart, Product } = require("../index.js"); // Adjust path if necessary

module.exports = {
  // Get all cart items
  getAllCartItems: async (req, res) => {
    try {
      const cartItems = await Cart.findAll();
      res.status(200).json(cartItems);
    } catch (error) {
      console.error("Error fetching cart items:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  // Get cart items by user ID
  getCartByUserId: async (req, res) => {
    const { userId } = req.user.id
    try {
      const cartItems = await Cart.findAll({ where: { userId } });
      res.status(200).json(cartItems);
    } catch (error) {
      console.error("Error fetching cart:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  // Add a product to the cart
  addToCart: async (req, res) => {
    const {  productId, quantity ,userId} = req.body;
    // Assuming you have user ID from authentication middleware

    try {
      const product = await Product.findByPk(productId);
      if (!product) return res.status(404).json({ message: "Product not found" });

      const totalPrice = product.price * quantity;

      const cartItem = await Cart.create({
        userId:req.user.id,
        productId,
        quantity,
        totalPrice,
      });

      res.status(201).json({ message: "Product added to cart", cartItem });
    } catch (error) {
      console.error("Error adding to cart:", error);
      console.log(userId);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  // Update cart item quantity
  updateCartItem: async (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;

    try {
      const cartItem = await Cart.findByPk(id);
      if (!cartItem) return res.status(404).json({ message: "Cart item not found" });

      const product = await Product.findByPk(cartItem.productId);
      if (!product) return res.status(404).json({ message: "Product not found" });

      const totalPrice = product.price * quantity;

      await cartItem.update({ quantity, totalPrice });

      res.status(200).json({ message: "Cart item updated", cartItem });
    } catch (error) {
      console.error("Error updating cart item:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  // Remove a product from the cart
  removeFromCart: async (req, res) => {
    const { id } = req.params;
    try {
      const cartItem = await Cart.findByPk(id);
      if (!cartItem) return res.status(404).json({ message: "Cart item not found" });

      await cartItem.destroy();
      res.status(200).json({ message: "Cart item removed" });
    } catch (error) {
      console.error("Error removing cart item:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  // Clear the cart for a user
  clearCart: async (req, res) => {
    const { userId } = req.params;
    try {
      await Cart.destroy({ where: { userId } });
      res.status(200).json({ message: "Cart cleared successfully" });
    } catch (error) {
      console.error("Error clearing cart:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};
