import TextAnimate from "../Components/TextAnimate";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import image1 from "../images/Ellipse 1.png";
import image2 from "../images/Rectangle 9.png";

const MyUrls = () => {
  return (
    <main className="w-full flex flex-col items-center self-center">
      <TextAnimate
        text="Optimize Your Online Experience With Our Advance Url Shortening Solution."
        className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
      />
      <p className="my-6 text-base font-medium ">
        Personalize your shortened URLs to align with your brand identity.
        Utilize custom slugs, branded links, and domain customization options to
        reinforce your brand presence and enhance user engagement.
      </p>
      <div className="flex items-center m-3">
        <motion.button
          className="rounded-full  border border-primaryBlue py-2.5 px-8  text-white focus:outline-none focus:z-10 bg-primaryBlue mr-4 text-sm font-medium hover:text-blue-500 hover:bg-white"
          whileHover={{
            y: -2,
          }}
          whileTap={{ scale: 0.9 }}
        >
          <a href="#register">Sign Up</a>
        </motion.button>
        <Link to="/LearnMore" className="text-primaryBlueBase text-sm ">
          Learn more
        </Link>
      </div>

      <div>
        <div className="flex flex-row items-center box-border gap-10 justify-between relative border border-blue-400 rounded-xl mt-10 p-10 max-w-600 h-56  top-10 backdrop-blur-3xl">
          <Icon
            icon="iconamoon:link-thin"
            color="#cacaca"
            height="150"
            className="!text-gray-900 top-12"
          />

          <Icon
            icon="mdi:arrow-up-thin"
            color="#005AE2"
            height="40"
            rotate={1}
            className=" flex-none order-1 flex-grow-0 !w-30"
          />
          <p className="my-4 text-base font-medium order-2">
            Seamlessly transform your long URLs into concise and shareable links
            with just few clicks.
          </p>
        </div>
      </div>

      <div className="mt-20 ">
        <img
          src={image1}
          alt={"Ellipse"}
          className="w-[900px] h-[49px]  left-[256px] top-[951px]"
        />
        {/* <div className="absolute w-[1440px] h-24 left-0 top-[931px] bg-slate-200"></div> */}
        <img
          src={image2}
          alt={"Rectangle"}
          className="absolute w-[1440px] left-[20px] h-[-280px]  "
        />

        {/* ADD THE SHORTENER COMPONENT RIGHT HERE */}
      </div>
      <div className="w-full h-full m-10 p-10">
      </div>
    </main>
  );
};

export default MyUrls;
