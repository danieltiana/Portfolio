import React from "react";
import { X } from "lucide-react";

interface WindowProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Window({ title, isOpen, onClose, children }: WindowProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-950 animate-window-open">
      <div className="h-12 bg-gray-900/80 backdrop-blur-xl border-b border-gray-800 flex items-center justify-between px-4">
        <h2 className="text-gray-200 font-medium">{title}</h2>
        <button onClick={onClose} className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="p-6 h-[calc(100vh-7rem)] overflow-auto">{children}</div>
    </div>
  );
}
