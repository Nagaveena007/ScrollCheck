import { useState, useEffect } from "react";

const usePageBottomPercentage = () => {
  const [reachedBottomPercentage, setReachedBottomPercentage] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const offsetHeight = document.documentElement.offsetHeight;
      const innerHeight = window.innerHeight;
      const scrollTop = document.documentElement.scrollTop;

      const PageScrolledInPercentage = offsetHeight - (innerHeight + scrollTop);

      setReachedBottomPercentage(PageScrolledInPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return reachedBottomPercentage;
};

export default usePageBottomPercentage;
