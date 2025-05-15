import { useEffect, useState } from "react";

export function useActiveTab(tabs, locationPathname) {
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const foundTab = tabs.find((t) => t.url === locationPathname);
    if (foundTab) setActiveTab(foundTab.id);
  }, [tabs, locationPathname]);

  return [activeTab, setActiveTab];
}
