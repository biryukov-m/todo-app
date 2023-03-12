import { useEffect, useState } from 'react';

export const useViewPortWidth = (initialWidth: number) => {
  const [viewPortWidth, setViewPortWidth] = useState(initialWidth);

  const windowResizeHandler = () => setViewPortWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', windowResizeHandler);
    return function removeListeners() {
      window.removeEventListener('resize', windowResizeHandler);
    };
  }, []);

  return viewPortWidth;
};
