import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Automatically scroll to top of the page on transition
const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return null;
};

export default ScrollTop;
