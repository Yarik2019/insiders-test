import { useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "tabsState";

export function usePersistedTabs(defaultTabs, locationPathname) {
  const [tabs, setTabs] = useState([]);
  console.log(locationPathname);

  // Завантаження табів з localStorage або дефолтних при ініціалізації
  useEffect(() => {
    const savedTabs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    setTabs(savedTabs || defaultTabs);
  }, [defaultTabs]);

  // Збереження табів у localStorage при зміні tabs
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tabs));
  }, [tabs]);

  return [tabs, setTabs];
}
