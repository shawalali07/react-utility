import { useEffect } from 'react';

const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const handler = (e) => {
      if (!ref.current.contains(e.target)) {
        callback();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);
};

export default useClickOutside;
