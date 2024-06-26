//Source code generated by AppGPT (www.appgpt.tech)
let data: any = {
  defaultData: {
    Users: [
      {
        username: 'username 1',
        email: 'email 1',
        password: 'password 1',
        role: 'role 1',
        id: 55,
      },
      {
        username: 'username 2',
        email: 'email 2',
        password: 'password 2',
        role: 'role 2',
        id: 47,
      },
      {
        username: 'username 3',
        email: 'email 3',
        password: 'password 3',
        role: 'role 3',
        id: 49,
      },
      {
        username: 'username 4',
        email: 'email 4',
        password: 'password 4',
        role: 'role 4',
        id: 11,
      },
      {
        username: 'username 5',
        email: 'email 5',
        password: 'password 5',
        role: 'role 5',
        id: 96,
      },
    ],
    Vendors: [
      {
        companyName: 'companyName 1',
        contactName: 'contactName 1',
        email: 'email 1',
        password: 'password 1',
        id: 39,
      },
      {
        companyName: 'companyName 2',
        contactName: 'contactName 2',
        email: 'email 2',
        password: 'password 2',
        id: 76,
      },
      {
        companyName: 'companyName 3',
        contactName: 'contactName 3',
        email: 'email 3',
        password: 'password 3',
        id: 37,
      },
      {
        companyName: 'companyName 4',
        contactName: 'contactName 4',
        email: 'email 4',
        password: 'password 4',
        id: 83,
      },
      {
        companyName: 'companyName 5',
        contactName: 'contactName 5',
        email: 'email 5',
        password: 'password 5',
        id: 33,
      },
    ],
    Customers: [
      {
        customerName: 'customerName 1',
        email: 'email 1',
        password: 'password 1',
        billingAddress: 'billingAddress 1',
        shippingAddress: 'shippingAddress 1',
        country: 'country 1',
        phone: 'phone 1',
        id: 54,
      },
      {
        customerName: 'customerName 2',
        email: 'email 2',
        password: 'password 2',
        billingAddress: 'billingAddress 2',
        shippingAddress: 'shippingAddress 2',
        country: 'country 2',
        phone: 'phone 2',
        id: 15,
      },
      {
        customerName: 'customerName 3',
        email: 'email 3',
        password: 'password 3',
        billingAddress: 'billingAddress 3',
        shippingAddress: 'shippingAddress 3',
        country: 'country 3',
        phone: 'phone 3',
        id: 0,
      },
      {
        customerName: 'customerName 4',
        email: 'email 4',
        password: 'password 4',
        billingAddress: 'billingAddress 4',
        shippingAddress: 'shippingAddress 4',
        country: 'country 4',
        phone: 'phone 4',
        id: 30,
      },
      {
        customerName: 'customerName 5',
        email: 'email 5',
        password: 'password 5',
        billingAddress: 'billingAddress 5',
        shippingAddress: 'shippingAddress 5',
        country: 'country 5',
        phone: 'phone 5',
        id: 8,
      },
    ],
    Inventory: [
      { product: 1, quantity: 1, lowStockThreshold: 1, id: 88 },
      { product: 2, quantity: 2, lowStockThreshold: 2, id: 75 },
      { product: 3, quantity: 3, lowStockThreshold: 3, id: 90 },
      { product: 4, quantity: 4, lowStockThreshold: 4, id: 81 },
      { product: 5, quantity: 5, lowStockThreshold: 5, id: 6 },
    ],
    Products: [
      {
        productName: 'productName 1',
        vendor: 1,
        price: 0,
        weight: 0.88,
        description: 'description 1',
        thumbnail: 'thumbnail 1',
        image: 'image 1',
        category: 1,
        creationDate: '2025-03-27T12:10:05.174Z',
        stock: 1,
        id: 19,
      },
      {
        productName: 'productName 2',
        vendor: 2,
        price: 0.54,
        weight: 0.39,
        description: 'description 2',
        thumbnail: 'thumbnail 2',
        image: 'image 2',
        category: 2,
        creationDate: '2024-11-04T15:53:44.071Z',
        stock: 2,
        id: 71,
      },
      {
        productName: 'productName 3',
        vendor: 3,
        price: 0.61,
        weight: 0.85,
        description: 'description 3',
        thumbnail: 'thumbnail 3',
        image: 'image 3',
        category: 3,
        creationDate: '2023-05-03T21:22:50.514Z',
        stock: 3,
        id: 61,
      },
      {
        productName: 'productName 4',
        vendor: 4,
        price: 0.35,
        weight: 0.28,
        description: 'description 4',
        thumbnail: 'thumbnail 4',
        image: 'image 4',
        category: 4,
        creationDate: '2023-09-30T06:10:58.103Z',
        stock: 4,
        id: 64,
      },
      {
        productName: 'productName 5',
        vendor: 5,
        price: 0.16,
        weight: 1,
        description: 'description 5',
        thumbnail: 'thumbnail 5',
        image: 'image 5',
        category: 5,
        creationDate: '2025-02-04T18:38:24.781Z',
        stock: 5,
        id: 95,
      },
    ],
    ProductCategories: [
      { category: 'category 1', id: 45 },
      { category: 'category 2', id: 65 },
      { category: 'category 3', id: 32 },
      { category: 'category 4', id: 37 },
      { category: 'category 5', id: 3 },
    ],
    Discounts: [
      {
        product: 1,
        discountType: 'discountType 1',
        description: 'description 1',
        discountAmount: 0.35,
        discountPercent: 0.5,
        id: 54,
      },
      {
        product: 2,
        discountType: 'discountType 2',
        description: 'description 2',
        discountAmount: 0.64,
        discountPercent: 0.28,
        id: 77,
      },
      {
        product: 3,
        discountType: 'discountType 3',
        description: 'description 3',
        discountAmount: 0.33,
        discountPercent: 0.78,
        id: 43,
      },
      {
        product: 4,
        discountType: 'discountType 4',
        description: 'description 4',
        discountAmount: 0.83,
        discountPercent: 0.58,
        id: 28,
      },
      {
        product: 5,
        discountType: 'discountType 5',
        description: 'description 5',
        discountAmount: 0.17,
        discountPercent: 0.84,
        id: 76,
      },
    ],
    ShoppingCart: [
      { customer: 1, product: 1, priceAtPurchase: 0.08, quantity: 1, id: 88 },
      { customer: 2, product: 2, priceAtPurchase: 0.24, quantity: 2, id: 93 },
      { customer: 3, product: 3, priceAtPurchase: 0.66, quantity: 3, id: 36 },
      { customer: 4, product: 4, priceAtPurchase: 0.06, quantity: 4, id: 5 },
      { customer: 5, product: 5, priceAtPurchase: 0.15, quantity: 5, id: 37 },
    ],
    Orders: [
      {
        orderNumber: 'orderNumber 1',
        customer: 1,
        totalAmount: 0.69,
        vat: 0.21,
        totalAmountWithVat: 0.8,
        shippingCost: 0.12,
        shippingAddress: 'shippingAddress 1',
        orderAddress: 'orderAddress 1',
        orderEmail: 'orderEmail 1',
        orderDate: '2025-03-17T04:05:41.001Z',
        orderStatus: 'orderStatus 1',
        trackingNo: 'trackingNo 1',
        id: 100,
      },
      {
        orderNumber: 'orderNumber 2',
        customer: 2,
        totalAmount: 0.06,
        vat: 0.44,
        totalAmountWithVat: 1,
        shippingCost: 0.39,
        shippingAddress: 'shippingAddress 2',
        orderAddress: 'orderAddress 2',
        orderEmail: 'orderEmail 2',
        orderDate: '2024-09-26T21:04:44.420Z',
        orderStatus: 'orderStatus 2',
        trackingNo: 'trackingNo 2',
        id: 2,
      },
      {
        orderNumber: 'orderNumber 3',
        customer: 3,
        totalAmount: 0.41,
        vat: 0.57,
        totalAmountWithVat: 0.03,
        shippingCost: 0.06,
        shippingAddress: 'shippingAddress 3',
        orderAddress: 'orderAddress 3',
        orderEmail: 'orderEmail 3',
        orderDate: '2025-02-16T08:00:57.804Z',
        orderStatus: 'orderStatus 3',
        trackingNo: 'trackingNo 3',
        id: 14,
      },
      {
        orderNumber: 'orderNumber 4',
        customer: 4,
        totalAmount: 0.2,
        vat: 0.09,
        totalAmountWithVat: 0.8,
        shippingCost: 0.13,
        shippingAddress: 'shippingAddress 4',
        orderAddress: 'orderAddress 4',
        orderEmail: 'orderEmail 4',
        orderDate: '2024-08-14T11:52:39.785Z',
        orderStatus: 'orderStatus 4',
        trackingNo: 'trackingNo 4',
        id: 90,
      },
      {
        orderNumber: 'orderNumber 5',
        customer: 5,
        totalAmount: 0.76,
        vat: 1,
        totalAmountWithVat: 0.57,
        shippingCost: 0.08,
        shippingAddress: 'shippingAddress 5',
        orderAddress: 'orderAddress 5',
        orderEmail: 'orderEmail 5',
        orderDate: '2023-11-07T07:03:43.945Z',
        orderStatus: 'orderStatus 5',
        trackingNo: 'trackingNo 5',
        id: 24,
      },
    ],
    OrderDetails: [
      { orderNumber: 1, line: 1, product: 1, price: 0.24, quantity: 1, id: 19 },
      { orderNumber: 2, line: 2, product: 2, price: 0.7, quantity: 2, id: 49 },
      { orderNumber: 3, line: 3, product: 3, price: 0.37, quantity: 3, id: 95 },
      { orderNumber: 4, line: 4, product: 4, price: 0.45, quantity: 4, id: 74 },
      { orderNumber: 5, line: 5, product: 5, price: 0.01, quantity: 5, id: 56 },
    ],
    Payments: [
      {
        orderNumber: 1,
        amount: 0.74,
        paymentMethod: 'paymentMethod 1',
        paymentDate: '2024-11-30T14:32:46.126Z',
        paymentStatus: 'paymentStatus 1',
        id: 91,
      },
      {
        orderNumber: 2,
        amount: 0.56,
        paymentMethod: 'paymentMethod 2',
        paymentDate: '2023-12-10T21:34:23.659Z',
        paymentStatus: 'paymentStatus 2',
        id: 52,
      },
      {
        orderNumber: 3,
        amount: 0.81,
        paymentMethod: 'paymentMethod 3',
        paymentDate: '2024-06-17T06:53:15.288Z',
        paymentStatus: 'paymentStatus 3',
        id: 82,
      },
      {
        orderNumber: 4,
        amount: 0.99,
        paymentMethod: 'paymentMethod 4',
        paymentDate: '2024-02-16T12:17:33.037Z',
        paymentStatus: 'paymentStatus 4',
        id: 62,
      },
      {
        orderNumber: 5,
        amount: 0.08,
        paymentMethod: 'paymentMethod 5',
        paymentDate: '2024-05-09T11:07:48.093Z',
        paymentStatus: 'paymentStatus 5',
        id: 37,
      },
    ],
    Reviews: [
      {
        product: 1,
        customer: 1,
        vendor: 1,
        rating: 1,
        reviewDetails: 'reviewDetails 1',
        date: '2025-02-07T07:47:11.600Z',
        id: 62,
      },
      {
        product: 2,
        customer: 2,
        vendor: 2,
        rating: 2,
        reviewDetails: 'reviewDetails 2',
        date: '2025-01-18T01:37:53.626Z',
        id: 85,
      },
      {
        product: 3,
        customer: 3,
        vendor: 3,
        rating: 3,
        reviewDetails: 'reviewDetails 3',
        date: '2024-05-17T00:22:30.156Z',
        id: 67,
      },
      {
        product: 4,
        customer: 4,
        vendor: 4,
        rating: 4,
        reviewDetails: 'reviewDetails 4',
        date: '2024-07-22T10:11:02.584Z',
        id: 75,
      },
      {
        product: 5,
        customer: 5,
        vendor: 5,
        rating: 5,
        reviewDetails: 'reviewDetails 5',
        date: '2025-02-25T03:28:12.946Z',
        id: 68,
      },
    ],
    SupportTickets: [
      {
        user: 1,
        customer: 1,
        description: 'description 1',
        status: 'status 1',
        creationDate: '2023-10-28T02:30:07.425Z',
        resolutionDate: '2023-09-06T15:34:31.961Z',
        id: 28,
      },
      {
        user: 2,
        customer: 2,
        description: 'description 2',
        status: 'status 2',
        creationDate: '2023-12-17T13:39:20.700Z',
        resolutionDate: '2024-12-11T01:11:48.593Z',
        id: 91,
      },
      {
        user: 3,
        customer: 3,
        description: 'description 3',
        status: 'status 3',
        creationDate: '2023-11-02T10:26:12.045Z',
        resolutionDate: '2024-10-23T06:32:02.135Z',
        id: 11,
      },
      {
        user: 4,
        customer: 4,
        description: 'description 4',
        status: 'status 4',
        creationDate: '2023-06-03T08:16:18.743Z',
        resolutionDate: '2023-09-08T09:32:09.582Z',
        id: 52,
      },
      {
        user: 5,
        customer: 5,
        description: 'description 5',
        status: 'status 5',
        creationDate: '2024-08-05T22:40:11.561Z',
        resolutionDate: '2023-07-15T22:59:32.337Z',
        id: 67,
      },
    ],
  },
};
export default data;
