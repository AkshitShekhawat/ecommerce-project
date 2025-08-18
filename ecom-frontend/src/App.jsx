import './App.css'
import Products from './components/products/Products'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './components/home/Home'
import Navbar from './components/shared/NavBar'
import About from './components/About'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'
import Cart from './components/cart/Cart'
import LogIn from './components/auth/LogIn'
import PrivateRoute from './components/PrivateRoute'
import Register from './components/auth/Register'
import Checkout from './components/checkout/Checkout'
import PaymentConfirmation from './components/checkout/PaymentConfirmation'
import AdminLayout from './components/admin/AdminLayout'
import DashBoard from './components/admin/dashboard/DashBoard'
import Sellers from './components/admin/sellers/Sellers'
import AdminProducts from './components/admin/products/AdminProducts'
import Category from './components/admin/categories/Category'
import Orders from './components/admin/orders/Orders'
import Footer from './components/shared/Footer'


// Wrapper to conditionally show footer
function Layout({ children }) {
  const location = useLocation();

  // routes where we don't want footer
  const hideFooterRoutes = [
    "/checkout",
    "/order-confirm",
    "/admin",
  ];

  const shouldHideFooter = hideFooterRoutes.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <div className="flex flex-col min-h-screen"> 
      {/* main content grows */}
      <main className="flex-1">
        {children}
      </main>

      {/* footer only if allowed */}
      {!shouldHideFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />

          <Route path='/' element={<PrivateRoute />}>
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/order-confirm' element={<PaymentConfirmation />} />
          </Route>

          <Route path='/' element={<PrivateRoute publicPage />}>
            <Route path='/login' element={<LogIn />} />
            <Route path='/register' element={<Register />} />
          </Route>

          <Route path='/' element={<PrivateRoute adminOnly />}>
            <Route path='/admin' element={<AdminLayout />}>
              <Route path='' element={<DashBoard />} />
              <Route path='products' element={<AdminProducts />} />
              <Route path='sellers' element={<Sellers />} />
              <Route path='orders' element={<Orders />} />
              <Route path='categories' element={<Category />} />
            </Route>
          </Route>
        </Routes>
      </Layout>
      <Toaster position='bottom-center' />
    </Router>
  )
}

export default App
