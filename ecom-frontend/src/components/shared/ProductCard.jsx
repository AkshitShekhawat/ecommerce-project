import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ProductViewModal from "./ProductViewModal";
import truncateText from "../../utils/truncateText";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions";
import toast from "react-hot-toast";

const ProductCard = ({
      productId,
      productName,
      image, 
      description,
      quantity,
      price,
      discount,
      specialPrice,
      about = false,
}) => {
    const [openProductViewModal, setOpenProductViewModal] = useState(false);
    const btnLoader = false;
    const [selectedViewProduct, setSelectedViewProduct] = useState("");
    const isAvailable = quantity && Number(quantity) > 0;
    const dispatch =useDispatch();

    const handleProductView = (product) => {
        if (!about) {
            setSelectedViewProduct(product)
        setOpenProductViewModal(true);
        }    
    };

    const addToCartHnadler = (cartItems) => {
        dispatch(addToCart(cartItems, 1, toast));
    };
    return (
        <div className="border rounded-lg shadow-xl overflow-hidden transition-shadow duration-300">
            <div onClick={() => {
                handleProductView({
                    id: productId,
                    productName,
                    image,
                    description,
                    quantity,
                    price,
                    discount,
                    specialPrice,
                })
            }}
            className="w-full overflow-hidden aspect-[3/2] ">
                <img className="w-full h-full cursor-pointer transition-transform duration-300 transform hover:scale-105"
                src={image}
                alt={productName}
                >
                </img>
            </div>
            <div className="p-4 ">
                <h2 onClick={() => {
                handleProductView({
                    id: productId,
                    productName,
                    image,
                    description,
                    quantity,
                    price,
                    discount,
                    specialPrice,
                })
            }} 
                    className="text-lg font-semibold mb-2 cursor-pointer">
                    {truncateText(productName, 30)}
                </h2>

                <div className="min-h-12 max-h-20">
                    <p className="text-gray-600 text-sm">
                        {truncateText(description, 80)}
                    </p>
                </div>

                { !about && (
                    <div className=" flex items-center justify-between">
                {specialPrice ? (
                    <div className="flex flex-col items-start">
                        {/* Discount Percentage on Top */}
                        <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full mb-1">
                        {Math.round(((price - specialPrice) / price) * 100)}% OFF
                        </span>

                        {/* Original Price */}
                        <span className="text-gray-400 line-through text-sm">
                        ${Number(price).toFixed(2)}
                        </span>

                        {/* Discounted Price */}
                        <span className="text-lg font-bold text-slate-700">
                        ${Number(specialPrice).toFixed(2)}
                        </span>
                    </div>
                    ) : (
                    <span className="text-xl font-bold text-slate-700">
                        ${Number(price).toFixed(2)}
                    </span>
                    )}

                <button
                    disabled={!isAvailable || btnLoader}
                    onClick={() => addToCartHnadler({
                        productId,
                        productName,
                        image, 
                        description,
                        quantity,
                        price,
                        specialPrice,
                    })}  
                    className={`flex justify-center items-center w-36 py-2.5 px-4 
                    rounded-full font-semibold text-white tracking-wide
                    transition-all duration-300 ease-out transform
                    ${isAvailable
                        ? "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 hover:shadow-lg"
                        : "bg-gradient-to-r from-blue-400 to-indigo-400 opacity-70 cursor-not-allowed"
                    }`}
                    >
                            <FaShoppingCart className="mr-2"/>
                    {isAvailable ? "Add to cart" : "Stock Out"}
                </button>
                </div>
                )}

                
            </div>
            <ProductViewModal 
            open={openProductViewModal}
            setOpen={setOpenProductViewModal}
            product={selectedViewProduct}
            isAvailable={isAvailable}
            addToCartHandler={(cartItem) => addToCartHnadler(cartItem)}
            />
        </div>
    )
};

export default ProductCard;