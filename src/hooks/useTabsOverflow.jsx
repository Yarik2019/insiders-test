import { useEffect, useState, useRef } from "react";

export function useTabsOverflow(tabs) {
  const containerRef = useRef(null);
  const [overflowTabs, setOverflowTabs] = useState([]);

  useEffect(() => {
    const resizeHandler = () => {
      const containerWidth = containerRef.current?.offsetWidth || 0;
      const moreButtonWidth = 100; // припустимо, що кнопка "More" займає ~100px
      let usedWidth = 0;
      const visible = [];
      const overflow = [];

      // Розбиваємо таби на видимі і переповнені, враховуючи ширину контейнера і кнопку "More"
      tabs.forEach((tab) => {
        const tabWidth = tab.pinned ? 120 : 150; // ширина табу можна кастомізувати
        if (usedWidth + tabWidth < containerWidth - moreButtonWidth) {
          usedWidth += tabWidth;
          visible.push(tab);
        } else {
          overflow.push(tab);
        }
      });

      // Якщо переповнених табів немає, то кнопку "More" не потрібно враховувати і можна показати всі
      if (overflow.length === 0 && usedWidth > containerWidth) {
        // У випадку, коли всі таби поміщаються, але загальна ширина більша за контейнер, зробимо всі видимими
        setOverflowTabs([]);
      } else {
        setOverflowTabs(overflow);
      }
    };

    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, [tabs]);

  return { containerRef, overflowTabs };
}
