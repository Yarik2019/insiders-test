// import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";

import SortableTab from "../SortableTab/SortableTab";
import { defaultTabs } from "../../utils/data";

import { usePersistedTabs } from "../../hooks/usePersistedTabs";
import { useActiveTab } from "../../hooks/useActiveTab";
import { useTabsOverflow } from "../../hooks/useTabsOverflow";
// import { Menu, X } from "lucide-react";

const TabsContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const [menuOpen, setMenuOpen] = useState(false);

  const [tabs, setTabs] = usePersistedTabs(defaultTabs, location.pathname);
  const [activeTab, setActiveTab] = useActiveTab(tabs, location.pathname);
  const { containerRef, overflowTabs } = useTabsOverflow(tabs);

  const handleTabClick = (tab) => {
    setActiveTab(tab.id);
    navigate(tab.url);
    // setMenuOpen(false);
  };

  const handlePin = (id) => {
    setTabs((prev) =>
      prev.map((t) => (t.id === id ? { ...t, pinned: !t.pinned } : t))
    );
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    if (active.id !== over.id) {
      const oldIndex = tabs.findIndex((t) => t.id === active.id);
      const newIndex = tabs.findIndex((t) => t.id === over.id);

      const newTabs = arrayMove(tabs, oldIndex, newIndex);
      setTabs(newTabs);

      const draggedTab = newTabs.find((t) => t.id === active.id);
      if (draggedTab) {
        setActiveTab(draggedTab.id);
        navigate(draggedTab.url);
      }
    }
  };

  const visibleTabs = tabs.filter((tab) => !overflowTabs.includes(tab));

  return (
    <div className="relative border-b shadow-sm bg-white">
      {/* Desktop Tabs */}
      <div
        ref={containerRef}
        className="hidden md:flex items-center gap-2 px-4 py-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300"
      >
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={visibleTabs.map((t) => t.id)}
            strategy={horizontalListSortingStrategy}
          >
            {visibleTabs.map((tab) => (
              <SortableTab
                key={tab.id}
                tab={tab}
                activeTab={activeTab}
                onClick={handleTabClick}
                onPin={handlePin}
              />
            ))}
          </SortableContext>
        </DndContext>

        {overflowTabs.length > 0 && (
          <div className="relative group ml-auto shrink-0">
            <button className="px-2 py-1 text-sm border rounded bg-gray-100 hover:bg-gray-200 transition">
              More
            </button>
            <div className="absolute right-0 z-10 hidden mt-1 bg-white border rounded shadow-md w-48 group-hover:block">
              {overflowTabs.map((tab) => (
                <div
                  key={tab.id}
                  onClick={() => handleTabClick(tab)}
                  className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm whitespace-nowrap"
                >
                  <span>{tab.title}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Burger */}
      {/* <div className="flex md:hidden items-center justify-between px-4 py-2 border-b bg-white">
        <span className="font-semibold text-gray-700 text-lg">Tabs</span>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded hover:bg-gray-100"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div> */}

      {/* Mobile Menu List */}
      {/* {menuOpen && (
        <div className="md:hidden border-t bg-white shadow-sm">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => handleTabClick(tab)}
              className={`px-4 py-3 border-b text-sm cursor-pointer hover:bg-gray-100 ${
                tab.id === activeTab ? "bg-gray-200 font-semibold" : ""
              }`}
            >
              {tab.title}
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default TabsContainer;
