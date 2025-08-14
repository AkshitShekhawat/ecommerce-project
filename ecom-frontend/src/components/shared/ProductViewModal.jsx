import React, { useState, useRef } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { MdClose } from "react-icons/md";

function ProductViewModal({ open, setOpen, product }) {
  const { productName, image, description, price, specialPrice } = product;

  const [isZoomed, setIsZoomed] = useState(false);
  const [backgroundPos, setBackgroundPos] = useState("0% 0%");
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!imgRef.current) return;
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setBackgroundPos(`${x}% ${y}%`);
  };

  return (
    <Dialog
      open={open}
      as="div"
      className="relative z-50"
      onClose={() => setOpen(false)}
    >
      <DialogBackdrop className="fixed inset-0 bg-black/40 transition-opacity" />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-6">
          <DialogPanel
            transition
            className="relative w-full max-w-5xl rounded-2xl bg-white text-gray-800 shadow-xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full p-2 shadow-md transition"
            >
              <MdClose size={24} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              {/* Left - Image with Zoom on Hover */}
              <div
                className="relative flex justify-center items-center bg-gray-100 rounded-lg p-4 overflow-hidden h-[400px]"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
                onMouseMove={handleMouseMove}
              >
                {/* Normal Image */}
                <img
                  ref={imgRef}
                  src={image}
                  alt={productName}
                  className={`w-full h-full object-contain transition-opacity duration-200 ${
                    isZoomed ? "opacity-0" : "opacity-100"
                  }`}
                />

                {/* Zoomed Image */}
                {isZoomed && (
                  <div
                    className="absolute inset-0 bg-no-repeat bg-contain"
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundPosition: backgroundPos,
                      backgroundSize: "200%", // Zoom factor
                    }}
                  ></div>
                )}
              </div>

              {/* Right - Product Info */}
              <div className="flex flex-col justify-center">
                <button
                  onClick={() => setOpen(false)}
                  className="text-sm text-gray-500 hover:underline mb-2"
                >
                  ← Back To All Products
                </button>

                <h1 className="text-3xl font-bold">{productName}</h1>
                <p className="text-gray-600 mb-4">{description}</p>

                {/* Price */}
                <div className="mb-4">
                  {specialPrice ? (
                    <>
                      <span className="line-through text-gray-400 mr-2">
                        ${Number(price).toFixed(2)}
                      </span>
                      <span className="text-2xl font-semibold text-gray-800">
                        ${Number(specialPrice).toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <span className="text-2xl font-semibold text-gray-800">
                      ${Number(price).toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-2 mb-6">
                  <label htmlFor="qty" className="text-sm font-medium">
                    Qty:
                  </label>
                  <input
                    id="qty"
                    type="number"
                    defaultValue={1}
                    min={1}
                    className="w-16 p-1 border border-gray-300 rounded text-gray-800 text-center"
                  />
                </div>

                {/* Buttons */}
                <div className="space-y-3">
                  <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-semibold shadow-sm">
                    Add to Cart 🛒
                  </button>
                  <button className="w-full py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md font-semibold shadow-sm">
                    View Cart 🛍️
                  </button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

export default ProductViewModal;
