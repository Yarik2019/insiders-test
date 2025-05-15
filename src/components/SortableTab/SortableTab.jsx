import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

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
    zIndex: isDragging ? 50 : "auto",
    boxShadow: isDragging ? "0 4px 12px rgba(0, 0, 0, 0.15)" : "none",
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
      className={`flex items-center border cursor-pointer select-none ${
        activeTab === tab.id ? "bg-blue-100 border-blue-400" : "bg-white"
      } ${isDragging ? "scale-105" : ""}`}
    >
      <div
        className={`flex items-center gap-2.5 px-3 py-3 transition-all duration-300 ${
          isDragging ? "text-white" : "text-gray-700 hover:text-black"
        }`}
      >
        {tab.icon && <tab.icon className="w-4 h-4" />}
        <span>{tab.title}</span>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPin(tab.id);
        }}
        title="Pin"
        className="text-gray-500 hover:text-blue-600 px-2"
      >
        {tab.pinned ? "📌" : "📍"}
      </button>
    </div>
  );
};

export default SortableTab;
