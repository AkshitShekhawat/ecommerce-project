import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import OrderTable from './OrderTable';
import { useSelector } from 'react-redux';
import useOrderFilter from '../../../hooks/useOrderFilter';

const Orders = () => {
  // const adminOrder = [ { "orderId": 4, "email": "admin@example.com", "orderItems": [ { "orderItemId": 4, "product": { "productId": 252, "productName": "The Alchemist by Paulo Coelho | Paperback Edition | Books", "image": "0b0f3ce4-61b9-4786-b78e-c3ebce12fee8.jpeg", "description": "A philosophical novel that inspires readers to follow their dreams. This international bestseller is a timeless story about self-discovery and destiny.", "quantity": 119, "price": 380, "discount": 10, "specialPrice": 339.15 }, "quantity": 1, "discount": 10, "orderedProductPrice": 339.15 } ], "orderDate": "2025-08-12", "payment": { "paymentId": 4, "paymentMethod": "online", "pgPaymentId": "pi_3RvLlQFOwA8raCH20plRMz5w", "pgStatus": "succeeded", "pgResponseMessage": "Payment successful", "pgName": "Stripe" }, "totalAmount": 339.15, "orderStatus": "Order Accepted !", "addressId": 1 }, { "orderId": 1, "email": "user1@example.com", "orderItems": [ { "orderItemId": 1, "product": { "productId": 3, "productName": "Resistance Bands Set | Full Body Workout", "image": "7f8a2928-2c35-47bb-b13e-0c025eea564e.jpeg", "description": "Durable resistance bands with multiple tension levels for strength training, yoga, physical therapy, and home workouts. Lightweight and portable.", "quantity": 99, "price": 499, "discount": 25, "specialPrice": 374.25 }, "quantity": 1, "discount": 25, "orderedProductPrice": 374.25 } ], "orderDate": "2025-08-12", "payment": { "paymentId": 1, "paymentMethod": "online", "pgPaymentId": "pi_3RvDdHFOwA8raCH20s8RDXmk", "pgStatus": "succeeded", "pgResponseMessage": "Payment successful", "pgName": "Stripe" }, "totalAmount": 374.25, "orderStatus": "Order Accepted !", "addressId": 1 } ];
  // const pagination = { pageNumber: 0, pageSize: 12, totalElements: 4, totalPages: 1, lastPage: true };

  const {adminOrder, pagination} = useSelector((state) => state.order);

  useOrderFilter();

  const emptyOrder = !adminOrder || adminOrder ?.length ===0;
  return (
    <div className='pb-6 pt-20'>
      {emptyOrder ? (
        <div className='flex flex-col items-center justify-center text-gray-600 py-10'>
          <FaShoppingCart size={50} className='mb-3'/>
          <h2 className='text-2xl font-semibold'>No Orders Placed Yet</h2>
        </div>
      ) : (
        <OrderTable adminOrder={adminOrder} pagination={pagination}/>
      )}
    </div>
  )
}

export default Orders