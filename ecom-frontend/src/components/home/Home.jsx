import { useDispatch, useSelector } from "react-redux";
import HeroBanner from "./HeroBanner";
import { useEffect } from "react";
import { fetchProducts } from "../../store/actions";
import ProductCard from "../shared/ProductCard";
import Loader from "../shared/Loader";
import { FaExclamationTriangle } from "react-icons/fa";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { isLoading, errorMessage } = useSelector((state) => state.errors);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="lg:px-1.5 sm:px-8 px-4">
      {/* ✅ Full-width Hero Banner */}
      <div className="w-full">
        <HeroBanner />
      </div>

      {/* ✅ Products Section */}
      <div className="lg:px-14 sm:px-8 px-4 py-3">
        <h1 className="text-slate-800 text-3xl  text-center font-bold mb-2">
          Top Deals for You
        </h1>
        <h2 className="text-slate-600 text-center ">
          Discover our handpicked selection of top-rated items just for you!
        </h2>

        {isLoading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : errorMessage ? (
          <div className="flex justify-center items-center h-[200px]">
            <FaExclamationTriangle className="text-slate-800 text-3xl mr-2" />
            <span className="text-slate-800 text-lg font-medium">
              {errorMessage}
            </span>
          </div>
        ) : (
          <>
            {/* ✅ Row 1 */}
            <div className="mt-1.5">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                Products Section 1
              </h2>
              <div className="grid grid-flow-col auto-cols-[270px] gap-6 overflow-x-auto pb-4 scrollbar-hide">
                {products &&
                  products.slice(0, 6).map((item, i) => (
                    <ProductCard key={i} {...item} />
                  ))}
              </div>
            </div>

            {/* ✅ Row 2 */}
            <div className="mt-5">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                Products Section 2
              </h2>
              <div className="grid grid-flow-col auto-cols-[270px] gap-6 overflow-x-auto pb-4 scrollbar-hide">
                {products &&
                  products.slice(6, 10).map((item, i) => (
                    <ProductCard key={i} {...item} />
                  ))}
              </div>
            </div>

            {/* ✅ Row 3 */}
            <div className="mt-14">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                {/* Home & Kitchen */}
              </h2>
              <div className="grid grid-flow-col auto-cols-[200px] gap-6 overflow-x-auto pb-4 scrollbar-hide">
                {products &&
                  products.slice(16, 24).map((item, i) => (
                    <ProductCard key={i} {...item} />
                  ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
