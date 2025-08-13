import React from 'react'
import DashboardOverview from './DashboardOverview'
import { FaBoxOpen, FaDollarSign, FaShoppingCart } from 'react-icons/fa'

const DashBoard = () => {

  const { productCount, totalRevenue, totalOrders } = { "productCount":  "13", "totalRevenue": "8680.98", "totalOrders": "4"};
  return (
    <div>
      <div className='flex md:flex-row mt-8 flex-col lg:justify-between 
          border border-slate-400 rounded-lg bg-linear-to-r
           from-blue-50 to-blue-100 shadow-lg'>

            <DashboardOverview 
              title="Total Products"
              amount={productCount}
              Icon={FaBoxOpen}
            />

            <DashboardOverview 
              title="Total Orders"
              amount={totalOrders}
              Icon={FaShoppingCart}
            />

            <DashboardOverview 
              title="Total Revenue"
              amount={totalRevenue}
              Icon={FaDollarSign}
              revenue
            />
      </div>
    </div>
  )
}

export default DashBoard