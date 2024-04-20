import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Joseph Meadowcroft
        </motion.span>
        <div className="socials">
          <a href="https://github.com/josephmeadowcroft" target="_blank">
            <img src="/github.png" alt="" />
          </a>
          <a
            href="https://uk.linkedin.com/in/joseph-meadowcroft-1430a42ba"
            target="_blank"
          >
            <img src="/linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
