import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { motion, AnimatePresence } from "framer-motion";

import SortableTab from "../SortableTab/SortableTab";
import { defaultTabs } from "../../utils/data";

import { usePersistedTabs } from "../../hooks/usePersistedTabs";
import { useActiveTab } from "../../hooks/useActiveTab";
import { useTabsOverflow } from "../../hooks/useTabsOverflow";
import { Menu, X, MoreHorizontal } from "lucide-react";

const TabsContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [overflowOpen, setOverflowOpen] = useState(false);

  const [tabs, setTabs] = usePersistedTabs(defaultTabs, location.pathname);
  const [activeTab, setActiveTab] = useActiveTab(tabs, location.pathname);
  const { containerRef, overflowTabs } = useTabsOverflow(tabs);

  const handleTabClick = (tab) => {
    setActiveTab(tab.id);
    navigate(tab.url);
    setMenuOpen(false);
    setOverflowOpen(false);
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
    <div className="relative bg-white z-10">
      {/* Desktop Tabs */}
      <div ref={containerRef} className="hidden md:flex items-center">
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
          <div className="relative ml-auto shrink-0">
            <button
              onClick={() => setOverflowOpen(!overflowOpen)}
              className="flex items-center gap-1 px-2 py-3 text-sm rounded bg-gray-100 hover:bg-gray-200 transition"
            >
              <MoreHorizontal size={18} />
              More
            </button>

            {overflowOpen && (
              <div className="absolute right-0 mt-2 bg-white rounded-md shadow-xl w-52 z-50 border border-gray-200">
                {overflowTabs.map((tab) => (
                  <div
                    key={tab.id}
                    onClick={() => handleTabClick(tab)}
                    className={`flex items-center justify-between px-4 py-2 cursor-pointer transition-colors duration-200 rounded-md ${
                      tab.id === activeTab
                        ? "bg-gray-200 text-black"
                        : "text-gray-700 hover:text-black"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {tab.icon && <tab.icon className="w-4 h-4" />}
                      <span className="text-sm truncate">{tab.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Burger */}
      <div className="flex md:hidden items-center justify-between px-4 py-2 bg-white z-20">
        <span className="font-semibold text-gray-700 text-lg">Tabs</span>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded hover:bg-gray-100"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden relative bg-white shadow-sm z-40 overflow-hidden"
          >
            {tabs.map((tab) => (
              <li
                key={tab.id}
                onClick={() => handleTabClick(tab)}
                className={` px-4 py-3 text-sm cursor-pointer hover:bg-gray-100 ${
                  tab.id === activeTab ? "bg-gray-200 font-semibold" : ""
                }`}
              >
                <span>{tab.title}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TabsContainer;
