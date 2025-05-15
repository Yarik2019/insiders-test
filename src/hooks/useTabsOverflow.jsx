import { useEffect, useState, useRef } from "react";

export function useTabsOverflow(tabs) {
  const containerRef = useRef(null);
  const [overflowTabs, setOverflowTabs] = useState([]);

  useEffect(() => {
    const resizeHandler = () => {
      const containerWidth = containerRef.current?.offsetWidth || 0;
      let used = 0;
      const visible = [];
      const overflow = [];

      tabs.forEach((tab) => {
        const width = tab.pinned ? 120 : 150;
        if (used + width < containerWidth - 150) {
          used += width;
          visible.push(tab);
        } else {
          overflow.push(tab);
        }
      });

      setOverflowTabs(overflow);
    };

    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, [tabs]);

  return { containerRef, overflowTabs };
}
