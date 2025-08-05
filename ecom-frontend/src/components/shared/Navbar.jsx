import { Badge } from "@mui/material";
import { useEffect, useState } from "react";
import { FaShoppingCart, FaSignInAlt, FaStore } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import UserMenu from "../UserMenu";

const Navbar = () => {
    const path = useLocation().pathname;
    const [navbarOpen, setNavbarOpen] = useState(false);
    const { cart } = useSelector((state) => state.carts);
    const { user } = useSelector((state) => state.auth);

            {/* Search Bar */}

    const [searchTerm, setSearchTerm] = useState("");
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const params = new URLSearchParams(searchParams);

    useEffect(() => {
        const currentSearchTerm = searchParams.get("keyword") || "";
        setSearchTerm(currentSearchTerm);
    }, [searchParams]);

    const handleSearchSubmit = () => {
    if (searchTerm.trim()) {
        params.set("keyword", searchTerm.trim());
        navigate(`/products?${params.toString()}`);
    } else {
        navigate("/products");
    }
};

useEffect(() => {
    if (!searchTerm.trim()) return;

    const delay = setTimeout(() => {
        params.set("keyword", searchTerm.trim());

        if (path !== "/products") {
            navigate(`/products?${params.toString()}`);
        } else {
            navigate(`?${params.toString()}`, { replace: true });
        }
    }, 500); // debounce delay (optional)

    return () => clearTimeout(delay);
}, [searchTerm]);


    const handleCategoryChange = (e) => {
        const value = e.target.value;
        if (value === "all") {
            params.delete("category");
        } else {
            params.set("category", value);
        }
        navigate(`/products?${params.toString()}`);
    };
            {/* Search Bar */}

    return (
        <div className="h-[70px] bg-custom-gradient text-white z-50 flex items-center sticky top-0">
            <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between items-center">
                <Link to="/" className="flex items-center text-2xl font-bold">
                    <FaStore className="mr-2 text-3xl" />
                    <span className="font-[Poppins]">E-Shop</span>
                </Link>

                {/* Amazon-style Category + Search Bar */}
                <div className="hidden sm:flex items-stretch w-[400px] mx-4 bg-white rounded-md overflow-hidden border border-red-400">
                    <select
                        onChange={handleCategoryChange}
                        className="bg-gray-200 px-1 text-black outline-none border-r border-red-400 cursor-pointer text-sm"
                    >
                        <option value="all">All</option>
                        <option value="Books">Books</option>
                        {/* Add more categories here if needed */}
                    </select>

                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search Products"
                        className="flex-grow px-4 py-2 text-black focus:outline-none"
                    />

                    <button
                        onClick={handleSearchSubmit}
                        className="bg-gradient-to-r px-4 from-purple-600 to-red-500 text-white hover:from-purple-500 hover:to-red-400 transition duration-300 ease-in-out"
                        >
                        <FiSearch className="text-black text-xl" />
                    </button>

                </div>

                {/* Nav Links + Mobile Dropdown */}
                <ul className={`flex sm:gap-10 gap-4 sm:items-center  text-slate-800 sm:static absolute left-0 top-[70px] sm:shadow-none shadow-md ${
                    navbarOpen ? "h-fit sm:pb-0 pb-5" : "h-0 overflow-hidden"
                }  transition-all duration-100 sm:h-fit sm:bg-none bg-custom-gradient text-white sm:w-fit w-full sm:flex-row flex-col px-4 sm:px-0`}>
                    <li className="font-medium transition-all duration-150">
                        <Link className={`${path === "/" ? "text-white font-semibold" : "text-gray-200"}`} to="/">
                            Home
                        </Link>
                    </li>

                    <li className="font-medium transition-all duration-150">
                        <Link className={`${path === "/products" ? "text-white font-semibold" : "text-gray-200"}`} to="/products">
                            Products
                        </Link>
                    </li>

                    <li className="font-medium transition-all duration-150">
                        <Link className={`${path === "/about" ? "text-white font-semibold" : "text-gray-200"}`} to="/about">
                            About
                        </Link>
                    </li>

                    <li className="font-medium transition-all duration-150">
                        <Link className={`${path === "/contact" ? "text-white font-semibold" : "text-gray-200"}`} to="/contact">
                            Contact
                        </Link>
                    </li>

                    <li className="font-medium transition-all duration-150">
                        <Link className={`${path === "/cart" ? "text-white font-semibold" : "text-gray-200"}`} to="/cart">
                            <Badge
                                showZero
                                badgeContent={cart?.length || 0}
                                color="primary"
                                overlap="circular"
                                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                                <FaShoppingCart size={25} />
                            </Badge>
                        </Link>
                    </li>

                    {(user && user).id ? (
                        <li className="font-medium transition-all duration-150">
                            <UserMenu />
                        </li>
                    ) : (
                    <li className="font-medium transition-all duration-150">
                        <Link
                            className="flex items-center space-x-2 px-4 py-[6px] 
                            bg-gradient-to-r from-purple-600 to-red-500 
                            text-white font-semibold rounded-md shadow-lg 
                            hover:from-purple-500 hover:to-red-400 transition 
                            duration-300 ease-in-out transform"
                            to="/login"
                        >
                            <FaSignInAlt />
                            <span>Login</span>
                        </Link>
                    </li>
                    )}
                </ul>

                {/* Mobile View Toggle */}
                <button
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    className="sm:hidden flex items-center sm:mt-0 mt-2">
                    {navbarOpen ? (
                        <RxCross2 className="text-white text-3xl" />
                    ) : (
                        <IoIosMenu className="text-white text-3xl" />
                    )}
                </button>
            </div>
        </div>
    );
};

export default Navbar;
