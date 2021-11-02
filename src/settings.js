const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    endpoint: {
      orders: 'orders',
    },
  },
  message: {
    confirm: 'Your order is completed. We will contact you in 2 days.',
    error: 'Order failed. Name and Contact is required',
  },
};

export default settings;