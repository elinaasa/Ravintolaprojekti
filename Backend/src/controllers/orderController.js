// orderController.js

// Sample in-memory data as a placeholder for database interaction
let orders = [];

// Controller for handling order-related operations
const orderController = {
  // Get all orders
  getAllOrders: (req, res) => {
    res.json(orders);
  },

  // Place a new order
  placeOrder: (req, res) => {
    const newOrder = req.body;
    newOrder.id = orders.length + 1;
    orders.push(newOrder);
    res.status(201).json(newOrder);
  },

  // Get details of a specific order by ID
  getOrderById: (req, res) => {
    const orderId = parseInt(req.params.id);
    const order = orders.find(o => o.id === orderId);

    if (order) {
      res.json(order);
    } else {
      res.status(404).json({message: 'Order not found'});
    }
  },

  // Update the status of an existing order
  updateOrderStatus: (req, res) => {
    const orderId = parseInt(req.params.id);
    const newStatus = req.body.status;

    orders = orders.map(order =>
      order.id === orderId ? {...order, status: newStatus} : order
    );

    res.json({message: 'Order status updated successfully'});
  },

  // Delete an order by ID
  deleteOrder: (req, res) => {
    const orderId = parseInt(req.params.id);
    orders = orders.filter(order => order.id !== orderId);
    res.json({message: 'Order deleted successfully'});
  },
};

module.exports = orderController;
