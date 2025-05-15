import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// const TabIcon = ({ Icon }) => (
//   <Icon className="w-4 h-4 text-gray hover:text-black  transition-all duration-300" />
// );

const SortableTab = ({ tab, activeTab, onClick, onPin }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: tab.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : "auto", // на верх при перетягуванні
    boxShadow: isDragging ? "0 4px 12px rgba(0, 0, 0, 0.15)" : "none", // додаємо тінь при перетягуванні
    // opacity: isDragging ? 0.8 : 1, // трохи прозорий
    backgroundColor: isDragging
      ? "#7F858D"
      : activeTab === tab.id
      ? "#DBEAFE"
      : "#FFFFFF",
    color: isDragging
      ? "#FFFFFF"
      : activeTab === tab.id
      ? "#1E3A8A"
      : "#000000",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={() => onClick(tab)}
      className={`flex items-center gap-2 px-4 py-2 rounded border cursor-pointer select-none ${
        activeTab === tab.id ? "bg-blue-100 border-blue-400" : "bg-white"
      } ${isDragging ? "scale-105" : ""}`}
    >
      <div
        className={`flex items-center gap-2.5  transition-all duration-300 ${
          isDragging ? "text-white" : "text-gray hover:text-black"
        }`}
      >
        {tab.icon && <tab.icon className={`w-4 h-4  `} />}
        <span>{tab.title}</span>
      </div>

      {/* Pin */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPin(tab.id);
        }}
        title="Pin"
        className="text-gray-500 hover:text-blue-600"
      >
        {tab.pinned ? "📌" : "📍"}
      </button>
    </div>
  );
};

export default SortableTab;
