import { useEffect, useRef } from "react";

export default function useDebounce(callBack, delay) {
  const timeoutIdRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  const debouncedCallback = (...args) => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }

    timeoutIdRef.current = setTimeout(() => {
      callBack(...args);
    }, delay);
  };

  return debouncedCallback;
}
