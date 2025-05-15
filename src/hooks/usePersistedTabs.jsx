import { useEffect, useState } from "react";
import { iconMap } from "../utils/iconMap";
import { defaultTabs } from "../utils/data";

export function usePersistedTabs() {
  const [tabs, setTabs] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("tabs"));
    if (stored?.length) {
      return stored.map((tab) => ({
        ...tab,
        icon: iconMap[tab.icon] || iconMap.FaQuestionCircle,
        iconName: tab.icon,
      }));
    }

    return defaultTabs.map((tab) => ({
      ...tab,
      icon: iconMap[tab.icon],
      iconName: tab.icon,
    }));
  });

  useEffect(() => {
    const tabsToStore = tabs.map(({ iconName, ...rest }) => ({
      ...rest,
      icon: iconName,
    }));
    localStorage.setItem("tabs", JSON.stringify(tabsToStore));
  }, [tabs]);

  return [tabs, setTabs];
}
