import { Link } from "react-router-dom";
import {motion} from "framer-motion"
const Navigation = () => {
  return (
    <header className="w-full  py-2 font-medium flex items-center justify-between bg-gradient-to-r from-blue-50 to-white  relative z-10 ">
      <div className="w-full flex justify-between items-center">
        <nav>
          <img src="../images/Logo.png" alt="logo" />
        </nav>

        <nav>
          <Link to="/" className="mr-4 text-blue-500">
            My URLs
          </Link>
          <a href="#barcode" className="mx-4">
            Barcode
          </a>
          <Link to="/pricing" className="mx-4">
            Pricing
          </Link>
          <Link to="/analytics" className="mx-4">
            Analytics
          </Link>
          <Link to="/faq" className="ml-4">
            FAQs
          </Link>
        </nav>

        <nav>
          <a href="/Login" className="text-blue-500 mr-2"
          
          >
            Log in
          </a>
          
          <motion.button className="mx-3 rounded-full border border-primaryBlue text-primaryBlue hover:bg-primaryBlue hover:text-white  text-sm font-medium py-2.5 px-6"
          whileHover={{
            y: -2,
          }}
          whileTap={{ scale: 0.9 }}>
            Try for free
          </motion.button>
          <motion.button className="ml-2 mr-1 rounded-full border border-primaryBlue py-2.5 px-6  text-white bg-primaryBlue hover:bg-white hover:text-primaryBlue text-sm font-medium"
          whileHover={{
            y: -2,
          }}
          whileTap={{ scale: 0.9 }}>
            Try for free
          </motion.button>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
