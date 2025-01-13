import { useEffect, useState } from "react";

const useMobileScreen = (breakpoint = 640) => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    // Initial check
    const checkMobileScreen = () => {
      setIsMobileScreen(window.innerWidth < breakpoint);
    };

    // Add debouncing to prevent excessive updates
    let timeoutId;
    const debouncedCheck = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobileScreen, 100);
    };

    // Check initial size
    checkMobileScreen();

    // Add event listener
    window.addEventListener("resize", debouncedCheck);

    // Cleanup
    return () => {
      window.removeEventListener("resize", debouncedCheck);
      clearTimeout(timeoutId);
    };
  }, [breakpoint]);

  return isMobileScreen;
};

export default useMobileScreen;
