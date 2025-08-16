import { MdArrowBack, MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ItemContent from "./ItemContent";
import CartEmpty from "./CartEmpty";
import { formatPrice } from "../../utils/formatPrice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.carts);
  const newCart = { ...cart };

  newCart.totalPrice = cart?.reduce(
    (acc, cur) => acc + Number(cur?.specialPrice) * Number(cur?.quantity),
    0
  );

  if (!cart || cart.length === 0) return <CartEmpty />;

  return (
    <div className="lg:px-20 sm:px-10 px-4 py-10 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
          <MdShoppingCart size={36} className="text-custom-blue" />
          Your Cart
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Review your selected items before checkout
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Left Side - Cart Items */}
        <div className="lg:col-span-2">
          <div className="grid md:grid-cols-5 grid-cols-4 gap-4 pb-4 font-semibold items-center border-b border-gray-200">
            <div className="md:col-span-2 text-lg text-gray-800">Product</div>
            <div className="text-center text-lg text-gray-800">Price</div>
            <div className="text-center text-lg text-gray-800">Quantity</div>
            <div className="text-center text-lg text-gray-800">Total</div>
          </div>

          <div className="mt-4 space-y-4">
            {cart &&
              cart.length > 0 &&
              cart.map((item, i) => (
                <div
                  key={i}
                  className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                >
                  <ItemContent {...item} />
                </div>
              ))}
          </div>
        </div>

        {/* Right Side - Summary */}
        <div className="bg-white shadow-xl rounded-2xl p-6 sticky top-24 h-fit">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Order Summary
          </h2>

          <div className="flex justify-between mb-3 text-gray-700 text-lg font-medium">
            <span>Subtotal</span>
            <span>{formatPrice(newCart?.totalPrice)}</span>
          </div>

          <p className="text-sm text-gray-500 mb-6">
            Taxes and shipping calculated at checkout
          </p>

          <Link to="/checkout">
            <button className="font-semibold w-[300px] py-2 px-4 rounded-lg bg-custom-blue text-white flex items-center justify-center gap-2 hover:text-gray-300 transition duration-500" 
                    // className="w-full p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-lg flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] transition duration-300"
            >
              <MdShoppingCart size={22} />
              Proceed to Checkout
            </button>
          </Link>

          <Link
            className="flex gap-2 items-center mt-6 text-blue-600 hover:text-blue-800 transition"
            to="/products"
          >
            <MdArrowBack />
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
    