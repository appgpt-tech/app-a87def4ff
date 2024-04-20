//Source code generated by AppGPT (www.appgpt.tech)
import { mergeTranslations } from 'ra-core';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

const enResources = {
  resources: {
    Users: {
      name: 'Users',
      fields: {
        username: 'Username',
        email: 'Email',
        password: 'Password',
        role: 'Role',
        id: 'id',
      },
    },
    Vendors: {
      name: 'Vendors',
      fields: {
        companyName: 'Company Name',
        contactName: 'Contact Name',
        email: 'Email',
        password: 'Password',
        id: 'id',
      },
    },
    Customers: {
      name: 'Customers',
      fields: {
        customerName: 'Customer Name',
        email: 'Email',
        password: 'Password',
        billingAddress: 'Billing Address',
        shippingAddress: 'Shipping Address',
        country: 'Country',
        phone: 'Phone',
        id: 'id',
      },
    },
    Inventory: {
      name: 'Inventory',
      fields: {
        product: 'Product',
        quantity: 'Quantity',
        lowStockThreshold: 'Low Stock Threshold',
        id: 'id',
      },
    },
    Products: {
      name: 'Products',
      fields: {
        productName: 'Product Name',
        vendor: 'Vendor',
        price: 'Price',
        weight: 'Weight',
        description: 'Description',
        thumbnail: 'Thumbnail',
        image: 'Image',
        category: 'Category',
        creationDate: 'Creation Date',
        stock: 'Stock',
        id: 'id',
      },
    },
    ProductCategories: {
      name: 'Product Categories',
      fields: { category: 'Category', id: 'id' },
    },
    Discounts: {
      name: 'Discounts',
      fields: {
        product: 'Product',
        discountType: 'Discount Type',
        description: 'Description',
        discountAmount: 'Discount Amount',
        discountPercent: 'Discount Percent',
        id: 'id',
      },
    },
    ShoppingCart: {
      name: 'Shopping Cart',
      fields: {
        customer: 'Customer',
        product: 'Product',
        priceAtPurchase: 'Price At Purchase',
        quantity: 'Quantity',
        id: 'id',
      },
    },
    Orders: {
      name: 'Orders',
      fields: {
        orderNumber: 'Order Number',
        customer: 'Customer',
        totalAmount: 'Total Amount',
        vat: 'Vat',
        totalAmountWithVat: 'Total Amount With Vat',
        shippingCost: 'Shipping Cost',
        shippingAddress: 'Shipping Address',
        orderAddress: 'Order Address',
        orderEmail: 'Order Email',
        orderDate: 'Order Date',
        orderStatus: 'Order Status',
        trackingNo: 'Tracking No',
        id: 'id',
      },
    },
    OrderDetails: {
      name: 'Order Details',
      fields: {
        orderNumber: 'Order Number',
        line: 'Line',
        product: 'Product',
        price: 'Price',
        quantity: 'Quantity',
        id: 'id',
      },
    },
    Payments: {
      name: 'Payments',
      fields: {
        orderNumber: 'Order Number',
        amount: 'Amount',
        paymentMethod: 'Payment Method',
        paymentDate: 'Payment Date',
        paymentStatus: 'Payment Status',
        id: 'id',
      },
    },
    Reviews: {
      name: 'Reviews',
      fields: {
        product: 'Product',
        customer: 'Customer',
        vendor: 'Vendor',
        rating: 'Rating',
        reviewDetails: 'Review Details',
        date: 'Date',
        id: 'id',
      },
    },
    SupportTickets: {
      name: 'Support Tickets',
      fields: {
        user: 'User',
        customer: 'Customer',
        description: 'Description',
        status: 'Status',
        creationDate: 'Creation Date',
        resolutionDate: 'Resolution Date',
        id: 'id',
      },
    },
  },
};
const frResources = {
  resources: {
    Users: {
      name: 'Users (fr)',
      fields: {
        username: 'Username (fr)',
        email: 'Email (fr)',
        password: 'Password (fr)',
        role: 'Role (fr)',
        id: 'id',
      },
    },
    Vendors: {
      name: 'Vendors (fr)',
      fields: {
        companyName: 'Company Name (fr)',
        contactName: 'Contact Name (fr)',
        email: 'Email (fr)',
        password: 'Password (fr)',
        id: 'id',
      },
    },
    Customers: {
      name: 'Customers (fr)',
      fields: {
        customerName: 'Customer Name (fr)',
        email: 'Email (fr)',
        password: 'Password (fr)',
        billingAddress: 'Billing Address (fr)',
        shippingAddress: 'Shipping Address (fr)',
        country: 'Country (fr)',
        phone: 'Phone (fr)',
        id: 'id',
      },
    },
    Inventory: {
      name: 'Inventory (fr)',
      fields: {
        product: 'Product (fr)',
        quantity: 'Quantity (fr)',
        lowStockThreshold: 'Low Stock Threshold (fr)',
        id: 'id',
      },
    },
    Products: {
      name: 'Products (fr)',
      fields: {
        productName: 'Product Name (fr)',
        vendor: 'Vendor (fr)',
        price: 'Price (fr)',
        weight: 'Weight (fr)',
        description: 'Description (fr)',
        thumbnail: 'Thumbnail (fr)',
        image: 'Image (fr)',
        category: 'Category (fr)',
        creationDate: 'Creation Date (fr)',
        stock: 'Stock (fr)',
        id: 'id',
      },
    },
    ProductCategories: {
      name: 'Product Categories (fr)',
      fields: { category: 'Category (fr)', id: 'id' },
    },
    Discounts: {
      name: 'Discounts (fr)',
      fields: {
        product: 'Product (fr)',
        discountType: 'Discount Type (fr)',
        description: 'Description (fr)',
        discountAmount: 'Discount Amount (fr)',
        discountPercent: 'Discount Percent (fr)',
        id: 'id',
      },
    },
    ShoppingCart: {
      name: 'Shopping Cart (fr)',
      fields: {
        customer: 'Customer (fr)',
        product: 'Product (fr)',
        priceAtPurchase: 'Price At Purchase (fr)',
        quantity: 'Quantity (fr)',
        id: 'id',
      },
    },
    Orders: {
      name: 'Orders (fr)',
      fields: {
        orderNumber: 'Order Number (fr)',
        customer: 'Customer (fr)',
        totalAmount: 'Total Amount (fr)',
        vat: 'Vat (fr)',
        totalAmountWithVat: 'Total Amount With Vat (fr)',
        shippingCost: 'Shipping Cost (fr)',
        shippingAddress: 'Shipping Address (fr)',
        orderAddress: 'Order Address (fr)',
        orderEmail: 'Order Email (fr)',
        orderDate: 'Order Date (fr)',
        orderStatus: 'Order Status (fr)',
        trackingNo: 'Tracking No (fr)',
        id: 'id',
      },
    },
    OrderDetails: {
      name: 'Order Details (fr)',
      fields: {
        orderNumber: 'Order Number (fr)',
        line: 'Line (fr)',
        product: 'Product (fr)',
        price: 'Price (fr)',
        quantity: 'Quantity (fr)',
        id: 'id',
      },
    },
    Payments: {
      name: 'Payments (fr)',
      fields: {
        orderNumber: 'Order Number (fr)',
        amount: 'Amount (fr)',
        paymentMethod: 'Payment Method (fr)',
        paymentDate: 'Payment Date (fr)',
        paymentStatus: 'Payment Status (fr)',
        id: 'id',
      },
    },
    Reviews: {
      name: 'Reviews (fr)',
      fields: {
        product: 'Product (fr)',
        customer: 'Customer (fr)',
        vendor: 'Vendor (fr)',
        rating: 'Rating (fr)',
        reviewDetails: 'Review Details (fr)',
        date: 'Date (fr)',
        id: 'id',
      },
    },
    SupportTickets: {
      name: 'Support Tickets (fr)',
      fields: {
        user: 'User (fr)',
        customer: 'Customer (fr)',
        description: 'Description (fr)',
        status: 'Status (fr)',
        creationDate: 'Creation Date (fr)',
        resolutionDate: 'Resolution Date (fr)',
        id: 'id',
      },
    },
  },
};

const en = mergeTranslations(enOriginal, enResources);
const fr = mergeTranslations(frOriginal, frResources);

const translations = { en, fr };
export const i18nProvider = polyglotI18nProvider(
  (locale) => translations[locale],
  'en', //default locale
  [
    { locale: 'en', name: 'English' },
    { locale: 'fr', name: 'Français' },
  ],
);
