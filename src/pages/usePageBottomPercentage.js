import { useState, useEffect } from "react";

const usePageBottomPercentage = () => {
  const [reachedBottomPercentage, setReachedBottomPercentage] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const offsetHeight = document.documentElement.offsetHeight;
      const innerHeight = window.innerHeight;
      const scrollTop = document.documentElement.scrollTop;

      const hasReachedBottomPersentage = offsetHeight - (innerHeight + scrollTop);

      setReachedBottomPercentage(hasReachedBottomPersentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return reachedBottomPercentage;
};

export default usePageBottomPercentage;
